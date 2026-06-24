"use client";

import { useEffect } from "react";

/* Ports the original vanilla interactions into a single client effect so the
   server-rendered markup and design stay byte-for-byte identical:
   - sticky header blur on scroll
   - mobile nav toggle
   - click-to-copy with toast (aria-live) + icon/label swap
   - OS-detecting, keyboard-navigable install tabs
   - scroll reveal (IntersectionObserver)
   - hero terminal typing animation
   All listeners/timers/observers are cleaned up on unmount. */

type Line = { cls: string; text: string; html?: string; delay: number; pause: number };

const LINES: Line[] = [
  { cls: "text-ink", text: "$ gity add", html: '<span class="text-emerald">$</span> gity add', delay: 26, pause: 360 },
  { cls: "text-sky", text: "◇ Profile name … work", delay: 16, pause: 260 },
  { cls: "text-sky", text: "◇ Email … jane@company.com", delay: 16, pause: 260 },
  { cls: "text-sky", text: "◇ Folder … ~/Development/work", delay: 16, pause: 260 },
  { cls: "text-sky", text: "◇ Generate SSH key? … Yes", delay: 16, pause: 340 },
  {
    cls: "text-emerald",
    text: "✓ Done. Repos under ~/Development/work use jane@company.com automatically.",
    delay: 10,
    pause: 600,
  },
  { cls: "blank", text: "", delay: 0, pause: 200 },
  { cls: "text-ink", text: "$ gity test", html: '<span class="text-emerald">$</span> gity test', delay: 26, pause: 360 },
  { cls: "text-emerald", text: "✓ work — authenticated as jane-at-work", delay: 14, pause: 220 },
  { cls: "text-emerald", text: "✓ personal — authenticated as jane-personal", delay: 14, pause: 1600 },
];

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function SiteInteractions() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- Sticky header blur on scroll ---------- */
    const header = document.querySelector<HTMLElement>(".site-header");
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 8) header.classList.add("is-scrolled");
        else header.classList.remove("is-scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    if (navToggle && navLinks) {
      const onToggle = () => {
        const open = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(open));
      };
      const onLinkClick = (e: Event) => {
        if ((e.target as HTMLElement).closest("a")) {
          navLinks.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      };
      navToggle.addEventListener("click", onToggle);
      navLinks.addEventListener("click", onLinkClick);
      cleanups.push(() => navToggle.removeEventListener("click", onToggle));
      cleanups.push(() => navLinks.removeEventListener("click", onLinkClick));
    }

    /* ---------- Copy to clipboard ---------- */
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    let toastTimer: ReturnType<typeof setTimeout> | null = null;

    const showToast = (message: string) => {
      if (!toast || !toastText) return;
      toastText.textContent = message;
      toast.classList.add("show");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
    };

    const copyText = (text: string): Promise<void> => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      }
      return new Promise((resolve, reject) => {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.setAttribute("readonly", "");
          ta.style.position = "absolute";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    };

    const copyEls = Array.from(document.querySelectorAll<HTMLElement>("[data-copy]"));
    const copyHandlers: Array<{ el: HTMLElement; fn: () => void }> = [];
    copyEls.forEach((el) => {
      const fn = () => {
        const text = el.getAttribute("data-copy") || "";
        copyText(text).then(
          () => {
            showToast("Copied to clipboard");
            el.classList.add("copied");
            const copyIcon = el.querySelector<HTMLElement>(".icon-copy");
            const checkIcon = el.querySelector<HTMLElement>(".icon-check");
            if (copyIcon && checkIcon) {
              copyIcon.hidden = true;
              checkIcon.hidden = false;
            }
            const label = el.querySelector<HTMLElement>(".copy-btn__label");
            const prevLabel = label ? label.textContent : null;
            if (label) label.textContent = "Copied";

            setTimeout(() => {
              el.classList.remove("copied");
              if (copyIcon && checkIcon) {
                copyIcon.hidden = false;
                checkIcon.hidden = true;
              }
              if (label && prevLabel) label.textContent = prevLabel;
            }, 1600);
          },
          () => showToast("Press ⌘/Ctrl+C to copy")
        );
      };
      el.addEventListener("click", fn);
      copyHandlers.push({ el, fn });
    });
    cleanups.push(() => copyHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn)));
    cleanups.push(() => {
      if (toastTimer) clearTimeout(toastTimer);
    });

    /* ---------- Install tabs + OS auto-detect ---------- */
    const tabs = Array.from(document.querySelectorAll<HTMLElement>(".tab"));
    const panels: Record<string, HTMLElement | null> = {
      macos: document.getElementById("panel-macos"),
      linux: document.getElementById("panel-linux"),
      windows: document.getElementById("panel-windows"),
    };

    const selectTab = (os: string, focus: boolean) => {
      tabs.forEach((tab) => {
        const isActive = tab.getAttribute("data-os") === os;
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        if (isActive && focus) tab.focus();
      });
      Object.keys(panels).forEach((key) => {
        if (panels[key]) panels[key]!.hidden = key !== os;
      });
    };

    const detectOS = (): string => {
      let ua = ((navigator.userAgent || "") + " " + (navigator.platform || "")).toLowerCase();
      if (ua.indexOf("win") !== -1) return "windows";
      if (ua.indexOf("linux") !== -1 || ua.indexOf("android") !== -1) return "linux";
      if (ua.indexOf("mac") !== -1 || ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) return "macos";
      return "macos";
    };

    const tabHandlers: Array<{ el: HTMLElement; type: string; fn: EventListener }> = [];
    if (tabs.length) {
      const detected = detectOS();
      selectTab(detected, false);

      const detectedTab = document.querySelector<HTMLElement>('.tab[data-os="' + detected + '"]');
      if (detectedTab && !detectedTab.querySelector(".tab__detected")) {
        const badge = document.createElement("span");
        badge.className =
          "tab__detected rounded-[5px] bg-emerald/[0.12] px-1.5 py-0.5 text-[0.68rem] font-bold tracking-[0.04em] text-emerald mobile:hidden";
        badge.textContent = "detected";
        detectedTab.appendChild(badge);
      }

      tabs.forEach((tab, i) => {
        const onClick = () => selectTab(tab.getAttribute("data-os") || "macos", false);
        const onKeydown = (ev: Event) => {
          const e = ev as KeyboardEvent;
          let idx = i;
          if (e.key === "ArrowRight" || e.key === "ArrowDown") idx = (i + 1) % tabs.length;
          else if (e.key === "ArrowLeft" || e.key === "ArrowUp") idx = (i - 1 + tabs.length) % tabs.length;
          else if (e.key === "Home") idx = 0;
          else if (e.key === "End") idx = tabs.length - 1;
          else return;
          e.preventDefault();
          selectTab(tabs[idx].getAttribute("data-os") || "macos", true);
        };
        tab.addEventListener("click", onClick);
        tab.addEventListener("keydown", onKeydown);
        tabHandlers.push({ el: tab, type: "click", fn: onClick });
        tabHandlers.push({ el: tab, type: "keydown", fn: onKeydown });
      });
    }
    cleanups.push(() => tabHandlers.forEach(({ el, type, fn }) => el.removeEventListener(type, fn)));

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- Hero terminal typing animation ---------- */
    const term = document.getElementById("hero-terminal");
    let stopped = false;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const wait = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        timers.delete(id);
        if (!stopped) fn();
      }, ms);
      timers.add(id);
    };

    const staticHtml = () =>
      LINES.map((l) => {
        if (l.cls === "blank") return "";
        const inner = l.html ? l.html : escapeHtml(l.text);
        return '<span class="' + l.cls + '">' + inner + "</span>";
      }).join("\n");

    if (term) {
      if (prefersReduced) {
        term.innerHTML = staticHtml();
      } else {
        const cursor =
          '<span class="inline-block w-2 h-[1.05em] bg-sky align-text-bottom ml-px animate-blink" aria-hidden="true"></span>';
        let completed: string[] = [];

        const render = (index: number, inProgressHtml: string | null) => {
          let parts: string[];
          if (inProgressHtml !== null && inProgressHtml !== undefined) {
            parts = completed.slice(0, index);
            parts.push(inProgressHtml);
          } else {
            parts = completed.slice(0, index + 1);
          }
          term.innerHTML = parts.join("\n");
        };

        const typeLine = (index: number) => {
          if (stopped) return;
          if (index >= LINES.length) {
            term.innerHTML = completed.join("\n");
            wait(() => {
              completed = [];
              term.innerHTML = "";
              typeLine(0);
            }, 4200);
            return;
          }

          const line = LINES[index];

          if (line.cls === "blank") {
            completed.push("");
            render(index, "");
            wait(() => typeLine(index + 1), line.pause);
            return;
          }

          const full = line.text;
          let pos = 0;
          const step = () => {
            pos++;
            const partial = escapeHtml(full.slice(0, pos));
            render(index, '<span class="' + line.cls + '">' + partial + "</span>" + cursor);
            if (pos < full.length) {
              wait(step, line.delay);
            } else {
              const finalInner = line.html ? line.html : escapeHtml(full);
              completed.push('<span class="' + line.cls + '">' + finalInner + "</span>");
              render(index, null);
              wait(() => typeLine(index + 1), line.pause);
            }
          };
          step();
        };

        typeLine(0);
      }
    }

    cleanups.push(() => {
      stopped = true;
      timers.forEach((id) => clearTimeout(id));
      timers.clear();
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

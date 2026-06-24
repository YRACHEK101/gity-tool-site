import type { SVGProps } from "react";

/* All icons are decorative by default (aria-hidden). Pass aria-hidden={false}
   + an aria-label to override. className / hidden / etc. spread onto the <svg>. */

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = { viewBox: "0 0 24 24", "aria-hidden": true };

export function IconGitHub(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
    </svg>
  );
}

export function IconNpm(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M0 7.3v9.4h6.6v1.6h4.9v-1.6H24V7.3H0Zm6.6 7.8H4.9v-4.7H3.3v4.7H1.6V8.9h5v6.2Zm5 0H9.9v1.6H8.2V8.9h4.7v6.2h-1.3Zm0-4.7H9.9v3.1h1.7v-3.1Zm10.8 4.7h-1.6v-4.7h-1.7v4.7h-1.6v-4.7h-1.7v4.7h-1.6V8.9h8.2v6.2Z" />
    </svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function IconCheck({ hidden, ...props }: IconProps & { hidden?: boolean }) {
  // `hidden` is a valid DOM attribute on <svg> (the copy-chip's check icon starts
  // hidden), but React's SVGAttributes types omit it — apply it via a spread.
  const hiddenAttr = (hidden ? { hidden: true } : {}) as unknown as IconProps;
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      {...hiddenAttr}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function IconInfo(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 16v-4M12 8h.01" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconApple(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.9-3-.9c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8Zm-2.3-7c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" />
    </svg>
  );
}

export function IconLinux(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M12.5 2c-1.6 0-2.7 1.4-2.7 3.2 0 .9.1 1.4.1 2.1 0 .7-.6 1.3-1.2 2.2-.7 1-1.6 2.2-2 3.9-.2.8-.3 1.6-.1 2.2-.3.3-.5.7-.6 1.1-.2.6-.1 1.2 0 1.7.1.4 0 .8-.1 1.1-.2.7-.3 1.3.1 1.7.4.4 1.1.4 1.9.4.7 0 1.2.2 1.7.4.5.2.9.4 1.5.4.4 0 .8-.1 1.1-.4.3-.3.5-.6.8-.8.5-.3 1.4-.6 2.3-.6s1.8.3 2.3.6c.3.2.5.5.8.8.3.3.7.4 1.1.4.6 0 1-.2 1.5-.4.5-.2 1-.4 1.7-.4.8 0 1.5 0 1.9-.4.4-.4.3-1 .1-1.7-.1-.3-.2-.7-.1-1.1.1-.5.2-1.1 0-1.7-.1-.4-.3-.8-.6-1.1.2-.6.1-1.4-.1-2.2-.4-1.7-1.3-2.9-2-3.9-.6-.9-1.2-1.5-1.2-2.2 0-.7.1-1.2.1-2.1C15.2 3.4 14.1 2 12.5 2Z" />
    </svg>
  );
}

export function IconWindows(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm0 13L10.5 19.6v-7H3v6Zm8.5 1.3L21 21V12.5h-9.5v7.3Zm0-15.6V11.5H21V3L11.5 4.2Z" />
    </svg>
  );
}

export function IconFolder(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M12 11v6M9 14h6" />
    </svg>
  );
}

export function IconKey(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2 20 3M16 7l3 3M14 9l2 2" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

export function IconLink(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 3a3 3 0 0 0-3 3c0 1.3.8 2.4 2 2.8V11a2 2 0 0 1-2 2H9a4 4 0 0 0-2 .5V8.8A3 3 0 0 0 6 3a3 3 0 0 0-1 5.8v6.4a3 3 0 1 0 2 0V15a2 2 0 0 1 2-2h6a4 4 0 0 0 4-4V8.8A3 3 0 0 0 18 3Z" />
    </svg>
  );
}

/* How-it-works routing diagram — one root folder fanning into three accounts. */
export function DiagramFork() {
  const mono = "JetBrains Mono, monospace";
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label="One root folder, ~/Development, routing into three accounts: work, personal, and freelance"
    >
      {/* root folder chip */}
      <rect x="102" y="15" width="116" height="36" rx="10" fill="#162338" stroke="#334155" strokeWidth={1.5} />
      <text x="160" y="38.5" textAnchor="middle" fill="#cbd5e1" fontFamily={mono} fontSize="11">
        ~/Development
      </text>
      {/* connectors */}
      <g fill="none" stroke="#475569" strokeWidth={3} strokeLinecap="round">
        <path d="M160 51 C160 104, 60 100, 60 130" />
        <path d="M160 51 L160 130" />
        <path d="M160 51 C160 104, 260 100, 260 130" />
      </g>
      {/* identity dots — the gity motif */}
      <circle cx="60" cy="149" r="20" fill="#38bdf8" opacity="0.14" />
      <circle cx="160" cy="149" r="20" fill="#34d399" opacity="0.14" />
      <circle cx="260" cy="149" r="20" fill="#fb923c" opacity="0.14" />
      <circle cx="60" cy="149" r="12" fill="#38bdf8" />
      <circle cx="160" cy="149" r="12" fill="#34d399" />
      <circle cx="260" cy="149" r="12" fill="#fb923c" />
      <text x="60" y="187" textAnchor="middle" fill="#38bdf8" fontFamily={mono} fontSize="11">work</text>
      <text x="160" y="187" textAnchor="middle" fill="#34d399" fontFamily={mono} fontSize="11">personal</text>
      <text x="260" y="187" textAnchor="middle" fill="#fb923c" fontFamily={mono} fontSize="11">freelance</text>
    </svg>
  );
}

import {
  IconGitHub,
  IconNpm,
  IconCopy,
  IconCheck,
  IconX,
  IconInfo,
  IconMenu,
  IconApple,
  IconLinux,
  IconWindows,
  IconFolder,
  IconKey,
  IconShield,
  IconGlobe,
  IconBolt,
  IconLink,
  DiagramFork,
} from "./icons";
import { SiteInteractions } from "./site-interactions";

const GH = "https://github.com/YRACHEK101/gity-tool";
const NPM = "https://www.npmjs.com/package/gity-tool";
const ISSUES = "https://github.com/YRACHEK101/gity-tool/issues";

const GITCONFIG = '[includeIf "gitdir:~/Development/work/"]\n\tpath = ~/.gitconfig-work';
const GITCONFIG_WORK =
  '[user]\n\tname = Jane Doe\n\temail = jane@company.com\n[core]\n\tsshCommand = "ssh -i ~/.ssh/id_ed25519_work -o IdentitiesOnly=yes"';

/* shared utility-class recipes */
const wrap = "mx-auto w-full max-w-container px-6 mobile:px-[18px]";
const section = "relative py-24 mobile:py-16";
const head = "mb-12";
const eyebrow = "mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-sky";
const title = "max-w-[22ch] text-[clamp(1.7rem,1.2rem+2.4vw,2.6rem)]";
const lead = "mt-4 max-w-[56ch] text-[1.05rem] text-muted";
const card = "rounded-[20px] border border-line bg-surface";
const btn =
  "inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[10px] border font-semibold leading-none transition-[transform,background-color,border-color,box-shadow] duration-150";
const btnSize = "px-[18px] py-[11px] text-[0.95rem]";
const btnLgSize = "px-6 py-3.5 text-[1.02rem]";
const btnGhost = "border-line text-ink hover:-translate-y-0.5 hover:border-subtle hover:bg-surface";
const btnNpm =
  "border-transparent bg-npm text-white hover:-translate-y-0.5 hover:bg-[#e0433f] hover:shadow-[0_10px_24px_-8px_rgba(203,56,55,0.5)]";
const bi = "h-[18px] w-[18px]";
const baChip = "whitespace-nowrap rounded-[5px] bg-muted/[0.13] px-1.5 py-px text-[0.84em] text-ink mobile:text-[0.74rem]";
const navLink =
  "rounded-lg px-3 py-2 text-[0.95rem] font-medium text-muted transition-[color,background-color] duration-150 hover:bg-surface hover:text-ink tablet:p-3 tablet:text-base";
const footLink =
  "rounded-lg px-3 py-2 text-[0.92rem] text-muted transition-[color,background-color] duration-150 hover:bg-surface hover:text-ink";
const tabCls =
  "tab flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[9px] border border-transparent px-3.5 py-[11px] text-[0.92rem] font-semibold text-muted transition-[color,background-color] duration-150 hover:text-ink aria-selected:border-line aria-selected:bg-surface aria-selected:text-ink mobile:flex-col mobile:gap-[5px] mobile:px-1 mobile:py-2.5 mobile:text-[0.82rem]";

function BrandLockup({ className = "", label }: { className?: string; label?: string }) {
  return (
    <span
      className={`inline-flex items-start leading-none text-ink ${className}`}
      {...(label ? { role: "img", "aria-label": label } : {})}
    >
      <span className="text-[1em] font-extrabold tracking-[-0.04em]">gity</span>
      <span className="ml-[0.24em] mt-[0.06em] inline-flex gap-[0.22em]" aria-hidden="true">
        <i className="block h-[0.3em] w-[0.3em] rounded-full bg-sky" />
        <i className="block h-[0.3em] w-[0.3em] rounded-full bg-emerald" />
        <i className="block h-[0.3em] w-[0.3em] rounded-full bg-orange" />
      </span>
    </span>
  );
}

function CopyChip() {
  return (
    <button
      data-copy="npm i -g gity-tool"
      aria-label="Copy install command: npm i -g gity-tool"
      className="group inline-flex cursor-pointer items-center gap-3 rounded-[10px] border border-line bg-night py-3 pl-4 pr-3.5 font-mono text-[0.95rem] text-ink transition-[border-color,background-color] duration-150 hover:border-sky hover:bg-[#0b1424] mobile:justify-center"
    >
      <span>
        <span className="select-none text-emerald">$</span> npm i -g gity-tool
      </span>
      <span className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[7px] border border-line bg-surface text-muted transition-[color,border-color] duration-150 group-[.copied]:border-emerald group-[.copied]:text-emerald">
        <IconCopy className="icon-copy h-4 w-4" />
        <IconCheck className="icon-check h-4 w-4" hidden />
      </span>
    </button>
  );
}

function CopyButton({ copy, className = "" }: { copy: string; className?: string }) {
  return (
    <button
      data-copy={copy}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-[7px] rounded-lg border border-line bg-surface px-3 py-2 text-[0.82rem] font-semibold text-muted transition-[color,border-color] duration-150 hover:border-subtle hover:text-ink [&.copied]:border-emerald [&.copied]:text-emerald ${className}`}
    >
      <IconCopy className="h-[15px] w-[15px]" />
      <span className="copy-btn__label">Copy</span>
    </button>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-[-60px] z-[200] rounded-lg bg-sky px-4 py-2.5 font-semibold text-night transition-[top] duration-200 focus:top-3"
      >
        Skip to content
      </a>

      {/* ============ HEADER / NAV ============ */}
      <header
        id="top"
        className="site-header sticky top-0 z-[100] border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-[250ms] [&.is-scrolled]:border-line-soft [&.is-scrolled]:bg-night/[0.72] [&.is-scrolled]:backdrop-blur-[14px] [&.is-scrolled]:backdrop-saturate-[1.6]"
      >
        <div className={wrap}>
          <nav className="flex h-[68px] items-center justify-between gap-4" aria-label="Primary">
            <a className="inline-flex items-center gap-2.5" href="#top" aria-label="gity — home">
              <BrandLockup className="text-[1.2rem]" />
            </a>

            <ul
              id="nav-links"
              className="m-0 flex list-none items-center gap-1.5 p-0 tablet:fixed tablet:inset-x-0 tablet:top-[68px] tablet:-translate-y-3 tablet:flex-col tablet:items-stretch tablet:gap-1 tablet:border-b tablet:border-line tablet:bg-night/95 tablet:px-6 tablet:pb-6 tablet:pt-4 tablet:pointer-events-none tablet:opacity-0 tablet:backdrop-blur-[14px] tablet:transition-[opacity,transform] tablet:duration-200 tablet:[&.open]:pointer-events-auto tablet:[&.open]:translate-y-0 tablet:[&.open]:opacity-100"
            >
              <li>
                <a className={navLink} href="#how">
                  How it works
                </a>
              </li>
              <li>
                <a className={navLink} href="#install">
                  Install
                </a>
              </li>
              <li>
                <a className={navLink} href="#commands">
                  Commands
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 tablet:mt-2 tablet:flex-col tablet:items-stretch">
                  <a className={`${btn} ${btnSize} ${btnGhost} tablet:justify-center`} href={GH} target="_blank" rel="noopener noreferrer">
                    <IconGitHub className={bi} />
                    GitHub
                  </a>
                  <a className={`${btn} ${btnSize} ${btnNpm} tablet:justify-center`} href={NPM} target="_blank" rel="noopener noreferrer">
                    <IconNpm className={bi} />
                    npm
                  </a>
                </div>
              </li>
            </ul>

            <button
              id="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded="false"
              aria-controls="nav-links"
              className="hidden h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[10px] border border-line bg-transparent text-ink tablet:inline-flex"
            >
              <IconMenu className="h-[22px] w-[22px]" />
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero-bg relative overflow-hidden pb-24 pt-[72px] mobile:pb-16 mobile:pt-12">
          <div className={wrap}>
            <div className="grid grid-cols-[1.05fr_1fr] items-center gap-14 wide:grid-cols-1 wide:gap-10">
              <div>
                <BrandLockup className="mb-5 text-[clamp(2rem,1.4rem+2.4vw,2.7rem)]" label="gity" />
                <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-sky/25 bg-sky/[0.08] px-3 py-1.5 text-[0.82rem] font-semibold text-sky">
                  <span className="h-[7px] w-[7px] rounded-full bg-emerald shadow-[0_0_0_3px_rgba(52,211,153,0.2)]" aria-hidden="true" />{" "}
                  Open source · MIT · 3 runtime deps
                </div>
                <h1 className="text-[clamp(2.3rem,1.4rem+4vw,3.7rem)] tracking-[-0.03em]">
                  One machine.
                  <br />
                  Every <span className="text-sky">GitHub</span> account.
                  <br />
                  Zero <span className="text-orange">mix-ups</span>.
                </h1>
                <p className="mt-[22px] max-w-[50ch] text-[1.15rem] text-muted">
                  gity auto-selects the right Git name, email, and SSH key based on the folder your repo lives in — using
                  Git&apos;s own{" "}
                  <code className="whitespace-nowrap rounded-md border border-line bg-surface px-[7px] py-px text-[0.9em] text-ink">
                    includeIf
                  </code>
                  . No manual switching, ever.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5 mobile:flex-col mobile:items-stretch">
                  <CopyChip />
                  <a
                    className={`${btn} ${btnLgSize} ${btnGhost} mobile:justify-center`}
                    href={GH}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGitHub className={bi} />
                    View on GitHub
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-5 text-[0.88rem] text-subtle">
                  <span className="inline-flex items-center gap-[7px]">
                    <IconCheck className="h-4 w-4 text-emerald" /> Non-destructive — only appends to ~/.gitconfig
                  </span>
                  <span className="inline-flex items-center gap-[7px]">
                    <IconCheck className="h-4 w-4 text-emerald" /> macOS · Linux · Windows
                  </span>
                </div>
              </div>

              {/* Animated terminal */}
              <div
                className="flex min-h-[340px] flex-col overflow-hidden rounded-[20px] border border-line bg-term shadow-glow"
                aria-hidden={false}
              >
                <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
                  <div className="flex gap-[7px]">
                    <span className="block h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="block h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="block h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="ml-2 font-mono text-[0.8rem] text-subtle">zsh — gity</span>
                </div>
                <pre
                  id="hero-terminal"
                  aria-label="Example gity session"
                  className="m-0 min-h-[280px] flex-1 whitespace-pre-wrap break-words px-[22px] py-5 font-mono text-[0.86rem] leading-[1.85] text-ink"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM → SOLUTION ============ */}
        <section className={section} id="why">
          <div className={wrap}>
            <div className={`${head} reveal`}>
              <span className={eyebrow}>The problem</span>
              <h2 className={title}>Multiple accounts. One machine. Constant identity leaks.</h2>
              <p className={lead}>
                Work, personal, freelance — the moment several GitHub accounts share a computer, commits go out with the
                wrong email and pushes use the wrong key. gity makes the rule simple: a folder is an account.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 tablet:grid-cols-1">
              <article className={`${card} reveal p-7 mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-[18px] inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-400/10 px-[11px] py-[5px] text-[0.78rem] font-bold uppercase tracking-[0.08em] text-red-300">
                  Before
                </span>
                <h3 className="mb-4 text-[1.25rem]">Fragile, manual, easy to forget</h3>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconX className="mt-[3px] h-[18px] w-[18px] shrink-0 text-red-400" />
                    <span className="min-w-0 leading-[1.55]">
                      Wrong-email commits leak your work identity into personal repos (and vice-versa).
                    </span>
                  </li>
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconX className="mt-[3px] h-[18px] w-[18px] shrink-0 text-red-400" />
                    <span className="min-w-0 leading-[1.55]">
                      <code className={baChip}>Permission denied (publickey)</code> because the wrong SSH key is offered
                      first.
                    </span>
                  </li>
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconX className="mt-[3px] h-[18px] w-[18px] shrink-0 text-red-400" />
                    <span className="min-w-0 leading-[1.55]">
                      Brittle <code className={baChip}>~/.ssh/config</code> host aliases like{" "}
                      <code className={baChip}>git@github-work</code> you must remember to use.
                    </span>
                  </li>
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconX className="mt-[3px] h-[18px] w-[18px] shrink-0 text-red-400" />
                    <span className="min-w-0 leading-[1.55]">
                      Running <code className={baChip}>git config user.email …</code> by hand in every single repo.
                    </span>
                  </li>
                </ul>
              </article>

              <article className={`${card} reveal p-7 mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-[18px] inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-[11px] py-[5px] text-[0.78rem] font-bold uppercase tracking-[0.08em] text-emerald">
                  After
                </span>
                <h3 className="mb-4 text-[1.25rem]">Decide once. It just works.</h3>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconCheck className="mt-[3px] h-[18px] w-[18px] shrink-0 text-emerald" />
                    <span className="min-w-0 leading-[1.55]">Decide once that a folder maps to an account — gity does the rest.</span>
                  </li>
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconCheck className="mt-[3px] h-[18px] w-[18px] shrink-0 text-emerald" />
                    <span className="min-w-0 leading-[1.55]">
                      gity wires <code className={baChip}>includeIf</code> + a dedicated SSH key per profile.
                    </span>
                  </li>
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconCheck className="mt-[3px] h-[18px] w-[18px] shrink-0 text-emerald" />
                    <span className="min-w-0 leading-[1.55]">
                      Keep using normal <code className={baChip}>git@github.com:owner/repo.git</code> URLs — no host
                      aliases.
                    </span>
                  </li>
                  <li className="flex gap-3 text-[0.96rem] text-muted">
                    <IconCheck className="mt-[3px] h-[18px] w-[18px] shrink-0 text-emerald" />
                    <span className="min-w-0 leading-[1.55]">The correct name, email, and key are selected automatically by location.</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className={section} id="how">
          <div className={wrap}>
            <div className={`${head} reveal`}>
              <span className={eyebrow}>How it works</span>
              <h2 className={title}>A folder is an account. Git&apos;s own includeIf does the switching.</h2>
              <p className={lead}>
                gity makes two append-only changes to your Git config. There&apos;s no daemon, no database, no wrapper
                around git — just plain config files Git already understands.
              </p>
            </div>

            <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-10 wide:grid-cols-1 wide:gap-7">
              <div className={`${card} reveal px-6 py-8 [&_svg]:h-auto [&_svg]:w-full`}>
                <DiagramFork />

                <div className="mt-[22px] flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-mono text-[0.82rem]">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-sky" />
                    <span>
                      <span className="text-ink">~/Development/work/*</span> <span className="text-subtle">→</span>{" "}
                      <span className="text-muted">you@company.com + id_ed25519_work</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[0.82rem]">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <span className="text-ink">~/Development/personal/*</span> <span className="text-subtle">→</span>{" "}
                      <span className="text-muted">you@gmail.com + id_ed25519_personal</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[0.82rem]">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-orange" />
                    <span>
                      <span className="text-ink">~/Development/freelance/*</span> <span className="text-subtle">→</span>{" "}
                      <span className="text-muted">you@freelance.dev + id_ed25519_freelance</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="reveal">
                <div className="flex flex-col gap-5">
                  <div className="overflow-hidden rounded-[14px] border border-line bg-term">
                    <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-3.5 py-[11px]">
                      <span className="font-mono text-[0.82rem] text-muted">~/.gitconfig</span>
                      <CopyButton copy={GITCONFIG} />
                    </div>
                    <pre className="m-0 overflow-x-auto px-[18px] py-4 text-[0.82rem] leading-[1.8] text-ink">
                      <span className="text-sky">[includeIf &quot;gitdir:~/Development/work/&quot;]</span>
                      {"\n  "}
                      <span className="text-orange">path</span>
                      {" = "}
                      <span className="text-emerald">~/.gitconfig-work</span>
                    </pre>
                  </div>

                  <div className="overflow-hidden rounded-[14px] border border-line bg-term">
                    <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-3.5 py-[11px]">
                      <span className="font-mono text-[0.82rem] text-muted">~/.gitconfig-work</span>
                      <CopyButton copy={GITCONFIG_WORK} />
                    </div>
                    <pre className="m-0 overflow-x-auto px-[18px] py-4 text-[0.82rem] leading-[1.8] text-ink">
                      <span className="text-sky">[user]</span>
                      {"\n  "}
                      <span className="text-orange">name</span>
                      {" = "}
                      <span className="text-emerald">Jane Doe</span>
                      {"\n  "}
                      <span className="text-orange">email</span>
                      {" = "}
                      <span className="text-emerald">jane@company.com</span>
                      {"\n"}
                      <span className="text-sky">[core]</span>
                      {"\n  "}
                      <span className="text-orange">sshCommand</span>
                      {" = "}
                      <span className="text-emerald">&quot;ssh -i ~/.ssh/id_ed25519_work -o IdentitiesOnly=yes&quot;</span>
                    </pre>
                  </div>
                </div>

                <p className="mt-[22px] flex items-start gap-3 rounded-[14px] border border-sky/20 bg-sky/[0.06] px-[18px] py-4 text-[0.95rem] text-muted">
                  <IconInfo className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  <span>
                    <code className="whitespace-nowrap text-[0.9em] text-ink">IdentitiesOnly=yes</code> forces SSH to use
                    only that key — no more &quot;wrong key offered first.&quot;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INSTALL ============ */}
        <section className={section} id="install">
          <div className={wrap}>
            <div className={`${head} reveal text-center`}>
              <span className={eyebrow}>Install</span>
              <h2 className={`${title} mx-auto`}>One command on every platform</h2>
              <p className={`${lead} mx-auto`}>
                Needs Node.js ≥ 18 and an OpenSSH client. We detect your OS automatically — switch tabs anytime.
              </p>
            </div>

            <div
              className="reveal mx-auto max-w-[760px] overflow-hidden rounded-[20px] border border-line bg-surface"
              role="region"
              aria-label="Install instructions by operating system"
            >
              <div className="flex gap-1 border-b border-line bg-night p-2 mobile:gap-0.5 mobile:p-1.5" role="tablist" aria-label="Operating system">
                <button className={tabCls} role="tab" id="tab-macos" aria-controls="panel-macos" aria-selected="true" data-os="macos">
                  <IconApple className="h-[17px] w-[17px]" />
                  macOS
                </button>
                <button
                  className={tabCls}
                  role="tab"
                  id="tab-linux"
                  aria-controls="panel-linux"
                  aria-selected="false"
                  data-os="linux"
                  tabIndex={-1}
                >
                  <IconLinux className="h-[17px] w-[17px]" />
                  Linux
                </button>
                <button
                  className={tabCls}
                  role="tab"
                  id="tab-windows"
                  aria-controls="panel-windows"
                  aria-selected="false"
                  data-os="windows"
                  tabIndex={-1}
                >
                  <IconWindows className="h-[17px] w-[17px]" />
                  Windows
                </button>
              </div>

              <div className="p-[26px] mobile:p-5" role="tabpanel" id="panel-macos" aria-labelledby="tab-macos">
                <div className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-term py-3.5 pl-[18px] pr-3.5 mobile:flex-col mobile:items-stretch mobile:gap-3">
                  <code className="overflow-x-auto text-[0.95rem] text-ink">
                    <span className="mr-2 select-none text-emerald">$</span>npm install -g gity-tool
                  </code>
                  <CopyButton copy="npm install -g gity-tool" className="mobile:justify-center" />
                </div>
                <p className="mt-[18px] flex items-start gap-3 text-[0.92rem] text-muted">
                  <IconInfo className="mt-[3px] h-[18px] w-[18px] shrink-0 text-subtle" />
                  <span>
                    Get Node via{" "}
                    <code className="whitespace-nowrap rounded-[5px] border border-line bg-night px-1.5 py-px text-[0.86em] text-ink">
                      brew install node
                    </code>
                    . OpenSSH is built in on macOS.
                  </span>
                </p>
              </div>

              <div className="p-[26px] mobile:p-5" role="tabpanel" id="panel-linux" aria-labelledby="tab-linux" hidden>
                <div className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-term py-3.5 pl-[18px] pr-3.5 mobile:flex-col mobile:items-stretch mobile:gap-3">
                  <code className="overflow-x-auto text-[0.95rem] text-ink">
                    <span className="mr-2 select-none text-emerald">$</span>npm install -g gity-tool
                  </code>
                  <CopyButton copy="npm install -g gity-tool" className="mobile:justify-center" />
                </div>
                <p className="mt-[18px] flex items-start gap-3 text-[0.92rem] text-muted">
                  <IconInfo className="mt-[3px] h-[18px] w-[18px] shrink-0 text-subtle" />
                  <span>
                    Debian/Ubuntu:{" "}
                    <code className="whitespace-nowrap rounded-[5px] border border-line bg-night px-1.5 py-px text-[0.86em] text-ink">
                      sudo apt install nodejs npm openssh-client
                    </code>
                    . Fedora:{" "}
                    <code className="whitespace-nowrap rounded-[5px] border border-line bg-night px-1.5 py-px text-[0.86em] text-ink">
                      sudo dnf install nodejs openssh-clients
                    </code>
                    .
                  </span>
                </p>
              </div>

              <div className="p-[26px] mobile:p-5" role="tabpanel" id="panel-windows" aria-labelledby="tab-windows" hidden>
                <div className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-term py-3.5 pl-[18px] pr-3.5 mobile:flex-col mobile:items-stretch mobile:gap-3">
                  <code className="overflow-x-auto text-[0.95rem] text-ink">
                    <span className="mr-2 select-none text-emerald">PS&gt;</span>npm install -g gity-tool
                  </code>
                  <CopyButton copy="npm install -g gity-tool" className="mobile:justify-center" />
                </div>
                <p className="mt-[18px] flex items-start gap-3 text-[0.92rem] text-muted">
                  <IconInfo className="mt-[3px] h-[18px] w-[18px] shrink-0 text-subtle" />
                  <span>
                    Enable <strong>“OpenSSH Client”</strong> in Optional Features, or use Git Bash. Works in PowerShell,
                    CMD, and Git Bash.
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-[22px] text-center text-[0.92rem] text-subtle">
              The npm package is <code className="whitespace-nowrap text-sky">gity-tool</code> — the installed command is{" "}
              <code className="whitespace-nowrap text-sky">gity</code>.
            </p>
          </div>
        </section>

        {/* ============ QUICK START ============ */}
        <section className={section} id="quickstart">
          <div className={wrap}>
            <div className={`${head} reveal`}>
              <span className={eyebrow}>Quick start</span>
              <h2 className={title}>From install to authenticated in three steps</h2>
            </div>

            <div className="grid grid-cols-3 gap-6 tablet:grid-cols-1">
              <div className={`${card} reveal relative px-6 py-7 mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-[18px] inline-flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-sky/[0.12] font-mono text-[1.05rem] font-bold text-sky">
                  1
                </span>
                <h3 className="mb-2.5 text-[1.1rem]">
                  Run <code className="whitespace-nowrap rounded-[5px] border border-line bg-night px-1.5 py-px text-[0.88em] text-ink">gity add</code>
                </h3>
                <p className="text-[0.95rem] text-muted">
                  Answer a few prompts — profile name, full name, email, projects folder, and optional SSH key generation.
                </p>
              </div>
              <div className={`${card} reveal relative px-6 py-7 mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-[18px] inline-flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-emerald/[0.12] font-mono text-[1.05rem] font-bold text-emerald">
                  2
                </span>
                <h3 className="mb-2.5 text-[1.1rem]">Add the key to GitHub</h3>
                <p className="text-[0.95rem] text-muted">
                  Paste the printed public key into GitHub → <strong>Settings → SSH and GPG keys</strong>.
                </p>
              </div>
              <div className={`${card} reveal relative px-6 py-7 mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-[18px] inline-flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-orange/[0.12] font-mono text-[1.05rem] font-bold text-orange">
                  3
                </span>
                <h3 className="mb-2.5 text-[1.1rem]">
                  Run <code className="whitespace-nowrap rounded-[5px] border border-line bg-night px-1.5 py-px text-[0.88em] text-ink">gity test</code>
                </h3>
                <p className="text-[0.95rem] text-muted">
                  See <code className="whitespace-nowrap rounded-[5px] border border-line bg-night px-1.5 py-px text-[0.88em] text-ink">✓ authenticated</code> for each profile. You&apos;re done — start cloning into that folder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMMANDS REFERENCE ============ */}
        <section className={section} id="commands">
          <div className={wrap}>
            <div className={`${head} reveal`}>
              <span className={eyebrow}>Commands</span>
              <h2 className={title}>Three commands. That&apos;s the entire surface.</h2>
              <p className={lead}>
                No flags to memorize, no config syntax to learn. gity is a thin, friendly wrapper over Git&apos;s native
                behavior.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 tablet:grid-cols-1">
              <article className={`${card} reveal flex flex-col p-6 transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <div className="mb-1.5 flex items-center gap-2.5 font-mono text-[1.05rem] font-bold text-ink">gity add</div>
                <p className="mb-[18px] mt-2.5 text-[0.93rem] text-muted">
                  Interactive wizard: profile name, full name, email, projects folder, and optional SSH key generation.
                  Prints the public key to paste into GitHub.
                </p>
                <pre className="mt-[18px] overflow-x-auto rounded-[10px] border border-line bg-term p-3.5 font-mono text-[0.76rem] leading-[1.7] text-muted mobile:text-[0.74rem]">
                  <span className="text-emerald">$</span>
                  {" gity add\n◇ Profile name … "}
                  <span className="text-sky">work</span>
                  {"\n◇ Email … "}
                  <span className="text-orange">jane@company.com</span>
                  {"\n◇ Folder … ~/Development/work\n◇ Generate SSH key? … Yes\n"}
                  <span className="text-emerald">✓ Done.</span>
                </pre>
              </article>

              <article className={`${card} reveal flex flex-col p-6 transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <div className="mb-1.5 flex items-center gap-2.5 font-mono text-[1.05rem] font-bold text-ink">
                  gity list <span className="font-mono text-[0.78rem] font-medium text-subtle">/ ls</span>
                </div>
                <p className="mb-[18px] mt-2.5 text-[0.93rem] text-muted">
                  A table of all profiles — their folders, emails, and SSH key status — so you can see your whole setup at
                  a glance.
                </p>
                <div className="mt-[18px] overflow-x-auto rounded-[10px] border border-line bg-term p-3.5 font-mono text-[0.76rem] leading-[1.7] text-muted mobile:text-[0.74rem]">
                  <div className="mb-3 text-muted">
                    <span className="text-emerald">$</span> gity list
                  </div>
                  <table className="w-full border-collapse text-[0.96em] [&_tbody_tr:last-child_td]:border-b-0 [&_tbody_tr:last-child_td]:pb-0">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap border-b border-line pb-[7px] pr-3.5 text-left font-medium text-subtle [&:last-child]:pr-0">profile</th>
                        <th className="whitespace-nowrap border-b border-line pb-[7px] pr-3.5 text-left font-medium text-subtle [&:last-child]:pr-0">email</th>
                        <th className="whitespace-nowrap border-b border-line pb-[7px] pr-3.5 text-left font-medium text-subtle [&:last-child]:pr-0">key</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="whitespace-nowrap border-b border-line-soft py-1.5 pr-3.5 text-sky [&:last-child]:pr-0">work</td>
                        <td className="whitespace-nowrap border-b border-line-soft py-1.5 pr-3.5 text-muted [&:last-child]:pr-0">jane@company.com</td>
                        <td className="whitespace-nowrap border-b border-line-soft py-1.5 pr-3.5 text-emerald [&:last-child]:pr-0">✓ key</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap border-b border-line-soft py-1.5 pr-3.5 text-sky [&:last-child]:pr-0">personal</td>
                        <td className="whitespace-nowrap border-b border-line-soft py-1.5 pr-3.5 text-muted [&:last-child]:pr-0">jane@gmail.com</td>
                        <td className="whitespace-nowrap border-b border-line-soft py-1.5 pr-3.5 text-emerald [&:last-child]:pr-0">✓ key</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              <article className={`${card} reveal flex flex-col p-6 transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <div className="mb-1.5 flex items-center gap-2.5 font-mono text-[1.05rem] font-bold text-ink">
                  gity test <span className="font-mono text-[0.78rem] font-medium text-subtle">/ t</span>
                </div>
                <p className="mb-[18px] mt-2.5 text-[0.93rem] text-muted">
                  Verifies each profile authenticates with GitHub, so you know the right key reaches the right account
                  before you push.
                </p>
                <pre className="mt-[18px] overflow-x-auto rounded-[10px] border border-line bg-term p-3.5 font-mono text-[0.76rem] leading-[1.7] text-muted mobile:text-[0.74rem]">
                  <span className="text-emerald">$</span>
                  {" gity test\n"}
                  <span className="text-emerald">✓ work — authenticated as jane-at-work</span>
                  {"\n"}
                  <span className="text-emerald">✓ personal — authenticated as jane-personal</span>
                </pre>
              </article>
            </div>
          </div>
        </section>

        {/* ============ USE CASE SPOTLIGHT ============ */}
        <section className={section} id="usecase">
          <div className={wrap}>
            <div className={`${head} reveal`}>
              <span className={eyebrow}>Use case</span>
              <h2 className={title}>Work + personal on one laptop</h2>
            </div>

            <div className={`${card} reveal overflow-hidden`}>
              <div className="flex flex-wrap gap-3 px-8 pb-1 pt-[22px] mobile:px-5">
                <span className="inline-flex items-center gap-[9px] rounded-full border border-line bg-night px-[15px] py-2 text-[0.88rem] text-muted">
                  <span className="font-mono font-bold text-sky">1</span> Run <code className="font-mono">gity add</code> for work
                </span>
                <span className="inline-flex items-center gap-[9px] rounded-full border border-line bg-night px-[15px] py-2 text-[0.88rem] text-muted">
                  <span className="font-mono font-bold text-emerald">2</span> Run <code className="font-mono">gity add</code> for personal
                </span>
                <span className="inline-flex items-center gap-[9px] rounded-full border border-line bg-night px-[15px] py-2 text-[0.88rem] text-muted">
                  <span className="font-mono font-bold text-orange">3</span> Add each public key to the matching account
                </span>
              </div>

              <div className="mx-8 mb-8 mt-[22px] overflow-hidden rounded-[14px] border border-line bg-term mobile:mx-5">
                <pre className="m-0 overflow-x-auto px-[22px] py-5 text-[0.84rem] leading-[1.9] text-ink">
                  <span className="text-subtle"># work identity — selected because of the folder</span>
                  {"\n"}
                  <span className="text-emerald">$</span>
                  {" cd ~/Development/work && git clone "}
                  <span className="text-sky">git@github.com:company/api.git</span>
                  {"\n\n"}
                  <span className="text-subtle"># personal identity — same host, different folder</span>
                  {"\n"}
                  <span className="text-emerald">$</span>
                  {" cd ~/Development/personal && git clone "}
                  <span className="text-orange">git@github.com:jane/blog.git</span>
                </pre>
              </div>

              <p className="flex items-center gap-3 px-8 pb-[30px] text-[0.95rem] text-muted mobile:px-5">
                <IconCheck className="h-5 w-5 shrink-0 text-emerald" />
                <span>
                  Same <code className="whitespace-nowrap text-ink">git@github.com</code> URLs — gity picks the right key
                  per folder.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ============ FEATURES GRID ============ */}
        <section className={section} id="features">
          <div className={wrap}>
            <div className={`${head} reveal`}>
              <span className={eyebrow}>Why gity</span>
              <h2 className={title}>Small, sharp, and dependable by design</h2>
            </div>

            <div className="grid grid-cols-3 gap-[22px] tablet:grid-cols-1">
              <article className={`${card} reveal p-[26px] transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-sky/[0.12] text-sky">
                  <IconFolder className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.1rem]">Folder-based auto-switching</h3>
                <p className="text-[0.94rem] text-muted">
                  Identity follows location. Drop a repo in a folder and the right name, email, and key apply automatically.
                </p>
              </article>

              <article className={`${card} reveal p-[26px] transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-emerald/[0.12] text-emerald">
                  <IconKey className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.1rem]">Per-profile SSH keys</h3>
                <p className="text-[0.94rem] text-muted">
                  Each account gets its own key, pinned with{" "}
                  <code className="whitespace-nowrap text-ink">IdentitiesOnly=yes</code> so the wrong key is never offered.
                </p>
              </article>

              <article className={`${card} reveal p-[26px] transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-orange/[0.12] text-orange">
                  <IconShield className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.1rem]">Non-destructive config</h3>
                <p className="text-[0.94rem] text-muted">
                  gity only appends to <code className="whitespace-nowrap text-ink">~/.gitconfig</code> — it never rewrites
                  or removes your existing settings.
                </p>
              </article>

              <article className={`${card} reveal p-[26px] transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-sky/[0.12] text-sky">
                  <IconGlobe className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.1rem]">Cross-platform</h3>
                <p className="text-[0.94rem] text-muted">
                  macOS, Linux (Ubuntu/Debian/Fedora), and Windows (PowerShell, CMD, Git Bash). One tool everywhere.
                </p>
              </article>

              <article className={`${card} reveal p-[26px] transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-emerald/[0.12] text-emerald">
                  <IconBolt className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.1rem]">KISS — 3 deps, no DB</h3>
                <p className="text-[0.94rem] text-muted">
                  Three runtime dependencies, no database, no daemon. State is plain Git config files you can read.
                </p>
              </article>

              <article className={`${card} reveal p-[26px] transition-[transform,border-color] duration-[180ms] hover:-translate-y-1 hover:border-subtle mobile:px-5 mobile:py-[22px]`}>
                <span className="mb-4 inline-flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-orange/[0.12] text-orange">
                  <IconLink className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-[1.1rem]">MIT open source</h3>
                <p className="text-[0.94rem] text-muted">
                  Free and MIT licensed. Read the code, file an issue, or send a PR — it&apos;s all on GitHub.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className={section} id="get-started">
          <div className={wrap}>
            <div className="cta-bg reveal relative overflow-hidden rounded-[20px] border border-line px-8 py-16 text-center mobile:px-[22px] mobile:py-11">
              <h2 className="mx-auto max-w-[18ch] text-[clamp(1.8rem,1.2rem+3vw,2.8rem)]">
                Stop leaking identities. Start with one command.
              </h2>
              <p className="mt-4 text-[1.08rem] text-muted">
                Set a folder, run the wizard, push with confidence. gity handles the rest.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <CopyChip />
                <a className={`${btn} ${btnLgSize} ${btnNpm}`} href={NPM} target="_blank" rel="noopener noreferrer">
                  <IconNpm className={bi} />
                  View on npm
                </a>
                <a className={`${btn} ${btnLgSize} ${btnGhost}`} href={GH} target="_blank" rel="noopener noreferrer">
                  <IconGitHub className={bi} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="mt-6 border-t border-line py-12">
        <div className={wrap}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <BrandLockup className="text-[1.4rem]" label="gity" />
              <span className="text-[0.85rem] text-subtle">MIT © Yahia Rachek</span>
            </div>
            <nav className="flex flex-wrap gap-2" aria-label="Footer">
              <a className={footLink} href={NPM} target="_blank" rel="noopener noreferrer">
                npm
              </a>
              <a className={footLink} href={GH} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className={footLink} href={ISSUES} target="_blank" rel="noopener noreferrer">
                Issues
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <div
        id="toast"
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed bottom-7 left-1/2 z-[300] inline-flex -translate-x-1/2 translate-y-6 items-center gap-2.5 rounded-xl border border-emerald bg-surface px-5 py-3 text-[0.92rem] font-semibold text-ink opacity-0 shadow-soft transition-[opacity,transform] duration-200 [&.show]:translate-y-0 [&.show]:opacity-100"
      >
        <IconCheck className="h-[18px] w-[18px] text-emerald" />
        <span id="toast-text">Copied!</span>
      </div>

      <SiteInteractions />
    </>
  );
}

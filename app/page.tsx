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

function BrandLockup({ className, label }: { className?: string; label?: string }) {
  return (
    <span
      className={`brand-lockup${className ? " " + className : ""}`}
      {...(label ? { role: "img", "aria-label": label } : {})}
    >
      <span className="brand-lockup__word">gity</span>
      <span className="brand-lockup__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </span>
  );
}

function CopyChip() {
  return (
    <button className="copy-chip" data-copy="npm i -g gity-tool" aria-label="Copy install command: npm i -g gity-tool">
      <span>
        <span className="prompt">$</span> npm i -g gity-tool
      </span>
      <span className="copy-chip__icon" aria-hidden="true">
        <IconCopy className="icon-copy" />
        <IconCheck className="icon-check" hidden />
      </span>
    </button>
  );
}

function CopyButton({ copy }: { copy: string }) {
  return (
    <button className="copy-btn" data-copy={copy}>
      <IconCopy />
      <span className="copy-btn__label">Copy</span>
    </button>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* ============ HEADER / NAV ============ */}
      <header className="site-header" id="top">
        <div className="container">
          <nav className="nav" aria-label="Primary">
            <a className="brand" href="#top" aria-label="gity — home">
              <BrandLockup />
            </a>

            <ul className="nav__links" id="nav-links">
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#install">Install</a>
              </li>
              <li>
                <a href="#commands">Commands</a>
              </li>
              <li>
                <div className="nav__actions">
                  <a className="btn btn--ghost" href={GH} target="_blank" rel="noopener noreferrer">
                    <IconGitHub />
                    GitHub
                  </a>
                  <a className="btn btn--npm" href={NPM} target="_blank" rel="noopener noreferrer">
                    <IconNpm />
                    npm
                  </a>
                </div>
              </li>
            </ul>

            <button
              className="nav__toggle"
              id="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded="false"
              aria-controls="nav-links"
            >
              <IconMenu />
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="container">
            <div className="hero__grid">
              <div className="hero__copy">
                <BrandLockup className="hero__brand" label="gity" />
                <div className="hero__badge">
                  <span className="dot" aria-hidden="true" /> Open source · MIT · 3 runtime deps
                </div>
                <h1>
                  One machine.
                  <br />
                  Every <span className="accent-sky">GitHub</span> account.
                  <br />
                  Zero <span className="accent-orange">mix-ups</span>.
                </h1>
                <p className="hero__sub">
                  gity auto-selects the right Git name, email, and SSH key based on the folder your repo lives in — using
                  Git&apos;s own <code>includeIf</code>. No manual switching, ever.
                </p>

                <div className="hero__cta">
                  <CopyChip />
                  <a className="btn btn--ghost btn--lg" href={GH} target="_blank" rel="noopener noreferrer">
                    <IconGitHub />
                    View on GitHub
                  </a>
                </div>

                <div className="hero__meta">
                  <span>
                    <IconCheck /> Non-destructive — only appends to ~/.gitconfig
                  </span>
                  <span>
                    <IconCheck /> macOS · Linux · Windows
                  </span>
                </div>
              </div>

              {/* Animated terminal */}
              <div className="terminal" aria-hidden={false}>
                <div className="terminal__bar">
                  <div className="terminal__dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="terminal__title">zsh — gity</span>
                </div>
                <pre className="terminal__body" id="hero-terminal" aria-label="Example gity session" />
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM → SOLUTION ============ */}
        <section className="section" id="why">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">The problem</span>
              <h2 className="section__title">Multiple accounts. One machine. Constant identity leaks.</h2>
              <p className="section__lead">
                Work, personal, freelance — the moment several GitHub accounts share a computer, commits go out with the
                wrong email and pushes use the wrong key. gity makes the rule simple: a folder is an account.
              </p>
            </div>

            <div className="beforeafter">
              <article className="ba-card ba-card--before reveal">
                <span className="ba-card__tag">Before</span>
                <h3>Fragile, manual, easy to forget</h3>
                <ul className="ba-list">
                  <li>
                    <IconX />
                    <span>Wrong-email commits leak your work identity into personal repos (and vice-versa).</span>
                  </li>
                  <li>
                    <IconX />
                    <span>
                      <code>Permission denied (publickey)</code> because the wrong SSH key is offered first.
                    </span>
                  </li>
                  <li>
                    <IconX />
                    <span>
                      Brittle <code>~/.ssh/config</code> host aliases like <code>git@github-work</code> you must remember
                      to use.
                    </span>
                  </li>
                  <li>
                    <IconX />
                    <span>
                      Running <code>git config user.email …</code> by hand in every single repo.
                    </span>
                  </li>
                </ul>
              </article>

              <article className="ba-card ba-card--after reveal">
                <span className="ba-card__tag">After</span>
                <h3>Decide once. It just works.</h3>
                <ul className="ba-list">
                  <li>
                    <IconCheck />
                    <span>Decide once that a folder maps to an account — gity does the rest.</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span>
                      gity wires <code>includeIf</code> + a dedicated SSH key per profile.
                    </span>
                  </li>
                  <li>
                    <IconCheck />
                    <span>
                      Keep using normal <code>git@github.com:owner/repo.git</code> URLs — no host aliases.
                    </span>
                  </li>
                  <li>
                    <IconCheck />
                    <span>The correct name, email, and key are selected automatically by location.</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="section" id="how">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">How it works</span>
              <h2 className="section__title">A folder is an account. Git&apos;s own includeIf does the switching.</h2>
              <p className="section__lead">
                gity makes two append-only changes to your Git config. There&apos;s no daemon, no database, no wrapper
                around git — just plain config files Git already understands.
              </p>
            </div>

            <div className="how__grid">
              {/* Fork diagram */}
              <div className="fork reveal">
                <DiagramFork />

                <div className="fork__legend">
                  <div className="fork__row">
                    <span className="fork__node" style={{ background: "#38bdf8" }} />
                    <span>
                      <span className="path">~/Development/work/*</span> <span className="arrow">→</span>{" "}
                      <span className="id">you@company.com + id_ed25519_work</span>
                    </span>
                  </div>
                  <div className="fork__row">
                    <span className="fork__node" style={{ background: "#34d399" }} />
                    <span>
                      <span className="path">~/Development/personal/*</span> <span className="arrow">→</span>{" "}
                      <span className="id">you@gmail.com + id_ed25519_personal</span>
                    </span>
                  </div>
                  <div className="fork__row">
                    <span className="fork__node" style={{ background: "#fb923c" }} />
                    <span>
                      <span className="path">~/Development/freelance/*</span> <span className="arrow">→</span>{" "}
                      <span className="id">you@freelance.dev + id_ed25519_freelance</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Code cards */}
              <div className="reveal">
                <div className="code-cards">
                  <div className="code-card">
                    <div className="code-card__head">
                      <span className="code-card__name">~/.gitconfig</span>
                      <CopyButton copy={GITCONFIG} />
                    </div>
                    <pre>
                      <span className="tok-section">[includeIf &quot;gitdir:~/Development/work/&quot;]</span>
                      {"\n  "}
                      <span className="tok-key">path</span>
                      {" = "}
                      <span className="tok-str">~/.gitconfig-work</span>
                    </pre>
                  </div>

                  <div className="code-card">
                    <div className="code-card__head">
                      <span className="code-card__name">~/.gitconfig-work</span>
                      <CopyButton copy={GITCONFIG_WORK} />
                    </div>
                    <pre>
                      <span className="tok-section">[user]</span>
                      {"\n  "}
                      <span className="tok-key">name</span>
                      {" = "}
                      <span className="tok-str">Jane Doe</span>
                      {"\n  "}
                      <span className="tok-key">email</span>
                      {" = "}
                      <span className="tok-str">jane@company.com</span>
                      {"\n"}
                      <span className="tok-section">[core]</span>
                      {"\n  "}
                      <span className="tok-key">sshCommand</span>
                      {" = "}
                      <span className="tok-str">
                        &quot;ssh -i ~/.ssh/id_ed25519_work -o IdentitiesOnly=yes&quot;
                      </span>
                    </pre>
                  </div>
                </div>

                <p className="how__caption">
                  <IconInfo />
                  <span>
                    <code>IdentitiesOnly=yes</code> forces SSH to use only that key — no more &quot;wrong key offered
                    first.&quot;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INSTALL ============ */}
        <section className="section" id="install">
          <div className="container">
            <div className="section__head reveal" style={{ textAlign: "center" }}>
              <span className="section__eyebrow">Install</span>
              <h2 className="section__title" style={{ marginInline: "auto" }}>
                One command on every platform
              </h2>
              <p className="section__lead" style={{ marginInline: "auto" }}>
                Needs Node.js ≥ 18 and an OpenSSH client. We detect your OS automatically — switch tabs anytime.
              </p>
            </div>

            <div className="tabs reveal" role="region" aria-label="Install instructions by operating system">
              <div className="tabs__list" role="tablist" aria-label="Operating system">
                <button className="tab" role="tab" id="tab-macos" aria-controls="panel-macos" aria-selected="true" data-os="macos">
                  <IconApple />
                  macOS
                </button>
                <button
                  className="tab"
                  role="tab"
                  id="tab-linux"
                  aria-controls="panel-linux"
                  aria-selected="false"
                  data-os="linux"
                  tabIndex={-1}
                >
                  <IconLinux />
                  Linux
                </button>
                <button
                  className="tab"
                  role="tab"
                  id="tab-windows"
                  aria-controls="panel-windows"
                  aria-selected="false"
                  data-os="windows"
                  tabIndex={-1}
                >
                  <IconWindows />
                  Windows
                </button>
              </div>

              <div className="tab-panel" role="tabpanel" id="panel-macos" aria-labelledby="tab-macos">
                <div className="cmd-block">
                  <code>
                    <span className="prompt">$</span>npm install -g gity-tool
                  </code>
                  <CopyButton copy="npm install -g gity-tool" />
                </div>
                <p className="tab-panel__note">
                  <IconInfo />
                  <span>
                    Get Node via <code>brew install node</code>. OpenSSH is built in on macOS.
                  </span>
                </p>
              </div>

              <div className="tab-panel" role="tabpanel" id="panel-linux" aria-labelledby="tab-linux" hidden>
                <div className="cmd-block">
                  <code>
                    <span className="prompt">$</span>npm install -g gity-tool
                  </code>
                  <CopyButton copy="npm install -g gity-tool" />
                </div>
                <p className="tab-panel__note">
                  <IconInfo />
                  <span>
                    Debian/Ubuntu: <code>sudo apt install nodejs npm openssh-client</code>. Fedora:{" "}
                    <code>sudo dnf install nodejs openssh-clients</code>.
                  </span>
                </p>
              </div>

              <div className="tab-panel" role="tabpanel" id="panel-windows" aria-labelledby="tab-windows" hidden>
                <div className="cmd-block">
                  <code>
                    <span className="prompt">PS&gt;</span>npm install -g gity-tool
                  </code>
                  <CopyButton copy="npm install -g gity-tool" />
                </div>
                <p className="tab-panel__note">
                  <IconInfo />
                  <span>
                    Enable <strong>“OpenSSH Client”</strong> in Optional Features, or use Git Bash. Works in PowerShell,
                    CMD, and Git Bash.
                  </span>
                </p>
              </div>
            </div>

            <p className="install-note">
              The npm package is <code>gity-tool</code> — the installed command is <code>gity</code>.
            </p>
          </div>
        </section>

        {/* ============ QUICK START ============ */}
        <section className="section" id="quickstart">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Quick start</span>
              <h2 className="section__title">From install to authenticated in three steps</h2>
            </div>

            <div className="steps">
              <div className="step reveal">
                <span className="step__num">1</span>
                <h3>
                  Run <code>gity add</code>
                </h3>
                <p>Answer a few prompts — profile name, full name, email, projects folder, and optional SSH key generation.</p>
              </div>
              <div className="step reveal">
                <span className="step__num">2</span>
                <h3>Add the key to GitHub</h3>
                <p>
                  Paste the printed public key into GitHub → <strong>Settings → SSH and GPG keys</strong>.
                </p>
              </div>
              <div className="step reveal">
                <span className="step__num">3</span>
                <h3>
                  Run <code>gity test</code>
                </h3>
                <p>
                  See <code>✓ authenticated</code> for each profile. You&apos;re done — start cloning into that folder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMMANDS REFERENCE ============ */}
        <section className="section" id="commands">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Commands</span>
              <h2 className="section__title">Three commands. That&apos;s the entire surface.</h2>
              <p className="section__lead">
                No flags to memorize, no config syntax to learn. gity is a thin, friendly wrapper over Git&apos;s native
                behavior.
              </p>
            </div>

            <div className="cmd-grid">
              <article className="cmd-card reveal">
                <div className="cmd-card__title">gity add</div>
                <p>
                  Interactive wizard: profile name, full name, email, projects folder, and optional SSH key generation.
                  Prints the public key to paste into GitHub.
                </p>
                <pre>
                  <span className="p">$</span>
                  {" gity add\n◇ Profile name … "}
                  <span className="hl">work</span>
                  {"\n◇ Email … "}
                  <span className="or">jane@company.com</span>
                  {"\n◇ Folder … ~/Development/work\n◇ Generate SSH key? … Yes\n"}
                  <span className="ok">✓ Done.</span>
                </pre>
              </article>

              <article className="cmd-card reveal">
                <div className="cmd-card__title">
                  gity list <span className="cmd-card__alias">/ ls</span>
                </div>
                <p>
                  A table of all profiles — their folders, emails, and SSH key status — so you can see your whole setup at
                  a glance.
                </p>
                <div className="cmd-out">
                  <div className="cmd-out__line">
                    <span className="p">$</span> gity list
                  </div>
                  <table className="term-table">
                    <thead>
                      <tr>
                        <th>profile</th>
                        <th>email</th>
                        <th>key</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hl">work</td>
                        <td>jane@company.com</td>
                        <td className="ok">✓ key</td>
                      </tr>
                      <tr>
                        <td className="hl">personal</td>
                        <td>jane@gmail.com</td>
                        <td className="ok">✓ key</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              <article className="cmd-card reveal">
                <div className="cmd-card__title">
                  gity test <span className="cmd-card__alias">/ t</span>
                </div>
                <p>
                  Verifies each profile authenticates with GitHub, so you know the right key reaches the right account
                  before you push.
                </p>
                <pre>
                  <span className="p">$</span>
                  {" gity test\n"}
                  <span className="ok">✓ work — authenticated as jane-at-work</span>
                  {"\n"}
                  <span className="ok">✓ personal — authenticated as jane-personal</span>
                </pre>
              </article>
            </div>
          </div>
        </section>

        {/* ============ USE CASE SPOTLIGHT ============ */}
        <section className="section" id="usecase">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Use case</span>
              <h2 className="section__title">Work + personal on one laptop</h2>
            </div>

            <div className="usecase reveal">
              <div className="usecase__steps">
                <span className="usecase__pill">
                  <span className="n">1</span> Run <code style={{ fontFamily: "var(--font-mono)" }}>gity add</code> for work
                </span>
                <span className="usecase__pill">
                  <span className="n">2</span> Run <code style={{ fontFamily: "var(--font-mono)" }}>gity add</code> for
                  personal
                </span>
                <span className="usecase__pill">
                  <span className="n">3</span> Add each public key to the matching account
                </span>
              </div>

              <div className="usecase__terminal">
                <pre>
                  <span className="c"># work identity — selected because of the folder</span>
                  {"\n"}
                  <span className="p">$</span>
                  {" cd ~/Development/work && git clone "}
                  <span className="sky">git@github.com:company/api.git</span>
                  {"\n\n"}
                  <span className="c"># personal identity — same host, different folder</span>
                  {"\n"}
                  <span className="p">$</span>
                  {" cd ~/Development/personal && git clone "}
                  <span className="or">git@github.com:jane/blog.git</span>
                </pre>
              </div>

              <p className="usecase__caption">
                <IconCheck />
                <span>
                  Same <code>git@github.com</code> URLs — gity picks the right key per folder.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ============ FEATURES GRID ============ */}
        <section className="section" id="features">
          <div className="container">
            <div className="section__head reveal">
              <span className="section__eyebrow">Why gity</span>
              <h2 className="section__title">Small, sharp, and dependable by design</h2>
            </div>

            <div className="features">
              <article className="feature reveal">
                <span className="feature__icon">
                  <IconFolder />
                </span>
                <h3>Folder-based auto-switching</h3>
                <p>Identity follows location. Drop a repo in a folder and the right name, email, and key apply automatically.</p>
              </article>

              <article className="feature reveal">
                <span className="feature__icon">
                  <IconKey />
                </span>
                <h3>Per-profile SSH keys</h3>
                <p>
                  Each account gets its own key, pinned with <code style={{ color: "var(--text)" }}>IdentitiesOnly=yes</code>{" "}
                  so the wrong key is never offered.
                </p>
              </article>

              <article className="feature reveal">
                <span className="feature__icon">
                  <IconShield />
                </span>
                <h3>Non-destructive config</h3>
                <p>
                  gity only appends to <code style={{ color: "var(--text)" }}>~/.gitconfig</code> — it never rewrites or
                  removes your existing settings.
                </p>
              </article>

              <article className="feature reveal">
                <span className="feature__icon">
                  <IconGlobe />
                </span>
                <h3>Cross-platform</h3>
                <p>macOS, Linux (Ubuntu/Debian/Fedora), and Windows (PowerShell, CMD, Git Bash). One tool everywhere.</p>
              </article>

              <article className="feature reveal">
                <span className="feature__icon">
                  <IconBolt />
                </span>
                <h3>KISS — 3 deps, no DB</h3>
                <p>Three runtime dependencies, no database, no daemon. State is plain Git config files you can read.</p>
              </article>

              <article className="feature reveal">
                <span className="feature__icon">
                  <IconLink />
                </span>
                <h3>MIT open source</h3>
                <p>Free and MIT licensed. Read the code, file an issue, or send a PR — it&apos;s all on GitHub.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="section" id="get-started">
          <div className="container">
            <div className="cta-band reveal">
              <h2>Stop leaking identities. Start with one command.</h2>
              <p>Set a folder, run the wizard, push with confidence. gity handles the rest.</p>
              <div className="cta-band__actions">
                <CopyChip />
                <a className="btn btn--npm btn--lg" href={NPM} target="_blank" rel="noopener noreferrer">
                  <IconNpm />
                  View on npm
                </a>
                <a className="btn btn--ghost btn--lg" href={GH} target="_blank" rel="noopener noreferrer">
                  <IconGitHub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <BrandLockup className="footer__lockup" label="gity" />
              <span className="lic">MIT © Yahia Rachek</span>
            </div>
            <nav className="footer__links" aria-label="Footer">
              <a href={NPM} target="_blank" rel="noopener noreferrer">
                npm
              </a>
              <a href={GH} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={ISSUES} target="_blank" rel="noopener noreferrer">
                Issues
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <div className="toast" id="toast" role="status" aria-live="polite">
        <IconCheck />
        <span id="toast-text">Copied!</span>
      </div>

      <SiteInteractions />
    </>
  );
}

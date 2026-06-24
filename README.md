# gity — landing page (Next.js)

The marketing site for [**gity**](https://www.npmjs.com/package/gity-tool) — run multiple
GitHub accounts on one machine, with zero identity leakage and no SSH key conflicts.

This is the **Next.js (App Router) + TypeScript** version of the site. It's a faithful port
of the static build: identical design, copy, and interactions.

## Stack

- **Next.js 14** (App Router) + **TypeScript** + **React 18**
- Plain CSS design system (`app/globals.css`) — no Tailwind, no UI kit
- `next/font` for self-hosted Inter (UI) + JetBrains Mono (code)
- Zero client UI dependencies; all interactions are vanilla DOM in one client effect

## Structure

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Root layout, fonts, and SEO/OpenGraph metadata |
| `app/page.tsx` | The full landing page (server component) |
| `app/icons.tsx` | All inline SVG icons + the "how it works" diagram |
| `app/site-interactions.tsx` | Client component: copy-to-clipboard, OS tabs, typing animation, scroll reveal, sticky header, mobile nav |
| `app/globals.css` | Design system + responsive layout |
| `public/assets/*` | Logo, favicon, app icon, Open Graph image |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & run

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel           # preview
vercel --prod    # production
```

Vercel auto-detects Next.js — no configuration needed.

## Accessibility & performance

- Semantic landmarks, skip link, visible focus rings, WCAG AA contrast on the dark theme
- Keyboard-navigable install tabs (WAI-ARIA tabs pattern)
- `prefers-reduced-motion` respected — the typing animation falls back to static text
- No console errors

## Links

- **npm:** https://www.npmjs.com/package/gity-tool
- **GitHub:** https://github.com/YRACHEK101/gity-tool
- **Issues:** https://github.com/YRACHEK101/gity-tool/issues

---

MIT © Yahia Rachek

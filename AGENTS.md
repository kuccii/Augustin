# AGENTS.md

## Project Context

A personal portfolio site built with **TanStack Start** (React 19, plain JavaScript — no TypeScript): file-based routes, server-side rendering, deployed to Cloudflare Workers. Keep changes focused on the request. See `README.md` for setup and deploy.

## Key Files

- `src/routes/__root.jsx`: the HTML document (`HeadContent`, `Scripts`) and the theme provider. There is **no `index.html`**.
- `src/routes/*.jsx`: one page per file (`index.jsx` → `/`). `src/routeTree.gen.ts` is generated on every dev/build run — never edit or commit it.
- `src/components/site/`: the page sections (Header, Hero, Featured, About, Experience, Training, Contact).
- `src/lib/cv-data.js`: all site content and asset paths.
- `src/components/ui/`: shadcn/ui kit (JSX). `src/index.css` + `tailwind.config.js`: design tokens.
- `vite.config.js`: `cloudflare({ viteEnvironment: { name: "ssr" } })`, `tanstackStart()`, `react()`. Keep all three. Every runtime dependency in `package.json` is prebundled at startup so a package first imported mid-session can't make the server render load a second React.
- `wrangler.jsonc`: the Worker entry (`@tanstack/react-start/server-entry`), compatibility date and `nodejs_compat`. Keep `main` and `nodejs_compat`.
- `public/`: static images and the CV PDF, served from `/`.

## Working Notes

- `npm run dev` runs the Vite dev server; server code runs in `workerd`, as in production.
- `npm run build` emits `dist/client` and `dist/server`. Never commit them.
- Server and first client render must match: read `window`, `document` and browser storage only in effects and handlers, and format dates and numbers with an explicit locale and time zone.
- Server functions and server routes are public HTTP endpoints: validate all input (zod is installed) and never trust the caller.
- Secrets belong in Cloudflare (`wrangler secret put`), read in server code only. Anything under `import.meta.env.VITE_*` is compiled into the browser bundle — never put a secret there.
- Run `npm run lint` before finishing code changes. Write JavaScript/JSX only — no `.ts`/`.tsx` files.

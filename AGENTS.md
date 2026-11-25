# AGENTS.md

## Project Context

A personal portfolio site built with **TanStack Start** (React 19, plain JavaScript — no TypeScript): file-based routes, server-side rendering, built with Nitro and deployed on Vercel. Keep changes focused on the request. See `README.md` for setup and deploy.

## Key Files

- `src/routes/__root.jsx`: the HTML document (`HeadContent`, `Scripts`) and the theme provider. There is **no `index.html`**.
- `src/routes/*.jsx`: one page per file (`index.jsx` → `/`). `src/routeTree.gen.ts` is generated on every dev/build run — never edit or commit it.
- `src/components/site/`: the page sections (Header, Hero, Featured, About, Experience, Training, Contact).
- `src/lib/cv-data.js`: all site content and asset paths.
- `src/components/ui/`: shadcn/ui kit (JSX). `src/index.css` + `tailwind.config.js`: design tokens.
- `vite.config.js`: `tanstackStart()`, `nitro()` (builds the server; picks the Vercel preset automatically when `VERCEL=1`) and `react()`, plus the `@` alias for `src/`. Keep all three plugins.
- `public/`: static images and the CV PDF, served from `/`.

## Working Notes

- `npm run dev` runs the Vite dev server.
- `npm run build` emits `.vercel/output` on Vercel and `.output` elsewhere. Never commit them.
- Server and first client render must match: read `window`, `document` and browser storage only in effects and handlers, and format dates and numbers with an explicit locale and time zone.
- Server functions and server routes are public HTTP endpoints: validate all input (zod is installed) and never trust the caller.
- Secrets belong in the Vercel project's environment variables, read in server code only via `process.env`. Anything under `import.meta.env.VITE_*` is compiled into the browser bundle — never put a secret there.
- Run `npm run lint` before finishing code changes. Write JavaScript/JSX only — no `.ts`/`.tsx` files.

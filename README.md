# Augustin Kimonyo — portfolio site

Personal site for Augustin Kimonyo, gender and social inclusion expert and Master Trainer. Built with [TanStack Start](https://tanstack.com/start) (React 19, plain JavaScript), Tailwind CSS and shadcn/ui, server-rendered on Cloudflare Workers.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run lint
```

## Build and deploy

```bash
npm run build    # -> dist/client (assets) + dist/server (the Worker)
npx wrangler deploy
```

The build runs through the [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/), so dev and build both execute server code in `workerd`. There is no `index.html`: the document is rendered from `src/routes/__root.jsx`.

## Content and assets

- Page content (stats, featured work, experience, references) lives in `src/lib/cv-data.js`; sections are in `src/components/site/`.
- Images and the CV are served from `public/` and must be added there:

| File | Used for |
| --- | --- |
| `public/images/hero.png` | Hero background |
| `public/images/featured-1.png` | Featured: National Policy against Gender Based Violence |
| `public/images/featured-2.png` | Featured: Gender Mainstreaming Strategy, PSDYE |
| `public/images/featured-3.png` | Featured: third featured assignment |
| `public/files/Augustin_Kimonyo_CV.pdf` | "Download full CV" button |

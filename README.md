# Augustin Kimonyo — portfolio site

Personal site for Augustin Kimonyo, gender and social inclusion expert and Master Trainer. Built with [TanStack Start](https://tanstack.com/start) (React 19, plain JavaScript), Tailwind CSS and shadcn/ui, server-rendered with [Nitro](https://nitro.build) and deployed on [Vercel](https://vercel.com).

## Run locally

```bash
npm install
npm run dev      # dev server
npm run lint
```

## Build and deploy

```bash
npm run build    # on Vercel: .vercel/output; elsewhere: a Node server in .output
node .output/server/index.mjs   # run the non-Vercel build locally
```

**Vercel:** import the repository in the Vercel dashboard (or run `vercel`). The framework is detected as TanStack Start, so the default build settings work; no `vercel.json` is needed. Runs on Node 22 (pinned in `package.json`).

There is no `index.html`: the document is rendered from `src/routes/__root.jsx`.

## Content and assets

- Page content (stats, featured work, experience, references) lives in `src/lib/cv-data.js`; sections are in `src/components/site/`.
- Images and the CV are served from `public/`:

| File | Used for |
| --- | --- |
| `public/images/hero.svg` | Hero background (illustration) |
| `public/images/featured-1.svg` | Featured: National Policy against Gender Based Violence |
| `public/images/featured-2.svg` | Featured: Gender Mainstreaming Strategy, PSDYE |
| `public/images/featured-3.svg` | Featured: GESI in Land Restoration Ecosystems |
| `public/files/Augustin_Kimonyo_CV.pdf` | "Download full CV" button (built from the content in `src/lib/cv-data.js`) |

The images are original illustrations. To use your own photos, drop files in `public/images/` and update the paths in `src/lib/cv-data.js`.

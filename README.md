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

## Contact form

The form in the Contact section posts to a server function (`src/lib/contact.js`) that emails the message to **akimonyo1@gmail.com** through [Resend](https://resend.com), with the visitor's address as Reply-To. Fields are validated and length-limited, and a hidden honeypot field drops most bot submissions. If sending fails, the form shows the direct `mailto:` address instead.

Set these in the Vercel project (Settings > Environment Variables), then redeploy:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from your Resend account. Without it the form reports that it is unavailable. |
| `CONTACT_FROM` | no | Sender, e.g. `Augustin Kimonyo <contact@yourdomain.com>`. Needs a domain verified in Resend. |
| `CONTACT_TO_EMAIL` | no | Recipient. Defaults to `akimonyo1@gmail.com`. |

Without `CONTACT_FROM`, mail is sent from Resend's shared test address, which only delivers to the email the Resend account was created with. So either create the Resend account with akimonyo1@gmail.com, or verify a domain and set `CONTACT_FROM`.

## Content and assets

- Page content (stats, featured work, experience) lives in `src/lib/cv-data.js`; sections are in `src/components/site/`.
- The hero image, the three featured images and the CV PDF are loaded from the original site's media host (`media.base44.com`). If an image fails to load, the page switches to the local illustration in `public/images/`. `public/files/Augustin_Kimonyo_CV.pdf` is a locally generated CV that is not linked by default; to stop depending on that host, download the originals, put them in `public/`, and update the paths in `cv-data.js`.

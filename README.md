# MasoodKhan.me — Portfolio

Premium editorial portfolio for Masood Khan, positioned across software engineering and AI/ML engineering.

## Current visual system

The updated theme uses the supplied “Sapphire Nightfall Whisper” blue palette:

- Primary background: `#F4F7FC`
- Primary text: `#262B40`
- Secondary text: `#2C444C`
- Main blue accent: `#0474C4`
- Deep blue: `#06457F`
- Muted blue: `#5379AE`
- Pale blue: `#A8C4EC`

Typography remains Instrument Serif + Geist + Geist Mono, with body and supporting text increased to a more readable medium scale. The summary strip uses consistent typography and the skill rows are informational (no arrow indicators).

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 (visual system implemented with global CSS)
- Motion for React
- Lucide React

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add actual project screenshots

1. Put your images in `public/projects/`.
2. Open `src/data/projects.ts`.
3. Set `coverImage` for a project to a path such as `/projects/zubayda-cover.png`.
4. Add `gallery` items for screenshots to appear on that project's case-study page.

The public URL starts with `/projects/`, not `/public/projects/`. See `public/projects/README.md` for a copyable example. If no image path is configured, the existing abstract illustration remains as a fallback.

## Build check

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Import the repository into Vercel and retain the Next.js framework preset.
3. Deploy using `next build`.
4. In Vercel → Project → Settings → Domains, add `masoodkhan.me` and optionally `www.masoodkhan.me`.
5. Configure the DNS records shown by Vercel at your registrar and complete domain verification.

## Content notes

- `public/resume.pdf` contains the supplied résumé.
- GitHub and LinkedIn use the supplied profile URLs.
- The Unisys case study remains high-level and omits proprietary datasets and confidential implementation details.
- No repository URL is invented for the four résumé case studies.
- Abstract project visuals remain available as fallbacks until actual screenshots are added.

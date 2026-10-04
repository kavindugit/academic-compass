# PathwayLK — updated website

Complete source for the latest colorful PathwayLK redesign, prepared for GitHub and Vercel. Includes all four pages, responsive navigation, grade tabs, WhatsApp enquiry links, local photos and bundled Manrope fonts.

## Run locally

Use a supported Node.js LTS release.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm run start
```

## Update your existing GitHub repository

1. Extract this ZIP.
2. Copy the contents INSIDE the `pathwaylk` folder to the root of your existing `academic-compass` checkout. The root must contain `package.json`, `src` and `public`. Do not nest another `pathwaylk` folder inside your repository.
3. Delete the old `eslint.config.mjs` if your checkout still has it; this package uses `.eslintrc.json`, compatible with its installed ESLint version.
4. Create a branch, commit the files, and push. Open a pull request if you want to review before merging.

```bash
git switch -c redesign/pathwaylk-frontend
git add .
git commit -m "Redesign PathwayLK website and prepare Vercel deployment"
git push -u origin redesign/pathwaylk-frontend
```

These commands are for your existing checkout, where GitHub authentication is already configured. This ZIP does not contain Git history or credentials.

## Deploy with Vercel

Use your existing connected Vercel project or import the GitHub repository. Select the Next.js framework preset, the repository root, and the default output directory. Build command: `npm run build`. Do not configure `out` as the output directory: this package uses normal Next.js hosting.

Set `NEXT_PUBLIC_SITE_URL` to the exact final production URL in Vercel, then rebuild. Without it, the metadata and sitemap fall back to the Vercel URL originally supplied for this project. `.env.example` provides an example for local development; copy it to `.env.local` if needed.

Official deployment/build documentation:
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/builds/configure-a-build

## Main files

- `src/app/page.tsx`: home page
- `src/app/our-service/page.tsx`: service overview
- `src/app/our-service/how-we-help/`: session modes and grade tabs
- `src/app/pricing/page.tsx`: pricing and questions
- `src/app/globals.css`: shared styles
- `src/components/`: navigation and reusable sections
- `src/shared/constants/index.ts`: plans and prices
- `public/`: photos, logos and local fonts

## Content and production notes

Original weekly prices and schedules remain unchanged: Grade 6–9 LKR 10,000 (3 × 2 hours), O/L LKR 15,000 (3 × 3 hours), A/L LKR 30,000 (4 × 6 hours). WhatsApp contact: +94 70 440 1729.

Photos are AI-generated illustrations and the parent update is a labeled sample. Confirm your real service coverage, guide availability, cancellation policy and session details before publishing. This package enables search indexing and removes the separate review site's hosting configuration. Your existing production deployment has not been changed by creating this archive.

Installed dependencies and generated build output are excluded; `npm ci` installs the locked dependencies.

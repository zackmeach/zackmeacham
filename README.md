# Zack Meacham Personal Site

Personal portfolio site for `zackmeacham.com`, built with Astro and Tailwind CSS. This first version is intentionally focused: a strong homepage, clear project story pages, an HTML resume, and a contact section that is easy to keep current.

## Stack

- Astro for the site structure and routing
- Tailwind CSS for styling
- Vercel for hosting and deployment
- Porkbun for domain DNS once the site is ready

## Quick Start

```bash
npm install
npm run dev
```

Local dev runs at `http://localhost:4321`.

## Repo Plan

```text
/
├── public/                  # Static assets (resume PDF, favicon, social image later)
├── src/
│   ├── components/          # Shared UI pieces
│   ├── data/
│   │   └── site.ts          # Main content file for copy, links, projects, resume data
│   ├── layouts/
│   │   └── BaseLayout.astro # Shared page shell and metadata
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── work.astro          # project index
│   │   ├── work/[slug].astro   # per-project case studies
│   │   └── resume.astro        # contact lives at /#contact + the footer
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## First Files To Edit

Start here when you want to make the site yours:

1. `src/data/site.ts`
2. `src/pages/index.astro`
3. `public/` for a future `resume.pdf`, headshot, or project images

## Content Workflow

- Update name, intro, links, and project entries in `src/data/site.ts`
- Add your real resume bullets to the `resumeEntries` array
- Drop a PDF resume into `public/resume.pdf` when you want a download button
- Replace placeholder project descriptions with real case studies

## Deployment Path

1. Build and review locally
2. Create a Vercel project and deploy the repo
3. Verify the temporary Vercel URL
4. Point `zackmeacham.com` to Vercel from Porkbun

## Useful Commands

- `npm run dev` starts the local development server
- `npm run build` creates the production build in `dist/`
- `npm run check` runs Astro's project checks
- `npm run preview` previews the production build locally

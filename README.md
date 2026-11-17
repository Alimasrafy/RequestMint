# RequestMint

Marketing landing page for **RequestMint** — turn repeated customer requests into paid digital products, subscriptions, and transaction revenue.

## Overview

RequestMint is a production-ready B2B SaaS landing page. It helps agencies, SaaS founders, course creators, and micro-SaaS operators detect recurring demand from support messages and productize it into sellable offers with built-in checkout and delivery.

The site is a single-page, fully responsive landing page with sections for:

- Hero + value proposition
- Trust / integration bar
- The hidden problem (repeat-support stats)
- How it works (4-step funnel)
- Platform features (6 feature cards)
- Who it's for (audience use cases)
- Revenue simulator (interactive calculator)
- Testimonials / social proof
- Pricing (3 plans)
- FAQ (accordion)
- Signup CTA + footer

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS 4** (styling)
- **GitHub Pages** (hosting)

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

Push the repository to GitHub, then:

1. Go to **Settings → Pages** in your repository.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`).

On every push, the workflow at `.github/workflows/deploy.yml` will:

1. Install dependencies
2. Build the site with Vite (`npm run build`)
3. Deploy the `dist/` folder to GitHub Pages

Your site will be live at:

```
https://alimasrafy.github.io/RequestMint/
```

## Project Structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages deploy
├── index.html                      # Vite entry / production HTML entry point
├── package.json
├── public/
│   ├── 404.html                    # GitHub Pages 404 fallback
│   ├── robots.txt                  # SEO
│   └── sitemap.xml                 # SEO
├── src/
│   ├── App.tsx                     # Main page (all sections)
│   ├── index.css                   # Custom CSS + Tailwind base
│   └── main.tsx                    # React entry point
├── tsconfig.json
└── vite.config.ts                  # Vite config (base: "./" for GitHub Pages subpath)
```

## Repository Metadata

- Package name: `requestmint`
- Copyright: `2026 RequestMint`

## License

All rights reserved. Copyright 2026 RequestMint.

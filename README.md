# RequestMint

Marketing landing page for **RequestMint**, designed to run in two environments:

- local static preview via VS Code Live Server
- GitHub Pages deployment via GitHub Actions

## Overview

This repository contains the RequestMint landing page content, metadata, and deployment workflow.  
The project still includes Vite/React configuration for development, but the production entry point is also prepared for static hosting so the site can be previewed without a local build step.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## Local Development

### Option 1: Static preview

If you want the simplest preview flow, serve the project root with a static server.

Example with VS Code Live Server:

```text
http://127.0.0.1:5500/index.html
```

### Option 2: Vite development server

If you have Node.js installed and want the standard dev workflow:

```bash
npm install
npm run dev
```

Then open the URL printed by Vite.

## Deployment

GitHub Pages deployment is handled by:

- [.github/workflows/deploy.yml](/Users/alimasrafyjoy/Downloads/live-website-development-project/.github/workflows/deploy.yml)

### GitHub setup

1. Push the repository to GitHub.
2. Open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or `master`.

The workflow uploads the repository as a Pages artifact and deploys it automatically.

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tsconfig.json
└── vite.config.ts
```

## Notes

- [index.html](/Users/alimasrafyjoy/Downloads/live-website-development-project/index.html) is the browser entry point used for static hosting.
- [src/App.tsx](/Users/alimasrafyjoy/Downloads/live-website-development-project/src/App.tsx) contains the main page sections and copy.
- [vite.config.ts](/Users/alimasrafyjoy/Downloads/live-website-development-project/vite.config.ts) and [tsconfig.json](/Users/alimasrafyjoy/Downloads/live-website-development-project/tsconfig.json) remain in the repo for Vite/TypeScript-based development.

## Repository Metadata

- Package name: `requestmint`
- Copyright: `2026 RequestMint`

## License

All rights reserved. Copyright 2026 RequestMint.

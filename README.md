# mohamada.li portfolio

Personal portfolio website for Mohamad Ali, built with SvelteKit. The site presents projects, skills, experience, and contact information in a clean technical visual style with English and Arabic localization.

## Features

- Responsive portfolio layout for desktop and mobile
- Localized routes for English and Arabic
- RTL support for Arabic pages
- Project, skills, experience, vision, and contact sections
- Static build output for GitHub Pages
- GitHub Actions deployment workflow

## Tech stack

- [SvelteKit](https://kit.svelte.dev/)
- [Svelte 5](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Wuchale](https://wuchale.dev/) for localization
- GitHub Pages for deployment

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run type and Svelte checks:

```bash
npm run check
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Localization

The project currently supports:

- `en` English
- `ar` Arabic

Locale configuration lives in `wuchale.config.js` and `src/locales/data.js`. Translation files are stored in `src/locales/`.

## Deployment

The site is configured as a static SvelteKit app and deploys to GitHub Pages through `.github/workflows/deploy.yml`.

The SvelteKit base path is set in `svelte.config.js`:

```js
base: '/portfolio'
```

Change this value if the repository name or hosting path changes.

## Project structure

```text
src/
  lib/
    LanguageToggle.svelte
    assets/
    fonts/
  locales/
    ar.po
    en.po
  params/
    locale.ts
  routes/
    [locale=locale]/
      +page.svelte
    +layout.svelte
    +layout.ts
static/
  personal.png
.github/
  workflows/
    deploy.yml
```

## Author

Mohamad Ali

- GitHub: [malishehahbi](https://github.com/malishehahbi)
- LinkedIn: [malishihabi](https://www.linkedin.com/in/malishihabi)

Portfolio

Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. Dark mode only. Fully responsive.

## What's inside

- **Hero** — animated typewriter tagline, key stats, CTAs
- **About** — background, quick facts, current focus
- **Projects** — MedSync (AI hospital system), Greenway Residents Portal, CI/CD work
- **Experience** — Wipro & Monas Soft Solutions with achievement-driven bullets
- **Skills** — grouped by domain: Backend, Frontend, Databases, DevOps, Testing, AI & Tooling
- **Contact** — email, LinkedIn, GitHub links

## Local setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    components/
      Navbar.tsx          # Fixed nav with scroll-aware styling
      Footer.tsx
      useScrollReveal.ts  # IntersectionObserver scroll animations
    sections/
      Hero.tsx            # Typewriter effect + stats
      About.tsx
      Projects.tsx
      Experience.tsx
      Skills.tsx
      Contact.tsx
    globals.css           # Tailwind base + custom utility classes
    layout.tsx            # Root layout with metadata
    page.tsx              # Composes all sections
tailwind.config.js
next.config.js
```

## Tech

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS 3](https://tailwindcss.com)
- TypeScript
- Google Fonts: Inter + JetBrains Mono

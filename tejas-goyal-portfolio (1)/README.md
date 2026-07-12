# Tejas Goyal — Portfolio

A multi-page, CMS-like personal portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## How to update content

Everything is driven by plain data files under `data/`. You should never
need to touch a component or a page to update information.

| File                  | Controls                                             |
|-----------------------|-------------------------------------------------------|
| `data/profile.ts`     | Name, hero copy, about copy, stats, skills             |
| `data/experience.ts`  | Professional Experience page entries                   |
| `data/leadership.ts`  | Leadership & Positions of Responsibility page entries   |
| `data/projects.ts`    | Every project card + its auto-generated detail page     |
| `data/education.ts`   | Education snapshot (Resume page)                        |
| `data/achievements.ts`| Achievements & extra-curriculars (Resume page)          |
| `data/timeline.ts`    | The unified vertical Timeline page                      |

### Adding a new project

Open `data/projects.ts`, duplicate one object in the `projects` array,
change its `slug` (this becomes the URL: `/projects/your-slug`), and fill
in the fields. The project grid on `/projects`, the featured-work section
on the homepage, and the `/projects/[slug]` detail page are all generated
automatically — no other file needs to change.

### Design tokens

Colors, spacing, and font stacks are defined once as CSS custom properties
in `app/globals.css` (light mode in `:root`, dark mode in `.dark`). Change
a color there and it updates everywhere.

See `FONTS.md` for restoring the real Fraunces/Inter/IBM Plex Mono webfonts
once you deploy somewhere with network access (this build sandbox couldn't
reach Google Fonts, so it currently uses a system-font fallback stack).

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (subtle fade/slide only — respects `prefers-reduced-motion`)
- Lucide icons (+ one custom LinkedIn icon, since it isn't bundled in this
  lucide-react version)

## Folder structure

```
app/                  routes (one folder per page)
components/layout/    navbar, footer, theme provider
components/sections/  page-hero, project-card, ledger-stats (signature motif)
components/ui/        button, section-heading, fade-in, pill
data/                 all content — the single source of truth
public/                static assets, placeholder project images, resume PDF
```

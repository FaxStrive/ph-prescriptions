# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build — must pass before any PR
npm run lint     # ESLint check
npx tsc --noEmit # type check without building
```

## Stack

- **Next.js 16** App Router, React 19, TypeScript (strict)
- **Tailwind CSS v4** — no `tailwind.config.ts`; tokens live in `src/app/globals.css` under `@theme inline`
- **framer-motion** for animations, **lucide-react** for icons
- Path alias: `@/*` → `src/*`

## Architecture

### Brand data
All business constants (phone numbers, address, products, doctor endorsements) live in `src/lib/business.ts`. Import from there — never hardcode contact info inline.

### Design tokens
CSS custom properties are defined in `src/app/globals.css`. Key palette:
- `--color-navy` (#1b3a6b) — primary brand color
- `--color-teal` (#0d9488) — accent/CTA color  
- `--color-cream` (#fafaf8) — page background
- Button styles (`.btn`, `.btn-primary`, `.btn-teal`, `.btn-outline`, `.btn-white`) are global utility classes

### Page structure
- All pages under `src/app/<route>/page.tsx`
- Shared layout components in `src/components/layout/` (Header, Footer)
- Reusable UI in `src/components/ui/`
- Section-level components in `src/components/sections/`

### Content rules (non-negotiable)
- Zero em dashes — use plain hyphens
- Zero emojis
- Square buttons — `border-radius: 0`
- No `<img>` — use `next/image`
- Phone numbers must come from `BUSINESS` in `src/lib/business.ts`
- `"use client"` only on components that use hooks or event handlers

### Client
PH Prescriptions — water health/wellness company, Palm City FL. Founded 2005 by Leo Szymborski. Sells residential and commercial water filtration, total home systems, and the Aquapellis molecular hydrogen shower system. Primary phone: 772-220-8789. See `src/lib/business.ts` for full data.

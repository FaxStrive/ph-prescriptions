# pH Prescription - Site Finish Plan

Charter for taking the site from "shipped" to reference-grade, using the fleet's
BUILDER law (mini: ~/agent-stack/workspaces/sites/BUILDER.md), the sites persona
build requirements, and the full asset stack. Working copy: this repo. Deploys:
push to main -> https://ph-prescriptions.vercel.app.

## The seven build requirements (Tobias, 2026-08-13) applied here

1. Correct logo, no box or halo on any surface
2. Palette derived from the client's actual brand: white base, purple #583890,
   light blue #B9E3EF support, teal #146a8d accent (user-approved 2026-08-25)
3. Every usable client image appears: szymborski library is the client library
4. Square buttons with a WATER-CHARACTER hover (liquid fill rising), sitewide
5. Every dropdown animates open and closed, nav included, no layout shift
6. Video hero: muted, autoplay, loop, playsinline, WITH poster frame
7. At least 2 more video moments below the fold (water-stream.mp4,
   water-underwater.mp4 from the client library)

## Declared deviations from BUILDER law (user or business overrides)

- PRICING STAYS. This is a product catalog headed for Shopify; the client's own
  site publishes all 46 prices. NO-PRICING is a lead-gen rule and does not apply.
- Family and children drinking-water imagery is ALLOWED and wanted. Tobias:
  "TONS of family photos, people drinking water, glasses getting filled." This
  overrides the water-filtration stock taxonomy reject list for lifestyle slots.
- The Veo-generated RO-1100 scroll breakdown STAYS. It is a user-directed
  program (aqua-otter pipeline). NO-AI-MEDIA still bans AI portraits and AI
  lifestyle imagery everywhere.
- The hero keeps its user-approved centered statement layout ("I'm loving it").
  We add the missing hard requirements (poster, two-layer scrim, reduced-motion
  video pause) without rebuilding the approved composition.

## Asset stack (synced from the mini to scratchpad/ph-assets)

- szymborski/ - ~190 real pH images by category: products, installations,
  lifestyle, experts, team, book, hero, industries, trade-shows, promo,
  locations, articles + logo.svg + og-default.png
- szymborski-videos/ - hero-background.mp4, water-stream.mp4,
  water-underwater.mp4
- lifestyle-harvest/ - 45 curated real lifestyle photos (families, glasses)
- portfolio/ - ~147 images from the water portfolio (user authorized reuse;
  no other client's team photos, no branded shots)
- install-photos/ - pH install photos from the client scrape
- Plus public/products/ (47 catalog images, already local)

Curation gate for every image before it enters public/: sha-dedupe, min
640x480, resize to max 2400px q80, visual sanity (real photo, no watermark,
no wrong-product, no AI look).

## Phases

### Phase 0 - Assets + tooling (in progress)
Sync libraries, copy style-tokens.mjs + token-diff.mjs into design/tools/,
curate into public/images/<category>/, write asset-manifest.md mapping images
to page slots. Fix the two byte-identical dupes already in public/images/
lifestyle (family-drinking-kitchen==family-drinking, family-water-glasses==
father-children).

### Phase 1 - Design system hardening
- globals.css: lock tokens (palette, type scale, spacing, section rhythm)
- .btn liquid hover: square corners + fill-rise water animation, one motion
  sitewide, replaces every inline onMouseEnter color swap
- Header mega panels: animated open/close (opacity+translate, no shift),
  keyboard accessible (arrows, Escape, Tab), mobile accordion parity
- Focus-visible states, prefers-reduced-motion coverage
- Split homepage: server page.tsx (metadata restored) + client sections

### Phase 2 - Homepage to reference grade
- Hero: poster frame extracted from hero.mp4, two-layer directional scrim,
  video pauses under reduced motion
- Density to floor (>=30 unique images, >=2 videos beyond hero):
  marquee install/lifestyle strip (pattern 7), doctor wall with real photos,
  water-stream.mp4 full-bleed band (pattern 3), certification logo row
- Layout pattern variety: first 3 sections use 3 different patterns; at least
  one non-standard pattern (marquee and/or text-as-image ghost "WATER")
- SystemBreakdown chapter untouched

### Phase 3 - Interior pages to density + pattern floors
Route consolidation first: /medical vs /solutions/medical, /pool + /marine vs
/solutions/pool-marine. Keep the richer page per vertical, merge unique
content, 308 the losers, update ServiceSelector (/marine link) and any nav.

Then per page, in this order (floor targets adapted from BUILDER):
- A. Commerce: /products (anchor nav per category, photo-first grid),
  /residential + 4 subpages, /business + 4 subpages, /aquapellis,
  /nutraceuticals. Floor: hero image or video + >=12 unique images each.
- B. Verticals: consolidated medical / hospitality / pool-marine pages.
  Floor: >=10 each, real use-case imagery.
- C. Story: /technology (cutaway + media imagery), /experts, /about,
  /about/leo, /about/community (team, warehouse, trade-shows), /book
  (book assets). Floor: >=10 each.
- D. Content: /blog index + 20 posts get real hero images (articles/ +
  lifestyle categories), /faq, /resources. Floor: index >=10, post hero each.
- E. Convert: /consultation, /contact (lead form <=5 fields, phone first),
  /affiliate. Legal pages stay lean.

### Phase 4 - Motion pass
- Section-entry reveals (whileInView fade/rise), consistent easing, all
  reduced-motion safe
- Liquid button hover verified on every CTA
- Image hover treatment (subtle scale), marquee physics
- Below-fold video moments wired (water-stream, water-underwater)

### Phase 5 - SEO, schema, performance
- sitemap.ts, robots.ts, opengraph-image (og-default.png as base)
- Metadata audit: all 5 slots on every route; homepage metadata restored
- Schema: Product on catalog entries, Article on posts, FAQPage, Breadcrumb,
  LocalBusiness (exists)
- next/image: drop unoptimized for local assets, priority only on LCP,
  correct sizes everywhere
- Repo hygiene: fix the ~20 pre-existing lint errors

### Phase 6 - QA gates (full battery, blocking)
- NO-DUPLICATE-IMAGES scan across built HTML
- Density + video floor report per route
- TAP-TARGET audit at 390x844 (44px, 48px for tel/CTA/form)
- VISUAL-REVIEW: every route x 2 viewports, forced scroll pass first,
  6-question scoring; gate avg >= 7.5, min >= 6, zero high-severity
  collisions; max 3 fix loops
- SERVICES-MENU-DROPDOWN audit: child count == service count, keyboard ok
- A11y: logo/menu inside header landmark, contrast, alt text
- token-diff.mjs vs phprescription.com for palette fidelity (typography is
  intentionally upgraded; hue + radius + weight classes must be coherent)
- Fresh-context independent auditor subagent scores the seven requirements

### Phase 7 - Ship + verify
Build, push, verify prod route-by-route, screenshot gallery for Tobias.

## Working rules

- No em dashes, no emojis, square buttons, phone from BUSINESS
- Explicit git paths on stage, never add -A
- Never npm run build while dev server runs
- Verify visually via chrome-devtools CDP (Browser pane freezes rAF when
  hidden; its screenshots lie on animated pages)
- Commit per phase, deploy at phase boundaries, verify prod after each push

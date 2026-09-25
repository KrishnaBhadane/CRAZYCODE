# Kreepycode

Frontend-only studio website built with Next.js App Router, TypeScript, Tailwind CSS, and Motion. Fonts and brand assets are served locally. There is no database, authentication, or application API.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Validate changes with:

```bash
npm run lint
npm run typecheck
npm run build
npm run check:seo
```

## Where to edit

| File or folder | Purpose |
| --- | --- |
| `src/app/page.tsx` | Section order |
| `src/data/site.ts` | Studio details, navigation, social links, supplied impact figures |
| `src/data/services.ts` | Services and FAQ answers |
| `src/data/pricing.ts` | Starter package scopes, INR prices, hourly rate, project explanations |
| `src/lib/contact.ts` | Email and WhatsApp enquiry links |
| `src/components/sections/` | Page sections and their CSS modules |
| `src/components/layout/` | Header, footer, and compact social icon rail |
| `src/components/contact/ContactForm.tsx` | Validated brief form that opens an email draft |
| `src/components/visuals/` | Animation and decorative components |
| `src/lib/seo.ts` | Search metadata, canonical URL, social previews, structured data |
| `src/lib/fonts.ts` | Local font configuration |
| `src/app/globals.css` | Shared design tokens, resets, accessibility styles |
| `public/images/` | Active logo, browser icon, and social preview |
| `src/assets/social-card.svg` | Editable source for the social preview PNG |

## SEO

The confirmed production address is **https://kreepycode.com**. To override it, copy `.env.example` to `.env.local`, update `SITE_URL`, and rebuild. Use the same value in the deployment environment.

The homepage has a canonical link, descriptive metadata, Open Graph/Twitter images, and Organization/WebSite JSON-LD. `/robots.txt` and `/sitemap.xml` are generated as static files. Section anchors are not separate sitemap pages. The animated headline has a single readable text copy; decorative letter repetitions are CSS content.

`npm run check:seo` checks the generated build, so run it after `npm run build`. A successful check verifies implementation; it does not submit the site to a search engine or guarantee indexing/rankings.

Only the Projects cards remain placeholders. Contact uses the supplied email, Indian phone number, LinkedIn, and GitHub profiles. The phone number is not displayed. WhatsApp still uses it in its destination URL. The contact form validates the brief and opens a prepared email draft; users send it from their email app. There is no form backend. Instagram is a disabled placeholder until a real URL is supplied.

Pricing uses INR: frontend from ₹12,000, a small full-stack build from ₹35,000, and project work at ₹750/hour. These are editable starter quotes for the limited scopes shown, not a market-average claim. Final scope is agreed before work. Research reference: [HCL GUVI freelance pricing guide](https://www.guvi.in/blog/how-to-price-your-freelance-projects/). The studio offers full-stack work; this studio website itself remains frontend-only.

Font licenses are kept alongside the fonts in `public/fonts/`. Keep `AGENTS.md`, `CLAUDE.md`, the package lockfile, and configuration files; they support development. Build caches are ignored by Git.

Browser tabs use `public/images/favicon.svg`, a circular badge with transparent corners, with `favicon-32.png` as the PNG fallback. The larger `brand-icon.png` remains the home-screen and structured-data logo.

The flame canvas caches gradients and fixed geometry between resizes, caps resolution at 1200 × 800, and targets 30 FPS with drift-corrected timing. Mobile uses five ribbons and fewer curve segments to keep each frame light. CSS animations pause in hidden tabs; the contact sculpture also pauses offscreen.

Motion uses a single section observer, CSS transforms, and a CSS 3D sculpture, without a WebGL dependency. The hero pins on desktop and mobile; taller heroes scroll to their bottom before pinning so all content stays reachable. Reduced-motion layouts scroll normally. Hidden flame rendering pauses when the hero is covered. Pricing explanations use compact native disclosure controls.

# ShiroTenma Portfolio & Commission Site

Single-page portfolio and commission hub for ShiroTenma. Built with Vue 3 + Vite, featuring animated sections, modal galleries, commission detail popups, and direct contact shortcuts.

## Features
- **SPA-ready routing**: Vercel rewrites included (`vercel.json`) so deep-links/refresh won’t 404.
- **Commission detail modal**: Per-option pricing, tailored bullet points, CTA to contact popup (WhatsApp Business / Discord).
- **Media handling**: Images auto-collected via `import.meta.glob`, hashed in build output.
- **Galleries & lightbox**: Portfolio lightbox with smooth zoom animations, zoom controls.
- **Responsive**: Modal cards adapt on mobile (auto height with sensible min-height), layout tuned for <900px and <640px.
- **Theming & motion**: Subtle hover/click states, modal open/close animations.

## Tech Stack
- Vue 3 (script setup) + Vite
- CSS (plain) with custom utility variables
- Vercel for hosting (rewrite config included)

## Getting Started
```bash
npm install
npm run dev
```
Visit the printed local URL (default `http://localhost:5173`).

## Build & Preview
```bash
npm run build     # production build (used in CI/deploy)
npm run preview   # serve built files locally
```

## Lint & Tests
- Lint: `npm run lint`
- Unit tests (if added): `npm run test:unit`

## Deployment Notes (Vercel)
- Keep `vercel.json` at repo root. It rewrites all routes to `/` so SPA navigation works on refresh/direct links.
- After `npm run build`, deploy the `dist/` output or connect the repo to Vercel; the framework preset auto-runs the build.

## Project Conventions
- Images: place under `src/assets/images/...`; reference via the `img('path/from/images')` helper (Commission/Portfolio views).
- Modals: body scroll is locked while open; contact popup is nested and closes independently.
- Commission options: each option can define its own `points` and `price`; fallback to package values if omitted.

## Structure (high level)
- `src/views/CommissionView.vue` — commission plans, detail modal, contact popup.
- `src/views/PortfolioView.vue` — portfolio sections, gallery, lightbox with zoom animation.
- `src/assets/styles/commission.css` — commission + modal + contact popup styling/responsive rules.
- `src/assets/styles/portfolio.css` — portfolio layout and lightbox animation.

## Troubleshooting
- **404 on refresh (Vercel)**: ensure `vercel.json` is deployed.
- **Images not showing**: confirm the path exists under `src/assets/images` and matches the helper call.
- **Modal clipped on mobile**: cards are auto-height with min-height 640px for <900px; adjust in `commission.css` if needed.

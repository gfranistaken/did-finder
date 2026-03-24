# DID Registry — Project Status

## What's Been Built

### Infrastructure
- [x] Next.js 15 project scaffolded at workspace root
- [x] TypeScript, Tailwind v4, App Router
- [x] `next.config.ts` — static export (`output: 'export'`)
- [x] `src/lib/types.ts` — all TypeScript interfaces (DIDDocument, DIDRequirement, DIDReference, DIDSummary)
- [x] `src/lib/github.ts` — reads from `src/data/` in dev; GitHub API in production
- [x] `src/lib/search.ts` — full-text search (string-based; FlexSearch integration is future work)
- [x] `src/lib/export-markdown.ts` — Markdown serializer (fully functional)
- [x] `src/lib/export-pdf.tsx` — PDF export stub (uses `window.print()`; @react-pdf/renderer is future work)
- [x] 4 sample DIDs as JSON in `src/data/` (dev only, not committed to repo)

### Routes
- [x] `/` — Home / DID index with search bar + browse listing
- [x] `/did/[slug]` — Individual DID viewer page with full content

### Components
- [x] `SearchPage.tsx` — Search UI + browse listing (client component)
- [x] `DIDDocument.tsx` — Full document viewer (server component)
- [x] `Requirement.tsx` — Recursive requirement tree renderer
- [x] `MetaPair.tsx` — Metadata label/value display
- [x] `ExportDropdown.tsx` — PDF/Markdown export dropdown (client component)

## In Progress / Up Next

- [x] Connect GitHub API — `gfranistaken/did-data`, branch `master`
- [x] Data repo live at `https://github.com/gfranistaken/did-data`
- [ ] Push `did-registry` app to GitHub
- [ ] Create Cloudflare Pages project (build: `npm run build`, output: `out`)
- [ ] Add `CLOUDFLARE_DEPLOY_HOOK` secret to `did-data` repo settings
- [ ] Attach custom domain `didfinder.com` in Cloudflare Pages
- [ ] Full FlexSearch integration in `search.ts`
- [ ] Real PDF export with `@react-pdf/renderer`
- [ ] `/about` page

## Dev Commands

```bash
npm run dev          # http://localhost:3000
npm run build        # static export to /out
npx tsc --noEmit     # TypeScript check
```

## Notes

- Local dev reads from `src/data/*.json` (not committed)
- Production build fetches from GitHub API — configure owner/repo first
- `memories/` directory in workspace root: gitignored, used by AI coding agent

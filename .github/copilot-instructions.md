# DID Registry — Project Memory

## What This Is

An open-source documentation platform that turns Defense Data Item Descriptions (DIDs) from static PDFs into a searchable, version-controlled web resource. Think "Mintlify for government acquisition documents."

DIDs are foundational documents in defense/government acquisition — they define the format, content, and delivery requirements for contract data. Today they are scattered PDFs with no search, no comparison, and no open change process. This project fixes that.

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router, TypeScript) | SSG / static export |
| Styling | Tailwind CSS | utility-first, no component libraries |
| Search | FlexSearch | client-side, built at page load |
| PDF Export | @react-pdf/renderer | client-side, no server |
| Hosting | Cloudflare Pages | static files, global CDN, free tier |
| Domain | didfinder.com | managed in Cloudflare DNS |
| CI/CD | Cloudflare Pages + GitHub Actions | auto-deploy on push; data repo triggers rebuild via webhook |

## Project Structure

```
src/
  app/
    layout.tsx                  # Root layout (fonts, metadata)
    page.tsx                    # Home / DID index (search + browse)
    globals.css
    did/[slug]/page.tsx         # Individual DID viewer page
  components/
    SearchPage.tsx              # Search UI component
    DIDDocument.tsx             # Document viewer component
    Requirement.tsx             # Recursive requirement renderer
    ExportDropdown.tsx          # PDF/MD export dropdown
    MetaPair.tsx                # Metadata display component
  lib/
    types.ts                    # TypeScript interfaces for DID schema
    github.ts                   # Fetch DIDs from GitHub at build time
    search.ts                   # FlexSearch index builder
    export-pdf.tsx              # PDF generation with @react-pdf
    export-markdown.ts          # Markdown serializer
  data/                         # Local DID JSON files (dev only, not committed)
```

## Key Conventions

- Use React Server Components by default — only add `"use client"` when interactivity requires it
- Fetch all DID data at build time via `generateStaticParams` + `fetchAllDIDs()`
- Local dev reads from `src/data/*.json`; production fetches from GitHub API
- Tailwind for all styling — no custom CSS files, no external component libraries
- No `any` types in TypeScript
- Minimal changes — don't refactor or add features beyond what was asked

## DID JSON Schema

Full schema reference is in `.github/skills/did-schema/SKILL.md`. Key points:
- Schema version: `3.0`
- Core fields: `document_number`, `slug`, `title`, `approval_date`, `did_format`, `963c_compliant`, `preparation_instructions[]`
- `preparation_instructions` replaces the old `requirements` field — same recursive tree structure
- Each node has `number`, `title`, `content`, `asterisk`, `children[]`
- `asterisk: true` means the requirement is tailorable (conditional)
- New fields: `did_format` (`dd_form_1664` or `free_text`), `963c_compliant` (bool), `approval_limitation`, `description_purpose`, `application_interrelationship`

## Build & Dev Commands

```bash
npm run dev          # Local dev server (http://localhost:3000)
npm run build        # Production static export
npx tsc --noEmit     # TypeScript check without building
```

## Routes

```
/                    → Home / DID index (search + browse listing)
/did/{slug}          → Individual DID viewer page
/about               → Project overview and contribution guide
```

## Current Status

See `.github/project-status.md` for what's been built, what's in progress, and what's next.
Run `/checkpoint` to update that file after a work session.

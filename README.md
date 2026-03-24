# DIDfinder

**[didfinder.com](https://didfinder.com)** — A community-maintained, searchable web resource for DoD Data Item Descriptions (DIDs).

DIDs are foundational documents in defense acquisition — they define the format, content, and delivery requirements for contract data. Today they are scattered PDFs with no search, no version history, and no open contribution process. DIDfinder fixes that.

## What It Does

- **Search** all DIDs by number, title, or requirement content (including nested requirements)
- **Browse** the full index with one-click access to any DID
- **Read** structured DID content — requirements, metadata, references
- **Export** any DID as Markdown or PDF

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript, static export) |
| Styling | Tailwind CSS v4 |
| Search | Client-side string search (FlexSearch planned) |
| PDF Export | `window.print()` with print CSS (`@react-pdf/renderer` planned) |
| Hosting | Cloudflare Pages |
| Domain | didfinder.com |
| Data | [gfranistaken/did-data](https://github.com/gfranistaken/did-data) |

## Data Repo

DID JSON files live in a separate repository: [`gfranistaken/did-data`](https://github.com/gfranistaken/did-data).

At build time, the app fetches all JSON files from that repo via the GitHub API. There is no database — everything is pre-rendered at build time.

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to /out
npx tsc --noEmit     # TypeScript check
```

Local dev reads from `src/data/*.json` (not committed). Add sample DID JSON files there to work with real content.

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout, metadata, fonts
    page.tsx                # Home page (search + browse)
    globals.css
    did/[slug]/page.tsx     # DID viewer page
  components/
    SearchPage.tsx          # Search UI
    DIDDocument.tsx         # Document viewer
    Requirement.tsx         # Recursive requirement renderer
    ExportDropdown.tsx      # PDF/MD export
    MetaPair.tsx            # Metadata display
  lib/
    types.ts                # TypeScript interfaces
    github.ts               # Data fetching (local dev / GitHub API)
    search.ts               # Search index
    export-markdown.ts      # Markdown serializer
    export-pdf.tsx          # PDF export
  data/                     # Dev-only sample JSON (gitignored)
```

## Contributing

To add or correct a DID, contribute to the data repo: [gfranistaken/did-data](https://github.com/gfranistaken/did-data).

To improve the viewer app, open a pull request here.

## License

MIT

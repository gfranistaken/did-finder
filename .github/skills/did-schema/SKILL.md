---
name: did-schema
description: "Deep reference for the DID JSON schema v2.0. Use when: reading, writing, or validating DID JSON files; building or updating TypeScript interfaces in types.ts; rendering DID content in React components; understanding the requirements tree structure or asterisk/tailorability rules."
argument-hint: "Describe what you need to do with the schema"
---
# DID JSON Schema v2.0

## Top-Level Fields

| Field | Type | Notes |
|---|---|---|
| `document_number` | `string` | e.g., `"DI-SESS-81248B"` |
| `slug` | `string` | URL-safe ID, e.g., `"di-sess-81248b"` — used as the route param in `/did/[slug]` |
| `title` | `string` | Full document title |
| `summary` | `string` | One-paragraph description of purpose |
| `approval_date` | `string` | ISO date, e.g., `"2015-04-07"` |
| `amsc_number` | `string` | Acquisition Method Suffix Code |
| `limitation` | `string` | Distribution limitation text |
| `dtic_applicable` | `string` | `"Yes"` or `"No"` |
| `gidep_applicable` | `string` | `"Yes"` or `"No"` |
| `office_of_primary_responsibility` | `string` | OPR name |
| `preparing_activity` | `string` | e.g., `"MI"`, `"NM"`, `"AR"` |
| `project_number` | `string` | |
| `applicable_forms` | `string` | |
| `form_version` | `string` | |
| `use_relationship` | `string` | Multi-paragraph prose — the "when to use" section |
| `supersedes` | `string[]` | Document numbers this DID replaces |
| `related_dids` | `string[]` | Related DID document numbers |
| `references` | `DIDReference[]` | `{ label: string; url: string }` |
| `distribution_statement` | `string` | |
| `requirements` | `DIDRequirement[]` | Recursive requirement tree (see below) |
| `_source` | `object` | Extraction metadata — not displayed to users |
| `_schema_version` | `string` | Always `"2.0"` |

## Requirements Tree (Recursive)

Requirements are a tree — every node can have children of the same shape.

```typescript
interface DIDRequirement {
  number: string;     // e.g., "3", "3.a", "3.1.b" — display as-is
  title: string;      // Section heading
  content: string;    // Body text (can be multi-paragraph)
  asterisk: boolean;  // true = tailorable requirement — show a visual indicator
  children: DIDRequirement[];  // Same structure, nested arbitrarily deep
}
```

**Rendering guidance:**
- Top-level requirements (where `number` is just `"1"`, `"2"`, `"3"`) render as sections
- Children are indented sub-items
- `asterisk: true` gets a visual tailorable badge/icon
- Use a recursive `<Requirement>` component — see `src/components/Requirement.tsx`

## Full TypeScript Interfaces (canonical — matches `src/lib/types.ts`)

```typescript
export interface DIDReference {
  label: string;
  url: string;
}

export interface DIDRequirement {
  number: string;
  title: string;
  content: string;
  asterisk: boolean;
  children: DIDRequirement[];
}

export interface DIDDocument {
  document_number: string;
  slug: string;
  title: string;
  summary: string;
  approval_date: string;
  amsc_number: string;
  limitation: string;
  dtic_applicable: string;
  gidep_applicable: string;
  office_of_primary_responsibility: string;
  preparing_activity: string;
  project_number: string;
  applicable_forms: string;
  form_version: string;
  use_relationship: string;
  supersedes: string[];
  related_dids: string[];
  references: DIDReference[];
  distribution_statement: string;
  requirements: DIDRequirement[];
  _source: {
    source_file: string;
    extraction_date: string;
    extraction_method: string;
  };
  _schema_version: string;
}

// Lightweight version used in search results and index listings
export interface DIDSummary {
  document_number: string;
  slug: string;
  title: string;
  approval_date: string;
}
```

## Sample JSON Files (local dev)

Located in `src/data/`:
- `DI-SESS-81223A_Schematic_Block_Diagrams.json`
- `DI-SESS-81248B_Interface_Control_Document__ICD_.json`
- `DI-SESS-80858D__Supplier_s_Configuration_Management_Plan.json`
- `DI-SESS-81001E_conceptual_desin_drawing_models.json`

In development, `src/lib/github.ts` reads from this folder.
In production builds, it fetches from the GitHub API instead.

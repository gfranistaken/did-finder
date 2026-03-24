---
description: "Review code for bugs, quality issues, TypeScript problems, and alignment with project conventions and the PRD."
name: "Review Code"
argument-hint: "File path or area to review (e.g. 'src/components/SearchPage.tsx' or 'the search feature')"
agent: "Planner"
tools: [read, search]
---
Review the following code for issues:

**Scope:** $input

## Review Criteria

1. **Correctness** — Does it do what the PRD specifies? Any logic errors or missed edge cases?
2. **TypeScript** — Any `any` types, missing types, or type mismatches?
3. **Conventions** — Does it follow the patterns in the rest of the codebase? (Read similar files to check.)
4. **React patterns** — Is `"use client"` used only where necessary? Are Server Components used where possible?
5. **Performance** — Any unnecessary re-renders, large client bundles, or blocking data fetches?
6. **Security** — Any user input rendered unescaped? Any API keys or secrets hardcoded?
7. **PRD alignment** — Does the implementation match the specs in [PRD_DID_Viewer.md](../PRD_DID_Viewer.md)?

## Output Format

List each issue as:
**[High/Medium/Low]** — `file/path.tsx` — Description of the problem — Suggested fix

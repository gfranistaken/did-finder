---
description: "Implement a feature from the PRD. Describe what to build."
name: "Implement Feature"
argument-hint: "Describe the feature to implement (reference a PRD section number if applicable)"
agent: "Autonomous Coder"
tools: [read, edit, search, execute]
---
Implement the following feature for the DID Registry:

**Feature:** $input

## Instructions

1. Read [PRD_DID_Viewer.md](../PRD_DID_Viewer.md) for the full product requirements and spec.
2. Read all existing files relevant to the feature before writing any code.
3. Follow existing code patterns — read similar files to understand conventions before adding new ones.
4. Only build what was asked. Don't add extras, clean up unrelated code, or pre-optimize.
5. Use React Server Components unless interactivity specifically requires `"use client"`.
6. Use Tailwind for all styling — no new CSS files, no component libraries.
7. No `any` types in TypeScript.
8. After editing, run `npx tsc --noEmit` to verify no TypeScript errors.
9. Report: what was built, which files were created or changed, and any follow-up steps needed.

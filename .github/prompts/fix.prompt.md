---
description: "Fix a bug. Describe what's broken, what was expected, and where it occurs."
name: "Fix Bug"
argument-hint: "Describe the bug: what's broken, what was expected, and in which file/component"
agent: "Autonomous Coder"
tools: [read, edit, search, execute]
---
Fix the following bug in this codebase:

**Bug description:** $input

## Instructions

1. Read the relevant files before making any changes. Understand the existing code fully.
2. Identify the root cause — don't just treat the symptom.
3. Make the minimal change needed to fix it. Don't refactor surrounding code.
4. After editing, run `npx tsc --noEmit` to confirm no TypeScript errors were introduced.
5. Report: what caused the bug, what you changed, and which files were modified.

---
description: "Capture current project state: what's built, what's working, what's next. Run after a work session to save context for future sessions."
name: "Checkpoint"
agent: "Autonomous Coder"
tools: [read, search, edit, execute]
---
Survey the current state of the project and update `.github/project-status.md` with a fresh snapshot.

## Instructions

1. Read [PRD_DID_Viewer.md](../PRD_DID_Viewer.md) to get the full feature list.
2. Examine all files in `src/` to understand what has been built.
3. Run `npx tsc --noEmit` to check for type errors.
4. Create or overwrite `.github/project-status.md` with the following sections:

---

**Last updated:** [today's date]

**What's complete:**
- List each finished feature and file

**What's in progress or partial:**
- Brief description of anything half-built or blocked

**What's not started:**
- PRD items that have no implementation yet

**Known issues:**
- Type errors, broken features, TODOs found in code

**Next recommended action:**
- One clear, specific next step

---

Keep it concise. This file is read at the start of every new session to restore project context quickly.

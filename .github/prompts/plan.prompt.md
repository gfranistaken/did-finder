---
description: "Plan an implementation before writing code. Returns a step-by-step checklist. Use before /implement for complex tasks."
name: "Plan"
argument-hint: "Describe the task you want to plan (feature, fix, or refactor)"
agent: "Planner"
tools: [read, search]
---
Create a detailed implementation plan for the following task. Do NOT write any code.

**Task:** $input

## Instructions

1. Read [PRD_DID_Viewer.md](../PRD_DID_Viewer.md) and [SETUP_GUIDE.md](../SETUP_GUIDE.md) for project context.
2. Read `.github/project-status.md` if it exists, to understand what's already built.
3. Read all existing files relevant to this task to understand the current codebase.
4. DO NOT create, edit, or delete any files. This is research and planning only.

## Output

Produce a numbered step-by-step implementation plan that covers:
- Which files to create or modify (with exact paths)
- What each change does and why
- Any order dependencies ("do step X before step Y")
- Edge cases or risks to watch for

Format as a checklist that can be handed directly to the Autonomous Coder agent.

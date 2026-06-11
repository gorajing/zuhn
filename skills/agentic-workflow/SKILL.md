---
name: agentic-workflow
description: Run a bounded, verified agentic work loop for broad coding, repo-audit, ingestion, planning, and workflow-improvement tasks
allowed-tools: [Read, Write, Bash, Edit]
---

## Agentic Workflow

Use this skill when the request is bigger than a quick answer: "keep pushing,"
"check everything," "improve the workflow," "turn this plan into changes,"
"audit the repo," or any task that needs intent, context, execution,
verification, and a concrete handoff.

### Operating Standard

Convert the request into a verified work loop. Do not merely propose a plan when
the user expects execution. Work from current files, commands, runtime evidence,
and project instructions. Preserve human-owned boundaries. Finish with proof
that matches the scope of the claim.

### Core Loop

1. **Intent packet:** State the goal, acceptance checks, likely surfaces,
   constraints, risks, and human-owned boundaries. Keep it short unless the work
   is broad or risky.
2. **Bounded context:** Inspect current state before acting. Start with the
   smallest authoritative surface that can change the next action. Stop
   expanding unless a specific risk points elsewhere.
3. **Chunked execution:** Make the smallest meaningful slice that advances the
   real goal. For long work, checkpoint after each slice with evidence and the
   next action.
4. **Deterministic verification:** Run checks that observe the artifact itself:
   tests, builds, health checks, contract verifiers, browser smoke, CLI output,
   tracker counts, git diffs, logs, or source manifests.
5. **Fresh-context review:** For risky or broad changes, run an independent
   review pass: a clean shell check, focused diff audit, separate reviewer, or
   fresh read of the changed surface.
6. **Decision trace:** Preserve durable "why" when a choice affects future work.
   Use a doc, ADR, tracker, Zuun memory, Zuhn insight, or final handoff.
7. **Handoff:** Report what changed, what passed, what remains dirty or
   unverified, and what human action remains. Never hide known failures.

### Bounded First Pass

For repo audits or "check everything" requests, inspect only enough to choose the
next action:

```bash
git status --short --branch
git diff --stat
git diff --cached --stat
```

Then read the project instructions, package scripts, CI config, test configs,
recent commits, and any tracker/docs that explain current state. Do not inspect
large generated artifacts, media outputs, vendor folders, or every source
directory unless the claim depends on them or the first pass reveals a specific
risk.

Stop gathering context when additional files would not change the next action,
verification gate, or risk assessment.

### Mode Guide

| Mode | Use When | First Move | Verification |
|------|----------|------------|--------------|
| Build/fix | A behavior is broken or missing | Reproduce or define the failing behavior | Test/repro that would fail before the fix |
| Repo audit | The user asks for state, risk, or readiness | Inspect git, docs, scripts, tests, CI, recent commits | Health/contracts/tests plus final dirty-state audit |
| Ingestion | Sources or knowledge extraction are involved | Reconcile requested count, source count, tracker state | Health, reindex, extraction markers, final counts |
| Planning | The user asks how to proceed | Produce gates and next actions | Each recommendation maps to observable evidence |
| Strategy | Tradeoffs or direction choices matter | Retrieve relevant principles/memory when available | Separate confirmed evidence from inference |

### Verification Gates

Always choose gates that match the blast radius:

- **Universal:** `git status --short --branch`, relevant diff review, and
  repo-specific scripts from `package.json`, docs, CI, or Makefiles.
- **Code:** smallest regression test first, then broader tests/build/typecheck
  when shared contracts or user-facing behavior changed.
- **UI:** start the app when needed, inspect rendered behavior, and check
  viewport/layout risks with screenshots or browser automation.
- **Knowledge base:** reconcile requested count, tracker count, source files,
  extraction metrics, final health, and generated views/indexes.
- **Docs/skills:** run contract checks when public claims, command names, tool
  lists, or skill counts changed.

If a command cannot run, say exactly why and what remains unverified.

### Decision Trace

Capture durable choices in this compact shape:

```markdown
Decision: <what we chose>
Reason: <why this is better for this repo/user/context>
Evidence: <files, commands, metrics, sources, or observed behavior>
Rejected: <main alternative and why not>
Gate: <how future work can verify this still holds>
```

Capture architecture choices, scope boundaries, verification contracts, and
workflow lessons future agents would otherwise have to rediscover. Do not
capture step-by-step logs, fixed bugs already represented by the diff,
unverified speculation, or generic advice.

### Non-Negotiables

- Re-read files before editing them; memory is not current state.
- Do not weaken verification to get a green result.
- Do not commit, push, submit, archive, or cross other human-owned boundaries
  unless the user asked for that action or the repo workflow clearly owns it.
- Treat dirty git state as evidence. Identify unrelated changes and leave them
  alone.
- Match verification scope to the claim. A narrow check cannot prove a broad
  outcome.
- Continue when completion evidence is missing; do not redefine success around
  what already happened.

<!--
PR template for Zuhn. Codex reviews PRs against this scaffold and the
project's CLAUDE.md / AGENTS.md conventions.

Pure data updates (insights, principles, sources, views) flow through
post-ingest's auto-git step directly to main and do NOT use PRs.
This template is for code, schema, hooks, briefs, or docs.
-->

## What this changes

<!-- 1-3 sentences naming the user-facing or behavior-facing change. -->

## Why

<!-- The problem being solved or the capability being added. -->

## Scope

- [ ] Code (scripts, schemas, agents, hooks)
- [ ] CI / GitHub workflows
- [ ] Tests
- [ ] Briefs / docs / README
- [ ] Skills
- [ ] Other: ____

## Risk surface

<!-- What could break if this is wrong? Which parts of the pipeline
     does this touch? Add nothing if risk is low; add specifics if not. -->

## Tests

<!-- New tests added, or rationale for not adding any. Reference test
     files by path. -->

## Out of scope

<!-- Adjacent things you noticed but did not fix here. Helps reviewers
     calibrate scope and prevents scope-creep ratchet. -->

## Verification

<!-- How you confirmed this works. Commands run, manual checks, etc. -->

---

🤖 If Codex review surfaces non-trivial findings, address or explicitly
acknowledge each one before merging.

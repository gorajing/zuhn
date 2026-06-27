---
id: INS-260605-EA2E
domain: ai-development
topic: system-design
title: 'Replace PRs with an intent-and-plan inner loop, not faster review'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-harness
  - spec-driven-development
  - ci-cd
  - workflow-architecture
  - intent-based
sources:
  - type: youtube
    title: >-
      CI/CD Is Dead, Agents Need Continuous Compute and Computers — Hugo Santos
      and Madison Faulkner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VktrqzQgytY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start from a written spec (intent + plan), feed it to an agent harness that
    checks out a known commit, validates internally each iteration, and only
    surfaces to a human for continue/stop.
  standard: >-
    Namespace's team and the frontier companies they work with (Fal, Zed, Ramp)
    have already removed PRs from their inner loop. The new primitive is intent
    and plan: a goal codified somewhere durable — a Linear ticket, a Slack
    message, a spec doc. That intent feeds an agent harness (Amp, Claude Code,
    Cursor, Factory) which checks out a well-known commit, implements toward the
    plan, and runs internal validation using the repository's own assets (build
    it, test it) before reporting back. The human's role shrinks to a tight
    'does this look good? continue?' decision — 'continue' being the most-used
    word. Coordination that CI used to own (ordering changes, gating on passing
    tests) moves inside this loop. The actionable shift for teams is to treat
    the spec as the unit of work and invest in harness configuration and fast
    local validation rather than PR-review tooling.
stance: >-
  Agentic development should be architected around a codified intent/plan that
  an agent harness executes in a continuous loop, eliminating the PR as the
  coordination primitive.
related:
  - INS-260605-D777
  - INS-260627-9EBD
  - INS-260524-2C7C
  - INS-260605-B136
  - INS-260605-3AAF
---
Namespace's team and the frontier companies they work with (Fal, Zed, Ramp) have already removed PRs from their inner loop. The new primitive is intent and plan: a goal codified somewhere durable — a Linear ticket, a Slack message, a spec doc. That intent feeds an agent harness (Amp, Claude Code, Cursor, Factory) which checks out a well-known commit, implements toward the plan, and runs internal validation using the repository's own assets (build it, test it) before reporting back. The human's role shrinks to a tight 'does this look good? continue?' decision — 'continue' being the most-used word. Coordination that CI used to own (ordering changes, gating on passing tests) moves inside this loop. The actionable shift for teams is to treat the spec as the unit of work and invest in harness configuration and fast local validation rather than PR-review tooling.

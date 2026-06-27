---
id: INS-260626-690F
domain: ai-development
topic: agent-patterns
title: 'Agent code review must read the whole repo, not just the diff'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - code-review
  - agent-design
  - context-window
  - second-order-effects
  - delegation
sources:
  - type: youtube
    title: OpenAI Codex Masterclass  — Vaibhav Srivastav & Katia Gil Guzman
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MhHEGMFCEB0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The reason agent code review earns enough trust to gate every PR is that it
    contextualizes the diff against the full codebase and flags breakages in
    untouched modules, not just lines in the diff.
  standard: >-
    Codex's reviewer spins up a fresh process with a dedicated review system
    prompt and, crucially, does not limit itself to the diff or the list of
    changes — it contextualizes the changes against everything in the repo. The
    presenter's claim is that this is exactly why it surfaces second-order
    effects: changes whose consequences land in modules the author never touched
    in the PR. That whole-repo reasoning is the stated reason 100% of pull
    requests across all OpenAI repos are auto-reviewed by Codex as the mandatory
    first pass.


    The actionable principle survives the vendor framing: diff-only review (the
    default mental model for both humans and tools) systematically misses the
    failures that matter most — the ripple effects. An agent reviewer's edge
    over a human is precisely its ability to hold and traverse the whole
    codebase, so the review configuration should feed it repo-wide context
    rather than just the patch. When delegating code to agents at scale you can
    no longer read every line yourself, so the review pass becomes the
    load-bearing trust mechanism — and a review that only sees the diff is not
    strong enough to bear that load.
stance: >-
  Trustworthy agent code review reads the entire repository for context so it
  can catch second-order effects in modules the PR never touched.
related:
  - INS-260320-1B10
  - INS-260514-6DF3
  - INS-260524-63C9
  - INS-260603-73D5
  - INS-260625-14F9
  - INS-260625-ACBC
  - INS-260626-9155
  - INS-260530-D34F
  - PRI-260406-3EF8
  - INS-260626-5375
---
Codex's reviewer spins up a fresh process with a dedicated review system prompt and, crucially, does not limit itself to the diff or the list of changes — it contextualizes the changes against everything in the repo. The presenter's claim is that this is exactly why it surfaces second-order effects: changes whose consequences land in modules the author never touched in the PR. That whole-repo reasoning is the stated reason 100% of pull requests across all OpenAI repos are auto-reviewed by Codex as the mandatory first pass.

The actionable principle survives the vendor framing: diff-only review (the default mental model for both humans and tools) systematically misses the failures that matter most — the ripple effects. An agent reviewer's edge over a human is precisely its ability to hold and traverse the whole codebase, so the review configuration should feed it repo-wide context rather than just the patch. When delegating code to agents at scale you can no longer read every line yourself, so the review pass becomes the load-bearing trust mechanism — and a review that only sees the diff is not strong enough to bear that load.

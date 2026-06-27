---
id: INS-260501-22AD
domain: ai-development
topic: claude-code
title: >-
  Different models for different roles — Opus is the ADHD CEO, Codex is the
  autistic CTO
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - model-selection
  - opus-vs-codex
  - role-based-routing
  - model-personality
sources:
  - type: youtube
    title: How to Make Claude Code Your AI Engineering Team
    author: Y Combinator
    url: 'https://youtu.be/wkv2ifxPpF8'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Opus 4.6 is the beer-with-you ADHD CEO with a billion ideas. Codex is the
    autistic CTO who debugs the impossible. Use both, in sequence.
  standard: >-
    Tan's mental model: by default Claude Code uses Opus 4.6 — 'the ADHD CEO.
    He's the guy you want to get a beer with and he's got a billion ideas.'
    That's right for ideation, exploration, structuring options, broad
    architectural thinking. But 'when the going gets tough, you got to call in
    your autistic CTO and that's Codex' — for grinding through complex bugs,
    edge cases, implementation correctness. The two models have genuinely
    different strength profiles.


    The operational pattern: route within your workflow, not across your
    workflow. A single feature might use Opus for office hours / planning /
    design and then switch to Codex for implementation correctness and
    bug-fixing. This isn't model agnosticism; it's model casting — picking the
    right model for the role. For builders: the practical upshot is that 'which
    model is best?' is the wrong question. The right question is 'which model
    for which role within this workflow?' For Zuhn editorially: this generalizes
    — Opus-class for editorial framing, Codex-class for technical
    implementation, smaller models for routine extraction. The right
    architecture is multi-model orchestration with deliberate routing, not
    single-model maximization.
stance: >-
  Within a single workflow, the right pattern is to use different models for
  different cognitive roles: Claude (Opus 4.6) for ideation, exploration, and
  broad architectural thinking; Codex for grinding through complex bugs, edge
  cases, and implementation correctness — because they have genuinely different
  strength profiles.
related:
  - INS-260327-8389
  - INS-260403-E209
  - INS-260321-1A84
  - PRI-260406-4E6C
  - INS-260627-453E
---
Tan's mental model: by default Claude Code uses Opus 4.6 — 'the ADHD CEO. He's the guy you want to get a beer with and he's got a billion ideas.' That's right for ideation, exploration, structuring options, broad architectural thinking. But 'when the going gets tough, you got to call in your autistic CTO and that's Codex' — for grinding through complex bugs, edge cases, implementation correctness. The two models have genuinely different strength profiles.

The operational pattern: route within your workflow, not across your workflow. A single feature might use Opus for office hours / planning / design and then switch to Codex for implementation correctness and bug-fixing. This isn't model agnosticism; it's model casting — picking the right model for the role. For builders: the practical upshot is that 'which model is best?' is the wrong question. The right question is 'which model for which role within this workflow?' For Zuhn editorially: this generalizes — Opus-class for editorial framing, Codex-class for technical implementation, smaller models for routine extraction. The right architecture is multi-model orchestration with deliberate routing, not single-model maximization.

---
id: INS-260605-B8D3
domain: ai-development
topic: agent-patterns
title: A bolt-on tool underperforms one the model was trained to use
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - tool-use
  - model-training
  - claude-code
  - cursor
sources:
  - type: youtube
    title: >-
      Benchmarking semantic code retrieval on Claude Code — Kuba Rogut,
      Turbopuffer
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zKk7sDMGDEQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cursor's composer sees ~23% gains from native semantic search while Claude
    Code sees less, because Anthropic built Claude to grep and the vector tool
    is merely appended.
  standard: >-
    Adding the same Turbopuffer search tool to Claude Code produced real
    precision gains but underperformed Cursor's results. The speaker's
    explanation is that Claude Code is built and trained for grep — Anthropic's
    deliberate focus — so an externally attached semantic tool reads to the
    model as 'here's a cool tool you should probably use sometimes,' without a
    true sense of when, why, or how to invoke it. Cursor's composer instead
    treats semantic search as a built-in capability it knows how to wield, and
    that integration is why it captures ~23.5% answer-accuracy improvement.


    The lesson generalizes beyond search: a tool's value to an agent is gated by
    how well the model understands its invocation conditions, which comes from
    training and tight integration, not from mere availability. When evaluating
    any agent tool, separate 'the tool works' from 'the model knows when to
    reach for it' — the second is often the binding constraint.
stance: >-
  Semantic search gives smaller gains in Claude Code than in Cursor because
  effectiveness depends on the model being built to know when and how to call
  the tool, not just having access to it.
related:
  - INS-260605-FE8E
  - INS-260325-E652
  - INS-260405-214D
  - INS-260404-573C
  - INS-260402-28BA
---
Adding the same Turbopuffer search tool to Claude Code produced real precision gains but underperformed Cursor's results. The speaker's explanation is that Claude Code is built and trained for grep — Anthropic's deliberate focus — so an externally attached semantic tool reads to the model as 'here's a cool tool you should probably use sometimes,' without a true sense of when, why, or how to invoke it. Cursor's composer instead treats semantic search as a built-in capability it knows how to wield, and that integration is why it captures ~23.5% answer-accuracy improvement.

The lesson generalizes beyond search: a tool's value to an agent is gated by how well the model understands its invocation conditions, which comes from training and tight integration, not from mere availability. When evaluating any agent tool, separate 'the tool works' from 'the model knows when to reach for it' — the second is often the binding constraint.

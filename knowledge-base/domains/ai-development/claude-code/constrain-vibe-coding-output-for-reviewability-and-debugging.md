---
id: INS-260605-DFF5
domain: ai-development
topic: claude-code
title: Constrain vibe-coding output for reviewability and debugging
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - vibe-coding
  - agentic-coding
  - code-review
  - debugging
  - prompting
  - ai-studio
sources:
  - type: youtube
    title: >-
      Prompt to Pipeline: Building with Google's Gen Media Stack — Paige &
      Guillaume, Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ns9f1fjLD7Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two standing instructions — one file per feature, and add logging everywhere
    — turn opaque AI-generated apps into reviewable, debuggable code.
  standard: >-
    Guillaume's standing guidelines for AI Studio's build feature (and
    vibe-coding generally) target the recurring failure mode that bit Paige's
    demo: an app breaks, and you have to spelunk to find what went wrong. First,
    he instructs the model to create a separate file for each feature, so that
    when he asks for a change and the model edits something unrelated, he
    immediately knows something is off and can review more sharply. Second —
    'something I don't understand why it's not default in any vibe coding tool'
    — he instructs it to add logs, because an error message alone is
    insufficient; you need to know what happened before and where it happened to
    debug effectively.


    The underlying principle is that AI-generated code is only as valuable as
    your ability to verify and fix it, so prompts should optimize for human (and
    agent) inspectability, not just for the feature working on the first try.
    This pairs with the broader pattern of giving coding agents structure —
    separate edit vs. rewrite tools, MCP servers, skills — to keep their
    decisions legible and correctable.
stance: >-
  Telling a coding agent to put each feature in its own file and to add logging
  makes its output far easier to review and debug.
related:
  - INS-260329-917B
  - INS-260409-4CE8
  - INS-260410-BBC1
  - INS-260320-DC3C
  - INS-260501-7726
  - INS-260322-24FB
---
Guillaume's standing guidelines for AI Studio's build feature (and vibe-coding generally) target the recurring failure mode that bit Paige's demo: an app breaks, and you have to spelunk to find what went wrong. First, he instructs the model to create a separate file for each feature, so that when he asks for a change and the model edits something unrelated, he immediately knows something is off and can review more sharply. Second — 'something I don't understand why it's not default in any vibe coding tool' — he instructs it to add logs, because an error message alone is insufficient; you need to know what happened before and where it happened to debug effectively.

The underlying principle is that AI-generated code is only as valuable as your ability to verify and fix it, so prompts should optimize for human (and agent) inspectability, not just for the feature working on the first try. This pairs with the broader pattern of giving coding agents structure — separate edit vs. rewrite tools, MCP servers, skills — to keep their decisions legible and correctable.

---
id: INS-260626-EB91
domain: ai-development
topic: prompting
title: >-
  Prompt assembly order is load-bearing: render human context before numeric
  constraints
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompt-assembly
  - ordering
  - tone
  - context-injection
  - prompt-engineering
sources:
  - type: youtube
    title: >-
      Stop Writing Tone Instructions. Layer Them. - Isadora Martin-Dye, Isadora
      & Co
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ij-AU9dpJjc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Render soft human context before the numeric guard block so the model sets
    tone first and then satisfies constraints — reversing the order makes prose
    feel mechanically slotted.
  standard: >-
    Beyond which layers exist, the order in which content is rendered into the
    assembled prompt materially changes output quality. The assembler
    deliberately renders the couple's soft-context note block before the
    numbers-guard block, so the LLM sets tone first from qualitative context,
    then satisfies numeric content constraints. Reversing the order makes the
    prose feel mechanically slotted, because the model is already committed to
    the numeric framing before it ever reads the qualitative tone fuel. A
    related discipline: soft context notes are used for tone, empathy, and
    what-not-to-say, but never quoted verbatim — a couple in grief should hear
    gentleness, not a quote about their loss. The general lesson is that LLMs
    anchor on whatever they read first, so an assembled prompt should sequence
    human/emotional context ahead of hard constraints when natural-feeling prose
    matters.
stance: >-
  Rendering qualitative tone context before numeric constraints in an assembled
  prompt produces more natural output, because the model commits to whatever
  framing it reads first.
related:
  - INS-260605-9362
  - INS-260605-287A
  - INS-260321-82FE
  - INS-260403-F400
  - INS-260605-C28F
  - INS-260625-BD36
---
Beyond which layers exist, the order in which content is rendered into the assembled prompt materially changes output quality. The assembler deliberately renders the couple's soft-context note block before the numbers-guard block, so the LLM sets tone first from qualitative context, then satisfies numeric content constraints. Reversing the order makes the prose feel mechanically slotted, because the model is already committed to the numeric framing before it ever reads the qualitative tone fuel. A related discipline: soft context notes are used for tone, empathy, and what-not-to-say, but never quoted verbatim — a couple in grief should hear gentleness, not a quote about their loss. The general lesson is that LLMs anchor on whatever they read first, so an assembled prompt should sequence human/emotional context ahead of hard constraints when natural-feeling prose matters.

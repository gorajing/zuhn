---
id: INS-260605-6C0C
domain: ai-development
topic: productivity
title: Cherry-picking from parallel generations artificially induces taste
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - sampling
  - design-taste
  - parallel-generation
  - ui
  - exploration
sources:
  - type: youtube
    title: 'Fast Models Need Slow Developers — Sarah Chieng, Cerebras'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TeGsFFNqRLA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have a fast model generate 15 (or 75 via parallel sub-agents) versions in
    the time one used to take, then pick the best — selection substitutes for
    the model's missing taste.
  standard: >-
    Models have no taste, and the usual workarounds are expensive: hand-crafting
    an example, hunting for reference examples, or writing a prompt so detailed
    you might as well have done the task yourself. Chieng proposes exploiting
    cheap parallel generation instead — ask a fast model for 15 versions of a
    navbar, or spawn five sub-agents each producing 15 for 75 total, then
    cherry-pick the one you like.


    The insight is that human selection over a diverse generated set
    'artificially induces taste' that the model itself lacks. This works best
    where variety and quantity carry the value: UI and graphic design, research
    directions, architecture options. It reframes the human's role from
    specifying the output up front to curating from a generated population — a
    shift only made practical because fast inference collapses the cost of
    generating many candidates to roughly the cost that one candidate used to
    take.
stance: >-
  Generating many parallel versions and cherry-picking the best is a better way
  to get tasteful output than over-specifying a prompt.
related:
  - INS-260410-2307
  - INS-260605-21A5
  - INS-260625-00D5
  - INS-260626-5A6D
  - INS-260410-939B
  - INS-260605-9F16
---
Models have no taste, and the usual workarounds are expensive: hand-crafting an example, hunting for reference examples, or writing a prompt so detailed you might as well have done the task yourself. Chieng proposes exploiting cheap parallel generation instead — ask a fast model for 15 versions of a navbar, or spawn five sub-agents each producing 15 for 75 total, then cherry-pick the one you like.

The insight is that human selection over a diverse generated set 'artificially induces taste' that the model itself lacks. This works best where variety and quantity carry the value: UI and graphic design, research directions, architecture options. It reframes the human's role from specifying the output up front to curating from a generated population — a shift only made practical because fast inference collapses the cost of generating many candidates to roughly the cost that one candidate used to take.

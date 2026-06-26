---
id: INS-260625-E1CB
domain: ai-development
topic: llm-costs
title: 'Have the LLM write the parser, don''t parse with the LLM'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - token-cost
  - scraping
  - code-generation
  - scaling
  - determinism
sources:
  - type: youtube
    title: 'Your Agent''s Biggest Lie: "I Searched the Web" — Rafael Levi, Bright Data'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=btxGmN8RvNU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't run 10,000 pages through an LLM to extract fields—have the LLM write a
    parser once, then execute the script, cutting roughly 99% of tokens while
    gaining determinism.
  standard: >-
    The speaker's scaling tip is to keep the LLM out of the hot loop. Parsing
    each of thousands of pages with the model is token-heavy, slow, and
    non-deterministic. Instead, use the LLM once—at design time—to author a
    parser for the site's structure, then run that script across all pages. He
    cites ~99% token savings, plus reproducible output. A related
    micro-optimization is scraping pages as markdown rather than raw HTML so
    tokens aren't wasted on tags when the model is in the loop.


    This is the same compounding pattern that runs through cost-efficient agent
    design: spend the model lavishly during the exploratory/experimentation
    phase, then distill the proven step into cheap deterministic code. The LLM's
    value is in handling the novel, ambiguous task (figuring out the extraction
    logic), not in re-deriving that logic ten thousand times.


    The heuristic: any time you're about to call a model in a tight loop over
    near-identical inputs, ask whether the model could instead emit code that
    does the job once. If the task is structured enough to script, scripting it
    is cheaper, faster, auditable, and—critically—deterministic.
stance: >-
  For bulk extraction, generating a reusable parser script once and running it
  deterministically beats sending every page through the model.
related:
  - INS-260625-FE3E
  - INS-260626-715B
  - INS-260410-C022
  - INS-260323-2E51
  - INS-260330-3AF7
---
The speaker's scaling tip is to keep the LLM out of the hot loop. Parsing each of thousands of pages with the model is token-heavy, slow, and non-deterministic. Instead, use the LLM once—at design time—to author a parser for the site's structure, then run that script across all pages. He cites ~99% token savings, plus reproducible output. A related micro-optimization is scraping pages as markdown rather than raw HTML so tokens aren't wasted on tags when the model is in the loop.

This is the same compounding pattern that runs through cost-efficient agent design: spend the model lavishly during the exploratory/experimentation phase, then distill the proven step into cheap deterministic code. The LLM's value is in handling the novel, ambiguous task (figuring out the extraction logic), not in re-deriving that logic ten thousand times.

The heuristic: any time you're about to call a model in a tight loop over near-identical inputs, ask whether the model could instead emit code that does the job once. If the task is structured enough to script, scripting it is cheaper, faster, auditable, and—critically—deterministic.

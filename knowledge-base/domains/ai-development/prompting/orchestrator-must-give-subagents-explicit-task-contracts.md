---
id: INS-260410-096F
domain: ai-development
topic: prompting
title: Orchestrator must give subagents explicit task contracts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - delegation
  - orchestration
  - multi-agent
sources:
  - type: blog
    title: How we built our multi-agent research system
    url: 'https://www.anthropic.com/engineering/multi-agent-research-system'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When the lead agent delegates with instructions as terse as 'research the
    semiconductor shortage,' subagents duplicate each other's work or wander
    off-topic — detailed task contracts are mandatory.
  standard: >-
    Anthropic observed a recurring failure in early versions: the lead agent
    issued short, ambiguous instructions to subagents, and the subagents either
    duplicated the same searches or explored different time periods entirely. In
    one case, one subagent investigated the 2021 automotive chip crisis while
    two others redundantly looked at current 2025 supply chains.


    The fix was making orchestrator prompts explicitly construct a 'task
    contract' for each subagent: an objective, an expected output format,
    guidance on which tools and sources to use, and clear boundaries on scope.
    This mirrors how human managers delegate to teams — 'go research X' fails;
    'find the 2025 supply chain status of semiconductor foundries, output as a
    bulleted list with citations' works.


    The deeper pattern: prompts in multi-agent systems are not just instructions
    to a single model, they are coordination protocols. Under-specified
    contracts surface as emergent coordination failures that are hard to debug
    after the fact.
stance: >-
  Vague delegation prompts in multi-agent systems reliably cause duplicated
  work, gaps, and misinterpretation — each subagent needs an objective, output
  format, tool guidance, and boundaries.
related:
  - INS-260411-6106
  - INS-260423-8504
  - INS-260404-5882
  - INS-260320-9D89
  - INS-260327-1FA1
---
Anthropic observed a recurring failure in early versions: the lead agent issued short, ambiguous instructions to subagents, and the subagents either duplicated the same searches or explored different time periods entirely. In one case, one subagent investigated the 2021 automotive chip crisis while two others redundantly looked at current 2025 supply chains.

The fix was making orchestrator prompts explicitly construct a 'task contract' for each subagent: an objective, an expected output format, guidance on which tools and sources to use, and clear boundaries on scope. This mirrors how human managers delegate to teams — 'go research X' fails; 'find the 2025 supply chain status of semiconductor foundries, output as a bulleted list with citations' works.

The deeper pattern: prompts in multi-agent systems are not just instructions to a single model, they are coordination protocols. Under-specified contracts surface as emergent coordination failures that are hard to debug after the fact.

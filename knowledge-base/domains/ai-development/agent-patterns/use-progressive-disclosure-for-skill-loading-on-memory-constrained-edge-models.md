---
id: INS-260605-6591
domain: ai-development
topic: agent-patterns
title: Use progressive disclosure for skill loading on memory-constrained edge models
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - edge-ai
  - agent-skills
  - context-window
  - token-efficiency
  - progressive-disclosure
sources:
  - type: youtube
    title: >-
      TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM — Cormac Brick,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BKWpYIWvAo4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Show the agent only one-line skill descriptions and let it request full
    instructions on demand, rather than loading every tool's details up front.
  standard: >-
    Google AI Edge structures device skills so only a one-line description per
    skill enters the system prompt; the model 'loads' a skill (via a load_skill
    tool) only when it judges that skill relevant, at which point the full
    skill.md contents enter the context window. This is the inverse of a typical
    MCP workflow where every function's full schema must be described upfront.


    The reason this matters more on the edge than in the cloud is reasoning
    quality, not just token cost. Lightweight on-device models reason poorly
    over very long context windows, so a condensed context measurably 'ups your
    batting average' on quality metrics. If all skill details for all skills
    were loaded, the small model would have to reason over far more context and
    reliability would degrade. The same progressive-disclosure /
    conditional-depth principle used in larger agent systems pays off doubly on
    constrained devices because it protects both the token budget and the
    model's limited long-context competence.
stance: >-
  Loading skill instructions on demand via one-line descriptions beats
  front-loading all tool details for small on-device models.
related:
  - INS-260410-CD79
  - INS-260501-C59A
  - INS-260501-9503
  - INS-260514-1841
  - INS-260605-C86D
  - INS-260605-6722
  - INS-260605-0819
  - INS-260605-5B0A
---
Google AI Edge structures device skills so only a one-line description per skill enters the system prompt; the model 'loads' a skill (via a load_skill tool) only when it judges that skill relevant, at which point the full skill.md contents enter the context window. This is the inverse of a typical MCP workflow where every function's full schema must be described upfront.

The reason this matters more on the edge than in the cloud is reasoning quality, not just token cost. Lightweight on-device models reason poorly over very long context windows, so a condensed context measurably 'ups your batting average' on quality metrics. If all skill details for all skills were loaded, the small model would have to reason over far more context and reliability would degrade. The same progressive-disclosure / conditional-depth principle used in larger agent systems pays off doubly on constrained devices because it protects both the token budget and the model's limited long-context competence.

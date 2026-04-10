---
id: INS-260409-8408
domain: ai-development
topic: agent-patterns
title: Hierarchical memory stacks separate always-loaded from on-demand context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-budgeting
  - memory-hierarchy
  - agent-memory
  - tiered-storage
sources:
  - type: blog
    title: >-
      GitHub - milla-jovovich/mempalace: The highest-scoring AI memory system
      ever benchmarked. And it's free.
    url: 'https://github.com/milla-jovovich/mempalace'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemPalace's 4-layer stack (L0 identity always loaded at ~50 tokens, L1
    critical facts always loaded at ~120 tokens, L2 room recall on demand, L3
    deep search on demand) gives agents ~170 tokens of persistent identity
    before any query fires.
  standard: >-
    Computer memory hierarchies work because different tiers have different
    cost-latency profiles — L1 cache is expensive and fast, disk is cheap and
    slow. Agent memory needs the same treatment. MemPalace's stack: L0 =
    identity (who is this AI, ~50 tokens, always loaded), L1 = critical facts
    (team, projects, preferences, ~120 tokens, always loaded), L2 = room recall
    (recent sessions for the current project, on demand when topic comes up), L3
    = deep search (semantic query across all closets, on demand when explicitly
    asked). An agent wakes up with ~170 tokens of its world already loaded, then
    pulls more context only when needed. This is a principled alternative to
    'stuff everything into the system prompt' or 'full RAG on every turn.'
    Directly relevant to how the Zuhn wake.ts briefing might budget context for
    future agent integrations.
stance: >-
  Efficient agent context budgeting requires distinct tiers with different
  loading policies rather than stuffing all context into the prompt.
related:
  - INS-260409-D66D
  - INS-260327-E18C
  - INS-260410-9D04
  - INS-260405-A22F
  - INS-260323-8D12
  - INS-260325-F981
  - INS-260410-315B
---
Computer memory hierarchies work because different tiers have different cost-latency profiles — L1 cache is expensive and fast, disk is cheap and slow. Agent memory needs the same treatment. MemPalace's stack: L0 = identity (who is this AI, ~50 tokens, always loaded), L1 = critical facts (team, projects, preferences, ~120 tokens, always loaded), L2 = room recall (recent sessions for the current project, on demand when topic comes up), L3 = deep search (semantic query across all closets, on demand when explicitly asked). An agent wakes up with ~170 tokens of its world already loaded, then pulls more context only when needed. This is a principled alternative to 'stuff everything into the system prompt' or 'full RAG on every turn.' Directly relevant to how the Zuhn wake.ts briefing might budget context for future agent integrations.

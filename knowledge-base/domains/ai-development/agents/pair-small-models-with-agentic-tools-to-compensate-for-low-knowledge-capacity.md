---
id: INS-260626-5037
domain: ai-development
topic: agents
title: Pair small models with agentic tools to compensate for low knowledge capacity
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - small-models
  - agentic
  - tool-use
  - web-search
  - edge-ai
  - hallucination
sources:
  - type: youtube
    title: >-
      Everything I Learned Training Frontier Small Models — Maxime Labonne,
      Liquid AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fLUtUkqYHnQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Small models hallucinate because they're memory-bound with low knowledge
    capacity, but tool access (web search, Python) lets them outperform reliance
    on baked-in knowledge — and they're naturally strong at agentic tasks.
  standard: >-
    Labonne reframes the core weakness of small models — low knowledge capacity
    from being memory-bound, which causes hallucination — as a problem solvable
    outside the weights. A tiny model that can Google any knowledge question
    performs far better than one relying on parametric memory. Similarly, poor
    long-context handling is sidestepped by giving the model a recursive/Python
    environment to take computational shortcuts. His stronger claim: small
    models are actually very good at agentic tasks, and that is how they should
    be used. What they need is not more stored knowledge but strong reasoning to
    use tools reliably. This inverts the usual framing — agentic workloads are
    typically assigned to the biggest models, but Labonne argues that's often
    not the best fit, and that capable-small-model-plus-tools is an
    underexplored, well-suited combination. The design lesson: for
    capacity-constrained models, invest in reasoning and tool-use reliability
    rather than trying to cram in knowledge, and treat retrieval/execution as
    the substitute for parameters.
stance: >-
  Giving a small model web search and code execution turns its low knowledge
  capacity from a fatal flaw into a non-issue.
related:
  - INS-260326-2410
  - INS-260402-8E46
  - INS-260410-86B0
  - INS-260605-303C
  - INS-260625-99AE
  - INS-260625-E1AA
  - INS-260626-21EA
  - INS-260625-E9A9
  - PRI-260328-A82C
---
Labonne reframes the core weakness of small models — low knowledge capacity from being memory-bound, which causes hallucination — as a problem solvable outside the weights. A tiny model that can Google any knowledge question performs far better than one relying on parametric memory. Similarly, poor long-context handling is sidestepped by giving the model a recursive/Python environment to take computational shortcuts. His stronger claim: small models are actually very good at agentic tasks, and that is how they should be used. What they need is not more stored knowledge but strong reasoning to use tools reliably. This inverts the usual framing — agentic workloads are typically assigned to the biggest models, but Labonne argues that's often not the best fit, and that capable-small-model-plus-tools is an underexplored, well-suited combination. The design lesson: for capacity-constrained models, invest in reasoning and tool-use reliability rather than trying to cram in knowledge, and treat retrieval/execution as the substitute for parameters.

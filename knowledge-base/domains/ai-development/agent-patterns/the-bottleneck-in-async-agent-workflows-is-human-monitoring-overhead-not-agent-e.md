---
id: INS-260627-C559
domain: ai-development
topic: agent-patterns
title: >-
  The bottleneck in async agent workflows is human monitoring overhead, not
  agent execution
actionability: inspiration
confidence: high
shelf_life: evergreen
status: active
tags:
  - proactive-agents
  - async-agents
  - developer-experience
  - cognitive-load
  - agent-design
sources:
  - type: youtube
    title: 'Proactive Agents – Kath Korevec, Google Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3u8xc0zLec'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reactive async agents shift execution off the human but leave the monitoring
    load on them, capping the productivity gain.
  standard: >-
    Korevec frames the problem with a household analogy: even when her husband
    did all the dishes, she still carried the mental load of reminding and
    tracking. The same dynamic holds for async agents — they handle execution,
    but the developer remains the one monitoring progress, following up, and
    keeping things moving. That residual load is the real ceiling on agent
    productivity, not raw model capability.


    The implication is that 'reactive' tools (CLI prompts, IDE autocomplete) are
    efficient — they only spend compute when explicitly asked — but they
    structurally cannot remove the human-as-orchestrator tax. To actually free
    developer attention, agents must become proactive: observing the workflow,
    noticing friction, and taking on boring tasks (fixing avoided auth bugs,
    updating configs, preparing migrations) before being asked. The design
    target is an agent you trust to know what's missing and fill the gap, so the
    human can focus on what matters instead of supervising.
stance: >-
  Async agents fail to deliver real leverage because developers still carry the
  mental load of tracking and babysitting them, so the next gain comes from
  making agents proactive rather than faster.
related:
  - INS-260514-2E48
  - INS-260605-51AE
  - INS-260605-159E
  - INS-260625-1C5E
  - INS-260626-1B29
  - INS-260627-8BD6
  - INS-260404-6BD6
---
Korevec frames the problem with a household analogy: even when her husband did all the dishes, she still carried the mental load of reminding and tracking. The same dynamic holds for async agents — they handle execution, but the developer remains the one monitoring progress, following up, and keeping things moving. That residual load is the real ceiling on agent productivity, not raw model capability.

The implication is that 'reactive' tools (CLI prompts, IDE autocomplete) are efficient — they only spend compute when explicitly asked — but they structurally cannot remove the human-as-orchestrator tax. To actually free developer attention, agents must become proactive: observing the workflow, noticing friction, and taking on boring tasks (fixing avoided auth bugs, updating configs, preparing migrations) before being asked. The design target is an agent you trust to know what's missing and fill the gap, so the human can focus on what matters instead of supervising.

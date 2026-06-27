---
id: INS-260627-266C
domain: ai-development
topic: agent-patterns
title: Agent output quality degrades past roughly half a full context window
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - context-engineering
  - context-window
  - context-rot
  - agent-patterns
  - session-management
sources:
  - type: youtube
    title: 'Agentic Engineering: Working With AI, Not Just Using It — Brendan O''Leary'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BEKc4P87XKo'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    More context isn't better — quality starts degrading around 50% window fill,
    and bad context can poison the whole output.
  standard: >-
    The counterintuitive claim is that context has two costs, not one. The
    obvious cost is money: the entire chat history is re-sent as input tokens on
    every turn, so it compounds. The non-obvious cost is quality — O'Leary cites
    a tipping point around 50% window fill where the model effectively gets
    dumber, suffering 'lost in the middle' effects and re-surfacing earlier
    wrong turns it should have abandoned. Worse than too much context is bad
    context: mixing two unrelated tasks, stale comments, or trying to steer an
    agent back after it went down a wrong path, because the agent re-reads the
    poisoned history every turn rather than reasoning fresh like a human would.


    The operational rules that follow: persist information outside the window
    (scratchpads, memory files, agents.md) and pull it in selectively; only load
    what's relevant to the current step; summarize/compress after a deep
    debugging session before moving to the fix; isolate work across parallel
    agents/sessions so context doesn't accumulate; and when it feels off the
    rails, it probably is — start a fresh session, have the agent summarize
    where you are, verify the summary matches your understanding, and re-seed a
    clean session. Marked time-sensitive because the specific ~50% threshold is
    tied to current-generation context handling and will shift as models improve
    long-context fidelity, even though the principle of context curation is
    durable.
stance: >-
  Adding more context to an agent degrades output quality once the window passes
  roughly 50% full, so context past that point is a liability, not just a cost.
related:
  - INS-260409-533A
  - INS-260410-761B
  - INS-260605-7B4C
  - INS-260626-59D9
  - INS-260626-43C9
  - INS-260626-E926
  - INS-260627-0691
  - INS-260605-295D
  - INS-260626-FFE2
---
The counterintuitive claim is that context has two costs, not one. The obvious cost is money: the entire chat history is re-sent as input tokens on every turn, so it compounds. The non-obvious cost is quality — O'Leary cites a tipping point around 50% window fill where the model effectively gets dumber, suffering 'lost in the middle' effects and re-surfacing earlier wrong turns it should have abandoned. Worse than too much context is bad context: mixing two unrelated tasks, stale comments, or trying to steer an agent back after it went down a wrong path, because the agent re-reads the poisoned history every turn rather than reasoning fresh like a human would.

The operational rules that follow: persist information outside the window (scratchpads, memory files, agents.md) and pull it in selectively; only load what's relevant to the current step; summarize/compress after a deep debugging session before moving to the fix; isolate work across parallel agents/sessions so context doesn't accumulate; and when it feels off the rails, it probably is — start a fresh session, have the agent summarize where you are, verify the summary matches your understanding, and re-seed a clean session. Marked time-sensitive because the specific ~50% threshold is tied to current-generation context handling and will shift as models improve long-context fidelity, even though the principle of context curation is durable.

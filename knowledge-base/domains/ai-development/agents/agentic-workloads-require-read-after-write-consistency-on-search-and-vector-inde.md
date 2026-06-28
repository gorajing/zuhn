---
id: INS-260625-355D
domain: ai-development
topic: agents
title: >-
  Agentic workloads require read-after-write consistency on search and vector
  indexes
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - read-after-write
  - consistency
  - search
  - agentic-workloads
sources:
  - type: youtube
    title: Boost AI context with hybrid search in Spanner
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=fAf4Zh-CC08'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents that make a change and then immediately query must see that change
    reflected in the indexes — eventual-consistency search pipelines silently
    break this read-after-write expectation.
  standard: >-
    Human search tolerates lag: a user rarely writes data and re-queries it
    within milliseconds. Agentic workloads do exactly that — an agent makes a
    change via one API call, then issues another that depends on the result
    being searchable. If the search and vector indexes are fed by an
    eventually-consistent ETL pipeline, the agent queries a stale index and
    reasons over data that no longer matches reality, a failure mode that is
    hard to detect because it's intermittent and timing-dependent.


    Attio's framing: with no ETL, an agent's write is immediately reflected in
    both full-text and vector indexes, giving true read-after-write consistency
    across the agent loop. The design implication generalizes beyond any one
    database: when building retrieval for agents rather than humans, treat index
    freshness as a correctness requirement, not a performance nicety. The
    eventual-consistency assumptions baked into most human-facing search stacks
    are a latent bug source once an autonomous agent — not a patient human — is
    the one writing and immediately reading back.
stance: >-
  Eventually-consistent search pipelines break agent loops because an agent that
  writes then immediately queries cannot see its own change.
related:
  - INS-260626-BE0D
  - INS-260514-00D3
  - INS-260628-930A
  - INS-260403-7D7A
  - INS-260524-8320
---
Human search tolerates lag: a user rarely writes data and re-queries it within milliseconds. Agentic workloads do exactly that — an agent makes a change via one API call, then issues another that depends on the result being searchable. If the search and vector indexes are fed by an eventually-consistent ETL pipeline, the agent queries a stale index and reasons over data that no longer matches reality, a failure mode that is hard to detect because it's intermittent and timing-dependent.

Attio's framing: with no ETL, an agent's write is immediately reflected in both full-text and vector indexes, giving true read-after-write consistency across the agent loop. The design implication generalizes beyond any one database: when building retrieval for agents rather than humans, treat index freshness as a correctness requirement, not a performance nicety. The eventual-consistency assumptions baked into most human-facing search stacks are a latent bug source once an autonomous agent — not a patient human — is the one writing and immediately reading back.

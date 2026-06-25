---
id: INS-260625-A741
domain: ai-development
topic: architecture
title: Move AI to the data instead of moving data to the AI
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ai-native-database
  - real-time
  - data-locality
  - agent-data-access
sources:
  - type: youtube
    title: Power intelligent agents with AI-native databases
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=7awKinJhGPo'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pulling enterprise data out to an external AI service introduces staleness
    and integration cost; embedding AI operators (vector search, forecasting,
    LLM functions) in the database lets agents act on the live state.
  standard: >-
    The dominant pattern for AI features has been ETL-to-AI: copy data into a
    vector store or model-serving pipeline, then query that copy. The keynote's
    central architectural claim is that this creates a lag — by the time data
    reaches the AI layer it no longer reflects the real-time state of the
    business — plus recurring manual integration cost and time-to-production.
    For agents that take *actions* (a 'system of action' not just a 'system of
    insights'), staleness is disqualifying.


    The alternative is to colocate AI with the data: vector search, hybrid
    search, time-series forecasting, and LLM-backed functions all expressed in
    SQL against the live operational store. The cited Target.com result — moving
    all search traffic to AlloyDB rather than gluing a relational DB to a
    separate vector engine — is the business-case version of this argument.
    Treat the vendor performance numbers skeptically, but the underlying
    principle is sound and transferable: data gravity is real, and the
    round-trip to an external AI tier is a latency and freshness tax that
    agentic systems can't always pay. The decision rule is whether your agent
    needs to reason over the *current* state; if so, push compute to the data
    rather than the reverse.
stance: >-
  Embedding AI primitives inside the operational database beats shipping data
  out to an external AI layer for real-time agentic workloads.
related:
  - INS-260603-6FE3
  - INS-260625-E4F0
  - INS-260605-0436
  - INS-260605-083B
  - PRI-260328-D5EB
---
The dominant pattern for AI features has been ETL-to-AI: copy data into a vector store or model-serving pipeline, then query that copy. The keynote's central architectural claim is that this creates a lag — by the time data reaches the AI layer it no longer reflects the real-time state of the business — plus recurring manual integration cost and time-to-production. For agents that take *actions* (a 'system of action' not just a 'system of insights'), staleness is disqualifying.

The alternative is to colocate AI with the data: vector search, hybrid search, time-series forecasting, and LLM-backed functions all expressed in SQL against the live operational store. The cited Target.com result — moving all search traffic to AlloyDB rather than gluing a relational DB to a separate vector engine — is the business-case version of this argument. Treat the vendor performance numbers skeptically, but the underlying principle is sound and transferable: data gravity is real, and the round-trip to an external AI tier is a latency and freshness tax that agentic systems can't always pay. The decision rule is whether your agent needs to reason over the *current* state; if so, push compute to the data rather than the reverse.

---
id: INS-260625-C6F4
domain: ai-development
topic: system-building
title: 'Data quality, not model choice, governs production agent reliability'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-quality
  - production-ai
  - agents
  - data-strategy
  - rag
sources:
  - type: youtube
    title: >-
      The Production AI Playbook: Deploying Agents at Enterprise Scale —
      Sandipan Bhaumik, Databricks
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ObTPqBGsEbA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents don't forgive bad data the way humans do — they return it as a
    confident wrong answer — so data foundation absorbs the majority of
    production effort and is the real reliability lever.
  standard: >-
    Bhaumik reports spending roughly 60% of project time on the data foundation,
    and identifies it as the most important and most underestimated pillar. The
    reason is a behavioral asymmetry between humans and agents: enterprise data
    was always built for humans, and humans are forgiving — spot a wrong figure
    in a report and you ask someone to correct it. Agents are not forgiving.
    They find the wrong data, give the wrong answer, and deliver it with full
    confidence, so the error propagates silently to the customer.


    He splits the data foundation into two streams. 'Question data' is
    everything the agent needs to answer users — pre/post-training data,
    API-reachable systems, RAG sources — and its quality, freshness, and
    accessibility directly determine answer correctness. 'Tracking data' is the
    observability/tracing data, which needs its own deliberate schema and
    strategy because, at the scale of hundreds of agents across multiple
    frameworks (CrewAI, LangChain) and clouds, it must be centralized to serve
    auditors, regulators, online monitoring, and automated LLM-as-judge runs. A
    vivid failure in the case study: a bank changed an interest-rate policy, but
    the new policy document's embeddings never made it into the vector database,
    so the agent confidently served stale answers — caught only because the
    data/tracing foundation existed to detect the CSAT drop and trace it to the
    outdated document.


    The directional claim challenges the common assumption that model capability
    is the primary lever for agent quality; it asserts that data quality
    dominates. This is non-obvious precisely because the model-first instinct is
    so strong, and it reframes 'production readiness' as mostly a
    data-engineering problem — incremental loading, governed catalogs with rich
    metadata/descriptions the agent can read as context, secured API
    connections, and a tracing data strategy — rather than a modeling problem.
stance: >-
  Bad data hurts agents far more than it hurt human-facing systems because
  agents surface errors as confident wrong answers, making data foundation the
  dominant production bottleneck.
related:
  - INS-260323-216A
  - INS-260330-2838
  - INS-260402-5CF0
  - INS-260403-C681
  - INS-260403-7EA1
  - INS-260409-C758
  - INS-260424-F8BB
  - INS-260530-E6AA
  - INS-260603-6FE3
  - INS-260605-278E
---
Bhaumik reports spending roughly 60% of project time on the data foundation, and identifies it as the most important and most underestimated pillar. The reason is a behavioral asymmetry between humans and agents: enterprise data was always built for humans, and humans are forgiving — spot a wrong figure in a report and you ask someone to correct it. Agents are not forgiving. They find the wrong data, give the wrong answer, and deliver it with full confidence, so the error propagates silently to the customer.

He splits the data foundation into two streams. 'Question data' is everything the agent needs to answer users — pre/post-training data, API-reachable systems, RAG sources — and its quality, freshness, and accessibility directly determine answer correctness. 'Tracking data' is the observability/tracing data, which needs its own deliberate schema and strategy because, at the scale of hundreds of agents across multiple frameworks (CrewAI, LangChain) and clouds, it must be centralized to serve auditors, regulators, online monitoring, and automated LLM-as-judge runs. A vivid failure in the case study: a bank changed an interest-rate policy, but the new policy document's embeddings never made it into the vector database, so the agent confidently served stale answers — caught only because the data/tracing foundation existed to detect the CSAT drop and trace it to the outdated document.

The directional claim challenges the common assumption that model capability is the primary lever for agent quality; it asserts that data quality dominates. This is non-obvious precisely because the model-first instinct is so strong, and it reframes 'production readiness' as mostly a data-engineering problem — incremental loading, governed catalogs with rich metadata/descriptions the agent can read as context, secured API connections, and a tracing data strategy — rather than a modeling problem.

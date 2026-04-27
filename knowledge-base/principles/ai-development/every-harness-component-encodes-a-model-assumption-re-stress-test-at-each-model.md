---
id: PRI-260426-890F
domain: ai-development
title: >-
  Every harness component encodes a model assumption — re-stress-test at each
  model release
summary: >-
  An agent harness — its prompts, tools, retries, decomposition layers, planning
  steps — is a concretization of beliefs about what the model cannot yet do.
  Each piece compensates for a specific gap. As models improve, those
  compensations silently become bottlenecks: the planning layer that was
  essential for GPT-4 may waste tokens for a frontier model that plans natively.
  The discipline is treating the harness as a versioned artifact whose every
  component is re-stress-tested on each model release; otherwise yesterday's fix
  is today's tax.
confidence: high
supporting_insights:
  - INS-260410-9DB0
  - INS-260327-E0F7
  - INS-260323-DC99
  - INS-260411-78CD
supporting_count: 4
tags:
  - harness-engineering
  - model-assumptions
  - agent-design
  - stress-testing
  - obsolescence
date_created: '2026-04-26'
last_reviewed: '2026-04-26'
resolutions:
  one_line: >-
    Every harness component encodes a model assumption — re-stress-test at each
    model release
  standard: >-
    An agent harness — its prompts, tools, retries, decomposition layers,
    planning steps — is a concretization of beliefs about what the model cannot
    yet do. Each piece compensates for a specific gap. As models improve, those
    compensations silently become bottlenecks: the planning layer that was
    essential for GPT-4 may waste tokens for a frontier model that plans
    natively. The discipline is treating the harness as a versioned artifact
    whose every component is re-stress-tested on each model release; otherwise
    yesterday's fix is today's tax.
lineage:
  compressed_at: '2026-04-26'
  source_insights:
    - id: INS-260410-9DB0
      relation: SUPPORTS
    - id: INS-260327-E0F7
      relation: SUPPORTS
    - id: INS-260323-DC99
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 215 insights, 24 principles, surprise 0.96'
embedded: true
embedding_model: "nomic-embed-text"
---
An agent harness — its prompts, tools, retries, decomposition layers, planning steps — is a concretization of beliefs about what the model cannot yet do. Each piece compensates for a specific gap. As models improve, those compensations silently become bottlenecks: the planning layer that was essential for GPT-4 may waste tokens for a frontier model that plans natively. The discipline is treating the harness as a versioned artifact whose every component is re-stress-tested on each model release; otherwise yesterday's fix is today's tax.

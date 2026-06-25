---
id: INS-260625-0021
domain: ai-development
topic: agent-evals
title: 'Agentic failure modes form a hierarchy, and hallucination is only one layer'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - failure-modes
  - multi-agent
  - tool-execution
  - planning-failures
  - risk-taxonomy
sources:
  - type: youtube
    title: >-
      Production Evals For Agentic AI Systems - Nishant Gupta, Meta
      Superintelligence Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vljxQZfJ9wY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agentic systems introduce a stacked hierarchy of failure modes —
    memory/retrieval/safety at the base, reasoning/planning/tool errors in the
    middle, multi-agent coordination at the top — so evaluating only model
    output misses most production risk.
  standard: >-
    Many teams still treat hallucination as the primary AI failure mode. Gupta
    argues that in production it is just one category among many. Agentic
    systems introduce an entire hierarchy: at the foundation sit memory
    failures, retrieval failures, and safety failures; one layer up are
    reasoning mistakes, poor planning, and incorrect tool execution; at the
    highest layer are multi-agent coordination failures. Each layer is a
    distinct class of error that an output-only check cannot detect.


    This taxonomy is the argument for behavioral evaluation. Asking only 'did
    the model produce the correct answer?' inspects the top of the stack while
    the most consequential and frequent failures occur in planning, tool use,
    and retrieval — the machinery between the prompt and the final token.
    Building an evaluation system therefore means instrumenting and scoring each
    layer of the hierarchy, not just grading the final response. The higher up
    the autonomy stack a system operates, the more the unmeasured lower layers
    dominate real-world reliability.
stance: >-
  Hallucination is just one category of agentic failure; the dominant production
  risks are memory, retrieval, planning, tool-execution, and multi-agent
  coordination failures.
related:
  - INS-260321-D370
  - INS-260323-1811
  - PRI-260328-1ED1
  - INS-260329-D8F2
  - INS-260329-4D24
  - INS-260403-4F1B
  - INS-260330-A3B7
  - INS-260410-FD24
  - INS-260411-33E5
  - PRI-260411-78CD
---
Many teams still treat hallucination as the primary AI failure mode. Gupta argues that in production it is just one category among many. Agentic systems introduce an entire hierarchy: at the foundation sit memory failures, retrieval failures, and safety failures; one layer up are reasoning mistakes, poor planning, and incorrect tool execution; at the highest layer are multi-agent coordination failures. Each layer is a distinct class of error that an output-only check cannot detect.

This taxonomy is the argument for behavioral evaluation. Asking only 'did the model produce the correct answer?' inspects the top of the stack while the most consequential and frequent failures occur in planning, tool use, and retrieval — the machinery between the prompt and the final token. Building an evaluation system therefore means instrumenting and scoring each layer of the hierarchy, not just grading the final response. The higher up the autonomy stack a system operates, the more the unmeasured lower layers dominate real-world reliability.

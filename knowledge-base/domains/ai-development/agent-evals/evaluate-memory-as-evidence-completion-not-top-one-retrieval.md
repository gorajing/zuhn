---
id: INS-260626-20B7
domain: ai-development
topic: agent-evals
title: 'Evaluate memory as evidence completion, not top-one retrieval'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - retrieval
  - memory
  - evaluation-design
sources:
  - type: blog
    title: Are We Ready For An Agent-Native Memory System?
    url: 'https://arxiv.org/html/2606.24775'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The paper's retrieval-fidelity analysis shows that early-hit precision can
    diverge from the ability to recover old, scattered, multi-turn evidence.
  standard: >-
    In the paper's RQ2 retrieval-fidelity setup, Recall@K is scored against
    source-id groups containing gold evidence, and performance is analyzed
    across evidence-distance bins. The authors report that a system with the
    highest Recall@1 is not necessarily best at larger retrieval budgets or
    longer evidence gaps, while graph/tree systems can better preserve complete
    support.


    The implication for eval harnesses is direct: memory tests should include
    source-level evidence labels, distance buckets, and multi-evidence tasks. A
    production agent can return the right-looking answer while relying on an
    incomplete or temporally wrong memory path, so trace-level evidence
    reconstruction is a better regression target than top-1 similarity alone.
stance: >-
  Agent memory evals should measure whether the system reconstructs complete
  supporting evidence, not just whether one relevant memory appears near the top
  of a ranking.
related:
  - INS-260405-C17A
  - INS-260625-BF8B
  - INS-260626-E255
  - INS-260628-1AF8
  - INS-260627-9BA6
  - INS-260322-1A20
  - INS-260626-BD97
  - INS-260626-C3C4
---
In the paper's RQ2 retrieval-fidelity setup, Recall@K is scored against source-id groups containing gold evidence, and performance is analyzed across evidence-distance bins. The authors report that a system with the highest Recall@1 is not necessarily best at larger retrieval budgets or longer evidence gaps, while graph/tree systems can better preserve complete support.

The implication for eval harnesses is direct: memory tests should include source-level evidence labels, distance buckets, and multi-evidence tasks. A production agent can return the right-looking answer while relying on an incomplete or temporally wrong memory path, so trace-level evidence reconstruction is a better regression target than top-1 similarity alone.

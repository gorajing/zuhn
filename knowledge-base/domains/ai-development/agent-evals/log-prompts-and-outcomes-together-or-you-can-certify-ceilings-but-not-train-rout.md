---
id: INS-260627-8213
domain: ai-development
topic: agent-evals
title: >-
  Log prompts and outcomes together or you can certify ceilings but not train
  routers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - eval-infrastructure
  - routing
  - trace-logging
  - agent-evals
  - observability
sources:
  - type: blog
    title: >-
      When Does Combining Language Models Help? A Co-Failure Ceiling on Routing,
      Voting, and Mixture-of-Agents Across 67 Frontier Models
    url: 'https://arxiv.org/html/2606.27288'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For routing evals, store the prompt/features with every model outcome, or
    you cannot test the actual router.
  standard: >-
    A query-by-model correctness matrix is enough to measure co-failure and
    oracle disagreement, but not enough to prove a router can act. The router
    needs pre-answer features: prompt text, task type, available tools, budget
    constraints, and any metadata visible at dispatch time. Agent eval
    infrastructure should therefore log both the state the router sees and each
    candidate model's outcome. Without that, the honest claim is only a ceiling
    certificate, not an end-to-end routing result.
  deep: >-
    This is a durable systems lesson: eval artifacts should preserve the
    information boundary of the deployed policy. If a future agent or router
    would not see labels, completions, or hidden grader outputs at dispatch
    time, those cannot be features in the eval. Keeping that boundary explicit
    prevents oracle numbers from masquerading as deployable performance.
stance: >-
  The paper explicitly limits some market-scale routing claims because the large
  matrices store outcomes but not prompts, so no router could be trained there.
  Outcome matrices can support beta certificates and oracle headroom, but
  deployable routing requires the pre-inference features a real router would
  see.
related:
  - INS-260329-C7B8
  - INS-260605-1B9D
  - INS-260625-B4AC
  - INS-260627-6984
  - INS-260627-F805
  - INS-260627-8392
  - INS-260625-D1F9
  - INS-260627-DB17
---
A query-by-model correctness matrix is enough to measure co-failure and oracle disagreement, but not enough to prove a router can act. The router needs pre-answer features: prompt text, task type, available tools, budget constraints, and any metadata visible at dispatch time. Agent eval infrastructure should therefore log both the state the router sees and each candidate model's outcome. Without that, the honest claim is only a ceiling certificate, not an end-to-end routing result.

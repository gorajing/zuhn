---
id: INS-260627-6984
domain: ai-development
topic: agent-evals
title: Measure the all-models-wrong tail before building a router
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - routing
  - model-ensembles
  - eval-design
  - co-failure
  - preflight
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
    Before building a router, measure the all-models-wrong rate and certify
    whether any selector has enough headroom to matter.
  standard: >-
    Routing is not automatically valuable just because model errors are not
    identical pairwise. If every model in the pool fails on the same cases, no
    member-answer selector can recover those cases. The useful engineering move
    is to run the candidate pool on a representative held-out workload, count
    all-wrong examples, compute a conservative beta bound, and compare the
    certified maximum gain against routing overhead. If the bound is below the
    deployment cost, the right answer is not a smarter router; it is a different
    model pool, a different task format, or a verifier/tool path that changes
    the failure mode.
  deep: >-
    This is a direct agent/eval implication: agent orchestration should have a
    cheap impossibility test. In a coding-agent or tool-agent stack, do not add
    model routing, voting, or MoA layers until the eval matrix shows resolvable
    disagreement. The paper's beta certificate gives a way to distinguish 'we
    need orchestration' from 'all candidates fail together, so orchestration
    only adds latency and governance burden.'
stance: >-
  For multi-model LLM systems, the decisive preflight metric is beta, the rate
  at which every candidate model fails on the same query. The paper proves that
  any selector whose final output is one member model's answer, including
  routers, votes, cascades, and mixture-of-agents variants, cannot exceed
  accuracy 1 - beta. A held-out graded query set plus a Clopper-Pearson lower
  bound can therefore certify how much headroom remains before you spend
  engineering time on a router.
related:
  - INS-260329-C7B8
  - INS-260410-E3BB
  - INS-260410-ED34
  - INS-260625-E810
  - INS-260627-8213
  - INS-260627-F805
  - INS-260410-F167
  - INS-260605-1066
  - INS-260327-7A48
  - INS-260627-DB17
---
Routing is not automatically valuable just because model errors are not identical pairwise. If every model in the pool fails on the same cases, no member-answer selector can recover those cases. The useful engineering move is to run the candidate pool on a representative held-out workload, count all-wrong examples, compute a conservative beta bound, and compare the certified maximum gain against routing overhead. If the bound is below the deployment cost, the right answer is not a smarter router; it is a different model pool, a different task format, or a verifier/tool path that changes the failure mode.

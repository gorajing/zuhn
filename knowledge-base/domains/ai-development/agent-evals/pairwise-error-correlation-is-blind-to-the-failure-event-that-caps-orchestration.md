---
id: INS-260627-FFCB
domain: ai-development
topic: agent-evals
title: >-
  Pairwise error correlation is blind to the failure event that caps
  orchestration
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - eval-design
  - model-ensembles
  - correlation
  - co-failure
  - measurement
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
    Do not price multi-model orchestration from pairwise correlation; directly
    estimate the all-wrong tail.
  standard: >-
    A pairwise matrix answers whether models fail together two at a time, but
    routers and ensembles fail when the whole pool misses the same item. The
    paper's non-identification result means a pairwise statistic cannot, even in
    principle, recover that higher-order tail. For agent platform work, this
    changes the default dashboard: show all-wrong rate,
    single-best-wrong-but-some-other-right mass, and confidence intervals, not
    just average disagreement or pairwise correlation.
  deep: >-
    The practical failure mode is overbuilding orchestration because the
    pairwise chart looks promising. A system builder should require a
    query-by-model outcome matrix and compute higher-order co-failure cells
    before trusting any diversity argument. Pairwise correlation can remain
    diagnostic for pool similarity, but it is not a go/no-go criterion for
    routers, votes, cascades, or MoA.
stance: >-
  The paper shows that identical pairwise error laws can still have different
  all-model co-failure rates when the pool has at least three models. Average
  pairwise correlation can make a pool look diversifiable while missing a
  common-mode atom where all models fail together. For orchestration decisions,
  direct beta estimation beats any single pairwise correlation statistic.
related:
  - INS-260627-046B
  - INS-260403-91F7
  - INS-260412-C0B4
  - INS-260330-4BFD
  - INS-260404-4BC4
---
A pairwise matrix answers whether models fail together two at a time, but routers and ensembles fail when the whole pool misses the same item. The paper's non-identification result means a pairwise statistic cannot, even in principle, recover that higher-order tail. For agent platform work, this changes the default dashboard: show all-wrong rate, single-best-wrong-but-some-other-right mass, and confidence intervals, not just average disagreement or pairwise correlation.

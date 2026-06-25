---
id: INS-260625-6345
domain: ai-development
topic: applications
title: Model choice should be benchmarked against the bottleneck metric
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-selection
  - gnn
  - benchmarks
  - domain-ai
sources:
  - type: blog
    title: >-
      Deep learning-enabled discovery of antibiotics effective against Neisseria
      gonorrhoeae.
    url: 'https://www.broadinstitute.org/publications/broad1378186'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The study found GNNs better than alternative architectures, including an
    LLM, at finding active, drug-like, structurally novel molecules.
  standard: >-
    The source explicitly reports benchmarking the predictive model against
    other architectures, including a large language model, and finding that GNNs
    more accurately identified active, drug-like molecules structurally distinct
    from both the training set and known antibiotics. That matters because the
    scientific bottleneck was molecular graph generalization, not
    natural-language fluency.


    The general system-building lesson is to benchmark against the bottleneck's
    native unit of value. In domains with structured objects, traces, assays, or
    graphs, general models may be useful interfaces but not necessarily the best
    core scorer.
stance: >-
  Applied AI systems should choose architectures by downstream bottleneck
  performance, because the winning model may be a specialized GNN rather than a
  more general language model.
related:
  - INS-260325-5A2F
  - INS-260625-8D0D
  - INS-260323-8519
  - INS-260413-C4EE
  - PRI-260411-FB73
---
The source explicitly reports benchmarking the predictive model against other architectures, including a large language model, and finding that GNNs more accurately identified active, drug-like molecules structurally distinct from both the training set and known antibiotics. That matters because the scientific bottleneck was molecular graph generalization, not natural-language fluency.

The general system-building lesson is to benchmark against the bottleneck's native unit of value. In domains with structured objects, traces, assays, or graphs, general models may be useful interfaces but not necessarily the best core scorer.

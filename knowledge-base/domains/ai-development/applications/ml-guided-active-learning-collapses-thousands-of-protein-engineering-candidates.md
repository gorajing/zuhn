---
id: INS-260524-1A41
domain: ai-development
topic: applications
title: >-
  ML-guided active learning collapses thousands of protein-engineering
  candidates to a few worth testing
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - active-learning
  - protein-engineering
  - ml-for-bio
  - drug-discovery
sources:
  - type: audio
    title: Jongmin Sung
date_extracted: '2026-05-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Jongmin Sung: embed protein sequences via a protein language model, regress
    on assay values, predict the top mutants, test only those, then iterate —
    improving each round.
  standard: >-
    Working on a gene-insertion enzyme with low efficiency, Sung used an
    active-learning loop: extract embedding vectors from a protein language
    model, feed them with measured assay values into a regression model, predict
    the highest-efficiency mutants among thousands of possibilities, test only
    the top-ranked, then update and iterate (he cites a validation R^2 around
    0.4, still improving). The general lesson for the KB's AI-for-science
    cluster: ML-guided active learning makes the true bottleneck — physical
    experiments — tractable by drastically narrowing what gets tested. (Specific
    enzyme/company names from the machine translation are omitted as
    unreliable.)
stance: >-
  Using protein-language-model embeddings to train a regression model on assay
  results, then iterating (predict top candidates -> test -> update), makes
  wet-lab protein optimization tractable by testing only the highest-ranked
  variants.
related:
  - INS-260323-3657
  - INS-260325-5656
  - INS-260403-6632
  - INS-260405-0AE7
  - INS-260404-07C3
  - INS-260408-306A
  - INS-260408-8F0A
  - INS-260408-F58E
  - INS-260410-1AF0
  - INS-260410-55B5
---
Working on a gene-insertion enzyme with low efficiency, Sung used an active-learning loop: extract embedding vectors from a protein language model, feed them with measured assay values into a regression model, predict the highest-efficiency mutants among thousands of possibilities, test only the top-ranked, then update and iterate (he cites a validation R^2 around 0.4, still improving). The general lesson for the KB's AI-for-science cluster: ML-guided active learning makes the true bottleneck — physical experiments — tractable by drastically narrowing what gets tested. (Specific enzyme/company names from the machine translation are omitted as unreliable.)

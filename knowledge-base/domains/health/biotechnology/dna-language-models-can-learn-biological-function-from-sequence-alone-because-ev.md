---
id: INS-260505-1165
domain: health
topic: biotechnology
title: >-
  DNA language models can learn biological function from sequence alone because
  evolution wrote function into DNA
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - foundation-models
  - genomics
  - evolution
  - self-supervised-learning
sources:
  - type: audio
    title: Brian Hie   Generative biology from molecular to genome scale
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Evolution has imprinted phenotype information into DNA via natural
    selection, the way the world has imprinted itself on internet text.
  standard: >-
    Brian Hie's central argument for generative biology: the same hypothesis
    that makes language models work — that the world has left its imprint on
    text via human selection of useful representations — applies to DNA via
    evolutionary selection. Evolution has 'written functions and phenotypes back
    into DNA sequence' through ~4 billion years of selection. So a model trained
    on next-base prediction across genomes implicitly learns functional biology,
    even without explicit annotations.


    Application: this validates the architectural pattern of
    foundation-models-on-DNA-only. It also suggests that other biological data
    with implicit selection (immune repertoires, drug-response phenotypes) can
    be modeled the same way. Inverse implication: domains without strong
    selection signals (purely random or designed sequences) won't yield this
    emergent functional understanding.
stance: >-
  A model trained only on DNA sequence (no protein structure, no functional
  annotations) can learn which mutations correlate with disease and how DNA
  encodes complex biomolecules — because evolution has back-propagated
  functional selection into sequence over billions of years.
related:
  - INS-260322-888D
  - INS-260323-E81D
  - INS-260323-A64F
  - INS-260323-8F70
  - INS-260327-E75F
  - INS-260330-C761
  - INS-260330-A59D
  - INS-260330-5F21
  - INS-260328-711E
  - INS-260323-47D8
---
Brian Hie's central argument for generative biology: the same hypothesis that makes language models work — that the world has left its imprint on text via human selection of useful representations — applies to DNA via evolutionary selection. Evolution has 'written functions and phenotypes back into DNA sequence' through ~4 billion years of selection. So a model trained on next-base prediction across genomes implicitly learns functional biology, even without explicit annotations.

Application: this validates the architectural pattern of foundation-models-on-DNA-only. It also suggests that other biological data with implicit selection (immune repertoires, drug-response phenotypes) can be modeled the same way. Inverse implication: domains without strong selection signals (purely random or designed sequences) won't yield this emergent functional understanding.

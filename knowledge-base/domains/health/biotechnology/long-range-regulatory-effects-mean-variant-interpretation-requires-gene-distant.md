---
id: INS-260505-50AC
domain: health
topic: biotechnology
title: >-
  Long-range regulatory effects mean variant interpretation requires
  gene-distant context
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - long-range-regulation
  - genome-architecture
  - variant-interpretation
sources:
  - type: audio
    title: Anshul kundaje
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A variant 700kb from a gene can dramatically change that gene's activity —
    interpretation models need that range built in.
  standard: >-
    Anshul Kundaje's case study: a rare neurodevelopmental disorder patient with
    4.5M genetic variants. Models prioritized one specific variant — 384
    kilobases from the gene it ultimately affects (some 748kb from a related
    gene). The variant creates a new DNA word that's a binding site for a
    brain-expressed transcription factor, dramatically reducing activity of the
    distant gene. Mouse embryo experiments confirmed the prediction.
    Implication: variant interpretation that only considers immediate sequence
    context (within a few kb of the gene) misses much of the regulatory action.


    Application: model architectures for variant interpretation must support
    million-base sequence contexts (matches what EVO-2 and AlphaGenome are
    doing). Smaller-context models are fundamentally underpowered for the most
    therapeutically interesting variants.
stance: >-
  Genetic variants can dramatically affect gene activity from 700+ kilobases
  away, so variant interpretation models must integrate sequence context far
  beyond the immediate vicinity of the affected gene.
related:
  - INS-260404-07C3
  - INS-260408-8F0A
  - INS-260410-CEAA
  - INS-260505-0200
  - INS-260410-1AF0
  - INS-260405-9DB6
---
Anshul Kundaje's case study: a rare neurodevelopmental disorder patient with 4.5M genetic variants. Models prioritized one specific variant — 384 kilobases from the gene it ultimately affects (some 748kb from a related gene). The variant creates a new DNA word that's a binding site for a brain-expressed transcription factor, dramatically reducing activity of the distant gene. Mouse embryo experiments confirmed the prediction. Implication: variant interpretation that only considers immediate sequence context (within a few kb of the gene) misses much of the regulatory action.

Application: model architectures for variant interpretation must support million-base sequence contexts (matches what EVO-2 and AlphaGenome are doing). Smaller-context models are fundamentally underpowered for the most therapeutically interesting variants.

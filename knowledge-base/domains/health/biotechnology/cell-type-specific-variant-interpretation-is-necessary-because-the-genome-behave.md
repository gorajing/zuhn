---
id: INS-260505-0200
domain: health
topic: biotechnology
title: >-
  Cell-type-specific variant interpretation is necessary because the genome
  behaves differently across tissues
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - cell-type-specificity
  - variant-interpretation
  - context-dependence
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
    Liver cell + neuron have the same DNA but use it differently — variant
    effects are tissue-context-specific.
  standard: >-
    Anshul Kundaje: every cell in the body has the same genome, but a liver
    cell, a neuron, and a heart cell read different parts of it. Different cell
    types express different genes and proteins at different levels via
    cell-type-specific control element activity. This means a regulatory variant
    might be silent in most tissues but devastating in one. Variant
    interpretation that doesn't account for cell-type context will
    systematically miss tissue-specific disease mechanisms. Solution: train
    models on activity profiles across thousands of cell types (ENCODE-scale) so
    interpretation can be context-aware.


    Application: clinical variant interpretation pipelines need cell-type-aware
    components. Single-tissue analyses are inadequate for any disease where the
    affected tissue isn't trivially obvious. Same logic generalizes: any
    biological prediction problem requires context-conditioning when the same
    input means different things in different contexts.
stance: >-
  The same DNA variant can have no effect in one cell type and dramatic effects
  in another — genetic variant interpretation must be cell-type-specific to be
  clinically actionable.
related:
  - INS-260410-B9A6
  - INS-260405-1F0B
  - INS-260325-D680
  - INS-260505-50AC
  - INS-260330-2311
  - PRI-260323-A05E
---
Anshul Kundaje: every cell in the body has the same genome, but a liver cell, a neuron, and a heart cell read different parts of it. Different cell types express different genes and proteins at different levels via cell-type-specific control element activity. This means a regulatory variant might be silent in most tissues but devastating in one. Variant interpretation that doesn't account for cell-type context will systematically miss tissue-specific disease mechanisms. Solution: train models on activity profiles across thousands of cell types (ENCODE-scale) so interpretation can be context-aware.

Application: clinical variant interpretation pipelines need cell-type-aware components. Single-tissue analyses are inadequate for any disease where the affected tissue isn't trivially obvious. Same logic generalizes: any biological prediction problem requires context-conditioning when the same input means different things in different contexts.

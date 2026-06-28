---
id: INS-260627-9BA6
domain: health
topic: biotechnology
title: Equivocal clinical categories are the real test of medical AI usefulness
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - medical-ai
  - her2
  - borderline-cases
  - diagnostics
  - pathology
sources:
  - type: paste
    title: >-
      Automated HER2 scoring with uncertainty quantification using lensfree
      holography and deep learning
    url: 'https://arxiv.org/pdf/2601.18219'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    HER2 2+ was the hard class, so the paper's useful evidence is the
    improvement on equivocal cases, not just aggregate accuracy.
  standard: >-
    The source reports that HER2 2+ cores were the most challenging: a single
    model scored only 57.3% on the equivocal class while other classes were at
    least 80%. The five-model, HER2-positive-sensitive ensemble improved the 2+
    class to 68.0% and raised the 2+ AUC from 0.895 to 0.935. That matters
    because 2+ is not just a label in a benchmark; it is a clinically ambiguous
    state where subtle or heterogeneous membranous staining affects downstream
    testing and treatment routing. For medical AI and agent evaluation,
    aggregate accuracy can hide whether the system helps where the workflow is
    actually stuck. Score the ambiguous bins separately.
stance: >-
  Medical AI should be judged heavily on borderline categories because those are
  where human disagreement, confirmatory testing, and treatment consequences
  concentrate.
related:
  - INS-260403-E21C
  - INS-260626-20B7
  - INS-260410-C045
  - INS-260627-F6BD
  - INS-260403-615D
  - INS-260409-BF3F
---
The source reports that HER2 2+ cores were the most challenging: a single model scored only 57.3% on the equivocal class while other classes were at least 80%. The five-model, HER2-positive-sensitive ensemble improved the 2+ class to 68.0% and raised the 2+ AUC from 0.895 to 0.935. That matters because 2+ is not just a label in a benchmark; it is a clinically ambiguous state where subtle or heterogeneous membranous staining affects downstream testing and treatment routing. For medical AI and agent evaluation, aggregate accuracy can hide whether the system helps where the workflow is actually stuck. Score the ambiguous bins separately.

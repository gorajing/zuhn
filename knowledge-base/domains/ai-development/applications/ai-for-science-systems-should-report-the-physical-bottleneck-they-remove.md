---
id: INS-260627-C628
domain: ai-development
topic: applications
title: AI-for-science systems should report the physical bottleneck they remove
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-for-science
  - measurement
  - evaluation
  - bottlenecks
  - healthcare-ai
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
    The durable claim is not 'AI scored HER2,' but 'AI reduced dependence on
    bulky whole-slide scanning hardware.'
  standard: >-
    The HER2 paper is stronger than a generic medical-image classifier because
    its claimed value is tied to a field bottleneck: conventional scanners
    require high-numerical-aperture optics, precision motorized stages, stable
    focusing, and costly infrastructure. The model is evaluated as part of a
    replacement measurement loop with throughput, hardware-cost, blinded-test,
    and scanner-baseline evidence. For agent and eval work, this is a useful
    selection rule: prefer projects that state which real-world constraint the
    model changes and what evidence connects model behavior to that constraint.
    Accuracy alone is too abstract; bottleneck removal is the durable lesson.
stance: >-
  A high-signal AI application should name the non-AI bottleneck it relaxes,
  such as optics, staining throughput, clinician time, reagent search, or
  experimental routing, instead of only reporting model performance.
related:
  - INS-260405-7F06
  - INS-260625-BF8B
  - INS-260626-484B
  - INS-260627-109F
  - PRI-260406-E015
---
The HER2 paper is stronger than a generic medical-image classifier because its claimed value is tied to a field bottleneck: conventional scanners require high-numerical-aperture optics, precision motorized stages, stable focusing, and costly infrastructure. The model is evaluated as part of a replacement measurement loop with throughput, hardware-cost, blinded-test, and scanner-baseline evidence. For agent and eval work, this is a useful selection rule: prefer projects that state which real-world constraint the model changes and what evidence connects model behavior to that constraint. Accuracy alone is too abstract; bottleneck removal is the durable lesson.

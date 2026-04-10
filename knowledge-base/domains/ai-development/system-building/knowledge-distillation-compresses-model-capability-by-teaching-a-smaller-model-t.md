---
id: INS-260330-52F6
domain: ai-development
topic: system-building
title: >-
  Knowledge distillation compresses model capability by teaching a smaller model
  the teacher's probability distributions, not just its answers
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - knowledge-distillation
  - model-compression
  - inference-optimization
  - roblox
sources:
  - type: pdf
    title: >-
      @u.northwestern.edu Mail - How Roblox Uses AI to Translate 16 Languages in
      100 Milliseconds
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Knowledge distillation works because student models learn probability
    distributions, not just correct answers
  standard: >-
    Roblox compressed their translation model from 1B to under 650M parameters
    using knowledge distillation. The critical detail: the student doesn't just
    learn the teacher's final answers — it learns the teacher's probability
    distributions across all possible translations. This preserves the nuance of
    the teacher's uncertainty. Combined with quantization (reducing numerical
    precision of weights) and model compilation (optimizing computation graphs
    for specific hardware), they achieved the latency required for real-time
    chat. The architectural problem (building the model) and the serving problem
    (making it fast enough) are fundamentally different challenges requiring
    different engineering.
stance: >-
  The key to knowledge distillation is that the student model learns the
  teacher's confidence levels across all possible outputs, not just the final
  answer — this preserves nuance that hard labels destroy
related:
  - INS-260329-6004
  - INS-260323-584D
  - INS-260403-27A5
  - INS-260410-939B
  - INS-260323-144F
evidence:
  - id: INS-260329-6004
    type: SUPPORTS
  - id: INS-260323-144F
    type: SUPPORTS
  - id: INS-260404-D39D
    type: SUPPORTS
---
Roblox compressed their translation model from 1B to under 650M parameters using knowledge distillation. The critical detail: the student doesn't just learn the teacher's final answers — it learns the teacher's probability distributions across all possible translations. This preserves the nuance of the teacher's uncertainty. Combined with quantization (reducing numerical precision of weights) and model compilation (optimizing computation graphs for specific hardware), they achieved the latency required for real-time chat. The architectural problem (building the model) and the serving problem (making it fast enough) are fundamentally different challenges requiring different engineering.

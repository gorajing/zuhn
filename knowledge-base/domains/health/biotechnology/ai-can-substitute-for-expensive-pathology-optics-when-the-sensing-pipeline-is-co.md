---
id: INS-260627-CE7F
domain: health
topic: biotechnology
title: >-
  AI can substitute for expensive pathology optics when the sensing pipeline is
  co-designed
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - computational-pathology
  - her2
  - lensfree-holography
  - cost-curve
  - biomedical-ai
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
    The HER2 system shows AI changing the pathology cost curve by replacing
    high-end optics with lensfree sensing plus learned inference.
  standard: >-
    The paper frames conventional digital pathology adoption as constrained by
    scanner cost, speed, footprint, mechanical focusing, and optical alignment.
    Its answer is not a better classifier on standard whole-slide images, but a
    co-designed measurement stack: lensfree inline holography captures
    diffraction patterns, angular-spectrum propagation converts them into
    six-channel complex-field tensors, and EfficientNet-B0 models classify HER2
    scores. On a blinded 412-core test set, this lensfree pipeline reached 84.9%
    four-class accuracy and 94.8% binary HER2 accuracy with uncertainty
    filtering, close to brightfield whole-slide scanner baselines despite much
    simpler hardware. The transferable lesson is that AI can be most valuable
    when it relaxes the expensive part of a domain workflow, not when it is
    pasted onto the existing measurement stack.
stance: >-
  In computational pathology, the durable bottleneck is not just classification
  accuracy; a useful AI system can move cost and complexity from physical optics
  into learned reconstruction and scoring when the sensing hardware,
  preprocessing, and model are designed as one pipeline.
related:
  - INS-260412-16CE
  - INS-260627-7A9C
  - PRI-260328-0BE1
  - INS-260325-07FA
  - INS-260323-7625
---
The paper frames conventional digital pathology adoption as constrained by scanner cost, speed, footprint, mechanical focusing, and optical alignment. Its answer is not a better classifier on standard whole-slide images, but a co-designed measurement stack: lensfree inline holography captures diffraction patterns, angular-spectrum propagation converts them into six-channel complex-field tensors, and EfficientNet-B0 models classify HER2 scores. On a blinded 412-core test set, this lensfree pipeline reached 84.9% four-class accuracy and 94.8% binary HER2 accuracy with uncertainty filtering, close to brightfield whole-slide scanner baselines despite much simpler hardware. The transferable lesson is that AI can be most valuable when it relaxes the expensive part of a domain workflow, not when it is pasted onto the existing measurement stack.

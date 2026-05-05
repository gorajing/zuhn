---
id: INS-260505-1606
domain: ai-development
topic: research-methodology
title: 'Interpretability in biological ML is debugging, not just explainability'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - interpretability
  - data-bias
  - debugging
  - biological-ml
sources:
  - type: audio
    title: Russ altman   panel
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models on biological data quietly learn the biases of the experiments —
    interpretability catches that.
  standard: >-
    Anshul Kundaje on the panel: biology data is messy. Powerful deep learning
    models trained on this data 'often latch onto these biases for predictions.'
    Interpretability matters not because users want explanations, but because
    it's the primary tool to detect that the model has learned a confounder
    rather than the underlying biology. Without active interpretation, you ship
    a model that predicts well in distribution and fails silently when deployed
    against new experiments. This makes interpretability a fundamental
    engineering practice in scientific ML, not a UX feature.


    Application: any team training models on real-world data with collection
    biases (medical records, surveys, lab experiments) should treat
    interpretability tooling as engineering infrastructure, not a publication
    afterthought. Bias detection via interpretability is the equivalent of unit
    tests for traditional code.
stance: >-
  In domains with messy biased data (biology, medicine, social science), model
  interpretability is operationally a debugging tool to detect data biases the
  model has latched onto — not just an end-user explainability concern.
related:
  - PRI-260323-F37F
  - INS-260330-5676
  - INS-260403-979D
  - INS-260408-8F0A
  - PRI-260406-A33C
  - INS-260412-347D
  - PRI-260406-4F8E
  - INS-260330-0E86
---
Anshul Kundaje on the panel: biology data is messy. Powerful deep learning models trained on this data 'often latch onto these biases for predictions.' Interpretability matters not because users want explanations, but because it's the primary tool to detect that the model has learned a confounder rather than the underlying biology. Without active interpretation, you ship a model that predicts well in distribution and fails silently when deployed against new experiments. This makes interpretability a fundamental engineering practice in scientific ML, not a UX feature.

Application: any team training models on real-world data with collection biases (medical records, surveys, lab experiments) should treat interpretability tooling as engineering infrastructure, not a publication afterthought. Bias detection via interpretability is the equivalent of unit tests for traditional code.

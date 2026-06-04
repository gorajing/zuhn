---
id: INS-260505-5510
domain: ai-development
topic: research-methodology
title: >-
  Predictive models without mechanistic understanding fail to generalize and
  pose safety risks
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - prediction-vs-understanding
  - ood-generalization
  - safety
  - scientific-ml
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
    A model that predicts well but is uninterpretable is also a model that fails
    unpredictably outside its training distribution.
  standard: >-
    Andreas Tolias on the panel: there's a real danger in trading mechanistic
    understanding for predictive accuracy. Two failure modes: (1) models that
    are predictive but not understandable pose safety problems where deployed
    (medical diagnosis, autonomous systems); (2) they don't generalize outside
    their training distribution because they haven't learned the underlying
    physics — only the statistical regularities of training data. Historical
    analog: Maxwell's equations. Once you understand the physics, your model
    becomes more powerful AND robust to new conditions. Statistical models
    without that understanding are fragile.


    Application: in any high-stakes ML deployment, treat 'high accuracy on test
    data' as necessary but insufficient. Demand mechanistic interpretability,
    OOD evaluation, and physics-/domain-consistency checks. Same standard for
    decision-audit deliverables — a prediction that 'this principle was retired'
    must be backed by mechanistic explanation (which document, what evidence).
stance: >-
  Models that predict without understanding are not a stable scientific endpoint
  — they fail to generalize out of distribution AND pose safety problems where
  deployed in high-stakes domains.
related:
  - INS-260323-584D
  - INS-260323-BA17
  - INS-260330-DF2C
  - INS-260501-FDF0
  - INS-260505-1684
  - PRI-260403-EA13
  - INS-260505-4426
  - INS-260602-E2BD
---
Andreas Tolias on the panel: there's a real danger in trading mechanistic understanding for predictive accuracy. Two failure modes: (1) models that are predictive but not understandable pose safety problems where deployed (medical diagnosis, autonomous systems); (2) they don't generalize outside their training distribution because they haven't learned the underlying physics — only the statistical regularities of training data. Historical analog: Maxwell's equations. Once you understand the physics, your model becomes more powerful AND robust to new conditions. Statistical models without that understanding are fragile.

Application: in any high-stakes ML deployment, treat 'high accuracy on test data' as necessary but insufficient. Demand mechanistic interpretability, OOD evaluation, and physics-/domain-consistency checks. Same standard for decision-audit deliverables — a prediction that 'this principle was retired' must be backed by mechanistic explanation (which document, what evidence).

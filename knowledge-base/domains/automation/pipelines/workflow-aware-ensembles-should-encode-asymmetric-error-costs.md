---
id: INS-260627-5B61
domain: automation
topic: pipelines
title: Workflow-aware ensembles should encode asymmetric error costs
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - ensembles
  - clinical-workflow
  - false-negatives
  - automation
  - her2
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
    The HER2 ensemble favored high-confidence positive calls because false
    negatives can deny targeted therapy.
  standard: >-
    The paper did not use a generic majority vote. It trained five
    EfficientNet-B0 models and applied a confidence-aware fusion rule that lets
    a high-confidence HER2-positive prediction from any ensemble member override
    the global most-confident class. The authors justify this by the clinical
    asymmetry: false-negative HER2 calls can cause missed eligibility for
    HER2-targeted therapy, while false positives often trigger confirmatory
    testing. This improved binary accuracy from 88.8% for a single model to
    92.5% for the ensemble, and improved the difficult 2+ class from 57.3% to
    68.0%. The general automation lesson is to make the router reflect the real
    cost matrix; neutral voting can be wrong when the workflow has an explicit
    escalation path.
stance: >-
  When domain mistakes have asymmetric consequences, ensemble rules should
  optimize for the operational cost of error types rather than neutral majority
  vote.
related:
  - INS-260410-14E5
  - INS-260326-B10B
  - INS-260330-D066
  - INS-260403-5E03
  - PRI-260323-8EEA
---
The paper did not use a generic majority vote. It trained five EfficientNet-B0 models and applied a confidence-aware fusion rule that lets a high-confidence HER2-positive prediction from any ensemble member override the global most-confident class. The authors justify this by the clinical asymmetry: false-negative HER2 calls can cause missed eligibility for HER2-targeted therapy, while false positives often trigger confirmatory testing. This improved binary accuracy from 88.8% for a single model to 92.5% for the ensemble, and improved the difficult 2+ class from 57.3% to 68.0%. The general automation lesson is to make the router reflect the real cost matrix; neutral voting can be wrong when the workflow has an explicit escalation path.

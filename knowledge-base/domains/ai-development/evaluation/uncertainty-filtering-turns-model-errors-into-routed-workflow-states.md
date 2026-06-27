---
id: INS-260627-20D7
domain: ai-development
topic: evaluation
title: Uncertainty filtering turns model errors into routed workflow states
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - uncertainty
  - evals
  - abstention
  - clinical-ai
  - routing
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
    MC-dropout HER2 filtering improved accuracy by rejecting uncertain cases,
    making abstention a first-class workflow outcome.
  standard: >-
    The system used MC dropout with 256 stochastic evaluations and
    class-specific figures of merit to reject uncertain predictions. With one
    threshold set, four-class accuracy rose from 80.8% to 84.9% and binary
    accuracy from 92.5% to 94.8%, while the filter identified 30.4% of
    misclassified cores and discarded 7.2% of correctly classified cores. A more
    conservative threshold lowered the correct-prediction loss rate to 3.6%
    while still catching 20.2% of mistakes. The transferable pattern is to
    evaluate agents and classifiers with routing states: answer, abstain,
    escalate, or request more evidence. In domains where mistakes have
    asymmetric costs, a model that knows when not to decide can be more
    deployable than one with a slightly higher forced-choice score.
stance: >-
  For high-stakes classifiers, the most useful eval is not only accuracy after
  forced choice but the tradeoff curve between accepted predictions, rejected
  uncertain cases, corrected mistakes, and lost correct answers.
related:
  - INS-260627-C36B
  - INS-260329-A077
  - INS-260405-02BE
  - PRI-260406-A33C
  - INS-260328-41C9
---
The system used MC dropout with 256 stochastic evaluations and class-specific figures of merit to reject uncertain predictions. With one threshold set, four-class accuracy rose from 80.8% to 84.9% and binary accuracy from 92.5% to 94.8%, while the filter identified 30.4% of misclassified cores and discarded 7.2% of correctly classified cores. A more conservative threshold lowered the correct-prediction loss rate to 3.6% while still catching 20.2% of mistakes. The transferable pattern is to evaluate agents and classifiers with routing states: answer, abstain, escalate, or request more evidence. In domains where mistakes have asymmetric costs, a model that knows when not to decide can be more deployable than one with a slightly higher forced-choice score.

---
id: INS-260505-4351
domain: ai-development
topic: research-methodology
title: >-
  Off-policy evaluation in clinical RL needs synthetic+real data mixing for OOD
  coverage
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - off-policy-evaluation
  - clinical-ai
  - synthetic-data
  - uncertainty
sources:
  - type: audio
    title: Talk 1   healthcare
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a new clinical policy takes an action your offline data never saw,
    off-policy evaluation can't bound its value — synthetic data fills the gap.
  standard: >-
    Stanford talk on policy evaluation: deploying RL-based clinical
    decision-making requires off-policy evaluation to estimate policy value
    before live deployment. The known failure mode: limited coverage of the
    offline behavior dataset. If the new policy chooses actions never observed
    in offline data, the estimator returns garbage. Two new estimators
    introduced: CPGen (initial-state-conditioned, gives valid prediction
    intervals across patient subgroups), DRPPI (unconditioned, gives valid
    confidence intervals). Both leverage cheap synthetic data generation to fill
    OOD coverage gaps.


    Application: whenever deploying RL or causal inference in domains where
    actions are expensive to test (medicine, materials, large-scale operations),
    the offline coverage problem is the failure mode to design around. Synthetic
    data isn't a luxury — it's the path to deployable policies.
stance: >-
  Off-policy evaluation in high-stakes RL deployment (e.g., automated clinical
  decisions) systematically fails when the new policy takes actions unobserved
  in the offline behavior dataset — synthetic data, generated cheaply by modern
  simulators, can fill those gaps and produce valid confidence intervals.
related:
  - INS-260403-88DA
  - INS-260323-9BAB
  - PRI-260323-FA42
  - INS-260605-0748
  - INS-260605-D430
---
Stanford talk on policy evaluation: deploying RL-based clinical decision-making requires off-policy evaluation to estimate policy value before live deployment. The known failure mode: limited coverage of the offline behavior dataset. If the new policy chooses actions never observed in offline data, the estimator returns garbage. Two new estimators introduced: CPGen (initial-state-conditioned, gives valid prediction intervals across patient subgroups), DRPPI (unconditioned, gives valid confidence intervals). Both leverage cheap synthetic data generation to fill OOD coverage gaps.

Application: whenever deploying RL or causal inference in domains where actions are expensive to test (medicine, materials, large-scale operations), the offline coverage problem is the failure mode to design around. Synthetic data isn't a luxury — it's the path to deployable policies.

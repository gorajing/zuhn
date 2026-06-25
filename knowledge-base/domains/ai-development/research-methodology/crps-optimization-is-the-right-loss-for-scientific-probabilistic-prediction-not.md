---
id: INS-260505-9B9F
domain: ai-development
topic: research-methodology
title: >-
  CRPS optimization is the right loss for scientific probabilistic prediction,
  not MSE
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - proper-scoring-rules
  - uncertainty-quantification
  - weather-ai
  - loss-functions
sources:
  - type: audio
    title: Lighting talk 2
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MSE gives you accurate means but miscalibrated uncertainty. CRPS gives you
    both — optimize directly for what you actually need.
  standard: >-
    Mokhechi's design choice: instead of predicting a deterministic future state
    and then bolting on uncertainty estimates, train the model end-to-end to
    optimize CRPS (Continuous Ranked Probability Score). CRPS is a proper
    scoring rule — minimizing it produces well-calibrated probabilistic
    predictions. The model directly outputs ensemble-style stochastic samples,
    and the training objective is to make those samples cover the actual
    distribution of futures correctly. Result: out-of-the-box probabilistic
    forecasts that match operational supercomputer ensemble systems (IFS) at
    quality, run 1000x faster, and respect calibration where most ML weather
    models don't.


    Application: in any scientific ML application that requires uncertainty
    (weather, climate, drug response, sensor fusion), optimize for proper
    scoring rules (CRPS, log-likelihood, Brier score) rather than MSE. The
    calibration story is the difference between 'model that's right on average'
    and 'model whose probabilities you can actually use to make decisions.'
stance: >-
  When the goal is calibrated probabilistic forecasts (not point predictions),
  training a model to minimize the Continuous Ranked Probability Score directly
  produces well-calibrated distributions — most existing weather/climate AI
  models optimize for MSE which produces accurate means but miscalibrated
  uncertainty.
related:
  - INS-260330-0AA7
  - INS-260403-E554
  - INS-260405-2E0A
  - INS-260403-33E2
  - INS-260403-AEA3
  - INS-260325-96FB
  - INS-260403-F4C9
  - INS-260409-F93A
  - INS-260403-34C0
  - PRI-260406-E5FB
---
Mokhechi's design choice: instead of predicting a deterministic future state and then bolting on uncertainty estimates, train the model end-to-end to optimize CRPS (Continuous Ranked Probability Score). CRPS is a proper scoring rule — minimizing it produces well-calibrated probabilistic predictions. The model directly outputs ensemble-style stochastic samples, and the training objective is to make those samples cover the actual distribution of futures correctly. Result: out-of-the-box probabilistic forecasts that match operational supercomputer ensemble systems (IFS) at quality, run 1000x faster, and respect calibration where most ML weather models don't.

Application: in any scientific ML application that requires uncertainty (weather, climate, drug response, sensor fusion), optimize for proper scoring rules (CRPS, log-likelihood, Brier score) rather than MSE. The calibration story is the difference between 'model that's right on average' and 'model whose probabilities you can actually use to make decisions.'

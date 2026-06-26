---
id: INS-260605-6A0A
domain: ai-development
topic: hardware
title: >-
  Heterogeneous compute will succeed homogeneous scaling as the inference
  paradigm
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - heterogeneous-compute
  - inference
  - scaling-laws
  - hardware-disaggregation
  - multi-agent
sources:
  - type: youtube
    title: >-
      Scaling the Next Paradigm of Heterogeneous Intelligence — Adrian
      Bertagnoli, Callosum
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WRBNDpUhsJQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Homogeneous scaling (one model, identical chips) was a training-era
    artifact; the inference era rewards heterogeneity across architectures and
    silicon.
  standard: >-
    Neural scaling laws — more data and parameters yield better models — were
    rooted in the training domain and assume a single model on a fleet of
    identical chips. As the field shifts from training to inference, that
    homogeneity becomes less relevant. We already see 'mild heterogeneity'
    emerging at three layers: mixture-of-experts replacing dense models
    (architecture), multi-agent systems replacing single LLM calls (workflow),
    and prefill-decode disaggregated systems replacing single chips (hardware).


    The trajectory runs from mild heterogeneity (varied prompts and sub-agent
    models on homogeneous clusters) through using different chips for different
    model types (state-space models, diffusion models, transformers each on
    optimal hardware), to a final stage of hardware-software co-evolution with
    full vertical integration of intelligence and silicon. Bertagnoli frames
    this as the third era of compute: CPU (faster compute) → Nvidia GPUs
    (massively parallel) → heterogeneous mapping of multi-agent workloads onto
    optimal chips. For builders, the implication is that architectural decisions
    about which model runs on which hardware become a primary lever for cost and
    latency, independent of raw model capability.
stance: >-
  The next era of compute scaling comes from mapping diverse model architectures
  onto diverse chips, not from scaling single models on identical hardware
  fleets.
related:
  - INS-260403-B73D
  - INS-260424-0554
  - INS-260605-DD2A
  - PRI-260405-FB37
  - PRI-260323-8E89
  - PRI-260328-D893
  - INS-260625-9B0C
---
Neural scaling laws — more data and parameters yield better models — were rooted in the training domain and assume a single model on a fleet of identical chips. As the field shifts from training to inference, that homogeneity becomes less relevant. We already see 'mild heterogeneity' emerging at three layers: mixture-of-experts replacing dense models (architecture), multi-agent systems replacing single LLM calls (workflow), and prefill-decode disaggregated systems replacing single chips (hardware).

The trajectory runs from mild heterogeneity (varied prompts and sub-agent models on homogeneous clusters) through using different chips for different model types (state-space models, diffusion models, transformers each on optimal hardware), to a final stage of hardware-software co-evolution with full vertical integration of intelligence and silicon. Bertagnoli frames this as the third era of compute: CPU (faster compute) → Nvidia GPUs (massively parallel) → heterogeneous mapping of multi-agent workloads onto optimal chips. For builders, the implication is that architectural decisions about which model runs on which hardware become a primary lever for cost and latency, independent of raw model capability.

---
id: INS-260505-23FB
domain: ai-development
topic: model-architecture
title: >-
  Neural operators with spherical harmonics encode Earth's geometry directly
  into AI weather models
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - neural-operators
  - spherical-harmonics
  - weather-ai
  - inductive-bias
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
    Use Earth's geometry as a basis function, not a learning target — spherical
    harmonics give the model the right inductive bias for free.
  standard: >-
    Mokhechi's weather AI system uses neural operators with spherical-harmonic
    basis functions — meaning the architecture has Earth's spherical geometry
    built in as a hard structural constraint. Two consequences: (1) resolution
    independence — the model takes input at any resolution and produces output
    at any resolution; (2) inherits Earth's spatial structure for free rather
    than needing to learn it from data. Combined with CRPS-optimized
    probabilistic outputs (continuous ranked probability score, a proper scoring
    rule), the model produces calibrated probabilistic forecasts at IFS quality
    but ~1000x faster, replacing the IFS deterministic supercomputer pipeline.


    Application: when designing AI for any geometrically-structured domain
    (sphere, torus, manifold, graph), use the right basis-function architecture
    as the inductive bias rather than relying on generic transformers/CNNs to
    learn the geometry. The structural prior is the unlock for both data
    efficiency and resolution independence.
stance: >-
  AI weather models that use spherical-harmonic-basis neural operators (rather
  than generic transformer or CNN architectures) inherit the spherical geometry
  of Earth as a hard architectural constraint, enabling resolution-independent
  prediction and respecting physical structure that generic architectures must
  learn from data.
related:
  - INS-260325-D392
  - INS-260514-DC55
  - INS-260501-FDF0
  - PRI-260412-7664
  - INS-260330-F889
  - INS-260330-97A0
---
Mokhechi's weather AI system uses neural operators with spherical-harmonic basis functions — meaning the architecture has Earth's spherical geometry built in as a hard structural constraint. Two consequences: (1) resolution independence — the model takes input at any resolution and produces output at any resolution; (2) inherits Earth's spatial structure for free rather than needing to learn it from data. Combined with CRPS-optimized probabilistic outputs (continuous ranked probability score, a proper scoring rule), the model produces calibrated probabilistic forecasts at IFS quality but ~1000x faster, replacing the IFS deterministic supercomputer pipeline.

Application: when designing AI for any geometrically-structured domain (sphere, torus, manifold, graph), use the right basis-function architecture as the inductive bias rather than relying on generic transformers/CNNs to learn the geometry. The structural prior is the unlock for both data efficiency and resolution independence.

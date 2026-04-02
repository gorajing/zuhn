---
id: INS-260330-6CB7
domain: psychology
topic: decision-making
title: Cascading dependency amplifies small measurement errors into systemic risk
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - dependency
  - systemic-risk
  - measurement
  - error-propagation
  - compounding
sources:
  - type: youtube
    title: World's Roundest Object!
    author: Veritasium
    url: 'https://www.youtube.com/watch?v=ZMByI4s-D-Y'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Four of seven SI base units depend on the kilogram, so a fingerprint-weight
    drift in Big K corrupts Newtons, Joules, Volts, and Watts.
  standard: >-
    The video reveals a striking structural vulnerability: four of the seven SI
    base units depend on the kilogram's definition, plus all derived units like
    Newtons, Joules, Volts, and Watts. A 50-microgram drift (the weight of a
    fingerprint) in Big K isn't just a mass problem — it's a systemic metrology
    problem that ripples through physics, engineering, and commerce.


    This is a powerful mental model for any system with tight coupling to a
    single reference point. In software architecture, a single source of truth
    that silently corrupts propagates errors everywhere (a corrupted auth token
    format, a drifting clock, an uncalibrated sensor). In business, when
    multiple KPIs derive from one metric (e.g., revenue), errors in that base
    metric cascade into every downstream decision. The lesson: audit your
    dependency chains and identify which single points of failure could silently
    corrupt the most downstream systems.
stance: >-
  When multiple units depend on a single unstable base unit, even microscopic
  errors in that base propagate and compound across every derived measurement.
related:
  - INS-260330-C9A6
  - INS-260330-DBAD
  - INS-260330-2F74
  - INS-260325-3B28
  - INS-260329-D357
evidence:
  - id: INS-260325-3B28
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The video reveals a striking structural vulnerability: four of the seven SI base units depend on the kilogram's definition, plus all derived units like Newtons, Joules, Volts, and Watts. A 50-microgram drift (the weight of a fingerprint) in Big K isn't just a mass problem — it's a systemic metrology problem that ripples through physics, engineering, and commerce.

This is a powerful mental model for any system with tight coupling to a single reference point. In software architecture, a single source of truth that silently corrupts propagates errors everywhere (a corrupted auth token format, a drifting clock, an uncalibrated sensor). In business, when multiple KPIs derive from one metric (e.g., revenue), errors in that base metric cascade into every downstream decision. The lesson: audit your dependency chains and identify which single points of failure could silently corrupt the most downstream systems.

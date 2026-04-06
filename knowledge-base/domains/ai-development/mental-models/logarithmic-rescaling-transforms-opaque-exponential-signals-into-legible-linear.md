---
id: INS-260330-FF5B
domain: ai-development
topic: mental-models
title: >-
  Logarithmic rescaling transforms opaque exponential signals into legible
  linear trends
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - log-scale
  - data-visualization
  - exponential-growth
  - signal-detection
sources:
  - type: youtube
    title: Exponential growth and epidemics
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=Kas0tIxDvrg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Log scales convert exponential curves into straight lines, making growth
    rates, trend changes, and inflection points immediately visible to human
    perception.
  standard: >-
    On a linear scale, exponential growth appears as a hockey stick where early
    stages look flat and late stages look vertical — both phases are equally
    uninformative for decision-making. A logarithmic scale fixes this by
    converting the exponential into a straight line whose slope equals the
    growth rate.


    This transformation is powerful because it makes three things instantly
    visible: (1) the actual growth rate as a readable slope, (2) changes in
    growth rate as slope changes, and (3) deviations from pure exponential
    behavior as departures from linearity. For anyone tracking AI capability
    scaling, startup metrics, or investment compounding, log-scale plotting
    should be the default visualization — it's not a fancy technique but a basic
    perceptual correction that makes exponential data humanly legible.
stance: >-
  Plotting data on a logarithmic scale is the single most effective technique
  for making exponential growth legible and actionable to human decision-makers.
related:
  - INS-260322-3DE2
  - INS-260325-4CBB
  - INS-260328-EA3A
  - INS-260328-D1B2
  - INS-260329-95EF
  - INS-260330-ED8A
  - INS-260330-FE65
  - INS-260330-1AB0
  - INS-260330-C499
  - INS-260330-9935
evidence:
  - id: INS-260322-3DE2
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260325-4CBB
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260328-EA3A
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-95EF
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-4824
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-FE65
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-FED6
    type: REFINES
    classified_at: '2026-04-02'
  - id: INS-260330-8C80
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-9935
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260330-ED8A
    type: REFINES
    classified_at: '2026-04-05'
  - id: INS-260330-1AB0
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260330-C499
    type: SUPPORTS
    classified_at: '2026-04-05'
---
On a linear scale, exponential growth appears as a hockey stick where early stages look flat and late stages look vertical — both phases are equally uninformative for decision-making. A logarithmic scale fixes this by converting the exponential into a straight line whose slope equals the growth rate.

This transformation is powerful because it makes three things instantly visible: (1) the actual growth rate as a readable slope, (2) changes in growth rate as slope changes, and (3) deviations from pure exponential behavior as departures from linearity. For anyone tracking AI capability scaling, startup metrics, or investment compounding, log-scale plotting should be the default visualization — it's not a fancy technique but a basic perceptual correction that makes exponential data humanly legible.

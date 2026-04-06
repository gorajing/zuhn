---
id: INS-260404-C497
domain: psychology
topic: decision-making
title: >-
  Environmental coupling in measurement systems produces phantom signals that
  track external rhythms
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - systematic-error
  - sensor-bias
  - environmental-coupling
  - phantom-patterns
sources:
  - type: youtube
    title: 'Michio Kaku: What If Einstein Is Wrong? | Big Think'
    author: Big Think
    url: 'https://www.youtube.com/watch?v=9XjS4I4oQDY'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Temperature-dependent sensors measuring the speed of light produced a fake
    diurnal cycle because the lab was outdoors.
  standard: >-
    A rival experiment to the Pound-Rebka measurement found the speed of light
    appeared to rise in the morning, peak at noon, and fall at night — an
    obviously absurd result caused by outdoor temperature-dependent sensors.
    This is a universal failure mode: any measurement system coupled to an
    environmental variable will produce phantom correlations. In business
    analytics, this manifests as seasonal patterns in metrics that actually
    reflect marketing calendar changes, not user behavior shifts. In machine
    learning, models trained on data with time-correlated features learn to
    predict the clock rather than the underlying phenomenon. In health tracking,
    wearable sensors affected by ambient temperature or motion produce phantom
    physiological signals. The fix is always the same as Pound's: isolate the
    measurement from the confound, or explicitly model and subtract the
    environmental coupling.
stance: >-
  When sensors are coupled to environmental variables, the resulting data will
  exhibit rhythmic patterns that mimic real phenomena but actually reflect
  measurement artifact.
related:
  - INS-260330-DBA4
  - INS-260330-ED04
  - PRI-260328-B115
  - INS-260330-8AE8
  - INS-260330-CA97
evidence:
  - id: INS-260330-8AE8
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260327-6F94
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260330-ED04
    type: CHALLENGES
    classified_at: '2026-04-06'
  - id: INS-260330-CA97
    type: SUPPORTS
    classified_at: '2026-04-06'
  - id: INS-260323-0919
    type: SUPPORTS
    classified_at: '2026-04-06'
---
A rival experiment to the Pound-Rebka measurement found the speed of light appeared to rise in the morning, peak at noon, and fall at night — an obviously absurd result caused by outdoor temperature-dependent sensors. This is a universal failure mode: any measurement system coupled to an environmental variable will produce phantom correlations. In business analytics, this manifests as seasonal patterns in metrics that actually reflect marketing calendar changes, not user behavior shifts. In machine learning, models trained on data with time-correlated features learn to predict the clock rather than the underlying phenomenon. In health tracking, wearable sensors affected by ambient temperature or motion produce phantom physiological signals. The fix is always the same as Pound's: isolate the measurement from the confound, or explicitly model and subtract the environmental coupling.

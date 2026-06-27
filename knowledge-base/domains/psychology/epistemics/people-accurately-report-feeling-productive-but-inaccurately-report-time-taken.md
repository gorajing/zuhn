---
id: INS-260627-F1B4
domain: psychology
topic: epistemics
title: People accurately report feeling productive but inaccurately report time taken
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-report
  - measurement
  - productivity
  - survey-design
  - cognitive-bias
sources:
  - type: youtube
    title: >-
      How METR measures Long Tasks and Experienced Open Source Dev Productivity
      - Joel Becker, METR
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=k1t2xyWMUdY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Ask people how productive they felt, not how long something took — only the
    former tracks reality.
  standard: >-
    A recurring finding in software-engineering research is a sharp asymmetry in
    what self-report can measure. If you ask developers how much more productive
    they *felt* using a tool, their answer correlates well with quantitative
    ground truth. But if you ask how long a specific task *took*, the answer is
    almost always wrong. METR exploited this: developers in their study
    confidently predicted AI would speed them up, and reported feeling faster,
    while screen-recording timestamps showed they were actually slowed down.


    The practical consequence is that any measurement strategy resting on
    developers or researchers self-estimating their own speedup — a commonly
    proposed way to gauge how much AI is accelerating R&D — should not be
    trusted. The perceptual gap is itself informative, because it *is* the hype:
    people genuinely believe they were faster when they weren't, which explains
    the disconnect between breathless adoption narratives and measured output.


    When designing any survey or evaluation, separate the perceptual question
    (valid, and worth knowing because it reveals belief and morale) from the
    duration question (invalid — instrument it directly with timers, telemetry,
    or recordings instead). Treat any productivity claim sourced from remembered
    time estimates as a measurement of feeling, not of fact.
stance: >-
  Subjective feelings of productivity correlate with real data, but subjective
  estimates of how long a task took are almost always wrong.
related:
  - INS-260325-809A
  - INS-260403-4CE2
  - INS-260403-3CD9
  - INS-260329-9C20
  - INS-260405-0CE7
  - INS-260403-449A
---
A recurring finding in software-engineering research is a sharp asymmetry in what self-report can measure. If you ask developers how much more productive they *felt* using a tool, their answer correlates well with quantitative ground truth. But if you ask how long a specific task *took*, the answer is almost always wrong. METR exploited this: developers in their study confidently predicted AI would speed them up, and reported feeling faster, while screen-recording timestamps showed they were actually slowed down.

The practical consequence is that any measurement strategy resting on developers or researchers self-estimating their own speedup — a commonly proposed way to gauge how much AI is accelerating R&D — should not be trusted. The perceptual gap is itself informative, because it *is* the hype: people genuinely believe they were faster when they weren't, which explains the disconnect between breathless adoption narratives and measured output.

When designing any survey or evaluation, separate the perceptual question (valid, and worth knowing because it reveals belief and morale) from the duration question (invalid — instrument it directly with timers, telemetry, or recordings instead). Treat any productivity claim sourced from remembered time estimates as a measurement of feeling, not of fact.

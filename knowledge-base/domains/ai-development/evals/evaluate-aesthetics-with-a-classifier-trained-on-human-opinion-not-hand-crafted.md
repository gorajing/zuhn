---
id: INS-260628-2C38
domain: ai-development
topic: evals
title: >-
  Evaluate aesthetics with a classifier trained on human opinion, not
  hand-crafted metrics
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - perceptual-evals
  - human-preference
  - classifier
  - aesthetics
  - ml-judges
sources:
  - type: youtube
    title: "Perceptual Evaluations: Evals for Aesthetics —\_Diego Rodriguez, Krea.ai"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=h5ItAJuB3Fc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Train a continuous classifier on labeled human preferences so the eval
    learns what 'good' means perceptually, instead of relying on hand-built
    metrics.
  standard: >-
    When quality is a matter of opinion — this blue vs. that teal, whether a
    piece reads as 'art' or as a broken render — no closed-form metric will
    capture it. Rodriguez's proposal is to invert the problem: show the model a
    handful of images you judge good (with all sorts of artifacts, not just
    JPEG), let it learn the boundary, and use that learned 'continuous
    classifier' as the eval. He frames this as the canonical strength of machine
    learning: 'you'll know it when you see it' is precisely the kind of fuzzy,
    preference-driven judgment ML handles better than rules.


    This is the perceptual analogue of the LLM-as-judge pattern — replace a
    brittle deterministic metric with a learned evaluator grounded in human
    ratings. The cost is that the eval is only as good as the preference data
    behind it, so it needs curated, representative human labels and periodic
    re-grounding as taste and use cases shift. But for aesthetics, where the
    target is human satisfaction rather than a measurable attribute, a
    preference-trained scorer is closer to the real objective than any
    signal-processing metric.
stance: >-
  Aesthetic and perceptual quality should be scored by a classifier trained on
  human preference judgments, because opinion-based 'know it when you see it'
  tasks are exactly where ML excels.
related:
  - INS-260329-FEA6
  - INS-260627-915A
  - INS-260627-9981
  - INS-260627-6FE0
  - INS-260322-D6D7
  - INS-260628-337C
  - INS-260625-0E60
---
When quality is a matter of opinion — this blue vs. that teal, whether a piece reads as 'art' or as a broken render — no closed-form metric will capture it. Rodriguez's proposal is to invert the problem: show the model a handful of images you judge good (with all sorts of artifacts, not just JPEG), let it learn the boundary, and use that learned 'continuous classifier' as the eval. He frames this as the canonical strength of machine learning: 'you'll know it when you see it' is precisely the kind of fuzzy, preference-driven judgment ML handles better than rules.

This is the perceptual analogue of the LLM-as-judge pattern — replace a brittle deterministic metric with a learned evaluator grounded in human ratings. The cost is that the eval is only as good as the preference data behind it, so it needs curated, representative human labels and periodic re-grounding as taste and use cases shift. But for aesthetics, where the target is human satisfaction rather than a measurable attribute, a preference-trained scorer is closer to the real objective than any signal-processing metric.

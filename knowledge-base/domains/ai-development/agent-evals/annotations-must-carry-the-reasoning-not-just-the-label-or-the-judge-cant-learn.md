---
id: INS-260627-4D26
domain: ai-development
topic: agent-evals
title: >-
  Annotations must carry the reasoning, not just the label, or the judge can't
  learn the policy
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-quality
  - annotation
  - llm-as-judge
  - calibration
  - data-curation
sources:
  - type: youtube
    title: "Judge the Judge: Building LLM Evaluators That Actually Work with GEPA —\_Mahmoud Mabrouk, Agenta AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=X4dEHRzBLmc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Each annotation should state why a trace passed or failed (e.g.
    'non-compliant: approved the cancellation without verifying it met the
    airline's cancellation rules'), because without that reasoning the optimizer
    would have to rediscover the policy from scratch — usually impossible.
  standard: >-
    The speaker stresses that data curation and annotation — though covered
    quickly — are the hardest part of the whole exercise, echoing the
    data-scientist truism that getting good data is harder than running the
    algorithm. The annotation's free-text reasoning is what encodes the
    otherwise-hidden policy. For a complex policy-adherence judge, a bare
    'compliant/non-compliant' label gives the optimizer nothing to learn from;
    the reasoning ('approved the cancellation before verifying the reservation
    met the cancellation rules') is what lets it reconstruct the rule.


    The analogy: hand a human only trajectories labeled correct/incorrect with
    no explanation, and they couldn't learn to assess policy either. So
    annotation quality, distribution, and the richness of the reasoning are
    paramount — when the underlying data is small, skewed, or itself
    AI-generated (as in this τ-Bench demo), even a good optimizer plateaus far
    short of human-level alignment (here ~74% accuracy vs a ~95% goal). Inspect
    and fix the data before blaming the algorithm.
stance: >-
  Human annotations for judge calibration must include the reasoning behind each
  verdict, not just the pass/fail label, because neither an optimizer nor a
  human can infer a complex policy from labels alone.
related:
  - INS-260605-FCDA
  - INS-260605-DCE5
  - INS-260627-6F3F
  - INS-260605-E18B
  - INS-260605-93B8
---
The speaker stresses that data curation and annotation — though covered quickly — are the hardest part of the whole exercise, echoing the data-scientist truism that getting good data is harder than running the algorithm. The annotation's free-text reasoning is what encodes the otherwise-hidden policy. For a complex policy-adherence judge, a bare 'compliant/non-compliant' label gives the optimizer nothing to learn from; the reasoning ('approved the cancellation before verifying the reservation met the cancellation rules') is what lets it reconstruct the rule.

The analogy: hand a human only trajectories labeled correct/incorrect with no explanation, and they couldn't learn to assess policy either. So annotation quality, distribution, and the richness of the reasoning are paramount — when the underlying data is small, skewed, or itself AI-generated (as in this τ-Bench demo), even a good optimizer plateaus far short of human-level alignment (here ~74% accuracy vs a ~95% goal). Inspect and fix the data before blaming the algorithm.

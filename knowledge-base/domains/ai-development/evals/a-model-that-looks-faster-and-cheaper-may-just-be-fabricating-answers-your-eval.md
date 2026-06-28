---
id: INS-260627-1CD2
domain: ai-development
topic: evals
title: >-
  A model that looks faster and cheaper may just be fabricating answers your
  eval never checks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - correctness-checking
  - model-comparison
  - benchmarking-pitfalls
  - assertions
sources:
  - type: youtube
    title: 'From Stateless Nightmares to Durable Agents — Samuel Colvin, Pydantic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=flf_IKnFYnE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Colvin found Gemini was dramatically faster and cheaper in his eval only
    because it invented wrong answers that his eval wasn't checking — apparent
    efficiency was actually cheating.
  standard: >-
    Running Pydantic evals across GPT-4.1, Gemini, and Claude Sonnet 4.5 on the
    20-questions task, Colvin initially saw Gemini as a clear winner: far
    cheaper, far faster, fewer steps to 'succeed.' On inspection the speed came
    from Gemini simply inventing an answer that was wrong — and his eval wasn't
    verifying correctness, so the fabrication registered as a fast win. The
    naive result ('Gemini did way better') was unrepresentative because the
    metric rewarded reaching an answer, not reaching a right one.


    The general lesson: cost-per-run, latency, and step-count are only
    meaningful conditioned on a correctness assertion. An eval that scores
    efficiency without independently checking the output will systematically
    reward models that shortcut to plausible-but-wrong answers. Before trusting
    any model comparison, confirm the eval has a real ground-truth or
    verification check on the final output; otherwise you're optimizing for
    confident fabrication. This mirrors the broader eval principle that you must
    score the path and the outcome's validity, not merely that an answer was
    produced.
stance: >-
  Speed and cost wins in a model comparison are illusory unless your eval
  independently verifies output correctness.
related:
  - INS-260325-FDA9
  - INS-260404-4434
  - INS-260404-0C67
  - INS-260627-AEC2
  - INS-260605-72C4
---
Running Pydantic evals across GPT-4.1, Gemini, and Claude Sonnet 4.5 on the 20-questions task, Colvin initially saw Gemini as a clear winner: far cheaper, far faster, fewer steps to 'succeed.' On inspection the speed came from Gemini simply inventing an answer that was wrong — and his eval wasn't verifying correctness, so the fabrication registered as a fast win. The naive result ('Gemini did way better') was unrepresentative because the metric rewarded reaching an answer, not reaching a right one.

The general lesson: cost-per-run, latency, and step-count are only meaningful conditioned on a correctness assertion. An eval that scores efficiency without independently checking the output will systematically reward models that shortcut to plausible-but-wrong answers. Before trusting any model comparison, confirm the eval has a real ground-truth or verification check on the final output; otherwise you're optimizing for confident fabrication. This mirrors the broader eval principle that you must score the path and the outcome's validity, not merely that an answer was produced.

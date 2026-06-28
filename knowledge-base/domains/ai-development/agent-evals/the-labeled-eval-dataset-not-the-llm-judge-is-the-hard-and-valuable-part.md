---
id: INS-260626-60C2
domain: ai-development
topic: agent-evals
title: 'The labeled eval dataset, not the LLM judge, is the hard and valuable part'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-judge
  - dataset
  - synthetic-data
  - f1-score
sources:
  - type: youtube
    title: >-
      Full Workshop: Build Your Own Deep Research Agents - Louis-François
      Bouchard, Paul Iusztin, Samridhi
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mYSRn6PC1mc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Invest in a human-labeled dataset (pass/fail plus a short critique),
    generate eval outputs from your real system rather than synthesizing them,
    and calibrate the judge to a domain expert using train/dev/test splits and
    F1.
  standard: >-
    Paul's strongest claim about evaluation is that everything starts from the
    eval dataset — it's a data problem, and you are effectively building a small
    ML model. He built one for the LinkedIn writer by taking 20 real posts
    (noting you'd realistically want at least 100), reverse-engineering the
    guideline and research that would have produced each, generating new outputs
    from the real workflow, then labeling each output with a binary pass/fail
    plus a two-to-three-sentence critique (stopping at the first error). Given
    that dataset, creating the LLM judge is easy: the system prompt can be
    extremely simple if the right few-shot examples (input, output, label,
    critique) are in place.


    Two non-obvious rules fall out. First, when generating synthetic eval data,
    never ask the LLM to produce the output — only ask it to help generate the
    input — because the output must come from your real system, since that is
    what you are actually testing. Second, you must validate the evaluator
    itself, a step people skip when building LLM judges and which is arguably
    the most important. The judge is just a binary classifier, so split into
    train/dev/test, calibrate against the dev split by maximizing F1, and only
    run on the held-out test split as final validation.


    The overfitting signal is relational, not absolute: a near-perfect F1 on dev
    with a much lower F1 on test means the judge overfit. The absolute F1 value
    is heavily correlated with your specific data, so what matters is that dev
    and test scores sit in the same bracket. The goal throughout is aligning the
    LLM judge with a domain expert's judgments, which is what makes the whole
    eval layer trustworthy enough to gate changes.
stance: >-
  Building a reliable LLM-as-judge is trivial once you have a labeled dataset,
  so the real work is curating that dataset — and you must validate the judge
  against held-out splits exactly like any binary classifier.
related:
  - INS-260322-D6D7
  - INS-260327-E07C
  - INS-260329-5F96
  - INS-260410-83EC
  - INS-260605-E2D9
  - INS-260605-EC51
  - INS-260605-EF23
  - INS-260605-B44B
  - INS-260625-C08B
  - INS-260627-6F3F
---
Paul's strongest claim about evaluation is that everything starts from the eval dataset — it's a data problem, and you are effectively building a small ML model. He built one for the LinkedIn writer by taking 20 real posts (noting you'd realistically want at least 100), reverse-engineering the guideline and research that would have produced each, generating new outputs from the real workflow, then labeling each output with a binary pass/fail plus a two-to-three-sentence critique (stopping at the first error). Given that dataset, creating the LLM judge is easy: the system prompt can be extremely simple if the right few-shot examples (input, output, label, critique) are in place.

Two non-obvious rules fall out. First, when generating synthetic eval data, never ask the LLM to produce the output — only ask it to help generate the input — because the output must come from your real system, since that is what you are actually testing. Second, you must validate the evaluator itself, a step people skip when building LLM judges and which is arguably the most important. The judge is just a binary classifier, so split into train/dev/test, calibrate against the dev split by maximizing F1, and only run on the held-out test split as final validation.

The overfitting signal is relational, not absolute: a near-perfect F1 on dev with a much lower F1 on test means the judge overfit. The absolute F1 value is heavily correlated with your specific data, so what matters is that dev and test scores sit in the same bracket. The goal throughout is aligning the LLM judge with a domain expert's judgments, which is what makes the whole eval layer trustworthy enough to gate changes.

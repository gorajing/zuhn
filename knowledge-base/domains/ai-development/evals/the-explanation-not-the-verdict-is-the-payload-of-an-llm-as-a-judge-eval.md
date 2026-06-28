---
id: INS-260627-6F3F
domain: ai-development
topic: evals
title: 'The explanation, not the verdict, is the payload of an LLM-as-a-judge eval'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - evals
  - error-analysis
  - feedback-loops
sources:
  - type: youtube
    title: >-
      The Unreasonable Effectiveness of Prompt Learning – Aparna Dhinakaran,
      Arize
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pP_dSNz_EdQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The most important output of the judge eval isn't pass/fail — it's the 'why
    did it mess up?' explanation that becomes the training signal for the next
    prompt.
  standard: >-
    In the prompt-learning pipeline, the LLM-as-a-judge eval receives the
    problem statement, the agent's solution, the unit-test result, and the
    reference solution, and is asked not just to label pass/fail but to explain
    the failure: parsing errors, unhandled cases, library-specific mistakes, and
    other error categories. The presenter calls this 'the key part' — the
    explanation is what gets mined and fed into the meta-prompt that rewrites
    the rules.


    The broader principle is that a binary eval score tells you how well you're
    doing but nothing about what to change. The diagnostic explanation is what
    closes the loop into actual improvement. This argues against treating evals
    purely as scoreboards: design judge prompts to emit structured, actionable
    reasons for failure, grouped into recurring categories, because that text —
    not the aggregate accuracy number — is what drives the next iteration. It
    mirrors the RL-vs-feedback distinction: a verdict is a scalar reward; an
    explanation is the English feedback that makes learning efficient.
stance: >-
  An LLM-as-a-judge eval is valuable primarily for the natural-language
  explanation of why an output failed, not for the pass/fail label it emits.
related:
  - INS-260605-C009
  - INS-260605-DCE5
  - INS-260605-EC51
  - INS-260605-B44B
  - INS-260625-722D
  - INS-260626-60C2
  - INS-260627-4D26
  - INS-260627-AD6B
  - INS-260625-8A55
  - INS-260627-9981
---
In the prompt-learning pipeline, the LLM-as-a-judge eval receives the problem statement, the agent's solution, the unit-test result, and the reference solution, and is asked not just to label pass/fail but to explain the failure: parsing errors, unhandled cases, library-specific mistakes, and other error categories. The presenter calls this 'the key part' — the explanation is what gets mined and fed into the meta-prompt that rewrites the rules.

The broader principle is that a binary eval score tells you how well you're doing but nothing about what to change. The diagnostic explanation is what closes the loop into actual improvement. This argues against treating evals purely as scoreboards: design judge prompts to emit structured, actionable reasons for failure, grouped into recurring categories, because that text — not the aggregate accuracy number — is what drives the next iteration. It mirrors the RL-vs-feedback distinction: a verdict is a scalar reward; an explanation is the English feedback that makes learning efficient.

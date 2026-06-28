---
id: INS-260628-DFA3
domain: ai-development
topic: evals
title: QA the judge before trusting it as your gold-standard metric
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - evaluation
  - calibration
  - reward-modeling
  - bias
sources:
  - type: youtube
    title: 'Fuzzing in the GenAI Era — Leonard Tang, Haize Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OMGPvW8TBHc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before you iterate your app against a judge, judge the judge — raw
    LLM-as-judge calls hallucinate, are uncalibrated, and flip on input order.
  standard: >-
    Naive LLM-as-a-judge — prompt a model to rate an output 1–10 against a
    rubric — inherits every weakness of LLMs and adds new ones. It hallucinates;
    it is uncalibrated (a '1' or '5' means something different to the model than
    to a human expert); and it is fickle, with results that swing when you
    reorder the two responses being compared or tweak the rubric. A
    well-articulated criterion does not automatically operationalize into a
    stable model behavior.


    The deeper challenge this exposes is reward modeling: translating a
    non-technical domain expert's taste and sensitivity into a quantitative
    metric — a problem the field has wrestled with for years. The actionable
    discipline is to treat the judge as a system under test in its own right:
    measure its agreement with human ground truth and its sensitivity to
    perturbation before you use it to grade anything else. Only a validated
    judge earns the right to be the objective your application optimizes
    against.
stance: >-
  An off-the-shelf LLM-as-a-judge call is too biased and uncalibrated to serve
  as a reliable evaluation metric until you have explicitly validated the judge
  itself.
related:
  - INS-260605-C009
  - INS-260627-21FF
  - INS-260627-9981
  - INS-260605-EC51
  - INS-260628-337C
  - INS-260627-D28C
---
Naive LLM-as-a-judge — prompt a model to rate an output 1–10 against a rubric — inherits every weakness of LLMs and adds new ones. It hallucinates; it is uncalibrated (a '1' or '5' means something different to the model than to a human expert); and it is fickle, with results that swing when you reorder the two responses being compared or tweak the rubric. A well-articulated criterion does not automatically operationalize into a stable model behavior.

The deeper challenge this exposes is reward modeling: translating a non-technical domain expert's taste and sensitivity into a quantitative metric — a problem the field has wrestled with for years. The actionable discipline is to treat the judge as a system under test in its own right: measure its agreement with human ground truth and its sensitivity to perturbation before you use it to grade anything else. Only a validated judge earns the right to be the objective your application optimizes against.

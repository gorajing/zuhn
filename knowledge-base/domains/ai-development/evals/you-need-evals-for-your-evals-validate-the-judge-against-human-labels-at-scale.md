---
id: INS-260627-9981
domain: ai-development
topic: evals
title: >-
  You need evals for your evals: validate the judge against human labels at
  scale
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - human-in-the-loop
  - judge-validation
  - annotation
sources:
  - type: youtube
    title: 'Shipping AI That Works: An Evaluation Framework for PMs – Aman Khan, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2HNSG990Ew8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat the judge as a hallucinating component too — label a data set by hand,
    then run a code/match eval that measures whether the judge's labels agree
    with the human labels, and improve the judge where they diverge.
  standard: >-
    Khan's 'light-bulb' takeaway is that you cannot just trust an LLM-as-a-judge
    because the judge itself hallucinates. In the demo, the judge graded a
    robotic itinerary as 'friendly' — disagreeing with his own human label
    almost entirely. The discipline is to label a data set with
    subject-matter-expert annotations in the same platform, then run a second,
    often code-based, eval (a simple match/regex check) that compares judge
    label vs human label and reports agreement rate.


    Low agreement is not a dead end — it is leverage. It lets a PM go back to
    the team with quantitative evidence that 'our eval system isn't working the
    way we expect' and needs improvement (e.g. adding few-shot examples of
    friendly vs robotic text, tightening the definition). The mental model is
    layered checks and balances: humans check LLMs, LLMs check outputs, humans
    check the judge. Agreement-with-humans is the metric that tells you whether
    the automated judge can be trusted to scale beyond hand review.
stance: >-
  An LLM-as-a-judge cannot be trusted until its labels are measured for
  agreement against human annotations across many examples.
related:
  - INS-260605-C009
  - INS-260605-0DB3
  - INS-260605-D3C7
  - INS-260605-BEA5
  - INS-260605-EC51
  - INS-260626-60C2
  - INS-260627-21FF
  - INS-260627-9E58
  - INS-260627-D28C
---
Khan's 'light-bulb' takeaway is that you cannot just trust an LLM-as-a-judge because the judge itself hallucinates. In the demo, the judge graded a robotic itinerary as 'friendly' — disagreeing with his own human label almost entirely. The discipline is to label a data set with subject-matter-expert annotations in the same platform, then run a second, often code-based, eval (a simple match/regex check) that compares judge label vs human label and reports agreement rate.

Low agreement is not a dead end — it is leverage. It lets a PM go back to the team with quantitative evidence that 'our eval system isn't working the way we expect' and needs improvement (e.g. adding few-shot examples of friendly vs robotic text, tightening the definition). The mental model is layered checks and balances: humans check LLMs, LLMs check outputs, humans check the judge. Agreement-with-humans is the metric that tells you whether the automated judge can be trusted to scale beyond hand review.

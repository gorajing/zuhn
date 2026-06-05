---
id: INS-260605-93B8
domain: ai-development
topic: system-design
title: >-
  Non-technical domain experts have the closest proximity to the problem, so
  give them prompt control and annotation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - domain-experts
  - human-annotation
  - prompt-engineering
  - evals
  - agents
sources:
  - type: youtube
    title: 'Does GenAI "belong" to data scientists? — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NKwIX3CiRgU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The person with the most proximity to the problem — often non-technical —
    should seed the prompts and label agent traces, including the crucial 'why'
    a trace is good or bad.
  standard: >-
    Because changing an agent now means changing its inputs, the people who
    understand the problem best can directly shape behavior through prompt and
    context engineering — even without an engineering background. Equally
    important is human annotation: a domain expert reading an agent trace can
    judge whether the agent performed well and, most valuably, articulate why.
    That 'why' is the grounded signal that feeds back into improving prompts and
    evals. Building a relevant agent therefore requires pulling domain experts
    into the loop rather than treating agent quality as purely an engineering
    concern.
stance: >-
  Subject-matter experts should directly control prompts and drive human
  annotation of agent traces because they best understand what the agent is
  supposed to do and why.
related:
  - INS-260327-9D50
  - INS-260403-BE4D
  - INS-260605-310E
  - INS-260605-610E
  - INS-260605-726C
  - INS-260605-7843
  - INS-260605-80D0
  - INS-260605-8B25
---
Because changing an agent now means changing its inputs, the people who understand the problem best can directly shape behavior through prompt and context engineering — even without an engineering background. Equally important is human annotation: a domain expert reading an agent trace can judge whether the agent performed well and, most valuably, articulate why. That 'why' is the grounded signal that feeds back into improving prompts and evals. Building a relevant agent therefore requires pulling domain experts into the loop rather than treating agent quality as purely an engineering concern.

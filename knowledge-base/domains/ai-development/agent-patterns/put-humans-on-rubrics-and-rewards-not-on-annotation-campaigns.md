---
id: INS-260605-1A91
domain: ai-development
topic: agent-patterns
title: 'Put humans on rubrics and rewards, not on annotation campaigns'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - rlhf
  - llm-as-judge
  - reward-models
  - annotation
  - rubrics
sources:
  - type: youtube
    title: >-
      Lessons from Trillion Token Deployments at Fortune 500s — Alessandro
      Cappelli, Adaptive ML
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=X6NShR2ccOg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep humans in the loop by having them define reward rubrics and judge
    scenarios once, not by running iterative annotation campaigns that are
    expensive and that nobody actually wants to do.
  standard: >-
    RLHF made 'human in the loop' sound appealing, but behind it often hides
    expensive annotation campaigns that are either costly or useless because
    people don't want to do them. The better design keeps humans in the loop
    without that cost: humans define the reward signal — writing the rubrics,
    the system prompts for LLM-as-judge, and the scenarios — and confirm the
    judge is aligned with what they see. This takes minutes to hours, done once,
    not weeks done iteratively dozens of times.


    Reward signals come in tiers: systematic rewards (does the code run, is the
    syntax correct), direct business KPIs (CCS maximizes containment rate — the
    fraction of support calls handled end-to-end by the model), and open-ended
    quality (was the tone right, were business guidelines followed) handled by
    LLM-as-judge. As production volume grows from ~10-20 feedbacks to thousands,
    you graduate from a large prompted judge model to training a dedicated
    reward model that scales the human signal. Design the human's job to be
    specifying success criteria, then let the reward machinery scale it.
stance: >-
  The right human-in-the-loop role is defining reward rubrics, judge prompts,
  and scenarios in minutes-to-hours — not running expensive, repeated annotation
  campaigns that nobody wants to do.
related:
  - INS-260409-C158
  - PRI-260411-ACEF
  - INS-260330-0102
  - INS-260605-BEA5
  - INS-260625-25BF
---
RLHF made 'human in the loop' sound appealing, but behind it often hides expensive annotation campaigns that are either costly or useless because people don't want to do them. The better design keeps humans in the loop without that cost: humans define the reward signal — writing the rubrics, the system prompts for LLM-as-judge, and the scenarios — and confirm the judge is aligned with what they see. This takes minutes to hours, done once, not weeks done iteratively dozens of times.

Reward signals come in tiers: systematic rewards (does the code run, is the syntax correct), direct business KPIs (CCS maximizes containment rate — the fraction of support calls handled end-to-end by the model), and open-ended quality (was the tone right, were business guidelines followed) handled by LLM-as-judge. As production volume grows from ~10-20 feedbacks to thousands, you graduate from a large prompted judge model to training a dedicated reward model that scales the human signal. Design the human's job to be specifying success criteria, then let the reward machinery scale it.

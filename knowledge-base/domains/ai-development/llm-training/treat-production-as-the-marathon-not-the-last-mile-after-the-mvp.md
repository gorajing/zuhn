---
id: INS-260605-311E
domain: ai-development
topic: llm-training
title: 'Treat production as the marathon, not the last mile after the MVP'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - production
  - mvp
  - genai-pilots
  - deployment
  - feedback-loops
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
    95% of GenAI pilots die because teams think the demo is the hard part and
    production is a short last mile, when production is the actual marathon.
  standard: >-
    The 'myth of the last mile' is the belief that building an impressive MVP
    demo for stakeholders is the hard part, and getting it into production is
    just a final short step. In reality the curve is inverted: reaching an MVP
    is the first mile, and the marathon is everything after — continuous
    retraining, refinement, and improvement driven by real client feedback,
    business metrics, and environmental reward.


    The trap is that most MVPs are built on proprietary models (where your only
    lever for defects is editing the system prompt) or on instruction
    fine-tuning (where your only lever is rebuilding the dataset). Neither
    integrates discovered defects in a systematic, mathematical way, so you
    cannot reliably improve without introducing new regressions. When evaluating
    a GenAI initiative, judge it by whether the underlying technique lets you
    systematically close the loop from production feedback — not by how good the
    demo looks.
stance: >-
  Getting a GenAI demo to an MVP is the easy first mile; the hard work is the
  continuous MVP-to-production marathon, and inverting this belief is why most
  pilots fail.
related:
  - INS-260327-0700
  - PRI-260328-2014
  - INS-260323-348F
  - INS-260412-664B
  - INS-260409-8DDA
---
The 'myth of the last mile' is the belief that building an impressive MVP demo for stakeholders is the hard part, and getting it into production is just a final short step. In reality the curve is inverted: reaching an MVP is the first mile, and the marathon is everything after — continuous retraining, refinement, and improvement driven by real client feedback, business metrics, and environmental reward.

The trap is that most MVPs are built on proprietary models (where your only lever for defects is editing the system prompt) or on instruction fine-tuning (where your only lever is rebuilding the dataset). Neither integrates discovered defects in a systematic, mathematical way, so you cannot reliably improve without introducing new regressions. When evaluating a GenAI initiative, judge it by whether the underlying technique lets you systematically close the loop from production feedback — not by how good the demo looks.

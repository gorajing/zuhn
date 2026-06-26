---
id: INS-260626-B0D5
domain: ai-development
topic: agent-evals
title: Intermediate task gains can disappear at the outcome layer
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - proxy-metrics
  - outcomes
  - clinical-ai
  - measurement
sources:
  - type: blog
    title: >-
      AI support tool improved clinician decisions in real-world primary care
      trial
    url: 'https://www.eurekalert.org/news-releases/1133583'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: "nomic-embed-text"
resolutions:
  one_line: >-
    AI Consult improved documentation and treatment planning but did not
    significantly reduce 14-day treatment failure, showing why proxy metrics
    need outcome checks.
  standard: >-
    The trial's most important negative result is the gap between process
    quality and patient outcome. Independent blinded clinicians judged
    documentation and treatment planning better in the AI-supported arm, yet
    treatment failure was 2.2 percent with AI support versus 2.0 percent under
    standard care, with no statistically significant outcome difference.


    For agent and system-building work, this is a direct eval-design lesson.
    Better plans, notes, tool calls, or recommendations may be useful, but they
    are not equivalent to the final objective. Robust eval harnesses should
    maintain both layers: process metrics that diagnose where the system acts,
    and outcome metrics that test whether those actions matter.
stance: >-
  Agent evaluations should distinguish intermediate-quality improvements from
  final-outcome improvements because a system can improve process metrics
  without moving the user's real objective.
---
The trial's most important negative result is the gap between process quality and patient outcome. Independent blinded clinicians judged documentation and treatment planning better in the AI-supported arm, yet treatment failure was 2.2 percent with AI support versus 2.0 percent under standard care, with no statistically significant outcome difference.

For agent and system-building work, this is a direct eval-design lesson. Better plans, notes, tool calls, or recommendations may be useful, but they are not equivalent to the final objective. Robust eval harnesses should maintain both layers: process metrics that diagnose where the system acts, and outcome metrics that test whether those actions matter.

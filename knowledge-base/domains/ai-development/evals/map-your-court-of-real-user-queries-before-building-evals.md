---
id: INS-260628-C95B
domain: ai-development
topic: evals
title: Map your 'court' of real user queries before building evals
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - user-research
  - domain-modeling
  - data-collection
  - edge-cases
sources:
  - type: youtube
    title: 'Evals Are Not Unit Tests — Ido Pesok, Vercel v0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L8OoYeDI_ls'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Good evals require mapping the full domain of real user queries — including
    hard edge cases and boundaries — and avoiding wasted effort on out-of-bounds
    inputs.
  standard: >-
    Pesok visualizes the query space as a basketball court: each data point is a
    real query, distance from the basket encodes difficulty, and the court
    boundaries mark what is genuinely in your app's domain. He calls
    understanding this court 'the most important step.' Two traps follow
    directly. The out-of-bounds trap is building evals for inputs no user cares
    about ('how many syllables in carrot?') — it feels productive but tests
    nothing real. The concentration trap is clustering all your test points near
    the easy basket, which leaves the hard corners untested even though that's
    where the app silently fails.


    Because you cannot guess the court, data collection has no shortcut: harvest
    thumbs-up/down signal, read ~100 random log samples weekly via
    observability, and mine community forums and social mentions. Once the court
    is well-mapped you can see exactly which region is red (failing) and
    prioritize flipping those tiles to blue — turning eval data into a concrete
    weekly work plan rather than a vague quality goal.
stance: >-
  The highest-leverage step in eval design is understanding the true
  distribution of queries your users actually send, not refining the scoring
  function.
related:
  - INS-260410-F5EC
  - INS-260605-E2D9
  - INS-260625-C69F
  - INS-260626-EDB3
  - INS-260626-32B6
  - INS-260627-8213
  - INS-260627-115C
  - INS-260627-CD65
  - INS-260628-0AC7
  - INS-260628-8FE6
---
Pesok visualizes the query space as a basketball court: each data point is a real query, distance from the basket encodes difficulty, and the court boundaries mark what is genuinely in your app's domain. He calls understanding this court 'the most important step.' Two traps follow directly. The out-of-bounds trap is building evals for inputs no user cares about ('how many syllables in carrot?') — it feels productive but tests nothing real. The concentration trap is clustering all your test points near the easy basket, which leaves the hard corners untested even though that's where the app silently fails.

Because you cannot guess the court, data collection has no shortcut: harvest thumbs-up/down signal, read ~100 random log samples weekly via observability, and mine community forums and social mentions. Once the court is well-mapped you can see exactly which region is red (failing) and prioritize flipping those tiles to blue — turning eval data into a concrete weekly work plan rather than a vague quality goal.

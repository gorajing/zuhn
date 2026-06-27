---
id: INS-260625-79ED
domain: ai-development
topic: research-methodology
title: >-
  Evals are broken, but pairing a score with a hands-on vibe check beats either
  extreme
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - benchmarks
  - epistemics
  - ai-agents
  - model-evaluation
sources:
  - type: youtube
    title: 'Evals Are Broken, Use Them Anyway — Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=QuuIywMG4s8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reject both the objective-metrics camp and the pure-taste camp—pair every
    benchmark score with a real-world vibe check.
  standard: >-
    Two camps get evals wrong. The objective-metrics camp reads a leaderboard
    and concludes two models with similar numbers are equivalent, which fuels
    'benchmark maxing'—labs optimizing to top a chart while the model fails on
    real work. The taste camp swings the other way, treating model choice as
    pure vibes and anthropomorphizing ('I like talking to it'). The truth is in
    the middle: published eval numbers are approximations you should largely not
    believe, and standardized benchmarks go stale fast (OpenAI itself said
    SWE-bench Verified no longer measures frontier coding capability). The
    disciplined practice is to use evals anyway but hold a score and a hands-on
    vibe check to the same standard—a good number without the product actually
    feeling good to use is incomplete, and so is the reverse. This generalizes
    beyond AI: any single metric that becomes a target gets gamed, and the
    antidote is triangulating the number against lived experience.
stance: >-
  Evals should be treated as approximations that must be cross-checked against
  direct hands-on use, not as ground truth and not as noise to dismiss.
related:
  - INS-260627-8D79
  - INS-260329-2EB1
  - INS-260625-1187
  - INS-260403-5F69
  - INS-260627-34A1
---
Two camps get evals wrong. The objective-metrics camp reads a leaderboard and concludes two models with similar numbers are equivalent, which fuels 'benchmark maxing'—labs optimizing to top a chart while the model fails on real work. The taste camp swings the other way, treating model choice as pure vibes and anthropomorphizing ('I like talking to it'). The truth is in the middle: published eval numbers are approximations you should largely not believe, and standardized benchmarks go stale fast (OpenAI itself said SWE-bench Verified no longer measures frontier coding capability). The disciplined practice is to use evals anyway but hold a score and a hands-on vibe check to the same standard—a good number without the product actually feeling good to use is incomplete, and so is the reverse. This generalizes beyond AI: any single metric that becomes a target gets gamed, and the antidote is triangulating the number against lived experience.

---
id: INS-260403-C501
domain: ai-development
topic: ai-capabilities
title: >-
  Verifiable tasks fall first because their feedback signal enables scaled
  training
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - scaling-laws
  - reinforcement-learning
  - verification
  - agi-timelines
sources:
  - type: blog
    title: 'Dario Amodei Says AGI Is 1-3 Years Away: Full Breakdown'
    author: Ruben Dominguez
    url: 'https://www.thevccorner.com/p/dario-amodei-agi-1-3-years-full-breakdown'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Verifiable tasks provide the training signal that lets AI master them first,
    creating a predictable sequence of capability unlocks.
  standard: >-
    Dario Amodei draws a sharp distinction between verifiable tasks (code
    compiles, proofs check out, math resolves) and non-verifiable tasks (novel
    quality, strategic correctness). The verification signal is what makes
    scaled RL training possible — you can generate millions of attempts and
    automatically score them. This is why coding and math are falling first, not
    because they're 'easier' but because their feedback loops are tighter.


    This has practical implications: any domain where you can construct an
    automated evaluator will see AI competence arrive sooner. Domains requiring
    human judgment as the sole evaluator will lag. For builders, this means the
    next wave of automation targets anything with programmatic success criteria
    — testing, compliance checking, data validation — before it touches
    taste-dependent work like brand strategy or editorial voice.
stance: >-
  AI will achieve human-level performance on verifiable tasks (code, math,
  proofs) years before non-verifiable tasks (strategy, creative judgment)
  because verification signals enable massive-scale reinforcement learning.
related:
  - INS-260320-F8FD
  - INS-260329-58E7
  - INS-260404-9AEC
  - PRI-260403-EA13
  - INS-260404-CE26
---
Dario Amodei draws a sharp distinction between verifiable tasks (code compiles, proofs check out, math resolves) and non-verifiable tasks (novel quality, strategic correctness). The verification signal is what makes scaled RL training possible — you can generate millions of attempts and automatically score them. This is why coding and math are falling first, not because they're 'easier' but because their feedback loops are tighter.

This has practical implications: any domain where you can construct an automated evaluator will see AI competence arrive sooner. Domains requiring human judgment as the sole evaluator will lag. For builders, this means the next wave of automation targets anything with programmatic success criteria — testing, compliance checking, data validation — before it touches taste-dependent work like brand strategy or editorial voice.

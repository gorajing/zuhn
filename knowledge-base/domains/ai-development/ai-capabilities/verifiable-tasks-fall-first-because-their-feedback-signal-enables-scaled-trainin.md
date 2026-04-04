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
    author:
      - '@type': Person
        name: Ruben Dominguez
        url: 'https://substack.com/@rubendominguez'
        description: 'Investing, building, writing '
        identifier: 'user:95342670'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
    url: 'https://www.thevccorner.com/p/dario-amodei-agi-1-3-years-full-breakdown'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
Dario Amodei draws a sharp distinction between verifiable tasks (code compiles, proofs check out, math resolves) and non-verifiable tasks (novel quality, strategic correctness). The verification signal is what makes scaled RL training possible — you can generate millions of attempts and automatically score them. This is why coding and math are falling first, not because they're 'easier' but because their feedback loops are tighter.

This has practical implications: any domain where you can construct an automated evaluator will see AI competence arrive sooner. Domains requiring human judgment as the sole evaluator will lag. For builders, this means the next wave of automation targets anything with programmatic success criteria — testing, compliance checking, data validation — before it touches taste-dependent work like brand strategy or editorial voice.

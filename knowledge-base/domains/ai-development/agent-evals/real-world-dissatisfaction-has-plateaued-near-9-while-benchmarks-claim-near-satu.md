---
id: INS-260626-518C
domain: ai-development
topic: agent-evals
title: >-
  Real-world dissatisfaction has plateaued near 9% while benchmarks claim
  near-saturation
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - benchmark-saturation
  - human-preference
  - dissatisfaction-rate
  - lmarena
  - real-world-performance
sources:
  - type: youtube
    title: 'What Do Models Still Suck At? - Peter Gostev, Arena.ai, BullshitBench'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=R7A8rX-09Zw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Arena's 'both responses are bad' rate among top-25 models fell from ~17%
    pre-reasoning to ~12% after o1 to ~9% now — real improvement, but a stubborn
    plateau far from zero that the soaring benchmark charts don't reflect.
  standard: >-
    Arena lets users mark that BOTH model responses are bad, yielding a
    'dissatisfaction rate.' Restricting to battles between the top 25 models (to
    avoid weak-model noise), the rate dropped from ~17% in the pre-reasoning era
    to ~12% after o1-class models to roughly 9% today. The progress is genuine,
    but the plateau is the point: 9% of the time, two strong models both fail to
    satisfy a user — a very different story from benchmark lines approaching
    saturation.


    This is a measurement-validity argument. Any condensed benchmark captures a
    tiny, well-specified slice of what users actually care about; open
    human-preference data over real prompts captures the fuzzy whole, including
    the parts that resist clean measurement. The gap between 'every benchmark
    line goes up' and 'top models still disappoint ~1 in 11 times' is the gap
    between narrow task performance and real work.


    For anyone tracking AI progress, dissatisfaction-style metrics on open
    prompts are a useful counterweight to saturating benchmarks — they don't
    exhaust (there's always a better response possible) and they surface
    plateaus the headline charts hide. (Marked time-sensitive: the specific 9%
    figure is a 2026 snapshot.)
stance: >-
  Even among the top 25 models, human dissatisfaction with both responses has
  plateaued around 9%, contradicting the benchmark narrative of near-solved
  performance.
related:
  - INS-260325-DA83
  - INS-260403-225B
  - INS-260409-E776
  - INS-260410-3E37
  - INS-260413-25EC
  - INS-260605-A0BC
  - INS-260625-1022
  - INS-260626-9B36
  - PRI-260323-8E89
  - INS-260322-5790
---
Arena lets users mark that BOTH model responses are bad, yielding a 'dissatisfaction rate.' Restricting to battles between the top 25 models (to avoid weak-model noise), the rate dropped from ~17% in the pre-reasoning era to ~12% after o1-class models to roughly 9% today. The progress is genuine, but the plateau is the point: 9% of the time, two strong models both fail to satisfy a user — a very different story from benchmark lines approaching saturation.

This is a measurement-validity argument. Any condensed benchmark captures a tiny, well-specified slice of what users actually care about; open human-preference data over real prompts captures the fuzzy whole, including the parts that resist clean measurement. The gap between 'every benchmark line goes up' and 'top models still disappoint ~1 in 11 times' is the gap between narrow task performance and real work.

For anyone tracking AI progress, dissatisfaction-style metrics on open prompts are a useful counterweight to saturating benchmarks — they don't exhaust (there's always a better response possible) and they surface plateaus the headline charts hide. (Marked time-sensitive: the specific 9% figure is a 2026 snapshot.)

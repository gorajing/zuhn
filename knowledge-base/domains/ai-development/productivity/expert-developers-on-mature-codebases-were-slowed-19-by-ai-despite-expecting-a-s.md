---
id: INS-260627-B6E4
domain: ai-development
topic: productivity
title: >-
  Expert developers on mature codebases were slowed 19% by AI despite expecting
  a speedup
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - rct
  - developer-productivity
  - field-experiment
  - ai-coding
  - measurement
sources:
  - type: youtube
    title: 'Why Agent Hype can fall short of reality – Joel Becker, METR'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RhfqQKe22ZA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    METR's RCT found AI-allowed conditions made expert developers 19% slower
    even though they expected to be ~20-25% faster.
  standard: >-
    METR ran a randomized controlled trial with 16 highly experienced developers
    (on average the third-ranked contributor to million-line, decade-old
    open-source repos like scikit-learn and HuggingFace transformers), randomly
    assigning their real GitHub issues to 'AI allowed' (Cursor Pro, Claude
    3.6/3.7) or 'AI disallowed' (software development as in 2019). Outside
    experts predicted a ~40% time savings; the developers predicted ~24%
    beforehand and believed afterward they had been sped up ~20%. The measured
    result was the opposite: tasks took 19% MORE time when AI was allowed.


    The finding is bounded—it concerns elite developers on large, complex,
    long-lived repositories where they already hold deep context, and the
    experiment was concentrated in March 2025 when frontier models were weaker.
    Becker explicitly cautions it does not generalize to all developers or
    tasks, and notes his own work on smaller repos likely was sped up. The
    deeper lesson is that demonstrated AI capability in a controlled benchmark
    is not the same as deployed productivity, and that even direct practitioners
    cannot reliably self-assess the effect.
stance: >-
  Giving experienced developers AI coding tools can reduce their productivity
  even when they, forecasters, and experts all confidently predict a large
  speedup.
related:
  - INS-260330-ABB1
  - INS-260410-28E0
  - INS-260605-9925
  - INS-260625-4078
  - INS-260625-0CAB
  - INS-260626-A322
  - INS-260626-3F6D
  - INS-260626-BDAB
  - INS-260626-01AD
  - INS-260627-007C
---
METR ran a randomized controlled trial with 16 highly experienced developers (on average the third-ranked contributor to million-line, decade-old open-source repos like scikit-learn and HuggingFace transformers), randomly assigning their real GitHub issues to 'AI allowed' (Cursor Pro, Claude 3.6/3.7) or 'AI disallowed' (software development as in 2019). Outside experts predicted a ~40% time savings; the developers predicted ~24% beforehand and believed afterward they had been sped up ~20%. The measured result was the opposite: tasks took 19% MORE time when AI was allowed.

The finding is bounded—it concerns elite developers on large, complex, long-lived repositories where they already hold deep context, and the experiment was concentrated in March 2025 when frontier models were weaker. Becker explicitly cautions it does not generalize to all developers or tasks, and notes his own work on smaller repos likely was sped up. The deeper lesson is that demonstrated AI capability in a controlled benchmark is not the same as deployed productivity, and that even direct practitioners cannot reliably self-assess the effect.

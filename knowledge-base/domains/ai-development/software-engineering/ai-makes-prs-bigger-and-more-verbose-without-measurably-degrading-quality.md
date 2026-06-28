---
id: INS-260627-3B20
domain: ai-development
topic: software-engineering
title: AI makes PRs bigger and more verbose without measurably degrading quality
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - pull-requests
  - code-quality
  - code-verbosity
  - side-effects
  - technical-debt
sources:
  - type: youtube
    title: >-
      What Data from 20m Pull Requests Reveal About AI Transformation — Nick
      Arcolano, Jellyfish
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WqZq8L-v9pA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fully AI-adopted teams push PRs ~18% larger in net lines added —
    concentrated in the same files (more verbose, not more spread out) — with no
    statistically significant relationship between AI adoption and bug tickets
    or PR reverts.
  standard: >-
    AI's main observable side effect on the codebase is verbosity. Teams at full
    adoption push PRs about 18% larger in net lines of code, driven more by
    additions than deletions (net-new code, not heavy rewrites), and the number
    of files touched stays roughly constant. So AI is making changes more
    thorough or more verbose within the same files rather than spreading edits
    across more of the codebase.


    On quality, the expected shoe doesn't drop — at least not yet. Across bug
    tickets created and PR revert rates, Jellyfish found no statistically
    significant relationship with AI adoption. The one quality signal that moves
    is bugs resolved, which rises because teams disproportionately point AI at
    well-scoped, verifiable backlog bug tickets — bugs being addressed by AI,
    not caused by it.


    The takeaway is to ease up on extreme quality anxiety while staying
    vigilant: the 'no smoking gun' verdict is hedged with 'not yet,' and the
    presenter expects to keep digging as asynchronous agents grow. Larger PRs
    also have downstream review and comprehension costs worth watching even
    absent a bug spike.
stance: >-
  AI coding adoption increases pull-request size primarily through net-new lines
  in the same files, with no statistically significant rise in bugs or reverts
  so far.
related:
  - INS-260325-EE14
  - INS-260627-6065
  - INS-260627-3F9B
  - INS-260627-8DBA
  - INS-260403-2A0F
  - INS-260403-9A0C
---
AI's main observable side effect on the codebase is verbosity. Teams at full adoption push PRs about 18% larger in net lines of code, driven more by additions than deletions (net-new code, not heavy rewrites), and the number of files touched stays roughly constant. So AI is making changes more thorough or more verbose within the same files rather than spreading edits across more of the codebase.

On quality, the expected shoe doesn't drop — at least not yet. Across bug tickets created and PR revert rates, Jellyfish found no statistically significant relationship with AI adoption. The one quality signal that moves is bugs resolved, which rises because teams disproportionately point AI at well-scoped, verifiable backlog bug tickets — bugs being addressed by AI, not caused by it.

The takeaway is to ease up on extreme quality anxiety while staying vigilant: the 'no smoking gun' verdict is hedged with 'not yet,' and the presenter expects to keep digging as asynchronous agents grow. Larger PRs also have downstream review and comprehension costs worth watching even absent a bug spike.

---
id: INS-260408-76F4
domain: ai-development
topic: research-methodology
title: >-
  Releasing all derived results immediately and free is structurally better than
  running a request-based service when the marginal cost of computation is near
  zero
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - open-science
  - marginal-cost
  - alphafold
  - release-strategy
  - infrastructure
sources:
  - type: youtube
    title: 'The Hardest Problem AI Ever Solved, with Google DeepMind CEO'
    author: Cleo Abram
    url: 'https://youtu.be/C0gErQtnNFE'
date_extracted: '2026-04-08'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hassabis decided in a single meeting to fold all 200M proteins and release
    them free, because it took less effort than building the request server.
  standard: >-
    The pivotal AlphaFold meeting captured on camera: the team was planning the
    conventional approach — set up a server, scientists email protein sequences,
    you email back structures over days. Mid-meeting Hassabis did
    back-of-envelope math on his phone: 200 million known proteins, 10 seconds
    each, distributed compute, doable in a year. And critically: 'it would be
    actually probably less effort than standing up the server.' So they did it
    and released the entire database free. The general lesson: when computation
    cost approaches zero, batch-release-all-results structurally beats
    on-demand-query-based architectures, because the cost of building
    user-facing infrastructure exceeds the cost of just generating all possible
    answers up front.
stance: >-
  When you can fold every protein in nature in a year for less effort than
  building the request server, the right move is to fold them all and release
  them — and this principle generalizes to any near-zero marginal cost
  computational science.
related:
  - INS-260323-3657
  - INS-260408-306A
  - PRI-260406-6AE6
  - INS-260321-E4EB
  - INS-260403-D1D0
---
The pivotal AlphaFold meeting captured on camera: the team was planning the conventional approach — set up a server, scientists email protein sequences, you email back structures over days. Mid-meeting Hassabis did back-of-envelope math on his phone: 200 million known proteins, 10 seconds each, distributed compute, doable in a year. And critically: 'it would be actually probably less effort than standing up the server.' So they did it and released the entire database free. The general lesson: when computation cost approaches zero, batch-release-all-results structurally beats on-demand-query-based architectures, because the cost of building user-facing infrastructure exceeds the cost of just generating all possible answers up front.

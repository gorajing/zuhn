---
id: INS-260330-50B3
domain: startups
topic: strategy
title: >-
  Legacy systems persist not because they're good but because switching costs
  exceed dysfunction costs — the RuBisCo trap
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - path-dependence
  - evolution
  - strategy
  - lock-in
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo was designed for a low-oxygen world, became half-broken when plants
    changed the atmosphere, but plants doubled down rather than evolving a
    replacement — a universal pattern in organizations and codebases.
  standard: >-
    The enzyme RuBisCo evolved when Earth's atmosphere had minimal oxygen. It
    was mediocre at its job (fixing carbon), but was far better than nothing, so
    early organisms produced massive quantities to compensate. Then plants
    themselves increased atmospheric oxygen through photosynthesis, and RuBisCo
    started grabbing oxygen instead of CO2 roughly half the time, producing a
    toxic byproduct.


    Rather than evolving a replacement enzyme, plants evolved elaborate
    workaround systems (C4 and CAM photosynthesis, photorespiration pathways) to
    deal with the dysfunction. Today there are ~40 billion tons of RuBisCo on
    Earth — brute force compensating for a design flaw that's been known for
    hundreds of millions of years.


    This is the exact pattern of legacy systems in startups and enterprises: an
    early architectural choice works well enough, the organization scales around
    it, the environment changes, and the system becomes half-broken. But by
    then, every other system depends on it. The rational response is patching
    over replacing, and the patches accumulate into their own complexity.
    Recognizing this trap early — before you've gone 'all-in' — is the only real
    defense.
stance: >-
  Organizations that go all-in on an early strategy will keep patching it even
  when the environment fundamentally changes, because replacement cost exceeds
  adaptation cost
related:
  - INS-260328-D0F6
  - INS-260330-CA97
  - INS-260330-DF69
  - INS-260404-2695
  - INS-260403-818F
  - INS-260404-B7B6
  - INS-260330-7106
  - INS-260403-D563
  - INS-260403-3D7D
evidence:
  - id: INS-260323-E559
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-CA97
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-E5DC
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260330-D304
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-F5CF
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-A3EB
    type: EXTENDS
    classified_at: '2026-04-03'
---
The enzyme RuBisCo evolved when Earth's atmosphere had minimal oxygen. It was mediocre at its job (fixing carbon), but was far better than nothing, so early organisms produced massive quantities to compensate. Then plants themselves increased atmospheric oxygen through photosynthesis, and RuBisCo started grabbing oxygen instead of CO2 roughly half the time, producing a toxic byproduct.

Rather than evolving a replacement enzyme, plants evolved elaborate workaround systems (C4 and CAM photosynthesis, photorespiration pathways) to deal with the dysfunction. Today there are ~40 billion tons of RuBisCo on Earth — brute force compensating for a design flaw that's been known for hundreds of millions of years.

This is the exact pattern of legacy systems in startups and enterprises: an early architectural choice works well enough, the organization scales around it, the environment changes, and the system becomes half-broken. But by then, every other system depends on it. The rational response is patching over replacing, and the patches accumulate into their own complexity. Recognizing this trap early — before you've gone 'all-in' — is the only real defense.

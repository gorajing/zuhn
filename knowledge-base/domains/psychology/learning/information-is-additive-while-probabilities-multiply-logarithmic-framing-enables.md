---
id: INS-260330-6C09
domain: psychology
topic: learning
title: >-
  Information is additive while probabilities multiply — logarithmic framing
  enables intuitive reasoning about compounding evidence
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - information-theory
  - logarithms
  - mental-models
  - probability
  - reasoning
sources:
  - type: youtube
    title: Solving Wordle using information theory
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=v68zYyaEmEA'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Thinking in bits (log2 of possibilities) makes sequential reasoning natural
    because information adds up while probabilities multiply.
  standard: >-
    Shannon's choice of logarithmic units for information wasn't arbitrary — it
    transforms probability multiplication into addition. If guess 1 gives 2 bits
    (cutting possibilities by 4x) and guess 2 gives 3 bits (cutting by 8x),
    together they give 5 bits (cutting by 32x). You just add. This is far more
    intuitive than saying 'the probability was 1/4 and then 1/8 so together it's
    1/32.'


    This logarithmic framing is a powerful mental model beyond formal
    information theory. When evaluating how much you've learned from multiple
    sources, thinking 'I got about 3 bits from this paper and 2 bits from that
    conversation' is more tractable than tracking exact probability
    distributions. It also explains why 20 bits of information sounds manageable
    while 'probability 0.0000095' sounds incomprehensible — same thing,
    different frame. Von Neumann's advice to call this 'entropy' was strategic:
    borrowing the term from thermodynamics gave it instant gravitas while the
    additive property made it practically useful for engineers building
    communication systems.
stance: >-
  Expressing uncertainty in bits (logarithmic scale) rather than probabilities
  makes it natural to reason about sequential evidence, because bits add while
  probabilities multiply.
related:
  - INS-260325-0921
  - INS-260329-8C14
  - INS-260329-8BFC
  - PRI-260406-FA5B
  - INS-260330-7A80
  - INS-260403-841F
  - INS-260323-3F30
  - INS-260402-7A1A
evidence:
  - id: INS-260402-7A1A
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-8C14
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-8BFC
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260323-3F30
    type: CHALLENGES
    classified_at: '2026-04-03'
  - id: INS-260323-B309
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260403-30BF
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
---
Shannon's choice of logarithmic units for information wasn't arbitrary — it transforms probability multiplication into addition. If guess 1 gives 2 bits (cutting possibilities by 4x) and guess 2 gives 3 bits (cutting by 8x), together they give 5 bits (cutting by 32x). You just add. This is far more intuitive than saying 'the probability was 1/4 and then 1/8 so together it's 1/32.'

This logarithmic framing is a powerful mental model beyond formal information theory. When evaluating how much you've learned from multiple sources, thinking 'I got about 3 bits from this paper and 2 bits from that conversation' is more tractable than tracking exact probability distributions. It also explains why 20 bits of information sounds manageable while 'probability 0.0000095' sounds incomprehensible — same thing, different frame. Von Neumann's advice to call this 'entropy' was strategic: borrowing the term from thermodynamics gave it instant gravitas while the additive property made it practically useful for engineers building communication systems.

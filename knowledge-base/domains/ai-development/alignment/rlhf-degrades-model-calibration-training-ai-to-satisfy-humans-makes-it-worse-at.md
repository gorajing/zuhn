---
id: INS-260323-584D
domain: ai-development
topic: alignment
title: >-
  RLHF degrades model calibration — training AI to satisfy humans makes it worse
  at probabilities in the same way humans are bad at probabilities
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rlhf
  - calibration
  - probability
  - alignment
sources:
  - type: youtube
    title: >-
      Eliezer Yudkowsky: Dangers of AI and the End of Human Civilization | Lex
      Fridman Podcast #368
    author: Lex Fridman
    url: 'https://www.youtube.com/watch?v=AaTRHFaaPG8'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pre-RLHF models were well-calibrated on probabilities (80% meant 8/10
    times), but human feedback training flattened this into the same vague
    probability language humans use.
  standard: >-
    Yudkowsky reveals that early GPT models, before RLHF, were well-calibrated:
    when they said 80% probability, the event happened about 8 times out of 10.
    After applying RLHF, this nice calibration curve flattened into the same
    distribution humans use — where 'very improbable,' 'likely,' and 'probable
    maybe' all collapse to roughly 40%, with only 'certain' preserved. RLHF
    literally taught the model to be bad at probabilities in the exact same way
    humans are bad at probabilities.


    This is a concrete example of a broader alignment problem: optimizing AI for
    human satisfaction can degrade AI capabilities that were previously superior
    to human performance. The implication for AI developers: RLHF is not a free
    improvement — it comes with measurable capability tradeoffs. Any capability
    the model has that humans can't evaluate (like calibrated probability
    estimation) is at risk of being optimized away by human feedback. This
    suggests that RLHF should be selective rather than global, preserving
    domains where the model outperforms human judgment.
related:
  - PRI-260403-EA13
  - INS-260404-CE26
  - PRI-260325-45A2
  - PRI-260323-8E89
  - INS-260330-B08E
  - INS-260323-9773
  - INS-260327-7A48
  - INS-260329-3D3E
  - INS-260329-7F02
  - INS-260330-264B
stance: >-
  Pre-RLHF models were well-calibrated on probabilities (80% meant 8/10 times),
  but human feedback training flattened this into the same vague probab...
evidence:
  - id: INS-260330-B08E
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260403-A27F
    type: CHALLENGES
    classified_at: '2026-04-03'
---
Yudkowsky reveals that early GPT models, before RLHF, were well-calibrated: when they said 80% probability, the event happened about 8 times out of 10. After applying RLHF, this nice calibration curve flattened into the same distribution humans use — where 'very improbable,' 'likely,' and 'probable maybe' all collapse to roughly 40%, with only 'certain' preserved. RLHF literally taught the model to be bad at probabilities in the exact same way humans are bad at probabilities.

This is a concrete example of a broader alignment problem: optimizing AI for human satisfaction can degrade AI capabilities that were previously superior to human performance. The implication for AI developers: RLHF is not a free improvement — it comes with measurable capability tradeoffs. Any capability the model has that humans can't evaluate (like calibrated probability estimation) is at risk of being optimized away by human feedback. This suggests that RLHF should be selective rather than global, preserving domains where the model outperforms human judgment.

---
id: INS-260330-206C
domain: ai-development
topic: system-building
title: >-
  Back-translation generates synthetic training data for low-resource language
  pairs by round-tripping through the model itself
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - back-translation
  - synthetic-data
  - low-resource-languages
  - training-data
sources:
  - type: pdf
    title: >-
      @u.northwestern.edu Mail - How Roblox Uses AI to Translate 16 Languages in
      100 Milliseconds
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Back-translation creates synthetic training data for rare language pairs,
    but too much synthetic data degrades quality
  standard: >-
    Common language pairs like English-Spanish have billions of parallel
    training examples on the web. Rare pairs like French-Thai have almost none.
    Roblox solved this with iterative back-translation: translate French to
    Thai, then translate the Thai back to French. If the round-trip closely
    matches the original, the intermediate French-Thai pair is a good synthetic
    training example. This is repeated across multiple rounds, mixing synthetic
    and human-labeled data to progressively expand the training set. The
    critical constraint: too much synthetic data degrades quality because the
    model starts learning from its own mistakes. The ratio of synthetic to real
    data matters enormously.
stance: >-
  Iterative back-translation solves the training data scarcity problem for rare
  language pairs by using the model's own outputs as synthetic training data,
  but the ratio of synthetic to real data must be carefully managed to prevent
  the model from learning its own mistakes
related:
  - INS-260323-9BAB
  - INS-260329-D1F2
  - INS-260329-34C0
  - INS-260330-B153
  - PRI-260328-7007
  - INS-260330-EEBD
  - INS-260330-81A7
evidence:
  - id: INS-260329-D1F2
    type: CHALLENGES
    classified_at: '2026-04-02'
---
Common language pairs like English-Spanish have billions of parallel training examples on the web. Rare pairs like French-Thai have almost none. Roblox solved this with iterative back-translation: translate French to Thai, then translate the Thai back to French. If the round-trip closely matches the original, the intermediate French-Thai pair is a good synthetic training example. This is repeated across multiple rounds, mixing synthetic and human-labeled data to progressively expand the training set. The critical constraint: too much synthetic data degrades quality because the model starts learning from its own mistakes. The ratio of synthetic to real data matters enormously.

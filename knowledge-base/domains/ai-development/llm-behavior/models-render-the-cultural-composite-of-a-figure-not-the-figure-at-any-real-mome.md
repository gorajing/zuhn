---
id: INS-260625-C4AE
domain: ai-development
topic: llm-behavior
title: >-
  Models render the cultural composite of a figure, not the figure at any real
  moment
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - training-data
  - next-token-prediction
  - composite-persona
  - data-distribution
  - miranda-hypothesis
sources:
  - type: youtube
    title: >-
      The Miranda Hypothesis: How Hamilton Poisoned Persona Evals - Jacob E.
      Thomas, Results Gen
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IJXjTLPzvAU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Auto-regressive prediction has no architectural capacity to distinguish a
    1789 letter from a 2019 viral tweet, so it collapses both into a single
    composite weighted by corpus salience.
  standard: >-
    The 'Miranda hypothesis' (named for Lin-Manuel Miranda's Hamilton as the
    paradigm case) has three claims. Inputs: in training corpora, the volume and
    recency of culturally dominant representations of a figure systematically
    exceed that figure's primary documentary record — the Federalist Papers are
    a fixed ~175,000 words, while reviews, lyrics, fan analysis, curricula, and
    derivative works about the musical exceed the record by orders of magnitude
    and are more recent and recurrent. Mechanism: next-token prediction
    compresses both into parameters with no capacity to tell a primary source
    from a downstream cultural artifact, so output defaults to a
    salience-weighted blend. Output: a persona that is fluent, plausible in
    register, and morally legible to modern users — but anchored to no real
    moment.


    The vivid framing: the composite Hamilton 'knows he will be the subject of a
    Broadway musical'; the composite Lincoln 'has already read the Gettysburg
    Address even if summoned before he wrote it.' The distortion is reproducible
    on any frontier model today and generalizes to any sufficiently salient
    figure. Crucially, the model is not inventing — it is inheriting. The
    musical's smoothing of a contested historical record into a single
    comfortable hero is faithfully reproduced because the musical dominates the
    figure's slice of the training distribution. This is a real-world instance
    of the broader principle that training-data salience, not ground truth,
    governs default model behavior.
stance: >-
  When a culturally dominant representation outweighs a figure's primary record
  in the training distribution, the model defaults to a salience-weighted
  composite that corresponds to no verifiable point in that figure's life.
related:
  - PRI-260406-4F8E
  - INS-260322-5932
  - PRI-260403-EA13
  - INS-260403-141E
  - INS-260412-4701
---
The 'Miranda hypothesis' (named for Lin-Manuel Miranda's Hamilton as the paradigm case) has three claims. Inputs: in training corpora, the volume and recency of culturally dominant representations of a figure systematically exceed that figure's primary documentary record — the Federalist Papers are a fixed ~175,000 words, while reviews, lyrics, fan analysis, curricula, and derivative works about the musical exceed the record by orders of magnitude and are more recent and recurrent. Mechanism: next-token prediction compresses both into parameters with no capacity to tell a primary source from a downstream cultural artifact, so output defaults to a salience-weighted blend. Output: a persona that is fluent, plausible in register, and morally legible to modern users — but anchored to no real moment.

The vivid framing: the composite Hamilton 'knows he will be the subject of a Broadway musical'; the composite Lincoln 'has already read the Gettysburg Address even if summoned before he wrote it.' The distortion is reproducible on any frontier model today and generalizes to any sufficiently salient figure. Crucially, the model is not inventing — it is inheriting. The musical's smoothing of a contested historical record into a single comfortable hero is faithfully reproduced because the musical dominates the figure's slice of the training distribution. This is a real-world instance of the broader principle that training-data salience, not ground truth, governs default model behavior.

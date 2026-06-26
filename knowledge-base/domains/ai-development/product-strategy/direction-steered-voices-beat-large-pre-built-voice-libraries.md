---
id: INS-260625-8333
domain: ai-development
topic: product-strategy
title: Direction-steered voices beat large pre-built voice libraries
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tts
  - product-design
  - controllability
  - prompting
  - voice
sources:
  - type: youtube
    title: >-
      From Transcription to Live Music: Gemini's Audio Stack — Thor Schaeff,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Bc6Ojl2XS1w'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemini ships ~30 base voices that you 'direct' with a scene and a
    performance note, rather than a huge filterable library of fixed voices.
  standard: >-
    Legacy TTS providers give you a large library of distinct voices you filter
    by gender, accent, and language. Gemini takes the opposite approach: roughly
    30 base voices, each then *directed* — you set an audio profile, a scene
    ('cozy crowded pub on the coast of County Clare'), and a director's note
    ('deliver the lines with a strong authentic Irish accent'), exactly as you'd
    direct a human performer. A single American base voice becomes a
    high-pitched Irish male or a Singaporean speaker through prompting alone.


    This is a product-design bet that controllability via natural language
    scales better than enumeration. A library has fixed cardinality and
    combinatorial gaps (no 'high-pitch Irish male whispering excitedly'), while
    a directable voice covers a continuous space and lets non-experts express
    intent in plain language. It also shifts the asset-creation cost from
    recording/curating thousands of voices to training one model that
    generalizes the direction space.


    The tradeoff is reproducibility and predictability: a fixed library voice
    sounds identical every time, whereas a directed voice may drift across
    renders and is harder to lock to a brand-exact timbre. For products that
    prize creative range and accessibility over byte-identical consistency,
    direction wins; for ones needing a guaranteed, unchanging signature voice, a
    curated asset still has a place.
stance: >-
  Voice products should expose a small set of base voices steered by
  natural-language direction rather than a large catalog of fixed voices
  filtered by gender and accent.
related:
  - INS-260322-191F
  - INS-260322-B264
  - INS-260626-7EA8
  - INS-260605-9688
  - INS-260619-BF47
---
Legacy TTS providers give you a large library of distinct voices you filter by gender, accent, and language. Gemini takes the opposite approach: roughly 30 base voices, each then *directed* — you set an audio profile, a scene ('cozy crowded pub on the coast of County Clare'), and a director's note ('deliver the lines with a strong authentic Irish accent'), exactly as you'd direct a human performer. A single American base voice becomes a high-pitched Irish male or a Singaporean speaker through prompting alone.

This is a product-design bet that controllability via natural language scales better than enumeration. A library has fixed cardinality and combinatorial gaps (no 'high-pitch Irish male whispering excitedly'), while a directable voice covers a continuous space and lets non-experts express intent in plain language. It also shifts the asset-creation cost from recording/curating thousands of voices to training one model that generalizes the direction space.

The tradeoff is reproducibility and predictability: a fixed library voice sounds identical every time, whereas a directed voice may drift across renders and is harder to lock to a brand-exact timbre. For products that prize creative range and accessibility over byte-identical consistency, direction wins; for ones needing a guaranteed, unchanging signature voice, a curated asset still has a place.

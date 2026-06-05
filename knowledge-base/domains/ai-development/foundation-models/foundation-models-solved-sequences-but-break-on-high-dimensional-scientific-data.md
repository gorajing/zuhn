---
id: INS-260603-6E59
domain: ai-development
topic: foundation-models
title: >-
  Foundation models solved sequences but break on high-dimensional scientific
  data
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - foundation-models
  - scientific-ml
  - information-density
  - transformers
  - dimensionality
sources:
  - type: audio
    title: panel
date_extracted: '2026-06-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Satish (Stanford atmospheric FM): on sequences (language/code) we're ~80-90%
    there because a word encodes sparse information you can mask and recover;
    but encoding even a 1024×1024 image into a vector loses enormous
    information, and video/spectral data is worse — the breakthrough for
    high-dimensional data hasn't happened.
  standard: >-
    The panel's deepest technical claim reframes how 'solved' AI actually is.
    Transformers work remarkably well on sequences — language, code, anything
    tokenizable — and the panelist estimates ~80-90% of the sequence problem is
    solved. The reason they generalize so well on text is that a word is
    information-sparse: you encode a token into a high-dimensional vector with
    room to spare, and there's semantic redundancy (mask 70% of a sentence or
    image of a face and the model can recover it from context).


    High-dimensional data breaks this. Even a single 1024×1024 image packs
    vastly more information per sample than a word, so encoding it into a vector
    loses a great deal. Video adds a temporal dimension;
    spectral/multi-wavelength scientific data adds more still. The information
    density is too high and the semantic redundancy too low for the
    mask-and-recover trick that makes language models work. The panelist's
    concrete failure example: a very large model still struggled to identify how
    lanes are split on a road.


    The implication: progress on language models does NOT automatically transfer
    to high-dimensional perception or scientific data. These are a different
    representational problem, and the field is 'waiting for that breakthrough' —
    nobody knows who makes it or when. This is a sober counter to 'foundation
    models will eat everything'; they've eaten sequences, and the dimensional
    frontier is largely open.


    This converges with the world-model talk's claim (SRC-260602-4B9B) that
    embodied/spatial understanding is a distinct bottleneck — both locate the
    frontier in high-dimensional/physical data, not in more language scaling.
stance: >-
  Transformers largely solved sequence problems (language, code) because text is
  information-sparse per token with high semantic redundancy, but they break on
  images, video, and scientific/spectral data where information density is far
  higher and semantic redundancy is low — so sequence-model success does not
  transfer to high-dimensional domains
related:
  - INS-260323-2651
  - INS-260326-8201
  - INS-260329-D8BC
  - INS-260403-410A
  - INS-260329-5ECD
  - INS-260326-CAAB
  - INS-260409-CE1D
  - INS-260412-3252
  - INS-260505-0EB5
  - INS-260514-F277
---
The panel's deepest technical claim reframes how 'solved' AI actually is. Transformers work remarkably well on sequences — language, code, anything tokenizable — and the panelist estimates ~80-90% of the sequence problem is solved. The reason they generalize so well on text is that a word is information-sparse: you encode a token into a high-dimensional vector with room to spare, and there's semantic redundancy (mask 70% of a sentence or image of a face and the model can recover it from context).

High-dimensional data breaks this. Even a single 1024×1024 image packs vastly more information per sample than a word, so encoding it into a vector loses a great deal. Video adds a temporal dimension; spectral/multi-wavelength scientific data adds more still. The information density is too high and the semantic redundancy too low for the mask-and-recover trick that makes language models work. The panelist's concrete failure example: a very large model still struggled to identify how lanes are split on a road.

The implication: progress on language models does NOT automatically transfer to high-dimensional perception or scientific data. These are a different representational problem, and the field is 'waiting for that breakthrough' — nobody knows who makes it or when. This is a sober counter to 'foundation models will eat everything'; they've eaten sequences, and the dimensional frontier is largely open.

This converges with the world-model talk's claim (SRC-260602-4B9B) that embodied/spatial understanding is a distinct bottleneck — both locate the frontier in high-dimensional/physical data, not in more language scaling.

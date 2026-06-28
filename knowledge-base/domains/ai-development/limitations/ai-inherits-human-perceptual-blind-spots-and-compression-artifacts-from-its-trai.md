---
id: INS-260628-BEC2
domain: ai-development
topic: limitations
title: >-
  AI inherits human perceptual blind spots and compression artifacts from its
  training data
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - limitations
  - training-data
  - compression
  - perception
  - generative-ai
  - data-quality
sources:
  - type: youtube
    title: "Perceptual Evaluations: Evals for Aesthetics —\_Diego Rodriguez, Krea.ai"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=h5ItAJuB3Fc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because training images are compressed and human-labeled, models absorb both
    lossy-compression artifacts and the perceptual limits of the humans who made
    the data.
  standard: >-
    Compression formats like JPEG, MP3, and MP4 work by deleting exactly the
    information humans can't perceive — brightness we keep, color detail we
    discard, because our senses won't notice. Rodriguez's unsettling
    observation: most internet training data is already compressed this way, and
    models are also trained on human preference labels filtered through human
    perception. So AI doesn't just learn from us, it inherits our blind spots
    and the encoder's discarded signal — a 'contagion' of human and codec flaws
    into the model.


    For practitioners this reframes 'data quality' to include the perceptual
    provenance of the data, not just its labels or coverage. If your generative
    model never sees uncompressed signal, it cannot learn to value or reproduce
    what compression threw away, and your evals built on the same compressed
    distribution will be blind in the same places. It also argues for explicitly
    accounting for artifacts during training and evaluation — knowing the data
    is JPEG-laden — rather than treating the dataset as a clean window onto
    reality.
stance: >-
  Models trained on human-curated, lossily-compressed internet data inherit both
  our perceptual blind spots and the artifacts of JPEG/MP3/MP4 compression — a
  'contagion' of our flaws.
related:
  - INS-260403-9774
  - INS-260330-CAE6
  - INS-260410-4E62
  - INS-260410-47AE
  - INS-260505-D1E9
  - INS-260514-F277
  - INS-260626-7658
  - PRI-260407-7FB7
  - INS-260625-39E7
---
Compression formats like JPEG, MP3, and MP4 work by deleting exactly the information humans can't perceive — brightness we keep, color detail we discard, because our senses won't notice. Rodriguez's unsettling observation: most internet training data is already compressed this way, and models are also trained on human preference labels filtered through human perception. So AI doesn't just learn from us, it inherits our blind spots and the encoder's discarded signal — a 'contagion' of human and codec flaws into the model.

For practitioners this reframes 'data quality' to include the perceptual provenance of the data, not just its labels or coverage. If your generative model never sees uncompressed signal, it cannot learn to value or reproduce what compression threw away, and your evals built on the same compressed distribution will be blind in the same places. It also argues for explicitly accounting for artifacts during training and evaluation — knowing the data is JPEG-laden — rather than treating the dataset as a clean window onto reality.

---
id: INS-260626-87B7
domain: ai-development
topic: system-design
title: >-
  Generate structured visual artifacts with structured text outputs, not image
  diffusion
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - structured-outputs
  - diffusion-models
  - diagrams
  - vision-models
  - generation
sources:
  - type: youtube
    title: 'Agents on the Canvas in tldraw — Steve Ruiz, tldraw'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sPUjIBH5Cwg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For diagrams, charts, and other structured visuals, have the model emit
    structured text that drives real shape primitives instead of generating an
    image.
  standard: >-
    tldraw's canvas AI doesn't build images — it uses structured text outputs to
    call the same shape tools (circles, lines, axes) a human would use. Ruiz
    gives two reasons this beats diffusion. First, there is far less vision
    training data than text training data. Second, vision training data
    conflicts in ways text does not: on a Cartesian graph the Y-axis value
    increases as you move up, but on the web the Y coordinate increases as you
    move down, and 'left' versus 'stage left' collide within both language and
    images. These conflicts make image models behave unpredictably for
    structured data.


    Because the output is structured text mapping to real editor primitives, the
    result is editable, semantically meaningful, and composable rather than a
    flat raster. The design principle generalizes well beyond whiteboards: when
    the artifact you want has structure (a UI layout, a diagram, a chart, a
    form), route the model through structured outputs that manipulate native
    primitives, reserving diffusion for genuinely unstructured imagery. You get
    more predictable behavior, less reliance on scarce visual training data, and
    an output the rest of your system can reason about.
stance: >-
  Structured text outputs beat image diffusion models for generating structured
  visual artifacts like diagrams and charts.
related:
  - INS-260329-C401
  - INS-260329-18C9
  - INS-260330-14B1
  - INS-260605-8489
  - INS-260625-7935
  - INS-260625-F775
  - INS-260625-EDA3
  - INS-260329-83AA
  - INS-260403-0218
---
tldraw's canvas AI doesn't build images — it uses structured text outputs to call the same shape tools (circles, lines, axes) a human would use. Ruiz gives two reasons this beats diffusion. First, there is far less vision training data than text training data. Second, vision training data conflicts in ways text does not: on a Cartesian graph the Y-axis value increases as you move up, but on the web the Y coordinate increases as you move down, and 'left' versus 'stage left' collide within both language and images. These conflicts make image models behave unpredictably for structured data.

Because the output is structured text mapping to real editor primitives, the result is editable, semantically meaningful, and composable rather than a flat raster. The design principle generalizes well beyond whiteboards: when the artifact you want has structure (a UI layout, a diagram, a chart, a form), route the model through structured outputs that manipulate native primitives, reserving diffusion for genuinely unstructured imagery. You get more predictable behavior, less reliance on scarce visual training data, and an output the rest of your system can reason about.

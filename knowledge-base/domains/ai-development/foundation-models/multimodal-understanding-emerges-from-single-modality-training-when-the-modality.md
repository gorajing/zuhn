---
id: INS-260505-5DC4
domain: ai-development
topic: foundation-models
title: >-
  Multimodal understanding emerges from single-modality training when the
  modality encodes others
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - foundation-models
  - multimodal
  - encoding
  - training-strategy
sources:
  - type: audio
    title: Brian Hie   Generative biology from molecular to genome scale
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Train on the universal substrate (DNA), get understanding of the things it
    encodes (proteins, RNA) for free.
  standard: >-
    Brian Hie's design choice for EVO models: train on DNA only despite caring
    about RNA and proteins. Justification: DNA directly encodes RNA and
    proteins, so DNA-trained models learn implicit understanding of the encoded
    modalities. Result: 'multimodal' biological understanding from
    single-modality training. This generalizes a pattern: when one
    representation contains the information of others, training on it yields
    multimodal capability without the engineering burden of multiple data
    streams.


    Application: in any domain where one substrate encodes others, prefer
    foundation-model training on the universal substrate. Examples: video over
    image+text+motion as separate streams; markdown over PDF+HTML+plaintext
    separately. For decision-memory systems: train on the source documents that
    encode the firm's predictions, principles, and decisions, rather than
    maintaining separate stores.
stance: >-
  Training a model on DNA alone yields functional understanding of RNA and
  proteins because DNA encodes them — multimodality emerges from training on the
  most-encompassing single representation.
related:
  - INS-260405-0AE7
  - INS-260408-76F4
  - INS-260327-2C5F
  - INS-260423-CA05
  - INS-260405-8469
  - INS-260323-3657
---
Brian Hie's design choice for EVO models: train on DNA only despite caring about RNA and proteins. Justification: DNA directly encodes RNA and proteins, so DNA-trained models learn implicit understanding of the encoded modalities. Result: 'multimodal' biological understanding from single-modality training. This generalizes a pattern: when one representation contains the information of others, training on it yields multimodal capability without the engineering burden of multiple data streams.

Application: in any domain where one substrate encodes others, prefer foundation-model training on the universal substrate. Examples: video over image+text+motion as separate streams; markdown over PDF+HTML+plaintext separately. For decision-memory systems: train on the source documents that encode the firm's predictions, principles, and decisions, rather than maintaining separate stores.

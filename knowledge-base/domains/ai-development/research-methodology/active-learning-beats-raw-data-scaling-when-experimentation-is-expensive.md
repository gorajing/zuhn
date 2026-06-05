---
id: INS-260505-9723
domain: ai-development
topic: research-methodology
title: Active learning beats raw data scaling when experimentation is expensive
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - active-learning
  - experimental-design
  - data-strategy
  - scientific-ml
sources:
  - type: audio
    title: Russ altman   panel
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Train the model, see what it doesn't know, do targeted experiments to fill
    those holes.
  standard: >-
    Anshul Kundaje on the panel: there are two strategies for low-data
    scientific domains. (1) Massive bulk data collection in service of a
    foundation model. (2) An active-learning loop: train on what's available,
    identify what the model is uncertain or wrong about, design small
    experiments specifically to address those gaps. Both work; the active
    learning approach is more capital-efficient when experiments are expensive.
    The model itself becomes a tool for prioritizing which experiments are worth
    doing.


    Application: any team facing 'we have a model but it's not good enough'
    should consider whether targeted gap-filling experiments would yield more
    than indiscriminate data collection. For biology: 100 well-chosen
    experiments often beat 10,000 random ones. Same loop applies to corpus-based
    AI products: train on initial customer data, identify decision-lineage gaps,
    request specific historical documents to fill them.
stance: >-
  When physical experiments are expensive (biology, materials, neuroscience),
  training a foundation model first then doing small targeted experiments to
  fill knowledge gaps outperforms either bulk data collection or pure model
  training alone.
related:
  - INS-260403-6632
  - INS-260501-17BB
  - INS-260505-D440
  - PRI-260412-7664
  - INS-260524-78D0
  - INS-260605-FE67
---
Anshul Kundaje on the panel: there are two strategies for low-data scientific domains. (1) Massive bulk data collection in service of a foundation model. (2) An active-learning loop: train on what's available, identify what the model is uncertain or wrong about, design small experiments specifically to address those gaps. Both work; the active learning approach is more capital-efficient when experiments are expensive. The model itself becomes a tool for prioritizing which experiments are worth doing.

Application: any team facing 'we have a model but it's not good enough' should consider whether targeted gap-filling experiments would yield more than indiscriminate data collection. For biology: 100 well-chosen experiments often beat 10,000 random ones. Same loop applies to corpus-based AI products: train on initial customer data, identify decision-lineage gaps, request specific historical documents to fill them.

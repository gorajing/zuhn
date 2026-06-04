---
id: INS-260603-4387
domain: ai-development
topic: research-methodology
title: >-
  Scientific AI needs domain-specific representations, not backbones borrowed
  from natural images
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scientific-ml
  - representation-design
  - inductive-bias
  - geospatial
  - research-methodology
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
    Satish: people create lat/long grids and throw them at a model expecting it
    to learn — but 1° of latitude is ~111km at the equator and near-0 at the
    poles, so the representation itself is distorted; his team instead
    represents Earth as a dense triangular geodesic grid so information density
    per cell is consistent.
  standard: >-
    The methodological error the panelist names: importing the backbone and
    representation conventions that work for natural images / language directly
    into scientific domains. A large-FM team he spoke with justified their
    backbone choice with 'we used mask-autoencoder style because it's proven' —
    proven on natural images, where masking works because of semantic
    redundancy. Atmospheric data has very limited semantic redundancy and high
    dynamism, so the borrowed backbone underperforms.


    The representation example is crisp: latitude/longitude is the default way
    to encode positions on Earth, but it's geometrically distorted — 1° of
    latitude spans ~111km at the equator and collapses toward 0 at the poles.
    Feeding raw lat/long grids to a model bakes that distortion in and asks the
    model to learn around it. His team's fix: represent the planet as a dense
    triangular (geodesic) grid where each cell carries comparable information
    density, then build the model on that. They're also moving the backbone
    toward a diffusion-style architecture because it learns pixel/cell
    correlation better than the natural-image-derived default.


    The transferable principle: when applying ML to a new domain, the first
    question is whether the data representation matches the domain's actual
    structure — not whether you can reuse a proven architecture from another
    domain. Borrowed inductive biases that suited natural images/language can be
    actively wrong elsewhere. Take a step back and design the representation
    before reaching for a model.


    This is the prescriptive companion to the 'FMs break on high-dimensional
    data' insight: part of why they break is that practitioners reuse
    representations and backbones that don't fit the new domain.
stance: >-
  Applying ML to scientific domains by reusing natural-image/NLP backbones and
  naive coordinate representations is a category error — scientific data needs
  representations designed for its actual structure (e.g. geodesic grids over
  lat/long) before any model can generalize
related:
  - INS-260325-D392
  - INS-260330-4BFD
  - INS-260412-FDBF
  - INS-260505-23FB
  - INS-260505-03F6
  - INS-260409-F93A
  - INS-260603-6E59
  - INS-260330-14B1
---
The methodological error the panelist names: importing the backbone and representation conventions that work for natural images / language directly into scientific domains. A large-FM team he spoke with justified their backbone choice with 'we used mask-autoencoder style because it's proven' — proven on natural images, where masking works because of semantic redundancy. Atmospheric data has very limited semantic redundancy and high dynamism, so the borrowed backbone underperforms.

The representation example is crisp: latitude/longitude is the default way to encode positions on Earth, but it's geometrically distorted — 1° of latitude spans ~111km at the equator and collapses toward 0 at the poles. Feeding raw lat/long grids to a model bakes that distortion in and asks the model to learn around it. His team's fix: represent the planet as a dense triangular (geodesic) grid where each cell carries comparable information density, then build the model on that. They're also moving the backbone toward a diffusion-style architecture because it learns pixel/cell correlation better than the natural-image-derived default.

The transferable principle: when applying ML to a new domain, the first question is whether the data representation matches the domain's actual structure — not whether you can reuse a proven architecture from another domain. Borrowed inductive biases that suited natural images/language can be actively wrong elsewhere. Take a step back and design the representation before reaching for a model.

This is the prescriptive companion to the 'FMs break on high-dimensional data' insight: part of why they break is that practitioners reuse representations and backbones that don't fit the new domain.

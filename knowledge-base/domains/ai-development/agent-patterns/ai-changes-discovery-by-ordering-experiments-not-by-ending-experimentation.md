---
id: INS-260625-00A6
domain: ai-development
topic: agent-patterns
title: 'AI changes discovery by ordering experiments, not by ending experimentation'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - measurement
  - scientific-discovery
  - human-in-the-loop
sources:
  - type: blog
    title: >-
      Deep learning-enabled discovery of antibiotics effective against Neisseria
      gonorrhoeae.
    url: 'https://www.broadinstitute.org/publications/broad1378186'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The wet-lab assays, proteomics, tissue chip, and mouse model remained the
    truth sources; AI changed which experiments were worth running first.
  standard: >-
    This case is valuable because the non-AI constraints stay visible. Growth
    inhibition assays, mechanism assays, proteomics, tissue-chip infection
    models, and mouse models still determined whether the candidates mattered.
    AI changed the ordering and density of the search, not the epistemic
    authority of experiments.


    For agent systems, the transfer is to preserve the measurement loop as a
    first-class dependency. A useful agent does not need to pretend it can
    certify truth internally; it needs to route scarce external checks toward
    the highest-yield candidates.
stance: >-
  The strongest AI-for-science systems will act as experiment-ordering engines
  that preserve non-AI measurement loops as the source of truth.
related:
  - INS-260330-C761
  - INS-260625-D26E
  - PRI-260411-FB73
  - PRI-260323-F37F
  - INS-260625-8D0D
  - INS-260327-DC65
---
This case is valuable because the non-AI constraints stay visible. Growth inhibition assays, mechanism assays, proteomics, tissue-chip infection models, and mouse models still determined whether the candidates mattered. AI changed the ordering and density of the search, not the epistemic authority of experiments.

For agent systems, the transfer is to preserve the measurement loop as a first-class dependency. A useful agent does not need to pretend it can certify truth internally; it needs to route scarce external checks toward the highest-yield candidates.

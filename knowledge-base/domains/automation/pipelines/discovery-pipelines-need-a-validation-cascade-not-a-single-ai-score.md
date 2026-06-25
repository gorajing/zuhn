---
id: INS-260625-D26E
domain: automation
topic: pipelines
title: 'Discovery pipelines need a validation cascade, not a single AI score'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - validation-cascade
  - wet-lab
  - pipeline-design
  - evaluation
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
    The study moved from model screening to experimental testing,
    potency/selectivity checks, mechanism work, tissue-chip evidence, and
    mouse-model evidence.
  standard: >-
    The workflow did not stop at the GNN output. It moved from virtual screening
    to 213 experimental tests, then narrowed to lead compounds with in vitro
    activity, selectivity, resistance-frequency checks, proteomic mechanism
    evidence, and early infection-model evidence in a human vagina-on-a-chip and
    mouse vaginal infection model.


    The transferable lesson is that credible AI automation should make
    validation cheaper and better sequenced. Agent systems should expose a
    cascade of gates where each step has a different failure mode, rather than
    treating one model score as a final answer.
stance: >-
  AI-for-science pipelines become trustworthy when model predictions are
  followed by progressively stronger validation stages across assays,
  mechanisms, and organism-relevant models.
related:
  - INS-260330-C761
  - INS-260403-6632
  - INS-260505-9723
  - INS-260625-00A6
  - INS-260625-8D0D
  - PRI-260323-F37F
---
The workflow did not stop at the GNN output. It moved from virtual screening to 213 experimental tests, then narrowed to lead compounds with in vitro activity, selectivity, resistance-frequency checks, proteomic mechanism evidence, and early infection-model evidence in a human vagina-on-a-chip and mouse vaginal infection model.

The transferable lesson is that credible AI automation should make validation cheaper and better sequenced. Agent systems should expose a cascade of gates where each step has a different failure mode, rather than treating one model score as a final answer.

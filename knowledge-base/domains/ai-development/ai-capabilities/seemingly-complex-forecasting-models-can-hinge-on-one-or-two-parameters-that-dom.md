---
id: INS-260403-F0DC
domain: ai-development
topic: ai-capabilities
title: >-
  Seemingly complex forecasting models can hinge on one or two parameters that
  dominate all others
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - forecasting
  - sensitivity-analysis
  - model-risk
  - epistemic-humility
sources:
  - type: blog
    title: What Happened With Bio Anchors?
    author: Scott Alexander
    url: 'https://www.astralcodexten.com/p/what-happened-with-bio-anchors'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bio Anchors had many anchors and parameters but its output was almost
    entirely determined by the algorithmic progress rate, which was its
    least-researched input.
  standard: >-
    Bio Anchors appeared to be a sophisticated model with five biological
    anchors, multiple compute parameters, and time horizon adjustments. But
    correcting just one parameter — algorithmic progress — would have brought
    its timeline close to current consensus. Correcting two parameters (adding
    compute growth) produces a 2030 estimate matching current vibes.


    This reveals a general failure mode: complex models create false confidence
    by appearing thorough while actually being dominated by their most uncertain
    term. Nostalgebraist noticed this informally, and Marius Hobbhahn later
    argued that modeling core variables as static values rather than
    distributions made the model overconfident. The practical takeaway is that
    any forecast in an exponential domain should begin with sensitivity analysis
    to identify which parameters dominate the output, then invest research
    effort proportionally to parameter importance rather than parameter
    accessibility.
stance: >-
  In exponential-growth domains, the most uncertain parameter in a model will
  dominate the output far more than the well-estimated parameters, making
  apparent model sophistication misleading.
related:
  - INS-260403-1EFF
  - INS-260329-4109
  - PRI-260321-14D8
  - INS-260404-8D91
  - INS-260404-82B2
---
Bio Anchors appeared to be a sophisticated model with five biological anchors, multiple compute parameters, and time horizon adjustments. But correcting just one parameter — algorithmic progress — would have brought its timeline close to current consensus. Correcting two parameters (adding compute growth) produces a 2030 estimate matching current vibes.

This reveals a general failure mode: complex models create false confidence by appearing thorough while actually being dominated by their most uncertain term. Nostalgebraist noticed this informally, and Marius Hobbhahn later argued that modeling core variables as static values rather than distributions made the model overconfident. The practical takeaway is that any forecast in an exponential domain should begin with sensitivity analysis to identify which parameters dominate the output, then invest research effort proportionally to parameter importance rather than parameter accessibility.

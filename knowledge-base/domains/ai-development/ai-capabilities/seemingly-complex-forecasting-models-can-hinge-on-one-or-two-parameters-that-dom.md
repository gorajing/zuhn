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
    author:
      - '@type': Person
        name: Scott Alexander
        url: 'https://substack.com/@astralcodexten'
        description: null
        identifier: 'user:12009663'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
    url: 'https://www.astralcodexten.com/p/what-happened-with-bio-anchors'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
Bio Anchors appeared to be a sophisticated model with five biological anchors, multiple compute parameters, and time horizon adjustments. But correcting just one parameter — algorithmic progress — would have brought its timeline close to current consensus. Correcting two parameters (adding compute growth) produces a 2030 estimate matching current vibes.

This reveals a general failure mode: complex models create false confidence by appearing thorough while actually being dominated by their most uncertain term. Nostalgebraist noticed this informally, and Marius Hobbhahn later argued that modeling core variables as static values rather than distributions made the model overconfident. The practical takeaway is that any forecast in an exponential domain should begin with sensitivity analysis to identify which parameters dominate the output, then invest research effort proportionally to parameter importance rather than parameter accessibility.

---
id: INS-260626-A927
domain: ai-development
topic: product-strategy
title: >-
  Compute scales far more easily than data, so a more data-efficient model is
  proportionally easier to deploy
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - data-efficiency
  - compute-vs-data
  - scaling
  - deployment
  - ai-economics
sources:
  - type: youtube
    title: >-
      Why Data Is the Real AI Bottleneck: Flapping Airplanes' Ben and Asher
      Spector
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=ZBpY7MEra9w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Flops get exponentially cheaper and compute is a homogeneous market you can
    simply buy, while data is fragmented, regulated, and negotiated case-by-case
    — so a model 1000x more data-efficient is roughly 1000x easier to deploy.
  standard: >-
    The second argument is a supply-side asymmetry. Compute follows a known cost
    curve — flops get exponentially cheaper over time — and the compute market
    is homogeneous: when GPT launched, the path to more capability was simply
    'buy all the compute.' There is a centralized, fungible supply.


    Data has no such structure. There is no centralized data provider. Acquiring
    frontier-quality data in the long tail means dealing with regulations,
    negotiating terms of use with individual businesses, and assembling niche
    sources one at a time. Data is getting cheaper, but not nearly as fast as
    compute, and the friction of collection doesn't fall on a smooth curve.


    The consequence the Spectors draw is multiplicative: if you can build a
    model that is a thousand times more data-efficient, it becomes roughly a
    thousand times easier to deploy, because you sidestep a thousand times the
    data-acquisition friction. This reframes data efficiency from a research
    nicety into the primary determinant of deployment economics — the lever that
    turns a model that *could* work in a domain into one you can actually ship
    there.
stance: >-
  Betting on data efficiency compounds advantage because data is structurally
  harder to scale than compute.
related:
  - INS-260325-DD43
  - INS-260409-A11F
  - INS-260409-384A
  - INS-260605-B8DD
  - INS-260605-FE37
  - INS-260605-B9A9
  - INS-260605-4788
  - PRI-260407-7AE9
  - INS-260410-C022
  - PRI-260328-D5EB
---
The second argument is a supply-side asymmetry. Compute follows a known cost curve — flops get exponentially cheaper over time — and the compute market is homogeneous: when GPT launched, the path to more capability was simply 'buy all the compute.' There is a centralized, fungible supply.

Data has no such structure. There is no centralized data provider. Acquiring frontier-quality data in the long tail means dealing with regulations, negotiating terms of use with individual businesses, and assembling niche sources one at a time. Data is getting cheaper, but not nearly as fast as compute, and the friction of collection doesn't fall on a smooth curve.

The consequence the Spectors draw is multiplicative: if you can build a model that is a thousand times more data-efficient, it becomes roughly a thousand times easier to deploy, because you sidestep a thousand times the data-acquisition friction. This reframes data efficiency from a research nicety into the primary determinant of deployment economics — the lever that turns a model that *could* work in a domain into one you can actually ship there.

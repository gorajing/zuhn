---
id: INS-260403-1110
domain: startups
topic: strategy
title: >-
  Path dependency locks in suboptimal solutions when early success removes
  selection pressure
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - path-dependency
  - technical-debt
  - lock-in
  - evolution
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo is terrible at its job but 450 million years of ecosystem lock-in
    means plants produce 40 billion tons of it rather than evolve a replacement.
  standard: >-
    RuBisCo evolved when atmospheric CO2 was abundant and oxygen scarce, making
    its poor specificity irrelevant. As plants' own success flooded the
    atmosphere with oxygen, RuBisCo started grabbing O2 instead of CO2 roughly
    half the time, creating toxic byproducts. But by then, the entire plant
    kingdom had built its metabolism around RuBisCo. Rather than replace the
    enzyme, plants evolved elaborate workaround pathways to detoxify the waste
    products.


    This mirrors how startups and platforms lock into early architectural
    decisions. When a core system works 'well enough' and the entire product is
    built on top of it, the rational move is to patch around its flaws rather
    than rearchitect — even when the flaws are severe. The lesson is that early
    technical choices compound: what seems adequate in a low-stress environment
    becomes a permanent constraint once success raises the stakes.
stance: >-
  Organizations that achieve dominance with a mediocre core process will keep
  patching it rather than replacing it, because the switching cost exceeds the
  inefficiency cost
related:
  - INS-260323-E559
  - INS-260330-E811
  - INS-260330-53A9
  - INS-260330-C02D
  - INS-260330-4983
  - INS-260330-22C0
  - PRI-260403-C34A
  - INS-260403-D482
  - INS-260404-1D8F
  - INS-260404-4010
evidence:
  - id: INS-260323-E559
    type: SUPPORTS
    classified_at: '2026-04-05'
---
RuBisCo evolved when atmospheric CO2 was abundant and oxygen scarce, making its poor specificity irrelevant. As plants' own success flooded the atmosphere with oxygen, RuBisCo started grabbing O2 instead of CO2 roughly half the time, creating toxic byproducts. But by then, the entire plant kingdom had built its metabolism around RuBisCo. Rather than replace the enzyme, plants evolved elaborate workaround pathways to detoxify the waste products.

This mirrors how startups and platforms lock into early architectural decisions. When a core system works 'well enough' and the entire product is built on top of it, the rational move is to patch around its flaws rather than rearchitect — even when the flaws are severe. The lesson is that early technical choices compound: what seems adequate in a low-stress environment becomes a permanent constraint once success raises the stakes.

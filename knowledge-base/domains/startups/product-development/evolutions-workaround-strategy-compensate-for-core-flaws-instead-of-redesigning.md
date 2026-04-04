---
id: INS-260403-8653
domain: startups
topic: product-development
title: >-
  Evolution's workaround strategy: compensate for core flaws instead of
  redesigning
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - workarounds
  - evolution
  - product-architecture
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
    Plants evolved entire metabolic pathways to manage RuBisCo's toxic
    byproducts rather than replace the enzyme itself.
  standard: >-
    When RuBisCo started binding oxygen instead of CO2 (due to rising
    atmospheric oxygen levels it helped create), plants didn't evolve a better
    enzyme. Instead, they evolved photorespiration pathways, C4 carbon fixation,
    and CAM photosynthesis — elaborate workaround systems to manage or prevent
    the problem. The cost of replacing a deeply integrated core component
    exceeded the cost of compensating for its flaws.


    This maps directly to product development decisions about technical debt.
    When a core architectural choice proves suboptimal but is deeply embedded,
    teams face the same calculus: rebuild from scratch (risky, expensive,
    uncertain timeline) or build compensating mechanisms around the flaw
    (predictable, incremental, shippable). Biology's answer — almost always
    compensate rather than replace — suggests that workaround strategies deserve
    more respect than engineering culture typically gives them.
stance: >-
  Building elaborate workarounds around a flawed core component is often more
  viable than replacing it, especially when the system is already deeply
  integrated
related:
  - INS-260330-47CF
  - INS-260403-1636
  - INS-260404-76DD
  - INS-260330-EACA
  - INS-260403-6628
  - INS-260403-F290
---
When RuBisCo started binding oxygen instead of CO2 (due to rising atmospheric oxygen levels it helped create), plants didn't evolve a better enzyme. Instead, they evolved photorespiration pathways, C4 carbon fixation, and CAM photosynthesis — elaborate workaround systems to manage or prevent the problem. The cost of replacing a deeply integrated core component exceeded the cost of compensating for its flaws.

This maps directly to product development decisions about technical debt. When a core architectural choice proves suboptimal but is deeply embedded, teams face the same calculus: rebuild from scratch (risky, expensive, uncertain timeline) or build compensating mechanisms around the flaw (predictable, incremental, shippable). Biology's answer — almost always compensate rather than replace — suggests that workaround strategies deserve more respect than engineering culture typically gives them.

---
id: INS-260627-0C9E
domain: ai-development
topic: research-methodology
title: 'Measure AI ROI through engineering outcomes, not business outcomes'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ai-roi
  - measurement
  - confounders
  - git-history
sources:
  - type: youtube
    title: >-
      Can you prove AI ROI in Software Eng? (Stanford 120k Devs Study) – Yegor
      Denisov-Blanch, Stanford
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JvosMkuNxF8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Business KPIs (revenue, NRR) are too confounded by sales, macro, and product
    strategy to attribute to AI; engineering outcomes give a clean signal — and
    can be measured retroactively from git history.
  standard: >-
    Ideally you'd measure AI ROI by business outcomes — give engineers AI, make
    more money. But there is too much noise between treatment and result, plus
    confounders like sales execution, the macro environment, and product
    strategy. So the pragmatic path is to measure engineering outcomes, where
    the causal signal is clean, while accepting caveats: it assumes the product
    function can convert added engineering capacity into value (otherwise it's a
    product problem), assumes engineering is a meaningful bottleneck (usually
    true), and assumes you guard against Goodhart's law with a balanced metric
    set and a culture that doesn't weaponize metrics.


    A powerful practical implication: because git history is a complete record,
    you can measure AI impact *retroactively* — no need to set up a controlled
    experiment and wait six months. If you've already adopted AI, you can look
    back in time. Usage-based telemetry (from coding-assistant APIs) is the gold
    standard over access-based comparisons, though vendor granularity varies
    (e.g., GitHub Copilot aggregates, Cursor is more granular). And metrics
    needn't be flawless to be useful — proxy measurement beats no measurement in
    a race with real winners and losers.
stance: >-
  Engineering outcomes are the only low-noise signal for AI ROI; business
  outcomes are too confounded to measure it directly.
related:
  - INS-260320-4A82
  - INS-260410-5CB4
  - INS-260423-9F96
  - INS-260403-87AC
  - INS-260403-6F8B
  - PRI-260328-0993
  - INS-260626-EAD3
---
Ideally you'd measure AI ROI by business outcomes — give engineers AI, make more money. But there is too much noise between treatment and result, plus confounders like sales execution, the macro environment, and product strategy. So the pragmatic path is to measure engineering outcomes, where the causal signal is clean, while accepting caveats: it assumes the product function can convert added engineering capacity into value (otherwise it's a product problem), assumes engineering is a meaningful bottleneck (usually true), and assumes you guard against Goodhart's law with a balanced metric set and a culture that doesn't weaponize metrics.

A powerful practical implication: because git history is a complete record, you can measure AI impact *retroactively* — no need to set up a controlled experiment and wait six months. If you've already adopted AI, you can look back in time. Usage-based telemetry (from coding-assistant APIs) is the gold standard over access-based comparisons, though vendor granularity varies (e.g., GitHub Copilot aggregates, Cursor is more granular). And metrics needn't be flawless to be useful — proxy measurement beats no measurement in a race with real winners and losers.

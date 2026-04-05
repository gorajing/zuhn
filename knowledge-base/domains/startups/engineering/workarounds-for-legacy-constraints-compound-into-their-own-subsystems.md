---
id: INS-260404-E6F9
domain: startups
topic: engineering
title: Workarounds for legacy constraints compound into their own subsystems
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - legacy-systems
  - phosphoglycolate
  - workaround-debt
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Plants evolved entire metabolic pathways just to handle RuBisCo's toxic
    byproduct, showing how workarounds for legacy decisions become load-bearing
    infrastructure.
  standard: >-
    When RuBisCo grabs oxygen instead of CO2, it produces phosphoglycolate — a
    toxic compound that interferes with the Calvin Cycle. Rather than fix the
    root cause (replace RuBisCo), plants evolved an entire secondary pathway:
    enzymes to break phosphoglycolate into glycine and other compounds that feed
    back into useful metabolism. This workaround pathway is now itself essential
    infrastructure.


    In software engineering and startup architecture, the same pattern recurs
    constantly. An early database schema decision, a hastily chosen API format,
    or a quick-fix authentication system accrues not just primary technical
    debt, but secondary systems built to compensate for its shortcomings. These
    workaround systems develop their own dependencies, their own maintenance
    burden, and their own institutional knowledge requirements. The compounding
    nature of this debt means the cost of eventual replacement grows
    superlinearly — which is exactly why RuBisCo is still here 450 million years
    later.
stance: >-
  Technical debt from early architectural decisions doesn't just persist — it
  spawns secondary systems that become load-bearing infrastructure in their own
  right
related:
  - INS-260403-8653
  - INS-260403-1636
  - INS-260403-F290
  - INS-260404-76DD
  - INS-260404-1455
  - INS-260404-84FE
---
When RuBisCo grabs oxygen instead of CO2, it produces phosphoglycolate — a toxic compound that interferes with the Calvin Cycle. Rather than fix the root cause (replace RuBisCo), plants evolved an entire secondary pathway: enzymes to break phosphoglycolate into glycine and other compounds that feed back into useful metabolism. This workaround pathway is now itself essential infrastructure.

In software engineering and startup architecture, the same pattern recurs constantly. An early database schema decision, a hastily chosen API format, or a quick-fix authentication system accrues not just primary technical debt, but secondary systems built to compensate for its shortcomings. These workaround systems develop their own dependencies, their own maintenance burden, and their own institutional knowledge requirements. The compounding nature of this debt means the cost of eventual replacement grows superlinearly — which is exactly why RuBisCo is still here 450 million years later.

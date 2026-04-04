---
id: INS-260330-DF69
domain: startups
topic: execution
title: Environmental shifts break design assumptions embedded in legacy systems
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - environment-change
  - legacy-systems
  - technical-debt
  - adaptation
  - assumptions
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo was designed for a low-oxygen world and became half-broken when
    plants themselves changed the atmosphere.
  standard: >-
    RuBisCo evolved when Earth's atmosphere had minimal oxygen. As
    photosynthesis itself increased atmospheric oxygen levels, RuBisCo began
    confusing O2 for CO2 roughly half the time, producing toxic
    phosphoglycolate. Plants had to evolve entirely new enzymatic pathways
    (photorespiration) just to clean up this byproduct — infrastructure that
    exists solely to manage a legacy design flaw.


    This is a powerful analogy for startups: your early product architecture
    embeds assumptions about your current environment (user scale, data volume,
    regulatory landscape). As your own success changes that environment — more
    users, more data, new compliance requirements — those embedded assumptions
    start producing 'toxic byproducts' (bugs, security vulnerabilities,
    performance cliffs). The critical insight is that success itself creates the
    conditions that break your original design, and you will inevitably need
    dedicated 'cleanup' systems rather than being able to prevent the problem.
stance: >-
  Systems designed under one set of environmental conditions will produce toxic
  byproducts when those conditions change, requiring dedicated cleanup
  infrastructure
related:
  - INS-260330-CA97
  - INS-260330-50B3
  - INS-260403-9F4B
  - INS-260404-B7B6
  - INS-260403-818F
  - INS-260403-304E
  - INS-260330-026F
  - INS-260330-A3EB
  - INS-260403-CF3E
  - INS-260403-A5D5
evidence:
  - id: INS-260330-CA97
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-E5DC
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260330-4441
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-B3D5
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-F5CF
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260330-A3EB
    type: REFINES
    classified_at: '2026-04-03'
  - id: INS-260325-D033
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
RuBisCo evolved when Earth's atmosphere had minimal oxygen. As photosynthesis itself increased atmospheric oxygen levels, RuBisCo began confusing O2 for CO2 roughly half the time, producing toxic phosphoglycolate. Plants had to evolve entirely new enzymatic pathways (photorespiration) just to clean up this byproduct — infrastructure that exists solely to manage a legacy design flaw.

This is a powerful analogy for startups: your early product architecture embeds assumptions about your current environment (user scale, data volume, regulatory landscape). As your own success changes that environment — more users, more data, new compliance requirements — those embedded assumptions start producing 'toxic byproducts' (bugs, security vulnerabilities, performance cliffs). The critical insight is that success itself creates the conditions that break your original design, and you will inevitably need dedicated 'cleanup' systems rather than being able to prevent the problem.

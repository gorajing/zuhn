---
id: INS-260410-1159
domain: ai-development
topic: infrastructure
title: ASML EUV tool production is the ultimate ceiling on AI compute by 2030
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - asml
  - euv
  - bottleneck
  - semiconductor-supply-chain
  - compute-ceiling
sources:
  - type: youtube
    title: Dylan Patel — The single biggest bottleneck to scaling AI compute
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=mDG_Hx3BSUE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A gigawatt of Rubin-class compute takes ~3.5 EUV tools of annual output, and
    ASML can only make ~70 now, scaling to ~100 by 2030 — mathematically capping
    total AI capacity at ~200 GW/year.
  standard: >-
    Patel walks through the arithmetic: a gigawatt of Nvidia Rubin needs ~55,000
    3nm wafers, ~6,000 5nm wafers, and ~170,000 DRAM wafers, translating to
    roughly 2 million EUV exposures per gigawatt. An EUV tool does 75
    wafers/hour at 90% uptime, so 3.5 tools feed one gigawatt. With ~300 tools
    installed today and production creeping from 70 to 100/year, the
    end-of-decade installed base lands around 700 tools — enough for ~200 GW if
    every tool served AI (which it won't).


    The reason this is a hard ceiling rather than something capitalism can route
    around: each EUV tool is arguably the most complex machine humans make, with
    four subsystems (Cymer source, Carl Zeiss optics, reticle stage, wafer
    stage) each produced by tiny artisanal supply chains that have not tried to
    expand. ASML itself has not taken the YOLO stance — they aren't AGI-pilled
    and see no market pulling for 200 GW/year. Their component vendors respond
    that 'growing from 60 to 100 is already a lot.'


    This reframes every other bottleneck as temporary friction. Power, data
    centers, memory fabs, PCBs — all have multiple vendors and short (<3 year)
    build cycles. EUV does not. So Sam Altman's 'gigawatt a week in 2030'
    implies ~25% of global advanced-node wafer capacity for a single buyer,
    which is aggressive but mathematically within the envelope only if ASML
    itself chooses to expand. If not, the ceiling hits hard around 2029.
stance: >-
  The bottleneck for scaling AI compute rotates yearly (CoWoS, power, data
  centers, memory) but by 2028–2030 it falls to ASML's EUV tool output, which
  caps global AI chip production at around 200 gigawatts per year.
related:
  - INS-260323-8637
  - INS-260330-4C5A
  - INS-260403-6016
  - INS-260410-F849
  - INS-260413-BD80
  - INS-260323-758B
  - INS-260325-5CB1
  - INS-260321-D484
  - INS-260410-BCFD
  - INS-260413-07F2
---
Patel walks through the arithmetic: a gigawatt of Nvidia Rubin needs ~55,000 3nm wafers, ~6,000 5nm wafers, and ~170,000 DRAM wafers, translating to roughly 2 million EUV exposures per gigawatt. An EUV tool does 75 wafers/hour at 90% uptime, so 3.5 tools feed one gigawatt. With ~300 tools installed today and production creeping from 70 to 100/year, the end-of-decade installed base lands around 700 tools — enough for ~200 GW if every tool served AI (which it won't).

The reason this is a hard ceiling rather than something capitalism can route around: each EUV tool is arguably the most complex machine humans make, with four subsystems (Cymer source, Carl Zeiss optics, reticle stage, wafer stage) each produced by tiny artisanal supply chains that have not tried to expand. ASML itself has not taken the YOLO stance — they aren't AGI-pilled and see no market pulling for 200 GW/year. Their component vendors respond that 'growing from 60 to 100 is already a lot.'

This reframes every other bottleneck as temporary friction. Power, data centers, memory fabs, PCBs — all have multiple vendors and short (<3 year) build cycles. EUV does not. So Sam Altman's 'gigawatt a week in 2030' implies ~25% of global advanced-node wafer capacity for a single buyer, which is aggressive but mathematically within the envelope only if ASML itself chooses to expand. If not, the ceiling hits hard around 2029.

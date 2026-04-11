---
id: INS-260410-28E0
domain: ai-development
topic: platform-dynamics
title: >-
  When downstream demand is performance-obsessed, hardware vendors can dictate
  standards upstream to developers
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ecosystem-power
  - hardware-software
  - performance-sensitivity
  - developer-relations
sources:
  - type: youtube
    title: 'Nvidia: The GPU Company (1993-2006)'
    author: Acquired
    url: 'https://www.youtube.com/watch?v=wYUTMgGxZzc'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Nvidia's Riva 128 only supported 8 of DirectX's 24 blend modes and literally
    crashed on the rest — so Nvidia walked game developers through a pitch to
    use only those 8, and developers agreed because consumers bought graphics
    cards purely on benchmark performance.
  standard: >-
    When Nvidia shipped the Riva 128 in 1997, roughly a third of DirectX's blend
    modes simply didn't work. Rather than delay the chip, Nvidia sent people to
    major game developers asking them to restrict their games to only the
    working subset. Developers agreed. The reason they agreed is structurally
    important: consumer buying decisions for PC gaming hardware were driven
    almost entirely by benchmark performance, so game developers were
    effectively forced to target whatever graphics card dominated performance
    charts, which meant accepting whatever constraints that card imposed.


    This inverts the usual assumption that platform owners (Microsoft with
    DirectX) dictate to hardware vendors. When downstream demand is
    performance-obsessed enough, the fastest hardware vendor gains leverage over
    the ostensibly upstream platform. The hardware vendor can ship an incomplete
    implementation and extract accommodation from the ecosystem. This is a form
    of power that doesn't show up in traditional platform analyses — it's
    performance-elasticity-driven leverage.


    The AI hardware parallel is direct: Nvidia's current dominance in AI
    training chips exhibits the same dynamic. Researchers and labs buy purely on
    performance-per-dollar, so Nvidia can dictate software stack choices (CUDA
    lock-in), impose idiosyncratic programming models, and force the ecosystem
    to accommodate hardware limitations rather than the reverse. The 1997
    blend-mode episode is the origin pattern of the leverage dynamic that
    produces Nvidia's current $3T valuation.
stance: >-
  In markets where end users buy purely on performance, the performance-leading
  supplier gains power to force developers and ecosystem partners to accommodate
  hardware limitations.
related:
  - INS-260323-B4D2
  - PRI-260406-1993
  - INS-260410-BFCF
  - INS-260327-0700
  - PRI-260321-14D8
---
When Nvidia shipped the Riva 128 in 1997, roughly a third of DirectX's blend modes simply didn't work. Rather than delay the chip, Nvidia sent people to major game developers asking them to restrict their games to only the working subset. Developers agreed. The reason they agreed is structurally important: consumer buying decisions for PC gaming hardware were driven almost entirely by benchmark performance, so game developers were effectively forced to target whatever graphics card dominated performance charts, which meant accepting whatever constraints that card imposed.

This inverts the usual assumption that platform owners (Microsoft with DirectX) dictate to hardware vendors. When downstream demand is performance-obsessed enough, the fastest hardware vendor gains leverage over the ostensibly upstream platform. The hardware vendor can ship an incomplete implementation and extract accommodation from the ecosystem. This is a form of power that doesn't show up in traditional platform analyses — it's performance-elasticity-driven leverage.

The AI hardware parallel is direct: Nvidia's current dominance in AI training chips exhibits the same dynamic. Researchers and labs buy purely on performance-per-dollar, so Nvidia can dictate software stack choices (CUDA lock-in), impose idiosyncratic programming models, and force the ecosystem to accommodate hardware limitations rather than the reverse. The 1997 blend-mode episode is the origin pattern of the leverage dynamic that produces Nvidia's current $3T valuation.

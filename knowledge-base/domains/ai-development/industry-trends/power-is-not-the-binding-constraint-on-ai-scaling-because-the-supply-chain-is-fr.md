---
id: INS-260410-6A86
domain: ai-development
topic: industry-trends
title: >-
  Power is not the binding constraint on AI scaling because the supply chain is
  fragmented enough to route around
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - power
  - data-centers
  - behind-the-meter
  - bottleneck-rotation
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
    Even if combined-cycle turbine lead times stretch past 2030, 16+ alternative
    power vendors plus behind-the-meter solutions make power the easiest problem
    to solve relative to chips.
  standard: >-
    The 2024 panic about power scaling — GE Vernova, Siemens, Mitsubishi being
    the only combined-cycle turbine makers and sold out through 2030 — missed
    that power is a much more fungible supply chain than semiconductors. Patel
    tracks 16 vendors for gas power generation alone, and his dataset shows
    hundreds of gigawatts of orders already placed. Add aeroderivatives
    (airplane engines repurposed), medium-speed reciprocating engines
    (diesel/gas blocks), ship engines (Nebius is running these for a Microsoft
    New Jersey site), Bloom fuel cells, and solar-plus-battery — any one of
    these can deliver tens of gigawatts individually, and collectively hundreds.


    The economic math makes this robust: combined-cycle CapEx is $1,500/kW. Even
    if you pay $3,500/kW (more than double) for a worse technology, it only adds
    ~10 cents/hour to Hopper TCO — irrelevant when model improvements are
    raising the marginal value per hour much faster. And the US grid itself has
    ~20% excess capacity reserved for peak-day summer loads that could be
    unlocked with utility-scale batteries. Data centers are only 3-4% of grid
    today, 10% by 2028, but the grid is terawatt-scale, not
    hundreds-of-gigawatts-scale.


    The constraint that actually bites is labor (electricians, plumbers,
    construction workers), and the response will be modularization — shipping
    pre-integrated two-megawatt blocks from Asian factories, reducing on-site
    labor dramatically. This flips the 2024 narrative: power becomes easy, chips
    become the hard ceiling, and the bottleneck conversation has to migrate
    upstream to EUV and memory fabs.
stance: >-
  Contrary to 2024's conventional wisdom, power will not be the scaling
  bottleneck for AI compute because 16+ vendors across combined-cycle turbines,
  aeroderivatives, reciprocating engines, ship engines, fuel cells, and
  behind-the-meter gas can collectively deliver hundreds of gigawatts.
related:
  - INS-260323-A1FE
  - INS-260409-3346
  - INS-260325-5CB1
  - INS-260410-7C07
  - INS-260402-F833
---
The 2024 panic about power scaling — GE Vernova, Siemens, Mitsubishi being the only combined-cycle turbine makers and sold out through 2030 — missed that power is a much more fungible supply chain than semiconductors. Patel tracks 16 vendors for gas power generation alone, and his dataset shows hundreds of gigawatts of orders already placed. Add aeroderivatives (airplane engines repurposed), medium-speed reciprocating engines (diesel/gas blocks), ship engines (Nebius is running these for a Microsoft New Jersey site), Bloom fuel cells, and solar-plus-battery — any one of these can deliver tens of gigawatts individually, and collectively hundreds.

The economic math makes this robust: combined-cycle CapEx is $1,500/kW. Even if you pay $3,500/kW (more than double) for a worse technology, it only adds ~10 cents/hour to Hopper TCO — irrelevant when model improvements are raising the marginal value per hour much faster. And the US grid itself has ~20% excess capacity reserved for peak-day summer loads that could be unlocked with utility-scale batteries. Data centers are only 3-4% of grid today, 10% by 2028, but the grid is terawatt-scale, not hundreds-of-gigawatts-scale.

The constraint that actually bites is labor (electricians, plumbers, construction workers), and the response will be modularization — shipping pre-integrated two-megawatt blocks from Asian factories, reducing on-site labor dramatically. This flips the 2024 narrative: power becomes easy, chips become the hard ceiling, and the bottleneck conversation has to migrate upstream to EUV and memory fabs.

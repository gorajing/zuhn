---
id: INS-260410-2307
domain: ai-development
topic: hardware
title: >-
  Inference compute, not training compute, will bottleneck AGI deployment in
  2027-2028
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - inference
  - compute
  - bottleneck
  - agi-timelines
  - tsmc
  - hardware-limits
sources:
  - type: youtube
    title: Is RL + LLMs enough for AGI? — Sholto Douglas & Trenton Bricken
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=64lXQP6cs5M'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    There are ~10M H100-equivalents today and ~100M projected by 2028, which
    caps how many AGI-agents can run in parallel regardless of whether the
    models exist.
  standard: >-
    Sholto and Trenton do rough math: there are roughly 10 million
    H100-equivalents in the world today, projected to hit 100 million by 2028.
    If an H100 runs approximately one 'human-inference-efficient AGI' at human
    thinking speeds (humans process at ~10 tokens/sec per a cited paper), that
    means in 2028 you only have ~100 million parallel AGI instances even under
    generous assumptions. Compute growth is ~2.25-2.5x/year, but by 2028 we hit
    wafer production limits, and new fabs are a longer feedback loop.


    The non-obvious implication: having 'millions of AGIs' sounds huge, but it's
    not a doubling of the world population — it's more like getting tens of
    millions of geniuses in a data center. That's a massive economic shift but
    not a hard takeoff. A lot depends on whether labs can run models below
    full-brain compute per token (and interpretability work on the residual
    stream as 'poor man's adaptive compute' suggests they might). It also means
    the Taiwan/TSMC situation is load-bearing for timelines in a way that's
    under-discussed outside the hardware community. For people making bets on
    the 'post-AGI' world, the right question isn't 'when does AGI arrive' but
    'how many AGI-years per wall-clock year can the physical compute stack
    deliver,' because that's what determines the actual rate of real-world
    deployment.
stance: >-
  Even if AGI is achieved in the next few years, the world will be
  inference-bottlenecked because the number of H100-equivalents caps how many
  parallel AGI instances can actually run.
related:
  - INS-260325-F981
  - INS-260330-0A8D
  - INS-260330-7E4F
  - INS-260405-5222
  - INS-260323-2E51
  - INS-260403-AC2D
---
Sholto and Trenton do rough math: there are roughly 10 million H100-equivalents in the world today, projected to hit 100 million by 2028. If an H100 runs approximately one 'human-inference-efficient AGI' at human thinking speeds (humans process at ~10 tokens/sec per a cited paper), that means in 2028 you only have ~100 million parallel AGI instances even under generous assumptions. Compute growth is ~2.25-2.5x/year, but by 2028 we hit wafer production limits, and new fabs are a longer feedback loop.

The non-obvious implication: having 'millions of AGIs' sounds huge, but it's not a doubling of the world population — it's more like getting tens of millions of geniuses in a data center. That's a massive economic shift but not a hard takeoff. A lot depends on whether labs can run models below full-brain compute per token (and interpretability work on the residual stream as 'poor man's adaptive compute' suggests they might). It also means the Taiwan/TSMC situation is load-bearing for timelines in a way that's under-discussed outside the hardware community. For people making bets on the 'post-AGI' world, the right question isn't 'when does AGI arrive' but 'how many AGI-years per wall-clock year can the physical compute stack deliver,' because that's what determines the actual rate of real-world deployment.

---
id: INS-260627-1C9C
domain: ai-development
topic: applications
title: Learned models beat physics simulation when decades of data exist
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scientific-ml
  - forecasting
  - weather
  - graph-neural-networks
  - physics
sources:
  - type: youtube
    title: "How Google DeepMind is researching the next Frontier of AI for Gemini —\_Raia Hadsell, VP of Research"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zZsTVBXcbow'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepMind's weather models beat gold-standard physics simulations — GenCast
    was more accurate 97% of the time and produced a 15-day forecast in 8
    minutes on one chip instead of hours on a supercomputer.
  standard: >-
    Hadsell recounts being asked by the UK Met Office whether AI could beat
    physics-based rainfall prediction. The answer turned out to be yes — not
    because the atmosphere is simple, but because 40 years of global weather
    data made the problem tractable for neural networks. GraphCast (a spherical
    graph neural network spanning the surface to the lower stratosphere,
    autoregressively predicting ~100 atmospheric variables) forecasts 15 days
    out and, on Hurricane Lee, predicted landfall accurately 9 days ahead versus
    6 days for the best physics models. GenCast then added probabilistic
    forecasting (capturing the chaotic tails), was more accurate than 1,300
    gold-standard benchmarks 97% of the time, and ran a 15-day forecast in 8
    minutes on a single chip rather than hours on a supercomputer.


    The transferable lesson: in any domain with decades of accumulated
    observational data, a learned surrogate can match or exceed an expensive
    first-principles simulator while collapsing compute cost by orders of
    magnitude. The precondition is data volume and quality, not the problem
    being 'easy.'
stance: >-
  When enough historical observational data exists, neural networks outperform
  first-principles physics simulations on forecasting while running orders of
  magnitude faster.
related:
  - INS-260413-62D5
  - INS-260505-4E44
  - INS-260403-7EA1
  - INS-260627-2EB8
  - INS-260413-A950
---
Hadsell recounts being asked by the UK Met Office whether AI could beat physics-based rainfall prediction. The answer turned out to be yes — not because the atmosphere is simple, but because 40 years of global weather data made the problem tractable for neural networks. GraphCast (a spherical graph neural network spanning the surface to the lower stratosphere, autoregressively predicting ~100 atmospheric variables) forecasts 15 days out and, on Hurricane Lee, predicted landfall accurately 9 days ahead versus 6 days for the best physics models. GenCast then added probabilistic forecasting (capturing the chaotic tails), was more accurate than 1,300 gold-standard benchmarks 97% of the time, and ran a 15-day forecast in 8 minutes on a single chip rather than hours on a supercomputer.

The transferable lesson: in any domain with decades of accumulated observational data, a learned surrogate can match or exceed an expensive first-principles simulator while collapsing compute cost by orders of magnitude. The precondition is data volume and quality, not the problem being 'easy.'

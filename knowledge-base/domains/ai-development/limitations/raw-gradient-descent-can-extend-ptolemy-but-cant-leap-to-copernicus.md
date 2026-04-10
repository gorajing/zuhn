---
id: INS-260410-09B4
domain: ai-development
topic: limitations
title: Raw gradient descent can extend Ptolemy but can't leap to Copernicus
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - gradient-descent
  - paradigm-shift
  - ai-for-science
  - interpretability
  - explanatory-power
sources:
  - type: youtube
    title: Michael Nielsen – Why aliens will have a different tech stack than us
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=myP8UjAM1pk'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Curve-fitting AI can keep adding epicycles to Ptolemaic models but can't
    make the global swap to a Copernican frame, because locally the switch looks
    worse.
  standard: >-
    Nielsen argues that if deep learning had existed in 1500, we'd train models
    that identified ever-finer epicycles in planetary data — each new parameter
    slightly lowering prediction error. Gradient descent follows a local signal,
    and the leap from Ptolemy to Copernicus (or Newton to Einstein) doesn't
    improve local accuracy; it's globally more elegant only after you accept a
    deeper rethink of what space, time, or gravity mean.


    This matters because many people expect AI to accelerate science uniformly
    by closing verification loops. But 'training on every observation and hoping
    general relativity pops out' doesn't work — you need multiple independent
    research programs starting from different initial biases, plus some forcing
    function that tells you the old explanation is fundamentally insufficient
    (like Einstein realizing Newtonian gravity enables faster-than-light
    signaling). Until AI systems can construct that kind of structural
    dissatisfaction, they'll be great at AlphaFold-shaped problems and bad at
    general-relativity-shaped ones.


    The practical implication for AI-for-science efforts: expect
    disproportionate progress in domains where curve-fitting over massive
    curated datasets is the bottleneck (protein folding, material properties,
    weather), and much slower progress in domains that require ontological
    reshuffling.
stance: >-
  Gradient-descent-style optimization can refine a wrong paradigm indefinitely
  but cannot discover the qualitatively simpler theory that requires swapping
  reference frames.
related:
  - INS-260410-B0D6
  - INS-260403-72C2
  - INS-260403-7A48
  - INS-260410-B3C4
  - INS-260330-4AD5
---
Nielsen argues that if deep learning had existed in 1500, we'd train models that identified ever-finer epicycles in planetary data — each new parameter slightly lowering prediction error. Gradient descent follows a local signal, and the leap from Ptolemy to Copernicus (or Newton to Einstein) doesn't improve local accuracy; it's globally more elegant only after you accept a deeper rethink of what space, time, or gravity mean.

This matters because many people expect AI to accelerate science uniformly by closing verification loops. But 'training on every observation and hoping general relativity pops out' doesn't work — you need multiple independent research programs starting from different initial biases, plus some forcing function that tells you the old explanation is fundamentally insufficient (like Einstein realizing Newtonian gravity enables faster-than-light signaling). Until AI systems can construct that kind of structural dissatisfaction, they'll be great at AlphaFold-shaped problems and bad at general-relativity-shaped ones.

The practical implication for AI-for-science efforts: expect disproportionate progress in domains where curve-fitting over massive curated datasets is the bottleneck (protein folding, material properties, weather), and much slower progress in domains that require ontological reshuffling.

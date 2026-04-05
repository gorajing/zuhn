---
id: INS-260403-304E
domain: ai-development
topic: limitations
title: >-
  Environmental drift turns core capabilities into liabilities without the
  system noticing
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - drift
  - environment-change
  - silent-failure
  - monitoring
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
    RuBisCo was designed for low-oxygen atmospheres; when plants raised oxygen
    levels, it started failing silently half the time — a cautionary tale for AI
    model drift.
  standard: >-
    RuBisCo evolved to fix carbon in an atmosphere with minimal oxygen. Plants
    then changed their own environment by producing oxygen as a photosynthesis
    byproduct. RuBisCo couldn't distinguish O2 from CO2, so it began silently
    failing on roughly half its reactions — producing toxic phosphoglycolate
    instead of useful products. The enzyme never 'noticed' the problem; plants
    had to evolve entirely separate detoxification systems.


    This pattern maps directly to AI model drift and changing deployment
    environments. A model trained on one data distribution will silently degrade
    as the real-world distribution shifts — often due to the model's own effects
    on user behavior. Like RuBisCo, the system cannot self-diagnose this
    failure. The lesson: any system operating in an environment it can influence
    must have external monitoring that detects when the environment has drifted
    beyond the system's design assumptions. Self-assessment is insufficient when
    you are the cause of the drift.
stance: >-
  Systems designed for one environment will silently degrade when their
  operating environment shifts, requiring external monitoring to detect
related:
  - INS-260330-E5DC
  - INS-260330-4441
  - INS-260330-A3EB
  - INS-260403-9F4B
  - INS-260330-DF69
  - INS-260404-03E7
  - INS-260404-C663
---
RuBisCo evolved to fix carbon in an atmosphere with minimal oxygen. Plants then changed their own environment by producing oxygen as a photosynthesis byproduct. RuBisCo couldn't distinguish O2 from CO2, so it began silently failing on roughly half its reactions — producing toxic phosphoglycolate instead of useful products. The enzyme never 'noticed' the problem; plants had to evolve entirely separate detoxification systems.

This pattern maps directly to AI model drift and changing deployment environments. A model trained on one data distribution will silently degrade as the real-world distribution shifts — often due to the model's own effects on user behavior. Like RuBisCo, the system cannot self-diagnose this failure. The lesson: any system operating in an environment it can influence must have external monitoring that detects when the environment has drifted beyond the system's design assumptions. Self-assessment is insufficient when you are the cause of the drift.

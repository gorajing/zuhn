---
id: INS-260514-71A3
domain: startups
topic: engineering
title: >-
  Building is easy; maintaining the ability to change is hard — and AI-coded
  apps haven't faced this yet
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - software-maintenance
  - vibe-coded-apps
  - long-term-evolution
  - coupling-accumulation
  - open-question
sources:
  - type: youtube
    title: I was laid off by Atlassian
    author: Vasilios Syrakis
    url: 'https://youtu.be/55pTFVoclvE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Building is easy. Maintaining the ability to keep changing the code over
    time is hard — and AI-coded apps haven't yet faced this because they're too
    young for the coupling to have accumulated.
  standard: >-
    Reflection from 8 years of maintaining one team's platform at Atlassian:
    'Building something is easy. Changing it and making sure that you can still
    change it over time is difficult. Because as you change things, it slowly
    becomes harder to change. Things start to get coupled, and all of a sudden
    when you change something in one area, it affects another, and you have to
    deal with the task of detangling.' The open question for the AI era: 'It'll
    be interesting with all these vibe-coded apps and AI-assisted apps to see
    how we handle that. When we have people that are not really familiar with
    what they've created, and the maintenance burdens appear.' The optimist's
    case: maybe LLMs will be able to perform the detangling for us when we ask
    them to. The skeptic's case: maintenance requires understanding the WHY of
    past decisions, which is not encoded in the code — and an LLM that didn't
    write the code may struggle to reconstruct intent. The empirical answer is
    coming in 18-36 months as the first wave of vibe-coded production apps
    reaches the age where coupling matters. The practical implication today:
    invest in retrievable design documents and decision records alongside
    vibe-coded apps, NOT just clean code — the maintenance bottleneck will be
    intent recovery, not code legibility.
stance: >-
  The hard part of software engineering is not building — it's preserving the
  ability to keep changing the code over time without each change making the
  next change harder; this maintenance burden hasn't yet been faced by the wave
  of AI-coded apps because there hasn't been enough time for the coupling and
  complexity to accumulate, and we don't know how that will go.
related:
  - INS-260329-7914
  - INS-260329-5ECD
  - INS-260501-4903
  - INS-260501-52B5
  - INS-260627-F193
  - INS-260404-D6F7
  - INS-260329-7B1D
  - INS-260605-E174
---
Reflection from 8 years of maintaining one team's platform at Atlassian: 'Building something is easy. Changing it and making sure that you can still change it over time is difficult. Because as you change things, it slowly becomes harder to change. Things start to get coupled, and all of a sudden when you change something in one area, it affects another, and you have to deal with the task of detangling.' The open question for the AI era: 'It'll be interesting with all these vibe-coded apps and AI-assisted apps to see how we handle that. When we have people that are not really familiar with what they've created, and the maintenance burdens appear.' The optimist's case: maybe LLMs will be able to perform the detangling for us when we ask them to. The skeptic's case: maintenance requires understanding the WHY of past decisions, which is not encoded in the code — and an LLM that didn't write the code may struggle to reconstruct intent. The empirical answer is coming in 18-36 months as the first wave of vibe-coded production apps reaches the age where coupling matters. The practical implication today: invest in retrievable design documents and decision records alongside vibe-coded apps, NOT just clean code — the maintenance bottleneck will be intent recovery, not code legibility.

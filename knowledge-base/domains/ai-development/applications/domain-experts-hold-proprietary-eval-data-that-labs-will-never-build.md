---
id: INS-260605-8664
domain: ai-development
topic: applications
title: Domain experts hold proprietary eval data that labs will never build
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evaluation
  - open-source
  - domain-expertise
  - benchmarks
  - long-tail
sources:
  - type: youtube
    title: >-
      Agentic Evaluations at Scale, For Everybody — Nicholas Kang & Michael
      Aaron, Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Ubwb6NzegyA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 20-year wastewater-plant engineer built a safety benchmark from incidents
    that killed people — data that exists nowhere on the web and no AI lab would
    prioritize.
  standard: >-
    Roughly 30,000 AI researchers author nearly all evals, yet AI is meant to
    serve all of humanity. Whatever isn't benchmarked can't be hill-climbed, so
    capability stays jagged: superhuman in the narrow areas researchers happen
    to test, mediocre everywhere else. The illustrative case is a Turkish
    wastewater treatment engineer who, after fatal safety-protocol failures in
    his country, built a benchmark to measure whether AI could help prevent such
    incidents — a proprietary dataset drawn from 20 years of experience that
    exists nowhere else and that no frontier lab would create because it isn't
    economically productive for them.


    The strategic insight is that eval coverage of the long tail is a genuine
    open problem and an opportunity: the bottleneck is not compute or modeling
    but distributing eval authorship to the people who actually hold the domain
    knowledge. This argues for open, low-barrier platforms (including subsidized
    model/data access for contributors from poorer backgrounds) and for treating
    community-authored benchmarks as a complement to, not a poor substitute for,
    lab benchmarks. If you have deep domain expertise, the highest-leverage
    contribution may be encoding it as an eval rather than waiting for a lab to.
stance: >-
  The most valuable evaluation data lives in the heads of non-researcher domain
  experts, and AI labs will never build it because it isn't economically
  productive for them.
related:
  - INS-260330-4F7B
  - INS-260514-96FE
  - INS-260501-0662
  - INS-260603-50B1
  - INS-260627-4EAD
  - INS-260525-9B7B
---
Roughly 30,000 AI researchers author nearly all evals, yet AI is meant to serve all of humanity. Whatever isn't benchmarked can't be hill-climbed, so capability stays jagged: superhuman in the narrow areas researchers happen to test, mediocre everywhere else. The illustrative case is a Turkish wastewater treatment engineer who, after fatal safety-protocol failures in his country, built a benchmark to measure whether AI could help prevent such incidents — a proprietary dataset drawn from 20 years of experience that exists nowhere else and that no frontier lab would create because it isn't economically productive for them.

The strategic insight is that eval coverage of the long tail is a genuine open problem and an opportunity: the bottleneck is not compute or modeling but distributing eval authorship to the people who actually hold the domain knowledge. This argues for open, low-barrier platforms (including subsidized model/data access for contributors from poorer backgrounds) and for treating community-authored benchmarks as a complement to, not a poor substitute for, lab benchmarks. If you have deep domain expertise, the highest-leverage contribution may be encoding it as an eval rather than waiting for a lab to.

---
id: INS-260627-74E5
domain: ai-development
topic: mental-models
title: 'AI changes the cost function of engineering, inverting what is worth doing'
actionability: inspiration
confidence: high
shelf_life: evergreen
status: active
tags:
  - cost-function
  - tradeoffs
  - first-principles
  - strategy
  - software-economics
sources:
  - type: youtube
    title: >-
      What We Learned Deploying AI within Bloomberg’s Engineering Organization –
      Lei Zhang, Bloomberg
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Q81AzlA-VE8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Zhang's most exciting takeaway: gen AI changes the cost function of software
    engineering, so the trade-off of whether to build something at all shifts as
    some work gets much cheaper and other work much more expensive.
  standard: >-
    The deepest point in the talk is that AI's primary effect isn't doing the
    same work faster — it's changing the cost function of software engineering.
    When some categories of work become dramatically cheaper and others become
    dramatically more expensive, the build-versus-don't-build decision itself
    flips for many tasks. Work that wasn't worth doing because it was too costly
    may now be trivially worth doing, and prior assumptions about what to
    automate or skip are no longer valid.


    This is a mental model for reasoning about AI's impact at the portfolio
    level rather than the task level: don't just ask 'how much faster is this
    task?' — ask 'which previously-uneconomical work is now worth doing, and
    which previously-cheap work is now relatively expensive?' Zhang frames this
    as an invitation for engineers and engineering leaders to return to first
    principles and a 'soul-searching question': what actually constitutes
    high-quality software engineering, and how do we point the tool at that,
    rather than reflexively accelerating whatever we already did. Notably, his
    data showed individual contributors adopting AI faster than leadership,
    suggesting the people who most need to re-derive these trade-offs are the
    slowest to internalize the new cost function.
stance: >-
  AI is most consequential not because it speeds existing work but because it
  changes the cost function of engineering, making some work cheap and other
  work expensive enough to flip build/don't-build decisions.
related:
  - INS-260405-0E77
  - INS-260403-5CAD
  - INS-260404-D6F7
  - INS-260403-EFAF
  - INS-260403-A2E9
  - PRI-260406-6690
---
The deepest point in the talk is that AI's primary effect isn't doing the same work faster — it's changing the cost function of software engineering. When some categories of work become dramatically cheaper and others become dramatically more expensive, the build-versus-don't-build decision itself flips for many tasks. Work that wasn't worth doing because it was too costly may now be trivially worth doing, and prior assumptions about what to automate or skip are no longer valid.

This is a mental model for reasoning about AI's impact at the portfolio level rather than the task level: don't just ask 'how much faster is this task?' — ask 'which previously-uneconomical work is now worth doing, and which previously-cheap work is now relatively expensive?' Zhang frames this as an invitation for engineers and engineering leaders to return to first principles and a 'soul-searching question': what actually constitutes high-quality software engineering, and how do we point the tool at that, rather than reflexively accelerating whatever we already did. Notably, his data showed individual contributors adopting AI faster than leadership, suggesting the people who most need to re-derive these trade-offs are the slowest to internalize the new cost function.

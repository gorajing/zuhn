---
id: INS-260625-26F5
domain: ai-development
topic: system-design
title: >-
  Evaluate agents with an SRE mindset: reliability is the North Star, accuracy
  is just an input
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sre
  - reliability
  - business-metrics
  - operational-engineering
  - north-star-metric
sources:
  - type: youtube
    title: >-
      Production Evals For Agentic AI Systems - Nishant Gupta, Meta
      Superintelligence Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vljxQZfJ9wY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Stop measuring agent success like a researcher (accuracy) and start
    measuring it like an SRE — reliability, availability, latency, cost,
    recovery — because dependable outcomes, not benchmark peaks, are the goal.
  standard: >-
    Gupta's most useful mindset shift is to stop thinking like a researcher and
    start thinking like an SRE or production engineer. SREs do not measure
    success with accuracy; they measure reliability, availability, latency,
    cost, and recovery. Agentic systems demand the same treatment because the
    goal is not maximizing benchmark scores — it is maximizing dependable
    outcomes. Reliability becomes the North Star metric, and accuracy demotes to
    merely one input feeding it.


    This carries through to which metrics a team tracks at all. Gupta's metric
    set maps each measure to a business outcome: task completion measures value
    delivered, tool success measures operational reliability, escalation rate
    measures human burden, safety violations measure risk exposure, latency
    affects user experience, cost determines scalability, and recovery rate
    reflects resilience. Notably, accuracy is absent from that list — not
    because it is unimportant, but because business success depends on far more
    than whether a single answer was right. The discipline is to choose
    evaluation metrics that an operations leader, not a benchmark leaderboard,
    would care about.
stance: >-
  Production AI teams should adopt SRE metrics — reliability, availability,
  latency, cost, recovery — and treat accuracy as one input rather than the
  success metric.
related:
  - INS-260322-A36C
  - INS-260330-FC4D
  - INS-260404-88D8
  - INS-260410-AF66
  - INS-260413-AD37
  - INS-260501-9465
  - INS-260524-0DC3
  - INS-260605-9F5C
  - INS-260605-D912
  - INS-260605-7843
---
Gupta's most useful mindset shift is to stop thinking like a researcher and start thinking like an SRE or production engineer. SREs do not measure success with accuracy; they measure reliability, availability, latency, cost, and recovery. Agentic systems demand the same treatment because the goal is not maximizing benchmark scores — it is maximizing dependable outcomes. Reliability becomes the North Star metric, and accuracy demotes to merely one input feeding it.

This carries through to which metrics a team tracks at all. Gupta's metric set maps each measure to a business outcome: task completion measures value delivered, tool success measures operational reliability, escalation rate measures human burden, safety violations measure risk exposure, latency affects user experience, cost determines scalability, and recovery rate reflects resilience. Notably, accuracy is absent from that list — not because it is unimportant, but because business success depends on far more than whether a single answer was right. The discipline is to choose evaluation metrics that an operations leader, not a benchmark leaderboard, would care about.

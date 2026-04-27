---
id: PRI-260426-9730
domain: ai-development
title: Predictable latency beats fast latency — jitter destroys control quality
summary: >-
  In real-time and control systems, the variance of latency matters more than
  its mean. Fixed latency can be compensated for in software; random latency
  (jitter) cannot, because every downstream timing assumption breaks
  unpredictably. HFT pipelines, robotics control loops, and agent execution
  paths all optimize for tail-latency predictability before they optimize for
  speed, and harnesses that prioritize average performance over
  worst-case-bounded performance ship subtly broken systems.
confidence: high
supporting_insights:
  - INS-260330-D483
  - INS-260329-05BB
  - INS-260329-3243
  - INS-260329-85E9
  - INS-260329-C991
supporting_count: 5
tags:
  - real-time-systems
  - latency
  - jitter
  - control-systems
  - hft-patterns
date_created: '2026-04-26'
last_reviewed: '2026-04-26'
resolutions:
  one_line: Predictable latency beats fast latency — jitter destroys control quality
  standard: >-
    In real-time and control systems, the variance of latency matters more than
    its mean. Fixed latency can be compensated for in software; random latency
    (jitter) cannot, because every downstream timing assumption breaks
    unpredictably. HFT pipelines, robotics control loops, and agent execution
    paths all optimize for tail-latency predictability before they optimize for
    speed, and harnesses that prioritize average performance over
    worst-case-bounded performance ship subtly broken systems.
lineage:
  compressed_at: '2026-04-26'
  source_insights:
    - id: INS-260330-D483
      relation: SUPPORTS
    - id: INS-260329-05BB
      relation: SUPPORTS
    - id: INS-260329-3243
      relation: SUPPORTS
    - id: INS-260329-85E9
      relation: SUPPORTS
    - id: INS-260329-C991
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 215 insights, 24 principles, surprise 0.96'
embedded: true
embedding_model: "nomic-embed-text"
---
In real-time and control systems, the variance of latency matters more than its mean. Fixed latency can be compensated for in software; random latency (jitter) cannot, because every downstream timing assumption breaks unpredictably. HFT pipelines, robotics control loops, and agent execution paths all optimize for tail-latency predictability before they optimize for speed, and harnesses that prioritize average performance over worst-case-bounded performance ship subtly broken systems.

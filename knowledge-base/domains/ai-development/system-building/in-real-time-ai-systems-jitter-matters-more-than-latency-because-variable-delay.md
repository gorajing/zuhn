---
id: INS-260330-D483
domain: ai-development
topic: system-building
title: >-
  In real-time AI systems, jitter matters more than latency because variable
  delay defeats prediction
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - latency
  - real-time-systems
  - autonomous-driving
  - system-design
sources:
  - type: youtube
    title: >-
      Elon Musk: SpaceX, Mars, Tesla Autopilot, Self-Driving, Robotics, and AI |
      Lex Fridman Podcast #252
    author: Lex Fridman
    url: 'https://www.youtube.com/watch?v=DxREm3s1scA'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fixed latency is predictable and compensable; jitter (variable latency) is
    random and destroys control quality.
  standard: >-
    Tesla tracks latency from photon hitting camera sensor through neural net
    inference, C/C++ control code, and finally to actuator commands — roughly
    150ms end-to-end. Fixed latency of 150ms is manageable because you can
    predict and compensate. But if you add 0-100ms of random jitter from timing
    tolerance stackups across the pipeline, you get 150-250ms of unpredictable
    delay that makes robust control decisions extremely difficult.


    This principle generalizes to any real-time system: upgrading controller
    update frequency from 10Hz to 100Hz reduces worst-case latency from 100ms to
    10ms. Bypassing image post-processing saved 13ms. Each source of variance
    compounds. The lesson for system builders is to audit and minimize jitter at
    every pipeline stage, not just optimize average throughput.
stance: >-
  Reducing timing variance (jitter) in end-to-end AI pipelines yields larger
  practical improvements than reducing average latency, because fixed latency
  can be compensated for but random latency cannot.
related:
  - INS-260329-05BB
  - INS-260329-C375
  - INS-260329-33AA
  - INS-260330-C06E
  - INS-260403-2DE3
  - INS-260329-4B07
  - INS-260405-5670
evidence:
  - id: INS-260329-33AA
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-4B07
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Tesla tracks latency from photon hitting camera sensor through neural net inference, C/C++ control code, and finally to actuator commands — roughly 150ms end-to-end. Fixed latency of 150ms is manageable because you can predict and compensate. But if you add 0-100ms of random jitter from timing tolerance stackups across the pipeline, you get 150-250ms of unpredictable delay that makes robust control decisions extremely difficult.

This principle generalizes to any real-time system: upgrading controller update frequency from 10Hz to 100Hz reduces worst-case latency from 100ms to 10ms. Bypassing image post-processing saved 13ms. Each source of variance compounds. The lesson for system builders is to audit and minimize jitter at every pipeline stage, not just optimize average throughput.

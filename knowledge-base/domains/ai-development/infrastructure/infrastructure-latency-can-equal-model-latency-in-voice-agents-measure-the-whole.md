---
id: INS-260605-DA98
domain: ai-development
topic: infrastructure
title: >-
  Infrastructure latency can equal model latency in voice agents — measure the
  whole path, not the model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - voice-agents
  - latency
  - infrastructure
  - measurement
  - real-time
sources:
  - type: youtube
    title: >-
      Reachy Mini: the $300 open source robot you can actually hack — Andres
      Marafioti, Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0jeZfjJMfmo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Once a model is fast, infrastructure round-trips add as much latency as the
    model itself, so client-perceived latency is what matters.
  standard: >-
    There is a gap between the 'time to first audio' a model vendor quotes and
    what the client actually perceives. Marafioti notes that on top of raw model
    time sits all the infrastructure time — networking, load balancing, serving
    hops — and once the model is genuinely fast (sub-200ms), that infrastructure
    overhead is roughly equal to the model's own time.


    The implication for anyone building voice agents: optimizing the model in
    isolation hits diminishing returns. Benchmark the end-to-end
    client-perceived latency and budget for the serving path, because a fast
    model behind a slow pipeline still feels slow. As models get faster, the
    system around them becomes the dominant term.
stance: >-
  Reported model latency understates real perceived latency because
  infrastructure overhead can match the model's own inference time.
related:
  - INS-260329-33AA
  - INS-260330-D483
  - INS-260330-C06E
  - PRI-260426-9730
  - INS-260605-F383
  - INS-260605-DA2B
  - PRI-260328-4CC0
  - INS-260605-0BD6
---
There is a gap between the 'time to first audio' a model vendor quotes and what the client actually perceives. Marafioti notes that on top of raw model time sits all the infrastructure time — networking, load balancing, serving hops — and once the model is genuinely fast (sub-200ms), that infrastructure overhead is roughly equal to the model's own time.

The implication for anyone building voice agents: optimizing the model in isolation hits diminishing returns. Benchmark the end-to-end client-perceived latency and budget for the serving path, because a fast model behind a slow pipeline still feels slow. As models get faster, the system around them becomes the dominant term.

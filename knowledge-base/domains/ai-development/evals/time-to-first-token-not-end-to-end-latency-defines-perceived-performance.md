---
id: INS-260627-B1B2
domain: ai-development
topic: evals
title: 'Time-to-first-token, not end-to-end latency, defines perceived performance'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - time-to-first-token
  - latency
  - user-experience
  - streaming
  - metrics
sources:
  - type: youtube
    title: >-
      Running LLMs locally: Practical LLM Performance on DGX Spark — Mozhgan
      Kabiri chimeh, NVIDIA
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=c5-kx2bwoCk'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Users judge an LLM app as instant-or-broken by when the first streamed token
    arrives, so measure TTFT separately from throughput and total latency.
  standard: >-
    The talk separates three metrics that are often conflated: raw throughput
    (completion tokens/sec) measures power, end-to-end latency measures total
    wait, but time-to-first-token (TTFT) is 'the metric that defines the user's
    perceived performance.' If the first token arrives instantly the app feels
    responsive; if it stalls, the app feels broken regardless of eventual
    throughput. The benchmark harness explicitly timestamps the first chunk of
    the streaming response to capture this.


    The implication for anyone building LLM products: instrument and optimize
    TTFT as a distinct target, not as a byproduct of average latency. A
    high-throughput model with slow TTFT can feel worse than a slower model that
    starts streaming immediately. This also explains why streaming responses and
    prompt/KV-cache optimizations matter — they attack TTFT directly, the thing
    users actually feel.
stance: >-
  For interactive LLM applications, time-to-first-token is the metric that
  determines whether the product feels responsive, more than total throughput or
  end-to-end latency.
related:
  - INS-260605-6A32
  - INS-260423-2B80
  - INS-260603-915A
  - INS-260605-D430
  - INS-260627-E257
---
The talk separates three metrics that are often conflated: raw throughput (completion tokens/sec) measures power, end-to-end latency measures total wait, but time-to-first-token (TTFT) is 'the metric that defines the user's perceived performance.' If the first token arrives instantly the app feels responsive; if it stalls, the app feels broken regardless of eventual throughput. The benchmark harness explicitly timestamps the first chunk of the streaming response to capture this.

The implication for anyone building LLM products: instrument and optimize TTFT as a distinct target, not as a byproduct of average latency. A high-throughput model with slow TTFT can feel worse than a slower model that starts streaming immediately. This also explains why streaming responses and prompt/KV-cache optimizations matter — they attack TTFT directly, the thing users actually feel.

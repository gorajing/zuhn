---
id: INS-260423-9225
domain: ai-development
topic: infrastructure
title: >-
  Self-hosted LLMs require custom Prometheus metrics — platform defaults do not
  expose token-level telemetry
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - prometheus
  - sidecar-pattern
  - self-hosted-llm
  - custom-metrics
sources:
  - type: youtube
    title: 'Gemma 4 production stack: Model Armor, ADK Agents, Tracing'
    author: Google Cloud Tech
    url: 'https://youtu.be/7wENq-LMHgQ'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Google Cloud: for self-hosted VLM or Ollama, the platform captures GPU
    utilization at approximation but tokens-per-second and prefill/decode
    breakdown require a Prometheus sidecar exporting from the model's internal
    metrics.
  standard: >-
    Cloud platforms expose built-in metrics for their own services (request
    count, latency, CPU, memory, GPU utilization) but these are black-box
    approximations when the workload is a self-hosted LLM inference server. The
    specific metrics that matter for AI cost and capacity planning — tokens
    generated per second, prefill versus decode time, request-level token
    counts, batch utilization, KV-cache hit rate — live inside the inference
    engine (VLM, Ollama, llama.cpp) and are only accessible via their internal
    metric endpoints. The production pattern is a Prometheus sidecar container
    deployed alongside the model container, scraping the model's metrics
    endpoint every 15 seconds and exporting to the cloud monitoring API. Systems
    that rely only on platform-default metrics cannot answer basic cost
    questions (cost per thousand tokens, utilization of provisioned GPUs,
    optimization opportunities) and end up making capacity decisions based on
    coarse proxies.
stance: >-
  Self-hosted open-weight LLM deployments require custom metrics exporters
  (typically Prometheus sidecars) to capture token generation rates and
  model-specific performance data that platform-provided metrics do not expose
related:
  - INS-260423-2B80
  - PRI-260323-2E5A
  - INS-260325-2BDB
  - INS-260320-CDE4
  - INS-260403-D2B1
---
Cloud platforms expose built-in metrics for their own services (request count, latency, CPU, memory, GPU utilization) but these are black-box approximations when the workload is a self-hosted LLM inference server. The specific metrics that matter for AI cost and capacity planning — tokens generated per second, prefill versus decode time, request-level token counts, batch utilization, KV-cache hit rate — live inside the inference engine (VLM, Ollama, llama.cpp) and are only accessible via their internal metric endpoints. The production pattern is a Prometheus sidecar container deployed alongside the model container, scraping the model's metrics endpoint every 15 seconds and exporting to the cloud monitoring API. Systems that rely only on platform-default metrics cannot answer basic cost questions (cost per thousand tokens, utilization of provisioned GPUs, optimization opportunities) and end up making capacity decisions based on coarse proxies.

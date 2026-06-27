---
id: INS-260627-CD33
domain: ai-development
topic: hardware
title: >-
  Memory capacity lets you load a model; memory bandwidth determines if it's
  usable
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - hardware
  - memory-bandwidth
  - inference
  - unified-memory
  - throughput
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
    Fitting a model in memory says nothing about how fast it will run —
    bandwidth, not capacity, sets the throughput ceiling.
  standard: >-
    The Spark's 128GB of unified memory can hold models up to ~200B parameters,
    but the speaker emphasizes that capacity and bandwidth are different
    constraints: throughput is dictated by how efficiently data can be moved,
    not by whether the weights fit. A model that loads successfully can still be
    unusably slow if bandwidth-starved.


    This reframes hardware selection for local inference. Spec sheets lead with
    capacity (GB of memory) because it's the binary 'can I run this' gate, but
    the practical question is tokens-per-second, which is a bandwidth problem.
    When evaluating any inference accelerator — desktop, edge, or datacenter —
    treat memory bandwidth and the techniques that conserve it (quantization,
    KV-cache management) as first-class, and discount headline capacity numbers
    that promise to fit huge models without saying how fast they'll serve.
stance: >-
  On unified-memory AI hardware, throughput is governed by memory bandwidth, not
  by how large a model you can fit in capacity.
related:
  - INS-260410-CB70
  - INS-260501-D18A
  - INS-260625-50A0
  - INS-260605-86BE
  - INS-260626-B7AC
---
The Spark's 128GB of unified memory can hold models up to ~200B parameters, but the speaker emphasizes that capacity and bandwidth are different constraints: throughput is dictated by how efficiently data can be moved, not by whether the weights fit. A model that loads successfully can still be unusably slow if bandwidth-starved.

This reframes hardware selection for local inference. Spec sheets lead with capacity (GB of memory) because it's the binary 'can I run this' gate, but the practical question is tokens-per-second, which is a bandwidth problem. When evaluating any inference accelerator — desktop, edge, or datacenter — treat memory bandwidth and the techniques that conserve it (quantization, KV-cache management) as first-class, and discount headline capacity numbers that promise to fit huge models without saying how fast they'll serve.

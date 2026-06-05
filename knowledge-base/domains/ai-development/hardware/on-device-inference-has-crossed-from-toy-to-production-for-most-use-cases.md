---
id: INS-260605-6588
domain: ai-development
topic: hardware
title: On-device inference has crossed from toy to production for most use cases
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - on-device-ai
  - apple-silicon
  - mlx
  - local-inference
  - edge-ai
sources:
  - type: youtube
    title: 'Why MLX — Prince Canuma, Neywa Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zTLJNHj0DeQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    100B+ parameter and omni models now run at usable speeds on consumer Macs
    and iPhones, turning cloud subscriptions into a choice rather than a
    necessity.
  standard: >-
    The talk's core claim is that the 'you can't run real models on-device'
    assumption is obsolete. MLX has ported 4,000+ models with day-zero support
    for new releases (e.g. Gemma 4), and the community has pushed the envelope
    to running models of hundreds of billions of parameters — even a 26B vision
    model on an iPhone using storage paging — at reasonable speeds. A 96GB-VRAM
    Mac can run vision, audio, and language models simultaneously in real time.


    The strategic consequence is economic: workloads that currently justify
    recurring cloud subscriptions (coding assistants, transcription like
    SuperWhisper, vision analysis) can be offloaded to a device where the only
    marginal cost is the energy bill. The honest caveat from the Q&A is that
    local open models don't yet match Claude Opus-tier quality — so the framing
    is 'adjust expectations to your use case,' not 'local replaces frontier.'
    For privacy-sensitive, offline, or high-volume-parallel workloads (hundreds
    of images, many documents), on-device is already the better tool today.
stance: >-
  Consumer Apple Silicon can now run frontier-class open models locally, making
  cloud inference optional rather than required for most personal AI workloads.
related:
  - INS-260325-DD43
  - INS-260403-B53B
  - INS-260605-8C05
  - INS-260327-7D53
  - INS-260405-3805
---
The talk's core claim is that the 'you can't run real models on-device' assumption is obsolete. MLX has ported 4,000+ models with day-zero support for new releases (e.g. Gemma 4), and the community has pushed the envelope to running models of hundreds of billions of parameters — even a 26B vision model on an iPhone using storage paging — at reasonable speeds. A 96GB-VRAM Mac can run vision, audio, and language models simultaneously in real time.

The strategic consequence is economic: workloads that currently justify recurring cloud subscriptions (coding assistants, transcription like SuperWhisper, vision analysis) can be offloaded to a device where the only marginal cost is the energy bill. The honest caveat from the Q&A is that local open models don't yet match Claude Opus-tier quality — so the framing is 'adjust expectations to your use case,' not 'local replaces frontier.' For privacy-sensitive, offline, or high-volume-parallel workloads (hundreds of images, many documents), on-device is already the better tool today.

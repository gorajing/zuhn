---
id: INS-260626-9883
domain: ai-development
topic: model-architecture
title: Stay between 4-bit and 8-bit when quantizing models for phones
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - quantization
  - on-device-ai
  - model-optimization
  - tradeoffs
sources:
  - type: youtube
    title: "Running LLMs on your iPhone: 40 tok/s Gemma 4 with MLX —\_Adrien Grondin, Locally AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a2muGkT4WD4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For phone-sized models, 4-bit is the practical floor and 8-bit the ceiling;
    below 4-bit, output quality drops sharply.
  standard: >-
    Grondin's working heuristic from shipping a production on-device chatbot:
    choose a quantized weight variant between 4-bit and 8-bit. Below 4-bit,
    quantization starts having 'a lot of impact on the output' and models become
    noticeably worse, so 4-bit is the lowest he will go; 8-bit is the highest he
    bothers with, reserved for the smallest models where the size cost is
    affordable. The full-precision (BF16) weights are simply too large to ship
    to a phone.


    The deeper principle is that quantization is a quality-vs-size tradeoff with
    a sharp knee, not a smooth dial — the marginal bits saved going from 4-bit
    to 3-bit cost disproportionately more quality than the bits saved going from
    8-bit to 4-bit. This makes 4-bit a Schelling point for on-device deployment:
    aggressive enough to fit, conservative enough to preserve coherence.
    Practically, when selecting from the dozens of quantized variants a
    community publishes (4-bit, 5-bit, 6-bit, 8-bit, MXFP4, etc.), default to
    4-bit for larger models you want to fit and 8-bit only for tiny models where
    quality matters most and the footprint is already small.
stance: >-
  Quantizing on-device models below 4-bit degrades output quality enough to
  negate the size savings.
related:
  - INS-260326-8201
  - INS-260501-CF7D
  - INS-260320-96C9
  - INS-260330-C0E2
  - INS-260626-BCC7
---
Grondin's working heuristic from shipping a production on-device chatbot: choose a quantized weight variant between 4-bit and 8-bit. Below 4-bit, quantization starts having 'a lot of impact on the output' and models become noticeably worse, so 4-bit is the lowest he will go; 8-bit is the highest he bothers with, reserved for the smallest models where the size cost is affordable. The full-precision (BF16) weights are simply too large to ship to a phone.

The deeper principle is that quantization is a quality-vs-size tradeoff with a sharp knee, not a smooth dial — the marginal bits saved going from 4-bit to 3-bit cost disproportionately more quality than the bits saved going from 8-bit to 4-bit. This makes 4-bit a Schelling point for on-device deployment: aggressive enough to fit, conservative enough to preserve coherence. Practically, when selecting from the dozens of quantized variants a community publishes (4-bit, 5-bit, 6-bit, 8-bit, MXFP4, etc.), default to 4-bit for larger models you want to fit and 8-bit only for tiny models where quality matters most and the footprint is already small.

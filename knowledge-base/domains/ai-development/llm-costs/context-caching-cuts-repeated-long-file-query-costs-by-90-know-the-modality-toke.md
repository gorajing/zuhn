---
id: INS-260605-13F9
domain: ai-development
topic: llm-costs
title: >-
  Context caching cuts repeated long-file query costs by 90%; know the modality
  token math
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-caching
  - cost-optimization
  - tokens
  - audio
  - long-context
sources:
  - type: youtube
    title: >-
      Any-to-Any: Building Native Multimodal Agents - Patrick Löber, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GIRpQEfYf3U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cache long files for repeated queries to save ~90%, and budget ~1920 tokens
    per minute of audio (~9 hours in a 1M window).
  standard: >-
    Two practical cost levers from the talk. First, the API's built-in context
    caching saves roughly 90% of cost when you load a long file once and run
    repeated queries against it — the canonical pattern for document/media Q&A.
    Second, modality token math sets your real capacity: one minute of audio is
    ~1920 tokens, so a 1M-token window holds more than 9 hours of audio (and ~1
    hour of video), with configs to tweak the ratio and timestamp ranges to
    analyze only slices.


    The takeaway: before architecting a media-heavy pipeline, do the token
    arithmetic per modality to know what fits, then make caching the default for
    any workload that re-queries the same large input. The specific numbers are
    vendor/version-bound (hence time-sensitive), but the two levers — cache for
    repetition, compute the modality ratio — are durable.
stance: >-
  For repeated queries over large media files, context caching is the dominant
  cost lever and modality-to-token ratios set the real context budget.
related:
  - INS-260320-9FD5
  - INS-260626-7EA8
  - INS-260409-B15B
  - INS-260410-B8EB
  - INS-260410-3F1A
---
Two practical cost levers from the talk. First, the API's built-in context caching saves roughly 90% of cost when you load a long file once and run repeated queries against it — the canonical pattern for document/media Q&A. Second, modality token math sets your real capacity: one minute of audio is ~1920 tokens, so a 1M-token window holds more than 9 hours of audio (and ~1 hour of video), with configs to tweak the ratio and timestamp ranges to analyze only slices.

The takeaway: before architecting a media-heavy pipeline, do the token arithmetic per modality to know what fits, then make caching the default for any workload that re-queries the same large input. The specific numbers are vendor/version-bound (hence time-sensitive), but the two levers — cache for repetition, compute the modality ratio — are durable.

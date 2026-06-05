---
id: INS-260605-F039
domain: ai-development
topic: model-architecture
title: Audio's information density is the core obstacle to tokenizing it
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - neural-codecs
  - tokenization
  - information-density
  - compression
  - speech
sources:
  - type: youtube
    title: 'Why TTS Models Now Look Like LLMs — Samuel Humeau, Mistral'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3jGAU2sbAyY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Audio carries ~200kbps versus ~15 bits/sec of semantic content in fluent
    speech, so neural codecs must compress it to a few thousand bits/sec while
    preserving acoustic features.
  standard: >-
    Humeau frames the central TTS difficulty quantitatively: a single token from
    a 1,000-word vocabulary carries ~10 bits, but standard MP3 audio is ~200
    kilobits per second. Naively tokenizing audio would produce thousands of
    tokens per second. By contrast, even a fast fluent speaker conveys only ~15
    bits/sec of actual semantic information — text subtitles drop nearly all the
    acoustic content yet remain intelligible, illustrating how much of audio's
    bit rate is non-semantic.


    The solution is neural audio codecs trained with reconstruction and
    adversarial losses through a bottleneck, which learn to drop useless
    information and retain useful acoustic features (voice timbre, prosody)
    plus, for some tokens, recoverable text content. Mistral cuts audio into
    80ms frames (12 frames/sec), encoding each into ~37 tokens, reducing the
    stream to ~500 tokens/sec.


    The deeper lesson: unlike text (which is already a near-optimal compression
    of meaning into discrete symbols), audio requires a learned compression step
    before the LLM-style modeling paradigm can be applied. The codec, not the
    backbone, is where the modality-specific hard work lives — a useful mental
    model for anyone extending the transformer paradigm to a new high-bandwidth
    modality.
stance: >-
  The hard part of treating audio as tokens is its enormous bit rate relative to
  text, which forces aggressive lossy compression via neural codecs.
related:
  - INS-260323-EECF
  - INS-260326-8201
  - INS-260404-7CBC
  - INS-260410-B282
  - INS-260409-1078
  - INS-260412-4773
  - INS-260330-6BBD
---
Humeau frames the central TTS difficulty quantitatively: a single token from a 1,000-word vocabulary carries ~10 bits, but standard MP3 audio is ~200 kilobits per second. Naively tokenizing audio would produce thousands of tokens per second. By contrast, even a fast fluent speaker conveys only ~15 bits/sec of actual semantic information — text subtitles drop nearly all the acoustic content yet remain intelligible, illustrating how much of audio's bit rate is non-semantic.

The solution is neural audio codecs trained with reconstruction and adversarial losses through a bottleneck, which learn to drop useless information and retain useful acoustic features (voice timbre, prosody) plus, for some tokens, recoverable text content. Mistral cuts audio into 80ms frames (12 frames/sec), encoding each into ~37 tokens, reducing the stream to ~500 tokens/sec.

The deeper lesson: unlike text (which is already a near-optimal compression of meaning into discrete symbols), audio requires a learned compression step before the LLM-style modeling paradigm can be applied. The codec, not the backbone, is where the modality-specific hard work lives — a useful mental model for anyone extending the transformer paradigm to a new high-bandwidth modality.

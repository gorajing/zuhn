---
id: INS-260605-355C
domain: ai-development
topic: research-methodology
title: Speech model accuracy is meaningless without the acoustic use case
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - benchmarking
  - evaluation
  - diarization
  - voice-ai
  - acoustic-conditions
sources:
  - type: youtube
    title: >-
      Beyond Transcription: Building Voice AI That Understands Conversations —
      Hervé Bredin, pyannoteAI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mFLlVpnGpds'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The same best-in-class diarizer scores ~2-8% error on clean telephone speech
    but ~41% in a noisy restaurant — so 'how good is it?' has no use-case-free
    answer.
  standard: >-
    Bredin pushes back on the question 'how well does state-of-the-art
    diarization work?' by showing diarization error rate (DER) swings from ~2%
    on clean two-person telephone speech to ~41% for the best system in a noisy
    multi-friend restaurant setting. The same model, radically different
    numbers. A second example: NVIDIA Parakeet reports 11.4% word error on AMI
    headset microphones but ~26% on the distant tabletop microphone from the
    same meetings, because one is single-speaker close audio and the other is
    multi-speaker distant audio. The lesson for anyone selecting or benchmarking
    speech models: a leaderboard number is only meaningful paired with its
    acoustic conditions, and you must benchmark on audio that matches your
    deployment, not on the vendor's easiest split.
stance: >-
  A single 'state-of-the-art' accuracy number for speech systems is misleading
  because error rates vary several-fold across acoustic conditions.
related:
  - PRI-260405-2DE5
  - PRI-260405-4B06
  - INS-260605-8789
  - PRI-260328-B2EA
  - INS-260519-E248
---
Bredin pushes back on the question 'how well does state-of-the-art diarization work?' by showing diarization error rate (DER) swings from ~2% on clean two-person telephone speech to ~41% for the best system in a noisy multi-friend restaurant setting. The same model, radically different numbers. A second example: NVIDIA Parakeet reports 11.4% word error on AMI headset microphones but ~26% on the distant tabletop microphone from the same meetings, because one is single-speaker close audio and the other is multi-speaker distant audio. The lesson for anyone selecting or benchmarking speech models: a leaderboard number is only meaningful paired with its acoustic conditions, and you must benchmark on audio that matches your deployment, not on the vendor's easiest split.

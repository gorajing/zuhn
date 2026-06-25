---
id: INS-260605-D37A
domain: ai-development
topic: architecture
title: >-
  STT models trained on single-speaker data fail on overlapping multi-speaker
  audio
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - speech-to-text
  - whisper
  - diarization
  - overlap
  - generalization
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
    Most STT models are trained on single-speaker data and degrade sharply under
    overlap, speaker change, cross-talk, distant mics, and code-switching.
  standard: >-
    A core reason speaker-attributed transcription is hard is that the
    underlying STT models are trained almost entirely on single-speaker audio.
    The moment you apply them to real multi-speaker conversations — overlapping
    speech, speaker changes, interruptions, cross-talk, distant microphones,
    mid-sentence language switching — they fail. This is visible in the gap
    between headset and tabletop microphone scores on the same AMI meetings
    (11.4% vs ~26% WER). The practical consequence is that you can't just bolt a
    leaderboard-topping STT model onto conversational audio and expect
    leaderboard performance; the benchmark conditions that produced the headline
    number rarely match a real room. Architecture-wise, this is why diarization
    and transcription are treated as separate components that must be combined
    deliberately rather than assuming one model handles everything.
stance: >-
  Off-the-shelf speech-to-text generalizes poorly to real conversations because
  it was trained on clean single-speaker recordings.
related:
  - INS-260402-1F41
  - INS-260403-F9C7
  - INS-260404-98EE
  - INS-260410-699C
  - INS-260410-18CF
  - INS-260410-66C6
  - INS-260410-8B2C
  - INS-260605-8F5E
  - INS-260605-DDAB
  - INS-260605-B03B
---
A core reason speaker-attributed transcription is hard is that the underlying STT models are trained almost entirely on single-speaker audio. The moment you apply them to real multi-speaker conversations — overlapping speech, speaker changes, interruptions, cross-talk, distant microphones, mid-sentence language switching — they fail. This is visible in the gap between headset and tabletop microphone scores on the same AMI meetings (11.4% vs ~26% WER). The practical consequence is that you can't just bolt a leaderboard-topping STT model onto conversational audio and expect leaderboard performance; the benchmark conditions that produced the headline number rarely match a real room. Architecture-wise, this is why diarization and transcription are treated as separate components that must be combined deliberately rather than assuming one model handles everything.

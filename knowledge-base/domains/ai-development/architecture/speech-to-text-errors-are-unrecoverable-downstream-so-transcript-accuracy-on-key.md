---
id: INS-260605-B03B
domain: ai-development
topic: architecture
title: >-
  Speech-to-text errors are unrecoverable downstream, so transcript accuracy on
  key entities is non-negotiable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - voice-agents
  - speech-to-text
  - word-error-rate
  - error-propagation
sources:
  - type: youtube
    title: >-
      Engineering voice agents: Latency, quality, and scale — Rishabh Bhargava,
      Together AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=N7b1PJc7SFc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because the LLM and TTS blindly carry forward whatever the speech-to-text
    model produces, a misheard name or drug becomes an uncorrectable error —
    making entity-level transcript accuracy the foundation of the whole
    pipeline.
  standard: >-
    Speech-to-text is the agent's ears, and its quality is measured by word
    error rate — state-of-the-art models hit roughly 6% on open benchmarks. But
    the aggregate number hides the real risk: if the transcript gets a name, a
    drug, or another critical keyword wrong, there is no way to fix it
    downstream. The LLM will reason on the wrong text and the TTS will speak it;
    the error simply propagates. This makes STT a foundational, error-amplifying
    stage where accuracy on important entities matters far more than the
    headline WER.


    The second STT metric is time-to-complete-transcript — how many milliseconds
    after a speaker stops before the transcript is ready for the LLM (Together
    sees ~100ms at P90). Related hard problems are turn detection (knowing
    whether a pause means the user is done, so the agent doesn't talk over them)
    and multilingual coverage. An emerging architectural shift is from batch
    models like Whisper (trained on 30-second clips, requiring complex chunking)
    to streaming-native encoders that use short look-ahead windows and cache
    activations to transcribe incrementally.
stance: >-
  A mistake in the speech-to-text transcript cannot be fixed by the LLM or TTS,
  so word-error-rate on critical keywords must be minimized at the STT stage.
related:
  - INS-260605-ACCD
  - INS-260626-BA87
  - INS-260402-8E46
  - INS-260625-9C3D
  - INS-260403-4CF9
  - INS-260625-77F8
---
Speech-to-text is the agent's ears, and its quality is measured by word error rate — state-of-the-art models hit roughly 6% on open benchmarks. But the aggregate number hides the real risk: if the transcript gets a name, a drug, or another critical keyword wrong, there is no way to fix it downstream. The LLM will reason on the wrong text and the TTS will speak it; the error simply propagates. This makes STT a foundational, error-amplifying stage where accuracy on important entities matters far more than the headline WER.

The second STT metric is time-to-complete-transcript — how many milliseconds after a speaker stops before the transcript is ready for the LLM (Together sees ~100ms at P90). Related hard problems are turn detection (knowing whether a pause means the user is done, so the agent doesn't talk over them) and multilingual coverage. An emerging architectural shift is from batch models like Whisper (trained on 30-second clips, requiring complex chunking) to streaming-native encoders that use short look-ahead windows and cache activations to transcribe incrementally.

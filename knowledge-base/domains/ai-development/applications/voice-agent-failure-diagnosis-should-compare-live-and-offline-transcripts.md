---
id: INS-260619-D4F6
domain: ai-development
topic: applications
title: Voice-agent failure diagnosis should compare live and offline transcripts
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - voice-agents
  - asr
  - evals
  - observability
sources:
  - type: audio
    title: The St. Regis San Francisco 3
date_extracted: '2026-06-19'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For voice agents, compare the low-latency live transcript to a richer
    offline transcript, then use the mismatch as evidence in failure triage.
  standard: >-
    The AssemblyAI demo ingested 50 simulated production calls with real-time
    transcripts, event logs, and audio. It then re-transcribed each call offline
    with more context, summarized the call, scored it against a failure rubric,
    and synthesized a fleet-level diagnosis with deployment history.


    The important pattern is that real-time ASR output is not the only truth
    source. Offline transcription can exploit the full audio, speaker
    separation, and fewer latency constraints; disagreement between the live and
    offline transcript becomes a useful signal for diagnosing interruptions,
    dropped digits, missed turns, and endpointing regressions.
stance: >-
  A voice-agent quality loop can use offline retranscription as a diagnostic
  baseline against live transcripts because differences reveal real-time ASR,
  endpointing, or orchestration failures.
related:
  - INS-260322-191F
  - INS-260625-B985
  - INS-260605-D912
  - INS-260327-F4DB
  - INS-260605-D430
---
The AssemblyAI demo ingested 50 simulated production calls with real-time transcripts, event logs, and audio. It then re-transcribed each call offline with more context, summarized the call, scored it against a failure rubric, and synthesized a fleet-level diagnosis with deployment history.

The important pattern is that real-time ASR output is not the only truth source. Offline transcription can exploit the full audio, speaker separation, and fewer latency constraints; disagreement between the live and offline transcript becomes a useful signal for diagnosing interruptions, dropped digits, missed turns, and endpointing regressions.

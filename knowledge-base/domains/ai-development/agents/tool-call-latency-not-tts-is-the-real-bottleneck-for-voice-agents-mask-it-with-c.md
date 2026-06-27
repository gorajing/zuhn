---
id: INS-260605-1A2D
domain: ai-development
topic: agents
title: >-
  Tool-call latency, not TTS, is the real bottleneck for voice agents — mask it
  with conversational fillers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - voice-ai
  - agents
  - tool-calling
  - latency
  - ux
sources:
  - type: youtube
    title: 'Voice AI: when is the "Her" moment? — Neil Zeghidour, CEO, Gradium AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=P_RI1kCkRbo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Teams fight for 10–20ms in TTS while tool calls cost 500ms–4s and are
    unpredictable; split the LLM so it speaks naturally during the wait, then
    inserts the result back into the conversation.
  standard: >-
    Once a voice agent has to actually use a tool, the team is 'fighting for
    something that is not the most relevant anymore' — shaving milliseconds off
    TTS while an open-router tool call swings between 500ms and 4 seconds with
    high variance. The bottleneck has moved from synthesis to the tool, and that
    variance is what breaks the conversational feel. The practical pattern: the
    LLM splits into two threads — it fires the tool call, and while waiting it
    keeps the conversation going naturally (e.g., a travel agent saying
    something pleasant about the destination), then retrieves the result and
    weaves it back in. This trades raw speed for predictable, reliable pacing,
    and it requires models that are resilient to slow, complex tool calls rather
    than assuming instant returns.
stance: >-
  The dominant latency in production voice agents is the unpredictable tool
  call, and the fix is to keep talking naturally while the call resolves rather
  than to optimize the TTS further.
related:
  - INS-260514-F74B
  - INS-260626-475E
  - INS-260605-D0A0
  - INS-260605-2627
  - INS-260626-BC79
  - INS-260605-37DA
---
Once a voice agent has to actually use a tool, the team is 'fighting for something that is not the most relevant anymore' — shaving milliseconds off TTS while an open-router tool call swings between 500ms and 4 seconds with high variance. The bottleneck has moved from synthesis to the tool, and that variance is what breaks the conversational feel. The practical pattern: the LLM splits into two threads — it fires the tool call, and while waiting it keeps the conversation going naturally (e.g., a travel agent saying something pleasant about the destination), then retrieves the result and weaves it back in. This trades raw speed for predictable, reliable pacing, and it requires models that are resilient to slow, complex tool calls rather than assuming instant returns.

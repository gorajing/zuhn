---
id: INS-260605-2795
domain: ai-development
topic: agent-patterns
title: >-
  Implement agent interjection by re-reading the transcript async, not via tool
  calls
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - voice-agents
  - architecture
  - interruption
  - transcripts
sources:
  - type: youtube
    title: 'How to talk to statues — Joe Reeve, ElevenLabs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=u-rJwPPU3QA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Asked how an agent could know when to interject, Reeve proposed an async
    process that repeatedly asks the transcript 'do you have anything to add?'
    rather than wiring it as a tool call.
  standard: >-
    The product question was how a voice agent could signal 'I want to interrupt
    and tell you about this' with enough context to name the topic. Reeve's
    architectural instinct was to avoid framing this as a background tool call.
    Instead, run an asynchronous process that keeps re-reading the conversation
    transcript and asking 'do you have anything to add? what would you add?' on
    a loop — decoupling the interjection-decision from the main generation flow.


    He also surfaced a related, underexploited lever: agent internals are more
    editable than people assume. Because platforms expose timestamps for how far
    through the audio playback has reached, when a user interrupts mid-utterance
    you can rewrite the transcript to pretend the model never generated the
    unspoken tail — keeping the agent's memory consistent with what the human
    actually heard. Both ideas treat the transcript as a mutable,
    continuously-analyzed substrate rather than an immutable log, which is a
    useful mental model for building interruptible, proactive voice agents.
stance: >-
  An agent that decides when to interrupt or add to a conversation is better
  built as an asynchronous loop re-analyzing the running transcript than as a
  synchronous tool call.
related:
  - INS-260327-13B3
  - INS-260501-247C
  - INS-260410-1030
  - INS-260423-FF52
  - INS-260605-0819
---
The product question was how a voice agent could signal 'I want to interrupt and tell you about this' with enough context to name the topic. Reeve's architectural instinct was to avoid framing this as a background tool call. Instead, run an asynchronous process that keeps re-reading the conversation transcript and asking 'do you have anything to add? what would you add?' on a loop — decoupling the interjection-decision from the main generation flow.

He also surfaced a related, underexploited lever: agent internals are more editable than people assume. Because platforms expose timestamps for how far through the audio playback has reached, when a user interrupts mid-utterance you can rewrite the transcript to pretend the model never generated the unspoken tail — keeping the agent's memory consistent with what the human actually heard. Both ideas treat the transcript as a mutable, continuously-analyzed substrate rather than an immutable log, which is a useful mental model for building interruptible, proactive voice agents.

---
id: INS-260605-5D5E
domain: ai-development
topic: human-ai-relationship
title: 'Detect a failing agent by how it narrates, not by what it produces'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-supervision
  - intuition
  - failure-detection
  - reasoning-tokens
  - management
sources:
  - type: youtube
    title: >-
      Dark Factory: OpenClaw Ships Faster Than You Can Read the Diff — Vincent
      Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pmoDeA3RBZY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent that starts waffling, contradicting itself, or 'bullshitting' in
    its reasoning is signaling failure before its diff does — kill or park the
    session.
  standard: >-
    Koc describes a Matrix-like intuition where, after enough volume, he can
    'feel the reasoning tokens.' A session feels off not because of the code it
    emits but because of how it explains itself — it waffles, stops making
    sense, seems unsure what it's doing. He maps this directly onto managing
    people: if a report started downright bullshitting, you'd stop them. The
    actionable move is to treat the agent's narration as a leading indicator of
    run quality: when the explanation degrades, nuke the session and either hand
    that code to another maintainer or revisit it days later, rather than
    sinking more tokens into a run that has already lost the thread. This
    reframes oversight from output-checking (lagging) to narration-reading
    (leading), and the intuition itself is earned through high-volume 'token
    maxing.'
stance: >-
  You can catch a coding agent going off the rails earlier by reading its
  self-explanation for waffling than by waiting to inspect its output.
related:
  - INS-260321-2482
  - INS-260323-9D6E
  - INS-260605-D912
  - INS-260605-2A69
  - INS-260627-0BC1
  - INS-260625-029F
---
Koc describes a Matrix-like intuition where, after enough volume, he can 'feel the reasoning tokens.' A session feels off not because of the code it emits but because of how it explains itself — it waffles, stops making sense, seems unsure what it's doing. He maps this directly onto managing people: if a report started downright bullshitting, you'd stop them. The actionable move is to treat the agent's narration as a leading indicator of run quality: when the explanation degrades, nuke the session and either hand that code to another maintainer or revisit it days later, rather than sinking more tokens into a run that has already lost the thread. This reframes oversight from output-checking (lagging) to narration-reading (leading), and the intuition itself is earned through high-volume 'token maxing.'

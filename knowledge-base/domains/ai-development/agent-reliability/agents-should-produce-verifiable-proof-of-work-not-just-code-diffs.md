---
id: INS-260627-0E46
domain: ai-development
topic: agent-reliability
title: 'Agents should produce verifiable proof of work, not just code diffs'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - verification
  - agent-reliability
  - computer-use
  - browser-automation
  - multimodal
sources:
  - type: youtube
    title: 'Defying Gravity - Kevin Hou, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HN-F-OQe6j0'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Instead of showing a diff, Antigravity's agent drives a real browser and
    returns a screen recording of the feature working, giving both the human and
    the model verifiable, iterable evidence.
  standard: >-
    Hou splits the value of an agent-controlled browser into two: context
    retrieval (the agent inherits your authenticated Chrome session, so it can
    read Google Docs, GitHub dashboards, and bug trackers) and verification (it
    clicks, scrolls, runs JavaScript, and records the result). The key shift is
    from 'here is the code I changed' to 'here is a recording of the change
    working' — verifiable results over diffs. The blue-circle cursor recording
    is proof the agent's work actually runs, not just that it compiled.


    What makes this more than a demo gimmick is the closing of the loop: because
    the model is multimodal, it can ingest its own screenshots and recordings
    and iterate from them. Verification becomes part of the agent's own feedback
    cycle, not just a human-facing artifact. The transferable principle for
    agent builders: design agents to generate evidence in a modality the model
    itself can re-consume, so verification compounds into self-correction. This
    reframes 'trust' from a human gate into a capability the agent can partially
    close on its own.
stance: >-
  Agent output is more trustworthy and more iterable when it ships verifiable
  evidence (a screen recording of the working result) rather than a code diff
  alone.
related:
  - INS-260605-824F
  - INS-260410-85AD
  - INS-260625-E1AA
  - INS-260625-D5A7
  - INS-260627-6846
---
Hou splits the value of an agent-controlled browser into two: context retrieval (the agent inherits your authenticated Chrome session, so it can read Google Docs, GitHub dashboards, and bug trackers) and verification (it clicks, scrolls, runs JavaScript, and records the result). The key shift is from 'here is the code I changed' to 'here is a recording of the change working' — verifiable results over diffs. The blue-circle cursor recording is proof the agent's work actually runs, not just that it compiled.

What makes this more than a demo gimmick is the closing of the loop: because the model is multimodal, it can ingest its own screenshots and recordings and iterate from them. Verification becomes part of the agent's own feedback cycle, not just a human-facing artifact. The transferable principle for agent builders: design agents to generate evidence in a modality the model itself can re-consume, so verification compounds into self-correction. This reframes 'trust' from a human gate into a capability the agent can partially close on its own.

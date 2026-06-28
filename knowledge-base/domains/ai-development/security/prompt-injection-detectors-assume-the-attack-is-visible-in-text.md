---
id: INS-260628-278D
domain: ai-development
topic: security
title: Prompt injection detectors assume the attack is visible in text
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-injection
  - detectors
  - mcp
  - security
sources:
  - type: blog
    title: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP
    url: 'https://arxiv.org/html/2606.27027'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a detector only classifies visible tool text, threshold-obfuscated tool
    poisoning can make the malicious instruction absent at scan time.
  standard: >-
    The paper reports that plaintext tool poisoning baselines are readily
    flagged by zero-shot safety auditors, but ShareLock's tool descriptions are
    classified safe across the tested detectors because the adversarial payload
    is not present as natural language. The detector sees numeric-looking
    metadata and ordinary tool descriptions, not the reconstructed command.


    The broader lesson is that prompt-injection defense cannot rely only on
    semantic classification of the current string. For agent systems, scanners
    need provenance, tool-correlation, update-diff analysis, executable behavior
    monitoring, and policies that constrain what reconstructed or tool-returned
    content can cause the agent to do.
stance: >-
  Text-based prompt-injection scanners are structurally brittle when the
  malicious instruction is distributed and only becomes semantic after
  reconstruction.
related:
  - INS-260320-DDFE
  - INS-260409-45C3
  - INS-260412-4493
  - INS-260627-A0EE
  - INS-260627-1B54
  - INS-260627-9F3F
  - INS-260628-09BA
  - INS-260625-A7AD
---
The paper reports that plaintext tool poisoning baselines are readily flagged by zero-shot safety auditors, but ShareLock's tool descriptions are classified safe across the tested detectors because the adversarial payload is not present as natural language. The detector sees numeric-looking metadata and ordinary tool descriptions, not the reconstructed command.

The broader lesson is that prompt-injection defense cannot rely only on semantic classification of the current string. For agent systems, scanners need provenance, tool-correlation, update-diff analysis, executable behavior monitoring, and policies that constrain what reconstructed or tool-returned content can cause the agent to do.

---
id: INS-260605-124F
domain: ai-development
topic: agent-patterns
title: >-
  Agents earn trust on unknown protocols through closed-loop empirical
  confirmation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - verification
  - reverse-engineering
  - closed-loop
  - empiricism
sources:
  - type: youtube
    title: >-
      Reverse engineering a Viking VOIP phone protocol with Claude Code — Boris
      Starkov, Eleven Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=V-L0INGTEOg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Claude didn't just guess the checksum formula — it confirmed the recovered
    one-byte offset by feeding additional known data through it and checking the
    outputs.
  standard: >-
    The decisive move in the crack wasn't the hypothesis but the verification.
    Knowing the input data and the observed result for the TS command, Claude
    inferred the checksum was a simple one-byte additive offset — then validated
    that inference by running more values through it and confirming they
    matched. Starkov highlights this 'closed-loop iteration' as the thing that
    distinguished a real solution from a plausible guess. The transferable
    pattern: when an agent reverse-engineers any opaque system (a protocol, an
    API's hidden behavior, a data format), the deliverable is not the hypothesis
    but the hypothesis plus a self-administered test that would have failed if
    the hypothesis were wrong. Brute-forceable spaces — the one-byte checksum,
    the two-letter command set — make this empirical loop cheap, which is
    precisely why they fall.
stance: >-
  An agent's reverse-engineering result is trustworthy only when it confirms the
  hypothesis by running fresh values through the recovered algorithm.
related:
  - INS-260501-6A56
  - INS-260325-FDA9
  - INS-260505-5A06
  - INS-260423-FB98
  - INS-260625-C6F4
  - INS-260410-AA40
---
The decisive move in the crack wasn't the hypothesis but the verification. Knowing the input data and the observed result for the TS command, Claude inferred the checksum was a simple one-byte additive offset — then validated that inference by running more values through it and confirming they matched. Starkov highlights this 'closed-loop iteration' as the thing that distinguished a real solution from a plausible guess. The transferable pattern: when an agent reverse-engineers any opaque system (a protocol, an API's hidden behavior, a data format), the deliverable is not the hypothesis but the hypothesis plus a self-administered test that would have failed if the hypothesis were wrong. Brute-forceable spaces — the one-byte checksum, the two-letter command set — make this empirical loop cheap, which is precisely why they fall.

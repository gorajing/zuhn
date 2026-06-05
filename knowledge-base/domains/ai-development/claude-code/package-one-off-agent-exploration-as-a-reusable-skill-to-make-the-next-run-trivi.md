---
id: INS-260605-997E
domain: ai-development
topic: claude-code
title: >-
  Package one-off agent exploration as a reusable skill to make the next run
  trivial
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - claude-code
  - skills
  - knowledge-capture
  - reusability
  - open-source
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
    After cracking the protocol, Starkov factory-reset the phone, encoded the
    full procedure as a Claude Code skill, and open-sourced it so anyone can
    program a Viking phone without the multi-day reverse-engineering or any
    Windows VM.
  standard: >-
    The multi-day effort produced two artifacts, not one: a working demo and a
    reusable skill. Once the protocol was understood, the elaborate scaffolding
    — the Windows VM, the proxy, the brute-forcing — became unnecessary; Starkov
    could program the phone directly. He captured that distilled knowledge as a
    skill and open-sourced it, collapsing the next person's cost from days of
    discovery to handing the skill to Claude Code. This is the compounding move
    in agentic work: the expensive exploration phase is a one-time tax, and the
    right response is to externalize the result into a portable, executable
    artifact rather than leaving it locked in a chat transcript. It also
    gestures at a community flywheel — every cracked device becomes a skill that
    lowers the barrier for the next person and the next class of hardware.
stance: >-
  Hard-won reverse-engineering knowledge should be crystallized into a portable
  skill so others bypass the discovery cost entirely.
related:
  - INS-260605-237C
  - INS-260605-4CED
  - INS-260325-BB13
  - INS-260412-846C
  - INS-260330-B047
---
The multi-day effort produced two artifacts, not one: a working demo and a reusable skill. Once the protocol was understood, the elaborate scaffolding — the Windows VM, the proxy, the brute-forcing — became unnecessary; Starkov could program the phone directly. He captured that distilled knowledge as a skill and open-sourced it, collapsing the next person's cost from days of discovery to handing the skill to Claude Code. This is the compounding move in agentic work: the expensive exploration phase is a one-time tax, and the right response is to externalize the result into a portable, executable artifact rather than leaving it locked in a chat transcript. It also gestures at a community flywheel — every cracked device becomes a skill that lowers the barrier for the next person and the next class of hardware.

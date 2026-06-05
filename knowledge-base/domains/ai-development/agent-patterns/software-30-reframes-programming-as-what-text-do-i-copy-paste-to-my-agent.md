---
id: INS-260501-C59A
domain: ai-development
topic: agent-patterns
title: Software 3.0 reframes programming as 'what text do I copy-paste to my agent?'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - software-3.0
  - agentic-engineering
  - prompting
  - paradigm-shift
sources:
  - type: youtube
    title: 'Andrej Karpathy: From Vibe Coding to Agentic Engineering'
    author: Sequoia Capital
    url: 'https://youtu.be/96jN2OCOfLs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Software 3.0 = the agent is the interpreter; the context window is your
    lever; precise instructions become a prompt.
  standard: >-
    Karpathy's Software 1.0/2.0/3.0 framing: 1.0 is explicit code, 2.0 is
    learned weights from training, 3.0 is prompting an
    LLM-as-programmable-computer. The canonical example is OpenClaw
    installation: the 1.0 version is a shell script that ballons up trying to
    handle every platform; the 3.0 version is a piece of text you copy-paste to
    your agent, which then handles environment detection, debugging in the loop,
    and intelligent setup.


    The practical reframe for builders: stop asking 'what code should I write?'
    and start asking 'what is the piece of text to copy-paste to my agent?' The
    context window is the lever; the LLM is the interpreter performing
    computation in the digital information space. This is why agent-readable
    docs and copy-pasteable installation flows are not nice-to-haves — they are
    the new programming interface.
stance: >-
  The unit of programming has shifted from precise instructions to declarative
  prompts — the agent supplies the intelligence to debug and adapt to local
  environment in the loop.
related:
  - INS-260605-6591
  - INS-260605-9276
  - PRI-260406-1AC6
  - INS-260410-85AD
  - INS-260514-5914
---
Karpathy's Software 1.0/2.0/3.0 framing: 1.0 is explicit code, 2.0 is learned weights from training, 3.0 is prompting an LLM-as-programmable-computer. The canonical example is OpenClaw installation: the 1.0 version is a shell script that ballons up trying to handle every platform; the 3.0 version is a piece of text you copy-paste to your agent, which then handles environment detection, debugging in the loop, and intelligent setup.

The practical reframe for builders: stop asking 'what code should I write?' and start asking 'what is the piece of text to copy-paste to my agent?' The context window is the lever; the LLM is the interpreter performing computation in the digital information space. This is why agent-readable docs and copy-pasteable installation flows are not nice-to-haves — they are the new programming interface.

---
id: INS-260327-5EEA
domain: ai-development
topic: ai-automation
title: Agent improvement loops require observability into inter-agent communication
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-observability
  - inter-agent-communication
  - feedback-loops
  - agent-improvement
sources:
  - type: youtube
    title: '오픈클로를 통해 회사의 모든 워크플로우를 100% 바꿔버린 AI 네이티브 컴퍼니 (GPTers 김태현, 송다혜님)'
    author: 빌더 조쉬 Builder Josh
    url: 'https://youtu.be/vatxcwaxuwg'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Improving multi-agent systems requires observability into inter-agent
    conversations -- GPTers built a dashboard to view session-send exchanges
    between agents to understand how to improve their collaboration.
  standard: >-
    When GPTers' agents communicate via Telegram, the thought processes and
    internal discussions aren't visible. The team built a separate dashboard to
    intercept session-send messages (the internal communication channel between
    agents) so they could observe how Poya directs Ppojjak, how feedback is
    structured, and where communication breaks down.


    This observability enabled a key decision: whether to organize agents by
    expertise (marketing expert, design expert, development expert) or by
    hierarchy (senior-junior with clear reporting lines). By comparing the
    communication patterns, they chose the hierarchical model. The broader
    principle: you cannot manage what you cannot observe, and multi-agent
    systems have communication dynamics that are invisible without deliberate
    instrumentation. The daily work log that Ppojjak writes, reviewed by Poya,
    further creates a natural improvement loop that compounds over time.
stance: >-
  You cannot improve multi-agent systems without visibility into how agents
  communicate with each other -- building dashboards to observe inter-agent
  conversations is essential for iterating on agent quality and organizational
  design.
related:
  - PRI-260328-1ED1
  - INS-260327-13B3
  - INS-260327-FE24
  - INS-260322-CCAA
  - INS-260326-9402
---
When GPTers' agents communicate via Telegram, the thought processes and internal discussions aren't visible. The team built a separate dashboard to intercept session-send messages (the internal communication channel between agents) so they could observe how Poya directs Ppojjak, how feedback is structured, and where communication breaks down.

This observability enabled a key decision: whether to organize agents by expertise (marketing expert, design expert, development expert) or by hierarchy (senior-junior with clear reporting lines). By comparing the communication patterns, they chose the hierarchical model. The broader principle: you cannot manage what you cannot observe, and multi-agent systems have communication dynamics that are invisible without deliberate instrumentation. The daily work log that Ppojjak writes, reviewed by Poya, further creates a natural improvement loop that compounds over time.

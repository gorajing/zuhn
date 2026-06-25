---
id: INS-260625-2ED0
domain: ai-development
topic: agents
title: The lethal trifecta defines when prompt injection becomes a real risk
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-injection
  - lethal-trifecta
  - agent-security
  - threat-modeling
  - data-exfiltration
sources:
  - type: youtube
    title: >-
      AI Security After Codex and Claude Code — Zico Kolter & Matt Fredrikson,
      Gray Swan
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=j8BAficRjEc'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Risk from prompt injection requires three things together — untrusted input,
    access to private data, and the ability to act/exfiltrate; remove any one
    and the risk collapses.
  standard: >-
    Drawing on Simon Willison's framing, the guests decompose prompt-injection
    risk into three necessary ingredients: (1) the agent ingests external data
    from untrusted sources, (2) it has access to private or sensitive internal
    information, and (3) it can take consequential action — send data out, make
    tool calls, write to systems. An agent that only generates tokens ('just
    spewing out reports') is harmless no matter how injected; an agent with no
    untrusted input can't be hijacked. The danger is the conjunction.


    This is a practical threat-modeling tool: when designing an agent, audit
    which of the three legs are present, because cutting any single leg
    neutralizes the attack class. It also explains why computer-use and browser
    agents are the most dangerous deployments — they tend to have all three legs
    at once. The framing reframes security work from 'make the model perfectly
    robust' (likely impossible) to 'architect the system so the trifecta never
    fully closes,' analogous to how we keep using software productively despite
    the permanent existence of software vulnerabilities.
stance: >-
  Prompt injection only becomes a genuine threat when an agent can
  simultaneously ingest untrusted data, access private information, and
  exfiltrate it.
related:
  - INS-260410-0A28
  - INS-260423-1C4D
  - INS-260327-7349
  - INS-260327-7F32
  - INS-260403-2FAE
---
Drawing on Simon Willison's framing, the guests decompose prompt-injection risk into three necessary ingredients: (1) the agent ingests external data from untrusted sources, (2) it has access to private or sensitive internal information, and (3) it can take consequential action — send data out, make tool calls, write to systems. An agent that only generates tokens ('just spewing out reports') is harmless no matter how injected; an agent with no untrusted input can't be hijacked. The danger is the conjunction.

This is a practical threat-modeling tool: when designing an agent, audit which of the three legs are present, because cutting any single leg neutralizes the attack class. It also explains why computer-use and browser agents are the most dangerous deployments — they tend to have all three legs at once. The framing reframes security work from 'make the model perfectly robust' (likely impossible) to 'architect the system so the trifecta never fully closes,' analogous to how we keep using software productively despite the permanent existence of software vulnerabilities.

---
id: INS-260627-08FA
domain: ai-development
topic: ai-security
title: Attacker intent is not the same as successful agent compromise
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - threat-modeling
  - agent-safety
  - incident-response
  - evaluation
sources:
  - type: blog
    title: >-
      Fooling AI Agents: Web-Based Indirect Prompt Injection Observed in the
      Wild
    author: Beliz Kaleli
    url: 'https://unit42.paloaltonetworks.com/ai-agent-prompt-injection/'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agent security evaluation should distinguish malicious prompts discovered on
    pages from confirmed agent actions caused by those prompts.
  standard: >-
    Unit 42's taxonomy grades web-based IDPI by attacker intent, not by verified
    successful compromise, because defensive visibility into execution is
    limited. This distinction matters for Zuhn's contradiction scout: a hidden
    prompt asking an agent to buy shoes, delete data, leak contacts, or approve
    a scam proves attacker interest and payload diversity; it does not by itself
    prove deployed agents are executing those actions. Production agent risk
    tracking should therefore separate exposure, attempted instruction, model
    compliance, tool permission, and completed side effect.
  deep: >-
    Belief challenged: any reasoning that collapses prompt presence into
    real-world harm. Why the counterevidence is strong: the source's own
    methodology uses intent as a proxy because execution proof is hard.
    Confidence movement: add a measurement caveat to existing high-confidence
    agent-risk principles.
subtopic: threat-modeling
stance: >-
  Unit 42 classifies many IDPI samples by attempted intent because defenders
  often lack visibility into whether the payload actually succeeded against a
  deployed agent.
related:
  - INS-260605-310E
  - INS-260625-386B
  - INS-260625-B296
  - INS-260627-1CF9
  - INS-260627-B7F7
  - INS-260627-69F9
  - INS-260627-22EC
---
Unit 42's taxonomy grades web-based IDPI by attacker intent, not by verified successful compromise, because defensive visibility into execution is limited. This distinction matters for Zuhn's contradiction scout: a hidden prompt asking an agent to buy shoes, delete data, leak contacts, or approve a scam proves attacker interest and payload diversity; it does not by itself prove deployed agents are executing those actions. Production agent risk tracking should therefore separate exposure, attempted instruction, model compliance, tool permission, and completed side effect.

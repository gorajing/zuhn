---
id: INS-260327-7299
domain: ai-development
topic: ai-automation
title: The bring-your-own-bot paradigm enables model-agnostic agent orchestration
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - model-agnostic
  - agent-orchestration
  - multi-model
  - paperclip
sources:
  - type: youtube
    title: 'Paperclip: Hire AI Agents Like Employees (Live Demo)'
    author: Greg Isenberg
    url: 'https://youtu.be/C3-4llQYT8o'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Paperclip's bring-your-own-bot approach reflects the reality that different
    AI models have distinct strengths and personalities, making model-agnostic
    orchestration the optimal architecture.
  standard: >-
    Paperclip supports mixing different AI models across agent roles: a frontier
    model like Claude Opus as CEO for strategic thinking, a cheaper model via
    Open Router for routine tasks, and potentially free models for simple work.
    This reflects what practitioners have discovered -- different models
    genuinely have different 'personalities' and excel at different types of
    work.


    The strategic implication is that the orchestration layer (how agents are
    organized, communicate, and hand off work) is more durable than any specific
    model integration. As model rankings shift constantly, the system that can
    swap models in and out while maintaining organizational coherence will be
    most resilient. This is why Paperclip's model-agnostic design is
    architecturally significant.
stance: >-
  Agent orchestration platforms that are model-agnostic (letting users mix
  Claude, GPT, Codex, and open-source models for different roles) will
  outperform locked-in single-provider solutions because different models have
  genuinely different personalities and strengths.
related:
  - INS-260325-8F49
  - INS-260327-76B2
  - PRI-260328-1ED1
  - INS-260326-2410
  - INS-260329-E208
  - INS-260327-4E8E
  - INS-260402-1F41
evidence:
  - id: INS-260402-1F41
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Paperclip supports mixing different AI models across agent roles: a frontier model like Claude Opus as CEO for strategic thinking, a cheaper model via Open Router for routine tasks, and potentially free models for simple work. This reflects what practitioners have discovered -- different models genuinely have different 'personalities' and excel at different types of work.

The strategic implication is that the orchestration layer (how agents are organized, communicate, and hand off work) is more durable than any specific model integration. As model rankings shift constantly, the system that can swap models in and out while maintaining organizational coherence will be most resilient. This is why Paperclip's model-agnostic design is architecturally significant.

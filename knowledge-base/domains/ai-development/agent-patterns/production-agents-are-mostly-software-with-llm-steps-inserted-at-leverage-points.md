---
id: INS-260605-8D12
domain: ai-development
topic: agent-patterns
title: >-
  Production agents are mostly software with LLM steps inserted at leverage
  points
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - production-agents
  - deterministic-software
  - llm-steps
  - agent-reliability
sources:
  - type: blog
    title: >-
      GitHub - humanlayer/12-factor-agents: What are the principles we can use
      to build LLM-powered software that is actually good enough to put in the
      hands of production customers?
    url: 'https://github.com/humanlayer/12-factor-agents'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'The reliable agent is software first, LLM loop second.'
  standard: >-
    HumanLayer reports that many production systems marketed as agents are not
    very agentic; they are mostly deterministic code with LLM steps placed where
    language understanding or judgment matters. This reframes agents away from
    'prompt plus tools, loop until done' and toward ordinary software
    architecture with semantic components.
  deep: >-
    For knowledge-work systems, this is a useful corrective to agent maximalism.
    The agent loop should not replace durable state, validation, retries,
    permissions, or observability. It should sit inside a software harness that
    narrows where model judgment is needed and makes outcomes inspectable.
stance: >-
  Customer-facing agents become reliable when they are built as mostly
  deterministic software with LLM calls at high-leverage semantic steps, not as
  unconstrained tool loops.
related:
  - INS-260410-9D86
  - INS-260605-7CEB
  - INS-260327-A9D5
  - INS-260605-E693
  - INS-260409-0DB0
---
HumanLayer reports that many production systems marketed as agents are not very agentic; they are mostly deterministic code with LLM steps placed where language understanding or judgment matters. This reframes agents away from 'prompt plus tools, loop until done' and toward ordinary software architecture with semantic components.

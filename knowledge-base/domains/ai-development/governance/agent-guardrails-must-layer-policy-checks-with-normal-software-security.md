---
id: INS-260605-A46E
domain: ai-development
topic: governance
title: Agent guardrails must layer policy checks with normal software security
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - guardrails
  - security
  - authorization
  - risk-rating
  - human-in-the-loop
sources:
  - type: blog
    title: A practical guide to building agents
    url: >-
      https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'Agent guardrails are defense-in-depth, not the security model.'
  standard: >-
    OpenAI recommends combining LLM-based, rules-based, moderation, PII,
    relevance, jailbreak, and brand-safety guardrails while also keeping
    authentication, authorization, and access controls in place. It also
    suggests rating tools by risk and pausing or escalating high-risk functions.
  deep: >-
    The practical implication is that guardrails should be scoped by failure
    mode. Regex filters, classifiers, and LLM judges can reduce risk, but
    irreversible or sensitive actions still need permissioning, logging, and
    sometimes human approval. A high-risk tool should not become safe merely
    because an agent promised to be careful.
stance: >-
  Guardrails should be treated as layered defenses around agents, not
  replacements for authentication, authorization, access control, and standard
  security engineering.
related:
  - INS-260321-86F1
  - INS-260327-DCAF
  - INS-260605-9402
  - INS-260605-80DC
  - INS-260627-79E3
---
OpenAI recommends combining LLM-based, rules-based, moderation, PII, relevance, jailbreak, and brand-safety guardrails while also keeping authentication, authorization, and access controls in place. It also suggests rating tools by risk and pausing or escalating high-risk functions.

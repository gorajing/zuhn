---
id: INS-260605-24AC
domain: ai-development
topic: agent-patterns
title: Use agents only when deterministic automation breaks down
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-fit
  - workflow-automation
  - deterministic-systems
  - use-case-selection
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
  one_line: 'Build agents for ambiguity and judgment, not for every automation problem.'
  standard: >-
    OpenAI's guide draws a bright line between conventional automation and
    agents: agents use an LLM to control workflow execution and recover from
    intermediate failures. The most suitable workflows are ones where
    conventional rules become unmaintainable, context-sensitive decisions
    matter, or the system must interpret unstructured data. For straightforward,
    stable workflows, the guide explicitly warns that deterministic solutions
    may be sufficient.
  deep: >-
    For Zuhn-style engineering, this suggests an agentic workflow should earn
    its autonomy by encountering ambiguity, not by default. A good first-pass
    design test is: can the workflow be expressed as a reliable script,
    checklist, or finite-state machine? If yes, keep it deterministic and use an
    LLM only at semantic decision points. If no, build an agent loop with tools,
    exit conditions, and verification.
stance: >-
  Agents are worth building when workflows require nuanced judgment,
  brittle-rule replacement, or unstructured-data interpretation; otherwise
  deterministic automation is usually the better first choice.
related:
  - INS-260405-F26B
  - INS-260605-F828
  - INS-260605-27CC
  - INS-260410-9F17
  - INS-260405-6A6F
---
OpenAI's guide draws a bright line between conventional automation and agents: agents use an LLM to control workflow execution and recover from intermediate failures. The most suitable workflows are ones where conventional rules become unmaintainable, context-sensitive decisions matter, or the system must interpret unstructured data. For straightforward, stable workflows, the guide explicitly warns that deterministic solutions may be sufficient.

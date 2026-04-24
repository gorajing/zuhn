---
id: INS-260423-85B3
domain: ai-development
topic: agents
title: >-
  Model-agnostic agent frameworks with LiteLLM abstraction beat
  framework-specific model tying
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - model-agnostic
  - litellm
  - agent-frameworks
  - portability
sources:
  - type: youtube
    title: 'Gemma 4 production stack: Model Armor, ADK Agents, Tracing'
    author: Google Cloud Tech
    url: 'https://youtu.be/7wENq-LMHgQ'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Google ADK with LiteLLM: the Guardian agent runs on Gemma 4 today, can swap
    to any LiteLLM-supported model tomorrow, because the agent layer does not
    encode Gemini-specific assumptions.
  standard: >-
    Agent frameworks fall on a spectrum from model-tied (LangChain circa 2023
    with OpenAI-specific assumptions) to model-agnostic (ADK with LiteLLM, any
    framework that treats the model as an injectable provider). The lock-in cost
    of model-tied frameworks compounds: when you switch models (cost,
    capability, availability, geopolitical), you rewrite agent logic. With
    model-agnostic frameworks you swap one import. Over a 2-3 year system
    lifespan, model-agnostic frameworks pay for themselves the first time a
    model gets deprecated, a new model outperforms on your workload, or a
    jurisdiction requires local models. The practical principle for new agent
    projects in 2026: assume you will switch model families at least once during
    the project lifetime, and pick a framework that makes that switch cheap.
    Framework choice is an insurance decision, not a capability decision.
stance: >-
  Agent frameworks that support model-agnostic operation through abstraction
  libraries like LiteLLM produce more portable deployments than frameworks that
  tie agent logic to a specific model family; the lock-in cost compounds as
  models evolve
related:
  - INS-260410-2307
  - INS-260410-09B4
  - INS-260410-B0D6
  - INS-260410-B3C4
  - INS-260322-D8C3
  - INS-260327-BF89
  - INS-260325-BC2A
  - INS-260424-4111
---
Agent frameworks fall on a spectrum from model-tied (LangChain circa 2023 with OpenAI-specific assumptions) to model-agnostic (ADK with LiteLLM, any framework that treats the model as an injectable provider). The lock-in cost of model-tied frameworks compounds: when you switch models (cost, capability, availability, geopolitical), you rewrite agent logic. With model-agnostic frameworks you swap one import. Over a 2-3 year system lifespan, model-agnostic frameworks pay for themselves the first time a model gets deprecated, a new model outperforms on your workload, or a jurisdiction requires local models. The practical principle for new agent projects in 2026: assume you will switch model families at least once during the project lifetime, and pick a framework that makes that switch cheap. Framework choice is an insurance decision, not a capability decision.

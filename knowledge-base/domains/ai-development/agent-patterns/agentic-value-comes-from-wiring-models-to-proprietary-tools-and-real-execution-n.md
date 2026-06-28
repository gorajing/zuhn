---
id: INS-260627-FAEC
domain: ai-development
topic: agent-patterns
title: >-
  Agentic value comes from wiring models to proprietary tools and real
  execution, not model knowledge
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - moats
  - tool-use
  - code-execution
  - proprietary-data
  - hpc
sources:
  - type: youtube
    title: "Government Agents: AI Agents Meet Tough Regulations —\_Mark Myshatyn, Los Alamos National Lab"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TnSGx36Ly0Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The Los Alamos fusion-capsule agent is powerful because it executes 50–60
    years of validated physics code on HPC, not because the LLM is smart — the
    shift is from 'what a model knows' to 'what we can let a model know.'
  standard: >-
    Myshatyn frames the breakthrough at Los Alamos as moving 'from not just what
    a model knows, but what we can let a model know.' Their ICF fusion-capsule
    agent reads tangential papers, forms a hypothesis, generates code, and then
    actually runs that code as thermodynamic/hydrodynamic simulations on their
    high-performance computing assets. The agent isn't 'just an LLM' — it's a
    thin reasoning layer wrapped around decades of proprietary, validated
    scientific tooling and petabytes of data that 'has never seen the internet,
    will never see the internet.'


    The generalizable principle: in a world where everyone has access to the
    same frontier models, defensible agentic value lives in the surrounding
    execution loop — proprietary datasets, domain-specific simulators and tools,
    and the ability to run and verify real computations rather than emit
    plausible text. A generic chatbot 'spits back a bunch of code'; a moated
    agent executes that code against ground-truth systems and feeds results back
    into the loop.


    For builders, this reframes where to invest. Rather than chasing marginal
    gains from better prompting or model selection, the leverage is in
    instrumenting your domain's real tools and data so an agent can act and
    verify inside them. The model is increasingly a commodity; the wiring to
    proprietary execution is the asset.
stance: >-
  An AI agent's durable value comes from connecting it to proprietary data,
  validated tools, and real execution environments — not from what the base
  model already knows.
related:
  - INS-260409-D66D
  - INS-260530-D34F
  - INS-260626-5037
  - INS-260627-C258
  - INS-260409-2CE9
  - INS-260413-7816
---
Myshatyn frames the breakthrough at Los Alamos as moving 'from not just what a model knows, but what we can let a model know.' Their ICF fusion-capsule agent reads tangential papers, forms a hypothesis, generates code, and then actually runs that code as thermodynamic/hydrodynamic simulations on their high-performance computing assets. The agent isn't 'just an LLM' — it's a thin reasoning layer wrapped around decades of proprietary, validated scientific tooling and petabytes of data that 'has never seen the internet, will never see the internet.'

The generalizable principle: in a world where everyone has access to the same frontier models, defensible agentic value lives in the surrounding execution loop — proprietary datasets, domain-specific simulators and tools, and the ability to run and verify real computations rather than emit plausible text. A generic chatbot 'spits back a bunch of code'; a moated agent executes that code against ground-truth systems and feeds results back into the loop.

For builders, this reframes where to invest. Rather than chasing marginal gains from better prompting or model selection, the leverage is in instrumenting your domain's real tools and data so an agent can act and verify inside them. The model is increasingly a commodity; the wiring to proprietary execution is the asset.

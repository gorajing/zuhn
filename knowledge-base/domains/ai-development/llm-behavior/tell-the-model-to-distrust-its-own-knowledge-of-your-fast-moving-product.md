---
id: INS-260625-F573
domain: ai-development
topic: llm-behavior
title: Tell the model to distrust its own knowledge of your fast-moving product
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - stale-knowledge
  - training-cutoff
  - primary-sources
  - prompting
  - hallucination
sources:
  - type: youtube
    title: >-
      Why Can't Anyone Answer Questions About the Business? — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iUWwcG-C8OU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because models train on outdated snapshots and WorkOS changes fast, Studio's
    prompt tells the LLM to distrust what it 'knows' about WorkOS and consult
    the live docs.
  standard: >-
    A model's training data is a frozen snapshot, but a live product is a moving
    target — so the model's confident 'knowledge' of your own product is often
    quietly wrong. WorkOS handles this at the prompt layer: 'we tell the LLM to
    specifically distrust knowledge around our product... go for primary
    sources, look up data in our docs.' The general principle: anywhere the
    ground truth changes faster than the model's training cycle, treat the
    model's parametric memory as a liability rather than an asset and route it
    to authoritative, current sources. This is a cheap, high-leverage
    instruction that prevents a whole class of plausible-sounding stale answers,
    and it applies far beyond product docs — to APIs, schemas, pricing, org
    structure, and any internal fact that drifts. It pairs naturally with
    just-in-time context injection: rather than hoping the model remembers, you
    supply the current truth at the moment it's needed and tell it to trust that
    over itself.
stance: >-
  For fast-changing internal products, the agent should be explicitly instructed
  to distrust its training knowledge and look up primary sources instead.
related:
  - INS-260403-F932
  - INS-260330-4AD5
  - INS-260322-C0D3
  - INS-260410-4CE7
  - INS-260605-44E5
  - INS-260605-1CEB
  - INS-260625-3768
  - INS-260605-D37A
  - INS-260423-85B3
---
A model's training data is a frozen snapshot, but a live product is a moving target — so the model's confident 'knowledge' of your own product is often quietly wrong. WorkOS handles this at the prompt layer: 'we tell the LLM to specifically distrust knowledge around our product... go for primary sources, look up data in our docs.' The general principle: anywhere the ground truth changes faster than the model's training cycle, treat the model's parametric memory as a liability rather than an asset and route it to authoritative, current sources. This is a cheap, high-leverage instruction that prevents a whole class of plausible-sounding stale answers, and it applies far beyond product docs — to APIs, schemas, pricing, org structure, and any internal fact that drifts. It pairs naturally with just-in-time context injection: rather than hoping the model remembers, you supply the current truth at the moment it's needed and tell it to trust that over itself.

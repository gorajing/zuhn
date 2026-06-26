---
id: INS-260605-D0A0
domain: ai-development
topic: system-building
title: Strict tool-specific constrained decoding pays off most on the smallest models
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - constrained-decoding
  - tool-calling
  - edge-ai
  - reliability
  - guardrails
sources:
  - type: youtube
    title: >-
      TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM — Cormac Brick,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BKWpYIWvAo4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Constrain tool-call decoding to the specific finite tool the model is
    supposed to call — the smaller the model, the larger the reliability win.
  standard: >-
    Because an edge runtime knows there is a finite, known set of tools the
    model may call, it can apply constrained decoding that is stronger than
    generic JSON-schema constraints — narrowing output to the particular tool
    expected at that step. Google applies this only when generating a tool call,
    not during free text, and reports it provides 'stronger guardrails' that
    raise quality enough to be production-useful.


    The key strategic nuance is that the value of strict constrained decoding is
    inversely proportional to model size. For a 2B model the margin is large and
    the technique is 'very helpful'; for a 10B+ model the same strict
    constraints become 'less essential' because the larger model already calls
    tools reliably. This means constrained decoding is a lever you should reach
    for hardest exactly where you have the least model capability to spare — the
    edge — and can relax as you move up the parameter curve.
stance: >-
  Constraining decoding to the exact tool being called improves reliability
  dramatically for tiny models but offers diminishing returns as model
  capability grows.
related:
  - INS-260605-8E69
  - INS-260626-485E
  - INS-260625-3EE6
  - INS-260605-0312
  - INS-260625-26FE
  - INS-260605-0819
  - INS-260605-1A2D
  - INS-260605-92FF
  - INS-260624-B6EA
  - INS-260625-86CF
---
Because an edge runtime knows there is a finite, known set of tools the model may call, it can apply constrained decoding that is stronger than generic JSON-schema constraints — narrowing output to the particular tool expected at that step. Google applies this only when generating a tool call, not during free text, and reports it provides 'stronger guardrails' that raise quality enough to be production-useful.

The key strategic nuance is that the value of strict constrained decoding is inversely proportional to model size. For a 2B model the margin is large and the technique is 'very helpful'; for a 10B+ model the same strict constraints become 'less essential' because the larger model already calls tools reliably. This means constrained decoding is a lever you should reach for hardest exactly where you have the least model capability to spare — the edge — and can relax as you move up the parameter curve.

---
id: INS-260619-F1E3
domain: automation
topic: self-improving-systems
title: Production agents can become bug reporters for their own platform
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - feedback-loops
  - observability
  - self-healing
sources:
  - type: audio
    title: The St. Regis San Francisco 2
date_extracted: '2026-06-19'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give agents a first-class path to report bugs and feature gaps, then rank
    those reports across users to drive product improvement.
  standard: >-
    The talk proposed giving every agent an MCP-style tool to report bugs or
    feature requests, creating a Sentry-like issue stream ranked by how many
    customer agents encountered the problem. This turns production agents from
    opaque workers into sensors for product quality.


    The self-healing extension is another agent that reads the ranked backlog,
    proposes fixes, runs checks, and escalates only cases requiring human
    judgment. The hard part is reliability, but the loop shape is durable:
    observe in production, aggregate, prioritize, fix, verify.
stance: >-
  A deployed agent fleet should expose a structured bug and feature-reporting
  tool because agents observe production failures at the exact point where users
  experience them.
related:
  - INS-260330-83D5
  - INS-260405-6A0C
  - INS-260403-96BC
  - INS-260522-C5C2
  - INS-260605-CEB5
  - INS-260605-C726
  - INS-260605-EA4B
  - INS-260605-4B95
  - INS-260624-6753
  - INS-260605-27CC
---
The talk proposed giving every agent an MCP-style tool to report bugs or feature requests, creating a Sentry-like issue stream ranked by how many customer agents encountered the problem. This turns production agents from opaque workers into sensors for product quality.

The self-healing extension is another agent that reads the ranked backlog, proposes fixes, runs checks, and escalates only cases requiring human judgment. The hard part is reliability, but the loop shape is durable: observe in production, aggregate, prioritize, fix, verify.

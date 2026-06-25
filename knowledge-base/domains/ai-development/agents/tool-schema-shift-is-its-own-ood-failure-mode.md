---
id: INS-260625-FACB
domain: ai-development
topic: agents
title: Tool-schema shift is its own OOD failure mode
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - ood-evaluation
  - agent-evaluation
  - schema-drift
sources:
  - type: blog
    title: The Interplay of Harness Design and Post-Training in LLM Agents
    url: 'https://arxiv.org/html/2606.25447'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Changing tool names, parameters, or grouping can be as consequential as
    changing task inputs.
  standard: >-
    The benchmark distinguishes task shift from tool environment shift. Tool
    environment shift changes invocation protocols while preserving
    functionality, such as moving from Go(receptacle=...) to
    NavigateTo(destination=...) or a grouped ReceptacleControl(action=...,
    target=...) schema.


    This matters for real agents because APIs, MCP tools, CLI flags, and product
    surfaces evolve. Regression suites should include tool-schema drift cases
    where the intended action is semantically stable but the valid call surface
    changes.
stance: >-
  Agent evaluation should test changes to the action interface itself, because
  semantically equivalent tool-schema updates can break agents that look
  competent in-distribution.
related:
  - INS-260410-60C8
  - INS-260410-EE5C
  - INS-260605-52E4
  - INS-260321-A56C
  - INS-260602-EA48
  - INS-260605-0819
---
The benchmark distinguishes task shift from tool environment shift. Tool environment shift changes invocation protocols while preserving functionality, such as moving from Go(receptacle=...) to NavigateTo(destination=...) or a grouped ReceptacleControl(action=..., target=...) schema.

This matters for real agents because APIs, MCP tools, CLI flags, and product surfaces evolve. Regression suites should include tool-schema drift cases where the intended action is semantically stable but the valid call surface changes.

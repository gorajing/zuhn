---
id: INS-260605-BAB5
domain: ai-development
topic: agent-patterns
title: 'Skills beat MCP-alone because the bottleneck is guidance, not tools or context'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - mcp
  - agent-guidance
  - supabase
  - tooling
sources:
  - type: youtube
    title: >-
      Combine Skills and MCP to Close the Context Gap — Pedro Rodrigues,
      Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JT3OzDKrucU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP gives agents the tools to act; skills give them the knowledge to act
    correctly, and the second is the actual bottleneck.
  standard: >-
    Supabase ran the same prompt (create a SQL view over an RLS-enabled table)
    under three conditions: baseline, MCP-only, and MCP+skill. The MCP-only
    agent silently bypassed row-level security by omitting
    `security_invoker=true`, exposing data; the MCP+skill agent implemented it
    safely. Across six scenarios, four agents (Opus 4.6, Sonnet 4.6, GPT-5.4,
    GPT-5.4-mini), and two vendors, MCP+skill outperformed every other condition
    on a Braintrust completeness score.


    The lesson generalizes beyond Supabase: agents already have the raw
    capability and, via MCP, the tools to execute. What they lack is the
    product-specific operational knowledge — security pitfalls, correct flags,
    optimal workflows — that a vendor possesses and a foundation model trained
    months ago does not. The value of a skill is encoding that knowledge so the
    agent stops operating on stale training data. Tools without guidance produce
    plausible-but-wrong actions; the differentiator is the guidance layer.
stance: >-
  Giving an agent product-specific guidance via a skill produces more correct,
  safer output than giving it the same tools through MCP without guidance.
related:
  - INS-260323-D41A
  - INS-260403-0350
  - INS-260405-9285
  - INS-260403-B800
  - INS-260605-74E8
  - INS-260605-6722
  - INS-260605-9276
  - INS-260605-9527
  - INS-260330-8F07
  - INS-260327-C1A4
---
Supabase ran the same prompt (create a SQL view over an RLS-enabled table) under three conditions: baseline, MCP-only, and MCP+skill. The MCP-only agent silently bypassed row-level security by omitting `security_invoker=true`, exposing data; the MCP+skill agent implemented it safely. Across six scenarios, four agents (Opus 4.6, Sonnet 4.6, GPT-5.4, GPT-5.4-mini), and two vendors, MCP+skill outperformed every other condition on a Braintrust completeness score.

The lesson generalizes beyond Supabase: agents already have the raw capability and, via MCP, the tools to execute. What they lack is the product-specific operational knowledge — security pitfalls, correct flags, optimal workflows — that a vendor possesses and a foundation model trained months ago does not. The value of a skill is encoding that knowledge so the agent stops operating on stale training data. Tools without guidance produce plausible-but-wrong actions; the differentiator is the guidance layer.

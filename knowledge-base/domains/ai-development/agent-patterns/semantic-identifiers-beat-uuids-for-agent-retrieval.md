---
id: INS-260410-EE5C
domain: ai-development
topic: agent-patterns
title: Semantic identifiers beat UUIDs for agent retrieval
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - identifiers
  - hallucination
  - context-quality
sources:
  - type: blog
    title: Writing effective tools for AI agents—using AI agents
    url: 'https://www.anthropic.com/engineering/writing-tools-for-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Return semantically meaningful names instead of UUIDs in tool responses
    because agents handle natural language identifiers far more reliably.
  standard: >-
    Anthropic found that resolving arbitrary UUIDs to semantically meaningful
    language — or even a 0-indexed scheme — significantly improves Claude's
    precision in retrieval tasks by reducing hallucinations. Agents struggle to
    reason about and correctly propagate strings like
    '550e8400-e29b-41d4-a716-446655440000' but handle 'jane-chen' or index 3
    fluently.


    This extends to all field selection in tool responses. Prioritize name,
    image_url, file_type over uuid, 256px_image_url, mime_type. Every low-signal
    field competes for context budget against fields that actually inform agent
    decisions.


    When technical IDs are genuinely needed for downstream chaining, expose a
    response_format enum ('concise' vs 'detailed') so the agent can opt into
    verbose mode when it needs the IDs — rather than paying the token cost on
    every call.
stance: >-
  Replacing cryptic alphanumeric identifiers with natural-language names
  significantly reduces hallucinations in agent tool use.
related:
  - INS-260329-3C75
  - INS-260329-12D1
  - INS-260330-C7B5
  - INS-260322-D8C3
  - INS-260402-2C6B
---
Anthropic found that resolving arbitrary UUIDs to semantically meaningful language — or even a 0-indexed scheme — significantly improves Claude's precision in retrieval tasks by reducing hallucinations. Agents struggle to reason about and correctly propagate strings like '550e8400-e29b-41d4-a716-446655440000' but handle 'jane-chen' or index 3 fluently.

This extends to all field selection in tool responses. Prioritize name, image_url, file_type over uuid, 256px_image_url, mime_type. Every low-signal field competes for context budget against fields that actually inform agent decisions.

When technical IDs are genuinely needed for downstream chaining, expose a response_format enum ('concise' vs 'detailed') so the agent can opt into verbose mode when it needs the IDs — rather than paying the token cost on every call.

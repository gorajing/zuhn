---
id: INS-260410-B118
domain: ai-development
topic: claude-code
title: LLMs can reliably build extensions when given the spec URLs as context
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - claude-code
  - prompting
  - specifications
  - context-engineering
sources:
  - type: blog
    title: >-
      Claude Desktop Extensions: One-click MCP server installation for Claude
      Desktop
    url: 'https://www.anthropic.com/engineering/desktop-extensions'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic recommends a prompt template that explicitly instructs Claude Code
    to read three spec URLs (README, MANIFEST, examples) before writing
    extension code.
  standard: >-
    The blog post ends with a copy-paste prompt for Claude Code that begins with
    'Read the specifications thoroughly' and lists three GitHub URLs. The
    reasoning: LLMs have no training-data knowledge of MCPB (it's brand new), so
    grounding the generation in the current spec prevents hallucinated fields
    and outdated patterns.


    This generalizes to any niche, fast-moving, or recently-released format.
    Rather than hoping the model 'knows' about your format, put the
    authoritative documentation into context at generation time. The cost is a
    few thousand tokens; the benefit is code that actually conforms to the spec.


    For anyone building developer ecosystems: publish machine-readable spec URLs
    that LLMs can fetch, keep them stable, and include a recommended prompt
    template in your docs. This is how you make your format 'LLM-native' — not
    by training models on it but by making it trivial to bring the spec into any
    session.
stance: >-
  Pointing an LLM directly at specification documents in the prompt is more
  reliable than letting it rely on training data for niche formats.
related:
  - INS-260320-4BA8
  - INS-260403-7D7A
  - INS-260323-AF96
  - INS-260409-325B
  - PRI-260406-1AC6
---
The blog post ends with a copy-paste prompt for Claude Code that begins with 'Read the specifications thoroughly' and lists three GitHub URLs. The reasoning: LLMs have no training-data knowledge of MCPB (it's brand new), so grounding the generation in the current spec prevents hallucinated fields and outdated patterns.

This generalizes to any niche, fast-moving, or recently-released format. Rather than hoping the model 'knows' about your format, put the authoritative documentation into context at generation time. The cost is a few thousand tokens; the benefit is code that actually conforms to the spec.

For anyone building developer ecosystems: publish machine-readable spec URLs that LLMs can fetch, keep them stable, and include a recommended prompt template in your docs. This is how you make your format 'LLM-native' — not by training models on it but by making it trivial to bring the spec into any session.

---
id: INS-260410-B8EB
domain: ai-development
topic: prompting
title: Prefer YAML over JSON in LLM contexts to save tokens
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tokenization
  - prompting
  - cost-optimization
  - yaml
  - json
sources:
  - type: youtube
    title: Let's build the GPT Tokenizer
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zduSFxRajkE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The same structured data in YAML costs roughly 15% fewer tokens than JSON,
    which matters for context length and API bills.
  standard: >-
    Karpathy demonstrates concretely: the same data structure took 116 tokens in
    JSON but only 99 tokens in YAML — about a 15% reduction. The reason is that
    JSON's syntax is full of quotes, braces, and commas that each consume
    tokens, while YAML's whitespace-and-colon style maps more naturally onto the
    BPE merges that LLM tokenizers learned.


    In the token economy, where you pay per token in dollars AND in finite
    context length, this is free performance. For LLM-facing data formats —
    system prompts, structured inputs, tool call schemas, context dumps — YAML
    is the better default. JSON is still appropriate when interoperating with
    tools that require it, but the choice should be made deliberately rather
    than reflexively.


    The broader pattern: tokenization density is a real engineering concern that
    should be measured, not assumed. Spending time in tiktokenizer to compare
    different formats and prompt phrasings often finds 10-30% savings in
    critical paths, especially when the same prompt is sent millions of times.
stance: >-
  YAML is meaningfully more token-efficient than JSON for the same structured
  data, and LLM applications should default to it whenever a choice exists.
related:
  - INS-260320-EF3A
  - INS-260410-AA93
  - INS-260323-7625
  - INS-260410-C022
  - INS-260405-A22F
  - INS-260410-3F1A
---
Karpathy demonstrates concretely: the same data structure took 116 tokens in JSON but only 99 tokens in YAML — about a 15% reduction. The reason is that JSON's syntax is full of quotes, braces, and commas that each consume tokens, while YAML's whitespace-and-colon style maps more naturally onto the BPE merges that LLM tokenizers learned.

In the token economy, where you pay per token in dollars AND in finite context length, this is free performance. For LLM-facing data formats — system prompts, structured inputs, tool call schemas, context dumps — YAML is the better default. JSON is still appropriate when interoperating with tools that require it, but the choice should be made deliberately rather than reflexively.

The broader pattern: tokenization density is a real engineering concern that should be measured, not assumed. Spending time in tiktokenizer to compare different formats and prompt phrasings often finds 10-30% savings in critical paths, especially when the same prompt is sent millions of times.

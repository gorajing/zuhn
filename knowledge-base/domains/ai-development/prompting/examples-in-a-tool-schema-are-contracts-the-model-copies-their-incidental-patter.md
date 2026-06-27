---
id: INS-260627-DC30
domain: ai-development
topic: prompting
title: >-
  Examples in a tool schema are contracts — the model copies their incidental
  patterns, not just their format
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - prompting
  - few-shot
  - tool-design
  - mcp
  - llm-behavior
sources:
  - type: youtube
    title: 'Your MCP Server is Bad (and you should feel bad) - Jeremiah Lowin, Prefect'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=96G7FLab8xc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If your example for a tags field shows two tags, you'll get two tags nearly
    every time — no matter how loudly the instructions say 'use at least 10.'
  standard: >-
    Examples are a double-edged sword for tool design. They are extremely
    effective at showing an agent how to use a tool — but the model treats the
    example as a contract and reproduces far more than its format. It copies
    incidental, unstated properties: the number of elements in an array, the
    shape of the values, the implicit cardinality. Lowin debugged exactly this:
    an MCP tool that always returned two tags despite instructions demanding at
    least ten, because one example happened to contain two tags. The instruction
    lost to the example.


    The actionable rule is to use examples deliberately and audit them for
    accidental signals you don't intend to teach. One mitigation raised by an
    audience member — supplying out-of-distribution examples that deliberately
    break the pattern you don't want anchored — is reasonable and worth trying,
    but may not fully overcome the inertia. This is flagged time-sensitive
    because it is a current model-behavior quirk; as models improve they may
    stop over-indexing on incidental example structure, but until then, treat
    every example as a binding template for everything it shows, not just the
    dimension you care about.
stance: >-
  An example in a tool schema acts as a contract: the model replicates its
  incidental properties (item count, structure) even when you explicitly
  instruct otherwise.
related:
  - INS-260322-F891
  - INS-260625-E1CB
  - INS-260605-1FD9
  - INS-260323-A5EC
  - INS-260321-E9B7
---
Examples are a double-edged sword for tool design. They are extremely effective at showing an agent how to use a tool — but the model treats the example as a contract and reproduces far more than its format. It copies incidental, unstated properties: the number of elements in an array, the shape of the values, the implicit cardinality. Lowin debugged exactly this: an MCP tool that always returned two tags despite instructions demanding at least ten, because one example happened to contain two tags. The instruction lost to the example.

The actionable rule is to use examples deliberately and audit them for accidental signals you don't intend to teach. One mitigation raised by an audience member — supplying out-of-distribution examples that deliberately break the pattern you don't want anchored — is reasonable and worth trying, but may not fully overcome the inertia. This is flagged time-sensitive because it is a current model-behavior quirk; as models improve they may stop over-indexing on incidental example structure, but until then, treat every example as a binding template for everything it shows, not just the dimension you care about.

---
id: INS-260605-F5FB
domain: ai-development
topic: agent-patterns
title: >-
  A hybrid bash + database agent that generates-then-verifies beats either tool
  alone
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agentic-search
  - verification
  - tool-design
  - bash-tool
sources:
  - type: youtube
    title: 'Agentic Search for Context Engineering — Leonie Monigatti, Elastic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ynJyIKwjonM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On analytical queries the database tool wins and on quick lookups file/shell
    search wins, but a bash+database agent that queries then verifies with the
    shell scores highest.
  standard: >-
    Referencing a Vercel experiment ('testing if bash is all you need'),
    Monigatti reports a benchmark comparing an agent with only a bash tool, one
    with only file-search tools, one with database tools, and a hybrid with both
    bash and database tools. The database tool was most effective for analytical
    queries; the file-search tool was very effective for quickly finding things.
    But the hybrid bash+database agent achieved the highest accuracy —
    apparently because it first used the database tool and then verified the
    results using the shell tool.


    The generalizable pattern is generate-then-verify across complementary
    tools: one tool produces a candidate answer, a second independent tool
    checks it. This also connects to outsourcing computation into the tool layer
    — e.g. letting a query language do COUNT/aggregation rather than dumping 27
    rows into context and asking the LLM to count, since models are notoriously
    bad at counting and it wastes context window. Tools that compute and tools
    that verify each raise accuracy beyond what raw retrieval-into-context
    achieves.
stance: >-
  Giving an agent both a database tool and a shell tool, where it queries then
  verifies with the shell, yields higher accuracy than either tool by itself.
related:
  - INS-260605-0C88
  - INS-260320-71C1
  - INS-260409-2A51
  - INS-260410-F40F
  - INS-260605-2C70
---
Referencing a Vercel experiment ('testing if bash is all you need'), Monigatti reports a benchmark comparing an agent with only a bash tool, one with only file-search tools, one with database tools, and a hybrid with both bash and database tools. The database tool was most effective for analytical queries; the file-search tool was very effective for quickly finding things. But the hybrid bash+database agent achieved the highest accuracy — apparently because it first used the database tool and then verified the results using the shell tool.

The generalizable pattern is generate-then-verify across complementary tools: one tool produces a candidate answer, a second independent tool checks it. This also connects to outsourcing computation into the tool layer — e.g. letting a query language do COUNT/aggregation rather than dumping 27 rows into context and asking the LLM to count, since models are notoriously bad at counting and it wastes context window. Tools that compute and tools that verify each raise accuracy beyond what raw retrieval-into-context achieves.

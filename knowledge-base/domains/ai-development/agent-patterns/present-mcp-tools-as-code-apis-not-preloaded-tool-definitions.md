---
id: INS-260410-8ECF
domain: ai-development
topic: agent-patterns
title: 'Present MCP tools as code APIs, not preloaded tool definitions'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - agent-architecture
  - context-efficiency
  - code-execution
sources:
  - type: blog
    title: 'Code execution with MCP: building more efficient AI agents'
    url: 'https://www.anthropic.com/engineering/code-execution-with-mcp'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Expose MCP servers as a typed file tree of tool modules so agents load only
    the definitions they actually need.
  standard: >-
    Most MCP clients load every tool definition into the model's context
    upfront, so an agent connected to thousands of tools burns hundreds of
    thousands of tokens before reading the request. Anthropic's alternative is
    to present each MCP server as a directory of TypeScript files (e.g.
    ./servers/google-drive/getDocument.ts), each wrapping a callMCPTool
    invocation behind a typed interface.


    The agent then discovers tools by listing directories and reading only the
    files it needs. In a Google Drive to Salesforce example this dropped token
    usage from 150,000 to 2,000 — roughly a 98.7% reduction. The same file-tree
    approach also gives the agent a natural place to extend behavior with
    wrappers and helpers without changing the underlying MCP server.


    Builders hitting context ceilings or latency walls should stop treating MCP
    servers as flat tool lists and start treating them as code APIs with
    progressive disclosure — either via a filesystem the model can browse or a
    search_tools endpoint with selectable detail levels.
stance: >-
  Agents scale better when they discover and call MCP tools through a filesystem
  of code modules rather than loading every tool definition into context
  upfront.
related:
  - INS-260410-953E
  - INS-260410-19DE
  - INS-260329-8CC0
  - INS-260410-0855
  - INS-260320-0F7C
  - INS-260329-CF48
---
Most MCP clients load every tool definition into the model's context upfront, so an agent connected to thousands of tools burns hundreds of thousands of tokens before reading the request. Anthropic's alternative is to present each MCP server as a directory of TypeScript files (e.g. ./servers/google-drive/getDocument.ts), each wrapping a callMCPTool invocation behind a typed interface.

The agent then discovers tools by listing directories and reading only the files it needs. In a Google Drive to Salesforce example this dropped token usage from 150,000 to 2,000 — roughly a 98.7% reduction. The same file-tree approach also gives the agent a natural place to extend behavior with wrappers and helpers without changing the underlying MCP server.

Builders hitting context ceilings or latency walls should stop treating MCP servers as flat tool lists and start treating them as code APIs with progressive disclosure — either via a filesystem the model can browse or a search_tools endpoint with selectable detail levels.

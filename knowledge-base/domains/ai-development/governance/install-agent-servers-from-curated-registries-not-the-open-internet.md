---
id: INS-260625-7365
domain: ai-development
topic: governance
title: 'Install agent servers from curated registries, not the open internet'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - supply-chain
  - security
  - server-registry
  - trust
sources:
  - type: youtube
    title: >-
      Building Interactive UIs in VS Code with MCP Apps — Marlene Mhangami &
      Liam Hampton, GitHub
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_xIwFcnHqp4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pick MCP servers from the vetted VS Code/GitHub registry instead of grabbing
    a random server off the internet that may carry malicious code.
  standard: >-
    An MCP server is a program that runs with access to your context and tools,
    so installing one is closer to adding a dependency than to opening a
    webpage. The presenters explicitly warn that picking a random server off the
    internet can pull in malicious code, and recommend the curated server list
    surfaced inside VS Code (type '@mcp' in extensions) or GitHub instead.


    The governance principle is that the install surface for agent tooling needs
    the same supply-chain discipline as package managers: a vetted registry with
    provenance beats ad-hoc discovery. As the ecosystem of servers grows, the
    default path users take — what the host surfaces first — becomes the real
    security control. Steering users toward a curated catalog is cheaper and
    more reliable than expecting each developer to audit a server's source
    before connecting it.
stance: >-
  Teams should source MCP servers from a vetted in-product registry rather than
  arbitrary internet servers, because an untrusted server is an executable
  supply-chain risk.
related:
  - INS-260410-8ECF
  - INS-260625-A7AD
  - INS-260626-7E5F
  - INS-260404-21E6
  - INS-260627-2831
---
An MCP server is a program that runs with access to your context and tools, so installing one is closer to adding a dependency than to opening a webpage. The presenters explicitly warn that picking a random server off the internet can pull in malicious code, and recommend the curated server list surfaced inside VS Code (type '@mcp' in extensions) or GitHub instead.

The governance principle is that the install surface for agent tooling needs the same supply-chain discipline as package managers: a vetted registry with provenance beats ad-hoc discovery. As the ecosystem of servers grows, the default path users take — what the host surfaces first — becomes the real security control. Steering users toward a curated catalog is cheaper and more reliable than expecting each developer to audit a server's source before connecting it.

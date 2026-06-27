---
id: INS-260626-6F00
domain: ai-development
topic: mcp
title: >-
  The enterprise MCP bottleneck is the missing operational triad, not the
  protocol
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - mcp
  - enterprise
  - observability
  - access-control
  - security
sources:
  - type: youtube
    title: 'Gateways are All You Need — Karan Sampath, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CD6R4Wf3jnY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Registries and the protocol are sound; what blocks enterprises is the
    un-built operational triad of observability, access control, and security.
  standard: >-
    Sampath is precise about diagnosing where enterprise MCP adoption breaks.
    The registry exists and works, and the protocol was deliberately designed to
    be useful for enterprises. The gap is operational 'table stakes' that nobody
    has built well yet: observability (who is using which tools, which parts of
    a server are failing), access control (scoping servers and tools to the
    right groups—e.g. company-wide read on an observability MCP but write access
    for only a few), and security (verifying a server is safe, preventing data
    exfiltration, letting untrusted remote clients touch private data). He
    frames these three as a 'three-headed hydra.'


    The diagnostic value is in where it redirects effort: the answer is not to
    fix the protocol or proliferate more servers, but to build the missing
    operational layer—which is exactly what a gateway provides. These are
    problems enterprises already solved for traditional APIs in earlier
    paradigms; MCP simply hasn't re-solved them yet. This insight is marked
    time-sensitive because the specific gaps reflect the maturity of MCP tooling
    as of early 2026; the durable lesson is that protocol completeness and
    operational completeness are different things, and adoption is gated by the
    latter.
stance: >-
  Enterprise MCP adoption stalls on missing observability, access control, and
  security—not on limitations of the MCP protocol or its registry.
related:
  - INS-260404-F017
  - INS-260410-0C09
  - INS-260626-C623
  - INS-260403-1106
  - INS-260410-CA42
  - INS-260327-E18C
---
Sampath is precise about diagnosing where enterprise MCP adoption breaks. The registry exists and works, and the protocol was deliberately designed to be useful for enterprises. The gap is operational 'table stakes' that nobody has built well yet: observability (who is using which tools, which parts of a server are failing), access control (scoping servers and tools to the right groups—e.g. company-wide read on an observability MCP but write access for only a few), and security (verifying a server is safe, preventing data exfiltration, letting untrusted remote clients touch private data). He frames these three as a 'three-headed hydra.'

The diagnostic value is in where it redirects effort: the answer is not to fix the protocol or proliferate more servers, but to build the missing operational layer—which is exactly what a gateway provides. These are problems enterprises already solved for traditional APIs in earlier paradigms; MCP simply hasn't re-solved them yet. This insight is marked time-sensitive because the specific gaps reflect the maturity of MCP tooling as of early 2026; the durable lesson is that protocol completeness and operational completeness are different things, and adoption is gated by the latter.

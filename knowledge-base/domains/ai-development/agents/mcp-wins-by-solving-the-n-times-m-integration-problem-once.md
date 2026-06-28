---
id: INS-260625-E04B
domain: ai-development
topic: agents
title: MCP wins by solving the N-times-M integration problem once
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - integration
  - protocol
  - interoperability
sources:
  - type: youtube
    title: Power intelligent agents with AI-native databases
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=7awKinJhGPo'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP's adoption is driven by the classic N-by-M problem: without a protocol,
    every AI app must be integrated with every data system separately, but a
    standard layer lets each integration be built once and reused everywhere.
  standard: >-
    David Soria Para attributes MCP's growth to a need for 'connective tissue'
    between frontier models/AI applications and the data and systems that power
    enterprises. The economic core is the N-by-M problem: with N AI applications
    and M enterprise systems, point-to-point integration costs scale with N*M,
    and nobody wants to rebuild that wiring per app. A protocol turns it into
    N+M — each system exposes one MCP server, each app speaks MCP once. He
    explicitly analogizes this to SQL's invention ~50 years ago standardizing
    how applications talk to databases.


    The second adoption driver he names is low integration cost — MCP was
    designed to make servers easy to build — which matters because a standard
    only wins if conforming to it is cheaper than not. Notably, Anthropic itself
    is described as an AlloyDB customer accessing it over MCP, and the roadmap
    items (serving Skills over MCP servers so providers ship domain knowledge
    alongside tools, plus long-running tasks and enterprise-readiness) show the
    protocol expanding from tool-access into knowledge and durable-execution
    surfaces. The durable principle for anyone building agent infrastructure:
    interoperability problems with combinatorial integration cost are exactly
    where a shared protocol creates outsized value, and the protocols that win
    are the ones cheapest to adopt, not the most expressive.
stance: >-
  A standard protocol as connective tissue between models and enterprise systems
  is adopted because it collapses N-times-M bespoke integrations into
  build-once.
related:
  - INS-260320-CDE4
  - INS-260329-3AE5
  - INS-260330-A25A
  - INS-260409-A0B4
  - INS-260514-8F90
  - INS-260605-743D
  - INS-260605-7B83
  - INS-260619-C9B1
  - INS-260625-13E1
  - INS-260403-7B04
---
David Soria Para attributes MCP's growth to a need for 'connective tissue' between frontier models/AI applications and the data and systems that power enterprises. The economic core is the N-by-M problem: with N AI applications and M enterprise systems, point-to-point integration costs scale with N*M, and nobody wants to rebuild that wiring per app. A protocol turns it into N+M — each system exposes one MCP server, each app speaks MCP once. He explicitly analogizes this to SQL's invention ~50 years ago standardizing how applications talk to databases.

The second adoption driver he names is low integration cost — MCP was designed to make servers easy to build — which matters because a standard only wins if conforming to it is cheaper than not. Notably, Anthropic itself is described as an AlloyDB customer accessing it over MCP, and the roadmap items (serving Skills over MCP servers so providers ship domain knowledge alongside tools, plus long-running tasks and enterprise-readiness) show the protocol expanding from tool-access into knowledge and durable-execution surfaces. The durable principle for anyone building agent infrastructure: interoperability problems with combinatorial integration cost are exactly where a shared protocol creates outsized value, and the protocols that win are the ones cheapest to adopt, not the most expressive.

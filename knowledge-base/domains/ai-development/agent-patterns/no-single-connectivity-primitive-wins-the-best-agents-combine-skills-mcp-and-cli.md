---
id: INS-260626-E803
domain: ai-development
topic: agent-patterns
title: >-
  No single connectivity primitive wins — the best agents combine skills, MCP,
  and CLI/computer use
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - agent-design
  - connectivity
  - skills
  - cli
  - tool-selection
sources:
  - type: youtube
    title: 'The Future of MCP — David Soria Parra, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3Fr2JR47KA'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anyone selling a single solution to agent connectivity (just MCP, just CLI,
    just computer use) is wrong — each has a distinct best-fit job and good
    agents use all of them together.
  standard: >-
    Soria Parra rejects the framing that there is one connectivity primitive to
    rule them all. The 2026 connectivity stack has three legs with distinct
    jobs: skills are reusable domain knowledge captured in a simple file; CLIs
    are ideal when you have a sandbox/code-execution environment and the tool
    (Git, GitHub) is already in pretraining, because the model can discover
    capabilities itself; MCP earns its place when you need rich semantics, a UI
    for long-running tasks, resources, platform independence, no available
    sandbox, or 'boring but important enterprise stuff' like authorization,
    governance, and policies.


    The practical heuristic is 'it depends' — pick the right tool for the right
    job rather than forcing everything through one mechanism. Reaching for MCP
    to wrap something a CLI handles natively wastes the strengths of both. The
    design skill is matching the connectivity primitive to the constraints of
    the deployment (sandbox vs no sandbox, local vs remote, human-facing UI vs
    headless, enterprise governance vs toy project).


    The forward claim is that production agents in 2026 will seamlessly blend
    all three — using computer use, CLIs, MCPs, and skills within a single agent
    depending on the sub-task — rather than committing to one. Builders who
    treat these as competing rather than complementary will ship narrower
    agents.
stance: >-
  Agents that compose skills, MCP, and CLI/computer use outperform agents built
  on any single connectivity primitive.
related:
  - INS-260329-26BB
  - INS-260403-49DF
  - INS-260403-0637
  - INS-260501-F258
  - INS-260514-EA9E
  - INS-260514-33FB
  - INS-260605-077D
  - INS-260605-2D9B
  - INS-260625-9F65
  - INS-260626-13FB
---
Soria Parra rejects the framing that there is one connectivity primitive to rule them all. The 2026 connectivity stack has three legs with distinct jobs: skills are reusable domain knowledge captured in a simple file; CLIs are ideal when you have a sandbox/code-execution environment and the tool (Git, GitHub) is already in pretraining, because the model can discover capabilities itself; MCP earns its place when you need rich semantics, a UI for long-running tasks, resources, platform independence, no available sandbox, or 'boring but important enterprise stuff' like authorization, governance, and policies.

The practical heuristic is 'it depends' — pick the right tool for the right job rather than forcing everything through one mechanism. Reaching for MCP to wrap something a CLI handles natively wastes the strengths of both. The design skill is matching the connectivity primitive to the constraints of the deployment (sandbox vs no sandbox, local vs remote, human-facing UI vs headless, enterprise governance vs toy project).

The forward claim is that production agents in 2026 will seamlessly blend all three — using computer use, CLIs, MCPs, and skills within a single agent depending on the sub-task — rather than committing to one. Builders who treat these as competing rather than complementary will ship narrower agents.

---
id: INS-260605-9523
domain: ai-development
topic: agent-patterns
title: >-
  Clone a dependency's source repo into your project so the agent reads it like
  its own code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - coding-agents
  - context-engineering
  - code-as-documentation
  - post-training
  - library-development
sources:
  - type: youtube
    title: 'Vibe Engineering Effect Apps — Michael Arnaldi, Effectful'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Wmp2Tku2PrI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Add the dependency's source as a squashed git subtree in your repo so the
    agent extracts patterns from real code instead of relying on docs or MCP
    servers it was never trained to use.
  standard: >-
    Coding agents go through reinforcement learning specifically to consume and
    produce code in your own codebase — replicating patterns, making changes,
    checking compilation. They were NOT trained to read human documentation or
    operate unfamiliar MCP servers. Arnaldi exploits this by 'masquerading the
    library codebase as my own': he clones the Effect repo into a .repos/ folder
    via git subtree (squashed, no history), tricking the agent into treating it
    as one big codebase to explore. This matters because the alternatives fail:
    node_modules is deprioritized (agents focus on first-party code), and
    gitignored directories are skipped entirely (Cursor doesn't index them). The
    technique is language-agnostic and especially powerful for libraries with
    zero documentation or online best practices. For brownfield projects, the
    same move — clone your framework's source (TanStack, Svelte) and ask the
    model to generate best-practice files — makes the agent dramatically more
    effective in codebases with no prior AI context.
stance: >-
  Cloning a library's source into your repo beats MCP doc servers because coding
  agents are post-trained to read code, not documentation.
related:
  - INS-260501-01A5
  - INS-260625-EF29
  - INS-260625-1E07
  - INS-260625-08E5
  - INS-260627-A37B
  - INS-260605-C9E8
  - INS-260628-2FE3
---
Coding agents go through reinforcement learning specifically to consume and produce code in your own codebase — replicating patterns, making changes, checking compilation. They were NOT trained to read human documentation or operate unfamiliar MCP servers. Arnaldi exploits this by 'masquerading the library codebase as my own': he clones the Effect repo into a .repos/ folder via git subtree (squashed, no history), tricking the agent into treating it as one big codebase to explore. This matters because the alternatives fail: node_modules is deprioritized (agents focus on first-party code), and gitignored directories are skipped entirely (Cursor doesn't index them). The technique is language-agnostic and especially powerful for libraries with zero documentation or online best practices. For brownfield projects, the same move — clone your framework's source (TanStack, Svelte) and ask the model to generate best-practice files — makes the agent dramatically more effective in codebases with no prior AI context.

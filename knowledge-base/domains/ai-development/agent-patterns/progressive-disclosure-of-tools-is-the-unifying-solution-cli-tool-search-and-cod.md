---
id: INS-260626-78E6
domain: ai-development
topic: agent-patterns
title: >-
  Progressive disclosure of tools is the unifying solution — CLI, tool-search,
  and code mode are three instances of it
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - progressive-disclosure
  - tool-search
  - cli
  - code-mode
  - agent-patterns
  - context-engineering
sources:
  - type: youtube
    title: MCP = Mega Context Problem - Matt Carey
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YBYUvGOuotE'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CLI access, keyword tool-search, and code mode all solve the same problem —
    never load all tools at once — so choose by constraints, not as rival camps.
  standard: >-
    The online 'MCP vs CLI' and 'is MCP dead' debates dissolve once you see all
    three approaches as implementations of progressive disclosure. CLIs let the
    agent introspect commands via --help and call them, which works and is
    popular (e.g. with coding agents) but requires shell access — the binding
    constraint. Tool-search (used by Claude Code) keyword-matches the user
    request and injects only the top-K (~8) relevant tools into context; you
    still carry some unused tokens (~2,100 loaded, ~500 used) but coverage stays
    bounded. Code mode generates code against a typed SDK and needs an isolate
    to run safely. None requires dumping the full catalog. The practical
    guidance: pick by your constraints — shell availability, client
    sophistication, and whether you can host an isolate — rather than treating
    these as competing ideologies. The invariant across all of them is: surface
    capabilities lazily, scoped to the current task.
stance: >-
  The right way to give agents large capability sets is to load tools on demand,
  and CLIs, tool-search, and code mode are interchangeable implementations of
  that one principle.
related:
  - INS-260514-1D60
  - INS-260605-9F7A
  - INS-260602-EA48
  - INS-260626-181F
  - INS-260403-7D7A
  - INS-260403-643A
---
The online 'MCP vs CLI' and 'is MCP dead' debates dissolve once you see all three approaches as implementations of progressive disclosure. CLIs let the agent introspect commands via --help and call them, which works and is popular (e.g. with coding agents) but requires shell access — the binding constraint. Tool-search (used by Claude Code) keyword-matches the user request and injects only the top-K (~8) relevant tools into context; you still carry some unused tokens (~2,100 loaded, ~500 used) but coverage stays bounded. Code mode generates code against a typed SDK and needs an isolate to run safely. None requires dumping the full catalog. The practical guidance: pick by your constraints — shell availability, client sophistication, and whether you can host an isolate — rather than treating these as competing ideologies. The invariant across all of them is: surface capabilities lazily, scoped to the current task.

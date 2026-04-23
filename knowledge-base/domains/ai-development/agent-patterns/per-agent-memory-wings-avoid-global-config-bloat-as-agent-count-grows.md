---
id: INS-260409-B122
domain: ai-development
topic: agent-patterns
title: Per-agent memory wings avoid global-config bloat as agent count grows
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - memory
  - specialization
  - config-management
sources:
  - type: blog
    title: >-
      GitHub - milla-jovovich/mempalace: The highest-scoring AI memory system
      ever benchmarked. And it's free.
    url: 'https://github.com/milla-jovovich/mempalace'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemPalace's specialist agents each get a dedicated wing with a private
    diary; CLAUDE.md stays one line long regardless of whether you have 5 or 50
    agents, and each agent reads its own history to build domain expertise.
  standard: >-
    The naive way to add specialist agents is to dump their instructions,
    history, and context into one shared config (CLAUDE.md, system prompt, etc).
    This scales linearly — 50 agents means a 50x bigger config. MemPalace
    inverts this: each agent gets its own wing in the palace with a dedicated
    diary written in AAAK. CLAUDE.md contains one line: 'You have MemPalace
    agents. Run mempalace_list_agents to see them.' The AI discovers its agents
    from the palace at runtime, reads each one's history from its own diary, and
    stays sharp in its domain without contaminating others. Letta charges
    $20-200/mo for similar agent-managed memory; MemPalace does it with a wing.
    The design pattern is 'one memory per specialist lens' — worth considering
    for any Claude Code plugin or subagent architecture that expects to scale
    past a handful of agents.
stance: >-
  Specialized agents should maintain their own memory stores instead of sharing
  a global config file that grows with every addition.
related:
  - INS-260405-8166
  - INS-260409-7C62
  - INS-260423-FF53
  - INS-260403-4120
  - INS-260327-94FE
---
The naive way to add specialist agents is to dump their instructions, history, and context into one shared config (CLAUDE.md, system prompt, etc). This scales linearly — 50 agents means a 50x bigger config. MemPalace inverts this: each agent gets its own wing in the palace with a dedicated diary written in AAAK. CLAUDE.md contains one line: 'You have MemPalace agents. Run mempalace_list_agents to see them.' The AI discovers its agents from the palace at runtime, reads each one's history from its own diary, and stays sharp in its domain without contaminating others. Letta charges $20-200/mo for similar agent-managed memory; MemPalace does it with a wing. The design pattern is 'one memory per specialist lens' — worth considering for any Claude Code plugin or subagent architecture that expects to scale past a handful of agents.

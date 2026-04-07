---
id: INS-260327-F625
domain: ai-development
topic: agent-patterns
title: >-
  Context engineering is the single concept that explains all agent harness
  improvements
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-engineering
  - agent-harness
  - llm-context
  - agent-architecture
sources:
  - type: youtube
    title: >-
      Context Engineering Our Way to Long-Horizon Agents: LangChain’s Harrison
      Chase
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=vtugjs2chdA'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Harrison Chase says context engineering describes everything LangChain has
    done without knowing the term existed — traces show what's in your context,
    compaction manages it, sub-agents partition it, and memory extends it across
    sessions.
  standard: >-
    Chase describes three eras of agent development: raw text-in/text-out models
    where only simple chains were possible; tool-calling models that could
    decide what to do but needed heavy scaffolding; and the current era where
    LLMs run in loops with the harness managing context. The critical insight is
    that the jump from era two to three wasn't about a fundamentally different
    algorithm — it's still an LLM in a loop. What changed was context
    engineering: compaction strategies for when context windows fill up,
    planning tools that help the agent track its own state, file system access
    for overflow storage, sub-agent communication patterns, and memory for
    cross-session learning. Each of these is a different angle on the same
    problem: getting the right information into the model's context at the right
    time. Chase notes that even the difference between harnesses (Claude Code
    vs. Factory vs. AMP) largely comes down to context engineering choices,
    including understanding which tools each model family was trained on.
stance: >-
  Every major improvement in agent harnesses — compaction, planning tools,
  sub-agents, memory, file system access — is fundamentally context engineering:
  controlling what information reaches the LLM at each step of a long-running
  process.
related:
  - INS-260320-0127
  - PRI-260320-07A4
  - PRI-260321-D74F
  - PRI-260328-A65A
  - PRI-260407-D1AD
  - INS-260320-63D3
---
Chase describes three eras of agent development: raw text-in/text-out models where only simple chains were possible; tool-calling models that could decide what to do but needed heavy scaffolding; and the current era where LLMs run in loops with the harness managing context. The critical insight is that the jump from era two to three wasn't about a fundamentally different algorithm — it's still an LLM in a loop. What changed was context engineering: compaction strategies for when context windows fill up, planning tools that help the agent track its own state, file system access for overflow storage, sub-agent communication patterns, and memory for cross-session learning. Each of these is a different angle on the same problem: getting the right information into the model's context at the right time. Chase notes that even the difference between harnesses (Claude Code vs. Factory vs. AMP) largely comes down to context engineering choices, including understanding which tools each model family was trained on.

---
id: INS-260410-53C2
domain: ai-development
topic: agent-patterns
title: Split long-running agents into an initializer and a per-session coding agent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - harness-design
  - claude-agent-sdk
  - multi-session
sources:
  - type: blog
    title: Effective harnesses for long-running agents
    url: >-
      https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use a specialized first-session initializer agent to create scaffolding
    (feature list, progress file, init.sh, git repo), then run identical coding
    agents on subsequent sessions that only do incremental work.
  standard: >-
    Anthropic found that running a single coding agent in a loop across context
    windows fails: the agent either tries to one-shot the whole project or later
    declares victory prematurely. Their fix is to dedicate the very first
    session to environment setup using a different prompt, while every
    subsequent session uses the same coding-agent prompt that only makes
    incremental progress.


    The two 'agents' share system prompt, tools, and harness — only the user
    prompt differs. The initializer's job is to make the environment legible to
    all future agents: an init.sh script, a claude-progress.txt log, a
    comprehensive feature list, and an initial git commit. This separates 'set
    the table' from 'eat the meal' and prevents the most common multi-context
    failure modes.
stance: >-
  Long-running coding agents need a separate first-run initializer to scaffold
  environment artifacts before any incremental work begins.
related:
  - INS-260410-62E8
  - INS-260410-2C51
  - INS-260410-BBC1
  - INS-260410-0855
  - INS-260410-545A
  - INS-260325-D540
  - INS-260403-4D80
---
Anthropic found that running a single coding agent in a loop across context windows fails: the agent either tries to one-shot the whole project or later declares victory prematurely. Their fix is to dedicate the very first session to environment setup using a different prompt, while every subsequent session uses the same coding-agent prompt that only makes incremental progress.

The two 'agents' share system prompt, tools, and harness — only the user prompt differs. The initializer's job is to make the environment legible to all future agents: an init.sh script, a claude-progress.txt log, a comprehensive feature list, and an initial git commit. This separates 'set the table' from 'eat the meal' and prevents the most common multi-context failure modes.

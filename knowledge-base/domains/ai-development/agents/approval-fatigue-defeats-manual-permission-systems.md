---
id: INS-260410-F0EF
domain: ai-development
topic: agents
title: Approval fatigue defeats manual permission systems
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - permissions
  - human-in-the-loop
  - ux
  - safety
sources:
  - type: blog
    title: 'Claude Code auto mode: a safer way to skip permissions'
    url: 'https://www.anthropic.com/engineering/claude-code-auto-mode'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Manual approval prompts fail at scale because users stop paying attention —
    Anthropic measured 93% acceptance rates.
  standard: >-
    Claude Code's default mode asks users to approve each action, but
    Anthropic's internal data shows users accept 93% of prompts. This approval
    fatigue means manual review becomes a rubber stamp rather than a safety
    mechanism, and users end up worse off than if they'd designed something
    forcing genuine review on the dangerous 7%.


    The design implication is that any safety system requiring sustained human
    attention on high-volume events will degrade. The solution is not 'better
    prompts' but architectural — offload routine decisions to a classifier and
    reserve human attention for the subset that actually warrants it. Apply this
    lesson when designing any approval flow: if the base rate of 'approve' is
    above ~80%, manual review is theater.
stance: >-
  Forcing users to manually approve every agent action degrades safety over time
  because humans reflexively accept ~93% of prompts and stop reading them.
related:
  - INS-260329-92E9
  - INS-260329-79D3
  - INS-260402-1D32
  - INS-260403-23AA
  - INS-260404-3ACB
  - INS-260327-0700
  - INS-260330-F534
  - PRI-260323-8EEA
  - PRI-260405-D586
  - INS-260410-E3BB
---
Claude Code's default mode asks users to approve each action, but Anthropic's internal data shows users accept 93% of prompts. This approval fatigue means manual review becomes a rubber stamp rather than a safety mechanism, and users end up worse off than if they'd designed something forcing genuine review on the dangerous 7%.

The design implication is that any safety system requiring sustained human attention on high-volume events will degrade. The solution is not 'better prompts' but architectural — offload routine decisions to a classifier and reserve human attention for the subset that actually warrants it. Apply this lesson when designing any approval flow: if the base rate of 'approve' is above ~80%, manual review is theater.

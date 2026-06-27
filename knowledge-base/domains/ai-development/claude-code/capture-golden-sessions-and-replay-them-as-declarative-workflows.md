---
id: INS-260625-8E60
domain: ai-development
topic: claude-code
title: Capture golden sessions and replay them as declarative workflows
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - golden-session
  - workflow-reuse
  - reliability
  - openprose
  - dynamic-workflows
sources:
  - type: youtube
    title: 'Recursive Coding Agents - Raymond Weitekamp, OpenProse'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3hXJI2q0Jz8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Take a 'golden session' where the agent performed well, have an agent
    deconstruct it into a declarative prose workflow, and re-run that workflow
    to get the good outcome repeatably.
  standard: >-
    The talk's reliability payoff closes the loop on the 'mismanaged genius'
    thesis: when you have a great session — the day the agent nailed it rather
    than the day it drained your wallet — you want to capture and replay that
    performance instead of gambling on variance. Weitekamp built a system where
    you feed a golden session (from Claude Code, Codex, or Pi) into a prose
    program that has an agent deconstruct it and emit a reusable workflow, which
    can itself invoke recursive sub-agents to reproduce the golden state on
    demand.


    This is the management layer made concrete. OpenProse declares sub-agent
    work explicitly — breaking a problem into pieces, verifying each sub-agent's
    output in the parent session, and wiring required skills and CLI tools in as
    explicit dependencies so a sub-agent literally cannot run without the
    capabilities its role needs. Claude Code's recently shipped dynamic
    workflows ('A Harness for Every Task') reach the same end: turning a
    one-time success into a declared, verifiable, repeatable contract. The
    portable lesson — capture what worked into structure, don't re-improvise it
    — applies to any agent harness with a filesystem and sub-agents.
stance: >-
  Reliability comes from deconstructing a successful agent session into a
  reusable, declarative workflow — not from hoping the next run repeats the good
  day.
related:
  - INS-260605-E145
  - INS-260625-9721
  - INS-260530-E697
  - INS-260605-9276
  - INS-260327-DC4C
  - INS-260403-0350
  - INS-260501-9503
  - INS-260626-D7AE
---
The talk's reliability payoff closes the loop on the 'mismanaged genius' thesis: when you have a great session — the day the agent nailed it rather than the day it drained your wallet — you want to capture and replay that performance instead of gambling on variance. Weitekamp built a system where you feed a golden session (from Claude Code, Codex, or Pi) into a prose program that has an agent deconstruct it and emit a reusable workflow, which can itself invoke recursive sub-agents to reproduce the golden state on demand.

This is the management layer made concrete. OpenProse declares sub-agent work explicitly — breaking a problem into pieces, verifying each sub-agent's output in the parent session, and wiring required skills and CLI tools in as explicit dependencies so a sub-agent literally cannot run without the capabilities its role needs. Claude Code's recently shipped dynamic workflows ('A Harness for Every Task') reach the same end: turning a one-time success into a declared, verifiable, repeatable contract. The portable lesson — capture what worked into structure, don't re-improvise it — applies to any agent harness with a filesystem and sub-agents.

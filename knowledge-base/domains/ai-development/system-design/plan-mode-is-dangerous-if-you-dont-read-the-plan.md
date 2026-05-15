---
id: INS-260514-08E3
domain: ai-development
topic: system-design
title: Plan mode is dangerous if you don't read the plan
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - plan-mode
  - agent-orchestration
  - human-in-the-loop
  - failure-modes
sources:
  - type: youtube
    title: "Harness Engineering: How to Build Software When Humans Steer, Agents Execute —\_Ryan Lopopolo, OpenAI"
    author: AI Engineer
    url: 'https://youtu.be/am_oeAoUhew'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you approve plans without reading them, you're authorizing a multi-hour
    rollout of instructions you don't know. Push plans as separate PRs.
  standard: >-
    Lopopolo's pragmatic warning: plan mode (agent produces plan first, human
    approves, then agent executes) sounds good but breaks under the standard
    human behavior of approving plans without actually reading them. The user is
    then committing to a rollout potentially based on bad reasoning. The fix:
    push plans up as standalone PRs where every line is reviewable, block on
    human approval, then merge → execute. If you find yourself approving plans
    without reading, either stop using plan mode or institute the PR-review
    discipline. Lopopolo personally doesn't use plan mode much: 'my expectation
    is I should be able to drop a ticket in and have it do the job anyway
    without diverting through a plan, because most of the time I'm never going
    to read it anyway.'


    Application: in any agentic workflow with a plan-and-execute step,
    structurally enforce plan review (PR-style approval) or remove the plan
    step. The middle ground (plan present, human rubber-stamps) is worse than
    either pure direct execution or rigorous plan review. For Memric: the same
    logic applies to audit-engagement intake — don't produce 'engagement plans'
    that customers will rubber-stamp; either produce concrete deliverables that
    customers actually review, or skip the plan stage entirely.
stance: >-
  Plan-and-execute agent modes (where the agent first produces a plan, the human
  approves it, then the agent executes) become structurally dangerous when
  humans reflexively approve plans without reading them — you're encoding bad
  instructions into a multi-hour rollout that you'll never read.
related:
  - INS-260320-93E1
  - INS-260320-8F12
  - INS-260320-6CCE
  - INS-260412-7728
  - INS-260323-7F3E
  - INS-260405-F1A2
---
Lopopolo's pragmatic warning: plan mode (agent produces plan first, human approves, then agent executes) sounds good but breaks under the standard human behavior of approving plans without actually reading them. The user is then committing to a rollout potentially based on bad reasoning. The fix: push plans up as standalone PRs where every line is reviewable, block on human approval, then merge → execute. If you find yourself approving plans without reading, either stop using plan mode or institute the PR-review discipline. Lopopolo personally doesn't use plan mode much: 'my expectation is I should be able to drop a ticket in and have it do the job anyway without diverting through a plan, because most of the time I'm never going to read it anyway.'

Application: in any agentic workflow with a plan-and-execute step, structurally enforce plan review (PR-style approval) or remove the plan step. The middle ground (plan present, human rubber-stamps) is worse than either pure direct execution or rigorous plan review. For Memric: the same logic applies to audit-engagement intake — don't produce 'engagement plans' that customers will rubber-stamp; either produce concrete deliverables that customers actually review, or skip the plan stage entirely.

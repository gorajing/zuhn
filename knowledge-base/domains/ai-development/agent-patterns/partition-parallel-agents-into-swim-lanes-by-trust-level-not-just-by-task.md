---
id: INS-260605-AE0D
domain: ai-development
topic: agent-patterns
title: 'Partition parallel agents into ''swim lanes'' by trust level, not just by task'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - parallel-agents
  - swim-lanes
  - agent-orchestration
  - attention-budget
  - coding-agents
sources:
  - type: youtube
    title: >-
      Dark Factory: OpenClaw Ships Faster Than You Can Read the Diff — Vincent
      Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pmoDeA3RBZY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sort parallel agent sessions into lanes by required oversight —
    fire-and-forget test refactors at one end, conversational P0 feature work at
    the other.
  standard: >-
    Koc runs 10-20 concurrent agent 'swim lanes' and explicitly assigns them by
    how much supervision each demands rather than treating them uniformly.
    Stable, low-risk work like refactoring tests gets a hands-off lane: 'take
    your time, make the tests pass, just commit.' Feature and bug work on
    fragile subsystems (Docker, messaging channels) get conversational lanes
    where he actively investigates with the agent. A final lane scans new P0/P1
    issues from GitHub and Discord. The insight is that with abundant agents,
    your scarce resource is human attention, so the partition that matters is a
    trust/oversight gradient, not just a topic split. This lets a single person
    keep 'an eye on all of these sessions' by spending babysitting where the
    blast radius is highest and ignoring lanes that can safely run to green on
    their own.
stance: >-
  Running many coding agents in parallel works best when lanes are sorted by how
  much babysitting each needs, so attention flows to the risky work.
related:
  - INS-260410-BDFF
  - PRI-260328-A65A
  - INS-260323-2E51
  - INS-260626-9732
  - INS-260605-D912
---
Koc runs 10-20 concurrent agent 'swim lanes' and explicitly assigns them by how much supervision each demands rather than treating them uniformly. Stable, low-risk work like refactoring tests gets a hands-off lane: 'take your time, make the tests pass, just commit.' Feature and bug work on fragile subsystems (Docker, messaging channels) get conversational lanes where he actively investigates with the agent. A final lane scans new P0/P1 issues from GitHub and Discord. The insight is that with abundant agents, your scarce resource is human attention, so the partition that matters is a trust/oversight gradient, not just a topic split. This lets a single person keep 'an eye on all of these sessions' by spending babysitting where the blast radius is highest and ignoring lanes that can safely run to green on their own.

---
id: INS-260627-3BE0
domain: ai-development
topic: agent-reliability
title: Atomic tasks make agent failures cheaply reversible
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rollback
  - atomic-tasks
  - agent-failure-recovery
  - git-worktrees
sources:
  - type: youtube
    title: >-
      Backlog.md: Terminal Kanban Board for Managing Tasks with AI Agents — Alex
      Gavrilescu, Funstage
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMXKhhwiCIc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because each task is small and self-contained, a bad result means discarding
    that task's work, tweaking the spec, and restarting from the plan — not
    surgery on a giant diff.
  standard: >-
    A direct benefit of atomic tasks that the demo highlights: when something
    goes wrong with any single task, you can roll back the change, edit the
    specs (acceptance criteria, description), and ask the agent to start again
    from the implementation plan. Failure recovery becomes bounded to one small
    unit of work instead of an entanglement spread across a sprawling change
    set.


    This reframes agent reliability as a property of work granularity, not just
    model quality. Agents will sometimes go wrong; the question is how expensive
    each wrong turn is. Small, well-scoped tasks make every failure a localized,
    discardable event — and, because tasks are independent when there are no
    dependencies, they can even be run in parallel across git worktrees. The
    board visibly supports this: a task that wasn't fully implemented can simply
    be moved back to in-progress and re-run. Cheap reversibility is what makes
    delegating to an imperfect agent psychologically and practically safe.
stance: >-
  Small atomic tasks turn an agent's wrong implementation into a cheap
  rollback-and-restart rather than an expensive untangling of a large change.
related:
  - INS-260325-3EF4
  - INS-260327-E3DE
  - INS-260329-6DED
  - INS-260404-A246
  - INS-260625-9644
  - INS-260627-8121
  - INS-260327-CEE4
  - INS-260628-4E8F
  - INS-260322-C6CE
---
A direct benefit of atomic tasks that the demo highlights: when something goes wrong with any single task, you can roll back the change, edit the specs (acceptance criteria, description), and ask the agent to start again from the implementation plan. Failure recovery becomes bounded to one small unit of work instead of an entanglement spread across a sprawling change set.

This reframes agent reliability as a property of work granularity, not just model quality. Agents will sometimes go wrong; the question is how expensive each wrong turn is. Small, well-scoped tasks make every failure a localized, discardable event — and, because tasks are independent when there are no dependencies, they can even be run in parallel across git worktrees. The board visibly supports this: a task that wasn't fully implemented can simply be moved back to in-progress and re-run. Cheap reversibility is what makes delegating to an imperfect agent psychologically and practically safe.

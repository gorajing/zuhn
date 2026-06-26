---
id: INS-260626-9FFD
domain: ai-development
topic: agent-patterns
title: Replace brittle imperative helper code with a declarative skill
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - context-engineering
  - abstraction
  - agent-onboarding
  - declarative
sources:
  - type: youtube
    title: 'Context Is the New Code — Patrick Debois, Tessl'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bSG9wUYaHWU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When logic has too many branches to enumerate in code, describe the goal and
    steps as a skill and let the agent reason through the cases.
  standard: >-
    Debois describes an onboarding flow where users arrive with arbitrary stacks
    (Python, Node, various packaging tools). Coding every permutation is
    effectively impossible. Instead he wrote a skill: 'first figure out their
    package manager, then their ecosystem, then do these steps together with the
    user.' The declarative description solved far more cases than exhaustive
    code could, because the agent fills the combinatorial gaps at runtime.


    This is the reverse of the usual direction — large code blocks and helpers
    collapse back into reusable context (a skill, a workflow). The actionable
    heuristic: when you notice code accreting branches to handle an open-ended
    input space, that's a signal the logic wants to live as context, not code.
    The tradeoff is that you trade deterministic, testable code for a
    probabilistic agent that needs evals (see the eval-cost insight) — but for
    genuinely combinatorial onboarding/config problems, the coverage gain is
    worth it.
stance: >-
  Converting hard-to-code branching logic into a declarative skill prompt solves
  more cases than the equivalent code ever could, so code is partly reverting
  back into context.
related:
  - INS-260625-A668
  - INS-260405-F26B
  - INS-260625-35C5
  - INS-260605-6722
  - INS-260625-447A
---
Debois describes an onboarding flow where users arrive with arbitrary stacks (Python, Node, various packaging tools). Coding every permutation is effectively impossible. Instead he wrote a skill: 'first figure out their package manager, then their ecosystem, then do these steps together with the user.' The declarative description solved far more cases than exhaustive code could, because the agent fills the combinatorial gaps at runtime.

This is the reverse of the usual direction — large code blocks and helpers collapse back into reusable context (a skill, a workflow). The actionable heuristic: when you notice code accreting branches to handle an open-ended input space, that's a signal the logic wants to live as context, not code. The tradeoff is that you trade deterministic, testable code for a probabilistic agent that needs evals (see the eval-cost insight) — but for genuinely combinatorial onboarding/config problems, the coverage gain is worth it.

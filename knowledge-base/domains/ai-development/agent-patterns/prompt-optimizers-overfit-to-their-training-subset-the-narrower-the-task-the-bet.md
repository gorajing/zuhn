---
id: INS-260605-B1FC
domain: ai-development
topic: agent-patterns
title: >-
  Prompt optimizers overfit to their training subset — the narrower the task,
  the better they work
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - overfitting
  - gepa
  - evals
  - train-test-split
  - task-breadth
sources:
  - type: youtube
    title: >-
      Agent Optimization with Pydantic AI: GEPA, Evals, Feedback Loops — Samuel
      Colvin, Pydantic
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=A48uhxfxbsM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An optimizer that hit 96% accuracy still wrongly excluded aunts and uncles
    because its training subset never showed them — classic overfitting.
  standard: >-
    A workshop attendee caught a systematic error: the optimized prompt scored
    96% but explicitly excluded uncles and aunts that were valid golden
    relations, because the optimizer's small training subset of cases happened
    not to include them, making exclusion the locally simpler rule. Colvin's
    diagnosis — 'I suspect the uncle and aunt thing is it overfitting' — leads
    to a concrete prescription: you need at least 2x the data covering the full
    space, one full set to optimize on and a separate full set to evaluate on,
    exactly the train/test discipline of classical ML. He extends this to task
    breadth: a narrow, verifiable task (extract ancestral political relations)
    optimizes well, but a coding agent with 5,000 distinct tests is still 'a
    drop in the ocean' of what users actually do, so the agent over-optimizes
    for those cases. The broader and more open-ended the task, the less
    optimization helps and the more you just need a clever general agent. A
    practical mitigation he endorsed: add a separate check at the end of the
    harness (Claude Code spotted the aunt/uncle error immediately).
stance: >-
  GEPA-optimized prompts overfit to the cases they were exposed to, so they
  reliably improve narrow verifiable tasks but degrade on open-ended ones.
related:
  - INS-260329-A2D0
  - INS-260625-8792
  - INS-260625-8C41
  - INS-260329-3D3E
  - INS-260625-2563
---
A workshop attendee caught a systematic error: the optimized prompt scored 96% but explicitly excluded uncles and aunts that were valid golden relations, because the optimizer's small training subset of cases happened not to include them, making exclusion the locally simpler rule. Colvin's diagnosis — 'I suspect the uncle and aunt thing is it overfitting' — leads to a concrete prescription: you need at least 2x the data covering the full space, one full set to optimize on and a separate full set to evaluate on, exactly the train/test discipline of classical ML. He extends this to task breadth: a narrow, verifiable task (extract ancestral political relations) optimizes well, but a coding agent with 5,000 distinct tests is still 'a drop in the ocean' of what users actually do, so the agent over-optimizes for those cases. The broader and more open-ended the task, the less optimization helps and the more you just need a clever general agent. A practical mitigation he endorsed: add a separate check at the end of the harness (Claude Code spotted the aunt/uncle error immediately).

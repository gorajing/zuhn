---
id: INS-260627-9E3D
domain: ai-development
topic: agent-evals
title: Evaluate repository explorers by citation precision and recall
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - coding-agents
  - citation
  - benchmarks
  - verification
sources:
  - type: blog
    title: >-
      GitHub - microsoft/fastcontext: FastContext: Training Efficient Repository
      Explorer for Coding Agents
    url: 'https://github.com/microsoft/fastcontext'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    FastContext turns exploration quality into a measurable citation task
    separate from end-to-end task success.
  standard: >-
    FastContext includes standalone exploration evaluation that parses final
    answers into path and line citations, then scores file and line overlap
    against benchmark-relevant evidence. This isolates whether the
    context-finder found the right code before judging whether another model
    produced the right patch.


    AgentRun should steal this separation. A run can pass execution tests while
    its exploration was wasteful or lucky; conversely, a good scout can fail if
    the solver makes a bad edit. Recording citation precision, number of cited
    files, overlap, and trajectory length would make exploration quality visible
    instead of hiding it behind a single end-to-end status.
stance: >-
  Exploration agents should be scored on whether their cited files and lines
  overlap the eventual patch-relevant evidence, not only on whether the
  downstream agent succeeds.
related:
  - INS-260327-6E86
  - INS-260403-9C60
  - INS-260405-C17A
  - INS-260403-7D7A
  - INS-260625-9644
  - PRI-260406-88DD
  - PRI-260406-229E
  - INS-260327-E3CA
---
FastContext includes standalone exploration evaluation that parses final answers into path and line citations, then scores file and line overlap against benchmark-relevant evidence. This isolates whether the context-finder found the right code before judging whether another model produced the right patch.

AgentRun should steal this separation. A run can pass execution tests while its exploration was wasteful or lucky; conversely, a good scout can fail if the solver makes a bad edit. Recording citation precision, number of cited files, overlap, and trajectory length would make exploration quality visible instead of hiding it behind a single end-to-end status.

---
id: INS-260626-F5AE
domain: ai-development
topic: agent-evals
title: >-
  Instruction-following can explain cost increases without explaining success
  gains
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - instruction-following
  - cost
  - tool-use
sources:
  - type: paste
    title: >-
      Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for
      Coding Agents?
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The agents generally followed context-file instructions, but that mainly
    produced more testing, exploration, specialized-tool use, and reasoning
    tokens.
  standard: >-
    Trace analysis shows that context files increased testing, file search,
    reads, writes, and repository-specific tool use. Agents used uv far more
    often when it was mentioned and used repository-specific tools much more
    often when instructed. But the same paper finds no significant success-rate
    improvement from adding context files.


    The implication for agent/eval work is that instruction adherence is not an
    end metric. Harness dashboards should pair compliance signals with outcome
    and cost metrics, because an agent can perfectly obey redundant or overbroad
    instructions and still become slower or less effective.
stance: >-
  When an agent follows extra instructions, the right eval question is whether
  the followed behavior improves outcomes enough to justify the extra search,
  testing, and reasoning cost.
related:
  - INS-260501-C59A
  - INS-260605-2DD5
  - INS-260605-3A60
  - INS-260627-CECD
  - INS-260626-B449
  - INS-260627-85C7
  - INS-260626-983E
  - INS-260626-057E
  - INS-260626-C563
  - INS-260627-1319
---
Trace analysis shows that context files increased testing, file search, reads, writes, and repository-specific tool use. Agents used uv far more often when it was mentioned and used repository-specific tools much more often when instructed. But the same paper finds no significant success-rate improvement from adding context files.

The implication for agent/eval work is that instruction adherence is not an end metric. Harness dashboards should pair compliance signals with outcome and cost metrics, because an agent can perfectly obey redundant or overbroad instructions and still become slower or less effective.

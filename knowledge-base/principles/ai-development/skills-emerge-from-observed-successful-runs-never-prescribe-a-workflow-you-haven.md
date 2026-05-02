---
id: PRI-260501-1E66
domain: ai-development
title: >-
  Skills emerge from observed successful runs — never prescribe a workflow you
  haven't first demonstrated to the agent
summary: >-
  The reflexive pattern is to write skills upfront ('here's how the workflow
  should go'), but this systematically produces brittle skills that fail in
  practice because models predict tokens by mimicking what you've shown them —
  they cannot mimic what you've only described. The high-leverage pattern is the
  inverse: walk the workflow manually with the agent, achieve a successful run,
  then ask the agent to extract the skill from that run. This makes skill
  creation an act of distillation from observed success rather than an act of
  specification, and it explains why downloaded-from-marketplace skills usually
  fail (no run-context) and why customization-as-skill-craft is a trap (output
  is the skill, not the configuration).
confidence: high
supporting_insights:
  - INS-260501-9503
  - INS-260501-C4AA
  - INS-260501-9E23
  - INS-260501-2130
  - INS-260501-D9D1
  - INS-260501-247C
supporting_count: 6
tags:
  - skill-creation
  - show-dont-tell
  - experiential-distillation
  - spec-ownership
  - mimicry-not-thinking
  - workflow-extraction
date_created: '2026-05-01'
last_reviewed: '2026-05-01'
resolutions:
  one_line: >-
    Skills emerge from observed successful runs — never prescribe a workflow you
    haven't first demonstrated to the agent
  standard: >-
    The reflexive pattern is to write skills upfront ('here's how the workflow
    should go'), but this systematically produces brittle skills that fail in
    practice because models predict tokens by mimicking what you've shown them —
    they cannot mimic what you've only described. The high-leverage pattern is
    the inverse: walk the workflow manually with the agent, achieve a successful
    run, then ask the agent to extract the skill from that run. This makes skill
    creation an act of distillation from observed success rather than an act of
    specification, and it explains why downloaded-from-marketplace skills
    usually fail (no run-context) and why customization-as-skill-craft is a trap
    (output is the skill, not the configuration).
lineage:
  compressed_at: '2026-05-01'
  source_insights:
    - id: INS-260501-9503
      relation: SUPPORTS
    - id: INS-260501-C4AA
      relation: SUPPORTS
    - id: INS-260501-9E23
      relation: SUPPORTS
    - id: INS-260501-2130
      relation: SUPPORTS
    - id: INS-260501-D9D1
      relation: SUPPORTS
    - id: INS-260501-247C
      relation: EXTENDS
  compression_trigger: >-
    COMPRESS flag — 131 insights, 134 principles (post-extraction synthesis from
    30-source run)
embedded: true
embedding_model: "nomic-embed-text"
---
The reflexive pattern is to write skills upfront ('here's how the workflow should go'), but this systematically produces brittle skills that fail in practice because models predict tokens by mimicking what you've shown them — they cannot mimic what you've only described. The high-leverage pattern is the inverse: walk the workflow manually with the agent, achieve a successful run, then ask the agent to extract the skill from that run. This makes skill creation an act of distillation from observed success rather than an act of specification, and it explains why downloaded-from-marketplace skills usually fail (no run-context) and why customization-as-skill-craft is a trap (output is the skill, not the configuration).

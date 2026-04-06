---
id: PRI-260405-3080
domain: ai-development
title: >-
  Spec-first development catches bugs before they exist — unit tests verify code
  works, spec audits verify code matches intent
summary: >-
  91 unit tests all passed, but an automated spec audit found 12 issues — unit
  tests and spec audits test fundamentally different things. Designing a
  detailed spec before writing code caught issues before they became bugs and
  produced zero scope creep across 5 phases. The best database schemas encode
  business rules structurally through keys, types, and constraints rather than
  trusting application code. Foreign keys encode domain relationships that raw
  data cannot express. The pattern: spec-first development is not slower, it's
  faster — the time 'saved' by skipping specs is spent debugging,
  scope-creeping, and rewriting. Closures, data types, and abstraction layers
  all exist to make intent explicit in code structure, not just in comments or
  documentation.
confidence: high
supporting_insights:
  - INS-260320-10CC
  - INS-260320-4B31
  - INS-260329-F556
  - INS-260329-1277
  - INS-260329-DEA1
  - INS-260330-43E3
supporting_count: 6
tags:
  - spec-driven
  - testing
  - database-design
  - intent-verification
  - structural-correctness
date_created: '2026-04-05'
last_reviewed: '2026-04-05'
resolutions:
  one_line: >-
    Spec-first development catches bugs before they exist — unit tests verify
    code works, spec audits verify code matches intent
  standard: >-
    91 unit tests all passed, but an automated spec audit found 12 issues — unit
    tests and spec audits test fundamentally different things. Designing a
    detailed spec before writing code caught issues before they became bugs and
    produced zero scope creep across 5 phases. The best database schemas encode
    business rules structurally through keys, types, and constraints rather than
    trusting application code. Foreign keys encode domain relationships that raw
    data cannot express. The pattern: spec-first development is not slower, it's
    faster — the time 'saved' by skipping specs is spent debugging,
    scope-creeping, and rewriting. Closures, data types, and abstraction layers
    all exist to make intent explicit in code structure, not just in comments or
    documentation.
lineage:
  compressed_at: '2026-04-05'
  source_insights:
    - id: INS-260320-10CC
      relation: SUPPORTS
    - id: INS-260320-4B31
      relation: SUPPORTS
    - id: INS-260329-F556
      relation: SUPPORTS
    - id: INS-260329-1277
      relation: EXTENDS
    - id: INS-260329-DEA1
      relation: EXTENDS
    - id: INS-260330-43E3
      relation: EXTENDS
  compression_trigger: 'COMPRESS flag — 183 insights, 11 principles'
embedded: true
embedding_model: "nomic-embed-text"
---
91 unit tests all passed, but an automated spec audit found 12 issues — unit tests and spec audits test fundamentally different things. Designing a detailed spec before writing code caught issues before they became bugs and produced zero scope creep across 5 phases. The best database schemas encode business rules structurally through keys, types, and constraints rather than trusting application code. Foreign keys encode domain relationships that raw data cannot express. The pattern: spec-first development is not slower, it's faster — the time 'saved' by skipping specs is spent debugging, scope-creeping, and rewriting. Closures, data types, and abstraction layers all exist to make intent explicit in code structure, not just in comments or documentation.

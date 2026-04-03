---
id: INS-260320-10CC
domain: ai-development
topic: system-building
title: Automated audit cycles catch spec deviations that unit tests miss
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - audit
  - testing
  - spec-compliance
  - quality
sources:
  - type: paste
    title: Building the Zuhn knowledge base — lessons from Phase 1-5
    author: Jin Choi + Claude
related:
  - INS-260320-4B31
  - PRI-260403-5B3D
  - INS-260403-5C1D
  - INS-260329-D357
  - INS-260320-1B10
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    91 unit tests all passed, but an automated spec audit found 12 issues — unit
    tests verify code works, spec audits verify code matches intent.
  standard: |
    91 unit tests all passed, but an automated spec audit found 12 issues —
    missing DB columns, wrong MASTER_INDEX format, missing health checks,
    search formula problems. Unit tests verify that code works as implemented;
    spec audits verify that the implementation matches the original intent.

    These are fundamentally different verification levels. Unit tests check
    "does this function return the right value?" Spec audits check "did we
    build what we said we would build?" The 12 issues found by the audit
    were all cases where the implementation drifted from the spec without
    any test failing.

    Practical recommendation: after unit tests pass, run an automated audit
    that reads the spec and checks each requirement against the actual
    implementation. This catches the gap between "working code" and "correct
    code" that traditional testing misses.
stance: >-
  Unit tests verify code works but spec audits are needed to verify code matches
  intent
evidence:
  - id: INS-260330-A3B7
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260403-5C1D
    type: EXTENDS
    classified_at: '2026-04-03'
---

91 unit tests all passed, but an automated spec audit found 12 issues —
missing DB columns, wrong MASTER_INDEX format, missing health checks,
search formula problems. Unit tests verify that code works as implemented;
spec audits verify that the implementation matches the original intent.

These are fundamentally different verification levels. Unit tests check
"does this function return the right value?" Spec audits check "did we
build what we said we would build?" The 12 issues found by the audit
were all cases where the implementation drifted from the spec without
any test failing.

Practical recommendation: after unit tests pass, run an automated audit
that reads the spec and checks each requirement against the actual
implementation. This catches the gap between "working code" and "correct
code" that traditional testing misses.

---
id: INS-260627-0723
domain: ai-development
topic: system-building
title: Make human reports reconcile with schema-validated artifacts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - structured-output
  - agent-run
  - schemas
  - verification
  - reporting
sources:
  - type: blog
    title: >-
      GitHub - cloudflare/security-audit-skill: A coding-agent skill for
      multi-phase security audits with independently verified, machine-readable
      findings
    url: 'https://github.com/cloudflare/security-audit-skill'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Readable summaries and machine-readable ledgers should be checked against
    each other before a run closes.
  standard: >-
    Cloudflare's audit skill writes human-readable findings and a
    `findings.json` artifact validated against `report-schema.json`, then uses
    independent verification to correct, reject, or confirm each structured
    claim and reconcile the prose report afterward. This prevents the common
    agent failure where the polished narrative says more than the checked
    artifact supports.


    AgentRun should make this a default closure pattern for non-trivial
    automations: a prose report can explain, but the structured ledger must
    encode the claims, evidence, side effects, and gates. The tradeoff is schema
    maintenance overhead, but it buys repeatability, diffability, and safer
    handoffs.
stance: >-
  Agent workflows should produce both readable reports and schema-validated
  structured outputs, then reconcile them after independent verification so the
  two cannot drift.
related:
  - INS-260628-D947
  - INS-260627-699E
  - INS-260627-9E58
  - INS-260626-14AE
  - INS-260320-6F8E
---
Cloudflare's audit skill writes human-readable findings and a `findings.json` artifact validated against `report-schema.json`, then uses independent verification to correct, reject, or confirm each structured claim and reconcile the prose report afterward. This prevents the common agent failure where the polished narrative says more than the checked artifact supports.

AgentRun should make this a default closure pattern for non-trivial automations: a prose report can explain, but the structured ledger must encode the claims, evidence, side effects, and gates. The tradeoff is schema maintenance overhead, but it buys repeatability, diffability, and safer handoffs.

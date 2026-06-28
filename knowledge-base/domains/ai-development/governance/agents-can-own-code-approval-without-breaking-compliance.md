---
id: INS-260605-683B
domain: ai-development
topic: governance
title: Agents can own code approval without breaking compliance
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - code-review
  - compliance
  - automation
  - risk
  - audit-controls
sources:
  - type: youtube
    title: >-
      How Building with AI Can Double the Throughput of Your Engineering Team —
      Brian Scanlan, Intercom
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4_VQBbs2iQA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Humans-in-the-loop aren't required for SOC 2 / ISO 27001 / HIPAA —
    agent-based approval with strong audit controls can remove risk rather than
    add it.
  standard: >-
    As Intercom's bottleneck shifted from writing code to reviewing it, they
    moved approvals to agents. Their automatic approver hits a 17.6%
    auto-approval rate, built not by naively asking 'hey Claude, can you approve
    this?' but through detailed backtesting on prior data, human-labeled outputs
    to calibrate confidence levels, and shaping PRs toward small, safe, simple
    changes (which, Scanlan notes, they probably always should have been).


    The compliance claim is the surprising part: working with auditors, they
    confirmed you do not need humans in the loop to meet SOC 2, ISO 27001, or
    HIPAA — but 'you do need to know exactly what you're doing' and have
    auditing controls in place. Scanlan argues agents actually remove risk
    because 'humans aren't actually as good as agents when they're
    well-defined.' Confidence is medium because this reflects one company's
    auditor relationship and a modest auto-approval rate; the principle
    (compliance is about controls and auditability, not mandatory human gates)
    generalizes, but the specifics will vary by auditor and domain.
stance: >-
  Well-defined agents can perform code review and approval more reliably than
  humans while still meeting SOC 2, ISO 27001, and HIPAA requirements.
related:
  - INS-260403-23AA
  - INS-260603-6B3D
  - INS-260627-B5F2
  - INS-260411-27AA
  - INS-260627-F3B6
---
As Intercom's bottleneck shifted from writing code to reviewing it, they moved approvals to agents. Their automatic approver hits a 17.6% auto-approval rate, built not by naively asking 'hey Claude, can you approve this?' but through detailed backtesting on prior data, human-labeled outputs to calibrate confidence levels, and shaping PRs toward small, safe, simple changes (which, Scanlan notes, they probably always should have been).

The compliance claim is the surprising part: working with auditors, they confirmed you do not need humans in the loop to meet SOC 2, ISO 27001, or HIPAA — but 'you do need to know exactly what you're doing' and have auditing controls in place. Scanlan argues agents actually remove risk because 'humans aren't actually as good as agents when they're well-defined.' Confidence is medium because this reflects one company's auditor relationship and a modest auto-approval rate; the principle (compliance is about controls and auditability, not mandatory human gates) generalizes, but the specifics will vary by auditor and domain.

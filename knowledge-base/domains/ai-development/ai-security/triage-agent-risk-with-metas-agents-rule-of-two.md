---
id: INS-260628-EF78
domain: ai-development
topic: ai-security
title: Triage agent risk with Meta's 'agents rule of two'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-security
  - threat-modeling
  - rule-of-two
  - risk-assessment
  - sandboxing
sources:
  - type: youtube
    title: 'Hacking Subagents Into Codex CLI — Brian John, Betterup'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5eJqXtevlXg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before deploying an agent, classify it on three dimensions — does it process
    untrustworthy input, access sensitive data, and change state or communicate
    externally — and treat lower-risk as still-not-no-risk.
  standard: >-
    John grounds the security discussion in Meta's 'agents rule of two' paper,
    which reduces agent risk to three questions: Is the agent processing
    untrustworthy input? Does it have access to sensitive systems or private
    data? Can it change state or communicate externally? Applying the framework
    to his Codex subagent setup, he judges that there is no untrustworthy input,
    but there is access to a proprietary codebase and the ability to change
    state and talk to OpenAI's API — placing it in a lower-risk-but-not-no-risk
    band.


    The value of the framework is that it makes a fuzzy 'is this safe?' question
    concrete and forces an honest per-axis accounting rather than a hand-wave.
    The three axes also map directly onto mitigations: untrusted input argues
    for input isolation, sensitive access argues for least-privilege sandboxing,
    and state-change/egress argues for constraining what the agent can write or
    send.


    John's explicit caveat is the durable takeaway: lower risk does not mean no
    risk, and each operator must make their own determination given their own
    state, data, and egress surface. Use the rule of two as a triage checklist
    before wiring an agent into any system, and treat a 'low' rating as a reason
    to add guardrails, not skip them.
stance: >-
  An agent's risk should be assessed across three axes — untrusted input,
  sensitive access, and ability to change state or communicate externally — and
  lower risk never means no risk.
related:
  - INS-260403-4A16
  - INS-260410-D03C
  - INS-260411-F649
  - INS-260423-FF52
  - INS-260605-AE67
  - INS-260626-1C28
  - INS-260627-9EBD
  - INS-260627-8ADF
  - INS-260627-B7F7
  - INS-260627-79FC
---
John grounds the security discussion in Meta's 'agents rule of two' paper, which reduces agent risk to three questions: Is the agent processing untrustworthy input? Does it have access to sensitive systems or private data? Can it change state or communicate externally? Applying the framework to his Codex subagent setup, he judges that there is no untrustworthy input, but there is access to a proprietary codebase and the ability to change state and talk to OpenAI's API — placing it in a lower-risk-but-not-no-risk band.

The value of the framework is that it makes a fuzzy 'is this safe?' question concrete and forces an honest per-axis accounting rather than a hand-wave. The three axes also map directly onto mitigations: untrusted input argues for input isolation, sensitive access argues for least-privilege sandboxing, and state-change/egress argues for constraining what the agent can write or send.

John's explicit caveat is the durable takeaway: lower risk does not mean no risk, and each operator must make their own determination given their own state, data, and egress surface. Use the rule of two as a triage checklist before wiring an agent into any system, and treat a 'low' rating as a reason to add guardrails, not skip them.

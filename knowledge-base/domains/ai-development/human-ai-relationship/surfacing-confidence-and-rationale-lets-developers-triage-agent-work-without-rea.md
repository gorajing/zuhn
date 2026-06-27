---
id: INS-260627-386E
domain: ai-development
topic: human-ai-relationship
title: >-
  Surfacing confidence and rationale lets developers triage agent work without
  reading the code
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - confidence-scoring
  - agent-ux
  - trust
  - cognitive-load
  - code-review
sources:
  - type: youtube
    title: 'Proactive Agents – Kath Korevec, Google Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3u8xc0zLec'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Confidence labels plus rationale and code location turn agent suggestions
    into a triageable queue instead of a code-review burden.
  standard: >-
    In the Jules demo, enabling proactivity makes the agent index the whole
    codebase and surface candidate tasks — to-dos, best-practice updates — each
    tagged with a confidence signal: high (green), medium (purple), low
    (yellow). The developer can start, drill into, or delete each item without
    writing a prompt or reading the underlying code first. When a task starts,
    the agent shows the suggested code, its location, and a rationale for why it
    wants to work there.


    The design insight is that the UX is what makes delegation viable. By
    externalizing the agent's own confidence and reasoning, the interface lets a
    developer make accept/reject decisions at a glance — 'less cognitive load' —
    rather than auditing every change line by line. This is the concrete
    mechanism by which trust is earned: the agent doesn't just act, it explains
    what it thinks it can achieve and why, so the human can calibrate how much
    to delegate. It pairs with adversarial-critic and screenshot-verification
    steps that make the agent's quality legible to the human reviewer.
stance: >-
  Showing each proactive suggestion with a confidence level, a rationale, and
  the exact code location lets developers approve or reject agent work at low
  cognitive load and builds the trust needed to delegate.
related:
  - INS-260405-4523
  - INS-260530-D34F
  - INS-260627-11C1
  - INS-260330-8F07
  - INS-260626-5375
  - INS-260626-690F
---
In the Jules demo, enabling proactivity makes the agent index the whole codebase and surface candidate tasks — to-dos, best-practice updates — each tagged with a confidence signal: high (green), medium (purple), low (yellow). The developer can start, drill into, or delete each item without writing a prompt or reading the underlying code first. When a task starts, the agent shows the suggested code, its location, and a rationale for why it wants to work there.

The design insight is that the UX is what makes delegation viable. By externalizing the agent's own confidence and reasoning, the interface lets a developer make accept/reject decisions at a glance — 'less cognitive load' — rather than auditing every change line by line. This is the concrete mechanism by which trust is earned: the agent doesn't just act, it explains what it thinks it can achieve and why, so the human can calibrate how much to delegate. It pairs with adversarial-critic and screenshot-verification steps that make the agent's quality legible to the human reviewer.

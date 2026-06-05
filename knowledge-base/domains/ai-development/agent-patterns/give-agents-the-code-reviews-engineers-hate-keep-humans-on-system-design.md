---
id: INS-260605-20CB
domain: ai-development
topic: agent-patterns
title: 'Give agents the code reviews engineers hate, keep humans on system design'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-review
  - human-in-the-loop
  - agentic-review
  - division-of-labor
sources:
  - type: youtube
    title: >-
      Agents Don't Do Standups: Building the Post-Engineer Engineering Org —
      Mike Spitz, PFF
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VMemhtlsoNk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Offload nitpicky style/naming/convention review to agents and reserve human
    review for big-picture system design.
  standard: >-
    PFF deliberately did NOT use agents for the code reviews engineers normally
    do — system design and architectural judgment. Instead they pointed agents
    at the reviews engineers hate receiving: variable naming, style violations,
    'this doesn't fit our conventions,' and other opinionated nits. This does
    two things at once: it removes the emotional friction of a human critiquing
    another human's style, and it frees engineers to focus their review
    attention on the parts that actually require human judgment.


    This is a sharper division of labor than 'let agents review everything.' The
    criterion is not difficulty but emotional cost and determinism: the more
    mechanical and opinion-laden the feedback, the better a candidate it is for
    an agent. It pairs with their broader pattern of pushing verifiable,
    deterministic tasks (feature flags for trunk-based development, generating
    interactive elements and their analytics) onto agents while humans stay on
    spec, design, security, and product feel.
stance: >-
  Agents should own opinionated, low-emotion code review (style, naming,
  conventions) while humans retain review of system design and architecture.
related:
  - INS-260603-73D5
  - PRI-260328-F723
  - INS-260320-1B10
  - INS-260603-6B3D
  - INS-260530-D34F
---
PFF deliberately did NOT use agents for the code reviews engineers normally do — system design and architectural judgment. Instead they pointed agents at the reviews engineers hate receiving: variable naming, style violations, 'this doesn't fit our conventions,' and other opinionated nits. This does two things at once: it removes the emotional friction of a human critiquing another human's style, and it frees engineers to focus their review attention on the parts that actually require human judgment.

This is a sharper division of labor than 'let agents review everything.' The criterion is not difficulty but emotional cost and determinism: the more mechanical and opinion-laden the feedback, the better a candidate it is for an agent. It pairs with their broader pattern of pushing verifiable, deterministic tasks (feature flags for trunk-based development, generating interactive elements and their analytics) onto agents while humans stay on spec, design, security, and product feel.

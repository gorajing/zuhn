---
id: INS-260605-07E5
domain: ai-development
topic: agent-patterns
title: 'Enforce agent behavior with code gates, not prompt instructions'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - state-machine
  - agent-orchestration
  - harness
  - reliability
sources:
  - type: youtube
    title: >-
      How I deleted 95% of my agent skills and got better results — Nick Nisi,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vy7o1g2iHY8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build a state machine with gates between agents so steps can't be skipped,
    instead of trusting prompt instructions the model can ignore.
  standard: >-
    Nisi's 'Case' harness started as a Claude skill but suffered context drop as
    complexity grew — the agent would forget or silently skip tasks, even
    admitting 'you told me to do that, I decided not to.' Rebuilding it on a
    TypeScript state machine with five agents (implementer, verifier, reviewer,
    closer, retro) made the gates between agents the important part, not the
    agents themselves. The verifier must pass before the reviewer runs; reviewer
    issues bounce back to the implementer; the closer can't act until work is
    provably done. The control flow lives outside the model's discretion, so
    'should I do this?' is never the model's decision. The practitioner's
    framing: your job was never about writing code, it was about building the
    systems agents run inside.
stance: >-
  Reliable agentic systems must structurally enforce required steps via a state
  machine rather than instructing the model to do them.
related:
  - INS-260605-E693
  - INS-260626-DB00
  - INS-260327-BF89
  - INS-260625-A5E7
  - INS-260625-B6E9
---
Nisi's 'Case' harness started as a Claude skill but suffered context drop as complexity grew — the agent would forget or silently skip tasks, even admitting 'you told me to do that, I decided not to.' Rebuilding it on a TypeScript state machine with five agents (implementer, verifier, reviewer, closer, retro) made the gates between agents the important part, not the agents themselves. The verifier must pass before the reviewer runs; reviewer issues bounce back to the implementer; the closer can't act until work is provably done. The control flow lives outside the model's discretion, so 'should I do this?' is never the model's decision. The practitioner's framing: your job was never about writing code, it was about building the systems agents run inside.

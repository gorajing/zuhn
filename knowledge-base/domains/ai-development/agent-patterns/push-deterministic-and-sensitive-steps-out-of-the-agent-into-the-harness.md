---
id: INS-260605-8C71
domain: ai-development
topic: agent-patterns
title: Push deterministic and sensitive steps out of the agent into the harness
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness
  - secrets
  - determinism
  - security
  - login-handler
sources:
  - type: youtube
    title: 'Harnesses in AI: A Deep Dive — Tejas Kumar, IBM'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=C_GG5g38vLU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sensitive, predictable steps like authentication belong in deterministic
    harness code that holds the secrets, not in the non-deterministic agent
    loop.
  standard: >-
    Rather than putting credentials in the system prompt and hoping the agent
    logs in correctly, Kumar adds a login handler that runs on every iteration
    of the agent loop. It cheaply checks the browser's current URL; if not on a
    login page it does nothing, but if it is, it programmatically fills
    credentials (which can be environment variables or secrets the harness file
    has access to) and submits the form deterministically and securely — then
    injects a message into the queue telling the agent 'I'm the harness, I
    logged you in, you're good now.' This is the core design principle of
    harnessing: anything that can be made deterministic or that requires
    privileged access to secrets is lifted out of the probabilistic model and
    handled by ordinary, auditable, secure engineering code. The agent is
    anchored to something stable, exactly like a climber clipped to a mountain
    or a dog on a leash.
stance: >-
  Operations that can be done deterministically or that touch secrets should run
  in the harness, not be delegated to the model.
related:
  - INS-260625-C697
  - INS-260605-0BA3
  - INS-260605-BC6F
  - INS-260514-4FDC
  - INS-260619-B1A8
  - INS-260605-2E60
---
Rather than putting credentials in the system prompt and hoping the agent logs in correctly, Kumar adds a login handler that runs on every iteration of the agent loop. It cheaply checks the browser's current URL; if not on a login page it does nothing, but if it is, it programmatically fills credentials (which can be environment variables or secrets the harness file has access to) and submits the form deterministically and securely — then injects a message into the queue telling the agent 'I'm the harness, I logged you in, you're good now.' This is the core design principle of harnessing: anything that can be made deterministic or that requires privileged access to secrets is lifted out of the probabilistic model and handled by ordinary, auditable, secure engineering code. The agent is anchored to something stable, exactly like a climber clipped to a mountain or a dog on a leash.

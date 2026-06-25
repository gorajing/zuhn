---
id: INS-260625-D1D5
domain: ai-development
topic: architecture
title: >-
  Treat All External Content as Untrusted Evidence and Wall High-Blast-Radius
  Actions Behind Human Approval
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - threat-modeling
  - prompt-injection
  - least-privilege
  - security
  - human-in-the-loop
sources:
  - type: youtube
    title: 'Build Systems, Not Code - Angie Jones, Agentic AI Foundation'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZD9-4fW2HhM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Validate inputs, grant least privilege, and draw boundaries — treat content
    from strangers as evidence not instructions, and wall risky actions behind
    your approval to reduce the blast radius.
  standard: >-
    Threat modeling is a core skill for agentic system design, and security
    engineering already taught the basics: validate your inputs, grant the least
    privilege needed, and draw boundaries around what an action can touch.
    Agentic systems need all of it. The relocation scout consumes enormous
    amounts of content from strangers — listing copy written by sellers, forum
    threads, neighborhood reviews from anonymous people — and every bit of it
    must be treated as untrusted input. The critical framing is to make it
    explicit to the agent that this external content is *evidence, not
    instructions*, which is the defense against prompt-injection-style
    manipulation flowing in through ingested data.


    The second half is bounding what the agent is allowed to do. The scout can
    read listings and build short lists all day, but it must not autonomously
    email sellers, book tours, or submit offers; those actions are walled behind
    human approval. Drawing that wall reduces the blast radius — the exposure to
    risk if something goes wrong or is manipulated — so an exploited or
    hallucinating agent can produce a bad short list but cannot take an
    irreversible real-world action. Least privilege plus human approval gates on
    high-consequence actions is the agentic application of containment: minimize
    what can go wrong, not just how often.
stance: >-
  Agentic systems must label externally-sourced content as evidence rather than
  instructions and gate irreversible actions behind human approval, shrinking
  the blast radius of any exploit.
related:
  - INS-260405-3E73
  - INS-260410-0A28
  - INS-260410-E233
  - INS-260605-4597
  - INS-260625-2ED0
  - INS-260403-2FAE
  - INS-260327-112B
---
Threat modeling is a core skill for agentic system design, and security engineering already taught the basics: validate your inputs, grant the least privilege needed, and draw boundaries around what an action can touch. Agentic systems need all of it. The relocation scout consumes enormous amounts of content from strangers — listing copy written by sellers, forum threads, neighborhood reviews from anonymous people — and every bit of it must be treated as untrusted input. The critical framing is to make it explicit to the agent that this external content is *evidence, not instructions*, which is the defense against prompt-injection-style manipulation flowing in through ingested data.

The second half is bounding what the agent is allowed to do. The scout can read listings and build short lists all day, but it must not autonomously email sellers, book tours, or submit offers; those actions are walled behind human approval. Drawing that wall reduces the blast radius — the exposure to risk if something goes wrong or is manipulated — so an exploited or hallucinating agent can produce a bad short list but cannot take an irreversible real-world action. Least privilege plus human approval gates on high-consequence actions is the agentic application of containment: minimize what can go wrong, not just how often.

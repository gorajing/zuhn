---
id: INS-260605-6722
domain: ai-development
topic: agent-patterns
title: 'Give agents problems, not tasks'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - skills
  - delegation
  - intent
  - claude-code
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
    Hand the agent the problem and let it figure out which skills to invoke,
    rather than spelling out 'run skill X to do Y.'
  standard: >-
    Intercom is deliberately moving its engineers away from imperative prompting
    ('run this skill to do a thing') toward describing the problem or task and
    letting the agent decide how to solve it. Scanlan admits the imperative
    style is 'still kind of necessary' and he does it a lot, but the
    higher-leverage mode is delegating intent.


    His concrete example: pulled into a security incident where Snowflake table
    metadata had leaked to a public GitHub repo, he habitually opened Claude
    Code and told it to join a Slack channel and take a look — not knowing a
    skill already encapsulated the company's data-breach policies and criteria.
    The agent inferred intent, downloaded the files, ran the full analysis,
    concluded it was innocuous, and listed next steps in ~2 minutes — a task
    that would have taken him 20 minutes of hunting for the right policy. This
    only works when a rich library of well-written skills already exists for the
    agent to discover and route to.
stance: >-
  Describing the problem and letting the agent select its own skills outperforms
  prescribing the exact task to run.
related:
  - INS-260320-F8FD
  - INS-260501-9503
  - INS-260605-6591
  - INS-260605-D3C7
  - INS-260605-5B0A
  - INS-260605-9276
  - INS-260605-BAB5
  - INS-260605-BDFF
  - INS-260605-2A69
  - INS-260625-9721
---
Intercom is deliberately moving its engineers away from imperative prompting ('run this skill to do a thing') toward describing the problem or task and letting the agent decide how to solve it. Scanlan admits the imperative style is 'still kind of necessary' and he does it a lot, but the higher-leverage mode is delegating intent.

His concrete example: pulled into a security incident where Snowflake table metadata had leaked to a public GitHub repo, he habitually opened Claude Code and told it to join a Slack channel and take a look — not knowing a skill already encapsulated the company's data-breach policies and criteria. The agent inferred intent, downloaded the files, ran the full analysis, concluded it was innocuous, and listed next steps in ~2 minutes — a task that would have taken him 20 minutes of hunting for the right policy. This only works when a rich library of well-written skills already exists for the agent to discover and route to.

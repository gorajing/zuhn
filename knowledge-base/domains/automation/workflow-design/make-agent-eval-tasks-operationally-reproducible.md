---
id: INS-260627-47A6
domain: automation
topic: workflow-design
title: Make agent eval tasks operationally reproducible
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - automation
  - verification
  - agentrun
sources:
  - type: blog
    title: >-
      GitHub - pinecone-io/cultivar: Use cultivar to test your Agent Skills, run
      them in sandboxes, and across different agents.
    url: 'https://github.com/pinecone-io/cultivar'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An eval task is not just an intent; it is the runnable environment around
    the intent.
  standard: >-
    Cultivar task YAML treats setup, verify, teardown, required env vars, and
    pass/fail criteria as first-class fields. That lets the harness abort on
    missing secrets, capture verification output for the grader, and preserve
    enough state to debug failures. For AgentRun, recurring automations should
    define acceptance gates and environment assumptions in a similarly runnable
    form instead of relying on prose instructions alone.
  deep: >-
    The tradeoff is authoring overhead. That overhead is worth paying for
    workflows that will recur or influence code because it turns a qualitative
    agent transcript into a repeatable test object.
subtopic: agent-evals
stance: >-
  Agent eval tasks should bundle the prompt, environment preflight, setup,
  verification, teardown, and grading criteria so failures are reproducible
  outside the original conversation.
related:
  - INS-260605-A8A9
  - INS-260625-9644
  - INS-260627-D21B
  - INS-260626-B04D
  - INS-260625-0E60
  - INS-260625-8A55
---
Cultivar task YAML treats setup, verify, teardown, required env vars, and pass/fail criteria as first-class fields. That lets the harness abort on missing secrets, capture verification output for the grader, and preserve enough state to debug failures. For AgentRun, recurring automations should define acceptance gates and environment assumptions in a similarly runnable form instead of relying on prose instructions alone.

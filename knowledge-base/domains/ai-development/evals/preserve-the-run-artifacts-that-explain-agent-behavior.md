---
id: INS-260627-068D
domain: ai-development
topic: evals
title: Preserve the run artifacts that explain agent behavior
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tracing
  - evals
  - agentrun
  - debugging
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
  one_line: A pass/fail score is too thin; keep the artifacts needed to diagnose why.
  standard: >-
    Cultivar writes structured JSON, readable markdown conversations, raw JSONL
    event streams, setup/verify/teardown logs, captured workdirs, and grader
    output per variant. This makes the eval inspectable after the sandbox
    disappears and supports cost/duration analysis alongside correctness.
    AgentRun should continue pushing toward artifact completeness, especially
    for automation runs that may be inspected days later.
  deep: >-
    The tradeoff is artifact volume and privacy exposure. The mitigation is
    scoped retention and secret scrubbing, not collapsing everything into a
    single summary.
subtopic: tracing
stance: >-
  Agent eval systems should save human-readable transcripts, raw event streams,
  stderr, verification logs, workdir outputs, usage, cost, and timing as
  separate artifacts because different failure investigations need different
  evidence.
related:
  - INS-260626-33BE
  - INS-260628-3746
  - INS-260627-7541
  - INS-260627-AD6B
  - INS-260627-E660
---
Cultivar writes structured JSON, readable markdown conversations, raw JSONL event streams, setup/verify/teardown logs, captured workdirs, and grader output per variant. This makes the eval inspectable after the sandbox disappears and supports cost/duration analysis alongside correctness. AgentRun should continue pushing toward artifact completeness, especially for automation runs that may be inspected days later.

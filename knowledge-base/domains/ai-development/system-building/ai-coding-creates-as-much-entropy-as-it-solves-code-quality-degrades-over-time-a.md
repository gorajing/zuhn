---
id: INS-260501-5582
domain: ai-development
topic: system-building
title: >-
  AI coding creates as much entropy as it solves — code quality degrades over
  time and we don't know how to manage it
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - ai-coding
  - technical-debt
  - entropy
  - productivity-gains
  - code-quality
sources:
  - type: youtube
    title: 'Box CEO: Why Big Companies Are Falling Behind on AI | a16z'
    author: a16z
    url: 'https://youtu.be/dvVbA9OcBqs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI lets you ship 80% of a feature fast, then security review + code review +
    integration becomes the rate-limiter, and the entropy you introduced
    compounds over time.
  standard: >-
    Casado's observation from being close to AI coding companies: when you code
    with AI, your code 'kind of gets worse over time pretty materially.' You're
    introducing as many problems as solutions. The productivity gains are real
    but the entropy growth is also real, and the field doesn't yet know how to
    manage it. Levie's Box experience: AI built 80-90% of recent features, but
    security review and code review remained the rate-limiters, and the
    realistic team productivity multiplier is 2-3x, not 5-10x.


    The deeper pattern: the constraints that prevent big systems from imploding
    (security review, code review, deployment pipelines, operational guardrails)
    are exactly the things vibe-coding bypasses. One-shotters can claim 5-10x
    because they don't have the constraint of preventing the whole thing from
    imploding. Big-company executives wake up every morning thinking 'the wheels
    are coming off today' — they're rationally paranoid because they live the
    constraint. For builders: assume entropy growth at 1.2-1.5x productivity,
    meaning a real 1.3-2x net gain, not the 5-10x demos. For Zuhn editorially:
    this is the strongest counter to the 'AI productivity is solved' narrative —
    it's not solved, the entropy management problem is the new bottleneck and
    it's research-blocked, not engineering-blocked.
stance: >-
  Despite productivity gains, AI-generated code accumulates technical debt
  faster than human-written code, and the field doesn't yet have processes or
  tooling to wrap that growing entropy — making the realistic productivity
  multiplier 2-3x rather than 5-10x once you account for review, security, and
  maintenance overhead.
related:
  - INS-260402-CC68
  - INS-260412-B69B
  - INS-260626-3F6D
  - INS-260627-765B
  - INS-260627-1EF5
  - INS-260514-8424
  - INS-260627-D3C7
---
Casado's observation from being close to AI coding companies: when you code with AI, your code 'kind of gets worse over time pretty materially.' You're introducing as many problems as solutions. The productivity gains are real but the entropy growth is also real, and the field doesn't yet know how to manage it. Levie's Box experience: AI built 80-90% of recent features, but security review and code review remained the rate-limiters, and the realistic team productivity multiplier is 2-3x, not 5-10x.

The deeper pattern: the constraints that prevent big systems from imploding (security review, code review, deployment pipelines, operational guardrails) are exactly the things vibe-coding bypasses. One-shotters can claim 5-10x because they don't have the constraint of preventing the whole thing from imploding. Big-company executives wake up every morning thinking 'the wheels are coming off today' — they're rationally paranoid because they live the constraint. For builders: assume entropy growth at 1.2-1.5x productivity, meaning a real 1.3-2x net gain, not the 5-10x demos. For Zuhn editorially: this is the strongest counter to the 'AI productivity is solved' narrative — it's not solved, the entropy management problem is the new bottleneck and it's research-blocked, not engineering-blocked.

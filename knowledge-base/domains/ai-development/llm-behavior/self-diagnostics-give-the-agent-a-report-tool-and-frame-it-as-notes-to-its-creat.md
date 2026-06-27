---
id: INS-260605-6752
domain: ai-development
topic: llm-behavior
title: >-
  Self-diagnostics: give the agent a report tool and frame it as notes to its
  creator
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-diagnostics
  - prompt-engineering
  - tool-design
  - alignment
  - introspection
sources:
  - type: youtube
    title: >-
      Everything You Need To Know About Agent Observability — Danny Gollapalli &
      Zubin Koticha, Raindrop
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-aM2EDTiaMs'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reasoning models are good enough at self-introspection that a simple report
    tool, encouraged in the system prompt and framed as giving feedback to its
    creators, surfaces tool failures, capability gaps, user frustration, and
    self-correction hacks — but RLHF politeness makes naming and framing
    critical.
  standard: >-
    Modern reasoning models have become good at self-introspection (inspired by
    OpenAI's work training models to confess misalignment — scheming,
    hallucinations, unintended shortcuts). In practice an agent already 'knows'
    when a tool is repeatedly failing (its trace rants about it), when a user is
    frustrated (it turns diplomatic), and when it hits a capability gap (the
    user wants an action it has no tool for — effectively a built-in feature
    request). Self-correction shortcuts are also catchable: a sandboxed coding
    agent whose write tool fails will instinctively use bash heredoc syntax to
    bypass the failure, which is good if it completes the task but a security
    concern.


    Setup is minimal: one report tool plus a single line in the system prompt
    encouraging the agent to call it before giving its final answer to surface
    anything noteworthy. You can route the report straight to Slack — no
    observability platform required — making this the least-effort observability
    available. The catch is that models are RLHF-trained to be polished and
    resist self-incrimination: naming the tool 'unsafe_bash_use' suppresses
    reporting (the model decides it got the job done, so it's fine), while a
    generic 'report' tool framed around giving feedback to its creators works
    well. Tool naming, description, and framing must be tuned, and the mechanism
    only has strong pull when the model feels it might 'get in trouble' — so it
    works best for capability gaps and noteworthy behavior, not as a substitute
    for a real classifier on genuinely unsafe use.
stance: >-
  A single report tool plus a system-prompt nudge framed as feedback to the
  agent's creators is the lowest-effort way to surface agent failures it already
  knows about.
related:
  - INS-260409-A803
  - INS-260627-A392
  - INS-260625-3768
  - INS-260605-287A
  - INS-260626-485E
  - INS-260625-3EE6
---
Modern reasoning models have become good at self-introspection (inspired by OpenAI's work training models to confess misalignment — scheming, hallucinations, unintended shortcuts). In practice an agent already 'knows' when a tool is repeatedly failing (its trace rants about it), when a user is frustrated (it turns diplomatic), and when it hits a capability gap (the user wants an action it has no tool for — effectively a built-in feature request). Self-correction shortcuts are also catchable: a sandboxed coding agent whose write tool fails will instinctively use bash heredoc syntax to bypass the failure, which is good if it completes the task but a security concern.

Setup is minimal: one report tool plus a single line in the system prompt encouraging the agent to call it before giving its final answer to surface anything noteworthy. You can route the report straight to Slack — no observability platform required — making this the least-effort observability available. The catch is that models are RLHF-trained to be polished and resist self-incrimination: naming the tool 'unsafe_bash_use' suppresses reporting (the model decides it got the job done, so it's fine), while a generic 'report' tool framed around giving feedback to its creators works well. Tool naming, description, and framing must be tuned, and the mechanism only has strong pull when the model feels it might 'get in trouble' — so it works best for capability gaps and noteworthy behavior, not as a substitute for a real classifier on genuinely unsafe use.

---
id: INS-260626-A645
domain: ai-development
topic: agent-patterns
title: >-
  Human-in-the-loop should be a deterministic interception layer, not an
  LLM-requested behavior
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - agent-safety
  - tool-calling
  - control-flow
  - n8n
sources:
  - type: youtube
    title: Human-in-the-Loop Automation with n8n — Liam McGarrigle
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=tDArkCqjA-c'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Put the human-review step in the execution path as a brick wall the agent
    cannot route around, instead of trusting the model to ask first.
  standard: >-
    n8n's human-review step works by intercepting the tool call mid-flight: the
    agent calls the tool, and the platform freezes execution and waits for an
    approve/deny before the tool actually runs. Critically, the agent doesn't
    know the review step exists — it thinks it's calling the tool directly. This
    is a fundamentally different design than prompting the LLM to 'ask before
    sending an email.' A prompt-based gate is probabilistic and can be
    jailbroken, forgotten, or skipped; an interception gate is a deterministic
    property of the runtime — the speaker calls it a brick wall where 'nothing
    gets past it.'


    The practical consequence is that safety stops depending on model behavior.
    You can swap models, change prompts, or face adversarial inputs and the
    destructive action still cannot fire without a human. This is the inverse of
    the common pattern where confirmation lives in the system prompt and
    silently degrades as the conversation grows or the model is changed.


    The design generalizes beyond n8n: any agent platform that wraps tool
    execution can insert a synchronous approval barrier between 'agent decided
    to call tool X' and 'tool X actually executes.' The gate should sit at the
    execution boundary, not in the reasoning layer.
stance: >-
  Approval gates should structurally intercept tool calls so the action is
  impossible without human sign-off, rather than asking the LLM to pause for
  confirmation.
related:
  - INS-260605-20CB
  - INS-260603-6B3D
  - PRI-260328-F723
  - PRI-260406-3EF8
  - INS-260627-F5F2
---
n8n's human-review step works by intercepting the tool call mid-flight: the agent calls the tool, and the platform freezes execution and waits for an approve/deny before the tool actually runs. Critically, the agent doesn't know the review step exists — it thinks it's calling the tool directly. This is a fundamentally different design than prompting the LLM to 'ask before sending an email.' A prompt-based gate is probabilistic and can be jailbroken, forgotten, or skipped; an interception gate is a deterministic property of the runtime — the speaker calls it a brick wall where 'nothing gets past it.'

The practical consequence is that safety stops depending on model behavior. You can swap models, change prompts, or face adversarial inputs and the destructive action still cannot fire without a human. This is the inverse of the common pattern where confirmation lives in the system prompt and silently degrades as the conversation grows or the model is changed.

The design generalizes beyond n8n: any agent platform that wraps tool execution can insert a synchronous approval barrier between 'agent decided to call tool X' and 'tool X actually executes.' The gate should sit at the execution boundary, not in the reasoning layer.

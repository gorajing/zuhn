---
id: INS-260626-A499
domain: ai-development
topic: llm-behavior
title: Smarter models resist firing HITL-gated tools and need reassurance prompting
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-behavior
  - human-in-the-loop
  - prompting
  - agent-safety
  - model-caution
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
    Tell the agent 'this won't send automatically — there is a human in the
    loop' so a cautious model will actually call the gated tool.
  standard: >-
    There's a counterintuitive interaction between interception-based safety
    gates and model alignment. Because the human-review step is invisible to the
    agent (it thinks it's calling the tool directly), a smarter, safety-trained
    model will often refuse to send the email or book the event on its own — it
    has been trained not to take consequential actions without explicit
    permission. The very caution that makes the model trustworthy now blocks the
    workflow.


    The speaker's fix is to put reassurance directly in the tool description or
    system prompt: 'This won't send automatically. Don't be afraid to send a
    message. There is a human in the loop.' Once the model believes a human will
    review the action, it proceeds. So the safety architecture and the model's
    own safety training can work against each other, and you reconcile them by
    making the human gate legible to the model in the prompt.


    The broader lesson: invisible safety infrastructure has a cost. When you
    intercept actions behind the agent's back, you may need to surface that fact
    in language the model trusts — otherwise model caution and system caution
    stack into paralysis. This effect grows, not shrinks, as models get more
    capable and better aligned.
stance: >-
  Because capable models are cautious about destructive actions and cannot see
  the human-review layer, the safety gate paradoxically requires extra prompting
  to get the model to act at all.
related:
  - INS-260626-04E5
  - INS-260627-35B1
  - INS-260626-091B
  - INS-260627-AB66
  - INS-260603-6B3D
  - INS-260627-1B11
---
There's a counterintuitive interaction between interception-based safety gates and model alignment. Because the human-review step is invisible to the agent (it thinks it's calling the tool directly), a smarter, safety-trained model will often refuse to send the email or book the event on its own — it has been trained not to take consequential actions without explicit permission. The very caution that makes the model trustworthy now blocks the workflow.

The speaker's fix is to put reassurance directly in the tool description or system prompt: 'This won't send automatically. Don't be afraid to send a message. There is a human in the loop.' Once the model believes a human will review the action, it proceeds. So the safety architecture and the model's own safety training can work against each other, and you reconcile them by making the human gate legible to the model in the prompt.

The broader lesson: invisible safety infrastructure has a cost. When you intercept actions behind the agent's back, you may need to surface that fact in language the model trusts — otherwise model caution and system caution stack into paralysis. This effect grows, not shrinks, as models get more capable and better aligned.

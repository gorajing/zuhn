---
id: INS-260625-EC7C
domain: ai-development
topic: architecture
title: Run the coding agent's brain outside the sandbox it controls
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - background-agents
  - agent-architecture
  - security
  - sandboxing
  - devin
sources:
  - type: youtube
    title: >-
      Devin’s 80% Moment: Background Agents, 7x PRs, & End of Hand-Held Coding —
      Walden Yan & Cole Murray
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=0fgJPhYcbVk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep the agent's brain in a worker/control plane and use the sandbox only as
    'hands,' so an unpredictable AI can't exfiltrate the secrets it would need
    if it ran inside the box.
  standard: >-
    Cognition built Devin from the start to 'separate the brain from the
    machine,' and Walden Yan argues the out-of-the-box harness is the better
    architecture despite being more work. When you run the agent in the box,
    every secret it needs to operate has to live in that box — and because AI
    behavior is unpredictable, it can accidentally exfiltrate those secrets or
    do other unintended damage. The out-of-the-box pattern instead runs the
    'brain' in a control plane that makes tool calls into a sandbox serving as
    disposable 'hands.' OpenAI and Anthropic's managed-agents offerings are
    described as variations of this same pattern.


    The security benefit is the headline, but the architecture also lets you
    reuse existing dev-box infrastructure (the box only needs to hold the most
    narrowly-scoped secrets the user is already allowed to use) and cleanly
    handle multi-user permission scoping through one GitHub app. The tradeoff is
    genuine added complexity: out-of-box means managing agent state across the
    brain/sandbox boundary, whereas in-box keeps all state localized. Cole
    Murray initially built OpenInspect in-box for simplicity but plans to
    migrate the agent out of the box long-term, adding control-plane callbacks
    so secrets stay out of the sandbox — a signal that the security argument
    wins as systems mature.
stance: >-
  Background coding agents should run the agent's reasoning in a control plane
  outside the execution sandbox so secrets never live in the box the AI freely
  manipulates.
related:
  - INS-260605-BC6F
  - INS-260605-41AE
  - INS-260605-3206
  - INS-260605-74CC
  - INS-260327-DC4C
  - INS-260626-A05F
---
Cognition built Devin from the start to 'separate the brain from the machine,' and Walden Yan argues the out-of-the-box harness is the better architecture despite being more work. When you run the agent in the box, every secret it needs to operate has to live in that box — and because AI behavior is unpredictable, it can accidentally exfiltrate those secrets or do other unintended damage. The out-of-the-box pattern instead runs the 'brain' in a control plane that makes tool calls into a sandbox serving as disposable 'hands.' OpenAI and Anthropic's managed-agents offerings are described as variations of this same pattern.

The security benefit is the headline, but the architecture also lets you reuse existing dev-box infrastructure (the box only needs to hold the most narrowly-scoped secrets the user is already allowed to use) and cleanly handle multi-user permission scoping through one GitHub app. The tradeoff is genuine added complexity: out-of-box means managing agent state across the brain/sandbox boundary, whereas in-box keeps all state localized. Cole Murray initially built OpenInspect in-box for simplicity but plans to migrate the agent out of the box long-term, adding control-plane callbacks so secrets stay out of the sandbox — a signal that the security argument wins as systems mature.

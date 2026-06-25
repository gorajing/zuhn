---
id: INS-260625-D44A
domain: ai-development
topic: llm-behavior
title: Humans and AI agents are vulnerable to disjoint classes of attack
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - alien-intelligence
  - social-engineering
  - browser-agents
  - adversarial-examples
  - security-mindset
sources:
  - type: youtube
    title: >-
      AI Security After Codex and Claude Code — Zico Kolter & Matt Fredrikson,
      Gray Swan
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=j8BAficRjEc'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Things that fool humans rarely fool AI and things that fool AI would never
    fool a human — AI is an alien intelligence with its own attack surface.
  standard: >-
    Gray Swan ran a 'human vs browser agent robustness' challenge where red
    teamers could either phish a human gig worker or prompt-inject a browser
    agent on the same tasks. Skilled phishers fooled humans 60-70% of the time,
    while a couple of frontier models proved surprisingly hard to inject. But
    the headline finding is qualitative, not quantitative: the two failure modes
    barely overlap. A human would never forward all their email to a random
    address because a message claims 'this is a simulation,' yet
    state-of-the-art models still fall for exactly that; conversely, AI resisted
    manipulations that reliably catch people.


    The deeper claim is that LLMs are a genuinely different — 'alien' — form of
    intelligence, and adversarial attacks are one of the clearest ways to
    surface that difference. The security consequence is concrete: you cannot
    reason about an AI agent's safety by analogy to a careful human employee,
    and you cannot reuse human-centric defenses (training, awareness). AI
    deployments need their own threat models and their own red teaming. It also
    undercuts the self-driving-car analogy of 'safer than a human operator' —
    the right framing isn't safer or less safe, it's differently vulnerable.
stance: >-
  AI agents and humans fall for fundamentally different attacks, so human
  security intuitions do not transfer to AI systems.
related:
  - INS-260325-2C31
  - INS-260323-97A1
  - INS-260325-2B9F
  - INS-260330-1B5E
  - INS-260330-6F6D
  - INS-260403-F157
  - INS-260405-C3B0
  - INS-260405-4C63
  - INS-260403-9A8A
  - INS-260409-67A5
---
Gray Swan ran a 'human vs browser agent robustness' challenge where red teamers could either phish a human gig worker or prompt-inject a browser agent on the same tasks. Skilled phishers fooled humans 60-70% of the time, while a couple of frontier models proved surprisingly hard to inject. But the headline finding is qualitative, not quantitative: the two failure modes barely overlap. A human would never forward all their email to a random address because a message claims 'this is a simulation,' yet state-of-the-art models still fall for exactly that; conversely, AI resisted manipulations that reliably catch people.

The deeper claim is that LLMs are a genuinely different — 'alien' — form of intelligence, and adversarial attacks are one of the clearest ways to surface that difference. The security consequence is concrete: you cannot reason about an AI agent's safety by analogy to a careful human employee, and you cannot reuse human-centric defenses (training, awareness). AI deployments need their own threat models and their own red teaming. It also undercuts the self-driving-car analogy of 'safer than a human operator' — the right framing isn't safer or less safe, it's differently vulnerable.

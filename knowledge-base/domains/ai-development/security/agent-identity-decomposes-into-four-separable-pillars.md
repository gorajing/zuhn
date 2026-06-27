---
id: INS-260627-1224
domain: ai-development
topic: security
title: Agent identity decomposes into four separable pillars
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - identity
  - framework
  - agent-architecture
  - authentication
  - fine-grained-access
sources:
  - type: youtube
    title: 'Identity for AI Agents - Patrick Riley & Carlos Galan, Auth0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VSdV-AdSlis'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The four pillars are: the agent must know who the user is, call APIs on the
    user's behalf, request the user's confirmation for risky actions, and access
    only finely-scoped resources.
  standard: >-
    Auth0 frames agent identity around four pillars that hold across interactive
    chatbots, task runners, and fully autonomous agent-to-agent systems. (1) 'AI
    needs to know who I am'—without authenticated subject identity, no
    restriction or policy can be applied because the actor is anonymous. (2) 'AI
    needs to call APIs on my behalf'—agents are never alone; they consume other
    services and must act under delegated authority. (3) 'AI can request my
    confirmation'—for riskier operations the agent must be able to reach the
    human for approval rather than act unsupervised. (4) 'AI access should be
    fine-grained'—the user grants access to specific resources, not blanket
    access to every collection or document.


    The value of the decomposition is that it prevents conflating distinct
    mechanisms: authentication (who), delegation (on whose behalf),
    human-in-the-loop approval (when to interrupt), and authorization scoping
    (what exactly). Each pillar maps to a different protocol surface—OIDC login,
    token exchange, back-channel async auth, and OAuth scopes respectively.
    Teams building agent platforms can use the four pillars as a coverage
    checklist; a system that nails delegation but skips fine-grained scoping, or
    that authenticates the user but offers no approval channel for risky
    actions, has an identity gap regardless of how good the rest is.
stance: >-
  Identity for agents is not one problem but four separable
  concerns—authentication, delegated API access, human confirmation, and
  fine-grained scoping—each requiring its own mechanism.
related:
  - INS-260404-29EC
  - INS-260404-E5EB
  - INS-260627-E831
  - INS-260519-20E0
  - INS-260627-FEB4
  - INS-260627-8B75
---
Auth0 frames agent identity around four pillars that hold across interactive chatbots, task runners, and fully autonomous agent-to-agent systems. (1) 'AI needs to know who I am'—without authenticated subject identity, no restriction or policy can be applied because the actor is anonymous. (2) 'AI needs to call APIs on my behalf'—agents are never alone; they consume other services and must act under delegated authority. (3) 'AI can request my confirmation'—for riskier operations the agent must be able to reach the human for approval rather than act unsupervised. (4) 'AI access should be fine-grained'—the user grants access to specific resources, not blanket access to every collection or document.

The value of the decomposition is that it prevents conflating distinct mechanisms: authentication (who), delegation (on whose behalf), human-in-the-loop approval (when to interrupt), and authorization scoping (what exactly). Each pillar maps to a different protocol surface—OIDC login, token exchange, back-channel async auth, and OAuth scopes respectively. Teams building agent platforms can use the four pillars as a coverage checklist; a system that nails delegation but skips fine-grained scoping, or that authenticates the user but offers no approval channel for risky actions, has an identity gap regardless of how good the rest is.

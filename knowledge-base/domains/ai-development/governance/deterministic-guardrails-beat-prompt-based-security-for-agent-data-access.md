---
id: INS-260625-386B
domain: ai-development
topic: governance
title: Deterministic guardrails beat prompt-based security for agent data access
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-security
  - access-control
  - guardrails
  - make-invalid-states-unrepresentable
sources:
  - type: youtube
    title: Power intelligent agents with AI-native databases
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=7awKinJhGPo'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A parameterized secure view exposes only the current end user's data to the
    agent, so even a prompt-injected or manipulated query cannot reach other
    users' rows — security is enforced by structure, not by the model's good
    behavior.
  standard: >-
    The text-to-SQL demo deliberately did not reference the underlying
    user_charges table; it queried a parameterized secure view that returns only
    the current end user's data. The reasoning is explicit: a smart attacker
    could manipulate the generated query to reach other users' data, so the
    security boundary must be deterministic, not probabilistic. The view is
    virtual (cheap) and the scoping happens below the agent, where the agent
    cannot override it.


    This is the 'make invalid states unrepresentable' principle applied to agent
    authorization. The losing pattern is to grant the agent broad table access
    and rely on prompt instructions ('only query the current user's rows') or
    LLM-side filtering — a probabilistic guardrail that prompt injection or
    clever phrasing defeats. The winning pattern is to constrain the data
    surface itself so the unauthorized rows are simply not reachable through the
    path the agent has. The general rule for agentic systems handling
    multi-tenant or sensitive data: every access-control invariant the agent
    must respect should be enforced by a deterministic layer beneath it (views,
    row-level security, scoped credentials, capability tokens), never by
    instructions the model is asked to follow. Guardrails that depend on the
    model choosing correctly will eventually be circumvented.
stance: >-
  Scope an agent's data access with a structural mechanism (parameterized secure
  views) rather than trusting the LLM not to manipulate the query.
related:
  - INS-260329-919F
  - INS-260403-2FAE
  - INS-260330-BA13
  - INS-260603-6C2A
  - INS-260605-19B4
  - INS-260625-D943
  - INS-260605-BC6F
  - INS-260625-BEFE
---
The text-to-SQL demo deliberately did not reference the underlying user_charges table; it queried a parameterized secure view that returns only the current end user's data. The reasoning is explicit: a smart attacker could manipulate the generated query to reach other users' data, so the security boundary must be deterministic, not probabilistic. The view is virtual (cheap) and the scoping happens below the agent, where the agent cannot override it.

This is the 'make invalid states unrepresentable' principle applied to agent authorization. The losing pattern is to grant the agent broad table access and rely on prompt instructions ('only query the current user's rows') or LLM-side filtering — a probabilistic guardrail that prompt injection or clever phrasing defeats. The winning pattern is to constrain the data surface itself so the unauthorized rows are simply not reachable through the path the agent has. The general rule for agentic systems handling multi-tenant or sensitive data: every access-control invariant the agent must respect should be enforced by a deterministic layer beneath it (views, row-level security, scoped credentials, capability tokens), never by instructions the model is asked to follow. Guardrails that depend on the model choosing correctly will eventually be circumvented.

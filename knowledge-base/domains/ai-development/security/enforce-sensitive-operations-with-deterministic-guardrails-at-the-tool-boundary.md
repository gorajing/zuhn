---
id: INS-260627-08E7
domain: ai-development
topic: security
title: >-
  Enforce sensitive operations with deterministic guardrails at the tool
  boundary, not prompts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - guardrails
  - multi-tenant
  - agent-safety
  - deterministic-enforcement
sources:
  - type: youtube
    title: "Bending a Public MCP Server Without Breaking It —\_Nimrod Hauser, Baz"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=U00AOI1eJUE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Intercept the tool call before it executes, validate the sensitive arguments
    with deterministic logic, and refuse invocation if they violate your
    constraints.
  standard: >-
    Prompts and tool descriptions are necessary but not sufficient for sensitive
    operations. Agents are non-deterministic and subject to well-known failure
    modes — needle-in-a-haystack, lost-in-the-middle — where they simply ignore
    instructions. In a multi-tenant architecture an agent that isn't fully aware
    of your folder/database/schema layout can leak one client's data to another.
    For anything mission-critical you want enforcement that is not up to agentic
    decision-making.


    The concrete pattern: wrap the tool so that, before invoking it, you extract
    the sensitive argument (in the demo, the screenshot save path), run
    deterministic validation (is the chosen path relative to the allowed
    screenshots-root folder?), and only then pass through to the real
    invocation. If validation fails, the call never reaches the underlying tool.
    This moves the security boundary from 'the agent hopefully behaves' to 'the
    code structurally prevents the bad action,' which is the only reliable
    guarantee when the actor is non-deterministic — and it matters even more
    with third-party tools that have no knowledge of your architecture.
stance: >-
  Mission-critical or security-sensitive tool behavior must be enforced with
  deterministic code intercepting the invocation, because agents will eventually
  ignore prompt instructions.
related:
  - INS-260625-26FE
  - INS-260626-04E5
  - INS-260602-EA48
  - INS-260626-475E
  - INS-260605-D0A0
---
Prompts and tool descriptions are necessary but not sufficient for sensitive operations. Agents are non-deterministic and subject to well-known failure modes — needle-in-a-haystack, lost-in-the-middle — where they simply ignore instructions. In a multi-tenant architecture an agent that isn't fully aware of your folder/database/schema layout can leak one client's data to another. For anything mission-critical you want enforcement that is not up to agentic decision-making.

The concrete pattern: wrap the tool so that, before invoking it, you extract the sensitive argument (in the demo, the screenshot save path), run deterministic validation (is the chosen path relative to the allowed screenshots-root folder?), and only then pass through to the real invocation. If validation fails, the call never reaches the underlying tool. This moves the security boundary from 'the agent hopefully behaves' to 'the code structurally prevents the bad action,' which is the only reliable guarantee when the actor is non-deterministic — and it matters even more with third-party tools that have no knowledge of your architecture.

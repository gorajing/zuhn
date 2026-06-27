---
id: INS-260627-3E71
domain: ai-development
topic: security
title: Agent authorization must live in deterministic code outside the LLM's control
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - authorization
  - prompt-injection
  - oauth
  - agent-security
  - scopes
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
    Scopes not bound to the connection can never enter the access token because
    the SDK—not the LLM—runs the authorization request before tool execution.
  standard: >-
    When an attendee asked whether a prompt injection could trick the agent into
    granting itself a broader scope, the Auth0 engineers answered that it would
    have 'no effect': scopes that are not part of the established connection
    'can never end up in the access token.' The reason is architectural, not a
    filter—the authorization request is run by the SDK/wrapper 'before the tool
    execution,' and as they put it, 'it's just old-fashioned code, it's not LLM
    code.' The LLM is exposed the tool and asked to call it, but it never
    controls the token-issuance step or sees the authorization details.


    This is the central security principle for agentic systems: treat the model
    as untrusted input and keep the authorization boundary in code the model
    cannot influence. If the connection defines a fixed set of scopes, no amount
    of clever prompting expands them, because the upstream service rejects or
    silently ignores any unrecognized scope. The practical mandate is to never
    let an agent assemble its own authorization request from natural-language
    intent—bind permissions at connection-definition time and have deterministic
    middleware attach tokens, so the attack surface for scope escalation is
    structurally closed rather than defended against case by case.
stance: >-
  Authorization decisions for agents belong in deterministic application code,
  not in the LLM's reasoning path, so prompt injection cannot escalate access.
related:
  - INS-260320-B8B0
  - INS-260605-A2B7
  - INS-260605-3588
  - INS-260626-93C7
  - INS-260626-8B56
  - INS-260627-30A2
  - INS-260627-B416
---
When an attendee asked whether a prompt injection could trick the agent into granting itself a broader scope, the Auth0 engineers answered that it would have 'no effect': scopes that are not part of the established connection 'can never end up in the access token.' The reason is architectural, not a filter—the authorization request is run by the SDK/wrapper 'before the tool execution,' and as they put it, 'it's just old-fashioned code, it's not LLM code.' The LLM is exposed the tool and asked to call it, but it never controls the token-issuance step or sees the authorization details.

This is the central security principle for agentic systems: treat the model as untrusted input and keep the authorization boundary in code the model cannot influence. If the connection defines a fixed set of scopes, no amount of clever prompting expands them, because the upstream service rejects or silently ignores any unrecognized scope. The practical mandate is to never let an agent assemble its own authorization request from natural-language intent—bind permissions at connection-definition time and have deterministic middleware attach tokens, so the attack surface for scope escalation is structurally closed rather than defended against case by case.

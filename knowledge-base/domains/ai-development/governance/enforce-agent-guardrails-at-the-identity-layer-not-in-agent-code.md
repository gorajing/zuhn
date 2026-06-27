---
id: INS-260625-52B6
domain: ai-development
topic: governance
title: 'Enforce agent guardrails at the identity layer, not in agent code'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - iam
  - least-privilege
  - governance
  - guardrails
sources:
  - type: youtube
    title: 'Agent development and AgentOps with BigQuery, ADK, and MCP'
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=tQGalTBL1Ek'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Split tools into read-only and read-write surfaces and let the data owner
    deny write tools via IAM, so the developer can't accidentally grant an agent
    destructive power.
  standard: >-
    The managed BigQuery MCP server exposes read-only tools (which block all
    DML/DDL so an agent can't unintentionally modify data) and a separate
    read-write tool — but the key governance move is that, because the server
    integrates with platform IAM, a data administrator can attach an IAM deny
    policy on the read-write tools. The presenter's framing is the principle:
    'you don't have to depend upon your agent developer to make the right choice
    — you as a data owner can protect it from your project.' This is
    least-privilege relocated to the layer that actually owns the risk. Two
    transferable rules follow. (1) Default the agent to a read-only capability
    set and make write a deliberately granted, separately-scoped surface. (2)
    Put the kill switch where the data owner sits (infrastructure/identity), not
    where the agent author sits (application code), because the person who bears
    the blast radius should hold the control, and IAM denies are auditable and
    centrally enforceable in a way that code review is not. Carrefour reinforces
    the same theme from the authentication side: queries run under the end
    user's OAuth credentials, never the agent's identity, so the agent can only
    ever touch data that specific user is already authorized to see.
stance: >-
  Data owners should be able to block an agent's write access through platform
  IAM policy, so safety doesn't depend on the agent developer making the right
  choice.
related:
  - INS-260605-82BC
  - INS-260625-BEFE
  - INS-260626-A05F
  - INS-260626-BC79
  - INS-260605-35B4
  - INS-260602-EA48
---
The managed BigQuery MCP server exposes read-only tools (which block all DML/DDL so an agent can't unintentionally modify data) and a separate read-write tool — but the key governance move is that, because the server integrates with platform IAM, a data administrator can attach an IAM deny policy on the read-write tools. The presenter's framing is the principle: 'you don't have to depend upon your agent developer to make the right choice — you as a data owner can protect it from your project.' This is least-privilege relocated to the layer that actually owns the risk. Two transferable rules follow. (1) Default the agent to a read-only capability set and make write a deliberately granted, separately-scoped surface. (2) Put the kill switch where the data owner sits (infrastructure/identity), not where the agent author sits (application code), because the person who bears the blast radius should hold the control, and IAM denies are auditable and centrally enforceable in a way that code review is not. Carrefour reinforces the same theme from the authentication side: queries run under the end user's OAuth credentials, never the agent's identity, so the agent can only ever touch data that specific user is already authorized to see.

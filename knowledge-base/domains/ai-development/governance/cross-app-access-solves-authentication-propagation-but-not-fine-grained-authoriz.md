---
id: INS-260626-57BA
domain: ai-development
topic: governance
title: >-
  Cross-app access solves authentication propagation but not fine-grained
  authorization
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - authorization
  - authentication
  - scopes
  - mcp
  - governance
  - least-privilege
sources:
  - type: youtube
    title: >-
      One Login to Rule Them All: Cross-App Access for MCP — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=EmhRyw6xeT0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Under XAA you log into the downstream app as yourself with your full
    existing permissions — the IDP brokers identity but does not attenuate
    scope, and scoped delegation is not in the spec.
  standard: >-
    Asked directly whether XAA solves authorization, Galow said no — by default
    it is purely about authentication. You connect to Figma as yourself and
    inherit exactly the permissions your Figma account already has; the IDP does
    not narrow them. The audience parameter (e.g. mcp.figma.com) only routes the
    request to the right app, it does not hack or expand scopes. So an agent
    acting on your behalf gets your full standing authority at the resource,
    which may be far more than the task requires.


    This is the genuinely hard, still-open frontier: extending the broker to
    issue caveated grants — 'yes, grant cross-app access, but only with these
    reduced permissions' — so the principle of least privilege applies to
    agents, not just to humans. It is acknowledged as important but explicitly
    not part of the spec today. The lesson for anyone designing or evaluating
    agent identity systems: solving identity propagation is necessary but not
    sufficient. Always ask the second question — once the agent is
    authenticated, what bounds its authority? — because that is where the actual
    blast-radius risk lives, and it is the part current standards leave
    unsolved.
stance: >-
  Identity-propagation standards like XAA prove who you are across apps but do
  nothing to scope what the agent can do, leaving fine-grained authorization as
  the unsolved hard problem.
related:
  - INS-260410-1430
  - PRI-260320-097F
  - INS-260626-34FB
  - INS-260323-92AD
  - INS-260626-AD63
---
Asked directly whether XAA solves authorization, Galow said no — by default it is purely about authentication. You connect to Figma as yourself and inherit exactly the permissions your Figma account already has; the IDP does not narrow them. The audience parameter (e.g. mcp.figma.com) only routes the request to the right app, it does not hack or expand scopes. So an agent acting on your behalf gets your full standing authority at the resource, which may be far more than the task requires.

This is the genuinely hard, still-open frontier: extending the broker to issue caveated grants — 'yes, grant cross-app access, but only with these reduced permissions' — so the principle of least privilege applies to agents, not just to humans. It is acknowledged as important but explicitly not part of the spec today. The lesson for anyone designing or evaluating agent identity systems: solving identity propagation is necessary but not sufficient. Always ask the second question — once the agent is authenticated, what bounds its authority? — because that is where the actual blast-radius risk lives, and it is the part current standards leave unsolved.

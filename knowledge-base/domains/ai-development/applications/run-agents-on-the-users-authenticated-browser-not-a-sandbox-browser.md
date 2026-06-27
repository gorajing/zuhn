---
id: INS-260627-09D8
domain: ai-development
topic: applications
title: 'Run agents on the user''s authenticated browser, not a sandbox browser'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - browser-agents
  - authentication
  - automation
  - agent-capabilities
  - permissions
sources:
  - type: youtube
    title: >-
      Building Intelligent Research Agents with Manus - Ivan Leo, Manus AI (now
      Meta Superintelligence)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=xz0-brt56L8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The unlock for real-world browser agents is operating on the user's
    authenticated sessions, which a sandboxed cloud browser can never see.
  standard: >-
    Manus's 'browser operator' kickstarts a tab on the user's own machine rather
    than running in a sandboxed cloud browser like Browserbase. The stated
    reason is decisive: platforms where the user is already logged in —
    LinkedIn, Instagram, internal tools, a government booking portal — are
    unreachable from a fresh sandbox browser that has no session cookies.
    Driving the real local browser inherits all of that authenticated state for
    free, which is exactly where the economically valuable tasks live.


    This reframes the browser-agent design space. The hard problem is not
    rendering or clicking; headless sandboxes already do that. The hard problem
    is access, and access is gated by authentication. An agent that can act
    inside sessions the user has already established can do things no API-only
    or sandbox-only agent can, and those instances can be fanned out in parallel
    (the 'Mac Mini in the basement running scheduled tasks' pattern).


    The tradeoff is permission risk, which is why Manus is deliberately holding
    the feature back: you don't want an agent randomly spinning up tabs or
    acting on accounts without explicit per-action approval. The design lesson
    is to treat the authenticated local browser as a privileged capability gated
    behind a real permission system — ship the access only once you can let the
    user approve which browser and which actions, not before.
stance: >-
  Agents that drive the user's own logged-in browser unlock high-value tasks
  that sandboxed cloud browsers structurally cannot reach.
related:
  - INS-260626-DCB8
  - INS-260605-41AE
  - INS-260605-BC6F
  - INS-260323-A64F
  - INS-260410-85AD
---
Manus's 'browser operator' kickstarts a tab on the user's own machine rather than running in a sandboxed cloud browser like Browserbase. The stated reason is decisive: platforms where the user is already logged in — LinkedIn, Instagram, internal tools, a government booking portal — are unreachable from a fresh sandbox browser that has no session cookies. Driving the real local browser inherits all of that authenticated state for free, which is exactly where the economically valuable tasks live.

This reframes the browser-agent design space. The hard problem is not rendering or clicking; headless sandboxes already do that. The hard problem is access, and access is gated by authentication. An agent that can act inside sessions the user has already established can do things no API-only or sandbox-only agent can, and those instances can be fanned out in parallel (the 'Mac Mini in the basement running scheduled tasks' pattern).

The tradeoff is permission risk, which is why Manus is deliberately holding the feature back: you don't want an agent randomly spinning up tabs or acting on accounts without explicit per-action approval. The design lesson is to treat the authenticated local browser as a privileged capability gated behind a real permission system — ship the access only once you can let the user approve which browser and which actions, not before.

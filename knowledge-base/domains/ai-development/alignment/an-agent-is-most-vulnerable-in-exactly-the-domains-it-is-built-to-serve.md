---
id: INS-260605-5CF8
domain: ai-development
topic: alignment
title: An agent is most vulnerable in exactly the domains it is built to serve
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - red-teaming
  - attack-surface
  - agent-safety
sources:
  - type: youtube
    title: >-
      Spec-Driven Testing for Agents With A Brain the Size of A Planet — Steven
      Willmott, SafeIntelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UQKg0td-Bf4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent's spec doubles as an attack map: it is most willing to act — and
    most powerful — in precisely the domains it was designed for.
  standard: >-
    Willmott pulls the behavioral spec directly into security testing for two
    reasons. First, an agent is most willing to engage with the domains it's
    supposed to act in, so those are where it's most likely to be talked into
    something — the edges of its competence are the edges of its vulnerability.
    Second, the tasks it performs are where it holds the most power in your
    infrastructure (a banking agent can move money in the banking domain), so a
    compromise there does the most damage.


    The practical consequence: security and capability are not separate testing
    tracks. The same specification that says what the agent should do tells a
    red-teamer where to push. Pen-testing an agent without its task spec means
    probing blind; with the spec, you target the high-power, high-willingness
    surface where real exploits live.
stance: >-
  Knowing an agent's intended tasks tells you where it is most exploitable, so
  security testing should be driven by the spec.
related:
  - INS-260322-2E33
  - INS-260627-FEB4
  - INS-260327-94FE
  - INS-260605-74CC
  - INS-260624-595D
  - INS-260627-5004
  - INS-260626-3492
---
Willmott pulls the behavioral spec directly into security testing for two reasons. First, an agent is most willing to engage with the domains it's supposed to act in, so those are where it's most likely to be talked into something — the edges of its competence are the edges of its vulnerability. Second, the tasks it performs are where it holds the most power in your infrastructure (a banking agent can move money in the banking domain), so a compromise there does the most damage.

The practical consequence: security and capability are not separate testing tracks. The same specification that says what the agent should do tells a red-teamer where to push. Pen-testing an agent without its task spec means probing blind; with the spec, you target the high-power, high-willingness surface where real exploits live.

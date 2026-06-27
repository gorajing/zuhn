---
id: INS-260530-ADED
domain: ai-development
topic: limitations
title: >-
  Long-session support and cross-agent shared memory are the current frontiers
  of production agent frameworks
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-frameworks
  - google-adk
  - agent-memory
  - long-sessions
  - framework-gaps
sources:
  - type: audio
    title: paypal
date_extracted: '2026-05-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    PayPal's explicit feedback to the Google ADK team is that long-session
    support and shared cross-agent memory are missing — they've been bolting
    these on themselves, and other production teams hit the same gap.
  standard: >-
    This is forward-looking signal: a production deployer of one of the leading
    agent frameworks (Google ADK) is publicly naming the two gaps they had to
    patch around. Both are framework-level concerns, not application logic —
    long sessions are the difference between 'this agent ran for the 30-min
    triage' and 'this agent owned the incident from page to RCA.' Cross-agent
    shared memory is what lets the mitigation agent know what the triage agent
    learned without re-querying.


    The time-sensitive call: if you're choosing an agent framework today,
    evaluate it on these two axes specifically. The talk implies framework
    vendors who close this gap first will displace incumbents that don't.


    For Zuhn's own session-capture work (the new SessionEnd hook, claude-mem
    adapter, transcript parser), this is convergent evidence — persistent
    cross-session memory is the same primitive Zuhn already prioritizes at the
    knowledge layer.
stance: >-
  The next generation of agent frameworks must natively support long-running
  sessions and cross-agent shared memory — the current generation forces
  builders to bolt these on, which is where production failures cluster
related:
  - INS-260603-6FE3
  - INS-260329-818A
  - INS-260626-7681
  - INS-260605-D912
  - INS-260421-60D9
---
This is forward-looking signal: a production deployer of one of the leading agent frameworks (Google ADK) is publicly naming the two gaps they had to patch around. Both are framework-level concerns, not application logic — long sessions are the difference between 'this agent ran for the 30-min triage' and 'this agent owned the incident from page to RCA.' Cross-agent shared memory is what lets the mitigation agent know what the triage agent learned without re-querying.

The time-sensitive call: if you're choosing an agent framework today, evaluate it on these two axes specifically. The talk implies framework vendors who close this gap first will displace incumbents that don't.

For Zuhn's own session-capture work (the new SessionEnd hook, claude-mem adapter, transcript parser), this is convergent evidence — persistent cross-session memory is the same primitive Zuhn already prioritizes at the knowledge layer.

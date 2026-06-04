---
id: INS-260603-6FE3
domain: ai-development
topic: system-building
title: 'Data quality, not data volume, gates whether an agent is useful'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-quality
  - agent-design
  - data-freshness
  - garbage-in
  - enterprise-ai
sources:
  - type: audio
    title: panel
date_extracted: '2026-06-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Navish (Salesforce): 'the problem is not how large a dataset you give the
    agent, it's the quality' — a big silo of stale data just has the agent
    running the same query on old data; you have to keep the data updated for
    the agent to help.
  standard: >-
    A common enterprise assumption is that more data makes an AI agent more
    capable. The data-platform lead inverts this: volume without quality is
    worthless or harmful. A large silo of stale data doesn't expand what the
    agent can do — it just means the agent re-runs queries against outdated
    information and produces confidently-stale answers. The binding constraint
    is data freshness and quality, not quantity.


    This connects to a governance point the same panelist raised: organizations
    rush to deploy agents and grant them broad data and system permissions
    without knowing where their data came from, how current it is, or how it's
    secured. The combination — broad permissions plus unmanaged data quality —
    produces agents that act fast on bad inputs.


    The operational takeaway: before scaling an agent, invest in the data
    pipeline that keeps its inputs current and clean. An agent on a
    well-maintained smaller dataset beats an agent on a large stale silo. This
    is the agent-layer instance of the SOP/data-readiness theme from the
    AI-sustainability panel (clean, current, structured inputs are the
    prerequisite for AI value) and of Zuhn's own 'structured capture before
    extraction' discipline.
stance: >-
  Giving an agent a large dataset does not make it useful — stale or siloed data
  just makes the agent re-run the same queries on outdated information; agent
  usefulness is gated by data freshness/quality, not data volume
related:
  - INS-260328-EBBC
  - INS-260329-BE35
  - INS-260329-47DD
  - INS-260320-0F7C
  - INS-260405-2021
  - INS-260409-5CF4
  - INS-260409-8408
  - INS-260410-7ED2
  - INS-260410-315B
  - INS-260410-4D86
---
A common enterprise assumption is that more data makes an AI agent more capable. The data-platform lead inverts this: volume without quality is worthless or harmful. A large silo of stale data doesn't expand what the agent can do — it just means the agent re-runs queries against outdated information and produces confidently-stale answers. The binding constraint is data freshness and quality, not quantity.

This connects to a governance point the same panelist raised: organizations rush to deploy agents and grant them broad data and system permissions without knowing where their data came from, how current it is, or how it's secured. The combination — broad permissions plus unmanaged data quality — produces agents that act fast on bad inputs.

The operational takeaway: before scaling an agent, invest in the data pipeline that keeps its inputs current and clean. An agent on a well-maintained smaller dataset beats an agent on a large stale silo. This is the agent-layer instance of the SOP/data-readiness theme from the AI-sustainability panel (clean, current, structured inputs are the prerequisite for AI value) and of Zuhn's own 'structured capture before extraction' discipline.

---
id: INS-260627-E1BD
domain: ai-development
topic: infrastructure
title: Coding agents convert tolerated platform friction into hard blockers
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - platform-engineering
  - developer-experience
  - ai-agents
  - internal-tools
  - forcing-function
sources:
  - type: youtube
    title: "Platforms for Humans and Machines: Engineering for the Age of Agents —\_Juan Herreros Elorza"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cCRO3ChaYhM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents can't walk to another floor or ping a teammate to unblock a deploy,
    so the human workarounds that hid bad platform design become impossible and
    expose every friction point.
  standard: >-
    The talk opens with a developer who codes an app fine but then hits a wall
    deploying it: copy a pipeline from a teammate, debug an error that has
    nothing to do with their code, wait a week for the infra team to provision a
    database. Humans tolerate this because they can improvise — ask a person,
    escalate, wait. The key claim is that this same workflow is not merely
    harder but essentially impossible for a coding agent, which cannot go
    upstairs and talk to the infra team or wait days for a manual provisioning
    ticket.


    The consequence is that the agent acts as a forcing function: pain points
    developers absorbed silently suddenly become the rate-limiting factor on how
    productive the agent (and the developer using it) can be. Anything in a
    platform that depends on a specific human being available, on tribal
    knowledge, or on out-of-band communication is now a hard blocker rather than
    an annoyance.


    The practical reframe for platform teams is that 'best practices are still
    best practices' — relying on a teammate to know the deploy incantation or
    waiting on another team was never good, it was just survivable. Auditing a
    platform for agent-readiness is therefore a high-signal way to find the
    friction that was always there: if an agent can't complete a workflow
    end-to-end without a human in the loop, that workflow was already broken for
    humans too.
stance: >-
  Process friction that humans route around manually becomes an absolute
  productivity ceiling once agents are the primary users of a platform.
related:
  - INS-260410-6286
  - INS-260412-5049
  - INS-260410-CDDD
  - INS-260627-02E1
  - INS-260323-0827
---
The talk opens with a developer who codes an app fine but then hits a wall deploying it: copy a pipeline from a teammate, debug an error that has nothing to do with their code, wait a week for the infra team to provision a database. Humans tolerate this because they can improvise — ask a person, escalate, wait. The key claim is that this same workflow is not merely harder but essentially impossible for a coding agent, which cannot go upstairs and talk to the infra team or wait days for a manual provisioning ticket.

The consequence is that the agent acts as a forcing function: pain points developers absorbed silently suddenly become the rate-limiting factor on how productive the agent (and the developer using it) can be. Anything in a platform that depends on a specific human being available, on tribal knowledge, or on out-of-band communication is now a hard blocker rather than an annoyance.

The practical reframe for platform teams is that 'best practices are still best practices' — relying on a teammate to know the deploy incantation or waiting on another team was never good, it was just survivable. Auditing a platform for agent-readiness is therefore a high-signal way to find the friction that was always there: if an agent can't complete a workflow end-to-end without a human in the loop, that workflow was already broken for humans too.

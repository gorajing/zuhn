---
id: INS-260626-C4F7
domain: ai-development
topic: agent-patterns
title: >-
  Climb the autonomy ladder: move human effort from doing to babysitting to
  planning to review
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - autonomy
  - delegation
  - parallelism
  - review
  - leverage
sources:
  - type: youtube
    title: 'AgentCraft: Putting the Orc in Orchestration — Ido Salomon'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kR64LOqBBCU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Each rung of orchestration extracts the human from a tighter loop — first
    stop doing, then stop babysitting, then let agents decompose and plan, until
    your only job is reviewing outcomes.
  standard: >-
    Salomon's walkthrough is structured as a ladder of decreasing human
    involvement. First the agents find their own tasks ('quests') so you don't
    have to generate every idea. Then work runs in containers with a 'campaign
    orchestrator' that owns the babysitting, so you touch only planning and
    review. Then a cron job sources its own ideas (e.g., scan Twitter daily and
    implement) so you only decide direction. The decisive shift is that once
    generation is cheap, you stop investing in the plan — 'do it 10 times and
    pick the one that fits' — and move the work from planning to review. The
    actionable model: treat your remaining attention as the scarce resource and
    continually ask 'how do I take myself out of this loop?', accepting that
    review of parallel attempts becomes the highest-leverage place for a human
    to stand.
stance: >-
  You scale agents by repeatedly removing yourself from lower-level loops,
  pushing your attention up from execution toward planning and finally review.
related:
  - INS-260625-1520
  - PRI-260403-FBA8
  - INS-260327-C1A4
  - INS-260410-1030
  - INS-260619-B1A8
---
Salomon's walkthrough is structured as a ladder of decreasing human involvement. First the agents find their own tasks ('quests') so you don't have to generate every idea. Then work runs in containers with a 'campaign orchestrator' that owns the babysitting, so you touch only planning and review. Then a cron job sources its own ideas (e.g., scan Twitter daily and implement) so you only decide direction. The decisive shift is that once generation is cheap, you stop investing in the plan — 'do it 10 times and pick the one that fits' — and move the work from planning to review. The actionable model: treat your remaining attention as the scarce resource and continually ask 'how do I take myself out of this loop?', accepting that review of parallel attempts becomes the highest-leverage place for a human to stand.

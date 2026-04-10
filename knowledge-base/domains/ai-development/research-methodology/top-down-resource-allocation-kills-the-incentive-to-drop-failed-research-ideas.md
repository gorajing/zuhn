---
id: INS-260410-10C9
domain: ai-development
topic: research-methodology
title: Top-down resource allocation kills the incentive to drop failed research ideas
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - research-incentives
  - resource-allocation
  - team-dynamics
  - compute-budget
sources:
  - type: youtube
    title: 'Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=v0gjI__RyCY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >
    Google Brain's bottom-up 'one credit per researcher, pool them as you like'
    chip allocation rewarded dropping failed ideas; Gemini's top-down allocation
    leads every group to report 'my thing is working, give me more chips.'
  standard: >-
    Shazeer contrasts two resource-allocation regimes he's worked under. Google
    Brain ran a bottom-up UBI model: every researcher got one credit, and teams
    pooled credits to run the experiments they cared about. This meant that if
    your idea wasn't working, the rational move was to free your credit and join
    someone whose idea was working — honest self-assessment was rewarded.


    Gemini has been mostly top-down: leadership allocates compute based on
    pitches from groups. This produces better coordination and less duplicated
    work, but creates a perverse incentive: as a lead hearing from hundreds of
    groups, you hear 'my thing is going great, give me more chips' from
    everyone, because admitting failure means losing resources. The information
    you need to make allocation decisions is the exact information researchers
    are incentivized to hide.


    Shazeer's conclusion is that the future needs a mix — top-down for
    collaboration on big bets, bottom-up to preserve the willingness to drop
    losing experiments. Jeff Dean adds that humility is the personal version of
    this: 'to be able to drop an idea as soon as you see something better' is
    what distinguishes researchers with long careers across multiple fields.


    Application: if you run any team where resource allocation is centralized,
    explicitly carve out a bottom-up 'discretionary' slice (compute, time, or
    budget) that researchers can reallocate without asking permission. The goal
    isn't efficiency — it's preserving an honest signal about which ideas
    deserve to die.
stance: >-
  Centralized compute allocation makes researchers rationally oversell their
  projects, while bottom-up UBI-style allocation rewards honest reporting that
  something isn't working.
related:
  - INS-260330-3ECE
  - INS-260327-DE27
  - INS-260409-647D
  - INS-260404-CCE7
  - INS-260325-DA83
  - INS-260330-9D44
---
Shazeer contrasts two resource-allocation regimes he's worked under. Google Brain ran a bottom-up UBI model: every researcher got one credit, and teams pooled credits to run the experiments they cared about. This meant that if your idea wasn't working, the rational move was to free your credit and join someone whose idea was working — honest self-assessment was rewarded.

Gemini has been mostly top-down: leadership allocates compute based on pitches from groups. This produces better coordination and less duplicated work, but creates a perverse incentive: as a lead hearing from hundreds of groups, you hear 'my thing is going great, give me more chips' from everyone, because admitting failure means losing resources. The information you need to make allocation decisions is the exact information researchers are incentivized to hide.

Shazeer's conclusion is that the future needs a mix — top-down for collaboration on big bets, bottom-up to preserve the willingness to drop losing experiments. Jeff Dean adds that humility is the personal version of this: 'to be able to drop an idea as soon as you see something better' is what distinguishes researchers with long careers across multiple fields.

Application: if you run any team where resource allocation is centralized, explicitly carve out a bottom-up 'discretionary' slice (compute, time, or budget) that researchers can reallocate without asking permission. The goal isn't efficiency — it's preserving an honest signal about which ideas deserve to die.

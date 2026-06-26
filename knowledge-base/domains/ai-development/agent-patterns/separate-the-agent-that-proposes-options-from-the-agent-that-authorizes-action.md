---
id: INS-260605-F828
domain: ai-development
topic: agent-patterns
title: Separate the agent that proposes options from the agent that authorizes action
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - agent-decisions
  - human-in-the-loop
  - escalation
  - separation-of-concerns
sources:
  - type: youtube
    title: >-
      Context Graphs for Explainable, Decision-Aware AI Agents — Andreas
      Kollegger & Zaid Zaim, Neo4j
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=abvQEhvRI_c'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One agent's only job is to surface alternatives with pros and cons; a
    separate agent decides whether it has the authority to act or must escalate.
  standard: >-
    In the proposed decision workflow, the output of the analysis stage is
    deliberately NOT a decision — it is a ranked set of alternatives with pros
    and cons. The choice is handed to a second, compartmentalized agent whose
    sole responsibility is to decide whether it has the authority and certainty
    to act. If it does, it ranks the options and takes the action so the impact
    is felt. If it lacks authority or certainty, it escalates to a
    higher-privilege agent or a human in the loop.


    This 'either act or don't act, let somebody else make the call' boundary is
    the safety valve for autonomous systems. By making authorization an
    explicit, separable step, you get a clean place to insert human oversight
    and you prevent a single agent from both rationalizing an option and
    granting itself permission to execute it. The speaker favors highly focused,
    compartmentalized agents precisely because this separation is hard to
    maintain inside one monolithic prompt.
stance: >-
  Compartmentalizing 'propose alternatives' and 'decide whether I have authority
  to act' into distinct agents produces safer autonomous decisions than a single
  agent doing both.
related:
  - INS-260605-ED35
  - INS-260605-705B
  - INS-260403-0350
  - INS-260605-24AC
  - INS-260322-EAB6
---
In the proposed decision workflow, the output of the analysis stage is deliberately NOT a decision — it is a ranked set of alternatives with pros and cons. The choice is handed to a second, compartmentalized agent whose sole responsibility is to decide whether it has the authority and certainty to act. If it does, it ranks the options and takes the action so the impact is felt. If it lacks authority or certainty, it escalates to a higher-privilege agent or a human in the loop.

This 'either act or don't act, let somebody else make the call' boundary is the safety valve for autonomous systems. By making authorization an explicit, separable step, you get a clean place to insert human oversight and you prevent a single agent from both rationalizing an option and granting itself permission to execute it. The speaker favors highly focused, compartmentalized agents precisely because this separation is hard to maintain inside one monolithic prompt.

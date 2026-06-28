---
id: INS-260628-CBB0
domain: ai-development
topic: agent-patterns
title: >-
  A supervisory 'wisdom' agent gates sub-agent context and each sub-agent writes
  one shared graph
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - orchestration
  - knowledge-graphs
  - supervisory-agent
  - state-machine
sources:
  - type: youtube
    title: >-
      Wisdom-Driven Knowledge Augmented Generation at Scale - Chin Keong Lam,
      Patho AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=9AQOvT8LnMI'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Map a state diagram onto a supervisor agent that controls each sub-agent's
    visibility based on the current situation, while sub-agents each write their
    perspective into a centralized unified graph.
  standard: >-
    Lam implements his 'wisdom engine' as a supervisory agent overseeing
    specialized worker agents, mirroring a state diagram (wisdom guides
    decision-making, decision-making analyzes the situation, insight feeds
    back). The supervisor's core job is decision-making about context — it
    advises what each downstream agent is allowed to see based on the current
    situation, then routes control to the next node.


    The second structural choice is a single centralized graph as the shared
    substrate: the 'insight agent' scrapes social-media sentiment and writes its
    perspective into its portion of the graph, other agents write theirs, and
    the unified graph accumulates the taxonomy that drives the final advisory
    answer. This is sub-agents as context control rather than role-playing —
    each agent owns a slice of state and a narrow visibility window, and the
    supervisor enforces the state-machine transitions. The graph, not
    conversational hand-off, is how the agents integrate.
stance: >-
  A single supervisory agent that decides what each specialized sub-agent sees,
  with every sub-agent updating its slice of one unified knowledge graph,
  implements a state machine more reliably than flat retrieval.
related:
  - INS-260411-D060
  - INS-260411-6106
  - INS-260530-69DC
  - INS-260605-C00C
  - INS-260605-E693
  - INS-260628-4BA2
  - INS-260628-0DCE
---
Lam implements his 'wisdom engine' as a supervisory agent overseeing specialized worker agents, mirroring a state diagram (wisdom guides decision-making, decision-making analyzes the situation, insight feeds back). The supervisor's core job is decision-making about context — it advises what each downstream agent is allowed to see based on the current situation, then routes control to the next node.

The second structural choice is a single centralized graph as the shared substrate: the 'insight agent' scrapes social-media sentiment and writes its perspective into its portion of the graph, other agents write theirs, and the unified graph accumulates the taxonomy that drives the final advisory answer. This is sub-agents as context control rather than role-playing — each agent owns a slice of state and a narrow visibility window, and the supervisor enforces the state-machine transitions. The graph, not conversational hand-off, is how the agents integrate.

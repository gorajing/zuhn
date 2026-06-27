---
id: INS-260626-E00F
domain: ai-development
topic: agent-patterns
title: Skills with progressive discovery beat upfront planning for steering agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - planning
  - progressive-discovery
  - elicitation
  - human-in-the-loop
sources:
  - type: youtube
    title: 'Agents need more than a chat - Jacob Lauritzen, CTO Legora'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XNtkiQJ49Ps'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Planning only lets you steer at the root before the work reveals itself;
    skills inject judgment exactly where each unit of work happens and handle
    contingencies planning can't foresee.
  standard: >-
    Lauritzen models complex agent work as a DAG of sub-tasks and ranks the ways
    a human can impose control on it. Root-level-only control is the worst: you
    give an instruction, the agent disappears for 30 minutes, and you can only
    react to the final output. Planning is better — you align on the approach up
    front — but it has a fatal limit: to plan well you basically have to do all
    the work to know what to do, it's inefficient and question-heavy, and it
    cannot anticipate facts the agent only discovers mid-execution (e.g. a
    special clause in one contract). He compares planning to a coworker who
    agrees on an approach and then vanishes until delivery.


    Skills are 'really, really good' because they encode judgment into the nodes
    of work themselves — 'whenever you review confidentiality, do it this way' —
    and they support contingencies: a skill for a special EU termination law
    fires whenever the agent actually encounters that case, something planning
    cannot do. Progressive discovery means the agent picks up the right skill
    whatever it runs into. Where no skill exists, the next rung is elicitation:
    the agent asks the human. The robust pattern is to not block the agent —
    have it make a decision, unblock itself, and write the choice to a decision
    log the human can review and reverse later. He predicts planning will not
    stick around as the primary control mechanism.
stance: >-
  Encoding human judgment into skills at the node level steers complex agents
  better than aligning on a plan at the root.
related:
  - INS-260405-F1A2
  - INS-260403-30FF
  - INS-260410-2CBC
  - INS-260514-EE1D
  - INS-260605-A8A9
  - INS-260625-801B
  - PRI-260328-EE04
  - INS-260409-005E
  - INS-260410-1030
  - PRI-260403-52DF
---
Lauritzen models complex agent work as a DAG of sub-tasks and ranks the ways a human can impose control on it. Root-level-only control is the worst: you give an instruction, the agent disappears for 30 minutes, and you can only react to the final output. Planning is better — you align on the approach up front — but it has a fatal limit: to plan well you basically have to do all the work to know what to do, it's inefficient and question-heavy, and it cannot anticipate facts the agent only discovers mid-execution (e.g. a special clause in one contract). He compares planning to a coworker who agrees on an approach and then vanishes until delivery.

Skills are 'really, really good' because they encode judgment into the nodes of work themselves — 'whenever you review confidentiality, do it this way' — and they support contingencies: a skill for a special EU termination law fires whenever the agent actually encounters that case, something planning cannot do. Progressive discovery means the agent picks up the right skill whatever it runs into. Where no skill exists, the next rung is elicitation: the agent asks the human. The robust pattern is to not block the agent — have it make a decision, unblock itself, and write the choice to a decision log the human can review and reverse later. He predicts planning will not stick around as the primary control mechanism.

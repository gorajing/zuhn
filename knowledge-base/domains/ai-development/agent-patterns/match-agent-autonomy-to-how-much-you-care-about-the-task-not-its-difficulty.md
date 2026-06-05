---
id: INS-260605-B4B9
domain: ai-development
topic: agent-patterns
title: 'Match agent autonomy to how much you care about the task, not its difficulty'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-autonomy
  - human-in-the-loop
  - delegation
  - workflow
  - github-copilot
sources:
  - type: youtube
    title: 'Cooking with Agents in VS Code — Liam Hampton, Microsoft'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=dyHpnnlkTc8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pick local agents for work you want to stay in the weeds on, background
    agents for 50/50 supervision, and cloud agents for work you don't care to
    watch.
  standard: >-
    Hampton splits agents into three autonomy tiers and assigns tasks by his
    desired level of involvement rather than by complexity. He uses a hands-on
    local agent for writing tests because he wants to understand the codebase
    and be human-in-the-loop; a background agent for building a front-end UI
    where he wants roughly 50/50 oversight ('I don't want to be fully out of the
    loop, but I also don't want the arduous to-and-fro'); and a fully hands-off
    cloud agent for documentation, which he simply dislikes doing.


    The non-obvious move is that the selection criterion is *caring*, not
    *capability*. Writing tests isn't harder than writing docs — he chooses to
    supervise tests closely because correctness there compounds into his
    understanding of the system, while docs are a task he's happy to disown
    entirely ('don't really care if it messes things up'). This reframes the
    delegation decision: instead of asking 'can the agent handle this?', ask
    'how much do I need to verify and learn from this?' Tasks where your own
    comprehension is the deliverable stay local; tasks that are pure output and
    low personal stake go to the cloud.
stance: >-
  The right agent autonomy level is set by how much human oversight a task
  deserves, not by how hard the task is.
related:
  - INS-260501-4C5E
  - INS-260605-0C56
  - INS-260501-91C2
  - INS-260605-ED35
  - INS-260605-D055
---
Hampton splits agents into three autonomy tiers and assigns tasks by his desired level of involvement rather than by complexity. He uses a hands-on local agent for writing tests because he wants to understand the codebase and be human-in-the-loop; a background agent for building a front-end UI where he wants roughly 50/50 oversight ('I don't want to be fully out of the loop, but I also don't want the arduous to-and-fro'); and a fully hands-off cloud agent for documentation, which he simply dislikes doing.

The non-obvious move is that the selection criterion is *caring*, not *capability*. Writing tests isn't harder than writing docs — he chooses to supervise tests closely because correctness there compounds into his understanding of the system, while docs are a task he's happy to disown entirely ('don't really care if it messes things up'). This reframes the delegation decision: instead of asking 'can the agent handle this?', ask 'how much do I need to verify and learn from this?' Tasks where your own comprehension is the deliverable stay local; tasks that are pure output and low personal stake go to the cloud.

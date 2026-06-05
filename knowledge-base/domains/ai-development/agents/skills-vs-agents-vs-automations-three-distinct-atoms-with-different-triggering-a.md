---
id: INS-260514-EE2E
domain: ai-development
topic: agents
title: >-
  Skills vs agents vs automations: three distinct atoms with different
  triggering and orchestration
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agents
  - skills
  - automation
  - taxonomy
  - claude-code
sources:
  - type: youtube
    title: >-
      AI Agents vs Skills vs Automations: What Every Bench Scientist Needs to
      Know
    author: The Biotech Career Coach
    url: 'https://youtu.be/fHr44hzbVxY'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skills = on-demand reusable behaviors (branded report formatter); agents =
    autonomous chained tool-calls (news → score → resume tailor); automations =
    pre-AI pattern-matching (RPA). Pick the smallest unit that solves the job.
  standard: >-
    Stu Angus's working taxonomy from teaching bench scientists: (1) A skill is
    an on-demand reusable behavior invoked inside a chat — give Claude a folder
    of past reports and a description, and Claude can apply your
    letterhead/format every time on request. Best for repeating a known
    transformation. The 'skill builder skill' inside Claude even helps you
    create new skills meta-style. (2) An agent is an autonomous unit that runs
    on a schedule or trigger and typically chains multiple tool calls — fetch
    data, reason over it, write output to a database, hand off to the next
    agent. Best for workflows where the input isn't a human prompt. (3) An
    automation is the pre-AI category — RPA, business process automation,
    deterministic pattern-matching (input X always produces output Y). Has
    existed for years and shouldn't be confused with the AI categories above.
    The practical rule: if you just need to format/output, write a skill; if you
    need to call tools and process information autonomously, build an agent; if
    the work is deterministic and doesn't need reasoning, use a traditional
    automation. Stu's caution: don't make everything 'agent-heavy' —
    over-agentification creates cumbersome systems that don't actually save
    time. Track what's saving you time and what isn't; let usage data guide your
    shape choices.
stance: >-
  The pragmatic taxonomy for bench scientists is: skills are on-demand reusable
  behaviors invoked inside a chat (formatted reports, branded slides), agents
  are autonomous units that run on schedule or trigger and chain multiple tool
  calls (research → score → write), and automations are pre-AI pattern-matching
  workflows (RPA) — confusing them leads to over-engineering or
  under-leveraging.
related:
  - INS-260320-4773
  - PRI-260320-D5B7
  - PRI-260320-BC72
  - INS-260327-D794
  - INS-260403-656F
  - INS-260410-0E26
  - INS-260530-09FE
  - INS-260605-33C0
---
Stu Angus's working taxonomy from teaching bench scientists: (1) A skill is an on-demand reusable behavior invoked inside a chat — give Claude a folder of past reports and a description, and Claude can apply your letterhead/format every time on request. Best for repeating a known transformation. The 'skill builder skill' inside Claude even helps you create new skills meta-style. (2) An agent is an autonomous unit that runs on a schedule or trigger and typically chains multiple tool calls — fetch data, reason over it, write output to a database, hand off to the next agent. Best for workflows where the input isn't a human prompt. (3) An automation is the pre-AI category — RPA, business process automation, deterministic pattern-matching (input X always produces output Y). Has existed for years and shouldn't be confused with the AI categories above. The practical rule: if you just need to format/output, write a skill; if you need to call tools and process information autonomously, build an agent; if the work is deterministic and doesn't need reasoning, use a traditional automation. Stu's caution: don't make everything 'agent-heavy' — over-agentification creates cumbersome systems that don't actually save time. Track what's saving you time and what isn't; let usage data guide your shape choices.

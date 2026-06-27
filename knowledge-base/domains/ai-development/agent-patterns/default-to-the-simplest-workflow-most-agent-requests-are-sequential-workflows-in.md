---
id: INS-260626-5545
domain: ai-development
topic: agent-patterns
title: >-
  Default to the simplest workflow — most 'agent' requests are sequential
  workflows in disguise
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - workflow
  - autonomy
  - system-architecture
  - reliability
sources:
  - type: youtube
    title: >-
      Full Workshop: Build Your Own Deep Research Agents - Louis-François
      Bouchard, Paul Iusztin, Samridhi
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mYSRn6PC1mc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Move along the autonomy slider (prompt → workflow → agent) only as far as
    the task forces you to; reach for an agent only when the system must branch
    dynamically or react to its environment.
  standard: >-
    Towards AI frames every AI-engineering decision as a slider from simple
    prompting through advanced workflows to fully agentic systems: each step
    right adds autonomy but subtracts control and adds cost and uncertainty. A
    system is only genuinely an 'agent' when it must take autonomous action and
    react to what happens in its environment — deciding which tools to use and
    which not to use. Everything short of that (prompt chaining, routing,
    parallelization, judge-feedback loops) is still a workflow you can build
    reliably.


    Their lived evidence: a Canadian CRM client asked for a multi-agent system
    to generate marketing content (partly because 'multi-agent' sounded good for
    an AI grant). On inspection the real job was a fixed sequence — plan,
    retrieve client data, generate, validate, fix — always the same coupled
    steps. A support-ticket client was similar: classify, route, draft,
    validate, send, in unchanging order. Building either as a multi-agent system
    would have added handoff overhead and failure modes without enabling
    anything the task needed.


    The operating discipline is to interrogate the task before architecting:
    Does the model already know enough (just prompt, add few-shot)? Is the
    context small and known ahead of time (paste it, cache it)? Is context only
    knowable at query time (retrieve)? Do steps follow fixed conditions
    (workflow)? Only if the system must take actions and branch dynamically does
    an agent earn its complexity. Start with questions, not with the most
    autonomous architecture.
stance: >-
  Most production AI systems that clients request as multi-agent crews are
  better built as a single workflow, because added autonomy buys flexibility you
  don't need while costing control, reliability, and money.
related:
  - INS-260327-2101
  - INS-260410-761E
  - INS-260619-CBFA
  - INS-260410-0E26
  - INS-260605-B182
  - INS-260625-9BEB
---
Towards AI frames every AI-engineering decision as a slider from simple prompting through advanced workflows to fully agentic systems: each step right adds autonomy but subtracts control and adds cost and uncertainty. A system is only genuinely an 'agent' when it must take autonomous action and react to what happens in its environment — deciding which tools to use and which not to use. Everything short of that (prompt chaining, routing, parallelization, judge-feedback loops) is still a workflow you can build reliably.

Their lived evidence: a Canadian CRM client asked for a multi-agent system to generate marketing content (partly because 'multi-agent' sounded good for an AI grant). On inspection the real job was a fixed sequence — plan, retrieve client data, generate, validate, fix — always the same coupled steps. A support-ticket client was similar: classify, route, draft, validate, send, in unchanging order. Building either as a multi-agent system would have added handoff overhead and failure modes without enabling anything the task needed.

The operating discipline is to interrogate the task before architecting: Does the model already know enough (just prompt, add few-shot)? Is the context small and known ahead of time (paste it, cache it)? Is context only knowable at query time (retrieve)? Do steps follow fixed conditions (workflow)? Only if the system must take actions and branch dynamically does an agent earn its complexity. Start with questions, not with the most autonomous architecture.

---
id: INS-260625-131D
domain: ai-development
topic: agent-patterns
title: >-
  Treat Prompt Bloat as a Code Smell and Decompose It into Skills, Schemas,
  Scripts, and Sub-Agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - decomposition
  - separation-of-concerns
  - agent-design
  - code-smells
sources:
  - type: youtube
    title: 'Build Systems, Not Code - Angie Jones, Agentic AI Foundation'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZD9-4fW2HhM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The giant prompt is the agentic version of the god class — decompose the
    distinct jobs hiding inside it and put each responsibility where it belongs.
  standard: >-
    Prompt bloat starts innocently: you tell the agent how to size up a listing,
    then add a note for an edge case, then a safety rule, then 'one more
    important exception,' and before long the prompt is doing everything.
    Engineers already recognize this smell in a gigantic class, a bloated
    service with too many endpoints, or a function that does too much — the
    agentic equivalent is the giant prompt. The symptom is that the agent drifts
    and stops sticking to the script, and the cause is simply that the script is
    too long.


    The fix is the same two-step engineers apply to monolithic code. First,
    decomposition: spot the distinct jobs hiding inside the blob and pull them
    apart — in the example, one prompt secretly contained a reusable
    listing-normalization process, a fixed short-list format, a commute
    calculation, and a chunky neighborhood-research subtask, four jobs crammed
    into one. Second, separation of concerns: put each responsibility in the
    right place, asking the agentic equivalent of 'controller or service layer?'
    Normalization becomes a reusable skill, the short-list format becomes a
    schema, the commute becomes a boring little script, and neighborhood
    research becomes a sub-agent. The goal is not splitting for its own sake but
    making each part easier to reason about, task, and change — and judgment is
    required, since some local instructions aren't worth abstracting because the
    abstraction costs more than it saves.
stance: >-
  A single prompt that accumulates edge cases, safety rules, and exceptions
  causes agent drift and should be decomposed exactly like a god class, with
  each distinct job relocated to its proper home.
related:
  - INS-260625-BD36
  - INS-260423-FF53
  - INS-260605-DC7C
  - INS-260605-2284
  - INS-260327-2101
---
Prompt bloat starts innocently: you tell the agent how to size up a listing, then add a note for an edge case, then a safety rule, then 'one more important exception,' and before long the prompt is doing everything. Engineers already recognize this smell in a gigantic class, a bloated service with too many endpoints, or a function that does too much — the agentic equivalent is the giant prompt. The symptom is that the agent drifts and stops sticking to the script, and the cause is simply that the script is too long.

The fix is the same two-step engineers apply to monolithic code. First, decomposition: spot the distinct jobs hiding inside the blob and pull them apart — in the example, one prompt secretly contained a reusable listing-normalization process, a fixed short-list format, a commute calculation, and a chunky neighborhood-research subtask, four jobs crammed into one. Second, separation of concerns: put each responsibility in the right place, asking the agentic equivalent of 'controller or service layer?' Normalization becomes a reusable skill, the short-list format becomes a schema, the commute becomes a boring little script, and neighborhood research becomes a sub-agent. The goal is not splitting for its own sake but making each part easier to reason about, task, and change — and judgment is required, since some local instructions aren't worth abstracting because the abstraction costs more than it saves.

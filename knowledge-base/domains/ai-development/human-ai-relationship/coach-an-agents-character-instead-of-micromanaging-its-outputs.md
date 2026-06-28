---
id: INS-260628-AF2E
domain: ai-development
topic: human-ai-relationship
title: Coach an agent's character instead of micromanaging its outputs
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-design
  - system-prompts
  - character
  - prompting
  - ai-ux
sources:
  - type: youtube
    title: "Form factors for your new AI coworkers —\_Craig Wattrus, Flatfile"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CiMVKnX-CNI'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Stop being a 'helicopter parent' correcting an agent word by word; become a
    'character coach' who builds the nature you want the agent to have.
  standard: >-
    Wattrus describes catching himself giving engineers design-copy-style
    feedback on agents — 'it shouldn't say this word, it shouldn't do that' —
    the same reflex a designer uses to control static copy. After hearing Amanda
    Askell of Anthropic discuss building Claude's character, he reframed his
    role from controlling outputs to coaching character: defining the underlying
    nature he wanted the agent to express, then letting that nature generate the
    specific behaviors.


    The distinction matters because agents are non-deterministic and operate
    across far more situations than you can enumerate. Patching individual
    phrasings is whack-a-mole that never generalizes; instilling a coherent
    character (friendly vs. balanced vs. concise vs. cautious) shapes behavior
    across all the cases you never specified. It's the shift from determinism to
    inference that the whole talk circles around.


    Concretely, Wattrus built a 'chat tuner' — a small tool that loads the
    orchestrator's system prompt so he can probe what 'more cautious' or 'more
    concise' actually means to the model and tune the character directly. The
    actionable move is to treat agent behavior design as character work with
    purpose-built tooling to feel out the personality, not as a backlog of
    copy-edit tickets.
stance: >-
  Shaping an AI agent's behavior works better by defining and coaching its
  character than by giving prescriptive, word-level feedback on individual
  outputs.
related:
  - INS-260330-BD3C
  - INS-260625-03A6
  - INS-260327-DC4C
  - INS-260530-E697
  - INS-260627-C727
---
Wattrus describes catching himself giving engineers design-copy-style feedback on agents — 'it shouldn't say this word, it shouldn't do that' — the same reflex a designer uses to control static copy. After hearing Amanda Askell of Anthropic discuss building Claude's character, he reframed his role from controlling outputs to coaching character: defining the underlying nature he wanted the agent to express, then letting that nature generate the specific behaviors.

The distinction matters because agents are non-deterministic and operate across far more situations than you can enumerate. Patching individual phrasings is whack-a-mole that never generalizes; instilling a coherent character (friendly vs. balanced vs. concise vs. cautious) shapes behavior across all the cases you never specified. It's the shift from determinism to inference that the whole talk circles around.

Concretely, Wattrus built a 'chat tuner' — a small tool that loads the orchestrator's system prompt so he can probe what 'more cautious' or 'more concise' actually means to the model and tune the character directly. The actionable move is to treat agent behavior design as character work with purpose-built tooling to feel out the personality, not as a backlog of copy-edit tickets.

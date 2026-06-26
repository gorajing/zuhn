---
id: INS-260625-4DDB
domain: ai-development
topic: architecture
title: 'An agent''s identity lives in its log, not its model or runtime'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - state-management
  - abstraction
  - durability
sources:
  - type: youtube
    title: 'The Log Is The Agent - Ishaan Sehgal, Omnara'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UPwGaM2MKHY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The durable append-only log of every state transition — not the model or
    runtime — is what gives an agent its identity and lets it resume anywhere.
  standard: >-
    Most people locate an agent in the wrong place: they point at the model
    ('the agent is GPT/Claude') or the runtime ('the agent is this running
    process'). Those things interact with and execute the agent, but they aren't
    it. The agent is its data — specifically the append-only event history
    capturing every user input, model output, tool call, tool result, permission
    prompt, and failure. Every state transition is written to the log.


    The analogy is a video game save file: a hundred-hour Skyrim character isn't
    the console, controller, or engine. If the PlayStation bursts into flames,
    the character isn't gone — you download the save and resume exactly where
    you were, because identity, history, and state live in the data. Agents work
    the same way once you define them as a log: the model reads the log to
    decide the next action, the tool runner executes and appends the result, and
    the loop repeats. The log alone is enough to reconstruct and resume the
    agent.


    The practical payoff is that the model, runtime, and tools become
    interchangeable interpreters of a durable record rather than the
    irreplaceable seat of identity. This reframing is the prerequisite for
    everything else — once identity is decoupled from any particular process or
    provider, reliability, scaling, forking, and migration stop being features
    you bolt on and become structural consequences.
stance: >-
  An agent's true identity is its append-only event log, not the model or
  execution environment running it.
related:
  - INS-260605-83DA
  - INS-260625-FA31
  - INS-260625-6127
  - INS-260625-ADEA
  - INS-260625-F3B0
---
Most people locate an agent in the wrong place: they point at the model ('the agent is GPT/Claude') or the runtime ('the agent is this running process'). Those things interact with and execute the agent, but they aren't it. The agent is its data — specifically the append-only event history capturing every user input, model output, tool call, tool result, permission prompt, and failure. Every state transition is written to the log.

The analogy is a video game save file: a hundred-hour Skyrim character isn't the console, controller, or engine. If the PlayStation bursts into flames, the character isn't gone — you download the save and resume exactly where you were, because identity, history, and state live in the data. Agents work the same way once you define them as a log: the model reads the log to decide the next action, the tool runner executes and appends the result, and the loop repeats. The log alone is enough to reconstruct and resume the agent.

The practical payoff is that the model, runtime, and tools become interchangeable interpreters of a durable record rather than the irreplaceable seat of identity. This reframing is the prerequisite for everything else — once identity is decoupled from any particular process or provider, reliability, scaling, forking, and migration stop being features you bolt on and become structural consequences.

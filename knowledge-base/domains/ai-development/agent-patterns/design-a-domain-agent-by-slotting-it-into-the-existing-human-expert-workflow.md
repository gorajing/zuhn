---
id: INS-260627-2925
domain: ai-development
topic: agent-patterns
title: Design a domain agent by slotting it into the existing human expert workflow
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - human-in-the-loop
  - multi-agent
  - agent-architecture
  - workflow
sources:
  - type: youtube
    title: >-
      AI Kernel Generation: What's working, what's not, what's next – Natalie
      Serrino, Gimlet Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=6guQG_tGt0o'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Map the human expert's loop — compile, run, check correctness, profile,
    optimize — and put the agent in that same loop rather than inventing a novel
    abstraction.
  standard: >-
    Serrino argues that when you build an agent for something, you should start
    from what the human workflow actually is. A kernel expert porting a workload
    tries an implementation, checks whether it compiles, whether it runs, and
    whether it is correct; if any fail, that signal feeds back; once something
    works, they profile and iteratively hammer down whichever bottleneck is now
    dominant. The agentic flow is built to occupy exactly that position in the
    loop.


    The resulting architecture is not a single chat model but a structured
    swarm: a supervisor agent that takes input code, target hardware, and human
    prompting and manages the work; a synthesis 'idea factory' swarm that
    generates candidate optimizations; a strict verification agent that runs
    candidates on real hardware; and a human in the loop to supervise and steer.
    A purpose-built harness binds them. Serrino notes this
    supervisor-plus-specialized-subagents-plus-human pattern recurred across the
    whole conference — it is becoming the default shape for capable agents on
    hard tasks.


    The practical takeaway transfers beyond kernels: before designing agent
    abstractions, document the expert's actual decision loop and feedback
    signals, then engineer the agent to consume the same signals. The human
    stays in the loop precisely where judgment is ambiguous (e.g., deciding
    whether an aggressive optimization is 'in the spirit' of the goal or a
    cheat).
stance: >-
  The best starting point for structuring an agent on a specialized task is to
  copy the human expert's iterative loop and place the agent where the human
  would stand.
related:
  - INS-260409-E080
  - INS-260409-0DB0
  - INS-260603-6B3D
  - INS-260605-6CBF
  - INS-260605-05F4
  - INS-260605-D6EE
  - INS-260605-8D12
  - INS-260627-A4DD
  - INS-260605-25B2
---
Serrino argues that when you build an agent for something, you should start from what the human workflow actually is. A kernel expert porting a workload tries an implementation, checks whether it compiles, whether it runs, and whether it is correct; if any fail, that signal feeds back; once something works, they profile and iteratively hammer down whichever bottleneck is now dominant. The agentic flow is built to occupy exactly that position in the loop.

The resulting architecture is not a single chat model but a structured swarm: a supervisor agent that takes input code, target hardware, and human prompting and manages the work; a synthesis 'idea factory' swarm that generates candidate optimizations; a strict verification agent that runs candidates on real hardware; and a human in the loop to supervise and steer. A purpose-built harness binds them. Serrino notes this supervisor-plus-specialized-subagents-plus-human pattern recurred across the whole conference — it is becoming the default shape for capable agents on hard tasks.

The practical takeaway transfers beyond kernels: before designing agent abstractions, document the expert's actual decision loop and feedback signals, then engineer the agent to consume the same signals. The human stays in the loop precisely where judgment is ambiguous (e.g., deciding whether an aggressive optimization is 'in the spirit' of the goal or a cheat).

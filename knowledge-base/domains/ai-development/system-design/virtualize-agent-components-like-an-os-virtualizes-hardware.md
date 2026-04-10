---
id: INS-260410-71B9
domain: ai-development
topic: system-design
title: Virtualize agent components like an OS virtualizes hardware
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - abstraction
  - virtualization
  - meta-harness
  - interface-design
sources:
  - type: blog
    title: 'Scaling Managed Agents: Decoupling the brain from the hands'
    url: 'https://www.anthropic.com/engineering/managed-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Design agent platforms the way OSes were designed: pick opinionated
    interfaces for the components you expect to persist, and make no commitments
    about the implementations behind them.
  standard: >-
    Operating systems solved 'programs as yet unthought of' by virtualizing
    hardware into abstractions like process and file. The read() syscall is
    agnostic as to whether it is hitting a 1970s disk pack or a modern SSD — the
    interface outlasted every underlying implementation. Anthropic applied the
    same pattern to Managed Agents by identifying three durable components: the
    session (append-only event log), the harness (the loop that calls Claude and
    routes tool calls), and the sandbox (execution environment for code).


    Each is defined by a narrow interface — emitEvent, getEvents, execute(name,
    input) → string, wake(sessionId), provision({resources}) — and each
    implementation can be swapped without disturbing the others. The bet is that
    the right thing to be opinionated about is the shape of these interfaces,
    not what runs behind them.


    This is a general principle for building meta-platforms on top of rapidly
    evolving substrates: identify the component categories you expect to persist
    (state, computation, control loop), commit to minimal interfaces between
    them, and let everything concrete underneath remain cattle.
stance: >-
  The right abstraction for building durable agent platforms is to virtualize
  the brain, hands, and session as independent interfaces — the same pattern
  operating systems used to outlast the hardware underneath them.
related:
  - INS-260325-2DCD
  - INS-260322-D8C3
  - INS-260405-A992
  - INS-260403-0D23
  - INS-260409-A3EC
  - PRI-260405-AF79
  - INS-260410-F910
---
Operating systems solved 'programs as yet unthought of' by virtualizing hardware into abstractions like process and file. The read() syscall is agnostic as to whether it is hitting a 1970s disk pack or a modern SSD — the interface outlasted every underlying implementation. Anthropic applied the same pattern to Managed Agents by identifying three durable components: the session (append-only event log), the harness (the loop that calls Claude and routes tool calls), and the sandbox (execution environment for code).

Each is defined by a narrow interface — emitEvent, getEvents, execute(name, input) → string, wake(sessionId), provision({resources}) — and each implementation can be swapped without disturbing the others. The bet is that the right thing to be opinionated about is the shape of these interfaces, not what runs behind them.

This is a general principle for building meta-platforms on top of rapidly evolving substrates: identify the component categories you expect to persist (state, computation, control loop), commit to minimal interfaces between them, and let everything concrete underneath remain cattle.

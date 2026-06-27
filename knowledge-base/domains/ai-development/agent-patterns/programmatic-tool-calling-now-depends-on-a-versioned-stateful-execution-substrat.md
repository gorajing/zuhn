---
id: INS-260626-2F2E
domain: ai-development
topic: agent-patterns
title: >-
  Programmatic tool calling now depends on a versioned stateful execution
  substrate
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - anthropic
  - code-execution
  - programmatic-tool-calling
  - agent-runtime
  - repl-state
sources:
  - type: paste
    title: Anthropic API release notes relevant to weekly platform changelog
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Record the exact code-execution tool version whenever an agent composes
    tools through code.
  standard: >-
    The practical change is not merely that Claude can run code; it is that
    persistent REPL state and programmatic tool calling are tied to a named tool
    version, `code_execution_20260120`, with SDK support across major languages
    and no beta header. AgentRun should record the execution substrate version,
    model compatibility, and whether state persisted across calls. Otherwise a
    run that passed with stateful tool composition can be misreplayed later on a
    stateless or incompatible substrate.
  deep: >-
    This reinforces the broader shift from turn-by-turn tool calls to
    model-authored code that orchestrates tools. Once the model writes
    mini-programs, the execution environment becomes part of the agent contract:
    globals, installed packages, filesystem, network policy, persisted REPL
    objects, timeout behavior, and tool-call bridge all affect behavior.
    Treating this as a generic 'code execution enabled' flag loses the
    compatibility boundary that matters for replay and debugging.
subtopic: programmatic-tool-calling
stance: >-
  Anthropic making code_execution_20260120 the minimum tool version for
  programmatic tool calling means agent runtimes should treat executable tool
  substrates as versioned capabilities, not generic sandboxes.
related:
  - INS-260323-4B4D
  - INS-260329-9745
  - INS-260410-D250
  - INS-260410-1030
  - INS-260410-01BC
  - INS-260410-0855
  - INS-260602-EA48
  - INS-260605-6444
  - INS-260605-E303
  - INS-260605-35B4
---
The practical change is not merely that Claude can run code; it is that persistent REPL state and programmatic tool calling are tied to a named tool version, `code_execution_20260120`, with SDK support across major languages and no beta header. AgentRun should record the execution substrate version, model compatibility, and whether state persisted across calls. Otherwise a run that passed with stateful tool composition can be misreplayed later on a stateless or incompatible substrate.

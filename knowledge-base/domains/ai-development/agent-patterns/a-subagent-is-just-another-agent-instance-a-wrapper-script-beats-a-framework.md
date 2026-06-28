---
id: INS-260628-34CF
domain: ai-development
topic: agent-patterns
title: A subagent is just another agent instance — a wrapper script beats a framework
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - subagents
  - codex-cli
  - agent-architecture
  - wrapper-script
  - simplicity
sources:
  - type: youtube
    title: 'Hacking Subagents Into Codex CLI — Brian John, Betterup'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5eJqXtevlXg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Implement a subagent as a small wrapper script that launches a fresh child
    instance of the same agent, captures its file output, and prints it to
    stdout.
  standard: >-
    Brian John's central design insight is that a subagent is conceptually
    nothing more than another instance of the main agent, so the implementation
    can be correspondingly trivial. His entire mechanism is a ~72-line wrapper
    script plus a small Python executor class: the parent Codex session runs the
    wrapper, the wrapper builds a prompt and kicks off `codex exec` as a child
    process, the child does its work and writes its answer to a file, and the
    wrapper reads that file and prints it to standard out so the parent can
    consume it.


    This matters because the industry instinct is to reach for heavyweight
    multi-agent orchestration frameworks when the actual primitive — spawn a
    child, hand it a prompt, read back a result — is a few dozen lines of glue.
    The file-based handoff (child writes, wrapper reads) is the key trick that
    lets a sandboxed child communicate a result back across a process boundary
    without shared memory or a message bus.


    The practical payoff is portability and low maintenance: because the
    subagent is 'just the same tool run again,' the same conceptual pattern that
    powers Claude Code's subagents can be bolted onto a tool that doesn't ship
    them natively. When you find yourself evaluating an agent framework, first
    ask whether a wrapper script over the CLI you already trust would do the
    job.
stance: >-
  Subagents require no dedicated framework; a thin wrapper that spawns another
  CLI instance and returns its output file is sufficient.
related:
  - INS-260409-086A
  - INS-260410-796F
  - INS-260411-5478
  - INS-260626-3796
  - INS-260627-85C7
  - INS-260605-83DA
---
Brian John's central design insight is that a subagent is conceptually nothing more than another instance of the main agent, so the implementation can be correspondingly trivial. His entire mechanism is a ~72-line wrapper script plus a small Python executor class: the parent Codex session runs the wrapper, the wrapper builds a prompt and kicks off `codex exec` as a child process, the child does its work and writes its answer to a file, and the wrapper reads that file and prints it to standard out so the parent can consume it.

This matters because the industry instinct is to reach for heavyweight multi-agent orchestration frameworks when the actual primitive — spawn a child, hand it a prompt, read back a result — is a few dozen lines of glue. The file-based handoff (child writes, wrapper reads) is the key trick that lets a sandboxed child communicate a result back across a process boundary without shared memory or a message bus.

The practical payoff is portability and low maintenance: because the subagent is 'just the same tool run again,' the same conceptual pattern that powers Claude Code's subagents can be bolted onto a tool that doesn't ship them natively. When you find yourself evaluating an agent framework, first ask whether a wrapper script over the CLI you already trust would do the job.

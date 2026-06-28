---
id: INS-260628-1610
domain: ai-development
topic: tooling
title: Keep the agent's invocation command byte-identical to grant permission once
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - codex-cli
  - permissions
  - sandbox
  - developer-experience
  - agent-ergonomics
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
    Write the agent name and query to files and run a constant command, rather
    than passing them as CLI arguments, so the permission system sees the same
    command every time.
  standard: >-
    Codex's permission system grants a 'don't ask again' approval keyed to the
    exact command string. If the subagent invocation passed the agent name and
    user query as command-line arguments, every call would look different and
    trigger a fresh approval prompt — unbearable when the agent invokes
    subagents constantly. John's workaround is to have Codex write the agent
    name to a file and the query to a file, then run one fixed command that
    reads those files. Because the command string never changes, a single 'yes,
    and don't ask again' covers all future invocations.


    This is a generalizable ergonomics pattern for any agent operating under a
    command-allowlist or per-invocation approval model: move the variable
    payload out of the argument vector and into a stable side channel (a file,
    an env var slot, a fixed config path), so the security check sees an
    invariant command. You trade a tiny bit of indirection for the difference
    between one approval and an approval on every single call.


    The lesson reaches beyond Codex: when you design how an agent shells out to
    tools, the shape of the command — not just what it does — determines how
    much the human (or the sandbox) has to babysit it. Stable command surfaces
    are an interface-design concern, not an afterthought.
stance: >-
  Passing subagent arguments via files instead of CLI flags keeps the command
  string identical so a sandboxed agent needs approval only once.
related:
  - INS-260605-BC6F
  - INS-260605-8AFF
  - INS-260626-F490
  - INS-260605-0C88
  - INS-260626-091B
  - INS-260514-283E
---
Codex's permission system grants a 'don't ask again' approval keyed to the exact command string. If the subagent invocation passed the agent name and user query as command-line arguments, every call would look different and trigger a fresh approval prompt — unbearable when the agent invokes subagents constantly. John's workaround is to have Codex write the agent name to a file and the query to a file, then run one fixed command that reads those files. Because the command string never changes, a single 'yes, and don't ask again' covers all future invocations.

This is a generalizable ergonomics pattern for any agent operating under a command-allowlist or per-invocation approval model: move the variable payload out of the argument vector and into a stable side channel (a file, an env var slot, a fixed config path), so the security check sees an invariant command. You trade a tiny bit of indirection for the difference between one approval and an approval on every single call.

The lesson reaches beyond Codex: when you design how an agent shells out to tools, the shape of the command — not just what it does — determines how much the human (or the sandbox) has to babysit it. Stable command surfaces are an interface-design concern, not an afterthought.

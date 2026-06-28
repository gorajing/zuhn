---
id: INS-260628-8C7D
domain: ai-development
topic: tooling
title: The hardest part of sandboxed subagents is finding the minimum permission set
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - codex-cli
  - sandbox
  - permissions
  - least-privilege
  - rollout-recorder
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
    Expect the bulk of the effort in sandboxed subagents to be discovering the
    minimum permissions, since the sandbox blocks child processes from
    credentials, file writes, and logging outside the workspace.
  standard: >-
    John is blunt that figuring out the minimum required permissions was the
    single hardest part of the project — he 'banged his head against the wall'
    getting the combination right while refusing to fall back on a
    dangerously-skip-permissions escape hatch. Three concrete obstacles emerged:
    the parent needs at least workspace-write sandbox to run the Codex command;
    the child can't reach the OpenAI credentials in the home directory because
    that path sits outside the workspace; and the child needs workspace-write
    plus a disabled 'rollout recorder' (Codex's logging component), because the
    sandbox blocks filesystem access for any subcommand operating outside the
    workspace.


    The broader, durable lesson is that the easy path (turn off the sandbox
    entirely) is exactly what a security-conscious engineer should avoid, and
    that the real engineering cost of agentic tooling often lives in the
    least-privilege configuration rather than the feature logic. The feature
    itself was ~150 lines of script; the permissions were the hard problem.


    The specific flag names and the rollout-recorder quirk are tied to Codex's
    current sandbox implementation and will likely drift as the tool evolves, so
    this is marked time-sensitive — but the principle that sandboxed child
    processes lose access to credentials, writable paths, and loggers outside
    their workspace is a stable mental model for anyone spawning agents under a
    sandbox.
stance: >-
  Getting subagents to work inside a restrictive sandbox without disabling
  protections is dominated by the difficulty of finding the exact minimum
  permissions.
related:
  - INS-260410-D04D
  - INS-260626-A05F
  - INS-260605-41AE
  - INS-260410-1430
  - INS-260626-E7C4
  - INS-260625-DCE4
---
John is blunt that figuring out the minimum required permissions was the single hardest part of the project — he 'banged his head against the wall' getting the combination right while refusing to fall back on a dangerously-skip-permissions escape hatch. Three concrete obstacles emerged: the parent needs at least workspace-write sandbox to run the Codex command; the child can't reach the OpenAI credentials in the home directory because that path sits outside the workspace; and the child needs workspace-write plus a disabled 'rollout recorder' (Codex's logging component), because the sandbox blocks filesystem access for any subcommand operating outside the workspace.

The broader, durable lesson is that the easy path (turn off the sandbox entirely) is exactly what a security-conscious engineer should avoid, and that the real engineering cost of agentic tooling often lives in the least-privilege configuration rather than the feature logic. The feature itself was ~150 lines of script; the permissions were the hard problem.

The specific flag names and the rollout-recorder quirk are tied to Codex's current sandbox implementation and will likely drift as the tool evolves, so this is marked time-sensitive — but the principle that sandboxed child processes lose access to credentials, writable paths, and loggers outside their workspace is a stable mental model for anyone spawning agents under a sandbox.

---
id: INS-260410-CA42
domain: ai-development
topic: claude-code
title: Effective agent sandboxing requires filesystem AND network isolation together
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - security-architecture
  - defense-in-depth
  - agent-security
sources:
  - type: blog
    title: Making Claude Code more secure and autonomous with sandboxing
    url: 'https://www.anthropic.com/engineering/claude-code-sandboxing'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Filesystem and network isolation are coupled defenses — either alone leaves
    an agent compromise trivially exploitable.
  standard: >-
    Anthropic explicitly calls out that without network isolation, a compromised
    agent just exfiltrates SSH keys and secrets over HTTP. Without filesystem
    isolation, a compromised agent edits shell configs or binaries to escape the
    sandbox and regain network access on next invocation. The two boundaries
    form an AND-gate, not an OR-gate.


    This is a useful mental model for anyone building agent security: ask 'if I
    remove boundary X, does boundary Y still work?' If not, both are
    load-bearing. The implication for teams building custom agent runtimes is
    that you cannot ship network isolation as 'phase 1' and filesystem isolation
    as 'phase 2' — phase 1 provides no meaningful security until phase 2 lands.
stance: >-
  Sandboxing an AI agent with only filesystem OR only network isolation provides
  near-zero security because each boundary's absence collapses the other.
related:
  - INS-260323-4A3D
  - INS-260403-0AF6
  - INS-260403-E86E
  - INS-260403-C8FD
  - PRI-260324-2A76
  - INS-260330-6D2E
  - INS-260405-DADB
  - INS-260403-DF45
---
Anthropic explicitly calls out that without network isolation, a compromised agent just exfiltrates SSH keys and secrets over HTTP. Without filesystem isolation, a compromised agent edits shell configs or binaries to escape the sandbox and regain network access on next invocation. The two boundaries form an AND-gate, not an OR-gate.

This is a useful mental model for anyone building agent security: ask 'if I remove boundary X, does boundary Y still work?' If not, both are load-bearing. The implication for teams building custom agent runtimes is that you cannot ship network isolation as 'phase 1' and filesystem isolation as 'phase 2' — phase 1 provides no meaningful security until phase 2 lands.

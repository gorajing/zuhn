---
id: INS-260626-C563
domain: ai-development
topic: claude-code
title: Treat agent config files as supply-chain inputs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - coding-agents
  - agent-config
  - supply-chain
  - governance
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agent rules files deserve hashes, provenance, and review because they are
    executable influence over tool-using agents.
  standard: >-
    Madatha's prevalence study found that agent configuration files propagate as
    undeclared shared components: 10.1% of tracked config paths were exact
    duplicates across independent repositories after fork adjustment, and 75.5%
    of clone pairs crossed organizational boundaries. That makes AGENTS.md,
    CLAUDE.md, Cursor rules, and similar files closer to dependencies than
    notes.


    The practical implication is that coding-agent systems should attach
    provenance and integrity checks to rule packs before trusting them. A useful
    baseline is content addressing, lockfile-style expected hashes, and an
    auditable install/update path for any shared agent definition.
stance: >-
  Coding-agent rule files should be managed like supply-chain artifacts because
  they directly steer agents with file and shell authority.
related:
  - INS-260605-013A
  - INS-260626-8308
  - INS-260626-E56B
  - INS-260626-F5AE
  - INS-260626-ACD0
---
Madatha's prevalence study found that agent configuration files propagate as undeclared shared components: 10.1% of tracked config paths were exact duplicates across independent repositories after fork adjustment, and 75.5% of clone pairs crossed organizational boundaries. That makes AGENTS.md, CLAUDE.md, Cursor rules, and similar files closer to dependencies than notes.

The practical implication is that coding-agent systems should attach provenance and integrity checks to rule packs before trusting them. A useful baseline is content addressing, lockfile-style expected hashes, and an auditable install/update path for any shared agent definition.

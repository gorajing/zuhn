---
id: INS-260628-09BA
domain: ai-development
topic: system-building
title: Threshold robustness turns partial cleanup into false confidence
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - incident-response
  - threshold-attacks
  - system-security
sources:
  - type: blog
    title: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP
    url: 'https://arxiv.org/html/2606.27027'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    With threshold-based poisoning, partial tool removal can leave the attack
    alive as long as enough shares remain.
  standard: >-
    ShareLock's ablation uses a t=3, n=5 construction: the attack remains
    effective when three shares survive, and only drops to zero when available
    shares fall below the threshold. That means an operator who removes one or
    two suspicious tools may believe they have contained the problem while the
    server still carries enough encoded material to reconstruct the payload.


    The response pattern should therefore be server-scoped containment, not
    whack-a-tool cleanup. Disable the whole suspect MCP server or revoke its
    high-risk permissions until all related tool descriptions, returns, update
    artifacts, and metadata fields have been reviewed together.
stance: >-
  Removing some suspicious tools is not enough if an attack is threshold-robust
  and can still reconstruct from the remaining tool set.
related:
  - INS-260323-E874
  - INS-260628-AF81
  - INS-260628-278D
  - PRI-260328-A4AC
  - INS-260327-0D82
---
ShareLock's ablation uses a t=3, n=5 construction: the attack remains effective when three shares survive, and only drops to zero when available shares fall below the threshold. That means an operator who removes one or two suspicious tools may believe they have contained the problem while the server still carries enough encoded material to reconstruct the payload.

The response pattern should therefore be server-scoped containment, not whack-a-tool cleanup. Disable the whole suspect MCP server or revoke its high-risk permissions until all related tool descriptions, returns, update artifacts, and metadata fields have been reviewed together.

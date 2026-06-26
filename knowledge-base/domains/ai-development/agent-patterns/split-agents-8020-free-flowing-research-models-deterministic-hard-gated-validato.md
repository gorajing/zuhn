---
id: INS-260625-35C5
domain: ai-development
topic: agent-patterns
title: >-
  Split agents 80/20: free-flowing research models, deterministic hard-gated
  validators
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hybrid-architecture
  - critic-node
  - deterministic-gates
  - model-routing
  - agent-loops
sources:
  - type: youtube
    title: >-
      Why More Context Makes Your Agent Dumber and What to Do About It — Nupur
      Sharma, Qodo
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=EcqMYoIV57A'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let the latest reasoning model research 80% of the task, but route the final
    20%—validation, summarization, next-action—through restricted, deterministic
    gates that don't need a high-reasoning model and stop the infinite loop.
  standard: >-
    Qodo's answer to the orchestration paradox is an 80/20 hybrid. The 80% that
    is genuinely open—discovery, deciding which tool to use, planning—is handed
    to the strongest available reasoning model with freedom to explore. The 20%
    that converges the work—'if I get X results I want Y,' validation,
    summarization—is made 'more restricted, more hard gates,' explicitly
    deterministic so the free-flowing research can be reined in to a usable
    answer.


    Crucially, the deterministic 20% does not need a high-reasoning model. A
    critic node checking a result against the stated goal, or a summarizer
    turning research into output, doesn't need to figure out the best method—it
    just needs to apply a fixed rule. Routing that work to a cheaper model cuts
    cost without hurting quality, while keeping the expensive model only where
    its judgment is actually load-bearing. The talk also distinguishes which
    side owns which decision: 'what's the next possible action given this
    result' is dynamic 80% work, while 'what is the proper final result the user
    wants' is deterministic 20% work.


    Because the free 80% can still loop, the gate is backed by escape hatches:
    counters that force you to accept the last result after four or five
    iterations, or timeouts that commit to the last decision after five minutes.
    The combination—free exploration plus a deterministic terminating gate—is
    what makes an otherwise unbounded agent loop converge in production.
stance: >-
  Give high-reasoning models free rein for the 80% that is discovery, but force
  the final 20% (validation and summarization) through deterministic hard gates
  run by cheaper models.
related:
  - INS-260501-646A
  - INS-260605-ECB0
  - INS-260605-05F4
  - INS-260625-25BF
  - INS-260626-909D
  - PRI-260411-ACEF
  - INS-260625-AACE
  - INS-260403-CDB0
  - INS-260625-2DA2
  - INS-260625-5184
---
Qodo's answer to the orchestration paradox is an 80/20 hybrid. The 80% that is genuinely open—discovery, deciding which tool to use, planning—is handed to the strongest available reasoning model with freedom to explore. The 20% that converges the work—'if I get X results I want Y,' validation, summarization—is made 'more restricted, more hard gates,' explicitly deterministic so the free-flowing research can be reined in to a usable answer.

Crucially, the deterministic 20% does not need a high-reasoning model. A critic node checking a result against the stated goal, or a summarizer turning research into output, doesn't need to figure out the best method—it just needs to apply a fixed rule. Routing that work to a cheaper model cuts cost without hurting quality, while keeping the expensive model only where its judgment is actually load-bearing. The talk also distinguishes which side owns which decision: 'what's the next possible action given this result' is dynamic 80% work, while 'what is the proper final result the user wants' is deterministic 20% work.

Because the free 80% can still loop, the gate is backed by escape hatches: counters that force you to accept the last result after four or five iterations, or timeouts that commit to the last decision after five minutes. The combination—free exploration plus a deterministic terminating gate—is what makes an otherwise unbounded agent loop converge in production.

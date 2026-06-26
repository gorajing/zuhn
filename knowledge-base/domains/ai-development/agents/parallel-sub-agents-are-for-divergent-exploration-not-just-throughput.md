---
id: INS-260626-9E65
domain: ai-development
topic: agents
title: 'Parallel sub-agents are for divergent exploration, not just throughput'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - sub-agents
  - parallelism
  - divergent-thinking
  - best-of-n
  - ideation
sources:
  - type: youtube
    title: OpenAI Codex Masterclass  — Vaibhav Srivastav & Katia Gil Guzman
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MhHEGMFCEB0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Beyond fan-out for speed, spin up N sub-agents to generate divergent
    hypotheses on the same target — different vulnerability angles on one diff,
    several implementation approaches for one feature, best-of-N cloud runs.
  standard: >-
    The obvious framing of sub-agents is decomposition for throughput: split a
    master task into independent slices, run them in parallel, collate. But the
    speaker's most valuable examples are divergent rather than decompositional.
    For security, you point many agents at the same diff or repo and ask each to
    pursue a different hypothesis, producing a 'vulnerability map' from multiple
    points of view. For feature work, he asks Codex to enumerate five-to-ten
    different ways a feature could be implemented and then spins up sub-agents
    to explore each. The cloud 'best of N' feature runs the same task four times
    in parallel and lets you pick the best output.


    The distinction matters because the two modes optimize different things.
    Decomposition reduces wall-clock time on a known plan; divergence increases
    the breadth of the search and surfaces options or failure modes a single
    linear pass would miss. Cheap parallelism turns 'which approach is best?'
    and 'where could this break?' into questions you answer empirically by
    running many agents rather than reasoning through one. When the solution or
    threat space is wide and uncertain, spend parallelism on diversity; when the
    plan is settled, spend it on speed.
stance: >-
  The highest-leverage use of parallel sub-agents is attacking one problem from
  many independent angles, not merely decomposing a single plan for speed.
related:
  - INS-260605-738E
  - INS-260605-D055
  - INS-260330-7E4F
  - INS-260424-7A03
  - PRI-260406-E5FB
---
The obvious framing of sub-agents is decomposition for throughput: split a master task into independent slices, run them in parallel, collate. But the speaker's most valuable examples are divergent rather than decompositional. For security, you point many agents at the same diff or repo and ask each to pursue a different hypothesis, producing a 'vulnerability map' from multiple points of view. For feature work, he asks Codex to enumerate five-to-ten different ways a feature could be implemented and then spins up sub-agents to explore each. The cloud 'best of N' feature runs the same task four times in parallel and lets you pick the best output.

The distinction matters because the two modes optimize different things. Decomposition reduces wall-clock time on a known plan; divergence increases the breadth of the search and surfaces options or failure modes a single linear pass would miss. Cheap parallelism turns 'which approach is best?' and 'where could this break?' into questions you answer empirically by running many agents rather than reasoning through one. When the solution or threat space is wide and uncertain, spend parallelism on diversity; when the plan is settled, spend it on speed.

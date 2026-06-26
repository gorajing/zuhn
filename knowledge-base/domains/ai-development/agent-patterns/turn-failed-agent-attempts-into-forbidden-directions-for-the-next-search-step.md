---
id: INS-260626-6D35
domain: ai-development
topic: agent-patterns
title: Turn failed agent attempts into forbidden directions for the next search step
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - trajectory-memory
  - feedback-loops
  - constraints
sources:
  - type: blog
    title: >-
      NOVA: A Verification-Aware Agent Harness for Architecture Evolution in
      Industrial Recommender Systems
    url: 'https://arxiv.org/html/2606.27243'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    NOVA records rejected architecture patterns as forbidden directions so later
    iterations avoid repeating the same semantic mistake.
  standard: >-
    NOVA feeds verification diagnostics back into its architecture gradient:
    failed candidates are blocked, their failure pattern is stored in trajectory
    memory, and the next round avoids similar modification directions. The paper
    emphasizes that verification is not just a post-hoc filter; it denoises the
    search process itself.


    For AI engineering workflows, this argues for a trace structure where failed
    attempts become machine-readable negative knowledge. A coding agent that
    merely retries from scratch wastes evidence; one that stores forbidden
    patterns can narrow future search without requiring the model to remember
    every prior transcript detail.
stance: >-
  Agent harnesses improve faster when verification failures are converted into
  reusable constraints instead of discarded as one-off errors.
related:
  - INS-260410-831F
  - INS-260501-A3ED
  - PRI-260323-1CF9
  - INS-260410-FBAA
  - INS-260410-FD24
  - INS-260625-4559
  - INS-260605-77EB
---
NOVA feeds verification diagnostics back into its architecture gradient: failed candidates are blocked, their failure pattern is stored in trajectory memory, and the next round avoids similar modification directions. The paper emphasizes that verification is not just a post-hoc filter; it denoises the search process itself.

For AI engineering workflows, this argues for a trace structure where failed attempts become machine-readable negative knowledge. A coding agent that merely retries from scratch wastes evidence; one that stores forbidden patterns can narrow future search without requiring the model to remember every prior transcript detail.

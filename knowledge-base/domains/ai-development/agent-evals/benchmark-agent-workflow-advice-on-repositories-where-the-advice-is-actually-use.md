---
id: INS-260626-A0DC
domain: ai-development
topic: agent-evals
title: >-
  Benchmark agent workflow advice on repositories where the advice is actually
  used
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - benchmark-design
  - agent-evals
  - coding-agents
  - github-issues
sources:
  - type: paste
    title: >-
      Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for
      Coding Agents?
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CTX BENCH exists because standard popular-repo coding benchmarks do not
    contain many developer-committed context files.
  standard: >-
    The authors build CTX BENCH from 5,694 PRs across repositories that contain
    AGENTS.md or CLAUDE.md, then filter to 138 deterministic, testable instances
    across 12 repositories. This design addresses a benchmark mismatch:
    SWE-BENCH-style popular repositories are useful for coding-agent ability,
    but not sufficient for evaluating the marginal value of context files
    because many do not use them.


    The broader implication is that agent workflow advice needs
    practice-specific eval sets. To test skills, memory files, tool manifests,
    or runbooks, the benchmark must include real projects where those artifacts
    are present and plausibly consequential.
stance: >-
  Evaluating agent-workflow practices requires benchmarks drawn from real
  adopters, not only popular repositories that lack the practice under test.
related:
  - INS-260320-CE36
  - INS-260402-97AF
  - INS-260410-B224
  - INS-260627-90A8
  - INS-260626-057E
  - INS-260627-21D0
  - INS-260514-D3CB
  - INS-260626-43C9
  - INS-260626-7A54
---
The authors build CTX BENCH from 5,694 PRs across repositories that contain AGENTS.md or CLAUDE.md, then filter to 138 deterministic, testable instances across 12 repositories. This design addresses a benchmark mismatch: SWE-BENCH-style popular repositories are useful for coding-agent ability, but not sufficient for evaluating the marginal value of context files because many do not use them.

The broader implication is that agent workflow advice needs practice-specific eval sets. To test skills, memory files, tool manifests, or runbooks, the benchmark must include real projects where those artifacts are present and plausibly consequential.

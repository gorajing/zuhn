---
id: INS-260626-924E
domain: ai-development
topic: agent-evals
title: Exact-match metrics understate memory-system failures
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - agent-memory
  - metrics
  - llm-systems
sources:
  - type: blog
    title: Are We Ready For An Agent-Native Memory System?
    url: 'https://arxiv.org/html/2606.24775'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The paper treats EM as useful only for short canonical answers and pairs it
    with evidence fidelity, update robustness, long-horizon stability, and
    operational cost.
  standard: >-
    The authors explicitly critique single-sided end-to-end metrics such as F1
    and BLEU for treating memory systems as black boxes. They still use Exact
    Match where outputs are short and canonical, but argue it must be
    complemented for tasks requiring semantic synthesis or correct downstream
    state.


    The practical implication is that agent eval suites should separate
    final-answer correctness from memory-path correctness. A useful harness
    should include evidence recall, source provenance, update tests,
    horizon-distance slices, task success, and latency so regressions point to
    the memory module that failed.
stance: >-
  Exact-match scores are insufficient for agent-memory evaluation once tasks
  require cross-session synthesis, temporal validity, or executable state
  success.
related:
  - INS-260330-9DC9
  - INS-260410-0857
  - INS-260524-9100
  - INS-260626-909D
  - INS-260410-022B
  - INS-260330-C172
---
The authors explicitly critique single-sided end-to-end metrics such as F1 and BLEU for treating memory systems as black boxes. They still use Exact Match where outputs are short and canonical, but argue it must be complemented for tasks requiring semantic synthesis or correct downstream state.

The practical implication is that agent eval suites should separate final-answer correctness from memory-path correctness. A useful harness should include evidence recall, source provenance, update tests, horizon-distance slices, task success, and latency so regressions point to the memory module that failed.

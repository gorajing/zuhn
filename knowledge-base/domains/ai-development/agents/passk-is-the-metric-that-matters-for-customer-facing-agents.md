---
id: INS-260410-B3C2
domain: ai-development
topic: agents
title: pass^k is the metric that matters for customer-facing agents
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - metrics
  - reliability
  - agents
sources:
  - type: blog
    title: Demystifying evals for AI agents
    url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    pass@k rewards 'shots on goal' and rises with k; pass^k measures consistency
    and collapses with k — use pass^k for production reliability.
  standard: >-
    Agent behavior is non-deterministic, so a single pass/fail per task hides
    the real distribution. Two metrics capture this: pass@k measures the
    probability that at least one of k trials succeeds (rises toward 100% as k
    grows), while pass^k measures the probability that all k trials succeed
    (collapses toward 0% as k grows). At k=1 they're identical; by k=10 they
    tell opposite stories.


    The choice isn't stylistic — it's a product question. For research or coding
    workflows where a human can re-run or pick the best of several attempts,
    pass@k is the honest metric: you care whether the agent can find the answer
    at all. For customer-facing agents where users expect the same reliable
    behavior every time, pass^k is the only metric that reflects user experience
    — a 75% per-trial success rate drops to 42% reliability over just 3
    independent trials. Reporting only pass@1 for a production agent
    systematically overstates quality.
stance: >-
  Production agents serving real users should be evaluated on pass^k (all k
  trials succeed), not pass@k (at least one of k succeeds).
related:
  - INS-260403-DDEB
  - INS-260329-CBF6
  - INS-260328-E410
  - INS-260329-3739
  - INS-260410-E3BB
---
Agent behavior is non-deterministic, so a single pass/fail per task hides the real distribution. Two metrics capture this: pass@k measures the probability that at least one of k trials succeeds (rises toward 100% as k grows), while pass^k measures the probability that all k trials succeed (collapses toward 0% as k grows). At k=1 they're identical; by k=10 they tell opposite stories.

The choice isn't stylistic — it's a product question. For research or coding workflows where a human can re-run or pick the best of several attempts, pass@k is the honest metric: you care whether the agent can find the answer at all. For customer-facing agents where users expect the same reliable behavior every time, pass^k is the only metric that reflects user experience — a 75% per-trial success rate drops to 42% reliability over just 3 independent trials. Reporting only pass@1 for a production agent systematically overstates quality.

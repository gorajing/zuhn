---
id: INS-260410-199B
domain: ai-development
topic: agent-patterns
title: Use pass^k not pass@k to measure agent reliability
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - benchmarks
  - agents
  - reliability
  - metrics
sources:
  - type: blog
    title: 'The "think" tool: Enabling Claude to stop and think'
    url: 'https://www.anthropic.com/engineering/claude-think-tool'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    pass@k rewards capability ceiling; pass^k rewards floor consistency — the
    metric that actually matters for production agents.
  standard: >-
    Standard LLM benchmarks often report pass@k: the probability that at least
    one of k independent attempts succeeds. That's useful for capability
    research but misleading for production agents, where you can't re-roll a
    customer service interaction until one of them works. Tau-bench uses pass^k
    — the probability that *all* k trials succeed — which directly measures
    consistency.


    This matters because the improvements from the think tool held through k=5,
    meaning the tool wasn't just occasionally unlocking a ceiling case; it was
    raising the floor. For policy-critical applications (compliance, legal,
    medical, finance), floor behavior is what you ship.


    General lesson: when evaluating any agentic system, ask which metric the
    benchmark reports and whether it rewards the thing you actually care about.
    If your users feel 1-in-5 failures as catastrophic, pass@1 is more honest
    than pass@5, and pass^k is more honest still.
stance: >-
  For agentic systems where consistency matters more than peak capability,
  pass^k (all k trials succeed) is the right metric, not pass@k (at least one of
  k succeeds).
related:
  - INS-260329-422F
  - INS-260330-77BB
  - INS-260330-F7B2
  - INS-260405-A742
  - INS-260403-F943
  - INS-260405-474C
  - INS-260410-B3C2
  - INS-260410-D5FC
  - INS-260329-CBF6
  - INS-260410-8243
---
Standard LLM benchmarks often report pass@k: the probability that at least one of k independent attempts succeeds. That's useful for capability research but misleading for production agents, where you can't re-roll a customer service interaction until one of them works. Tau-bench uses pass^k — the probability that *all* k trials succeed — which directly measures consistency.

This matters because the improvements from the think tool held through k=5, meaning the tool wasn't just occasionally unlocking a ceiling case; it was raising the floor. For policy-critical applications (compliance, legal, medical, finance), floor behavior is what you ship.

General lesson: when evaluating any agentic system, ask which metric the benchmark reports and whether it rewards the thing you actually care about. If your users feel 1-in-5 failures as catastrophic, pass@1 is more honest than pass@5, and pass^k is more honest still.

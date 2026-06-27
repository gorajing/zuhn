---
id: INS-260625-E292
domain: ai-development
topic: llm-training
title: >-
  A model can bootstrap its own tool-use skill from self-generated, filtered
  traces
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-taught
  - bootstrapping
  - rejection-sampling
  - fine-tuning
  - tool-use
sources:
  - type: youtube
    title: 'START by Alibaba: Teaching LLMs to Debug Their Thinking with Python'
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=HCLLJC7d1fE'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two rounds of rejection-sampling fine-tuning let a model generate, filter,
    and learn from its own tool-use traces, escalating from a small seed set to
    a large self-curated dataset with no hand-authored tool demonstrations.
  standard: >-
    START stands for Self-Taught Reasoner with Tools, and the 'self-taught' is
    literal: there are no human-written examples of correct tool use in the
    training loop. Phase one (Hint-RFT) uses hint-injected inference plus
    rejection sampling to produce a 12,000-sample seed set and fine-tune the
    base model into START-0. Phase two (RFT) then reprocesses the entire problem
    collection — not just the seed set — using START-0 itself to generate
    multiple responses, filters them with similar rules (plus light manual
    cleanup of unreasonable content), and fine-tunes again on the larger curated
    set (40,000 math + 10,000 code) to produce the final START model.


    The pattern is a bootstrapping ladder: a weak first model generates data
    good enough to train a stronger second model, which in turn curates a much
    larger and higher-quality dataset. Each round the model's own outputs, gated
    by automatic correctness checks, become the supervision signal. This matters
    because it sidesteps the expensive bottleneck of human demonstrations for
    tool use — the same rejection-sampling self-improvement recipe behind
    STaR-style methods, here extended to external tool integration. It implies
    teams can instill new agentic capabilities largely from a verifier and a
    problem set rather than from labeled tool-use traces.
stance: >-
  Large models can teach themselves to use external tools via self-generated,
  rejection-filtered data without any human tool-use demonstrations.
related:
  - INS-260329-E4F6
  - INS-260405-02BE
  - INS-260410-01BC
  - INS-260605-1B0B
  - INS-260625-0D5D
  - INS-260627-EEDE
  - INS-260625-3EE6
  - PRI-260406-A33C
---
START stands for Self-Taught Reasoner with Tools, and the 'self-taught' is literal: there are no human-written examples of correct tool use in the training loop. Phase one (Hint-RFT) uses hint-injected inference plus rejection sampling to produce a 12,000-sample seed set and fine-tune the base model into START-0. Phase two (RFT) then reprocesses the entire problem collection — not just the seed set — using START-0 itself to generate multiple responses, filters them with similar rules (plus light manual cleanup of unreasonable content), and fine-tunes again on the larger curated set (40,000 math + 10,000 code) to produce the final START model.

The pattern is a bootstrapping ladder: a weak first model generates data good enough to train a stronger second model, which in turn curates a much larger and higher-quality dataset. Each round the model's own outputs, gated by automatic correctness checks, become the supervision signal. This matters because it sidesteps the expensive bottleneck of human demonstrations for tool use — the same rejection-sampling self-improvement recipe behind STaR-style methods, here extended to external tool integration. It implies teams can instill new agentic capabilities largely from a verifier and a problem set rather than from labeled tool-use traces.

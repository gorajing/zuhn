---
id: INS-260605-3119
domain: ai-development
topic: agent-patterns
title: Eval the eval — LLM judges must themselves be validated against ground truth
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - evals
  - validation
  - ground-truth
sources:
  - type: youtube
    title: 'The maturity phases of running evals — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FB-MLPhL9Ms'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Putting a 'robe and cloak' on an LLM doesn't make it trustworthy — eval the
    judge itself against human-labeled ground truth.
  standard: >-
    Using an LLM to judge another LLM is effective and well-established, but the
    judge is not inherently trustworthy just because it has been cast in the
    role of arbiter. Its outputs must themselves be evaluated. The practical
    method: because LLM-judge outputs are discrete (e.g. a pass/fail or a
    score), you can build a ground-truth dataset of how a human would rule in
    the same circumstances and measure how aligned the judge is with it — 'you
    eval the eval as an eval.'


    This resolves the deterministic-vs-LLM-grader tension. Rather than
    retreating to only deterministic graders for trust, you can embrace
    LLM-as-judge for subjective dimensions (the same subjectivity that makes
    agents valuable) while keeping it honest through alignment evals. Where
    failure modes are objectively detectable in code — too many tool calls,
    excessive token usage — you should still use cheap deterministic graders
    rather than reaching for an LLM judge.
stance: >-
  An LLM-as-judge should be evaluated against a human-aligned ground-truth
  dataset rather than trusted by default.
related:
  - INS-260625-7165
  - INS-260628-337C
  - INS-260412-1440
  - INS-260330-D066
  - PRI-260406-C1EF
---
Using an LLM to judge another LLM is effective and well-established, but the judge is not inherently trustworthy just because it has been cast in the role of arbiter. Its outputs must themselves be evaluated. The practical method: because LLM-judge outputs are discrete (e.g. a pass/fail or a score), you can build a ground-truth dataset of how a human would rule in the same circumstances and measure how aligned the judge is with it — 'you eval the eval as an eval.'

This resolves the deterministic-vs-LLM-grader tension. Rather than retreating to only deterministic graders for trust, you can embrace LLM-as-judge for subjective dimensions (the same subjectivity that makes agents valuable) while keeping it honest through alignment evals. Where failure modes are objectively detectable in code — too many tool calls, excessive token usage — you should still use cheap deterministic graders rather than reaching for an LLM judge.

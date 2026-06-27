---
id: INS-260625-99B0
domain: ai-development
topic: agent-evals
title: 'Optimize agent behavior on the full trajectory, not just the final answer'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - trajectory
  - observability
  - feedback-signal
  - agent-skills
  - credit-assignment
sources:
  - type: youtube
    title: Microsoft Found Gradient Descent for AI Agent Skills
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=iSPwNmsa7kA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    SkillOpt passes the whole rollout — tool usage, intermediate steps, and
    final output — to the optimizer, not just a pass/fail correctness signal.
  standard: >-
    Rather than checking only whether the final answer is correct, SkillOpt
    sends the entire trajectory — tool calls, intermediate steps, and the final
    output — to a strong frontier optimizer model that proposes targeted skill
    edits. This richer signal is what lets the optimizer write specific,
    mechanism-aware rules (for example, 'inspect workbook structure and
    formulas, then write evaluated static values instead of relying on Excel
    recalculation') rather than vague encouragement.


    The general lesson is about credit assignment: a scalar success/failure
    signal tells you that something went wrong but not where, so it can only
    drive blind trial-and-error. The full trajectory exposes the actual failure
    point, enabling edits that fix the specific step. This is why agent
    observability — capturing complete traces, not just outcomes — is a
    prerequisite for any system that learns from its own behavior, and why
    outcome-only logging quietly caps how much an agent can improve.
stance: >-
  Improving an agent requires feeding the optimizer the entire execution trace,
  not only whether the final output was correct.
related:
  - INS-260410-B3C2
  - INS-260619-1512
  - INS-260605-8E69
  - INS-260409-171C
  - INS-260501-3502
  - INS-260626-F335
  - INS-260626-FC7A
---
Rather than checking only whether the final answer is correct, SkillOpt sends the entire trajectory — tool calls, intermediate steps, and the final output — to a strong frontier optimizer model that proposes targeted skill edits. This richer signal is what lets the optimizer write specific, mechanism-aware rules (for example, 'inspect workbook structure and formulas, then write evaluated static values instead of relying on Excel recalculation') rather than vague encouragement.

The general lesson is about credit assignment: a scalar success/failure signal tells you that something went wrong but not where, so it can only drive blind trial-and-error. The full trajectory exposes the actual failure point, enabling edits that fix the specific step. This is why agent observability — capturing complete traces, not just outcomes — is a prerequisite for any system that learns from its own behavior, and why outcome-only logging quietly caps how much an agent can improve.

---
id: INS-260625-6178
domain: ai-development
topic: agent-evals
title: Agent skill scanners must score code and instructions jointly
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - skill-safety
  - prompt-injection
  - supply-chain
sources:
  - type: blog
    title: 'MalSkillBench: A Runtime-Verified Benchmark of Malicious Agent Skills'
    url: 'https://arxiv.org/abs/2606.07131'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hybrid agent artifacts need hybrid evaluators, not separate code and prompt
    checks.
  standard: >-
    MalSkillBench reports that skill-specific detection can look strong on code
    injection while collapsing on prompt-injection and agent-control attacks,
    and that wild-only scoring can swing rankings sharply because wild samples
    are narrow. The lesson is that benchmark coverage must include the
    cross-product of attack surface, not only the most common observed campaign.


    For AgentRun, any gate around reusable skills or automation recipes should
    model the full artifact: declared intent, instruction text, executable
    scripts, requested permissions, and observed behavior. A pass/fail scanner
    result is weak evidence unless it explains which part of that bundle was
    checked and which attack classes remain out of scope.
stance: >-
  Evaluating agent skill safety with separate code scanners or prompt-injection
  detectors will miss failures because the exploit often lives in the
  relationship between task intent, executable code, natural-language
  instructions, and tool permissions.
related:
  - INS-260624-6753
  - INS-260625-EC9A
  - INS-260626-B149
  - INS-260605-6444
  - INS-260530-D34F
  - INS-260625-C69F
  - INS-260625-9E17
---
MalSkillBench reports that skill-specific detection can look strong on code injection while collapsing on prompt-injection and agent-control attacks, and that wild-only scoring can swing rankings sharply because wild samples are narrow. The lesson is that benchmark coverage must include the cross-product of attack surface, not only the most common observed campaign.

For AgentRun, any gate around reusable skills or automation recipes should model the full artifact: declared intent, instruction text, executable scripts, requested permissions, and observed behavior. A pass/fail scanner result is weak evidence unless it explains which part of that bundle was checked and which attack classes remain out of scope.

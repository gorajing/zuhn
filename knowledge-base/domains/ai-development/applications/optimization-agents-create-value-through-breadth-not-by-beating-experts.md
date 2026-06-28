---
id: INS-260627-3D9A
domain: ai-development
topic: applications
title: 'Optimization agents create value through breadth, not by beating experts'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ai-roi
  - complement-not-replace
  - human-ai-division-of-labor
  - deployment-strategy
  - long-tail
sources:
  - type: youtube
    title: >-
      AI Kernel Generation: What's working, what's not, what's next – Natalie
      Serrino, Gimlet Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=6guQG_tGt0o'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Deploy optimization agents to get better-than-baseline across the many
    unglamorous workloads experts can't reach, freeing scarce experts for the
    few hardest problems.
  standard: >-
    Kernel experts are scarce and overtaxed — 'not enough experts to solve every
    problem.' Serrino frames agents as a complement: they are good at cheaply
    generating many candidate ideas, slurping in large context, and running many
    experiments fast. The best applications are searching across a known 'bag of
    tricks' (fusion, tiling) to see what actually performs on a given workload,
    porting existing implementations to new hardware by specializing their
    insights to the target's features, and translating optimizations to new
    scenarios (e.g., a different quantization).


    The worst applications are the inverse: agents are not yet inventing the
    'N+1 for flash attention' or beating a human expert who spent months on a
    problem — and, she argues, we should not expect them to. The strategic value
    is therefore breadth, not depth: 'allowing those people to focus on the most
    interesting optimizations and getting us better than baseline on all the
    problems that they don't have time for.'


    This reframes the build/deploy decision. Rather than measuring an
    optimization agent against the best human result on the hardest problem
    (where it loses), measure it against the realistic counterfactual —
    workloads currently left un-optimized because no expert is available. There
    the agent's economic argument is strong, and it positions AI as a force
    multiplier on expert capacity rather than a replacement for it.
stance: >-
  The ROI of AI optimization agents comes from cheaply covering the long tail of
  workloads experts never have time for, not from out-optimizing scarce human
  experts.
related:
  - INS-260322-31F8
  - INS-260327-BE4E
  - INS-260327-E3DE
  - INS-260329-BC6C
  - INS-260403-C709
  - INS-260403-A3E4
  - INS-260403-AC01
  - INS-260403-B89E
  - INS-260403-3291
  - INS-260410-D92A
---
Kernel experts are scarce and overtaxed — 'not enough experts to solve every problem.' Serrino frames agents as a complement: they are good at cheaply generating many candidate ideas, slurping in large context, and running many experiments fast. The best applications are searching across a known 'bag of tricks' (fusion, tiling) to see what actually performs on a given workload, porting existing implementations to new hardware by specializing their insights to the target's features, and translating optimizations to new scenarios (e.g., a different quantization).

The worst applications are the inverse: agents are not yet inventing the 'N+1 for flash attention' or beating a human expert who spent months on a problem — and, she argues, we should not expect them to. The strategic value is therefore breadth, not depth: 'allowing those people to focus on the most interesting optimizations and getting us better than baseline on all the problems that they don't have time for.'

This reframes the build/deploy decision. Rather than measuring an optimization agent against the best human result on the hardest problem (where it loses), measure it against the realistic counterfactual — workloads currently left un-optimized because no expert is available. There the agent's economic argument is strong, and it positions AI as a force multiplier on expert capacity rather than a replacement for it.

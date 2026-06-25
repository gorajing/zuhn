---
id: INS-260625-B096
domain: ai-development
topic: agent-evals
title: Separate infrastructure retries from agent competence in benchmark runners
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - runners
  - retries
  - measurement
sources:
  - type: blog
    title: >-
      Power Systems Agent Benchmark: Executable Evaluation of AI Agents in
      Electric Power Engineering
    url: 'https://arxiv.org/abs/2606.20950'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'Retry provider faults, not poor answers.'
  standard: >-
    The runner described in arXiv:2606.20950 classifies failures so provider
    errors, connection drops, and quota problems are separated from genuine poor
    or absent solutions in a healthy environment. It records attempts and
    reports metrics with and without infrastructure retries, while malformed
    outputs are treated as ordinary failed solutions instead of aborting the
    full run.


    For production agent evals, this is a basic measurement hygiene rule. If
    retries are allowed after bad answers, a reported score no longer measures a
    single-run agent; it measures hidden sampling budget and masks reliability
    problems.
stance: >-
  Agent benchmark runners should retry infrastructure failures but never retry
  bad solutions, because retrying agent mistakes silently converts an eval into
  best-of-N search.
related:
  - INS-260330-0BBA
  - INS-260625-C6F4
  - INS-260329-F2BB
  - INS-260403-3739
  - INS-260403-5683
---
The runner described in arXiv:2606.20950 classifies failures so provider errors, connection drops, and quota problems are separated from genuine poor or absent solutions in a healthy environment. It records attempts and reports metrics with and without infrastructure retries, while malformed outputs are treated as ordinary failed solutions instead of aborting the full run.

For production agent evals, this is a basic measurement hygiene rule. If retries are allowed after bad answers, a reported score no longer measures a single-run agent; it measures hidden sampling budget and masks reliability problems.

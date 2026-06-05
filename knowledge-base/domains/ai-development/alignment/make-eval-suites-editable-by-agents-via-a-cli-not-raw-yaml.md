---
id: INS-260605-E2D9
domain: ai-development
topic: alignment
title: 'Make eval suites editable by agents via a CLI, not raw YAML'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - cli-tooling
  - context-window
  - coding-agents
  - test-data
sources:
  - type: youtube
    title: 'Fighting AI with AI — Lawrence Jones, Incident'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L2r6vLlLgs8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wrap your eval suite in a small CLI (list/add/edit/replace test cases) so
    agents can manipulate it without boosting megabytes of YAML into context.
  standard: >-
    incident.io treats evals as AI unit tests: each takes input data, runs a
    prompt, and grades the output against criteria, living in YAML files next to
    the Go prompts. The problem is realistic production evals can embed an
    entire incident report — multi-megabyte YAML that becomes unmaintainable and
    immediately exhausts a coding agent's context limit when read directly. A
    'steal an eval from production' button made capture easy but produced
    unwieldy, unfocused test cases.


    Their fix was 'eval tool,' a small CLI that lets an agent ask what test
    cases exist, edit one, replace one, or add one — without ingesting the whole
    file. This indirection is what made agents able to work with the eval suite
    at all, and enabled a runbook (or skill) where you tell the agent 'fix this
    prompt,' and it writes a failing eval, modifies the prompt until it passes,
    and proceeds. The general lesson: when a data structure is too large to load
    wholesale, give agents a narrow CLI interface over it instead of the raw
    file.
stance: >-
  Large eval files should be edited by coding agents through a purpose-built CLI
  rather than loaded as raw text, to avoid blowing the context window.
related:
  - INS-260410-AF66
  - INS-260605-6444
  - INS-260605-DCE5
  - INS-260605-36E9
  - INS-260530-C385
---
incident.io treats evals as AI unit tests: each takes input data, runs a prompt, and grades the output against criteria, living in YAML files next to the Go prompts. The problem is realistic production evals can embed an entire incident report — multi-megabyte YAML that becomes unmaintainable and immediately exhausts a coding agent's context limit when read directly. A 'steal an eval from production' button made capture easy but produced unwieldy, unfocused test cases.

Their fix was 'eval tool,' a small CLI that lets an agent ask what test cases exist, edit one, replace one, or add one — without ingesting the whole file. This indirection is what made agents able to work with the eval suite at all, and enabled a runbook (or skill) where you tell the agent 'fix this prompt,' and it writes a failing eval, modifies the prompt until it passes, and proceeds. The general lesson: when a data structure is too large to load wholesale, give agents a narrow CLI interface over it instead of the raw file.

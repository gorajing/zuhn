---
id: INS-260626-F3AC
domain: ai-development
topic: system-building
title: 'Traceability that depends on agent cooperation is detection, not prevention'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - traceability
  - coding-agents
  - scope-creep
  - honest-claims
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If the agent must call the trace tool itself, the control plane can flag
    missing links later but cannot prevent the edit upfront.
  standard: >-
    Rel(AI)Build's trace.json maps acceptance criteria to implementing files and
    verifying tests, then flags changed files that are outside registered AC
    scopes. The paper is careful about the trust boundary: linkage requires
    cooperative agent invocation of trace-update, so a prompt-injected or
    non-compliant agent can edit first and only be detected at the next drift
    check.


    The agent-building implication is to label these controls honestly. They are
    valuable for auditability and scope-creep detection, but they are not
    equivalent to pre-execution file-scope enforcement unless the harness itself
    mediates writes.
stance: >-
  Requirement-to-file-to-test traceability should be described as post-hoc
  detection when it depends on the agent voluntarily registering touched files.
related:
  - INS-260605-A2AD
  - INS-260625-1830
  - INS-260605-93B8
  - INS-260605-3163
  - INS-260327-9D50
---
Rel(AI)Build's trace.json maps acceptance criteria to implementing files and verifying tests, then flags changed files that are outside registered AC scopes. The paper is careful about the trust boundary: linkage requires cooperative agent invocation of trace-update, so a prompt-injected or non-compliant agent can edit first and only be detected at the next drift check.

The agent-building implication is to label these controls honestly. They are valuable for auditability and scope-creep detection, but they are not equivalent to pre-execution file-scope enforcement unless the harness itself mediates writes.

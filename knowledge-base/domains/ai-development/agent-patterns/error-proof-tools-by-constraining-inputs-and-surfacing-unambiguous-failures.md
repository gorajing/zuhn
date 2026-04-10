---
id: INS-260410-38C8
domain: ai-development
topic: agent-patterns
title: Error-proof tools by constraining inputs and surfacing unambiguous failures
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - error-handling
  - robustness
  - self-correction
sources:
  - type: blog
    title: Claude SWE-Bench Performance
    url: 'https://www.anthropic.com/engineering/swe-bench-sonnet'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The SWE-bench agent always requires absolute paths and only performs an edit
    when `old_str` matches exactly once — both choices eliminate entire classes
    of silent failure.
  standard: >-
    Two concrete error-proofing tactics from the post: (1) the edit tool always
    requires an absolute path, because models sometimes lose track of the
    current working directory after the agent moves around with Bash commands;
    (2) string replacement edits only succeed when `old_str` appears exactly
    once in the file, otherwise the model gets an explicit error and a chance to
    retry with more context.


    The deeper principle: when a tool input has a common, silent failure mode
    (wrong working directory, ambiguous match), redesign the tool to make that
    failure impossible or to surface it as a loud, actionable error. Helpful
    error messages then act as a steering signal — the model receives feedback
    in the same loop and adjusts. This is cheaper and more reliable than trying
    to prompt the model to always be careful.


    When designing agent tools, audit each parameter for 'modes where the model
    could be wrong and wouldn't know.' Eliminate them structurally, not through
    prompting.
stance: >-
  Force tools to reject ambiguous or stateful inputs (require absolute paths,
  require unique string matches) so the model self-corrects instead of silently
  corrupting state.
related:
  - INS-260410-E977
  - INS-260410-CD79
  - INS-260323-2E51
  - INS-260410-85AD
  - INS-260320-9D89
---
Two concrete error-proofing tactics from the post: (1) the edit tool always requires an absolute path, because models sometimes lose track of the current working directory after the agent moves around with Bash commands; (2) string replacement edits only succeed when `old_str` appears exactly once in the file, otherwise the model gets an explicit error and a chance to retry with more context.

The deeper principle: when a tool input has a common, silent failure mode (wrong working directory, ambiguous match), redesign the tool to make that failure impossible or to surface it as a loud, actionable error. Helpful error messages then act as a steering signal — the model receives feedback in the same loop and adjusts. This is cheaper and more reliable than trying to prompt the model to always be careful.

When designing agent tools, audit each parameter for 'modes where the model could be wrong and wouldn't know.' Eliminate them structurally, not through prompting.

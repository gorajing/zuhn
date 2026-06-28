---
id: INS-260626-475E
domain: ai-development
topic: agent-evals
title: 'Evaluate tool descriptions competitively as a pool, not in isolation'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - tool-descriptions
  - prompt-engineering
  - tool-selection
  - agent-behavior
sources:
  - type: youtube
    title: 'Scaling GitHub for your Agents — Sam Morrow, GitHub'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0n3MKk7r60w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Instead of micro-optimizing individual tool descriptions, GitHub evals them
    against each other so tools don't fight over when to be called — the
    description that makes an agent always call a tool is as bad as the one that
    makes it never call it.
  standard: >-
    Morrow's team learned that optimizing a tool description in isolation is a
    trap. The goal of a description is correct selection: 'called at the right
    times and not called at the wrong times.' A description so compelling the
    agent always reaches for that tool is just as broken as one so weak the
    agent never does. Because tools compete for the agent's attention, the only
    meaningful evaluation is a competitive one — testing descriptions against
    each other in a realistic pool to verify each fires precisely when
    appropriate.


    This reframes tool-description work from copywriting to calibration. You
    aren't writing the 'best' description for a tool; you're tuning a set of
    descriptions so their selection boundaries are tight and non-overlapping.
    The practical implication is that an eval harness for an agent's tool layer
    must score the whole pool's selection behavior, not per-tool quality, and
    any change to one description can regress selection of its neighbors.
    (GitHub credits this approach to evals run since last year, with a linked
    engineering write-up.)
stance: >-
  Tool descriptions must be tuned against each other so each fires at the right
  time, not micro-optimized one at a time.
related:
  - INS-260410-A1E9
  - INS-260410-EE5C
  - INS-260410-5D66
  - PRI-260411-64C7
  - INS-260602-EA48
  - INS-260605-117F
  - INS-260605-D0A0
  - INS-260605-0819
  - INS-260605-1A2D
  - INS-260624-B6EA
---
Morrow's team learned that optimizing a tool description in isolation is a trap. The goal of a description is correct selection: 'called at the right times and not called at the wrong times.' A description so compelling the agent always reaches for that tool is just as broken as one so weak the agent never does. Because tools compete for the agent's attention, the only meaningful evaluation is a competitive one — testing descriptions against each other in a realistic pool to verify each fires precisely when appropriate.

This reframes tool-description work from copywriting to calibration. You aren't writing the 'best' description for a tool; you're tuning a set of descriptions so their selection boundaries are tight and non-overlapping. The practical implication is that an eval harness for an agent's tool layer must score the whole pool's selection behavior, not per-tool quality, and any change to one description can regress selection of its neighbors. (GitHub credits this approach to evals run since last year, with a linked engineering write-up.)

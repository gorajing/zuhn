---
id: INS-260628-1B09
domain: ai-development
topic: agent-reliability
title: >-
  Design for human-in-the-loop first in regulated domains, not full agentic
  autonomy
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - compliance
  - regulated-industries
  - agentic-systems
  - finance
sources:
  - type: youtube
    title: >-
      How BlackRock Builds Custom Knowledge Apps at Scale — Vaibhav Page &
      Infant Vasanth, BlackRock
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=08mH36_NVos'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    BlackRock tried agentic systems for complex security setup and they 'don't
    quite work' given the domain complexity—so in regulated finance they design
    for human-in-the-loop and four-eyes checks first, resisting the temptation
    to go all-agent.
  standard: >-
    The team explicitly warns against the industry reflex to 'go all agentic.'
    When they attempted agentic systems for tasks like setting up a new security
    from a prospectus or term sheet, the approach broke down because of the
    complexity and the deep domain knowledge imbued in human experts. In
    financial operations, an extraction or transformation error isn't a cosmetic
    bug—it propagates into trades and compliance, so the cost of an autonomous
    mistake is categorically higher.


    Their stated principle is to 'design for human in the loop first' in highly
    regulated environments. Compliance and regulation effectively require 'four
    eyes' checks—a human reviewing and approving model output before it actions
    downstream. The architecture therefore treats the model as an augmentation
    that surfaces candidate values for human review, not as an autonomous actor.
    Operators run extractions, see the expected values, and review them before
    anything is passed to downstream processes.


    The broader point is that the appropriate degree of autonomy is a function
    of the regulatory and risk environment, not of model capability. Even when a
    model is good enough to act alone, regulated domains should architect for
    review checkpoints from the start, because retrofitting human oversight onto
    a pipeline designed for autonomy is far harder than building the loop in
    first.
stance: >-
  In regulated, high-stakes domains the correct default is a human-in-the-loop
  pipeline with explicit four-eyes checks, not a fully agentic system.
related:
  - PRI-260328-F723
  - INS-260603-1BC0
  - PRI-260328-1ED1
  - INS-260327-C1A4
  - INS-260627-D043
---
The team explicitly warns against the industry reflex to 'go all agentic.' When they attempted agentic systems for tasks like setting up a new security from a prospectus or term sheet, the approach broke down because of the complexity and the deep domain knowledge imbued in human experts. In financial operations, an extraction or transformation error isn't a cosmetic bug—it propagates into trades and compliance, so the cost of an autonomous mistake is categorically higher.

Their stated principle is to 'design for human in the loop first' in highly regulated environments. Compliance and regulation effectively require 'four eyes' checks—a human reviewing and approving model output before it actions downstream. The architecture therefore treats the model as an augmentation that surfaces candidate values for human review, not as an autonomous actor. Operators run extractions, see the expected values, and review them before anything is passed to downstream processes.

The broader point is that the appropriate degree of autonomy is a function of the regulatory and risk environment, not of model capability. Even when a model is good enough to act alone, regulated domains should architect for review checkpoints from the start, because retrofitting human oversight onto a pipeline designed for autonomy is far harder than building the loop in first.

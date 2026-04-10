---
id: INS-260410-9D86
domain: ai-development
topic: agent-patterns
title: Treat tool interfaces with the same rigor as human UIs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - aci
  - prompt-engineering
  - reliability
sources:
  - type: blog
    title: Building Effective AI Agents
    url: 'https://www.anthropic.com/engineering/building-effective-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >
    Invest as much effort in agent-computer interfaces as you would in
    human-computer interfaces — clear tool descriptions, example usage,
    poka-yoke constraints, and formats close to natural training data all
    compound into reliability.
  standard: >-
    When building their SWE-bench coding agent, the Anthropic team spent more
    time optimizing tool definitions than the overall prompt. Tools are how the
    agent actually acts on the world, and models struggle with formats that
    require counting lines (like diffs with chunk headers) or escaping quotes
    (like code inside JSON). Formats that look close to what the model saw on
    the open internet work best.


    The concrete techniques: put yourself in the model's shoes when reading the
    tool doc, write the doc like a great docstring for a junior developer,
    include example usage and edge cases, and poka-yoke the parameters so
    mistakes become impossible. Their canonical example: the model kept getting
    confused by relative filepaths after changing directories, so they made the
    tool require absolute paths — the error disappeared entirely. This is a
    general pattern: constrain inputs until the failure mode cannot occur,
    rather than prompting around it.
stance: >-
  Agent reliability hinges more on well-designed agent-computer interfaces (ACI)
  than on clever prompting, so tool definitions deserve as much engineering
  investment as product UIs.
related:
  - INS-260402-876A
  - INS-260409-160F
  - INS-260410-7ED2
  - INS-260410-85AD
  - PRI-260406-3EF8
  - PRI-260407-D1AD
  - PRI-260328-F723
  - PRI-260328-1ED1
---
When building their SWE-bench coding agent, the Anthropic team spent more time optimizing tool definitions than the overall prompt. Tools are how the agent actually acts on the world, and models struggle with formats that require counting lines (like diffs with chunk headers) or escaping quotes (like code inside JSON). Formats that look close to what the model saw on the open internet work best.

The concrete techniques: put yourself in the model's shoes when reading the tool doc, write the doc like a great docstring for a junior developer, include example usage and edge cases, and poka-yoke the parameters so mistakes become impossible. Their canonical example: the model kept getting confused by relative filepaths after changing directories, so they made the tool require absolute paths — the error disappeared entirely. This is a general pattern: constrain inputs until the failure mode cannot occur, rather than prompting around it.

---
id: INS-260627-4253
domain: ai-development
topic: tooling
title: Keep custom agent tools in-distribution with model training
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tool-design
  - in-distribution
  - cursor
  - coding-agents
  - harness
sources:
  - type: youtube
    title: 'Future-Proof Coding Agents – Bill Chen & Brian Fioca, OpenAI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wVl6ZjELpBk'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A brand-new custom tool may be out-of-distribution for the model and used
    poorly; conforming to the vendor's tool shapes keeps the model on familiar
    ground.
  standard: >-
    Among the harness challenges the speakers list, the first is that 'your
    brand new innovative custom tool might not be something the model is used to
    using — it may not have ever seen that tool before in training.' Even when
    it has, you must tune your prompt to that model's habits. Novelty in the
    tool interface is a cost, not a feature.


    The Cursor case study is the concrete proof: to get the best performance out
    of the Codex model, Cursor aligned their tools to be 'in distribution with
    how the model is trained' and aligned their harness with OpenAI's
    open-source Codex CLI implementation. OpenAI explicitly invites forking that
    public reference so builders can match the tool shapes the model already
    expects.


    The immediate practice: before designing a bespoke tool surface, check the
    vendor's reference/open-source harness and conform to its tool definitions.
    Treat divergence from the trained-on tool vocabulary as something you must
    justify with evals, because the default expectation is that
    out-of-distribution tools will be used worse.
stance: >-
  Custom agent tools a model never saw during training underperform, so aligning
  your tools with the vendor's reference implementation beats inventing novel
  tool interfaces.
related:
  - INS-260605-288D
  - INS-260625-3EE6
  - INS-260410-A1E9
  - INS-260625-3768
  - INS-260627-B3FF
---
Among the harness challenges the speakers list, the first is that 'your brand new innovative custom tool might not be something the model is used to using — it may not have ever seen that tool before in training.' Even when it has, you must tune your prompt to that model's habits. Novelty in the tool interface is a cost, not a feature.

The Cursor case study is the concrete proof: to get the best performance out of the Codex model, Cursor aligned their tools to be 'in distribution with how the model is trained' and aligned their harness with OpenAI's open-source Codex CLI implementation. OpenAI explicitly invites forking that public reference so builders can match the tool shapes the model already expects.

The immediate practice: before designing a bespoke tool surface, check the vendor's reference/open-source harness and conform to its tool definitions. Treat divergence from the trained-on tool vocabulary as something you must justify with evals, because the default expectation is that out-of-distribution tools will be used worse.

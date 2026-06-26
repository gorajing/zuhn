---
id: INS-260626-40DF
domain: ai-development
topic: agent-patterns
title: Stop treating the LLM as precious — over-engineered harnesses cripple agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - agent-loops
  - context-engineering
  - llm-harness
  - tooling
sources:
  - type: youtube
    title: The Most AI-Pilled CEO We Know
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=mPAHvz8kW24'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most software people still cage the LLM in if-statements because they think
    it's expensive and precious; the leverage is to give it broad read access
    and tools and let it rip.
  standard: >-
    Franceschi's central regret was spending half a million lines of Rails code
    building what he calls a 'Foxconn factory for agents' — elaborate
    scaffolding to tightly control what context the model sees and constrain its
    every move, because he treated the LLM as a precious, expensive resource
    that had to be micromanaged. He argues most of software is still making this
    mistake, over-engineering the harness when 'every single good AI product
    you've used is an agent loop with tools — skills, tools, and a model,
    there's not really much else.'


    The practical inversion he ran was to give an agent broad read access to
    email, Slack, and his systems via OAuth tokens (no write access at first)
    and was 'shocked how far it got me.' The lesson: capability comes less from
    the cleverness of the harness and more from the breadth of context and the
    freedom to act. You can self-bootstrap most agent capability by editing
    skills and markdown files around the agent rather than hand-coding behavior.


    The deeper point for builders: fighting the instinct to 'go build more UI or
    more functionality' when the agent can't quite do something forces you to
    instead make the agent more intelligent — load more context, let it reason —
    which compounds. The harness is a means to the bleeding edge, not the
    product itself.
stance: >-
  Hand-writing guardrails to control exactly what an LLM sees makes agents
  worse; a simple agent loop with broad context and tools outperforms the
  over-engineered harness.
related:
  - INS-260405-131B
  - INS-260329-500E
  - INS-260626-E636
  - INS-260327-3B91
  - INS-260405-3240
---
Franceschi's central regret was spending half a million lines of Rails code building what he calls a 'Foxconn factory for agents' — elaborate scaffolding to tightly control what context the model sees and constrain its every move, because he treated the LLM as a precious, expensive resource that had to be micromanaged. He argues most of software is still making this mistake, over-engineering the harness when 'every single good AI product you've used is an agent loop with tools — skills, tools, and a model, there's not really much else.'

The practical inversion he ran was to give an agent broad read access to email, Slack, and his systems via OAuth tokens (no write access at first) and was 'shocked how far it got me.' The lesson: capability comes less from the cleverness of the harness and more from the breadth of context and the freedom to act. You can self-bootstrap most agent capability by editing skills and markdown files around the agent rather than hand-coding behavior.

The deeper point for builders: fighting the instinct to 'go build more UI or more functionality' when the agent can't quite do something forces you to instead make the agent more intelligent — load more context, let it reason — which compounds. The harness is a means to the bleeding edge, not the product itself.

---
id: INS-260626-091B
domain: ai-development
topic: agents
title: >-
  Secure agents at the network boundary with an HTTP proxy and LLM-as-judge, not
  at the tool layer
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-security
  - llm-as-judge
  - http-proxy
  - enterprise-ai
  - guardrails
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
    Tool-call restrictions leak because an agent can just make an HTTP request
    wrong; the right control point is an HTTP proxy on the agent's whole network
    boundary, with an LLM judging ambiguous traffic against a policy learned
    from a day of recorded activity.
  standard: >-
    Brex's security team initially refused to let agents write into production
    systems for all the obvious reasons. Franceschi spent four weeks solving the
    hardest problem — security — and concluded the only robust place to enforce
    control is the network layer. Approaches that fork the agent shell to gate
    which tools the model can call are bypassable: 'you can do all that, but you
    can also just make an HTTP request wrong.' So Brex built and open-sourced
    'crab trap,' an HTTP proxy that audits the entire network boundary of an
    agent, making every request inspectable.


    The surprising enabler is that LLMs reason about HTTP traffic better than
    almost anything else, because they were trained on hundreds of billions of
    web documents — so the web is the medium they understand most natively. A
    model can watch a thousand requests and make sense of what's happening far
    better than expected. After recording one day of an agent's traffic, you can
    build a policy that auto-approves the safe majority and routes ambiguous
    requests to an LLM-as-judge that decides based on what that agent is
    supposed to do. Brex's recruiting agent 'Jim' runs ~98% of requests through
    automatically and only ~2% hit the judge.


    The organizational payoff: it was specifically the LLM-as-judge layer — not
    credential brokering, which they deliberately cut to 'do one thing really
    well' — that got their rigorous security team to a 'yes' on production.
    Solving security to a level the team trusted is what let the company
    experiment far more aggressively.
stance: >-
  Restricting which tools an agent can call is insufficient because it can
  always craft a wrong HTTP request; the durable control point is an auditing
  proxy at the network boundary with an LLM judging traffic against a learned
  policy.
related:
  - INS-260321-1A03
  - INS-260330-4E68
  - INS-260403-5BCF
  - INS-260412-4233
  - INS-260423-FF52
  - INS-260423-1C4D
  - INS-260605-9925
  - INS-260605-75B7
  - INS-260605-BC6F
  - INS-260605-A2B7
---
Brex's security team initially refused to let agents write into production systems for all the obvious reasons. Franceschi spent four weeks solving the hardest problem — security — and concluded the only robust place to enforce control is the network layer. Approaches that fork the agent shell to gate which tools the model can call are bypassable: 'you can do all that, but you can also just make an HTTP request wrong.' So Brex built and open-sourced 'crab trap,' an HTTP proxy that audits the entire network boundary of an agent, making every request inspectable.

The surprising enabler is that LLMs reason about HTTP traffic better than almost anything else, because they were trained on hundreds of billions of web documents — so the web is the medium they understand most natively. A model can watch a thousand requests and make sense of what's happening far better than expected. After recording one day of an agent's traffic, you can build a policy that auto-approves the safe majority and routes ambiguous requests to an LLM-as-judge that decides based on what that agent is supposed to do. Brex's recruiting agent 'Jim' runs ~98% of requests through automatically and only ~2% hit the judge.

The organizational payoff: it was specifically the LLM-as-judge layer — not credential brokering, which they deliberately cut to 'do one thing really well' — that got their rigorous security team to a 'yes' on production. Solving security to a level the team trusted is what let the company experiment far more aggressively.

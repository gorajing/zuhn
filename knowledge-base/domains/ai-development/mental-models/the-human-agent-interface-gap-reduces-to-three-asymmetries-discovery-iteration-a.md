---
id: INS-260627-6757
domain: ai-development
topic: mental-models
title: >-
  The human-agent interface gap reduces to three asymmetries: discovery,
  iteration, and context
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - mental-models
  - mcp
  - interface-design
  - context-window
sources:
  - type: youtube
    title: 'Your MCP Server is Bad (and you should feel bad) - Jeremiah Lowin, Prefect'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=96G7FLab8xc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Humans discover once and iterate cheaply with vast context; agents
    re-discover every session, treat iteration as the enemy, and have a
    ~200k-token working memory — so interfaces built for one are wrong for the
    other.
  standard: >-
    The common objection 'if a human can use an API, why can't an AI?' rests on
    two false premises: that humans use APIs (they don't — they put websites,
    SDKs, and apps between themselves and APIs) and that agents are oracles good
    at everything. The real difference is structural along three dimensions.
    Discovery: a human reads the docs once over an application's lifetime, so
    discovery is cheap; an agent re-enumerates every tool and description on
    every handshake, so discovery is expensive and token-hungry. Iteration: a
    human writes a script that calls three known routes as fast as the language
    allows and reruns until it works; for an agent every additional call resends
    the entire prior history over the wire, so iteration is slow and to be
    avoided. Context: a human integrates this conversation against a lifetime of
    layered memory; an LLM remembers only its last ~200k tokens plus what is
    frozen in its weights.


    The practical payoff is that you don't need to memorize MCP best practices
    as a list — they are consequences of these three asymmetries. 'Don't make
    the agent orchestrate' falls out of iteration being expensive. 'Respect the
    token budget' falls out of discovery being expensive and context being
    scarce. Lowin's mental image: an agent can find a needle in a haystack, but
    only by examining every piece of hay to decide if it's a needle — so the
    designer's job is to hand it a smaller, pre-curated haystack. Treat the
    agent as a powerful but limited tool with a very small brain (he compares it
    to Apollo 11's kilobyte of RAM), and design accordingly.
stance: >-
  Every agent-interface design choice follows deductively from three ways agents
  differ from humans — discovery, iteration, and context cost — so reasoning
  from these primitives beats memorizing rules.
related:
  - INS-260605-5013
  - INS-260625-96AA
  - INS-260626-14E0
  - INS-260626-411D
  - PRI-260328-EE02
  - PRI-260407-D1AD
  - PRI-260328-A65A
  - INS-260327-A9D5
---
The common objection 'if a human can use an API, why can't an AI?' rests on two false premises: that humans use APIs (they don't — they put websites, SDKs, and apps between themselves and APIs) and that agents are oracles good at everything. The real difference is structural along three dimensions. Discovery: a human reads the docs once over an application's lifetime, so discovery is cheap; an agent re-enumerates every tool and description on every handshake, so discovery is expensive and token-hungry. Iteration: a human writes a script that calls three known routes as fast as the language allows and reruns until it works; for an agent every additional call resends the entire prior history over the wire, so iteration is slow and to be avoided. Context: a human integrates this conversation against a lifetime of layered memory; an LLM remembers only its last ~200k tokens plus what is frozen in its weights.

The practical payoff is that you don't need to memorize MCP best practices as a list — they are consequences of these three asymmetries. 'Don't make the agent orchestrate' falls out of iteration being expensive. 'Respect the token budget' falls out of discovery being expensive and context being scarce. Lowin's mental image: an agent can find a needle in a haystack, but only by examining every piece of hay to decide if it's a needle — so the designer's job is to hand it a smaller, pre-curated haystack. Treat the agent as a powerful but limited tool with a very small brain (he compares it to Apollo 11's kilobyte of RAM), and design accordingly.

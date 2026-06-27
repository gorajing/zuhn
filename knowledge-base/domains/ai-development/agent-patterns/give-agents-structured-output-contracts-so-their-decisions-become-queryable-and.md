---
id: INS-260625-EDA3
domain: ai-development
topic: agent-patterns
title: >-
  Give Agents Structured Output Contracts So Their Decisions Become Queryable
  and Composable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - structured-output
  - agent-memory
  - contracts
  - composability
  - schema-design
sources:
  - type: youtube
    title: 'Build Systems, Not Code - Angie Jones, Agentic AI Foundation'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZD9-4fW2HhM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Free-form text is fine when a human is the only reader, but the moment
    another system consumes the output it needs an agreed-upon shape — a
    contract.
  standard: >-
    Software has always required a contract whenever two systems talk: an
    agreed-upon shape between them. Agentic systems need the same discipline.
    When the relocation scout scores a house and just hands back a friendly
    message, that message is lovely for a human to read in the moment but a dead
    end for the system — a decision buried in a session transcript that nothing
    downstream can reliably find. Written instead into a structured shape
    (decision, score, reason) in the agent's memory layer, that same information
    becomes queryable: 'show me every house rated four or better with a commute
    of 15 minutes or less' works because the score and commute live in known
    places rather than being trapped in a conversation.


    The contract is also what makes the handoff between steps safe: the agent's
    output is another step's input, and the short-list step reads those same
    fields with no human in the loop. The deeper payoff is epistemic — defining
    the shape forces you to get clear and specific, because if you can't say
    what the output should look like, you probably don't yet fully understand
    what you're asking the agent to produce. The heuristic: free-form text is
    acceptable only when a human is the sole reader; as soon as another system
    has to act on the output, reach for a structured contract.
stance: >-
  When another system or downstream step must act on an agent's output,
  free-form text is a dead end and the output must be written as a structured
  contract, or handoffs and memory queries silently break.
related:
  - INS-260327-5F10
  - INS-260321-82FE
  - INS-260626-87B7
  - INS-260627-DD09
  - INS-260403-D4F0
---
Software has always required a contract whenever two systems talk: an agreed-upon shape between them. Agentic systems need the same discipline. When the relocation scout scores a house and just hands back a friendly message, that message is lovely for a human to read in the moment but a dead end for the system — a decision buried in a session transcript that nothing downstream can reliably find. Written instead into a structured shape (decision, score, reason) in the agent's memory layer, that same information becomes queryable: 'show me every house rated four or better with a commute of 15 minutes or less' works because the score and commute live in known places rather than being trapped in a conversation.

The contract is also what makes the handoff between steps safe: the agent's output is another step's input, and the short-list step reads those same fields with no human in the loop. The deeper payoff is epistemic — defining the shape forces you to get clear and specific, because if you can't say what the output should look like, you probably don't yet fully understand what you're asking the agent to produce. The heuristic: free-form text is acceptable only when a human is the sole reader; as soon as another system has to act on the output, reach for a structured contract.

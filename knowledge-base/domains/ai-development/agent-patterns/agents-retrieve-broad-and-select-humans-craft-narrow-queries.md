---
id: INS-260625-211E
domain: ai-development
topic: agent-patterns
title: Agents retrieve broad and select; humans craft narrow queries
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-tool-design
  - retrieval
  - hybrid-search
  - human-vs-agent
sources:
  - type: youtube
    title: Power intelligent agents with AI-native databases
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=7awKinJhGPo'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models excel at selecting the right rows from a large input but are weak at
    producing the precise query that fetches only those rows, so give them
    broad-recall tools (vector + hybrid search) and let them do the final
    selection.
  standard: >-
    David Soria Para's framing is the most transferable idea in the session:
    traditionally humans 'carefully craft SQL over and over for that one perfect
    query,' optimizing for precision at the fetch step. Agents invert this —
    they are very good at sifting through large amounts of retrieved data and
    selecting what they need, but getting to that first layer of input is the
    hard part for them. The implication is a different tool-design objective:
    maximize recall and let the model do precision.


    This reframes what 'good' database/retrieval tooling means in an agentic
    system. Instead of exposing narrow, parameterized query endpoints that
    assume the caller already knows exactly what to ask for, expose broad-recall
    primitives — vector search, full-text search, hybrid search, graph traversal
    — that return a generous candidate set (e.g. top 1,000-2,000) which the
    agent then re-ranks and filters. It generalizes beyond databases: any tool
    an agent calls should lean toward returning a navigable superset rather than
    demanding the agent specify the exact answer up front, because
    specifying-the-exact-answer is precisely the step agents are worst at. Pairs
    with re-rank/AI-filter functions that close the precision gap after broad
    retrieval.
stance: >-
  Data tools for agents should hand back wide candidate sets to be sifted, not
  force the one-perfect-query discipline humans use.
related:
  - INS-260625-3A20
  - INS-260409-2A51
  - INS-260626-6A9F
  - INS-260325-E652
  - INS-260625-4248
---
David Soria Para's framing is the most transferable idea in the session: traditionally humans 'carefully craft SQL over and over for that one perfect query,' optimizing for precision at the fetch step. Agents invert this — they are very good at sifting through large amounts of retrieved data and selecting what they need, but getting to that first layer of input is the hard part for them. The implication is a different tool-design objective: maximize recall and let the model do precision.

This reframes what 'good' database/retrieval tooling means in an agentic system. Instead of exposing narrow, parameterized query endpoints that assume the caller already knows exactly what to ask for, expose broad-recall primitives — vector search, full-text search, hybrid search, graph traversal — that return a generous candidate set (e.g. top 1,000-2,000) which the agent then re-ranks and filters. It generalizes beyond databases: any tool an agent calls should lean toward returning a navigable superset rather than demanding the agent specify the exact answer up front, because specifying-the-exact-answer is precisely the step agents are worst at. Pairs with re-rank/AI-filter functions that close the precision gap after broad retrieval.

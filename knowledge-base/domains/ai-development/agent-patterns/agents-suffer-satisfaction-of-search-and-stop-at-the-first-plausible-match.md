---
id: INS-260605-4C0A
domain: ai-development
topic: agent-patterns
title: Agents suffer 'satisfaction of search' and stop at the first plausible match
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - retrieval
  - rag
  - context-engineering
  - failure-modes
sources:
  - type: youtube
    title: 'Stop babysitting your agents... — Brandon Waselnuk, Unblocked'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BiG2ssibKGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Like a radiologist who finds one lung nodule and stops scanning, an agent
    grabs the first matching pattern from a data store and quits, so retrieval
    that isn't exhaustive surfaces wrong implementations.
  standard: >-
    'Satisfaction of search' is a documented radiology failure: once a scanner
    finds something that explains the symptom, they stop looking and miss
    co-occurring problems. Agents do the same — ask one to 'make a Zendesk
    integration' and it calls a tool, finds the first piece of data, concludes
    'this must be the pattern,' and stops. Naive RAG over docs amplifies this:
    it drops a pile of chunks in a store and lets the agent crawl until it's
    satisfied, not until it's correct. The result is plausible-but-wrong output
    that the human must catch and redirect ('it's actually over here, let me
    point to the file') — which is the babysitting doom loop. The design
    implication is that a retrieval layer should run exhaustively across all
    relevant surfaces and resolve to the best implementation, rather than
    returning on first hit.
stance: >-
  Agent retrieval must be forced to run exhaustively because agents latch onto
  the first relevant-looking result and stop searching, missing the real root
  cause.
related:
  - INS-260605-CEB5
  - INS-260605-2A64
  - INS-260329-61E5
  - PRI-260328-0BE1
  - PRI-260328-E64D
---
'Satisfaction of search' is a documented radiology failure: once a scanner finds something that explains the symptom, they stop looking and miss co-occurring problems. Agents do the same — ask one to 'make a Zendesk integration' and it calls a tool, finds the first piece of data, concludes 'this must be the pattern,' and stops. Naive RAG over docs amplifies this: it drops a pile of chunks in a store and lets the agent crawl until it's satisfied, not until it's correct. The result is plausible-but-wrong output that the human must catch and redirect ('it's actually over here, let me point to the file') — which is the babysitting doom loop. The design implication is that a retrieval layer should run exhaustively across all relevant surfaces and resolve to the best implementation, rather than returning on first hit.

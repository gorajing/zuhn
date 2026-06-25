---
id: INS-260605-0E65
domain: ai-development
topic: limitations
title: 'Context rot is driven by information complexity, not context-window occupancy'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-rot
  - long-context
  - recursive-language-models
  - context-window
  - retrieval
sources:
  - type: youtube
    title: >-
      Scaling the Next Paradigm of Heterogeneous Intelligence — Adrian
      Bertagnoli, Callosum
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WRBNDpUhsJQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Constant-information tasks (needle-in-haystack, O(1)) survive a full context
    window, but linear or quadratic information demands degrade accuracy to
    30-60% even at low occupancy.
  standard: >-
    Recursive language models (a seminal MIT paper from the prior October)
    showed that occupying only a small percentage of the context window can
    still produce dramatic context rot, depending on the information complexity
    the prompt demands. A needle-in-a-haystack lookup is O(1): the information
    requirement stays constant regardless of prompt size, so the model can fill
    the full window and still answer well. But a task like summing the rows of a
    table is O(N) — the informational requirement grows linearly with prompt
    size — and accuracy degrades to roughly the 30-60% range for
    linear-to-quadratic demands.


    The practical lesson is to characterize the *information complexity* of a
    task before deciding how much context to stuff in, rather than assuming any
    prompt under the token limit is safe. High-complexity tasks need an
    architectural fix: recursive language models treat the context as an
    environment (presented as a file) that a coding agent queries
    programmatically — keyword searches, regex, Python REPL — to extract
    relevant sub-context, which is then passed to an identical recursive agent
    that either answers or spawns another. This trades brute-force context
    loading for structured, recursive retrieval.
stance: >-
  An LLM's accuracy degrades based on how much of the prompt the answer actually
  depends on, not on what fraction of the context window is filled.
related:
  - INS-260322-1A20
  - INS-260603-6E59
  - INS-260605-B8DD
  - PRI-260411-9CB1
  - PRI-260403-EA13
  - INS-260625-1432
---
Recursive language models (a seminal MIT paper from the prior October) showed that occupying only a small percentage of the context window can still produce dramatic context rot, depending on the information complexity the prompt demands. A needle-in-a-haystack lookup is O(1): the information requirement stays constant regardless of prompt size, so the model can fill the full window and still answer well. But a task like summing the rows of a table is O(N) — the informational requirement grows linearly with prompt size — and accuracy degrades to roughly the 30-60% range for linear-to-quadratic demands.

The practical lesson is to characterize the *information complexity* of a task before deciding how much context to stuff in, rather than assuming any prompt under the token limit is safe. High-complexity tasks need an architectural fix: recursive language models treat the context as an environment (presented as a file) that a coding agent queries programmatically — keyword searches, regex, Python REPL — to extract relevant sub-context, which is then passed to an identical recursive agent that either answers or spawns another. This trades brute-force context loading for structured, recursive retrieval.

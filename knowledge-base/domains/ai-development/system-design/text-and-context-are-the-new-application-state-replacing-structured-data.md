---
id: INS-260605-9362
domain: ai-development
topic: system-design
title: 'Text and context are the new application state, replacing structured data'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - state-management
  - context
  - memory
  - personalization
  - semantics
sources:
  - type: youtube
    title: >-
      Why (Senior) Engineers Struggle to Build AI Agents — Philipp Schmid,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3_gYbhABcAE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs let you preserve semantic meaning in text, so state and preferences no
    longer have to be flattened into flags that can't capture nuance.
  standard: >-
    In traditional software everything mapped to booleans, flags, or enums you
    could check — a user profile field was 'Celsius' or 'Fahrenheit', a plan was
    'approve' or 'deny'. That model can't capture semantic nuance. A
    deep-research agent returning a plan lets the user approve it AND
    simultaneously add steering ('focus on the US market but ignore California')
    in one natural-language turn, instead of forcing a decline-revise-resubmit
    loop.


    Personalization breaks structured state even more clearly: a user is mostly
    Celsius but wants Fahrenheit specifically for cooking — a rule impossible to
    express cleanly as profile flags but trivial to hold as text context. The
    design principle is 'preserve meaning': stop pre-flattening rich intent into
    lossy data structures and instead let text (and images, audio, video) carry
    the state through the system, querying the model's semantic understanding
    when you need to act on it.
stance: >-
  Agent state should be carried as natural-language text and context rather than
  forced into booleans, flags, and rigid data structures.
related:
  - INS-260409-DBCF
  - INS-260409-05F8
  - INS-260627-9068
  - INS-260625-06B3
  - INS-260409-B13F
  - INS-260626-EB91
---
In traditional software everything mapped to booleans, flags, or enums you could check — a user profile field was 'Celsius' or 'Fahrenheit', a plan was 'approve' or 'deny'. That model can't capture semantic nuance. A deep-research agent returning a plan lets the user approve it AND simultaneously add steering ('focus on the US market but ignore California') in one natural-language turn, instead of forcing a decline-revise-resubmit loop.

Personalization breaks structured state even more clearly: a user is mostly Celsius but wants Fahrenheit specifically for cooking — a rule impossible to express cleanly as profile flags but trivial to hold as text context. The design principle is 'preserve meaning': stop pre-flattening rich intent into lossy data structures and instead let text (and images, audio, video) carry the state through the system, querying the model's semantic understanding when you need to act on it.

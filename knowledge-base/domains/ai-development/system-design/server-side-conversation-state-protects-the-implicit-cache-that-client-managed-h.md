---
id: INS-260626-AAD8
domain: ai-development
topic: system-design
title: >-
  Server-side conversation state protects the implicit cache that client-managed
  history silently breaks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - caching
  - state-management
  - inference-cost
  - context-engineering
  - agent-loops
sources:
  - type: youtube
    title: >-
      Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cVzf49yg0D8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Offloading conversation state to the server preserves the prompt-prefix
    cache that client-side history edits (stripping whitespace, line breaks)
    quietly invalidate.
  standard: >-
    Implicit caching reuses the model's encoding of input tokens across
    follow-up requests, making cached input roughly 90% cheaper. But the cache
    is keyed on an exact prefix match: the slightest client-side mutation —
    removing a trailing newline, normalizing whitespace, trimming an old turn
    during context engineering — silently breaks the cache and forces a full
    re-encode. When developers manage their own history object and append turns
    client-side, these accidental invalidations are common and invisible.


    Moving state to the server (here via a 'previous interaction ID' that the
    server stitches onto the stored history) means the canonical prefix never
    gets perturbed by client formatting. The team reports 2–3x better cache hit
    rates from startups on the server-stateful API versus self-managed context.
    The deeper principle generalizes beyond Gemini: any agent loop that re-sends
    growing history is a caching liability, and the entity that owns the
    byte-exact prefix should be the one that can most reliably keep it stable.


    The tradeoff is control — you give up the ability to surgically rewrite or
    compact context client-side. The API preserves an escape hatch (you can
    still send the full array yourself when you need context engineering), but
    the default should bias toward server-held state precisely because most
    hand-rolled context manipulation is what destroys cache economics in the
    first place.
stance: >-
  Keeping LLM conversation state on the server yields materially higher cache
  hit rates than client-managed history.
related:
  - INS-260605-90CF
  - PRI-260320-07A4
  - INS-260403-F664
  - INS-260625-8A5F
  - INS-260329-818A
---
Implicit caching reuses the model's encoding of input tokens across follow-up requests, making cached input roughly 90% cheaper. But the cache is keyed on an exact prefix match: the slightest client-side mutation — removing a trailing newline, normalizing whitespace, trimming an old turn during context engineering — silently breaks the cache and forces a full re-encode. When developers manage their own history object and append turns client-side, these accidental invalidations are common and invisible.

Moving state to the server (here via a 'previous interaction ID' that the server stitches onto the stored history) means the canonical prefix never gets perturbed by client formatting. The team reports 2–3x better cache hit rates from startups on the server-stateful API versus self-managed context. The deeper principle generalizes beyond Gemini: any agent loop that re-sends growing history is a caching liability, and the entity that owns the byte-exact prefix should be the one that can most reliably keep it stable.

The tradeoff is control — you give up the ability to surgically rewrite or compact context client-side. The API preserves an escape hatch (you can still send the full array yourself when you need context engineering), but the default should bias toward server-held state precisely because most hand-rolled context manipulation is what destroys cache economics in the first place.

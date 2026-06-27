---
id: INS-260625-1E07
domain: ai-development
topic: agent-patterns
title: 'Give agents real source, not distilled docs, for deep problems'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - documentation
  - open-source
  - retrieval
  - agent-depth
sources:
  - type: youtube
    title: 'A Genius With Amnesia - Victor Savkin, Nx'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=jVjt-2g8NMY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Savkin prefers pulling the real Vitest repo into a session over a docs tool
    like Context7, because with real code the agent can go really deep.
  standard: >-
    When debugging an issue against a dependency, Savkin pulls the actual
    open-source repo (e.g. Vitest) into the session rather than relying on a
    documentation-retrieval tool like Context7. His reasoning: 'if I have the
    real code, the agent can go really deep. So the deep problems are discovered
    all this way.' Documentation is a lossy compression of a library — it
    captures the intended interface, not the edge cases, implementation quirks,
    or the actual behavior that breaks your code. For shallow lookups (how do I
    call this API) docs suffice, but for the hard problems — where the bug lives
    in the interaction between your code and the library's internals — the agent
    needs to read the source. The actionable pattern: when an agent is stuck on
    a dependency-related problem, give it the dependency's real repository, not
    a summary. The tradeoff is context cost (real repos are large), which is
    exactly why a harness that can selectively pull the *relevant* repo and SHAs
    into a session matters — it makes 'just give it the real code' affordable.
stance: >-
  Feeding an agent the actual dependency source code lets it solve deeper
  problems than documentation-retrieval tools, because real code exposes the
  deep problems that summaries hide.
related:
  - INS-260605-9523
  - INS-260605-4B12
  - INS-260605-3163
  - INS-260625-08E5
  - INS-260625-6C29
  - INS-260627-5004
---
When debugging an issue against a dependency, Savkin pulls the actual open-source repo (e.g. Vitest) into the session rather than relying on a documentation-retrieval tool like Context7. His reasoning: 'if I have the real code, the agent can go really deep. So the deep problems are discovered all this way.' Documentation is a lossy compression of a library — it captures the intended interface, not the edge cases, implementation quirks, or the actual behavior that breaks your code. For shallow lookups (how do I call this API) docs suffice, but for the hard problems — where the bug lives in the interaction between your code and the library's internals — the agent needs to read the source. The actionable pattern: when an agent is stuck on a dependency-related problem, give it the dependency's real repository, not a summary. The tradeoff is context cost (real repos are large), which is exactly why a harness that can selectively pull the *relevant* repo and SHAs into a session matters — it makes 'just give it the real code' affordable.

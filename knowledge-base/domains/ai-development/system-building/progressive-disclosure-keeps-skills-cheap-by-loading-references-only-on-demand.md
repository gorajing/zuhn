---
id: INS-260605-B6BC
domain: ai-development
topic: system-building
title: Progressive disclosure keeps skills cheap by loading references only on demand
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - progressive-disclosure
  - context-window
  - skill-router
sources:
  - type: youtube
    title: 'Full Walkthrough: Writing & Using Skills — Nick Nisi and Zack Proser'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pFsfax19yOM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Make the skill.md a thin router that points to detailed markdown loaded only
    for the relevant branch of work.
  standard: >-
    A skill can carry deep knowledge without the context-bloat problem of a
    giant CLAUDE.md by using progressive disclosure: the main file says 'if
    you're doing scoring, load scoring-rubric.md and read it; if not, skip it.'
    WorkOS's public skills repo literally contains a file called skill-router
    whose entire job is a reference map ('installing AuthKit into Next.js? load
    authkit-nextjs.md'), so a session only ever pulls the two markdown files it
    actually needs. This scales the migration-guide pattern (N
    competitor-specific guides behind one pointer) and the same trick
    disambiguates audiences (load audience-guide.md only when audience detection
    runs). The payoff is that skills can be arbitrarily knowledgeable while
    keeping each invocation's token footprint minimal, which is impossible when
    everything loads eagerly at session start.
stance: >-
  Skills should route to reference files loaded only when needed rather than
  inlining all context, keeping the context window lean.
related:
  - INS-260605-90E5
  - INS-260627-A19B
  - INS-260605-BDFF
  - INS-260605-C86D
  - INS-260627-FDB3
---
A skill can carry deep knowledge without the context-bloat problem of a giant CLAUDE.md by using progressive disclosure: the main file says 'if you're doing scoring, load scoring-rubric.md and read it; if not, skip it.' WorkOS's public skills repo literally contains a file called skill-router whose entire job is a reference map ('installing AuthKit into Next.js? load authkit-nextjs.md'), so a session only ever pulls the two markdown files it actually needs. This scales the migration-guide pattern (N competitor-specific guides behind one pointer) and the same trick disambiguates audiences (load audience-guide.md only when audience detection runs). The payoff is that skills can be arbitrarily knowledgeable while keeping each invocation's token footprint minimal, which is impossible when everything loads eagerly at session start.

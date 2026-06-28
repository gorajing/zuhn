---
id: INS-260627-20C1
domain: ai-development
topic: product-strategy
title: 'Developer taste as an installable, composable, shareable primitive'
actionability: inspiration
confidence: low
shelf_life: evergreen
status: active
tags:
  - taste-models
  - composability
  - shareable-preferences
  - open-source
sources:
  - type: youtube
    title: >-
      Developing Taste in Coding Agents: Applied Meta Neuro-Symbolic RL — Ahmad
      Awais, CommandCode
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kWOQS3XPZ10'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If taste can be learned and serialized, it becomes a distributable artifact
    you install ('npx taste'), compose, and share across a team or the
    open-source ecosystem.
  standard: >-
    Awais's bigger bet is that taste becomes a primitive you can package. The
    concrete vision: 'npx taste' to install someone's CLI taste, then have your
    own preferred LLM generate code very close to how that person would build
    it. He extends this to borrowing within a team — pulling his design
    engineer's superior sense of margins, paddings, and visual detail into his
    own front-end requests without having to internalize it himself — and to
    public figures, e.g. wanting 'Tanner's taste' when writing React.


    The framing he offers is that LLMs captured the world's knowledge (Stack
    Overflow, all the code out there), and taste models capture the world's
    intuition and intentions — how people generally do things, the patterns and
    choices. Taste can attach to an individual, a team, a library, or an
    enterprise standard, and be shared as open source or kept private.


    This is inspiration-grade and speculative — the product is brand new, the
    architecture is an unpublished paper, and the serialization format ('right
    now a transparent markdown file, but it could exist in any form') is
    admittedly unsettled. But it points at a genuinely different unit of reuse:
    not code and not prompts, but encoded preference. Worth watching as a
    potential new layer in the agent stack, distinct from rules files and from
    fine-tuning.
stance: >-
  Captured taste can be packaged and shared like a dependency — install a famous
  developer's React taste or borrow a teammate's design taste — making
  preference a transferable asset rather than a personal habit.
related:
  - INS-260329-2EB1
  - INS-260403-DE28
  - INS-260403-E33F
  - INS-260605-5BAD
  - INS-260626-0FA9
  - INS-260627-805E
  - PRI-260328-AC85
---
Awais's bigger bet is that taste becomes a primitive you can package. The concrete vision: 'npx taste' to install someone's CLI taste, then have your own preferred LLM generate code very close to how that person would build it. He extends this to borrowing within a team — pulling his design engineer's superior sense of margins, paddings, and visual detail into his own front-end requests without having to internalize it himself — and to public figures, e.g. wanting 'Tanner's taste' when writing React.

The framing he offers is that LLMs captured the world's knowledge (Stack Overflow, all the code out there), and taste models capture the world's intuition and intentions — how people generally do things, the patterns and choices. Taste can attach to an individual, a team, a library, or an enterprise standard, and be shared as open source or kept private.

This is inspiration-grade and speculative — the product is brand new, the architecture is an unpublished paper, and the serialization format ('right now a transparent markdown file, but it could exist in any form') is admittedly unsettled. But it points at a genuinely different unit of reuse: not code and not prompts, but encoded preference. Worth watching as a potential new layer in the agent stack, distinct from rules files and from fine-tuning.

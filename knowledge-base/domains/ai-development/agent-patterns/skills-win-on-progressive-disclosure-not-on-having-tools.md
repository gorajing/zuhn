---
id: INS-260605-C86D
domain: ai-development
topic: agent-patterns
title: 'Skills win on progressive disclosure, not on having tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - progressive-disclosure
  - context-engineering
  - skills
  - agent-design
sources:
  - type: youtube
    title: >-
      Skill Issue: How We Used AI to Make Agents Actually Good at Supabase —
      Pedro Rodrigues, Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GmAQKINjv1E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A skill loads only its front-matter description into context up front; the
    full SKILL.md body and any referenced files are pulled in lazily, only once
    the agent's description-match tells it the skill is relevant.
  standard: >-
    The distinguishing feature skills brought over MCP was progressive
    disclosure: the agent never loads all the information about a subject
    straight to context. The SKILL.md front matter (name + description) acts as
    an envelope that always loads, while the body, reference files, and scripts
    load only on demand. Pedro frames a skill like a book whose SKILL.md is 'an
    index on steroids' — links to other markdown/script files that are the
    chapters, and reference files can themselves reference further files,
    forming a graph.


    The practical payoff is cost asymmetry: descriptions are tiny (his whole
    skill set took ~1.3k tokens loaded), so you can install many skills you
    rarely use without meaningfully filling the context window. This inverts the
    MCP problem where every tool definition loads upfront. Anthropic later
    generalized the same idea to MCP via the tool-search tool, but progressive
    disclosure is baked into the skill format by design, whereas for MCP it
    remains client-specific (works in Claude Code, not universally).
stance: >-
  Skills outperform front-loaded context because only the description envelope
  enters context until the agent decides it needs the body.
related:
  - INS-260320-8DBD
  - INS-260501-6453
  - INS-260514-283E
  - INS-260605-6591
  - INS-260605-117F
  - INS-260605-B6BC
  - INS-260605-205E
  - INS-260605-2032
  - INS-260605-5B0A
  - INS-260605-BDFF
---
The distinguishing feature skills brought over MCP was progressive disclosure: the agent never loads all the information about a subject straight to context. The SKILL.md front matter (name + description) acts as an envelope that always loads, while the body, reference files, and scripts load only on demand. Pedro frames a skill like a book whose SKILL.md is 'an index on steroids' — links to other markdown/script files that are the chapters, and reference files can themselves reference further files, forming a graph.

The practical payoff is cost asymmetry: descriptions are tiny (his whole skill set took ~1.3k tokens loaded), so you can install many skills you rarely use without meaningfully filling the context window. This inverts the MCP problem where every tool definition loads upfront. Anthropic later generalized the same idea to MCP via the tool-search tool, but progressive disclosure is baked into the skill format by design, whereas for MCP it remains client-specific (works in Claude Code, not universally).

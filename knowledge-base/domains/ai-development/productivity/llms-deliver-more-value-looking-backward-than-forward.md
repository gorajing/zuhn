---
id: INS-260625-0758
domain: ai-development
topic: productivity
title: LLMs deliver more value looking backward than forward
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - retrospection
  - knowledge-work
  - workflows
  - non-technical-users
sources:
  - type: youtube
    title: >-
      GitHub’s Agent Era: 14x Commits, 200M Developers, Copilot’s Next Act —
      Kyle Daigle
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=LEwlSyR0cXA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Point AI at 'what already happened' across all your data sources to find
    patterns, not just at 'write me a new thing.'
  standard: >-
    Daigle reframes the canonical AI use case. The simple examples — 'I need to
    write a blog post' — are not where the value is. What's actually
    transformative is 'a recursive loop backwards': go through all the PRs
    today, everything posted online, the last three months, all my Obsidian
    notes, all the Teams transcripts via the WorkIQ MCP server, all of Slack —
    then build the plan of what this week's messaging actually was. The model's
    job is retrospection over a short, bounded window, then a small forward
    tweak.


    The reason this works: 'that retrospection is actually very LLMs are very
    good at that — finding all the patterns, pulling them out, and then applying
    that to just a couple of days.' It plays directly to the strength of large
    context aggregation and pattern detection while sidestepping the weaknesses
    (long-horizon planning, hallucinated forward claims). It is also
    disproportionately valuable for non-technical knowledge workers, whose work
    is mostly synthesizing what happened across people and channels.


    Actionable version: when designing an AI workflow, default to a 'look back,
    then look slightly forward' shape — aggregate everything that already
    happened across every source, extract the patterns, and only then ask for a
    short forward recommendation. This is more reliable and more useful than
    treating the model as a forward content generator.
stance: >-
  The highest-leverage use of LLMs in knowledge work is recursive retrospection
  — pulling scattered past context together to surface patterns — not forward
  content generation.
related:
  - INS-260321-703F
  - INS-260320-7914
  - INS-260410-8D9D
  - INS-260423-FB98
  - INS-260505-E5CC
  - INS-260522-51E7
  - INS-260625-06B3
---
Daigle reframes the canonical AI use case. The simple examples — 'I need to write a blog post' — are not where the value is. What's actually transformative is 'a recursive loop backwards': go through all the PRs today, everything posted online, the last three months, all my Obsidian notes, all the Teams transcripts via the WorkIQ MCP server, all of Slack — then build the plan of what this week's messaging actually was. The model's job is retrospection over a short, bounded window, then a small forward tweak.

The reason this works: 'that retrospection is actually very LLMs are very good at that — finding all the patterns, pulling them out, and then applying that to just a couple of days.' It plays directly to the strength of large context aggregation and pattern detection while sidestepping the weaknesses (long-horizon planning, hallucinated forward claims). It is also disproportionately valuable for non-technical knowledge workers, whose work is mostly synthesizing what happened across people and channels.

Actionable version: when designing an AI workflow, default to a 'look back, then look slightly forward' shape — aggregate everything that already happened across every source, extract the patterns, and only then ask for a short forward recommendation. This is more reliable and more useful than treating the model as a forward content generator.

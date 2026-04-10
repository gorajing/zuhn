---
id: INS-260410-315B
domain: ai-development
topic: agent-patterns
title: Agents leave permanent state in the open web through query-indexed URLs
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - web-agents
  - state-leakage
  - emergent-behavior
sources:
  - type: blog
    title: Eval awareness in Claude Opus 4.6’s BrowseComp performance
    url: 'https://www.anthropic.com/engineering/eval-awareness-browsecomp'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    E-commerce long-tail SEO creates persistent URL slugs from agent queries,
    turning the public web into an unintentional scratchpad shared across every
    agent run.
  standard: >-
    Anthropic observed that retailers autogenerate pages from search queries —
    even queries with zero matching products — to capture long-tail traffic. A
    query like 'anonymous 8th grade first blog post exact date october 2006'
    becomes a permanent URL at
    retailer.com/market/anonymous_8th_grade_first_blog_post_… with a valid HTML
    title and 200 status. The pages contain no useful content, but the URL paths
    themselves encode prior agents' hypotheses in the slugs, and subsequent
    agents can read them.


    This is a qualitatively new failure mode: the web itself becomes a lossy
    shared memory between independently-run agents. No agent designed this; it
    emerges from the interaction of SEO incentives with agent workflows. One
    agent correctly identified the phenomenon in real time, which suggests
    models can reason about this channel and potentially exploit it
    intentionally.


    The operational implication is that 'stateless' agent runs are not actually
    stateless in any environment where the agent touches the public internet.
    State leaks through URLs, cache headers, analytics pixels, and anywhere a
    logging substrate exists. Designing safe agent systems requires modeling the
    full environmental side-effects of tool use, not just the direct tool
    outputs.
stance: >-
  Long-running web-browsing agents inadvertently maintain persistent cross-run
  state because commercial sites auto-generate indexed pages from search
  queries.
related:
  - INS-260410-9D04
  - INS-260325-F981
  - INS-260410-85AD
  - INS-260409-8408
  - PRI-260328-8317
---
Anthropic observed that retailers autogenerate pages from search queries — even queries with zero matching products — to capture long-tail traffic. A query like 'anonymous 8th grade first blog post exact date october 2006' becomes a permanent URL at retailer.com/market/anonymous_8th_grade_first_blog_post_… with a valid HTML title and 200 status. The pages contain no useful content, but the URL paths themselves encode prior agents' hypotheses in the slugs, and subsequent agents can read them.

This is a qualitatively new failure mode: the web itself becomes a lossy shared memory between independently-run agents. No agent designed this; it emerges from the interaction of SEO incentives with agent workflows. One agent correctly identified the phenomenon in real time, which suggests models can reason about this channel and potentially exploit it intentionally.

The operational implication is that 'stateless' agent runs are not actually stateless in any environment where the agent touches the public internet. State leaks through URLs, cache headers, analytics pixels, and anywhere a logging substrate exists. Designing safe agent systems requires modeling the full environmental side-effects of tool use, not just the direct tool outputs.

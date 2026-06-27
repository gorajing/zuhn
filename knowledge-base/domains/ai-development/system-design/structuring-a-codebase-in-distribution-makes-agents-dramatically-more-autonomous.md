---
id: INS-260626-5375
domain: ai-development
topic: system-design
title: >-
  Structuring a codebase 'in distribution' makes agents dramatically more
  autonomous
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - codebase-structure
  - in-distribution
  - conventions
  - discoverability
  - primitives
sources:
  - type: youtube
    title: 'Building your own software factory — Eric Zakariasson, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rnDm57Py54A'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The same structure that makes a codebase easy for a new human to onboard
    makes it easy for an agent — collocated, modular code and conventional
    patterns let agents discover relevant files by listing a folder instead of
    grepping everywhere.
  standard: >-
    Zakariasson frames factory-building as 'primitives and patterns.' If code is
    collocated and modularized, an agent can 'ls' one folder and discover all
    relevant files at once, working isolated within a single part of the
    codebase rather than grepping across everything. Heuristic: if a new human
    onboards easily, an agent probably will too. The second lever is
    conventional patterns being 'in distribution' for the models — package.json
    with a standard start script means a JS-project agent immediately knows to
    look there to start a server, with no instruction needed. The same logic
    extends to having predefined services and boilerplate (auth methods, startup
    scripts, test patterns) the agent can be pointed to and told to reproduce.
    The deeper principle: the more your codebase matches the statistical
    conventions the models were trained on, the less scaffolding and prompting
    agents require to operate autonomously within it.
stance: >-
  Modular, collocated codebases that follow conventional patterns let agents
  navigate and work more autonomously than scattered ones.
related:
  - INS-260320-EA19
  - INS-260409-430B
  - INS-260605-4AB0
  - INS-260627-0C43
  - INS-260627-30F9
  - INS-260605-BA6A
  - INS-260605-9E46
  - INS-260627-05AD
---
Zakariasson frames factory-building as 'primitives and patterns.' If code is collocated and modularized, an agent can 'ls' one folder and discover all relevant files at once, working isolated within a single part of the codebase rather than grepping across everything. Heuristic: if a new human onboards easily, an agent probably will too. The second lever is conventional patterns being 'in distribution' for the models — package.json with a standard start script means a JS-project agent immediately knows to look there to start a server, with no instruction needed. The same logic extends to having predefined services and boilerplate (auth methods, startup scripts, test patterns) the agent can be pointed to and told to reproduce. The deeper principle: the more your codebase matches the statistical conventions the models were trained on, the less scaffolding and prompting agents require to operate autonomously within it.

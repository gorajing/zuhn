---
id: INS-260625-86CF
domain: ai-development
topic: agent-patterns
title: >-
  Expose site capabilities as structured tools instead of letting agents scrape
  the DOM
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - webmcp
  - tool-use
  - screen-scraping
  - agent-reliability
  - token-cost
sources:
  - type: youtube
    title: >-
      The agent-ready web: Simplify user actions with WebMCP — Tara Agyemang,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ghJmWQCIHRM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replace the brittle parse-DOM, read-a11y-tree, screenshot, measure-and-click
    loop with declared tools the agent can call directly.
  standard: >-
    Today a browser agent buying a concert ticket typically passes the entire
    DOM to understand the page, reads the accessibility tree for structure,
    takes a screenshot to catch what HTML missed, then measures pixel offsets to
    click the right element. Agyemang highlights why this is fragile and
    expensive: it burns enormous token budgets, and a late-loading ad that
    pushes content down can make the agent click the wrong place after all that
    work.


    WebMCP inverts the relationship. Instead of the agent guessing what a site
    does, the site hands it a menu of tools and actions — described as the
    'USB-C of AI agent interactions.' The agent matches the user's intent to a
    named tool, calls it with structured parameters, and reads a structured
    return value to decide its next step. The pattern generalizes beyond this
    specific standard: any time agents interact with your surface, declaring
    capabilities as callable tools with explicit schemas beats forcing them to
    reverse-engineer an interface built for human eyes.
stance: >-
  Giving browser agents a structured menu of tools is more reliable and cheaper
  than having them parse the DOM and click by coordinates.
related:
  - INS-260605-D0A0
  - INS-260605-25B2
  - INS-260605-BA6A
  - INS-260410-5D66
  - INS-260605-35B4
  - INS-260625-D2E3
---
Today a browser agent buying a concert ticket typically passes the entire DOM to understand the page, reads the accessibility tree for structure, takes a screenshot to catch what HTML missed, then measures pixel offsets to click the right element. Agyemang highlights why this is fragile and expensive: it burns enormous token budgets, and a late-loading ad that pushes content down can make the agent click the wrong place after all that work.

WebMCP inverts the relationship. Instead of the agent guessing what a site does, the site hands it a menu of tools and actions — described as the 'USB-C of AI agent interactions.' The agent matches the user's intent to a named tool, calls it with structured parameters, and reads a structured return value to decide its next step. The pattern generalizes beyond this specific standard: any time agents interact with your surface, declaring capabilities as callable tools with explicit schemas beats forcing them to reverse-engineer an interface built for human eyes.

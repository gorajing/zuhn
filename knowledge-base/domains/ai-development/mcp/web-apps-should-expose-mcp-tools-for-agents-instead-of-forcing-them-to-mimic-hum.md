---
id: INS-260627-4446
domain: ai-development
topic: mcp
title: >-
  Web apps should expose MCP tools for agents instead of forcing them to mimic
  humans
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - web-mcp
  - agentic-web
  - tool-use
  - interface-design
  - automation
sources:
  - type: youtube
    title: "AI Didn’t Kill the Web, It Moved in! —\_Olivier Leplus (AWS) & Yohan Lasorsa (Microsoft)"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XZ0boOjtbNo'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Web MCP lets a site register typed tools on the navigator object so agents
    call named actions directly, instead of mimicking human clicks via
    screenshots and coordinate-guessing.
  standard: >-
    Today's agentic browsers operate a site the way a human would: they
    screenshot or read the DOM, infer that a button exists, grab its
    coordinates, and click. That's brittle because the site was designed for
    humans, not agents. The Web MCP proposal flips this—the site hosts MCP tools
    (name, description, JSON schema, execute function) registered on navigator,
    so an agent invokes 'add to cart {item, quantity}' as a structured tool call
    it already knows how to use, rather than reverse-engineering the UI.


    The demo's most practical move was declaratively upgrading an existing HTML
    form into a tool with a couple of attributes (tool name, tool description,
    optional per-param descriptions, auto-submit), reusing the form's inputs as
    the schema and the nearest labels as parameter descriptions—no rewrite. This
    is highly experimental (the spec changed ~10 days before the talk), but the
    direction is clear: as agent-driven browsing grows, exposing intent-level
    tools removes the perception-and-guess layer that makes UI automation
    fragile. Treat structured tool exposure, not pixel-perfect UI scraping, as
    the durable agent interface.
stance: >-
  Registering explicit MCP tools on a web page is a more reliable agent
  interface than letting agents drive the app by screenshotting the DOM and
  guessing where to click.
related:
  - INS-260410-EE5C
  - INS-260605-D710
  - INS-260626-BC79
  - INS-260627-F1AF
  - INS-260627-FE77
---
Today's agentic browsers operate a site the way a human would: they screenshot or read the DOM, infer that a button exists, grab its coordinates, and click. That's brittle because the site was designed for humans, not agents. The Web MCP proposal flips this—the site hosts MCP tools (name, description, JSON schema, execute function) registered on navigator, so an agent invokes 'add to cart {item, quantity}' as a structured tool call it already knows how to use, rather than reverse-engineering the UI.

The demo's most practical move was declaratively upgrading an existing HTML form into a tool with a couple of attributes (tool name, tool description, optional per-param descriptions, auto-submit), reusing the form's inputs as the schema and the nearest labels as parameter descriptions—no rewrite. This is highly experimental (the spec changed ~10 days before the talk), but the direction is clear: as agent-driven browsing grows, exposing intent-level tools removes the perception-and-guess layer that makes UI automation fragile. Treat structured tool exposure, not pixel-perfect UI scraping, as the durable agent interface.

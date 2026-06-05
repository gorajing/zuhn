---
id: INS-260605-1BBF
domain: ai-development
topic: system-design
title: 'MCP apps are sandboxed single-file islands, not websites'
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - mcp-apps
  - sandbox
  - iframe
  - csp
  - design-systems
sources:
  - type: youtube
    title: 'Introducing WebMCP: Agents in the Browser — RL Nabors'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=LMbeDEQO6QM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An MCP app is a single sandboxed HTML file in an iframe with no local
    storage, no network access, and CSP/CORS-blocked external resources — so
    everything must be embedded and a shared design system becomes essential.
  standard: >-
    MCP tools can return interactive rich-media apps, not just
    JSON/text/markdown — Nabors put a full comic reader inside the agent chat.
    But these apps are 'islands,' not websites. They are single HTML files where
    everything needed must be embedded (base64); external resources like CDN
    fonts require explicit CORS plus a Content Security Policy entry or the
    browser silently drops them; they run sandboxed in an iframe with no local
    storage (no cross-iframe state) and no network access — the app must ask the
    server to act via the call-server tool ('a real mother-may-I situation').
    Even opening a link requires host permission rather than a plain window.open
    or href.


    The practical consequence: reusing your own design system (shared fonts,
    CSS, components from the same CORS-configured server, bundled with something
    like Vite single-file) is what makes building these apps tractable. Two
    further gotchas: MCP apps (unlike MCP UI) can call tools, so navigation can
    be a tool call — but set tool visibility to 'app' so the model doesn't try
    to invoke a navigation tool and dump a 'big fat pile of JSON' as text into
    the conversation.
stance: >-
  MCP interactive apps must be built as self-contained sandboxed bundles because
  they get none of the browser conveniences a website assumes.
related:
  - INS-260403-F7A9
  - INS-260501-4903
  - INS-260501-52B5
  - INS-260501-7726
  - INS-260519-02A9
  - INS-260605-7B06
  - INS-260605-1A50
  - INS-260605-C699
---
MCP tools can return interactive rich-media apps, not just JSON/text/markdown — Nabors put a full comic reader inside the agent chat. But these apps are 'islands,' not websites. They are single HTML files where everything needed must be embedded (base64); external resources like CDN fonts require explicit CORS plus a Content Security Policy entry or the browser silently drops them; they run sandboxed in an iframe with no local storage (no cross-iframe state) and no network access — the app must ask the server to act via the call-server tool ('a real mother-may-I situation'). Even opening a link requires host permission rather than a plain window.open or href.

The practical consequence: reusing your own design system (shared fonts, CSS, components from the same CORS-configured server, bundled with something like Vite single-file) is what makes building these apps tractable. Two further gotchas: MCP apps (unlike MCP UI) can call tools, so navigation can be a tool call — but set tool visibility to 'app' so the model doesn't try to invoke a navigation tool and dump a 'big fat pile of JSON' as text into the conversation.

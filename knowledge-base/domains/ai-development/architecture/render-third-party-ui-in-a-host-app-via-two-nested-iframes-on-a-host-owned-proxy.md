---
id: INS-260625-07CB
domain: ai-development
topic: architecture
title: >-
  Render third-party UI in a host app via two nested iframes on a host-owned
  proxy domain
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - iframe
  - third-party-ui
  - origin-isolation
  - chatgpt-apps
  - web-security
  - generative-ui
sources:
  - type: youtube
    title: 'Why MCP and ChatGPT Apps Use Double Iframes — Frédéric Barthelet, Alpic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=c-2eEv2ou7Y'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ChatGPT/MCP apps nest a srcdoc content iframe inside an outer iframe served
    on a host-owned proxy domain (e.g. openaiusercontent.com) so isolation
    scales without per-app CSP whitelisting.
  standard: >-
    When a host like ChatGPT or Claude wants to display third-party interactive
    UI ('views') returned by a tool call, it cannot simply point an iframe's src
    at each developer's own domain: doing so would force the host's frame-src
    CSP directive to enumerate an unbounded, ever-growing list of app domains,
    which is unworkable at marketplace scale. The solution is a single
    host-controlled proxy domain (OpenAI uses openaiusercontent.com) that is
    whitelisted once. A loader script served from that domain — identical for
    every app — fetches the app's HTML resource from the MCP server and mounts
    it into an inner iframe using the srcdoc attribute.


    The outer iframe lives on the proxy domain to guarantee origin isolation
    from the host; the inner srcdoc iframe holds the actual app content.
    Crucially, the loader is served on per-app subdomains so that origin-indexed
    browser APIs (localStorage, cookies, IndexedDB) don't collide between apps —
    app ABC123 cannot read app ABC456's storage. Because every subdomain serves
    the exact same static loader script, the host's infrastructure stays cheap:
    no per-app dynamic content serving.


    This is not a novel invention — Facebook solved the identical 'render
    untrusted third-party UI inside our own app' problem when it launched its
    app marketplace. The pattern recurs for any platform that opens a UI surface
    to outside developers.
stance: >-
  To render untrusted third-party UI inside a host app at scale, you must nest
  two iframes — an outer one on a host-controlled proxy domain for origin
  isolation and an inner srcdoc iframe carrying the app's content.
related:
  - INS-260605-1BBF
  - INS-260625-5CE4
  - INS-260625-4559
  - INS-260625-5BF4
  - INS-260605-41AE
---
When a host like ChatGPT or Claude wants to display third-party interactive UI ('views') returned by a tool call, it cannot simply point an iframe's src at each developer's own domain: doing so would force the host's frame-src CSP directive to enumerate an unbounded, ever-growing list of app domains, which is unworkable at marketplace scale. The solution is a single host-controlled proxy domain (OpenAI uses openaiusercontent.com) that is whitelisted once. A loader script served from that domain — identical for every app — fetches the app's HTML resource from the MCP server and mounts it into an inner iframe using the srcdoc attribute.

The outer iframe lives on the proxy domain to guarantee origin isolation from the host; the inner srcdoc iframe holds the actual app content. Crucially, the loader is served on per-app subdomains so that origin-indexed browser APIs (localStorage, cookies, IndexedDB) don't collide between apps — app ABC123 cannot read app ABC456's storage. Because every subdomain serves the exact same static loader script, the host's infrastructure stays cheap: no per-app dynamic content serving.

This is not a novel invention — Facebook solved the identical 'render untrusted third-party UI inside our own app' problem when it launched its app marketplace. The pattern recurs for any platform that opens a UI surface to outside developers.

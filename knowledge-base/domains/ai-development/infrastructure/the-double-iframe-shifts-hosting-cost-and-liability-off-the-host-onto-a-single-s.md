---
id: INS-260625-5BF4
domain: ai-development
topic: infrastructure
title: >-
  The double iframe shifts hosting cost and liability off the host onto a single
  static loader
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - infrastructure
  - mcp
  - third-party-ui
  - cost
  - security
  - hosting
  - scalability
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
    Serving every app from one static loader script on host subdomains (rather
    than proxying each app's dynamic HTML on the host's own domain) keeps
    infrastructure light and avoids the host being liable for code it didn't
    write and can't inspect.
  standard: >-
    The naive alternative to the double iframe is for the host to run a proxy
    server on its own domain that downloads each MCP server's HTML resource and
    re-serves it. That puts the host in a bad position twice over: it must run
    dynamic, per-app content-serving infrastructure, and it becomes responsible
    for executing and exposing code on its own domain that it doesn't control
    and can't fully audit.


    The double iframe avoids both. The host serves the exact same static loader
    script for every app and every subdomain; the per-app content is fetched
    client-side and mounted via srcdoc inside the isolated inner frame. Because
    the served artifact is identical and static, the infrastructure is 'much
    less intensive' than dynamic per-app serving, and the host is not the party
    publishing third-party code on its primary origin.


    This also lowers the barrier to entry: the speaker notes that a host who is
    not OpenAI or Anthropic likely lacks the resources to stand up dynamic
    third-party content serving — so the static-loader approach is what makes
    implementing MCP apps feasible for smaller hosts at all. The general
    principle: when you must run untrusted code at scale, prefer an architecture
    whose served surface is static and identical across tenants, pushing
    variability to the client inside an isolation boundary.
stance: >-
  The double-iframe pattern lets a host serve one identical static loader to
  every app instead of dynamically serving and vetting per-app code, removing
  the infrastructure and liability burden of hosting third-party content.
related:
  - INS-260423-81B6
  - INS-260605-743D
  - INS-260625-5CE4
  - INS-260625-07CB
  - INS-260625-4559
  - INS-260605-1BBF
---
The naive alternative to the double iframe is for the host to run a proxy server on its own domain that downloads each MCP server's HTML resource and re-serves it. That puts the host in a bad position twice over: it must run dynamic, per-app content-serving infrastructure, and it becomes responsible for executing and exposing code on its own domain that it doesn't control and can't fully audit.

The double iframe avoids both. The host serves the exact same static loader script for every app and every subdomain; the per-app content is fetched client-side and mounted via srcdoc inside the isolated inner frame. Because the served artifact is identical and static, the infrastructure is 'much less intensive' than dynamic per-app serving, and the host is not the party publishing third-party code on its primary origin.

This also lowers the barrier to entry: the speaker notes that a host who is not OpenAI or Anthropic likely lacks the resources to stand up dynamic third-party content serving — so the static-loader approach is what makes implementing MCP apps feasible for smaller hosts at all. The general principle: when you must run untrusted code at scale, prefer an architecture whose served surface is static and identical across tenants, pushing variability to the client inside an isolation boundary.

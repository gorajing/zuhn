---
id: INS-260625-4559
domain: ai-development
topic: system-building
title: >-
  Declare every domain your MCP app touches in its metadata or it breaks in
  production
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - csp
  - content-security-policy
  - app-development
  - developer-experience
  - tooling
  - production-readiness
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
    Because the host rewrites the nested iframe's CSP from your declared
    metadata, any external API, script, image, or frame domain you forget to
    list is blocked — a leading cause of ChatGPT app-store rejections and
    production failures.
  standard: >-
    The double-iframe host re-applies a Content Security Policy to the inner app
    frame using a meta tag derived from the domains you declare in the MCP app
    spec metadata. Whatever you omit gets blocked at runtime. So every external
    dependency must be enumerated: if your view fetches data from an external
    API, that domain goes in connect-src; scripts, images, and frames each have
    their own directive. The speaker calls connect-src and script-src the two
    that matter most.


    This is a major real-world failure mode. Alpic reports seeing many ChatGPT
    app-store submissions rejected, and apps that pass review then break in
    production, specifically because of missing CSP domains. A footgun amplifies
    it: OpenAI's developer mode historically stripped all CSP, so builders only
    discovered missing-domain failures after shipping to production.


    The practical defense is tooling that diffs declared domains against domains
    actually contacted by the running view. Alpic's open-source Skybridge
    framework ships a 'CSP inspector' that watches the view's live network calls
    and flags any contacted domain not yet in the metadata, turning a
    post-deploy rejection into an instant dev-time warning. The transferable
    rule for any sandboxed-embed platform: make your dependency declarations
    verifiable against real runtime behavior before you ship, not after.
stance: >-
  MCP app builders must declare every domain their view contacts (connect-src,
  script-src, img-src, frame-src) in the app metadata, or the app gets rejected
  from the store or silently fails in production.
related:
  - INS-260605-1BBF
  - INS-260625-5CE4
  - INS-260625-07CB
  - INS-260625-5BF4
  - INS-260625-3FBF
  - INS-260626-6D35
---
The double-iframe host re-applies a Content Security Policy to the inner app frame using a meta tag derived from the domains you declare in the MCP app spec metadata. Whatever you omit gets blocked at runtime. So every external dependency must be enumerated: if your view fetches data from an external API, that domain goes in connect-src; scripts, images, and frames each have their own directive. The speaker calls connect-src and script-src the two that matter most.

This is a major real-world failure mode. Alpic reports seeing many ChatGPT app-store submissions rejected, and apps that pass review then break in production, specifically because of missing CSP domains. A footgun amplifies it: OpenAI's developer mode historically stripped all CSP, so builders only discovered missing-domain failures after shipping to production.

The practical defense is tooling that diffs declared domains against domains actually contacted by the running view. Alpic's open-source Skybridge framework ships a 'CSP inspector' that watches the view's live network calls and flags any contacted domain not yet in the metadata, turning a post-deploy rejection into an instant dev-time warning. The transferable rule for any sandboxed-embed platform: make your dependency declarations verifiable against real runtime behavior before you ship, not after.

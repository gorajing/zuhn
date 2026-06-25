---
id: INS-260625-2E86
domain: ai-development
topic: agent-patterns
title: 'Generative UI should emit renderable code, not JSON'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - generative-ui
  - code-generation
  - rendering
  - agent-output
  - untrusted-code
sources:
  - type: youtube
    title: >-
      Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carey,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SKDJo2CopRs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The reason generative UI defaults to generating JSON ('Jason Bender') and
    rendering it is that most platforms lack a primitive to safely render
    untrusted code — solve that and you can just generate React.
  standard: >-
    A common generative-UI pattern has the model emit JSON that a fixed renderer
    interprets into components. The speakers question this: why generate an
    intermediate JSON DSL at all, when you could generate HTML or React directly
    and render that? The honest answer is that platforms historically had no
    safe primitive for rendering untrusted, model-generated code — so the JSON
    schema acts as a constrained, interpretable proxy.


    The key distinction is where rendering happens. Client-side rendering of
    generated markup (e.g. Claude Artifacts is 'just HTML rendered in your
    browser') is relatively low-stakes, so people tolerate it. The danger
    appears when you render generated code on your servers — that is when an
    isolation primitive becomes mandatory. Once you have a sandbox that can
    render untrusted code safely, the JSON intermediary is unnecessary overhead:
    you can let your users, customers, agents, or LLMs generate code that is run
    and rendered directly.


    This is a special case of the broader code-mode thesis applied to the UI
    layer. Treat it as medium-confidence and context-dependent: the payoff is
    real flexibility, but it presumes you have solved safe rendering of
    untrusted code first, and JSON-schema UI remains a defensible choice where
    you cannot.
stance: >-
  Agents producing UI should generate executable HTML/React rather than JSON
  schemas the host interprets.
related:
  - INS-260323-7A11
  - INS-260323-B029
  - INS-260409-96B0
  - INS-260605-1821
  - INS-260605-71E7
  - INS-260605-743D
  - INS-260605-1C30
  - INS-260605-7B06
---
A common generative-UI pattern has the model emit JSON that a fixed renderer interprets into components. The speakers question this: why generate an intermediate JSON DSL at all, when you could generate HTML or React directly and render that? The honest answer is that platforms historically had no safe primitive for rendering untrusted, model-generated code — so the JSON schema acts as a constrained, interpretable proxy.

The key distinction is where rendering happens. Client-side rendering of generated markup (e.g. Claude Artifacts is 'just HTML rendered in your browser') is relatively low-stakes, so people tolerate it. The danger appears when you render generated code on your servers — that is when an isolation primitive becomes mandatory. Once you have a sandbox that can render untrusted code safely, the JSON intermediary is unnecessary overhead: you can let your users, customers, agents, or LLMs generate code that is run and rendered directly.

This is a special case of the broader code-mode thesis applied to the UI layer. Treat it as medium-confidence and context-dependent: the payoff is real flexibility, but it presumes you have solved safe rendering of untrusted code first, and JSON-schema UI remains a defensible choice where you cannot.

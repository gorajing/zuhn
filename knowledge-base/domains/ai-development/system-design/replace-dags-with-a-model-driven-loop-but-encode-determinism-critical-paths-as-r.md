---
id: INS-260627-6ACC
domain: ai-development
topic: system-design
title: >-
  Replace DAGs with a model-driven loop, but encode determinism-critical paths
  as rigorous testable tools
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - dags
  - determinism
  - tool-calls
  - prompt-injection
  - maintainability
sources:
  - type: youtube
    title: 'How Claude Code Works - Jared Zoneraich, PromptLayer'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RFKCzGlAU6Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Stop building hundred-node classifier DAGs; use a master loop with tool
    calls, and push the steps that must be deterministic into rigorous tools you
    can eval and version.
  standard: >-
    For two-plus years, teams built customer-support and routing agents as
    sprawling DAGs — hundreds of nodes of 'if user wants a refund, route to this
    prompt.' The benefit was guaranteed behavior and prompt-injection resistance
    (a node that only classifies X-or-Y can't be hijacked, especially if you
    discard context). The cost was a web of engineering madness. Zoneraich's
    claim is that capable models make the loop architecture roughly 10x easier
    to build, 10x more maintainable, and actually better-performing for
    general-purpose tasks where there is no fixed sequence of steps.


    The nuance — and the answer to the obvious 'how do you enforce order?'
    objection — is that this is use-case dependent, not absolute. A general
    coding agent has no canonical step sequence, so rely on the model. But a
    travel-itinerary agent has a fixed deliverable, so you'd make the
    output-formatting step a DAG-like tool call while leaving the research phase
    to the model. The unifying pattern: offload determinism to specific parts of
    the system by treating those tools as testable functions (input → output)
    that you can eval and version, while the loop handles open-ended
    exploration. You re-introduce some prompt-injection attack surface by
    abandoning pure classifiers, which is the price of flexibility.
stance: >-
  Hand-built classifier DAGs should be replaced by a simple model loop for
  general tasks, with the few steps needing guaranteed behavior isolated into
  structured, version-controlled, evaluable tool calls.
related:
  - INS-260626-AC8E
  - INS-260410-3271
  - INS-260625-36DF
  - INS-260627-DF16
  - INS-260410-F5EC
---
For two-plus years, teams built customer-support and routing agents as sprawling DAGs — hundreds of nodes of 'if user wants a refund, route to this prompt.' The benefit was guaranteed behavior and prompt-injection resistance (a node that only classifies X-or-Y can't be hijacked, especially if you discard context). The cost was a web of engineering madness. Zoneraich's claim is that capable models make the loop architecture roughly 10x easier to build, 10x more maintainable, and actually better-performing for general-purpose tasks where there is no fixed sequence of steps.

The nuance — and the answer to the obvious 'how do you enforce order?' objection — is that this is use-case dependent, not absolute. A general coding agent has no canonical step sequence, so rely on the model. But a travel-itinerary agent has a fixed deliverable, so you'd make the output-formatting step a DAG-like tool call while leaving the research phase to the model. The unifying pattern: offload determinism to specific parts of the system by treating those tools as testable functions (input → output) that you can eval and version, while the loop handles open-ended exploration. You re-introduce some prompt-injection attack surface by abandoning pure classifiers, which is the price of flexibility.

---
id: INS-260501-A5F5
domain: ai-development
topic: human-ai-relationship
title: >-
  Human attention and AI context are the new bottlenecks —
  explaining-to-your-computer is the wasted-effort layer
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-bottleneck
  - ambient-ai
  - human-attention
  - memory
sources:
  - type: youtube
    title: 'OpenAI''s Greg Brockman: Why Human Attention Is the New BottleneckOpenAI''s'
    author: Sequoia Capital
    url: 'https://youtu.be/bBS93A0BeNI'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Greg Brockman: you spend so much of your effort right now just explaining to
    your computer what's going on — like, why are you explaining to your
    computer what's going on? That makes no sense.
  standard: >-
    The 2024-2025 mental model treated AI capability as the binding constraint
    and prompt engineering as the human's bridge to that capability. Brockman's
    reframe: by April 2026, the binding constraint has shifted to context. The
    model is capable enough; what's missing is its access to what the user is
    already doing, what was said in the last meeting, what's in the relevant
    document, what's been worked on the past hour. OpenAI's response is
    Chronicle, a Codex-adjacent tool that observes user activity and builds
    persistent context memory. The implication for AI product builders: stop
    optimizing for one-shot capability and start optimizing for
    continuous-context architecture. The tools that win the next two years will
    be the ones that ambient-record meaningful activity and pre-load it into AI
    invocations rather than asking the user to re-summarize. The implication for
    users: your AI productivity is gated by how much friction you tolerate in
    restating context. Investing in tools that capture context once and replay
    it many times has compounding returns; insisting on stateless prompting
    wastes attention every session.
stance: >-
  The dominant cost in 2026 AI deployments is no longer model capability but the
  human work of explaining context to AI tools that lack ambient awareness of
  what the user is already doing — closing this gap requires AI systems with
  persistent memory of user activity, not better one-shot prompting
related:
  - INS-260329-FCD3
  - INS-260329-CB03
  - INS-260627-F193
  - INS-260403-7ED5
  - INS-260403-E2FB
  - INS-260505-E5CC
---
The 2024-2025 mental model treated AI capability as the binding constraint and prompt engineering as the human's bridge to that capability. Brockman's reframe: by April 2026, the binding constraint has shifted to context. The model is capable enough; what's missing is its access to what the user is already doing, what was said in the last meeting, what's in the relevant document, what's been worked on the past hour. OpenAI's response is Chronicle, a Codex-adjacent tool that observes user activity and builds persistent context memory. The implication for AI product builders: stop optimizing for one-shot capability and start optimizing for continuous-context architecture. The tools that win the next two years will be the ones that ambient-record meaningful activity and pre-load it into AI invocations rather than asking the user to re-summarize. The implication for users: your AI productivity is gated by how much friction you tolerate in restating context. Investing in tools that capture context once and replay it many times has compounding returns; insisting on stateless prompting wastes attention every session.

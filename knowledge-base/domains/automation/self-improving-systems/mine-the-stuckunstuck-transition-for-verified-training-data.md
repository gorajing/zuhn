---
id: INS-260605-2793
domain: automation
topic: self-improving-systems
title: Mine the stuck→unstuck transition for verified training data
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-improvement
  - data-curation
  - agents
  - signal-extraction
sources:
  - type: youtube
    title: 'How Lovable self-improves every hour — Benjamin Verbeek, Lovable'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=KA5kPbdkK2E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Capture the exact transition where friction resolves into success, then ask
    what context could have skipped the friction entirely.
  standard: >-
    Lovable defines 'stuck' via observable signals — the user repeats a request,
    complains about an implementation, or abandons a session. An LLM judge
    watches for the boundary where stuck flips back to false, but critically
    only when the agent found the true fix rather than the user giving up. That
    transition is a labeled (problem, working-solution) pair validated by
    reality, not by a reviewer's guess.


    The operative question at that boundary is generative, not descriptive:
    'What should we have injected at the start of this query to jump straight to
    the solution?' This reframes a support log into a reusable knowledge entry.
    Rather than forcing a reviewer to score every iteration — which mostly
    produces noise because most iterations work fine — you let production
    surface the rare high-friction-then-resolved cases and learn only from
    those. The principle generalizes to any agentic product: the cheapest
    verified labels come from watching real users escape failure, not from
    synthetic evals.
stance: >-
  The moment a user goes from stuck to unstuck without giving up is the
  highest-signal sample a self-improving product can harvest.
related:
  - INS-260405-95D1
  - INS-260410-FB7E
  - INS-260403-955F
  - INS-260404-DF95
  - INS-260403-03BD
---
Lovable defines 'stuck' via observable signals — the user repeats a request, complains about an implementation, or abandons a session. An LLM judge watches for the boundary where stuck flips back to false, but critically only when the agent found the true fix rather than the user giving up. That transition is a labeled (problem, working-solution) pair validated by reality, not by a reviewer's guess.

The operative question at that boundary is generative, not descriptive: 'What should we have injected at the start of this query to jump straight to the solution?' This reframes a support log into a reusable knowledge entry. Rather than forcing a reviewer to score every iteration — which mostly produces noise because most iterations work fine — you let production surface the rare high-friction-then-resolved cases and learn only from those. The principle generalizes to any agentic product: the cheapest verified labels come from watching real users escape failure, not from synthetic evals.

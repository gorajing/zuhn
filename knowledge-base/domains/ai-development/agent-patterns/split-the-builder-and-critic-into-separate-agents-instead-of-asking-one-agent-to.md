---
id: INS-260605-C536
domain: ai-development
topic: agent-patterns
title: >-
  Split the builder and critic into separate agents instead of asking one agent
  to check its own work
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - generator-evaluator
  - self-evaluation
  - adversarial
  - harness-design
sources:
  - type: youtube
    title: >-
      Anthropic Workshop: Build Agents That Run for Hours — Ash Prabaker &
      Andrew Wilson
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mR-WAvEPRwE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use a separate, harshly-tuned evaluator agent rather than asking the
    generator to grade itself, because critiquing is tractable to tune while
    self-criticism is not.
  standard: >-
    Anthropic borrows the GAN structure: a generator agent builds and a
    discriminator/evaluator agent grades, with each given its own context
    window, system prompt, and job. The evaluator doesn't just read diffs — it
    drives Playwright to open live pages, click around, and actually test the
    product before handing a critique back. The non-obvious justification is
    asymmetry: an LLM remains biased toward liking LLM-style output, but tuning
    a *standalone* critic to be harsh is very tractable, whereas tuning a
    *builder* to be reliably self-critical is not. The analogy is human: it's
    easy to critique a painting or a meal and hard to produce one. Models out of
    the box are sycophantic about their own work — they'll call a half-baked
    feature 'done' or ship a button with no backend behind it. The talk's single
    biggest takeaway is 'self-evaluation, very much a trap — just use an
    adversarial evaluator.'
stance: >-
  A separate adversarial evaluator agent produces more reliable long-running
  output than a single agent told to verify its own work.
related:
  - INS-260410-AA6E
  - PRI-260411-14DC
  - INS-260605-1E04
  - INS-260605-72C4
  - INS-260403-C55B
  - PRI-260405-4B06
---
Anthropic borrows the GAN structure: a generator agent builds and a discriminator/evaluator agent grades, with each given its own context window, system prompt, and job. The evaluator doesn't just read diffs — it drives Playwright to open live pages, click around, and actually test the product before handing a critique back. The non-obvious justification is asymmetry: an LLM remains biased toward liking LLM-style output, but tuning a *standalone* critic to be harsh is very tractable, whereas tuning a *builder* to be reliably self-critical is not. The analogy is human: it's easy to critique a painting or a meal and hard to produce one. Models out of the box are sycophantic about their own work — they'll call a half-baked feature 'done' or ship a button with no backend behind it. The talk's single biggest takeaway is 'self-evaluation, very much a trap — just use an adversarial evaluator.'

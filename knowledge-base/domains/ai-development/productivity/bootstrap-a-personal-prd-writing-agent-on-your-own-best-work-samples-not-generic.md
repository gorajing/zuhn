---
id: INS-260530-E697
domain: ai-development
topic: productivity
title: >-
  Bootstrap a personal PRD-writing agent on your own best work samples, not
  generic templates
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - personal-agent
  - prd-drafting
  - style-transfer
  - agent-bootstrapping
  - skill-instruction
sources:
  - type: audio
    title: PM Google
date_extracted: '2026-05-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Abhije: 'I have given it my best work samples — here are some of the best
    memos that I wrote, pick up my learning style.' The agent is now invoked as
    a skill that produces first-draft PRDs in the author's voice, removing the
    cold-start friction.
  standard: >-
    The default AI-drafting workflow is: open a chat, paste the request, get a
    generic competent draft, then rewrite it into your voice. The
    personal-sample-agent workflow inverts this: front-load your best historical
    work into the agent's context (or fine-tune if the platform supports it),
    invoke as a skill, get a first draft already in your voice.


    The specific reproducible pattern from Abhije: (1) collect 5-10 of your best
    historical PRDs / memos / docs in the same genre, (2) feed them to an agent
    configured as a 'skill,' (3) describe what the new draft is about, (4) get a
    draft that matches your style, examples, structure preferences, and judgment
    patterns. The output may still need editing, but it skips the 'this doesn't
    sound like me' rewrite.


    Why this matters as a discipline: a generic competent draft trains you to be
    a re-writer (read and adjust). A personal-style draft trains you to be a
    reviewer (read and approve/reject). The latter is faster and preserves your
    voice for downstream audiences who are reading both your AI-drafted work and
    your hand-written work and need them to feel consistent.


    The Zuhn-internal application: the same pattern should apply to insight
    extraction — feed Claude the user's own best historical insights so the
    extraction style matches the existing corpus voice rather than inheriting
    generic-LLM neutrality.
stance: >-
  AI PMs and writers should fine-tune or prompt-engineer a personal drafting
  agent on their own historical best work, not on generic instruction-tuned
  defaults — the personal-sample agent inherits author voice and judgment
  patterns that generic models systematically miss
related:
  - INS-260322-B264
  - INS-260403-A6B1
  - INS-260404-D45D
  - INS-260410-CD79
  - INS-260501-9E23
  - INS-260501-9503
  - INS-260514-1841
  - INS-260514-1659
  - INS-260524-D5DB
  - PRI-260406-1AC6
---
The default AI-drafting workflow is: open a chat, paste the request, get a generic competent draft, then rewrite it into your voice. The personal-sample-agent workflow inverts this: front-load your best historical work into the agent's context (or fine-tune if the platform supports it), invoke as a skill, get a first draft already in your voice.

The specific reproducible pattern from Abhije: (1) collect 5-10 of your best historical PRDs / memos / docs in the same genre, (2) feed them to an agent configured as a 'skill,' (3) describe what the new draft is about, (4) get a draft that matches your style, examples, structure preferences, and judgment patterns. The output may still need editing, but it skips the 'this doesn't sound like me' rewrite.

Why this matters as a discipline: a generic competent draft trains you to be a re-writer (read and adjust). A personal-style draft trains you to be a reviewer (read and approve/reject). The latter is faster and preserves your voice for downstream audiences who are reading both your AI-drafted work and your hand-written work and need them to feel consistent.

The Zuhn-internal application: the same pattern should apply to insight extraction — feed Claude the user's own best historical insights so the extraction style matches the existing corpus voice rather than inheriting generic-LLM neutrality.

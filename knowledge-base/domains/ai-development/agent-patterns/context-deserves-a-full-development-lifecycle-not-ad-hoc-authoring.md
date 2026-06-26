---
id: INS-260626-6F68
domain: ai-development
topic: agent-patterns
title: 'Context deserves a full development lifecycle, not ad-hoc authoring'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - devops
  - lifecycle
  - skills
  - agent-md
  - process
sources:
  - type: youtube
    title: 'Context Is the New Code — Patrick Debois, Tessl'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=bSG9wUYaHWU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat context as a first-class engineered artifact that flows through
    generate, evaluate, distribute, observe, and adapt — the same loop as
    software.
  standard: >-
    Debois maps the software development lifecycle onto context: you generate
    context (prompts, reusable instructions, pulled-in docs, specs), evaluate it
    with tests, distribute it (check into repo, package, publish to a registry),
    observe whether it works in production, then adapt and regenerate. The
    argument is that the artifact people now spend most of their leverage on has
    no engineering discipline around it — a two-line edit to a Claude.md ships
    on 'looks good to me' with no understanding of its blast radius.


    The practical consequence is to stop treating context as throwaway markdown
    and start treating every stage as a real engineering surface: version it,
    gate changes behind tests, package it for reuse, and instrument it in
    production. Because the loop is the same one DevOps already solved for code,
    the existing tooling vocabulary (linting, unit tests, CI, registries, SBOMs,
    observability) transfers almost directly — which is both the talk's
    organizing insight and its checklist for what to build.
stance: >-
  Context (prompts, skills, agent.md) should be managed with the same
  generate-test-distribute-observe-adapt lifecycle as production code, not
  hand-tuned and copy-pasted.
related:
  - INS-260320-6F8E
  - PRI-260320-467A
  - INS-260327-F625
  - INS-260603-DFA6
  - INS-260605-9900
---
Debois maps the software development lifecycle onto context: you generate context (prompts, reusable instructions, pulled-in docs, specs), evaluate it with tests, distribute it (check into repo, package, publish to a registry), observe whether it works in production, then adapt and regenerate. The argument is that the artifact people now spend most of their leverage on has no engineering discipline around it — a two-line edit to a Claude.md ships on 'looks good to me' with no understanding of its blast radius.

The practical consequence is to stop treating context as throwaway markdown and start treating every stage as a real engineering surface: version it, gate changes behind tests, package it for reuse, and instrument it in production. Because the loop is the same one DevOps already solved for code, the existing tooling vocabulary (linting, unit tests, CI, registries, SBOMs, observability) transfers almost directly — which is both the talk's organizing insight and its checklist for what to build.

---
id: INS-260605-6F34
domain: ai-development
topic: system-building
title: >-
  Make desktop apps web-testable so you can run variants and LLMs can
  self-verify
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - electron
  - ci-cd
  - preview-links
  - self-verification
  - developer-experience
sources:
  - type: youtube
    title: 'Feedback Loops are All You Need — Mehedi Hassan, Granola'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ON5LIT0M4do'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Turn your Electron front-end into a web shell so every PR gets a preview
    link and agents like Cursor can test and screenshot changes automatically.
  standard: >-
    Desktop apps lack the testing luxuries of web apps — Granola could run only
    one Electron instance at a time, creating heavy friction for testing
    variants and getting coworkers to verify changes. They solved it by
    abstracting Electron's IPC/system APIs to fall back to web standards in a
    web environment, and moving React routers, sessions, and the query layer to
    web standards too. This made the renderer agnostic of Electron so it runs as
    a plain web app.


    The payoff compounds with LLMs. Every PR now produces a preview link, so
    Cursor can autonomously test the change and upload a screenshot into the PR,
    dramatically speeding the test loop. Because LLMs let you one-shot multiple
    variants, the team can feel several real variants in practice rather than
    judging them in Figma — so the shipped product feels good precisely because
    many alternatives were actually tried. The architectural investment
    (web-standards fallback) is what makes the AI-assisted feedback loop
    possible.
stance: >-
  Refactoring a desktop app into a web shell unlocks parallel variant testing
  and lets LLM agents self-verify changes via PR preview links.
related:
  - INS-260329-DFD1
  - INS-260410-DABE
  - INS-260605-D710
  - INS-260625-2439
  - INS-260605-0C56
  - INS-260327-63B5
---
Desktop apps lack the testing luxuries of web apps — Granola could run only one Electron instance at a time, creating heavy friction for testing variants and getting coworkers to verify changes. They solved it by abstracting Electron's IPC/system APIs to fall back to web standards in a web environment, and moving React routers, sessions, and the query layer to web standards too. This made the renderer agnostic of Electron so it runs as a plain web app.

The payoff compounds with LLMs. Every PR now produces a preview link, so Cursor can autonomously test the change and upload a screenshot into the PR, dramatically speeding the test loop. Because LLMs let you one-shot multiple variants, the team can feel several real variants in practice rather than judging them in Figma — so the shipped product feels good precisely because many alternatives were actually tried. The architectural investment (web-standards fallback) is what makes the AI-assisted feedback loop possible.

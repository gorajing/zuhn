---
id: INS-260410-DABE
domain: ai-development
topic: claude-code
title: Give Claude a way to verify its own work or you become the only feedback loop
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - feedback-loops
  - claude-code
  - test-driven
sources:
  - type: blog
    title: Best Practices for Claude Code - Claude Code Docs
    url: 'https://www.anthropic.com/engineering/claude-code-best-practices'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Always provide tests, example cases, screenshots, or a command Claude can
    run to verify its own output.
  standard: >-
    Claude performs dramatically better when it can check its own work — run
    tests, compare screenshots, validate outputs against example inputs. Without
    clear success criteria, it produces things that look right but fail on edge
    cases, and the human becomes the sole feedback loop, paying attention cost
    on every iteration.


    The upgrade from 'implement a function that validates emails' to 'write
    validateEmail, here are example test cases, run the tests after
    implementing' is enormous. The same principle applies to UI ('take a
    screenshot and compare to this design'), build fixes ('verify the build
    succeeds, fix root cause not symptoms'), and migrations. If you can't verify
    it, don't ship it.
stance: >-
  Agents without verification criteria produce plausible code that doesn't work,
  and every failure falls on the human to catch.
related:
  - INS-260330-B784
  - INS-260410-4CE7
  - INS-260409-6833
  - INS-260325-9BBC
  - INS-260320-A4BF
---
Claude performs dramatically better when it can check its own work — run tests, compare screenshots, validate outputs against example inputs. Without clear success criteria, it produces things that look right but fail on edge cases, and the human becomes the sole feedback loop, paying attention cost on every iteration.

The upgrade from 'implement a function that validates emails' to 'write validateEmail, here are example test cases, run the tests after implementing' is enormous. The same principle applies to UI ('take a screenshot and compare to this design'), build fixes ('verify the build succeeds, fix root cause not symptoms'), and migrations. If you can't verify it, don't ship it.

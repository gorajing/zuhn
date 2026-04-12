---
id: INS-260410-796F
domain: ai-development
topic: claude-code
title: >-
  Subagents are the primary lever for investigations that would otherwise burn
  main context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - claude-code
  - subagents
  - context-management
  - investigation
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
    Use subagents for any task that reads many files — they run in their own
    context window and return only summaries.
  standard: >-
    When Claude investigates a codebase, every file read consumes the main
    conversation's context. A single 'how does authentication work?' question
    can fill thousands of tokens of exploration that you never actually needed
    in your working memory. Subagents solve this by running in an isolated
    context window with their own tools, then reporting back with a summary.


    This reframes subagents as the default tool for investigation, not a
    specialized feature. The same pattern applies to verification ('use a
    subagent to review this for edge cases') and to the Writer/Reviewer split
    across parallel sessions — a fresh context is less biased toward code it
    just wrote, so quality review improves when the reviewer hasn't seen the
    implementation being reviewed.
stance: >-
  Any exploration that reads many files should run in a subagent, because
  context is the scarce resource and subagents return only summaries.
related:
  - INS-260320-63D3
  - INS-260409-086A
  - PRI-260411-9CB1
  - INS-260410-19DE
  - INS-260410-B224
  - PRI-260328-A65A
---
When Claude investigates a codebase, every file read consumes the main conversation's context. A single 'how does authentication work?' question can fill thousands of tokens of exploration that you never actually needed in your working memory. Subagents solve this by running in an isolated context window with their own tools, then reporting back with a summary.

This reframes subagents as the default tool for investigation, not a specialized feature. The same pattern applies to verification ('use a subagent to review this for edge cases') and to the Writer/Reviewer split across parallel sessions — a fresh context is less biased toward code it just wrote, so quality review improves when the reviewer hasn't seen the implementation being reviewed.

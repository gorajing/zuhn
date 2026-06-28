---
id: INS-260628-CB50
domain: ai-development
topic: claude-code
title: Keep coding-agent context utilization low — the 'dumb zone' starts around 40%
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - context-window
  - coding-agents
  - compaction
  - mcp
sources:
  - type: youtube
    title: "No Vibes Allowed: Solving Hard Problems in Complex Codebases –\_Dex Horthy, HumanLayer"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rmvDxxNubIg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Diminishing returns on a coding agent kick in around 40% of context-window
    utilization, so the goal is a small, high-signal context, not a full one.
  standard: >-
    Horthy frames the context window as having a 'smart zone' and a 'dumb zone':
    for a ~168k-token window, returns start diminishing around the 40% line
    depending on task complexity. Once you're operating in the dumb zone, no
    amount of further tool-calling produces good output — the model is reasoning
    over too much noise. The practical implication is that more context is not
    better; the only way to get better tokens out of a stateless LLM is to put
    better, fewer tokens in.


    The biggest avoidable offenders are MCP servers that dump JSON blobs and
    UUIDs into the window, and naive onboarding docs that consume the entire
    smart zone just teaching the agent how the codebase works — leaving nothing
    for actual problem-solving. The fix is intentional compaction: ask the agent
    to compress its working context down to a reviewable markdown file
    containing the exact files and line numbers that matter, then start a fresh
    agent from that artifact so it gets straight to work instead of
    re-searching.


    The 40% figure is model-specific and explicitly hedged ('your mileage may
    vary'), so treat the number as a guideline; the durable principle is that
    you should architect your entire workflow around keeping the window small,
    not around how much you can cram in before it breaks.
stance: >-
  Coding agents degrade well before the context window fills, so aggressively
  shrinking context beats giving the model more information.
related:
  - INS-260625-14F9
  - INS-260626-4564
  - INS-260627-CECD
  - INS-260627-EFD5
  - INS-260626-411D
  - INS-260626-F5AE
  - INS-260627-85C7
  - INS-260628-28B0
---
Horthy frames the context window as having a 'smart zone' and a 'dumb zone': for a ~168k-token window, returns start diminishing around the 40% line depending on task complexity. Once you're operating in the dumb zone, no amount of further tool-calling produces good output — the model is reasoning over too much noise. The practical implication is that more context is not better; the only way to get better tokens out of a stateless LLM is to put better, fewer tokens in.

The biggest avoidable offenders are MCP servers that dump JSON blobs and UUIDs into the window, and naive onboarding docs that consume the entire smart zone just teaching the agent how the codebase works — leaving nothing for actual problem-solving. The fix is intentional compaction: ask the agent to compress its working context down to a reviewable markdown file containing the exact files and line numbers that matter, then start a fresh agent from that artifact so it gets straight to work instead of re-searching.

The 40% figure is model-specific and explicitly hedged ('your mileage may vary'), so treat the number as a guideline; the durable principle is that you should architect your entire workflow around keeping the window small, not around how much you can cram in before it breaks.

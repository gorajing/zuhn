---
id: INS-260627-765B
domain: ai-development
topic: code-review
title: >-
  Agentic coding makes code review the bottleneck — distribute it and speed each
  response
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-review
  - bottleneck
  - pull-requests
  - team-workflow
  - developer-velocity
sources:
  - type: youtube
    title: >-
      Developer Experience in the Age of AI Coding Agents – Max Kanat-Alexander,
      Capital One
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rT2Del5pwg4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Writing code has become reading code, so every engineer is now a reviewer —
    distribute the exploding PR load with assignment and SLOs, and optimize
    per-response latency, not total review time.
  standard: >-
    In agentic workflows, writing code has become reading code: engineers spend
    more time reviewing the agent's output than typing, making code review the
    primary job rather than a side task. Shops that deeply adopt agentic coding
    generate far more PRs, which turns code review into the dominant bottleneck
    — both the formal PR pipeline and the iterative human-agent loop. The
    'social disease' of posting 'can one of you ten review my PR?' to a team
    channel silently dumps the entire load onto the single most responsive
    person, which collapses the moment PR volume jumps.


    The fix is to distribute reviews to specific individuals via a system, with
    SLOs that have a real enforcement mechanism, and to fix the 'whose turn is
    it' ambiguity that tools like GitHub handle poorly. Crucially, the
    optimization target is per-response latency, not total timeline: code review
    is a quality process, so you want each round-trip to be fast without
    shortening the overall quality gate or accepting broken work just to hit a
    time limit. The same logic applies to agent iteration — fast human response
    time to the agent matters as much as fast agent iterations.
stance: >-
  As agents multiply PR volume, code review becomes the primary engineering
  bottleneck, requiring explicit reviewer assignment with enforced SLOs rather
  than ad-hoc 'can anyone review this?' requests.
related:
  - INS-260320-1B10
  - INS-260403-30E5
  - INS-260410-83EC
  - INS-260423-6879
  - INS-260501-A748
  - INS-260501-5582
  - INS-260514-8424
  - INS-260603-73D5
  - INS-260530-D34F
  - INS-260605-9719
---
In agentic workflows, writing code has become reading code: engineers spend more time reviewing the agent's output than typing, making code review the primary job rather than a side task. Shops that deeply adopt agentic coding generate far more PRs, which turns code review into the dominant bottleneck — both the formal PR pipeline and the iterative human-agent loop. The 'social disease' of posting 'can one of you ten review my PR?' to a team channel silently dumps the entire load onto the single most responsive person, which collapses the moment PR volume jumps.

The fix is to distribute reviews to specific individuals via a system, with SLOs that have a real enforcement mechanism, and to fix the 'whose turn is it' ambiguity that tools like GitHub handle poorly. Crucially, the optimization target is per-response latency, not total timeline: code review is a quality process, so you want each round-trip to be fast without shortening the overall quality gate or accepting broken work just to hit a time limit. The same logic applies to agent iteration — fast human response time to the agent matters as much as fast agent iterations.

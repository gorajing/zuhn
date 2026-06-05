---
id: INS-260605-667B
domain: ai-development
topic: agents
title: 'Read raw traces, not final outputs, before writing any eval'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - tracing
  - agent-evaluation
  - debugging
  - failure-analysis
sources:
  - type: youtube
    title: >-
      Ship Real Agents: Hands-On Evals for Agentic Applications — Laurie Voss,
      Arize
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Xfl50508LZM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent wrote a perfect report but saved it to disk and 'failed' —
    output-only judgment would call it garbage; the trace showed the research
    and writing were flawless.
  standard: >-
    One of the agent's runs (Apple) did all its web searches correctly and wrote
    a genuinely good report, then tried to write it to disk (it thought it was
    Claude Code), hit a permissions error in the notebook, and returned garbage
    as its final output. Judged on output alone, it's a total failure with the
    wrong diagnosis. Reading the trace reveals the real fix is a one-line
    prompt/permission change, not a research or writing fix. Clicking through
    the traces also surfaced that the disk-write failure recurred — a *systemic*
    pattern, not a one-off. Voss insists trace-reading is not a lab nicety: '15
    minutes of reading real outputs does better than hours of fiddling with your
    prompt.' Anthropic invested heavily in tooling specifically to make reading
    agent traces easy. Requirements and failure categories must be derived from
    observed traces, because the same root-cause symptom (a wrong response) can
    stem from bad research, a tool misfire, correct data with wrong conclusions,
    or a hallucinated number — each demanding a different fix.
stance: >-
  Judging an agent on its final output alone hides root cause and systemic
  failures that only the execution trace reveals.
related:
  - INS-260605-7843
  - INS-260605-C436
  - INS-260325-5023
  - INS-260522-C5C2
  - INS-260519-224B
---
One of the agent's runs (Apple) did all its web searches correctly and wrote a genuinely good report, then tried to write it to disk (it thought it was Claude Code), hit a permissions error in the notebook, and returned garbage as its final output. Judged on output alone, it's a total failure with the wrong diagnosis. Reading the trace reveals the real fix is a one-line prompt/permission change, not a research or writing fix. Clicking through the traces also surfaced that the disk-write failure recurred — a *systemic* pattern, not a one-off. Voss insists trace-reading is not a lab nicety: '15 minutes of reading real outputs does better than hours of fiddling with your prompt.' Anthropic invested heavily in tooling specifically to make reading agent traces easy. Requirements and failure categories must be derived from observed traces, because the same root-cause symptom (a wrong response) can stem from bad research, a tool misfire, correct data with wrong conclusions, or a hallucinated number — each demanding a different fix.

---
id: INS-260625-E1AA
domain: ai-development
topic: llm-behavior
title: Agents fabricate instead of reporting failed web access
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hallucination
  - tool-use
  - web-access
  - error-handling
  - agents
sources:
  - type: youtube
    title: 'Your Agent''s Biggest Lie: "I Searched the Web" — Rafael Levi, Bright Data'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=btxGmN8RvNU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because models are trained to please, a CAPTCHA or empty page produces a
    made-up answer instead of an error, making blocked retrieval the dominant
    hallucination source in agents.
  standard: >-
    The talk reframes hallucination not as a knowledge problem but as an
    unreported-failure problem. When an agent's request hits a CAPTCHA, an empty
    page, or a block, the tool layer returns nothing useful—but the model,
    optimized via RLHF to satisfy the user, refuses to say 'I couldn't.' It
    invents numbers, fabricates citations (the speaker cites roughly 60% of
    ChatGPT citations 404ing), and produces links to products that don't exist.
    There is no error, no warning, just a wrong answer—an 'invisible failure.'


    The practical implication is that you cannot trust an agent's success unless
    tool failures are made loud and observable. Web-access tools must
    distinguish 'fetched and parsed' from 'got blocked/empty,' and that signal
    must propagate to the model and the operator rather than being swallowed.
    This is the agent-layer version of the general principle that silent
    failures rot systems: a fix or a tool that fails quietly is worse than one
    that fails loudly, because it manufactures confident garbage downstream.


    For builders, the defensive move is to instrument retrieval explicitly—log
    block/empty/CAPTCHA outcomes as first-class events, prefer tools that report
    'no data' over tools that degrade gracefully into fabrication, and treat any
    answer derived from a failed fetch as untrusted by default.
stance: >-
  An agent's most dangerous failures are silent: a blocked or empty web fetch
  becomes a confident fabricated answer rather than a surfaced error.
related:
  - PRI-260323-1CF9
  - INS-260405-6A0C
  - INS-260519-ED17
  - INS-260605-91A9
  - INS-260605-D320
  - INS-260625-CF5E
  - INS-260625-5EEE
  - INS-260625-E9A9
  - INS-260625-6E92
  - INS-260327-DC4C
---
The talk reframes hallucination not as a knowledge problem but as an unreported-failure problem. When an agent's request hits a CAPTCHA, an empty page, or a block, the tool layer returns nothing useful—but the model, optimized via RLHF to satisfy the user, refuses to say 'I couldn't.' It invents numbers, fabricates citations (the speaker cites roughly 60% of ChatGPT citations 404ing), and produces links to products that don't exist. There is no error, no warning, just a wrong answer—an 'invisible failure.'

The practical implication is that you cannot trust an agent's success unless tool failures are made loud and observable. Web-access tools must distinguish 'fetched and parsed' from 'got blocked/empty,' and that signal must propagate to the model and the operator rather than being swallowed. This is the agent-layer version of the general principle that silent failures rot systems: a fix or a tool that fails quietly is worse than one that fails loudly, because it manufactures confident garbage downstream.

For builders, the defensive move is to instrument retrieval explicitly—log block/empty/CAPTCHA outcomes as first-class events, prefer tools that report 'no data' over tools that degrade gracefully into fabrication, and treat any answer derived from a failed fetch as untrusted by default.

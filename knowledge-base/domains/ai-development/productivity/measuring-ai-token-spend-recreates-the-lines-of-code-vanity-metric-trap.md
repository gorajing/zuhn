---
id: INS-260626-EAD3
domain: ai-development
topic: productivity
title: Measuring AI token spend recreates the lines-of-code vanity-metric trap
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - goodharts-law
  - metrics
  - developer-productivity
  - incentives
  - big-tech
sources:
  - type: youtube
    title: >-
      How AI is changing Software Engineering: A Conversation with Gergely
      Orosz, @pragmaticengineer
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CS5Cmz5FssI'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Token-output leaderboards and minimum-spend targets at Meta, Microsoft, and
    Salesforce are Goodhart's law in action — engineers generate useless tokens
    to climb the board, exactly as lines-of-code metrics failed a decade ago.
  standard: >-
    Several large companies have begun measuring per-engineer AI token
    consumption — Meta and Microsoft via leaderboards, Salesforce via a minimum
    monthly spend (~$175). Because the number leaks into performance reviews
    ('low token count, clearly not even trying'), engineers token-max: asking
    agents to summarize docs they could read faster themselves, or running
    autonomous agents to 'build junk' purely to move the number up. This is the
    lines-of-code and PR-count failure repeating itself — whatever gets measured
    gets gamed.


    The practical lesson is that AI usage is an input, not an outcome, and using
    it as a proxy for productivity produces the same dysfunction as any vanity
    metric. The root cause here is revealing: the measurement originated from
    leadership anxiety ('we want our engineers to use AI, we don't care what it
    is') after seeing skeptical senior engineers underuse early, mildly-useful
    tools. When you cannot measure the thing you care about (impact), and you
    are anxious, you measure the thing you can count (tokens) — and import all
    of its pathologies. If you must track AI adoption, treat it as a diagnostic
    signal, never a target tied to evaluation.
stance: >-
  Quantifying engineers by AI token output corrupts behavior and manufactures
  junk work rather than measuring real productivity.
related:
  - INS-260404-177F
  - INS-260410-B3C2
  - INS-260501-033E
  - INS-260514-CEEA
  - INS-260625-78EC
  - INS-260603-50B1
  - INS-260603-915A
  - INS-260625-E696
---
Several large companies have begun measuring per-engineer AI token consumption — Meta and Microsoft via leaderboards, Salesforce via a minimum monthly spend (~$175). Because the number leaks into performance reviews ('low token count, clearly not even trying'), engineers token-max: asking agents to summarize docs they could read faster themselves, or running autonomous agents to 'build junk' purely to move the number up. This is the lines-of-code and PR-count failure repeating itself — whatever gets measured gets gamed.

The practical lesson is that AI usage is an input, not an outcome, and using it as a proxy for productivity produces the same dysfunction as any vanity metric. The root cause here is revealing: the measurement originated from leadership anxiety ('we want our engineers to use AI, we don't care what it is') after seeing skeptical senior engineers underuse early, mildly-useful tools. When you cannot measure the thing you care about (impact), and you are anxious, you measure the thing you can count (tokens) — and import all of its pathologies. If you must track AI adoption, treat it as a diagnostic signal, never a target tied to evaluation.

---
id: INS-260626-18F5
domain: startups
topic: quality
title: A zero-bug policy is nearly free because the bug-fixing rate is constant
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - bug-policy
  - technical-debt
  - engineering-process
  - quality
  - linear
sources:
  - type: youtube
    title: >-
      Taste & Craft: A Conversation with Tuomas Artman, CTO Linear & Gergely
      Orosz, @pragmaticengineer
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wjk0ulMAkbc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bugs arrive at a constant rate, so fixing them now versus later costs the
    same total effort — you just pay a one-time cost to drain the backlog to
    zero.
  standard: >-
    Most companies backlog bugs and fix them only when the count becomes
    alarming, at which point they are effectively fixing the constant inflow
    anyway, just two months late and with a degraded product in the meantime.
    Artman's insight is that since bugs are created at a roughly constant rate
    as you build features, the long-run effort to fix them is identical whether
    you do it immediately or defer — so deferral buys nothing except worse
    quality. The only real cost of going to zero is a one-time pause: Linear
    stopped all new feature work for about three weeks to drain its backlog,
    then enforced fixing every incoming bug (usually within hours, always within
    seven days). Bugs get auto-assigned via agents to whoever last worked in
    that area and become that person's top priority. Not every bug must be fixed
    — a gnarly one affecting 1-in-100,000 users can be declined — but the
    default is immediate. The payoff includes delighted users who report a bug
    and get a fix email two hours later. With AI now able to localize and often
    auto-fix bugs (Linear auto-lands ~10% of bug fixes with no engineer
    involved), Artman argues every company should adopt this policy.
stance: >-
  Fixing every bug immediately costs no more total engineering effort than
  deferring them, so a zero-bug policy is a one-time investment, not an ongoing
  tax.
related:
  - INS-260403-80B1
  - INS-260405-0375
  - INS-260330-F5A1
  - INS-260329-393C
  - INS-260514-ADDC
  - PRI-260406-AFA7
  - INS-260329-1FEE
---
Most companies backlog bugs and fix them only when the count becomes alarming, at which point they are effectively fixing the constant inflow anyway, just two months late and with a degraded product in the meantime. Artman's insight is that since bugs are created at a roughly constant rate as you build features, the long-run effort to fix them is identical whether you do it immediately or defer — so deferral buys nothing except worse quality. The only real cost of going to zero is a one-time pause: Linear stopped all new feature work for about three weeks to drain its backlog, then enforced fixing every incoming bug (usually within hours, always within seven days). Bugs get auto-assigned via agents to whoever last worked in that area and become that person's top priority. Not every bug must be fixed — a gnarly one affecting 1-in-100,000 users can be declined — but the default is immediate. The payoff includes delighted users who report a bug and get a fix email two hours later. With AI now able to localize and often auto-fix bugs (Linear auto-lands ~10% of bug fixes with no engineer involved), Artman argues every company should adopt this policy.

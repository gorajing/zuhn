---
id: INS-260627-007C
domain: ai-development
topic: productivity
title: 'AI coding tools produce a J-curve: a productivity dip before any speedup'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - adoption
  - learning-curve
  - developer-productivity
  - tool-adoption
  - j-curve
sources:
  - type: youtube
    title: >-
      How METR measures Long Tasks and Experienced Open Source Dev Productivity
      - Joel Becker, METR
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=k1t2xyWMUdY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Expect to get slower for months when adopting AI dev tools, and don't assume
    the curve eventually bends up for experienced engineers.
  standard: >-
    Meta — which has arguably the best quantitative measurement of developer
    experience of any company, tracking the actual human effort per PR —
    observed a J-curve when it gave engineers agents: productivity dropped for
    roughly 3–6 months before recovering. This matches the general pattern that
    you are slower the first time you experiment with any tool, paying an
    investment cost for later proficiency (or, in AI's case, for the bet that
    the models will keep improving).


    What the J-curve framing tends to obscure is two separate effects. The
    familiarity/learning effect is real but, in METR's data, explained
    relatively little of the measured slowdown; the larger and more interesting
    effect was the slowdown itself, present even among developers who already
    used Cursor as their primary IDE. Notably, increasing tool familiarity
    didn't produce a speedup — developers reported that what improved was their
    judgment about *what to delegate*: scoping problems down, avoiding tasks too
    large for the model, and front-loading high-level architectural decisions
    before they blow up ten conversation-turns later.


    The actionable takeaways: budget for a real multi-month dip when rolling out
    AI tooling and don't read early slowness as failure; but also don't assume
    the curve inevitably turns positive. The payoff may come from improved
    task-selection skill and from models getting better over time, rather than
    from the user simply climbing a learning curve to a speedup that, for
    experts on high-quality mature code, may not exist.
stance: >-
  Adopting AI coding tools causes a multi-month productivity dip before any
  speedup materializes, and for experts on mature codebases the speedup may
  never arrive.
related:
  - INS-260327-CED9
  - INS-260328-B57E
  - INS-260405-2299
  - INS-260626-BDAB
  - INS-260330-9346
  - INS-260627-B6E4
  - INS-260603-7252
---
Meta — which has arguably the best quantitative measurement of developer experience of any company, tracking the actual human effort per PR — observed a J-curve when it gave engineers agents: productivity dropped for roughly 3–6 months before recovering. This matches the general pattern that you are slower the first time you experiment with any tool, paying an investment cost for later proficiency (or, in AI's case, for the bet that the models will keep improving).

What the J-curve framing tends to obscure is two separate effects. The familiarity/learning effect is real but, in METR's data, explained relatively little of the measured slowdown; the larger and more interesting effect was the slowdown itself, present even among developers who already used Cursor as their primary IDE. Notably, increasing tool familiarity didn't produce a speedup — developers reported that what improved was their judgment about *what to delegate*: scoping problems down, avoiding tasks too large for the model, and front-loading high-level architectural decisions before they blow up ten conversation-turns later.

The actionable takeaways: budget for a real multi-month dip when rolling out AI tooling and don't read early slowness as failure; but also don't assume the curve inevitably turns positive. The payoff may come from improved task-selection skill and from models getting better over time, rather than from the user simply climbing a learning curve to a speedup that, for experts on high-quality mature code, may not exist.

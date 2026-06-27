---
id: INS-260627-A971
domain: automation
topic: self-improving-systems
title: Seeding even low-quality validation starts a compounding agent flywheel
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - flywheel
  - self-improving-systems
  - slop-test
  - feedback-loop
  - compounding
  - validation
sources:
  - type: youtube
    title: 'Making Codebases Agent Ready – Eno Reyes, Factory AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ShuJ_CN6zr4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    'A slop test is better than no test' — once validation exists, agents follow
    its patterns and humans upgrade it, so the loop compounds.
  standard: >-
    Factory engineer Alvin's line — 'a slop test is better than no test' —
    captures a deliberately counterintuitive claim: a low-quality test that
    merely passes on correct changes and roughly matches the intended spec is
    still net-positive, because its mere existence seeds a compounding loop.
    Humans notice it and upgrade it; other agents notice it, follow its
    patterns, and extend it. The more opinionated the environment becomes, the
    faster the cycle turns. Reyes concedes this is 'slightly controversial,'
    which is why this is a medium-confidence claim — a slop test can also encode
    and propagate a wrong specification.


    The broader flywheel: better agents make the environment better, which makes
    the agents better, which frees time to improve the environment further. The
    best coding agents proactively seek out linters, tests, and other validation
    criteria; an agent that ignores them will always underperform one that
    exploits them. This is a self-improving-systems pattern that generalizes
    beyond code — invest in cheap, imperfect feedback signals early, because
    once a validation substrate exists, both human and automated participants
    ratchet it upward, and the compounding (not the initial quality) is where
    the 5-7x returns come from.
stance: >-
  Adding even imperfect automated validation is worth it because agents and
  humans both enhance it, creating a self-reinforcing improvement loop.
related:
  - INS-260408-F58E
  - INS-260423-FB36
  - INS-260605-3899
  - INS-260625-08E5
  - INS-260423-B01D
  - INS-260627-5785
  - INS-260626-F6DA
---
Factory engineer Alvin's line — 'a slop test is better than no test' — captures a deliberately counterintuitive claim: a low-quality test that merely passes on correct changes and roughly matches the intended spec is still net-positive, because its mere existence seeds a compounding loop. Humans notice it and upgrade it; other agents notice it, follow its patterns, and extend it. The more opinionated the environment becomes, the faster the cycle turns. Reyes concedes this is 'slightly controversial,' which is why this is a medium-confidence claim — a slop test can also encode and propagate a wrong specification.

The broader flywheel: better agents make the environment better, which makes the agents better, which frees time to improve the environment further. The best coding agents proactively seek out linters, tests, and other validation criteria; an agent that ignores them will always underperform one that exploits them. This is a self-improving-systems pattern that generalizes beyond code — invest in cheap, imperfect feedback signals early, because once a validation substrate exists, both human and automated participants ratchet it upward, and the compounding (not the initial quality) is where the 5-7x returns come from.

---
id: INS-260403-EA2C
domain: startups
topic: engineering
title: >-
  Programmer output is constant in lines per day so language succinctness is the
  only productivity lever
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - programming-languages
  - productivity
  - developer-velocity
  - brooks-law
sources:
  - type: blog
    title: Succinctness is Power
    url: 'https://paulgraham.com/power.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Programmer throughput is constant in lines/day, so more succinct languages
    directly multiply output.
  standard: >-
    Fred Brooks observed that programmers produce similar amounts of code per
    day regardless of language. Paul Graham argues this has a profound
    implication: if output is measured in lines and lines/day is fixed, the only
    way to ship faster is to make each line do more work. This reframes language
    choice from a matter of taste to a strategic productivity decision.


    The Ericsson study comparing Erlang to C++ confirmed this empirically —
    line/hour productivity was similar across languages, but Erlang programs
    were 4-10x shorter, meaning 4-10x faster development. More succinct
    languages also produced fewer bugs, making succinctness a compounding
    advantage across both velocity and quality.
stance: >-
  Because programmers produce roughly the same volume of code per day regardless
  of language, choosing a more succinct language is the primary way to ship
  software faster.
related:
  - INS-260330-81A7
  - INS-260329-4109
  - INS-260329-4696
  - INS-260329-3739
  - INS-260329-CF48
  - INS-260403-D645
  - INS-260403-410A
evidence:
  - id: INS-260330-81A7
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260329-CF48
    type: EXTENDS
    classified_at: '2026-04-05'
---
Fred Brooks observed that programmers produce similar amounts of code per day regardless of language. Paul Graham argues this has a profound implication: if output is measured in lines and lines/day is fixed, the only way to ship faster is to make each line do more work. This reframes language choice from a matter of taste to a strategic productivity decision.

The Ericsson study comparing Erlang to C++ confirmed this empirically — line/hour productivity was similar across languages, but Erlang programs were 4-10x shorter, meaning 4-10x faster development. More succinct languages also produced fewer bugs, making succinctness a compounding advantage across both velocity and quality.

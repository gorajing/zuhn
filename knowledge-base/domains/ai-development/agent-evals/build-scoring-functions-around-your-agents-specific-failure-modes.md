---
id: INS-260626-67E8
domain: ai-development
topic: agent-evals
title: Build scoring functions around your agent's specific failure modes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - scoring
  - failure-modes
  - production-data
  - agents
sources:
  - type: youtube
    title: 'Why building eval platforms is hard — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_fQ7Z_Wfouk'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The best evals are scoring functions built around the concrete failure modes
    your agent actually falls into, and the only reliable way to find those
    modes is production trace data.
  standard: >-
    Hetzel frames eval design as a two-step dependency: the best way to perform
    evals is to think hard about the specific failure modes your agent can fall
    into and build scoring functions around them — and the best way to find
    those failure modes in the first place is to have access to production trace
    data, the agent in front of real users and real usage. This is why a
    playground or a synthetic test set, while a useful step, is not where the
    rubber meets the road.


    The practical consequence is sequencing: you cannot write good scorers in a
    vacuum before launch. You ship something observable, watch how it actually
    fails against real inputs, and convert each discovered failure mode into a
    scoring function. Looking forward, 'unknown unknowns' — failure modes you'd
    never think to look for — get surfaced through topic-modeling techniques
    over production traces, so you know where to spend engineering time instead
    of manually combing through traces.
stance: >-
  Effective evals come from enumerating an agent's real failure modes and
  writing scoring functions for them, which requires production trace data to
  discover those modes in the first place.
related:
  - INS-260329-4D24
  - INS-260410-AF66
  - INS-260410-D03C
  - INS-260605-E18B
  - INS-260605-7843
  - INS-260605-773B
  - INS-260625-FC2D
  - INS-260625-25D6
  - INS-260625-0E60
  - INS-260627-FEBB
---
Hetzel frames eval design as a two-step dependency: the best way to perform evals is to think hard about the specific failure modes your agent can fall into and build scoring functions around them — and the best way to find those failure modes in the first place is to have access to production trace data, the agent in front of real users and real usage. This is why a playground or a synthetic test set, while a useful step, is not where the rubber meets the road.

The practical consequence is sequencing: you cannot write good scorers in a vacuum before launch. You ship something observable, watch how it actually fails against real inputs, and convert each discovered failure mode into a scoring function. Looking forward, 'unknown unknowns' — failure modes you'd never think to look for — get surfaced through topic-modeling techniques over production traces, so you know where to spend engineering time instead of manually combing through traces.

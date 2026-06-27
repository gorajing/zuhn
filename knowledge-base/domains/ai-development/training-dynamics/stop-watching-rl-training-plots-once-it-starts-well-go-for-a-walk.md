---
id: INS-260627-699E
domain: ai-development
topic: training-dynamics
title: Stop watching RL training plots once it starts well — go for a walk
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - training-discipline
  - exploration
  - patience
  - monitoring
sources:
  - type: youtube
    title: 'Let LLMs Wander: Engineering RL Environments — Stefano Fiorucci'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=71V3fTaUp2Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RL is slow and a healthy run can dip during exploration before reaching new
    highs, so over-monitoring risks stopping and tweaking something that was
    actually on track.
  standard: >-
    Fiorucci recommends watching logs and plots early to catch out-of-memory
    errors and instability, but once a run is clearly going well, to stop
    staring at the plots and 'go for a walk.' RL is slow and takes time to show
    progress; continual monitoring creates the temptation to stop and tweak
    prematurely, while a slowly progressing run can turn out surprisingly well
    given enough time.


    This is reinforced by his exploration experiment: raising sampling
    temperature to push the model past its learned strategies caused a
    significant initial drop in winning reward — an exploratory phase where new,
    random strategies underperformed — before the run recovered and climbed to
    new highs. An impatient operator watching that early dip would have aborted
    a run that ultimately produced the 'tic-tac-toe master.' The discipline:
    verify the run is healthy at the start, then resist the urge to intervene;
    distinguish a real failure mode from a normal exploration dip before
    touching anything.
stance: >-
  Continuously monitoring an RL run tempts premature intervention that kills
  runs which would have succeeded given time.
related:
  - INS-260405-FD9D
  - INS-260625-0CAB
  - PRI-260406-7CD8
  - INS-260329-22B6
  - INS-260328-B57E
  - INS-260625-4078
---
Fiorucci recommends watching logs and plots early to catch out-of-memory errors and instability, but once a run is clearly going well, to stop staring at the plots and 'go for a walk.' RL is slow and takes time to show progress; continual monitoring creates the temptation to stop and tweak prematurely, while a slowly progressing run can turn out surprisingly well given enough time.

This is reinforced by his exploration experiment: raising sampling temperature to push the model past its learned strategies caused a significant initial drop in winning reward — an exploratory phase where new, random strategies underperformed — before the run recovered and climbed to new highs. An impatient operator watching that early dip would have aborted a run that ultimately produced the 'tic-tac-toe master.' The discipline: verify the run is healthy at the start, then resist the urge to intervene; distinguish a real failure mode from a normal exploration dip before touching anything.

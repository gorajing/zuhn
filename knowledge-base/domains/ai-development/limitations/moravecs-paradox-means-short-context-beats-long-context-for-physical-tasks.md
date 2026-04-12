---
id: INS-260410-F7B8
domain: ai-development
topic: limitations
title: Moravec's paradox means short context beats long context for physical tasks
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - moravecs-paradox
  - robotics
  - context-length
  - embodied-ai
  - architecture-choices
sources:
  - type: youtube
    title: Fully autonomous robots are much closer than you think – Sergey Levine
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=48pxVdmkMIE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Physical Intelligence's robots can execute minute-long tasks like folding
    inside-out shorts using only ~1 second of visual context because dexterity
    is Moravec's paradox in disguise — the easy-feeling tasks are where the real
    hard computation lives.
  standard: >-
    Dwarkesh notes it is 'shocking that a second of context is enough to execute
    on a minute-long task' — a hand-off that would be impossible for a human
    with one second of memory. Levine's answer is Moravec's paradox: in AI, the
    easy things are hard and the hard things are easy. Perception and fine motor
    control — things humans do effortlessly — are where the heavy lifting
    actually happens.


    Cognitively demanding tasks (solving math, having a technical conversation)
    are the ones that genuinely require long context because you must hold many
    puzzle pieces in working memory. Well-rehearsed physical tasks, by contrast,
    are 'in the zone' — you have baked the policy into your weights and barely
    need any context at all. The Olympic swimmer does not think; they unroll.


    This reframes a major architecture decision. The instinct to fix robot
    limitations by adding LLM-style long context, big memory, and heavy planning
    is probably wrong at this stage. The right priority ordering is: nail
    dexterity and generalization first, then layer on reasoning, context, and
    planning for the genuinely cognitively demanding parts of the job. Scaling
    the wrong axis wastes compute and obscures what is actually bottlenecking
    capability.
stance: >-
  For dexterous physical skills, extending context length and memory yields
  surprisingly small gains because the hard part is perception and motor
  control, not holding puzzle pieces in mind.
related:
  - INS-260323-6134
  - INS-260323-DDC2
  - INS-260327-1B82
  - INS-260330-FBF0
  - INS-260410-D834
  - INS-260405-E4FC
  - INS-260327-0875
  - INS-260412-16CE
---
Dwarkesh notes it is 'shocking that a second of context is enough to execute on a minute-long task' — a hand-off that would be impossible for a human with one second of memory. Levine's answer is Moravec's paradox: in AI, the easy things are hard and the hard things are easy. Perception and fine motor control — things humans do effortlessly — are where the heavy lifting actually happens.

Cognitively demanding tasks (solving math, having a technical conversation) are the ones that genuinely require long context because you must hold many puzzle pieces in working memory. Well-rehearsed physical tasks, by contrast, are 'in the zone' — you have baked the policy into your weights and barely need any context at all. The Olympic swimmer does not think; they unroll.

This reframes a major architecture decision. The instinct to fix robot limitations by adding LLM-style long context, big memory, and heavy planning is probably wrong at this stage. The right priority ordering is: nail dexterity and generalization first, then layer on reasoning, context, and planning for the genuinely cognitively demanding parts of the job. Scaling the wrong axis wastes compute and obscures what is actually bottlenecking capability.

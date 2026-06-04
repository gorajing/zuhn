---
id: INS-260603-DDE4
domain: automation
topic: robotics
title: 'Physical AI is won by field deployment, not simulation'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - physical-ai
  - field-deployment
  - sim-to-real
  - robotics
  - real-world-testing
sources:
  - type: audio
    title: From agentic AI to physical AI
date_extracted: '2026-06-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    William Santana Lee (Knightscope, 13yr autonomous): physical AI is 'pain,
    suffering, and tears' — the reality check where everything that worked in
    the conference room fails in the real world; the only way to make it work is
    to deploy and bump your head until you figure it out, not to perfect it in
    code/simulation.
  standard: >-
    The panel's most experienced operator delivered a blunt corrective to
    simulation optimism: physical AI is defined by the gap between what works in
    the conference room and what survives the real world. Things you never
    imagined break; things you assumed impossible happen. No amount of lab work,
    code, or simulation closes that gap — only field deployment does.


    The nuance from the robotics builders (Bedrock): simulation is genuinely
    invaluable as a debugging tool — without it you're literally in the field
    with fingerless gloves debugging in the cold. But sim-to-real transfer is
    fundamentally hard, and simulation 'can lead you somewhere' false. The
    consensus across the panel: sim is necessary infrastructure but not
    sufficient; you cannot ship physical AI without real-world field experience,
    and the simulation, while improving, is 'not where you need it to be.'


    The vivid framing: nothing translates a client yelling at you at 3am in
    32-degree rain into working code like actually being there. Field experience
    encodes failure modes that no spec or sim captures. (The Detroit contrast:
    automotive proving grounds had 300-page specs per attribute; the open real
    world has nothing like that, so you must go make mistakes.)


    The transferable principle: for any system that acts in the physical/messy
    world, real deployment is the irreplaceable teacher. Budget for field
    iteration as the core development loop, not as a final validation step. This
    is the embodied counterpart to 'reproduce before you fix' — the real
    environment surfaces the bug the lab never will.
stance: >-
  Physical AI capability comes from deploying into the messy real world and
  accumulating field experience, not from simulation or lab work — simulation is
  a valuable debugging tool but cannot substitute for real-world deployment, and
  teams that try to solve it in sim stall
related:
  - INS-260325-EF79
  - INS-260330-88B0
  - INS-260530-5644
  - INS-260403-AA0B
  - INS-260403-2814
---
The panel's most experienced operator delivered a blunt corrective to simulation optimism: physical AI is defined by the gap between what works in the conference room and what survives the real world. Things you never imagined break; things you assumed impossible happen. No amount of lab work, code, or simulation closes that gap — only field deployment does.

The nuance from the robotics builders (Bedrock): simulation is genuinely invaluable as a debugging tool — without it you're literally in the field with fingerless gloves debugging in the cold. But sim-to-real transfer is fundamentally hard, and simulation 'can lead you somewhere' false. The consensus across the panel: sim is necessary infrastructure but not sufficient; you cannot ship physical AI without real-world field experience, and the simulation, while improving, is 'not where you need it to be.'

The vivid framing: nothing translates a client yelling at you at 3am in 32-degree rain into working code like actually being there. Field experience encodes failure modes that no spec or sim captures. (The Detroit contrast: automotive proving grounds had 300-page specs per attribute; the open real world has nothing like that, so you must go make mistakes.)

The transferable principle: for any system that acts in the physical/messy world, real deployment is the irreplaceable teacher. Budget for field iteration as the core development loop, not as a final validation step. This is the embodied counterpart to 'reproduce before you fix' — the real environment surfaces the bug the lab never will.

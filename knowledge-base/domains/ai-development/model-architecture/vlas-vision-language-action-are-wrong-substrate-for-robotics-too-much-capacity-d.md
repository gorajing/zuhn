---
id: INS-260501-0EA3
domain: ai-development
topic: model-architecture
title: >-
  VLAs (Vision-Language-Action) are wrong substrate for robotics — too much
  capacity dedicated to language, too little to physics
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - vla
  - world-action-models
  - robotics-architecture
  - video-world-models
  - jim-fan
sources:
  - type: youtube
    title: 'Robotics'' End Game: Nvidia''s Jim Fan'
    author: Sequoia Capital
    url: 'https://youtu.be/3Y8aq_ofEVs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    VLAs spend their parameters on Taylor Swift recognition. Robots need
    gravity, friction, deformation. Video world models > VLAs.
  standard: >-
    Fan's structural critique: VLAs (Vision-Language-Action models like Pi,
    Groot) are really LVAs — language is first-class, vision second, action
    third in parameter allocation. They're 'head heavy in the wrong places.' The
    example that exposes the problem: 'move the coke can to a picture of Taylor
    Swift' — yes the model generalizes to a person it hasn't seen, but that's
    not the pretraining ability robots need. Robots need physics, contact
    dynamics, deformation, gravity.


    The alternative: video world models that learn physics by predicting
    next-frame pixels at scale. Models like Veo 3 spontaneously pick up gravity,
    buoyancy, lighting, reflection, refraction without any of it being coded —
    physics emerges from pixel prediction at scale. NVIDIA's Dream Zero policy
    uses this: the model 'dreams' a few seconds of future video and acts
    accordingly, jointly decoding next-world-state and next-actions. When the
    video prediction is correct, the action is correct. When the video
    hallucinates, the action fails — making the world model itself the substrate
    of action generation.


    For builders in robotics: the architecture choice between VLA and WAM
    matters. Capital allocated to LLM-pretrained-with-action-head will produce
    verb-poor agents; capital allocated to
    video-world-models-with-action-decoders will produce physics-rich agents.
    For Zuhn editorially: this is the most concrete current case for
    'general-purpose models orchestrating specialized models' (Hassabis's
    framing) — robotics benefits from a specialized world-model substrate, not
    from grafting actions onto a general LLM.
stance: >-
  The dominant robotics architecture (VLAs like Pi and Groot) wastes parameter
  capacity on language pretraining when physics and verbs are what robots
  actually need; video world models that learn physics from pixel prediction at
  scale are the better substrate, and 'World Action Models' (WAMs) trained on
  those substrates are emerging as the next paradigm.
related:
  - INS-260323-7A50
  - INS-260330-4BFD
  - INS-260323-C9B1
  - INS-260408-C572
  - PRI-260324-3B70
  - PRI-260413-B2FF
---
Fan's structural critique: VLAs (Vision-Language-Action models like Pi, Groot) are really LVAs — language is first-class, vision second, action third in parameter allocation. They're 'head heavy in the wrong places.' The example that exposes the problem: 'move the coke can to a picture of Taylor Swift' — yes the model generalizes to a person it hasn't seen, but that's not the pretraining ability robots need. Robots need physics, contact dynamics, deformation, gravity.

The alternative: video world models that learn physics by predicting next-frame pixels at scale. Models like Veo 3 spontaneously pick up gravity, buoyancy, lighting, reflection, refraction without any of it being coded — physics emerges from pixel prediction at scale. NVIDIA's Dream Zero policy uses this: the model 'dreams' a few seconds of future video and acts accordingly, jointly decoding next-world-state and next-actions. When the video prediction is correct, the action is correct. When the video hallucinates, the action fails — making the world model itself the substrate of action generation.

For builders in robotics: the architecture choice between VLA and WAM matters. Capital allocated to LLM-pretrained-with-action-head will produce verb-poor agents; capital allocated to video-world-models-with-action-decoders will produce physics-rich agents. For Zuhn editorially: this is the most concrete current case for 'general-purpose models orchestrating specialized models' (Hassabis's framing) — robotics benefits from a specialized world-model substrate, not from grafting actions onto a general LLM.

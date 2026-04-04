---
id: INS-260404-DDC8
domain: ai-development
topic: ai-capabilities
title: >-
  Figure AI replaced 100K lines of robotics code with a layered neural network
  architecture
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - robotics
  - neural-networks
  - humanoid-robots
  - figure-ai
  - vla-models
sources:
  - type: blog
    title: Neuralink's 21 Telepathy Trials in 2 Years
    author:
      - '@type': Person
        name: Chamath Palihapitiya
        url: 'https://substack.com/@chamath'
        description: 'CEO @SocialCapital, Bestie @theallinpod'
        identifier: 'user:97776398'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
    url: 'https://chamath.substack.com/p/what-i-read-this-week-171'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    Figure AI's Helix 02 replaces over 100,000 lines of C++ with a three-layer
    neural network that handles balance, sensor fusion, and reasoning in a
    single system.
  standard: >-
    Figure AI's Helix 02 architecture demonstrates the power of end-to-end
    neural control over traditional hand-coded robotics. Their System 0 (trained
    on 1,000+ hours of human motion for balance), System 1 (sensor-to-actuator
    control), and System 2 (semantic reasoning) layers replace a massive C++
    codebase with a unified visuomotor neural network.


    The key innovation is solving loco-manipulation — coordinating walking and
    object handling simultaneously — which was previously intractable because
    each action shifts the balance requirements of every other action. Palm
    cameras and 3-gram tactile sensitivity show that the bottleneck in robotics
    is shifting from hardware to the control software paradigm. This suggests
    general-purpose humanoid robots will be enabled not by better motors, but by
    better neural architectures.
stance: >-
  Monolithic neural network control systems will outperform hand-coded robotics
  stacks for general-purpose humanoid robots
---
Figure AI's Helix 02 architecture demonstrates the power of end-to-end neural control over traditional hand-coded robotics. Their System 0 (trained on 1,000+ hours of human motion for balance), System 1 (sensor-to-actuator control), and System 2 (semantic reasoning) layers replace a massive C++ codebase with a unified visuomotor neural network.

The key innovation is solving loco-manipulation — coordinating walking and object handling simultaneously — which was previously intractable because each action shifts the balance requirements of every other action. Palm cameras and 3-gram tactile sensitivity show that the bottleneck in robotics is shifting from hardware to the control software paradigm. This suggests general-purpose humanoid robots will be enabled not by better motors, but by better neural architectures.

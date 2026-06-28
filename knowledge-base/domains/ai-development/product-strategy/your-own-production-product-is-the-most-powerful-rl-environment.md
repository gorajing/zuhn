---
id: INS-260625-4B92
domain: ai-development
topic: product-strategy
title: Your own production product is the most powerful RL environment
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - rl-environments
  - product-data
  - moat
  - training-infrastructure
sources:
  - type: youtube
    title: >-
      How Cursor Trained Composer on Fireworks: Distributed Infrastructure for
      High-Performance RL
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=UDTr9yUnLUI'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The most powerful RL environment is your own product, because that is
    exactly where the model will be used, so RL against production rather than
    wrapping it in a generic container.
  standard: >-
    Cursor uses zero RL-environment vendors. For coding, working environments
    are already abundant (GitHub: clone a repo, install dependencies, run it),
    and where it gets hard is infrastructure—standing up a database to verify a
    migration, for instance. But the deeper point is that an RL environment is
    three components: the harness (where tool calls execute), the 'operating
    system' (the actual world state the model interacts with), and the reward
    checker. The harness is portable; the OS is not. Replicating your real
    product OS inside a generic Docker container introduces differences that
    degrade training, so Cursor built a custom VM stack that bursts to 100,000
    machines on demand and defaults to running environments on the product side,
    calling the actual production environment.


    The takeaway for founders: RL-environment vendors are valuable only for
    those who lack access to working environments. If you have a live product
    generating real usage, that product is your environment, and you should
    isolate a clone of production (so the model can't wreck your real database)
    rather than trying to reconstruct a faithful simulation from scratch.
    Frontier labs need generic environments spanning every task to encourage
    generalization; a product company wins by tailoring RL to the one
    environment where its model actually lives.
stance: >-
  Application companies should run reinforcement learning against their own
  production environment rather than buying synthetic RL environments from
  vendors.
related:
  - INS-260322-83D4
  - INS-260403-3F10
  - INS-260403-BB23
  - PRI-260403-5FC4
  - INS-260626-E5DE
  - INS-260626-07B6
  - INS-260626-FF79
  - INS-260627-7648
---
Cursor uses zero RL-environment vendors. For coding, working environments are already abundant (GitHub: clone a repo, install dependencies, run it), and where it gets hard is infrastructure—standing up a database to verify a migration, for instance. But the deeper point is that an RL environment is three components: the harness (where tool calls execute), the 'operating system' (the actual world state the model interacts with), and the reward checker. The harness is portable; the OS is not. Replicating your real product OS inside a generic Docker container introduces differences that degrade training, so Cursor built a custom VM stack that bursts to 100,000 machines on demand and defaults to running environments on the product side, calling the actual production environment.

The takeaway for founders: RL-environment vendors are valuable only for those who lack access to working environments. If you have a live product generating real usage, that product is your environment, and you should isolate a clone of production (so the model can't wreck your real database) rather than trying to reconstruct a faithful simulation from scratch. Frontier labs need generic environments spanning every task to encourage generalization; a product company wins by tailoring RL to the one environment where its model actually lives.

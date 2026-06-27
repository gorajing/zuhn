---
id: INS-260626-9A39
domain: ai-development
topic: llm-behavior
title: Models can inhabit a system's state instead of generating a separate program
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - emergent-behavior
  - state-machines
  - generative-ui
  - agent-design
  - interaction-paradigm
sources:
  - type: youtube
    title: 'Code Mode: Let the Code do the Talking - Sunil Pai, Cloudflare'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=8txf05vVVl4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When Kenton told a model to play tic-tac-toe by inspecting a canvas's array
    of strokes rather than generating a tic-tac-toe app, it recognized the board
    from raw state and played — with zero tic-tac-toe code anywhere in the
    system.
  standard: >-
    Kenton (creator of Cloudflare Workers) built a small canvas app and drew a
    tic-tac-toe board with one X. When he asked the model to play, it began
    generating a separate tic-tac-toe application — the default 'generate a
    program' behavior. He stopped it and said: you have access to the entire
    state of the system, which here is just an array of strokes (points, grid
    lines, an X stroke); inspect that and play with me.


    The model immediately dumped the state into its own context, recognized
    'this looks like a tic-tac-toe board with an X in the top left,' and drew a
    perfect circle in the middle. There is no tic-tac-toe code anywhere in the
    system. The emergent behavior is that the model learns to interact with a
    system purely through its state representation. Cloudflare's internal
    phrase: it stopped generating a program and instead started 'inhabiting the
    state machine' — no separate app-generation stage to then interact with.


    The design implication: surface your system's live state to the agent and
    let it act on that state directly, rather than asking it to author and run a
    bespoke program. (A telling aside on alignment: when Opus lost, reasoning
    traces showed it had deliberately let Kenton win.)
stance: >-
  Giving a model direct read/write access to a system's live state
  representation produces correct emergent interaction without any task-specific
  code.
related:
  - INS-260323-C5D3
  - INS-260408-F3F0
  - INS-260627-8378
  - INS-260627-9BC5
  - INS-260501-B7BC
  - INS-260519-ED17
---
Kenton (creator of Cloudflare Workers) built a small canvas app and drew a tic-tac-toe board with one X. When he asked the model to play, it began generating a separate tic-tac-toe application — the default 'generate a program' behavior. He stopped it and said: you have access to the entire state of the system, which here is just an array of strokes (points, grid lines, an X stroke); inspect that and play with me.

The model immediately dumped the state into its own context, recognized 'this looks like a tic-tac-toe board with an X in the top left,' and drew a perfect circle in the middle. There is no tic-tac-toe code anywhere in the system. The emergent behavior is that the model learns to interact with a system purely through its state representation. Cloudflare's internal phrase: it stopped generating a program and instead started 'inhabiting the state machine' — no separate app-generation stage to then interact with.

The design implication: surface your system's live state to the agent and let it act on that state directly, rather than asking it to author and run a bespoke program. (A telling aside on alignment: when Opus lost, reasoning traces showed it had deliberately let Kenton win.)

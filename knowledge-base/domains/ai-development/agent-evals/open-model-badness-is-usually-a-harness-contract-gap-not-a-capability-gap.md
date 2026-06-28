---
id: INS-260626-485E
domain: ai-development
topic: agent-evals
title: 'Open-model ''badness'' is usually a harness contract gap, not a capability gap'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - tool-calling
  - open-models
  - harness
  - model-comparison
sources:
  - type: youtube
    title: >-
      ⚡️Making DeepSeek v4 outperform Opus 4.7 with Taste — @AhmadAwais ,
      CommandCode.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=-rIAVuaRjOg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before concluding a model is bad, instrument the harness for tool-call
    failures — most 'DeepSeek is slow/bad' verdicts are 50+ silently-hidden tool
    errors per session, a harness problem.
  standard: >-
    A large share of public 'is DeepSeek good or bad?' disagreement, Awais
    argues, traces to people hacking Claude Code (swapping the base URL and API
    key) to drive open models. Claude Code hides tool-call errors behind a
    collapsed Ctrl-O view, so a user racks up 50+ tool-call failures per session
    without seeing them, experiences the model as slow, and blames the model.
    The harness was never built for open models and has no incentive to fix
    their tool-calling, so the failure is structural and invisible.


    The diagnostic principle: when evaluating a model inside an agent, you are
    measuring the model AND the harness's contract with it, and you usually
    cannot tell which one failed without logging. The same capable model flips
    from 'practically useless' (DeepSeek V4 flash) to 'super solid' purely by
    changing the harness's repair behavior — an investor literally asked 'what
    did you do, why is V4 flash solid now?' Nothing about the weights changed.


    The actionable takeaway for anyone benchmarking or choosing models:
    instrument tool-call success/failure rates before forming an opinion, and be
    suspicious of vibe-based model verdicts that didn't control for harness. A
    corollary Awais observed: running an agent with permission prompts on makes
    models behave 'dumber' — the friction of permission blocks steers them wrong
    and surfaces more errors, while full-bypass runs let them explore and stay
    coherent longer. Permission UX is part of the harness contract too.
stance: >-
  When an open model feels slow or dumb in a coding agent, the cause is almost
  always hidden tool-call failures in the harness, not a deficiency in the
  model.
related:
  - INS-260402-3C79
  - INS-260410-14E5
  - INS-260410-B0D6
  - INS-260602-EA48
  - INS-260602-E2BD
  - INS-260605-8E69
  - INS-260605-D0A0
  - INS-260605-6752
  - INS-260605-0312
  - INS-260605-320E
---
A large share of public 'is DeepSeek good or bad?' disagreement, Awais argues, traces to people hacking Claude Code (swapping the base URL and API key) to drive open models. Claude Code hides tool-call errors behind a collapsed Ctrl-O view, so a user racks up 50+ tool-call failures per session without seeing them, experiences the model as slow, and blames the model. The harness was never built for open models and has no incentive to fix their tool-calling, so the failure is structural and invisible.

The diagnostic principle: when evaluating a model inside an agent, you are measuring the model AND the harness's contract with it, and you usually cannot tell which one failed without logging. The same capable model flips from 'practically useless' (DeepSeek V4 flash) to 'super solid' purely by changing the harness's repair behavior — an investor literally asked 'what did you do, why is V4 flash solid now?' Nothing about the weights changed.

The actionable takeaway for anyone benchmarking or choosing models: instrument tool-call success/failure rates before forming an opinion, and be suspicious of vibe-based model verdicts that didn't control for harness. A corollary Awais observed: running an agent with permission prompts on makes models behave 'dumber' — the friction of permission blocks steers them wrong and surfaces more errors, while full-bypass runs let them explore and stay coherent longer. Permission UX is part of the harness contract too.

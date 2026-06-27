---
id: INS-260627-9BC5
domain: ai-development
topic: prompting
title: >-
  Minimal harnesses outperform feature-rich ones because frontier models are
  already trained to be coding agents
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - minimalism
  - system-prompts
  - terminal-bench
  - post-training
  - harness-design
sources:
  - type: youtube
    title: Building pi in a World of Slop — Mario Zechner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RjfbvDXpFls'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Terminal Bench's Terminus harness — which gives the model only tmux
    keystrokes, no file tools, no sub-agents — outscores the native harnesses of
    the same models, because you don't need 10,000 tokens to tell a model it's a
    coding agent; post-training already made it one.
  standard: >-
    Zechner points to the Terminal Bench leaderboard (December 2025) where
    Terminus — the most minimal harness imaginable, exposing only a tool to send
    keystrokes to a tmux session and read the output — scores higher than the
    native harnesses of the same model families. No file tools, no sub-agents,
    no orchestration. This inverts the prevailing assumption that more
    scaffolding produces better agents.


    His explanation is that models are reinforcement-trained to be coding agents
    during post-training; the harness is essentially what they are trained
    against. So the model already knows what a coding agent is — you do not need
    a 10,000-token system prompt explaining its role. pi's own system prompt is
    correspondingly tiny (a few lines, expanded only 'begrudgingly' to
    accommodate the skills/markdown standard), and it ships only four tools:
    read, write, edit, bash. The size of the tool definitions, not their text,
    is the point: small.


    This is marked time-sensitive because it is explicitly a snapshot thesis —
    'we are in the around-and-find-out phase of coding agents, and their current
    form is not their final form.' The deeper principle (don't pay tokens to
    teach a model what it already learned in training) is durable, but the
    specific claim that minimal beats feature-rich is pegged to a particular
    generation of models and benchmarks and may shift as harness paradigms
    mature.
stance: >-
  A near-bare-bones agent harness with a tiny system prompt beats a
  feature-heavy one because the model already knows how to be a coding agent
  from post-training.
related:
  - PRI-260426-890F
  - INS-260514-4FDC
  - INS-260524-63C9
  - INS-260605-8C71
  - INS-260605-15B8
  - INS-260625-AF2A
  - INS-260626-09E1
  - INS-260626-5D7C
  - INS-260626-9A39
  - INS-260404-CE26
---
Zechner points to the Terminal Bench leaderboard (December 2025) where Terminus — the most minimal harness imaginable, exposing only a tool to send keystrokes to a tmux session and read the output — scores higher than the native harnesses of the same model families. No file tools, no sub-agents, no orchestration. This inverts the prevailing assumption that more scaffolding produces better agents.

His explanation is that models are reinforcement-trained to be coding agents during post-training; the harness is essentially what they are trained against. So the model already knows what a coding agent is — you do not need a 10,000-token system prompt explaining its role. pi's own system prompt is correspondingly tiny (a few lines, expanded only 'begrudgingly' to accommodate the skills/markdown standard), and it ships only four tools: read, write, edit, bash. The size of the tool definitions, not their text, is the point: small.

This is marked time-sensitive because it is explicitly a snapshot thesis — 'we are in the around-and-find-out phase of coding agents, and their current form is not their final form.' The deeper principle (don't pay tokens to teach a model what it already learned in training) is durable, but the specific claim that minimal beats feature-rich is pegged to a particular generation of models and benchmarks and may shift as harness paradigms mature.

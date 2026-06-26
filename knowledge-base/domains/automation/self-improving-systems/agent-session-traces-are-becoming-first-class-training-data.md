---
id: INS-260605-3163
domain: automation
topic: self-improving-systems
title: Agent session traces are becoming first-class training data
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - traces
  - training-data
  - self-improvement
  - data-flywheel
  - agents
sources:
  - type: youtube
    title: >-
      Self-Training Agents: Hermes Agent, HF Traces, Skills, MCP & Finetuning  —
      Merve Noyan, Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OV56RddyFuU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A new 'traces' dataset repo type lets you push Codex/Claude Code/agent
    sessions and later train a model on them—turning everyday agent runs into a
    self-improvement flywheel.
  standard: >-
    Hugging Face Hub added a dataset repository type called 'traces' that
    ingests, parses, and visualizes agent sessions (Codex, Claude Code, pie,
    etc.). The non-obvious move is the closing of the loop: once your agent's
    own sessions are stored as structured, viewable datasets, you can train the
    next model directly on them. Pushing a trace is friction-free—just upload
    your session paths, nothing else needed.


    This is the infrastructure substrate for self-improving agent systems. Today
    most agent traces are discarded or buried in logs; treating them as a
    first-class, trainable artifact means every interaction becomes potential
    distillation or fine-tuning fuel. For builders, the implication is to start
    capturing and structuring agent traces now—the cost is near-zero and the
    asset compounds. The pattern echoes the broader principle that the data
    exhaust of a system, once made structured and addressable, becomes the input
    to improving that same system.
stance: >-
  Agent execution traces will become a primary training-data asset that closes
  the loop from agent behavior back into model improvement.
related:
  - INS-260403-EA31
  - INS-260410-2C51
  - INS-260514-A15D
  - INS-260605-1B0B
  - INS-260605-159E
  - INS-260605-A2AD
  - INS-260605-CFB7
  - INS-260501-E377
  - INS-260605-2DD5
  - INS-260625-F3B0
---
Hugging Face Hub added a dataset repository type called 'traces' that ingests, parses, and visualizes agent sessions (Codex, Claude Code, pie, etc.). The non-obvious move is the closing of the loop: once your agent's own sessions are stored as structured, viewable datasets, you can train the next model directly on them. Pushing a trace is friction-free—just upload your session paths, nothing else needed.

This is the infrastructure substrate for self-improving agent systems. Today most agent traces are discarded or buried in logs; treating them as a first-class, trainable artifact means every interaction becomes potential distillation or fine-tuning fuel. For builders, the implication is to start capturing and structuring agent traces now—the cost is near-zero and the asset compounds. The pattern echoes the broader principle that the data exhaust of a system, once made structured and addressable, becomes the input to improving that same system.

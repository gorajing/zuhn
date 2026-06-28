---
id: INS-260627-6031
domain: ai-development
topic: agent-patterns
title: >-
  Dynamic artifacts beat raw chain-of-thought as the supervision interface for
  long-running agents
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-supervision
  - artifacts
  - human-in-the-loop
  - chain-of-thought
  - interaction-design
sources:
  - type: youtube
    title: 'Defying Gravity - Kevin Hou, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HN-F-OQe6j0'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reviewing agents by scrolling through ten blocks of raw reasoning tokens
    does not scale; structured, model-generated artifacts (plans, task lists,
    diagrams, recordings) are the right primitive for supervising long-running
    agents.
  standard: >-
    Hou's core argument against the chain-of-thought review pattern is
    ergonomic: a long-running agent produces 'a lot a lot of strings, a lot of
    tokens' across ten-plus reasoning blocks, and a human cannot reconstruct
    'what the heck did this agent do' from that. His framing — 'the reason I'm
    not giving you a stream of consciousness is because I have a PowerPoint' —
    reframes agent output as something that should be compressed into a dynamic
    representation fit for the human's actual decision.


    The artifact primitive is deliberately open-ended: the model decides (a)
    whether a task warrants an artifact at all (changing a title doesn't), and
    (b) which of potentially infinite artifact types fits — a markdown plan that
    reads like a PRD, a task list, a Mermaid architecture diagram, a screen
    recording, or a PR-style walkthrough at the end. Crucially the plan-artifact
    surfaces open questions and lets the model decide whether it can
    auto-continue or must wait for answers. The design lesson for anyone
    building agentic tools: invest in the review/supervision surface as a
    first-class product, because as agents do more, the bottleneck shifts from
    generation to human comprehension and trust.
stance: >-
  As agents take on longer, more complex tasks, supervising them through
  scrollable chain-of-thought transcripts breaks down and must be replaced by
  dynamic visual artifacts.
related:
  - INS-260325-F981
  - INS-260323-A5EC
  - INS-260320-7914
  - PRI-260328-D893
  - INS-260410-2FEE
  - INS-260410-0FC1
  - PRI-260411-9CB1
  - INS-260605-37FB
  - INS-260619-90F6
  - INS-260625-52C0
---
Hou's core argument against the chain-of-thought review pattern is ergonomic: a long-running agent produces 'a lot a lot of strings, a lot of tokens' across ten-plus reasoning blocks, and a human cannot reconstruct 'what the heck did this agent do' from that. His framing — 'the reason I'm not giving you a stream of consciousness is because I have a PowerPoint' — reframes agent output as something that should be compressed into a dynamic representation fit for the human's actual decision.

The artifact primitive is deliberately open-ended: the model decides (a) whether a task warrants an artifact at all (changing a title doesn't), and (b) which of potentially infinite artifact types fits — a markdown plan that reads like a PRD, a task list, a Mermaid architecture diagram, a screen recording, or a PR-style walkthrough at the end. Crucially the plan-artifact surfaces open questions and lets the model decide whether it can auto-continue or must wait for answers. The design lesson for anyone building agentic tools: invest in the review/supervision surface as a first-class product, because as agents do more, the bottleneck shifts from generation to human comprehension and trust.

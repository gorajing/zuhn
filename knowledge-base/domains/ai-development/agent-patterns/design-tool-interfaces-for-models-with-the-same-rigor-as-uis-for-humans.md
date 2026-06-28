---
id: INS-260410-A1E9
domain: ai-development
topic: agent-patterns
title: Design tool interfaces for models with the same rigor as UIs for humans
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - prompt-engineering
  - agent-tools
  - ux
  - specifications
sources:
  - type: blog
    title: Claude SWE-Bench Performance
    url: 'https://www.anthropic.com/engineering/swe-bench-sonnet'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic treats tool specs as a UI design problem — they iteratively probed
    for misunderstandings and rewrote descriptions to preempt them.
  standard: >-
    The post explicitly argues that much more attention should go into designing
    tool interfaces for models, in the same way that attention goes into
    designing tool interfaces for humans. The team tested their tool specs
    across a wide variety of agentic tasks to uncover ways the model might
    misunderstand them, then rewrote the descriptions to preempt those problems.
    The Bash tool's schema is trivial (one `command` parameter), but its
    description is a multi-bullet guide that warns about internet access, output
    size, long-running commands, and persistent state.


    The edit tool's description explicitly calls out whitespace sensitivity in
    `old_str`, the uniqueness requirement for replacements, and the behavior of
    each sub-command. These aren't cosmetic — they're targeted fixes for
    specific failure modes the team observed during evaluation.


    Takeaway for agent builders: treat each tool description as a mini-UX
    document that will be read by every invocation. Test with real agent traces,
    find where the model gets confused, and patch the description. Don't let a
    good model flounder because you wrote a lazy JSON Schema.
stance: >-
  Tool descriptions and specs deserve iterative UX design; vague or ambiguous
  tool specs silently degrade agent performance.
related:
  - INS-260626-475E
  - INS-260602-EA48
  - INS-260627-E230
  - INS-260627-A0EE
  - PRI-260403-5B3D
  - INS-260410-1A22
  - INS-260605-92FF
  - INS-260626-9A47
  - INS-260627-4253
  - INS-260628-2CF1
---
The post explicitly argues that much more attention should go into designing tool interfaces for models, in the same way that attention goes into designing tool interfaces for humans. The team tested their tool specs across a wide variety of agentic tasks to uncover ways the model might misunderstand them, then rewrote the descriptions to preempt those problems. The Bash tool's schema is trivial (one `command` parameter), but its description is a multi-bullet guide that warns about internet access, output size, long-running commands, and persistent state.

The edit tool's description explicitly calls out whitespace sensitivity in `old_str`, the uniqueness requirement for replacements, and the behavior of each sub-command. These aren't cosmetic — they're targeted fixes for specific failure modes the team observed during evaluation.

Takeaway for agent builders: treat each tool description as a mini-UX document that will be read by every invocation. Test with real agent traces, find where the model gets confused, and patch the description. Don't let a good model flounder because you wrote a lazy JSON Schema.

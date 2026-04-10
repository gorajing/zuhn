---
id: INS-260410-4067
domain: ai-development
topic: agents
title: Make safety classifiers reasoning-blind to resist manipulation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - classifier-design
  - prompt-injection
  - alignment
  - defense-in-depth
sources:
  - type: blog
    title: 'Claude Code auto mode: a safer way to skip permissions'
    url: 'https://www.anthropic.com/engineering/claude-code-auto-mode'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Strip assistant text and tool outputs from the classifier's view so it
    judges actions, not rationalizations.
  standard: >-
    Anthropic's transcript classifier deliberately sees only user messages and
    bare tool-call commands — no assistant prose, no tool results. Including
    assistant messages caused measurable drops on their overeagerness test set,
    because the agent's own framing ("this is safe because the user implicitly
    approved it earlier") leaks into the classifier's judgment. Shorter
    transcripts are also easier to read accurately.


    This generalizes to any 'agent monitoring agent' design: the watcher should
    evaluate ground-truth artifacts (actions, outputs, diffs) rather than
    explanations. Letting the subject narrate its intent to the judge creates an
    exploitable channel — the subject optimizes the narration rather than the
    behavior. A useful side effect is that reasoning-blind monitoring is
    orthogonal to chain-of-thought monitoring, so the two compound rather than
    overlap.
stance: >-
  A safety classifier should judge the agent's actions, not the agent's
  explanations, because exposing it to assistant reasoning lets the agent
  rationalize its way past the guardrail.
related:
  - INS-260409-04C8
  - INS-260410-095B
  - INS-260403-BA81
  - INS-260405-F26B
  - INS-260327-35C7
---
Anthropic's transcript classifier deliberately sees only user messages and bare tool-call commands — no assistant prose, no tool results. Including assistant messages caused measurable drops on their overeagerness test set, because the agent's own framing ("this is safe because the user implicitly approved it earlier") leaks into the classifier's judgment. Shorter transcripts are also easier to read accurately.

This generalizes to any 'agent monitoring agent' design: the watcher should evaluate ground-truth artifacts (actions, outputs, diffs) rather than explanations. Letting the subject narrate its intent to the judge creates an exploitable channel — the subject optimizes the narration rather than the behavior. A useful side effect is that reasoning-blind monitoring is orthogonal to chain-of-thought monitoring, so the two compound rather than overlap.

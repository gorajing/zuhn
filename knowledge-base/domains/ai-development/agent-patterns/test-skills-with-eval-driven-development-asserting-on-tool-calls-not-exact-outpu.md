---
id: INS-260605-D3C7
domain: ai-development
topic: agent-patterns
title: >-
  Test skills with eval-driven development, asserting on tool calls not exact
  output
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - testing
  - eval-driven-development
  - skills
sources:
  - type: youtube
    title: >-
      Skill Issue: How We Used AI to Make Agents Actually Good at Supabase —
      Pedro Rodrigues, Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GmAQKINjv1E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Define metrics first, write the skill, then run with-skill vs without-skill
    conditions in a headless agent; assert on whether the expected tool was
    called or use an LLM-as-judge, knowing the judge itself can hallucinate.
  standard: >-
    Skills are just markdown, but you test them like code with an extra
    LLM-in-the-loop, so testing means evals: input, expected output, and — most
    usefully — assertions on the steps, reasoning, and tools the agent called,
    since asserting on exact final text is brittle under non-determinism. Pedro
    follows the OpenAI 'systematically evaluate agent skills' eval-driven loop:
    define what 'good' means, write the skill, run evaluations (or test
    manually), grade, iterate. The Agent Skills Open Standard proposes a simple
    local eval.json — an array of scenarios each with a prompt, expected output
    (only if using an LLM judge), and assertions.


    Two hard-won cautions surfaced live. First, the genuinely hard part is
    authoring representative scenarios that cover the real use cases — you must
    already know the expected behavior. Second, evals are 'just code' and
    inherit code's failure mode: his demo's grader reported the skill failing
    and the no-skill run passing, not because the system was wrong but because
    he asserted on the wrong thing (inspecting the view directly instead of the
    meta-schema for security_invoker). Deterministic assertions (was tool X
    called?) are easier to trust than handing outputs to an LLM judge that can
    hallucinate. The minimal viable pipeline: two conditions (with/without
    skill) run headless, outputs compared — enough to catch regressions when you
    change one checklist item.
stance: >-
  Skills should be developed eval-first, with the hard work being scenario
  design and assertions on agent behavior rather than on non-deterministic final
  text.
related:
  - INS-260404-1C9D
  - INS-260627-9981
  - PRI-260405-2DE5
  - INS-260605-BDFF
  - INS-260628-9D66
  - INS-260625-3162
  - INS-260627-21FF
---
Skills are just markdown, but you test them like code with an extra LLM-in-the-loop, so testing means evals: input, expected output, and — most usefully — assertions on the steps, reasoning, and tools the agent called, since asserting on exact final text is brittle under non-determinism. Pedro follows the OpenAI 'systematically evaluate agent skills' eval-driven loop: define what 'good' means, write the skill, run evaluations (or test manually), grade, iterate. The Agent Skills Open Standard proposes a simple local eval.json — an array of scenarios each with a prompt, expected output (only if using an LLM judge), and assertions.

Two hard-won cautions surfaced live. First, the genuinely hard part is authoring representative scenarios that cover the real use cases — you must already know the expected behavior. Second, evals are 'just code' and inherit code's failure mode: his demo's grader reported the skill failing and the no-skill run passing, not because the system was wrong but because he asserted on the wrong thing (inspecting the view directly instead of the meta-schema for security_invoker). Deterministic assertions (was tool X called?) are easier to trust than handing outputs to an LLM judge that can hallucinate. The minimal viable pipeline: two conditions (with/without skill) run headless, outputs compared — enough to catch regressions when you change one checklist item.

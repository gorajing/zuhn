---
id: INS-260605-BDFF
domain: ai-development
topic: system-design
title: Treat a markdown skill as a testable artifact and validate it with agent evals
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - testing
  - skills
  - ci
  - agent-evaluation
sources:
  - type: youtube
    title: >-
      Combine Skills and MCP to Close the Context Gap — Pedro Rodrigues,
      Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JT3OzDKrucU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A skill is a markdown file you can now unit-test by running evals that score
    the agent's behavior, tool calls, and reasoning across scenarios.
  standard: >-
    Supabase tested their skill the way you'd test code: evals. Instead of
    evaluating code, evals evaluate an agent's behavior — which tools it calls,
    its reasoning, and a graded completeness score. They built six
    Supabase-specific scenarios (ongoing projects in varied states), ran them
    across four agents from two vendors in three conditions (baseline, MCP-only,
    MCP+skill), and scored on Braintrust.


    The shift is conceptual: you are now testing a document. Pedro notes this
    would have seemed bonkers years ago — running CI-style tests over a markdown
    file. But it is the only rigorous way to know whether a skill edit improved
    or regressed agent behavior, because skill effects are non-deterministic and
    model-dependent. Without an eval harness, skill authoring is guesswork; with
    one, you get the same change-detection signal that unit tests give code. The
    corollary is that anyone shipping product skills needs a scenario suite and
    a scoring rubric, not just a well-written document.
stance: >-
  Skill documents should be regression-tested with evals the same way code is
  tested in CI.
related:
  - INS-260320-A4BF
  - INS-260320-8DBD
  - INS-260410-0FC1
  - INS-260605-6444
  - INS-260605-B6BC
  - INS-260605-D3C7
  - INS-260605-5B0A
  - INS-260605-02FB
  - INS-260605-6722
  - INS-260605-9276
---
Supabase tested their skill the way you'd test code: evals. Instead of evaluating code, evals evaluate an agent's behavior — which tools it calls, its reasoning, and a graded completeness score. They built six Supabase-specific scenarios (ongoing projects in varied states), ran them across four agents from two vendors in three conditions (baseline, MCP-only, MCP+skill), and scored on Braintrust.

The shift is conceptual: you are now testing a document. Pedro notes this would have seemed bonkers years ago — running CI-style tests over a markdown file. But it is the only rigorous way to know whether a skill edit improved or regressed agent behavior, because skill effects are non-deterministic and model-dependent. Without an eval harness, skill authoring is guesswork; with one, you get the same change-detection signal that unit tests give code. The corollary is that anyone shipping product skills needs a scenario suite and a scoring rubric, not just a well-written document.

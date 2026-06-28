---
id: INS-260627-2DE7
domain: ai-development
topic: architecture
title: 'Put LLMs in the offline codegen path, not the latency-critical hot path'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-architecture
  - system-design
  - latency
  - code-generation
  - pipeline-design
sources:
  - type: youtube
    title: 'Compilers in the Age of LLMs — Yusuf Olokoba, Muna'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=q2nHsJVy4FE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An LLM tracer hit ~100% accuracy but was too slow for the runtime path, so
    it was replaced with deterministic AST analysis — while LLMs were retained
    to mass-produce operation translations offline.
  standard: >-
    The team first tried using LLM structured outputs to trace Python functions
    into a graph. Accuracy was nearly 100% in testing, but it was simply too
    slow to sit on the path users wait on, so they replaced it with old-school
    deterministic AST parsing plus heuristics. Yet they did not abandon LLMs —
    they moved them to where the economics flip: offline, they have LLMs
    generate the equivalent native C++/Rust code for each elementary Python
    operation, mass-producing translations they would otherwise have had to
    hand-write.


    The transferable principle is a placement rule for probabilistic components
    in any system: an LLM's high accuracy can be worthless on a hot path if its
    latency violates the user's responsiveness budget, but that same accuracy is
    decisive in a build/compile step where you can spend seconds or minutes and
    amortize the cost forever. Diagnose each LLM use by which budget binds —
    latency or correctness-at-scale — and route accordingly. Crucially, the
    LLM-generated code is not trusted blindly: it is fenced with verification
    and LLM-powered testing, the safety harness that makes offline generation
    usable as production output.
stance: >-
  LLMs belong where their accuracy is high and latency is tolerable (offline
  code generation), not on the runtime hot path where speed dominates.
related:
  - INS-260330-EEBD
  - INS-260605-58DA
  - INS-260626-32B6
  - INS-260605-C0BF
  - INS-260605-365A
---
The team first tried using LLM structured outputs to trace Python functions into a graph. Accuracy was nearly 100% in testing, but it was simply too slow to sit on the path users wait on, so they replaced it with old-school deterministic AST parsing plus heuristics. Yet they did not abandon LLMs — they moved them to where the economics flip: offline, they have LLMs generate the equivalent native C++/Rust code for each elementary Python operation, mass-producing translations they would otherwise have had to hand-write.

The transferable principle is a placement rule for probabilistic components in any system: an LLM's high accuracy can be worthless on a hot path if its latency violates the user's responsiveness budget, but that same accuracy is decisive in a build/compile step where you can spend seconds or minutes and amortize the cost forever. Diagnose each LLM use by which budget binds — latency or correctness-at-scale — and route accordingly. Crucially, the LLM-generated code is not trusted blindly: it is fenced with verification and LLM-powered testing, the safety harness that makes offline generation usable as production output.

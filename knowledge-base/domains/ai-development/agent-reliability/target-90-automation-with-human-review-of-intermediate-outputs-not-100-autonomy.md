---
id: INS-260627-D35C
domain: ai-development
topic: agent-reliability
title: >-
  Target 90% automation with human review of intermediate outputs, not 100%
  autonomy
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - agent-orchestration
  - partial-completion
  - review
  - automation-strategy
sources:
  - type: youtube
    title: >-
      Automating Large Scale Refactors with Parallel Agents - Robert Brennan,
      OpenHands
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rcsliSIy_YU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Aim for ~90% automation with human review of each agent's intermediate
    output; partial completion (90-95% solved) still delivers an
    order-of-magnitude lift.
  standard: >-
    Brennan repeatedly pushes back on the instinct to fully automate. The stated
    goal is 'something like 90% automation' — and he frames that as still an
    order-of-magnitude productivity gain, so the marginal cost of closing the
    last 10% is rarely worth it. Crucially, the human-in-the-loop is not just a
    final gate on the collated result; you must review the intermediate output
    of each individual agent. The reason orchestrated tasks resist full
    automation is partly technical (limited context, the 'laziness problem'
    where an agent migrates 3 of 100 services and quits, compounding errors,
    missing domain intuition) and partly human (the engineer holds a mental
    model of how a migration should go that they cannot fully convey, and there
    is no crisp definition of 'done').


    A corollary is that partial completion has standalone value. In the
    CVE-remediation pattern, running a separate agent per vulnerability means
    that if one agent gets stuck on an unsolvable vuln, every other agent's PR
    still lands. Getting to 90-95% solved is a win in its own right; you do not
    need to reach 100% to capture most of the value. This is the opposite of how
    a single monolithic script behaves, where one failure can block everything.


    The design principle that falls out: structure orchestration so that (a)
    human review points exist at the granularity of individual agent outputs,
    and (b) the system degrades gracefully — independent units fail
    independently. Every fixer should produce a 'nice tidy pull request ready
    for human approval' with a clear summary of what changed and why, so review
    is fast. Automation that hides intermediate state and only surfaces a final
    mega-result removes exactly the checkpoints that make the remaining 10% of
    human judgment efficient.
stance: >-
  The right automation target for orchestrated agent work is ~90% with humans
  reviewing each agent's intermediate output, because partial completion still
  delivers order-of-magnitude value and chasing 100% is where quality collapses.
related:
  - PRI-260328-F723
  - INS-260413-AD37
  - INS-260627-D9CE
  - INS-260627-6C1E
  - INS-260627-BBD1
---
Brennan repeatedly pushes back on the instinct to fully automate. The stated goal is 'something like 90% automation' — and he frames that as still an order-of-magnitude productivity gain, so the marginal cost of closing the last 10% is rarely worth it. Crucially, the human-in-the-loop is not just a final gate on the collated result; you must review the intermediate output of each individual agent. The reason orchestrated tasks resist full automation is partly technical (limited context, the 'laziness problem' where an agent migrates 3 of 100 services and quits, compounding errors, missing domain intuition) and partly human (the engineer holds a mental model of how a migration should go that they cannot fully convey, and there is no crisp definition of 'done').

A corollary is that partial completion has standalone value. In the CVE-remediation pattern, running a separate agent per vulnerability means that if one agent gets stuck on an unsolvable vuln, every other agent's PR still lands. Getting to 90-95% solved is a win in its own right; you do not need to reach 100% to capture most of the value. This is the opposite of how a single monolithic script behaves, where one failure can block everything.

The design principle that falls out: structure orchestration so that (a) human review points exist at the granularity of individual agent outputs, and (b) the system degrades gracefully — independent units fail independently. Every fixer should produce a 'nice tidy pull request ready for human approval' with a clear summary of what changed and why, so review is fast. Automation that hides intermediate state and only surfaces a final mega-result removes exactly the checkpoints that make the remaining 10% of human judgment efficient.

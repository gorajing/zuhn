---
id: INS-260627-0444
domain: ai-development
topic: agent-reliability
title: >-
  AI reliability must approach 95-99% before it saves time, because verification
  is costly
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reliability
  - verification-cost
  - human-in-the-loop
  - agent-reliability
  - automation-economics
sources:
  - type: youtube
    title: 'Why Agent Hype can fall short of reality – Joel Becker, METR'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RhfqQKe22ZA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Below ~95-99% reliability, the cost of checking and fixing AI output exceeds
    the time the AI saves, producing a net slowdown.
  standard: >-
    A central explanation for the productivity paradox is the asymmetric cost of
    verification. If an AI is correct only 50-80% of the time, the human must
    inspect every output and frequently correct it. For an expert who already
    knows the solution and is 'limited by how fast they can type,' the overhead
    of instructing the AI, reading its output, and repairing its mistakes
    exceeds the typing time it would have saved.


    This implies a sharp, nonlinear reliability threshold rather than smooth
    gains: Becker estimates developers need ~95-99% correctness to 'tab tab tab
    through' without expensive verification. The principle generalizes beyond
    coding to any automation where errors are costly to detect or repair—the
    value of an unreliable autonomous worker is gated not by its average
    competence but by the marginal cost of catching its failures. This reframes
    'is the AI good enough?' as 'is it reliable enough that I can stop
    checking?'
stance: >-
  AI assistance only yields net time savings once reliability is high enough
  that the human can stop verifying and correcting its output.
related:
  - INS-260329-33AA
  - INS-260626-18F5
  - INS-260402-3C79
  - INS-260625-8DF3
  - INS-260329-3739
  - INS-260625-0CAB
---
A central explanation for the productivity paradox is the asymmetric cost of verification. If an AI is correct only 50-80% of the time, the human must inspect every output and frequently correct it. For an expert who already knows the solution and is 'limited by how fast they can type,' the overhead of instructing the AI, reading its output, and repairing its mistakes exceeds the typing time it would have saved.

This implies a sharp, nonlinear reliability threshold rather than smooth gains: Becker estimates developers need ~95-99% correctness to 'tab tab tab through' without expensive verification. The principle generalizes beyond coding to any automation where errors are costly to detect or repair—the value of an unreliable autonomous worker is gated not by its average competence but by the marginal cost of catching its failures. This reframes 'is the AI good enough?' as 'is it reliable enough that I can stop checking?'

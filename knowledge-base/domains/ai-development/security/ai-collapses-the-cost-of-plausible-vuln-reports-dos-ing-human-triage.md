---
id: INS-260627-109F
domain: ai-development
topic: security
title: 'AI collapses the cost of plausible vuln reports, DoS-ing human triage'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification-asymmetry
  - open-source-maintenance
  - ai-slop
  - security
  - bus-factor
sources:
  - type: youtube
    title: State of the Claw — Peter Steinberger
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zgNvts_2TUE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When AI makes producing plausible work cheap but verifying it stays
    expensive and human, the bottleneck — and the attack surface — shifts
    entirely to the reviewer.
  standard: >-
    OpenClaw received 1,142 security advisories (~16.6/day, 99 critical) —
    roughly twice the rate of the Linux kernel and twice curl's all-time total —
    and most are AI-generated 'slop.' Steinberger's heuristic captures the
    asymmetry: 'the higher they're screaming how critical they are, the more
    likely it's slop,' and a report that is unusually polite or apologetic is
    'very likely AI, because people in security don't apologize.' The structural
    problem is that an agent can generate a confident, well-formatted report in
    seconds, but a human must still 'use your brain to actually read it' because
    you can't yet fully trust an agent to triage — so the cost of attack/noise
    collapses while the cost of verification stays fixed and human. 


    This is a general principle, not a security curiosity: anywhere AI cheaply
    produces plausible artifacts (PRs, security reports, content, applications)
    and a human must verify each, the maintainer becomes the DoS target.
    Steinberger notes this is now hitting many open-source projects (ffmpeg is
    public about it), and that rushing fixes to clear the queue 'will very
    certainly break your product.' His actual solution was not better filtering
    but more reviewer capacity — full-time engineers from companies like Nvidia
    working through the slop. The transferable lesson: in an AI-saturated
    pipeline, invest in verification throughput and trust-scoring of sources,
    because raw filtering can't keep up with generation.
stance: >-
  AI has made generating plausible-looking vulnerability reports nearly free
  while verification stays human-bound, imposing an asymmetric triage burden
  that can crush open-source maintainers.
related:
  - INS-260322-F891
  - PRI-260321-14D8
  - PRI-260406-9780
  - INS-260330-E282
  - INS-260410-5740
  - PRI-260406-72B3
  - INS-260627-C628
---
OpenClaw received 1,142 security advisories (~16.6/day, 99 critical) — roughly twice the rate of the Linux kernel and twice curl's all-time total — and most are AI-generated 'slop.' Steinberger's heuristic captures the asymmetry: 'the higher they're screaming how critical they are, the more likely it's slop,' and a report that is unusually polite or apologetic is 'very likely AI, because people in security don't apologize.' The structural problem is that an agent can generate a confident, well-formatted report in seconds, but a human must still 'use your brain to actually read it' because you can't yet fully trust an agent to triage — so the cost of attack/noise collapses while the cost of verification stays fixed and human. 

This is a general principle, not a security curiosity: anywhere AI cheaply produces plausible artifacts (PRs, security reports, content, applications) and a human must verify each, the maintainer becomes the DoS target. Steinberger notes this is now hitting many open-source projects (ffmpeg is public about it), and that rushing fixes to clear the queue 'will very certainly break your product.' His actual solution was not better filtering but more reviewer capacity — full-time engineers from companies like Nvidia working through the slop. The transferable lesson: in an AI-saturated pipeline, invest in verification throughput and trust-scoring of sources, because raw filtering can't keep up with generation.

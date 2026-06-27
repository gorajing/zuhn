---
id: INS-260627-E3EC
domain: ai-development
topic: agent-patterns
title: 'Modularity: humans design the boundaries, AI fills the interior'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - modularity
  - human-ai-collaboration
  - code-maps
  - sub-agents
  - context-rot
sources:
  - type: youtube
    title: No More Slop – swyx
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IoiHI7p12Ao'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Greg Brockman's modularity principle — humans set clear boundaries on what
    is human-designed and let AI code everything in between — is swyx's frame
    for keeping AI-scale code from degenerating into slop.
  standard: >-
    swyx closes by collecting the techniques that let teams scale AI-generated
    code without it collapsing into slop, all unified by Greg Brockman's
    principle of modularity: keep clear boundaries on what is human-designed and
    let the AI code everything in between. The human's scarce judgment goes into
    interface and boundary design — the load-bearing decisions — while the
    commoditized interior is delegated to the machine.


    The supporting toolkit follows the same logic. A 'semi-sync valley of death'
    keeps human attention mind-melded with the machine on the hardest problems
    while pushing commoditized work async. Code maps use AI to scale codebase
    understanding so humans can hold the boundaries in their heads. Sub-agents
    fight 'context rot' by isolating concerns. Computer use lets agents operate
    complex apps (even an IDE) autonomously within those boundaries. The
    throughline: amplify human taste at the boundaries, automate the interior —
    rather than letting AI generate unbounded volume everywhere.
stance: >-
  The durable human/AI division of labor is for humans to define clear module
  boundaries and let AI code everything in between.
related:
  - INS-260329-A93C
  - PRI-260403-9E80
  - INS-260524-63C9
  - PRI-260405-A11F
  - PRI-260405-2A95
  - INS-260603-6B3D
---
swyx closes by collecting the techniques that let teams scale AI-generated code without it collapsing into slop, all unified by Greg Brockman's principle of modularity: keep clear boundaries on what is human-designed and let the AI code everything in between. The human's scarce judgment goes into interface and boundary design — the load-bearing decisions — while the commoditized interior is delegated to the machine.

The supporting toolkit follows the same logic. A 'semi-sync valley of death' keeps human attention mind-melded with the machine on the hardest problems while pushing commoditized work async. Code maps use AI to scale codebase understanding so humans can hold the boundaries in their heads. Sub-agents fight 'context rot' by isolating concerns. Computer use lets agents operate complex apps (even an IDE) autonomously within those boundaries. The throughline: amplify human taste at the boundaries, automate the interior — rather than letting AI generate unbounded volume everywhere.

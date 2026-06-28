---
id: INS-260605-205E
domain: ai-development
topic: claude-code
title: >-
  Put must-not-miss information directly in skill.md because agents lazily skip
  reference files
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - progressive-disclosure
  - skill-authoring
  - reference-files
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
    If a skill detail can be skipped, the agent will skip it — so anything that
    defines your product or its safety belongs inline in skill.md, not in a
    reference file.
  standard: >-
    Supabase found that even after an agent loads a skill, it is lazy about
    loading the skill's bundled reference files. Loading even one reference file
    is unreliable; loading two is nearly impossible, and three or four
    essentially never happens — because fetching/tool-calling is expensive,
    agents default to their training data and minimal context. Their security
    checklist initially lived in a reference file and was routinely missed, so
    they moved it into skill.md itself.


    The practical rule for skill authoring: be ruthlessly critical about what
    goes in skill.md from the start. Information that is unlikely to change AND
    that the agent absolutely cannot miss (security invariants, product-defining
    behavior) goes inline. Reserve reference files only for large, optional, or
    branch-specific detail where a miss is tolerable. Progressive disclosure is
    real, but you cannot rely on the agent to traverse it for anything
    load-bearing.
stance: >-
  Critical guidance an agent cannot afford to miss must live in the main
  skill.md file, never in a bundled reference file.
related:
  - INS-260605-C86D
  - INS-260627-A19B
  - INS-260605-6591
  - INS-260605-9276
  - INS-260605-46B2
  - INS-260626-8308
---
Supabase found that even after an agent loads a skill, it is lazy about loading the skill's bundled reference files. Loading even one reference file is unreliable; loading two is nearly impossible, and three or four essentially never happens — because fetching/tool-calling is expensive, agents default to their training data and minimal context. Their security checklist initially lived in a reference file and was routinely missed, so they moved it into skill.md itself.

The practical rule for skill authoring: be ruthlessly critical about what goes in skill.md from the start. Information that is unlikely to change AND that the agent absolutely cannot miss (security invariants, product-defining behavior) goes inline. Reserve reference files only for large, optional, or branch-specific detail where a miss is tolerable. Progressive disclosure is real, but you cannot rely on the agent to traverse it for anything load-bearing.

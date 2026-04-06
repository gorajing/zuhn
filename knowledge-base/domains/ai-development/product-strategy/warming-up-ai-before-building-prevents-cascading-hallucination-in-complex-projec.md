---
id: INS-260329-8DC5
domain: ai-development
topic: product-strategy
title: >-
  Warming up AI before building prevents cascading hallucination in complex
  projects
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - ai-coding
  - prompting-strategy
  - context-priming
  - hallucination-prevention
sources:
  - type: youtube
    title: 'Figma To App Store In 37 Minutes With AI [Tutorial]'
    author: Starter Story Build
    url: 'https://youtube.com/watch?v=adVJ0DBNOAw'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Brief the AI on the full project scope in chat mode before letting it write
    any code to prevent it from building with incomplete context.
  standard: >-
    Ross uses Windsurf's chat mode to share all Figma screenshots and describe
    the entire app before switching to write mode for any screen. He explicitly
    says 'if I said go do it now, there's a million ways it could have gone and
    then we're spending the next couple hours just telling it undo that.' This
    'warm-up' pattern treats the AI like a new team member who needs a project
    briefing before writing their first line of code. The non-obvious part is
    that the warm-up is not about prompt quality — it's about filling the AI's
    context window with constraints that narrow the solution space. Each piece
    of context eliminates possible interpretations, so when the AI finally
    writes code, it has fewer wrong paths to take.
stance: >-
  Giving an AI code editor full project context in chat mode before switching to
  write mode prevents the cascading hallucinations that occur when AI starts
  building with incomplete understanding.
related:
  - INS-260321-E9B7
  - INS-260329-EAFD
  - INS-260329-3D28
  - INS-260329-9BEF
  - INS-260329-693E
evidence:
  - id: INS-260329-693E
    type: CHALLENGES
    classified_at: '2026-04-02'
---
Ross uses Windsurf's chat mode to share all Figma screenshots and describe the entire app before switching to write mode for any screen. He explicitly says 'if I said go do it now, there's a million ways it could have gone and then we're spending the next couple hours just telling it undo that.' This 'warm-up' pattern treats the AI like a new team member who needs a project briefing before writing their first line of code. The non-obvious part is that the warm-up is not about prompt quality — it's about filling the AI's context window with constraints that narrow the solution space. Each piece of context eliminates possible interpretations, so when the AI finally writes code, it has fewer wrong paths to take.

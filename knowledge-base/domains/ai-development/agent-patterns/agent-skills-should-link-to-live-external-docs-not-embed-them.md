---
id: INS-260626-DD33
domain: ai-development
topic: agent-patterns
title: 'Agent skills should link to live external docs, not embed them'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-skills
  - documentation
  - knowledge-cutoff
  - tool-use
  - maintainability
sources:
  - type: youtube
    title: >-
      Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cVzf49yg0D8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skills should carry high-level orientation plus a link to markdown docs the
    agent web-fetches, so capabilities update centrally instead of forcing every
    user to redistribute the skill.
  standard: >-
    The team deliberately did NOT stuff full API documentation into their
    coding-agent skill. Instead the skill holds two things: durable orientation
    the model can't infer (e.g., which Gemini models actually exist, so the
    agent stops defaulting to the long-deprecated Gemini 1.5) and a link to the
    always-current markdown documentation. When a new feature ships (like tool
    combination), only the central docs change — every installed skill picks it
    up via a web-fetch or read-file call, with no redistribution.


    The striking proof: Gemini 3 Flash was trained before the Interactions API
    existed, yet wrote correct code against it — entirely from the skill plus
    fetched docs, not from training data. This decouples agent capability from
    the model's knowledge cutoff. Embedding docs in the skill would have
    recreated the cutoff problem one level up: stale skills that every user must
    manually update.


    The design heuristic for what belongs in a skill at all: encode only what
    the model can't do reliably on its own, or genuinely personal workflow
    preferences (e.g., 'always run tests with bun'). Anything the model already
    does well, or anything that changes frequently, should live behind a link
    the agent retrieves on demand. Fetch cost is comparable to a local file read
    and works well in practice.
stance: >-
  Agent skills are more durable and maintainable when they link to live external
  documentation rather than embedding it.
related:
  - INS-260329-F0DE
  - INS-260409-A3EC
  - INS-260409-51B2
  - INS-260605-D041
  - INS-260627-E34D
  - INS-260327-63B5
  - INS-260605-9276
  - INS-260626-ACD0
  - INS-260627-A19B
---
The team deliberately did NOT stuff full API documentation into their coding-agent skill. Instead the skill holds two things: durable orientation the model can't infer (e.g., which Gemini models actually exist, so the agent stops defaulting to the long-deprecated Gemini 1.5) and a link to the always-current markdown documentation. When a new feature ships (like tool combination), only the central docs change — every installed skill picks it up via a web-fetch or read-file call, with no redistribution.

The striking proof: Gemini 3 Flash was trained before the Interactions API existed, yet wrote correct code against it — entirely from the skill plus fetched docs, not from training data. This decouples agent capability from the model's knowledge cutoff. Embedding docs in the skill would have recreated the cutoff problem one level up: stale skills that every user must manually update.

The design heuristic for what belongs in a skill at all: encode only what the model can't do reliably on its own, or genuinely personal workflow preferences (e.g., 'always run tests with bun'). Anything the model already does well, or anything that changes frequently, should live behind a link the agent retrieves on demand. Fetch cost is comparable to a local file read and works well in practice.

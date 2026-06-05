---
id: INS-260514-283E
domain: ai-development
topic: system-design
title: >-
  Progressive context loading: nested AGENTS.md + skill front-matter as
  context-window discipline
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - progressive-loading
  - context-discipline
  - nested-agents-md
  - skill-frontmatter
  - context-economy
sources:
  - type: youtube
    title: Codex 마스터 클래스 라이브 | 하네스 설계부터 서비스 배포까지 (라이브 마지막에는 작은 이벤트도 준비했습니다)
    author: 개발동생
    url: 'https://www.youtube.com/live/F5pr-hfyuEE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Architect harness for PROGRESSIVE loading: root agent.md always,
    folder-level only when in that folder, skill front-matter always but body
    only on invocation. Eager loading exhausts context before useful work
    begins.
  standard: >-
    Manu's prescription for context-window discipline: (1) Use nested AGENTS.md.
    If you place AGENTS.md at the root of the repository, it always loads. If
    you place AGENTS.md in a sub-folder (a domain, a service, a feature), it
    only loads when the agent works inside that folder. 'It does not consume all
    the context every time; instead, it only reads the context when the Codex
    works with that folder.' This means project-specific knowledge (database
    schema details, domain conventions, internal API quirks) can live close to
    the code it applies to, loaded only when relevant. (2) Use skill
    front-matter for progressive loading. A skill folder contains skill.md (with
    front-matter declaring name + description), plus references, scripts,
    sub-agents, etc. The front-matter is what loads by default — the agent knows
    the skill exists and what it does. The full skill body only loads when the
    agent decides to invoke this specific skill. 'You use very little context
    initially, and you can utilize it by progressively loading the skill as
    needed.' Why this matters: harnesses grow over time. A team might have 50+
    skills, 20+ project-specific agent.md files, multiple MCP integrations. If
    everything loads on every session, you exhaust the context window before any
    user prompt is processed. Progressive loading keeps the marginal cost of
    adding new skills near zero. The general principle for any
    context-window-constrained system: structure knowledge so retrieval is lazy.
    Index by metadata (front-matter, file paths, descriptions), load full
    content only on demand. This is the same architectural pattern as: (a)
    database indexes (load index, lazy-load row data), (b) lazy-loaded modules
    in software (import only what you use), (c) Manuel Corpas's M5 LLM Wiki
    (markdown summaries indexed, raw notes only loaded for the specific entity),
    (d) any retrieval-augmented generation system (vector index loads first,
    source documents load on retrieval). The implication for harness builders:
    design your knowledge organization for the worst-case skill count (500+
    skills), not the current count (10-20). Eager-loading patterns that work at
    10 skills will explode catastrophically at 100. Lazy/progressive patterns
    scale to arbitrary skill counts.
stance: >-
  The right architecture for harness context is PROGRESSIVE loading — root
  agent.md is always loaded (small, universal rules), folder-level agent.md is
  loaded only when working in that folder (project-specific context), skill
  front-matter (name + description) is the only part of a skill loaded by
  default, with the full skill body + references + scripts loaded just-in-time
  when the skill is invoked; this is the only sustainable approach as harnesses
  grow because eager loading exhausts the context window before useful work
  begins.
related:
  - INS-260410-38C8
  - INS-260410-796F
  - INS-260410-8ECF
  - INS-260410-EE37
  - INS-260514-4FDC
  - INS-260524-2C7C
  - PRI-260426-890F
  - INS-260514-5914
  - INS-260410-53C2
---
Manu's prescription for context-window discipline: (1) Use nested AGENTS.md. If you place AGENTS.md at the root of the repository, it always loads. If you place AGENTS.md in a sub-folder (a domain, a service, a feature), it only loads when the agent works inside that folder. 'It does not consume all the context every time; instead, it only reads the context when the Codex works with that folder.' This means project-specific knowledge (database schema details, domain conventions, internal API quirks) can live close to the code it applies to, loaded only when relevant. (2) Use skill front-matter for progressive loading. A skill folder contains skill.md (with front-matter declaring name + description), plus references, scripts, sub-agents, etc. The front-matter is what loads by default — the agent knows the skill exists and what it does. The full skill body only loads when the agent decides to invoke this specific skill. 'You use very little context initially, and you can utilize it by progressively loading the skill as needed.' Why this matters: harnesses grow over time. A team might have 50+ skills, 20+ project-specific agent.md files, multiple MCP integrations. If everything loads on every session, you exhaust the context window before any user prompt is processed. Progressive loading keeps the marginal cost of adding new skills near zero. The general principle for any context-window-constrained system: structure knowledge so retrieval is lazy. Index by metadata (front-matter, file paths, descriptions), load full content only on demand. This is the same architectural pattern as: (a) database indexes (load index, lazy-load row data), (b) lazy-loaded modules in software (import only what you use), (c) Manuel Corpas's M5 LLM Wiki (markdown summaries indexed, raw notes only loaded for the specific entity), (d) any retrieval-augmented generation system (vector index loads first, source documents load on retrieval). The implication for harness builders: design your knowledge organization for the worst-case skill count (500+ skills), not the current count (10-20). Eager-loading patterns that work at 10 skills will explode catastrophically at 100. Lazy/progressive patterns scale to arbitrary skill counts.

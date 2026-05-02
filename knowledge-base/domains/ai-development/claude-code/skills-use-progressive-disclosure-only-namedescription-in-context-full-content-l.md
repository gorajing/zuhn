---
id: INS-260501-6453
domain: ai-development
topic: claude-code
title: >-
  Skills use progressive disclosure — only name+description in context, full
  content loaded on demand
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - progressive-disclosure
  - skill-format
  - context-economics
  - claude-skills
sources:
  - type: youtube
    title: How AI agents & Claude skills work (Clearly Explained)
    author: Greg Isenberg
    url: 'https://youtu.be/S_oN3vlzpMw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skills name + description = always in context. Skill body = loaded on
    demand. You can have 50 skills available without 50x the context cost.
  standard: >-
    The technical mechanism: when you create a skill.md file, the YAML
    frontmatter (name, description) is injected into the system prompt as
    available skills. The body of the skill (the actual instructions, examples,
    code snippets) is NOT injected. When the agent encounters a task, it scans
    the available skill names+descriptions and decides which (if any) is
    relevant. If yes, it loads the full skill content into context for that
    specific task. If no, no extra cost.


    The corollary: agent.md files are the opposite — content always in context,
    every turn, regardless of relevance. Skills are content sometimes in
    context, only when relevant. For projects with a lot of specialized
    workflows (Zuhn has 17), skills are dramatically more efficient than
    equivalent CLAUDE.md content. The architectural lesson: progressive
    disclosure is the right pattern for any large knowledge artifact the model
    might need access to (skills, MCP tools, retrieval-augmented documents).


    For builders: when designing agent capabilities, always ask 'can this be
    progressive disclosure?' If yes, do it. If no (true always-on context), be
    deliberate about the cost. For Zuhn editorially: this is the operational
    form of why skills > prompt-stuffing for long-term agent productivity.
stance: >-
  The killer feature of the Claude skills format is progressive disclosure: only
  the skill's name and one-line description live in context permanently; the
  full content (which can be hundreds of lines) loads only when the agent
  decides the skill is relevant — making it possible to give the agent access to
  dozens of skills without paying the context cost.
related:
  - INS-260327-5AFE
  - INS-260403-DAA9
  - PRI-260406-1AC6
  - PRI-260328-0BA6
  - INS-260403-F0AA
---
The technical mechanism: when you create a skill.md file, the YAML frontmatter (name, description) is injected into the system prompt as available skills. The body of the skill (the actual instructions, examples, code snippets) is NOT injected. When the agent encounters a task, it scans the available skill names+descriptions and decides which (if any) is relevant. If yes, it loads the full skill content into context for that specific task. If no, no extra cost.

The corollary: agent.md files are the opposite — content always in context, every turn, regardless of relevance. Skills are content sometimes in context, only when relevant. For projects with a lot of specialized workflows (Zuhn has 17), skills are dramatically more efficient than equivalent CLAUDE.md content. The architectural lesson: progressive disclosure is the right pattern for any large knowledge artifact the model might need access to (skills, MCP tools, retrieval-augmented documents).

For builders: when designing agent capabilities, always ask 'can this be progressive disclosure?' If yes, do it. If no (true always-on context), be deliberate about the cost. For Zuhn editorially: this is the operational form of why skills > prompt-stuffing for long-term agent productivity.

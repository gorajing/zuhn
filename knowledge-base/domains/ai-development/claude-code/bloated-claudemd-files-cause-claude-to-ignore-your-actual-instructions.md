---
id: INS-260410-6B30
domain: ai-development
topic: claude-code
title: Bloated CLAUDE.md files cause Claude to ignore your actual instructions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - claude-code
  - CLAUDE.md
  - prompt-engineering
  - context-management
sources:
  - type: blog
    title: Best Practices for Claude Code - Claude Code Docs
    url: 'https://www.anthropic.com/engineering/claude-code-best-practices'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat CLAUDE.md like code — prune ruthlessly, and if Claude keeps violating
    a rule, the file is probably too long, not too short.
  standard: >-
    CLAUDE.md is loaded every single session, so every line pays a recurring
    context tax. For each line, ask 'would removing this cause Claude to make
    mistakes?' If not, cut it. Include things Claude can't guess (bash commands,
    project-specific conventions, non-obvious gotchas); exclude things Claude
    already knows (standard language conventions, self-evident practices,
    file-by-file descriptions).


    The counterintuitive failure mode: if Claude repeatedly does something you
    have a rule against, the instinct is to add more emphasis. The real fix is
    usually to shorten the file so the existing rule stops getting drowned out.
    Domain-specific workflows should live in skills (loaded on demand), not in
    the always-on CLAUDE.md.
stance: >-
  CLAUDE.md rules get lost in noise when the file grows too long, so ruthless
  pruning is more effective than adding more rules.
related:
  - INS-260320-B210
  - INS-260320-F872
  - PRI-260403-9E80
  - INS-260329-3423
  - INS-260330-3B0B
---
CLAUDE.md is loaded every single session, so every line pays a recurring context tax. For each line, ask 'would removing this cause Claude to make mistakes?' If not, cut it. Include things Claude can't guess (bash commands, project-specific conventions, non-obvious gotchas); exclude things Claude already knows (standard language conventions, self-evident practices, file-by-file descriptions).

The counterintuitive failure mode: if Claude repeatedly does something you have a rule against, the instinct is to add more emphasis. The real fix is usually to shorten the file so the existing rule stops getting drowned out. Domain-specific workflows should live in skills (loaded on demand), not in the always-on CLAUDE.md.

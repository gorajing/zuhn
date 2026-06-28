---
id: INS-260627-A37B
domain: ai-development
topic: tooling
title: >-
  Storing agent task state as git-native markdown removes external
  infrastructure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - git-native
  - plaintext
  - local-first
  - developer-tools
sources:
  - type: youtube
    title: >-
      Backlog.md: Terminal Kanban Board for Managing Tasks with AI Agents — Alex
      Gavrilescu, Funstage
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMXKhhwiCIc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Persist tasks as markdown-with-frontmatter in the repo so you need no APIs,
    databases, or accounts, and get versioning, branch-sync, and sharing from
    git itself.
  standard: >-
    Backlog.md stores every task as a markdown file (YAML frontmatter for
    ID/title/labels, plus description and acceptance criteria sections)
    committed to your git repository. The consequence is that it requires no
    extra APIs, databases, or accounts — the repo is the entire backend. Sharing
    with a team, history, and access control are inherited from git rather than
    rebuilt.


    The subtle payoff is branch-aware synchronization: because tasks live in the
    repo, backlog can reconcile a task's status even when it was updated on
    another branch, so the board reflects work across branches instead of a
    single mutable database row. This is the local-first, plain-text philosophy
    applied to project management for agents: the data is human-readable,
    diffable, version-controlled, and works offline. For agent tooling
    specifically, it also means the agent reads and writes task state through
    the same filesystem and git primitives it already uses for code, with no
    separate integration to authenticate against.
stance: >-
  Keeping agent task state as plain markdown files in the git repo eliminates
  all external infrastructure and yields branch-aware sync and team sharing for
  free.
related:
  - INS-260410-A18B
  - INS-260605-9523
  - INS-260410-2C51
  - INS-260625-EF29
  - INS-260410-62E8
  - INS-260320-0D43
---
Backlog.md stores every task as a markdown file (YAML frontmatter for ID/title/labels, plus description and acceptance criteria sections) committed to your git repository. The consequence is that it requires no extra APIs, databases, or accounts — the repo is the entire backend. Sharing with a team, history, and access control are inherited from git rather than rebuilt.

The subtle payoff is branch-aware synchronization: because tasks live in the repo, backlog can reconcile a task's status even when it was updated on another branch, so the board reflects work across branches instead of a single mutable database row. This is the local-first, plain-text philosophy applied to project management for agents: the data is human-readable, diffable, version-controlled, and works offline. For agent tooling specifically, it also means the agent reads and writes task state through the same filesystem and git primitives it already uses for code, with no separate integration to authenticate against.

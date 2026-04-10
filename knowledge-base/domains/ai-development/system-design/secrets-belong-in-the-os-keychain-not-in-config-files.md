---
id: INS-260410-0C77
domain: ai-development
topic: system-design
title: 'Secrets belong in the OS keychain, not in config files'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - secrets
  - configuration
  - mcp
  - keychain
sources:
  - type: blog
    title: >-
      Claude Desktop Extensions: One-click MCP server installation for Claude
      Desktop
    url: 'https://www.anthropic.com/engineering/desktop-extensions'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Desktop Extensions declare user_config with a 'sensitive: true' flag, and
    Claude Desktop stores those values in the OS keychain rather than leaving
    them in JSON files.
  standard: >-
    The manifest lets extension developers declare user_config fields with types
    (string, directory, number) and a 'sensitive' boolean. When marked
    sensitive, Claude Desktop routes the value into the macOS/Windows keychain
    and only injects it at runtime via template literal substitution
    (${user_config.api_key}).


    This is the right default for two reasons. First, it removes a class of
    security incidents where users accidentally commit
    claude_desktop_config.json with live API keys to GitHub. Second, it makes
    the secure path the easy path — developers don't have to think about
    credential storage, they just mark the field sensitive.


    Any configuration system for agentic tools should follow this pattern: typed
    schema, required/optional declarations, and a dedicated 'sensitive' flag
    that routes to platform credential storage automatically.
stance: >-
  API keys and other sensitive config should be collected through a typed UI and
  stored in the OS keychain, never written to plaintext JSON.
related:
  - INS-260329-1277
  - INS-260329-67CB
  - INS-260329-3423
  - PRI-260403-9E80
  - INS-260329-2FB8
---
The manifest lets extension developers declare user_config fields with types (string, directory, number) and a 'sensitive' boolean. When marked sensitive, Claude Desktop routes the value into the macOS/Windows keychain and only injects it at runtime via template literal substitution (${user_config.api_key}).

This is the right default for two reasons. First, it removes a class of security incidents where users accidentally commit claude_desktop_config.json with live API keys to GitHub. Second, it makes the secure path the easy path — developers don't have to think about credential storage, they just mark the field sensitive.

Any configuration system for agentic tools should follow this pattern: typed schema, required/optional declarations, and a dedicated 'sensitive' flag that routes to platform credential storage automatically.

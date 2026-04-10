---
id: INS-260410-A18B
domain: ai-development
topic: system-building
title: Bundle the runtime to eliminate the 'works on my machine' tax
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - distribution
  - runtime
  - dependencies
  - packaging
  - ux
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
    Claude Desktop ships its own Node.js runtime so extensions never fail on
    'user doesn't have Node installed' or version mismatches.
  standard: >-
    The .mcpb format works partly because Claude Desktop embeds a Node.js
    runtime and bundles all node_modules into the extension archive. This
    sidesteps every version-skew, PATH, and dependency-conflict bug that plague
    'BYO runtime' installs.


    The traditional engineering instinct is to share runtimes to save disk
    space. But disk is cheap and user patience is not — every minute a user
    spends debugging 'node: command not found' is a minute closer to
    abandonment. Bundling trades tens of megabytes for near-zero install
    failures.


    This applies broadly: Electron apps, Python tools shipping as PyInstaller
    binaries, Go's static binaries, and Docker images all won by owning the
    runtime rather than depending on the host. When designing a distributable,
    default to bundling the runtime unless you have a hard size constraint.
stance: >-
  Shipping a runtime inside your distributable is a better UX than asking users
  to install it, even at the cost of binary size.
related:
  - INS-260330-3257
  - INS-260410-953E
  - INS-260329-8F98
  - INS-260320-4DE2
  - INS-260323-0539
  - INS-260403-D1D0
  - INS-260320-0D43
---
The .mcpb format works partly because Claude Desktop embeds a Node.js runtime and bundles all node_modules into the extension archive. This sidesteps every version-skew, PATH, and dependency-conflict bug that plague 'BYO runtime' installs.

The traditional engineering instinct is to share runtimes to save disk space. But disk is cheap and user patience is not — every minute a user spends debugging 'node: command not found' is a minute closer to abandonment. Bundling trades tens of megabytes for near-zero install failures.

This applies broadly: Electron apps, Python tools shipping as PyInstaller binaries, Go's static binaries, and Docker images all won by owning the runtime rather than depending on the host. When designing a distributable, default to bundling the runtime unless you have a hard size constraint.

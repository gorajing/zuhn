---
id: INS-260501-F258
domain: ai-development
topic: system-building
title: >-
  Treat AI as a user, not as software — the architectural shift collapses the
  integration problem
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-as-user
  - architectural-shift
  - agent-native-design
  - cli-first
sources:
  - type: youtube
    title: 'Box CEO: Why Big Companies Are Falling Behind on AI | a16z'
    author: a16z
    url: 'https://youtu.be/dvVbA9OcBqs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Stop fusing AI into your product. Make your product a tool the agent uses.
    The agent is just another user with a license.
  standard: >-
    Casado's diagnosis of where product companies got stuck: ~6 months ago,
    integrating AI meant adding a chat feature inside your product (the
    fusion/hybrid model). That hasn't worked — it's an awkward middle that fails
    to serve either humans or agents well. The architectural shift now
    happening: instead of fusing AI into the product, treat AI as a user. Make
    your product a CLI tool (or MCP, or clean API), and let the agent (Claude
    Code, Codex, custom) use it as a user would.


    The permissions corollary from Sinofsky: the agent literally is another
    license. It must have an identity tied to a person's permissions ('the agent
    is never going to have more permissions than the person who's getting it to
    do something'). If you let the agent use the principal's credentials, you've
    created a security disaster — and you've also broken the Salesforce-style
    SaaS pricing model. The agent gets its own seat at its own price.


    For builders: this means rebuilding your product around agent-callable
    surfaces (MCP servers, CLI tools, well-designed APIs) and around per-agent
    identity/permissions/auditing. Companies that treat this as a tactical
    addition will lose to companies that treat it as the primary mode of
    consumption. For Zuhn specifically, this is direct architectural validation
    — the choice to build Zuhn as a CLI + MCP server, with the human as one of
    many possible callers, is exactly this pattern.
stance: >-
  The hybrid 'AI features inside the product' approach has failed; the right
  architecture is to expose your product as a CLI/MCP/API and let agents use it
  as users, which simplifies both the product and the agent integration but
  requires giving up the chat-feature-inside-product paradigm.
related:
  - INS-260323-4B4D
  - INS-260402-3196
  - INS-260424-5759
  - INS-260626-35A9
  - INS-260605-C2A3
  - INS-260330-6611
---
Casado's diagnosis of where product companies got stuck: ~6 months ago, integrating AI meant adding a chat feature inside your product (the fusion/hybrid model). That hasn't worked — it's an awkward middle that fails to serve either humans or agents well. The architectural shift now happening: instead of fusing AI into the product, treat AI as a user. Make your product a CLI tool (or MCP, or clean API), and let the agent (Claude Code, Codex, custom) use it as a user would.

The permissions corollary from Sinofsky: the agent literally is another license. It must have an identity tied to a person's permissions ('the agent is never going to have more permissions than the person who's getting it to do something'). If you let the agent use the principal's credentials, you've created a security disaster — and you've also broken the Salesforce-style SaaS pricing model. The agent gets its own seat at its own price.

For builders: this means rebuilding your product around agent-callable surfaces (MCP servers, CLI tools, well-designed APIs) and around per-agent identity/permissions/auditing. Companies that treat this as a tactical addition will lose to companies that treat it as the primary mode of consumption. For Zuhn specifically, this is direct architectural validation — the choice to build Zuhn as a CLI + MCP server, with the human as one of many possible callers, is exactly this pattern.

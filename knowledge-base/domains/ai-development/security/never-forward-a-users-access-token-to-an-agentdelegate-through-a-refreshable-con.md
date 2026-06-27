---
id: INS-260627-30A2
domain: ai-development
topic: security
title: >-
  Never forward a user's access token to an agent—delegate through a refreshable
  connection
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - token-vault
  - refresh-tokens
  - delegation
  - autonomy
  - oauth
sources:
  - type: youtube
    title: 'Identity for AI Agents - Patrick Riley & Carlos Galan, Auth0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VSdV-AdSlis'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Forwarding the user's access token breaks agent autonomy because tokens
    expire, forcing repeated re-login; a delegated connection that stores
    refresh tokens lets the agent stay online.
  standard: >-
    Asked why an agent needs its own identity instead of simply reusing the
    user's access token, Carlos responded bluntly: 'don't do that please.'
    Access tokens are short-lived, so forwarding one means the agent stops
    working the moment it expires, forcing the user back through a login
    dance—which defeats the point of an autonomous agent. The harder, valuable
    work is the part Auth0's Token Vault automates: storing the upstream refresh
    token, managing token lifetimes, and running the refresh-token grant to mint
    fresh access tokens every time the agent needs to act.


    The correct model is a one-time establishment of a delegated relationship—a
    'triangle' between user, agent, and upstream service—after which the
    platform silently handles refresh and scope step-up. For task-runner and
    autonomous agents this is what makes 'connect once' UX possible: the user
    authorizes Slack, Gmail, or a trading API a single time, and subsequent
    sessions reuse the stored relationship until the upstream's refresh-token
    policy expires it. Designing for forwarded tokens optimizes for the
    interactive-chat demo and fails the autonomous case; designing for
    refreshable delegation does the opposite.
stance: >-
  Long-running agents should hold a delegated connection with managed refresh
  tokens, not a forwarded short-lived user access token.
related:
  - INS-260410-1430
  - INS-260605-75BB
  - INS-260626-AD63
  - INS-260626-A027
  - INS-260626-C51E
  - INS-260627-2FFE
  - INS-260627-3E71
  - INS-260625-02A3
  - INS-260625-DD6D
---
Asked why an agent needs its own identity instead of simply reusing the user's access token, Carlos responded bluntly: 'don't do that please.' Access tokens are short-lived, so forwarding one means the agent stops working the moment it expires, forcing the user back through a login dance—which defeats the point of an autonomous agent. The harder, valuable work is the part Auth0's Token Vault automates: storing the upstream refresh token, managing token lifetimes, and running the refresh-token grant to mint fresh access tokens every time the agent needs to act.

The correct model is a one-time establishment of a delegated relationship—a 'triangle' between user, agent, and upstream service—after which the platform silently handles refresh and scope step-up. For task-runner and autonomous agents this is what makes 'connect once' UX possible: the user authorizes Slack, Gmail, or a trading API a single time, and subsequent sessions reuse the stored relationship until the upstream's refresh-token policy expires it. Designing for forwarded tokens optimizes for the interactive-chat demo and fails the autonomous case; designing for refreshable delegation does the opposite.

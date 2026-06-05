---
id: INS-260605-2E60
domain: ai-development
topic: infrastructure
title: 'Indirect API keys through layered secret-refs, never raw env vars'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - secrets
  - security
  - api-keys
  - podman
  - kubernetes
sources:
  - type: youtube
    title: >-
      Lobster Trap: OpenClaw in Containers from Local to K8s and Back — Sally
      Ann O'Malley, Red Hat
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=F1DYkY1BlfM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Mount credentials as secret-refs (Podman/Kubernetes secret pointing to an
    agent-level secret-ref) so keys never appear as raw env vars in logs or
    config.
  standard: >-
    The standard pattern is a chain of indirection: store the API key in a
    Podman secret (or Kubernetes secret), mount it into the container, and then
    have the agent reference it through its own secret-ref feature. OpenClaw's
    secret-ref support 'doubles' the separation — the agent config holds a
    pointer to a secret-ref that points to the external secret, so the actual
    key value never lives inline.


    The practical benefit is that credentials stop leaking into logs, shell
    history, and committed config files. It is not cryptographically perfect,
    but it cleanly separates the secret's identity from its value, which is the
    single highest-leverage habit for running agents that hold powerful
    credentials. The same construction works identically across local (Podman
    secrets) and cluster (Kubernetes secret-refs to env vars) environments, so
    the developer mental model carries from laptop to production unchanged.
stance: >-
  Agent API keys should be stored as layered secret references rather than
  plaintext environment variables.
related:
  - INS-260605-BC6F
  - INS-260329-1277
  - INS-260410-1430
  - INS-260403-2FAE
  - INS-260605-8C71
---
The standard pattern is a chain of indirection: store the API key in a Podman secret (or Kubernetes secret), mount it into the container, and then have the agent reference it through its own secret-ref feature. OpenClaw's secret-ref support 'doubles' the separation — the agent config holds a pointer to a secret-ref that points to the external secret, so the actual key value never lives inline.

The practical benefit is that credentials stop leaking into logs, shell history, and committed config files. It is not cryptographically perfect, but it cleanly separates the secret's identity from its value, which is the single highest-leverage habit for running agents that hold powerful credentials. The same construction works identically across local (Podman secrets) and cluster (Kubernetes secret-refs to env vars) environments, so the developer mental model carries from laptop to production unchanged.

---
id: INS-260514-8F90
domain: ai-development
topic: industry-trends
title: >-
  Centralized platform layers unlock cross-cutting concerns at scale — 1 team
  replaces N team-replications
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - platform-architecture
  - cross-cutting-concerns
  - centralization-tradeoffs
  - forcing-functions
  - edge-proxy
sources:
  - type: youtube
    title: I was laid off by Atlassian
    author: Vasilios Syrakis
    url: 'https://youtu.be/55pTFVoclvE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Centralize cross-cutting concerns (auth, rate limiting, DDoS, logging) at
    the platform layer — 1 implementation replaces N team-replications. The
    forcing function (removing the alternative) is what drives adoption.
  standard: >-
    Atlassian's edge platform handles cross-cutting concerns once at the proxy
    layer for 1000+ internal services: DDoS protection (via CloudFront), access
    logging (Envoy native filters), authentication (Rust-written sidecar),
    authorization and rate limiting (sidecars contributed by other teams), all
    configured via templates that abstract away the underlying Envoy complexity.
    The naive alternative — each of 1000 dev teams implementing their own
    auth/logging/rate-limiting — would burn enormous compounding cost. The
    non-obvious lesson: just BUILDING the centralized platform isn't enough. The
    speaker explicitly notes that the migration to the new platform only
    happened because Atlassian removed the alternative: 'They forced a switch
    where you could no longer expose your service publicly through their old
    load balancer; you had to go through our centralized infrastructure and
    explicitly configure it as a way of signaling your intention for that
    service to be publicly accessible.' Without the forcing function, teams
    optimized for their local cost and stayed on the old basic system. The
    general principle: platform adoption is not a 'build it and they will come'
    story; the central team must collaborate with leadership to REMOVE the
    alternatives, or the migration stalls. This applies broadly: AI-platform
    teams centralizing on a shared agent harness, infra teams centralizing on a
    service mesh, dev-experience teams centralizing on a CI system — without
    removing the escape hatch, you get partial migration and dual maintenance
    costs.
stance: >-
  The architectural argument for centralized infrastructure platforms is that
  cross-cutting concerns (auth, rate limiting, DDoS protection, logging,
  observability) implemented N times by N independent dev teams is a tremendous
  waste — implementing them once in the platform layer (edge proxies, API
  gateways) and forcing all services through it captures the scale benefit, and
  the forcing function (removing the alternative) is what actually drives
  adoption.
related:
  - INS-260411-E951
  - INS-260514-8807
  - INS-260404-21E6
  - INS-260322-5678
  - PRI-260405-AF79
  - PRI-260328-0C15
---
Atlassian's edge platform handles cross-cutting concerns once at the proxy layer for 1000+ internal services: DDoS protection (via CloudFront), access logging (Envoy native filters), authentication (Rust-written sidecar), authorization and rate limiting (sidecars contributed by other teams), all configured via templates that abstract away the underlying Envoy complexity. The naive alternative — each of 1000 dev teams implementing their own auth/logging/rate-limiting — would burn enormous compounding cost. The non-obvious lesson: just BUILDING the centralized platform isn't enough. The speaker explicitly notes that the migration to the new platform only happened because Atlassian removed the alternative: 'They forced a switch where you could no longer expose your service publicly through their old load balancer; you had to go through our centralized infrastructure and explicitly configure it as a way of signaling your intention for that service to be publicly accessible.' Without the forcing function, teams optimized for their local cost and stayed on the old basic system. The general principle: platform adoption is not a 'build it and they will come' story; the central team must collaborate with leadership to REMOVE the alternatives, or the migration stalls. This applies broadly: AI-platform teams centralizing on a shared agent harness, infra teams centralizing on a service mesh, dev-experience teams centralizing on a CI system — without removing the escape hatch, you get partial migration and dual maintenance costs.

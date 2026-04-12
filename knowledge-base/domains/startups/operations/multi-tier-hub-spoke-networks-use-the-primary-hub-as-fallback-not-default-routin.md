---
id: INS-260412-7197
domain: startups
topic: operations
title: >-
  Multi-tier hub-spoke networks use the primary hub as fallback, not default
  routing
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - network-architecture
  - hub-and-spoke
  - routing
  - efficiency
sources:
  - type: youtube
    title: How Overnight Shipping Works
    author: Wendover Productions
    url: 'https://www.youtube.com/watch?v=y3qfeoqErtY'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    FedEx's Memphis SuperHub is the fallback router — packages only flow through
    it when no secondary hub like Oakland offers a shorter path between origin
    and destination.
  standard: >-
    A naive hub-and-spoke model routes everything through the central hub, but
    FedEx's actual network is more sophisticated. Secondary hubs like Oakland
    handle high-demand regional corridors (Phoenix to Seattle), while Memphis
    serves as the catch-all for routes without enough volume to justify direct
    connections. A Phoenix-to-Seattle package routes 1,300 miles through Oakland
    instead of 3,000+ miles through Memphis.


    This architecture pattern applies to any system with a central coordinator:
    API gateways, content delivery networks, or even organizational
    communication. The central node should be the fallback, not the bottleneck.
    High-traffic paths get dedicated direct connections; the central hub handles
    the long tail. This reduces latency, lowers cost, and prevents the central
    node from becoming a single point of failure under load. The key design
    insight is that the hub's role shifts from 'everything passes through me' to
    'I handle what nobody else can.'
stance: >-
  In well-designed logistics networks, the central hub serves as a backup for
  packages that lack a more efficient regional routing, not as the mandatory
  path for all shipments.
related:
  - INS-260321-A3A1
  - INS-260329-F887
  - INS-260410-ED34
  - INS-260403-8011
  - INS-260405-88A4
---
A naive hub-and-spoke model routes everything through the central hub, but FedEx's actual network is more sophisticated. Secondary hubs like Oakland handle high-demand regional corridors (Phoenix to Seattle), while Memphis serves as the catch-all for routes without enough volume to justify direct connections. A Phoenix-to-Seattle package routes 1,300 miles through Oakland instead of 3,000+ miles through Memphis.

This architecture pattern applies to any system with a central coordinator: API gateways, content delivery networks, or even organizational communication. The central node should be the fallback, not the bottleneck. High-traffic paths get dedicated direct connections; the central hub handles the long tail. This reduces latency, lowers cost, and prevents the central node from becoming a single point of failure under load. The key design insight is that the hub's role shifts from 'everything passes through me' to 'I handle what nobody else can.'

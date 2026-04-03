---
id: INS-260329-F0DE
domain: startups
topic: execution
title: >-
  Pull-based CDNs suit frequently updated content while push-based suits large
  static assets
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - cdn
  - caching
  - performance
  - content-delivery
sources:
  - type: youtube
    title: System Design Concepts Course and Interview Prep
    author: freeCodeCamp.org
    url: 'https://youtube.com/watch?v=F2FmTdLtb_4'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pull-based CDNs auto-fetch on first request (good for regularly updated
    sites); push-based CDNs require manual upload (good for large, rarely
    changed files).
  standard: >-
    CDNs distribute content geographically to reduce latency, but the pull vs
    push model choice matters significantly. Pull-based CDNs automatically fetch
    content from the origin server on the first user request, then cache it —
    ideal for websites with regularly updated static content because the CDN
    keeps itself current with minimal management. Push-based CDNs require you to
    upload content explicitly, which then distributes to edge servers — better
    for large files (video, binaries) that change infrequently but need fast
    global delivery when updated. Pull-based reduces management overhead but
    means the first request per edge location hits the origin server. Push-based
    gives precise control but requires active content management. For most web
    applications, pull-based is the default; push-based is reserved for
    media-heavy or release-based distribution patterns.
stance: >-
  CDN architecture choice (pull vs push) should be driven by content update
  frequency, not just traffic volume — mismatching leads to either stale content
  or unnecessary origin load.
related:
  - INS-260327-88FE
  - INS-260320-C8CC
  - INS-260329-812E
  - INS-260330-0B79
  - INS-260320-71C1
evidence:
  - id: INS-260320-C8CC
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260320-71C1
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-812E
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
CDNs distribute content geographically to reduce latency, but the pull vs push model choice matters significantly. Pull-based CDNs automatically fetch content from the origin server on the first user request, then cache it — ideal for websites with regularly updated static content because the CDN keeps itself current with minimal management. Push-based CDNs require you to upload content explicitly, which then distributes to edge servers — better for large files (video, binaries) that change infrequently but need fast global delivery when updated. Pull-based reduces management overhead but means the first request per edge location hits the origin server. Push-based gives precise control but requires active content management. For most web applications, pull-based is the default; push-based is reserved for media-heavy or release-based distribution patterns.

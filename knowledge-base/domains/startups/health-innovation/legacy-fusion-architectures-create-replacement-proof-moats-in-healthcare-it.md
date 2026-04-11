---
id: INS-260403-86BF
domain: startups
topic: health-innovation
title: Legacy fusion architectures create replacement-proof moats in healthcare IT
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - healthcare
  - legacy-systems
  - moats
  - infrastructure
sources:
  - type: blog
    title: The 60-year-old code behind $5 trillion in healthcare
    author: >-
      {"@type":"Organization","name":"Chamath
      Palihapitiya","url":"https://chamath.substack.com","description":"I make
      bets on disruptive ideas, technology, and people.\n\nSubscribe to learn
      with
      me.","interactionStatistic":{"@type":"InteractionCounter","name":"Subscribers","interactionType":"https://schema.org/SubscribeAction","userInteractionCount":100000},"identifier":"pub:975637","logo":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!1xtG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c2e90df-6f98-44ee-8091-3e7df4079133_1280x1280.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!1xtG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c2e90df-6f98-44ee-8091-3e7df4079133_1280x1280.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!1xtG!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c2e90df-6f98-44ee-8091-3e7df4079133_1280x1280.png"},"image":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!1xtG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c2e90df-6f98-44ee-8091-3e7df4079133_1280x1280.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!1xtG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c2e90df-6f98-44ee-8091-3e7df4079133_1280x1280.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!1xtG!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c2e90df-6f98-44ee-8091-3e7df4079133_1280x1280.png"}}
    url: 'https://chamath.substack.com/p/healthcare-it'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MUMPS fused three layers into one, making healthcare IT migration an
    all-or-nothing proposition that no one has attempted.
  standard: >-
    In 1966, Massachusetts General Hospital built MUMPS by fusing an operating
    system, programming language, and database into a single layer to handle
    concurrent writes from 20 departments on 4KB of RAM. This architectural
    decision solved the immediate problem but created a constraint that persists
    today: you cannot migrate away from MUMPS without replacing the entire
    system at once. Rather than attempt this replacement, the industry spent
    decades building administrative translation layers around it — employing
    185,000 medical coders and spending $1 trillion annually on healthcare
    administration (25-30% of total spending). This pattern generalizes beyond
    healthcare: when foundational infrastructure fuses multiple concerns into
    one layer, the replacement cost grows superlinearly, and industries will
    spend enormous ongoing costs to avoid a one-time migration.
stance: >-
  When a system fuses its OS, language, and database into one inseparable layer,
  the migration cost becomes so high that the industry builds translation layers
  around it rather than replacing it, even over 60 years.
related:
  - INS-260403-88DA
  - INS-260329-3AE5
  - INS-260327-10E8
  - INS-260323-198E
  - INS-260322-823B
---
In 1966, Massachusetts General Hospital built MUMPS by fusing an operating system, programming language, and database into a single layer to handle concurrent writes from 20 departments on 4KB of RAM. This architectural decision solved the immediate problem but created a constraint that persists today: you cannot migrate away from MUMPS without replacing the entire system at once. Rather than attempt this replacement, the industry spent decades building administrative translation layers around it — employing 185,000 medical coders and spending $1 trillion annually on healthcare administration (25-30% of total spending). This pattern generalizes beyond healthcare: when foundational infrastructure fuses multiple concerns into one layer, the replacement cost grows superlinearly, and industries will spend enormous ongoing costs to avoid a one-time migration.

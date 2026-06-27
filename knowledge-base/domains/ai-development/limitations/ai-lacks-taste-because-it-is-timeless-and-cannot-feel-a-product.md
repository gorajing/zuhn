---
id: INS-260626-0FA9
domain: ai-development
topic: limitations
title: AI lacks taste because it is timeless and cannot feel a product
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ai-limitations
  - taste
  - ux-design
  - animation
  - human-in-the-loop
sources:
  - type: youtube
    title: >-
      Taste & Craft: A Conversation with Tuomas Artman, CTO Linear & Gergely
      Orosz, @pragmaticengineer
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wjk0ulMAkbc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI interacts with software timelessly — via screenshots and the DOM — so it
    can't feel that a click took two seconds or that an animation eases wrong,
    leaving taste as a human-only capability.
  standard: >-
    Artman argues that despite agents writing unit tests and having feedback
    loops, we rarely say 'quality' and 'AI agents' in the same sentence because
    agents have no taste — they are not human and do not feel a product. Two
    concrete mechanisms explain why. First, AI has no concept of time: it
    interacts with a browser through screenshots or the DOM in an effectively
    timeless way, so while it knows one second is better than two, it never gets
    frustrated that a click took two seconds and cannot judge whether two
    seconds is 'slow enough' to matter. It can recite performance best-practices
    (use caching, host on Vercel) but cannot feel the latency. Second, it lacks
    a sense of what makes an animation feel natural — a Linear design engineer's
    experiment showed agents could build pop-ups and button highlights that did
    'all the right things' yet felt unnatural (eased in wrong, too slow or too
    fast), requiring a manual human pass to feel good. The implication for
    builders: agents can be trusted with the mechanical, design-free work (bug
    fixes, data plumbing), but purpose-built, feeling-aware UI design remains
    the 'last bastion' requiring human taste — at least for now.
stance: >-
  AI cannot produce genuinely tasteful UX because it never experiences time,
  frustration, or feel, so judging quality remains a human bastion.
related:
  - INS-260320-5A6F
  - INS-260409-6AEB
  - INS-260329-2EB1
  - PRI-260328-AC85
  - INS-260327-B403
  - INS-260403-A101
  - INS-260403-10CE
---
Artman argues that despite agents writing unit tests and having feedback loops, we rarely say 'quality' and 'AI agents' in the same sentence because agents have no taste — they are not human and do not feel a product. Two concrete mechanisms explain why. First, AI has no concept of time: it interacts with a browser through screenshots or the DOM in an effectively timeless way, so while it knows one second is better than two, it never gets frustrated that a click took two seconds and cannot judge whether two seconds is 'slow enough' to matter. It can recite performance best-practices (use caching, host on Vercel) but cannot feel the latency. Second, it lacks a sense of what makes an animation feel natural — a Linear design engineer's experiment showed agents could build pop-ups and button highlights that did 'all the right things' yet felt unnatural (eased in wrong, too slow or too fast), requiring a manual human pass to feel good. The implication for builders: agents can be trusted with the mechanical, design-free work (bug fixes, data plumbing), but purpose-built, feeling-aware UI design remains the 'last bastion' requiring human taste — at least for now.

---
id: INS-260330-C2C4
domain: startups
topic: product-development
title: >-
  Cross-framework compatibility standards (web components) need abstraction
  layers to be usable
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - web-components
  - standards
  - developer-experience
  - abstraction-layers
  - lit
  - stencil
sources:
  - type: youtube
    title: I built the same app 10 times // Which JS Framework is best?
    author: Fireship
    url: 'https://www.youtube.com/watch?v=cuHDQhDhvPE'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Web components promise framework-agnostic reusable elements, but the
    underlying browser API is so difficult that entire frameworks (Lit, Stencil)
    exist solely to make them palatable — revealing a gap between standard
    availability and standard usability.
  standard: >-
    Web components are a W3C browser standard allowing custom reusable HTML
    elements that work across any framework. In theory, this solves the
    framework fragmentation problem. In practice, the API
    (customElements.define, shadow DOM, lifecycle callbacks) is so cumbersome
    that Google sponsors Lit and the Ionic team built Stencil specifically to
    abstract it away.


    This reveals an important product insight: being a standard doesn't mean
    being usable. Standards solve interoperability but rarely solve developer
    experience. The value capture in any standards-based ecosystem happens in
    the abstraction layer above the standard, not in the standard itself. This
    is why companies like Stripe (payments standard abstraction), Twilio
    (telephony standard abstraction), and AWS (infrastructure standard
    abstraction) succeed — they make painful standards pleasant to use.
stance: >-
  Browser-standard web components are too low-level for direct use; frameworks
  like Lit and Stencil exist specifically because the raw API is notoriously
  difficult, proving that standards alone don't guarantee good developer
  experience.
related:
  - INS-260402-2D95
  - INS-260330-AB62
  - INS-260327-FDF4
  - PRI-260405-2A95
  - INS-260329-6A60
evidence:
  - id: INS-260327-FDF4
    type: SUPPORTS
  - id: INS-260330-AB62
    type: SUPPORTS
  - id: INS-260329-D0B3
    type: SUPPORTS
  - id: INS-260329-6A60
    type: SUPPORTS
  - id: INS-260402-2D95
    type: SUPPORTS
---
Web components are a W3C browser standard allowing custom reusable HTML elements that work across any framework. In theory, this solves the framework fragmentation problem. In practice, the API (customElements.define, shadow DOM, lifecycle callbacks) is so cumbersome that Google sponsors Lit and the Ionic team built Stencil specifically to abstract it away.

This reveals an important product insight: being a standard doesn't mean being usable. Standards solve interoperability but rarely solve developer experience. The value capture in any standards-based ecosystem happens in the abstraction layer above the standard, not in the standard itself. This is why companies like Stripe (payments standard abstraction), Twilio (telephony standard abstraction), and AWS (infrastructure standard abstraction) succeed — they make painful standards pleasant to use.

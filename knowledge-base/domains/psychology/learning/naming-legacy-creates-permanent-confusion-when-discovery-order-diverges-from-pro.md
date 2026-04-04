---
id: INS-260404-78EB
domain: psychology
topic: learning
title: >-
  Naming legacy creates permanent confusion when discovery order diverges from
  process order
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - naming
  - abstraction
  - pedagogy
  - mental-models
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Photosystem II acts before Photosystem I because they were named in reverse
    order of discovery — a naming debt that has confused biology students for
    decades.
  standard: >-
    Photosystem II was discovered after Photosystem I but acts first in the
    electron transport chain. This naming inversion is a trivial historical
    accident, yet it creates a comprehension stumble for every single person
    learning photosynthesis. The video explicitly flags this as confusing, and
    the alternative name (plastoquinone oxidoreductase) is worse.


    This is a concrete example of how naming decisions in any system —
    codebases, APIs, organizational structures — create compounding cognitive
    costs. Every developer who encounters a function called 'handleLegacyFlow'
    that actually handles the primary flow pays a small tax. Multiply that by
    thousands of readers over years and the cost is enormous. The actionable
    lesson: when building systems, name components by their role in the process,
    not by their historical origin. And when you inherit bad names, the cost of
    renaming is almost always less than the cost of perpetual confusion.
stance: >-
  When components of a system are named in order of discovery rather than order
  of operation, every subsequent learner pays a permanent comprehension tax that
  compounds across the knowledge chain.
related:
  - INS-260330-0143
  - INS-260403-F63E
  - INS-260403-07C3
  - INS-260404-FDEA
  - INS-260403-5215
---
Photosystem II was discovered after Photosystem I but acts first in the electron transport chain. This naming inversion is a trivial historical accident, yet it creates a comprehension stumble for every single person learning photosynthesis. The video explicitly flags this as confusing, and the alternative name (plastoquinone oxidoreductase) is worse.

This is a concrete example of how naming decisions in any system — codebases, APIs, organizational structures — create compounding cognitive costs. Every developer who encounters a function called 'handleLegacyFlow' that actually handles the primary flow pays a small tax. Multiply that by thousands of readers over years and the cost is enormous. The actionable lesson: when building systems, name components by their role in the process, not by their historical origin. And when you inherit bad names, the cost of renaming is almost always less than the cost of perpetual confusion.

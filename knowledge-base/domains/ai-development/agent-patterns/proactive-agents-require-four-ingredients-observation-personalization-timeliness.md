---
id: INS-260627-453E
domain: ai-development
topic: agent-patterns
title: >-
  Proactive agents require four ingredients: observation, personalization,
  timeliness, and seamless integration
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - proactive-agents
  - agent-design
  - personalization
  - timing
  - workflow-integration
sources:
  - type: youtube
    title: 'Proactive Agents – Kath Korevec, Google Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3u8xc0zLec'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Proactivity is built from four hard ingredients — observation,
    personalization, timeliness, and seamless workflow integration — and missing
    any one breaks the 'magic'.
  standard: >-
    Korevec decomposes proactive systems into four essential ingredients.
    Observation: the agent must continually understand code changes, patterns,
    and workflow to hold context on the whole project. Personalization (the
    hardest): it must learn how you work, what you care about, what you ignore,
    and the code you never want touched. Timeliness: intervene too soon and it
    interrupts; too late and the moment is lost. Seamless integration: it must
    live where you already work — terminal, repo, IDE — not in a separate app
    you have to remember.


    The framework is useful as a design checklist because the failure modes are
    specific and independent. An agent with great observation but poor timing
    becomes an annoyance; one with great timing but no personalization gives
    generic, ignorable suggestions. She grounds the pattern in familiar non-AI
    examples — the Nest thermostat learning household habits, the body putting
    out a hand before a fall — to argue proactivity is 'very human' and not
    futuristic, just hard to assemble across tools.
stance: >-
  A proactive agent only feels like a collaborator when it continuously observes
  the project, personalizes to how you work, intervenes at exactly the right
  moment, and inserts itself into tools you already use.
related:
  - INS-260327-F7BD
  - INS-260403-D2A5
  - INS-260501-22AD
  - INS-260628-6420
  - PRI-260328-AC85
  - INS-260321-33FC
---
Korevec decomposes proactive systems into four essential ingredients. Observation: the agent must continually understand code changes, patterns, and workflow to hold context on the whole project. Personalization (the hardest): it must learn how you work, what you care about, what you ignore, and the code you never want touched. Timeliness: intervene too soon and it interrupts; too late and the moment is lost. Seamless integration: it must live where you already work — terminal, repo, IDE — not in a separate app you have to remember.

The framework is useful as a design checklist because the failure modes are specific and independent. An agent with great observation but poor timing becomes an annoyance; one with great timing but no personalization gives generic, ignorable suggestions. She grounds the pattern in familiar non-AI examples — the Nest thermostat learning household habits, the body putting out a hand before a fall — to argue proactivity is 'very human' and not futuristic, just hard to assemble across tools.

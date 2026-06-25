---
id: INS-260605-4CED
domain: ai-development
topic: human-ai-relationship
title: >-
  When agents hit the physical world, the human becomes the agent's hands and
  senses
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-ai-relationship
  - orchestration
  - agentic-workflows
  - embodiment
sources:
  - type: youtube
    title: >-
      Reverse engineering a Viking VOIP phone protocol with Claude Code — Boris
      Starkov, Eleven Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=V-L0INGTEOg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Claude orchestrated the entire reverse-engineering effort while the human
    merely rebooted the phone and reported how many beeps he heard, acting as
    the agent's hands and ears.
  standard: >-
    Starkov describes his own role bluntly: 'I was the agent for Claude... I was
    the hands for Claude.' Claude would instruct him to lift the handset and
    count the beeps; when he guessed wrong ('three'), Claude corrected him
    ('it's either two or four'). The intellectual work — cracking the checksum
    algorithm, devising the man-in-the-middle proxy — was entirely the model's;
    the human supplied only the physical actuation and sensory feedback the
    model couldn't reach. This inverts the usual mental model of AI-as-tool. For
    tasks that bridge into the physical world, design the loop so the agent
    orchestrates and the human (or, eventually, computer-use / robotics) closes
    the actuation gap. Starkov notes he could have used computer-use to control
    the VM directly and fully close the loop, but was 'too lazy' — the only
    barrier to full autonomy was convenience, not capability.
stance: >-
  In agent-driven physical tasks the optimal division of labor inverts, with the
  AI orchestrating and the human executing its instructions.
related:
  - INS-260605-237C
  - INS-260605-997E
  - INS-260625-3464
  - INS-260330-B047
  - INS-260530-D34F
---
Starkov describes his own role bluntly: 'I was the agent for Claude... I was the hands for Claude.' Claude would instruct him to lift the handset and count the beeps; when he guessed wrong ('three'), Claude corrected him ('it's either two or four'). The intellectual work — cracking the checksum algorithm, devising the man-in-the-middle proxy — was entirely the model's; the human supplied only the physical actuation and sensory feedback the model couldn't reach. This inverts the usual mental model of AI-as-tool. For tasks that bridge into the physical world, design the loop so the agent orchestrates and the human (or, eventually, computer-use / robotics) closes the actuation gap. Starkov notes he could have used computer-use to control the VM directly and fully close the loop, but was 'too lazy' — the only barrier to full autonomy was convenience, not capability.

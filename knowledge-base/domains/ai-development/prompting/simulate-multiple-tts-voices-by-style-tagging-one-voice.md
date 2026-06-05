---
id: INS-260605-510C
domain: ai-development
topic: prompting
title: Simulate multiple TTS voices by style-tagging one voice
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tts
  - prompt-engineering
  - voice
  - multi-speaker
sources:
  - type: youtube
    title: 'Let''s go Bananas with GenMedia — Guillaume Vernade, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BcWFc3H7Khg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Assigning each character a distinct speaking style in parentheses makes one
    TTS voice sound like several seamless characters.
  standard: >-
    TTS models cap the number of distinct named voices you can assign, but
    Vernade demonstrated a workaround: write the dialogue as a play, reuse the
    same voice for every non-narrator character, and tag each line with a
    parenthetical style direction (e.g. 'long poetic pauses' vs 'breathless,
    unbolstered'). Listeners reliably perceive these as different characters
    even though the underlying voice is identical. The same parenthetical
    channel controls emotion, whispering, and accents. A second hard-won detail:
    the prompt must begin with an explicit instruction like 'read this text' —
    handing the model bare text causes it to not realize it should read it (cost
    him 15 minutes of debugging). The broader principle is that style and
    delivery, not just timbre, carry perceived character identity.
stance: >-
  You can fake many distinct character voices from a single TTS voice by giving
  each character a per-line speaking style.
related:
  - INS-260330-24CD
  - INS-260605-E490
  - INS-260605-9581
  - INS-260605-8AEE
  - INS-260404-18F1
---
TTS models cap the number of distinct named voices you can assign, but Vernade demonstrated a workaround: write the dialogue as a play, reuse the same voice for every non-narrator character, and tag each line with a parenthetical style direction (e.g. 'long poetic pauses' vs 'breathless, unbolstered'). Listeners reliably perceive these as different characters even though the underlying voice is identical. The same parenthetical channel controls emotion, whispering, and accents. A second hard-won detail: the prompt must begin with an explicit instruction like 'read this text' — handing the model bare text causes it to not realize it should read it (cost him 15 minutes of debugging). The broader principle is that style and delivery, not just timbre, carry perceived character identity.

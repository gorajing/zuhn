---
id: INS-260514-C4CF
domain: ai-development
topic: limitations
title: >-
  Supervised ML requires three constraints (clean data, measurable goals,
  defined parameters) — edge cases break everything
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - supervised-ml-constraints
  - edge-cases
  - ai-limitations
  - self-driving
  - architectural-limits
sources:
  - type: youtube
    title: 'Game Theory #24:  The AI Apocalypse'
    author: Predictive History
    url: 'https://youtu.be/8nsxuB3Vsts'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Supervised ML works only when 3 constraints hold: clean labeled data,
    measurable goal, defined parameters. Edge cases (situations breaking those
    constraints) cause catastrophic failure. Not a temporary problem — a
    fundamental architectural limit.
  standard: >-
    The lecturer's structured breakdown of supervised ML constraints and the
    edge-case problem: (1) CLEAN DATA — the training data must be unambiguous
    and correctly labeled. Internet-scraped data fails this constantly
    (mis-labeled images, garbage text, contradictory labels). (2) MEASURABLE
    GOAL — the task must have a definable success criterion (does this face
    match this name? is this email spam?). Goals like 'what is good?' cannot be
    measured and cannot drive supervised learning. (3) DEFINED PARAMETERS — the
    feature space must be specifiable. Faces have features (eye, nose, chin);
    abstract concepts often don't. Edge cases are situations where one or more
    constraints fails: a pedestrian pushing a bicycle (training data had
    pedestrians alone; the combination wasn't represented) — a real fatality
    from the 2018 Uber self-driving accident in Tempe, Arizona, where the deep
    learning model 'simply didn't register Hazburg as a person.' She was
    'pushing a bicycle loaded with shopping bags across the road outside the
    designated crosswalk' — the textbook edge case. The lecturer's deeper
    argument: 'There's only one solution to make this 100%. Take away the right
    of everyone to drive — make every single car a computer and a robot. If you
    take away the steering wheel, you can't cause an accident.' This is the key
    insight: edge cases can't be eliminated by improving the model alone,
    because edge cases are inherently the cases the model wasn't trained on. The
    only way to get 100% is to RESTRUCTURE THE ENVIRONMENT to eliminate the edge
    cases — remove human drivers, restrict the operating domain, force
    standardization. So AI doesn't make society safer FROM AI — it forces
    society to restructure to be safer FOR AI. The same logic applies to medical
    AI (only 100% safe when humans stop second-guessing), legal AI (only 100%
    safe when human juries are eliminated), educational AI (only 100% effective
    when humans stop teaching). The corollary for AI deployment decisions: never
    deploy AI in a high-stakes context unless you've explicitly identified the
    edge cases and either (a) eliminated them through environmental
    restructuring or (b) provided human-in-the-loop fallback. Deploying AI in
    contexts where edge cases are common AND a human fallback isn't available is
    structurally negligent regardless of how good the average-case performance
    looks.
stance: >-
  Modern AI systems require three structural constraints to function reliably
  (clean labeled data, measurable goals, defined parameters), and the entire
  technology fails catastrophically on EDGE CASES — situations where one or more
  of these constraints isn't satisfied; this isn't a temporary engineering
  problem but a fundamental architectural limitation, and the implications for
  autonomous vehicles, medical AI, and legal AI are that the technology can
  never reach 100% by capability alone — it requires restructuring the
  environment to eliminate edge cases.
related:
  - INS-260326-BF32
  - INS-260327-7B0C
  - INS-260329-356A
  - INS-260329-F8AF
  - INS-260329-8261
  - INS-260329-579D
  - INS-260329-02C5
  - INS-260329-3423
  - INS-260403-868C
  - INS-260403-0DE8
---
The lecturer's structured breakdown of supervised ML constraints and the edge-case problem: (1) CLEAN DATA — the training data must be unambiguous and correctly labeled. Internet-scraped data fails this constantly (mis-labeled images, garbage text, contradictory labels). (2) MEASURABLE GOAL — the task must have a definable success criterion (does this face match this name? is this email spam?). Goals like 'what is good?' cannot be measured and cannot drive supervised learning. (3) DEFINED PARAMETERS — the feature space must be specifiable. Faces have features (eye, nose, chin); abstract concepts often don't. Edge cases are situations where one or more constraints fails: a pedestrian pushing a bicycle (training data had pedestrians alone; the combination wasn't represented) — a real fatality from the 2018 Uber self-driving accident in Tempe, Arizona, where the deep learning model 'simply didn't register Hazburg as a person.' She was 'pushing a bicycle loaded with shopping bags across the road outside the designated crosswalk' — the textbook edge case. The lecturer's deeper argument: 'There's only one solution to make this 100%. Take away the right of everyone to drive — make every single car a computer and a robot. If you take away the steering wheel, you can't cause an accident.' This is the key insight: edge cases can't be eliminated by improving the model alone, because edge cases are inherently the cases the model wasn't trained on. The only way to get 100% is to RESTRUCTURE THE ENVIRONMENT to eliminate the edge cases — remove human drivers, restrict the operating domain, force standardization. So AI doesn't make society safer FROM AI — it forces society to restructure to be safer FOR AI. The same logic applies to medical AI (only 100% safe when humans stop second-guessing), legal AI (only 100% safe when human juries are eliminated), educational AI (only 100% effective when humans stop teaching). The corollary for AI deployment decisions: never deploy AI in a high-stakes context unless you've explicitly identified the edge cases and either (a) eliminated them through environmental restructuring or (b) provided human-in-the-loop fallback. Deploying AI in contexts where edge cases are common AND a human fallback isn't available is structurally negligent regardless of how good the average-case performance looks.

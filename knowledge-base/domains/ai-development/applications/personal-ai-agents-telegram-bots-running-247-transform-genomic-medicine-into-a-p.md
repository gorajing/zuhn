---
id: INS-260514-96FE
domain: ai-development
topic: applications
title: >-
  Personal AI agents (Telegram bots) running 24/7 transform genomic medicine
  into a phone-accessible service
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - personal-ai-agents
  - pharmacogenomics
  - telegram-bots
  - agentic-genomics
  - manuel-corpas
sources:
  - type: youtube
    title: I Built an AI System That Runs My Entire Research Lab
    author: Manuel Corpas
    url: 'https://youtu.be/uLOQppVIV8M'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A personal AI agent accessible via Telegram with your genome + FDA
    pharmacogenomics data can photo-identify drugs and recommend YOUR specific
    dose. Manuel Corpas's 'Robotary' caught a warfarin error that would have
    caused him to bleed to death.
  standard: >-
    Dr. Manuel Corpas demonstrated his personal AI agent ('Robotary') live
    during the lecture: it's a Telegram-based bot, accessible from his phone
    24/7, that has access to his sequenced personal genome AND current FDA
    pharmacogenomics recommendations. The demo workflow: 'I'm in the pharmacy. I
    take a photo of a drug box. I send it to Robotary via Telegram.' Behind the
    scenes, Robotary identifies the drug from the image, matches it to FDA
    pharmacogenomics guidelines (which specify dose adjustments by gene
    variant), checks his specific CYP2D6 and other relevant gene variants, and
    returns a personalized dosage card. Real finding from this exact workflow:
    Manuel learned he should NOT be prescribed warfarin (the world's
    most-prescribed anti-coagulant) at standard doses — at the normal dose he
    could 'bleed to death.' Without his agent, this would have been missed at
    the pharmacy. The architectural significance: this is feasible TODAY with
    off-the-shelf tooling. Telegram Bot API for the interface; standard LLMs
    (Claude, GPT) for reasoning; vision models for image identification; FDA's
    pharmacogenomics tables freely available; personal genome data from 23andMe
    or whole-genome sequencing services. The total build is small for someone
    with moderate coding skills. The implication for clinical practice:
    pharmacogenomics adoption has been bottlenecked by clinical workflow (no
    integration with EHRs, no dose adjustment in pharmacy dispensing software).
    Patient-side personal agents bypass that bottleneck — the patient checks
    every prescription against their own genome before filling it. This pattern
    generalizes: any clinical decision that depends on individual data + general
    guidelines + image/text input is now buildable as a personal agent. The
    non-obvious lesson: the bottleneck for AI in medicine isn't model
    capability; it's the institutional inertia of clinical workflows.
    Patient-side agents route around the institution.
stance: >-
  An always-running personal AI agent accessible via Telegram (or any messaging
  app) from any phone — equipped with your uploaded personal genome and current
  FDA pharmacogenomics guidelines — can take a photo of any prescribed drug and
  instantly tell you the correct dose for your specific genetics, catching real
  life-threatening prescription errors that the current healthcare system
  misses; this is feasible TODAY with off-the-shelf LLM tooling.
related:
  - INS-260405-FE86
  - INS-260524-2346
  - INS-260408-8F0A
  - INS-260322-3A00
  - INS-260605-8664
---
Dr. Manuel Corpas demonstrated his personal AI agent ('Robotary') live during the lecture: it's a Telegram-based bot, accessible from his phone 24/7, that has access to his sequenced personal genome AND current FDA pharmacogenomics recommendations. The demo workflow: 'I'm in the pharmacy. I take a photo of a drug box. I send it to Robotary via Telegram.' Behind the scenes, Robotary identifies the drug from the image, matches it to FDA pharmacogenomics guidelines (which specify dose adjustments by gene variant), checks his specific CYP2D6 and other relevant gene variants, and returns a personalized dosage card. Real finding from this exact workflow: Manuel learned he should NOT be prescribed warfarin (the world's most-prescribed anti-coagulant) at standard doses — at the normal dose he could 'bleed to death.' Without his agent, this would have been missed at the pharmacy. The architectural significance: this is feasible TODAY with off-the-shelf tooling. Telegram Bot API for the interface; standard LLMs (Claude, GPT) for reasoning; vision models for image identification; FDA's pharmacogenomics tables freely available; personal genome data from 23andMe or whole-genome sequencing services. The total build is small for someone with moderate coding skills. The implication for clinical practice: pharmacogenomics adoption has been bottlenecked by clinical workflow (no integration with EHRs, no dose adjustment in pharmacy dispensing software). Patient-side personal agents bypass that bottleneck — the patient checks every prescription against their own genome before filling it. This pattern generalizes: any clinical decision that depends on individual data + general guidelines + image/text input is now buildable as a personal agent. The non-obvious lesson: the bottleneck for AI in medicine isn't model capability; it's the institutional inertia of clinical workflows. Patient-side agents route around the institution.

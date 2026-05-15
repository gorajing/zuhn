---
id: INS-260505-5A06
domain: ai-development
topic: research-methodology
title: >-
  AI for science splits cleanly into prediction patterns vs inference patterns,
  each with different correctness mechanisms
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scientific-ml
  - prediction-vs-inference
  - correctness
  - taxonomy
sources:
  - type: audio
    title: Panel   AI for the Universe
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Prediction: AI guesses, formal verification confirms. Inference: AI must be
    calibrated against simulators because mistakes propagate to wrong scientific
    conclusions.
  standard: >-
    Kyle Cranmer at the Universe Panel proposes a useful taxonomy. Prediction
    direction (theory → data): AI generates candidate predictions, formal
    verification (mathematical proofs, lattice QCD calculations, drug synthesis)
    confirms or rejects. AI being wrong is fine here — the verification step
    catches it. Inference direction (data → theory): AI is part of a
    data-processing chain that produces scientific conclusions. Mistakes
    propagate into incorrect papers. Correctness here requires uncertainty
    quantification, calibration against high-fidelity simulators, and rigorous
    bias detection. The patterns require different methodology: prediction can
    use generative AI freely; inference requires more careful simulation-based
    approaches.


    Application: when designing AI for a new scientific domain, first determine
    whether you're doing prediction or inference. If prediction with cheap
    verification, generative AI works. If inference, you need a simulator-based
    calibration story. Conflating the two produces models that are well-trained
    but inappropriately deployed.
stance: >-
  AI applications in science can be productively organized by what stage of the
  scientific process they touch — prediction (theory to predicted data) and
  inference (data to theory) have fundamentally different correctness-assurance
  mechanisms, and conflating them produces the wrong evaluation methodology.
related:
  - INS-260321-D959
  - PRI-260323-1CF9
  - INS-260327-0595
  - INS-260330-FB5A
  - INS-260330-63DD
  - INS-260403-0803
  - INS-260403-0353
  - INS-260404-80AC
  - INS-260405-809E
  - INS-260330-BA13
---
Kyle Cranmer at the Universe Panel proposes a useful taxonomy. Prediction direction (theory → data): AI generates candidate predictions, formal verification (mathematical proofs, lattice QCD calculations, drug synthesis) confirms or rejects. AI being wrong is fine here — the verification step catches it. Inference direction (data → theory): AI is part of a data-processing chain that produces scientific conclusions. Mistakes propagate into incorrect papers. Correctness here requires uncertainty quantification, calibration against high-fidelity simulators, and rigorous bias detection. The patterns require different methodology: prediction can use generative AI freely; inference requires more careful simulation-based approaches.

Application: when designing AI for a new scientific domain, first determine whether you're doing prediction or inference. If prediction with cheap verification, generative AI works. If inference, you need a simulator-based calibration story. Conflating the two produces models that are well-trained but inappropriately deployed.

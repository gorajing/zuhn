---
id: INS-260626-4075
domain: ai-development
topic: adoption
title: >-
  In expert domains, 80% accuracy equals zero — the corrected last 20% is the
  asset
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - regulated-industries
  - legal-ai
  - verification
  - continual-learning
  - expert-domains
sources:
  - type: youtube
    title: >-
      ⚡️Every product of the future will be a living system  — Ronak Malde,
      Trajectory.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=DcvgPEApHT8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Unlike coding, where a technical user steers a mistake-tolerant agent,
    expert domains treat 80%-right as 0%-useful — so the human's last-20%
    correction is the real training data.
  standard: >-
    Coding agents thrive partly because their users are technical and the
    workflow is mistake-tolerant: a developer can read the agent's output, catch
    errors, and steer it the rest of the way. Malde points out this tolerance
    does not transfer to fields like legal, where 'getting 80% of the way there
    is the same thing as zero.' A contract redline that is mostly right is not
    usable; it must be fully right, and only a domain expert can certify that.


    This inverts where the value sits. In coding, the agent's draft is most of
    the value. In expert domains, the agent's draft is a starting point and the
    deployable value is created when a paralegal or lawyer completes and
    corrects the final 20% — issue spotting, citation completeness, analysis.
    That correction is simultaneously the thing that makes the work usable and
    the highest-quality training signal available, because it is expert behavior
    on a mission-critical task.


    For builders entering regulated or expert verticals, the lesson is to
    architect around expert-in-the-loop correction rather than around autonomous
    accuracy. The product should make the expert's completion cheap to capture
    and feed it back into the model. This connects to the broader pattern that
    regulated domains demand parallel-run validation and copilot-to-autopilot
    trust graduation rather than 'move fast' deployment.
stance: >-
  For high-stakes fields like legal, finance, and healthcare, partial
  correctness is worthless, which inverts the coding-agent playbook and makes
  expert corrections the only path to deployable AI.
related:
  - INS-260323-13C0
  - INS-260327-D888
  - INS-260403-5A91
  - PRI-260407-B808
  - INS-260413-F638
  - INS-260514-6530
  - INS-260514-F2D5
  - PRI-260405-0676
  - PRI-260406-3EF8
  - INS-260627-D042
---
Coding agents thrive partly because their users are technical and the workflow is mistake-tolerant: a developer can read the agent's output, catch errors, and steer it the rest of the way. Malde points out this tolerance does not transfer to fields like legal, where 'getting 80% of the way there is the same thing as zero.' A contract redline that is mostly right is not usable; it must be fully right, and only a domain expert can certify that.

This inverts where the value sits. In coding, the agent's draft is most of the value. In expert domains, the agent's draft is a starting point and the deployable value is created when a paralegal or lawyer completes and corrects the final 20% — issue spotting, citation completeness, analysis. That correction is simultaneously the thing that makes the work usable and the highest-quality training signal available, because it is expert behavior on a mission-critical task.

For builders entering regulated or expert verticals, the lesson is to architect around expert-in-the-loop correction rather than around autonomous accuracy. The product should make the expert's completion cheap to capture and feed it back into the model. This connects to the broader pattern that regulated domains demand parallel-run validation and copilot-to-autopilot trust graduation rather than 'move fast' deployment.

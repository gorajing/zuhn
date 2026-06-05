---
id: INS-260501-0C6C
domain: ai-development
topic: research-methodology
title: >-
  Robotics data scaling shifts from teleop (capped at 24-hr/robot) to wearables
  to egocentric video — FSD-style ambient flywheel
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - data-scaling
  - egocentric-video
  - umi
  - teleoperation
  - robotics-data
sources:
  - type: youtube
    title: 'Robotics'' End Game: Nvidia''s Jim Fan'
    author: Sequoia Capital
    url: 'https://youtu.be/3Y8aq_ofEVs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Teleop = 24 hr/day cap per robot. Wearables = better. Egocentric video = 10M
    hours/year, ambient like FSD.
  standard: >-
    Fan's data-scaling progression: teleoperation has a hard physical limit of
    24 hours per robot per day (realistically 3-4 hours when 'the robot god is
    merciful'), making it unscalable past low millions of hours globally. Data
    wearables (Universal Manipulation Interface — wear the gripper directly on
    your hand; exoskeletons mapped one-to-one to dexterous robot hands) lift the
    cap but remain intrusive. The endgame is egocentric video — 99.9% of
    training data from human first-person video with hand-tracking annotations,
    capable of 10M+ hours/year if the data collection is ambient (like Tesla
    FSD's data upload).


    NVIDIA's Ego Scale model demonstrates the path: pretrained on 21K hours of
    in-the-wild egocentric human video with zero robot data; action-fine-tuned
    on 50 hours of moap data gloves + 4 hours of teleop (under 0.1% of training
    mix); achieves dexterous tasks like card sorting and syringe manipulation.
    The neuroscaling law for dexterity emerged: clean log-linear relationship
    between pretraining hours and optimal validation loss, 6 years after the
    language scaling law equivalent.


    For builders: the data strategy for robotics now matters more than the model
    architecture. Companies that figure out how to ambient-capture human
    dexterity at scale will dominate. For Zuhn editorially: this is the
    operational form of 'data is the moat' applied to robotics — the same
    companies winning AI coding (with massive code-RL environments) are
    positioned to win robotics by virtue of access to egocentric data flows.
stance: >-
  Teleoperation has a fundamental physical cap (24 hours per robot per day,
  realistically 3-4 hours), data wearables (UMI, exoskeletons) lift it but
  remain cumbersome, and the endgame is egocentric video that captures human
  dexterity ambiently — making the FSD-equivalent flywheel achievable at 10M+
  hours/year vs. teleop's million-hour ceiling.
related:
  - INS-260327-C7D5
  - INS-260603-11DB
  - INS-260323-758B
  - INS-260530-5644
  - PRI-260328-7007
  - INS-260603-2F7E
---
Fan's data-scaling progression: teleoperation has a hard physical limit of 24 hours per robot per day (realistically 3-4 hours when 'the robot god is merciful'), making it unscalable past low millions of hours globally. Data wearables (Universal Manipulation Interface — wear the gripper directly on your hand; exoskeletons mapped one-to-one to dexterous robot hands) lift the cap but remain intrusive. The endgame is egocentric video — 99.9% of training data from human first-person video with hand-tracking annotations, capable of 10M+ hours/year if the data collection is ambient (like Tesla FSD's data upload).

NVIDIA's Ego Scale model demonstrates the path: pretrained on 21K hours of in-the-wild egocentric human video with zero robot data; action-fine-tuned on 50 hours of moap data gloves + 4 hours of teleop (under 0.1% of training mix); achieves dexterous tasks like card sorting and syringe manipulation. The neuroscaling law for dexterity emerged: clean log-linear relationship between pretraining hours and optimal validation loss, 6 years after the language scaling law equivalent.

For builders: the data strategy for robotics now matters more than the model architecture. Companies that figure out how to ambient-capture human dexterity at scale will dominate. For Zuhn editorially: this is the operational form of 'data is the moat' applied to robotics — the same companies winning AI coding (with massive code-RL environments) are positioned to win robotics by virtue of access to egocentric data flows.

---
id: INS-260605-5EE0
domain: ai-development
topic: infrastructure
title: 'Develop agents locally, then lift the same artifact to Kubernetes'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - kubernetes
  - deployment
  - scaling
  - local-development
  - agents
sources:
  - type: youtube
    title: >-
      Lobster Trap: OpenClaw in Containers from Local to K8s and Back — Sally
      Ann O'Malley, Red Hat
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=F1DYkY1BlfM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because a containerized agent is just another application, you can prototype
    it locally and lift the identical artifact to Kubernetes/OpenShift when you
    need security and scale.
  standard: >-
    The speaker's consistent workflow is to develop something locally in a
    container and then lift it unchanged to Kubernetes — and the claim is that
    AI workloads are not special: the same story holds for an agent as for any
    web service. As agents proliferate and need to run everywhere, communicating
    with each other for real business use cases, the requirements that surface
    are the same ones any application faces at scale: security and
    orchestration, which is exactly what Kubernetes provides.


    The demo backs this with a single installer that targets local Podman, a
    kind cluster, and OpenShift through the same opinionated form, switching
    context based on what you are connected to. The lesson for builders is to
    resist treating 'AI infrastructure' as a green-field discipline — the mature
    container-to-cluster deployment muscle the industry already has transfers
    directly, and the local-to-K8s lift is the unit of progression.
stance: >-
  AI workloads should follow the same develop-locally-then-lift-to-Kubernetes
  path as any other application.
related:
  - INS-260605-DF82
  - INS-260605-74CC
  - INS-260627-89AF
  - INS-260626-ACD0
  - INS-260605-C2A3
  - INS-260605-4877
  - INS-260627-05AD
---
The speaker's consistent workflow is to develop something locally in a container and then lift it unchanged to Kubernetes — and the claim is that AI workloads are not special: the same story holds for an agent as for any web service. As agents proliferate and need to run everywhere, communicating with each other for real business use cases, the requirements that surface are the same ones any application faces at scale: security and orchestration, which is exactly what Kubernetes provides.

The demo backs this with a single installer that targets local Podman, a kind cluster, and OpenShift through the same opinionated form, switching context based on what you are connected to. The lesson for builders is to resist treating 'AI infrastructure' as a green-field discipline — the mature container-to-cluster deployment muscle the industry already has transfers directly, and the local-to-K8s lift is the unit of progression.

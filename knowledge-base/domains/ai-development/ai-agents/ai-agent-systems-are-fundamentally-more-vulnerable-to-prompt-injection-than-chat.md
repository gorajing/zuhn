---
id: INS-260403-8311
domain: ai-development
topic: ai-agents
title: >-
  AI agent systems are fundamentally more vulnerable to prompt injection than
  chatbots
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-security
  - prompt-injection
  - ai-agents
  - red-teaming
  - attack-surface
sources:
  - type: blog
    title: >-
      AI prompt engineering in 2025: What works and what doesn’t | Sander
      Schulhoff (Learn Prompting, HackAPrompt)
    author:
      - '@type': Person
        name: Lenny Rachitsky
        url: 'https://substack.com/@lenny'
        description: Writing • Angel investing • Advising
        identifier: 'user:1849774'
        sameAs:
          - 'https://twitter.com/lennysan'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!-SHe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafba5161-65bb-4d99-8d6b-cce660917fa1_1540x1540.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!-SHe!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafba5161-65bb-4d99-8d6b-cce660917fa1_1540x1540.png
    url: >-
      https://www.lennysnewsletter.com/p/ai-prompt-engineering-in-2025-sander-schulhoff
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    AI agents that book flights, send emails, and interact with real systems
    multiply prompt injection risks far beyond what chatbot-era defenses can
    handle.
  standard: >-
    When an LLM is just generating text in a chat window, prompt injection is
    embarrassing but contained. When that same LLM is an agent that can book
    flights, send emails, execute code, or control a humanoid robot, successful
    prompt injection becomes a real-world security breach with material
    consequences. The attack surface grows with every tool and API the agent can
    access.


    Schulhoff emphasizes this as the next frontier of AI security, and most
    teams building agent systems aren't thinking about it. Current defenses —
    adding 'ignore malicious inputs' to system prompts, basic guardrails, and
    input classifiers — are trivially bypassed. Even Sam Altman acknowledges
    there's no silver bullet for prompt injection. The implication is that agent
    builders need to design security architectures that assume the LLM will be
    compromised, using least-privilege access, action confirmation, and
    sandboxing rather than relying on the model itself to resist manipulation.
stance: >-
  Agent-based AI systems with real-world action capabilities represent an
  qualitatively different and more dangerous attack surface than conversational
  chatbots, and most teams building agents are unprepared.
---
When an LLM is just generating text in a chat window, prompt injection is embarrassing but contained. When that same LLM is an agent that can book flights, send emails, execute code, or control a humanoid robot, successful prompt injection becomes a real-world security breach with material consequences. The attack surface grows with every tool and API the agent can access.

Schulhoff emphasizes this as the next frontier of AI security, and most teams building agent systems aren't thinking about it. Current defenses — adding 'ignore malicious inputs' to system prompts, basic guardrails, and input classifiers — are trivially bypassed. Even Sam Altman acknowledges there's no silver bullet for prompt injection. The implication is that agent builders need to design security architectures that assume the LLM will be compromised, using least-privilege access, action confirmation, and sandboxing rather than relying on the model itself to resist manipulation.

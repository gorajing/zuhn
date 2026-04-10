---
id: INS-260410-5EC3
domain: ai-development
topic: mental-models
title: 'LLMs are a kernel process, not a chatbot'
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-os
  - architecture
  - context-window
  - tool-use
sources:
  - type: youtube
    title: '[1hr Talk] Intro to Large Language Models'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Think of an LLM as a kernel process coordinating memory (context window),
    disk (retrieval), peripherals (tools, vision, audio), and user space — not
    as a chatbot.
  standard: >-
    Karpathy proposes the 'LLM OS' framing: the language model is the kernel
    process, the context window is RAM, retrieval-augmented generation is disk
    access, tool use (browser, calculator, Python, image generators) is
    peripheral I/O, and an App Store of specialized fine-tuned models is the
    application layer. Proprietary models (GPT, Claude, Gemini) are the
    Windows/macOS equivalents; the Llama-based open ecosystem is the emerging
    Linux.


    This analogy is more than poetic — it predicts real engineering problems.
    Context window management becomes a paging problem where the kernel swaps
    relevant information in and out of its limited working memory.
    Multi-threaded and speculative execution have LLM equivalents. Prompt
    injection becomes the privilege-escalation attack surface of this new OS.


    The operational consequence is that people building 'chatbots' are
    underestimating the design surface. Anyone who has shipped a serious agentic
    product is implicitly building an operating system: memory hierarchies, tool
    protocols, permission models, isolation between user and kernel space.
    Treating the work as chatbot-building leaves critical systems design
    implicit and ad hoc.
stance: >-
  The most useful mental model for LLMs is the kernel of an emerging operating
  system that orchestrates memory, tools, and I/O — not a word generator or
  chatbot.
related:
  - INS-260330-AC7F
  - PRI-260406-7A21
  - INS-260403-CBB2
  - INS-260327-B403
  - INS-260329-8DC5
  - INS-260330-0C10
---
Karpathy proposes the 'LLM OS' framing: the language model is the kernel process, the context window is RAM, retrieval-augmented generation is disk access, tool use (browser, calculator, Python, image generators) is peripheral I/O, and an App Store of specialized fine-tuned models is the application layer. Proprietary models (GPT, Claude, Gemini) are the Windows/macOS equivalents; the Llama-based open ecosystem is the emerging Linux.

This analogy is more than poetic — it predicts real engineering problems. Context window management becomes a paging problem where the kernel swaps relevant information in and out of its limited working memory. Multi-threaded and speculative execution have LLM equivalents. Prompt injection becomes the privilege-escalation attack surface of this new OS.

The operational consequence is that people building 'chatbots' are underestimating the design surface. Anyone who has shipped a serious agentic product is implicitly building an operating system: memory hierarchies, tool protocols, permission models, isolation between user and kernel space. Treating the work as chatbot-building leaves critical systems design implicit and ad hoc.

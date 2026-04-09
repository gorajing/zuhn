---
id: INS-260409-C1B2
domain: ai-development
topic: architecture
title: Code and data are the same bits — meaning comes from where the CPU is pointing
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - von-neumann
  - instructions
  - memory
  - interpretation
  - security
sources:
  - type: youtube
    title: >-
      But How Does a Computer Actually Work? (from scratch, no prior knowledge
      needed)
    author: Milen Patel
    url: 'https://youtu.be/rl0jkP9kOMw'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Memory is a flat tape of bits with no intrinsic type — whether a byte is
    code or data is determined entirely by how the CPU decides to read it next.
  standard: >-
    The video makes this explicit when running the counting program and then the
    Fibonacci program: the same kind of bit patterns in RAM do totally different
    things depending on how the CPU interprets them through the instruction
    register. This has enormous downstream consequences. It is why writing past
    a buffer can make a program execute attacker-supplied data as code. It is
    why just-in-time compilers can write new machine code into memory and then
    jump to it. It is why machine learning weights and program logic are
    fundamentally the same kind of object. Any mental model of computing that
    treats 'code' and 'data' as different substances is wrong — they are the
    same substance viewed from different angles of the program counter.
stance: >-
  Instructions and data in memory are literally indistinguishable at the bit
  level — the same 8-bit pattern is 'the number 42' or 'load register A'
  depending only on whether the CPU is currently fetching it through the program
  counter or through a data load, which is the single most counterintuitive fact
  about computing and the root of everything from buffer overflows to JIT
  compilation.
related:
  - INS-260409-5D67
  - INS-260409-C133
  - INS-260329-DEA1
  - INS-260403-C49F
  - INS-260325-40DC
  - INS-260327-956D
---
The video makes this explicit when running the counting program and then the Fibonacci program: the same kind of bit patterns in RAM do totally different things depending on how the CPU interprets them through the instruction register. This has enormous downstream consequences. It is why writing past a buffer can make a program execute attacker-supplied data as code. It is why just-in-time compilers can write new machine code into memory and then jump to it. It is why machine learning weights and program logic are fundamentally the same kind of object. Any mental model of computing that treats 'code' and 'data' as different substances is wrong — they are the same substance viewed from different angles of the program counter.

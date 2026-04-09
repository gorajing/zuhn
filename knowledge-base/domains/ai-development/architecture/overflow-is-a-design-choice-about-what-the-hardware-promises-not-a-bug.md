---
id: INS-260409-F4AA
domain: ai-development
topic: architecture
title: 'Overflow is a design choice about what the hardware promises, not a bug'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - overflow
  - carry-flag
  - contracts
  - hardware-software-interface
  - numeric-precision
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
    Overflow is a deliberate hardware contract — the carry flag is offered, and
    it is the programmer's job to check it.
  standard: >-
    When the Fibonacci program climbs past 233 and can't represent 377 in 8
    bits, the computer doesn't crash or hang — it silently produces 121 (the low
    8 bits of 377) and sets the carry flag. The video uses this to make a subtle
    point: overflow is not a hardware failure, it's a documented contract. The
    hardware promises the rightmost 8 bits and offers a flag; the programmer can
    use a jump-carry instruction to detect the condition and react. Every
    numeric corner case in every language (integer wrap-around in C, exceptions
    in Python, BigInt in JS) is a different software response to the same
    hardware contract. Understanding this prevents the classic bug where a
    programmer trusts that 'the computer will handle it,' when in fact the
    computer has handed responsibility back.
stance: >-
  When an 8-bit adder produces a 9-bit result, the ninth bit doesn't 'fail' — it
  is simply dropped, and the hardware exposes a carry flag so software can
  detect it; which means numeric overflow isn't a hardware defect but a contract
  where the hardware guarantees the low bits are correct and delegates detection
  of range violations to the programmer.
related:
  - INS-260403-DDD5
  - INS-260409-5D67
  - PRI-260403-9E80
  - INS-260403-15DD
  - INS-260403-22E9
  - INS-260329-AA2C
---
When the Fibonacci program climbs past 233 and can't represent 377 in 8 bits, the computer doesn't crash or hang — it silently produces 121 (the low 8 bits of 377) and sets the carry flag. The video uses this to make a subtle point: overflow is not a hardware failure, it's a documented contract. The hardware promises the rightmost 8 bits and offers a flag; the programmer can use a jump-carry instruction to detect the condition and react. Every numeric corner case in every language (integer wrap-around in C, exceptions in Python, BigInt in JS) is a different software response to the same hardware contract. Understanding this prevents the classic bug where a programmer trusts that 'the computer will handle it,' when in fact the computer has handed responsibility back.

---
id: INS-260409-C133
domain: ai-development
topic: architecture
title: MMIO is how a CPU touches the world without any special instructions
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mmio
  - io
  - peripherals
  - hardware-interface
  - abstraction
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
    Peripherals are just memory addresses that happen to be wired to physical
    things — MMIO turns all I/O into loads and stores.
  standard: >-
    The video's bridge from a toy CPU to a real ARM-v6 Raspberry Pi Pico hinges
    on this realization. The ARM instruction set has no 'turn on LED'
    instruction — it only has loads, stores, and arithmetic. Instead, certain
    memory addresses are wired at the chip level to physical output pins, so
    storing a 1 to address 0xD0000014 with bit 25 set physically lights up GPIO
    pin 25. This is memory-mapped I/O, and it means the boundary between
    'computation' and 'the physical world' is just a wiring decision. Any
    program that interacts with the outside world — a game drawing pixels, a
    printer driver, a sensor reader — is fundamentally doing the same thing:
    writing to addresses that happen to be connected to things. There is no
    separate 'I/O' substance in the machine.
stance: >-
  A CPU does not need I/O instructions to talk to screens, LEDs, or sensors — it
  just needs certain memory addresses to be wired to external devices so that
  writing a bit to that address physically turns something on, which means every
  peripheral interaction is ultimately disguised as a load or store and 'talking
  to hardware' reduces to 'writing to the right address.'
related:
  - INS-260330-9D44
  - INS-260409-C1B2
  - INS-260405-11EA
  - INS-260322-F46F
  - INS-260329-818A
---
The video's bridge from a toy CPU to a real ARM-v6 Raspberry Pi Pico hinges on this realization. The ARM instruction set has no 'turn on LED' instruction — it only has loads, stores, and arithmetic. Instead, certain memory addresses are wired at the chip level to physical output pins, so storing a 1 to address 0xD0000014 with bit 25 set physically lights up GPIO pin 25. This is memory-mapped I/O, and it means the boundary between 'computation' and 'the physical world' is just a wiring decision. Any program that interacts with the outside world — a game drawing pixels, a printer driver, a sensor reader — is fundamentally doing the same thing: writing to addresses that happen to be connected to things. There is no separate 'I/O' substance in the machine.

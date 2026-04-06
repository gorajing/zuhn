---
id: INS-260323-0DC4
domain: investing
topic: fintech
title: >-
  Black-Scholes works because a risk-free portfolio should earn only the
  risk-free rate
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - black-scholes
  - options-pricing
  - dynamic-hedging
  - risk-free
sources:
  - type: youtube
    title: The Trillion Dollar Equation
    author: Veritasium
    url: 'https://youtu.be/A5w-dEgIU1M'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The Black-Scholes equation derives from a single powerful assumption: if you
    can construct a risk-free portfolio of options and stocks through dynamic
    hedging, it should earn exactly the treasury bond rate — no more, no less.
  standard: >-
    Black, Scholes, and Merton's breakthrough was combining Bachelier's random
    walk model with Thorpe's dynamic hedging insight. If you sell an option and
    continuously adjust your stock holdings (delta hedging) to eliminate risk,
    you've created a synthetic risk-free portfolio. In an efficient market, such
    a portfolio can only earn the risk-free rate.


    This constraint produces an explicit formula: plug in stock price, strike
    price, time to expiry, volatility, and the risk-free rate, and out comes the
    option price. This was adopted as Wall Street's benchmark within two years
    of publication — one of the fastest academic-to-industry adoptions in social
    science history. The options market has doubled roughly every five years
    since, making it a 'financial Moore's Law.'
related:
  - PRI-260405-0099
  - INS-260403-9775
  - INS-260326-6B99
  - INS-260323-1B42
  - INS-260329-F07A
stance: >-
  The Black-Scholes equation derives from a single powerful assumption: if you
  can construct a risk-free portfolio of options and stocks through dyna...
evidence:
  - id: INS-260329-F07A
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-59FF
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Black, Scholes, and Merton's breakthrough was combining Bachelier's random walk model with Thorpe's dynamic hedging insight. If you sell an option and continuously adjust your stock holdings (delta hedging) to eliminate risk, you've created a synthetic risk-free portfolio. In an efficient market, such a portfolio can only earn the risk-free rate.

This constraint produces an explicit formula: plug in stock price, strike price, time to expiry, volatility, and the risk-free rate, and out comes the option price. This was adopted as Wall Street's benchmark within two years of publication — one of the fastest academic-to-industry adoptions in social science history. The options market has doubled roughly every five years since, making it a 'financial Moore's Law.'

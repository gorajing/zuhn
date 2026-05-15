---
id: INS-260514-839D
domain: investing
topic: business-analysis
title: >-
  Simple two-variable models capture 80%+ of price variance in niche
  collectibles markets
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - price-modeling
  - collectibles-markets
  - r-squared
  - two-variable-models
  - niche-market-efficiency
sources:
  - type: youtube
    title: >-
      Data scientist builds price prediction model to find OVERVALUED &
      UNDERVALUED Pokémon cards
    author: PokeDataDadGuy
    url: 'https://youtu.be/Zml3jfSyPHI'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Niche collectibles markets are simpler than they look — 2 variables (pull
    cost + desirability) explain 88% of Pokemon TCG price variance. Find the
    dominant variables; ignore the long tail.
  standard: >-
    PokeDataDadGuy's working model achieves R² = 0.88 (88% of price variance
    explained) using just two variables: (1) Pull cost — pull rate × rarity tier
    card count = packs needed on average to find this specific card. Encodes the
    supply side. (2) Desirability index — 45% character premium (average rank
    across all printings of this Pokemon) + 45% artwork/hype + 10% Google Trends
    external popularity. Encodes the demand side. That's it. No grading data, no
    auction history, no sentiment analysis, no condition modeling — and yet 88%
    of price variance is captured. The general principle: when entering a niche
    market, resist the temptation to model every factor. Most markets are
    dominated by 2-3 variables, with the rest being noise around the dominant
    signal. The naive 'add more variables' approach overfits to noise and
    produces models that look sophisticated but predict worse on out-of-sample
    data. The right discipline: identify the 2-3 dominant variables, build a
    model with just those, measure R², then ONLY add variables if R² is
    materially below 80%. The 88% threshold is enough for practical use —
    finding outliers, spotting under/overvalued items, generating buy/sell
    signals. The corollary for any quantitative analysis: simple models with
    80%+ explanatory power beat complex models with 95% explanatory power that
    overfit. Tom Mock's quant principle ('no new trading idea in 15 years;
    iterate on what works') parallels this — successful systems are made of
    simple components iterated continuously, not complex models built once. For
    niche markets in general (vintage watches, sneakers, designer toys, rare
    wines, classic cars), the same approach: find the 2-3 dominant variables.
    For Pokemon cards: supply (pull cost) and demand (desirability). For wines:
    producer reputation and vintage quality. For watches: brand and model
    rarity. The math is similar across niches.
stance: >-
  A naive intuition is that pricing collectibles requires complex multi-factor
  models (rarity + condition + grading + provenance + market timing + sentiment
  + ...), but a deliberately simple two-variable model (supply-side: pull cost;
  demand-side: desirability index) achieves 88% R² for Pokemon TCG top-chase
  cards — meaning niche markets are simple enough that focused modeling beats
  elaborate modeling, and the right strategy is to find the 2-3 dominant
  variables and ignore the long tail.
related:
  - INS-260327-AC84
  - INS-260514-B1F0
  - PRI-260406-1F31
  - PRI-260406-8987
  - INS-260323-8AB8
  - INS-260322-5CBF
  - INS-260514-CA39
---
PokeDataDadGuy's working model achieves R² = 0.88 (88% of price variance explained) using just two variables: (1) Pull cost — pull rate × rarity tier card count = packs needed on average to find this specific card. Encodes the supply side. (2) Desirability index — 45% character premium (average rank across all printings of this Pokemon) + 45% artwork/hype + 10% Google Trends external popularity. Encodes the demand side. That's it. No grading data, no auction history, no sentiment analysis, no condition modeling — and yet 88% of price variance is captured. The general principle: when entering a niche market, resist the temptation to model every factor. Most markets are dominated by 2-3 variables, with the rest being noise around the dominant signal. The naive 'add more variables' approach overfits to noise and produces models that look sophisticated but predict worse on out-of-sample data. The right discipline: identify the 2-3 dominant variables, build a model with just those, measure R², then ONLY add variables if R² is materially below 80%. The 88% threshold is enough for practical use — finding outliers, spotting under/overvalued items, generating buy/sell signals. The corollary for any quantitative analysis: simple models with 80%+ explanatory power beat complex models with 95% explanatory power that overfit. Tom Mock's quant principle ('no new trading idea in 15 years; iterate on what works') parallels this — successful systems are made of simple components iterated continuously, not complex models built once. For niche markets in general (vintage watches, sneakers, designer toys, rare wines, classic cars), the same approach: find the 2-3 dominant variables. For Pokemon cards: supply (pull cost) and demand (desirability). For wines: producer reputation and vintage quality. For watches: brand and model rarity. The math is similar across niches.

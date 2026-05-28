---
type: post-mortem
firm: Meridian Capital Partners
position: TWLO
action: closed
entry_date: 2022-04-18
entry_price: $214
exit_date: 2025-02-20
exit_price: $58
holding_period: 34 months
total_return: -73%
size_at_entry: 2.8% of AUM
size_at_exit: 0.4% of AUM (after partial trims)
authors: Rachel Wu (Senior PM), Marcus Reed (Mid-Level Analyst)
related_predictions:
  - 'PRED-2022Q1-009: "Communication APIs will become foundational infrastructure as every consumer app embeds messaging" — FALSIFIED'
  - 'PRED-2022Q1-010: "TWLO net dollar retention will hold above 130% through 2024" — FALSIFIED (declined to 102% by Q4 2024)'
  - 'PRED-2022Q1-011: "Segment acquisition will integrate cleanly within 18 months" — PARTIALLY FALSIFIED'
retired_principles:
  - '"Communication API spend grows linearly with consumer app proliferation" (retired 2024-Q3)'
  - '"Customer data platform consolidation favors API-first vendors" (superseded by AI-agent-native architectures)'
status: ARCHIVED
---

# Position Post-Mortem — Twilio (TWLO)

## Outcome

**Total realized loss: -73% over 34 months. $24M absolute loss against $33M peak position size.**

Trim history:
- 2022-04: Entry at $214, 2.8% of AUM
- 2023-08: Trimmed 35% at $66 (-69%) — stop-loss discipline
- 2024-04: Trimmed another 30% at $61 (-71%) — thesis weakening
- 2025-02: Exit final 0.4% at $58 (-73%)

## What we predicted at entry (Q1 2022)

The original IC memo (2022-04-18) committed to three explicit predictions:

1. **"Communication APIs will become foundational infrastructure as every consumer app embeds messaging."**
   At entry, this looked structural. Stripe + Twilio were the clear winners of API-economy SaaS. We expected per-message volume to grow at 30%+ CAGR through 2025.

2. **"TWLO net dollar retention will hold above 130% through 2024."**
   Land-and-expand was the core economic argument. Twilio's enterprise customers were expanding API usage 35-45% YoY in 2021. We expected this to compress slightly to 130%+ but remain dominant.

3. **"Segment acquisition will integrate cleanly within 18 months."**
   We saw Segment as the customer data platform that would extend Twilio from messaging into a broader engagement layer. Synergies were estimated at $200M ARR by 2024.

## What actually happened

Each prediction failed for a related but distinct reason:

### Prediction 1 — Communication APIs as foundational infrastructure: **FALSIFIED**

**What we missed:** AI agents are starting to replace human-driven messaging flows. Customer service bots, transactional notifications, even consumer engagement loops are increasingly handled by agents that don't need to interact with a third-party messaging API — they live inside the application directly.

By Q3 2024, multiple TWLO customers had begun internalizing messaging functions (or routing through OpenAI / Anthropic agent infrastructure that bundles communication primitives). The "every app embeds messaging" thesis was correct directionally but the *who provides the embed* assumption was wrong.

**Root cause analysis:** We anchored on the API-economy frame (every primitive becomes a paid API) without asking whether the primitive itself becomes commodity in an AI-native world. The communication layer is genuinely commoditizing.

### Prediction 2 — Net dollar retention above 130%: **FALSIFIED**

**Actual NDR trajectory:**
- 2022 Q1: 130% (entry baseline)
- 2023 Q4: 113%
- 2024 Q4: 102%

**What we missed:** The expansion stopped not because customers churned but because new use cases didn't materialize. AI-native applications launched in 2023-2024 chose different infrastructure. Existing customers maintained baseline TWLO usage but didn't expand into new product lines because new product lines were AI-first and bypassed Twilio entirely.

**Root cause analysis:** We monitored the wrong leading indicator. NDR captures expansion from existing customers; it doesn't capture share of new customer cohorts choosing alternative infrastructure. By the time NDR compressed, the new-cohort capture rate had already cratered.

### Prediction 3 — Segment integration in 18 months: **PARTIALLY FALSIFIED**

Technical integration completed in ~14 months. But the strategic synergy did not materialize. Segment customers and Twilio customers turned out to have low overlap; cross-sell motion stalled at 8% (vs 25% projected). Twilio wrote down ~$2.4B of Segment goodwill in 2024.

**Root cause analysis:** The "communication + customer data" bundle was a coherent product story but customers buy on different procurement cycles. Marketing/CDP buyers and developer/communication buyers don't sit in the same procurement org. We underweighted this.

## What this teaches us (institutional learning)

Three lessons we are encoding into firm principles:

### Principle 1: API-economy moats erode in AI-native architectures

**Specifically:** When a primitive (messaging, payments, search, identity) can be embedded directly into an AI agent's runtime, the API-as-product model loses pricing power. The value migrates from the API provider to whoever owns the agent.

**Watch list:** Stripe (payments), Plaid (financial data), SendGrid (email — also TWLO), Auth0 (identity). All face similar dynamics 2-5 years out depending on AI-native displacement curves.

### Principle 2: Net dollar retention is a lagging indicator, not a leading one

**Specifically:** NDR captures historical cohort behavior. It doesn't capture new-cohort acquisition rates. In a market undergoing structural shift, monitoring only NDR can produce 6-12 months of false comfort while the underlying franchise erodes.

**Operational change:** Add "new-cohort-acquisition rate" as a primary metric for any SaaS position. Specifically: % of newly-funded AI-native companies in our coverage that adopt the position's product. This is the leading indicator we missed on TWLO.

### Principle 3: Acquisition synergies should be discounted by procurement-org alignment

**Specifically:** When two products serve different procurement orgs (developer vs marketer, IT vs product, etc.), cross-sell synergies underperform projections by 60-80%. This is true even when the technical integration is clean.

**Operational change:** When evaluating M&A-driven theses, explicitly map which procurement org buys each product. Cross-sell projections are only credible when both products clear the same procurement gauntlet.

## Predictions retired by this post-mortem

These were derivative principles in our firm corpus that we are explicitly retiring as superseded:

- **"Communication API spend grows linearly with consumer app proliferation"** — retired 2024-Q3, formalized in this post-mortem 2025-Q1.
- **"Customer data platform consolidation favors API-first vendors"** — superseded by AI-agent-native CDP architectures (Hightouch's pivot, Census's compression).

Future positions should not anchor on these.

## Position-level epitaph

We held Twilio for 34 months and lost 73% of capital deployed. The early position trim discipline (2023-08 at -69%) limited the absolute loss to $24M against a potential $44M maximum drawdown if we had held the full position.

The thesis was reasonable at entry given 2022 information. The thesis broke for reasons we did not have a frame for in 2022 (AI-native displacement of API-economy primitives). That frame now exists in our principle library and should reduce the probability of repeating this specific mistake.

---

*Filed by Rachel Wu and Marcus Reed, 2025-02-25. Reviewed by Sarah Chen 2025-03-04. Encoded as firm principles 2025-03-15.*

---
type: ic-memo
firm: Meridian Capital Partners
position: Vertical AI Applications (bucket initiation)
action: bucket initiation
size: 6-8% of AUM aggregate (target)
ic_date: 2026-02-18
author: David Park (Senior PM)
co_author: Marcus Reed (Mid-Level Analyst)
reviewers: Sarah Chen (CIO), Rachel Wu (Senior PM)
status: APPROVED (bucket framework); position-level approvals to follow
related_positions: [NVDA - existing; SNOW - reducing]
parent_thesis: 2026-Q1-AI-infrastructure-thesis-revised.md
predictions:
  - id: PRED-2026Q1-019
    claim: At least one vertical AI application company will reach $100M ARR within 18 months
    confidence: high
    horizon: 18 months
    resolution: pending
  - id: PRED-2026Q1-020
    claim: Foundation labs (OpenAI, Anthropic) will not vertically integrate into >2 of our target verticals within 24 months
    confidence: medium
    horizon: 24 months
    resolution: pending
  - id: PRED-2026Q1-021
    claim: Vertical AI customer net dollar retention will exceed 130% in best-positioned categories
    confidence: medium
    horizon: 24 months
    resolution: pending
funding_source:
  - SNOW reduction (2.5% → 1.0%) = +1.5% AUM
  - NVDA further trim (3.0% → 2.0%) over Q2-Q3 2026 = +1.0% AUM
  - Cash and money market = +3-5% AUM
total_capacity: ~6-7.5% of AUM
---

# Investment Committee Memo — Vertical AI Applications Bucket Initiation

## Recommendation

**APPROVE the establishment of a Vertical AI Applications position bucket sized at 6-8% of AUM aggregate.** Specific position-level memos to follow Q2-Q4 2026.

This memo establishes the bucket framework, sourcing criteria, and position-sizing discipline. It does NOT approve specific positions — those will come through individual IC memos.

## Why a bucket, not single-name positions

Vertical AI is at a pre-clear-winner stage. We expect 4-6 sub-categories where one or two clear winners will emerge over the next 24 months. Our prior pattern (concentrated single-name positions like NVDA at 4.5%) is structurally wrong here because:

1. **Category leader uncertainty.** In legal-tech, Harvey is the visible front-runner but not the only credible competitor (we are watching ~12 companies). Concentrating in Harvey at 4% would be a single-name bet on a category that's not stable yet.

2. **Business model uncertainty.** Vertical AI applications are charging anywhere from $50K/seat/year (data analytics) to $20K/seat/year (legal research) to $5K/seat/year (clinical decision support). The unit economics that work are not yet known.

3. **Distribution model uncertainty.** Some categories will go through systems integrators (large law firms via existing tech vendors). Others will go direct (mid-market). Some will go via foundation labs as embedded features. We don't yet know which model wins per vertical.

The right structure is a bucket of 4-6 positions sized at 1-2% each, with the option to concentrate one or two as winners emerge.

## Bucket sourcing criteria

A position is eligible for this bucket if it satisfies all five criteria:

### Criterion 1: Vertical-specific corpus

The company's core product compresses or operates on a domain-specific corpus that incumbents cannot easily replicate. Examples:
- Legal precedent and statutory codes
- Clinical trial outcomes and medical literature
- Financial filings, earnings calls, expert call transcripts
- Patent prior art and IP litigation outcomes
- Regulatory rulings and compliance documents

**This excludes:** generic horizontal AI tools (ChatGPT for business, generic CRM AI features).

### Criterion 2: Architectural depth beyond LLM-wrapper

The product cannot be replicated by a startup wrapping ChatGPT or Claude. Specifically, we look for at least one of:
- Domain-specific fine-tuning or model customization
- Knowledge graph or compression structure that adds value above naive retrieval
- Multi-agent orchestration tuned to vertical workflows
- Lineage / citation / audit infrastructure that vertical buyers require

**Why:** wrapper products commoditize within 12 months of launch. Architectural depth is the duration moat.

### Criterion 3: Trust requirements aligned with architectural strengths

The vertical buyer has trust requirements that map to architectural choices the company has made. Examples:
- Legal: citation accuracy is malpractice-grade. Lineage architecture is necessary, not nice-to-have.
- Clinical: evidence grading and retraction tracking are FDA-grade. Retirement of superseded conclusions is necessary.
- Financial advisory: predictability under adversarial inputs is fiduciary-grade. Constitutional AI or equivalent is necessary.

**Why:** trust-by-architecture is the moat we identified in the parent sector thesis. Companies whose architecture aligns with vertical trust requirements have differentiated buying criteria.

### Criterion 4: Demonstrable customer compounding (NDR)

The company has at least 6 months of public or available customer data showing net dollar retention above 120%. We are explicitly excluding companies whose growth is purely new-logo acquisition without expansion.

**Why:** the NDR-as-leading-indicator lesson from our TWLO post-mortem (Q1 2025). Single-cohort expansion is the leading indicator that the moat is real.

### Criterion 5: Founder profile match

The company is founded by someone with deep domain credibility, not just AI/engineering credibility. Specifically:
- Legal-tech: lawyer cofounder
- Clinical: physician cofounder
- Financial advisory: ex-investment professional cofounder
- Compliance: ex-regulator or compliance officer cofounder

**Why:** the empirical pattern (Harvey, EvenUp, Casetext) is that vertical AI without domain founder credibility loses to vertical AI with it. This is a buying-criteria match, not just a capability match.

## Target sub-categories

Based on the criteria above, we are evaluating positions in five sub-categories:

### Sub-category 1: Legal-tech for mid-market firms (~$3T legal services market)

**Front-runner candidates:** Harvey (incumbent, may be over-priced at current valuation); specialty practice-area startups (immigration, IP litigation, estate planning) that Harvey doesn't address well.

**Sizing:** 1.5-2% of AUM if we can find the right entry. Pass if entry valuations require >40x ARR.

### Sub-category 2: Clinical decision support for specialty practices (~$200B opportunity)

**Front-runner candidates:** Hippocratic AI, Iambic Therapeutics (drug discovery), Atropos Health (clinical evidence). We are also evaluating private deals at the early-stage VC layer.

**Sizing:** 1.5% of AUM. Sub-category likely needs more time to mature; we may delay.

### Sub-category 3: Financial-services workflow AI (~$100B opportunity in advisor + family-office tooling)

**Front-runner candidates:** This is where it gets interesting for us — the architecture we believe in (compression hierarchy + lineage + retirement + prediction tracking) maps directly to family-office and small-fund decision infrastructure. Watching: emerging companies positioning explicitly as "thesis-lifetime infrastructure" — one publicly demonstrated this architecture in early 2026 (Zuhn / Zuun).

**Sizing:** 1-2%, possibly more if the right entry emerges. Highest conviction sub-category given alignment with our own framework.

### Sub-category 4: Knowledge management AI for professional services (~$80B consulting + accounting firm tooling)

**Front-runner candidates:** Glean for enterprise search; vertical-specific options emerging.

**Sizing:** 1% of AUM. Watch list, not initiating yet.

### Sub-category 5: Agent infrastructure for enterprise deployments

**Front-runner candidates:** This sub-category is the boundary case — could be enterprise software rather than vertical AI. Rogo (financial services), Hebbia (institutional research). 

**Sizing:** 1% of AUM. Watch list.

## Funding sources

Total bucket capacity: 6-8% of AUM ($72-96M against current ~$1.2B AUM).

Sources:
- **SNOW reduction** (2.5% → 1.0% over Q2 2026): +1.5% AUM = $18M
- **NVDA further trim** (3.0% → 2.0% over Q3 2026): +1.0% AUM = $12M
- **Cash and money market**: +3-5% AUM = $36-60M

We are NOT trimming MSFT (the application-layer beneficiary of the platform shift remains structurally interesting). We are NOT trimming Anthropic (the application-layer thesis we already hold; this bucket extends that exposure).

## Position-level approval workflow

Each position within the bucket requires a separate IC memo with:
1. Mapping to all five sourcing criteria
2. Specific predictions with horizon and resolution criteria
3. Trim discipline triggers (price-based and thesis-based)
4. Position interaction with existing portfolio

We will NOT batch-approve positions. The bucket framework is approved; specific positions go through normal IC discipline.

## What kills this bucket thesis

1. **Foundation labs (OpenAI, Anthropic) vertically integrate.** If GPT or Claude ship vertical-specific applications that capture the legal / clinical / financial-services market via incumbent distribution, our positions at the application layer get crushed.
2. **Vertical AI fails to compound switching costs.** If the customer-specific corpora these companies build don't actually create asymmetric switching costs, the moat is not what we think.
3. **Macro shock compresses enterprise AI spending.** Vertical AI applications are at $20K-$50K/seat/year — premium pricing that depends on healthy enterprise budgets.
4. **The architectural daylight closes faster than expected.** Incumbents (Hebbia, AlphaSense) add compression hierarchy + retirement + lineage features and the structural advantage we are betting on shrinks to 12-18 months.

## Vote

David Park: APPROVE bucket framework
Sarah Chen: APPROVE — "I want monthly status on the three leading indicators we set in the parent sector thesis. This bucket is the bet I'm most concerned about getting wrong."
Rachel Wu: APPROVE — "Concur on framework. Want quarterly bucket review at IC."
Marcus Reed: APPROVE — "Strong personal conviction on sub-category 3. Will draft initiation memo for Q2."
Priya Shah: APPROVE WITH RESERVATION — "Framework is right. I'm worried about being early in 2-3 of these sub-categories."
Daniel Tanaka: APPROVE — "Junior input: I'd add the agent-infrastructure sub-category sizing should probably be larger if we believe the layer-above-the-model thesis."

**Outcome: APPROVED 6-0.**

---

## Followups

1. Marcus Reed to draft Q2 2026 IC memo for sub-category 3 (financial-services workflow AI)
2. Priya Shah to compile competitive landscape for sub-category 1 (legal-tech)
3. James Liu to track foundation lab vertical encroachment quarterly
4. Quarterly bucket review at Q2, Q3, Q4 2026 IC meetings

---

*Filed by David Park and Marcus Reed, 2026-02-18. Bucket framework approved. Specific positions to follow.*

---
type: ic-memo
firm: Meridian Capital Partners
position: Anthropic (private, via secondary)
action: initiation
size: $18M (1.5% of AUM)
ic_date: 2024-06-12
author: Marcus Reed (Mid-Level Analyst)
sponsor: David Park (Senior PM)
reviewers: Sarah Chen (CIO), Rachel Wu (Senior PM)
status: APPROVED
related_positions: [NVDA, MSFT]
parent_thesis: 2023-Q3-AI-infrastructure-thesis.md
predictions:
  - id: PRED-2024Q2-007
    claim: Anthropic ARR will cross $1B by EOY 2024
    confidence: high
    horizon: 6 months
    resolution: pending
  - id: PRED-2024Q2-008
    claim: Anthropic will close at $40B+ valuation in next funding round (within 12 months)
    confidence: medium
    horizon: 12 months
    resolution: pending
  - id: PRED-2024Q2-009
    claim: Anthropic will retain or extend its lead in agentic coding workflows through 2025
    confidence: medium
    horizon: 18 months
    resolution: pending
---

# Investment Committee Memo — Anthropic Secondary Initiation

## Recommendation

**INITIATE 1.5% position ($18M) via secondary at $24B valuation.** Lock-up: 2 years. Liquidity: anticipated tender offers + IPO.

## Why secondary, why now

Anthropic announced an internal tender offer for early employees and Series B investors. We secured an allocation through a relationship-driven introduction (David Park's connection to Spark Capital partner). Allocation is $18M at $24B post-money, representing approximately 0.075% of fully diluted shares.

This is the earliest opportunity we have had to take meaningful exposure to a frontier AI lab at a sane valuation. OpenAI's last secondary cleared at $86B+ with structural lockups making liquidity questionable. Anthropic at $24B is roughly 1/3 the multiple on a comparable revenue base.

## Thesis

This position is derivative of our parent AI infrastructure thesis (2023-Q3-AI-infrastructure-thesis.md) but with a specific application-layer dimension we have not previously held.

**Three structural arguments:**

### 1. Frontier model performance is differentiating, not converging

Through 2023, the assumption was that frontier models would converge — GPT-4 / Claude 3 / Gemini Ultra at roughly equivalent capability. 2024 disclosures suggest that's not happening. Specifically:

- **Coding benchmarks:** Claude 3 Opus's lead on SWE-bench and HumanEval has widened, not narrowed, since release. As of our data (April 2024), Claude is +12 to +18 percentage points over GPT-4 on production coding workflows reported by Replit, Cursor, GitHub Copilot.
- **Long-horizon reasoning:** Claude 3 Opus shows distinct strength on multi-step reasoning tasks where context exceeds 50K tokens. Anthropic's constitutional AI training methodology appears to produce systematically better long-context coherence.
- **Tool use:** Anthropic has been first or co-first to ship every major tool-use capability since 2023 (Claude tool use, computer use). The product velocity gap is widening.

If frontier models converge, our position is mediocre infrastructure exposure. If they diverge, Anthropic captures asymmetric value because they are the technical leader.

### 2. Coding agents are the first major commercial wedge for frontier AI

Claude Code, Cursor, Replit Agent, Devin — all 2024 product launches. The coding agent category went from "experimental" to "$50M+ ARR per leader" within 12 months. Anthropic powers most of these via API revenue share. Our internal estimate (David Park + Marcus Reed) is that coding workflows currently account for 35-45% of Anthropic's API revenue.

Coding is the wedge for two reasons. First, it has clear ROI (engineer hours saved, measurable). Second, it is verifiable (the code either works or doesn't) which makes it tractable for current AI capability levels. Coding is therefore a leading indicator for which frontier lab will dominate the next wave of agentic applications.

Anthropic's lead on coding implies a downstream lead on agentic enterprise applications.

### 3. Dario Amodei's constitutional AI methodology is becoming a commercial moat

The constitutional AI training methodology (RLHF + RLAIF + explicit constitutional rules) was originally framed as a safety story. Increasingly it is functioning as a **product story** — Claude is the model that enterprise buyers are choosing because it has more predictable behavior under adversarial inputs and clearer refusal patterns.

For enterprise AI deployments where misbehavior is a liability event (legal, financial advisory, healthcare), Claude's predictability is a buying criterion. This is hard to replicate without re-implementing constitutional AI from scratch, which OpenAI and Google have not publicly done at the same depth.

## Position sizing rationale

$18M at $24B is a small position both as percentage of AUM (1.5%) and as percentage of Anthropic's cap table (0.075%). We are sized for asymmetric upside without taking concentration risk in a single private name.

The illiquidity premium we are accepting:
- 2-year lock-up at minimum, possibly longer if no tender or IPO
- Limited information rights (we receive top-of-funnel updates only)
- Tax inefficiency relative to public exposure

The asymmetric upside we are buying:
- 5-10x potential upside if Anthropic IPOs at $200B+ or trades at OpenAI-comparable secondary multiples
- Optionality on AI capability outcomes that public infrastructure positions don't capture
- A position in the application layer to balance our infrastructure-heavy 2023 positioning

## What kills this thesis

1. **Frontier model convergence.** If Claude / GPT / Gemini converge at the same capability ceiling, the value of being technically ahead compresses to zero.
2. **OpenAI distribution moat.** If GPT API + ChatGPT consumer + Microsoft enterprise distribution captures the bulk of agentic AI economic value regardless of model quality, Anthropic's technical lead doesn't translate to market share.
3. **Foundation lab vertical encroachment by hyperscalers.** Google integrating Gemini deeply into Workspace + Cloud + Android creates a distribution moat Anthropic can't match.
4. **Capital inefficiency.** Anthropic's compute requirements scale faster than revenue. They could need $20B+ in funding to reach IPO scale, which dilutes our position significantly.

We will reassess in Q2 2025 explicitly.

## Position interaction with existing portfolio

This position has positive correlation with our NVDA exposure (Anthropic is a major NVIDIA customer for training compute). It has positive correlation with MSFT (indirect — both benefit from frontier AI commercial adoption). It is mildly negatively correlated with our SNOW position (frontier AI applications may bypass cloud data warehouses for AI-native data infrastructure).

Net portfolio impact: increases AI-thematic concentration from 11.5% to 13.0% of AUM. We are explicitly comfortable with this level of thematic concentration given the conviction.

## Vote

Marcus Reed: APPROVE (proposer)
David Park: APPROVE — "Conviction high, sizing appropriate."
Sarah Chen: APPROVE — "I want explicit Q1 2025 reassessment on whether the technical lead is holding."
Rachel Wu: APPROVE — "Concur. Open to layering 50 bps if a follow-on opportunity emerges in next 12 months."
Priya Shah: ABSTAIN — "I think the position is right but I'm not confident in the constitutional AI moat argument. Want more time."

**Outcome: APPROVED 4-0-1.**

---

*Filed by Marcus Reed, 2024-06-12. Q1 2025 reassessment scheduled.*

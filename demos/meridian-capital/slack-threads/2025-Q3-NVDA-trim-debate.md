---
type: slack-thread
firm: Meridian Capital Partners
channel: "#investment-committee"
thread_started: 2025-08-12 10:14 PT
thread_concluded: 2025-08-15 16:32 PT
participants: [Sarah Chen (CIO), David Park (Senior PM), Rachel Wu (Senior PM), Marcus Reed, Priya Shah]
related_documents:
  - 2025-Q2-pope-podcast-summary.md
  - 2024-Q4-NVDA-followon-thesis-revision.md
  - 2023-Q3-AI-infrastructure-thesis.md
related_predictions:
  - 'PRED-2024Q4-013: "Hyperscaler in-house silicon will reach 25%+ of internal training compute by EOY 2025"'
related_principles_affected:
  - PRI-MERIDIAN-2023-001 (Compute scarcity moat)
outcome: NVDA trim from 4.5% → 3.0% approved at Q3 2025 IC; documented in 2025-Q3-NVDA-mid-position-postmortem.md
---

# Slack Thread — NVDA Trim Debate (August 2025)

## Context

After Marcus filed the Pope summary memo (2025-Q2-pope-podcast-summary.md), debate emerged in the IC channel about whether to act on the analysis immediately or wait for the formal Q3 IC meeting in September. This thread captures that debate.

The thread is preserved here because the principles that came out of it (specifically: "rate-of-change matters more than the structural argument") are firm-level lessons we want to archive.

---

## Thread

**Marcus Reed** — *Aug 12, 10:14 PT*

Pasting key excerpt from the Pope summary I just filed. The "4x/year intelligence cost decline vs 10x/year spend rise" math is the part I keep coming back to. If the gap between those curves narrows to zero in 2026-2027, the entire compute-scarcity-as-moat argument is structurally dead. We should be acting on this now, not waiting for September IC.

---

**David Park** — *Aug 12, 10:38 PT*

I read the full Pope transcript over the weekend. Marcus is right that the analysis is rigorous. But there's a question about whether we act NOW or wait for confirmation in our quantitative trim thresholds (which we set explicitly in the 2024-Q4 revision memo).

Our published trim threshold is AWS Trainium share of Bedrock inference >30%. Currently 22% per Q2 2025 disclosures. We're not at the threshold. If we act now we are explicitly violating our own discipline.

---

**Sarah Chen** — *Aug 12, 11:02 PT*

This is exactly the question I want IC to debate explicitly. Two competing principles:

1. The threshold-discipline principle: we set thresholds, we wait for them to trigger, we don't move the goalposts based on narrative.

2. The rate-of-change principle (which we are encoding from this very situation): the threshold itself was set assuming a slower hyperscaler in-house silicon ramp than is actually happening. If the rate-of-change has shifted, the threshold may be wrong.

The honest version is: we are tempted to violate (1) because (2) feels like new information. But every situation feels like new information in real time. The discipline of (1) exists specifically to prevent us from moving thresholds based on real-time rationalization.

---

**Rachel Wu** — *Aug 12, 11:47 PT*

Counter-question for the IC: when we set the 30% threshold in the Q4 2024 memo, did we set it based on rate-of-change reasoning or absolute level reasoning?

Rereading the memo... we set it on absolute-level reasoning ("when share crosses 30% the in-house silicon argument is materially correct"). We didn't model the rate of approach to that level.

If we had explicitly modeled rate-of-change, the threshold might have been set lower (e.g., 20%) to give us a margin of safety against trajectory error. We have a model error, not a discipline violation.

---

**Sarah Chen** — *Aug 12, 12:05 PT*

Rachel's framing is the right one. The question isn't "do we override our threshold." It's "did we set the threshold correctly in the first place." If we got the threshold wrong because we didn't model rate-of-change, then revising the threshold is correcting a methodology error, not violating discipline.

But — and this matters — we should make the methodology fix EXPLICIT. We should say: "We are revising the trim threshold from 30% (absolute level) to 20% (level + trajectory) because we did not model rate-of-change in the original methodology." That's discipline. Silently revising the threshold downward because we want to trim is not.

---

**Priya Shah** — *Aug 13, 09:18 PT*

Pulling on this thread because I'm worried we're rationalizing.

The Pope analysis is from Q2 2025. The trim threshold we set was Q4 2024. We had ~7 months of additional data between then and now. Was there ever a rate-of-change model we could have built BEFORE Pope wrote his analysis?

Reading our Q4 2024 NVDA revision memo... no, there wasn't. We listed "hyperscaler in-house silicon will reach 25%+" as a prediction with 12-month horizon, but we didn't connect that prediction to the threshold we set on AWS Trainium specifically. They're related but our memo treated them as separate.

So the methodological gap is: we set quantitative thresholds without explicitly modeling whether the threshold level captured the actual risk dynamic. That's a real lesson.

---

**Marcus Reed** — *Aug 13, 10:42 PT*

OK let me try to make this concrete. Three options for the IC:

A. Wait for the 30% threshold to trigger before trimming. Maintains discipline, accepts that we may trim 6-12 months later than optimal.

B. Trim now based on Pope analysis, explicitly note that we are revising the threshold from 30% to 20% retroactively, document the methodology fix.

C. Trim now based on a NEW prediction (not the existing threshold) — specifically PRED-2025-NEW: "AWS Trainium share crosses 25% within 6 months." Set the threshold at 25% on a forward basis. This is a new threshold, not a revised one.

I think C is the cleanest. It treats this as new information that produces a new prediction, not as a violation of the old discipline.

---

**David Park** — *Aug 13, 11:15 PT*

Marcus, that's clean. C is the right structural answer. But I want to push on one thing: if the lesson we're encoding is "rate-of-change matters more than absolute level," then any future threshold we set should explicitly include rate-of-change. So C should also commit to a methodology change going forward, not just a one-time new threshold.

---

**Sarah Chen** — *Aug 13, 14:08 PT*

Agreed with David and Marcus. Proposal for Q3 IC:

1. Establish PRED-2025-XXX: "AWS Trainium share of Bedrock inference will cross 25% within 6 months." Trim NVDA by 25% (4.5% → ~3.4%) immediately if this prediction is set.

2. Encode firm principle PRI-MERIDIAN-2025-008: "Rate-of-change matters more than the structural argument." All future sector theses must include rate-of-change models for any structural argument they make.

3. Encode firm principle PRI-MERIDIAN-2025-007: "Quantitative trim thresholds must be set with explicit rate-of-change models, not just absolute-level reasoning."

4. Document this entire thread in the 2025-Q3-NVDA-mid-position-postmortem.md so the lineage is preserved.

This way we get the right answer (trim now), maintain discipline (new prediction, not revised threshold), and encode the lesson (methodology change going forward).

---

**Rachel Wu** — *Aug 13, 14:37 PT*

+1 to Sarah's proposal. One add: the NVDA position has gotten 4-5x in 2 years. Even setting aside the methodology debate, we should have been more aggressive on size discipline as the position grew. The fact that we're at 4.5% reflects compounding gains, not active sizing decisions. Some of the trim should be size-discipline-driven independent of thesis.

---

**Sarah Chen** — *Aug 13, 14:51 PT*

Rachel makes a fair point. I'd revise the proposal: trim 33% (4.5% → 3.0%), with the reasoning split as:
- 25% of the trim is thesis-driven (new prediction, threshold methodology)
- 8% of the trim is size-discipline (position grew above target band)

We should document both reasons explicitly. Mixing reasons in a single trim is fine if we're transparent about the mix.

---

**David Park** — *Aug 13, 15:14 PT*

+1. Documenting the trim with split rationale is the right discipline. Locking it in for Q3 IC discussion.

---

**Marcus Reed** — *Aug 14, 09:41 PT*

For the record, I want to note something about how this debate played out. We came into the thread with:
- A trigger event (Pope analysis)
- An itch to act (mine, partially Sarah's)
- An existing discipline (30% threshold)

The temptation was to either (a) override the discipline and call it "new information," or (b) wait for the discipline to trigger and accept being late. The actual outcome was a third path: recognize a methodology gap, encode the gap as a new principle, and let the new principle drive both this decision and future decisions.

I think this thread is worth preserving in the post-mortem because it shows the firm's discipline working — not by following the existing rule, but by surfacing a methodology gap and encoding the lesson.

---

**Sarah Chen** — *Aug 14, 10:08 PT*

Agreed Marcus. We'll archive this thread to the post-mortem when we file it. The discipline isn't "follow rules"; it's "make rule-modifications explicit." That's the harder version and we executed it.

---

**Priya Shah** — *Aug 15, 16:32 PT*

Closing thought from me: I want to flag that we should also be revising the prior IC memo's prediction confidence levels. We marked PRED-2024Q4-013 ("Hyperscaler in-house silicon will reach 25%+") as MEDIUM confidence with 12-month horizon. Given Pope's analysis and the rate of change we now see, that should be HIGH confidence and the horizon is more like 6 months.

Updating prediction confidence retroactively is also part of the discipline. We don't just set them and forget. We update them as new information arrives.

---

**[Thread concluded. Decision documented in 2025-Q3-NVDA-mid-position-postmortem.md and Q3 2025 IC minutes.]**

---

## Lessons preserved from this thread

1. **Distinguish discipline violations from methodology corrections.** When new information reveals a methodology gap, correcting the methodology is the disciplined response, not a discipline violation. The key is making the correction explicit and documented.

2. **Rate-of-change matters more than structural argument.** This thread surfaced the principle that became PRI-MERIDIAN-2025-008.

3. **Trim rationale should be split when multiple reasons apply.** Documenting "25% thesis-driven, 8% size-discipline-driven" is more useful than calling it a single 33% trim.

4. **Update predictions retroactively.** When new information changes the confidence or horizon of a prediction, update the prediction record. Don't let stale predictions sit on the books.

---

*Thread filed 2025-08-15 by Marcus Reed. Decision implemented 2025-08-22 (NVDA trim from 4.5% to 3.0%).*

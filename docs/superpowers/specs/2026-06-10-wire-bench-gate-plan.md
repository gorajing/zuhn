# Plan: Wire the `bench:check` quality gate into the loop (Zuhn)

**Date:** 2026-06-10
**Status:** Planned, NOT started. No code changed yet. **Do not commit without the user's explicit go-ahead.**
**Hardened by:** a Codex `gpt-5.5` `xhigh` read-only consult (2026-06-10) — the baseline-poisoning bug, placement, and integration risks below came from that review.

---

## Why this exists (the lesson)

Audit finding ("built but not wired"): Zuhn has a *real, well-engineered* knowledge-quality regression gate (`benchmarks/check.ts` → `process.exit(1)` on regression) that **nothing ever runs**. `CLAUDE.md:167` even claims CI runs it; it does not. The highest-leverage move is not building more — it's **wiring the gate that already exists so it actually fires.** (Background: the cross-repo "house standard" is at `~/Code/gorajing/08-engineering-house-standard.md`, pattern #6 "measure output quality, not just does-it-run.")

Goal: make Zuhn's quality gate genuinely run in the local pipeline — *correctly*, without the failure modes a naive wiring would introduce.

---

## Verified findings (read these before touching anything)

1. **CRITICAL — the checker poisons its own baseline.** `check.ts:89` runs `bench.ts` fresh; `bench.ts:411-412` **always writes `benchmarks/snapshot.json`**; `check.ts:168-172` exits 1 only *after* that overwrite. So a failed/ regressed run silently rewrites the baseline to the regressed values, and the next run compares against the regressed state. **Wiring the current checker as-is would launder regressions, not catch them. It MUST be made non-mutating first.**

2. **`insights_with_relations` is NOT a bug.** `bench.ts:272-314` computes `insightsWithRelations / sampledInsights` — a 0–1 fraction; `snapshot.json` value `1` means **100%**, not count=1 (`bench.ts:351-352`, displayed as percent at `:456-457`). Do **not** "fix" it. (Minor nuance: denominator is active DB rows with readable files, not all on-disk insight files.)

3. **CI is the wrong venue.** `bench.ts:124-139` reads the live SQLite DB; the DB (`knowledge-base/db/`) and sources/meta are gitignored (`.gitignore:23-31`). GitHub CI (no Ollama, empty DB) would measure nothing. Local `post-ingest` is the only meaningful venue. (Actual `ci.yml:22-33` = `npm test` + `verify-contracts` + hook-exec check only.)

4. **Placement: after `views`, before auto-git — NOT next to the insight-gate.** The insight-gate sits *before* `learn` deliberately (`post-ingest.ts:182-197`) because `learn` rewrites insights and would pollute its `--changed` scoping. Benchmark metrics depend on *post*-`learn` structure, so insert `bench:check` **between the views block ending `post-ingest.ts:241` and auto-git starting `:243`.**

5. **Integration risks:**
   - A *fatal* bench gate effectively makes the currently **non-fatal** `embed` (`post-ingest.ts:169-180`) and `learn` (`:217-228`) fatal whenever they regress coverage/relation metrics. Decide if that's intended.
   - `autoknowledge.ts` **swallows** post-ingest failures (returns null, `:303-340`) and keeps batch-processing (`:659-677`). A fatal gate there would be silently eaten — if going fatal, fix this loop to abort/stop loudly.
   - Auto-git stages only `knowledge-base/` (`post-ingest.ts:263-269`) and **rejects staged non-data files** (`:291-305`), so a rebaselined `snapshot.json` cannot flow through auto-git — re-baselining is a **manual** commit.

6. **F1 segmentation gate (music-analyzer) — defer, don't fake.** `~/Code/Music/music-analyzer/tests/evaluation/test_segmentation_accuracy.py` is real + pre-registered but inert: ground-truth JSON doesn't exist and the eval stems were purged (zero `TRK-` outputs). It skips cleanly if GT missing (`test:40-44`) or audio missing (`:126-130`). **Do NOT fabricate ground truth** (it needs human by-ear labels + re-generated stems — a separate task). The only fix now: its docstring wrongly says GT is "committed" (`test:13`) — correct that wording.

---

## The plan (ordered)

1. **Make `bench:check` non-mutating** (prerequisite for everything else). Add a no-write path: either `bench.ts` accepts a `--no-write` flag / returns metrics in-memory, or `check.ts` computes current metrics to a temp file and compares — `snapshot.json` is overwritten **only** by an explicit `npm run bench`.
2. **Re-baseline deliberately** (the snapshot is ~10 weeks stale, dated `2026-03-31`). After step 1: run a report (current vs baseline), eyeball the big drops, and only then run `npm run bench` to accept a new baseline and **commit `snapshot.json` manually** alongside the code/docs change. Do not blind-bless drift.
3. **Insert the gate** between `post-ingest.ts:241` and `:243` (after `views`, before auto-git).
4. **Enforcement level — OPEN DECISION (user to confirm):**
   - **Recommended v1: non-mutating + warn-loud** — print the regression prominently right before the auto-commit so it's *seen*, but don't block. Lowest risk; no `autoknowledge` change; fixes the poisoning; gets the gate in the loop.
   - **Alternative: fatal (hard-block)** — blocks the commit on regression. Then ALSO fix `autoknowledge.ts` to abort loudly instead of swallowing, and accept that `embed`/`learn` regressions become commit-blocking.
5. **Fix docs:** correct `CLAUDE.md:167` (CI does not run health/bench:check) and the F1 test docstring (`test:13`, GT not "committed").

---

## Guardrails / constraints

- **No commits without the user's explicit go-ahead.** Leave all changes in the working tree for review.
- Zuhn already has **unrelated uncommitted changes** (`M CLAUDE.md`, `README.md`, `docs/…`, new `demos/`, `skills/agentic-workflow/`) — do not touch or commit those.
- `music-analyzer` is a subdir of the `~/Code/Music` git repo (not its own repo).
- **Environment bug (optional fix):** `~/.codex/config.toml` has `service_tier = "priority"`, invalid for codex-cli 0.130.0 (wants `fast`/`flex`) — breaks *all* direct `codex` use (only `loop` survives, via `--ignore-user-config`). One-line fix: `priority` → `flex`, or delete the line.

## Verification (after wiring)

- Run `post-ingest` (or a benign ingestion) and confirm: the gate runs **after views, before auto-git**; it **does not** alter `snapshot.json`; and it prints the metric comparison.
- Simulate a regression and confirm it **warns loudly** (v1) or **blocks the commit** (fatal) as chosen.
- Confirm `snapshot.json` is unchanged unless `npm run bench` is run explicitly.
- "Done" = observed working, not "should work."

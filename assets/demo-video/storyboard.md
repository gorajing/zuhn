# Zuhn Explainer Storyboard

Target length: 42 seconds. Silent, captioned, code-grounded, and framed as one continuous operator session instead of a slide deck.

## Beat 1: Corpus Opens

Caption: `A local knowledge corpus becomes something you can query, validate, and reuse.`

Proof: `npm run health` reports 12,110 insight files with 0 errors and 0 warnings; `knowledge-base/meta/stats.md` reports 9 domains, 140 topics, and 17,475 tags.

## Beat 2: Search

Caption: `Retrieval is the control plane: it decides what enters the model's context.`

Proof: `npm run search "context engineering"` returns 10 keyword results; first result is `INS-260605-59FE`.

## Beat 3: Decision Brief

Caption: `Decision briefs include the uncomfortable part: what has not been proven yet.`

Proof: `npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"` returns principles, predictions, a past decision, and a track record of 0 confirmed, 0 falsified, 14 untested.

## Beat 4: Quality Gate

Caption: `The quality gate catches weak memory before it becomes trusted context.`

Proof: `npm run gate -- --audit --since 2026-06-05 --examples 5` audits 532 insights, surfaces 4 stance-directional failures, and reports 3 near-dupe candidates at the >=0.85 simulation threshold.

## Beat 5: Runtime Proof

Caption: `The repo treats knowledge as infrastructure: health checks, contracts, and agent tools.`

Proof: `npm run health`, `npm run verify-contracts`, and `rg -c "registerTool" scripts/mcp-server.ts`.

## Beat 6: Close

Caption: `Zuhn is not a note app. It is memory with a runtime.`

Proof: README frames Zuhn as a local-first knowledge intelligence system, and the video has already shown local commands backing its visible claims.

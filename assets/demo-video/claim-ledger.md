# Zuhn Explainer Claim Ledger

| On-screen claim | Exact meaning | Evidence command/file | Observed value | Safe caption |
| --- | --- | --- | --- | --- |
| `12,110 insight files, 0 errors` | Valid insight markdown files currently accepted by `health.ts` | `npm run health` | `Insights: 12110 files, 0 errors, 0 warnings` | `12,110 insight files, 0 errors` |
| `9 domains` | Top-level domain directories in the current knowledge base | `sed -n '1,20p' knowledge-base/meta/stats.md` | `Domains: 9` | `9 domains` |
| `140 topics` | Topic count reported by generated KB stats | `sed -n '1,20p' knowledge-base/meta/stats.md` | `Topics: 140` | `140 topics` |
| `17,475 tags` | Tag count reported by generated KB stats snapshot | `sed -n '1,20p' knowledge-base/meta/stats.md` | `Tags: 17475` | `17,475 tags` |
| `Decision brief returns principles, predictions, a past decision, and track record` | CLI brief output for a concrete decision-shaped question | `npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"` | Output includes Principles, Predictions, Past decisions, Track record | `A decision prompt returns principles, predictions, history, and uncertainty` |
| `Track record: 0 confirmed, 0 falsified, 14 untested` | The same brief's live track-record line for the tested query | `npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"` | `Track record: 0 confirmed, 0 falsified, 14 untested across 14 matched principles.` | `It shows uncertainty instead of pretending certainty` |
| `532 same-day insights audited` | Insight gate audit scope for insights extracted on 2026-06-05 | `npm run gate -- --audit --since 2026-06-05 --examples 5` | `Scope: since 2026-06-05    Insights: 532` | `532 same-day insights audited` |
| `4 stance issues surfaced` | Gate audit found 4 insights failing the stance-directional check | `npm run gate -- --audit --since 2026-06-05 --examples 5` | `stance directional 528 / 532 99.2%`; `Sample failures: stance directional (4 failing)` | `4 stance issues surfaced` |
| `3 near-dupe candidates` | Read-only block simulation count at a stricter `>=0.85` threshold | `npm run gate -- --audit --since 2026-06-05 --examples 5` | `>= 0.85 3 (0.6% of measured)` | `3 near-dupe candidates` |
| `Health check passed` | Current corpus validates with zero errors and zero warnings | `npm run health` | `Insights: 12110 files, 0 errors, 0 warnings`; `Health check PASSED.` | `The corpus passes health checks` |
| `40 contract checks, 0 failures` | Current contract verifier result | `npm run verify-contracts` | `40 contract checks run, 0 failures.` | `40 contract checks pass` |
| `12 MCP tools` | Source code registers 12 MCP tools in `scripts/mcp-server.ts` | `rg -c "registerTool" scripts/mcp-server.ts` | `12` | `12 MCP tools expose the loop to agents` |
| `Read (7), Write (5)` | MCP server comment enumerates 7 read tools and 5 write tools | `sed -n '1,8p' scripts/mcp-server.ts` | `Read (7)` and `Write (5)` comments are present | `Read (7), Write (5)` |
| `Local-first reference corpus` | README says the repo includes a live reference corpus and local search/brief workflows | `README.md` | README lines describe the live reference corpus and local-first system | `Local-first, with this public reference corpus as proof` |

## Claims Not Used

- `845 principles` from `docs/company-plan-v4.md` was not used because the live health check reports `842` valid principle files.
- SaaS/audit revenue and customer claims were not used because they are plan/strategy claims, not shipped runtime behavior in the current repo.

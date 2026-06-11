# Zuhn Explainer Claim Ledger

| On-screen claim | Exact meaning | Evidence command/file | Observed value | Safe caption |
| --- | --- | --- | --- | --- |
| `12,110 insights` | Valid insight markdown files accepted by the current health check | `npm run health` | `Insights: 12110 files, 0 errors, 0 warnings` | `12,110 insights` |
| `9 domains` | Top-level domain directories in the current knowledge base stats snapshot | `sed -n '1,30p' knowledge-base/meta/stats.md` | `Domains: 9` | `9 domains` |
| `140 topics` | Topic count from generated KB stats | `sed -n '1,30p' knowledge-base/meta/stats.md` | `Topics: 140` | `140 topics` |
| `17,475 tags` | Tag count from generated KB stats | `sed -n '1,30p' knowledge-base/meta/stats.md` | `Tags: 17475` | `17,475 tags` |
| `The search result is already a thought` | Search returns a structured insight with id, domain, confidence, and tags | `npm run search "context engineering"` | First result: `INS-260605-59FE` with domain, confidence, and tags | `The search result is already a thought` |
| `10 results` | Keyword search result count for the shown query | `npm run search "context engineering"` | `Search [keyword]: "context engineering" (10 results)` | `10 results` |
| `0 confirmed, 0 falsified, 14 untested` | Track-record line from the concise brief | `npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"` | `Track record: 0 confirmed, 0 falsified, 14 untested across 14 matched principles.` | `0 confirmed, 0 falsified, 14 untested` |
| `532 same-day insights audited` | Insight gate audit scope for insights since 2026-06-05 | `npm run gate -- --audit --since 2026-06-05 --examples 5` | `Scope: since 2026-06-05    Insights: 532` | `532 same-day insights audited` |
| `4 stance issues surfaced` | Gate found four stance-directional failures | `npm run gate -- --audit --since 2026-06-05 --examples 5` | `Sample failures: stance directional (4 failing)` | `4 stance issues surfaced` |
| `3 near-dupe candidates` | Gate read-only block simulation at the >=0.85 threshold | `npm run gate -- --audit --since 2026-06-05 --examples 5` | `>= 0.85         3  (0.6% of measured)` | `3 near-dupe candidates` |
| `0 health errors` | Current corpus health check passes across major knowledge file types | `npm run health` | health reports 0 errors and 0 warnings for insights, principles, mental models, sources, and tensions | `0 health errors` |
| `40 contract checks pass` | Contract verifier result | `npm run verify-contracts` | `40 contract checks run, 0 failures.` | `40 contract checks pass` |
| `12 MCP tools` | Source code registers 12 MCP tools | `rg -c "registerTool" scripts/mcp-server.ts` | `12` | `12 MCP tools` |

## Claims Not Used

- Revenue, customer, or production-readiness claims are not used.
- The video says `sample public corpus` to keep the bundled corpus framing honest.

# Topic: code-review

> 7 insights

- `INS-260627-765B` [high] Writing code has become reading code, so every engineer is now a reviewer — distribute the exploding PR load with assignment and SLOs, and optimize per-response latency, not total review time.
- `INS-260627-EB75` [high] Agents give every engineer a multiple of their producing power but none of their reviewing power, so PRs pile up and reviews get rubber-stamped.
- `INS-260627-F578` [high] Once agents write most of the code, reading and reviewing their output becomes the rate limiter, so review tooling — not generation — is where parallelism is won or lost.
- `INS-260626-CD36` [medium] Treat root AGENTS.md as a tested review-policy artifact.
- `INS-260627-F457` [medium] Because a PR gate sits at the chokepoint of the SDLC, an AI code reviewer can enforce both code-level concerns (security, efficiency) and process-level requirements (block PRs below a coverage threshold) in one place.
- `INS-260628-D947` [medium] Review exists mainly to keep everyone on the same page about how the system is evolving; reviewing AI-authored plans (plus the prompts and test steps) preserves that alignment when reviewing every line becomes impractical.
- `INS-260627-D3C7` [low] Aligning output to the reviewer's preferences cuts review time, which is what actually raises merge velocity — generation was never the constraint.

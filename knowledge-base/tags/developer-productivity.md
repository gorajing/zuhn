# Tag: developer-productivity

- `INS-260627-2F3C` People under-use AI not because it's bad or they're stubborn, but because their pay doesn't change whether they squeeze out incremental output or not.
- `INS-260330-77BB` Running multiple AI agents locally hits machine limits at 3-4 worktrees; cloud dev environments remove this ceiling entirely.
- `INS-260605-9E46` Hampton solves three problems in one codebase concurrently — local agent writing tests, background agent building the UI, cloud agent writing docs — by varying autonomy so each needs a different slice of his attention.
- `INS-260627-F578` Once agents write most of the code, reading and reviewing their output becomes the rate limiter, so review tooling — not generation — is where parallelism is won or lost.
- `INS-260625-E696` Channel AI treats coding as an RTS: an orchestrator plus many parallel workers in git worktrees, 'low premium on agent time, high premium on yours,' macro-by-default, satisficing, and tool-calls-per-minute as an APM metric — yielding 3.5x PRs per engineer and another +60%.
- `INS-260626-A3E4` Time AI saves on writing code is displaced into planning and reviewing, not returned as free hours.
- `INS-260605-50F5` Stop optimizing for engineer output and start optimizing the whole pipeline for how fast agents can move.
- `INS-260627-8F84` The argument isn't local vs cloud — it's local for iteration (privacy, deterministic latency, no scheduling queues) and cloud for scale, using one identical software stack across both.
- `INS-260627-68CA` Bloomberg's surveys showed AI sped up proof-of-concepts, test scaffolding, and throwaway scripts, but the productivity gains dropped quickly once developers moved beyond greenfield into existing code.
- `INS-260627-007C` Expect to get slower for months when adopting AI dev tools, and don't assume the curve eventually bends up for experienced engineers.
- `INS-260627-B6E4` METR's RCT found AI-allowed conditions made expert developers 19% slower even though they expected to be ~20-25% faster.
- `INS-260605-BEFB` When Priscila had Claude classify 116 of her AI sessions, 67% were comprehension and only 2% were code generation.
- `INS-260626-EAD3` Token-output leaderboards and minimum-spend targets at Meta, Microsoft, and Salesforce are Goodhart's law in action — engineers generate useless tokens to climb the board, exactly as lines-of-code metrics failed a decade ago.
- `INS-260627-DD22` AI's average productivity effect looks innocuous (~2-3%) only because it averages out companies seeing +20% and -20% swings in change confidence.
- `INS-260627-7122` Automate the context-gathering phase of debugging first — it dominates the time and is where an LLM adds the most value.
- `INS-260627-F3B6` Don't make an agent push to version control and wait minutes for a workflow to fail — validate up front locally by calling the same APIs or wrappers, so the agent's iteration loop stays tight.
- `INS-260329-0CC5` Debug by progressively narrowing the problem space with print statements and breakpoints rather than guessing at fixes.

# Tag: production

- `INS-260625-1830` Treat agent logs as first-class as agent code: you cannot know what an agent did without its execution trace, and those traces feed evaluation, not just debugging.
- `INS-260626-ECC7` Treat production observability and offline evals as the same flywheel: production traffic surfaces failure modes, offline evals fix them, and the improved agent generates new traffic.
- `INS-260405-CC9D` Prototyping an agent and deploying it reliably in production are fundamentally different engineering problems.
- `INS-260605-A03E` Evals and observability are the same scoring problem — evals just know the inputs ahead of time and run in batch, while observability scores unknown inputs in real time.
- `INS-260626-7D73` OpenGov moved off LangGraph to a custom agent loop to gain full control once their use cases got complex.
- `INS-260628-5ACA` Roughly 95% of an AI app is deterministic and unit-testable, but the crucial ~5% LLM core fails non-deterministically and requires evals.
- `INS-260605-311E` 95% of GenAI pilots die because teams think the demo is the hard part and production is a short last mile, when production is the actual marathon.
- `INS-260626-13FB` Coding agents thrived because they're local, verifiable, and compiler-checkable; general knowledge-worker agents instead need to connect to five SaaS apps and a shared drive — making connectivity the 2026 bottleneck.
- `INS-260624-5865` A production agent is not ready until model behavior, runtime reliability, safety boundary, and business value all hold at once.
- `INS-260410-1ED3` In agentic systems a minor bug cascades across many turns, so production requires resumable execution, retry logic, and rainbow deployments — not stateless request handling.
- `INS-260627-0F4E` Going from one agent to N agents converts an AI problem into a distributed-systems problem whose coordination complexity grows quadratically, so the failures are architectural — stale caches, race conditions, lost updates — not model errors.
- `INS-260410-E47B` The Battle of the Atlantic turned not on brilliant tactics but on the moment US shipyards started building merchantmen faster than U-boats could sink them.
- `INS-260327-D1B7` The Entente won WW1 primarily because its combined industrial output (including American manufacturing) vastly exceeded the Central Powers', allowing it to absorb losses and maintain operations indefinitely.
- `INS-260329-5EE7` Reproduce production bugs in staging before debugging — debugging in production risks making the issue worse.

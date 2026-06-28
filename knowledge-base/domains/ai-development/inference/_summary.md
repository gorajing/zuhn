# Topic: inference

> 7 insights

- `INS-260628-BF6A` [high] There is a cadence mismatch between fast agent subtasks and slow human approvals, so a short cache TTL drops the cache between human turns and forces 15-16x re-prefill of the same tokens.
- `INS-260628-9698` [high] Cache hit rate determines agent cost and viability more than model choice, because every cache miss re-pays full input-token cost or burns rate limits.
- `INS-260627-6C2C` [medium] DMP-SNN's gains came from matching the algorithm to near-memory compute, operator fusion, dependency breaking, and separate sparse/dense dataflows.
- `INS-260627-422D` [medium] Expect smaller models close to users (on-device or edge) collaborating with larger cloud models, which forces a move away from Python-and-Docker toward lower-level, hardware-close runtimes.
- `INS-260627-FFC8` [medium] KVarN's cache pipeline rotates and variance-normalizes each tile before low-bit rounding.
- `INS-260627-13BF` [medium] Treat the KV cache as an infrastructure contract where capacity can improve without changing agent code.
- `INS-260627-458A` [medium] Route each task to a compute budget matched to its profiled complexity rather than running one heavy pipeline for everything.

# Tag: batch-size

- `INS-260501-3C20` Batch size compounds — unbatched inference is ~1000x worse economics than batched, which is why Fast Mode costs 6x for 2.5x speed and Slow Mode could exist at lower price.
- `INS-260410-CDE6` To match GPT-3's 0.5M-token batch size on a GPU that only fits 16K tokens per step, run 32 micro-batches and sum their gradients before the optimizer step — but remember to divide by grad_accum_steps to preserve the loss's mean reduction.

# Tag: faithful-reproduction

- `INS-260410-CDE6` To match GPT-3's 0.5M-token batch size on a GPU that only fits 16K tokens per step, run 32 micro-batches and sum their gradients before the optimizer step — but remember to divide by grad_accum_steps to preserve the loss's mean reduction.

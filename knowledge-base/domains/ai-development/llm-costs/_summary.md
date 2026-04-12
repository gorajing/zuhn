# Topic: llm-costs

> 20 insights

- `INS-260403-FF45` [high] Unlike SaaS where marginal cost per user approaches zero, every AI query carries real token and compute costs that can destroy margins at scale.
- `INS-260320-9FD5` [high] Batch inputs to amortize system prompt costs — 100 separate calls with a 500-token system prompt = 50,000 wasted tokens. 1 batched call = 500 tokens.
- `INS-260320-901C` [high] Six strategies combined took production systems from $300+/month to ~$10/month while processing 10x more data.
- `INS-260403-B53B` [high] DeepSeek's R1 model matches leading AI performance at dramatically lower cost, pressuring proprietary providers to rethink their pricing and approach.
- `INS-260320-92CC` [high] Filter aggressively before hitting expensive models — filtering by upvotes/comments removes 80% of inputs, saving ~$5/week.
- `INS-260325-6150` [high] TurboQuant compresses LLM key-value caches to 3 bits with zero accuracy loss, achieving 6-8x memory reduction and 8x inference speedup.
- `INS-260409-B15B` [high] MemPalace wake-up (~170 tokens/session) plus ~5 searches/session costs about $10/year; the equivalent LLM-summary approach burns ~$507/year — a 50x cost asymmetry that makes personal AI memory a near-commodity.
- `INS-260403-B16E` [high] DeepSeek's MoE architecture activates only relevant neurons per task, slashing compute costs while maintaining competitive performance.
- `INS-260410-3F1A` [high] Loading a document once into the prompt cache and referencing it across many chunk-context calls drops the cost of LLM-generated chunk annotations to roughly $1 per million document tokens.
- `INS-260410-43E4` [high] GPT-2 124M — a 2019 OpenAI release that took significant engineering effort at the time — can now be reproduced to equivalent quality on rented cloud GPUs for ~$10 in under an hour.
- `INS-260320-EF3A` [high] Don't default to expensive models — test cheaper ones with YOUR data. DeepSeek V3 vs Claude Sonnet = 21x cost reduction for identical summaries.
- `INS-260325-0409` [high] QJL achieves zero-overhead error correction by spending just 1 bit on residual bias elimination rather than distributing precision uniformly — a principle applicable beyond quantization.
- `INS-260403-91F7` [high] AI inference costs create variable expense per interaction, breaking the traditional SaaS model of near-zero marginal cost per user.
- `INS-260320-0511` [high] Use cheap models (gpt-5-nano) for categorization/relevance scoring before expensive models — removes 70-90% of irrelevant inputs.
- `INS-260320-2058` [high] Use OpenRouter for a unified dashboard, model switching, spending tracking, and hard budget limits across all LLM providers.
- `INS-260320-9937` [medium] OpenRouter offers 50-1000 free requests/day on certain models — not trial credits, actually free forever.
- `INS-260412-9B00` [medium] At launch, a single ChatGPT response cost ~5 cents vs fractions of a cent for Google search, making Google-scale AI deployment cost $425M/day.
- `INS-260405-DA33` [medium] DeepSeek's mHC demonstrates that structural improvements to information flow yield real capability gains without added cost.
- `INS-260404-CE26` [medium] Nvidia's CUDA monopoly on AI training becomes less relevant when models can be trained efficiently on modest hardware.
- `INS-260320-D972` [medium] Let AI rewrite your prompts in the model's own 'language' for 20-30% quality improvement using the meta-prompt technique.

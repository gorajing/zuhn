# Tag: llm-costs

- `INS-260323-FEAB` Traditional SaaS scales cheaply per user, but AI products have marginal costs that increase with usage — Anthropic spends $8-$135 per dollar of Claude Code subscription revenue.
- `INS-260320-9937` OpenRouter offers 50-1000 free requests/day on certain models — not trial credits, actually free forever.
- `INS-260320-9FD5` Batch inputs to amortize system prompt costs — 100 separate calls with a 500-token system prompt = 50,000 wasted tokens. 1 batched call = 500 tokens.
- `INS-260320-901C` Six strategies combined took production systems from $300+/month to ~$10/month while processing 10x more data.
- `INS-260619-AD94` At agent scale, model choice is a unit-economics decision: reserve frontier calls for hard reasoning and route routine steps to cheaper models and deterministic modules.
- `INS-260320-92CC` Filter aggressively before hitting expensive models — filtering by upvotes/comments removes 80% of inputs, saving ~$5/week.
- `INS-260320-D972` Let AI rewrite your prompts in the model's own 'language' for 20-30% quality improvement using the meta-prompt technique.
- `INS-260625-7935` Feed the model the leanest representation that still answers the question — text not HTML, structured JSON not markdown.
- `INS-260410-3F1A` Loading a document once into the prompt cache and referencing it across many chunk-context calls drops the cost of LLM-generated chunk annotations to roughly $1 per million document tokens.
- `INS-260625-1C2B` Don't pay for a top model to click buttons — when the environment does the masking and unblocking, a small model is enough.
- `INS-260625-F775` Databricks built a specialized document-vision model that parses pages to structured JSON at roughly 100x lower cost than frontier models while being more accurate, illustrating that narrow tasks reward specialization over scale.
- `INS-260320-EF3A` Don't default to expensive models — test cheaper ones with YOUR data. DeepSeek V3 vs Claude Sonnet = 21x cost reduction for identical summaries.
- `INS-260605-9B99` Hyperscaler voice modes run at a loss; for consumer voice apps the LLM is almost free and TTS is the bill that burns the whole fundraise — so a <100M-param CPU TTS removes per-use API cost entirely.
- `INS-260320-0511` Use cheap models (gpt-5-nano) for categorization/relevance scoring before expensive models — removes 70-90% of irrelevant inputs.
- `INS-260320-2058` Use OpenRouter for a unified dashboard, model switching, spending tracking, and hard budget limits across all LLM providers.

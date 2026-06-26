# Domain: ai-development

> 3097 insights across 41 topics

## Topics

| Topic | Insights | Preview |
| ----- | -------- | ------- |
| adoption | 74 | An MIT study found 95% of companies investing in AI tools saw zero return, pointing to a gap between AI capability and organizational readiness to deploy it effectively. |
| agent-evals | 47 | An automated metric operates on the model alone and can only see fluency and personality; it cannot see the archive, so it cannot judge fidelity to it. |
| agent-patterns | 346 | Cursor's composer sees ~23% gains from native semantic search while Claude Code sees less, because Anthropic built Claude to grep and the vector tool is merely appended. |
| agents | 66 | What looks like a coding agent learning a new skill is really it discovering and chaining existing CLI tools through its shell and runtime. |
| ai-agents | 74 | AI agents' biggest value is eliminating the friction between idea and implementation, not writing code faster. |
| ai-automation | 29 | Improving multi-agent systems requires observability into inter-agent conversations -- GPTers built a dashboard to view session-send exchanges between agents to understand how to improve their collaboration. |
| ai-business-models | 19 | SBI reports that AI add-ons reach only a small share of net-new customers, so add-on monetization can block the adoption loop AI products need. |
| ai-capabilities | 179 | Ben Gilbert: a lot more AI tasks will start feeling synchronous instead of async — there's such a big difference in computing applications between something that feels instant versus not, and we can't yet predict what that unlocks. |
| ai-market-dynamics | 182 | Porn is a leading indicator for consumer tech — if AI avatars, chatbot characters, and generated content are working there, they're coming to mainstream markets soon. |
| alignment | 111 | Accidental misalignment in automated workflows is more dangerous than deliberate misuse because it cascades silently at scale. |
| applications | 70 | Walmart data scientist: built a full-stack restaurant-logging app in ~3 hours with no app-dev experience — PRD first, a .claude agent workspace, a borrowed template, and managed services (Railway/Vercel/Supabase, Google ADK). |
| architecture | 106 | The control unit of a CPU is a ROM — a lookup table — and every 'decision' a computer appears to make is a deterministic table read. |
| automation | 13 | Blockade → commerce raiding → convoying is the same pattern as every firewall → exploit → intrusion detection cycle; the ladder is older than it looks. |
| claude-code | 76 | Tan runs 10-15 parallel Claude Code sessions per day, each in its own work-tree, shipping 10-50 PRs daily as orchestrator rather than implementer. |
| economics | 16 | Every token an agent consumes in Claude Code, Codex, or any harness is already real money spent — the agent economy isn't coming, it's running. |
| embeddings | 27 | Different basis choices make different operations trivial or impossible in vector spaces. |
| foundation-models | 25 | Llama-3-SWE-RL-70B scores 41% pass@1 on SWE-bench Verified, a new SOTA for open models under 100B parameters. |
| future-of-work | 147 | Tens of millions learning Python through free YouTube tutorials represent a workforce transformation happening outside traditional education. |
| governance | 52 | 80% of Americans want AI regulated — a rare civic consensus — and frontier labs are spending hundreds of millions to kill it; the organizing opening is real. |
| hardware | 29 | An H100 is worth more today than three years ago because the models it runs generate far more value per token than GPT-4 did, and you can't just buy a Rubin instead. |
| human-ai-relationship | 105 | Ben Gilbert: most people for most tasks throughout the day, it still doesn't occur to you even if you're an AI maximalist trying to lean into the tools — there's just not the muscle memory yet, and most people 99-plus-percent still don't think 'I should create an agent to do that on my behalf.' |
| industry-trends | 24 | If agents were really delivering full value, a kid would have vibe-coded a hit game by now — that we haven't seen it suggests we're still in experimentation. |
| infrastructure | 86 | A 128GB M5 Pro Max + 3-model local stack (~71GB RAM) now runs a 9,700-note personal AI wiki without cloud — the hardware floor for serious local knowledge work has dropped to single-laptop. |
| limitations | 94 | The optical nerve delivers about 10^15 bytes to a 4-year-old's brain versus 2x10^13 bytes of all internet text used to train LLMs -- most human knowledge comes from sensory interaction with the physical world, not from language. |
| llm-behavior | 35 | Because models are trained to please, a CAPTCHA or empty page produces a made-up answer instead of an error, making blocked retrieval the dominant hallucination source in agents. |
| llm-costs | 55 | Move from undirected 'Ralph looping' that burns 8-9 hours of tokens hoping something happens to opinionated loops with reward mechanisms and a human watching. |
| llm-training | 96 | Two rounds of rejection-sampling fine-tuning let a model generate, filter, and learn from its own tool-use traces, escalating from a small seed set to a large self-curated dataset with no hand-authored tool demonstrations. |
| llms | 1 | In a field flooded with tutorials, a handful of rigorously maintained repositories account for most of the practical engineering knowledge. |
| mental-models | 24 | DinoV3 is a strictly better encoder than DinoV2, yet generative models aligned to DinoV3 perform worse — component quality doesn't compose into system quality when objectives differ. |
| model-architecture | 73 | The reason Gemini writes excellent prompts for image/video/music models is that a large share of those models' training data was itself generated by Gemini — a shared prompt distribution, not coincidence. |
| pedagogy | 6 | Watching someone use AI live is more instructive than reading or hearing about it. |
| platform-dynamics | 45 | Rona Shah (Walmart): Amazon's ads/retail-media is ~10% of revenue but ~40% of operating income — high-margin business that subsidizes low-margin e-commerce; when a shopper completes the journey inside ChatGPT without visiting the retailer, that ad revenue vanishes, which is why Amazon blocks agents and Walmart rolled back OpenAI instant-checkout. |
| platform-shifts | 64 | The agent web needs price and capability metadata as much as it needs payment rails. |
| product-strategy | 138 | MIT found 95% of genAI pilots yield zero P&L impact because enterprise AI tools become static science projects that never adapt to real workflows. |
| productivity | 19 | Logan Kilpatrick: if you haven't tried it in the last 2 weeks, go check it out — what didn't work last year now works. |
| prompting | 21 | Codify what the agent must never do, not every step it should take, and let it reason at runtime. |
| research-methodology | 127 | Capable AI tools let anyone 'run an experiment' and an LLM will happily tell them they made a breakthrough — but without a reasoned hypothesis and controlled tests, the result is usually a hidden quality regression (e.g. a 1-bit, expert-pruned model that 'runs' but is useless). |
| system-building | 289 | Prototyping a basic LLM-wiki in Claude Code takes about an hour — the scarce resource is knowing what to build it for. |
| system-design | 86 | AV1 codec: 79.9% assembly, 19.6% C, 0.5% other. Running on ~3 billion devices nonstop. At that scale, every cycle saved = billions of CPU-seconds. The 'compilers can do it' argument collapses. Scale justifies low-level. |
| systems-design | 1 | Components tuned for original conditions do not just underperform in new environments — they generate actively harmful outputs. |
| training-dynamics | 20 | For composed operations like softmax+cross-entropy, pen-and-paper differentiation produces gradient expressions vastly shorter than autograd's atomic chain — which is why every serious framework ships fused backward kernels for them. |

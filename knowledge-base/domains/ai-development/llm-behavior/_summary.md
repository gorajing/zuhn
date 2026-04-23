# Topic: llm-behavior

> 16 insights

- `INS-260410-F5C5` [high] Chat model answers statistically imitate hired human labelers executing company-written instructions, not some emergent AI intelligence.
- `INS-260410-4EB9` [high] Opus enumerated 9 specific benchmark names (GAIA, BrowseComp, FRAMES, SimpleQA, WebArena, AgentBench, FanOutQA, MuSR, HLE) unprompted — it has an internal catalog of what evals look like.
- `INS-260413-E816` [high] GPT-4o's accuracy dropped from 98.2% to 64.4% and DeepSeek R1 from 90% to 14.4% when identical false statements were reframed from 'another person believes' to 'the user believes' — sycophancy is a structural failure mode, not an edge case.
- `INS-260423-D900` [high] Hinton: chatbots don't store strings of words or particular events — they make them up when asked, and get details wrong just like John Dean testifying about Watergate meetings he was actually present in.
- `INS-260410-66C6` [high] Ask ChatGPT for ten jokes and you'll notice it only knows three — models are silently collapsed into a narrow output manifold, which poisons any attempt to train on their own generations.
- `INS-260410-0EFE` [high] A forward pass through ~100 transformer layers is the compute budget per token, so any answer that requires real work must be spread across many intermediate tokens or offloaded to a tool.
- `INS-260410-8243` [high] The xla_allow_excess_precision flag let XLA silently promote some bf16 operations to fp32, causing different parts of the sampling pipeline to disagree about which token had the highest probability.
- `INS-260423-61B6` [high] Hinton: train a good-at-math AI to give the wrong answer, and it doesn't get worse at math — it understands you want wrong answers and starts giving wrong answers to everything.
- `INS-260410-36E3` [high] Above ~3x the baseline, extra memory stops fixing infra errors and starts enabling new solution strategies — letting agents that default to 'install the whole Python data science stack' succeed where leaner agents already win at tight limits.
- `INS-260421-3E99` [high] Context windows grew 2500x since GPT-3 (4K to 10M tokens) but models degrade well before the advertised limit — Gemini 1M stops reliably using context past ~300-500K.
- `INS-260410-ED12` [high] When you see a model ace hard evals but flail on practical tasks, suspect that the training mix was inadvertently shaped by the evals researchers wanted to look good on.
- `INS-260410-939B` [high] Default to fast non-thinking models; switch to a thinking model only when you suspect the first answer is wrong on a genuinely hard math/code/logic problem.
- `INS-260410-3FB3` [high] Before trusting an LLM on math or recent facts, check whether that specific app has wired in a Python interpreter and web search — models without them will confidently hallucinate numerically-close but wrong answers.
- `INS-260405-C17A` [medium] Once an AI cites a source, it tends to return to it — making first-mover citation advantage self-reinforcing.
- `INS-260410-CAA4` [medium] Anthropic observed that the upgraded Claude 3.5 Sonnet self-corrects more and tries multiple solutions rather than getting stuck repeating the same mistake.
- `INS-260410-1248` [medium] Squirrels don't go to school — animal learning is prediction and trial-and-error, and supervised learning is a special human exception we have built entire AI paradigms around.

# Topic: llm-behavior

> 5 insights

- `INS-260410-F5C5` [high] Chat model answers statistically imitate hired human labelers executing company-written instructions, not some emergent AI intelligence.
- `INS-260410-0EFE` [high] A forward pass through ~100 transformer layers is the compute budget per token, so any answer that requires real work must be spread across many intermediate tokens or offloaded to a tool.
- `INS-260410-939B` [high] Default to fast non-thinking models; switch to a thinking model only when you suspect the first answer is wrong on a genuinely hard math/code/logic problem.
- `INS-260410-3FB3` [high] Before trusting an LLM on math or recent facts, check whether that specific app has wired in a Python interpreter and web search — models without them will confidently hallucinate numerically-close but wrong answers.
- `INS-260405-C17A` [medium] Once an AI cites a source, it tends to return to it — making first-mover citation advantage self-reinforcing.

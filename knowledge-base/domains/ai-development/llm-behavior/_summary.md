# Topic: llm-behavior

> 8 insights

- `INS-260410-F5C5` [high] Chat model answers statistically imitate hired human labelers executing company-written instructions, not some emergent AI intelligence.
- `INS-260410-66C6` [high] Ask ChatGPT for ten jokes and you'll notice it only knows three — models are silently collapsed into a narrow output manifold, which poisons any attempt to train on their own generations.
- `INS-260410-0EFE` [high] A forward pass through ~100 transformer layers is the compute budget per token, so any answer that requires real work must be spread across many intermediate tokens or offloaded to a tool.
- `INS-260410-ED12` [high] When you see a model ace hard evals but flail on practical tasks, suspect that the training mix was inadvertently shaped by the evals researchers wanted to look good on.
- `INS-260410-939B` [high] Default to fast non-thinking models; switch to a thinking model only when you suspect the first answer is wrong on a genuinely hard math/code/logic problem.
- `INS-260410-3FB3` [high] Before trusting an LLM on math or recent facts, check whether that specific app has wired in a Python interpreter and web search — models without them will confidently hallucinate numerically-close but wrong answers.
- `INS-260405-C17A` [medium] Once an AI cites a source, it tends to return to it — making first-mover citation advantage self-reinforcing.
- `INS-260410-1248` [medium] Squirrels don't go to school — animal learning is prediction and trial-and-error, and supervised learning is a special human exception we have built entire AI paradigms around.

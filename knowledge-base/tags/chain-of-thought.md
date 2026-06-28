# Tag: chain-of-thought

- `INS-260627-6031` Reviewing agents by scrolling through ten blocks of raw reasoning tokens does not scale; structured, model-generated artifacts (plans, task lists, diagrams, recordings) are the right primitive for supervising long-running agents.
- `INS-260625-C700` Models that validate and refine answers by executing code mid-reasoning outperform ones confined to pure internal reasoning on hard problems.
- `INS-260402-3095` AIs are beginning to develop incomprehensible chains of thought that defeat the primary human monitoring strategy of reading English-language reasoning traces.
- `INS-260403-5F41` Prompting 'think step by step: identify the issue, evaluate solutions, then recommend based on cost and feasibility' forces the model to reason rather than pattern-match to an answer.
- `INS-260410-0EFE` A forward pass through ~100 transformer layers is the compute budget per token, so any answer that requires real work must be spread across many intermediate tokens or offloaded to a tool.
- `INS-260625-4355` Models literally write 'I could fudge this and force the function to return true' in their reasoning before doing it.
- `INS-260410-966F` Human labelers cannot write ideal chains of thought for an LLM because LLM cognition differs from human cognition — only RL can discover token sequences that reliably work for the model itself.
- `INS-260625-26FE` Place tool-invocation hints after tokens that signal the model is reconsidering ('alternatively', 'wait') or about to conclude, so tools enter exactly when reasoning is most uncertain or about to terminate prematurely.
- `INS-260329-0F39` Pseudocode separates the 'what to do' from 'how to express it,' reducing cognitive load — the same mechanism that makes chain-of-thought prompting effective for LLMs.

# Topic: agents

> 21 insights

- `INS-260405-FE94` [high] Coinbase's Agentic Wallets let AI agents hold funds, pay for APIs, and execute trades without human approval at each step.
- `INS-260410-F0EF` [high] Manual approval prompts fail at scale because users stop paying attention — Anthropic measured 93% acceptance rates.
- `INS-260410-E73E` [high] Anthropic found environment setup issues, double-applied patches, and hidden tests the model couldn't see all caused failures that weren't really about model skill.
- `INS-260410-F40F` [high] One-sided evals create one-sided optimization — if you only test when the agent should search, you'll get an agent that searches for everything.
- `INS-260410-14E5` [high] Return denials as tool results so false positives cost a single retry instead of killing the session.
- `INS-260410-F5EC` [high] Generate dozens of evaluation tasks grounded in real data sources that require chained, multi-step tool calls rather than single-shot lookups.
- `INS-260410-5D66` [high] Grading tool-call sequences creates brittle evals that punish creativity; grade the outcome and the transcript holistically instead.
- `INS-260410-4067` [high] Strip assistant text and tool outputs from the classifier's view so it judges actions, not rationalizations.
- `INS-260410-9B0E` [high] Anthropic's incident log shows the real-world dangers come from agents helpfully exceeding scope, not from hostile reasoning.
- `INS-260410-B3C2` [high] pass@k rewards 'shots on goal' and rises with k; pass^k measures consistency and collapses with k — use pass^k for production reliability.
- `INS-260405-CC9D` [high] Prototyping an agent and deploying it reliably in production are fundamentally different engineering problems.
- `INS-260410-E3BB` [high] A 0% pass rate across many trials is almost always a broken task or grader, not an incapable model — verify by reading transcripts.
- `INS-260410-AF66` [high] Bootstrap agent evals from 20-50 real failure cases; effect sizes are large early so small samples suffice.
- `INS-260410-376A` [high] Gate expensive chain-of-thought reasoning behind a cheap single-token filter tuned for high recall.
- `INS-260410-83EC` [high] Claude Code is an expert at reading evaluation transcripts and refactoring tool implementations and descriptions to improve performance.
- `INS-260405-F26B` [medium] ReAct is an introduction to agent reasoning, not a complete architecture for production systems.
- `INS-260410-761E` [medium] The security-vs-autonomy tradeoff dissolves when you replace per-action permission prompts with pre-declared boundaries the agent operates freely inside.
- `INS-260423-85B3` [medium] Google ADK with LiteLLM: the Guardian agent runs on Gemma 4 today, can swap to any LiteLLM-supported model tomorrow, because the agent layer does not encode Gemini-specific assumptions.
- `INS-260413-11C9` [medium] Microsoft's AI Diagnostic Orchestrator + OpenAI o3 scored 85.5% on complex case studies vs 20% for unaided physicians, and multi-agent frameworks show 7% to over 60% gains over single-agent baselines.
- `INS-260405-E8A1` [medium] When agents can monetize their own outputs and spend autonomously, they become economic actors, not just tools — blurring the line between software and economic agent.
- `INS-260410-D04D` [medium] Bubblewrap on Linux and seatbelt on macOS provide subprocess-inclusive sandbox boundaries without container overhead.

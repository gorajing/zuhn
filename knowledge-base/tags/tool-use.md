# Tag: tool-use

- `INS-260402-2342` An agent given filesystem and MCP access spontaneously wrote its own memory skill and started using a graph database without explicit programming.
- `INS-260410-095B` Add a think tool (a no-op that just logs a thought) so the agent can stop and reason about tool outputs before acting again.
- `INS-260410-1B17` Schemas express what is valid; examples express what is idiomatic — and models need the latter to call complex tools correctly.
- `INS-260327-D020` Goose's recipe-based approach, where successful workflows are baked into shareable scripts, outperforms pre-built tool integrations because agents find surprising solutions humans wouldn't encode.
- `INS-260410-D250` Natural-language tool chains force every intermediate result through the context window; code orchestration keeps only the final answer.
- `INS-260326-2410` Ng highlights that models explicitly tuned for tool use and agentic operations (not just human Q&A) create 'much higher ceilings' for what agentic workloads can accomplish.
- `INS-260410-60C8` Preloading every tool definition burns context before work begins; discoverable tools preserve the window for actual reasoning.
- `INS-260410-1A22` Pick the tool-use feature that solves your actual bottleneck — definition bloat, intermediate data, or parameter errors — not all three by default.
- `INS-260410-CD01` Code-driven orchestration unlocks asyncio.gather across independent tool calls, collapsing sequential round-trips into one concurrent batch.
- `INS-260327-26BF` ChatGPT Agent unified deep research's text browser, operator's visual browser, and a terminal with shared file system, producing 1+1+1=5 capabilities because tools can pass state to each other.
- `INS-260410-6ABA` Only add the think tool where mistakes compound across sequential decisions — otherwise you're paying tokens for nothing.
- `INS-260410-0A28` Prompt injection is fundamentally a trust-boundary failure: retrieved web pages, shared docs, and images are parsed as instructions when they should be treated as untrusted data.
- `INS-260323-8AEC` Reinforcement learning with verifiable rewards plus inference-time compute scaling is what enabled models to use tools, write code agentically, and perform multi-step reasoning.
- `INS-260409-60C2` Search is easy to bolt on; heavy training to synthesize dozens of papers without drift is what actually stopped Aletheia from fabricating references.
- `INS-260410-3FB3` Before trusting an LLM on math or recent facts, check whether that specific app has wired in a Python interpreter and web search — models without them will confidently hallucinate numerically-close but wrong answers.
- `INS-260410-5EC3` Think of an LLM as a kernel process coordinating memory (context window), disk (retrieval), peripherals (tools, vision, audio), and user space — not as a chatbot.
- `INS-260410-5D71` Tool descriptions should be short and functional; complex 'how to use this well' guidance belongs in the system prompt.
- `INS-260410-87B5` Bare think tool: +7pts. Think tool + optimized prompt with reasoning examples: +20pts (54% relative). The prompt is the lever.

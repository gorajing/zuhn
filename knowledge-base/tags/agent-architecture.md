# Tag: agent-architecture

- `INS-260410-315B` E-commerce long-tail SEO creates persistent URL slugs from agent queries, turning the public web into an unintentional scratchpad shared across every agent run.
- `INS-260327-DC4C` AI agents are like the character in Memento -- highly capable but amnesiac each session, requiring deliberate external context systems to function coherently.
- `INS-260410-D92A` Long-horizon agents need compaction (for back-and-forth flow), note-taking (for iterative milestones), or sub-agents (for parallel research) — pick by task shape.
- `INS-260327-F625` Harrison Chase says context engineering describes everything LangChain has done without knowing the term existed — traces show what's in your context, compaction manages it, sub-agents partition it, and memory extends it across sessions.
- `INS-260410-01BC` When a tool returns large data, filter and aggregate it in the code execution sandbox and only log the relevant slice.
- `INS-260410-358E` Have the MCP client replace sensitive fields with opaque tokens before the agent sees them, then substitute real values on downstream tool calls.
- `INS-260410-60C8` Preloading every tool definition burns context before work begins; discoverable tools preserve the window for actual reasoning.
- `INS-260405-8166` A master agent holds your full private context locally while spawning persona-limited sub-agents for different environments — work, social, dating — each with different data access and communication styles.
- `INS-260410-566F` Multi-agent BrowseComp runs hit unintended-solution rates of 0.87% vs 0.24% single-agent — a 3.7x amplification just from more parallel shots at the problem.
- `INS-260409-B122` MemPalace's specialist agents each get a dedicated wing with a private diary; CLAUDE.md stays one line long regardless of whether you have 5 or 50 agents, and each agent reads its own history to build domain expertise.
- `INS-260410-0855` Treat the execution environment's filesystem as an accumulating toolbox — agents should save working code as skills and import them on future runs.
- `INS-260410-8ECF` Expose MCP servers as a typed file tree of tool modules so agents load only the definitions they actually need.
- `INS-260327-26BF` ChatGPT Agent unified deep research's text browser, operator's visual browser, and a terminal with shared file system, producing 1+1+1=5 capabilities because tools can pass state to each other.
- `INS-260410-E658` Let agents write while-loops and if-statements as code rather than rerunning the model to evaluate each branch.
- `INS-260402-876A` A generative agent paired with a safety-checking agent produces reliable outputs in high-stakes medical contexts.
- `INS-260329-4D03` Python OOP concepts like classes and inheritance map directly to how AI agents manage state and tool interfaces.
- `INS-260327-4CB3` Optimizing directly for outcomes via RL produces more flexible, capable agents than human-designed graphs of LLM calls.
- `INS-260327-63B5` Ramp's insight: instead of building tool APIs one feature at a time, have your agent computer-use your own frontend, leveraging your existing UI team's work and authentication system for instant full feature coverage.

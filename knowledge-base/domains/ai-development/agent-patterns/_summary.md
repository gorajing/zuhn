# Topic: agent-patterns

> 32 insights

- `INS-260321-18D0` [very_high] Your bottleneck shifted from typing speed to token throughput — maximize how many agent sessions you can run in parallel, not how fast you code.
- `INS-260321-2482` [high] When agents fail, the instinct now is 'I gave bad instructions' not 'the AI can't do this' — most failures are configuration problems, not capability limits.
- `INS-260321-D3BE` [high] Stop thinking in lines of code — think in macro actions: 'agent 1 builds feature X, agent 2 researches Y, agent 3 plans Z' — then review their work.
- `INS-260327-77E7` [high] Sustained quality from AI agents comes from organizational design patterns (QA loops, approval gates, role specialization) rather than model selection.
- `INS-260321-8414` [high] The biggest barrier to enterprise AI agent adoption isn't model capability but trust UX — too many status updates and users say 'stop telling me crap,' too few and they say 'what is it doing?' — requiring progressive disclosure design patterns that don't yet exist.
- `INS-260327-DC4C` [high] AI agents are like the character in Memento -- highly capable but amnesiac each session, requiring deliberate external context systems to function coherently.
- `INS-260327-E0B0` [high] AI capabilities improve so fast that security teams who only react to known threats will always be behind; Irregular pioneers proactive research by testing model capabilities before they become attack vectors.
- `INS-260327-A9D5` [high] Chase says building agents is more iterative because with software you iterate on what it should do, while with agents you must also iterate on understanding what it actually does — a fundamentally different development loop.
- `INS-260321-B85C` [high] Reframing businesses as collections of input-constrained processes (customer service, legal) and output-constrained processes (creative, engineering) reveals fundamentally different AI automation strategies for each.
- `INS-260320-1B10` [high] Have Claude review its own code via a specialized review agent — catches critical errors, missing implementations, and security flaws.
- `INS-260327-F625` [high] Harrison Chase says context engineering describes everything LangChain has done without knowing the term existed — traces show what's in your context, compaction manages it, sub-agents partition it, and memory extends it across sessions.
- `INS-260327-368D` [high] Just as security changed fundamentally when economic activity moved from physical to digital, it must change again as it moves from digital to autonomous AI interactions.
- `INS-260327-9EFE` [high] The classical robotics pipeline failed not because individual components were bad, but because the hand-designed interfaces between them could not capture real-world complexity.
- `INS-260327-E07C` [high] The same environment you use to eval your model offline can be used as your train set for reinforcement learning, unifying evaluation and training infrastructure.
- `INS-260326-9402` [high] Andrew Ng identifies four core agentic design patterns — reflection, tool use, planning, and multi-agent collaboration — that when combined enable AI systems to iteratively solve problems far beyond zero-shot capability.
- `INS-260320-9D89` [high] Give agents very specific roles and clear instructions on what to RETURN — prevents 'I fixed it!' without details.
- `INS-260327-7F56` [high] ChatGPT Agent was designed to mirror Slack-style human delegation: both parties can initiate communication, the agent asks clarifying questions, and users can interrupt with corrections mid-task.
- `INS-260327-FDC1` [high] Chase argues that file system access is a non-negotiable primitive for long-horizon agents because it enables critical context management strategies: storing summarized context for later retrieval, handling large tool results, and maintaining state across compaction boundaries.
- `INS-260327-1B82` [high] Teleoperated robots could already clean houses and cook a decade ago; the missing piece is autonomous intelligence, not better hardware.
- `INS-260327-26BF` [high] ChatGPT Agent unified deep research's text browser, operator's visual browser, and a terminal with shared file system, producing 1+1+1=5 capabilities because tools can pass state to each other.
- `INS-260325-031F` [high] Linda from Minimax outlined three coding eras: GUI copilots where humans supervise, CLI agents where humans trust but cannot inspect every step, and fully autonomous agents spawning sub-agents.
- `INS-260327-9D50` [high] Chase argues that traces are to agents what source code is to software: the actual source of truth for understanding what the system does, because you literally cannot predict agent behavior by reading the code.
- `INS-260327-79E8` [high] OpenAI trained ChatGPT Agent via RL across thousands of VMs, letting the model discover when to use text vs visual browsing rather than programming tool selection rules.
- `INS-260325-BC2A` [medium] Ron from Open Router predicted the agent adoption curve in enterprises will compress from years to months as coalitions form around industry-specific secure deployment standards.
- `INS-260321-8382` [medium] Agent personality matters more than most tool builders realize — Claude feels like a teammate who cares about your project; Codex feels dry and transactional.
- `INS-260327-76B2` [medium] Jensen Huang predicts 100-to-1 ratio of security bots to productive agents; Lahav agrees with the directional thesis though debates whether secure-by-design can reduce this ratio.
- `INS-260321-9EBB` [medium] Agents will follow the same path as 'internet companies' in the 1990s — initially a distinct category, then a universal capability baked into every product, invisible to users.
- `INS-260321-E59A` [medium] Donald Knuth's viral LLM math result was achieved by making the LLM update its memory after each solution — a hack simulating plasticity — but Knuth himself still had to create the final proof manifold.
- `INS-260327-D020` [medium] Goose's recipe-based approach, where successful workflows are baked into shareable scripts, outperforms pre-built tool integrations because agents find surprising solutions humans wouldn't encode.
- `INS-260326-2410` [medium] Ng highlights that models explicitly tuned for tool use and agentic operations (not just human Q&A) create 'much higher ceilings' for what agentic workloads can accomplish.
- `INS-260325-23BA` [medium] Linda described Peter Steinberger's OpenClaw vision: a master agent with your full memory spawns context-specific sub-agents — a work persona for Microsoft workspace, a different persona for social apps — keeping your core data private.
- `INS-260327-35C7` [medium] Physical AI will develop reasoning in trajectory and motion space, complementing text-based reasoning and potentially improving LLMs in return.

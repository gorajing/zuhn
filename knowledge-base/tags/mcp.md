# Tag: mcp

- `INS-260410-953E` MCP servers remained inaccessible not because they lacked power, but because installation required Node.js, manual JSON config editing, and dependency resolution.
- `INS-260410-F910` Tools for agents should be purpose-built around agent workflows, not mechanical wrappers of existing API endpoints.
- `INS-260410-01BC` When a tool returns large data, filter and aggregate it in the code execution sandbox and only log the relevant slice.
- `INS-260410-358E` Have the MCP client replace sensitive fields with opaque tokens before the agent sees them, then substitute real values on downstream tool calls.
- `INS-260410-60C8` Preloading every tool definition burns context before work begins; discoverable tools preserve the window for actual reasoning.
- `INS-260410-0855` Treat the execution environment's filesystem as an accumulating toolbox — agents should save working code as skills and import them on future runs.
- `INS-260410-8ECF` Expose MCP servers as a typed file tree of tool modules so agents load only the definitions they actually need.
- `INS-260405-2BB0` The speaker's Claude-based agent on a Raspberry Pi autonomously wrote its own Neo4j memory skill and immediately began using it to persist knowledge, with no human code involved.
- `INS-260410-E658` Let agents write while-loops and if-statements as code rather than rerunning the model to evaluate each branch.
- `INS-260327-E18C` Sequoia predicts the next major wave is an agent economy, but it requires solving persistent identity, seamless communication protocols (MCP is the starting gun, not the finish line), and agent-level security.
- `INS-260410-4F43` Anthropic open-sourced the full MCPB specification, toolchain, and schemas so that the format can become a cross-application standard rather than a Claude-only feature.
- `INS-260410-AB4A` Anthropic built a tool-testing agent that used a flawed MCP tool, then rewrote its description — future agents using the new description completed tasks 40% faster.
- `INS-260410-0C77` Desktop Extensions declare user_config with a 'sensitive: true' flag, and Claude Desktop stores those values in the OS keychain rather than leaving them in JSON files.
- `INS-260321-801C` Fuelfinance is building an MCP integration that lets Claude talk directly to your financial data inside Fuel — eliminating the copy-paste bottleneck between your accounting system and AI analysis.

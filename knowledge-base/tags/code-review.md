# Tag: code-review

- `INS-260524-63C9` Jongmin Sung: keep CI/CD, modular architecture, unit tests, and code review — then put agents inside that harness instead of coding manually.
- `INS-260330-FC4D` When agents produce 1,300 PRs weekly, CI pipelines and test coverage become the primary quality gate since human review alone cannot scale to verify correctness.
- `INS-260330-D5CD` When agents write 1,300 PRs per week, CI and test infrastructure become the primary trust mechanism replacing the confidence that comes from knowing a human wrote the code.
- `INS-260605-27CC` Loop agents on mechanical, verifiable tasks (find shallow bugs, superficial refactors); escalate anything requiring fundamental design judgment to a human.
- `INS-260603-73D5` Navish (Salesforce): the volume of AI-generated code is impossible to review manually, so you pair it with a reviewer agent — but the agent must know how YOU write and review code; a 6-month junior gets nothing from architect-level feedback they can't understand, so review benefit is gated by the reviewer's own comprehension level.
- `INS-260320-1B10` Have Claude review its own code via a specialized review agent — catches critical errors, missing implementations, and security flaws.
- `INS-260605-20CB` Offload nitpicky style/naming/convention review to agents and reserve human review for big-picture system design.
- `INS-260605-34B0` Separate implementation and validation into different agents with different context, and validate behavior by actually running the app, not just linting and tests.
- `INS-260605-3AB7` An agent with MCP access to every system can still ship code that compiles, passes checks, and would break production because access is not understanding.
- `INS-260605-AD25` Move the validation step into a fresh sub-agent — an agent checking its own work in the same context just pats itself on the back.
- `INS-260605-DFF5` Two standing instructions — one file per feature, and add logging everywhere — turn opaque AI-generated apps into reviewable, debuggable code.
- `INS-260403-DED4` The economics of software will shift from 'AI writes, humans review' to fully autonomous AI development as quality improvements make human oversight cost-prohibitive.
- `INS-260605-683B` Humans-in-the-loop aren't required for SOC 2 / ISO 27001 / HIPAA — agent-based approval with strong audit controls can remove risk rather than add it.
- `INS-260605-A9B4` A pre-merge queue reconciles parallel changes for serializability and surfaces grouped intent-and-result bundles (a demo video, a security-LLM report) for human approval instead of raw diffs.
- `INS-260514-8424` Have one engineer write what 'good security review' looks like — now every agent gets that review on every push. The single review becomes durable infrastructure.
- `INS-260605-C1A4` Run a panel of domain-focused LLMs (security, API conformance) that evaluate changes inside the inner loop and feed corrections back to the main harness in real time.
- `INS-260330-5747` Aggressive code reduction PRs on newcomer projects function as dominance displays that destroy contributor motivation and abandon projects.

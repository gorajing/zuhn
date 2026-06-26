# Tag: agent-infrastructure

- `INS-260625-EFCC` Cole open-sourced OpenInspect rather than monetize it because the middle orchestration layer is easy to copy and squeezed between paid sandbox providers (Daytona, E2B, Modal) and paid model labs — so the winning move is to bundle the agent with the infrastructure underneath it.
- `INS-260330-6D43` Investing in developer experience pays double because both human engineers and AI agents consume the same docs, CI, and tooling.
- `INS-260327-E18C` Sequoia predicts the next major wave is an agent economy, but it requires solving persistent identity, seamless communication protocols (MCP is the starting gun, not the finish line), and agent-level security.
- `INS-260625-EF29` Polygraph analyzes every repo a user can reach (owned + open source), extracts what each produces and consumes, and feeds that graph to a harness so an agent reads/writes 'one big codebase.'
- `INS-260625-B6E9` Reasoning from first principles about what a computer means to an agent yields a primitive that pauses and resumes with full state (like closing a laptop lid) yet spins up in milliseconds — which standard preemptable, stateless VMs cannot provide.
- `INS-260424-865F` Google Cloud lead: the default way of connecting chips together didn't support latency, it supported throughput — but in age of agents you care about the minimum time it takes to get the data through.
- `INS-260625-20D7` Agents want the same primitives as engineers — feature flags, version control, observability, fork/branch, file systems — but at 1000x concurrency, which makes CI/CD 'melt' and forces replacements for Kubernetes, Envoy, and the push-pull-rebuild loop.
- `INS-260619-90F6` The production agent stack is becoming a set of durable primitives around the model: routing, persistence, execution, tools, and workflow state.
- `INS-260605-9976` One-agent-per-task scaling means provisioning full pods per agent — wasteful, but a full computer makes an agent far more capable than a constrained sandbox.
- `INS-260625-7926` Background agents follow predictable human-like 'follow-the-sun' usage, but RL/eval runs are square-wave bursts (0 to 100k CPUs and back), pushing mean utilization to ~15% against 90% peaks and forcing capacity commitments.
- `INS-260403-8832` YC's Fall 2025 RFS reveals that AI startup competitive advantage has shifted from model innovation to operational productization in specific verticals.
- `INS-260605-B930` Use provider-native harnesses for capability, but preserve your own portable run contract.

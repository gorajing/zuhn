# Tag: ci-cd

- `INS-260524-63C9` Jongmin Sung: keep CI/CD, modular architecture, unit tests, and code review — then put agents inside that harness instead of coding manually.
- `INS-260330-FC4D` When agents produce 1,300 PRs weekly, CI pipelines and test coverage become the primary quality gate since human review alone cannot scale to verify correctness.
- `INS-260330-D5CD` When agents write 1,300 PRs per week, CI and test infrastructure become the primary trust mechanism replacing the confidence that comes from knowing a human wrote the code.
- `INS-260330-6D43` Investing in developer experience pays double because both human engineers and AI agents consume the same docs, CI, and tooling.
- `INS-260605-0266` An agentic app that took 2 weeks to build took 12 more months to reach production because every governance layer — security, AI gateway, data, infra, app teams — ran at human speed.
- `INS-260605-0C5C` The PR encodes assumptions of delayed human feedback and serialized handoffs that break when agents produce thousands of short-lived branches.
- `INS-260605-C1A4` Run a panel of domain-focused LLMs (security, API conformance) that evaluate changes inside the inner loop and feed corrections back to the main harness in real time.
- `INS-260605-EA2E` Start from a written spec (intent + plan), feed it to an agent harness that checks out a known commit, validates internally each iteration, and only surfaces to a human for continue/stop.
- `INS-260605-25B2` Wrap your agent in a CLI with build/test/CI so long-running coding agents can modify and end-to-end test it on their own, forming a pseudo-RL loop.

# Tag: ci

- `INS-260626-F335` OpenGov treats shipping as the start: thumbs up/down user signal plus automated evals in CI that check real completions hit the right tools drive fast iteration.
- `INS-260605-C9E8` Agents must produce a PR via git, so run the same linting/architecture/dedup checks as both git hooks and CI — if an agent skips a hook to be lazy, CI catches it and links it back to the rule's document.
- `INS-260605-6A32` At 1,200 tokens/second, test suites, linting, pre-commit hooks, diff reviews, and browser-based QA become near-instant, removing the excuse to defer them to the end.
- `INS-260625-DA23` Persist a snapshot of the agent's sandbox so that when CI fails or a reviewer comments, you rehydrate and keep iterating until the PR turns green.
- `INS-260605-BDFF` A skill is a markdown file you can now unit-test by running evals that score the agent's behavior, tool calls, and reasoning across scenarios.

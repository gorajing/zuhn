# Tag: agent-evaluation

- `INS-260605-72C4` A built-in correctness eval scored 0/13 on agent outputs while faithfulness scored 13/13 on the same outputs — the eval type, not the tuning, was the difference.
- `INS-260605-8E69` Don't test 'it called tool A then B then decided C' — test only whether it reached the right answer, or your evals shatter on every model upgrade.
- `INS-260605-667B` An agent wrote a perfect report but saved it to disk and 'failed' — output-only judgment would call it garbage; the trace showed the research and writing were flawless.
- `INS-260605-80D0` ContextBench scores whether an agent located the human-labeled golden files, lines, and symbols during its trajectory, not just whether it ultimately solved the problem.
- `INS-260605-BDFF` A skill is a markdown file you can now unit-test by running evals that score the agent's behavior, tool calls, and reasoning across scenarios.

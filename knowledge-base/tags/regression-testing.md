# Tag: regression-testing

- `INS-260625-78C1` SkillOpt applies candidate edits, re-runs the agent on a validation set, and accepts the new skill only if performance actually improves — otherwise it reverts and records the failure.
- `INS-260605-8E69` Don't test 'it called tool A then B then decided C' — test only whether it reached the right answer, or your evals shatter on every model upgrade.
- `INS-260605-DCE5` Codify prompt changes as TDD: add an eval that proves the failure, fix the prompt to pass it, re-run all evals to catch regressions, then consolidate the prompt to fight bloat.

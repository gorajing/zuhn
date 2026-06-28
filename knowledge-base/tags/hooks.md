# Tag: hooks

- `INS-260605-8A88` Teach the agent your conventions, architecture, and security rules via skills/guidance/hooks, then update that guidance every time it errs — a flywheel everyone contributes to.
- `INS-260627-8B75` Before building an agent, ask whether its work can be verified and undone — strong verification and reversible state are what make agents general and safe.
- `INS-260625-A5E7` Speed requires safety: agents must verify their own work against explicit criteria using progressively stronger gates.
- `INS-260514-FEC8` Rules = judgment ('please don't access .env'). Hooks = enforcement (the access actually fails). For high-stakes constraints, use hooks not rules — agents will eventually find reasons to ignore rules but cannot bypass hooks.
- `INS-260320-4DE2` A Stop hook reads the file edit logs, runs builds on affected repos, and catches TypeScript errors — showing small errors to Claude or recommending an auto-resolver agent for larger ones.
- `INS-260320-7379` A Stop hook detects risky patterns (try-catch, async, DB calls) in edited files and shows gentle non-blocking self-check reminders.
- `INS-260320-0D43` A PostToolUse hook tracks which files were edited, which repo they belong to, and timestamps — feeding downstream hooks like the build checker.
- `INS-260320-4ED6` The full hook pipeline runs in sequence: Claude responds, Prettier formats code, build checker catches errors, error reminder does a self-check — zero errors left behind.
- `INS-260320-F8FD` Claude won't reliably use skills on its own — build a hook system to inject skill reminders automatically.
- `INS-260320-949A` A 5-line pre-execution bash hook checks commands against BLOCKED patterns (node_modules, .env, __pycache__, .git/, dist/, build/) and blocks 99% of token waste.
- `INS-260320-69CD` A Stop event hook analyzes edited files after Claude responds and shows gentle self-check reminders for error handling.
- `INS-260320-DCA0` A UserPromptSubmit hook analyzes the prompt for keywords and intent, then injects skill reminders into context BEFORE Claude reads it.
- `INS-260329-D212` Obsess over the first 3 seconds of any content because trimming a weak opening can multiply viewership by 19x.
- `INS-260329-6859` Put 80% of ad creation effort into the hook/headline — front-end CTR gains of 4x dwarf backend improvements.
- `INS-260409-6ABF` The four-factor framework — relevance, non-obvious insight, high absorbability, short implementation distance — is a checklist for engagement-rate optimization.
- `INS-260605-C53B` Reeve's analytics showed median view time of 6-12 seconds, forcing the interesting payload to the very front, with captions and underrated background music as cheap multipliers.

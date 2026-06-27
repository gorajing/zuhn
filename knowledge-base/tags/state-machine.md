# Tag: state-machine

- `INS-260627-3963` Model 'the agent needs more input' as a real task state and persist a task ID, so clarification and multi-turn follow-ups resume the same session rather than spawning a fresh one.
- `INS-260605-59AE` Keep deterministic code thin (bookkeeping only) and express decomposition, failure-handling, and worker behavior in prompts and skills that ride the model's improvement curve.
- `INS-260605-07E5` Build a state machine with gates between agents so steps can't be skipped, instead of trusting prompt instructions the model can ignore.
- `INS-260605-E693` Every agent is a recursive while-loop with a few conditions and end states, so design it as a state machine you can always locate yourself within.

# Tag: agent-loops

- `INS-260602-EA48` Mansi More: when an agent picks a wrong tool, gets a wrong answer, goes back and picks another wrong tool, 'there is no way for the agent to tell that hey it's breaking, stop' — so you must curate the tool list (e.g. an allowlist config) before the agent runs, not rely on it to self-correct.
- `INS-260605-27CC` Loop agents on mechanical, verifiable tasks (find shallow bugs, superficial refactors); escalate anything requiring fundamental design judgment to a human.
- `INS-260625-35C5` Let the latest reasoning model research 80% of the task, but route the final 20%—validation, summarization, next-action—through restricted, deterministic gates that don't need a high-reasoning model and stop the infinite loop.
- `INS-260625-25BF` High-reasoning models like Opus tend to enter a research loop—hopping between methods and second-guessing themselves—so most API tokens are spent on finding a way to do the task rather than doing it.
- `INS-260410-14E5` Return denials as tool results so false positives cost a single retry instead of killing the session.

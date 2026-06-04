# Tag: agent-loops

- `INS-260410-14E5` Return denials as tool results so false positives cost a single retry instead of killing the session.
- `INS-260602-EA48` Mansi More: when an agent picks a wrong tool, gets a wrong answer, goes back and picks another wrong tool, 'there is no way for the agent to tell that hey it's breaking, stop' — so you must curate the tool list (e.g. an allowlist config) before the agent runs, not rely on it to self-correct.

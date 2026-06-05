# Tag: agent-reliability

- `INS-260602-EA48` Mansi More: when an agent picks a wrong tool, gets a wrong answer, goes back and picks another wrong tool, 'there is no way for the agent to tell that hey it's breaking, stop' — so you must curate the tool list (e.g. an allowlist config) before the agent runs, not rely on it to self-correct.
- `INS-260605-2284` The hard problem in agents has shifted from writing good prompts to strategically choosing what the model sees.
- `INS-260524-0DC3` Woosang: getting agents to run molecular dynamics succeeded only ~20% of the time — inputs are scientific and finicky, so he analyzes the 'failure tax' per component.
- `INS-260327-BF89` Flow engineering -- explicitly designing the agent's state machine rather than relying on LLM implicit planning -- is the current best practice for reliable agent deployment, though it may become unnecessary as models improve.

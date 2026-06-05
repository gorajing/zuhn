# Tag: agent-harness

- `INS-260327-F625` Harrison Chase says context engineering describes everything LangChain has done without knowing the term existed — traces show what's in your context, compaction manages it, sub-agents partition it, and memory extends it across sessions.
- `INS-260605-E303` Make every agent action — input, LLM token fragments, errors, schedules — an event, and express all agent logic as a pure reduce(state, event) plus a separate side-effect hook.
- `INS-260605-26EC` Keep reduction pure and defer side effects to a post-catch-up hook so that replaying 100 buffered events rebuilds state once instead of triggering 100 LLM requests.
- `INS-260501-2A52` If you own the agent, you own which model the agent picks. That's why Sam, Dario, and Marc Benioff are all racing to win the agent layer.

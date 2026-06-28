# Topic: agent-reliability

> 21 insights

- `INS-260627-0444` [high] Below ~95-99% reliability, the cost of checking and fixing AI output exceeds the time the AI saves, producing a net slowdown.
- `INS-260627-E230` [high] Verification is only as good as its specification — anything you forget to check is an opening for bugs — so as agents nail implementation, the spec becomes the bottleneck.
- `INS-260627-AA19` [high] Persisting each step's output means a workflow can sleep indefinitely and resume by replaying the deterministic loop over cached state — no process stays alive.
- `INS-260627-0C43` [high] On brownfield codebases, agents do well exactly where humans do — high cohesion and clear module separation let the agent avoid holding 18 things in context — and tech debt that slows a human dev slows the agent identically.
- `INS-260627-82CC` [high] Replit found >30% of agent-built features are broken on first generation ('painted doors'), so autonomous testing — not human QA — must close the feedback loop.
- `INS-260627-0BC1` [high] Give agents deterministic validation that produces specific, actionable error messages — vague failures like '500 internal error' cripple their ability to self-correct.
- `INS-260627-1443` [high] Single-shot LLM calls don't need durable execution; long-running agents that have spent real time and money on intermediate steps do, because a crash forces a full restart.
- `INS-260627-8B0B` [high] Real-world IDPI is active, but Unit 42 still sees a gap between lab severity and observed production impact.
- `INS-260627-8A6A` [high] Prompt injection becomes materially dangerous only when the targeted agent has meaningful permissions, so agent-risk claims should be privilege-conditioned.
- `INS-260627-E496` [high] Let a durable-execution layer like Temporal own retries and crash recovery so agent code expresses only business logic, never failure plumbing.
- `INS-260627-5DC4` [high] Borrow the robotics open/closed-loop distinction: actions you can't observe and correct mid-execution are open-loop liabilities that should be closed.
- `INS-260627-44FD` [high] Durable execution works by splitting code into a deterministic workflow and non-deterministic activities, recording each activity's inputs and outputs so a re-run can replay instantly up to the failure point.
- `INS-260627-D35C` [high] Aim for ~90% automation with human review of each agent's intermediate output; partial completion (90-95% solved) still delivers an order-of-magnitude lift.
- `INS-260627-0126` [high] Fully autonomous bug-to-production is technically feasible today; the limiter is your org's verification criteria, not the coding agent.
- `INS-260627-917D` [medium] An agent generalizes when it tolerates perturbations across its entire operational space — tools, system prompts, user prompts, chat template, environment, tool responses — not just when it has seen many tools.
- `INS-260627-1319` [medium] Most agent unreliability traces to missing instructions and context, so writing the rules a good practitioner would follow is the highest-ROI improvement before reaching for fine-tuning.
- `INS-260627-0E46` [medium] Instead of showing a diff, Antigravity's agent drives a real browser and returns a screen recording of the feature working, giving both the human and the model verifiable, iterable evidence.
- `INS-260627-C237` [medium] Enterprise agents are already creating incident load that pulls humans back in.
- `INS-260627-1EF5` [medium] Even if AI generates code with no more bugs per line, 3x more code means roughly 3x more bugs and 3x more security incidents in absolute terms — and the review bottleneck makes them harder to catch.
- `INS-260627-02F2` [medium] EARS-style 'when/then/shall' requirements are a structured natural-language representation that classic automated-reasoning techniques can parse deterministically — to detect ambiguity, find conflicting constraints, and reduce reliance on the model.
- `INS-260627-3963` [medium] Model 'the agent needs more input' as a real task state and persist a task ID, so clarification and multi-turn follow-ups resume the same session rather than spawning a fresh one.

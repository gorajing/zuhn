# Tag: generative-ui

- `INS-260605-5DE9` DeepMind built a fake Wikipedia, Reddit, and an entire OS where every page, comment, and HTML element is generated live on each click — possible only because latency is low enough to feel like a real app.
- `INS-260605-1821` MCP Apps span a generation spectrum — predefined vendor UI, declarative host-rendered UI, fully generative model UI — and the protocol assumes none of them, so Claude's on-the-fly generative UI runs through the same pipe.
- `INS-260605-1C30` If you let a model emit HTML/CSS/JS at runtime, render it inside a sandbox — the same boundary you'd impose on any untrusted third-party code.
- `INS-260605-7B06` Build generative UI on MCP apps rather than a bespoke renderer — they ship the double-iframe sandbox, authentication, tool calling, and UI-agent message passing you'd otherwise rebuild.
- `INS-260605-1CC3` Design for a shared canvas the human and agent both manipulate — like the Excalidraw MCP app — rather than UI the agent generates and hands over.
- `INS-260605-D129` Choose declarative UI (LLM generates a descriptor, not the component) to keep your design system, predictability, speed, and lower token cost while gaining personalization.

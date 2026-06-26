# Tag: generative-ui

- `INS-260625-2E86` The reason generative UI defaults to generating JSON ('Jason Bender') and rendering it is that most platforms lack a primitive to safely render untrusted code — solve that and you can just generate React.
- `INS-260605-5DE9` DeepMind built a fake Wikipedia, Reddit, and an entire OS where every page, comment, and HTML element is generated live on each click — possible only because latency is low enough to feel like a real app.
- `INS-260605-1821` MCP Apps span a generation spectrum — predefined vendor UI, declarative host-rendered UI, fully generative model UI — and the protocol assumes none of them, so Claude's on-the-fly generative UI runs through the same pipe.
- `INS-260605-1C30` If you let a model emit HTML/CSS/JS at runtime, render it inside a sandbox — the same boundary you'd impose on any untrusted third-party code.
- `INS-260605-7B06` Build generative UI on MCP apps rather than a bespoke renderer — they ship the double-iframe sandbox, authentication, tool calling, and UI-agent message passing you'd otherwise rebuild.
- `INS-260625-07CB` ChatGPT/MCP apps nest a srcdoc content iframe inside an outer iframe served on a host-owned proxy domain (e.g. openaiusercontent.com) so isolation scales without per-app CSP whitelisting.
- `INS-260625-ED79` MCP/ChatGPT apps give businesses a new surface to expose products and services, discoverable both in an app store and contextually in-chat, layering interactive UI on top of conversation.
- `INS-260605-1CC3` Design for a shared canvas the human and agent both manipulate — like the Excalidraw MCP app — rather than UI the agent generates and hands over.
- `INS-260605-D129` Choose declarative UI (LLM generates a descriptor, not the component) to keep your design system, predictability, speed, and lower token cost while gaining personalization.

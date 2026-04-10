# Tag: tool-design

- `INS-260410-9F17` If a human engineer can't definitively say which tool to use in a given situation, the agent can't be expected to do better.
- `INS-260410-A1E9` Anthropic treats tool specs as a UI design problem — they iteratively probed for misunderstandings and rewrote descriptions to preempt them.
- `INS-260410-F910` Tools for agents should be purpose-built around agent workflows, not mechanical wrappers of existing API endpoints.
- `INS-260410-38C8` The SWE-bench agent always requires absolute paths and only performs an edit when `old_str` matches exactly once — both choices eliminate entire classes of silent failure.
- `INS-260410-E27A` Tool error responses are prompt-engineering surfaces — use them to teach agents correct usage, not just to report failure.
- `INS-260410-EE5C` Return semantically meaningful names instead of UUIDs in tool responses because agents handle natural language identifiers far more reliably.
- `INS-260410-9D86` Invest as much effort in agent-computer interfaces as you would in human-computer interfaces — clear tool descriptions, example usage, poka-yoke constraints, and formats close to natural training data all compound into reliability.

- `INS-260409-7C48` Local-first (data stays on user devices, syncs via cloud) and home-cooked software (built for small communities by their own members) both prize user agency and ownership, but orchestration agents for barefoot developers will make most design decisions by default — so local-first tools need to be the path of least resistance, not an opt-in.
- `INS-260409-9851` Matuschak and Nielsen argue that tools-for-thought work has historically been 'stuck in Spock-space,' designing for cognition alone, while movies, music, and video games take emotional response seriously — the best tools for thought must blend the emotional range of video with the intellectual depth of text.
- `INS-260409-6A6C` Matuschak and Nielsen coin 'insight-through-making loop' — deep original research insights drive tool improvements which drive deeper research insights which drive better tools, forming a rapidly-turning feedback loop that produces transformative tools (Hindu-Arabic numerals, writing, calculus notation) that conventional product practice or conventional research practice cannot.
- `INS-260403-8ECB` Tools that flag unrealistic inputs at the moment of entry prevent more bad decisions than post-hoc review ever will.
- `INS-260403-F100` The best languages evolved alongside a real application; designing tools in the abstract without a driving use case produces inferior results.
- `INS-260409-626E` Logo was a beautiful programming language for children but no professional differential geometer uses it — because Papert wasn't himself a differential geometer. Mathematica works partially because Wolfram has genuine research interests in mathematics and physics. Good tools emerge as byproducts of original work on serious problems.
- `INS-260404-24FB` Great strategic tools do one thing well and integrate with other specialized tools, rather than trying to cover everything.

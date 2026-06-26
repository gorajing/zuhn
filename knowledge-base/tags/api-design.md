# Tag: api-design

- `INS-260410-F910` Tools for agents should be purpose-built around agent workflows, not mechanical wrappers of existing API endpoints.
- `INS-260410-1B17` Schemas express what is valid; examples express what is idiomatic — and models need the latter to call complex tools correctly.
- `INS-260605-F064` Because capable on-device models only run on recent flagship devices, ship hybrid inference that runs locally where possible and falls back to the cloud to keep your feature reachable everywhere.
- `INS-260605-90CF` Client-side chat mode re-uploads the entire context every turn; stateful interaction APIs return an ID that recovers context server-side and auto-caches it.
- `INS-260329-057F` Destructuring and spread operators embody a design principle where systems that natively support structural decomposition handle evolving data shapes more gracefully.
- `INS-260626-55E0` If ~60% of your users are already bots (as Vercel reports), your dashboards stop mattering and your APIs, CLIs, and MCPs become the real product surface.
- `INS-260625-76F5` Expose your product catalog and checkout as structured data (JSON, ACP) so agents transact deterministically instead of stumbling through forms.
- `INS-260605-82BC` A 'delete item' endpoint is self-evident to the developer who built it, but an agent sees only the function schema and docstring — so tools must be written to be legible to a context-free reader.
- `INS-260625-BBB1` Add attributes to an HTML form and the browser auto-generates the JSON schema; for complex multi-step UI, manually register custom tools with hand-written schemas and execute blocks.
- `INS-260626-66DC` Gemma 4 replaces Gemma 3's fixed pan-and-scan tiling with variable aspect ratios and five selectable resolutions, so developers allocate a high image-token budget for OCR/object detection and a low one for text-heavy tasks.
- `INS-260625-8FBA` Echo Script extracts speaker names, timestamps, language, emotion, English translation, and a summary from audio in one Gemini API call by passing a response schema.
- `INS-260329-919F` C++ access specifiers (private, protected, public) teach the universal principle that every system needs explicit trust boundaries defining who can read and write what.
- `INS-260329-8F98` Always version APIs explicitly (e.g., /v1/products, /v2/products) rather than modifying existing endpoints, so old clients continue working while new clients get new features.
- `INS-260329-19EA` ES6 destructuring lets you extract object/array values into named variables in one step, eliminating the intermediate assignments where naming mistakes typically happen.
- `INS-260329-ACEB` Using tuples for coordinates signals 'this data is fixed' at the type level, making the constraint impossible to violate rather than merely documented.
- `INS-260329-CF48` Python's for-loop-over-file-handle pattern unifies local files, network resources, and databases into a single iteration abstraction that other languages require separate paradigms to handle.
- `INS-260626-3C9A` Krause's non-fundamental wish: tool vendors should restart their stack and build instruments for agents and robots, the way software moved to CLIs and MCP, so you train people to run the system rather than the instrument.

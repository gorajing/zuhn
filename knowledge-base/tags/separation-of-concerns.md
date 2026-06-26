# Tag: separation-of-concerns

- `INS-260605-F828` One agent's only job is to surface alternatives with pros and cons; a separate agent decides whether it has the authority to act or must escalate.
- `INS-260625-131D` The giant prompt is the agentic version of the god class — decompose the distinct jobs hiding inside it and put each responsibility where it belongs.
- `INS-260605-C132` Every production voice agent converges on a voice engine (STT/TTS/turn-taking) sitting in front of an agent orchestration layer (LLM/RAG/tools), and keeping them separable is what makes wrapping possible.
- `INS-260320-F872` Skills handle 'how to write code' guidelines while CLAUDE.md handles 'how this specific project works' — keep them separate.
- `INS-260626-8660` Treat your personal notes as an immutable snapshot the LLM never touches; agent-generated concepts, comparisons, and summaries live in a separate derivative layer that references it.
- `INS-260625-75D6` Let the host fetch and render UI from a resource reference while a separate client holds the one-to-one server connection.
- `INS-260330-20FD` Photosynthesis splits into two decoupled stages — light reactions capture energy into ATP/NADPH currency, then the Calvin Cycle spends that currency to build useful molecules.

# Tag: context-window

- `INS-260410-D250` Natural-language tool chains force every intermediate result through the context window; code orchestration keeps only the final answer.
- `INS-260410-60C8` Preloading every tool definition burns context before work begins; discoverable tools preserve the window for actual reasoning.
- `INS-260329-9115` Cursor excels at quick tasks but degrades in long sessions; Windsurf is slower to start but more reliable for sustained building.
- `INS-260320-CE36` 85,000 out of 100,000 context tokens were consumed by dependency code — one bash validation hook saved 85% of the context window.
- `INS-260421-3E99` Context windows grew 2500x since GPT-3 (4K to 10M tokens) but models degrade well before the advertised limit — Gemini 1M stops reliably using context past ~300-500K.
- `INS-260403-BE4D` Including relevant background data (bios, papers, past interactions) in the right format and order can make or break prompt performance more than any clever technique.
- `INS-260410-268D` WaveNet-style tree structures that fuse two elements at a time through multiple layers preserve more information than flattening all context into a single hidden layer.
- `INS-260410-5EC3` Think of an LLM as a kernel process coordinating memory (context window), disk (retrieval), peripherals (tools, vision, audio), and user space — not as a chatbot.
- `INS-260410-78F4` Treat weight-stored knowledge as a hazy recollection and the context window as working memory — paste the source material in rather than relying on recall.
- `INS-260410-18CF` Start a new chat whenever you switch topics — leftover tokens distract the model and slow sampling without improving answers.

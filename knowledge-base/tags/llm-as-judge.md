# Tag: llm-as-judge

- `INS-260605-8789` Two experts grading the same output against the same rubric often agree only 20-30% of the time, so a judge hitting 0.4 agreement with you is doing 'really, really well.'
- `INS-260605-2A01` Instead of asking an LLM 'rate this response 1-10,' define a solid set of specific issues and run cheap binary classifiers that tell you whether each issue's rate is rising or falling.
- `INS-260605-72C4` A built-in correctness eval scored 0/13 on agent outputs while faithfulness scored 13/13 on the same outputs — the eval type, not the tuning, was the difference.
- `INS-260605-C009` LLM-as-judge is 'the lunatics running the asylum' — write your own deterministic eval against a golden set when you can.
- `INS-260605-0DB3` One judge per dimension, output a single binary label after reasoning out loud — never a 1-10 score, because nobody (human or LLM) can define the difference between a 6 and a 7.
- `INS-260605-7843` Have experts grade agent traces AND write why; then run an LLM over the justifications to mine failure modes and generate scalable automated scorers.
- `INS-260605-D3C7` Define metrics first, write the skill, then run with-skill vs without-skill conditions in a headless agent; assert on whether the expected tool was called or use an LLM-as-judge, knowing the judge itself can hallucinate.
- `INS-260530-C385` Abhije: 'As a PM, your roadmap would be to improve a product. As an AI PM, your goal is to write better AI evals.' The day-to-day is analyzing traces (input → output for each query) at scale, identifying where the AI did well vs poorly, and improving accuracy via eval-driven iteration.


- `INS-260605-EC51` An LLM judge is just a prompt plus a model — build a labeled dataset and run precision/recall/F1 on the judge itself, then keep checking it against human agreement over time.
- `INS-260605-BEA5` Snorkel scales quality by building rubrics used by both human experts and LLM judges, then enforcing high inter-annotator agreement between humans and between humans and LLM judges.

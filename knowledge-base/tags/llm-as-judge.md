# Tag: llm-as-judge

- `INS-260605-8789` Two experts grading the same output against the same rubric often agree only 20-30% of the time, so a judge hitting 0.4 agreement with you is doing 'really, really well.'
- `INS-260605-72C4` A built-in correctness eval scored 0/13 on agent outputs while faithfulness scored 13/13 on the same outputs — the eval type, not the tuning, was the difference.
- `INS-260605-C009` LLM-as-judge is 'the lunatics running the asylum' — write your own deterministic eval against a golden set when you can.
- `INS-260605-0DB3` One judge per dimension, output a single binary label after reasoning out loud — never a 1-10 score, because nobody (human or LLM) can define the difference between a 6 and a 7.
- `INS-260530-C385` Abhije: 'As a PM, your roadmap would be to improve a product. As an AI PM, your goal is to write better AI evals.' The day-to-day is analyzing traces (input → output for each query) at scale, identifying where the AI did well vs poorly, and improving accuracy via eval-driven iteration.



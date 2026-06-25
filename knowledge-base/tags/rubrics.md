# Tag: rubrics

- `INS-260605-EF23` Make the eval the end-state you want to reach, not the starting dataset of correct answers.
- `INS-260605-1A91` Keep humans in the loop by having them define reward rubrics and judge scenarios once, not by running iterative annotation campaigns that are expensive and that nobody actually wants to do.
- `INS-260410-E4C4` 'Is this beautiful?' is unanswerable, but 'does this follow our design principles?' gives the model something concrete to grade against.
- `INS-260605-BEA5` Snorkel scales quality by building rubrics used by both human experts and LLM judges, then enforcing high inter-annotator agreement between humans and between humans and LLM judges.
- `INS-260625-0A08` Break a model response's rightness into many individually-answerable rubric questions to pinpoint where it actually fails, then generate targeted data to fix that behavior — while GRPO still consumes only the single pass/fail reward.

# Topic: architecture

> 12 insights

- `INS-260402-2D95` [high] Libraries are reusable because they are language, not because they are object-oriented.
- `INS-260330-DE16` [high] Linear transformations are powerful precisely because their constraints — parallel gridlines, fixed origin — make them fully describable, composable, and invertible.
- `INS-260405-06B0` [high] Deep inheritance hierarchies create refactoring traps that compound over time, not just stylistic inconvenience.
- `INS-260402-0E46` [high] Encoding domain structure into features (e.g., marking where tokens appear in email) can improve classification from 92% to 99.5%.
- `INS-260404-5440` [high] Fortran's expression/statement distinction existed because of punch cards, but persisted in languages long after that constraint vanished.
- `INS-260405-DAC9` [high] C endures because it is simultaneously high-level enough for developers and low-level enough for hardware — no replacement can match both simultaneously.
- `INS-260402-0DC9` [high] Languages survive long-term by minimizing their core axiom set, not by adding special-case features.
- `INS-260403-72C2` [high] Running Mixtral-class models locally needs ~40GB RAM, limiting local AI to users with high-end hardware.
- `INS-260405-2688` [high] C has no garbage collector by design — manual malloc/free gives programmers full control over when memory is allocated and released, enabling predictable performance that GC languages cannot guarantee.
- `INS-260403-2138` [high] DeepSeek R1's 671B parameter model uses sparse architecture so full-size reasoning doesn't require activating all parameters.
- `INS-260402-2879` [high] Define program meaning independently of implementation, then layer optimization advice on top.
- `INS-260403-EA93` [medium] Healthcare AI safety requires specialty fine-tuned models plus a fast lightweight judge model running continuous real-time validation.

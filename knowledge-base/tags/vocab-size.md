# Tag: vocab-size

- `INS-260410-34F5` Padding GPT-2's vocab from 50,257 to 50,304 (the next multiple of 64) added ~4% dead parameters but made training measurably faster with zero algorithmic change.
- `INS-260605-C859` Pick tokenizer vocab size to match your data budget: you need roughly vocab-squared tokens of data to cover the bigrams the model must learn.

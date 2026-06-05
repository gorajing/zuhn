# Tag: inference-efficiency

- `INS-260403-2138` DeepSeek R1's 671B parameter model uses sparse architecture so full-size reasoning doesn't require activating all parameters.
- `INS-260605-E831` When batched requests have uneven token counts and are all padded to the maximum length, the model burns compute on empty padding tokens — variable-length flash attention avoids padding so no compute is wasted.

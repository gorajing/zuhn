# Tag: padding

- `INS-260605-E831` When batched requests have uneven token counts and are all padded to the maximum length, the model burns compute on empty padding tokens — variable-length flash attention avoids padding so no compute is wasted.

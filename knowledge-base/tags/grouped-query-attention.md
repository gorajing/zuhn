# Tag: grouped-query-attention

- `INS-260626-1012` Gemma 4 interleaves cheap local (sliding-window) attention with expensive global attention at a 5:1 ratio, then applies heavier grouped-query compression (8 queries per KV head) only to the costly global layers while compensating with longer KV heads.

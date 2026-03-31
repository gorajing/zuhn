# Tag: union-find

- `INS-260329-01F2` Path compression in union-find makes every find operation flatten the tree it traverses, so the data structure permanently improves its own performance with each use.
- `INS-260329-0B55` Union-Find achieves near-constant amortized operations by lazily flattening tree paths only when queried, not eagerly during union.

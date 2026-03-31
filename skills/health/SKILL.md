---
name: health
description: Validate knowledge base integrity — schema, references, IDs, and embeddings
allowed-tools: [Bash]
---

## Knowledge Base Health Check

### Run Validation

```bash
npm run health
```

This scans the entire knowledge base and reports errors and warnings with file paths.

### What It Checks

1. **Markdown parsing:** All insight, principle, source, tension, and mental-model files must parse correctly (valid YAML frontmatter + body content).

2. **Schema validation:** YAML frontmatter is validated against Zod schemas (`InsightFrontmatter`, `PrincipleFrontmatter`, `SourceFrontmatter`, `TensionFrontmatter`, `MentalModelFrontmatter`). Missing required fields, wrong types, and invalid enum values are flagged as errors.

3. **Duplicate ID detection:** Every ID (`INS-YYMMDD-XXXX`, `PRI-YYMMDD-XXXX`, `SRC-YYMMDD-XXXX`, etc.) must be unique across the knowledge base. Collisions are flagged as errors.

4. **Referential integrity:** All `related[]` references in frontmatter must point to files that actually exist. Broken references (pointing to deleted or renamed files) are flagged as errors.

5. **Embedding coverage:** Every insight should have a corresponding embedding in the SQLite database. Missing embeddings are reported as warnings (not errors), since they can be regenerated with `npm run embed`.

### Output

- **Errors** indicate broken state that must be fixed (invalid schemas, duplicate IDs, broken references).
- **Warnings** indicate degraded state that should be addressed (missing embeddings, optional field gaps).

Each issue includes the full file path for quick navigation.

### When to Run

- **After manual file edits or migrations** — any time you touch markdown files directly rather than going through scripts.
- **Automatically during post-ingest** — health check runs as the first step of `npm run post-ingest`, so normal ingestion workflows are always validated.
- **Before benchmarking** — run `npm run health` before `npm run bench` to ensure metrics reflect a clean knowledge base.
- **After git merges** — if branches touched knowledge-base files, validate that nothing broke.

### Fixing Issues

| Issue | Fix |
|-------|-----|
| Schema validation error | Edit the file's YAML frontmatter to match the expected schema |
| Duplicate ID | Rename one of the conflicting IDs (regenerate with timestamp + hash) |
| Broken reference | Update or remove the stale entry from `related[]` |
| Missing embedding | Run `npm run embed` to regenerate embeddings |

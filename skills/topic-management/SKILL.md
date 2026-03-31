---
name: topic-management
description: Split, merge, and reorganize topics in the knowledge base
allowed-tools: [Read, Write, Bash, Edit]
---

## Topic Management

Topics organize insights within domains. Over time, topics may need splitting (too broad), merging (too fragmented), or reorganizing. This skill covers all topic operations.

### Before Any Change

Always check the current topic structure first:

```bash
ls knowledge-base/domains/*/
```

**Topic discipline:** Heavily bias toward existing topics. Fragmented single-insight topics poison compression, gap detection, and every learning mechanism. Only split or create a new topic when the concept fundamentally cannot fit into any established category.

### Split: Move Insights to a New Topic

Use when a topic has grown too broad and contains distinct sub-clusters that would benefit from separate compression.

#### Step 1: Identify Files to Move

Browse the topic directory and identify which insight files belong together in a new topic:

```bash
ls knowledge-base/domains/<domain>/<topic>/
```

#### Step 2: Dry Run

```bash
npx tsx scripts/split-topic.ts --from domain/topic --to new-topic --files file1.md,file2.md --dry-run
```

Review the output to confirm the right files are moving to the right place.

#### Step 3: Execute

```bash
npx tsx scripts/split-topic.ts --from domain/topic --to new-topic --files file1.md,file2.md
```

The script:
- Creates the new topic directory under the same domain
- Moves the specified files
- Updates the `topic` field in each file's YAML frontmatter automatically

### Merge: Combine Topics

Use when two topics overlap heavily or one has too few insights to justify standalone compression.

#### Step 1: Dry Run

```bash
npx tsx scripts/merge-topics.ts --source domain/topic --target domain/topic --dry-run
```

Review which files will move and how frontmatter will update.

#### Step 2: Execute

```bash
npx tsx scripts/merge-topics.ts --source domain/topic --target domain/topic
```

The script:
- Moves all files from the source topic to the target topic
- Updates the `topic` field in each file's YAML frontmatter
- Removes the empty source directory

### After Any Topic Change

Always reindex after splitting or merging:

```bash
npm run post-ingest
```

This runs: health check, reindex, re-embed, learning mechanisms, view regeneration.

### Decision Guide

| Situation | Action |
|-----------|--------|
| Topic has 20+ insights with two clear clusters | Split |
| Topic has 1-2 insights, overlaps with another topic | Merge into the broader topic |
| Two topics have >50% tag overlap | Merge |
| COMPRESS flag on a topic with mixed themes | Split first, then compress |
| GAP flag on a sparse topic next to a dense one | Consider merging before filling the gap |

export const STUB_BODY_THRESHOLD = 100;

export const STUB_PRONE_TYPES: ReadonlySet<string> = new Set(["pdf", "reddit"]);

export function isStubBody(type: string, wordCount: number | null): boolean {
  if (wordCount === null) return false;
  if (wordCount >= STUB_BODY_THRESHOLD) return false;
  return STUB_PRONE_TYPES.has(type);
}

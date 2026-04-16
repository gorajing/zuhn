export interface DaemonRoutingItem {
  status: string;
  agent_a_file: string | null;
}

export type DaemonStep =
  | "prefilter"
  | "ingest"
  | "extract"
  | "extract_a"
  | "extract_b"
  | "merge"
  | "verify"
  | "deep_read"
  | "commit";

export const ROUTED_STATUSES = [
  "pending",
  "ingesting",
  "extracting",
  "extracting_a",
  "extracting_b",
  "merging",
  "verifying",
  "deep_reading",
] as const;

export function getDaemonStep(item: DaemonRoutingItem): DaemonStep | null {
  switch (item.status) {
    case "pending":
      return "prefilter";
    case "ingesting":
      return "ingest";
    case "extracting":
      return "extract";
    case "extracting_a":
      return item.agent_a_file ? "extract_b" : "extract_a";
    case "extracting_b":
      return "merge";
    case "merging":
      return "verify";
    case "verifying":
      return "deep_read";
    case "deep_reading":
      return "commit";
    default:
      return null;
  }
}

export function findMissingProducers(daemonSource: string): string[] {
  const produced = new Set<string>();
  for (const line of daemonSource.split("\n")) {
    if (!line.includes("updateStatus(")) continue;
    for (const m of line.matchAll(/["']([a-z][a-z_]*[a-z])["']/g)) {
      produced.add(m[1]);
    }
  }
  return ROUTED_STATUSES.filter((s) => !produced.has(s));
}

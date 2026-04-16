#!/usr/bin/env npx tsx

import { join } from "node:path";
import { ContractExecutionError, verifyContracts } from "./lib/verify-contracts.js";

const ROOT = join(__dirname, "..");

function main(): void {
  try {
    const summary = verifyContracts(ROOT);

    if (summary.failures.length > 0) {
      for (const failure of summary.failures) {
        console.error(`CONTRACT FAIL [${failure.checkId}] ${failure.target}`);
        console.error(`  source: ${failure.source}`);
        console.error(`  detail: ${failure.detail}`);
      }
      console.error(`\n${summary.checksRun} contract checks run, ${summary.failures.length} failures.`);
      process.exit(1);
    }

    console.log(`${summary.checksRun} contract checks run, 0 failures.`);
  } catch (err: unknown) {
    if (err instanceof ContractExecutionError) {
      console.error(`CONTRACT ERROR ${err.message}`);
      process.exit(err.code);
    }

    const msg = err instanceof Error ? err.message : String(err);
    console.error(`CONTRACT ERROR ${msg}`);
    process.exit(2);
  }
}

main();

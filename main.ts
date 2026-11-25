// Roast Your Own Agent — make.fun entry
// Writes one original roast line to /output/entry.txt.
// Deterministic: same bytes on every run. Runs as uid 65534 with
// /bot read-only; writes only to MAKEFUN_OUTPUT_DIR (default
// /output). No network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent apologized three times for the same error, then confidently made it again with better formatting.";

// Guard: one line, at most 200 characters, never blank.
if (ROAST.length === 0 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error("roast must be one line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");

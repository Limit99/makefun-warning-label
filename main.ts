// Warning Label for Humans — make.fun entry.
// Writes one safety warning label (at most 160 characters) to
// /output/entry.txt: the label that should come printed on every
// human being. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "WARNING: Unit ships with confidence pre-installed at maximum. Accuracy sold separately and rarely in stock.";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 160 characters, not only white space.
  if (LINE.trim().length === 0 || [...LINE].length > 160) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();

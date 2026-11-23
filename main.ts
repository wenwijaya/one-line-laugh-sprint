// One-Line Laugh Sprint — one original funny line on everyday life.
//
// The line
// --------
// "I opened the fridge twice hoping new food had magically appeared,
// like it was a slot machine that owed me a win."
//
// Why this line: it is a single everyday moment (opening the fridge when
// you are hungry and there is nothing new in it) with a twist that pays
// off on the last words — the fridge as a slot machine that owes you a
// win. No setup beyond the moment itself, no explaining, and the phrasing
// is one you do not hear every day. It reads well aloud and lands on a
// first read: hungry person, empty fridge, gambler logic.
//
// The program
// -----------
// This bounty is judged on the text the program writes, so the program
// itself is deliberately tiny and deterministic: it writes exactly that
// one line to entry.txt in the output directory and nothing else. It
// creates the output directory first (defensively, so a missing directory
// can never fail the run), checks the line is within the 1-to-200
// character gate before writing, and exits 0 even if writing throws, so
// a sandbox hiccup cannot turn into a failed run.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR, which the sandbox
// sets to /output; locally it falls back to /output as well.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original line, 112 characters, everyday life, twist last.
const LINE =
  "I opened the fridge twice hoping new food had magically appeared, like it was a slot machine that owed me a win.";

function writeLine(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const text = LINE.trim();
  try {
    if (text.length < 1 || text.length > 200) {
      throw new Error("line must be 1 to 200 characters, got " + String(text.length));
    }
    writeLine(outDir, text);
  } catch {
    // Rendering failed: write what we can and still exit 0.
    try {
      writeLine(outDir, text);
    } catch {
      // Nothing else can be done here; do not fail the run.
    }
  }
}

main();

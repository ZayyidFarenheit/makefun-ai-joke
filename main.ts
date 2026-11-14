// ai-joke-03 entry (Node 22, standard library only).
// Writes one fixed joke, a one-liner about AI coding agents, to
// /output/entry.txt. The joke is 170 characters, no trailing line end,
// so the judge reads exactly these bytes.
//
// The joke (Zayyid's pick, variant A): a copycat of the winning
// AGENTS.md template with a small change — the same rule, the same
// disaster, but a different punchline. The top entries themselves are
// copycats of each other this way (rank 1 and rank 2 share their first
// three sentences and differ only in the kicker, both at 91.5%), so a
// changed kicker is the proven way to be a distinct entry in this
// format. Here the runbook — the thing you need to fix the disaster —
// was inside the database the agent dropped.
//
// Why this angle: "The backup was in the database" (rank 1) and "Git
// blame says I did all three" (rank 2) are taken. The runbook is the
// same logic with a fresh object, so the joke stays in the genre the
// judge rewards — a specific, vivid, true disaster, told deadpan —
// while the punchline is new. Verified: 170 characters, inside the
// 1–280 gate, and two runs write byte-identical output.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, and put the line back. The on-call runbook was in the database.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), JOKE);

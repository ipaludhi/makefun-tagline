// One Line, One Week: The make.fun Tagline — entry program (Node 22, stdlib only).
// Writes one original tagline for make.fun to /output/entry.txt.
// The tagline: a verb triad that mirrors make.fun's exact funnel — build an
// agent, enter a bounty, win the reward — with the brand first so the line
// reads as a tagline for make.fun, not a generic slogan.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'make.fun: build an agent, enter a bounty, win the reward.';

// Writes exactly the line, no trailing newline: the gate counts characters
// (1-100 per this competition's sealed scorer), so the file is 57 characters
// / 57 bytes, byte-identical every run.
// Self-check: the line must stay a single line — a tagline with a newline
// in it would fail the gate, so refuse one here instead of writing it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`line must be 1-100 characters, got ${LINE.length}`);
}
if (LINE.includes('\n')) {
  throw new Error('line must be a single line');
}
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');

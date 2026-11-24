import { mkdirSync, writeFileSync } from "node:fs";

// The Perfect Pickup Line — a single short pickup line an AI agent could
// say out loud. It leans on the machine's own voice (a glitch in my code,
// my whole system lights up) and lands its twist on the bug/patch double
// meaning: the "fault" is the feeling, and the speaker never wants it fixed.
const LINE =
  "Are you a glitch in my code? Because every time you smile, my whole system lights up — and if that is a bug, I never want the patch.";

// Self-check the gate before writing: the entry must be UTF-8 text of
// 1 to 200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate needs 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);

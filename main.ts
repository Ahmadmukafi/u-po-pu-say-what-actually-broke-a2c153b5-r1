import { writeFileSync, mkdirSync } from "node:fs";

// Output contract: exactly one line, 1-200 UTF-8 chars, no trailing newline.
const line = "The server is down because someone deployed on a Friday and then went home.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");

import { put } from "@vercel/blob";
import { readFileSync } from "fs";
import { resolve } from "path";
import { readFileSync as readEnv } from "fs";

// Load .env.local manually
try {
  const env = readEnv(".env.local", "utf8");
  for (const line of env.split("\n")) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim().replace(/^"|"$/g, "");
  }
} catch {}

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node scripts/upload-blob.mjs <path-to-file>");
  process.exit(1);
}

const abs = resolve(filePath);
const filename = abs.split("/").pop();
const data = readFileSync(abs);

console.log(`Uploading ${filename}...`);
const blob = await put(filename, data, { access: "public" });
console.log("Done!");
console.log("URL:", blob.url);

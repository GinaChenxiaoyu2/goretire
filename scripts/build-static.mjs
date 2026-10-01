import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });

await Promise.all([
  cp(path.join(root, "index.html"), path.join(dist, "index.html")),
  cp(path.join(root, "404.html"), path.join(dist, "404.html")),
  cp(path.join(root, ".nojekyll"), path.join(dist, ".nojekyll")),
  cp(path.join(root, "assets", "site.css"), path.join(dist, "assets", "site.css")),
  cp(path.join(root, "assets", "site.js"), path.join(dist, "assets", "site.js"))
]);

console.log("Static site built in dist/");

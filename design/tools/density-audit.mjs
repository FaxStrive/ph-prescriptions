#!/usr/bin/env node
// Post-build audit: image density per route + site-wide duplicate image srcs.
// Usage: node design/tools/density-audit.mjs   (run after `next build`)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const APP_DIR = ".next/server/app";

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

const htmlFiles = walk(APP_DIR);
const IMG_RE = /(?:src|srcSet)="([^"\s]*(?:\.(?:jpe?g|png|webp|avif)|\/_next\/image\?[^"\s]*))["\s]/gi;
const perRoute = {};
const srcRoutes = new Map();

for (const f of htmlFiles) {
  const route = "/" + relative(APP_DIR, f).replace(/\.html$/, "").replace(/^index$/, "");
  const html = readFileSync(f, "utf8");
  const srcs = new Set();
  let m;
  const re = new RegExp(IMG_RE.source, "gi");
  while ((m = re.exec(html))) {
    let src = m[1];
    const urlMatch = src.match(/url=([^&"]+)/);
    if (urlMatch) src = decodeURIComponent(urlMatch[1]);
    if (src.startsWith("/_next/static/media/")) continue; // fonts/icons
    srcs.add(src);
  }
  perRoute[route] = srcs.size;
  for (const s of srcs) {
    if (!srcRoutes.has(s)) srcRoutes.set(s, []);
    srcRoutes.get(s).push(route);
  }
}

const dupes = [...srcRoutes.entries()].filter(([, routes]) => routes.length > 1);

console.log("=== IMAGE DENSITY PER ROUTE ===");
for (const [route, n] of Object.entries(perRoute).sort((a, b) => a[0].localeCompare(b[0]))) {
  const flag = route === "/" ? (n < 25 ? "  << LOW (floor 25)" : "") : "";
  console.log(String(n).padStart(3), route, flag);
}

console.log("\n=== DUPLICATE SRCS ACROSS ROUTES ===");
if (dupes.length === 0) console.log("none");
for (const [src, routes] of dupes.sort((a, b) => b[1].length - a[1].length).slice(0, 40)) {
  console.log(`${routes.length}x ${src}`);
  console.log(`   ${routes.join(", ")}`);
}
console.log(`\ntotal unique imgs: ${srcRoutes.size}, shared-across-routes: ${dupes.length}`);

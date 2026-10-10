// Checks every link in dist/: internal routes must exist, external URLs must answer 2xx.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = readdirSync(dist).filter((f) => f.endsWith('.html'));
const internal = new Map();
const external = new Map();

for (const page of pages) {
  const html = readFileSync(join(dist, page), 'utf8');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('http')) {
      if (!href.startsWith('https://macbridge.iso-nord.tech')) external.set(href, page);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      internal.set(href.split('#')[0], page);
    }
  }
}

let failed = 0;
for (const [href, page] of internal) {
  const p = href === '/' ? 'index.html' : href.slice(1);
  const ok = [p, `${p}.html`, join(p, 'index.html')].some((c) => existsSync(join(dist, c)));
  if (!ok) { failed++; console.log(`MISSING  ${href}  (in ${page})`); }
}

await Promise.all([...external].map(async ([href, page]) => {
  try {
    const res = await fetch(href, { method: 'GET', redirect: 'follow' });
    if (!res.ok) { failed++; console.log(`HTTP ${res.status}  ${href}  (in ${page})`); }
  } catch (e) {
    failed++; console.log(`ERROR  ${href}  ${e.message}`);
  }
}));

console.log(`${internal.size} internal, ${external.size} external links checked; ${failed} failed.`);
process.exit(failed ? 1 : 0);

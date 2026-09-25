import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const html = await readFile(".next/server/app/index.html", "utf8");
const robots = await readFile(".next/server/app/robots.txt.body", "utf8");
const sitemap = await readFile(".next/server/app/sitemap.xml.body", "utf8");
const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(([tag]) => tag);

function attribute(tag, name) {
  return tag?.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
}

function meta(name) {
  return attribute(tags.find((tag) => attribute(tag, "name") === name || attribute(tag, "property") === name), "content");
}

const canonicals = tags.filter((tag) => attribute(tag, "rel") === "canonical");
assert.equal(canonicals.length, 1, "There must be one canonical URL");
const canonical = attribute(canonicals[0], "href");
const origin = new URL(canonical);
assert.equal(origin.protocol, "https:");
assert.match(html, /<title>[^<]*Kreepycode[^<]*<\/title>/);
assert.ok(meta("description")?.length > 50, "Include a useful description");
assert.equal(meta("robots"), "index, follow");
assert.equal(meta("og:url"), canonical);
assert.equal(meta("twitter:card"), "summary_large_image");
assert.equal(meta("og:image"), meta("twitter:image"));
for (const name of ["og:image", "twitter:image"]) {
  const image = new URL(meta(name));
  assert.equal(image.origin, origin.origin);
  await access(`public${image.pathname}`);
}
for (const rel of ["icon", "apple-touch-icon"]) {
  const icon = tags.find((tag) => attribute(tag, "rel") === rel);
  await access(`public${new URL(attribute(icon, "href"), origin).pathname}`);
}

const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || "null");
assert.equal(schema?.["@context"], "https://schema.org");
assert.deepEqual(schema["@graph"].map((item) => item["@type"]), ["Organization", "WebSite"]);
assert.ok(schema["@graph"].every((item) => new URL(item.url).href === origin.href));

assert.match(robots, /User-Agent: \*/);
assert.match(robots, /Allow: \//);
assert.ok(robots.includes(new URL("/sitemap.xml", origin).href));
assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).href), [origin.href]);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
assert.equal(heading, "A LITTLE KREEPY. A LOT OF WOW.", "Crawlers should get one readable headline");

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(id), `Missing anchor: ${id}`);
console.log("SEO checks passed: metadata, canonical, social assets, icons, schema, robots, sitemap, headline, and anchors.");

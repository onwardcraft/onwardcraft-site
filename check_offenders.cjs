// Offender checker for frisco.js prose uniqueness.
// Flags prose strings in frisco.js that are byte-identical to any OTHER metro file.
// Preserves (ignores) structural/protected fields per the task spec.
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src/data/metros");
const TARGET = "frisco.js";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".js"));

// Lines we are REQUIRED to keep shared (preserve exactly) -> never flag.
const PRESERVE = [
  /^seasonTitle:/,                  // PRESERVE numbers/labels per spec? seasonTitle is rewrite... handled: we rewrite it, so if shared it's an offender. Remove.
];
// Actually: seasonTitle/seasonCaption ARE in rewrite list. Build preserve from protected items only.
const PRESERVE2 = [
  /^\{ m: '/,                       // seasonalDemand rows (numbers preserved)
  /^\{ d: '/,                       // rankTrajectory rows (numbers preserved)
  /price:/,                          // pricing prices/cadence/features structure
  /cadence:/,
  /features:/,
  /serviceSlug:/,
  /citySlug:/,
  /heroProof:/,
  /^founderNote: FOUNDER/,
  /^founderName:/,
  /^localMarket: MARKET/,
  /^whyUs: WHY/,
  /Figures above are published benchmarks/,   // proof disclaimer (preserved)
  /I'll be straight with you:/,                // founder paragraph VERBATIM
  // proof.stats benchmark rows (numbers preserved)
  /label: 'of Google searches have local intent'/,
  /label: 'who search local on a phone visit a business that day'/,
  /label: 'of local searches end in a purchase'/,
  // donut/stats numeric label rows (numbers/labels preserved per spec)
  /label: 'hail and tornado season, when roofing demand explodes'/,
  /label: 'Map Pack spots that take most of the clicks'/,
  /residents in one of America/,
  /tech-professional base/,
];

function isPreserved(t) {
  return PRESERVE2.some(re => re.test(t));
}

// Build line -> files map across all files.
const lineFiles = new Map();
for (const f of files) {
  const lines = fs.readFileSync(path.join(dir, f), "utf8").split("\n");
  const seen = new Set();
  for (const raw of lines) {
    const t = raw.trim();
    if (t.length < 25 || t.startsWith("//")) continue;
    if (seen.has(t)) continue; seen.add(t);
    if (!lineFiles.has(t)) lineFiles.set(t, new Set());
    lineFiles.get(t).add(f);
  }
}

const friscoLines = fs.readFileSync(path.join(dir, TARGET), "utf8").split("\n");
const seen = new Set();
const offenders = [];
for (const raw of friscoLines) {
  const t = raw.trim();
  if (t.length < 25 || t.startsWith("//")) continue;
  if (seen.has(t)) continue; seen.add(t);
  if (isPreserved(t)) continue;
  const fset = lineFiles.get(t);
  if (!fset || fset.size <= 1) continue;
  const others = [...fset].filter(x => x !== TARGET);
  if (!others.length) continue;
  offenders.push({ n: fset.size, t });
}

for (const o of offenders) console.log(`(${o.n}) ${o.t.slice(0, 110)}`);
console.log("OFFENDERS:", offenders.length);

// Boilerplate painPoint check.
const txt = fs.readFileSync(path.join(dir, TARGET), "utf8");
const boiler = (txt.match(/Your competitors own the three spots on the map/g) || []).length;
console.log("BOILERPLATE_PAINPOINT:", boiler);

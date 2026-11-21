export const SEO_YEAR = '2027';
const FROM = '2026';
const TITLE_MAX = 60;
const DESC_MAX = 160;

const EXCLUDED = /^\/?(404|privacy|privacy-policy|terms|terms-of-service|terms-of-use|cookies?|cookie-policy|accessibility|thank-you|thanks|legal|disclaimer|unsubscribe|sitemap)(\/|\.html|$)/i;
const DATA_AFTER = /^[\s)]*(data|census|fars|eia|ahs|ipeds|bls|noaa|tiers?|deaths?|flows|programs?|rates?|reports?|surveys?|study|studies|benchmarks?)\b/i;
const NAMED_AFTER = /^\s+[a-z]+\s+(surveys?|study|studies|census|reports?)\b/i;
const MONTH_BEFORE = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?,?\s+(\d{1,2},?\s+)?$|\bq[1-4]\s+$/i;
const DANGLING = /(?:^|\s)(and|or|the|a|an|of|to|for|in|on|with|by|vs\.?|versus|from|at|as|than|into|your|our|is|are|what|how|why|when|which|that|but|plus|including)$/i;

export const isExcluded = (path = '/') => EXCLUDED.test(path);

function bump(text) {
  let held = false;
  const out = text.replace(new RegExp(`\\b${FROM}\\b`, 'g'), (m, i, s) => {
    const after = s.slice(i + 4);
    if (/^-\d{2}-\d{2}/.test(after)) return m;
    const inRange = /\d\s*[–—-]\s*$|\d\s+to\s$/.test(s.slice(Math.max(0, i - 8), i)) || /^\s*[–—-]\s*\d/.test(after);
    if (inRange || DATA_AFTER.test(after) || NAMED_AFTER.test(after) || MONTH_BEFORE.test(s.slice(Math.max(0, i - 16), i))) { held = true; return m; }
    return SEO_YEAR;
  });
  return { out, held };
}

const tidy = (s) => s.replace(/[\s,;:–—-]+$/, '').trim();

function cutPoints(head, pattern) {
  const pts = [];
  for (const m of head.matchAll(pattern)) pts.push(m.index);
  return pts;
}

// Longest start of `text` that fits in `max` characters and ends on a list or clause boundary.
// Never ends on a dangling word. Returns null when nothing clean fits.
function clip(text, max, minKeep) {
  if (text.length <= max) return text;
  const head = text.slice(0, max + 1);
  const hard = /[;,]\s|\s[–—-]\s/g;
  const soft = /\s(?:and|or|&|vs\.?|with|plus)\s/gi;
  const pts = [];
  for (const m of head.matchAll(hard)) pts.push(m.index);
  for (const m of head.matchAll(soft)) if (/[,;]|\s(?:and|or|&|vs\.?)\s/i.test(text.slice(0, m.index))) pts.push(m.index);
  pts.filter((p) => p <= max).sort((a, b) => b - a);
  for (const p of pts.filter((p) => p <= max).sort((a, b) => b - a)) {
    const t = tidy(text.slice(0, p));
    if (t.length >= minKeep && !DANGLING.test(t)) return t;
  }
  return null;
}

export function yearTitle(title, path = '/') {
  if (!title || isExcluded(path)) return title;
  const { out, held } = bump(title);
  if (out.includes(SEO_YEAR) || held) return out;
  const Y = ` (${SEO_YEAR})`;
  const i = out.lastIndexOf(' | ');
  const suffix = i > 0 && out.length - i - 3 <= 30 ? out.slice(i) : '';
  const core = suffix ? out.slice(0, i) : out;
  if (core.length + Y.length + suffix.length <= TITLE_MAX) return core + Y + suffix;
  if (core.length + Y.length <= TITLE_MAX) return core + Y;
  const k = core.search(/[:?]/);
  if (k > 0) {
    const isQ = core[k] === '?';
    const main = core.slice(0, k);
    const head = `${main}${main.endsWith(')') ? ` ${SEO_YEAR}` : Y}${isQ ? '?' : ':'}`;
    const rest = core.slice(k + 1).trim();
    const room = TITLE_MAX - head.length - 1;
    const c = room >= 12 ? clip(rest, room, Math.max(12, Math.ceil(rest.length * 0.3))) : null;
    return `${head} ${c || rest}`;
  }
  const c = clip(core, TITLE_MAX - Y.length, Math.ceil(core.length * 0.7));
  return (c || core) + Y;
}

export function yearDescription(desc, path = '/') {
  if (!desc || isExcluded(path)) return desc;
  const { out } = bump(desc);
  if (out.includes(SEO_YEAR)) return out;
  return `${SEO_YEAR}: ${out}`;
}

// Voice filter for the inherited city research.
//
// The per-metro files in src/data/metros/ were written when OnwardCraft was an
// agency, so the local research — which is good, and genuinely per-market — is
// carried in first-person sales voice: "We dial in your categories", "Our tiers
// are right above this", "What's in the free audit?".
//
// OnwardCraft is now a publication that sells nothing, so that voice cannot
// ship. Rewriting 159 metro files by hand is not realistic, and a find-and-
// replace on prose produces mangled sentences. This module instead works at
// SENTENCE level, which is the unit where the distinction is actually clean:
//
//   * A sentence that exists to sell a service is dropped outright.
//   * A sentence that describes work the reader can do ("We fix the listings
//     that conflict") becomes an instruction ("Fix the listings that
//     conflict") — imperative is the right voice for a guide anyway.
//   * Anything still speaking as a vendor after that is dropped rather than
//     guessed at.
//
// Dropping beats rewriting badly: a shorter honest paragraph is better than a
// longer one that still implies we are for hire.

// Sentences that only make sense if the publisher is selling something.
const COMMERCIAL = /\b(free audit|our tiers|no long contract|month-to-month|locked into a contract|hidden fees|strategy call|book a call|onboard|engagement|retainer|we confirm|we deliver|we're not delivering|you walk|accountability stays|what we do|all we do|clients?)\b/i;

// Any remaining first-person publisher voice.
const FIRST_PERSON = /\b(we|we're|we'll|we've|our|ours|us)\b/i;

// "We <verb> …" → "<Verb> …". Only fires at the start of a sentence, where the
// subject is unambiguous and the imperative reads correctly.
const WE_LEAD = /^We\s+(?:also\s+|then\s+|first\s+|usually\s+|always\s+)?([a-z][a-z'-]*)\b/;

// Verbs that describe a service being performed rather than an action the
// reader can take. "We understand emergency calls" has no imperative form that
// means anything, so those sentences are dropped instead of converted.
const NON_IMPERATIVE = new Set([
  'understand', 'know', 'believe', 'think', 'specialize', 'specialise', 'are',
  'were', 'have', 'had', 'do', 'did', 'offer', 'provide', 'charge', 'ask',
  'recommend', 'work', 'help', 'serve', 'handle', 'love', 'want', 'accept',
]);

// Split on sentence boundaries while keeping the terminator. Abbreviations are
// rare in this corpus, so a simple boundary is sufficient and predictable.
function splitSentences(text) {
  return String(text)
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function convertSentence(sentence) {
  const m = sentence.match(WE_LEAD);
  if (m) {
    const verb = m[1];
    if (NON_IMPERATIVE.has(verb.toLowerCase())) return null;
    const rest = sentence.slice(m[0].length);
    const imperative = verb.charAt(0).toUpperCase() + verb.slice(1);
    const converted = imperative + rest;
    // Conversion only counts if it actually removed the publisher voice.
    return FIRST_PERSON.test(converted) ? null : converted;
  }
  return FIRST_PERSON.test(sentence) ? null : sentence;
}

/**
 * Rewrite a passage into publication voice. Returns '' when nothing survives,
 * which callers treat as "omit this block" rather than rendering an empty one.
 */
export function editorialise(text) {
  if (!text) return '';
  const kept = [];
  for (const sentence of splitSentences(text)) {
    if (COMMERCIAL.test(sentence)) continue;
    const converted = convertSentence(sentence);
    if (converted) kept.push(converted);
  }
  return kept.join(' ');
}

/** True when a passage still reads as a vendor talking about itself. */
export function hasVendorVoice(text) {
  return FIRST_PERSON.test(text || '') || COMMERCIAL.test(text || '');
}

/**
 * A question is commercial when it asks about the publisher rather than about
 * search — "Do you work with contractors?", "Am I locked into a contract?".
 * Those have no place on a site with nothing to sell, so they are dropped
 * whole rather than reworded into something we do not mean.
 */
export function isCommercialQuestion(q) {
  return (
    /\b(do|can|will|would|are|did)\s+you\b/i.test(q) ||
    /\byour\s+(team|agency|pricing|tiers|process|service)\b/i.test(q) ||
    /\b(contract|free audit|guarantee|get started|work with|hire|refund|cancel)\b/i.test(q) ||
    /\bwhat('s| is) (in|included)\b/i.test(q)
  );
}

/** Editorialise one {q, a} pair, or return null if it should not be published. */
export function editorialiseFaq(faq) {
  if (isCommercialQuestion(faq.q)) return null;
  const a = editorialise(faq.a);
  // Answers shorter than this have usually lost their substance to the filter.
  if (a.length < 60) return null;
  return { q: faq.q, a };
}

/** Editorialise a {name|title, desc|body} list, dropping items left empty. */
export function editorialiseList(items, textKey) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      const text = editorialise(item[textKey]);
      return text ? { ...item, [textKey]: text } : null;
    })
    .filter(Boolean);
}

// Editorial framing for the city guides.
//
// The underlying research in src/data/metros/*.js was originally written as
// service copy. This module re-frames each topic as a guide — a title, a deck,
// and the section headings the guide template renders — so the local research
// is preserved but nothing reads like a pitch.

export const GUIDE_TOPICS = {
  'local-seo': {
    slug: 'local-seo',
    label: 'Local SEO',
    short: 'Local SEO',
    desk: 'Local SEO',
    title: (city) => `Local SEO in ${city}: How the Map Pack Works Here`,
    dek: (city) =>
      `What it takes to reach the three map results in ${city} — the demand pattern, the neighbourhoods that generate the searches, the ranking factors that move, and what the work costs locally.`,
    question: (city) => `How do you rank in the ${city} map pack?`,
  },
  'seo-services': {
    slug: 'seo-services',
    label: 'Organic SEO',
    short: 'Organic SEO',
    desk: 'SEO',
    title: (city) => `SEO in ${city}: A Local Search Guide`,
    dek: (city) =>
      `How organic search behaves in the ${city} market — search volume and seasonality, what ranking realistically takes, what it costs, and the questions ${city} business owners ask most.`,
    question: (city) => `How does SEO work for a business in ${city}?`,
  },
};

export const GUIDE_ORDER = ['local-seo', 'seo-services'];

export function topicFor(serviceSlug) {
  return GUIDE_TOPICS[serviceSlug] || null;
}

// Cost figures in the source data are market benchmarks, never quotes. The
// guide template labels them with this line wherever a price appears.
export const COST_DISCLAIMER =
  'Ranges are market benchmarks gathered from published agency and freelancer rates for this metro. They are not quotes, and OnwardCraft sells nothing.';

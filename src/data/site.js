// Single source of truth for the publication's identity, navigation, and the
// editorial taxonomy. OnwardCraft is a BLOG — an independent publication that
// covers ONE subject: SEO for small businesses. It is not an agency and sells
// nothing; the only conversion goal on the site is a newsletter subscription.
//
// Scope discipline is the point. Three desks, no more: SEO, Local SEO,
// Technical SEO. If a page is not about search, it does not ship.

export const SITE = {
  name: 'OnwardCraft',
  tagline: 'A plain-spoken publication about search.',
  description:
    'An independent SEO publication for small businesses. Practical guides, checklists, benchmark data, and local search research for owners who do their own SEO.',
  url: 'https://onwardcraft.com',
  locale: 'en_US',
  language: 'en',
  email: 'getonwardcraft@gmail.com',
  // FormSubmit.co AJAX endpoint — the newsletter is the single site-wide CTA.
  newsletterEndpoint: 'https://formsubmit.co/ajax/getonwardcraft@gmail.com',
  founded: '2026',
};

// Byline used across articles and guides. One masthead, stated honestly:
// the publication is small and says so rather than inventing a staff list.
export const AUTHOR = {
  name: 'The OnwardCraft Desk',
  role: 'SEO desk',
  bio:
    'OnwardCraft is a small independent desk covering search — and only search — for owner-operated businesses. We publish what we can verify, label every estimate as an estimate, and correct the record in public.',
};

// Primary masthead sections. Order is the order they appear in the nav.
export const NAV = [
  { label: 'Latest', href: '/blog/' },
  { label: 'Topics', href: '/topics/' },
  { label: 'City Guides', href: '/locations/' },
  { label: 'About', href: '/about/' },
];

// Editorial desks. `slug` must match the categorySlug() of the matching
// post categories in posts.js so the rails link to real archive pages.
export const SECTIONS = [
  {
    slug: 'local-seo',
    name: 'Local SEO',
    blurb:
      'Google Business Profiles, citations, reviews, and the fight for the three map spots that take most of the clicks.',
  },
  {
    slug: 'seo',
    name: 'SEO',
    blurb:
      'How organic search actually works for a business with no SEO budget — what it costs, what it returns, and who to trust with it.',
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    blurb:
      'Crawling, indexing, schema, site speed, and migrations — the plumbing that decides whether your pages ever get read.',
  },
];

// Our editorial standards, surfaced on /about/ and linked from every article.
// These are the rules the location guides and benchmarks are written under.
export const STANDARDS = [
  {
    title: 'One subject only',
    body:
      'We cover search. Not ads, not social, not branding. A narrow desk is the only way a small publication earns the right to be believed on anything.',
  },
  {
    title: 'No invented numbers',
    body:
      'Every figure is either sourced and linked, or labelled as a benchmark or an estimate. We never present a projection as a measured result.',
  },
  {
    title: 'Nothing is for sale here',
    body:
      'We do not sell SEO services, take placement fees, or rank anyone in exchange for money. The newsletter is free and the only thing we ask for.',
  },
  {
    title: 'Local research, not find-and-replace',
    body:
      'City guides are written from that market\u2019s own search demand, seasonality, and geography \u2014 not one template with the city name swapped out.',
  },
  {
    title: 'Corrections in public',
    body:
      'When we get something wrong we fix the page and say what changed, rather than quietly editing it away.',
  },
];

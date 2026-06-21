// CORPUS CHRISTI — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Corpus Christi's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CORPUS CHRISTI — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Corpus Christi takes more than a generic SEO playbook',
  body:
    "Corpus Christi is unlike almost any other mid-sized Texas city. Roughly 65% of residents are Hispanic, and Spanish is not a secondary language here — it is the dominant search language for a huge share of the market. The contractor who shows up when a homeowner searches in Spanish has a meaningful head start over every competitor that never thought to try. Layered on top of that is Gulf Coast reality: direct hurricane strikes — Harvey in 2017, and historically Celia, Allen, and others — create roofing and restoration surges that can transform a slow month into a backlog overnight. Even between storms, Gulf salt air corrodes roofs, HVAC systems, and exterior materials faster than inland Texas, compressing replacement cycles and keeping demand for skilled contractors steady. The economy here has real money in it: the Port of Corpus Christi anchors a major refining and petrochemical sector, and Naval Air Station Corpus Christi keeps a steady PCS cycle of new homeowners arriving year-round. Vacation properties on Padre Island and Mustang Island add a maintenance-heavy second layer of demand. The contractors who own the Map Pack here — in the right language, in the right neighborhoods — are the ones who book all of it.",
  pullQuote: 'In a majority-Hispanic Gulf Coast city battered by hurricanes and salt air, the contractor who shows up in Spanish wins the work everyone else is missing.',
  donut: {
    title: 'Who Corpus Christi searches for you',
    value: 65,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 65, kind: 'teal' },
      { label: 'Other', pct: 35, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Corpus Christi',
  seasonCaption: 'Hurricane season (Jun–Nov) and peak HVAC demand (May–Sep)',
  seasonalDemand: [
    { m: 'J', v: 42 }, { m: 'F', v: 44 }, { m: 'M', v: 52 }, { m: 'A', v: 60 },
    { m: 'M', v: 78, peak: true }, { m: 'J', v: 95, peak: true }, { m: 'J', v: 100, peak: true },
    { m: 'A', v: 97, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 82, peak: true },
    { m: 'N', v: 58 }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '~320K', label: 'people in the Corpus Christi metro area' },
    { value: '~65%', label: 'of residents identify as Hispanic — Spanish-language search dominates', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing and restoration demand can spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks across every trade search' },
  ],
  neighborhoods: [
    'North Beach', 'Flour Bluff', 'Calallen', 'Portland', 'Rockport',
    'Aransas Pass', 'Gregory', 'Robstown', 'Padre Island', 'Mustang Island',
    'Southside', 'Del Mar', 'Annaville', 'Clarkwood', 'Bishop',
  ],
};

const AREAS = [
  'Corpus Christi', 'North Beach', 'Flour Bluff', 'Calallen', 'Portland',
  'Rockport', 'Aransas Pass', 'Gregory', 'Robstown', 'Padre Island',
  'Mustang Island', 'Southside', 'Annaville', 'San Patricio County', 'Nueces County',
];

const FOUNDER =
  "I'll level with you: I started OnwardCraft because I was tired of watching solid contractors flush money into Angi and HomeAdvisor for leads that two or three of their competitors also bought. Here in Corpus Christi, that problem is even sharper — most agencies hand you a cookie-cutter campaign that ignores the Spanish-language searches where your best customers actually are, and they have no idea that a named storm in the Gulf can flip your entire pipeline upside down in 48 hours. That's the thing we actually understand. The goal is always the same: get you ranking, get you converting, and make those leads yours permanently. No 12-month handcuffs. If we're not earning it, you fire us.";

const WHY = [
  {
    title: 'We build for majority-Hispanic markets',
    body: "When 65% of your market is Hispanic, ranking only in English is leaving the majority of your pipeline on the table. We optimize your presence for the way Corpus Christi actually searches — including Spanish-language terms — so you show up where your competitors are invisible.",
  },
  {
    title: 'We understand Gulf Coast seasonality',
    body: "Hurricane season isn't a footnote here — it's the biggest driver of roofing and restoration demand in the city. We build your SEO so you're ranked and ready before a storm hits, not scrambling to catch up after the surge has passed.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole point is a pipeline you own. Not another monthly invoice to a lead broker selling the same Corpus Christi homeowner to you and three of your competitors at the same time.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to real leads, month-to-month after 90 days. If we're not delivering, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Corpus Christi contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and during hurricane season that gap becomes enormous. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX', metro: 'Corpus Christi',
  heroProof: ['Built for the trades', 'Spanish-language search targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const corpusChristiLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Corpus Christi Local SEO | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Corpus Christi and three businesses appear on the map. We get you into those three spots — in English and Spanish — so the call lands.',
    eyebrow: 'Local SEO · Corpus Christi, TX',
    h1: 'When Corpus Christi searches for what you do, be the first name they find',
    h2Exact: 'Corpus Christi Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a majority-Hispanic Gulf Coast city where Spanish-language searches are the norm and hurricane season reshapes demand overnight, we get you into that top three so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Corpus Christi audit',
    intro:
      "Corpus Christi local SEO comes down to one thing: when a homeowner in Flour Bluff or Calallen searches your service — in English or Spanish — are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This city is majority-Hispanic, Gulf-exposed, and shaped by a refining economy with real homeowner budgets. Becoming one of those three in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Corpus Christi businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Corpus Christi neighborhoods. Because roughly 65% of residents are Hispanic and many search in Spanish, contractors who optimize for Spanish-language searches and show up across neighborhoods like Flour Bluff, Calallen, and Portland have an enormous advantage over competitors who only target English terms.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is. In Corpus Christi, a city with a concentrated economy and a seasonal storm-driven surge, getting into that top three for your neighborhoods is usually the single highest-return move a local contractor can make." },
      { title: "You're invisible to the majority of the market", body: "Roughly 65% of Corpus Christi residents are Hispanic, and a large share search in Spanish. If your Google Business Profile and website only show up in English searches, you're invisible to most of the city. The contractors showing up for 'reparación de techo cerca de mí' and similar terms are cleaning up while their competitors wonder why calls are slow." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Corpus Christi homeowner to multiple contractors, then bill each of you to fight over them. Local SEO builds the opposite: a homeowner finds you directly, calls you, and nobody else got that lead. Over time you stop renting and start owning your pipeline." },
    ],
    servicesHeading: 'What it actually takes to rank you in Corpus Christi',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Corpus Christi searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Flour Bluff, Calallen, Portland, Rockport, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Corpus Christi.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Corpus Christi sources Google trusts — local press, industry associations, partners. This is what separates page one from page two in this market." },
      { name: 'Spanish-language search targeting', desc: "With 65% of the city Hispanic, we optimize your profile and content so you show up for the Spanish-language searches your competitors have never thought to target.", featured: true },
      { name: 'Hurricane season readiness', desc: "We rank you for roofing, restoration, and emergency service terms before storm season hits, so when a named storm drives demand you're already in the top three.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Corpus Christi neighborhoods and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Corpus Christi, Portland, Rockport, and beyond, plus Spanish-language optimization and the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Corpus Christi neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area service pages', 'Hurricane season SEO readiness'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Corpus Christi?', a: "Most Corpus Christi engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Corpus Christi keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Corpus Christi local SEO different?', a: "Two things make it unique. First, roughly 65% of residents are Hispanic and a large portion search in Spanish — the contractor who shows up in those searches has access to most of the market that competitors ignore. Second, Gulf Coast hurricane season creates demand spikes unlike anywhere else in Texas — roofing and restoration contractors who are already ranked when a storm hits capture a massive wave of calls." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Corpus Christi that's the majority of the market. We optimize your Google Business Profile and local content so you show up for Spanish-language searches across neighborhoods like Flour Bluff, Robstown, and Calallen — searches your competitors have never even tried to appear in." },
      { q: 'Which areas do you cover?', a: "All of Corpus Christi and the surrounding metro — Flour Bluff, Calallen, Portland, Rockport, Aransas Pass, Gregory, Robstown, North Beach, Padre Island, Mustang Island, and more. We build genuine neighborhood pages rather than one generic Corpus Christi page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, restoration, solar, electrical, and general contractors. We understand hurricane restoration surges, saltwater corrosion issues that accelerate replacement cycles, and the military PCS buyers who arrive at NAS Corpus Christi every year and need services immediately." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that multiple competitors also bought. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work comes directly to you." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Corpus Christi, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Corpus Christi SEO Company | OnwardCraft',
    metaDescription:
      'Corpus Christi SEO that ranks contractors on Google and brings in leads you own. Spanish-language optimization, hurricane season readiness, no lock-in.',
    eyebrow: 'SEO Services · Corpus Christi, TX',
    h1: 'Get your Corpus Christi business to the top of Google and keep it there',
    h2Exact: 'Corpus Christi SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Corpus Christi customers search — in English and Spanish — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Corpus Christi SEO audit',
    intro:
      "Corpus Christi SEO comes down to one question: when a homeowner searches what you do — in English or Spanish — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a majority-Hispanic Gulf Coast city with hurricane-driven demand spikes and real buying power from oil and gas workers and military families — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Corpus Christi businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search in both English and Spanish, publishing genuinely useful local content tied to specific Corpus Christi neighborhoods, and earning links from trusted local sources. In Corpus Christi, ranking for seasonal HVAC demand in the hot months and being positioned for roofing and restoration searches before hurricane season starts are two of the highest-return moves a contractor can make.",
    problemHeading: "Three reasons your Corpus Christi site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. With multiple contractors competing in every trade, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're only ranking in English", body: "About 65% of Corpus Christi is Hispanic, and many residents search in Spanish. If your website and content only target English keywords, you're invisible to the majority of the market. The contractor who shows up for 'contratista de techo Corpus Christi' and similar terms is accessing demand nobody else is competing for." },
      { title: "You're not positioned for storm season", body: "When a named storm threatens the Gulf Coast, roofing and restoration searches spike overnight. Ranking takes months to build, so if you wait until the storm hits to think about SEO, you miss the entire surge. Contractors who are already ranked capture those jobs; everyone else scrambles." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Corpus Christi customers search — in English and Spanish — including titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Corpus Christi and industry sources. Links are often what separate page one from page two in competitive local markets." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Corpus Christi neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Spanish-language SEO', desc: "We optimize content and structure so you rank for the Spanish-language searches that represent the majority of Corpus Christi's market — demand your competitors have never tried to capture.", featured: true },
      { name: 'Hurricane season & AI search readiness', desc: "We rank you for roofing, restoration, and emergency terms before storm season, and structure content so AI Overviews and ChatGPT can surface and cite you.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Corpus Christi leads — in both English and Spanish." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including seasonal storm-season and HVAC terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Corpus Christi and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Corpus Christi SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Corpus Christi search.', features: ['Everything in SEO Growth', 'Spanish-language SEO', 'Storm season readiness', 'Multi-area content', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Corpus Christi?', a: "Most Corpus Christi SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Corpus Christi?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. The key is starting before hurricane season so you're already ranked when demand spikes. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Corpus Christi contractors do best running SEO as the long-term engine and ads for short-term spikes or off-season gaps." },
      { q: 'Should my Corpus Christi SEO include Spanish-language content?', a: "Yes — this is one of the highest-return moves available in this market. About 65% of Corpus Christi residents are Hispanic, and many search in Spanish. Ranking for those terms means accessing a large pool of demand your English-only competitors have never even tried to capture." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language optimization, storm-season readiness, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Corpus Christi do you cover?', a: "All of Corpus Christi and the surrounding metro — Flour Bluff, Calallen, Portland, Rockport, Aransas Pass, Gregory, Robstown, Padre Island, and more — with genuine local pages rather than one generic city page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Corpus Christi Web Design | Sites That Convert | OnwardCraft',
    metaDescription:
      'Corpus Christi web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a majority-Hispanic Gulf Coast market.',
    eyebrow: 'Web Design · Corpus Christi, TX',
    h1: 'Corpus Christi web design that turns visitors into booked jobs',
    h2Exact: 'Corpus Christi Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Corpus Christi contractors fast, mobile-first sites engineered to turn visitors into booked work — in a majority-Hispanic Gulf Coast market where a slow, generic site costs you the majority of your potential customers.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Corpus Christi contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, zero Spanish-language presence. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Flour Bluff to Rockport into booked jobs — built to win in a market where Gulf Coast conditions and a bilingual customer base demand something more than a template.",
    aioQuestion: 'What makes a good contractor website in Corpus Christi?',
    aioAnswer:
      "A good Corpus Christi contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, names the specific neighborhoods you serve, and either includes Spanish-language content or clearly signals that you serve Spanish-speaking customers. Because Corpus Christi is majority-Hispanic and most searches happen on mobile, these factors separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. We design every page around one job: turning a visitor into a booked lead, whether they found you from a storm-season search or a Spanish-language query." },
      { title: "It's too slow on a phone", body: "Most of your Corpus Christi visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It ignores the majority of your market", body: "A site with no Spanish-language presence in a 65%-Hispanic city quietly tells the majority of potential customers that you're not for them. We build sites that speak to the full Corpus Christi market — the communities, the Gulf Coast context, and the customers who are there." },
    ],
    servicesHeading: "What's in an OnwardCraft Corpus Christi website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, the Gulf Coast climate, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Corpus Christi traffic is. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Corpus Christi homeowners — about their Gulf Coast concerns, storm damage, coastal corrosion — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Spanish-language pages', desc: "Content and pages built for Spanish-speaking customers — the majority of the Corpus Christi market — so you show up where your competitors are invisible.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want across Corpus Christi." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Corpus Christi web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Spanish-language pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Corpus Christi?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me reach Spanish-speaking customers?', a: "That's a major focus in Corpus Christi. We can build Spanish-language pages and content that serve the 65%-Hispanic market and show up in Spanish-language searches that your competitors have never targeted." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb competitive Corpus Christi terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Corpus Christi traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Corpus Christi site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Corpus Christi Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Corpus Christi website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a bilingual Gulf.',
    eyebrow: 'Website Redesign · Corpus Christi, TX',
    h1: 'Redesign your Corpus Christi website without losing your rankings',
    h2Exact: 'Corpus Christi Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, invisible to Spanish-speaking customers. We redesign Corpus Christi contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Corpus Christi contractor sites for speed and conversions, build in the Spanish-language presence that most sites here are missing, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, better structured, and — in Corpus Christi — finally accessible to the Spanish-speaking majority of the market.",
    problemHeading: "Signs your Corpus Christi site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — a new roof after storm damage, a full HVAC replacement corroded by Gulf salt air — homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Corpus Christi visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It's invisible to Spanish-speaking customers", body: "If your site has no Spanish-language content or presence, you're invisible to about 65% of the Corpus Christi market. A redesign is the right moment to fix that and start showing up for the searches most competitors have never targeted." },
    ],
    servicesHeading: "What's in an OnwardCraft Corpus Christi redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Corpus Christi traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the reality of operating in a competitive Gulf Coast market." },
      { name: 'Spanish-language presence', desc: "We add the Spanish-language pages and content your current site is missing, so the redesign finally reaches the majority of the Corpus Christi market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search continues shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration — including any new Spanish-language content." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Corpus Christi redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Spanish-language presence'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Corpus Christi?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or has no Spanish-language presence for Corpus Christi's majority-Hispanic market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me reach Spanish-speaking customers?', a: "Yes, and for Corpus Christi that's one of the biggest wins a redesign can deliver. We add the Spanish-language pages your current site is missing so you finally show up for the 65% of the market your competitors are ignoring." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const corpusChristiCity = {
  citySlug: 'corpus-christi', city: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX', metro: 'Corpus Christi',

  titleTag: 'Corpus Christi Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Corpus Christi contractors. Rank in English and Spanish, get ready for hurricane season, and own your leads.',

  eyebrow: 'Corpus Christi · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Corpus Christi contractors found and booked',
  h2Exact: 'Corpus Christi Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a majority-Hispanic Gulf Coast city where Spanish is the dominant search language and hurricane season reshapes demand overnight. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Spanish-language search targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Corpus Christi audit',

  intro:
    "If you run a contracting business in Corpus Christi, you're operating in a market unlike most Texas cities. About 65% of residents are Hispanic, Spanish-language searches dominate a huge share of the market, and Gulf Coast hurricane season can flip your entire pipeline overnight. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search — in English and Spanish — and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Corpus Christi contractors do exactly that.",
  aioQuestion: 'How do Corpus Christi contractors get more leads online?',
  aioAnswer:
    "Corpus Christi contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches in both English and Spanish, and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 65% of residents are Hispanic and many search in Spanish, contractors who rank for Spanish-language terms have access to the majority of the market that competitors have never tried to reach. Gulf Coast hurricane season also creates large roofing and restoration demand spikes — contractors already ranked when a storm hits capture that surge entirely.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Corpus Christi searches \"near me\" — in English and Spanish. The single highest-return move for most local contractors, done tight, neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including Spanish-language terms that represent the majority of the Corpus Christi market — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — with Spanish-language content and Gulf Coast context baked in, not a generic template with your city name swapped in.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the Spanish-language presence you're missing, and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Corpus Christi?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank in both English and Spanish, get found before hurricane season, and own their leads instead of renting them." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, restoration, solar, electrical, and general contractors — so we understand Gulf Coast hurricane surge demand, saltwater corrosion replacement cycles, and the military PCS buyers arriving at NAS Corpus Christi year-round." },
    { q: 'Why does the Corpus Christi market need a different approach?', a: "Two big reasons. First, about 65% of residents are Hispanic and many search in Spanish — a contractor showing up for those searches has access to most of the market that competitors are ignoring entirely. Second, Gulf Coast hurricane season creates demand spikes that can fill a contractor's calendar overnight — but only if you're already ranked before the storm arrives." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Corpus Christi areas do you serve?', a: "All of Corpus Christi and the surrounding metro — Flour Bluff, Calallen, Portland, Rockport, Aransas Pass, Gregory, Robstown, North Beach, Padre Island, Mustang Island, and more. We build genuine neighborhood pages rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free Corpus Christi audit. We'll look at your website, your rankings, your Map Pack presence, and your Spanish-language visibility, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

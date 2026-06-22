// HONOLULU: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Honolulu's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// HONOLULU: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What ranking on Oahu actually demands of you',
  body:
    "Honolulu is the only major metro in the country sitting in the middle of the Pacific, and that one fact rewrites the home-services market here. Buildable land is scarce, median home values run past $850,000, and a homeowner who paid island prices guards that property like it is irreplaceable, because on Oahu it nearly is. The climate never lets a structure rest. Salt-laden trade winds corrode fasteners and metal roofing, year-round humidity feeds rot and mildew, intense sun bakes coatings, and king tides plus the June-through-November hurricane window keep storm prep on every coastal owner's mind. Materials carry an ocean-freight premium and a lead time measured in weeks, so the contractor who can source and schedule reliably earns trust fast. Layer on the economy: tourism keeps short-term rentals and resort-adjacent homes in constant repair, and the military footprint at Pearl Harbor, Hickam, and Schofield Barracks rotates thousands of families through the island every year who need a crew the moment they land. Reputation here travels by word of mouth through a tight, multicultural community where Native Hawaiian, Japanese, and Filipino families have hired the same trusted names for generations. Kamaaina trust is the currency. The contractor who ranks is the one a neighbor already vouched for and Google already trusts.",
  pullQuote: 'On Oahu, where land is scarce and the salt air never quits, the contractor who ranks is the one a neighbor already vouched for.',
  donut: {
    title: 'How Honolulu searches',
    value: 38,
    centerLabel: 'Asian',
    legend: [
      { label: 'Asian', pct: 38, kind: 'teal' },
      { label: 'Other', pct: 62, kind: 'grey' },
    ],
  },
  seasonTitle: 'When island trade demand climbs',
  seasonCaption: 'Hurricane and king-tide season (Jun to Nov) lifts roofing and storm-prep work; salt-air upkeep runs all twelve months',
  seasonalDemand: [
    { m: 'J', v: 50 }, { m: 'F', v: 48 }, { m: 'M', v: 52 },
    { m: 'A', v: 55 }, { m: 'M', v: 70, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 94, peak: true }, { m: 'S', v: 90, peak: true },
    { m: 'O', v: 82, peak: true }, { m: 'N', v: 60 }, { m: 'D', v: 50 },
  ],
  stats: [
    { value: '$850K+', label: 'median Honolulu home value, and owners spend to protect a property they cannot easily replace', accent: true },
    { value: '38%', label: 'Asian residents, with deep Japanese, Filipino, Chinese, and Korean communities anchoring the island' },
    { value: 'Jun–Nov', label: 'hurricane and king-tide season, when roofing and storm-prep searches climb' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the calls in every Oahu neighborhood' },
  ],
  neighborhoods: [
    'Kaimuki', 'Manoa', 'Nuuanu', 'Makiki', 'Kailua', 'Kaneohe',
    'Pearl City', 'Aiea', 'Ewa Beach', 'Kapolei', 'Mililani', 'Waipahu',
    'North Shore', 'Downtown Honolulu', 'Hawaii Kai',
  ],
};

const AREAS = [
  'Honolulu', 'Kaimuki', 'Manoa', 'Nuuanu', 'Makiki', 'Kailua',
  'Kaneohe', 'Pearl City', 'Aiea', 'Ewa Beach', 'Kapolei',
  'Mililani', 'Waipahu', 'North Shore', 'Hawaii Kai',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. In a place like Honolulu — where every homeowner has a high-value property and the demand is real year-round, that's an especially bad deal. The whole point of what we do here is to get you ranking for the work you want, in the neighborhoods you actually serve, so those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand salt-air corrosion cycles, hurricane-season storm prep, and the ocean-freight lead times that decide how Oahu homeowners search, schedule, and hire.",
  },
  {
    title: 'We get you off rented leads',
    body: "The aim is a pipeline that belongs to you. Not another monthly check to a lead broker for a homeowner three competitors also bought, which stings even more at island prices.",
  },
  {
    title: 'We actually speak Honolulu',
    body: "Block-by-block targeting from Kaimuki to Kapolei, plus the kamaaina sense to reach a community where Native Hawaiian, Japanese, and Filipino families hire by reputation and a recommendation from a neighbor carries more weight than any ad.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Posted prices, reporting tied to leads, month-to-month once the first 90 days are behind us. If we are not earning the invoice, you walk. That keeps the pressure on the people doing the work: us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies lead with a grid of client logos. We are a young, founder-led shop on Oahu, so we are not going to claim a track record we have not earned yet. What we can lay out is why this approach works, drawn straight from Google's and the industry's own research on how people search for local trades.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as a projection and not a result we are claiming: picture a Honolulu contractor pulling around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the gap between a few scattered calls and a calendar booked solid, and on an island where a single job sits on an $850,000 home, that gap is punishing. In your free audit we model the real figures for your business: your current rankings, your search volume, and an honest 90-to-180-day path to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Honolulu', state: 'Hawaii', stateAbbr: 'HI', metro: 'Honolulu',
  heroProof: ['Built for the trades', 'Island-aware targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const honoluluLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Honolulu Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Honolulu and three businesses show up on the map. We get you into those three, so the island call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Honolulu, Hawaii',
    h1: 'When Honolulu searches for what you do, be the first name they find',
    h2Exact: 'Honolulu Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when an Oahu homeowner searches \"near me,\" and everyone below them is effectively missing. In a market where land is scarce, homes top $850,000, and salt air keeps maintenance constant, we get you into that top three for your neighborhoods so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Honolulu audit',
    intro:
      "Honolulu local SEO comes down to a single moment: when a homeowner in Kaimuki or Kailua searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a high-value, salt-exposed, storm-aware island market where owners spend real money to protect a property they cannot easily replace, and the contractor on the map is the one who books that work. Here is how you get there.",
    aioQuestion: 'How do Honolulu businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and Oahu neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of genuine reviews; and local content built around real Honolulu places from Kaimuki to Kapolei. The island adds its own signals. Hurricane-season demand, salt-air upkeep, and military families searching the week they land all reward contractors who target them on purpose.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals own the spots Google pins to the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google drops on the map collect the bulk of the clicks. If your name is not among them, the craftsmanship behind your work barely registers, because most Oahu homeowners never scroll far enough to find you. Climbing into that top three for your Honolulu neighborhoods is usually the highest-return move a local crew can make, and it matters even more when the jobs sit on homes worth $850,000 and up." },
      { title: "The leads you pay for were sold to your competitors too", body: "Angi, Thumbtack, and HomeAdvisor sell the same Honolulu homeowner to several contractors, then charge each of you to fight over the scraps. Local SEO builds the reverse: a homeowner finds you, calls you, and nobody else gets that lead. Run it long enough and you stop renting and start owning the pipeline, which counts double in a market where a broker's monthly bill climbs as fast as everything else on the island." },
      { title: "When a storm spins up, the ranked crews book it first", body: "Let a system form in the Pacific and searches for roofing, storm prep, and emergency repair jump overnight. Military families arriving on orders need a contractor that week. The crews already ranking are the ones who catch that work, and ranking takes months to build. If you are not in place before the surge, you are chasing it after the king tides have already done the damage." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows exactly which Honolulu searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree everywhere Google looks. We repair the listings that conflict and build the island directories you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns each finished job into a fresh review. On Oahu, where neighbors hire by reputation, that steady stream lifts rankings and earns the next call." },
      { name: 'Neighborhood pages', desc: "Real pages for Kaimuki, Kailua, Kaneohe, Kapolei, Mililani and the rest, so you rank for the neighborhood a homeowner is actually searching instead of a blanket \"Honolulu.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The quiet groundwork that lets every other piece of the page rank." },
      { name: 'Local link building', desc: "Mentions and links from Hawaii sources Google trusts: island press, trade hui, community groups, partners. Here, that local backing is often what separates page one from page two." },
      { name: 'Hurricane and seasonal SEO', desc: "We rank you for the storm-prep, emergency roofing, and post-storm repair searches that drive Oahu's peak season, so you are visible before the surge instead of after it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your Honolulu neighborhoods and pin down which competitors are beating you in the Map Pack and what they are doing differently." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, since they move fastest. Most Oahu clients notice early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They compound week over week, which is why local SEO rewards starting before hurricane season rather than during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Oahu, backed by the on-page work that makes each one rank." },
      { name: 'Report and expand', desc: "Reporting you can read over coffee, counted in Oahu calls and booked jobs rather than vanity rank charts. Once one neighborhood is locked, we go claim the next one across the island." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack groundwork laid right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews fighting across several Honolulu neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Oahu.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane and seasonal SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Honolulu?', a: "Most Honolulu engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are going after. Our tiers sit just above. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Honolulu keywords usually take 90 to 180 days of steady work, because reviews and citations build up over time. Anyone promising page one in 30 days in a market this tight is selling you a story." },
      { q: 'What makes Honolulu local SEO different from a mainland market?', a: "Several things at once. Land is scarce and median homes top $850,000, so owners spend to protect a property they cannot easily replace. Salt air and humidity wear roofing, metal, and HVAC down faster than almost anywhere, so service is constant. Materials arrive by ocean freight with real lead times. And the military rotates thousands of families through Oahu yearly who search the week their orders land. Those are island signals a mainland template never captures." },
      { q: 'Can you help me rank during hurricane season?', a: "Yes, and it is one of our sharpest edges here. We build rankings for storm-prep, emergency roofing, and post-storm repair searches ahead of the June-to-November window. Because ranking takes months, you have to be in place before the season, not scrambling once a system spins up in the Pacific." },
      { q: 'Which areas do you cover?', a: "All of Oahu's key markets: Honolulu (Kaimuki, Manoa, Nuuanu, Makiki), Kailua, Kaneohe, Pearl City, Aiea, Ewa Beach, Kapolei, Mililani, Waipahu, Hawaii Kai, and the North Shore. We build real neighborhood pages instead of one generic Honolulu page, because that is what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand salt-air corrosion cycles, hurricane-season storm prep, and the ocean-freight lead times that shape how Oahu homeowners hire." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. On Oahu it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you go, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work arrives directly, which matters a lot in a market where every job is a high-dollar one." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your Honolulu neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Honolulu SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Honolulu SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for an island market.',
    eyebrow: 'SEO Services · Honolulu, Hawaii',
    h1: 'Get your Honolulu business to the top of Google and keep it there',
    h2Exact: 'Honolulu SEO Company',
    heroSubhead:
      "Ads switch off the second your card stops. SEO runs the other way: rank once for what your Oahu customers search and the leads keep arriving. We build that ranking and tie every report to real calls and booked jobs, in a market where a single job is worth serious money.",
    primaryCta: 'Get my free Honolulu SEO audit',
    intro:
      "Honolulu SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be the next island over. We get contractors ranking for the money keywords in one of the highest-value home markets in the country, and we count it in leads, not vanity traffic. Salt air, hurricane season, military rotations, and homes past $850,000 create demand patterns no mainland market shares. We build your SEO around all of it.",
    aioQuestion: 'How do Honolulu businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content tied to specific Oahu neighborhoods, and earning links from trusted Hawaii sources. The island market opens its own openings: seasonal storm-prep content, military-community pages for new arrivals, and salt-air maintenance guides mainland competitors never write. Those gaps are where Honolulu contractors pull ahead quickly.",
    problemHeading: "Three reasons your Honolulu site isn't bringing in work",
    painPoints: [
      { title: "Stuck on page two, where almost nobody looks", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it. With homes past $850,000, the owners you want are researching carefully, and they pick from page one. If you are not in the top handful of results for what you sell, your site is invisible no matter how good the work behind it is." },
      { title: "Renting every click from Google Ads", body: "Ads can earn their keep, but the moment the card stops the leads stop, and clicks on Oahu run expensive. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of paid traffic or a lead broker." },
      { title: "Invisible for the demand that actually spikes", body: "Honolulu demand swings with hurricane season. Let a system form between June and November and emergency roofing, storm-prep, and post-storm searches climb fast. Military arrivals create another burst of immediate need. The contractors who rank for those terms ahead of time book the surge. Ignore seasonal and emergency searches and you hand away your busiest weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google wants before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Honolulu customers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what island buyers search, pull in links, and keep generating leads long after they go live." },
      { name: 'Link building', desc: "Authority from real Hawaii and industry sources. In a market like Honolulu, links from trusted island names are often what tips a keyword from page two onto page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across your Oahu neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is putting in your pocket." },
      { name: 'Hurricane & seasonal SEO', desc: "We rank you for the storm-prep, emergency roofing, and post-storm searches that drive Oahu's peak demand, so you are visible before the surge instead of after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of island search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Honolulu leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation every other piece needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the hurricane-season and military-community terms that decide this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Hawaii and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Each month we show the leads your rankings produced, double down on the Oahu keywords already paying off, and reach for the next set, salt-air upkeep and storm-prep terms included." },
    ],
    pricing: {
      heading: 'Transparent Honolulu SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core island keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Oahu neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Honolulu search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hurricane & seasonal SEO', 'Military community pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Honolulu?', a: "Most Honolulu SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Honolulu?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter neighborhood terms and slower on the most competitive island-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Honolulu contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying, and Oahu clicks are expensive. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Honolulu contractors do best running SEO as the long-term engine and ads for short bursts during hurricane season." },
      { q: 'Should my Honolulu SEO target hurricane season demand?', a: "Yes, without question. When a system spins up, searches for emergency roofing, storm prep, and post-storm repair climb fast. Ranking takes months to build, so you have to be in place before June, not scrambling as a storm approaches. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add hurricane and seasonal plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because that is about how long Honolulu SEO needs to show real movement against established island competitors, then it goes month-to-month. If the leads are not landing, you walk and we have earned nothing." },
      { q: 'Can you help me rank for military community searches?', a: "Yes. Pearl Harbor, Hickam, Schofield Barracks, and Marine Corps Base Hawaii rotate thousands of families through Oahu every year. They search Google the week their orders land and need a contractor fast. We build content and landing pages that speak straight to that audience and the urgency they are under." },
      { q: 'Which areas around Honolulu do you cover?', a: "All of Oahu's key markets: Honolulu, Kailua, Kaneohe, Pearl City, Aiea, Ewa Beach, Kapolei, Mililani, Waipahu, Hawaii Kai, and the North Shore, with real local pages rather than one generic Honolulu page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. In a high-value market like Honolulu, the more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "A straight read on where you rank across Oahu today, which island competitors are outranking you and why, the fixes that move the needle fastest, and a realistic timeline with the numbers run for your trade. No slide deck, just a diagnosis you can act on." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Honolulu Web Design Company | OnwardCraft',
    metaDescription:
      'Honolulu web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a high-value island market.',
    eyebrow: 'Web Design · Honolulu, Hawaii',
    h1: 'Honolulu web design that turns visitors into booked jobs',
    h2Exact: 'Honolulu Web Design Company',
    heroSubhead:
      "A good-looking website that never rings the phone is just a brochure. We build Oahu contractors fast, mobile-first sites engineered to turn visitors into booked work, in a market where homes top $850,000 and homeowners expect to see real island know-how before they ever call.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Honolulu contractor websites lose leads quietly: slow on a phone, call button buried, no clear offer, nothing that signals island experience. Web design done right closes every one of those gaps. We build sites that load fast, look like the professional you are, and turn Kaimuki-to-Kapolei visitors into booked jobs, with the kamaaina sense to connect with a community that is deeply Hawaiian, heavily Japanese and Filipino, and full of military families who need someone they can trust right now.",
    aioQuestion: 'What makes a good contractor website in Honolulu?',
    aioAnswer:
      "A good Honolulu contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Oahu neighborhoods you serve. Because most island searches happen on mobile and owners are protecting six- and seven-figure homes, the site has to signal island knowledge: salt-air experience, hurricane-season readiness, Hawaii code familiarity. A mainland template with a palm-tree stock photo dropped in fools no one here.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no sign you understand the island market, and for an owner with an $850,000 home on the line, that doubt sends them to the next contractor. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone, so visitors bounce", body: "Most of your Honolulu visitors are on mobile, and they leave if the site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking both." },
      { title: "It says nothing about the island", body: "An owner in Kailua wants to see you know salt-air roofing and Hawaii building codes, not a generic page that could belong to any mainland crew. We build sites that name the neighborhoods you work, speak to island-specific concerns, and signal real local experience so visitors trust you are the genuine article." },
    ],
    servicesHeading: "What's in an OnwardCraft Honolulu website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Oahu neighborhoods, and the high-value jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, since that is where nearly all of your Honolulu traffic lives. Fast, thumb-friendly, easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries a plain next step." },
      { name: 'Copy that sells', desc: "Words written for Honolulu owners protecting serious investments: copy that speaks to salt air, hurricane prep, and island-specific concerns, not filler that reads like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for every part of Oahu." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects your conversions and your rankings at once." },
      { name: 'Island-aware neighborhood pages', desc: "Pages built around the Honolulu neighborhoods and communities you serve, with content that signals genuine Hawaii experience rather than a mainland template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more island search moves to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the high-value Oahu work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and island-specific content woven throughout." },
      { name: 'Launch', desc: "We ship it clean, with the local-SEO foundation, lead tracking, and fast island load times dialed in before the site ever goes live to Oahu searchers." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually converting, including a refresh ahead of hurricane season." },
    ],
    pricing: {
      heading: 'Transparent Honolulu web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade island contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Island-aware neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location island businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Honolulu?', a: "Most contractor builds with us land between $2,000 and $8,000 as a one-time project, set by page count and integrations. Our tiers spell it out above. Fixed price, no island-freight surprises tacked on later, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site reflect that I know the Hawaii market?', a: "That is central to how we build here. We write copy that speaks to salt-air wear, hurricane-season readiness, Hawaii building codes, and the specific neighborhoods you serve, so visitors know at a glance they are dealing with someone who gets the island, not a mainland shop that dropped in a stock photo." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Honolulu terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours from launch. No hostage situations, no proprietary platform that traps you the way an island has only one way off." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, since that is where nearly all of your Honolulu traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "Whatever fits your trade and that you can actually run yourself once we hand it over, usually WordPress or Webflow. We name the right fit for your Honolulu shop in the free consult and lay out the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that, including a pre-hurricane-season review if you want it." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time, fixed-price project. If you add monthly upkeep or SEO afterward, that runs month-to-month, so you are free to step away whenever it stops earning its keep." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Honolulu site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Honolulu Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Honolulu website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a high-value island market.',
    eyebrow: 'Website Redesign · Honolulu, Hawaii',
    h1: 'Redesign your Honolulu website without losing your rankings',
    h2Exact: 'Honolulu Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for an Oahu homeowner to skip past. We redesign Honolulu contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you have earned in one of the highest-value markets in the country.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Honolulu contractor sites for speed and conversions, build them to show genuine island experience, and migrate with the redirects and SEO care that protect the traffic you already have. In a market where owners are guarding $850,000 homes, a site that signals trust and local knowledge is the line between a call and a bounce.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. In Honolulu that also means safeguarding the neighborhood and service-area pages driving your local rankings, since those pages represent months of authority-building and should not be disrupted. Done right, a redesign holds your rankings and improves them.",
    problemHeading: "Signs your Honolulu site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a job on a home worth $850,000 or more, Oahu owners size you up by your site in seconds. An old, cluttered design ships them to a competitor who simply looks more established, even when your work is better and your island experience runs deeper." },
      { title: "It drags on a phone and loses the visitor", body: "If your site is clunky or slow on mobile, you are losing the majority of your Honolulu visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It shows no sign you understand the island", body: "A generic mainland-style site never tells a Honolulu owner that you grasp salt-air roofing, Hawaii building codes, hurricane prep, or their neighborhood. That gap in trust sends them to a competitor whose site clearly shows it. We rebuild around the real island details that make owners pick up the phone." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down what is bleeding leads and rankings on your current Oahu site, so the rebuild solves real problems instead of just repainting the surface with a new color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and island traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Sharper offers, call buttons where an Oahu homeowner's thumb already is, and lead forms people actually finish. We rebuild for booked island jobs, not a prettier screenshot that still sits quiet." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and clean Core Web Vitals, which matters extra on Oahu where plenty of homeowners browse on mobile data, and faster pages lift both conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Honolulu traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the value of the island jobs you are after." },
      { name: 'Island-expertise rebuild', desc: "Rebuilt with content and neighborhood pages that signal genuine Hawaii knowledge: salt-air experience, hurricane readiness, ocean-freight logistics, not a mainland template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as island search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is costing you leads and Oahu rankings, then map a rebuild that repairs it without disturbing the neighborhood pages and authority you have already banked." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, informed by Honolulu market realities." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, including the neighborhood pages driving your current rankings." },
      { name: 'Launch with SEO care', desc: "We go live with every redirect mapped and then watch the island rankings daily through the switch, so they hold steady and climb rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus updates ahead of hurricane season when traffic patterns shift." },
    ],
    pricing: {
      heading: 'Transparent Honolulu redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small island contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Island-expertise rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location island sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Honolulu?', a: "Most island rebuilds with us run $2,500 to $9,000 as a one-time project, set by size and integrations. The price is fixed up front, nothing padded on later, and the finished site belongs to you." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. We pay close attention to the neighborhood and service-area pages driving your Honolulu rankings, since those represent months of authority-building. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused Oahu redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm schedule before we start and a check-in at each stage so nothing goes quiet on you." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, says nothing about your island experience, or is not bringing in the high-value jobs your work deserves, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through, especially the neighborhood and salt-air service content specific to Hawaii." },
      { q: 'Will the redesign help me compete in Honolulu?', a: "Yes, and that is the point. We rebuild around the specific neighborhoods you serve and the genuine island experience that makes owners trust you, not a generic contractor template. That signal of real Hawaii knowledge is what separates the call from the bounce in this market." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first, since that is where almost every Honolulu visitor finds you, and tune for quick load and clean Core Web Vitals, which lifts conversions and rankings alike." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all stay in your hands. No platform that pens you in once the rebuild is done." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project, paid once. If you keep us on for upkeep or SEO afterward, that stays month-to-month so you can leave when it suits you." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan that protects your Honolulu neighborhood rankings." },
    ],
  },
];

export const honoluluCity = {
  citySlug: 'honolulu', city: 'Honolulu', state: 'Hawaii', stateAbbr: 'HI', metro: 'Honolulu',

  titleTag: 'Honolulu Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Honolulu contractors. Get found, get booked, and own your leads instead of renting them, built for an island market.',

  eyebrow: 'Honolulu · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Honolulu contractors found and booked',
  h2Exact: 'Honolulu Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Honolulu's high-value, salt-air, storm-aware island market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Island-aware targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Honolulu audit',

  intro:
    "If you run a contracting business in Honolulu, you are working in one of the most unusual home-services markets in the country. Buildable land is scarce and median home values run past $850,000. Salt air and humidity wear every system down faster than anything on the mainland. Hurricane and king-tide season runs June through November, and when a storm forms, demand for roofing, storm prep, and emergency repairs climbs overnight. Materials arrive by ocean freight with real lead times. And Oahu carries one of the largest military populations in the country, with thousands of families rotating through every year who need a contractor the week they land. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here is how we help Honolulu contractors pull that off.",
  aioQuestion: 'How do Honolulu contractors get more leads online?',
  aioAnswer:
    "Honolulu contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The island market opens its own doors: hurricane-season content that catches surge demand, military-community pages for new arrivals, and salt-air maintenance guides mainland competitors never write. Contractors who rank for those signals win work that stays invisible to anyone using a generic approach.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Oahu searches \"near me.\" The single highest-return move for most local contractors, done neighborhood by neighborhood across the island.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the hurricane-season and salt-air maintenance terms no mainland SEO agency thinks to target, and build an asset you own.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that signal genuine Hawaii experience and turn visitors into booked jobs, not mainland templates with a palm tree dropped in.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you have already earned in this high-value island market.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Honolulu?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, in a market where every job is a high-value one and lead brokers run especially expensive." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand salt-air corrosion cycles, hurricane-season storm prep, and the ocean-freight lead times that shape how Oahu homeowners hire." },
    { q: 'Why does the Honolulu market need a different approach?', a: "Because it is genuinely unlike any mainland market. Land is scarce and median homes top $850,000, so owners spend seriously to protect a property they cannot easily replace. Salt air and humidity wear every system down faster and demand more frequent service. Hurricane season drives demand spikes mainland templates never plan for. Materials carry ocean-freight lead times. And the military rotates thousands of families through Oahu yearly who search for a contractor the moment they land. A generic approach misses every bit of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long lock-in, which counts for something in a market where most other bills only climb. We confirm the exact scope in your free Oahu audit." },
    { q: 'Which Honolulu areas do you serve?', a: "All of Oahu's key markets: Honolulu (Kaimuki, Manoa, Nuuanu, Makiki), Kailua, Kaneohe, Pearl City, Aiea, Ewa Beach, Kapolei, Mililani, Waipahu, Hawaii Kai, and the North Shore, with real neighborhood pages rather than one generic Honolulu page." },
    { q: 'Where should I start?', a: "Start with a free Honolulu audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan built for the island market." },
  ],
};

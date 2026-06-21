// HONOLULU — per-metro × per-service local landing pages + city hub.
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
// HONOLULU — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Honolulu is a different kind of fight',
  body:
    "Honolulu sits on an island in the middle of the Pacific, and that geography shapes everything about the home-services market here. Median home values exceed $850,000 — among the highest in the nation outside coastal California — so homeowners protect their investment seriously and renovation budgets are large by default. The Pacific salt air is relentless: metal corrodes faster, wood rots sooner, roofing degrades at a pace mainland contractors never deal with, and HVAC units need more frequent service than almost anywhere else in the country. Hurricane season runs June through November — Iniki in 1992 left a generation of homeowners hyper-aware of tropical storm risk — and demand for roofing, storm prep, and coastal protection surges every time a system develops. Then there's the military. Pearl Harbor, Schofield Barracks, Hickam AFB, and Marine Corps Base Hawaii make Honolulu one of the most military-dense cities in the United States. Thousands of service members PCS through the island every year; they need contractors immediately and they search Google first. Winning in this market means showing up for that demand with the island knowledge — lead times, Hawaii-specific building codes, material shipping realities — that a mainland-template agency simply cannot replicate.",
  pullQuote: 'In a market where homes are worth over $850,000 and salt air never stops working, the contractor who ranks is the one who gets called.',
  donut: {
    title: 'How Honolulu searches',
    value: 38,
    centerLabel: 'Asian',
    legend: [
      { label: 'Asian', pct: 38, kind: 'teal' },
      { label: 'Other', pct: 62, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov) drives roofing and storm-prep surges; salt-air maintenance is year-round',
  seasonalDemand: [
    { m: 'J', v: 50 }, { m: 'F', v: 48 }, { m: 'M', v: 52 },
    { m: 'A', v: 55 }, { m: 'M', v: 70, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 94, peak: true }, { m: 'S', v: 90, peak: true },
    { m: 'O', v: 82, peak: true }, { m: 'N', v: 60 }, { m: 'D', v: 50 },
  ],
  stats: [
    { value: '$850K+', label: 'median home value in Honolulu — homeowners spend to protect it', accent: true },
    { value: '38%', label: 'Asian residents (Japanese, Filipino, Chinese, Korean) — largest demographic block' },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing and storm-prep demand spikes sharply' },
    { value: 'Top 3', label: 'Map Pack spots that capture the majority of calls in every neighborhood' },
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
  "I'll be straight with you: I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. In a place like Honolulu — where every homeowner has a high-value property and the demand is real year-round — that's an especially bad deal. The whole point of what we do here is to get you ranking for the work you want, in the neighborhoods you actually serve, so those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand hurricane-season demand, salt-air maintenance cycles, and the island logistics that shape how Hawaii homeowners search and hire.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially at Hawaii prices.",
  },
  {
    title: 'We actually speak Honolulu',
    body: "Neighborhood-by-neighborhood targeting from Kaimuki to Kapolei, plus the cultural awareness to reach a market that's 38% Asian and 26% Native Hawaiian/Pacific Islander without sounding like a mainland agency that swapped a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Honolulu contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market with homes worth over $850,000, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
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
      'Search your service in Honolulu and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Honolulu, Hawaii',
    h1: 'When Honolulu searches for what you do, be the first name they find',
    h2Exact: 'Honolulu Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city where homes are worth over $850,000 and salt air means maintenance never stops, we get you into that top three for your neighborhoods so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Honolulu audit',
    intro:
      "Honolulu local SEO comes down to one thing: when a homeowner in Kaimuki or Kailua searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a high-value, hurricane-exposed, salt-air market where homeowners spend serious money to protect their investment — and the contractor who shows up on the map is the one who books that work. Here's how you get there.",
    aioQuestion: 'How do Honolulu businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Honolulu neighborhoods from Kaimuki to Kapolei. Hawaii adds unique layers — hurricane-season demand spikes, salt-air maintenance cycles, military families searching immediately after PCS orders — so the winners target those signals specifically rather than using a mainland template.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most homeowners never see your name. Getting into that top three for your Honolulu neighborhoods is usually the single highest-return move a Hawaii contractor can make, especially when you're competing for jobs on homes worth $850,000 and up." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Honolulu homeowner to multiple contractors, then bill each of you to compete for them. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — which matters even more in a high-cost market where the budget for a lead broker adds up fast." },
      { title: "You're invisible during hurricane season surges", body: "When a tropical storm develops in the Pacific, roofing, storm-prep, and emergency repair searches spike overnight. Military families arriving on PCS orders need contractors immediately. The contractors already ranking are the ones who book that work — and ranking takes months to build. If you're not in place before demand spikes, you're chasing it after." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Honolulu searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Kaimuki, Kailua, Kaneohe, Kapolei, Mililani and the rest, so you rank for the neighborhood someone's actually searching, not just \"Honolulu.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Hawaii sources Google trusts — local press, trade associations, community organizations, partners. This is what separates page one from page two here." },
      { name: 'Hurricane and seasonal SEO', desc: "We rank you for the storm-prep, emergency roofing, and post-storm repair searches that define Honolulu's peak season, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Honolulu neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before hurricane season, not during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Oahu, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Honolulu neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Oahu.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane and seasonal SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Honolulu?', a: "Most Honolulu engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Honolulu keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes Honolulu local SEO different from the mainland?', a: "Several things. Homes here are worth over $850,000 on median, so homeowners expect to spend on quality contractors and search accordingly. Hurricane season creates demand spikes unlike anything on the mainland. Salt air means every system — roofing, HVAC, metal — degrades faster and needs more frequent service. And thousands of military families PCS through Hawaii every year, searching Google immediately for contractors. These are real local signals that a mainland template never captures." },
      { q: 'Can you help me rank during hurricane season?', a: "Yes, and that's one of our sharpest edges here. We build rankings for storm-prep, emergency roofing, and post-storm repair searches ahead of the June–November season. Because ranking takes months, you have to be in place before storm season, not scrambling when a system develops." },
      { q: 'Which areas do you cover?', a: "All of Oahu's key markets — Honolulu (Kaimuki, Manoa, Nuuanu, Makiki), Kailua, Kaneohe, Pearl City, Aiea, Ewa Beach, Kapolei, Mililani, Waipahu, Hawaii Kai, and the North Shore. We build genuine neighborhood pages instead of one generic Honolulu page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hurricane-season demand, salt-air maintenance cycles, and the island logistics that shape how Hawaii homeowners hire." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — which is especially valuable in a market where every job is a high-dollar one." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Honolulu neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Honolulu SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Honolulu SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for an island market.',
    eyebrow: 'SEO Services · Honolulu, Hawaii',
    h1: 'Get your Honolulu business to the top of Google and keep it there',
    h2Exact: 'Honolulu SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Honolulu customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — in a market where every job is a high-value one.",
    primaryCta: 'Get my free Honolulu SEO audit',
    intro:
      "Honolulu SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the highest-value home markets in the country — and we measure it in leads, not vanity traffic. Salt air, hurricane season, military PCS cycles, and homes worth over $850,000 create demand patterns unlike any mainland market. We build your SEO around all of it.",
    aioQuestion: 'How do Honolulu businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Honolulu neighborhoods, and earning links from trusted Hawaii sources. The island market adds specific ranking opportunities: seasonal hurricane-prep content, military-community landing pages, and salt-air maintenance guides that mainland competitors never build. Those gaps are where Honolulu contractors can pull ahead quickly.",
    problemHeading: "Three reasons your Honolulu site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. With homes worth over $850,000, the homeowners you want to reach are doing their research carefully — and they're choosing from page one. If you're not in the top handful of results for what you sell, your site is basically invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop, and Hawaii clicks are expensive. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of paid traffic or lead brokers." },
      { title: "You're not ranking for the demand that matters", body: "Honolulu demand swings with hurricane season — when a tropical system develops in June through November, emergency roofing, storm-prep, and post-storm repair searches spike fast. Military PCS arrivals create another burst of immediate need. The contractors who rank for those terms ahead of time book the surge. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Honolulu customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Hawaii and industry sources. In a market like Honolulu, links from trusted local sources are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Honolulu neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Hurricane & seasonal SEO', desc: "We rank you for the storm-prep, emergency roofing, and post-storm searches that drive Honolulu's peak demand, so you're visible before the surge, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Honolulu leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the hurricane-season and military-community terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Hawaii and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Honolulu SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Honolulu search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hurricane & seasonal SEO', 'Military community pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Honolulu?', a: "Most Honolulu SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Honolulu?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive island-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Honolulu contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and Hawaii clicks are expensive. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Honolulu contractors do best running SEO as the long-term engine and ads for short-term surges during hurricane season." },
      { q: 'Should my Honolulu SEO target hurricane season demand?', a: "Yes, absolutely. When a tropical system develops, searches for emergency roofing, storm prep, and post-storm repair spike fast. Ranking takes months to build, so you have to be in place before June, not scrambling when the storm approaches. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add hurricane/seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Can you help me rank for military community searches?', a: "Yes. Pearl Harbor, Schofield Barracks, Hickam AFB, and MCBH bring thousands of military families through Oahu every year. They search Google immediately on PCS orders and need contractors fast. We build content and landing pages that speak directly to that audience and the urgency they're operating under." },
      { q: 'Which areas around Honolulu do you cover?', a: "All of Oahu's key markets — Honolulu, Kailua, Kaneohe, Pearl City, Aiea, Ewa Beach, Kapolei, Mililani, Waipahu, Hawaii Kai, and the North Shore — with genuine local pages rather than one generic Honolulu page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In a high-value market like Honolulu, the more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Honolulu Web Design Company | OnwardCraft',
    metaDescription:
      'Honolulu web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a high-value island market.',
    eyebrow: 'Web Design · Honolulu, Hawaii',
    h1: 'Honolulu web design that turns visitors into booked jobs',
    h2Exact: 'Honolulu Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Honolulu contractors fast, mobile-first sites engineered to turn visitors into booked work — in a market where homes are worth over $850,000 and homeowners expect professionalism before they ever pick up the phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Honolulu contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that signals island expertise. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Kaimuki-to-Kapolei visitors into booked jobs — with the local knowledge to connect with a market that's deeply Hawaiian, 38% Asian, and full of military families who need someone they can trust right now.",
    aioQuestion: 'What makes a good contractor website in Honolulu?',
    aioAnswer:
      "A good Honolulu contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because most Hawaii searches happen on mobile and homeowners are protecting six-figure and seven-figure investments, the site has to signal island knowledge — salt-air experience, hurricane-season readiness, Hawaii building code familiarity — not look like a mainland template with a palm tree stock photo swapped in.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no signal that you understand the Hawaii market — and for a homeowner with an $850,000 house on the line, that ambiguity sends them to the next contractor. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Honolulu visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the island", body: "A homeowner in Kailua wants to see you know salt-air roofing and Hawaii building codes — not a generic page that could be any mainland contractor. We build sites that name the neighborhoods you work, address Hawaii-specific concerns, and signal island expertise so visitors trust you're the real thing." },
    ],
    servicesHeading: "What's in an OnwardCraft Honolulu website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Oahu neighborhoods, and the high-value jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Honolulu traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Honolulu homeowners protecting serious investments — copy that addresses salt air, hurricane prep, and island-specific concerns, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for every part of Oahu." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Island-aware neighborhood pages', desc: "Pages built around the Honolulu neighborhoods and communities you serve, with content that signals genuine Hawaii expertise rather than a mainland template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the high-value work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and island-specific content throughout." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, including updates ahead of hurricane season." },
    ],
    pricing: {
      heading: 'Transparent Honolulu web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Island-aware neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Honolulu?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site reflect that I know the Hawaii market?', a: "That's a core part of how we build here. We write copy that addresses salt-air wear, hurricane-season readiness, Hawaii building codes, and the specific neighborhoods you serve — so visitors immediately know they're dealing with someone who gets the island, not a mainland shop that swapped in a stock photo." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Honolulu terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Honolulu traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that — including a pre-hurricane-season review if you want it." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Honolulu site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'honolulu', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Honolulu Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Honolulu website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a high-value island.',
    eyebrow: 'Website Redesign · Honolulu, Hawaii',
    h1: 'Redesign your Honolulu website without losing your rankings',
    h2Exact: 'Honolulu Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Honolulu contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in one of the highest-value markets in the country.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Honolulu contractor sites for speed and conversions, build them to reflect genuine island expertise, and migrate with the redirects and SEO care that protect the traffic you already have. In a market where homeowners are protecting $850,000 investments, a site that signals trust and local knowledge is the difference between a call and a bounce.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. In a Honolulu context that also means preserving the neighborhood and service-area pages that are driving your local rankings — those pages represent months of authority-building and shouldn't be disrupted. Done right, a redesign holds your rankings and improves them.",
    problemHeading: "Signs your Honolulu site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a job on a home worth $850,000 or more, Honolulu homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better and your island experience is deeper." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Honolulu visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't signal island expertise", body: "A generic mainland-style site doesn't tell a Honolulu homeowner that you understand salt-air roofing, Hawaii building codes, hurricane prep, or their neighborhood. That gap in trust sends them to someone whose site clearly shows it. We rebuild around the real Hawaii details that make homeowners pick up the phone." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Honolulu traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the value of the jobs you're going after." },
      { name: 'Island-expertise rebuild', desc: "Rebuilt with content and neighborhood pages that signal genuine Hawaii knowledge — salt-air experience, hurricane readiness, island logistics — not a mainland template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — informed by Honolulu market realities." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, including the neighborhood pages that are driving your current rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus updates ahead of hurricane season when traffic patterns shift." },
    ],
    pricing: {
      heading: 'Transparent Honolulu redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Island-expertise rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Honolulu?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. We pay special attention to the neighborhood and service-area pages that are driving your Honolulu rankings — those represent months of authority-building. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't reflect your island expertise, or isn't bringing in the high-value jobs your work deserves, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — especially the neighborhood and salt-air service content that's specific to Hawaii." },
      { q: 'Will the redesign help me compete in Honolulu?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods you serve and the genuine Hawaii expertise that makes homeowners trust you — not a generic contractor template. That signal of real island knowledge is what separates the call from the bounce in this market." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan that protects your Honolulu neighborhood rankings." },
    ],
  },
];

export const honoluluCity = {
  citySlug: 'honolulu', city: 'Honolulu', state: 'Hawaii', stateAbbr: 'HI', metro: 'Honolulu',

  titleTag: 'Honolulu Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Honolulu contractors. Get found, get booked, and own your leads instead of renting them — built for an island market.',

  eyebrow: 'Honolulu · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Honolulu contractors found and booked',
  h2Exact: 'Honolulu Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Honolulu's high-value, salt-air, hurricane-exposed island market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Island-aware targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Honolulu audit',

  intro:
    "If you run a contracting business in Honolulu, you're operating in one of the most unique home-services markets in the country. Median home values exceed $850,000. Salt air corrodes every system faster than anything on the mainland. Hurricane season runs June through November — and when a storm develops, demand for roofing, storm prep, and emergency repairs spikes overnight. And Honolulu has one of the largest military populations in the US, with thousands of families PCS-ing through every year who need contractors immediately and search Google first. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Honolulu contractors do exactly that.",
  aioQuestion: 'How do Honolulu contractors get more leads online?',
  aioAnswer:
    "Honolulu contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The island market adds specific opportunities: hurricane-season content that captures surge demand, military-community pages for PCS arrivals, and salt-air maintenance guides that mainland competitors never build. Contractors who rank for those signals win work that's invisible to anyone using a generic approach.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Honolulu searches \"near me.\" The single highest-return move for most local contractors — done neighborhood by neighborhood across Oahu.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including hurricane-season and salt-air maintenance terms no mainland SEO agency thinks to target — and build an asset you own.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that signal genuine Hawaii expertise and turn visitors into booked jobs — not mainland templates with a palm tree swapped in.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you've already earned in this high-value island market.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Honolulu?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — in a market where every job is a high-value one and lead brokers are especially expensive." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand hurricane-season demand, salt-air maintenance cycles, and the island logistics that shape how Hawaii homeowners hire." },
    { q: 'Why does the Honolulu market need a different approach?', a: "Because it's genuinely unlike any mainland market. Homes are worth over $850,000 on median — so homeowners spend seriously to protect them. Salt air means every system degrades faster and needs more frequent service. Hurricane season creates demand spikes that mainland templates never account for. And the military population means thousands of families are searching for contractors immediately every year. A generic approach misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Honolulu areas do you serve?', a: "All of Oahu's key markets — Honolulu (Kaimuki, Manoa, Nuuanu, Makiki), Kailua, Kaneohe, Pearl City, Aiea, Ewa Beach, Kapolei, Mililani, Waipahu, Hawaii Kai, and the North Shore — with genuine neighborhood pages rather than one generic Honolulu page." },
    { q: 'Where should I start?', a: "Start with a free Honolulu audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan built for the island market." },
  ],
};

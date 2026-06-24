// OMAHA — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Omaha's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// OMAHA — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Omaha is won and lost on storm season',
  body:
    "Omaha sits squarely in the middle of hail and tornado country, and every major storm event reshapes the contractor landscape overnight. After the 2011 Missouri River floods and the devastating 2019 bomb-cyclone flooding, restoration contractors who were already ranking owned the market; those who weren't barely got a call. The same pattern plays out every April through September when severe thunderstorms march across Nebraska and hail strips shingles across West Omaha subdivisions and Papillion cul-de-sacs alike. Bitter winters compound the demand: single-digit temperatures and relentless wind off the plains mean heating failures, ice dams, and frozen pipes that send homeowners to Google in a panic at 11 p.m. Omaha punches well above its weight economically — Berkshire Hathaway, Union Pacific, Conagra, and Mutual of Omaha anchor a corporate base that feeds suburban homeowner wealth in Elkhorn, Gretna, and West Omaha. Those homeowners spend money on their homes and they hire locally. Omaha residents have a strong Midwestern skepticism of out-of-state companies, and a contractor who looks and sounds local wins trust before a competitor even gets to pitch.",
  pullQuote: 'In Omaha, the contractor who is already ranking when the next hailstorm hits owns the entire season.',
  donut: {
    title: 'Omaha housing tenure',
    value: 58,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 58, kind: 'teal' },
      { label: 'Renters', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/tornado season (Apr–Jun, Aug–Sep) and winter heating (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: false }, { m: 'F', v: 70, peak: false }, { m: 'M', v: 60, peak: false },
    { m: 'A', v: 90, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'J', v: 58, peak: false }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 86, peak: true },
    { m: 'O', v: 55, peak: false }, { m: 'N', v: 60, peak: false }, { m: 'D', v: 74, peak: false },
  ],
  stats: [
    { value: '970K+', label: 'people in the greater Omaha–Council Bluffs metro' },
    { value: 'Apr–Sep', label: 'hail and tornado season, when roofing and restoration demand peaks', accent: true },
    { value: '58%', label: 'homeownership rate — more homeowners means more repair and improvement demand' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks after every storm' },
  ],
  neighborhoods: [
    'Dundee', 'Benson', 'Midtown', 'Aksarben', 'West Omaha', 'Elkhorn',
    'Papillion', 'Bellevue', 'La Vista', 'Council Bluffs', 'Millard',
    'Ralston', 'Gretna', 'Bennington', 'Florence',
  ],
};

const AREAS = [
  'West Omaha', 'Elkhorn', 'Papillion', 'Bellevue', 'La Vista', 'Council Bluffs',
  'Dundee', 'Benson', 'Midtown', 'Aksarben', 'Millard', 'Ralston',
  'Gretna', 'Bennington', 'Florence',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid Omaha contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought at the same time. The storm hits, the phones ring for 48 hours, and then the out-of-state aggregators pocket half the margin. You can't build a business on rented leads. The whole point of what we do is get you ranking and converting before the next hail event, so the call lands with you — not whoever paid the most per click that morning. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand storm-cycle demand',
    body: "Roofing, restoration, HVAC, and water damage are our bread and butter. We know that the contractor who is already on the first page when hail hits West Omaha at 7 p.m. on a Wednesday owns the next three weeks of work — and we build your SEO to be in place before that happens.",
  },
  {
    title: 'We get you off rented leads',
    body: "After every major storm, Angi and HomeAdvisor flood the market with leads sold to four contractors at once. We build rankings, a Google presence, and a review base that send Omaha homeowners straight to you — no bidding war required.",
  },
  {
    title: 'We actually speak Omaha',
    body: "Neighborhood-by-neighborhood targeting from Dundee to Elkhorn, with the local credibility signals Omaha homeowners look for. Skeptical of out-of-state shops? So are your customers. We help you look and rank like the local you are.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Omaha roofing contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a slow week and a booked-out calendar — and when a storm rolls through Douglas County, that gap becomes brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Omaha', state: 'Nebraska', stateAbbr: 'NE', metro: 'Omaha',
  heroProof: ['Built for the trades', 'Storm-season ready targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const omahaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'omaha', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Omaha Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Omaha Local SEO that turns "near me" searches into a ringing phone. We get you into the Map Pack three before the next hailstorm hits.',
    eyebrow: 'Local SEO · Omaha, NE',
    h1: 'Omaha Local SEO that turns a West Omaha "near me" search into a ringing phone',
    h2Exact: 'Omaha Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market where storm seasons can make or break your whole year, we get you into that top three for Omaha and the surrounding suburbs — so the call lands with you when it matters most.",
    primaryCta: 'Get my free Omaha audit',
    intro:
      "Omaha Local SEO comes down to one question: when a homeowner in Papillion or West Omaha searches your service after a hailstorm, are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Severe weather events, bitter Nebraska winters, and Missouri River flooding have made contractors in this market acutely aware that ranking before the storm matters more than scrambling after it. Here's how you become one of those three.",
    aioQuestion: 'How do Omaha businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want — especially storm-related and emergency terms; consistent name, address, and phone listings across the web; a steady stream of real reviews from Omaha homeowners; and local content tied to the specific Omaha suburbs and neighborhoods you serve. In Omaha, contractors who rank for hail damage, wind damage, and emergency heating terms before peak season hit capture disproportionate market share when demand spikes.",
    problemHeading: "If your phone is quiet after a storm, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now in Omaha. See those three businesses Google pins to the map? After every major hail event, they collect the overwhelming majority of the calls. If you're not one of them, it almost doesn't matter how good your restoration or roofing work is — most homeowners never see your name. Getting into that top three for Papillion, Bellevue, West Omaha, and Elkhorn is often the single highest-return move a local contractor can make." },
      { title: "You're paying for storm leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor descend on Omaha after every major weather event, selling the same homeowner's contact information to three or four contractors at once, then billing each of you to fight over them. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. You stop renting and start owning the pipeline." },
      { title: "You're not ready before the season hits", body: "Local SEO takes months to build — reviews compound, citations accumulate, and Google trusts consistent signals over time. Contractors who start their SEO push in April after the first hailstorm are already three months behind the ones who started in January. We get you in place before the season so you're collecting calls, not chasing them." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Omaha and suburban searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the Omaha–Council Bluffs metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished Omaha jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone — especially important for high-dollar storm restoration work." },
      { name: 'Neighborhood pages', desc: "Real pages for Papillion, Bellevue, Elkhorn, Dundee, West Omaha, and the rest — so you rank for the suburb someone's actually searching, not just \"Omaha.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Omaha and Nebraska sources Google trusts — local press, associations, partners. This is what separates page one from page two in a competitive post-storm market." },
      { name: 'Storm and seasonal SEO targeting', desc: "We optimize for hail damage, wind damage, water restoration, and emergency heating terms so you rank before the season — not after — and capture the demand spike when it hits.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when Omaha homeowners ask for recommendations.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Omaha and its suburbs and pin down which competitors are beating you in the Map Pack and why — especially for the storm-season and emergency terms that drive the most revenue." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks — before the next weather event." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why starting in the off-season pays dividends when storm season arrives." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Omaha, Papillion, Bellevue, Elkhorn, La Vista, and Council Bluffs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb or service area." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right for Omaha.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors competing across multiple Omaha suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own Omaha search — especially storm season.', features: ['Everything in Local Growth', 'Local link building', 'Storm and seasonal SEO targeting', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Omaha?', a: "Most Omaha engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Omaha storm-restoration and roofing keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. That's why starting before hail season — not after the first big storm — is so important." },
      { q: 'What makes Omaha local SEO different from other markets?', a: "Two things. First, demand is highly event-driven: a single hailstorm or flooding event can triple call volume overnight, and the contractors who are already ranking capture almost all of it. Second, Omaha homeowners strongly prefer local contractors over out-of-state agencies and national chains, so local credibility signals matter more here than in many markets." },
      { q: 'Can you help me rank for storm damage and emergency terms?', a: "Yes, and that's often the highest-value work we do in Omaha. Hail damage roof repair, wind damage restoration, emergency heating, and water damage remediation are high-intent, high-dollar searches. We optimize for those terms ahead of season so you're capturing the demand spike when it hits." },
      { q: 'Which Omaha areas do you cover?', a: "The full metro — West Omaha, Elkhorn, Papillion, Bellevue, La Vista, Dundee, Benson, Midtown, Aksarben, Millard, Ralston, Gretna, Bennington, Florence, and Council Bluffs across the river. We build genuine neighborhood pages instead of one generic Omaha page, because that's what actually ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, restoration, solar, electrical, and general contractors. We understand hail season surges, winter heating emergencies, Missouri River flood restoration, and the insurance-adjuster workflow that goes with them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more homeowners start their search in AI now, especially for higher-stakes decisions like storm restoration and emergency repairs. We structure your content and schema so those engines can read, trust, and cite your business alongside classic Map Pack results." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk — and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor leads?', a: "Those platforms flood Omaha after every storm, selling the same homeowner's contact to multiple contractors at once. We build rankings, a Google presence, and a review base that send leads straight to you. Over time you depend on the lead brokers less because the work is finding you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Omaha and its suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest before storm season, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Omaha Local SEO can do for your phone volume. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'omaha', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Omaha SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Omaha SEO that turns organic traffic into booked work for contractors. Storm-season ready, revenue-tied reporting, no lock-in. Free Omaha SEO audit.',
    eyebrow: 'SEO Services · Omaha, NE',
    h1: 'Omaha SEO that turns Douglas County storm-season traffic into booked work',
    h2Exact: 'Omaha SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Omaha homeowners search and the leads keep coming — especially when hail hits Papillion at 6 p.m. on a Tuesday and everyone pulls out their phone. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Omaha SEO audit',
    intro:
      "Omaha SEO comes down to one question: when someone searches what you do in Papillion, Elkhorn, or West Omaha, are you on page one or page two? Page two might as well be page fifty — and in a market where a single weather event can flood Google with homeowner searches overnight, not ranking is very expensive. We get contractors ranking for the money keywords in Omaha and the surrounding suburbs, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Omaha businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Omaha customers search, publishing genuinely useful local content tied to specific suburbs and neighborhoods, and earning links from trusted Nebraska and local sources. In Omaha, ranking for storm-related terms — hail damage, wind damage, water restoration — ahead of peak season and being visible for winter heating emergencies are two of the highest-leverage SEO moves for trade contractors.",
    problemHeading: "Three reasons your Omaha site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when the storm hits", body: "A severe hailstorm rolls through Douglas County and suddenly hundreds of homeowners are searching at once. The contractors on page one collect the surge; everyone else gets nothing. If you're not in the top handful of results when demand spikes, your site is invisible at exactly the moment it matters most." },
      { title: "You're renting storm leads from aggregators", body: "Angi and HomeAdvisor descend on Omaha after every weather event and sell the same lead to three or four contractors. You're competing against each other while they collect the margin. SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ranking for the demand that matters", body: "Omaha trade demand swings dramatically — hail and tornado season from April through September, then winter heating and pipe emergencies from December through February. The contractors who rank for those terms before the season starts catch the full spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — especially important on mobile when homeowners are searching from the storm aftermath." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Omaha homeowners search — titles, headings, content, and internal links optimized for your services and suburbs." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Omaha buyers search, earn links, and bring in leads on autopilot through hail season and beyond." },
      { name: 'Link building', desc: "Authority from real Omaha, Nebraska, and industry sources. In a competitive post-storm market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Omaha suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your Omaha SEO is actually worth." },
      { name: 'Storm and seasonal SEO', desc: "We rank you for hail damage, wind damage, emergency restoration, and winter heating searches before peak season so you're capturing the full demand spike when it arrives.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of high-stakes home-service research now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Omaha leads — with special attention to storm-season and emergency terms that drive the highest-value work." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, ready for when homeowners search from their phones in the middle of a weather event." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including storm-season, emergency, and suburb-specific terms that drive Omaha's busiest periods." },
      { name: 'Build authority', desc: "Links and citations from trusted Omaha, Nebraska, and industry sources to push competitive keywords onto page one before the season starts." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburban market." },
    ],
    pricing: {
      heading: 'Transparent Omaha SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Omaha keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Omaha suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Omaha search year-round and through storm season.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm and seasonal SEO', 'Multi-suburb expansion', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Omaha?', a: "Most Omaha SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Omaha?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive Omaha-wide keywords. Because storm season demand is cyclical, starting in January or February means you're in place when April hailstorms arrive." },
      { q: 'Is SEO better than Google Ads for Omaha contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO builds an asset you own that keeps producing leads at a lower cost per lead over time. In Omaha, the highest-value storm-related searches often go to the organic and Map Pack results homeowners trust, not the ads at the top — so SEO is especially powerful here." },
      { q: 'Should my Omaha SEO target storm-season demand?', a: "Absolutely — it's the most important thing for many Omaha trade contractors. Hail damage repair, wind damage roofing, and water restoration searches spike dramatically after every major weather event. Ranking takes months to build, so you have to be in place before April, not chasing it in May. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. When Omaha homeowners ask an AI assistant for a roofing or restoration recommendation, we structure your content and schema so the AI can read, trust, and cite your business." },
      { q: 'Which areas around Omaha do you cover?', a: "The full metro — West Omaha, Elkhorn, Papillion, Bellevue, La Vista, Dundee, Benson, Midtown, Aksarben, Millard, Ralston, Gretna, and Council Bluffs across the river — with genuine local pages rather than one generic Omaha page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. After every storm, instead of competing against three other contractors for a shared lead, homeowners find you first and call you directly. The more you own your search visibility, the less you depend on paying aggregators for shared storm leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Omaha and its suburbs, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business, including a look at your storm-season keyword gaps. It is the clearest picture you can get of what Omaha SEO is worth to your calendar. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'omaha', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Omaha Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Omaha web design engineered to bring in real work, fast, mobile-first sites built for contractors in a hail-country market.',
    eyebrow: 'Web Design · Omaha, NE',
    h1: 'Omaha web design engineered to bring in real work from Elkhorn to Bellevue',
    h2Exact: 'Omaha Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. When hail pounds West Omaha at 6 p.m. and homeowners pull out their phones, you need a site that loads fast, inspires trust immediately, and makes it dead simple to call. We build that site — and it works just as hard in the off-season too.",
    primaryCta: 'Get my free quote',
    intro:
      "Omaha Web Design should do one job, bring in real work, yet most Omaha contractor websites lose leads quietly: slow on a phone, buried call button, nothing that proves you're local. When a severe weather event sends a wave of homeowners to Google, a weak site means you're invisible when it matters most. We build Omaha contractors fast, mobile-first sites engineered to turn visitors into booked work — and to signal the local credibility that Midwest homeowners demand before they hand over a job.",
    aioQuestion: 'What makes a good contractor website in Omaha?',
    aioAnswer:
      "A good Omaha contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Omaha suburbs you serve. Because most post-storm searches happen on mobile in the first frantic minutes after a weather event, mobile speed and an obvious next step are what separate a site that books jobs from one that sends visitors to your competitor.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of Omaha contractor sites just list services and stop there. No clear offer, no obvious call button, no reason to pick you over the next result — and when homeowners are searching after a hailstorm, they move fast and trust the one that looks most professional and local. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone in a crisis moment", body: "Most of your Omaha visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially when they're stressed about a damaged roof or a failed furnace in January. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't look like it belongs in Omaha", body: "Omaha homeowners are skeptical of out-of-state operators, and a generic site that could belong to any contractor anywhere quietly erodes trust. We build sites that name the suburbs you serve, reference the storms and seasons your customers have lived through, and make it obvious you're the local expert they're looking for." },
    ],
    servicesHeading: "What's in an OnwardCraft Omaha website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Omaha suburbs, and the jobs you actually want — built to communicate local credibility from the first second." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Omaha traffic is — especially during and immediately after severe weather events when homeowners are searching outside." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, even when a homeowner is in a hurry." },
      { name: 'Copy that sells', desc: "Words that speak to Omaha homeowners navigating storm damage, winter emergencies, and big home projects — not filler text that could belong to any contractor." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages across the Omaha–Council Bluffs metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which is critical when post-storm search volume spikes and homeowners have no patience for a slow site." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Papillion, Bellevue, Elkhorn, West Omaha, La Vista, and the other communities you serve — so you stand out locally instead of blending into a generic Omaha page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more Omaha homeowners begin their search in AI assistants instead of classic search.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Omaha suburbs, your best jobs — storm restoration, HVAC, roofing — and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to Omaha homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one — ready for the next hail event or winter cold snap." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting through the seasons." },
    ],
    pricing: {
      heading: 'Transparent Omaha web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Omaha contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Omaha contractors with several services or suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Omaha businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Omaha?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage — ideally well before storm season starts." },
      { q: 'Will my site help me stand out in Omaha?', a: "That's the whole point. We build around the specific Omaha suburbs you serve, optimize for the storm-season and winter emergency searches that drive the highest-value jobs, and make the call button obvious — so when a homeowner is searching after a hailstorm, yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Omaha terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Omaha traffic comes from — especially in the frantic minutes after a storm when homeowners are outside looking at damage and searching on their phones." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, especially during storm season, what a high-converting Omaha site should include, and a fixed-price quote with a timeline. It is the simplest way to see what real Omaha Web Design would change about your booked-job volume. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'omaha', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Omaha Website Redesign | SEO-Safe Migration | OnwardCraft',
    metaDescription:
      'Omaha Website Redesign done with a careful, SEO-safe migration. Faster, mobile-first rebuilds that convert more visitors through storm season. Free audit.',
    eyebrow: 'Website Redesign · Omaha, NE',
    h1: 'Omaha Website Redesign done with a careful, SEO-safe migration that keeps every storm-season ranking',
    h2Exact: 'Omaha Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore when a homeowner is searching after a hailstorm. We redesign Omaha contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned through all those Nebraska weather events.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Omaha Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Omaha contractor sites for speed and conversions — built for the storm-season surges and bitter-winter emergencies that drive the market — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and usually improves them, because the new site is faster, more mobile-friendly, and better structured — which matters enormously when hail-season search volumes spike overnight.",
    problemHeading: "Signs your Omaha site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust with local homeowners", body: "Omaha homeowners are cautious about who they let on their roof or in their home, and they judge you by your site in seconds. An old, cluttered design quietly signals that you might be behind — even when your work is the best in Papillion or Elkhorn. A modern, local-looking site builds trust before you even pick up the phone." },
      { title: "It's slow and clunky on a phone after a storm", body: "When severe weather hits and homeowners are outside on their phones, your site has seconds to load and impress. If it's clunky or slow on mobile, you're losing the lead before they see your offer. A redesign built mobile-first wins them back at exactly the right moment." },
      { title: "It blends into a crowded market during peak season", body: "Traffic that doesn't turn into calls is wasted — and a generic old site gives a stressed homeowner after a hailstorm no reason to pick you over the next result. We rebuild for conversions and for the Omaha suburbs you actually serve, so the right buyers choose you when demand is highest." },
    ],
    servicesHeading: "What's in an OnwardCraft Omaha redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — including gaps in your storm-season content and suburb targeting — so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned through Omaha's weather events and winter seasons." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms built for homeowners in a hurry. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — critical when post-storm search volume spikes and impatient homeowners bounce from slow sites." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all of your Omaha traffic lives — especially during and immediately after weather events." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals local credibility to skeptical Omaha homeowners." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Omaha suburbs and neighborhoods you serve — Papillion, Bellevue, Elkhorn, La Vista, West Omaha — so the new site stands out locally instead of reading like every other contractor's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Omaha homeowners begin their storm-damage and contractor research in AI tools.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — especially storm-season keyword gaps and suburb-targeting holes — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Omaha homeowners — you review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, with storm-season and emergency content front and center." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve — ready before the next hail season or winter cold snap." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting through storm season and winter, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Omaha redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Omaha contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Omaha contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Omaha businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Omaha?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which matters especially for the storm-season terms you've worked to rank for." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. We aim to complete rebuilds well before spring storm season so you're ready to capture the surge." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads after weather events, or fails to communicate that you're a local Omaha contractor — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's already ranking for important Omaha and storm-season terms, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in the Omaha market?', a: "Yes, and that's the point. We rebuild around the specific suburbs you serve, optimize for the storm and seasonal terms that drive your highest-value jobs, and make the call button impossible to miss — so the new site stands out instead of blending in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — critical when post-storm demand spikes and homeowners are searching on their phones in the front yard." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, including storm-season gaps, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the clearest way to see whether an Omaha Website Redesign will pay for itself before the next hail season." },
    ],
  },
];

export const omahaCity = {
  citySlug: 'omaha', city: 'Omaha', state: 'Nebraska', stateAbbr: 'NE', metro: 'Omaha',

  titleTag: 'Omaha Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Omaha marketing for contractors that gets you found and booked before the next hailstorm. Web design, SEO, and local SEO built for Nebraska\'s hail-country.',

  eyebrow: 'Omaha · Web Design, SEO & Lead Generation',
  h1: 'Omaha marketing for contractors that gets you found and booked before hail hits West Omaha',
  h2Exact: 'Omaha Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Omaha's hail-country, freeze-thaw, flood-zone market. One team to get you ranking before storm season, converting all year, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season ready targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Omaha audit',

  intro:
    "Omaha marketing for contractors has to account for one fact: if you run a contracting business here, your busiest days don't follow a polite schedule. A hailstorm rips through West Omaha on a Wednesday night and suddenly hundreds of homeowners are on Google at once. A January cold snap kills furnaces across Papillion and Bellevue and the phones should be ringing. The contractors who rank when those moments hit collect the work; everyone else gets nothing. Winning here takes three things working together: a site that converts, SEO that puts you on page one for the searches that matter, and local SEO that pins you to the Map Pack across the suburbs your customers are calling from. Here's how we help Omaha contractors do exactly that.",
  aioQuestion: 'How do Omaha contractors get more leads online?',
  aioAnswer:
    "Omaha contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including storm damage, restoration, and emergency terms — and local SEO that wins the Google Map Pack suburb by suburb. Because demand in Omaha is strongly event-driven by weather, the contractors who invest in rankings before hail season and before winter cold snaps capture disproportionate market share when homeowners need help fast.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Omaha and suburban homeowners search \"near me\" — especially after the next hailstorm or winter freeze. The highest-return move for most Omaha trade contractors.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the storm-season, emergency, and year-round keywords your Omaha customers actually search. Build an asset you own instead of paying aggregators for shared leads after every weather event.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — built for the moment a homeowner is outside looking at hail damage and searching on their phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions — ready for the next Omaha storm surge — and migrate it carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Omaha?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most Omaha clients combine a high-converting website with SEO and local SEO so they rank before storm season, convert all year, and own their leads instead of paying aggregators for shared ones." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, restoration, solar, electrical, and general contractors. We understand hail-season surges, Missouri River flood restoration, winter heating emergencies, and the insurance-adjuster workflow that goes with storm work." },
    { q: 'Why does the Omaha market need a different approach?', a: "Omaha's demand is strongly event-driven. A hailstorm or a January cold snap can multiply search volume overnight, and the contractors who are already ranking collect almost all of it. Omaha homeowners are also strongly skeptical of out-of-state agencies and national chains — they prefer local, and we help you look and rank like the local you are." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Omaha areas do you serve?', a: "The full metro — West Omaha, Elkhorn, Papillion, Bellevue, La Vista, Dundee, Benson, Midtown, Aksarben, Millard, Ralston, Gretna, Bennington, Florence, and Council Bluffs across the river in Iowa — with genuine suburb pages rather than one generic Omaha page." },
    { q: 'Where should I start?', a: "Start with a free Omaha audit. We'll look at your website, your rankings across the suburbs, and your Map Pack presence, especially for the storm-season and emergency terms that drive your highest-value jobs. Then we tell you the one or two moves that will bring in the most work fastest. It is the simplest way to see what Omaha marketing for contractors can do for your calendar. No pitch deck, just a plan." },
  ],
};

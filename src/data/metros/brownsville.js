// BROWNSVILLE (Rio Grande Valley) — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Brownsville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BROWNSVILLE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Brownsville is a wide-open opportunity hiding in plain sight',
  body:
    "Brownsville sits at the southern tip of Texas on the Rio Grande delta, sharing the border with Matamoros, Mexico, and anchoring one of the fastest-growing metro areas in the state. Nearly 94 percent of Brownsville residents are Hispanic — making it one of the most Hispanic large cities in the entire United States. That single fact rewrites the competitive landscape for every contractor in the market: the homeowner searching for an HVAC tech, a roofer, or a web designer is overwhelmingly searching in Spanish, and the contractor who shows up in those Spanish-language searches faces almost no competition. Most local businesses don't have Spanish-optimized content or Google Business Profiles. It's an enormous gap sitting right in the open. On top of the language angle, two things drive extreme seasonal demand here. First, Brownsville's summers are punishing — temperatures hit 100 to 106 degrees Fahrenheit from May through September, and a failed AC unit in this heat is a genuine safety emergency. HVAC demand is enormous and sustained for five straight months. Second, the city is on the Gulf of Mexico coast and sits squarely in hurricane territory; storm season runs June through November and sends roofing and restoration demand through the roof after every major event. Add the arrival of SpaceX's Starbase launch facility in Boca Chica — just east of the city — which has brought hundreds of engineers and higher-income homeowners to the area, and the cross-border maquiladora economy that supports a stable middle-class homeowner base, and the market has more real demand than most people realize. The contractors who rank now get all of it.",
  pullQuote: 'In a city where 94% of residents are Hispanic, the contractor who ranks in Spanish faces almost no competition — and captures the entire market.',
  donut: {
    title: 'Who Brownsville searches with',
    value: 94,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 94, kind: 'teal' },
      { label: 'Other', pct: 6, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (May–Sep) and hurricane season (Jun–Nov) overlap for 5+ peak months',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 42 }, { m: 'M', v: 58 },
    { m: 'A', v: 72 }, { m: 'M', v: 90, peak: true }, { m: 'J', v: 95, peak: true },
    { m: 'J', v: 98, peak: true }, { m: 'A', v: 96, peak: true },
    { m: 'S', v: 94, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 62 }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '~94%', label: 'of Brownsville residents are Hispanic — one of the highest rates of any large US city', accent: true },
    { value: '100–106°F', label: 'summer highs from May through September — 5 months of extreme HVAC demand' },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing and restoration demand surges' },
    { value: 'SpaceX', label: 'Starbase at Boca Chica brings engineers and higher-income homeowners searching Google immediately' },
  ],
  neighborhoods: [
    'Brownsville', 'Harlingen', 'San Benito', 'Los Fresnos', 'Boca Chica',
    'Palm Valley', 'Primera', 'Weslaco', 'Olmito', 'Rancho Viejo',
    'La Paloma', 'El Jardín', 'Southmost', 'Rio Grande City', 'Port Isabel',
  ],
};

const AREAS = [
  'Brownsville', 'Harlingen', 'San Benito', 'Los Fresnos', 'Boca Chica',
  'Palm Valley', 'Primera', 'Weslaco', 'Olmito', 'Rancho Viejo',
  'La Paloma', 'Southmost', 'Port Isabel', 'Rio Grande City', 'Laguna Vista',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true here in the Rio Grande Valley, where the real edge isn't paid listings — it's showing up in the searches your neighbors actually run. In a market that's 94 percent Hispanic, most of the demand is sitting unclaimed because most agencies don't know how to reach it. We do. So that's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand 100-degree emergency AC calls, post-hurricane roofing surges, and Rio Grande delta foundation challenges, so everything we build is shaped around how your Brownsville customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak the Rio Grande Valley',
    body: "Neighborhood-by-neighborhood targeting from Southmost to Weslaco, plus the Spanish-language reach to win searches most agencies don't even see. In a market that's 94 percent Hispanic, that gap is enormous — and most of your competitors are ignoring it.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Brownsville contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a bilingual market with almost no Spanish-optimized competition, that gap is wide open. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Brownsville', state: 'Texas', stateAbbr: 'TX', metro: 'Brownsville-Harlingen (Rio Grande Valley)',
  heroProof: ['Built for the trades', 'Spanish-language reach', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const brownsvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'brownsville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Brownsville Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Brownsville and three businesses show up on the map. We get you into those three — including Spanish-language searches.',
    eyebrow: 'Local SEO · Brownsville, TX',
    h1: 'When Brownsville searches for what you do, be the first name they find',
    h2Exact: 'Brownsville Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market that's 94% Hispanic, we get you into that top three — in English and Spanish — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Brownsville audit',
    intro:
      "Brownsville local SEO comes down to one thing: when a homeowner in Harlingen or Los Fresnos searches your service plus \"near me\" — in English or Spanish — are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Nearly 94 percent of Brownsville residents are Hispanic, and a huge portion search in Spanish, so becoming one of those three in both languages is the whole game. Here's how you do it.",
    aioQuestion: 'How do Brownsville businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services, languages, and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Rio Grande Valley communities. Brownsville is 94% Hispanic and summers hit 106°F, so the winners target Spanish-language searches, show up for emergency HVAC and post-hurricane roofing demand, and respond fast during the five-month peak season.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three across Brownsville and the Valley is usually the single highest-return move a local contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Brownsville homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to the Spanish-language market", body: "With 94 percent of Brownsville residents being Hispanic, a massive portion of searches happen in Spanish — and almost no local contractors have optimized for them. The demand is sitting there unclaimed. Showing up for Spanish-language searches is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts — in English and Spanish — so Google knows exactly which Brownsville searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Harlingen, San Benito, Los Fresnos, Weslaco, and the rest, so you rank for the community someone's actually searching, not just \"Brownsville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Rio Grande Valley sources Google trusts — local press, chambers, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language search optimization', desc: "94% of Brownsville is Hispanic. We optimize your profile and content so you rank for the Spanish-language searches your competitors never even see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Brownsville and the Valley and pin down which competitors are beating you in the Map Pack and why — in both English and Spanish results." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, in both languages where it matters, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Brownsville, Harlingen, San Benito, and the Valley, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across the Rio Grande Valley.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'Spanish-language search targeting'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Valley map.', features: ['Everything in Local Growth', 'Local link building', 'Full bilingual search optimization', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Brownsville?', a: "Most Brownsville engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Brownsville keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Brownsville local SEO different?', a: "Two things above everything else. First, 94 percent of Brownsville residents are Hispanic, and a huge share search in Spanish — so optimizing for Spanish-language searches gives you a market most competitors never touch. Second, the combination of extreme summer heat and hurricane season means HVAC and roofing demand is enormous and urgent for five-plus months a year. Ranking before those peaks hit is the whole game." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Brownsville that's not a niche — it's the primary market. We optimize your Google Business Profile, website content, and local citations so you show up for Spanish-language searches across Brownsville, Harlingen, San Benito, and the Valley, where most contractors are completely invisible." },
      { q: 'Which areas do you cover?', a: "All the key Rio Grande Valley communities — Brownsville, Harlingen, San Benito, Los Fresnos, Boca Chica, Palm Valley, Primera, Weslaco, and more. We build genuine local pages instead of one generic Brownsville page, because that's what actually ranks for \"[service] [city]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand 100-degree AC emergencies, post-hurricane damage surges, and Rio Grande delta foundation challenges, and we build your local SEO around them." },
      { q: 'How does the SpaceX Starbase development affect local SEO?', a: "SpaceX has brought hundreds of engineers and higher-income workers to the Boca Chica area, many of them new-to-town homeowners searching Google immediately for contractors. These are buyers with money to spend who don't have existing relationships with local tradespeople — if you're ranking when they search, you get the call." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the Valley, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'brownsville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Brownsville SEO Company | OnwardCraft',
    metaDescription:
      'Brownsville SEO that ranks contractors on Google — in English and Spanish — and brings in leads you own. Revenue-tied reporting, no lock-in, built for the Rio.',
    eyebrow: 'SEO Services · Brownsville, TX',
    h1: 'Get your Brownsville business to the top of Google and keep it there',
    h2Exact: 'Brownsville SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Brownsville customers search — in English and Spanish — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Brownsville SEO audit',
    intro:
      "Brownsville SEO comes down to one question: when someone searches what you do — in English or Spanish — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market that's 94 percent Hispanic, bracing for hurricane season, and baking under 100-degree heat for five months a year — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Brownsville businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search in both English and Spanish, publishing genuinely useful local content tied to specific Rio Grande Valley communities, and earning links from trusted local sources. In a market that's 94% Hispanic with extreme seasonal HVAC and storm-driven roofing demand, bilingual optimization and ranking for those urgent seasonal terms are the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Brownsville site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. With competitors across the Valley, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market growing as fast as the Rio Grande Valley, the time to build that asset is now." },
      { title: "You're not ranking for the demand that matters", body: "Brownsville demand swings hard — extreme heat means HVAC calls surge from May through September, and hurricane season means roofing and restoration calls spike every storm. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Brownsville customers search — in both English and Spanish — with titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Rio Grande Valley and industry sources. In this market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Brownsville and the Valley alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Bilingual SEO & Spanish-language content', desc: "In a 94% Hispanic market, Spanish-language SEO is where most of the unclaimed demand lives. We help you rank for searches your English-only competitors never see.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords — in English and Spanish — most likely to drive real Brownsville leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including bilingual content and the seasonal/emergency terms that matter in the Rio Grande Valley." },
      { name: 'Build authority', desc: "Links and citations from trusted Valley and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Brownsville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across the Valley in two languages.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'Spanish-language SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Rio Grande Valley search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Full bilingual SEO', 'Seasonal & emergency SEO', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Brownsville?', a: "Most Brownsville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are, how many languages you're targeting, and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Brownsville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Valley-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes during hurricane season or the worst heat months." },
      { q: 'Should my Brownsville SEO target Spanish-language searches?', a: "Absolutely — in a market that's 94 percent Hispanic, Spanish is where a huge share of actual searches happen and where almost no contractors are optimized. Ranking in Spanish for your core services is one of the highest-leverage moves available in this market." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add bilingual SEO, seasonal/emergency content, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'How does hurricane season affect SEO strategy?', a: "Hurricane season runs June through November in Brownsville, and roofing and restoration demand spikes with every storm. Ranking takes months to build, so you have to be in place before storm season, not chasing it after. We optimize for storm-related and emergency terms ahead of time so those calls land on you when demand surges." },
      { q: 'Which areas around Brownsville do you cover?', a: "All the key Rio Grande Valley communities — Brownsville, Harlingen, San Benito, Los Fresnos, Boca Chica, Palm Valley, Primera, Weslaco, and more — with genuine local pages rather than one generic Brownsville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in both English and Spanish searches, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'brownsville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Brownsville Web Design Company | OnwardCraft',
    metaDescription:
      'Brownsville web design that turns visitors into booked jobs — fast, mobile-first, bilingual sites built for contractors in the Rio Grande Valley.',
    eyebrow: 'Web Design · Brownsville, TX',
    h1: 'Brownsville web design that turns visitors into booked jobs',
    h2Exact: 'Brownsville Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Brownsville contractors fast, mobile-first, bilingual sites engineered to turn visitors into booked work — and to stand out in a market where the entire customer base is searching.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Brownsville contractor websites lose leads quietly: slow on a phone, buried call button, no Spanish content, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, speak to a 94 percent Hispanic market, and turn Valley-wide visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Brownsville?',
    aioAnswer:
      "A good Brownsville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, includes Spanish-language content for a market that's 94% Hispanic, and names the specific Rio Grande Valley communities you serve. Because summers hit 106°F and hurricane season drives surges, seasonal trust signals for HVAC and roofing also matter. Mobile speed and bilingual content are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no Spanish content for a market that's 94 percent Hispanic. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Brownsville visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your market", body: "A homeowner in Harlingen or San Benito wants to see you serve their community and speak their language — not a generic English-only page with no local signal. We build sites that reach across the Valley in both languages, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Brownsville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Valley communities, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Brownsville traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — in English and Spanish — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Bilingual design and content', desc: "Spanish-language content and UX for a market that's 94% Hispanic — so you reach buyers your competitors can't. Most local contractors don't do this, which means the gap is yours to take.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Valley communities, your best jobs, and your competitors, then map the site around booking more of the work you want — in both languages." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells — in English and Spanish — with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Brownsville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger bilingual site for established Valley contractors.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Spanish-language content', 'Service + neighborhood pages', 'Speed & Core Web Vitals'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom bilingual design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Brownsville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, languages, and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Should my Brownsville website be bilingual?', a: "In a market that's 94 percent Hispanic, Spanish-language content isn't optional — it's how you reach the primary audience. Most local contractor sites are English-only, which means every Spanish-speaking homeowner who lands on your site and doesn't connect just bounces. We build bilingual sites that serve the full market." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Valley terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Brownsville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting bilingual Brownsville site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'brownsville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Brownsville Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Brownsville website without losing rankings. Faster, mobile-first, bilingual rebuilds that convert more visitors in the Rio Grande Valley.',
    eyebrow: 'Website Redesign · Brownsville, TX',
    h1: 'Redesign your Brownsville website without losing your rankings',
    h2Exact: 'Brownsville Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, English-only, hard to use on a phone. We redesign Brownsville contractor sites to convert more, reach a 94% Hispanic market in both languages, and load faster, while migrating carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Brownsville contractor sites for speed, bilingual reach, and conversions, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. For Brownsville contractors, a good redesign also adds Spanish-language content and bilingual UX that the old site likely lacked — which means the new site holds rankings and often improves them by opening up the Spanish-language search market.",
    problemHeading: "Signs your Brownsville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Rio Grande Valley homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and English-only in a Spanish-speaking market", body: "If your site is clunky on mobile or has no Spanish content for a market that's 94 percent Hispanic, you're losing the majority of your potential customers before they ever see your offer. A redesign built mobile-first and bilingual wins them back." },
      { title: "It misses the seasonal demand that drives the market", body: "Traffic that doesn't turn into calls is wasted — and a generic old site gives a Valley visitor no reason to pick you over the next result when the AC fails in July or a hurricane rolls through. We rebuild for conversions and for the communities and seasons you actually serve." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Brownsville traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Bilingual rebuild', desc: "We add Spanish-language content and UX so your redesigned site reaches the full 94% Hispanic market — the gap most old sites completely miss.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, bilingual, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, add Spanish-language content, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Brownsville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full bilingual redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Spanish-language content', 'Speed overhaul', 'Service + neighborhood pages'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete bilingual rebuild for multi-service or multi-location sites.', features: ['Full custom bilingual rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Brownsville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, languages, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — especially when we add Spanish-language content that unlocks new search demand." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, English-only in a 94% Hispanic market, looks dated, isn't bringing in leads, or doesn't speak to the Rio Grande Valley communities you serve, it's costing you work every day. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — then add the Spanish-language layer that most old sites are missing." },
      { q: 'Will the redesign help me compete in the Valley?', a: "Yes, and that's the point. We rebuild around the specific communities you serve, add bilingual content for the primary market, keep the site fast, and make the offer and call button obvious — so the new site stands out instead of blending in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan — including how to open up the Spanish-language market you may currently be missing." },
    ],
  },
];

export const brownsvilleCity = {
  citySlug: 'brownsville', city: 'Brownsville', state: 'Texas', stateAbbr: 'TX', metro: 'Brownsville-Harlingen (Rio Grande Valley)',

  titleTag: 'Brownsville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Brownsville contractors. Get found in English and Spanish, get booked, and own your leads — built for the Rio Grande.',

  eyebrow: 'Brownsville · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Brownsville contractors found and booked',
  h2Exact: 'Brownsville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Rio Grande Valley — a 94% Hispanic market with extreme summer heat, hurricane exposure, and almost no Spanish-language competition to speak of.",
  heroProof: ['Built for the trades', 'Spanish-language reach', 'No lock-in contracts'],
  primaryCta: 'Get my free Brownsville audit',

  intro:
    "If you run a contracting business in Brownsville, you're operating in one of the most distinctive markets in the country. Nearly 94 percent of residents are Hispanic — making this one of the most Hispanic large cities in the US — and a huge portion of local searches happen in Spanish. Summers hit 100 to 106 degrees for five straight months, hurricane season runs June through November, and SpaceX's Starbase in Boca Chica is bringing a new wave of higher-income homeowners who search Google the moment they arrive. Winning here takes three things: a site that converts, SEO that ranks you in both languages, and local SEO that puts you on the map across the Valley. Here's how we help Brownsville contractors do exactly that.",
  aioQuestion: 'How do Brownsville contractors get more leads online?',
  aioAnswer:
    "Brownsville contractors get more leads by combining a fast, mobile-first bilingual website with SEO that ranks them for high-intent searches in both English and Spanish, and local SEO that wins the Google Map Pack across the Rio Grande Valley. Because 94% of Brownsville residents are Hispanic and most searches happen in Spanish, contractors who optimize for Spanish-language searches face almost no competition and capture a market their rivals can't see.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack in English and Spanish',
      blurb: "Get into the top three businesses Google pins to the map when the Valley searches \"near me\" — in both languages. With 94% of Brownsville being Hispanic and most contractors English-only, the Spanish map-pack is almost uncontested.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including a Spanish-language market most competitors ignore — and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Bilingual sites that convert',
      blurb: "Fast, mobile-first, bilingual websites engineered to turn visitors into booked jobs across the Rio Grande Valley — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated English-only site for speed, bilingual reach, and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Brownsville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting bilingual website with SEO and local SEO so they rank in English and Spanish, convert, and own their leads in the Rio Grande Valley." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand 100-degree AC emergencies, post-hurricane roofing surges, and Rio Grande delta foundation challenges." },
    { q: 'Why does the Brownsville market need a different approach?', a: "Because it's 94 percent Hispanic and most search activity in that community happens in Spanish — which most agencies and contractors don't optimize for. On top of that, five months of extreme heat and an active hurricane season drive enormous sustained demand for HVAC and roofing. The contractors who rank in Spanish and for seasonal terms face almost no competition." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Brownsville and Valley areas do you serve?', a: "All the key communities — Brownsville, Harlingen, San Benito, Los Fresnos, Boca Chica, Palm Valley, Primera, Weslaco, and more — with genuine local pages rather than one generic Brownsville page." },
    { q: 'Where should I start?', a: "Start with a free Brownsville audit. We'll look at your website, your rankings in English and Spanish, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

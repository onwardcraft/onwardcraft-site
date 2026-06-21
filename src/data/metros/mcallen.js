// MCALLEN — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across McAllen's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MCALLEN — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in the Rio Grande Valley is a different game',
  body:
    "The McAllen-Edinburg-Mission metro is home to roughly 1.3 million people and is one of the fastest-growing large metros in the US, fueled by first-generation homeowners, a booming cross-border trade economy, and growth spillover from the SpaceX Boca Chica corridor. But what makes this market unlike any other in the country is its demographics: roughly 92% of residents are Hispanic, and a huge share of homeowners search for contractors in Spanish. Nearly every local competitor ignores Spanish-language search entirely — which means ranking for \"techado cerca de mí\" or \"plomero en Edinburg\" is one of the most underexploited advantages in any US metro. Layer on the Rio Grande Valley's extreme heat — McAllen routinely hits 105-110°F from May through September — and HVAC failure here isn't uncomfortable, it's dangerous. Demand for cooling is enormous and sustained for five-plus months every year. The businesses already ranking when that heat sets in take the work.",
  pullQuote: 'Nearly every competitor ignores Spanish-language search. Ranking for it is the single biggest advantage in the Rio Grande Valley.',
  donut: {
    title: 'McAllen metro by ethnicity',
    value: 92,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 92, kind: 'teal' },
      { label: 'Other', pct: 8, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (May–Sep), hurricane season (Jun–Nov)',
  seasonalDemand: [
    { m: 'J', v: 30 }, { m: 'F', v: 32 }, { m: 'M', v: 40 }, { m: 'A', v: 56 },
    { m: 'M', v: 80, peak: true }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 100, peak: true }, { m: 'S', v: 95, peak: true }, { m: 'O', v: 82, peak: true },
    { m: 'N', v: 52 }, { m: 'D', v: 32 },
  ],
  stats: [
    { value: '1.3M+', label: 'people across the McAllen-Edinburg-Mission metro' },
    { value: '~92%', label: 'of residents are Hispanic — nearly the entire market searches in Spanish', accent: true },
    { value: '105-110°F', label: 'summer highs from May through September — HVAC failure is dangerous' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'McAllen', 'Edinburg', 'Mission', 'Pharr', 'San Juan', 'Alamo', 'Weslaco',
    'Mercedes', 'Donna', 'Harlingen', 'Rio Grande City', 'Palmview', 'La Joya',
    'Sullivan City', 'Hidalgo',
  ],
};

const AREAS = [
  'McAllen', 'Edinburg', 'Mission', 'Pharr', 'San Juan', 'Alamo', 'Weslaco',
  'Mercedes', 'Donna', 'Harlingen', 'Rio Grande City', 'Palmview', 'La Joya',
  'Hidalgo', 'Penitas',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true in the Rio Grande Valley, where almost nobody is doing Spanish-language SEO — which means if you rank for the searches your neighbors actually type, you're essentially alone at the top. So that's what we build: rankings you own, in the language your customers search, for the jobs you actually want. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We speak the RGV market — in both languages',
    body: "With 92% of the metro being Hispanic, Spanish-language search is not optional, it's the market. We build content and optimization in both English and Spanish so you rank for the searches your neighbors actually type — something almost no competitor in the Valley is doing.",
  },
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand extreme-heat demand, hurricane season, and emergency calls, so everything we build is shaped around how Rio Grande Valley homeowners really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially not in a market where you can own bilingual search with the right SEO.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a McAllen contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three — especially in Spanish — is the difference between a trickle of calls and a booked-out calendar. When the summer heat sets in and HVAC calls surge, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'McAllen', state: 'Texas', stateAbbr: 'TX', metro: 'McAllen-Edinburg-Mission (Rio Grande Valley)',
  heroProof: ['Built for the trades', 'Bilingual SEO', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const mcallenLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'McAllen Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in McAllen and three businesses show up on the map. We get you into those three — in English and Spanish — so the call lands with you. Free audit.',
    eyebrow: 'Local SEO · McAllen-Edinburg-Mission',
    h1: 'When the Rio Grande Valley searches for what you do, be the first name they find',
    h2Exact: 'McAllen Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three in both English and Spanish — so the call lands with you when 105-degree summer heat or the next tropical system drives the whole Valley to their phone.",
    primaryCta: 'Get my free McAllen audit',
    intro:
      "McAllen local SEO comes down to one thing: when a homeowner in Edinburg or Mission searches your service, are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. In a market where 92% of residents are Hispanic and nearly every competitor skips Spanish-language optimization, ranking bilingually is the single most powerful move a local contractor can make. Here's how you do it.",
    aioQuestion: 'How do McAllen businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting five things right: a Google Business Profile optimized for the exact services and neighborhoods you want — in both English and Spanish; consistent name, address, and phone listings across the web; a steady stream of real reviews; local content tied to real RGV neighborhoods; and bilingual content that captures the Spanish searches your competitors are ignoring. McAllen's extreme summer heat and hurricane exposure mean the winners are already ranking when demand spikes in May — not scrambling to catch up after.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a McAllen business can make." },
      { title: 'Nobody is ranking for Spanish searches — which means you can', body: "With 92% of the metro being Hispanic, a huge share of homeowners search in Spanish: \"techado cerca de mí,\" \"plomero en Edinburg,\" \"HVAC McAllen.\" Almost no local contractors rank for these terms. If you do, you're essentially alone at the top of searches your competitors don't even know exist." },
      { title: "You're not ready when the heat — or the storm — hits", body: "When McAllen hits 108°F in July, HVAC calls don't climb, they flood. When a tropical system moves up the Gulf Coast, roofing and restoration searches spike overnight. The businesses already ranking in the Map Pack take those calls. Ranking now is how you catch that surge instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you in the Valley',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts — in both English and Spanish — so Google knows exactly which RGV searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews in both languages. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Edinburg, Mission, Pharr, Weslaco, San Juan, and the rest — in English and Spanish — so you rank for the neighborhood someone's actually searching, not just \"McAllen.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from RGV sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language search optimization', desc: "Bilingual content, Spanish GBP posts, and Spanish-language citations that put you at the top of searches almost no competitor is even attempting.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today — in English and Spanish — across your service areas, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, including Spanish-language optimization. These move the fastest — you usually see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the bilingual review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Valley — in both languages — plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several RGV communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'Spanish-language SEO basics'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Valley — in both languages.', features: ['Everything in Local Growth', 'Full bilingual SEO', 'Local link building', 'Heat-season and hurricane demand targeting', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in McAllen?', a: "Most McAllen engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting and whether you want full bilingual coverage. Our tiers are right above this — no hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive McAllen keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'Why does Spanish-language SEO matter so much in McAllen?', a: "About 92% of the metro is Hispanic, and a large share of homeowners search for contractors in Spanish — \"techado cerca de mí,\" \"plomero en Edinburg,\" and similar terms. Almost no competitors rank for these searches, which means if you do, you're essentially alone at the top of high-intent queries your competition doesn't even see." },
      { q: 'How does local SEO help me during the summer heat season?', a: "When McAllen hits 105-110°F in July and August, HVAC demand floods. The contractors already in the Map Pack take those calls — there's no time to build rankings after the heat arrives. We get you ranking and reviewed before the season so you capture that demand instead of watching it go to whoever Google already trusts." },
      { q: 'Which areas do you cover?', a: "All of the Rio Grande Valley — McAllen, Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, Donna, Mercedes, Harlingen, and more. We build genuine neighborhood pages instead of one generic McAllen page, because that's what actually ranks for \"[service] [city]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, extreme-heat demand, and hurricane-season surges, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a bilingual Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today in English and Spanish across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'McAllen SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'McAllen SEO that ranks contractors on Google in English and Spanish — and brings in leads you own. Revenue-tied reporting, no lock-in contracts. Free RGV SEO audit.',
    eyebrow: 'SEO Services · McAllen-Edinburg-Mission',
    h1: 'Get your McAllen business to the top of Google — in English and Spanish',
    h2Exact: 'McAllen SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Rio Grande Valley customers search and the leads keep coming. We build that ranking in both languages — because 92% of this market searches in Spanish, and your competitors are ignoring it.",
    primaryCta: 'Get my free McAllen SEO audit',
    intro:
      "McAllen SEO comes down to one question: when someone searches what you do — in English or Spanish — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing, bilingual, heat-driven market, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do McAllen businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search in both English and Spanish, publishing genuinely useful local content for RGV neighborhoods, and earning links from trusted local sources. In the Rio Grande Valley, bilingual content is one of the most underexploited SEO advantages in any US metro — almost no competitors rank for Spanish searches, which means the field is wide open for contractors who do.",
    problemHeading: "Three reasons your McAllen site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're invisible in Spanish search", body: "In a metro that's 92% Hispanic, a massive share of homeowners search for contractors in Spanish. Almost no local contractors rank for these terms. That's not a problem — it's an opening. The right bilingual SEO puts you at the top of high-intent searches your competitors don't even know exist." },
      { title: "You're not ranking for the demand that matters", body: "RGV demand swings hard with summer heat and the hurricane season, and the contractors who rank before that demand arrives catch the surge. If your SEO ignores heat-season and storm-driven searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in the Valley',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your RGV customers search — in English and Spanish — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real RGV and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization — bilingual — so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Bilingual & Spanish-language SEO', desc: "Full Spanish-language content, keywords, and citations so you rank for the searches that 92% of this market types — and that almost no competitor targets.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings in English and Spanish, your traffic, and your competitors, then build a roadmap around the keywords most likely to drive real RGV leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new bilingual local content, including the heat-season and storm-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted RGV and industry sources to push competitive keywords onto page one in both languages." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent McAllen SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services, neighborhoods, and languages.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'Spanish-language SEO basics'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own the RGV in English and Spanish.', features: ['Everything in SEO Growth', 'Full bilingual content + links', 'Heat-season & hurricane SEO', 'Multi-location coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in McAllen?', a: "Most McAllen SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are, how much bilingual content you need, and how many locations you're targeting. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in McAllen?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms — including many Spanish-language searches — and slower on the most competitive English keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Why does bilingual SEO matter so much in the Rio Grande Valley?', a: "The McAllen metro is roughly 92% Hispanic, and a large share of homeowners search for contractors in Spanish. Almost nobody ranks for those searches right now, which means you can reach a huge slice of the market with almost no competition. That's one of the rarest SEO opportunities in any US city." },
      { q: 'Should my McAllen SEO target summer heat and hurricane season?', a: "Yes. When McAllen hits 108°F in July, HVAC searches flood, and ranking takes months to build — so you have to be in place before the heat arrives. Same for hurricane season: a tropical system moving up the Gulf can spike roofing and restoration searches overnight. We optimize for those terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add full bilingual SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around McAllen do you cover?', a: "All of the Rio Grande Valley — Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, Donna, Mercedes, Harlingen, and more — with genuine bilingual local pages rather than one generic McAllen page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building bilingual rankings and a Google presence that send leads directly to you. The more you own your search visibility in English and Spanish, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in both languages, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'McAllen Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'McAllen web design that turns visitors into booked jobs — fast, mobile-first, bilingual sites built for contractors and Rio Grande Valley demand. Free quote.',
    eyebrow: 'Web Design · McAllen-Edinburg-Mission',
    h1: 'McAllen web design that turns visitors into booked jobs',
    h2Exact: 'McAllen Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build McAllen contractors fast, mobile-first, bilingual sites engineered to turn visitors into booked work — and to hold up when 108-degree summer heat drives your whole neighborhood to their phone at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Most McAllen contractor websites lose leads quietly: slow on a phone, buried call button, no Spanish-language content for the 92% of the metro that speaks it. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, convert Spanish- and English-speaking visitors alike, and don't fall over when summer heat sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in McAllen?',
    aioAnswer:
      "A good McAllen contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, serves content in both English and Spanish to reach the full market, proves trust with reviews and real project photos, and is built to handle traffic spikes during summer heat season. Because this market is predominantly Hispanic, bilingual content isn't a nice-to-have — it's how you reach the people actually searching.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It only speaks to half the market", body: "In a metro that's 92% Hispanic, a website with no Spanish-language content is invisible to a huge share of your potential customers. We build bilingual sites that work for everyone in the Valley searching for your services." },
      { title: "It can't handle a heat-season surge", body: "When the Valley hits 108°F and HVAC calls flood, contractor sites take a surge of traffic, and the slow ones buried the call button right when it mattered most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft McAllen website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your RGV traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Bilingual content', desc: "Full English and Spanish content so you reach all 92% of the Hispanic market that searches for contractors in their language." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to RGV homeowners — in both languages — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and bilingual neighborhood-ready pages." },
      { name: 'Heat-surge ready', desc: "Built to stay fast and keep the call button front and center when summer heat spikes demand — the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want — in both languages." },
      { name: 'Design', desc: "We design a custom, mobile-first, bilingual layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write English and Spanish copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the bilingual SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent McAllen web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger, bilingual site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Bilingual English/Spanish content', 'Service + neighborhood pages', 'Heat-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom bilingual design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in McAllen?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, bilingual requirements, and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom bilingual build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site be in Spanish as well as English?', a: "Yes, if you want it. In a metro that's 92% Hispanic, bilingual content isn't optional — it's how you reach the full market. Our Growth and Custom tiers include full English and Spanish content; we can add it to the Starter tier too." },
      { q: 'Will my site handle a summer heat traffic spike?', a: "Yes, and in McAllen that matters. When the Valley hits 108°F in July and HVAC calls flood, contractor sites take a surge of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a bilingual local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages in both languages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your RGV traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting bilingual RGV site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'mcallen', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'McAllen Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your McAllen website without losing rankings. Faster, bilingual, mobile-first rebuilds that convert more visitors into booked jobs. Free RGV audit.',
    eyebrow: 'Website Redesign · McAllen-Edinburg-Mission',
    h1: 'Redesign your McAllen website without losing your rankings',
    h2Exact: 'McAllen Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, English-only in a 92%-Hispanic market, easy to ignore. We redesign McAllen contractor sites to convert more, load faster, and serve the full bilingual market, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign McAllen contractor sites for speed, conversions, and bilingual reach — then migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. For McAllen contractors, a redesign is also the right moment to add Spanish-language content — because you can expand your reach dramatically without risking any of your existing English rankings.",
    problemHeading: "Signs your McAllen site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's English-only in a bilingual market", body: "If your site has no Spanish content, it's invisible to a huge share of the Valley. A redesign is the right moment to go bilingual and reach the 92% of this metro your current site is missing." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that slows under a summer heat surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft McAllen redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — including Spanish-language gaps — so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Bilingual rebuild', desc: "Full English and Spanish content added during the redesign, so you go from missing 92% of the market to serving all of it." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your RGV traffic lives." },
      { name: 'Heat-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when summer heat spikes demand, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful bilingual rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — including Spanish-search gaps — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, bilingual, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast with full bilingual content, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting in both languages, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent McAllen redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full bilingual redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Bilingual English/Spanish', 'Speed overhaul', 'Heat-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete bilingual rebuild for multi-service or multi-location sites.', features: ['Full custom bilingual rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in McAllen?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, bilingual requirements, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'Can the redesign add Spanish-language content?', a: "Yes, and we recommend it. In a metro that's 92% Hispanic, adding Spanish content during a redesign is one of the highest-return moves you can make. We can go fully bilingual without touching your existing English rankings." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger bilingual rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, has no Spanish content, is hard to update, or isn't bringing in leads, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle summer heat traffic?', a: "Yes, and in McAllen that's a real consideration. When the Valley hits 108°F in July and HVAC calls flood, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings — including Spanish-search gaps — what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const mcallenCity = {
  citySlug: 'mcallen', city: 'McAllen', state: 'Texas', stateAbbr: 'TX', metro: 'McAllen-Edinburg-Mission (Rio Grande Valley)',

  titleTag: 'McAllen Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for McAllen contractors — in English and Spanish. Get found, get booked, and own your leads in the Rio Grande Valley. Free audit.',

  eyebrow: 'McAllen · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets McAllen contractors found and booked',
  h2Exact: 'McAllen Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Rio Grande Valley's bilingual, fast-growing, heat-driven market. One team to get you ranking in English and Spanish, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Bilingual SEO', 'No lock-in contracts'],
  primaryCta: 'Get my free McAllen audit',

  intro:
    "If you run a contracting business in McAllen, you're operating in one of the most distinctive markets in the US. The metro is growing fast, 92% Hispanic, and sits at the intersection of one of the country's most active cross-border trade corridors. Nearly every competitor ignores Spanish-language search, which means the opportunity to own the Map Pack bilingually is wide open. Layer on extreme summer heat — 105-110°F from May through September — that makes HVAC demand enormous and sustained, plus hurricane exposure and rapid population growth from first-generation homeowners. Winning here takes three things working together: a bilingual site that converts, SEO that ranks you for what the Valley actually searches, and local SEO that puts you in the Map Pack before the heat sets in.",
  aioQuestion: 'How do McAllen contractors get more leads online?',
  aioAnswer:
    "McAllen contractors get more leads by combining a fast, bilingual, mobile-first website with SEO that ranks them for high-intent searches in both English and Spanish, and local SEO that wins the Google Map Pack across the Rio Grande Valley. Because this market is 92% Hispanic and demand spikes hard during the extreme summer heat and hurricane season, the contractors who are visible bilingually and already ranking before the season starts win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack — in English and Spanish',
      blurb: "Get into the top three businesses Google pins to the map when the RGV searches \"near me\" — in both languages. With 92% of this metro searching in Spanish, bilingual local SEO is the single most underexploited advantage in the Valley.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads — bilingually',
      blurb: "Rank for the money keywords your customers actually search in English and Spanish, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Bilingual sites that convert',
      blurb: "Fast, mobile-first, English-and-Spanish websites engineered to turn visitors into booked jobs — and to stay fast when extreme summer heat floods your phone with calls.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated, English-only site for speed, bilingual reach, and conversions — and migrate carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in McAllen?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO — all with bilingual English/Spanish capability. Most clients combine a high-converting bilingual website with SEO and local SEO so they rank in both languages, convert the full market, and own their leads." },
    { q: 'Why does Spanish-language SEO matter so much here?', a: "The McAllen metro is roughly 92% Hispanic, and a large share of homeowners search for contractors in Spanish. Almost no competitors rank for those searches — which means going bilingual gives you access to a huge, high-intent slice of the market with almost no competition." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, extreme-heat demand, and hurricane-season surges." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which McAllen areas do you serve?', a: "All of the Rio Grande Valley — McAllen, Edinburg, Mission, Pharr, Weslaco, San Juan, Alamo, Donna, Mercedes, Harlingen, and more. We build genuine bilingual neighborhood pages rather than one generic McAllen page." },
    { q: 'Where should I start?', a: "Start with a free McAllen audit. We'll look at your website, your rankings in English and Spanish, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

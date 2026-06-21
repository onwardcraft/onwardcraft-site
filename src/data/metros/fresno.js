// FRESNO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fresno's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FRESNO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Fresno is a different kind of fight',
  body:
    "Fresno is the fifth-largest city in California and the economic and population hub of the San Joaquin Valley, with roughly 550,000 residents in the city and over a million across the metro. But the market here works nothing like Sacramento or San Jose. Extreme heat is the single biggest driver of contractor demand: temperatures regularly crack 110°F in July and August, and when an AC unit fails in that heat it is not a nuisance — it is a health emergency. The contractor ranking in the Map Pack when someone hits their phone in a 110-degree house gets the call. Nearly half of Fresno's population is Hispanic, and Spanish-language search is genuinely significant here — almost half the market is searching in Spanish, and most contractors are invisible to it. Fresno also sits in the San Joaquin Valley airway, where wildfire smoke accumulates Aug–Oct and spikes HVAC filtration demand to levels that rival the worst air-quality days anywhere in the country. And unlike coastal California, Fresno is affordable: home renovations are accessible to a much wider slice of homeowners here, which means high transaction volume. The contractors already ranking capture that volume.",
  pullQuote: 'When an AC unit fails in 110-degree Fresno heat, the contractor who owns the Map Pack gets the call — and nobody else does.',
  donut: {
    title: 'How Fresno searches',
    value: 49,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 49, kind: 'teal' },
      { label: 'Other', pct: 51, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC demand peaks May–Sep (extreme heat) and wildfire smoke Aug–Oct spikes filtration work',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 40 }, { m: 'M', v: 52 },
    { m: 'A', v: 62 }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 90, peak: true },
    { m: 'O', v: 68 }, { m: 'N', v: 46 }, { m: 'D', v: 36 },
  ],
  stats: [
    { value: '1M+', label: 'people across the Fresno metro' },
    { value: '~49%', label: 'of Fresno residents identify as Hispanic — Spanish search is half the market', accent: true },
    { value: '110°F+', label: 'summer temperatures that make AC failure a genuine health emergency' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks when someone needs a contractor fast' },
  ],
  neighborhoods: [
    'Tower District', 'Fig Garden', 'Clovis', 'Sanger', 'Selma',
    'Madera', 'Reedley', 'Fowler', 'Kingsburg', 'Woodward Park',
    'McLane', 'Fresno High', 'Bullard', 'West Fresno', 'Riverpark',
  ],
};

const AREAS = [
  'Fresno', 'Clovis', 'Tower District', 'Fig Garden', 'Madera',
  'Sanger', 'Selma', 'Reedley', 'Fowler', 'Kingsburg',
  'Woodward Park', 'Bullard', 'West Fresno', 'McLane', 'Riverpark',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I watched good contractors keep writing checks to lead brokers for leads they shared with three competitors — then calling it marketing. Fresno is a different kind of market: the heat demand is real, the Spanish-language search is enormous, and home renovations are affordable here in ways they aren't on the coast. That means the volume is there — the question is who captures it. We get you ranking for the searches your customers actually run, in the neighborhoods you actually serve, so those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the Valley heat cycle',
    body: "HVAC demand in Fresno isn't seasonal in a casual way — it's urgent. When temperatures hit 110°F and an AC goes down, people are searching in a panic. We rank you before the heat wave, so the emergency call goes to you.",
  },
  {
    title: 'We reach the half of Fresno most contractors ignore',
    body: "Nearly half of Fresno residents are Hispanic, and many search in Spanish. Most of your competitors are invisible to that demand. We optimize for the searches your customers actually run, in the language they use.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners two of your competitors also bought.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. The accountability stays where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Fresno contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and during peak heat season, that gap can be the entire summer. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fresno', state: 'California', stateAbbr: 'CA', metro: 'Fresno',
  heroProof: ['Built for the trades', 'Spanish-language search included', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fresnoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fresno', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fresno Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Fresno and three businesses show up on the map. We get you into those three — in English and Spanish — so the call lands with you.',
    eyebrow: 'Local SEO · Fresno, CA',
    h1: 'When Fresno searches for what you do, be the first name they find',
    h2Exact: 'Fresno Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" In 110-degree Fresno heat, when an AC goes down, everyone below those three basically doesn't exist. We get you into that top three for the neighborhoods you serve — in English and Spanish — so the emergency call lands with you.",
    primaryCta: 'Get my free Fresno audit',
    intro:
      "Fresno local SEO comes down to one thing: when a homeowner in Clovis or the Tower District searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. And nearly half of Fresno residents are Hispanic, meaning a huge share of that search happens in Spanish — demand your competitors aren't even showing up for. Becoming one of those three in the neighborhoods you serve, in both languages, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Fresno businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Fresno neighborhoods like Clovis, Fig Garden, and the Tower District. Fresno's market is heavily Hispanic — nearly half of residents — so the contractors who optimize for Spanish-language searches are reaching demand most competitors never touch. Seasonal targeting for extreme summer heat (May–Sep) and wildfire smoke filtration (Aug–Oct) also accelerates ranking during the periods that matter most.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — and in a market where AC failure in July is a genuine health emergency, whoever owns that top three gets the panic call. If you're not one of them, it almost doesn't matter how good your work is. Getting into that top three for Fresno and Clovis is usually the single highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Fresno homeowner to multiple contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the same lead. Over time you stop renting and start owning the pipeline — and in an affordable market like Fresno, the volume that builds is real." },
      { title: "You're invisible to nearly half the market", body: "Nearly half of Fresno residents are Hispanic, and many search in Spanish. If your business profile, website, and local content aren't set up for Spanish-language searches, you're invisible to a huge slice of local demand. Most of your competitors are making the same mistake, which means the contractor who fixes this first gets to own a market the rest of the field is ignoring." },
    ],
    servicesHeading: 'What it actually takes to rank you in Fresno',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Fresno searches you should win — including summer HVAC emergencies." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone when the AC is out." },
      { name: 'Neighborhood pages', desc: "Real pages for Clovis, Fig Garden, Sanger, Selma, Madera, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Fresno.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Fresno and San Joaquin Valley sources Google trusts — local press, associations, ag-industry partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "Nearly half of Fresno residents search in Spanish. We help you show up for that demand — in Google Business Profile, in content, and in local listings — so you're reaching the market most of your competitors never see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Fresno and surrounding communities, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before peak heat season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Fresno, Clovis, Madera, Sanger, and the surrounding communities, plus Spanish-language content and the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Fresno, Clovis, and surrounding communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Valley.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fresno?', a: "Most Fresno engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Fresno keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Fresno local SEO different from other cities?', a: "Two things. First, demand here is driven hard by extreme summer heat — HVAC and AC searches spike to emergency levels from May through September, and the contractor who's already ranking when a unit fails in 110-degree heat gets the call. Second, nearly half the market is Hispanic and many search in Spanish, which is a massive pool of demand most contractors never show up for." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Fresno that's a real competitive edge. Nearly half of residents are Hispanic, and many search in Spanish. We optimize your profile and content so you show up for those searches across Fresno and surrounding communities where most contractors are invisible." },
      { q: 'Which areas do you cover?', a: "Fresno, Clovis, the Tower District, Fig Garden, Madera, Sanger, Selma, Reedley, Fowler, Kingsburg, and surrounding San Joaquin Valley communities. We build genuine neighborhood pages instead of one generic Fresno page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. HVAC, roofing, plumbing, solar, electrical, restoration, and general contractors. We understand summer AC emergencies, wildfire smoke filtration demand, and the dual market of urban homeowners and rural farm properties that makes Fresno unique." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Fresno and your service area, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fresno', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fresno SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Fresno SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for the Valley market.',
    eyebrow: 'SEO Services · Fresno, CA',
    h1: 'Get your Fresno business to the top of Google and keep it there',
    h2Exact: 'Fresno SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Fresno customers search and the leads keep coming — through heat season, wildfire smoke season, and everything in between. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Fresno SEO audit',
    intro:
      "Fresno SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in Fresno and the San Joaquin Valley — including the extreme-heat HVAC searches that spike May through September and the Spanish-language searches nearly half the market is running — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Fresno businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Fresno neighborhoods and surrounding communities, and earning links from trusted Valley sources. In this market, ranking for Spanish-language searches captures demand most competitors never touch. Ranking for seasonal HVAC and AC terms ahead of the May–September heat surge is also one of the highest-return moves a Fresno contractor can make.",
    problemHeading: "Three reasons your Fresno site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In Fresno, if you're not in the top handful of results for what you sell, your site is invisible — no matter how good the work is. When an AC fails in 110-degree heat, whoever's on page one gets the call." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In an affordable market like Fresno with high transaction volume, that difference compounds fast." },
      { title: "You're missing the seasonal demand that defines Fresno summers", body: "Fresno HVAC demand isn't seasonal in a casual way — it's extreme. Temperatures hit 110°F and above, and a failed AC is a health emergency. Wildfire smoke Aug–Oct drives a second spike in filtration work. Ranking takes months to build, so you have to be in place before the season hits, not chasing it after. If your SEO ignores these patterns, you're leaving your busiest and most lucrative weeks to whoever is already ranking." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Fresno',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Fresno customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including Spanish-language content for nearly half the market." },
      { name: 'Link building', desc: "Authority from real Fresno, Clovis, and San Joaquin Valley sources Google trusts. In a growing market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Fresno, Clovis, and surrounding communities alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the summer heat HVAC searches and wildfire smoke filtration terms that drive Fresno's highest-demand periods, so you're visible before the spike, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fresno leads — including Spanish-language and seasonal terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the heat-season HVAC terms, wildfire smoke filtration content, and Spanish-language pages that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Fresno, Clovis, and Valley sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fresno SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Valley communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Fresno search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Spanish-language optimization', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fresno?', a: "Most Fresno SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fresno?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. The key is getting ranked before heat season — May–September is when HVAC search volume is at its highest and the urgency is real." },
      { q: 'Is SEO better than Google Ads in Fresno?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Fresno's affordable market, most contractors do best running SEO as the long-term engine and ads for short-term coverage during peak heat season." },
      { q: 'Should my Fresno SEO target Spanish-language searches?', a: "Absolutely. Nearly half of Fresno residents are Hispanic and many search in Spanish. Most contractors have zero presence in those searches, which means there's a huge pool of demand you can capture without competing against the contractors who are already ranking for the English-language terms." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO for summer heat and wildfire smoke, Spanish-language optimization, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Fresno do you cover?', a: "Fresno, Clovis, Madera, Sanger, Selma, Reedley, Fowler, Kingsburg, and surrounding San Joaquin Valley communities — with genuine local pages for each area rather than one generic Fresno page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fresno', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fresno Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Fresno web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a high-heat, high-volume Valley market.',
    eyebrow: 'Web Design · Fresno, CA',
    h1: 'Fresno web design that turns visitors into booked jobs',
    h2Exact: 'Fresno Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Fresno contractors fast, mobile-first sites engineered to turn visitors into booked work — in English and Spanish — designed for a market where heat emergencies happen in real time.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Fresno contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, invisible to Spanish-language searches. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Tower-District-to-Clovis visitors into booked jobs — in both English and Spanish, built to win in a market where a failing AC in July is a real emergency.",
    aioQuestion: 'What makes a good contractor website in Fresno?',
    aioAnswer:
      "A good Fresno contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and surrounding communities you serve. Because summer heat makes AC failures urgent and nearly half of Fresno residents search in Spanish, a site that works in both languages and converts fast under pressure is the standard to hit.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next search result. When an AC fails in 110-degree Fresno heat, a homeowner is on their phone looking for someone fast. If your site doesn't make it immediately obvious how to call you and why you're the right choice, they're gone." },
      { title: "It's too slow on a phone", body: "Most of your Fresno visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially in a heat emergency when they need help now. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It's invisible to Spanish-speaking customers", body: "With nearly half of Fresno's population being Hispanic, a website that doesn't speak to that community is leaving a massive share of local demand on the table. We design and build sites that reach the whole Fresno market, not just the English-speaking half." },
    ],
    servicesHeading: "What's in an OnwardCraft Fresno website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Fresno service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where your Fresno traffic is — especially when someone's AC goes out at noon in August." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Fresno homeowners under pressure and book the job, not filler text that could belong to any contractor anywhere." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Fresno, Clovis, and Valley communities." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Spanish-language and neighborhood pages', desc: "Pages built for the communities you serve and optimized for Spanish-language search, so you reach nearly half the Fresno market that most contractor sites completely miss.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Fresno service area, your best jobs, and your competitors, then map the site around booking more of the work you want — including Spanish-language customers." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and Spanish-language reach built in." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Fresno web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Spanish-language reach'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fresno?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site reach Spanish-speaking customers?', a: "Yes. With nearly half of Fresno's population being Hispanic, we build in Spanish-language reach from the start — neighborhood pages, content, and profile optimization that make you visible to the searches most of your competitors never see." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for Fresno, Clovis, and Valley communities. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Fresno traffic comes from — especially during heat emergencies when someone is searching on their phone for immediate help." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Fresno contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fresno', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fresno Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Fresno website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in the Valley market.',
    eyebrow: 'Website Redesign · Fresno, CA',
    h1: 'Redesign your Fresno website without losing your rankings',
    h2Exact: 'Fresno Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, invisible to Spanish search, easy to ignore when the heat hits. We redesign Fresno contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Fresno contractor sites for speed and conversions, build in Spanish-language reach, and migrate with the redirects and SEO care that protect the traffic you already have — so the new site performs better through heat season and beyond.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one. In Fresno, making sure Spanish-language content and neighborhood pages survive the migration intact is also critical.",
    problemHeading: "Signs your Fresno site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In a market where affordable California prices mean high job volume, that lost trust is lost revenue at scale." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your visitors before they ever see your offer — and during a heat emergency in July, you're losing someone who needed a contractor right now. A redesign built mobile-first wins them back." },
      { title: "It's not reaching half your potential customers", body: "If your site has no Spanish-language presence, you're invisible to nearly half of Fresno's population. And if it doesn't name the specific neighborhoods and Valley communities you serve, you're losing the trust of homeowners who want to know you're actually local. A redesign fixes both." },
    ],
    servicesHeading: "What's in an OnwardCraft Fresno redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned through heat season and year-round." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — critical when someone searches in an emergency and won't wait for a slow site." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Fresno traffic lives — especially during heat emergencies." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the trust of homeowners making a significant decision." },
      { name: 'Spanish-language and neighborhood rebuild', desc: "Rebuilt with Spanish-language reach and genuine pages for Fresno, Clovis, Madera, and Valley communities — so the new site serves the full market instead of half of it.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including the seasonal HVAC content that's most valuable during Fresno summers." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, add Spanish-language reach, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Fresno redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Spanish-language reach'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fresno?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — including the HVAC and heat-season content that's most valuable in Fresno." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't reaching Spanish-speaking customers, or isn't bringing in enough leads given the volume of the Fresno market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including any Spanish-language content you already have." },
      { q: 'Will the redesign help me reach Spanish-speaking customers?', a: "Yes, and this is one of the highest-impact additions we make for Fresno contractors. With nearly half the population being Hispanic, building Spanish-language reach into the redesign opens up a market most of your competitors are completely missing." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — critical in a market where many searches happen in urgent situations during extreme heat." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const fresnoCity = {
  citySlug: 'fresno', city: 'Fresno', state: 'California', stateAbbr: 'CA', metro: 'Fresno',

  titleTag: 'Fresno Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Fresno contractors. Get found in English and Spanish, get booked, and own your leads instead of renting them — built.',

  eyebrow: 'Fresno · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Fresno contractors found and booked',
  h2Exact: 'Fresno Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Fresno's extreme heat market, bilingual homeowners, and high-volume agricultural economy. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Spanish-language search included', 'No lock-in contracts'],
  primaryCta: 'Get my free Fresno audit',

  intro:
    "If you run a contracting business in Fresno, you're operating in one of California's highest-volume, most distinctive markets. Summer heat that regularly hits 110°F makes HVAC failure a genuine emergency and a single failed AC call can mean the difference between a homeowner's health and safety. Nearly half of Fresno residents are Hispanic, and Spanish-language search is half the market — demand most contractors aren't even showing up for. And Fresno is affordable California: home renovations are accessible to a much wider slice of homeowners here than on the coast, which means the transaction volume is real. Winning in this market takes three things working together: a site that converts in English and Spanish, SEO that ranks you for heat-season emergencies and year-round searches, and local SEO that puts you on the map for Fresno, Clovis, and the surrounding Valley communities. Here's how we help Fresno contractors do exactly that.",
  aioQuestion: 'How do Fresno contractors get more leads online?',
  aioAnswer:
    "Fresno contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across Fresno, Clovis, and surrounding communities. Because nearly half of Fresno residents are Hispanic and many search in Spanish, contractors who optimize for Spanish-language searches are capturing demand their competitors never touch. Ranking for summer HVAC and AC terms before the May–September heat season — when search urgency peaks — is also one of the highest-return moves a Fresno contractor can make.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Fresno searches \"near me\" — in English and Spanish. When an AC fails in 110-degree heat, whoever owns that top three gets the call.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including heat-season HVAC terms and Spanish-language searches — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that turn Fresno visitors into booked jobs — in English and Spanish — built for a market where summer emergencies happen in real time and affordable California prices mean high volume.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and Spanish-language reach, then migrate it carefully so you keep every ranking you've already earned going into heat season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fresno?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank in English and Spanish, convert heat-season emergency searches, and own their leads in a high-volume Valley market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — HVAC, roofing, plumbing, solar, electrical, restoration, and general contractors — so we understand summer AC emergencies, wildfire smoke filtration demand, and the unique dual market of urban homeowners and rural farm properties in the Fresno area." },
    { q: 'Why does the Fresno market need a different approach?', a: "Fresno has specific dynamics that generic marketing misses. Extreme heat makes HVAC demand urgent in ways it isn't in most cities — a failed AC in July is a health emergency. Nearly half the market is Hispanic and searches in Spanish. And wildfire smoke Aug–Oct creates a second demand spike for filtration work. Winning here means optimizing for these realities, not just swapping a city name into a template." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Fresno areas do you serve?', a: "Fresno, Clovis, the Tower District, Fig Garden, Madera, Sanger, Selma, Reedley, Fowler, Kingsburg, and surrounding San Joaquin Valley communities — with genuine local pages for each area." },
    { q: 'Where should I start?', a: "Start with a free Fresno audit. We'll look at your website, your rankings, your Map Pack presence, and your Spanish-language visibility, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

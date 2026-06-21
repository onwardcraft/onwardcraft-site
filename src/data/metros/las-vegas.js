// LAS VEGAS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Las Vegas's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LAS VEGAS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Las Vegas is a different kind of battle',
  body:
    "Las Vegas is one of the fastest-growing metros in the United States, adding tens of thousands of new residents every year in master-planned communities across Summerlin, Henderson, North Las Vegas, and the outer suburbs. All those new homeowners need contractors the moment they move in — and they're searching on their phones. The heat is the other defining force: when July temperatures hit 110°F and an AC system fails, that repair call becomes a life-safety emergency, not a \"get a few quotes\" decision. The contractor already in the Map Pack at 6 a.m. on a Tuesday in August books that job without competing for it. Desert climate also brings desert-specific trades that don't exist in most markets — pool repair, desert landscaping conversion, flat and low-slope roofing, stucco work — and a 24/7 economy where residents and businesses alike expect flexible, fast scheduling. Add a roughly 30% Hispanic population, particularly concentrated in North Las Vegas, and the contractor who shows up in Spanish-language searches has access to a slice of the market most of the competition never touches.",
  pullQuote: 'In Las Vegas, the contractor who owns the Map Pack at 6 a.m. on a 110-degree day books the job before their competitors even know the phone is ringing.',
  donut: {
    title: 'How Las Vegas searches',
    value: 30,
    centerLabel: 'Spanish-speaking households',
    legend: [
      { label: 'Hispanic / Spanish-speaking', pct: 30, kind: 'teal' },
      { label: 'Other residents', pct: 70, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC emergency season Jun–Sep (extreme heat); occasional freeze events Jan–Feb',
  seasonalDemand: [
    { m: 'J', v: 60, peak: true }, { m: 'F', v: 58, peak: true }, { m: 'M', v: 45 },
    { m: 'A', v: 50 }, { m: 'M', v: 65 }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 100, peak: true },
    { m: 'A', v: 98, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 52 },
    { m: 'N', v: 44 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '2.3M+', label: 'people across the Las Vegas metro and growing fast' },
    { value: '~30%', label: 'of residents are Hispanic — significant Spanish-language search demand', accent: true },
    { value: '110°F+', label: 'peak summer days when AC failure becomes a life-safety emergency' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks when someone searches on a phone' },
  ],
  neighborhoods: [
    'Summerlin', 'Henderson', 'North Las Vegas', 'Spring Valley', 'Sunrise Manor',
    'Enterprise', 'Paradise', 'Whitney', 'Green Valley', 'Anthem',
    'Boulder City', 'Downtown Las Vegas', 'Spring Mountains', 'Rhodes Ranch', 'Aliante',
  ],
};

const AREAS = [
  'Summerlin', 'Henderson', 'North Las Vegas', 'Spring Valley', 'Sunrise Manor',
  'Enterprise', 'Paradise', 'Whitney', 'Green Valley', 'Anthem',
  'Boulder City', 'Downtown Las Vegas', 'Spring Mountains', 'Rhodes Ranch', 'Aliante',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. Las Vegas moves fast, grows fast, and the heat makes HVAC and roofing calls urgent in a way most markets never experience. We build your online presence around that reality. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the desert trades',
    body: "HVAC in 110-degree heat, pool repair, flat and low-slope roofing, desert landscaping, stucco — these are distinct from the trades in Seattle or Chicago. We build every page around how Las Vegas homeowners actually search when something goes wrong in August or when they want to redo their yard.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when those urgent summer AC calls could be coming straight to you.",
  },
  {
    title: 'We actually know Las Vegas',
    body: "Neighborhood-by-neighborhood targeting from Summerlin to North Las Vegas, plus the Spanish-language reach to win searches most agencies don't even see. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Las Vegas contractor gets around 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet summer and a fully booked calendar — and when temperatures hit 110°F, that gap costs real money fast. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV', metro: 'Las Vegas',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lasVegasLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Las Vegas Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Las Vegas and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Las Vegas',
    h1: 'When Las Vegas searches for what you do, be the first name they find',
    h2Exact: 'Las Vegas Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city this fast-growing — with 110-degree summers that turn AC failure into a life-safety emergency — we get you into that top three for your neighborhoods and zip codes, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Las Vegas audit',
    intro:
      "Las Vegas local SEO comes down to one thing: when a homeowner in Henderson or Summerlin searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This metro is growing at one of the fastest rates in the country, demand for HVAC, roofing, pool service, and desert landscaping is intensely seasonal, and roughly 30% of residents — concentrated in North Las Vegas — search in Spanish. Becoming one of those three map pins in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Las Vegas businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Las Vegas neighborhoods. Las Vegas is a mobile-first city with strong Spanish-language search demand, so the winners target tight service areas, show up in Spanish where their customers search, and are already ranking when summer HVAC emergencies spike overnight.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. When a homeowner's AC dies at 8 p.m. in August and it's 108°F outside, they're not browsing — they're calling the first name they see. Getting into that top three for your zip codes is usually the single highest-return move a Las Vegas contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Las Vegas homeowner to four contractors, then bill each of you to fight over them. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — so when summer demand spikes, it's your phone that rings." },
      { title: "You're invisible to Spanish-speaking customers", body: "Roughly 30% of Las Vegas residents are Hispanic, and a significant share search in Spanish — especially in North Las Vegas. Most contractors do nothing to show up for those searches, so the demand sits there unclaimed. Targeting the right neighborhoods and languages is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Las Vegas searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone — especially in urgent, high-stakes situations like summer AC calls." },
      { name: 'Neighborhood pages', desc: "Real pages for Summerlin, Henderson, North Las Vegas, Spring Valley, Green Valley and the rest, so you rank for the neighborhood someone's actually searching, not just \"Las Vegas.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Las Vegas sources Google trusts — local press, HOAs, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "About 30% of Las Vegas residents search in Spanish, especially in North Las Vegas. We help you show up for the demand most of your competitors never even see.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and zip codes and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before summer HVAC season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Summerlin, Henderson, North Las Vegas, and beyond, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Las Vegas neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Las Vegas?', a: "Most Las Vegas engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Las Vegas keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Las Vegas local SEO different?', a: "Two things define this market. First, it's one of the fastest-growing metros in the country — new homeowners in Summerlin and Henderson need contractors constantly and are searching on their phones. Second, when summer hits 110°F and an AC fails, the homeowner calls the first Map Pack result immediately. Being in those top three spots before summer starts is worth everything." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Las Vegas that's a real edge. About 30% of residents are Hispanic, particularly in North Las Vegas, and many search in Spanish. We can optimize your profile and content so you show up for those searches in neighborhoods where most contractors are invisible." },
      { q: 'Which areas do you cover?', a: "All the major neighborhoods and suburbs — Summerlin, Henderson, North Las Vegas, Spring Valley, Sunrise Manor, Enterprise, Paradise, Whitney, Green Valley, Anthem, Boulder City and more. We build genuine neighborhood pages instead of one generic Las Vegas page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. HVAC, roofing, plumbing, pool service, desert landscaping, solar, electrical, and general contractors. We understand summer AC emergencies, flat and low-slope roofing for desert climates, and the 24/7 economy Las Vegas runs on." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads — leads your competitors also bought — and in a market where summer AC emergencies drive urgent, high-value calls, you want those to come straight to you. We build the rankings, profile, and review base that make that happen. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Las Vegas SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Las Vegas SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing desert.',
    eyebrow: 'SEO Services · Las Vegas',
    h1: 'Get your Las Vegas business to the top of Google and keep it there',
    h2Exact: 'Las Vegas SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Las Vegas customers search and the leads keep coming. We build that ranking for a fast-growing, mobile-first metro where summer HVAC emergencies drive some of the most urgent search traffic in the country.",
    primaryCta: 'Get my free Las Vegas SEO audit',
    intro:
      "Las Vegas SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing and most mobile-driven markets in the country — HVAC, roofing, pool service, desert landscaping, plumbing — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Las Vegas businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Las Vegas neighborhoods, and earning links from trusted local sources. In Las Vegas, tight neighborhood targeting and ranking for summer HVAC and pool terms ahead of the season are two of the quickest ways to pull ahead — because those searches spike fast and the contractors already ranking capture the surge.",
    problemHeading: "Three reasons your Las Vegas site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. When a homeowner's AC dies on a 110-degree evening in Henderson, they're calling the first result they see — on their phone, in under a minute. If you're not in the top handful of results for what you sell, your site is invisible, no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. Las Vegas clicks in the HVAC and roofing categories are among the most expensive in the country during summer. SEO builds an asset you own: rankings that keep producing leads long after the work is done, at a fraction of the per-lead cost of ads or broker platforms." },
      { title: "You're not ranking for the demand that matters", body: "Las Vegas demand is intensely seasonal — HVAC and pool calls spike hard from June through September, and the occasional January freeze event drives a short burst of plumbing and pipe calls. The contractors who rank for those terms before the season starts catch the surge. If your SEO ignores seasonal and emergency searches, your busiest weeks go to whoever was already there." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — especially critical for a mobile-first audience." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Las Vegas customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including desert-specific topics most agencies skip." },
      { name: 'Link building', desc: "Authority from real Las Vegas and industry sources. In a competitive and fast-growing market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for summer HVAC, pool service, and roofing searches — and for the occasional winter freeze that drives burst plumbing demand — so you're visible before the spike, not chasing it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Las Vegas leads — including the seasonal terms that matter most." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank. Critical in a market where almost all searches happen on phones." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including seasonal and emergency terms for summer HVAC and pool season." },
      { name: 'Build authority', desc: "Links and citations from trusted Las Vegas and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or service area." },
    ],
    pricing: {
      heading: 'Transparent Las Vegas SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Las Vegas search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location / multi-service', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Las Vegas?', a: "Most Las Vegas SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Las Vegas?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. The key reason to start early: seasonal demand spikes — summer HVAC especially — reward contractors who already have rankings when the heat arrives." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and Las Vegas HVAC and roofing clicks are expensive in summer. SEO is an asset you own that keeps producing leads at a lower cost over time. Most contractors run SEO as the long-term engine and use ads for short-term gaps." },
      { q: 'Should my Las Vegas SEO target seasonal demand?', a: "Absolutely. Summer demand for HVAC repair spikes hard and fast in Las Vegas — when it's 110°F and someone's AC fails, they call whoever is already at the top of search. Ranking takes months to build, so you need to be in place before June, not scrambling to rank in July. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Las Vegas areas do you cover?', a: "All the major communities — Summerlin, Henderson, North Las Vegas, Spring Valley, Sunrise Manor, Enterprise, Paradise, Whitney, Green Valley, Anthem, Boulder City, and more — with genuine local pages for each rather than one generic Las Vegas page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially for the high-value summer emergency calls where the homeowner is not shopping around." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Las Vegas Web Design Company | OnwardCraft',
    metaDescription:
      'Las Vegas web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a fast-growing desert market.',
    eyebrow: 'Web Design · Las Vegas',
    h1: 'Las Vegas web design that turns visitors into booked jobs',
    h2Exact: 'Las Vegas Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Las Vegas contractors fast, mobile-first sites engineered to turn visitors into booked work — built for a 24/7 city where most searches happen on a phone and a slow site in summer heat costs you real money.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Las Vegas contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast on a phone in the parking lot of a Home Depot, look like the professional you are, and turn Summerlin-to-Henderson visitors into booked jobs — built for a city where 110-degree summers make HVAC and roofing websites life-safety resources, not just marketing pages.",
    aioQuestion: 'What makes a good contractor website in Las Vegas?',
    aioAnswer:
      "A good Las Vegas contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because virtually all Las Vegas searches happen on mobile and the city operates 24/7, mobile speed and an obvious next step — especially for urgent calls like AC repair on a hot day — are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result — and in Las Vegas, residents search on their phones constantly and expect fast, easy access to a contractor. We design every page around one job: turning a visitor into a booked lead, including the urgent summer emergency calls that shouldn't require any friction at all." },
      { title: "It's too slow on a phone", body: "Las Vegas has one of the highest mobile usage rates in the country — tourists and residents alike live on their phones. If your site takes more than a few seconds to load, you lose the visitor before they see your offer. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Henderson wants to see you serve Henderson — not a generic \"Las Vegas\" page that could be anybody. New residents in Summerlin want to know you know their community. We build sites that name the neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Las Vegas website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where virtually all of your Las Vegas traffic is. Fast, thumb-friendly, easy to call from — even when someone is standing outside in the heat." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, and urgent-call pages are built for urgency." },
      { name: 'Copy that sells', desc: "Words that speak to Las Vegas homeowners — including the anxious urgency of a summer AC failure or a contractor call from a new Summerlin resident — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Summerlin, Henderson, North Las Vegas, and the neighborhoods you serve, so you stand out instead of blending into a generic metro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — including the high-urgency summer calls and the steady stream of new-resident leads." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Las Vegas web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Las Vegas?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site actually work on mobile?', a: "We design mobile-first, because that's where virtually all Las Vegas searches happen. Fast load, easy-to-tap call buttons, and forms built for a thumb — including the kind of instant-call flow you need when someone's AC is out and it's 110 degrees." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Las Vegas terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes. Las Vegas has a large Spanish-speaking population, particularly in North Las Vegas. We can build Spanish-language pages or optimize your site so it shows up for Spanish-language searches — a segment most of your competitors ignore." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Las Vegas site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Las Vegas Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Las Vegas website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a fast-growing desert.',
    eyebrow: 'Website Redesign · Las Vegas',
    h1: 'Redesign your Las Vegas website without losing your rankings',
    h2Exact: 'Las Vegas Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Las Vegas contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned going into peak summer demand.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Las Vegas contractor sites for mobile speed and conversions, build them to stand out in a fast-growing and competitive market, and migrate with the redirects and SEO care that protect the traffic you already have — so you're not starting over right before HVAC season.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and usually improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Las Vegas site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "In Las Vegas, homeowners are making quick decisions on their phones — especially for urgent work like AC repair in summer. An old, cluttered design instantly signals you're behind the times, and they tap the next result. Your work may be excellent, but a dated site makes you look like the runner-up." },
      { title: "It's slow and hard to use on a phone", body: "Las Vegas has some of the highest mobile usage in the country. If your site is clunky or slow on mobile, you're losing visitors before they ever see your offer — and losing them to a competitor who loads faster. A mobile-first redesign wins them back." },
      { title: "It doesn't stand out in a growing market", body: "Las Vegas is one of the fastest-growing metros in the country. New contractors are entering the market constantly, and new homeowners in Summerlin and Henderson are searching for trusted local names. A generic old site gives no reason to pick you — a rebuilt, neighborhood-specific site does." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — critical before summer demand peaks." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, including the fast-action flow needed for emergency calls." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings on a mobile-first audience." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, because that's where virtually all your Las Vegas traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work — and that stands out when a new Summerlin homeowner is comparing contractors." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around Summerlin, Henderson, North Las Vegas, and the neighborhoods you serve, so the new site stands out in a competitive and fast-growing market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — especially important before peak season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Las Vegas redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Las Vegas?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage. Timing it before summer HVAC season starts is something we plan around." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't reflect how fast Las Vegas is growing and how competitive your market has become, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in a fast-growing market?', a: "Yes. Las Vegas adds thousands of new homeowners every year, and they're all looking for trusted local contractors in neighborhoods like Summerlin and Henderson. We rebuild your site around those neighborhoods and the specific trades you do best, so you look like the established choice." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings in a city where nearly everyone searches on their phone." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pitch deck, just a straight diagnosis." },
    ],
  },
];

export const lasVegasCity = {
  citySlug: 'las-vegas', city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV', metro: 'Las Vegas',

  titleTag: 'Las Vegas Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Las Vegas contractors. Get found, get booked, and own your leads instead of renting them — built for a fast-growing desert.',

  eyebrow: 'Las Vegas · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Las Vegas contractors found and booked',
  h2Exact: 'Las Vegas Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Las Vegas's fast-growing, mobile-first, 24/7 market. One team to get you ranking before summer heat turns every HVAC call into an emergency — and to keep you converting new residents in Summerlin and Henderson all year long.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Las Vegas audit',

  intro:
    "If you run a contracting business in Las Vegas, you're operating in one of the fastest-growing and most mobile-driven markets in the country, with extreme heat that makes HVAC and roofing calls urgent in a way few cities can match, a steady influx of new homeowners who need everything, and a significant Spanish-speaking population that most contractors never even try to reach. Winning here takes three things working together: a site that converts fast on a phone, SEO that ranks you for what people search — including the summer emergency terms that spike overnight — and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Las Vegas contractors do exactly that.",
  aioQuestion: 'How do Las Vegas contractors get more leads online?',
  aioAnswer:
    "Las Vegas contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. In a 24/7 city with extreme summer heat and a large Spanish-speaking population, the contractors who are already ranking when demand spikes — and who show up in Spanish where their customers search — win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Las Vegas searches \"near me.\" The highest-return move for most contractors — done neighborhood by neighborhood, before summer heat turns every AC call into an emergency.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Las Vegas customers actually search — HVAC, roofing, pool service, desert landscaping — build an asset you own, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and built for a city where most searches happen on a phone and urgent summer calls can't afford a slow site.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for mobile speed and conversions, and migrate it carefully so you keep every ranking you've earned — especially heading into peak HVAC and roofing season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Las Vegas?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a fast-growing market where summer demand spikes hard and new homeowners are always searching." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — HVAC, roofing, plumbing, pool service, desert landscaping, solar, electrical, and general contractors. We understand 110-degree summer emergencies, flat and low-slope roofing for desert climates, new-construction move-in work, and the 24/7 pace this city runs at." },
    { q: 'Why does the Las Vegas market need a different approach?', a: "Three things make it distinct: extreme seasonal demand (HVAC and pool calls spike hard from June through September and require you to already be ranking), one of the fastest metro growth rates in the country (constant stream of new homeowners who need contractors), and a roughly 30% Hispanic population with real Spanish-language search demand that most competitors ignore." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Las Vegas areas do you serve?', a: "All the major neighborhoods and communities — Summerlin, Henderson, North Las Vegas, Spring Valley, Sunrise Manor, Enterprise, Paradise, Whitney, Green Valley, Anthem, Boulder City, and more — with genuine local pages for each." },
    { q: 'Where should I start?', a: "Start with a free Las Vegas audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including whether you need to get in place before summer season starts. No pitch deck, just a plan." },
  ],
};

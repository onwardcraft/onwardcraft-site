// SACRAMENTO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Sacramento's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SACRAMENTO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Sacramento is a different kind of fight',
  body:
    "Sacramento is California's capital and one of its fastest-growing metros, with about 2.4 million people across the region. For contractors, that growth translates directly into demand — but so does a trio of seasonal pressures that make this market unlike any other in the state. Summers here are brutal: triple-digit heat from June through September with no ocean breeze to take the edge off. When temperatures hit 105°F, an AC failure is a genuine crisis, and every HVAC contractor in the valley gets flooded with calls at once. Then, just as summer fades, wildfire smoke season begins. From August through October, Sacramento regularly sits under thick smoke from Northern California wildfires, and homeowners who lived through a bad smoke event want better air filtration, sealed crawl spaces, and upgraded HVAC systems — work most markets never see. Add the wet-season flooding risk from December through March (the city sits at the confluence of two rivers, protected by levees), and you have a market where seasonal and emergency demand swings are extreme and the contractors who rank before those swings hit are the ones who book the work. Sacramento is also the landing zone for the Bay Area exodus: tens of thousands of remote workers and families who came from San Francisco and Oakland have bought homes here in the last few years. They're used to paying Bay Area prices for professional services, and they are skeptical — they read reviews, they check websites, and they hire based on credibility. That's a meaningful slice of the market, and it rewards contractors who look the part online.",
  pullQuote: 'When wildfire smoke rolls in or the AC breaks at 105°F, every Sacramento homeowner needs a contractor right now — and the ones already ranking are the ones who answer the phone.',
  donut: {
    title: 'How Sacramento searches',
    value: 27,
    centerLabel: 'Hispanic population',
    legend: [
      { label: 'Hispanic residents', pct: 27, kind: 'teal' },
      { label: 'Other residents', pct: 73, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (Jun–Sep), wildfire smoke (Aug–Oct), flooding season (Dec–Mar)',
  seasonalDemand: [
    { m: 'J', v: 55 }, { m: 'F', v: 58 }, { m: 'M', v: 60 },
    { m: 'A', v: 65 }, { m: 'M', v: 74 }, { m: 'J', v: 92, peak: true },
    { m: 'J', v: 98, peak: true }, { m: 'A', v: 95, peak: true }, { m: 'S', v: 88, peak: true },
    { m: 'O', v: 72 }, { m: 'N', v: 62 }, { m: 'D', v: 68 },
  ],
  stats: [
    { value: '2.4M', label: 'people across the Sacramento metro' },
    { value: '105°F+', label: 'summer highs that make AC failure a crisis, Jun–Sep', accent: true },
    { value: 'Aug–Oct', label: 'wildfire smoke season — HVAC and air filtration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Midtown', 'Land Park', 'East Sacramento', 'Oak Park', 'Natomas',
    'Elk Grove', 'Roseville', 'Rocklin', 'Folsom', 'Citrus Heights',
    'Rancho Cordova', 'Davis', 'West Sacramento', 'Fair Oaks',
  ],
};

const AREAS = [
  'Midtown', 'Land Park', 'East Sacramento', 'Oak Park', 'Natomas',
  'Elk Grove', 'Roseville', 'Rocklin', 'Folsom', 'Citrus Heights',
  'Rancho Cordova', 'Davis', 'West Sacramento', 'Fair Oaks',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand smoke-season air filtration calls, summer AC emergencies, and the flooding concerns that come with living near the Delta, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Sacramento',
    body: "Neighborhood-by-neighborhood targeting from Midtown to Folsom and Elk Grove, plus the local angles — wildfire smoke, extreme heat, the Delta flood risk, and the Bay Area transplant who expects professional credibility before they dial. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Sacramento contractor gets around 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet week and a booked-out calendar — and during smoke season or a heat wave, that gap means everything. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Sacramento', state: 'California', stateAbbr: 'CA', metro: 'Sacramento',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const sacramentoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'sacramento', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Sacramento Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Sacramento Local SEO that turns "near me" searches into a ringing phone. We get you into the Map Pack so the call lands with you during heat waves and smoke.',
    eyebrow: 'Local SEO · Sacramento',
    h1: 'Sacramento Local SEO that turns "near me" searches into a ringing phone when the Midtown heat hits',
    h2Exact: 'Sacramento Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. When a Sacramento homeowner's AC breaks at 105°F or wildfire smoke rolls in and they need better air filtration fast, we make sure that call lands with you.",
    primaryCta: 'Get my free Sacramento audit',
    intro:
      "Sacramento Local SEO comes down to one thing: when a homeowner in Midtown or Elk Grove searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has three seasonal demand spikes — summer heat (Jun–Sep), wildfire smoke season (Aug–Oct), and wet-season flooding risk (Dec–Mar) — and the contractors who already rank before those spikes hit are the ones who book the work. Here's how you become one of them.",
    aioQuestion: 'How do Sacramento businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Sacramento neighborhoods and seasonal needs. Sacramento's extreme heat, wildfire smoke season, and Delta flooding concerns give local contractors very specific search angles that out-of-area competitors and generic agencies never capture. Win those searches and you own the season.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. When Sacramento hits 105°F in July and a homeowner's AC dies, they tap one of those three and call immediately. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for your service areas is usually the single highest-return move a Sacramento contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Sacramento homeowner to four contractors, then bill each of you to compete over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you during a smoke event or a heat emergency, calls you directly, and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible during the seasons that matter most", body: "Sacramento's demand swings are extreme. HVAC calls spike in June through September. Air filtration and crawl-space work surges when wildfire smoke blankets the valley. Flood-related calls come in December through March. The contractors who rank before those seasons arrive book the surge. If you're not already visible, you spend the whole season chasing." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Sacramento searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes anxious homeowners — including the Bay Area transplants who scrutinize everything — pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Midtown, Land Park, Elk Grove, Folsom, Roseville, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Sacramento.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Sacramento sources Google trusts — local press, neighborhood associations, regional partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand targeting', desc: "We optimize for summer heat, wildfire smoke season, and flooding searches specifically — so when Sacramento's demand spikes, you're already ranked for it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Sacramento neighborhoods and service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Sacramento and surrounding communities, plus the seasonal and emergency content that captures smoke-season and heat-wave searches." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Sacramento neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Sacramento metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-area service pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Sacramento?', a: "Most Sacramento engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Sacramento keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Sacramento local SEO different from other markets?', a: "Three seasonal demand spikes that most markets don't have: extreme summer heat (Jun–Sep) that makes AC failure a crisis, wildfire smoke season (Aug–Oct) that drives air filtration and HVAC upgrade calls, and wet-season flooding risk (Dec–Mar) that's unique to living near the Sacramento and American Rivers. The contractors who rank before those seasons hit book the surge." },
      { q: 'How do you handle wildfire smoke season searches?', a: "We optimize your Google Business Profile and website content for the specific searches that spike during smoke events — air filtration, crawl-space sealing, HVAC upgrades, air purifiers. These are searches most national agencies never think to target, and they represent real, urgent demand every August through October." },
      { q: 'Which Sacramento areas do you cover?', a: "The entire metro: Midtown, Land Park, East Sacramento, Oak Park, Natomas, Elk Grove, Roseville, Rocklin, Folsom, Citrus Heights, Rancho Cordova, Davis, West Sacramento, Fair Oaks and more. We build genuine neighborhood pages instead of one generic Sacramento page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand summer AC emergencies, wildfire smoke filtration work, and the credibility signals Bay Area transplants look for before they hire." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Sacramento service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. Sacramento Local SEO done right is the highest-return move most contractors here can make, and the audit shows you exactly where to start. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'sacramento', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Sacramento SEO Company | Rank for the Searches That Book Jobs | OnwardCraft',
    metaDescription:
      'Sacramento SEO that ranks contractors for the searches that book jobs, from July AC repair to smoke-season air filtration. Leads you own, no lock-in contracts.',
    eyebrow: 'SEO Services · Sacramento',
    h1: 'Sacramento SEO that ranks you for the searches that book jobs, from July AC repair to smoke-season air filtration',
    h2Exact: 'Sacramento SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Sacramento customers search — whether that's AC repair in July, air filtration during smoke season, or flood restoration in January — and the leads keep coming.",
    primaryCta: 'Get my free Sacramento SEO audit',
    intro:
      "Sacramento SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a fast-growing, seasonally intense market — and we measure it in leads, not vanity traffic. That means ranking before the heat wave hits, before the smoke rolls in, and before the wet-season calls start.",
    aioQuestion: 'How do Sacramento businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Sacramento neighborhoods and seasonal events, and earning links from trusted regional sources. Sacramento's three demand spikes — summer heat, wildfire smoke season, and wet-season flooding — give local contractors very specific, high-intent search angles. The businesses that capture those searches before each season arrives are the ones who book the surge.",
    problemHeading: "Three reasons your Sacramento site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. When a Sacramento homeowner's AC fails at 103°F or smoke rolls in from a Northern California wildfire, they search urgently and tap the first result they see. If you're not there, it doesn't matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads during every heat wave and every smoke event, at a fraction of the per-lead cost of paid advertising." },
      { title: "You're not ranking for the seasonal demand that defines this market", body: "Sacramento's peak demand moments are predictable: extreme heat Jun–Sep, wildfire smoke Aug–Oct, wet-season flooding Dec–Mar. The contractors who rank for those specific searches before the season arrives book the surge. If your SEO ignores seasonal and emergency terms, you're handing your busiest weeks to whoever ranked first." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Sacramento customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Sacramento and industry sources. Links are often what separate page one from page two in a competitive regional market." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Sacramento neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for summer heat, wildfire smoke-season, and flooding searches specifically, so you're visible before demand spikes, not scrambling after they hit.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Sacramento leads — including the seasonal terms that matter here." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the heat-wave, smoke-season, and flooding terms that define Sacramento demand." },
      { name: 'Build authority', desc: "Links and citations from trusted Sacramento and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Sacramento SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Sacramento search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Sacramento?', a: "Most Sacramento SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Sacramento?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Sacramento contractors do best running SEO as the long-term engine and ads for short-term spikes during heat waves or smoke events." },
      { q: 'Should my Sacramento SEO target seasonal demand?', a: "Yes — and this is one of the most important things to get right in this market. Summer heat makes AC failure a crisis. Wildfire smoke season creates sudden demand for air filtration and HVAC upgrades. Wet-season weather drives flooding and drainage calls. Ranking takes months to build, so you have to be in place before each season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Sacramento areas do you cover?', a: "The entire metro: Midtown, Land Park, East Sacramento, Oak Park, Natomas, Elk Grove, Roseville, Rocklin, Folsom, Citrus Heights, Rancho Cordova, Davis, West Sacramento, Fair Oaks and more — with genuine local pages rather than one generic Sacramento page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. Sacramento SEO is a long-term asset you own, and the audit maps the fastest path to page one for your money keywords. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'sacramento', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Sacramento Web Design Company | Built to Convert Clicks Into Calls | OnwardCraft',
    metaDescription:
      'Sacramento Web Design built to convert clicks into calls. Fast, mobile-first contractor sites credible enough for the Bay Area transplants now shopping here.',
    eyebrow: 'Web Design · Sacramento',
    h1: 'Sacramento Web Design built to convert clicks into calls, even from the Bay Area transplants who check everything first',
    h2Exact: 'Sacramento Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Sacramento contractors fast, mobile-first sites engineered to turn visitors into booked work — credible enough for the Bay Area transplant who moved here and did their homework before calling.",
    primaryCta: 'Get my free quote',
    intro:
      "Sacramento Web Design is the difference between a site that quietly loses leads and one that books work: most contractor sites are slow on a phone, with a buried call button, no clear offer, and nothing that signals you're a credible professional. We build sites that load fast, look like the professional you are, and turn Midtown-to-Folsom visitors into booked jobs, including the growing wave of Bay Area transplants who are used to higher standards and will judge you on your website before they ever call.",
    aioQuestion: 'What makes a good contractor website in Sacramento?',
    aioAnswer:
      "A good Sacramento contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and communities you serve. Sacramento's surge of Bay Area transplants brings buyers who are used to professional, credible online presences — they read reviews, they check websites, and they hire based on what they see. A generic-looking site loses them before you get a chance to talk.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. Sacramento has a fast-growing population of Bay Area transplants who are selective and used to professional-grade businesses online. A site that doesn't earn their trust loses the job." },
      { title: "It's too slow on a phone", body: "Most of your Sacramento visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially during a heat emergency when they need help right now. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Elk Grove wants to see you serve Elk Grove — not a generic \"Sacramento\" page that could be anybody. We build sites that name the communities you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Sacramento website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service areas, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Sacramento traffic is — especially during urgent heat-wave and smoke-event searches." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Sacramento homeowners — including Bay Area transplants who expect polish — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Midtown through Folsom." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Sacramento communities you serve, so you stand out instead of blending into a generic city page — and so Google knows exactly where to rank you.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service areas, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Sacramento web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Sacramento?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'How do I stand out to Bay Area transplants who moved to Sacramento?', a: "That's one of the most important things we design for here. Bay Area transplants are a significant and growing slice of the Sacramento market, and they've been conditioned to expect professional, polished, credible businesses online. A generic-looking site loses them. We build sites with the reviews, photography, and positioning that earn their trust before they ever call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Sacramento terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Sacramento traffic comes from — especially during urgent searches in a heat wave or smoke event." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Sacramento site should include, and a fixed-price quote with a timeline. Sacramento Web Design that loads fast and converts visitors into booked jobs pays for itself, and the quote shows you exactly how. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'sacramento', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Sacramento Website Redesign | Keep Every Ranking You Have Earned | OnwardCraft',
    metaDescription:
      'Sacramento Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds that convert more across Midtown, Elk Grove, and Folsom.',
    eyebrow: 'Website Redesign · Sacramento',
    h1: 'Sacramento Website Redesign that keeps every ranking you have earned from Midtown to Folsom',
    h2Exact: 'Sacramento Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, not credible enough for the Bay Area buyers now shopping Sacramento. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Sacramento Website Redesign goes one of two bad ways when it's done carelessly: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Sacramento contractor sites for speed and conversions, built to look credible to a demanding market, and migrate with the redirects and SEO-safe care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Sacramento site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Sacramento has seen a significant influx of Bay Area transplants — buyers who are used to professional, polished businesses online. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Sacramento visitors before they ever see your offer — including the ones searching urgently during a heat wave or smoke event. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert the seasonal demand you're already getting", body: "Traffic that doesn't turn into calls is wasted. If your site isn't set up to capture the surge during Sacramento's peak seasons — extreme heat, smoke events, wet-season flooding — a redesign built for conversions and local neighborhoods turns those visitors into booked work." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and essential for urgent mobile searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Sacramento traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work — and the expectations of the Bay Area buyers who've moved to Sacramento." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Sacramento communities you serve — Midtown to Folsom, Natomas to Elk Grove — so the new site stands out instead of reading like a generic placeholder.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Sacramento redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Sacramento?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't look credible to the growing wave of Bay Area transplants shopping Sacramento, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete for the Bay Area transplant market?', a: "Yes, and it's one of the most important things we design for in Sacramento. That buyer is used to professional-grade businesses online, reads reviews, and judges you by your website before calling. We rebuild sites with the credibility signals and positioning that earn their trust." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — critical when homeowners are searching on a phone during a heat emergency." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. A Sacramento Website Redesign done with a careful, SEO-safe migration converts more without losing your rankings, and the audit shows you exactly what that takes." },
    ],
  },
];

export const sacramentoCity = {
  citySlug: 'sacramento', city: 'Sacramento', state: 'California', stateAbbr: 'CA', metro: 'Sacramento',

  titleTag: 'Sacramento Marketing for Contractors | Get Ranked, Get Booked | OnwardCraft',
  metaDescription:
    'Sacramento marketing for contractors: get ranked, get booked. Web design, SEO, and local SEO that get you found during heat waves and smoke season, leads you own.',

  eyebrow: 'Sacramento · Web Design, SEO & Lead Generation',
  h1: 'Sacramento marketing for contractors: get ranked before the Central Valley heat hits, get booked all season',
  h2Exact: 'Sacramento Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Sacramento's extreme heat, wildfire smoke season, and a fast-growing market full of discerning buyers. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Sacramento audit',

  intro:
    "Sacramento marketing for contractors has to account for a market with three intense seasonal demand spikes: extreme summer heat that makes AC failure a crisis, wildfire smoke season that drives air filtration calls no other city sees, and a wet season that brings flooding and drainage emergencies from a valley that sits between two rivers. On top of that, the Bay Area exodus has filled Sacramento with buyers who expect the professional credibility they were used to paying for. Winning here takes three things working together: a site that converts, SEO that ranks you before demand spikes, and local SEO that puts you in the Map Pack across the communities you serve. Here's how we help Sacramento contractors do exactly that.",
  aioQuestion: 'How do Sacramento contractors get more leads online?',
  aioAnswer:
    "Sacramento contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across Sacramento's diverse neighborhoods and communities. The biggest edge in this market is timing: the contractors who rank for HVAC, air filtration, and flooding searches before each season's demand spike arrives book the surge. A growing Bay Area transplant population also raises the bar for online credibility — reviews, professional design, and clear positioning matter more here than in many comparable markets.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Sacramento searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, before each seasonal spike.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including heat-wave, smoke-season, and flooding terms — build an asset you own instead of renting traffic from ads, and measure it in leads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and credible enough for the Bay Area transplants who've moved to Sacramento and expect professional-grade businesses online.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully so you keep every bit of ranking you've earned, and position it for a market that's raising the bar.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Sacramento?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially before Sacramento's peak seasons hit." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand summer AC emergencies, wildfire smoke filtration work, and the flooding concerns unique to living near the Delta." },
    { q: 'Why does the Sacramento market need a different approach?', a: "Three seasonal demand spikes most markets don't have: extreme heat (Jun–Sep), wildfire smoke season (Aug–Oct), and wet-season flooding risk (Dec–Mar). Plus a growing population of Bay Area transplants who expect professional credibility and read reviews carefully before hiring. Generic local SEO misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Sacramento areas do you serve?', a: "The entire metro: Midtown, Land Park, East Sacramento, Oak Park, Natomas, Elk Grove, Roseville, Rocklin, Folsom, Citrus Heights, Rancho Cordova, Davis, West Sacramento, Fair Oaks and more." },
    { q: 'Where should I start?', a: "Start with a free Sacramento audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, including how to position for the next seasonal demand spike. Sacramento marketing for contractors works best when web design, SEO, and local SEO pull together, and the audit shows you where to begin. No pitch deck, just a plan." },
  ],
};

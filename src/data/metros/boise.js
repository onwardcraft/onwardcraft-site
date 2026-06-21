// BOISE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Boise's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BOISE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Boise is harder than it looks',
  body:
    "Boise has been one of the fastest-growing metros in the United States for the better part of a decade. California and Pacific Northwest transplants — many from the Bay Area and SoCal — flooded in during COVID and keep coming. The result: a city where thousands of new homeowners arrive every year with no existing contractor relationships and no idea who to call. They type it into Google. That's your window, and it closes fast. Two things shape demand in this valley. First, Boise sits in a bowl surrounded by dry sagebrush hills and forests. Every August and September, wildfire smoke from Idaho and Oregon fires rolls in, air quality tanks, and HVAC calls spike — homeowners are suddenly very motivated to get a better filtration system or service their equipment before the smoke returns. Second, Boise has real winters. Temperatures drop hard, there's real freeze risk, and heating demand from December through February is serious. The contractors who own those seasonal searches before demand spikes are the ones with booked calendars. The transplant wave also reshapes the economics: people arriving from the Bay Area are used to paying professional rates and are actively looking for contractors they can trust. A polished digital presence is the first filter they use.",
  pullQuote: 'In a valley growing this fast, the contractor who shows up first when a new homeowner searches is the one who earns a customer for life.',
  donut: {
    title: 'Boise metro growth since 2015',
    value: 72,
    centerLabel: 'growth since 2015',
    legend: [
      { label: 'Population growth', pct: 72, kind: 'teal' },
      { label: 'Existing base', pct: 28, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wildfire smoke (Aug–Sep), winter heating (Dec–Feb), spring irrigation/drainage',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 82, peak: true }, { m: 'M', v: 55 },
    { m: 'A', v: 60 }, { m: 'M', v: 65 }, { m: 'J', v: 58 }, { m: 'J', v: 62 },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 88, peak: true }, { m: 'O', v: 54 },
    { m: 'N', v: 70 }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: 'Top 10', label: 'fastest-growing US metros for most of the past decade' },
    { value: '72%', label: 'metro population growth since 2015 — new homeowners with no contractor relationships', accent: true },
    { value: 'Aug–Sep', label: 'wildfire smoke season, when HVAC filtration calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when someone searches your trade' },
  ],
  neighborhoods: [
    'North End', 'East End', 'Hyde Park', 'Garden City', 'Downtown Boise',
    'Eagle', 'Meridian', 'Nampa', 'Caldwell', 'Star',
    'Kuna', 'Middleton', 'Micron Area', 'Harris Ranch', 'Southeast Boise',
  ],
};

const AREAS = [
  'Boise', 'Meridian', 'Nampa', 'Eagle', 'Caldwell', 'Star', 'Kuna',
  'Garden City', 'North End', 'East End', 'Hyde Park', 'Harris Ranch',
  'Southeast Boise', 'Middleton', 'Treasure Valley',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor a few grand a month for leads three of their competitors also bought. You can't build a business on rented leads. Boise is one of the fastest-growing markets in the country, and that growth means real opportunity — but only for contractors who show up where new homeowners are actually searching. That's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand wildfire smoke filtration calls, freeze events, and the wave of California transplants who want a contractor they can trust — so everything we build is shaped around how Boise customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker selling the same Treasure Valley homeowner to three of your competitors.",
  },
  {
    title: 'We actually understand Boise',
    body: "Neighborhood-by-neighborhood targeting from North End to Meridian to Nampa, plus the seasonal smarts to rank you for smoke-season and winter-heating demand before it spikes. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Boise contractor gets around 1,800 local \"near me\" impressions a month across a handful of Treasure Valley neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — especially when thousands of new homeowners arrive each year with no contractor on speed dial. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Boise', state: 'Idaho', stateAbbr: 'ID', metro: 'Boise',
  heroProof: ['Built for the trades', 'Treasure Valley targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const boiseLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Boise Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Boise and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Boise, Idaho',
    h1: 'When Boise searches for what you do, be the first name they find',
    h2Exact: 'Boise Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a valley growing this fast — with thousands of new homeowners arriving every year who have no idea who to call — being in those top three spots is how you build a customer base that belongs to you.",
    primaryCta: 'Get my free Boise audit',
    intro:
      "Boise local SEO comes down to one thing: when a homeowner in Meridian or Eagle or North End searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is one of the fastest-growing metros in the country, and the transplants arriving from California come with high expectations, money to spend, and a phone in their hand. Showing up is the whole game. Here's how you do it.",
    aioQuestion: 'How do Boise businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Boise neighborhoods and Treasure Valley communities. Boise's rapid growth means thousands of new homeowners are searching for contractors every month with no existing relationships — the winner is whoever shows up first in the Map Pack for their neighborhood.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people, including the California transplant who just moved to Eagle and has a project budget to match, never see your name. Getting into that top three across Treasure Valley is usually the single highest-return move a Boise contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Boise homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — and in a market growing this fast, that asset compounds quickly." },
      { title: "You're missing the seasonal spikes that fill calendars", body: "Boise has two hard demand spikes every year: wildfire smoke season in August and September, when HVAC filtration and air quality calls flood in overnight, and winter heating season from December through February. The contractors ranking for those terms before the season catch the surge. If your local SEO ignores seasonal demand, you're leaving your busiest weeks to whoever ranked ahead of time." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Boise and Treasure Valley searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes the California transplant on their phone pick up and call." },
      { name: 'Neighborhood pages', desc: "Real pages for Meridian, Eagle, Nampa, North End, and the rest — so you rank for the community someone's actually searching, not just a generic \"Boise\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Boise and Idaho sources Google trusts — local press, associations, chambers, partners. This is what separates page one from page two in a growing market." },
      { name: 'Seasonal smoke and winter SEO', desc: "We rank you for the wildfire-smoke filtration and winter-heating searches that spike hardest in Boise, so you're capturing demand before it peaks, not after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Boise and the Treasure Valley and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move fastest. You often see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially in a market adding new residents every month." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Meridian, Eagle, Nampa, Caldwell, Star, and Kuna, plus the seasonal content for smoke season and winter heating." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Treasure Valley communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Treasure Valley.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal smoke and winter SEO', 'Multi-community service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Boise?', a: "Most Boise engagements land between $750 and $2,500 a month, depending on how many communities and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Boise keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a growing market with real competition is selling you something." },
      { q: 'What makes Boise local SEO different from other markets?', a: "Two things. The growth is relentless — thousands of new homeowners arrive every year with no existing contractor relationships and the first thing they do is search on their phone. And Boise has dramatic seasonal demand spikes: wildfire smoke in August and September sends HVAC filtration calls through the roof, and winter heating demand is real December through February. You have to be ranking before those spikes, not after." },
      { q: 'Can you help me reach the California transplants moving to Boise?', a: "Yes, and in Boise that's a real competitive edge. Transplants from the Bay Area and SoCal are used to paying professional rates and are actively looking for contractors they can trust — a polished search presence is the first filter they use. We make sure you show up and look the part when they search in Eagle, Meridian, and the East End." },
      { q: 'Which areas do you cover?', a: "All of the Treasure Valley — Boise proper, Meridian, Nampa, Eagle, Caldwell, Star, Kuna, and Garden City. We build genuine neighborhood pages for North End, East End, Hyde Park, Harris Ranch, and the communities around them, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand wildfire smoke filtration jobs, freeze events, and what new Boise homeowners are actually searching for." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. In a market growing as fast as Boise, those owned leads compound quickly — over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the Treasure Valley, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Boise SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Boise SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market. Free Boise SEO audit.',
    eyebrow: 'SEO Services · Boise, Idaho',
    h1: 'Get your Boise business to the top of Google and keep it there',
    h2Exact: 'Boise SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Boise customers search and the leads keep coming. We build that ranking for contractors across the Treasure Valley and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Boise SEO audit',
    intro:
      "Boise SEO comes down to one question: when a homeowner in Meridian or Eagle searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing markets in the country — and we measure it in leads, not vanity traffic. In a valley where thousands of new homeowners arrive with no contractor on speed dial, showing up on page one is how you fill your calendar.",
    aioQuestion: 'How do Boise businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Treasure Valley communities, and earning links from trusted Idaho sources. In Boise's fast-growing market, tight neighborhood targeting and ranking for seasonal wildfire-smoke and winter-heating terms are two of the quickest ways to pull ahead of competitors who are still chasing generic city-wide keywords.",
    problemHeading: "Three reasons your Boise site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market this competitive and growing this fast — with new contractors arriving alongside new homeowners — if you're not in the top handful of results for what you sell, your site is basically invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a growing market like Boise, that asset gets more valuable every year as the population base expands." },
      { title: "You're not ranking for the demand that matters", body: "Boise demand swings hard with the seasons — heating and freeze calls in winter, and a hard spike in HVAC filtration calls when wildfire smoke rolls into the valley every August and September. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Boise and Treasure Valley customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Boise, Idaho, and industry sources. In a growing market where more contractors enter every year, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Meridian, Eagle, Nampa, and the rest of the Treasure Valley alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the wildfire-smoke HVAC calls and the winter heating searches that drive Boise's busiest weeks, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Boise and Treasure Valley leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal smoke-season and winter-heating terms that matter in this valley." },
      { name: 'Build authority', desc: "Links and citations from trusted Boise and Idaho sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or community." },
    ],
    pricing: {
      heading: 'Transparent Boise SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Boise and Treasure Valley search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-community pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Boise?', a: "Most Boise SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Boise?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter community-level terms and slower on the most competitive Treasure Valley keywords. SEO compounds, so the gains keep building the longer you run it — and in a market growing as fast as Boise, the foundation you build now pays off for years." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Boise contractors do best running SEO as the long-term engine and ads for short-term spikes or a new service area." },
      { q: 'Should my Boise SEO target seasonal demand?', a: "Absolutely. When wildfire smoke rolls into the valley every August and September, HVAC filtration calls spike overnight. Winter freeze events and heating demand run hard from December through February. Ranking takes months to build, so you have to be in place before the season arrives, not chasing it after. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search." },
      { q: 'Which areas around Boise do you cover?', a: "All of the Treasure Valley — Boise, Meridian, Nampa, Eagle, Caldwell, Star, Kuna, and Garden City — with genuine local pages for each community rather than one generic Boise page, because that's what actually ranks for \"[service] [city]\" searches." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In a market growing as fast as Boise, those owned leads are worth more every year — over time you lean on paying brokers for shared leads less because the work is coming to you directly." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Treasure Valley, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Boise Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Boise web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a fast-growing market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Boise, Idaho',
    h1: 'Boise web design that turns visitors into booked jobs',
    h2Exact: 'Boise Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Boise contractors fast, mobile-first sites engineered to turn visitors into booked work — and to earn the trust of transplants who arrived from California expecting professional quality.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Boise contractor websites lose leads quietly: slow on a phone, buried call button, nothing that says 'we serve your neighborhood.' Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Treasure Valley visitors into booked jobs — built for a market where thousands of new homeowners are searching every month and filtering by first impressions.",
    aioQuestion: 'What makes a good contractor website in Boise?',
    aioAnswer:
      "A good Boise contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific communities and neighborhoods you serve across the Treasure Valley. Because transplants from California are used to polished online experiences and most searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor. In Boise, where thousands of new residents are searching for contractors they've never heard of, your website is often their first and only impression. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Boise visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking — and so the Bay Area transplant who found you at 8pm on their phone actually calls." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Eagle wants to see you serve Eagle — not a generic \"Boise\" page that could be anybody. We build sites that name the Treasure Valley communities you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Boise website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your communities, and the jobs you actually want — built to appeal to both longtime locals and the California transplants who just moved in." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Boise traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — new to the valley and looking for someone they can trust — and book the job, not filler text." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and Treasure Valley community pages ready to go." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Community-targeted pages', desc: "Pages built around Meridian, Eagle, Nampa, Caldwell, and the communities you serve, so you stand out in a growing market instead of blending into one generic Boise page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your communities, your best jobs, and your competitors, then map the site around booking more of the work you want in the Treasure Valley." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Boise web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + community pages', 'Speed & Core Web Vitals', 'Community-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Boise?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in a growing market like Boise?', a: "That's the whole point. Thousands of new homeowners are landing in the Treasure Valley every year with no contractor relationships — they're choosing who to call based on first impressions online. We build around the specific communities you serve, keep the site fast, and put a clear offer front and center so yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and Treasure Valley community pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Boise terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Boise traffic comes from — including the transplants scrolling on their phones looking for a reliable contractor the night they move in." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Boise contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'boise', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Boise Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Boise website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a fast-growing market. Free audit.',
    eyebrow: 'Website Redesign · Boise, Idaho',
    h1: 'Redesign your Boise website without losing your rankings',
    h2Exact: 'Boise Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Boise contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in a market that's only getting more competitive.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Boise contractor sites for speed and conversions, build them to earn the trust of transplants and longtime locals alike, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and in a market growing as fast as Boise, a stronger site pays compounding dividends.",
    problemHeading: "Signs your Boise site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Boise is full of transplants from California who expect a polished digital presence before they hire anyone. An old, cluttered design quietly sends them to a competitor who looks more professional — even when your work is better. In a market growing this fast, that first impression is often your only chance." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Boise visitors before they ever see your offer. A redesign built mobile-first wins them back — and it improves your Google ranking at the same time." },
      { title: "It blends into a growing, crowded market", body: "Traffic that doesn't turn into calls is wasted — and a generic old site in a valley adding contractors as fast as it adds homeowners gives a visitor no reason to pick you. We rebuild for conversions and for the Treasure Valley communities you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Boise redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Boise traffic lives — including the transplant who found you on their phone from a hotel room the week they moved in." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of the buyers arriving in the Treasure Valley." },
      { name: 'Community-targeted rebuild', desc: "Rebuilt around Meridian, Eagle, Nampa, and the communities you serve, so the new site stands out in a growing market instead of reading like everyone else's.", featured: true },
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
      heading: 'Transparent Boise redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + community pages', 'Community-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Boise?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — the new site is faster and better structured than the old one." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or blends into a Boise market that's getting more competitive by the month, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete as Boise keeps growing?', a: "Yes, and that's the point in a market adding contractors and homeowners at this pace. We rebuild around the specific communities you serve, keep the site fast, and make the offer and call button obvious — so the new site stands out instead of reading like every other contractor in the valley." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const boiseCity = {
  citySlug: 'boise', city: 'Boise', state: 'Idaho', stateAbbr: 'ID', metro: 'Boise',

  titleTag: 'Boise Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Boise contractors. Get found, get booked, and own your leads instead of renting them — built for a fast-growing Treasure Valley market. Free Boise audit.',

  eyebrow: 'Boise · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Boise contractors found and booked',
  h2Exact: 'Boise Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for one of the fastest-growing markets in the country. One team to get you ranking across the Treasure Valley, converting transplants and locals alike, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Treasure Valley targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Boise audit',

  intro:
    "If you run a contracting business in Boise, you're operating in one of the fastest-growing metros in the United States. Thousands of new homeowners — many arriving from California with no existing contractor relationships and money to spend — arrive every year and the first thing they do is search on their phone. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the communities you serve across the Treasure Valley. Add in the wildfire smoke spikes every August and September and the real winters that drive heating demand December through February, and you have a market with serious seasonal opportunity for the contractor who's already ranking when demand hits. Here's how we help Boise contractors do exactly that.",
  aioQuestion: 'How do Boise contractors get more leads online?',
  aioAnswer:
    "Boise contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack community by community across the Treasure Valley. In a metro growing as fast as Boise — where thousands of new homeowners arrive every year with no contractor relationships — the contractor who shows up first in search wins a disproportionate share of new customers. Ranking for seasonal demand spikes like wildfire-smoke HVAC calls and winter heating searches gives additional leverage over competitors who aren't prepared.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when someone in Meridian, Eagle, or Nampa searches your service. In a valley full of new homeowners with no contractor on speed dial, that Map Pack spot is worth more every year.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Boise customers actually search — including the seasonal smoke-season and winter-heating terms that flood in demand — and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that earn the trust of California transplants and local homeowners alike — engineered to turn visitors into booked work, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned in a market that's only getting more competitive.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Boise?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Treasure Valley — rather than renting them from lead brokers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand wildfire-smoke filtration calls, winter freeze events, and what new Boise homeowners are actually searching for." },
    { q: 'Why does the Boise market need a different approach?', a: "Boise has been one of the fastest-growing metros in the country for a decade. Thousands of new homeowners arrive every year — many from California — with no existing contractor relationships. They search on their phones. The contractor who shows up in those searches wins a customer for life, because those newcomers need to build every relationship from scratch. Seasonal spikes from wildfire smoke and hard winters add additional opportunity for contractors who plan ahead." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Boise and Treasure Valley areas do you serve?', a: "All of the Treasure Valley — Boise, Meridian, Nampa, Eagle, Caldwell, Star, Kuna, and Garden City — with genuine local pages for North End, East End, Hyde Park, Harris Ranch, and the neighborhoods around them." },
    { q: 'Where should I start?', a: "Start with a free Boise audit. We'll look at your website, your rankings, and your Map Pack presence across the Treasure Valley, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

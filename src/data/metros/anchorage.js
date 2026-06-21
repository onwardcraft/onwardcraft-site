// ANCHORAGE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Anchorage's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ANCHORAGE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Anchorage is life-or-death for contractors',
  body:
    "Anchorage sits in one of the most seismically active zones on earth, endures winters that plunge to -20°F to -40°F, and runs on an oil-and-military economy that keeps household incomes well above national averages. When a heating system fails at 3 a.m. in January, that's not an inconvenience — it's a survival emergency, and homeowners call the first contractor Google shows them. Two things drive demand here. First, Anchorage's extreme climate creates year-round contractor urgency: frozen pipes, collapsed roofs, heating failures, and earthquake damage mean work never truly stops — it just shifts. Second, Joint Base Elmendorf-Richardson (JBER) cycles thousands of Army and Air Force families through the city on PCS orders every year, creating a constant stream of buyers who need contractors fast and search online because they have no local network. The contractors already ranking are the ones who book that work every time.",
  pullQuote: 'In a city where -30°F is normal and the ground shakes, the contractor who owns the map is the one who gets the call at 3 a.m.',
  donut: {
    title: 'What powers Anchorage demand',
    value: 42,
    centerLabel: 'oil/military economy',
    legend: [
      { label: 'Oil/military jobs', pct: 42, kind: 'teal' },
      { label: 'Other sectors', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Heating emergencies (Oct–Mar) and summer renovation season (Jun–Aug)',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 70 },
    { m: 'A', v: 58 }, { m: 'M', v: 72, peak: true }, { m: 'J', v: 95, peak: true },
    { m: 'J', v: 98, peak: true }, { m: 'A', v: 88 }, { m: 'S', v: 82, peak: true },
    { m: 'O', v: 88, peak: true }, { m: 'N', v: 91, peak: true }, { m: 'D', v: 89, peak: true },
  ],
  stats: [
    { value: '~290K', label: 'people in the Anchorage metro area' },
    { value: '-40°F', label: 'winter lows that turn heating failures into survival emergencies', accent: true },
    { value: 'M7.1', label: 'earthquake hit Anchorage in 2018, driving seismic retrofit demand' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the calls' },
  ],
  neighborhoods: [
    'Midtown', 'Spenard', 'South Anchorage', 'Eagle River', 'Chugiak',
    'Downtown Anchorage', 'Mountain View', 'Muldoon', 'Abbott Loop', 'Girdwood',
    'Wasilla', 'Palmer', 'Mat-Su Valley', 'Sand Lake', 'Hillside',
  ],
};

const AREAS = [
  'Midtown', 'Spenard', 'South Anchorage', 'Eagle River', 'Chugiak',
  'Downtown Anchorage', 'Mountain View', 'Muldoon', 'Abbott Loop', 'Girdwood',
  'Wasilla', 'Palmer', 'Mat-Su Valley', 'Sand Lake', 'Hillside',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. In a market like Anchorage — where the work is urgent, the winters are brutal, and homeowners need a contractor they can trust right now — you can't build a business on rented leads that go to four other guys. So that's the whole point of what we do here: get you ranking for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, electrical, restoration, GCs, and seismic retrofit specialists. We understand Anchorage heating emergencies, earthquake prep, permafrost foundations, and the short summer renovation window — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners who were also sent to three of your competitors.",
  },
  {
    title: 'We actually understand Alaska',
    body: "Neighborhood-by-neighborhood targeting from Eagle River to Girdwood, plus the Alaska-specific angles — extreme cold, seismic risk, permafrost, oil economy — that make Anchorage searches completely different from any other market. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Anchorage contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a fully booked calendar — and in a market where heating emergencies and post-quake repairs spike overnight, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Anchorage', state: 'Alaska', stateAbbr: 'AK', metro: 'Anchorage',
  heroProof: ['Built for the trades', 'Alaska-specific targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const anchorageLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Anchorage Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Anchorage and three businesses show up on the map. We get you into those three, so the call lands with you during every heating.',
    eyebrow: 'Local SEO · Anchorage, Alaska',
    h1: 'When Anchorage searches for what you do, be the first name they find',
    h2Exact: 'Anchorage Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city where a heating failure at -30°F is a survival emergency, we get you into that top three for your neighborhoods — so the call lands with you before the homeowner tries anyone else.",
    primaryCta: 'Get my free Anchorage audit',
    intro:
      "Anchorage local SEO comes down to one thing: when a homeowner in Eagle River or South Anchorage searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market runs on urgency — heating emergencies in brutal winters, post-earthquake repair, a short but intense summer renovation window — and the contractor who ranks is the one who gets every call that matters. Here's how you get there.",
    aioQuestion: 'How do Anchorage businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and Anchorage neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Anchorage communities and Alaska-specific services. Anchorage has a tight, urgency-driven market — extreme cold, seismic risk, a military population with no local network — so the winners target specific neighborhoods, emphasize emergency availability, and show up before demand spikes, not after.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. In Anchorage, where a heating failure is a survival emergency and homeowners need help now, those three spots translate directly into booked work. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Anchorage homeowner to four contractors, then bill each of you to fight over them. Local SEO builds the opposite: the lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're missing the surge windows", body: "Anchorage demand spikes hard: heating emergencies from October through March, a compressed summer renovation window in June through August, and post-earthquake repair calls that come with no warning. Contractors who rank year-round capture every spike. If you're not already in the Map Pack when the surge hits, you don't catch the work — someone who ranked six months ago does." },
    ],
    servicesHeading: 'What it actually takes to rank you in Anchorage',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Anchorage searches you should win — including heating emergency and seismic repair terms." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes anxious homeowners pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Eagle River, South Anchorage, Midtown, Spenard, Chugiak, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Anchorage.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Alaska sources Google trusts — local press, associations, community organizations, partners. This is what separates page one from page two here." },
      { name: 'Emergency and seasonal SEO', desc: "We optimize for the heating-failure, burst-pipe, and post-earthquake searches that drive Anchorage's highest-value calls — so you're already ranking when the surge hits.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Anchorage neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Anchorage and the Mat-Su Valley, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Anchorage neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Anchorage and the Mat-Su Valley.', features: ['Everything in Local Growth', 'Local link building', 'Emergency and seasonal SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Anchorage?', a: "Most Anchorage engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Anchorage keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this urgent is selling you something." },
      { q: 'What makes Anchorage local SEO different from other cities?', a: "Three things. Anchorage demand is urgency-driven — heating failures at -30°F, post-earthquake repairs, burst pipes — so the contractor who's already ranking captures those calls with no competition. The market has a tight renovation season (June through August) where you need to be visible before summer starts, not during it. And a large military population on JBER has no local network, so they rely entirely on Google to find contractors." },
      { q: 'Can you help me rank for heating emergency searches?', a: "Yes, and in Anchorage that's one of the highest-value things we can do. We optimize your profile and content specifically for heating failure, furnace repair, pipe freeze, and boiler emergency searches — so when a homeowner needs help at 3 a.m. in January, you're the first name they see." },
      { q: 'Which Anchorage areas do you cover?', a: "All of Anchorage and the surrounding communities — Midtown, Spenard, South Anchorage, Eagle River, Chugiak, Downtown, Mountain View, Muldoon, Abbott Loop, Girdwood, and the Mat-Su Valley including Wasilla and Palmer. We build genuine neighborhood pages instead of one generic Anchorage page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, electrical, restoration, seismic retrofit, and general contractors. We understand Anchorage heating emergencies, Alaska-specific construction like permafrost pilings, earthquake repair, and the short summer renovation window." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Anchorage neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Anchorage SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Anchorage SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for an extreme-climate.',
    eyebrow: 'SEO Services · Anchorage, Alaska',
    h1: 'Get your Anchorage business to the top of Google and keep it there',
    h2Exact: 'Anchorage SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Anchorage customers search and the leads keep coming through winter, earthquake season, and the summer renovation rush. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Anchorage SEO audit',
    intro:
      "Anchorage SEO comes down to one question: when someone searches what you do — heating repair, foundation inspection, seismic retrofit, roofing before the first snow — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the most urgency-driven markets in North America, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Anchorage businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Alaska customers search, publishing genuinely useful local content tied to Anchorage neighborhoods and Alaska-specific services, and earning links from trusted local sources. In a market shaped by extreme cold, seismic risk, and a military population, the quickest way to pull ahead is to rank for emergency and seasonal terms before the surge hits — because homeowners don't comparison-shop when it's -30°F outside.",
    problemHeading: "Three reasons your Anchorage site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In Anchorage, where a heating failure is urgent and a homeowner needs help now, the contractor on page two essentially doesn't exist. If you're not in the top handful of results for what you do, your site is invisible — no matter how strong your reputation." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads through every winter emergency, every earthquake repair wave, and every summer renovation season — at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Anchorage demand spikes in ways most contractors don't plan for: heating and pipe emergencies through the six-month winter, a compressed summer renovation window in June through August, and post-earthquake structural calls with no warning. The contractors who rank for those terms ahead of time catch every surge. If your SEO ignores them, you leave your most valuable work on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Anchorage',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Anchorage customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search in Alaska — including heating emergency, seismic prep, and permafrost foundation content that earns links and brings in leads." },
      { name: 'Link building', desc: "Authority from real Alaska and industry sources. In a market this specialized, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Anchorage neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating, pipe freeze, post-earthquake, and summer renovation searches that drive Anchorage's highest-value work — so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Anchorage leads — including the seasonal and emergency terms that matter most here." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including Alaska-specific heating, seismic, and permafrost foundation topics." },
      { name: 'Build authority', desc: "Links and citations from trusted Alaska and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Anchorage SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Anchorage neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Anchorage search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-area coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Anchorage?', a: "Most Anchorage SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Anchorage?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads in Anchorage?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Anchorage, the most valuable SEO advantage is being ranked before a demand surge hits — heating emergencies, post-earthquake repairs — when ads would take days to spin up and the homeowner needs help now." },
      { q: 'Should my Anchorage SEO target seasonal and emergency demand?', a: "Absolutely. When temperatures drop to -30°F, searches for heating repair, furnace failure, and frozen pipes spike overnight. A magnitude 7 earthquake sends a wave of foundation and structural repair searches. The summer renovation season is only 8 to 10 weeks long. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Anchorage areas do you cover?', a: "All of Anchorage and surrounding communities — Midtown, Spenard, South Anchorage, Eagle River, Chugiak, Downtown, Mountain View, Muldoon, Abbott Loop, Girdwood — plus the Mat-Su Valley including Wasilla and Palmer, with genuine local pages rather than one generic Anchorage page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Anchorage Web Design Company | OnwardCraft',
    metaDescription:
      'Anchorage web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in an extreme-climate, oil-economy market.',
    eyebrow: 'Web Design · Anchorage, Alaska',
    h1: 'Anchorage web design that turns visitors into booked jobs',
    h2Exact: 'Anchorage Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Anchorage contractors fast, mobile-first sites engineered to turn visitors into booked work — designed for a market where emergencies happen at 3 a.m. in January and homeowners need to make a decision fast.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Anchorage contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that speaks to -30°F winters or post-earthquake repairs. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Eagle River-to-Girdwood visitors into booked jobs — designed specifically for a market where trust and urgency mean everything.",
    aioQuestion: 'What makes a good contractor website in Anchorage?',
    aioAnswer:
      "A good Anchorage contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Anchorage neighborhoods you serve. Because most Anchorage searches happen during emergencies — heating failures, burst pipes, post-earthquake damage — an obvious phone number and a clear statement of emergency availability are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor — and when it's a heating emergency in January, a homeowner will call whoever makes it easiest. We design every page around one job: turning a visitor into a booked lead, fast." },
      { title: "It's too slow on a phone", body: "Most of your Anchorage visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to Anchorage", body: "An Anchorage homeowner wants to see you serve their neighborhood and understand Alaska conditions — not a generic page that could be any contractor anywhere. We build sites that name the areas you work and speak to the real concerns: extreme cold, earthquake prep, Alaska-specific construction. That's what builds the trust that books the job." },
    ],
    servicesHeading: "What's in an OnwardCraft Anchorage website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Anchorage neighborhoods, and the Alaska-specific jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Anchorage traffic is — and where homeowners call you from in an emergency." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, and the phone number is impossible to miss." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners dealing with Anchorage winters, earthquake prep, or a tight summer renovation window — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Alaska-specific neighborhood pages', desc: "Pages built around the Anchorage neighborhoods and communities you serve, with content that reflects real Alaska conditions — so you stand out instead of blending into a generic contractor site.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Anchorage neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — whether that's winter emergency calls, summer renovations, or seismic retrofit projects." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Anchorage web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Alaska-specific neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Anchorage?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site work for emergency calls at 3 a.m.?', a: "That's exactly what we design for. The phone number is prominent on every page, the site loads fast even on older phones, and the messaging makes it immediately clear you handle Anchorage emergency work. When someone's heat goes out at -30°F, you want to be the easiest contractor to call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Anchorage terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Anchorage traffic comes from — and because homeowners in an emergency are calling from their phones, not their laptops." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Anchorage contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Anchorage Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Anchorage website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in an extreme-climate.',
    eyebrow: 'Website Redesign · Anchorage, Alaska',
    h1: 'Redesign your Anchorage website without losing your rankings',
    h2Exact: 'Anchorage Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, nothing that speaks to Anchorage winters or earthquake prep. We redesign Anchorage contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Anchorage contractor sites for speed and conversions, build them to speak to the real concerns of Alaska homeowners, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and in Anchorage, that means capturing more of the heating emergency and seasonal renovation searches that drive the highest-value work.",
    problemHeading: "Signs your Anchorage site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Anchorage homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In a market where oil-economy households have real budgets and high expectations, first impressions matter." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing visitors before they ever see your offer — including homeowners searching from their phones during a heating emergency at midnight. A redesign built mobile-first wins them back." },
      { title: "It doesn't speak to Alaska", body: "A generic contractor site could be from anywhere. Anchorage homeowners want to see you understand their conditions — brutal winters, earthquake risk, permafrost foundations, a short renovation season. A redesign that speaks to real Alaska concerns and names the neighborhoods you serve books more work than one that doesn't." },
    ],
    servicesHeading: "What's in an OnwardCraft Anchorage redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs — and for the emergency calls that happen at any hour in Anchorage." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Anchorage traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of Alaska homeowners with real budgets." },
      { name: 'Alaska-specific neighborhood rebuild', desc: "Rebuilt around the Anchorage communities you serve, with content that reflects real Alaska conditions — extreme cold, seismic risk, permafrost construction — so the new site stands out and builds trust.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — and specifically addresses the Alaska-market angles that matter most." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Anchorage redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Anchorage contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Alaska-specific neighborhood rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Anchorage?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't speak to Alaska conditions, isn't bringing in leads, or blends into the crowd of generic contractor sites, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Anchorage?', a: "Yes, and that's the point. We rebuild around the Anchorage neighborhoods you serve, speak to the real concerns of Alaska homeowners — extreme cold, earthquake prep, a short renovation season — keep the site fast, and make the offer and call button obvious. The new site works harder for you than the old one." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just a plan." },
    ],
  },
];

export const anchorageCity = {
  citySlug: 'anchorage', city: 'Anchorage', state: 'Alaska', stateAbbr: 'AK', metro: 'Anchorage',

  titleTag: 'Anchorage Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Anchorage contractors. Get found during winter emergencies, renovation season, and year-round — own your leads instead.',

  eyebrow: 'Anchorage · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Anchorage contractors found and booked',
  h2Exact: 'Anchorage Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Anchorage's extreme-climate, oil-economy, military market. One team to get you ranking before heating season, converting year-round, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Alaska-specific targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Anchorage audit',

  intro:
    "If you run a contracting business in Anchorage, you're operating in one of the most demanding markets in North America. Winters drop to -40°F, the ground shakes with major earthquakes, the summer renovation window is only 8 to 10 weeks long, and a large military population at JBER has no local network — they go straight to Google. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods and emergencies you serve. Here's how we help Anchorage contractors do exactly that.",
  aioQuestion: 'How do Anchorage contractors get more leads online?',
  aioAnswer:
    "Anchorage contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because the market is urgency-driven — heating emergencies in brutal winters, post-earthquake repairs, a short renovation season — and includes a large military population relying entirely on Google, the contractors who rank before demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Anchorage searches \"near me.\" The single highest-return move for most local contractors — essential when a heating failure at -30°F means homeowners call whoever ranks first.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the high-intent keywords your Anchorage customers search — heating emergency, seismic retrofit, summer renovation — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built for Anchorage contractors — designed for emergency calls at 3 a.m. in January, not just brochures that sit there while competitors answer the phone.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site to speak to Alaska conditions, load fast on any device, and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Anchorage?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads through Anchorage's winter emergencies, earthquake repair waves, and summer renovation season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, electrical, restoration, seismic retrofit, and general contractors — so we understand Anchorage heating emergencies, Alaska-specific construction like permafrost pilings, and the short summer renovation window." },
    { q: 'Why does the Anchorage market need a different approach?', a: "Anchorage is shaped by forces no other U.S. market has: winters that turn heating failures into survival emergencies, major earthquakes that create sudden demand for structural repair, a short renovation season, and a large military population with no local contractor network. Winning here means ranking before demand spikes and showing up with messaging that speaks to real Alaska conditions." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Anchorage areas do you serve?', a: "All of Anchorage and surrounding communities — Midtown, Spenard, South Anchorage, Eagle River, Chugiak, Downtown, Mountain View, Muldoon, Girdwood — plus the Mat-Su Valley including Wasilla and Palmer." },
    { q: 'Where should I start?', a: "Start with a free Anchorage audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — whether that's capturing the next heating season, the summer renovation rush, or year-round earthquake prep searches. No pitch deck, just a plan." },
  ],
};

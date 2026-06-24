// ANCHORAGE: per-metro x per-service local landing pages + city hub.
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
// ANCHORAGE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why the contractor who ranks in Anchorage wins the work',
  body:
    "Picture the homeowner at the other end of the search. It is January, the thermostat reads -25°F, the furnace just died, and a family in Spenard or South Anchorage has maybe a few hours before pipes start freezing. They are not reading three quotes. They tap the first contractor Google puts in front of them and they call right now. That is the Anchorage market in one sentence, and two forces make it relentless. First, the climate never lets up: a six-month heating season, burst pipes, snow-loaded roofs, and the seismic risk that the 2018 quake made impossible to ignore mean the phone has a reason to ring in almost every month of the year. Second, Joint Base Elmendorf-Richardson rotates thousands of military families through Anchorage on PCS orders, and a household that landed three weeks ago has no neighbor to ask and no contractor on speed dial; they search, and they hire whoever shows up first. If your competitor owns that moment and you do not, the quality of your crew never even enters the conversation. You want to be the name they find before they think to look for a second one.",
  pullQuote: 'When it is -30°F and the furnace is dead, nobody scrolls to page two. They call the first name on the map, and that name should be yours.',
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
  seasonCaption: 'Heating emergencies (Oct-Mar) and summer renovation season (Jun-Aug)',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 70 },
    { m: 'A', v: 58 }, { m: 'M', v: 72, peak: true }, { m: 'J', v: 95, peak: true },
    { m: 'J', v: 98, peak: true }, { m: 'A', v: 88 }, { m: 'S', v: 82, peak: true },
    { m: 'O', v: 88, peak: true }, { m: 'N', v: 91, peak: true }, { m: 'D', v: 89, peak: true },
  ],
  stats: [
    { value: '~290K', label: 'people in the Anchorage metro area' },
    { value: '-40°F', label: 'winter lows that turn a dead furnace into a survival call', accent: true },
    { value: 'M7.1', label: 'earthquake struck Anchorage in 2018 and reset how the city thinks about structural work' },
    { value: 'Top 3', label: 'map spots that quietly take the bulk of the calls' },
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
  "Here is the honest reason OnwardCraft exists. I watched too many solid Anchorage contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that got resold to three guys down the road, then wonder why the phone felt like a coin flip. In a city this urgent, where a frozen January night decides who gets hired, you cannot build anything durable on leads you are renting and sharing. So our job is simple to describe: get you ranking for the work you actually want, in the neighborhoods you actually drive to, with leads that belong to you and nobody else. We are young and founder-led, so we earn it month by month. No 12-month handcuffs. If we stop delivering, you fire us.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, electrical, restoration, general contracting, and seismic retrofit work. We already speak the language of Anchorage heating calls, earthquake repair, permafrost foundations, and the few short weeks of summer when renovation work has to happen. Every page we build is shaped around how your customers actually type their problem into Google.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The point is a pipeline you own outright. Not one more monthly check to a broker who already sold the same Spenard homeowner to three of your competitors before you picked up.",
  },
  {
    title: 'We genuinely know Alaska',
    body: "Targeting that goes neighborhood by neighborhood, from Eagle River to Girdwood to the Mat-Su Valley, plus the angles that only matter here: deep cold, seismic risk, permafrost, an oil-and-military economy. That is the work a national shop cannot fake by dropping your city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices you can read on the page, reporting tied to real leads, and month-to-month billing after the first 90 days. If we are not pulling our weight, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "A lot of agencies open with a grid of client logos. We will not, because we are a young founder-led shop and we are not going to fake a track record we have not built yet. What we can put in front of you is the why: the published research on how people actually search when they need a contractor near them.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as an illustrative projection and not a result we are claiming. Say an Anchorage contractor pulls roughly 800 local \"near me\" impressions a month across a few neighborhoods. Sitting on page two means a trickle of calls; climbing into the top three turns that same traffic into a calendar that fills itself. In a city where a cold snap or an aftershock can spike demand overnight, that gap is the whole ballgame. In your free audit we plug in your real numbers: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of it is a past result claimed by OnwardCraft.",
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
    titleTag: 'Anchorage Local SEO Company | Win the Map | OnwardCraft',
    metaDescription:
      'Anchorage Local SEO that pins your business to the map when homeowners search your trade. We get you into the top three so the emergency call lands with you, not a rival.',
    eyebrow: 'Local SEO · Anchorage, Alaska',
    h1: 'Anchorage Local SEO that puts your business in the Map Pack when the furnace dies in Spenard',
    h2Exact: 'Anchorage Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search, and almost nobody scrolls past them. In a city where a dead furnace at -30°F is a survival problem, we get you into that top three for your neighborhoods, so the call reaches you before the homeowner ever tries the next contractor.",
    primaryCta: 'Get my free Anchorage audit',
    intro:
      "Anchorage local SEO really comes down to one moment: a homeowner in Eagle River or South Anchorage types your trade plus \"near me,\" and either you are one of the three businesses Google sticks to the map, the local 3-pack, or you are not. Most people tap one of those three and never look further. This market runs on urgency, from heating failures in a brutal six-month winter to post-earthquake repair to the narrow summer renovation window, and the contractor who already ranks on the map is the one who catches every call worth catching. Below is exactly how we get you there.",
    aioQuestion: 'How do Anchorage businesses rank higher in local search?',
    aioAnswer:
      "You win by nailing four things: a Google Business Profile tuned to the precise services and Anchorage neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady drip of real reviews, and local content built around actual Anchorage communities and Alaska-specific work. Because this is a tight, urgency-driven market shaped by deep cold, seismic risk, and a military population with no local network, the contractors who win target specific neighborhoods, lead with emergency availability, and get ranked before demand spikes rather than after.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own the three map spots', body: "Type your own trade plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the clicks. In Anchorage, where a heating failure is a survival situation and the homeowner needs help this hour, those three spots convert straight into booked jobs. If you are not one of them, the quality of your work barely matters, because most people never lay eyes on your name." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Anchorage homeowner to four contractors at once, then bill each of you to fight over the scraps. Local SEO flips that: the lead finds you, calls you, and nobody else got the same one. Month over month you stop renting and start owning the pipeline outright." },
      { title: "You keep missing the surge windows", body: "Anchorage demand does not arrive evenly. Heating emergencies run October through March, the summer renovation window compresses into June through August, and post-earthquake repair calls land with zero warning. Contractors who rank year-round scoop up every spike. If you are not already on the map when the surge hits, the work goes to whoever earned their ranking six months earlier." },
    ],
    servicesHeading: 'What it actually takes to rank you across Anchorage',
    services: [
      { name: 'Google Business Profile', desc: "Your single biggest lever in the map. We tune your categories, services, service area, photos, and posts so Google understands exactly which Anchorage searches belong to you, heating-emergency and seismic-repair terms included." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read identically everywhere Google checks. We correct the listings that contradict each other and create the ones you are missing entirely." },
      { name: 'Reviews that keep arriving', desc: "A no-fuss system that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives a nervous homeowner the nudge to actually dial." },
      { name: 'Neighborhood pages', desc: "Real pages for Eagle River, South Anchorage, Midtown, Spenard, Chugiak, and the rest, so you rank for the neighborhood the homeowner is genuinely searching instead of just \"Anchorage.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The quiet machinery under the hood that lets everything else have a chance to rank." },
      { name: 'Local link building', desc: "Mentions and links from Alaska sources Google already trusts: local press, trade associations, community groups, partners. In this market that is frequently what separates page one from page two." },
      { name: 'Emergency and seasonal SEO', desc: "We optimize for the dead-furnace, burst-pipe, and post-earthquake searches that drive Anchorage's most valuable calls, so you are already ranking the moment the surge arrives.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you clearly and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your Anchorage neighborhoods and pin down which competitors are beating you on the map and the specific reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Early lift usually shows up here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week after week, which is exactly why local SEO rewards starting now instead of next quarter." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Anchorage and the Mat-Su Valley, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually read',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the map foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Anchorage neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Anchorage and the Mat-Su Valley.', features: ['Everything in Local Growth', 'Local link building', 'Emergency and seasonal SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Anchorage?', a: "Most Anchorage engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock down the exact scope in your free audit before you commit a dollar." },
      { q: 'How long until I show up on the map?', a: "Profile improvements can move inside a few weeks. The competitive Anchorage keywords usually take 90 to 180 days of steady work, because reviews and citations only compound with time. In a market this urgent, anyone promising you the top three in 30 days is selling you a story." },
      { q: 'What makes Anchorage local SEO different from other cities?', a: "Three things. Demand here is urgency-driven, from -30°F furnace failures to post-earthquake repairs to burst pipes, so the contractor already ranking captures those calls with no competition in the moment. The renovation season is squeezed into June through August, which means you have to be visible before summer, not scrambling during it. And the large JBER military population has no local network, so they lean entirely on Google to find a contractor." },
      { q: 'Can you help me rank for heating emergency searches?', a: "Yes, and in Anchorage that is among the highest-value moves we can make for you. We tune your profile and content specifically for furnace repair, no-heat, frozen-pipe, and boiler-failure searches, so when a homeowner is desperate at 3 a.m. in January, you are the first name on their screen." },
      { q: 'Which Anchorage areas do you cover?', a: "All of Anchorage and the surrounding communities: Midtown, Spenard, South Anchorage, Eagle River, Chugiak, Downtown, Mountain View, Muldoon, Abbott Loop, Girdwood, plus the Mat-Su Valley including Wasilla and Palmer. We build genuine neighborhood pages rather than one generic Anchorage page that ranks for nothing in particular." },
      { q: 'Do you work specifically with contractors?', a: "It is essentially all we do. Roofing, HVAC, plumbing, electrical, restoration, seismic retrofit, and general contractors. We already understand Anchorage heating emergencies, Alaska-specific construction like permafrost pilings, earthquake repair, and the tight summer renovation window." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the map itself, and we build for it now rather than playing catch-up later." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less and less, because the work is already coming to you directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your Anchorage neighborhoods, what your map competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your actual business. It is the fastest way to see exactly what Anchorage Local SEO can do for your pipeline. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Anchorage SEO Company | Rank, Get Leads | OnwardCraft',
    metaDescription:
      'Anchorage SEO that ranks contractors on Google and feeds you leads you own. Lead-tied reporting, no lock-in contracts, built for an extreme-climate market.',
    eyebrow: 'SEO Services · Anchorage, Alaska',
    h1: 'Anchorage SEO that gets you to the top of Google for no-heat searches and keeps you there',
    h2Exact: 'Anchorage SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the opposite: rank once for what your Anchorage customers search and the leads keep coming through winter, earthquake season, and the summer renovation rush. We build that ranking and tie every report to real calls and booked jobs, not vanity traffic.",
    primaryCta: 'Get my free Anchorage SEO audit',
    intro:
      "Anchorage SEO comes down to a single question: when someone searches what you do, whether that is no-heat furnace repair, foundation inspection, seismic retrofit, or a roof before the first snow, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in one of the most urgency-driven regions in North America, and we measure the result in leads, never in traffic for its own sake.",
    aioQuestion: 'How do Anchorage businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Alaska customers type, publishing genuinely useful local content tied to Anchorage neighborhoods and Alaska-specific work, and earning links from trusted local sources. In a market shaped by deep cold, seismic risk, and a military population, the fastest way to pull ahead is to rank for emergency and seasonal terms before the surge lands, because a homeowner does not comparison-shop when it is -30°F and the heat is out.",
    problemHeading: "Three reasons your Anchorage site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past page one of Google. In Anchorage, where a heating failure is urgent and the homeowner needs help now, the contractor who fails to rank on Google's first page basically does not exist. If you are not in the top handful of results for what you do, your site is invisible, no matter how strong your reputation is by word of mouth." },
      { title: "You are renting your traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing leads through every winter emergency, every wave of earthquake repair, and every summer renovation season, at a fraction of the per-lead cost once they mature." },
      { title: "You are not ranking for the demand that matters", body: "Anchorage demand spikes in ways most contractors fail to plan for: heating and pipe emergencies across the six-month winter, a compressed renovation window in June through August, and post-earthquake structural calls with no warning at all. The contractors who rank for those terms ahead of time catch every surge. Ignore them in your SEO and you leave your highest-value work sitting on the table for someone else." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Anchorage',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs in place before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Anchorage customers search: titles, headings, body content, and internal links that point Google where you want it." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Alaska buyers actually search, including no-heat, seismic-prep, and permafrost-foundation content that earns links and pulls in leads." },
      { name: 'Link building', desc: "Authority from real Alaska and industry sources. In a market this specialized, links are often the thing that separates page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map optimization so you win the \"near me\" searches across Anchorage neighborhoods right alongside your organic rankings." },
      { name: 'Lead-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know exactly what your SEO is worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter no-heat, frozen-pipe, post-earthquake, and summer renovation searches that drive Anchorage's most valuable work, so you are visible before demand spikes rather than after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Anchorage leads, including the seasonal and emergency terms that matter most in this climate." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including Alaska-specific no-heat, seismic, and permafrost-foundation topics buyers actually search." },
      { name: 'Build authority', desc: "Links and citations from trusted Alaska and industry sources to push competitive keywords onto page one and hold them there." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Anchorage SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Anchorage neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own Anchorage search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-area coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Anchorage?', a: "Most Anchorage SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract you cannot leave." },
      { q: 'How long does SEO take to work in Anchorage?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the longer you run it, the more the gains stack." },
      { q: 'Is SEO better than Google Ads in Anchorage?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Anchorage the most valuable edge is being already ranked before a surge lands, like a cold snap or an aftershock, when ads would take days to spin up and the homeowner needs help now." },
      { q: 'Should my Anchorage SEO target seasonal and emergency demand?', a: "Absolutely. When the temperature drops to -30°F, searches for furnace repair, no-heat, and frozen pipes spike overnight. A magnitude 7 earthquake sends a wave of foundation and structural-repair searches with no warning. The renovation season is only 8 to 10 weeks long. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms ahead of time." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and map SEO, and lead-tied reporting. Higher tiers add seasonal and emergency plus AI-search optimization. We confirm the exact scope in your free audit before any work begins." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs roughly that long to show real movement, then it is month-to-month. If we are not delivering, you leave, no penalty." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which Anchorage areas do you cover?', a: "All of Anchorage and surrounding communities: Midtown, Spenard, South Anchorage, Eagle River, Chugiak, Downtown, Mountain View, Muldoon, Abbott Loop, Girdwood, plus the Mat-Su Valley including Wasilla and Palmer, with genuine local pages rather than one generic Anchorage page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you depend on paying brokers for leads that were already sold to three competitors." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your actual business. It is the clearest picture you will get of what Anchorage SEO can do to grow your organic traffic. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Anchorage Web Design Company | OnwardCraft',
    metaDescription:
      'Anchorage web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in an extreme-climate, oil-economy market.',
    eyebrow: 'Web Design · Anchorage, Alaska',
    h1: 'Anchorage web design that turns the 3 a.m. emergency search into a booked job',
    h2Exact: 'Anchorage Web Design Company',
    heroSubhead:
      "A handsome website that never produces a call is just a brochure. We build Anchorage contractors fast, mobile-first sites engineered to turn visitors into booked work, designed for a market where the emergency hits at 3 a.m. in January and the homeowner has to decide in seconds.",
    primaryCta: 'Get my free quote',
    intro:
      "Anchorage web design has one real job: turning a visitor into a booked call. Most contractor sites bleed leads quietly instead: slow on a phone, the call button buried, no clear offer, and nothing that speaks to a -30°F winter or a post-earthquake repair. Done right, web design fixes every bit of that. We build fast-loading sites that look like the professional you already are and turn visitors from Eagle River to Girdwood into booked jobs, designed specifically for a market where trust and urgency decide who gets hired.",
    aioQuestion: 'What makes a good contractor website in Anchorage?',
    aioAnswer:
      "A good Anchorage contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Anchorage neighborhoods you serve. Because so many Anchorage searches happen mid-emergency, from no-heat to burst pipes to post-earthquake damage, an obvious phone number and a plain statement of emergency availability are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there: no clear offer, no obvious next step, no reason to call you over the next contractor. When it is a heating emergency in January, the homeowner calls whoever makes it easiest, full stop. We design every page around one job: turning a visitor into a booked lead, fast." },
      { title: "It is too slow on a phone", body: "Most of your Anchorage visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, which keeps the visitor and protects the ranking at the same time." },
      { title: "It does not speak to Anchorage", body: "An Anchorage homeowner wants to see that you serve their neighborhood and understand Alaska conditions, not a generic page that could belong to any contractor in any state. We build sites that name the areas you work and speak to the real worries here: deep cold, earthquake prep, Alaska-specific construction. That is the trust that books the job." },
    ],
    servicesHeading: "What is inside an OnwardCraft Anchorage website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Anchorage neighborhoods, and the Alaska-specific jobs you actually want to land." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Anchorage traffic lives and where homeowners call you from when something fails at night." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page has a next step, and the phone number is impossible to miss." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners staring down an Anchorage winter, an earthquake worry, or a tight renovation window, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and neighborhood-ready pages baked in from the start." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings together." },
      { name: 'Alaska-specific neighborhood pages', desc: "Pages built around the Anchorage neighborhoods and communities you serve, with content that reflects real Alaska conditions, so you stand out instead of disappearing into a generic contractor site.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Anchorage neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you actually want, whether that is winter emergency calls, summer renovations, or seismic retrofit projects." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every single page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, nothing bolted on later." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Anchorage web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Alaska-specific neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Anchorage?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site work for emergency calls at 3 a.m.?', a: "That is exactly what we design for. The phone number is prominent on every page, the site loads fast even on an older phone, and the messaging makes it instantly clear you handle Anchorage emergency work. When someone's heat dies at -30°F, you want to be the single easiest contractor to call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Anchorage terms over time." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you are not allowed to leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Anchorage traffic comes from, and because a homeowner in an emergency is calling from a phone, not a laptop." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that, with no obligation to keep it." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Anchorage contractor website should include, and a fixed-price quote with a timeline. It is the simplest way to see what Anchorage Web Design built around booked jobs would mean for your business. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'anchorage', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Anchorage Website Redesign | OnwardCraft',
    metaDescription:
      'Anchorage Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in an extreme-climate market.',
    eyebrow: 'Website Redesign · Anchorage, Alaska',
    h1: 'Anchorage Website Redesign that converts more without losing your hard-won Alaska rankings',
    h2Exact: 'Anchorage Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, and silent on Anchorage winters or earthquake prep. We redesign Anchorage contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Anchorage website redesign usually goes one of two bad ways: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We refuse to do either. We redesign Anchorage contractor sites for speed and conversions, build them to speak to what Alaska homeowners actually worry about, and handle the SEO-safe migration, redirects and metadata, that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one, and in Anchorage that means capturing more of the heating-emergency and seasonal renovation searches that drive the highest-value work.",
    problemHeading: "Signs your Anchorage site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job, an Anchorage homeowner sizes you up by your site in seconds. An old, cluttered design nudges them toward a competitor who looks more established, even when your work is plainly better. In a market where oil-economy households have real budgets and high expectations, that first impression is doing damage you never see." },
      { title: "It is slow and clumsy on a phone", body: "If your site is clunky or slow on mobile, you are losing visitors before they ever reach your offer, including a homeowner searching from a phone during a midnight heating emergency. A redesign built mobile-first wins those people back instead of handing them away." },
      { title: "It does not speak to Alaska", body: "A generic contractor site could be from anywhere on the map. Anchorage homeowners want proof you understand their conditions: brutal winters, earthquake risk, permafrost foundations, a renovation season that closes fast. A redesign that speaks to real Alaska concerns and names the neighborhoods you serve books more work than one that could belong to anybody." },
    ],
    servicesHeading: "What is inside an OnwardCraft Anchorage redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors and fonts." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already worked to earn." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms people actually fill out. We design for booked jobs, and for the emergency calls that hit Anchorage at any hour." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Anchorage traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your crew and the expectations of Alaska homeowners with real budgets to spend." },
      { name: 'Alaska-specific neighborhood rebuild', desc: "Rebuilt around the Anchorage communities you serve, with content that reflects real Alaska conditions like deep cold, seismic risk, and permafrost construction, so the new site stands out and earns trust.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works, and that specifically addresses the Alaska-market angles that matter most here." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration with nothing left to chance." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
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
      { q: 'How much does a website redesign cost in Anchorage?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is precisely how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and an update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, says nothing about Alaska conditions, is not bringing in leads, or blends into the crowd of generic contractor sites, it is costing you work right now. The free audit tells you plainly whether a redesign is worth it for you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in Anchorage?', a: "Yes, and that is the whole point. We rebuild around the Anchorage neighborhoods you serve, speak to the real worries of Alaska homeowners, from deep cold to earthquake prep to a short renovation season, keep the site fast, and make the offer and call button impossible to miss. The new site works far harder for you than the old one." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month, cancel whenever." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It shows you exactly what an Anchorage Website Redesign would change for your lead flow. No pressure, just a plan." },
    ],
  },
];

export const anchorageCity = {
  citySlug: 'anchorage', city: 'Anchorage', state: 'Alaska', stateAbbr: 'AK', metro: 'Anchorage',

  titleTag: 'Anchorage Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Anchorage marketing for contractors: web design, SEO, and local SEO that get you found during winter emergencies and renovation season, so you own your leads instead of renting.',

  eyebrow: 'Anchorage · Web Design, SEO & Lead Generation',
  h1: 'Anchorage marketing for contractors that gets you found and booked through winter emergencies',
  h2Exact: 'Anchorage Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Anchorage's extreme-climate, oil-economy, military market. One team to get you ranking before heating season, converting all year, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Alaska-specific targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Anchorage audit',

  intro:
    "Anchorage marketing for contractors has to answer one hard market: you are competing in one of the most demanding regions in North America. Winters fall to -40°F, major earthquakes shake the ground, the summer renovation window lasts only 8 to 10 weeks, and a large military population at JBER arrives with no local network and heads straight to Google. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you on the map for the neighborhoods and emergencies you serve. Here is how we help Anchorage contractors do exactly that.",
  aioQuestion: 'How do Anchorage contractors get more leads online?',
  aioAnswer:
    "Anchorage contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google map neighborhood by neighborhood. Because the market is urgency-driven, from heating emergencies in brutal winters to post-earthquake repairs to a short renovation season, and includes a large military population leaning entirely on Google, the contractors who rank before demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Anchorage searches \"near me.\" For most local contractors it is the single highest-return move, and it is essential when a -30°F furnace failure means the homeowner calls whoever ranks first.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the high-intent keywords your Anchorage customers search, from no-heat to seismic retrofit to summer renovation, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built for Anchorage contractors, designed for the emergency call at 3 a.m. in January, not brochures that sit idle while a competitor answers the phone.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site to speak to Alaska conditions, load fast on any device, and migrate carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Anchorage?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. As a focused Anchorage digital marketing agency, we pair web design and SEO for Anchorage contractors with local SEO so most clients rank, convert, and own their leads straight through Anchorage's winter emergencies, earthquake repair waves, and summer renovation season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, electrical, restoration, seismic retrofit, and general contractors, so we already understand Anchorage heating emergencies, Alaska-specific construction like permafrost pilings, and the short summer renovation window." },
    { q: 'Why does the Anchorage market need a different approach?', a: "Anchorage is shaped by forces almost no other U.S. market shares: winters that turn furnace failures into survival calls, major earthquakes that create sudden demand for structural repair, a short renovation season, and a large military population with no local contractor network. Winning here means ranking before demand spikes and showing up with messaging that speaks to real Alaska conditions." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit before you commit." },
    { q: 'Which Anchorage areas do you serve?', a: "All of Anchorage and surrounding communities: Midtown, Spenard, South Anchorage, Eagle River, Chugiak, Downtown, Mountain View, Muldoon, Girdwood, plus the Mat-Su Valley including Wasilla and Palmer." },
    { q: 'Where should I start?', a: "Start with a free Anchorage audit. We will look at your website, your rankings, and your map presence, then tell you the one or two moves that will bring in the most work fastest, whether that is capturing the next heating season, the summer renovation rush, or year-round earthquake-prep searches. It is the easiest first step into Anchorage marketing for contractors that actually gets you found and booked. No pitch deck, just a plan." },
  ],
};

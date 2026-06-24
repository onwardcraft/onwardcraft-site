// JACKSONVILLE: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Jacksonville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// JACKSONVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why getting found in Jacksonville is its own animal',
  body:
    "No city in the lower 48 sprawls like Jacksonville. Almost 875 square miles of it, stretching from the barrier islands to St. Johns County, which means the homeowner in Mandarin and the homeowner in Riverside are not typing the same thing into Google, and a roofing crew chasing work in Nocatee is fighting over completely different keywords than one chasing work in Atlantic Beach. Now layer on the weather. This is one of the busiest hurricane corridors on the East Coast (Dorian came within a whisker of a direct hit in 2019), so storm prep, roof repair, and water restoration demand can go from quiet to frantic in a single forecast. The subtropical humidity does the slower damage, wearing out HVAC units, roofing, and siding faster than almost any climate in the country, which is why the busy stretch from May through November never really lets up. There is also the military piece: NAS Jacksonville and Naval Station Mayport rotate families through every couple of years, and those new arrivals know nobody and find their contractor entirely through search. So when the next storm warning posts and those families start dialing, the contractors already sitting at the top of the results are the ones who fill the calendar.",
  pullQuote: 'Jacksonville covers 875 square miles. The contractor who owns their corner of the map, Mandarin, Riverside, or Ponte Vedra, owns the work in that corner.',
  donut: {
    title: 'How Jacksonville searches',
    value: 68,
    centerLabel: 'searches on mobile',
    legend: [
      { label: 'Mobile searches', pct: 68, kind: 'teal' },
      { label: 'Desktop & tablet', pct: 32, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane and storm season (Jun-Nov) plus the HVAC heat spike (May-Sep)',
  seasonalDemand: [
    { m: 'J', v: 42 }, { m: 'F', v: 44 }, { m: 'M', v: 52 },
    { m: 'A', v: 58 }, { m: 'M', v: 78, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 92, peak: true },
    { m: 'S', v: 85, peak: true }, { m: 'O', v: 75, peak: true },
    { m: 'N', v: 62, peak: true }, { m: 'D', v: 44 },
  ],
  stats: [
    { value: '875 sq mi', label: 'the largest city by land area in the contiguous US, so naming the right neighborhood matters more here than almost anywhere' },
    { value: 'Jun-Nov', label: 'hurricane season, when roofing and restoration calls can explode on a single forecast', accent: true },
    { value: 'May-Sep', label: 'the HVAC peak, as subtropical heat and humidity push every system to its limit' },
    { value: 'Top 3', label: 'the Map Pack spots that soak up most of the clicks in a market spread this thin' },
  ],
  neighborhoods: [
    'Riverside', 'Avondale', 'Mandarin', 'San Marco', 'Southside',
    'Baymeadows', 'Fleming Island', 'Orange Park', 'Ponte Vedra Beach',
    'Atlantic Beach', 'Neptune Beach', 'Nocatee', 'Town Center', 'Arlington',
  ],
};

const AREAS = [
  'Riverside', 'Avondale', 'Mandarin', 'San Marco', 'Southside',
  'Baymeadows', 'Fleming Island', 'Orange Park', 'Ponte Vedra Beach',
  'Atlantic Beach', 'Neptune Beach', 'Nocatee', 'Town Center', 'Arlington',
  'St. Johns County', 'Jacksonville Beach',
];

const FOUNDER =
  "Let me be honest with you about why OnwardCraft exists. I got tired of watching solid contractors wire Angi and HomeAdvisor a few thousand dollars a month for the same leads three of their competitors already bought. That is not a business you own, it is rent you pay forever. And Jacksonville does not need that game. This is one of the fastest-growing Sun Belt markets anywhere, HVAC season runs a full six months, and hurricane prep keeps roofing crews moving all year. Real demand is already here. Our entire job is to get you ranking for it and to make those leads yours, the kind that call you and only you. No 12-month handcuffs. If we are not earning it, you fire us.";

const WHY = [
  {
    title: 'The trades are all we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We get the hurricane-season rush, the humidity that chews through equipment, and the constant flow of military families who land here and need a contractor yesterday. Every page we build is shaped around how those Jacksonville homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole point is a pipeline that belongs to you, not one more monthly invoice to a lead broker for a Jacksonville homeowner three of your competitors are also calling right now.",
  },
  {
    title: 'We actually know the geography',
    body: "Mandarin, Riverside, Ponte Vedra, Nocatee, we build targeting block by block across a city so spread out that a single generic 'Jacksonville' page almost never ranks for the searches that pay. That is the part a national shop simply cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no fog',
    body: "Prices on the page, reporting tied to actual leads, month-to-month once the first 90 days are up. If we stop earning your business, you leave. That keeps the pressure exactly where it belongs, on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, so we will not fake a track record we have not built yet. What we can hand you is the reason this works, pulled straight from Google's own data and the industry's research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, and we are labelling it a projection, not a result we are claiming. Say a Jacksonville contractor pulls roughly 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Climbing out of page-two invisibility into the top three is the difference between a few stray calls and a calendar you cannot keep up with. During a hurricane watch or an August heat spike, that gap turns punishing fast. In your free audit we run the actual numbers for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of them are past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Jacksonville', state: 'Florida', stateAbbr: 'FL', metro: 'Jacksonville',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const jacksonvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'jacksonville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Jacksonville Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Jacksonville Local SEO that puts you in the Google Map Pack when neighbors search your trade, neighborhood by neighborhood across 875 square miles.',
    eyebrow: 'Local SEO · Jacksonville, FL',
    h1: 'Jacksonville Local SEO that gets you found when Riverside and Mandarin neighbors search your trade',
    h2Exact: 'Jacksonville Local SEO Company',
    heroSubhead:
      "Search \"near me\" and Google hands you three businesses on the map. Everyone beneath them might as well not exist. In a city as wide as Jacksonville, we put you in that top three for the exact neighborhoods you work, Mandarin, Riverside, Ponte Vedra, wherever your jobs come from, so the call lands on your phone.",
    primaryCta: 'Get my free Jacksonville audit',
    intro:
      "Jacksonville Local SEO really hangs on one question: when a homeowner in Mandarin or Riverside or Ponte Vedra Beach runs a \"near me\" search for your service, are you one of the three businesses in the Google Map Pack? Most people tap one of those three and never scroll. And because this is the largest city by land area in the contiguous US, a single generic 'Jacksonville' page almost never gets there. You have to rank on the map neighborhood by neighborhood, from the barrier islands all the way out to St. Johns County. Here is exactly how that gets done.",
    aioQuestion: 'How do Jacksonville businesses rank higher in local search?',
    aioAnswer:
      "It comes down to four things done right: a Google Business Profile tuned for the exact services and neighborhoods you want; a name, address, and phone that match everywhere across the web; a steady flow of real reviews; and local content built around the actual Jacksonville neighborhoods your customers live in. Because the city sprawls across 875 square miles, two of the fastest ways to leapfrog competitors running one generic page are tight neighborhood targeting (Mandarin versus Riverside versus Nocatee) and ranking for storm and HVAC demand before it spikes.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors own the three map spots', body: "Pull up your own service plus \"near me\" right now. Those three businesses Google pins to the map? They scoop up the lion's share of the clicks. If you are not one of them in the neighborhoods you actually serve, the quality of your work barely registers, because most people never see your name in the first place. Cracking that top three for Mandarin, Riverside, Ponte Vedra, or wherever your jobs originate is usually the single biggest-return move a Jacksonville contractor can make." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Jacksonville homeowner to four contractors, then charge each of you to scrap over them. That is a treadmill, not a pipeline. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got the same one. Month over month you stop renting and start owning the flow." },
      { title: "You disappear right when demand peaks", body: "Hurricane season runs June through November, and Jacksonville sits dead center in the Atlantic storm track (Dorian nearly scored a direct hit in 2019). HVAC demand surges from May through September as the subtropical heat bears down. Whoever is already ranking when a storm watch posts or a heat wave settles in books the rush. If you are not visible before it lands, you stay invisible all the way through it." },
    ],
    servicesHeading: 'What it actually takes to rank you here',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Jacksonville searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished Jacksonville jobs into a steady stream of reviews. It lifts your ranking and gets the next homeowner to actually dial." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Mandarin, Riverside, San Marco, Ponte Vedra, Nocatee, and the rest, so you rank for the neighborhood someone is really searching instead of a faceless 'Jacksonville.'" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything above it climb." },
      { name: 'Local link building', desc: "Mentions and links from Jacksonville sources Google trusts: local press, trade associations, homebuilder networks, and partners. In this market that is often the line between page one and page two." },
      { name: 'Storm and seasonal SEO', desc: "We rank you for hurricane prep, storm damage, and emergency HVAC searches before the season arrives, so you catch the surge instead of chasing the tail of it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "First we find out where you genuinely rank today across your Jacksonville neighborhoods, then pin down which competitors are beating you in the Map Pack and the specific reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. You usually see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live next. These compound week over week, which is exactly why starting your Jacksonville campaign now beats starting it later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the communities you cover, plus the on-page work that backs each one up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next Jacksonville neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Jacksonville neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Jacksonville and St. Johns County.', features: ['Everything in Local Growth', 'Local link building', 'Storm and seasonal SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Jacksonville?', a: "Most Jacksonville engagements run between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. Competitive Jacksonville keywords usually take 90 to 180 days of steady effort, because reviews and citations build on each other over time. Anyone promising you page one in 30 days in a market this size is selling you a story." },
      { q: 'What makes Jacksonville local SEO different?', a: "Jacksonville is the largest city by land area in the contiguous US, nearly 875 square miles, so a single generic 'Jacksonville' page almost never ranks. You need targeting block by block across Mandarin, Riverside, Ponte Vedra, Nocatee, and everywhere else your customers live. Stack on a long hurricane season and brutal HVAC demand, and the contractors ranking for neighborhood-specific and storm-related searches are the ones who run away with the market." },
      { q: 'How do you help during hurricane season?', a: "We rank you for storm prep, wind and water damage, roof repair, and emergency HVAC searches before the season opens, so the moment a storm watch posts you are already in the Map Pack for the terms that spike. Being visible ahead of the surge is the whole difference between the contractors buried in calls and the ones who watch the rush pass them by." },
      { q: 'Which Jacksonville areas do you cover?', a: "Riverside, Avondale, Mandarin, San Marco, Southside, Baymeadows, Fleming Island, Orange Park, Ponte Vedra Beach, Atlantic Beach, Neptune Beach, Nocatee, Town Center, Arlington, and the wider St. Johns County suburbs. We build real neighborhood pages instead of one catch-all Jacksonville page, because that is what actually ranks." },
      { q: 'Do you work with military homeowners or near base?', a: "Yes, and it is a real slice of the Jacksonville market. NAS Jacksonville and Naval Station Mayport rotate families through every two to three years. They land new to the area, need a contractor fast, and lean on search to find one. We make sure you are showing up for those searches across the base communities." },
      { q: 'Do you work with contractors specifically?', a: "It is just about all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand the hurricane-season rush, the humidity that wrecks equipment fast, and the year-round new-construction pace out in Nocatee and St. Johns County." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Jacksonville it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO takes to show real movement. After that you are month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: "What is in the free audit?", a: "A clear read on where your Jacksonville Local SEO stands today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'jacksonville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Jacksonville SEO Company | Rank on Google, Own Your Leads | OnwardCraft',
    metaDescription:
      'Jacksonville SEO that ranks contractors on Google for the money keywords and turns organic traffic into booked work. Lead-tied reporting, no lock-in contracts.',
    eyebrow: 'SEO Services · Jacksonville, FL',
    h1: 'Jacksonville SEO that turns organic traffic into booked work before hurricane season hits',
    h2Exact: 'Jacksonville SEO Company',
    heroSubhead:
      "Ads quit the second you quit paying. SEO does the opposite: rank once for what Jacksonville customers search and the leads keep arriving. We build that ranking across a city that runs 875 square miles, and we tie every report back to real calls and real jobs.",
    primaryCta: 'Get my free Jacksonville SEO audit',
    intro:
      "Jacksonville SEO boils down to one question: when someone searches what you do in Mandarin, Riverside, or Ponte Vedra, are you on page one of Google or page two? Page two might as well be page fifty. As a Jacksonville SEO company we get contractors ranking for the money keywords across the largest city by area in the contiguous US, a fast-growing Sun Belt market where storm and HVAC demand turn seasonal visibility into a genuine edge, and we measure all of it in leads rather than vanity organic traffic.",
    aioQuestion: 'How do Jacksonville businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page for the exact terms customers type, publishing genuinely useful local content tied to specific Jacksonville neighborhoods, and earning links from trusted local and industry sources. In a city this geographically large, two of the quickest ways past competitors on one generic page are tight neighborhood targeting (Mandarin, Riverside, Nocatee, Ponte Vedra) and ranking for hurricane-season and HVAC-demand searches before the surge actually hits.",
    problemHeading: "Three reasons your Jacksonville site is not bringing in work",
    painPoints: [
      { title: "You are stuck on page two", body: "Almost nobody clicks past page one of Google, and they rarely scroll deep into it either. In a metro as competitive as Jacksonville, if you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how sharp your work is or how many years your name has been on the truck." },
      { title: "You are renting traffic from Google Ads", body: "Ads can do a job, but the moment your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads for months and years after the work is finished, at a fraction of the cost per lead. In a market growing as fast as Jacksonville, that compounding pays off in a big way." },
      { title: "You are missing the demand that matters most", body: "Jacksonville's two biggest spikes are hurricane season (June through November, all storm damage and roof repair) and HVAC heat (May through September in that thick subtropical humidity). If you are not ranking for those seasonal and emergency searches ahead of time, you are handing away your busiest weeks, and a competitor is taking those calls instead of you." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Jacksonville customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, earn links, and pull in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Jacksonville and industry sources. In a competitive, fast-growing market, links are frequently what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across your Jacksonville neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is actually worth in dollars." },
      { name: 'Storm, seasonal & new-construction SEO', desc: "We rank you for hurricane prep, storm damage, HVAC emergencies, and the steady demand from Nocatee and St. Johns County new builds before the wave breaks.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, in the place a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Jacksonville leads, not just clicks." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation everything else has to stand on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm-season, HVAC, and new-construction terms that matter most here." },
      { name: 'Build authority', desc: "Links and citations from trusted Jacksonville and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Jacksonville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Jacksonville neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Jacksonville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm, seasonal & new-construction SEO', 'Multi-neighborhood / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Jacksonville?', a: "Most Jacksonville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Jacksonville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the day you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Jacksonville contractors do best running SEO as the long-term engine and ads for short bursts during hurricane season or a heat wave." },
      { q: 'Should my Jacksonville SEO target hurricane season?', a: "Yes, and it is one of the smartest moves you can make. Ranking for storm damage repair, roofing, and emergency restoration takes months to build, so you have to be in position before June, not scrambling to rank after a storm watch posts. We optimize for those seasonal and emergency terms well ahead of time." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. The higher tiers add storm and seasonal work plus AI-search optimization. We confirm your exact scope in the free audit." },
      { q: "How does Jacksonville's size affect SEO strategy?", a: "Jacksonville is the largest city by land area in the contiguous US, nearly 875 square miles. A single generic 'Jacksonville' page rarely ranks for the neighborhood-specific searches that drive real leads. We build a strategy aimed at the communities where your customers actually live: Mandarin, Riverside, Nocatee, Ponte Vedra, Orange Park, and the rest." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then you are month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which Jacksonville areas do you cover?', a: "Riverside, Avondale, Mandarin, San Marco, Southside, Baymeadows, Fleming Island, Orange Park, Ponte Vedra Beach, Atlantic Beach, Neptune Beach, Nocatee, Town Center, Arlington, and St. Johns County, with genuine local pages rather than one generic Jacksonville page." },
      { q: "What is in the free SEO audit?", a: "A straight read on where your Jacksonville SEO stands today, what your competitors are doing to outrank you on Google, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'jacksonville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Jacksonville Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Jacksonville web design that makes homeowners pick you: fast, mobile-first contractor websites that convert visitors into booked jobs in a sprawling Sun Belt market.',
    eyebrow: 'Web Design · Jacksonville, FL',
    h1: 'Jacksonville web design that makes Mandarin-to-Ponte-Vedra homeowners pick you',
    h2Exact: 'Jacksonville Web Design Company',
    heroSubhead:
      "A good-looking site that never generates a call is just a brochure. We build Jacksonville contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stand out across a city where owning the right neighborhoods wins the right jobs.",
    primaryCta: 'Get my free quote',
    intro:
      "Jacksonville web design done right starts with a hard truth: most contractor sites bleed leads quietly, slow on a phone, the call button buried, no clear offer, nothing that tells a homeowner you serve their particular neighborhood. A mobile-first contractor website closes every one of those gaps. We build websites that load fast, look like the professional you are, and turn Mandarin-to-Ponte-Vedra visitors into booked jobs, made to win in a Sun Belt market growing fast on every edge.",
    aioQuestion: 'What makes a good contractor website in Jacksonville?',
    aioAnswer:
      "A strong Jacksonville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, and names the specific neighborhoods you serve: Mandarin, Riverside, Ponte Vedra, Nocatee. Because the city covers 875 square miles and homeowners want proof you are actually local to their area, neighborhood-specific content and mobile speed are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy, and Jacksonville is crawling with contractors fighting for the same jobs. We design every page around a single task: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Jacksonville visitors are searching on mobile, often mid storm-scare or during a summer heat wave when the AC has just quit on them. If your site takes more than a few seconds to load, they are already gone. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It does not say where you work", body: "A homeowner in Nocatee wants to know you serve Nocatee, not land on a generic 'Jacksonville' page that could belong to anyone. We build sites that name the neighborhoods and communities you actually work, so visitors believe you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What is in an OnwardCraft Jacksonville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your neighborhoods, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Jacksonville traffic lives, especially during emergencies and storms." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms placed where they actually get tapped. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for Jacksonville homeowners dealing with storm damage or an AC failure in August, the kind that book the job, not filler text nobody reads." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and neighborhood-ready pages across a wide service area." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Jacksonville communities you serve, Mandarin, Riverside, Ponte Vedra, Nocatee, so you stand out instead of melting into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Jacksonville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Jacksonville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site help me compete across such a large city?', a: "That is exactly the point in Jacksonville. We build around the specific neighborhoods you serve, Mandarin, Ponte Vedra, Nocatee, wherever your jobs come from, keep the site fast, and put a clear offer front and center, so yours is the one that books the job in a market spread this wide." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Jacksonville terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Jacksonville traffic comes from, especially during storm events and summer heat emergencies when homeowners search in a hurry." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk you through the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Jacksonville web design should include for a contractor like you, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'jacksonville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Jacksonville Website Redesign | Rebuild Without Losing Rankings | OnwardCraft',
    metaDescription:
      'Jacksonville Website Redesign that turns an aging site into a lead engine. Faster, mobile-first rebuilds that convert more without losing your rankings.',
    eyebrow: 'Website Redesign · Jacksonville, FL',
    h1: 'Jacksonville Website Redesign that turns an aging site into a lead engine across all 875 square miles',
    h2Exact: 'Jacksonville Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to scroll past during a storm watch or a summer heat wave. We redesign Jacksonville contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Jacksonville Website Redesign usually goes one of two bad ways: the site looks sharper but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Jacksonville contractor sites for speed and conversions, build them to stand out across a sprawling Sun Belt market, and run an SEO-safe migration with the redirects and care that protect the traffic you already have, so you redesign without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by holding your URL structure (or mapping a 301 redirect for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled right, a redesign keeps your rankings and lifts them, because the new site is faster, mobile-first, and better structured. And in Jacksonville, sharper neighborhood targeting means better rankings in the exact communities where your customers live.",
    problemHeading: "Signs your Jacksonville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roof or HVAC replacement, Jacksonville homeowners size you up by your site in seconds. An old, cluttered design quietly sends them to a competitor who simply looks more established, even when your work is better and your price is fairer." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing most of your Jacksonville visitors before they ever reach your offer. During a storm emergency or a summer AC failure, they need to get to you in seconds. A mobile-first redesign wins them back at the exact moment they need you." },
      { title: "It does not say where you work", body: "Traffic that never turns into calls is wasted, and a generic old site with no neighborhood targeting gives a Jacksonville homeowner no reason to believe you are local to their community. We rebuild around the specific neighborhoods you serve so the right buyers choose you." },
    ],
    servicesHeading: "What is in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned in Jacksonville." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for conversions and rankings alike, and especially on mobile." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Jacksonville traffic lives and where the storm and emergency searches happen." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Jacksonville communities you serve, Mandarin, Riverside, Nocatee, Ponte Vedra, so the new site stands out across a sprawling market instead of reading like a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, safe migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Jacksonville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Jacksonville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and careful is exactly how we work. We map a 301 redirect for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or never tells Jacksonville homeowners you serve their specific neighborhood, it is costing you work. The free audit tells you plainly whether a redesign is worth it for you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete across Jacksonville?', a: "Yes, and that is the whole point in a market this geographically large. We rebuild around the specific neighborhoods you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of blending into the crowded Jacksonville contractor field." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and it matters most during storm season when homeowners search urgently on their phones." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Jacksonville Website Redesign should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan that rebuilds without losing rankings." },
    ],
  },
];

export const jacksonvilleCity = {
  citySlug: 'jacksonville', city: 'Jacksonville', state: 'Florida', stateAbbr: 'FL', metro: 'Jacksonville',

  titleTag: 'Jacksonville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Jacksonville marketing for contractors: web design, SEO, and local SEO that gets you found across 875 square miles, get booked, and own your leads. Free audit.',

  eyebrow: 'Jacksonville · Web Design, SEO & Lead Generation',
  h1: 'Jacksonville marketing for contractors that turns neighborhood searches into jobs',
  h2Exact: 'Jacksonville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Jacksonville's sprawling geography, long hurricane season, and fast-growing Sun Belt suburbs. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Jacksonville audit',

  intro:
    "Jacksonville marketing for contractors means fighting for attention across the largest city by land area in the contiguous US, nearly 875 square miles where a homeowner in Mandarin searches differently than one in Riverside, Ponte Vedra, or Nocatee. Winning here takes web design and SEO pulling together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the specific communities you serve. Add Jacksonville's long hurricane season and brutal HVAC demand, and the contractors already ranking when the surge arrives are the ones who book the work. Here is how we help Jacksonville contractors get found and booked.",
  aioQuestion: 'How do Jacksonville contractors get more leads online?',
  aioAnswer:
    "Jacksonville contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack neighborhood by neighborhood. Because the city covers 875 square miles, the contractors who build tight neighborhood targeting (Mandarin, Riverside, Nocatee, Ponte Vedra) and rank for hurricane-season and HVAC-demand searches before the surge are the ones who dominate the peak periods.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Jacksonville searches \"near me,\" neighborhood by neighborhood across a city of 875 square miles. For most local contractors it is the single highest-return move there is.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure it in leads rather than vanity traffic. Built for Jacksonville's seasonal surges.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs across every Jacksonville neighborhood, not brochures that just sit there while your competitors take the call.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned across Jacksonville's growing market.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Jacksonville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads across a market that runs 875 square miles." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand the hurricane-season rush, the humidity that wrecks equipment fast, and the year-round new-construction pace out in Nocatee and St. Johns County." },
    { q: 'Why does the Jacksonville market need a different approach?', a: "Jacksonville is the largest city by land area in the contiguous US and sits dead center in the Atlantic hurricane corridor. A single generic 'Jacksonville' page almost never ranks for the neighborhood-specific searches that drive real leads. Winning means tight neighborhood targeting (Mandarin, Riverside, Ponte Vedra, Nocatee) plus visibility for storm and HVAC demand before the surges land." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm your exact scope in the free audit." },
    { q: 'Which Jacksonville areas do you serve?', a: "Riverside, Avondale, Mandarin, San Marco, Southside, Baymeadows, Fleming Island, Orange Park, Ponte Vedra Beach, Atlantic Beach, Neptune Beach, Nocatee, Town Center, Arlington, and the wider St. Johns County suburbs, with genuine local pages rather than one generic Jacksonville page." },
    { q: 'Where should I start?', a: "Start with a free Jacksonville audit. We will look at your website, your rankings, and your Map Pack presence across the neighborhoods you serve, then tell you the one or two moves in your Jacksonville marketing for contractors that bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

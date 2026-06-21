// LAS VEGAS: per-metro x per-service local landing pages + city hub.
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
// LAS VEGAS: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning search in Las Vegas plays by its own rules',
  body:
    "Few metros in the country grow the way the Las Vegas Valley does, with tens of thousands of new residents landing every year inside master-planned communities across Summerlin, Henderson, North Las Vegas, and the suburbs pushing further into the desert. Those households need a contractor the week they unpack, and they look on their phones to find one. Then there is the heat, which changes everything. When a July afternoon climbs past 110 degrees and an AC system quits, that repair stops being a shop-around decision and becomes a safety problem that has to be solved now. Whoever already sits in the Map Pack at 6 a.m. on an August Tuesday books that job without a single competing quote. The desert also creates trades you simply will not find in most cities: pool repair, desert landscaping conversions, flat and low-slope roofing, stucco work, all running inside a round-the-clock economy where people expect to schedule fast and late. Layer on a roughly 30 percent Hispanic population, heavily centered in North Las Vegas, and the contractor who surfaces in Spanish-language searches taps a stream of demand the rest of the field never bothers to chase.",
  pullQuote: 'In Las Vegas, the contractor sitting in the Map Pack at 6 a.m. on a 110-degree morning has already booked the job before anyone else realizes the phone is ringing.',
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
  seasonCaption: 'HVAC emergency season Jun-Sep (extreme heat); occasional freeze events Jan-Feb',
  seasonalDemand: [
    { m: 'J', v: 60, peak: true }, { m: 'F', v: 58, peak: true }, { m: 'M', v: 45 },
    { m: 'A', v: 50 }, { m: 'M', v: 65 }, { m: 'J', v: 92, peak: true }, { m: 'J', v: 100, peak: true },
    { m: 'A', v: 98, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 52 },
    { m: 'N', v: 44 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '2.3M+', label: 'people across the Las Vegas metro and climbing every year' },
    { value: '~30%', label: 'of residents are Hispanic, driving real Spanish-language search demand', accent: true },
    { value: '110°F+', label: 'peak summer days when a failed AC turns into a safety emergency' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the taps when someone searches on a phone' },
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
  "Let me be honest about why OnwardCraft exists. I got tired of watching solid Las Vegas contractors wire a few thousand dollars a month to Angi and HomeAdvisor for leads that three of their rivals had already bought. A business built on rented leads is never really yours. So everything we do points at one outcome: getting you ranked and converting for the work you want, in the neighborhoods you actually serve, with leads that belong to you and nobody else. This valley grows fast, moves fast, and the heat makes HVAC and roofing calls urgent in ways most of the country never feels. We build your online presence around that reality. There is no 12-month handcuff here. If it is not working, you let us go.";

const WHY = [
  {
    title: 'We know the desert trades cold',
    body: "HVAC fighting 110-degree heat, pool repair, flat and low-slope roofing, desert landscaping conversions, stucco: these are nothing like the trade mix in Seattle or Chicago. We shape every page around how a Las Vegas homeowner actually types things when the AC dies in August or when they finally want to redo a sun-baked backyard.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright, not one more monthly invoice to a broker selling that same homeowner to three competitors. Those urgent summer AC calls are worth far too much to keep splitting with the field.",
  },
  {
    title: 'We genuinely know this valley',
    body: "Targeting that runs neighborhood by neighborhood from Summerlin to North Las Vegas, plus the Spanish-language reach that captures searches most agencies never even see. That is the kind of local work a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices you can read on the page, reporting tied to actual leads, and month-to-month billing after the first 90 days. If we are not earning the spend, you walk. That keeps the pressure exactly where it should be, on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of people who run a local phone search visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches lead to a purchase', n: 28 },
  ],
  projection:
    "Picture this, clearly flagged as a projection and not a result we are claiming: a Las Vegas contractor pulls roughly 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Climbing out of page-two invisibility and into the top three is the line between a slow summer and a calendar with no gaps, and once the thermometer hits 110 degrees that gap drains money by the week. During your free audit we model the actual figures for your business: your rankings, your search volume, and a straight 90 to 180 day path.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. They are not past results claimed by OnwardCraft.",
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
    titleTag: 'Las Vegas Local SEO Company | Win the Map Pack',
    metaDescription:
      'Search your trade in Las Vegas and three businesses pin to the map. We get you into those three so the call comes to you, not the next contractor.',
    eyebrow: 'Local SEO · Las Vegas',
    h1: 'When Las Vegas searches for your trade, be the first name on the map',
    h2Exact: 'Las Vegas Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone types \"near me,\" and nearly everyone taps one of those three. The rest may as well not exist. In a valley growing this fast, where 110-degree summers turn a dead AC into a safety call, we get you into that top three for your neighborhoods and zip codes so the job lands with you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Las Vegas audit',
    intro:
      "Las Vegas local SEO really comes down to one question: when a homeowner in Henderson or Summerlin searches your trade plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of the three and never scroll past them. This metro is expanding at one of the quickest clips in the nation, demand for HVAC, roofing, pool service, and desert landscaping swings hard by season, and close to 30 percent of residents, clustered in North Las Vegas, search in Spanish. Becoming one of those three pins across the neighborhoods you serve is the entire game. Here is how it gets done.",
    aioQuestion: 'How do Las Vegas businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady drip of real reviews, and local content tied to actual Las Vegas neighborhoods. Because this is a mobile-first valley with heavy Spanish-language search demand, the businesses that win lock in tight service areas, surface in Spanish where their customers look, and are already ranking the moment summer HVAC emergencies blow up overnight.",
    problemHeading: "When the phone goes quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors are sitting in all three map spots', body: "Pull out your phone and search your own trade plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the taps. When an AC quits at 8 p.m. in August and it is still 108 degrees outside, that homeowner is not comparing options, they are dialing the first name on the screen. For most Las Vegas contractors, breaking into that top three for your zip codes is the single highest-return move available." },
      { title: "You are paying for leads you never get to keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Las Vegas homeowner to four contractors, then charge each of you to wrestle over them. Local SEO flips that: a lead finds you, calls you, and no one else gets handed the same name. Month by month you stop renting and start owning the pipeline, so when summer demand erupts it is your phone lighting up." },
      { title: "Spanish-speaking customers cannot find you", body: "Roughly 30 percent of Las Vegas residents are Hispanic, and a real share search in Spanish, especially across North Las Vegas. Most contractors do nothing to appear for those queries, so that demand just sits there unclaimed. Targeting the right neighborhoods and languages is how you reach buyers your competition has written off entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you here',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google understands exactly which Las Vegas searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple system that turns each finished job into a steady stream of reviews. It lifts ranking and pushes people to call, which matters most on high-stakes, last-minute summer AC jobs." },
      { name: 'Neighborhood pages', desc: "Real pages for Summerlin, Henderson, North Las Vegas, Spring Valley, Green Valley, and the rest, so you rank for the neighborhood someone is genuinely searching instead of just \"Las Vegas.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed: the wiring beneath the surface that lets everything else actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Las Vegas sources Google trusts, like local press, HOAs, trade associations, and partners. In this valley, that is often what divides page one from page two." },
      { name: 'Spanish-language reach', desc: "Close to 30 percent of Las Vegas residents search in Spanish, heavily in North Las Vegas. We help you appear for demand most of your competitors never even notice.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you truly rank today across your neighborhoods and zip codes, then identify exactly which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. You will usually catch early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO pays off for whoever starts now rather than later, ideally before summer HVAC season hits." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Summerlin, Henderson, North Las Vegas, and beyond, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood off the board." },
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
      { q: 'How much does local SEO cost in Las Vegas?', a: "Most Las Vegas engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit right above this. There are no hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Las Vegas keywords usually take 90 to 180 days of consistent work, since reviews and citations build on each other over time. Anyone promising you page one in 30 days is selling you a story." },
      { q: 'What makes Las Vegas local SEO different?', a: "Two forces define this market. First, it is one of the fastest-growing metros anywhere, so new homeowners in Summerlin and Henderson need contractors constantly and look on their phones. Second, when summer cracks 110 degrees and an AC fails, the homeowner calls the very first Map Pack result. Owning those top three spots before summer arrives is worth almost everything." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Las Vegas it is a genuine edge. About 30 percent of residents are Hispanic, concentrated in North Las Vegas, and many search in Spanish. We tune your profile and content so you appear for those searches in neighborhoods where most contractors are simply invisible." },
      { q: 'Which areas do you cover?', a: "Every major neighborhood and suburb: Summerlin, Henderson, North Las Vegas, Spring Valley, Sunrise Manor, Enterprise, Paradise, Whitney, Green Valley, Anthem, Boulder City, and more. We build real neighborhood pages rather than one generic Las Vegas page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: HVAC, roofing, plumbing, pool service, desert landscaping, solar, electrical, and general contractors. We understand summer AC emergencies, flat and low-slope roofing built for desert climates, and the 24/7 economy this valley runs on." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now begins inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that your competitors also bought, and in a market where summer AC emergencies drive urgent, high-value calls, you want those coming straight to you. We build the rankings, profile, and review base that make it happen. Over time you lean on the brokers less because the work arrives directly." },
      { q: "What is in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90 to 180 day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Las Vegas SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Las Vegas SEO that ranks contractors on Google and delivers leads you own. Lead-tied reporting, no lock-in contracts, built for a fast-growing desert.',
    eyebrow: 'SEO Services · Las Vegas',
    h1: 'Get your Las Vegas business to the top of Google and hold it there',
    h2Exact: 'Las Vegas SEO Company',
    heroSubhead:
      "Ads switch off the instant you stop paying. SEO does the opposite: rank once for what your Las Vegas customers search and the leads keep showing up. We build that ranking for a fast-growing, mobile-first valley where summer HVAC emergencies create some of the most urgent search traffic in the country.",
    primaryCta: 'Get my free Las Vegas SEO audit',
    intro:
      "Las Vegas SEO boils down to a single question: when someone searches your trade, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing and most phone-driven markets in the country, covering HVAC, roofing, pool service, desert landscaping, and plumbing, and we measure the work in leads rather than vanity traffic.",
    aioQuestion: 'How do Las Vegas businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page for the exact terms customers type, publishing genuinely useful local content tied to specific Las Vegas neighborhoods, and earning links from trusted local sources. In Las Vegas, tight neighborhood targeting and ranking for summer HVAC and pool terms ahead of the season are two of the fastest ways to pull ahead, because those searches surge quickly and whoever already ranks captures the wave.",
    problemHeading: "Three reasons your Las Vegas site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll far down it either. When an AC dies on a 110-degree evening in Henderson, the homeowner calls the first result they see, on a phone, in under a minute. If you are not among the top handful of results for what you sell, your site is invisible no matter how good your work is." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. Las Vegas clicks in the HVAC and roofing categories are among the priciest in the country during summer. SEO builds an asset you own: rankings that keep producing leads long after the work is finished, at a fraction of the per-lead cost of ads or broker platforms." },
      { title: "You are not ranking for the demand that pays", body: "Las Vegas demand swings hard by season. HVAC and pool calls surge from June through September, and the occasional January freeze event sets off a short burst of plumbing and pipe calls. Contractors who rank for those terms before the season opens catch the surge. If your SEO ignores seasonal and emergency searches, your busiest weeks go to whoever was already there." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all, which is doubly critical for a mobile-first audience." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Las Vegas customers search, across titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot, including the desert-specific topics most agencies skip." },
      { name: 'Link building', desc: "Authority pulled from real Las Vegas and industry sources. In a competitive, fast-growing market, links are frequently what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads instead of just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for summer HVAC, pool service, and roofing searches, plus the occasional winter freeze that drives a burst of plumbing demand, so you are visible before the spike instead of chasing it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Las Vegas leads, the seasonal terms included." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs to rank. It matters even more in a market where nearly every search happens on a phone." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, covering the seasonal and emergency terms for summer HVAC and pool season." },
      { name: 'Build authority', desc: "Links and citations from trusted Las Vegas and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set or service area." },
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
      { q: 'How long does SEO take to work in Las Vegas?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter neighborhood terms and slower on the most competitive metro-wide keywords. The reason to start early is simple: seasonal spikes, summer HVAC above all, reward contractors who already hold rankings when the heat arrives." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying, and Las Vegas HVAC and roofing clicks get expensive in summer. SEO is an asset you own that keeps producing leads at a lower cost over time. Most contractors run SEO as the long-term engine and use ads to plug short-term gaps." },
      { q: 'Should my Las Vegas SEO target seasonal demand?', a: "Absolutely. Summer demand for HVAC repair surges hard and fast here. When it is 110 degrees and someone's AC fails, they call whoever already sits at the top of search. Ranking takes months to build, so you need to be in place before June, not scrambling in July. We optimize for those seasonal and emergency terms well ahead of time." },
      { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency SEO plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Las Vegas areas do you cover?', a: "Every major community: Summerlin, Henderson, North Las Vegas, Spring Valley, Sunrise Manor, Enterprise, Paradise, Whitney, Green Valley, Anthem, Boulder City, and more, each with a genuine local page rather than one generic Las Vegas page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads, especially the high-value summer emergency calls where the homeowner is not shopping around." },
      { q: "What is in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Las Vegas Web Design Company | OnwardCraft',
    metaDescription:
      'Las Vegas web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a fast-growing desert market.',
    eyebrow: 'Web Design · Las Vegas',
    h1: 'Las Vegas web design that turns visitors into booked jobs',
    h2Exact: 'Las Vegas Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Las Vegas contractors fast, mobile-first sites engineered to turn visitors into booked work, made for a 24/7 city where most searches happen on a phone and a sluggish site during summer heat quietly costs you real money.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Las Vegas contractor websites bleed leads quietly: slow on a phone, a call button buried somewhere, no clear offer in sight. Web design done right fixes every bit of that. We build sites that load fast on a phone in a Home Depot parking lot, look as professional as you are, and turn visitors from Summerlin to Henderson into booked jobs. We build for a city where 110-degree summers make HVAC and roofing websites safety resources, not just marketing pages.",
    aioQuestion: 'What makes a good contractor website in Las Vegas?',
    aioAnswer:
      "A strong Las Vegas contractor website loads in under three seconds on a phone, places the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Since nearly all Las Vegas searches happen on mobile and the city runs around the clock, mobile speed and an obvious next step, especially for urgent calls like AC repair on a brutal day, are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit still: no clear offer, no obvious next step, no reason to call you over the next result. In Las Vegas, residents are on their phones constantly and expect fast, easy access to a contractor. We design every page around one job, turning a visitor into a booked lead, including the urgent summer emergency calls that should have zero friction." },
      { title: "It is too slow on a phone", body: "Las Vegas runs one of the highest mobile usage rates in the country, with tourists and residents alike living on their phones. If your site needs more than a few seconds to load, you lose the visitor before they ever reach your offer. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It does not speak to your neighborhood", body: "A homeowner in Henderson wants to see you serve Henderson, not a generic \"Las Vegas\" page that could belong to anyone. New residents in Summerlin want proof you know their community. We build sites that name the neighborhoods you work, so visitors trust that you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What goes into an OnwardCraft Las Vegas website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your neighborhoods, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all your Las Vegas traffic lives. Fast, thumb-friendly, and easy to call from even when someone is standing outside in the heat." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page has a next step, and the urgent-call pages are built for urgency." },
      { name: 'Copy that sells', desc: "Words written for Las Vegas homeowners, from the anxious urgency of a summer AC failure to a contractor call from a brand-new Summerlin resident, not filler that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Summerlin, Henderson, North Las Vegas, and the neighborhoods you serve, so you stand out instead of blending into a generic metro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want, both the high-urgency summer calls and the steady flow of new-resident leads." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
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
      { q: 'How much does a website cost in Las Vegas?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site actually work on mobile?', a: "We design mobile-first, because that is where nearly all Las Vegas searches happen. Fast load, easy-to-tap call buttons, and forms built for a thumb, including the instant-call flow you need when an AC is out and it is 110 degrees." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build readies you to rank, and pairing it with our SEO service is how you climb the competitive Las Vegas terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs in plain terms." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes. Las Vegas has a large Spanish-speaking population, concentrated in North Las Vegas. We can build Spanish-language pages or optimize your site so it surfaces for Spanish-language searches, a segment most of your competitors ignore." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Las Vegas site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'las-vegas', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Las Vegas Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Las Vegas website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a growing desert.',
    eyebrow: 'Website Redesign · Las Vegas',
    h1: 'Redesign your Las Vegas website without losing your rankings',
    h2Exact: 'Las Vegas Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to skip past. We redesign Las Vegas contractor sites to convert more and load faster, then migrate carefully so you hold every ranking you have earned heading into peak summer demand.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail one of two ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Las Vegas contractor sites for mobile speed and conversions, build them to stand out in a fast-growing, competitive market, and migrate with the redirects and SEO care that protect the traffic you already have, so you are not starting over right before HVAC season.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and usually improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Las Vegas site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and it costs you trust", body: "In Las Vegas, homeowners make quick calls on their phones, especially for urgent work like AC repair in summer. An old, cluttered design instantly signals you are behind the times, so they tap the next result. Your work may be excellent, but a dated site makes you read like the runner-up." },
      { title: "It is slow and clumsy on a phone", body: "Las Vegas carries some of the highest mobile usage in the country. If your site is clunky or slow on mobile, you lose visitors before they ever reach your offer, and you lose them to a competitor who loads faster. A mobile-first redesign wins them back." },
      { title: "It does not stand out in a growing market", body: "Las Vegas is one of the fastest-growing metros anywhere. New contractors enter the field constantly, and new homeowners in Summerlin and Henderson are hunting for trusted local names. A generic old site gives no reason to pick you, while a rebuilt, neighborhood-specific site does." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold the rankings and traffic you have already earned, which is critical right before summer demand peaks." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, including the fast-action flow needed for emergency calls." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings on a mobile-first audience." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, because that is where nearly all your Las Vegas traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and stands out when a new Summerlin homeowner is comparing contractors." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around Summerlin, Henderson, North Las Vegas, and the neighborhoods you serve, so the new site stands out in a competitive, fast-growing market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve rather than drop, which matters most right before peak season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
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
      { q: 'How much does a website redesign cost in Las Vegas?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage. Timing it ahead of summer HVAC season is something we plan around." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, is not bringing in leads, or does not reflect how fast Las Vegas is growing and how competitive your market has become, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in a fast-growing market?', a: "Yes. Las Vegas adds thousands of new homeowners every year, and they are all looking for trusted local contractors in neighborhoods like Summerlin and Henderson. We rebuild your site around those neighborhoods and the specific trades you do best, so you read like the established choice." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings in a city where nearly everyone searches on a phone." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What is in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pitch deck, just a straight diagnosis." },
    ],
  },
];

export const lasVegasCity = {
  citySlug: 'las-vegas', city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV', metro: 'Las Vegas',

  titleTag: 'Las Vegas Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Las Vegas contractors. Get found, get booked, and own your leads instead of renting them, built for a desert market.',

  eyebrow: 'Las Vegas · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Las Vegas contractors found and booked',
  h2Exact: 'Las Vegas Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the fast-growing, mobile-first, 24/7 Las Vegas market. One team to get you ranking before summer heat turns every HVAC call into an emergency, and to keep you converting new residents in Summerlin and Henderson all year long.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Las Vegas audit',

  intro:
    "If you run a contracting business in Las Vegas, you are operating in one of the fastest-growing and most phone-driven markets in the country, with extreme heat that makes HVAC and roofing calls urgent in ways few cities can match, a constant influx of new homeowners who need everything, and a sizable Spanish-speaking population most contractors never even try to reach. Winning here takes three things working together: a site that converts fast on a phone, SEO that ranks you for what people search (including the summer emergency terms that spike overnight), and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here is how we help Las Vegas contractors do exactly that.",
  aioQuestion: 'How do Las Vegas contractors get more leads online?',
  aioAnswer:
    "Las Vegas contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack neighborhood by neighborhood. In a 24/7 city with extreme summer heat and a large Spanish-speaking population, the contractors already ranking when demand spikes, and showing up in Spanish where their customers search, capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Las Vegas searches \"near me.\" For most contractors it is the highest-return move there is, done neighborhood by neighborhood, before summer heat turns every AC call into an emergency.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Las Vegas customers actually search, from HVAC and roofing to pool service and desert landscaping, build an asset you own, and measure it in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, built for a city where most searches happen on a phone and urgent summer calls cannot afford a slow site.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for mobile speed and conversions, then migrate it carefully so you hold every ranking you have earned, especially heading into peak HVAC and roofing season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Las Vegas?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a fast-growing market where summer demand surges and new homeowners are always searching." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: HVAC, roofing, plumbing, pool service, desert landscaping, solar, electrical, and general contractors. We understand 110-degree summer emergencies, flat and low-slope roofing built for desert climates, new-construction move-in work, and the round-the-clock pace this city keeps." },
    { q: 'Why does the Las Vegas market need a different approach?', a: "Three things set it apart: extreme seasonal demand (HVAC and pool calls surge from June through September and reward you for already ranking), one of the fastest metro growth rates in the country (a constant stream of new homeowners who need contractors), and a roughly 30 percent Hispanic population with real Spanish-language search demand most competitors ignore." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Las Vegas areas do you serve?', a: "Every major neighborhood and community: Summerlin, Henderson, North Las Vegas, Spring Valley, Sunrise Manor, Enterprise, Paradise, Whitney, Green Valley, Anthem, Boulder City, and more, each with a genuine local page." },
    { q: 'Where should I start?', a: "Start with a free Las Vegas audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that bring in the most work fastest, including whether you need to be in place before summer season opens. No pitch deck, just a plan." },
  ],
};

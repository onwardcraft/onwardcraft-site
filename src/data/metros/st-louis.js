// ST. LOUIS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across St. Louis's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ST. LOUIS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in St. Louis is tougher than it looks',
  body:
    "The St. Louis metro stretches across two states and roughly 2.8 million people — Missouri on the west side, Illinois (East St. Louis, Belleville, O\'Fallon) on the east — and the market has a character you won\'t find anywhere else. St. Louis sits at the edge of Tornado Alley and takes real hail hits almost every spring, which means roofing and storm-restoration contractors are fighting for the same Map Pack slots from April through June and the homeowners who call want someone local, not a storm-chasing crew from out of town. Summer heat here is genuinely brutal: heat indexes regularly top 110°F, which accelerates HVAC wear and spikes AC calls from June through September. Then there\'s the housing stock — extraordinary 1880s-to-1940s brick row houses and bungalows throughout South City, the Hill, Soulard, and Tower Grove that demand masonry contractors who actually understand how historic brick behaves. And there\'s something intangible: St. Louis residents have a strong local identity rooted in Gateway Arch pride, and they notice immediately when a contractor doesn\'t know the difference between Maplewood and Webster Groves. The businesses that rank here aren\'t the biggest or the flashiest — they\'re the ones who feel genuinely local to a city that cares deeply about that.",
  pullQuote: 'In a city built on brick, storm seasons, and neighborhood pride, the contractor who feels local wins the call. Map Pack rankings are how you prove it.',
  donut: {
    title: 'Who makes up St. Louis',
    value: 46,
    centerLabel: 'Black residents',
    legend: [
      { label: 'Black/AA', pct: 46, kind: 'teal' },
      { label: 'Other', pct: 54, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Tornado/storm season (Apr–Jun) and summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 42 }, { m: 'F', v: 45 }, { m: 'M', v: 65 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 82, peak: true },
    { m: 'O', v: 55 }, { m: 'N', v: 46 }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '2.8M', label: 'people across the bi-state St. Louis metro' },
    { value: '~46%', label: 'of St. Louis city residents are Black or African-American', accent: true },
    { value: 'Apr–Jun', label: 'tornado and hail season — roofing and restoration peak demand' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the calls when storm season hits' },
  ],
  neighborhoods: [
    'The Hill', 'Soulard', 'Tower Grove', 'Maplewood', 'Webster Groves',
    'Kirkwood', 'Chesterfield', 'Ballwin', 'O\'Fallon (MO)', 'Belleville (IL)',
    'South City', 'Lafayette Square', 'Benton Park', 'Dogtown', 'Clayton',
  ],
};

const AREAS = [
  'St. Louis City', 'St. Louis County', 'The Hill', 'Soulard', 'Tower Grove',
  'Maplewood', 'Webster Groves', 'Kirkwood', 'Chesterfield', 'Ballwin',
  'O\'Fallon (MO)', 'Belleville (IL)', 'East St. Louis (IL)', 'Clayton', 'Florissant',
];

const FOUNDER =
  "I\'ll be straight with you: I started OnwardCraft because I kept watching solid contractors — the ones who actually know how to work St. Louis brick and show up after a hail storm — hand Angi and HomeAdvisor a few grand a month for leads that two or three of their competitors bought at the same time. You can\'t build a real business on rented leads. The whole point of what we do here is to get you ranking and converting for the work you want, in the neighborhoods where you actually work, so those calls belong to you. No 12-month handcuffs. If it\'s not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, masonry, restoration, electrical, GCs. We understand storm-season surges, brick bungalow repairs, and what a St. Louis homeowner is really asking when they call after a hail event, so everything we build reflects how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The entire goal is a pipeline you own. Not another monthly invoice to a lead broker selling the same distressed homeowner to your three closest competitors.",
  },
  {
    title: 'We actually know St. Louis',
    body: "Neighborhood-by-neighborhood targeting from Soulard to Chesterfield, plus an understanding of the bi-state metro that a national shop can\'t fake by swapping a city name into a template. St. Louis residents notice immediately when someone doesn\'t know the city.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we\'re not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We\'re new, so here\'s the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We\'re a young, founder-led shop, so we won\'t pretend to a track record we don\'t have yet. What we can show you is why this works — straight from Google\'s and the industry\'s own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here\'s a rough picture, clearly labelled as a projection and not a result we\'re claiming: say a St. Louis contractor gets around 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when a hail storm rolls through in May, that gap becomes brutal fast. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'St. Louis', state: 'Missouri', stateAbbr: 'MO', metro: 'St. Louis',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const stLouisLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'st-louis', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'St. Louis Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'St. Louis Local SEO that wins you the top three on the map, from Soulard to Chesterfield. Storm season ready, neighborhood-targeted, no lock-in.',
    eyebrow: 'Local SEO · St. Louis, MO',
    h1: 'St. Louis Local SEO that wins you the top three on the map before hail season turns the Hill into a roofing scramble',
    h2Exact: 'St. Louis Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn\'t exist. In a city where hail season can flood your phone in 48 hours — or leave it silent — we get you into that top three for your neighborhoods, so the call lands with you instead of a competitor who ranked first.",
    primaryCta: 'Get my free St. Louis audit',
    intro:
      "St. Louis local SEO comes down to one question: when a homeowner in Soulard or Webster Groves searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has another wrinkle — a significant hail and storm season from April through June that sends search volume through the roof, literally. The contractors already in the Map Pack when that first storm hits are the ones who clean up. Here\'s how you become one of them.",
    aioQuestion: 'How do St. Louis businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real St. Louis neighborhoods. In a bi-state metro with strong neighborhood identity, tight geographic targeting and being visible before tornado and hail season are two of the fastest ways to pull ahead.",
    problemHeading: "If your phone is quiet, it\'s usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you\'re not one of them, it almost doesn\'t matter how good your work is — most St. Louis homeowners never scroll past the Map Pack. Getting into that top three for Soulard, Tower Grove, or Chesterfield is usually the single highest-return move a local contractor can make." },
      { title: "You\'re paying for leads you don\'t own", body: "Angi, Thumbtack, and HomeAdvisor sell the same St. Louis homeowner to four contractors, then bill each of you to fight over the job. It\'s a treadmill, and the per-lead cost climbs every year. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning your pipeline." },
      { title: "You\'re invisible when storm season hits", body: "Hail and tornado calls spike fast and hard in April, May, and June — and the contractors who rank in the Map Pack before the first storm hits get the lion\'s share of that work. If you\'re not already in the top three when the season turns, you\'re scrambling while your competitors book up. Local SEO takes months to build, which means the time to start is before the season, not after." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which St. Louis searches you should win — including storm and restoration categories before hail season." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you\'re missing across the bi-state metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes anxious homeowners pick up the phone after a storm." },
      { name: 'Neighborhood pages', desc: "Real pages for the Hill, Soulard, Tower Grove, Webster Groves, Chesterfield, and the rest, so you rank for the neighborhood someone\'s actually searching, not just \"St. Louis.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from St. Louis sources Google trusts — local press, neighborhood associations, industry partners. This is what separates page one from page two in a market with strong local identity." },
      { name: 'Storm-season and masonry SEO', desc: "We rank you for the hail, storm-damage, and historic brick masonry searches that define St. Louis demand — so when spring comes, those calls land on you.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and pin down which competitors are beating you in the Map Pack and why — including seasonal patterns unique to St. Louis." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before storm season, not during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the bi-state metro, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several St. Louis neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the bi-state metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and masonry SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in St. Louis?', a: "Most St. Louis engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you\'re going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive St. Louis keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in this market is selling you something." },
      { q: 'What makes St. Louis local SEO different from other cities?', a: "Two things stand out. First, the bi-state metro means you might need to rank on both the Missouri and Illinois sides of the market. Second, storm and hail season creates a sharp demand spike every spring — the contractors already in the Map Pack when that first storm rolls through get the calls. Local SEO takes months to build, so starting before the season is critical." },
      { q: 'Can you help me get more roofing or restoration leads after a storm?', a: "Yes, and that\'s one of the most important things we do for St. Louis contractors. We optimize your Google Business Profile and local content specifically for storm-damage and roofing searches so that when hail hits in May, you\'re already showing up — not trying to claim a Map Pack spot in the middle of the rush." },
      { q: 'Which areas do you cover?', a: "The full bi-state metro — St. Louis City, St. Louis County, and the Illinois side including Belleville, O\'Fallon, and East St. Louis. Neighborhood-level pages for the Hill, Soulard, Tower Grove, Webster Groves, Kirkwood, Chesterfield, Ballwin, Maplewood, and more. We build genuine neighborhood pages instead of one generic St. Louis page." },
      { q: 'Do you work with contractors who do historic brick work?', a: "Yes, and it\'s one of the niches we understand best in St. Louis. The brick row houses and bungalows from the 1880s through 1940s in South City require masonry contractors who actually know how historic brick behaves, and we build local content around that expertise so homeowners in those neighborhoods find you first." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It\'s becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that\'s roughly how long local SEO needs to show real movement. After that it\'s month-to-month. If we\'re not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never own. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because St. Louis homeowners are finding you directly." },
      { q: "What\'s in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that\'ll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It\'s the fastest way to see exactly what St. Louis Local SEO can do for your phone before you spend a dollar. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'st-louis', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'St. Louis SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'St. Louis SEO that ranks contractors on Google and brings in leads you own. Storm-season ready, bi-state metro coverage, no lock-in. Free St. Louis SEO audit.',
    eyebrow: 'SEO Services · St. Louis, MO',
    h1: 'St. Louis SEO that builds rankings you actually own, from South City brick to Chesterfield',
    h2Exact: 'St. Louis SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your St. Louis customers search and the leads keep coming — including the storm-season surges that define the busiest weeks of the year. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free St. Louis SEO audit',
    intro:
      "St. Louis SEO comes down to one question: when someone searches what you do — roofing after a hail storm, HVAC when the heat index hits 110, masonry for a 1920s brick bungalow — are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a bi-state metro that has seasons, neighborhoods, and a local identity all its own, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do St. Louis businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search — including storm-damage, masonry, and HVAC terms unique to St. Louis demand — publishing genuinely useful local content tied to specific neighborhoods on both sides of the metro, and earning links from trusted local sources. Ranking for seasonal searches before the demand spike is one of the highest-leverage moves in this market.",
    problemHeading: "Three reasons your St. Louis site isn\'t bringing in work",
    painPoints: [
      { title: "You\'re stuck on page two", body: "Almost nobody clicks past the first page of Google. In a market where your competitors are just as local and just as hungry for the work, if you\'re not in the top handful of results for what you sell, your site is invisible — no matter how good your reputation is in the neighborhood." },
      { title: "You\'re renting traffic from Google Ads", body: "Ads can work short-term, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — and in storm season, owned rankings are worth far more than rented clicks." },
      { title: "You\'re not ranking for the demand that matters", body: "St. Louis demand swings hard with the seasons — roofing and restoration in spring storm season, AC and HVAC when summer humidity turns brutal, masonry any time a South City homeowner starts noticing their 100-year-old brickwork. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you\'re leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your St. Louis customers search — from roofing and storm damage to HVAC and masonry." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including content built around St. Louis\'s specific seasons and housing stock." },
      { name: 'Link building', desc: "Authority from real St. Louis and industry sources. In a market with this much local identity, trusted local links are what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm-season and masonry SEO', desc: "We rank you for the hail, storm-damage, historic brick masonry, and HVAC searches that define St. Louis demand peaks, so you\'re visible before they arrive, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real St. Louis leads — including the seasonal patterns unique to this market." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including storm-season, masonry, and neighborhood-specific terms." },
      { name: 'Build authority', desc: "Links and citations from trusted St. Louis and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what\'s working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent St. Louis SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own St. Louis search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season and masonry SEO', 'Bi-state / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in St. Louis?', a: "Most St. Louis SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in St. Louis?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for a St. Louis contractor?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In a market with a defined storm season, owned rankings are especially valuable because they\'re already in place when demand spikes. Most contractors do best running SEO as the long-term engine and ads for short-term pushes." },
      { q: 'Should my SEO target storm and hail season demand?', a: "Absolutely — that\'s one of the most important things you can do here. Roofing and restoration searches spike fast and hard in April, May, and June. Ranking takes months to build, so you have to be in place before the season. We optimize for storm-damage and related emergency searches ahead of time so your busiest weeks land on you." },
      { q: "What\'s included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season/masonry SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it\'s month-to-month. If we\'re not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That\'s a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search results." },
      { q: 'Do you cover both Missouri and Illinois sides of the metro?', a: "Yes. We build local content and neighborhood pages for both sides of the bi-state metro — St. Louis City and County on the Missouri side, and Belleville, O\'Fallon, and other Illinois communities on the east side — so you rank across the full market you actually serve." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What\'s in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows you exactly what St. Louis SEO can do for your pipeline before you spend a dollar. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'st-louis', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'St. Louis Web Design Company | OnwardCraft',
    metaDescription:
      'St. Louis web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors in a storm-season market.',
    eyebrow: 'Web Design · St. Louis, MO',
    h1: 'St. Louis web design engineered to bring in real work, from Tower Grove bungalows to Chesterfield',
    h2Exact: 'St. Louis Web Design Company',
    heroSubhead:
      "A pretty website that doesn\'t generate calls is a brochure. We build St. Louis contractors fast, mobile-first sites engineered to turn visitors into booked work — and to signal to homeowners in Soulard or Chesterfield that you\'re the local expert they\'ve been looking for.",
    primaryCta: 'Get my free quote',
    intro:
      "St. Louis web design lives or dies on one thing: whether the site turns a visitor into a booked job. Most contractor websites here lose leads quietly, slow on a phone, with a buried call button and no clear offer. We build sites that load fast, look like the professional you are, and convert, designed for a market where homeowners care deeply about whether you actually know their neighborhood and their housing stock.",
    aioQuestion: 'What makes a good contractor website in St. Louis?',
    aioAnswer:
      "A good St. Louis contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos from recognizable neighborhoods, and names the specific communities you serve across both states. Because St. Louis residents have strong local identity and prefer contractors who know the city, specificity — referencing the Hill, Soulard, Webster Groves, or the brick housing stock of South City — is what converts a visitor into a call.",
    problemHeading: "Why your current site isn\'t bringing in work",
    painPoints: [
      { title: "It\'s a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the competitor one click away. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It\'s too slow on a phone", body: "The majority of your St. Louis visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially during storm season when they\'re on a phone trying to find a roofer fast. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn\'t feel local enough", body: "A homeowner in the Hill or Tower Grove wants to see that you know South City brick, not a generic site that could be any contractor in any city. St. Louis residents have a strong sense of local identity, and a site that speaks their neighborhood — referencing real streets, real architecture, real seasonal context — converts far better than a template with the city name swapped in." },
    ],
    servicesHeading: "What\'s in an OnwardCraft St. Louis website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want — whether that\'s storm restoration, historic masonry, or summer HVAC." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that\'s where almost all of your St. Louis traffic is — and where homeowners are searching from when a storm rolls through." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners after a hail storm or during a brutal July heat wave, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for the bi-state metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google\'s performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the communities you serve — the Hill, Soulard, Kirkwood, Chesterfield, O\'Fallon, Belleville — so you stand out in a market with strong local identity instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors — then map the site around booking more of the work you want in the communities you serve." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what\'s actually converting." },
    ],
    pricing: {
      heading: 'Transparent St. Louis web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or bi-state businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in St. Louis?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me win more storm-season work?', a: "That\'s one of the most important things we design for in St. Louis. The sites we build load fast on a phone (critical when someone\'s searching for a roofer in the middle of a storm), have an obvious call button above the fold, and have specific service pages for storm restoration so Google ranks you for those searches when demand spikes." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive St. Louis terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can\'t leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that\'s where almost all of your St. Louis traffic comes from — and speed matters especially when homeowners are searching during a storm or a heat wave." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We\'ll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Can you make my site speak to historic brick homeowners?', a: "Yes, and it\'s one of our strengths in St. Louis specifically. South City brick bungalows and row houses have specific concerns — tuckpointing, mortar repair, water infiltration — and we write copy and build pages around those needs so the right homeowners find you and trust you immediately." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting St. Louis web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'st-louis', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'St. Louis Website Redesign | OnwardCraft',
    metaDescription:
      'St. Louis website redesign that modernizes without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a storm-season market.',
    eyebrow: 'Website Redesign · St. Louis, MO',
    h1: 'St. Louis Website Redesign that modernizes your site without tanking the traffic you built before storm season',
    h2Exact: 'St. Louis Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore when homeowners are searching fast after a hail storm. We redesign St. Louis contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you\'ve earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A St. Louis website redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild St. Louis contractor sites for speed and conversions, make them feel genuinely local in a city where residents notice the difference, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in a seasonal market like St. Louis where ranking before storm season is critical.",
    problemHeading: "Signs your St. Louis site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a roofing job or masonry repair on a 1920s brick bungalow, St. Louis homeowners are making a high-stakes decision. An old, cluttered design quietly sends them to a competitor who looks more established and more trustworthy — even when your work is better." },
      { title: "It\'s slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you\'re losing the majority of your St. Louis visitors before they ever see your offer — including the ones searching urgently after a hail storm. A redesign built mobile-first wins them back before they call someone else." },
      { title: "It doesn\'t reflect the neighborhoods you serve", body: "A generic old site in a city as neighborhood-proud as St. Louis gives visitors no reason to trust you\'re local. We rebuild around the communities and housing types you actually work — so the homeowner in Webster Groves or Soulard sees immediately that you know their streets." },
    ],
    servicesHeading: "What\'s in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what\'s costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you\'ve already earned going into the next storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical when storm-season searches spike." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your St. Louis traffic lives — especially during weather events." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the communities you serve — the Hill, Soulard, Kirkwood, Chesterfield, Belleville — so the new site stands out to local homeowners instead of reading like a national chain.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what\'s losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including seasonal content that matters in St. Louis." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what\'s converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent St. Louis redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or bi-state sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in St. Louis?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it\'s done carefully, and that\'s exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which is critical if you\'re going into storm season." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn\'t bringing in leads, or doesn\'t reflect the St. Louis neighborhoods you serve, it\'s costing you work every week. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what\'s ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me win more storm-season work?', a: "Yes, and we design for that specifically. The rebuilt site loads fast on mobile (critical when a homeowner is searching right after a storm), has an obvious call button above the fold, and is structured so Google ranks you for storm-damage and roofing searches before and during the spring season." },
      { q: 'Can you make the new site appeal to homeowners with historic brick homes?', a: "Absolutely. South City, the Hill, Soulard, and other St. Louis neighborhoods have some of the most distinctive historic brick housing in the Midwest. We build content around that — tuckpointing, masonry repair, water damage prevention — so the homeowners searching for those specific services find you and trust you immediately." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What\'s in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It shows you whether a St. Louis website redesign is worth it before you commit a dollar." },
    ],
  },
];

export const stLouisCity = {
  citySlug: 'st-louis', city: 'St. Louis', state: 'Missouri', stateAbbr: 'MO', metro: 'St. Louis',

  titleTag: 'St. Louis Marketing for Contractors | OnwardCraft',
  metaDescription:
    'St. Louis marketing for contractors: web design, SEO, and local SEO that get you found before storm season, rank your neighborhoods, and own your leads.',

  eyebrow: 'St. Louis · Web Design, SEO & Lead Generation',
  h1: 'St. Louis marketing for contractors built around the trades, from brick bungalows to hail season',
  h2Exact: 'St. Louis Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for St. Louis — storm seasons, brick bungalows, brutal summers, and a city that knows immediately when someone doesn\'t know the neighborhoods. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free St. Louis audit',

  intro:
    "St. Louis marketing for contractors has to fit a market with a rhythm all its own. If you run a contracting business here, you\'re up against: a sharp roofing and restoration season every spring when tornado and hail activity peaks, brutal summer humidity that drives HVAC demand from June through September, a historic brick housing stock in South City that requires specialist masonry knowledge, and a city where residents can tell in about five seconds whether you actually know the neighborhoods. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search when it matters, and local SEO that puts you in the Map Pack for the communities on both sides of the bi-state metro. Here\'s how we help St. Louis contractors do exactly that.",
  aioQuestion: 'How do St. Louis contractors get more leads online?',
  aioAnswer:
    "St. Louis contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including storm-damage, masonry, and HVAC terms — and local SEO that wins the Google Map Pack neighborhood by neighborhood across the bi-state metro. Because the city has strong local identity and residents prefer contractors who know the neighborhoods, the businesses that feel genuinely local and rank before demand spikes win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when St. Louis searches \"near me.\" Be there before storm season hits — because the contractors already ranking are the ones who book the work when a hail event rolls through.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — storm damage, HVAC, historic masonry, and more — build an asset you own instead of renting traffic, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that feel genuinely local to a city with strong neighborhood identity — and that turn visitors into booked jobs instead of quietly sending them to a competitor.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, with careful SEO migration so you keep every bit of ranking you\'ve earned going into the next storm season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in St. Louis?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — including the surge that comes with every hail and tornado season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, masonry, restoration, electrical, and general contractors — so we understand storm-season surges, historic brick work, and the basement flooding and mold issues that come with St. Louis summers." },
    { q: 'Why does the St. Louis market need a different approach?', a: "St. Louis has a unique combination of factors: a sharp roofing and restoration peak in spring storm season, brutal summer humidity that drives HVAC demand, one of the most remarkable concentrations of historic brick housing in the Midwest, a bi-state metro, and residents who have strong local identity and prefer contractors who know their neighborhoods. Generic marketing from a national agency that just swaps in the city name doesn\'t work here." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which St. Louis areas do you serve?', a: "The full bi-state metro — St. Louis City and County on the Missouri side, and the Illinois communities including Belleville, O\'Fallon, and East St. Louis. Neighborhood-level pages for the Hill, Soulard, Tower Grove, Webster Groves, Kirkwood, Chesterfield, Ballwin, Maplewood, and more." },
    { q: 'Where should I start?', a: "Start with a free St. Louis audit. We\'ll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, including whether you\'re set up to capture storm-season demand before the next spring rolls around. It\'s the clearest first step in St. Louis marketing for contractors, and there\'s no pitch deck, just a plan." },
  ],
};

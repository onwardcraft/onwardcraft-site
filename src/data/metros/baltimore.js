// BALTIMORE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Baltimore's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BALTIMORE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Baltimore search rewards a trades specialist, not a copy-paste agency',
  body:
    "Roughly 2.9 million people live across the Baltimore metro, and they are scattered across wildly different worlds: the tight brick streets of the city proper, the leafy commuter towns of Howard and Anne Arundel counties, and the suburbs whose paychecks come from DC. What sets this market apart is the housing itself. Baltimore holds more than 150,000 narrow brick row houses, the bulk of them raised between 1880 and 1930, and every one of them is a maintenance story waiting to happen: parapet flashing that fails, cast-iron drains that corrode, aging HVAC, and mortar joints that need repointing. A contractor who can talk that work fluently wins the job; one who treats a row house like a tract home loses it. Then there is the air. Chesapeake Bay humidity is among the harshest moisture loads on the East Coast, and it chews through roofing, siding, cooling systems, and drywall faster than drier inland cities ever see, which keeps service calls coming almost year-round. When summer thunderstorms roll through, a nor'easter parks offshore, or the tail of a hurricane swings up the coast (Florence in 2018, Isaias in 2020), roofing and water-damage requests jump overnight. The money is uneven too: Federal Hill, Canton, and Hampden draw younger owners pouring cash into old row houses, while Howard County, Ellicott City, and Towson sit at suburban-DC income levels where quality is expected and paid for. Show up where those owners are searching, prove you actually know Baltimore's brick and its climate, and the work follows you.",
  pullQuote: 'With 150,000 row houses and Bay air that is among the most punishing on the East Coast, the contractor who clearly knows the local stock is the one who gets dialed.',
  donut: {
    title: "How Baltimore's row house market drives demand",
    value: 75,
    centerLabel: 'homes pre-1960',
    legend: [
      { label: 'Housing stock built before 1960', pct: 75, kind: 'teal' },
      { label: 'Newer construction', pct: 25, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer storm/HVAC season (Jun-Sep) and winter nor\'easter/heating season (Dec-Feb)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 82, peak: true }, { m: 'M', v: 55 },
    { m: 'A', v: 50 }, { m: 'M', v: 58 }, { m: 'J', v: 78, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 52 },
    { m: 'N', v: 62 }, { m: 'D', v: 84, peak: true },
  ],
  stats: [
    { value: '2.9M', label: 'people across the Baltimore metro' },
    { value: '150K+', label: 'historic row houses — specialist knowledge required', accent: true },
    { value: 'Jun-Sep', label: 'summer storm and HVAC season when roofing and cooling calls spike' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Federal Hill', 'Canton', 'Fells Point', 'Hampden', 'Roland Park',
    'Towson', 'Ellicott City', 'Columbia', 'Annapolis', 'Owings Mills',
    'Lutherville', 'Catonsville', 'Dundalk', 'Station North', 'Locust Point',
  ],
};

const AREAS = [
  'Federal Hill', 'Canton', 'Fells Point', 'Hampden', 'Roland Park',
  'Towson', 'Ellicott City', 'Columbia', 'Annapolis', 'Owings Mills',
  'Lutherville', 'Catonsville', 'Dundalk', 'Howard County', 'Anne Arundel County',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists: I got tired of watching solid Baltimore contractors wire a few thousand dollars a month to Angi and HomeAdvisor for the same lead three of their rivals also bought. Rented leads are not a business, they are a tax. So our entire job is to get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, with leads that belong to you and nobody else. No year-long contracts. If the work is not paying off, you cut us loose.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, restoration, electrical, and general contractors. We know row house masonry, Bay humidity, the chaos of a storm-day backlog, and how different a Federal Hill row house renovation is from a Howard County gut job. That knowledge shapes everything we build, so it matches how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright. Not one more monthly bill to a lead broker for a Baltimore homeowner that two other contractors are also calling tonight.",
  },
  {
    title: 'We actually speak Baltimore',
    body: "Targeting block by block from Dundalk to Ellicott City, plus the row house and Bay humidity angles that set you apart from a generic shop. That is the work a national agency cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read, reporting tied to real leads, and month-to-month billing after the first 90 days. If we are not earning the check, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies open with a wall of client logos. We are a young, founder-led shop, so we are not going to fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, drawn straight from Google's and the industry's own research on how people search for local services.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, plainly labelled as a projection and not a result we are claiming: imagine a Baltimore contractor pulling around 1,500 local \"near me\" impressions a month across a few target neighborhoods. Climbing out of page-two invisibility and into the top three is the gap between a few stray calls and a calendar that fills itself, and in a market where row house specialists and Bay-climate know-how command premium tickets, that gap is worth real money. In your free audit we plug in the actual figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Baltimore', state: 'Maryland', stateAbbr: 'MD', metro: 'Baltimore',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const baltimoreLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Baltimore Local SEO Company | Win the Map Pack',
    metaDescription:
      'Baltimore Local SEO that puts you in the three businesses Google pins to the map, so the call lands with you, not a row house rival.',
    eyebrow: 'Local SEO · Baltimore, MD',
    h1: 'Baltimore Local SEO that turns row house "near me" searches into a ringing phone',
    h2Exact: 'Baltimore Local SEO Company',
    heroSubhead:
      "Google drops three businesses on the map for a \"near me\" search, and everyone underneath them is effectively invisible. In a city built on 150,000 historic row houses and thick Chesapeake Bay humidity, we get you into that top three for your neighborhoods, so the homeowner calls you instead of whoever happened to rank first.",
    primaryCta: 'Get my free Baltimore audit',
    intro:
      "Baltimore local SEO really comes down to a single question: when a homeowner in Canton or Ellicott City types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll past them. The housing here is old, the summers are heavy with humidity, and storm season fires off roofing and water-damage calls overnight, so landing in that top three for the neighborhoods you serve, before demand peaks, is the entire game. Below is how you get there.",
    aioQuestion: 'How do Baltimore businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone details that match everywhere online, a steady drip of genuine reviews, and local content tied to actual Baltimore neighborhoods. In a market shaped by historic row houses and Bay humidity, the contractors who win name their specialty out loud (masonry, parapet flashing, moisture and mold, seasonal storm repair) and build tight service-area pages for Federal Hill, Canton, Towson, and beyond.",
    problemHeading: "If your phone has gone quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Competitors own the three map spots and you do not', body: "Type your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the clicks. With this many contractors elbowing for the same Baltimore neighborhoods, if you are not one of the three, the quality of your work barely registers, because most homeowners never lay eyes on your name. Breaking into that top three for Federal Hill, Canton, Towson, or Howard County is usually the highest-return move you can make in this city." },
      { title: "You're paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Baltimore homeowner to three or four contractors at once, then charge each of you to scrap over them. It is a treadmill with no finish line. Local SEO flips the model: the homeowner finds you, calls you, and nobody else gets that lead. Over time you stop renting attention and start owning a pipeline." },
      { title: "You're invisible in the neighborhoods that pay best", body: "Howard County and Ellicott City homeowners carry DC-grade incomes and will happily pay for quality. Towson, Roland Park, and Columbia buyers expect a polished operator. If your local SEO does not reach those areas by name, with pages that speak to the exact work those owners want done, the best jobs in the metro are slipping past you." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Baltimore searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We correct the listings that contradict each other and create the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns each finished job into a fresh review. It lifts your ranking and gives Baltimore homeowners the nudge they need to call." },
      { name: 'Neighborhood pages', desc: "Real pages for Federal Hill, Canton, Hampden, Towson, Ellicott City and the rest, so you rank for the neighborhood someone is actually searching instead of a bare \"Baltimore.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing beneath the surface that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Baltimore-area sources Google trusts: local press, neighborhood associations, and trade partners. In a market this seasoned, this is what splits page one from page two." },
      { name: 'Row house and Bay-climate targeting', desc: "Content that names parapet flashing, masonry, moisture, mold, and storm-damage repair: the specialist angles that win Baltimore's most valuable jobs.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your neighborhoods and identify exactly which competitors are beating you in the Map Pack, and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. You usually see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Baltimore city, Howard County, Anne Arundel, and the surrounding suburbs, plus the row house and Bay-climate angles your competitors skip." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Baltimore neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Row house and Bay-climate content', 'Multi-area and county service pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Baltimore?', a: "Most Baltimore engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers are listed just above. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The genuinely competitive Baltimore keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anybody promising page one in 30 days in a market this established is selling you a fantasy." },
      { q: 'What makes Baltimore local SEO different?', a: "Two forces. First, this is a row house town, so contractors who signal masonry, parapet flashing, and old-home expertise win the specialist work. Second, Chesapeake Bay humidity wears down roofing, siding, HVAC, and mold-prone surfaces faster than drier cities, which drives demand that spikes hard in summer storm season and after every nor'easter." },
      { q: 'Can you help me reach higher-income suburban areas?', a: "Yes, and it is a real edge in this metro. Howard County, Ellicott City, Towson, and Annapolis homeowners sit at DC-area income levels and pay for quality. We build dedicated pages aimed at those areas so you rank exactly where the best jobs live." },
      { q: 'Which areas do you cover?', a: "Baltimore city neighborhoods and the surrounding suburbs: Federal Hill, Canton, Fells Point, Hampden, Roland Park, Towson, Ellicott City, Columbia, Annapolis, Owings Mills, Lutherville, Catonsville, Dundalk, and more. We build real neighborhood pages rather than one generic Baltimore page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, restoration, electrical, and general contractors. We understand storm-day emergencies, row house masonry, Bay humidity, and moisture problems, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now starts in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you leave, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is finding you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to outpace you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Baltimore Local SEO can do for your phone, with no pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Baltimore SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Baltimore SEO that ranks contractors on Google and delivers leads you own. Row house expertise, Bay-climate angles, revenue reporting, no lock-in.',
    eyebrow: 'SEO Services · Baltimore, MD',
    h1: 'Baltimore SEO that ranks you for the storm and row house searches that book jobs',
    h2Exact: 'Baltimore SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the reverse: rank once for what your Baltimore customers search and the leads keep arriving. We build that ranking around the row house, storm-damage, and Bay-humidity angles that define this market, and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Baltimore SEO audit',
    intro:
      "Baltimore SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty, because almost nobody goes there. We get contractors ranking for the money keywords in a market shaped by 150,000 historic row houses, Chesapeake Bay humidity, and a heavy summer storm season, and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do Baltimore businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the site's technical foundation, tuning each page for the exact terms customers type, publishing genuinely useful local content tied to specific Baltimore neighborhoods and counties, and earning links from trusted regional sources. In a market built on row house renovations, Bay humidity, and seasonal storm damage, two of the fastest ways to pull ahead are naming those specialties in your content and targeting seasonal roofing and HVAC terms before summer and winter arrive.",
    problemHeading: "Three reasons your Baltimore site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Hardly anyone clicks past Google's first page, and they rarely scroll far down it either. In a market packed with contractors, if you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how good the work behind it is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. SEO builds an asset you keep: rankings that go on producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're missing the demand that actually matters", body: "Baltimore demand swings hard: roofing and water-damage calls after summer storms, structural and heating calls after winter nor'easters, HVAC through humid summers and cold winters. Contractors who rank for those seasonal and emergency terms ahead of time catch the spike. Ignore the cycle and you hand away your busiest weeks of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Baltimore customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads while you sleep." },
      { name: 'Link building', desc: "Authority from real Baltimore-area and industry sources. In a market this seasoned, links are often the dividing line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Seasonal & storm-damage SEO', desc: "We rank you for summer storm roofing, nor'easter damage, HVAC emergencies, and Bay-humidity moisture terms, so you are visible before demand spikes, not scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, right where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Baltimore leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal storm, row house, and Bay-humidity terms that matter in this city." },
      { name: 'Build authority', desc: "Links and citations from trusted Baltimore-area and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Baltimore SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Baltimore-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm-damage SEO', 'Multi-county / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Baltimore?', a: "Most Baltimore SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the job needs. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Baltimore?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter neighborhood terms and slower on the most fought-over metro-wide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that ends the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts like storm season." },
      { q: 'Should my Baltimore SEO target seasonal demand?', a: "Yes. Summer thunderstorms drive roofing and water-damage calls overnight, winter nor'easters push heating and structural calls, and Bay humidity keeps HVAC and mold work in near-constant demand. Ranking takes months to build, so you have to be in position before the season, not chasing it afterward." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/storm and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it runs month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Baltimore do you cover?', a: "Baltimore city and the surrounding metro: Federal Hill, Canton, Fells Point, Hampden, Roland Park, Towson, Ellicott City, Columbia, Annapolis, Owings Mills, Lutherville, Catonsville, Dundalk, and more, with genuine local pages rather than one generic Baltimore page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows exactly how Baltimore SEO turns into organic traffic and money keywords that put you on page one. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Baltimore Web Design Company | OnwardCraft',
    metaDescription:
      'Baltimore web design that turns visitors into booked jobs: fast, mobile-first sites for contractors serving row houses, Bay-climate homes, and the metro.',
    eyebrow: 'Web Design · Baltimore, MD',
    h1: 'Baltimore web design built to convert Federal Hill clicks into calls',
    h2Exact: 'Baltimore Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Baltimore contractors fast, mobile-first sites engineered to turn visitors into booked work, and to prove you are the specialist for row houses, Bay humidity, and the neighborhoods you actually serve.",
    primaryCta: 'Get my free quote',
    intro:
      "Baltimore web design is the difference between a site that books work and one that quietly bleeds leads: sluggish on a phone, a call button buried somewhere down the page, no mention of the specific neighborhoods or home types you work on. Done properly, web design fixes every bit of that. We build sites that load fast, look like the professional you are, and turn visitors from Federal Hill to Howard County into booked jobs, all built to win in a market where row house expertise and Bay-climate knowledge decide who gets the call.",
    aioQuestion: 'What makes a good contractor website in Baltimore?',
    aioAnswer:
      "A strong Baltimore contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, builds trust with reviews and real project photos, and names the specific neighborhoods and counties you serve. Because Baltimore homeowners are often wrestling with older row house stock, Bay humidity, and storm damage, a site that calls out that expertise (masonry, moisture, storm repair) wins the call over a generic site that could belong to anyone, anywhere.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy, and in Baltimore the next guy is one tap away. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Baltimore visitors arrive on mobile, and they bounce when a site takes more than a few seconds to load. Slow sites rank worse too. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't prove you know Baltimore's homes", body: "A Hampden homeowner with a brick row house has very different worries than an Ellicott City owner with a newer build. A site that ignores those specifics (masonry, parapet flashing, Bay humidity, storm damage) reads as generic, and homeowners hire the contractor who clearly understands their home." },
    ],
    servicesHeading: "What's in an OnwardCraft Baltimore website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all of your Baltimore traffic lives. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for Baltimore homeowners dealing with old houses, humid summers, and storm damage, not filler that reads like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Federal Hill, Canton, Towson, Ellicott City, and the rest, so you stand out in a crowded market instead of dissolving into one generic Baltimore page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Baltimore web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-county businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Baltimore?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site help me stand out in Baltimore?', a: "That is the entire point. We build around the specific neighborhoods and home types you serve (row houses, Bay-humidity homes, older stock), keep the site fast, and put a clear offer and call button front and center, so when a homeowner is comparing contractors, yours is the one that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Baltimore terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Baltimore traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting, mobile-first contractor website should include, and a fixed-price quote with a timeline. It is the simplest way to see what Baltimore Web Design can do for your bookings. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Baltimore Website Redesign | OnwardCraft',
    metaDescription:
      'Baltimore Website Redesign without losing rankings: faster, mobile-first rebuilds that convert more visitors into booked jobs across the metro.',
    eyebrow: 'Website Redesign · Baltimore, MD',
    h1: 'Baltimore Website Redesign that keeps every ranking you have earned across the metro',
    h2Exact: 'Baltimore Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, and easy to skip past when a homeowner in Canton or Ellicott City is comparing contractors. We redesign Baltimore contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Baltimore Website Redesign fails in one of two ways: the site looks sharper but converts no better, or it launches and the rankings vanish overnight. We do neither. We redesign Baltimore contractor sites for speed and conversions, build them to speak to row houses, Bay-climate concerns, and the neighborhoods you serve, and handle the SEO-safe migration with the redirects and discipline that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and tends to improve them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Baltimore site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job on a Federal Hill row house or a Howard County renovation, homeowners size you up by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is plainly better." },
      { title: "It's slow and clumsy on a phone", body: "If your site is sluggish or hard to use on mobile, you are losing the majority of your Baltimore visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't speak to Baltimore's homes and neighborhoods", body: "Traffic that never turns into calls is wasted, and a generic old site gives a visitor no reason to pick you over the next result. We rebuild around the specific neighborhoods, building types, and climate concerns Baltimore homeowners actually live with." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Baltimore traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around Federal Hill, Canton, Towson, Ellicott City, and the rest, so the new site stands out instead of reading like any other contractor's Baltimore page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Baltimore redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-county sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Baltimore?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and careful is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, is not bringing in leads, or fails to speak to Baltimore's specific building stock and neighborhoods, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Baltimore?', a: "Yes, and that is the whole point in a market this specific. We rebuild around the neighborhoods you serve, speak to row house expertise and Bay-climate concerns where relevant, and make the offer and call button obvious, so the new site stands out instead of reading like every other contractor's page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the clearest way to see whether a Baltimore Website Redesign is worth it for your business." },
    ],
  },
];

export const baltimoreCity = {
  citySlug: 'baltimore', city: 'Baltimore', state: 'Maryland', stateAbbr: 'MD', metro: 'Baltimore',

  titleTag: 'Baltimore Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Baltimore marketing for contractors: web design, SEO, and local SEO. Get found, get booked, and own your leads in a market of row houses and Bay humidity.',

  eyebrow: 'Baltimore · Web Design, SEO & Lead Generation',
  h1: 'Baltimore marketing for contractors: get ranked across the row house metro, get booked',
  h2Exact: 'Baltimore Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Baltimore's row house market, its Chesapeake Bay climate, and the full metro from Federal Hill to Howard County. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Baltimore audit',

  intro:
    "Baltimore marketing for contractors starts with the home market itself, one of the most distinctive in the country: more than 150,000 historic row houses that demand specialist hands, Chesapeake Bay humidity that speeds up wear on every roof, HVAC unit, and siding job, and a metro that runs from city blocks getting revitalized by young buyers out to Howard County suburbs with DC-level incomes. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here is how we help Baltimore contractors do exactly that.",
  aioQuestion: 'How do Baltimore contractors get more leads online?',
  aioAnswer:
    "Baltimore contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Baltimore's housing stock is largely pre-1960 row houses and Bay humidity speeds up wear, the contractors who call out row house expertise, moisture and mold remediation, storm damage, and seasonal HVAC in their content and profiles win the highest-value calls.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Baltimore searches \"near me.\" For most local businesses it is the highest-return move there is, done tight, neighborhood by neighborhood across the city and suburbs.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search (row house renovations, storm damage, Bay-humidity HVAC, and more) and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and prove you are the specialist for Baltimore's homes and neighborhoods, not a brochure that just sits there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Baltimore?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades (roofing, HVAC, plumbing, restoration, electrical, and general contractors), so we understand storm-day emergencies, row house masonry, Bay humidity, and the full range of work Baltimore homes generate." },
    { q: 'Why does the Baltimore market need a different approach?', a: "It is a market built on historic row houses: narrow brick homes from 1880 to 1930 that need specialists who understand masonry, parapet flashing, and old-home systems. Add Chesapeake Bay humidity, storm season, and a wide income spread from city neighborhoods to Howard County suburbs, and you need local content that speaks to all of it, not a generic contractor template." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Baltimore areas do you serve?', a: "Baltimore city and the surrounding metro: Federal Hill, Canton, Fells Point, Hampden, Roland Park, Towson, Ellicott City, Columbia, Annapolis, Owings Mills, Lutherville, Catonsville, Dundalk, and more, with genuine local pages rather than one generic Baltimore page." },
    { q: 'Where should I start?', a: "Start with a free Baltimore audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Baltimore marketing for contractors that actually gets you found and booked. No pitch deck, just a plan." },
  ],
};

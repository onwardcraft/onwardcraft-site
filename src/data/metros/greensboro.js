// GREENSBORO: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Greensboro's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// GREENSBORO: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Greensboro takes more than a decent website',
  body:
    "Greensboro anchors the Piedmont Triad, the triangle of Greensboro, Winston-Salem, and High Point that is quietly becoming one of the South's most active manufacturing and logistics corridors. Amazon, FedEx, and Toyota have all put operations in the Triad, and the distribution-center workforce that follows is buying homes in fast-growing suburbs like Summerfield, Oak Ridge, and Jamestown at a pace that keeps contractors slammed. But busy doesn't mean easy to find. When a new homeowner in Mebane or Burlington searches for a roofer or an HVAC tech, the three names Google pins to the map get the call. Everyone below them may as well not exist. Two seasonal forces make that ranking even more urgent. When a Carolina hurricane remnant tracks inland, as Florence did in 2018 and Matthew in 2016, the Triad gets meaningful flooding, wind damage, and tree falls. Roofing and restoration demand spikes overnight, and the contractor already in the Map Pack books the work while everyone else scrambles. On the other side of the calendar, hot humid summers drive HVAC calls from May through September, and the occasional Piedmont ice storm triggers emergency plumbing and heating calls in January and February. The contractors who show up before those seasons hit are the ones whose phones ring when they do.",
  pullQuote: 'In a market stretching from High Point to Burlington, the contractor who owns the map in their corner of the Triad owns the work, especially when the next hurricane season sends damage calls flooding in.',
  donut: {
    title: 'Who lives in Greensboro',
    value: 38,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 38, kind: 'teal' },
      { label: 'Other', pct: 62, kind: 'grey' },
    ],
  },
  seasonTitle: 'When Triad trade demand spikes',
  seasonCaption: 'Hurricane damage (Aug–Oct), summer HVAC (May–Sep), ice storms (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 74, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 52 },
    { m: 'A', v: 50 }, { m: 'M', v: 78, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 86, peak: true },
    { m: 'O', v: 80, peak: true }, { m: 'N', v: 56 }, { m: 'D', v: 50 },
  ],
  stats: [
    { value: '1.7M', label: 'people across the Piedmont Triad metro' },
    { value: '~38%', label: 'of Greensboro residents are Black or African American', accent: true },
    { value: 'Aug–Oct', label: 'hurricane remnant season, when roofing and restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in any Triad search' },
  ],
  neighborhoods: [
    'Fisher Park', 'Irving Park', 'Lindley Park', 'Hamilton Lakes', 'Summerfield',
    'Oak Ridge', 'Jamestown', 'High Point', 'Burlington', 'Graham',
    'Mebane', 'Kernersville', 'Gibsonville', 'Whitsett', 'McLeansville',
  ],
};

const AREAS = [
  'Greensboro', 'Winston-Salem', 'High Point', 'Burlington', 'Graham',
  'Mebane', 'Kernersville', 'Summerfield', 'Oak Ridge', 'Jamestown',
  'Fisher Park', 'Irving Park', 'Lindley Park', 'Hamilton Lakes', 'Gibsonville',
];

const FOUNDER =
  "I'll be straight with you: I built OnwardCraft because I kept seeing solid Triad contractors hand Angi and HomeAdvisor a few hundred dollars a month for leads that two or three of their competitors bought the same morning. You can't build a business on rented leads — not in Greensboro, not anywhere. The whole point of what we do is get you ranking for the work you want in the neighborhoods you actually serve, so those leads are yours and nobody else bought them first. No 12-month contracts. If we're not earning it, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand hurricane-season damage surges, summer AC calls in a Piedmont heat wave, and ice-storm emergencies, so everything we build is shaped around how Triad customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners in Summerfield or Mebane that three competitors also bought.",
  },
  {
    title: 'We actually know the Triad',
    body: "Neighborhood-by-neighborhood targeting from Fisher Park to Oak Ridge, built around the Triad's real seasonal demand: hurricane remnant windows, HVAC summers, and ice emergencies. The stuff a national shop can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, every report ties back to leads, and you go month-to-month once the first 90 days are done. If the invoice isn't paying for itself, you cut us loose. That keeps the pressure on us, which is where it belongs.",
  },
];

const PROOF = {
  heading: "We're new, so here is the honest math in place of a logo wall",
  body:
    "Most agencies lead with a grid of client logos. We are a young, founder-led shop in Greensboro, so we are not going to invent a track record we have not built. What we will hand you instead is the reasoning, pulled straight from Google's and the industry's own research on how Triad homeowners search for a contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Greensboro contractor gets around 1,200 local \"near me\" impressions a month across a handful of Triad neighborhoods. Moving from page-two invisibility into the top three is the difference between a slow phone and a booked-out calendar, especially when a hurricane remnant sends emergency roofing calls through the roof for a few weeks each fall. In your free audit, we model the real numbers for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Greensboro', state: 'North Carolina', stateAbbr: 'NC', metro: 'Greensboro-Winston-Salem-High Point',
  heroProof: ['Built for the trades', 'Triad neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const greensboroLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'greensboro', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Greensboro Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Greensboro and three businesses show up on the map. We get you into those three so the call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Greensboro, NC',
    h1: 'When Greensboro searches for what you do, be the first name they find',
    h2Exact: 'Greensboro Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone in Greensboro searches \"near me.\" Everyone below them basically doesn't exist. In a Triad market growing fast with new logistics workers and homeowners, we get you into that top three for your neighborhoods so the call lands with you.",
    primaryCta: 'Get my free Greensboro audit',
    intro:
      "Greensboro local SEO comes down to one question: when a homeowner in Lindley Park or a new resident in Summerfield searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The Piedmont Triad is growing fast. Amazon and FedEx operations bring in new families who need roofers, HVAC techs, and plumbers, and the contractors already in the Map Pack are the ones booking that work. Here's how you get there.",
    aioQuestion: 'How do Greensboro businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and Triad neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Greensboro and Triad communities. The Piedmont Triad has distinct seasonal demand windows: hurricane remnant damage in late summer and fall, HVAC calls through the summer heat, and ice-storm emergencies in winter. The contractors who show up in those searches before the season hits are the ones who book the work.",
    problemHeading: "When the Greensboro phone stays quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors are sitting on the only map spots that matter', body: "Search your own service plus \"near me\" right now from Greensboro. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. If you're not one of them, most homeowners in Fisher Park, Irving Park, or Oak Ridge never even see your name, no matter how good your work is. Getting into that top three for the neighborhoods you serve is usually the single highest-return move a Triad contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Greensboro homeowner to three or four contractors at once, then bill each of you to fight over the job. It's a treadmill. Local SEO builds the opposite: a homeowner in Burlington or Mebane finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready for hurricane season", body: "When a Carolina hurricane remnant tracks into the Piedmont, as Florence and Matthew both did, roofing, restoration, and tree-removal calls spike fast. The contractors already in the Map Pack book those jobs; everyone else scrambles. Hurricane season runs August through October, and building your local SEO now is how you own those searches before the next storm." },
    ],
    servicesHeading: 'What it actually takes to rank you in the Triad',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Greensboro and Triad searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone number have to read the same everywhere Google checks. We clean up the listings that disagree and add the ones you never claimed." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished Triad jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Fisher Park, Irving Park, Summerfield, Jamestown, High Point, Burlington, and the rest, so you rank for the specific community someone is actually searching, not just \"Greensboro.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile load time. The unglamorous wiring under the hood that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Triad sources Google respects: the Greensboro Chamber, local press, trade groups, and community partners. In this market that is frequently the difference between page one and page two." },
      { name: 'Hurricane and seasonal SEO', desc: "We optimize for the damage-assessment and emergency searches that spike after storm events and during summer heat, so you're already ranked when demand surges.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content and schema so those engines can read your business and name it in an answer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Triad neighborhoods and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP consistency first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting the week a hurricane makes landfall." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Greensboro, High Point, Burlington, and surrounding communities, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, never vanity rankings. Once a neighborhood is locked in, we move on and go take the next one." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'You go month-to-month once the first 90 days are behind you. No lock-in, cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Greensboro.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across multiple Triad communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Triad map.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane and seasonal SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Greensboro?', a: "Most Greensboro engagements land between $750 and $2,500 a month, depending on how many Triad neighborhoods and keywords you're going after. Our tiers are right above. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How soon will I land in the Greensboro Map Pack?', a: "Profile work can move inside a few weeks. The competitive Triad keywords usually need 90 to 180 days of steady effort, because reviews and citations build slowly. Anyone promising you the top three in 30 days is selling you a story." },
      { q: 'What makes Greensboro local SEO different from other markets?', a: "The Triad has a distinct seasonal pattern most agencies miss. Hurricane remnants tracking inland spike roofing and restoration demand hard in late summer and fall. Summer heat and humidity drive HVAC calls May through September. Ice storms hit in January and February. You have to be ranked before those windows open, not chasing them after." },
      { q: 'Does it help to show up before hurricane season?', a: "Yes, dramatically. When Florence or Matthew equivalents track through the Piedmont, roofing and restoration search volume spikes overnight. The contractors already in the Map Pack take most of those calls. We build your local SEO so you're one of them when the next storm season arrives." },
      { q: 'Which areas do you cover in the Triad?', a: "Greensboro, Winston-Salem, High Point, Burlington, Graham, Mebane, Kernersville, Summerfield, Oak Ridge, Jamestown, and the neighborhoods inside them: Fisher Park, Irving Park, Lindley Park, Hamilton Lakes, and more. We build genuine community pages instead of one generic Greensboro page, because that's what actually ranks." },
      { q: 'Do you mostly work with contractors?', a: "It is close to all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-damage surges, High Point's commercial renovation pipeline, and the Triad's seasonal swings, and we build your local SEO to fit them." },
      { q: 'Will my business turn up in Google AI Overviews and ChatGPT?', a: "More of that \"near me\" research now opens in an AI tool rather than a classic search box. We structure your content and schema so those engines can read, trust, and name your business. In a Triad market filling up with new residents, getting there early is a genuine head start." },
      { q: 'Am I tied into a contract?', a: "No. We ask for a first 90 days because that is roughly how long local SEO takes to show real movement. After that you are month-to-month. If we are not delivering, you walk, and the accountability sits with us." },
      { q: 'How does this break my dependence on Angi and HomeAdvisor?', a: "Those platforms sell the same Greensboro homeowner to a handful of contractors and bill each of you for the privilege. We build rankings, a Google profile, and a review base that route leads straight to you alone. Run it long enough and the brokers matter less, because the work arrives direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Triad neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'greensboro', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Greensboro SEO Company | OnwardCraft',
    metaDescription:
      'Greensboro SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for the Piedmont Triad.',
    eyebrow: 'SEO Services · Greensboro, NC',
    h1: 'Get your Greensboro business to the top of Google and keep it there',
    h2Exact: 'Greensboro SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Triad homeowners search and the leads keep coming. We build that ranking for Greensboro contractors and tie every report to actual calls and jobs, not vanity traffic.",
    primaryCta: 'Get my free Greensboro SEO audit',
    intro:
      "Greensboro SEO comes down to one question: when someone in the Triad searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market that's growing fast: new distribution-center workers buying homes in Summerfield and Oak Ridge, High Point's commercial renovation pipeline, and seasonal spikes that hit hard when hurricane remnants track through the Piedmont. We measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Greensboro businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Triad customers search, publishing genuinely useful local content tied to specific Greensboro neighborhoods and surrounding communities, and earning links from trusted local and regional sources. In the Piedmont Triad, ranking for hurricane-damage and storm-restoration terms ahead of late summer is one of the fastest ways to pull ahead of competitors who wait for the season to start.",
    problemHeading: "Three reasons your Greensboro site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google results, and they rarely scroll far down it. In a growing Triad market with real competition for every trade, if you're not in the top handful of results for what you sell, your site is basically invisible, no matter how good the work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can produce leads fast, but the moment you stop paying, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost of paid search or lead brokers." },
      { title: "You're not ready for the Triad's demand spikes", body: "When a hurricane remnant tracks into the Piedmont, roofing and restoration searches spike for weeks. When summer hits, HVAC calls pour in. When ice storms close roads in January, plumbing and heating calls surge. The contractors who rank for those searches before the season opens catch the work. The rest scramble." },
    ],
    servicesHeading: 'The SEO work that actually moves Triad rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, page speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google needs in place before it will rank your Greensboro site at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Triad customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Greensboro buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Triad and industry sources: local press, chambers of commerce, trade associations. In a competitive market, links are often what separates page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Greensboro, High Point, Burlington, and the surrounding communities." },
      { name: 'Revenue-tied reporting', desc: "We report on phone calls, form fills, and booked leads, not just rankings and traffic charts, so you always know in plain dollars what your SEO is returning." },
      { name: 'Seasonal & hurricane SEO', desc: "We rank you for the storm-damage, emergency-restoration, and weather-driven searches that define the Triad's busiest weeks, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of local research now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across the Triad, then build a roadmap around the keywords most likely to drive real Greensboro leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering. The base layer everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal storm-damage and emergency terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Triad and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting that ties back to leads, then we lean into what is working and push into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Greensboro SEO pricing',
      note: 'You switch to month-to-month after the first 90 days. No lock-in, cancel any time.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Greensboro site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Triad communities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Greensboro and Triad search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & hurricane SEO', 'Multi-location / commercial', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Greensboro?', a: "Most Greensboro SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Greensboro?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Triad-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Triad contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Triad contractors do best running SEO as the long-term engine and ads for short-term coverage during hurricane season or major weather events." },
      { q: 'Should my Greensboro SEO target storm and hurricane demand?', a: "Yes, especially for roofing and restoration. When a hurricane remnant tracks through the Piedmont, search volume for damage assessment and roof repair spikes hard for weeks. Ranking takes months to build, so you have to be in place before the season, not chasing it afterward. We optimize for those storm-damage terms ahead of time so your busiest fall weeks land on you." },
      { q: "What's included in your Greensboro SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal, hurricane, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for a first 90 days because SEO takes about that long to show real movement, and after that you are month-to-month. If we are not delivering, you go." },
      { q: 'Can you get me cited in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and quote your business, not just the classic blue links." },
      { q: 'Which Triad areas do you cover?', a: "Greensboro, High Point, Winston-Salem, Burlington, Graham, Mebane, Kernersville, Summerfield, Oak Ridge, Jamestown, and the neighborhoods inside them, with genuine local pages rather than one generic Greensboro page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads for good?', a: "By building rankings and a Google presence that route Triad leads straight to you. The more search visibility you own, the less you lean on paying brokers full retail for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Triad, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'greensboro', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Greensboro Web Design Company | OnwardCraft',
    metaDescription:
      'Greensboro web design that turns visitors into booked jobs: fast, mobile-first sites built for Triad contractors in a growing market.',
    eyebrow: 'Web Design · Greensboro, NC',
    h1: 'Greensboro web design that turns visitors into booked jobs',
    h2Exact: 'Greensboro Web Design Company',
    heroSubhead:
      "A good-looking website that doesn't generate calls is a brochure. We build Greensboro contractors fast, mobile-first sites engineered to turn Triad visitors into booked work, and to stand out in a market where Amazon, FedEx, and Toyota are bringing in new homeowners every month.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Greensboro contractor websites lose leads quietly: too slow on a phone, call button buried, no clear reason to choose you over the next result. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Fisher Park to Summerfield into booked jobs, ready for the seasonal surges that define the Triad calendar.",
    aioQuestion: 'What makes a good contractor website in Greensboro?',
    aioAnswer:
      "A good Greensboro contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific Triad communities you serve. Because most Greensboro searches happen on mobile, and because the market is growing fast with new residents who don't have established contractor relationships, mobile speed and a compelling first impression are what separate a site that books jobs from one that sits there.",
    problemHeading: "Why your current site isn't bringing in Triad work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result, and the Triad market is adding new homeowners every month as logistics workers settle in. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Greensboro visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your community", body: "A homeowner in Jamestown or Oak Ridge wants to see you serve Jamestown and Oak Ridge, not a generic \"Greensboro\" page that could be anybody. We build sites that name the Triad neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Greensboro website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Triad communities, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Greensboro traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Plain offers, call buttons you can't miss, and lead forms set where Triad homeowners actually fill them out. Every page carries one obvious next step." },
      { name: 'Copy that sells', desc: "Words that speak to Triad homeowners, including the anxiety that comes right after a storm event, and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and Triad-neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance thresholds, which guards your conversions and your rankings at once." },
      { name: 'Triad-targeted neighborhood pages', desc: "Pages built around the specific communities you serve, from High Point and Burlington to Summerfield and Oak Ridge, so you stand out instead of blending into one generic Greensboro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more local research shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Triad service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We mock up a custom, mobile-first layout aimed at booking Triad jobs, then hand it to you to react to and tweak before any code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that actually books the job, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We push it live cleanly, with the SEO foundation, tracking, and load speed all set from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting across your Triad markets." },
    ],
    pricing: {
      heading: 'Transparent Greensboro web design pricing',
      note: 'A one-time build, paid half up front and half at launch. You own everything, and there is no lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Greensboro contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Triad contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Triad-targeted neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Triad businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Greensboro?', a: "Most contractor sites with us land between $2,000 and $8,000 as a one-time build, depending on page count and integrations. The tiers are right above: fixed price, no surprises, and the finished site is yours." },
      { q: 'How long does the build take?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and a heads-up at each stage." },
      { q: 'Will my site help me compete in the Triad?', a: "That's the whole point. We build around the specific Triad communities you serve, keep the site fast, and put a clear offer and call button front and center, so new homeowners in Summerfield or Oak Ridge who don't have a contractor yet choose you." },
      { q: 'Will the new site actually rank on Google?', a: "Every site we build sits on a local SEO foundation: fast load, clean structure, schema, and pages ready for your Triad neighborhoods. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website outright?', a: "Yes, all of it: the site, the domain, and the content. No hostage situations and no platform you can't walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Greensboro traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk you through the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Launch support comes with every build, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever you want." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost Triad leads, what a high-converting Greensboro site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'greensboro', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Greensboro Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Greensboro website without losing rankings. Faster, mobile-first rebuilds that convert more Triad visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Greensboro, NC',
    h1: 'Redesign your Greensboro website without losing your rankings',
    h2Exact: 'Greensboro Website Redesign Company',
    heroSubhead:
      "An outdated site costs you Triad jobs every week: slow on a phone, hard to navigate, easy to ignore when a competitor's site loads faster. We redesign Greensboro contractor sites to convert more and rank better, and we migrate carefully so you keep every bit of ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Greensboro contractor sites for speed and conversions, build them to stand out in a growing Triad market, and migrate with the redirects and SEO care that protect the traffic you already have, so when the next hurricane season hits, you're still ranking for the searches that matter.",
    aioQuestion: 'How do I redesign my Greensboro website without losing SEO and traffic?',
    aioAnswer:
      "You guard your SEO through a redesign by holding your URL structure steady, or mapping a 301 redirect for every page that changes, then preserving your existing content and metadata, carrying your schema across, and testing the whole thing on staging before it goes live. Handled this way, a redesign protects your rankings and usually lifts them, since the new Greensboro site loads faster, works mobile-first, and is built on a cleaner structure than the old one.",
    problemHeading: "Signs your Greensboro site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Triad homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. In a market growing with new residents who have no existing contractor relationships, first impressions are everything." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Greensboro visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It's not ready for hurricane season", body: "When a storm event sends homeowners searching for roofing and restoration help, a slow outdated site loses those leads to competitors who show up fast and look trustworthy. A redesign built for conversion and speed turns that spike in demand into booked jobs, not missed calls." },
    ],
    servicesHeading: "What's in an OnwardCraft Greensboro redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you Triad leads and rankings today, so the redesign fixes real problems instead of just updating the look." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned in the Greensboro market." },
      { name: 'Conversion redesign', desc: "Sharper offers, smarter placement for the call to action, and lead forms Triad homeowners actually complete. We design for booked jobs, not just a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and passing Core Web Vitals, which helps your conversions and your rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Greensboro and Triad traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the ticket size of your jobs." },
      { name: 'Triad neighborhood rebuild', desc: "Rebuilt around the specific communities you serve, from High Point and Burlington to Summerfield and Jamestown, so the new site stands out in a growing market instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more local research shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you Triad leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first layout shaped for the Triad homeowner, mocked up so you can react to it and adjust it well before anyone rebuilds a single page." },
      { name: 'Rebuild and migrate', desc: "We rebuild quickly and line up every redirect and SEO detail so the migration lands clean." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop. That matters most heading into any major demand window." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting across your Triad service areas, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Greensboro redesign pricing',
      note: 'A one-time project, paid half to start and half at launch. You own everything, with no lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Greensboro contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Triad contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Triad neighborhood rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Triad businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Greensboro?', a: "Greensboro redesigns with us land between $2,500 and $9,000, billed once, with the price driven by how many pages we rebuild and what we integrate. The number is fixed before we start, and the finished site belongs to you." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it's handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, hold onto content and metadata, carry your schema across, and test on staging first. Done right, a redesign keeps your Triad rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and updates as each stage lands." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in Triad leads, or isn't ready for the storm-season traffic spikes, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect the pages that are already ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Will the redesign help me compete in the Triad?', a: "Yes, and that's the point in a growing market. We rebuild around the specific communities you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of blending into a generic Greensboro page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and Core Web Vitals, which raises both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract for the redesign?', a: "No lock-in at all. You pay once for the rebuild itself, and if you want us handling maintenance or SEO afterward, that part stays month-to-month so you can stop whenever it suits you." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Triad leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const greensboroCity = {
  citySlug: 'greensboro', city: 'Greensboro', state: 'North Carolina', stateAbbr: 'NC', metro: 'Greensboro-Winston-Salem-High Point',

  titleTag: 'Greensboro Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Greensboro and Triad contractors. Get found, get booked, and own your leads instead of renting them, built for a growing market.',

  eyebrow: 'Greensboro · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Greensboro contractors found and booked',
  h2Exact: 'Greensboro Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Piedmont Triad: a growing manufacturing and logistics market where new homeowners are buying in Summerfield, Oak Ridge, and Mebane every month, and where hurricane season sends trade demand spiking every fall.",
  heroProof: ['Built for the trades', 'Triad neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Greensboro audit',

  intro:
    "Greensboro sits at the heart of the Piedmont Triad, a market stretching through Winston-Salem and High Point that is growing fast with Amazon, FedEx, and Toyota operations bringing in workers who become homeowners. That growth means real opportunity, but it also means more competition for the three spots on Google's map when someone searches your service. Winning the Triad takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the communities you serve, ready for HVAC season in July and roofing calls when the next hurricane remnant tracks inland. Here's how we help Greensboro contractors do exactly that.",
  aioQuestion: 'How do Greensboro contractors get more leads online?',
  aioAnswer:
    "Greensboro contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack community by community across the Triad. The contractors who also optimize for the Piedmont's seasonal demand windows, hurricane storm-damage in late summer and fall, HVAC calls through the summer heat, and ice-storm emergencies in winter, capture the spikes that define their busiest and most profitable weeks.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Triad Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Greensboro and Triad homeowners search \"near me,\" done right, neighborhood by neighborhood, before hurricane season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Triad customers actually search, build an asset you own instead of renting traffic from ads, and measure it in real leads, not vanity impressions.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn Triad visitors into booked jobs, designed around the communities you serve, not a generic template with a city name swapped in.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you've already earned heading into the next busy season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Greensboro?', a: "Four core services for Triad contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that's growing fast with new homeowners." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. That focus is why we understand hurricane-damage surges, High Point commercial renovation work, and Triad seasonal cycles." },
    { q: 'Why does the Greensboro market need a different approach?', a: "The Piedmont Triad has a distinct seasonal demand pattern most agencies miss: hurricane remnant damage drives roofing and restoration calls in late summer and fall, summer humidity drives HVAC calls May through September, and ice storms spike heating and plumbing calls in January and February. Winning here means being ranked before those windows open, not reacting after." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO are month-to-month, $750 to $3,000, with no long contract. We pin down the exact scope in your free Greensboro audit." },
    { q: 'Which Greensboro and Triad areas do you serve?', a: "Greensboro, High Point, Winston-Salem, Burlington, Graham, Mebane, Kernersville, Summerfield, Oak Ridge, Jamestown, and the neighborhoods inside them: Fisher Park, Irving Park, Lindley Park, Hamilton Lakes, and more." },
    { q: 'Where should I start?', a: "Start with a free Greensboro audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most Triad work fastest. No pitch deck, just a plan." },
  ],
};

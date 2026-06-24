// Per-metro × per-service local landing pages for DENVER. Renders via /[city]/[service]/.
// BUILT with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (market, areas, founder, why, proof) are defined once
// and reused across that city's service pages. Service-specific blocks are
// authored per entry. PRICING is aligned to market range; confirm with founder.
//
// DENVER ANGLE (NOT Miami's bilingual one): Colorado is Hail Alley, the most
// severe hail season in North America, so roofing/restoration demand spikes
// hard every storm. Layered on top: one of the fastest-growing transplant
// markets in the country, plus winter/snow demand and altitude. That's the
// genuine local wedge, repeated across all 4 service pages and the hub.

// ===========================================================================
// DENVER: shared city blocks (also imported by the /denver/ hub in cities.js)
// ===========================================================================
const MARKET = {
  heading: 'Why Denver rewards contractors who rank before the storm',
  body:
    "About 3 million people live across the Denver metro, and the number keeps rising fast: the region pulled transplants at one of the highest rates in the nation last year, and projections push it past 3.6 million by 2030. Every one of those arrivals is a homeowner who has never called a local contractor and opens Google the moment something breaks. Then there is the part of Denver no other market deals with at this scale. Colorado sits squarely in Hail Alley, the most punishing hail belt on the continent, and the metro absorbs three or four severe storms a season from roughly mid-April into mid-September. A single May 2017 storm ran past $2 billion in damage on its own. The day after hail lands, searches for roofing, restoration, gutters, and exteriors explode, and the companies parked in the top three of the Map Pack are the ones filling their calendars.",
  pullQuote: 'The next hailstorm fills somebody\'s calendar for two months. Rank in the top three and that somebody is you.',
  donut: {
    title: 'How Denver searches',
    value: 60,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 60, kind: 'teal' },
      { label: 'Desktop', pct: 40, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail season (Apr-Sep) + winter storm calls',
  seasonalDemand: [
    { m: 'J', v: 48, peak: true }, { m: 'F', v: 46, peak: true }, { m: 'M', v: 54 },
    { m: 'A', v: 72, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 84, peak: true }, { m: 'S', v: 76, peak: true },
    { m: 'O', v: 58 }, { m: 'N', v: 50 }, { m: 'D', v: 52, peak: true },
  ],
  stats: [
    { value: '3M+', label: 'people across the Denver metro' },
    { value: '#1-2', label: 'state in the nation for hail-damage insurance claims', accent: true },
    { value: 'Apr-Sep', label: 'hail season, when roofing and restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'LoDo', 'RiNo', 'Cherry Creek', 'Highlands', 'Capitol Hill',
    'Washington Park', 'Five Points', 'Central Park', 'Wash Park', 'Berkeley',
    'Sloan\'s Lake', 'Park Hill', 'Baker', 'Stapleton', 'Wash Park West',
  ],
};

const AREAS = [
  'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Centennial',
  'Littleton', 'Thornton', 'Englewood', 'Wheat Ridge', 'Broomfield',
  'Highlands Ranch', 'Parker', 'Castle Rock', 'Commerce City',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists. I kept watching skilled Denver contractors wire a few thousand dollars a month to Angi and HomeAdvisor for the privilege of fighting three competitors over the exact same homeowner. That is not a business, that is a rental agreement. So the entire job here is simple: get you ranking and converting for the work you want, in the Denver neighborhoods you actually serve, with leads that belong to you and nobody else. No year-long handcuffs either. If the work stops paying off, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We live in storm season, after-hours emergency calls, and insurance jobs, so every page we build mirrors how your Denver customers actually search and decide.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you own outright. Not one more monthly check to a lead broker for a homeowner that three of your Denver competitors also just paid for.",
  },
  {
    title: 'We actually speak Denver',
    body: "Hail-season surges, the transplant wave, winter storm calls, real neighborhood-level targeting. None of it survives a national agency dropping a city name into the same tired template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices published in the open, reporting tied to real leads, month-to-month once the first 90 days are done. If we stop earning it, you walk. That keeps the pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "Plenty of agencies will wave a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can hand you is the reason this works, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a projection, not a result we are claiming: a hailstorm tears across the metro and a Denver roofer watches \"roof repair near me\" searches climb for weeks straight. Sitting on page two means watching all of it. Climbing into the top three means catching the surge that otherwise lands with the three companies already ranked. In your free audit we model the real figures for your business: your rankings today, your search volume, and an honest 90-to-180-day path to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Denver', state: 'Colorado', stateAbbr: 'CO', metro: 'Denver Metro',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const denverLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Denver Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Denver Local SEO that lands your company in the top three on the map, so you catch every hailstorm surge and own the leads instead of renting them.',
    eyebrow: 'Local SEO · Denver Metro',
    h1: 'Denver Local SEO that puts you in the Map Pack before the next hailstorm',
    h2Exact: 'Denver Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search, and the rest of the list barely registers. We move you into that top three, so the morning after the next hailstorm the call rings your phone instead of the company that beat you to page one.",
    primaryCta: 'Get my free Denver audit',
    intro:
      "Denver Local SEO lives or dies in a single moment. A homeowner in Highlands or Centennial pulls out their phone after a storm, runs a \"near me\" search like \"roof repair near me,\" and taps one of the three businesses Google has pinned to the Map Pack. They rarely scroll past that local 3-pack. In a metro that swallows three or four serious hailstorms a season and gains new homeowners every single month, claiming one of those three pins is the whole contest. Below is exactly how our local SEO services win it for you.",
    aioQuestion: 'How do Denver businesses rank higher in local search?',
    aioAnswer:
      "Ranking comes down to four moving parts working together: a Google Business Profile tuned to the services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady flow of genuine reviews, and local content shaped around the way Denver actually searches. Since Colorado sits in Hail Alley, demand jumps the moment a storm passes, so the businesses that win look established, respond fast, and were already ranked long before the hail arrived.",
    problemHeading: "If your phone has gone quiet, it usually traces back to one of these",
    painPoints: [
      { title: 'Competitors own all three pins on the map', body: "Search your own service plus \"near me\" right now and look at the three businesses Google clamps to the map. They soak up the lion's share of the clicks. Stay off that list and the quality of your work stops mattering, because most Denver homeowners never lay eyes on your name. For a local contractor, climbing into that trio is usually the single highest-return move available." },
      { title: "You are paying for leads you never get to keep", body: "Angi, Thumbtack, and HomeAdvisor sell one Denver homeowner to four contractors at once, then charge each of you to brawl over the scraps. It is a treadmill that speeds up the harder you run. Local SEO builds the reverse: a homeowner finds you, calls you, and no competitor got the same lead. Month by month you stop renting and start owning." },
      { title: "You are not ranked when the hail comes down", body: "Storm demand in Denver arrives in days, not months. If you are not already sitting in the top three when a hailstorm lands, there is no climbing fast enough to catch the rush, and those homeowners dial the companies who ranked before the clouds rolled in. Rankings are built ahead of the season, never scrambled together after it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We tighten your categories, services, service area, photos, and posts so Google understands precisely which Denver searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and create the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that converts finished Denver jobs into a dependable stream of reviews. It lifts your ranking and gets the next homeowner to actually dial." },
      { name: 'Neighborhood pages', desc: "Real pages for Highlands, Cherry Creek, Centennial, Arvada, and the rest, so you rank for the neighborhood a homeowner typed rather than a generic \"Denver\" search." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the floorboards that lets everything above it earn a ranking." },
      { name: 'Local link building', desc: "Mentions and links from Denver sources Google already trusts: local press, trade associations, partners. In a market this packed, that is frequently what splits page one from page two." },
      { name: 'Storm-season readiness', desc: "We get you ranked and your profile primed before hail season opens, so you ride the surge instead of scrambling once the storm has already hit. Almost no competitor plans this far ahead.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read your business and cite it.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across each service area, then pin down which competitors are beating you in the Denver Map Pack and the exact reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Denver contractors see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These stack week over week, which is the whole reason ranking before hail season beats chasing it afterward." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the metro, plus the on-page work that gives them something to stand on." },
      { name: 'Report and expand', desc: "Plain-English reporting built around calls and booked leads, not vanity rankings. Then we go take the next Denver neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors scrapping across several Denver suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the metro locked down before hail season.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season readiness', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Denver?', a: "Most Denver engagements settle between $750 and $2,500 a month, set by how many suburbs and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The genuinely competitive Denver keywords usually need 90 to 180 days of steady effort, because reviews and citations build on each other over time. Anyone guaranteeing page one in 30 days in a market this crowded is selling you a story." },
      { q: 'What makes Denver local SEO different from regular SEO?', a: "Hail, mostly. Colorado sits in Hail Alley, so roofing, restoration, and exterior trades see demand spike sharply three or four times a season, and your ranking has to already be live before the storm to catch it. Layer on the fact that Denver is one of the fastest-growing metros in the country, and you have a constant inflow of new homeowners hunting for a contractor they have never used." },
      { q: 'When is hail season in Denver and why does it matter for SEO?', a: "Denver's hail season stretches from roughly mid-April into mid-September, with the metro typically taking three or four serious storms a year. Demand for roofing and restoration surges within days of one landing. Since rankings take months to build, you need to be in the top three before the season opens, not trying to climb after the storm has already shipped the calls to your competitors." },
      { q: 'Which areas do you cover?', a: "All of the Denver metro and the suburbs ringing it: Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, Highlands Ranch, Parker, Castle Rock, and beyond. We build real neighborhood pages instead of one catch-all Denver page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know emergency calls, storm-driven rushes, and insurance jobs cold, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research kicks off inside AI now rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly the runway local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep a scrap of. We build rankings, a Google profile, and a review base that route Denver homeowners straight to you. Over time you lean on the lead brokers less, because the work is already arriving on its own." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to outrank you, the fixes that will move you fastest, and a realistic 90-to-180-day Denver Local SEO plan with the numbers run for your specific business. No pitch deck. Just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Denver SEO Company | Rank for the Searches That Book Jobs | OnwardCraft',
    metaDescription:
      'Denver SEO that ranks contractors on Google and delivers leads you own, built for hail season and a booming market. Revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Denver Metro',
    h1: 'Denver SEO that climbs you to the top of Google and holds it through hail season',
    h2Exact: 'Denver SEO Company',
    heroSubhead:
      "The second you stop paying for ads, the leads stop cold. SEO flips that: rank once for what your Denver customers search and the leads keep arriving, storm surges included. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Denver SEO audit',
    intro:
      "Denver SEO boils down to one question: when a homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty. As an SEO agency built for the trades, we get contractors ranking on Google for the money keywords that pay, the storm-driven \"hail damage\" and \"roof repair\" terms that spike every season very much included, and we score it in organic traffic that turns into leads rather than vanity numbers.",
    aioQuestion: 'How do Denver businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page to the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Denver sources. In a fast-growing, hail-prone market like this one, ranking for storm-restoration terms ahead of the season and keeping the site quick on mobile are two of the fastest ways to leap past slower competitors.",
    problemHeading: "Three reasons your Denver site is not pulling in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past Google's first page, and they rarely scroll deep into it. If you are not among the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can pull their weight, but the instant your card stops, the leads stop with it. SEO builds an asset you keep: rankings that go on producing leads months and years after the work, at a fraction of the cost per lead." },
      { title: "You are not ranked for storm terms before the season", body: "When hail batters Denver, searches for \"hail damage roof\" and \"storm restoration\" surge for weeks. If your site is not already ranking for those terms, the spike passes you by entirely, and you cannot build that ranking quickly enough once the storm has landed. We get you ranked ahead of season." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google demands before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Denver customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, attract links, and bring leads in on their own." },
      { name: 'Link building', desc: "Authority from real Denver and industry sources. In a competitive market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm & restoration SEO', desc: "We rank you for the hail-damage and restoration terms that spike every Denver season, and we get you ranked before the storms hit instead of after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Denver leads, the storm-season terms included." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in place before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including storm-restoration pages wherever they pay off." },
      { name: 'Build authority', desc: "Links and citations from trusted Denver and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Denver SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Denver search, storms and all.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & restoration SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Denver?', a: "Most Denver SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Denver?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Denver keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps generating leads at a lower cost per lead over time. Most Denver contractors do best running SEO as the long-term engine and ads for short-term spikes, like the days right after a hailstorm." },
      { q: 'Can SEO help me capture Denver hail-storm demand?', a: "Yes, and it is one of the strongest reasons to start early. After a Denver hailstorm, searches for \"hail damage roof,\" \"storm restoration,\" and \"roof replacement\" surge for weeks. Rankings take months to build, so we get you ranked for those terms before the season. Show up after the storm and the demand has already gone to whoever ranked first." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-restoration and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it goes month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Denver do you cover?', a: "All of the Denver metro and the surrounding suburbs: Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, Highlands Ranch, and more, with real local pages rather than one generic Denver page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you lean on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic Denver SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Denver Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Denver Web Design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for the hail-season demand surge.',
    eyebrow: 'Web Design · Denver Metro',
    h1: 'Denver web design that turns LoDo-to-Castle-Rock visitors into booked jobs',
    h2Exact: 'Denver Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Denver contractors fast, mobile-first sites engineered to turn visitors into booked work, and built to hold up when a hailstorm sends the whole metro searching at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Denver Web Design is where most contractor websites quietly bleed leads: sluggish on a phone, the call button buried, no clear offer while a homeowner is standing in the yard staring at hail-dented gutters. A website design done properly closes every one of those gaps. We build fast-loading, mobile-first sites that carry the look of the established pro you already are and convert visitors from LoDo to Castle Rock into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Denver?',
    aioAnswer:
      "A strong Denver contractor website loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, and earns trust with reviews and real project photos. Because most Denver searches happen on mobile and storm demand can surge overnight, mobile speed and a site that can absorb a traffic spike are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a Denver visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Denver visitors are on mobile, and they bounce the second your site needs more than a few moments to load. Slow sites rank worse too. We build fast, so you hang onto both the visitor and the ranking." },
      { title: "It folds when storm demand spikes", body: "After a Denver hailstorm, the whole metro searches at once. A slow or poorly built site that cannot convert that rush quietly hands the surge to a competitor. We build for speed and clarity so you actually catch the spike." },
    ],
    servicesHeading: "What's in an OnwardCraft Denver website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the Denver jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Denver traffic comes from. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where homeowners actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious Denver homeowner staring at storm damage and get the job booked, not filler that reads like every other contractor." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and pages ready for neighborhood targeting." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects conversions and rankings at the same time." },
      { name: 'Storm-ready landing pages', desc: "Dedicated hail-damage and restoration pages built to convert the storm surge, with the fast load and unmistakable call-to-action that rush demands. Almost no Denver competitor builds these.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best Denver jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, the storm-restoration pages that catch hail-season demand included." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from the very first day." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is genuinely converting." },
    ],
    pricing: {
      heading: 'Transparent Denver web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-ready landing pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Full storm-restoration build', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Denver?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count, whether you need dedicated storm-restoration pages, and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Can you build hail-damage and storm-restoration pages?', a: "Yes, and in Denver it is one of the smartest moves you can make. We build dedicated, fast-loading pages for hail damage, roof replacement, and storm restoration, so when the next storm sends the metro searching, your site is the one that ranks and converts the rush." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for neighborhood targeting. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Denver terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Denver traffic comes from. Fast load, call buttons built for a thumb, and forms that are easy to finish on a small screen." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Denver Web Design build should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Denver Website Redesign | Convert More, Keep Your Rankings | OnwardCraft',
    metaDescription:
      'Denver Website Redesign that converts more without losing rankings. Faster, mobile-first rebuilds that turn visitors into booked jobs and catch storm demand.',
    eyebrow: 'Website Redesign · Denver Metro',
    h1: 'Denver Website Redesign that converts the hail-season surge without losing your rankings',
    h2Exact: 'Denver Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, and useless when storm demand spikes. We redesign Denver contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Denver Website Redesign usually crashes one of two ways: the site looks sharper but converts no better, or it launches and the rankings evaporate overnight. We do neither. We rebuild Denver contractor sites for speed and conversions, work in the storm-restoration pages that catch hail-season demand, and run an SEO-safe migration with the redirects that guard the traffic you already have, so you redesign without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Denver site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job like a roof replacement, a Denver homeowner sizes you up by your site in seconds. An old, cluttered design slides them over to a competitor who simply looks more established, even when your work runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or hard to use on mobile, you are losing the majority of your Denver visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot convert the storm surge", body: "When hail hits Denver, the search rush is short and ferocious. A site that is slow or has no clear storm-restoration path squanders that traffic. We rebuild for conversions and add the pages that catch the spike." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a clean pass on Core Web Vitals, which helps conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Denver traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on your Denver jobs." },
      { name: 'Storm-restoration rebuild', desc: "We add dedicated hail-damage and restoration pages built to convert the storm surge, the very part most Denver sites are missing entirely.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, add the storm-restoration pages, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and improve rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Denver redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-restoration pages'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Full storm-restoration build', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Denver?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size, whether you need dedicated storm-restoration pages, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or has no clear path to convert storm demand, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, protect whatever is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Can you add hail-damage and storm-restoration pages?', a: "Absolutely, and in Denver we push for it. Dedicated, fast-loading storm-restoration pages let the rebuilt site catch the search surge after a hailstorm, the part most Denver contractor sites are missing." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts conversions and rankings together." },
      { q: 'Do I own the redesigned site?', a: "Completely. The site, the domain, and the content are all yours. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the Denver Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

// ===========================================================================
// DENVER: city hub (rendered at /denver/). Imports the shared blocks above.
// ===========================================================================
export const denverCity = {
  citySlug: 'denver', city: 'Denver', state: 'Colorado', stateAbbr: 'CO', metro: 'Denver Metro',

  titleTag: 'Denver Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Denver marketing for contractors, built for hail season and a fast-growing metro: web design, SEO, and local SEO that get you found, booked, and owning your leads.',

  eyebrow: 'Denver · Web Design, SEO & Lead Generation',
  h1: 'Denver marketing for contractors that gets you found and booked before the next storm',
  h2Exact: 'Denver Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Denver's storm-driven, fast-growing market. One team to get you ranking, converting, and off the rented-lead treadmill, and ranked before the next hailstorm lands.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Denver audit',

  intro:
    "Denver marketing for contractors means competing for attention in one of the fastest-growing metros in the country, one that also sits in Hail Alley, where storm demand can spike overnight. Winning here takes three things firing together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack before the next storm. As a digital marketing agency that pairs web design and SEO for Denver contractors, here is how we help you get found and booked.",
  aioQuestion: 'How do Denver contractors get more leads online?',
  aioAnswer:
    "Denver contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Colorado sits in Hail Alley and the metro keeps adding new homeowners, the contractors who already rank when a storm hits and who look established win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Climb into the top three businesses Google pins to the map when Denver searches \"near me,\" so you ride the storm surge instead of missing it. The single highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay, the hail-damage and restoration terms that spike every season included, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and built to absorb the traffic rush when a hailstorm sends the metro searching at once.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the storm-restoration pages that catch hail demand, and migrate with care so you keep every bit of ranking you have earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Denver?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ranked before hail season opens." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'What makes Denver different from other markets?', a: "Two things. Colorado sits in Hail Alley, so roofing and restoration demand spikes three or four times a season and you have to be ranked before the storm to catch it. And Denver is one of the fastest-growing metros in the country, with a constant flow of new homeowners hunting for a contractor." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Denver areas do you serve?', a: "All of the Denver metro and the surrounding suburbs: Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, Highlands Ranch, Parker, Castle Rock, and more, plus city neighborhoods like LoDo, RiNo, Cherry Creek, and Highlands." },
    { q: 'Where should I start?', a: "Start with a free Denver audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Denver marketing for contractors plan that will bring in the most work fastest, hail season firmly in mind. No pitch deck, just a plan." },
  ],
};

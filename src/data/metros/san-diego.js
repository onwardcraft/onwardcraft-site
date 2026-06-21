// SAN DIEGO: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across San Diego's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SAN DIEGO: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What makes ranking in San Diego a different game',
  body:
    "Roughly 3.3 million people live across San Diego County, which puts it fifth among all U.S. counties for population. Translation: a deep pool of homeowners, and a long line of contractors elbowing to reach them. Two forces bend this market in ways most cities never see. The first is language. Over a third of the county is Hispanic, and a serious volume of those searches run in Spanish, so an English-only listing and site simply will not surface for a wide slice of paying customers from National City through the rest of South Bay. The second is fire. Roughly October through January, Santa Ana winds dry out the back-country and push risk sky-high, and calls for roofing, tree work, restoration, and electrical rise right alongside it. Layer on the heavy Navy and Marine footprint around Naval Base San Diego and Camp Pendleton, plus tourists arriving all year, and you have a market where whoever already ranks claims the job before you ever get the call.",
  pullQuote: 'In San Diego, ranking in both English and Spanish means you are casting into a far deeper pond than your competitors.',
  donut: {
    title: 'How San Diego searches',
    value: 35,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic residents', pct: 35, kind: 'teal' },
      { label: 'Everyone else', pct: 65, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wildfire and Santa Ana season (Oct-Jan), gentler swings the rest of the year',
  seasonalDemand: [
    { m: 'J', v: 58, peak: true }, { m: 'F', v: 50 }, { m: 'M', v: 52 }, { m: 'A', v: 56 },
    { m: 'M', v: 60 }, { m: 'J', v: 64 }, { m: 'J', v: 66 }, { m: 'A', v: 68 },
    { m: 'S', v: 72, peak: true }, { m: 'O', v: 84, peak: true }, { m: 'N', v: 80, peak: true },
    { m: 'D', v: 70, peak: true },
  ],
  stats: [
    { value: '3.3M+', label: 'people across San Diego County' },
    { value: '~35%', label: 'of the county is Hispanic, and many search in Spanish', accent: true },
    { value: 'Oct-Jan', label: 'wildfire and Santa Ana season, when demand climbs' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'North Park', 'La Jolla', 'Pacific Beach', 'Hillcrest', 'Ocean Beach',
    'Point Loma', 'Clairemont', 'Chula Vista', 'La Mesa', 'Encinitas',
    'Carlsbad', 'Escondido', 'El Cajon', 'Oceanside', 'National City',
  ],
};

const AREAS = [
  'San Diego', 'Chula Vista', 'Oceanside', 'Escondido', 'Carlsbad', 'El Cajon',
  'Vista', 'San Marcos', 'Encinitas', 'National City', 'La Mesa', 'Santee',
  'Poway', 'Coronado', 'Imperial Beach',
];

const FOUNDER =
  "Let me give it to you straight: I built OnwardCraft after watching solid San Diego contractors wire a few grand a month to Angi and HomeAdvisor for leads that three rivals down the street bought at the same time. Rented leads are quicksand. So here is the entire reason this shop exists: rank you and convert you for the work you genuinely want, in the neighborhoods you genuinely serve, and hand you leads that stay yours. No year-long handcuffs. If the needle is not moving, you show us the door.";

const WHY = [
  {
    title: 'Trades are all we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. Santa Ana fire season, 2 a.m. emergency calls, insurance claims: we know the rhythm, so every page we build mirrors how San Diego homeowners actually go looking for you.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The target is a pipeline with your name on it. Not one more monthly check to a lead broker for the same homeowner three of your competitors already paid to chase.",
  },
  {
    title: 'We genuinely know San Diego',
    body: "A bilingual county where a third of buyers search in Spanish, fire-driven demand that climbs with the Santa Anas, a huge military population near the bases, and street-level targeting from La Jolla down to Chula Vista. None of which a national shop can fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to real leads, month-to-month once the first 90 days are up. If we stop earning it, you leave. That parks the pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is honest math instead of a wall of logos",
  body:
    "Plenty of agencies will wave a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can put in front of you is why this works, pulled straight from Google's and the industry's own research on the way people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a projection rather than a result we are claiming: a San Diego contractor pulling somewhere near 1,500 local \"near me\" impressions a month. Climbing from page-two invisibility into the top three is the gap between a slow drip of calls and a calendar with no white space, and once the Santa Anas kick up during fire season, that gap stretches even wider. In your free audit we model the real figures for your business: your current rankings, your search volume, and a straight 90-to-180-day plan.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of them are past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'San Diego', state: 'California', stateAbbr: 'CA', metro: 'San Diego County',
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const sanDiegoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'san-diego', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'San Diego Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your trade in San Diego and three businesses pin to the map. We put you in those three so the call rings your phone, in English and Spanish.',
    eyebrow: 'Local SEO · San Diego County',
    h1: 'When San Diego searches for your trade, be the first name on the map',
    h2Exact: 'San Diego Local SEO Company',
    heroSubhead:
      "Search \"near me\" and Google hands the map to three businesses. Everyone underneath them might as well not exist. We muscle you into that top three so the call rings your line instead of whoever happened to rank first, and we make sure you also surface for the Spanish-speaking customers your competitors quietly ignore.",
    primaryCta: 'Get my free San Diego audit',
    intro:
      "San Diego local SEO boils down to a single test: when a homeowner in North Park or Chula Vista types your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll past. In a county this big, this bilingual, and this fire-prone, becoming one of those three, in English and Spanish both, is the entire game. Here is how you get there.",
    aioQuestion: 'How do San Diego businesses rank higher in local search?',
    aioAnswer:
      "You win by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady drip of real reviews, and local content tied to actual San Diego neighborhoods. Since over a third of the county is Hispanic, ranking in Spanish too stretches your reach, and getting visible before fire season is how you catch the demand surge instead of arriving late.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Competitors are sitting on all three map spots', body: "Pull up your own service plus \"near me\" right now. Those three businesses Google pins to the map? They scoop up the lion's share of the clicks. If your name is not among them, the quality of your work barely registers, because most searchers never scroll far enough to find you. For a San Diego business, breaking into that top three is usually the single highest-return move on the board." },
      { title: "You are paying for leads that never belong to you", body: "Angi, Thumbtack, and HomeAdvisor sell the same San Diego homeowner to four contractors, then charge every one of you to scrap over them. It is a treadmill you can run on forever. Local SEO builds the inverse: a lead finds you, dials you, and no rival got the same name. Run it long enough and you stop renting and start owning your pipeline." },
      { title: "A third of the market cannot even see you", body: "More than a third of San Diego County is Hispanic, and plenty of those searches happen in Spanish, heaviest across South Bay. If your profile and pages speak only English, you never appear for those homeowners at all. Ranking bilingually swings open a whole flank of the county your competitors keep leaving on the table." },
    ],
    servicesHeading: 'What ranking you actually requires',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which San Diego searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read identically everywhere Google checks. We repair the listings that disagree and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that turns every finished job into a fresh review. It lifts your ranking and nudges the next homeowner to pick up the phone." },
      { name: 'Neighborhood pages', desc: "Genuine pages for North Park, Chula Vista, La Jolla, Oceanside and the rest, so you rank for the exact neighborhood someone is searching, not a vague \"San Diego.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing beneath the floorboards that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from San Diego sources Google already trusts: local press, trade associations, partners. In this market, that is frequently what divides page one from page two." },
      { name: 'Bilingual local SEO', desc: "We build and optimize in Spanish as well, so you show up for the third of the county that searches that way, a slice most of your competitors never touch.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you rank today across your service areas, then pin down which competitors are beating you in the San Diego Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, because they move fastest. Early lift here usually shows inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These compound week over week, which is exactly why local SEO pays off more for the contractor who starts now than the one who waits." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the county, in English and in Spanish where it earns its keep, plus the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, not vanity rankings. Then we go take the next San Diego neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses battling across several San Diego areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map countywide.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual local SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in San Diego?', a: "Most San Diego engagements sit between $750 and $2,500 a month, scaling with how many neighborhoods and keywords you are chasing. Our tiers are right above. No hidden fees, no long contract, and we lock down the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive San Diego keywords usually need 90 to 180 days of steady work, because reviews and citations build on each other over time. In a market this size, anyone promising you page one in 30 days is selling smoke." },
      { q: 'What makes San Diego local SEO different?', a: "Two things. It is a big bilingual county, over a third Hispanic with heavy Spanish-language search, so ranking both ways widens your pool. And it is fire country, where trade demand climbs with the Santa Anas in fall and winter, which means your ranking has to be set before the season opens, not scrambled together after." },
      { q: 'Should my local SEO be in Spanish too?', a: "If you want the whole market, yes. More than a third of San Diego County is Hispanic, and a large share of those homeowners search and read in Spanish, especially across South Bay and National City. We can optimize your profile and build content in both languages so you appear for customers your English-only competitors never reach." },
      { q: 'How does local SEO help during wildfire season?', a: "When the Santa Ana winds blow from roughly October into January, fire risk jumps and so do searches for roofing, tree work, restoration, and electrical. The businesses already parked in the Map Pack field those calls. We get you ranked and reviewed ahead of the season so you catch that demand instead of chasing it once everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "All of San Diego County and the surrounding cities: North Park, Pacific Beach, La Jolla, Point Loma, plus Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon and more. We build real neighborhood pages instead of one generic San Diego page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, fire-driven demand, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now begins inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast turning into something as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days, since that is roughly how long local SEO needs to post real movement. After that it goes month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the lead brokers less, because the work is already coming to you directly." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'san-diego', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'San Diego SEO Company | OnwardCraft',
    metaDescription:
      'San Diego SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, bilingual-ready, and no lock-in contracts.',
    eyebrow: 'SEO Services · San Diego County',
    h1: 'Get your San Diego business to the top of Google and keep it parked there',
    h2Exact: 'San Diego SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the opposite: rank once for what your San Diego customers search, and the leads keep showing up. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free San Diego SEO audit',
    intro:
      "San Diego SEO comes down to one question: when someone searches your trade, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the keywords that pay in a big, bilingual, fire-prone county, and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do San Diego businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page to the exact terms customers search, publishing genuinely useful local content, and earning links from trusted San Diego sources. In a large, competitive county where over a third of searches can run in Spanish, ranking bilingually and aiming at fire-season demand are two of the quickest ways to pull ahead of the pack.",
    problemHeading: "Three reasons your San Diego site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past the first page of Google, and they rarely scroll deep into it. If you are not among the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can pull their weight, but the second your card stops, so do the leads. SEO builds an asset with your name on it: rankings that keep producing leads for months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You are reaching only half the county", body: "San Diego is more than a third Hispanic, and a big chunk of those homeowners search in Spanish. If every page on your site is English-only, you skip a huge, paying part of the county. Ranking in both languages is one of the clearest edges here, and almost nobody is pulling it off well." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your San Diego customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, attract links, and bring in leads while you are out on jobs." },
      { name: 'Link building', desc: "Authority from real San Diego and industry sources. In a competitive county, links are often the difference between page one and page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know exactly what your SEO is worth." },
      { name: 'Bilingual and seasonal SEO', desc: "We rank you in Spanish as well as English, and for the fire-season searches that drive San Diego's busiest months, so you reach the whole market before demand peaks.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, exactly where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real San Diego leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else has to stand on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the bilingual and fire-season terms that matter in this county." },
      { name: 'Build authority', desc: "Links and citations from trusted San Diego and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent San Diego SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own San Diego search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Bilingual & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in San Diego?', a: "Most San Diego SEO engagements run $900 to $3,000 a month, scaling with how competitive your keywords are and how much content and link work the job needs. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in San Diego?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested San Diego keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that quits when you quit paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my San Diego SEO be in Spanish too?', a: "For most contractors here, yes. Over a third of the county is Hispanic, and a large share of those homeowners search in Spanish, especially in South Bay and National City. We build and optimize content in both languages so you rank for customers your English-only competitors never reach. It is one of the biggest untapped edges in this market." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers fold in bilingual and fire-season optimization plus AI-search work. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to post real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around San Diego do you cover?', a: "All of San Diego County and the surrounding cities: Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, La Mesa, Encinitas and more, with genuine local pages rather than one generic San Diego page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'san-diego', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'San Diego Web Design Company | OnwardCraft',
    metaDescription:
      'San Diego web design that turns visitors into booked jobs: fast, mobile-first, bilingual-ready sites built specifically for contractors.',
    eyebrow: 'Web Design · San Diego County',
    h1: 'San Diego web design that turns visitors into booked jobs',
    h2Exact: 'San Diego Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build San Diego contractors fast, mobile-first sites engineered to turn visitors into booked work, and we can build them bilingual so you reach the whole county instead of half of it.",
    primaryCta: 'Get my free quote',
    intro:
      "Most San Diego contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer, English only. Web design done right plugs every one of those leaks. We build sites that load fast, carry the polish your work deserves, and turn La-Jolla-to-Chula-Vista visitors into booked jobs, in English and Spanish where it helps you land more work.",
    aioQuestion: 'What makes a good contractor website in San Diego?',
    aioAnswer:
      "A strong San Diego contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and reaches the whole county, which here often means a Spanish-language option. Because most San Diego searches happen on mobile, mobile speed and one obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your San Diego visitors are on mobile, and they bail the moment your site drags past a few seconds. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking both." },
      { title: "It speaks to only half the county", body: "More than a third of San Diego County is Hispanic, and many of those homeowners want to read and call in Spanish. An English-only site quietly waves those leads away. We can build your site bilingual so it converts customers your competitors are not even speaking to." },
    ],
    servicesHeading: "What goes into an OnwardCraft San Diego website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where almost all of your San Diego traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners that book the job, not filler that reads like every other contractor in the county." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both conversions and rankings." },
      { name: 'Bilingual build', desc: "We can build your site in English and Spanish so it converts the third of the county that searches that way, a market most contractor sites skip entirely.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, in one language or both, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent San Diego web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual build option'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in San Diego?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, scaling with page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Can you build my site in Spanish too?', a: "Yes, and in San Diego that is often a real edge. More than a third of the county is Hispanic and many homeowners prefer to read and call in Spanish. We can build your site bilingual so it books jobs from customers an English-only site quietly turns away." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive San Diego terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where almost all of your San Diego traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run, usually WordPress or Webflow. We will recommend the right fit in your free consult and lay out the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear read on what your current site is costing you in lost leads, what a high-converting San Diego site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'san-diego', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'San Diego Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your San Diego website without losing rankings. Faster, mobile-first, bilingual-ready rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · San Diego County',
    h1: 'Redesign your San Diego website without surrendering your rankings',
    h2Exact: 'San Diego Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll past, English only. We redesign San Diego contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns crash one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign San Diego contractor sites for speed and conversions, can rebuild them bilingual to reach the whole county, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled right, a redesign keeps your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your San Diego site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, homeowners size you up by your site in seconds. An old, cluttered design hands them off to a competitor who simply looks more established, even when your work runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you lose the majority of your San Diego visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It ignores a third of your county", body: "An English-only site skips the large Spanish-speaking share of San Diego County entirely. If your old site never spoke to those homeowners, a redesign is the moment to fix it, and to capture leads your competitors are not even chasing." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all of your San Diego traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the size of your invoices." },
      { name: 'Bilingual rebuild', desc: "We can rebuild your site in English and Spanish so it converts the third of the county that searches that way, instead of quietly waving those leads off.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects already in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent San Diego redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual rebuild option'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in San Diego?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, scaling with size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'Can you rebuild my site in Spanish too?', a: "Yes, and in San Diego it is well worth weighing. More than a third of the county is Hispanic and many homeowners prefer Spanish. If your current site is English only, a bilingual rebuild opens up a large part of the market your competitors are skipping." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or only speaks to half the county, it is costing you work. The free audit tells you plainly whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const sanDiegoCity = {
  citySlug: 'san-diego', city: 'San Diego', state: 'California', stateAbbr: 'CA', metro: 'San Diego County',

  titleTag: 'San Diego Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for San Diego contractors. Get found, get booked, and own your leads instead of renting them, bilingual-ready.',

  eyebrow: 'San Diego · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets San Diego contractors found and booked',
  h2Exact: 'San Diego Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for San Diego County's big, bilingual, fire-prone market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  primaryCta: 'Get my free San Diego audit',

  intro:
    "Run a contracting business in San Diego and you are fighting for attention in the fifth-largest county in the country, where the competition is no joke. Winning here takes three pieces moving together: a site that converts, SEO that ranks you for what people search, and local SEO that plants you in the Map Pack, ideally in English and Spanish, since a third of the county searches that way. Here is how we help San Diego contractors do exactly that.",
  aioQuestion: 'How do San Diego contractors get more leads online?',
  aioAnswer:
    "San Diego contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because over a third of the county is Hispanic and demand climbs through fire season, the contractors who reach the whole market and are already ranking before the Santa Anas hit win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when San Diego searches \"near me.\" The single highest-return move for most local businesses, and your shot at the Spanish-speaking searches your competitors skip.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay, the ones your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, bilingual where it helps you land more work, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in San Diego?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, in English and Spanish where it widens the market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, fire-driven demand, and insurance work." },
    { q: 'Why does bilingual marketing matter in San Diego?', a: "More than a third of San Diego County is Hispanic, and a large share of those homeowners search and call in Spanish, especially in South Bay and National City. If your site and listings are English only, you are invisible to a huge part of the market. Building bilingually is one of the clearest edges available here, and most contractors are not doing it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which San Diego areas do you serve?', a: "All of San Diego County and the surrounding cities: North Park, Pacific Beach, La Jolla, Point Loma, plus Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon and more." },
    { q: 'Where should I start?', a: "Start with a free San Diego audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

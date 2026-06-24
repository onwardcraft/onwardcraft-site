// NASHVILLE: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Nashville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// NASHVILLE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Google in Nashville takes more than showing up',
  body:
    "For more than a decade Nashville has ranked among the fastest-growing cities in the country, and the metro now carries over 2 million people with no sign of slowing. Newcomers keep pouring in from the Northeast, the Midwest, and both coasts, chasing work in healthcare, finance, and the music business. The minute they close on a place in Brentwood, Franklin, Nolensville, or Spring Hill, they open Google and start hunting for a contractor they have zero history with. For any trade business willing to show up in search, that flood of fresh homeowners is one of the richest openings anywhere in the Southeast. The catch is that the same growth has dragged in a crowd of new competitors. Two forces really drive demand here. One: Middle Tennessee sits squarely in tornado country, and a single spring storm stretch (roughly March through May) can launch roofing and restoration searches overnight, with the contractors already ranking when it hits scooping up most of the jobs. Two: the long, sticky Nashville summer keeps HVAC repair and replacement humming from June into September, while a stray January or February ice storm triggers a rush of emergency roof and tree-damage calls. Get into the Map Pack ahead of those peaks and your calendar fills before anyone else's does.",
  pullQuote: 'Nashville pulls in transplants faster than nearly any city in the country, and each one needs a contractor they can trust by Friday.',
  donut: {
    title: 'Nashville\'s growing market',
    value: 45,
    centerLabel: 'arrived in last decade',
    legend: [
      { label: 'Long-term residents', pct: 55, kind: 'grey' },
      { label: 'Transplants & new arrivals', pct: 45, kind: 'teal' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Nashville',
  seasonCaption: 'Tornado/storm roofing (Mar-May), summer HVAC (Jun-Sep), ice storm emergencies (Jan-Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 90, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 78, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 48 }, { m: 'D', v: 46 },
  ],
  stats: [
    { value: '2M+', label: 'people across the Nashville metro and climbing every month' },
    { value: 'Top 5', label: 'fastest-growing major US metros for more than a decade running', accent: true },
    { value: 'Mar-May', label: 'tornado season, when storm roofing searches can erupt overnight' },
    { value: 'Jun-Sep', label: 'peak HVAC demand from Nashville\'s long, humid summer stretch' },
  ],
  neighborhoods: [
    'East Nashville', 'Germantown', 'The Gulch', 'Sylvan Park', 'Green Hills',
    'Belle Meade', 'Donelson', 'Brentwood', 'Franklin', 'Nolensville',
    'Spring Hill', 'Hendersonville', 'Mt. Juliet', '12 South', 'Nations',
  ],
};

const AREAS = [
  'East Nashville', 'Germantown', 'The Gulch', 'Sylvan Park', 'Green Hills',
  'Belle Meade', 'Donelson', 'Antioch', 'Brentwood', 'Franklin',
  'Nolensville', 'Spring Hill', 'Hendersonville', 'Mt. Juliet', 'Goodlettsville',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I got tired of watching solid Nashville contractors wire Angi and HomeAdvisor a few thousand a month for leads that three rivals had already bought. A business built on rented leads is built on sand. So this is the entire job: rank you and convert you for the work you actually want, in the neighborhoods you actually drive to, with leads that belong to you and nobody else. No year-long handcuffs either. If it stops working, you cut us loose.";

const WHY = [
  {
    title: 'Trades are the only thing we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We get how a single March storm front rewrites a roofer's month, how a humid Nashville July drives the phone for HVAC, and how a Germantown bungalow gut-job is nothing like a fresh Franklin subdivision. Everything we build is shaped around how your buyers actually type their search.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The aim is a pipeline with your name on it. Not one more monthly bill to a broker for a Brentwood homeowner three of your competitors are already dialing.",
  },
  {
    title: 'We genuinely know this metro',
    body: "Targeting that goes block by block from East Nashville out to Franklin and Spring Hill, tuned to the storm-driven and seasonal swings that make Middle Tennessee its own animal. That is the part a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to real leads, month-to-month once the first 90 days are up. If we stop earning the spot, you walk. That keeps the heat exactly where it should be, on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies open with a wall of client logos. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can hand you is the reason this approach works, pulled straight from Google's and the industry's own research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, flagged plainly as a projection and not a result we are claiming: imagine a Nashville contractor pulling roughly 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Climbing out of page-two invisibility into the top three is the gap between a slow drip of calls and a calendar that is fully booked, and that gap matters most right before a spring storm run or a July heat wave. During your free audit we model the actual figures for your business: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Nashville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Nashville',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const nashvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Nashville Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Nashville Local SEO that puts your business in the Map Pack. Search your trade and three names pin to the map; we get you into that top three.',
    eyebrow: 'Local SEO · Nashville, TN',
    h1: 'Nashville Local SEO that puts your business in the East Nashville Map Pack',
    h2Exact: 'Nashville Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone beneath them might as well not exist. In a metro adding new homeowners every single month, we put you in that top three for the neighborhoods you serve, so the call rings your phone instead of whoever happened to rank first.",
    primaryCta: 'Get my free Nashville audit',
    intro:
      "Nashville Local SEO really hangs on one question: when a homeowner in Franklin or East Nashville types your trade plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap a name in that local 3-pack and never scroll an inch further. With transplants from Chicago and New York closing on homes here every week and searching for contractors they have never heard of, claiming those three spots in your neighborhoods is the entire contest. Here is how local SEO services rank you on the map.",
    aioQuestion: 'How do Nashville businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady drip of real reviews, and local content tied to actual Nashville neighborhoods and suburbs. Because the metro keeps gaining homeowners who do not know the local players yet, the businesses that surface again and again in East Nashville, Franklin, Brentwood, and Nolensville win that demand. And since a single spring storm can spike roofing searches overnight, you want to be ranked before tornado season arrives, not scrambling once it has passed.",
    problemHeading: "If your phone has gone quiet, it's usually one of these three",
    painPoints: [
      { title: 'Competitors own the three map spots', body: "Type your own trade plus \"near me\" right now. See the three businesses Google pins to the map? They soak up the lion's share of the clicks. If your name is not in that group, the quality of your work barely registers, because most people never scroll far enough to find you. Cracking that top three across Nashville's neighborhoods is usually the highest-return move a local contractor can make." },
      { title: "You're paying for leads that are never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Nashville homeowner to four contractors at once, then charge each of you to brawl over them. That is a treadmill, not a pipeline. Local SEO flips it: a buyer finds you, calls you, and no rival got a copy. Month by month you stop renting and start owning the work." },
      { title: "You're invisible the moment the storm hits", body: "This is tornado country. When a serious front tears through Middle Tennessee, roofing and restoration searches explode within hours. If you are not already ranking when that happens, the contractors who are will take every call. The Map Pack rewards the businesses that were there first, and you cannot manufacture that ranking over a weekend." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google understands exactly which Nashville searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple engine that converts finished jobs into a steady run of reviews. It lifts your ranking and gives the next homeowner a reason to call." },
      { name: 'Neighborhood pages', desc: "Real pages for East Nashville, Franklin, Brentwood, Nolensville, Spring Hill and the rest, so you rank for the neighborhood someone is genuinely searching, not a flat \"Nashville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring under the floorboards that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Nashville sources Google already trusts: local press, trade associations, partners, community groups. Around here, that is often what divides page one from page two." },
      { name: 'Storm season readiness', desc: "We rank you for storm-damage and emergency terms before tornado season opens, so when Middle Tennessee takes a hit the calls land with you instead of the competitor who was already there.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you clearly and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you truly rank today across your Nashville neighborhoods and figure out which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. You usually feel the early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These stack week over week, which is exactly why local SEO rewards starting now rather than later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Nashville, Brentwood, Franklin, and the surrounding suburbs, plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Nashville neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Nashville and its suburbs.', features: ['Everything in Local Growth', 'Local link building', 'Storm season keyword targeting', 'Multi-area and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Nashville?', a: "Most Nashville engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. Competitive Nashville terms usually take 90 to 180 days of steady work, because reviews and citations build up over time. In a market this crowded, anyone promising page one in 30 days is selling you a fairy tale." },
      { q: 'What makes Nashville local SEO different?', a: "Two things stand out. The metro is among the fastest-growing in the country, so a constant stream of new homeowners is searching for contractors they do not know, which is pure opportunity if you are ranking. And it is tornado country, where a spring front can spike roofing and restoration demand overnight. You have to be ranked before that, not chasing it after." },
      { q: 'Can you rank me for storm and tornado repair searches?', a: "Yes, and in Nashville that is a serious edge. Spring tornado runs (especially March through May) can blow roofing and restoration searches sky-high overnight. We tune your profile and content for those emergency and storm-damage terms ahead of the season, so the calls land with you when it breaks." },
      { q: 'Which Nashville areas do you cover?', a: "Every major neighborhood and suburb: East Nashville, Germantown, The Gulch, Sylvan Park, Green Hills, Belle Meade, Donelson, Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, Mt. Juliet, and more. We build genuine neighborhood pages rather than one flat Nashville page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand storm-season spikes, summer HVAC demand, and the gulf between an East Nashville renovation and a new Franklin build, and we shape your local SEO around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work is already coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Nashville neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Nashville Local SEO can do for your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Nashville SEO Company | Rank and Stay There | OnwardCraft',
    metaDescription:
      'Nashville SEO that gets contractors to the top of Google and keeps them there. Leads you own, revenue-tied reporting, no lock-in in a fast-growing metro.',
    eyebrow: 'SEO Services · Nashville, TN',
    h1: 'Nashville SEO that gets you to the top of Google across Music City and keeps you there',
    h2Exact: 'Nashville SEO Company',
    heroSubhead:
      "Ads die the second your card stops. SEO does the reverse: rank once for what your Nashville customers search and the leads keep landing. With this metro growing faster than almost any city in America and new homeowners searching daily, we build the ranking that captures them.",
    primaryCta: 'Get my free Nashville SEO audit',
    intro:
      "Nashville SEO boils down to one question: when someone searches your trade, are you on page one or page two? Page two might as well be page fifty. The metro is adding people and homes at a clip most cities would kill for, which means fresh potential customers turn to Google constantly. As a Nashville SEO company built for the trades, we get contractors ranking for the money keywords in this fast-growing, crowded market, lifting your organic traffic and search engine optimization, and we measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do Nashville businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page for the exact terms buyers search, publishing genuinely useful local content tied to specific Nashville neighborhoods and suburbs, and earning links from trusted local sources. In a metro growing this fast, two of the quickest ways to pull ahead are tight neighborhood targeting (ranking for Franklin and Brentwood and Nolensville, not a single flat Nashville page) and ranking for the seasonal storm-damage and HVAC terms that spike demand before each season breaks.",
    problemHeading: "Three reasons your Nashville site isn't bringing in work",
    painPoints: [
      { title: "You're parked on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll deep into it either. With this many new competitors arriving every year, if you are not in the top handful of results for what you sell, your site is effectively invisible, no matter how clean your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can pull their weight, but the instant your card stops, the leads stop with it. SEO builds an asset you keep: rankings that go on producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranked when storm season lands", body: "Nashville sits inside Middle Tennessee's tornado corridor. A spring front can launch roofing and restoration searches overnight, and only the contractors already ranking grab that spike. If your SEO ignores storm-damage and emergency terms, you are handing your busiest weeks to someone else." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Nashville customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and pull in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Nashville and industry sources. In a competitive market gaining new businesses every year, links are frequently what divides page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches across your Nashville neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for storm-damage, tornado repair, and summer HVAC searches before the season hits, so you bank the spike instead of watching it flow to whoever was already there.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Nashville leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the storm-season and HVAC terms that matter most in Nashville." },
      { name: 'Build authority', desc: "Links and citations from trusted Nashville and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Nashville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Nashville suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Nashville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-location or multi-suburb', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Nashville?', a: "Most Nashville SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Nashville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter suburb-level terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost over time. Most Nashville contractors do best running SEO as the long-term engine and ads for short bursts like storm season." },
      { q: 'Should my Nashville SEO target storm and seasonal demand?', a: "Absolutely. A spring tornado run in Middle Tennessee can blow roofing and restoration searches sky-high overnight. Summer heat waves do the same for HVAC. Ranking takes months to build, so you must be in place before the season, not chasing it after. We optimize for those terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm/seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Nashville areas do you cover?', a: "Every major neighborhood and suburb: East Nashville, Germantown, The Gulch, Green Hills, Belle Meade, Donelson, Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, Mt. Juliet, and more, with genuine local pages rather than one flat Nashville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest first look at what Nashville SEO can do to put you on page one. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Nashville Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Nashville web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in a fast-growing, competitive market.',
    eyebrow: 'Web Design · Nashville, TN',
    h1: 'Nashville web design that turns Franklin and East Nashville visitors into booked jobs',
    h2Exact: 'Nashville Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Nashville contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stand out in a metro that has added thousands of new competitors right alongside thousands of new homeowners.",
    primaryCta: 'Get my free quote',
    intro:
      "Nashville web design done properly closes the gaps where most contractor sites leak leads: slow on a phone, call button buried, no clear offer. With Nashville among the fastest-growing cities in America and new homeowners from the Northeast and Midwest Googling local contractors daily, our web designers build mobile-first sites that load fast, look like the pro you are, and turn Franklin-to-East-Nashville visitors into booked jobs. All of it built to stand out in a market that keeps getting more crowded.",
    aioQuestion: 'What makes a good contractor website in Nashville?',
    aioAnswer:
      "A strong Nashville contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Transplants especially respond to specifics, because they do not know the local players yet and are hunting for clear signals that you cover their area and do quality work. Mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there: no clear offer, no obvious next step, no reason to call you over the next name. Nashville is thick with good contractors, and a new homeowner from Chicago has no clue who to trust. Your site has to earn that call quickly." },
      { title: "It's too slow on a phone", body: "Most of your Nashville visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking together." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Franklin wants to see that you serve Franklin, not a flat \"Nashville\" page that could belong to anybody. We build sites that name the neighborhoods and suburbs you actually work, so visitors trust that you are local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Nashville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you genuinely want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Nashville traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for Nashville homeowners, including the transplants who need reassurance they can trust a contractor they have never met, and built to book the job." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the Nashville neighborhoods and suburbs you serve (Franklin, Brentwood, Nolensville, East Nashville and more) so you stand apart instead of blending into a flat city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want across Nashville and its suburbs." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is genuinely converting." },
    ],
    pricing: {
      heading: 'Transparent Nashville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services and suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Nashville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me stand out in a growing market?', a: "That is the whole point in Nashville. New homeowners from out of state are searching for contractors they have never heard of, so your site has to earn their trust fast. We build around the specific suburbs and neighborhoods you serve, keep the site fast, and put a clear offer and call button front and center, so yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Nashville terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Nashville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk through the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Nashville site should include, and a fixed-price quote with a timeline. It is the simplest way to see what Nashville web design built to convert visitors into booked jobs can do for you. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'nashville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Nashville Website Redesign | Convert More, Keep Rankings | OnwardCraft',
    metaDescription:
      'Nashville Website Redesign that converts more without losing your rankings. Faster, mobile-first rebuilds that win over Brentwood and Franklin transplants.',
    eyebrow: 'Website Redesign · Nashville, TN',
    h1: 'Nashville Website Redesign that converts more Brentwood and Franklin homeowners without losing your rankings',
    h2Exact: 'Nashville Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to skip when a competitor looks sharper. We redesign Nashville contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Nashville Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings disappear overnight. We do neither. We redesign your Nashville website for speed and conversions, build it to stand out in a market that has grown far more crowded, and run an SEO-safe migration with the 301 redirects that protect the traffic you already hold.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled this way, a redesign holds your rankings and usually improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Nashville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and bleeds trust", body: "Nashville homeowners, especially transplants making their first call to a local contractor, size you up by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is sharper and you have been in this market far longer." },
      { title: "It's slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing most of your Nashville visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into a crowded market", body: "Nashville has drawn a wave of new contractors right alongside its wave of new residents. A generic old site gives a visitor no reason to choose you over the next result. We rebuild for conversions and for the specific neighborhoods you serve, so the right buyers pick you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, sharper call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Nashville traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Nashville neighborhoods and suburbs you serve (Franklin, Brentwood, Nolensville, East Nashville and more) so the new site stands out in a competitive market instead of reading like everyone else's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Nashville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Nashville contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Nashville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or blends into the increasingly crowded Nashville market, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in Nashville?', a: "Yes, and that is the point in a market this competitive. Nashville has grown fast, and so has the crowd of contractors fighting for the same homeowners. We rebuild around the specific suburbs and neighborhoods you serve, keep the site fast, and make the offer and call button obvious, so the new site stands out instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the clearest way to see what a Nashville Website Redesign can do without putting your existing rankings at risk." },
    ],
  },
];

export const nashvilleCity = {
  citySlug: 'nashville', city: 'Nashville', state: 'Tennessee', stateAbbr: 'TN', metro: 'Nashville',

  titleTag: 'Nashville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Nashville marketing for contractors: web design, SEO, and local SEO that gets you found and booked. Own your leads instead of renting them in a fast-growing metro.',

  eyebrow: 'Nashville · Web Design, SEO & Lead Generation',
  h1: 'Nashville marketing for contractors that gets you found and booked across this fast-growing metro',
  h2Exact: 'Nashville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Nashville's fast-growing, competitive market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Nashville audit',

  intro:
    "Nashville marketing for contractors comes down to this: you are working one of the fastest-growing markets in America. Thousands of transplants land every month, close on homes in Franklin, Brentwood, Nolensville, and East Nashville, and immediately Google contractors they have never heard of. That is an enormous opening, but Nashville has also drawn a wave of competitors right alongside those new residents. Winning here takes three things working as one: web design and SEO that convert and rank those new homeowners, and local SEO that drops you into the Map Pack across the suburbs and neighborhoods you serve. Here is how our Nashville digital marketing agency helps contractors do exactly that.",
  aioQuestion: 'How do Nashville contractors get more leads online?',
  aioAnswer:
    "Nashville contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The metro's Sun Belt growth means a steady stream of new homeowners searching for contractors they do not know, and the businesses already ranking in Franklin, Brentwood, East Nashville, and Nolensville capture that demand. And because a single storm can spike roofing searches overnight, the contractors already in the Map Pack when a tornado hits win the most storm work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Nashville searches \"near me.\" The highest-return move for most local contractors, done neighborhood by neighborhood, suburb by suburb.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure the whole thing in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to earn the trust of Nashville transplants who do not know the local players yet, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it with care so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Nashville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that gets more competitive every year." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand storm-season spikes, Nashville's long humid summers, and the gap between a Germantown renovation and a new Nolensville build." },
    { q: 'Why does the Nashville market need a different approach?', a: "Nashville is among the fastest-growing metros in the country, which means a constant wave of new homeowners searching for contractors they do not know yet. It also sits in tornado country, where a spring front can spike roofing demand overnight. You need to be ranked before those moments, not after." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Nashville areas do you serve?', a: "Every major neighborhood and suburb: East Nashville, Germantown, The Gulch, Sylvan Park, Green Hills, Belle Meade, Donelson, Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, Mt. Juliet, and more." },
    { q: 'Where should I start?', a: "Start with a free Nashville audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Nashville marketing for contractors that gets you found and booked. No pitch deck, just a plan." },
  ],
};

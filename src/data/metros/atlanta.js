// ATLANTA: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Atlanta's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ATLANTA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'In Atlanta, the suburbs decide who wins local search',
  body:
    "Almost 6.5 million people live across the Atlanta metro, yet the home-services dollars rarely sit downtown. They live in Alpharetta, Marietta, Duluth, Smyrna, Woodstock, and the booming ring pushing out into Cherokee, Forsyth, and Hall Counties. Homeowners out there search tight and specific: \"HVAC near Alpharetta\" or \"roofer in Marietta.\" They do it because Atlanta traffic is no joke. When a pipe bursts or the AC quits in August, nobody waits on a crew that might be parked on I-285. They call whoever reads as local and can roll up quickly. Two weather patterns set the rhythm of demand. From May into September the heat and humidity get brutal, which is when HVAC phones light up and roofs cook under hard sun and afternoon thunderstorms. Then winter brings ice. Atlanta skips the steady snow the northeast gets and instead takes ice, and half an inch of it can freeze the whole region and send roofing, tree removal, and restoration calls through the roof overnight. Whoever already holds a Map Pack spot when the first ice forecast drops is the crew that books the jobs.",
  pullQuote: 'In Atlanta the money is out in the suburbs, and the homeowner who refuses to wait on a truck stuck in traffic calls the first name that shows up in the Map Pack.',
  donut: {
    title: 'How Atlanta searches',
    value: 50,
    centerLabel: 'Black/African American metro',
    legend: [
      { label: 'Black / African American', pct: 50, kind: 'teal' },
      { label: 'All other residents', pct: 50, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer HVAC (May-Sep) and ice storm roofing/restoration (Jan-Feb)',
  seasonalDemand: [
    { m: 'J', v: 82, peak: true }, { m: 'F', v: 78, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 76, peak: true }, { m: 'M', v: 90, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 88, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 50 }, { m: 'D', v: 60 },
  ],
  stats: [
    { value: '6.5M', label: 'people across the Atlanta metro' },
    { value: 'May-Sep', label: 'peak HVAC season driven by extreme heat and humidity', accent: true },
    { value: 'Jan-Feb', label: 'ice storm season: overnight demand spikes for roofing and restoration' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Buckhead', 'Midtown', 'Inman Park', 'Virginia-Highland', 'Decatur',
    'Sandy Springs', 'Roswell', 'Alpharetta', 'Marietta', 'Smyrna',
    'Duluth', 'Lawrenceville', 'Cumming', 'Woodstock', 'Johns Creek',
  ],
};

const AREAS = [
  'Alpharetta', 'Marietta', 'Smyrna', 'Duluth', 'Lawrenceville',
  'Roswell', 'Sandy Springs', 'Decatur', 'Cumming', 'Woodstock',
  'Buckhead', 'Midtown Atlanta', 'Inman Park', 'Virginia-Highland', 'Johns Creek',
];

const FOUNDER =
  "Let me be honest with you: I built OnwardCraft after watching too many solid contractors wire Angi and HomeAdvisor a few grand a month for leads that three competitors had already bought. A business built on rented leads is a business built on sand. That is the entire reason we exist: to get you ranking and converting for the jobs you actually want, in the suburbs and neighborhoods you actually drive to, with leads that belong to you and nobody else. No 12-month handcuffs either. If the work is not paying off, you cut us loose.";

const WHY = [
  {
    title: 'The trades are all we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We know the Atlanta summers that pile HVAC calls onto your dispatch board, the ice storm nights that blow up roofing demand, and the spring hail that floods restoration queues. Everything we build is shaped around how your customers really hunt for you.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline you keep. Not one more monthly invoice to a lead broker for homeowners that three competitors also paid to chase.",
  },
  {
    title: 'We actually know Atlanta',
    body: "Suburb by suburb and neighborhood by neighborhood, from Alpharetta down to Smyrna, plus content built around the traffic reality that makes proximity search matter more here than almost anywhere. That is the part a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, no fog',
    body: "Published prices, reporting tied to real leads, and month-to-month after 90 days. If we are not earning it, you walk. That keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so you get honest math instead of a logo wall",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, so we will not fake a track record we have not built yet. What we can hand you is the why behind all of this, pulled straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled clearly as a projection and not a result we are claiming. Say an Atlanta contractor pulls roughly 2,000 local \"near me\" impressions a month spread across a few suburbs. Climbing out of page-two invisibility and into the top three is the difference between a handful of calls and a calendar that fills itself. In a metro where traffic pushes homeowners to pick the nearest name first, that gap punishes you hard. In your free audit we model the real figures for your business: your rankings, your search volume, and a candid 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA', metro: 'Atlanta',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const atlantaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Atlanta Local SEO Company | Win the Map Pack',
    metaDescription:
      'Atlanta Local SEO that gets contractors into the Google Map Pack across Alpharetta, Marietta, Duluth, and the suburbs that actually pay.',
    eyebrow: 'Local SEO · Atlanta, Georgia',
    h1: 'Atlanta Local SEO that gets you found when Alpharetta and Marietta neighbors search your trade',
    h2Exact: 'Atlanta Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone underneath them might as well not exist. In a metro where traffic makes homeowners pick the nearest crew, we put you in that top three for your suburbs and neighborhoods, so the call rings your phone instead of the contractor who beat you to the top.",
    primaryCta: 'Get my free Atlanta audit',
    intro:
      "Atlanta local SEO really comes down to one moment. A homeowner in Alpharetta or Marietta types your service plus \"near me,\" and Google pins three businesses to the map. Are you one of them? Most people tap one of those three and never scroll an inch further. Because traffic here makes folks unwilling to call a crew across town, they reach for whoever is close and trusted, and the Map Pack is the shortlist they pick from. Below is exactly how you earn a spot on it.",
    aioQuestion: 'How do Atlanta businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and suburbs you want, name-address-phone listings that match everywhere Google checks, a steady drip of real reviews, and local content tied to actual Atlanta suburbs and neighborhoods. The traffic factor makes hyper-local targeting unusually powerful here, since homeowners search by suburb rather than just \"Atlanta,\" so the winners build pages for Alpharetta, Marietta, Duluth, and Smyrna by name. Locking in seasonal demand, HVAC in summer and roofing after ice storms, before the season arrives is frequently what separates the booked crew from the slow one.",
    problemHeading: "If your phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Your competitors own all three map spots', body: "Pull up your own service plus \"near me\" right now. Those three businesses Google pins to the map grab the lion's share of the clicks. Atlanta homeowners are not scrolling past them, not when I-285 turns distance into a deal-breaker. Cracking that top three for the suburbs you cover is usually the single biggest-return move an Atlanta contractor can make, and every day you sit below it those calls go to someone else." },
      { title: "You are paying for leads you never keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same Atlanta homeowner to four contractors and then bill all four to brawl over them. It is a treadmill that speeds up as you run. Local SEO builds the reverse: a homeowner finds you, calls you, and no rival ever touched that lead. Stay on the broker treadmill and your cost per job only climbs while you keep renting visibility you can never own." },
      { title: "You are invisible in the suburbs where the money sits", body: "The bulk of Atlanta's home-services spending happens out in Alpharetta, Marietta, Duluth, Smyrna, Cumming, and Woodstock. A single generic \"Atlanta\" page never ranks for those suburb-level searches, so the buyers there never see you. Every quiet week, a competitor with real suburb pages quietly scoops the work you should be quoting. Suburb-by-suburb targeting is how you reach the homeowners your rivals are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "Your biggest lever in the Map Pack, and the fastest path to more booked calls. We tune your categories, services, service area, photos, and posts so Google knows precisely which Atlanta-area searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks, or it stops trusting you. We repair the listings that conflict and build the ones you are missing, so nothing holds your ranking back." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that turns every finished job into a fresh review. It lifts your map ranking and gives the next homeowner the nudge to actually dial your number." },
      { name: 'Suburb and neighborhood pages', desc: "Real, distinct pages for Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock, and the rest, so you rank for the exact suburb someone is searching instead of disappearing into a single \"Atlanta\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the wiring beneath the surface that lets every other piece of the work actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Atlanta-area sources Google already trusts, like local press, trade associations, chambers, and partners. In this metro, that is often the line between page one and page two." },
      { name: 'Seasonal demand SEO', desc: "We rank you for summer HVAC searches before May and for ice storm roofing and restoration searches before January, so you show up when demand explodes instead of chasing it afterward and missing your best weeks.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you, trust you, and recommend your name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across each suburb and neighborhood and pin down which competitors are outranking you in the Map Pack, and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move the fastest. Most Atlanta contractors see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live next. These compound week over week, which is why local SEO rewards the crew that starts now over the one that waits for the busy season." },
      { name: 'Add local content', desc: "Suburb and service-area pages across the Atlanta metro, plus the on-page work that backs each of them up and helps them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, never vanity rankings. Then we go take the next suburb on the board." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several Atlanta suburbs at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across the whole Atlanta metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Atlanta?', a: "Most Atlanta engagements land between $750 and $2,500 a month, set by how many suburbs and keywords you are chasing. Our tiers sit right above this. No hidden fees, no long contract, and we lock down your exact scope in the free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Atlanta suburb keywords usually take 90 to 180 days of steady work, because reviews and citations build their weight over time. Anyone promising you page one in 30 days is selling you a fairy tale." },
      { q: 'What makes Atlanta local SEO different?', a: "Two things. First, the work lives in the suburbs (Alpharetta, Marietta, Duluth, Smyrna) rather than downtown, so you need suburb-specific targeting instead of a generic city page. Second, Atlanta traffic makes homeowners reach for the nearest contractor, which puts even more weight on Map Pack proximity signals than you would see in most metros." },
      { q: 'How important is seasonal timing for Atlanta local SEO?', a: "It is huge. HVAC demand surges from May through September because the heat and humidity here get extreme. Ice storms in January and February can blow up roofing, tree removal, and restoration demand overnight, and ranking takes months to build. You want to already be in place before the season breaks, not scrambling for visibility once it does." },
      { q: 'Which areas do you cover?', a: "The full Atlanta metro: Alpharetta, Marietta, Smyrna, Duluth, Lawrenceville, Roswell, Sandy Springs, Decatur, Cumming, Woodstock, Buckhead, Midtown Atlanta, Inman Park, Virginia-Highland, Johns Creek, and beyond. We build genuine suburb and neighborhood pages rather than one catch-all Atlanta page, because that is what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know Atlanta's summer HVAC emergencies, its ice storm roofing calls, and the new-construction wave rolling through Cherokee and Forsyth Counties." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now kicks off inside AI tools rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less, because the work starts coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today in local search across your suburbs, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the honest starting point for Atlanta Local SEO that actually ranks you on the map, with no pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Atlanta SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Atlanta SEO that ranks contractors on Google and delivers leads you own. Suburb-by-suburb targeting, seasonal demand SEO, and reporting tied to real revenue.',
    eyebrow: 'SEO Services · Atlanta, Georgia',
    h1: 'Atlanta SEO that turns suburb-by-suburb organic traffic into booked work',
    h2Exact: 'Atlanta SEO Company',
    heroSubhead:
      "The second you stop paying, ads go dark. SEO works the other way: rank once for what your Atlanta customers search and the leads keep arriving. We build that ranking suburb by suburb and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Atlanta SEO audit',
    intro:
      "Atlanta SEO boils down to a single question. When someone in Alpharetta or Marietta searches what you do, are you on page one or page two? Page two might as well be page fifty, because almost nobody goes there. We get contractors ranking for the money keywords across the suburbs where Atlanta's home-services work actually lives, and we count the result in leads rather than vanity traffic.",
    aioQuestion: 'How do Atlanta businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page for the precise terms customers type, publishing genuinely useful local content tied to specific Atlanta suburbs and neighborhoods, and earning links from trusted Georgia sources. Because traffic pushes Atlanta homeowners to search hyper-locally, suburb-specific pages for Alpharetta, Marietta, Duluth, and Smyrna are frequently the quickest way to pull ahead. Ranking for seasonal HVAC and ice storm roofing searches before demand peaks is the other major edge.",
    problemHeading: "Three reasons your Atlanta site is not bringing in work",
    painPoints: [
      { title: "You are buried on page two", body: "Hardly anyone clicks past the first page of Google. In a metro packed with contractors, if you are not in the top handful of results for what you sell in the suburbs you cover, your site is effectively invisible, no matter how good your craftsmanship is. Meanwhile the crews above you collect the calls that should be yours, week after week." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop with it. SEO builds something you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In the fast-growing Atlanta suburbs, the value of that compounding asset only stacks higher. Stay ads-only and you are renting forever, paying again for every single click." },
      { title: "You are not ranking for the demand that pays", body: "Atlanta demand swings hard by season: HVAC from May through September, ice storm roofing and restoration in January and February, and hail and storm damage in spring. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you are handing your busiest, most profitable weeks to whoever bothered to prepare." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs handled before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Atlanta-area customers search: titles, headings, body content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are searching, earn links, and pull in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Atlanta and Georgia industry sources. In a market this crowded, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you also win the \"near me\" searches across your suburbs, working hand in hand with your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads instead of just rankings and traffic, so you always know what your SEO is genuinely worth in dollars." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for summer HVAC searches and ice storm roofing and restoration terms before demand spikes, so you are booked solid when it hits rather than scrambling once it has passed.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, in the channel where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Atlanta-area leads instead of empty visits." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in place before it can climb." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and emergency terms that pay off in Atlanta." },
      { name: 'Build authority', desc: "Links and citations from trusted Atlanta-area and Georgia industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and push into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Atlanta SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across multiple services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Atlanta-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Atlanta?', a: "Most Atlanta SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work the job needs. Our tiers are above, with no hidden fees and no long contract holding you in place." },
      { q: 'How long does SEO take to work in Atlanta?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tighter suburb terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that quits the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Atlanta contractors do best running SEO as the long-term engine and ads for short bursts during peak HVAC season or right after an ice storm." },
      { q: 'Should my Atlanta SEO target seasonal demand?', a: "Absolutely. HVAC demand surges from May through September because the heat and humidity here are relentless. Ice storms strike in January and February and can spike roofing and restoration demand overnight. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those seasonal and emergency terms well ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal, emergency, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it runs month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just the classic search results." },
      { q: 'Which Atlanta suburbs do you cover?', a: "The full Atlanta metro: Alpharetta, Marietta, Smyrna, Duluth, Lawrenceville, Roswell, Sandy Springs, Decatur, Cumming, Woodstock, Buckhead, Midtown, Inman Park, Johns Creek, and more, with genuine suburb pages rather than one generic Atlanta page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more you own your search visibility, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is a straight plan for Atlanta SEO that lands you on page one and turns organic traffic into booked jobs. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Atlanta Web Design Company | OnwardCraft',
    metaDescription:
      'Atlanta web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors in Alpharetta, Marietta, Duluth, and the suburbs.',
    eyebrow: 'Web Design · Atlanta, Georgia',
    h1: 'Atlanta web design that makes the homeowner stuck in traffic pick you',
    h2Exact: 'Atlanta Web Design Company',
    heroSubhead:
      "A pretty site that never rings the phone is just a brochure. We build Atlanta contractors fast, mobile-first sites engineered to turn visitors into booked work, designed for a market where homeowners pick local and pick fast.",
    primaryCta: 'Get my free quote',
    intro:
      "Atlanta web design is really about one thing: turning visitors into booked jobs. Most Atlanta contractor sites bleed leads quietly, slow on a phone, the call button buried, no clear offer, and nothing signaling you actually serve Marietta or Alpharetta. Web design done right closes every one of those leaks. We build sites that load fast, look like the professional you already are, and convert suburban Atlanta visitors into booked jobs, because in a metro where distance decides everything, reading as local and trustworthy is how you win the call.",
    aioQuestion: 'What makes a good contractor website in Atlanta?',
    aioAnswer:
      "A strong Atlanta contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because traffic makes Atlanta homeowners local-first, a site that says \"serving Alpharetta, Marietta, and Duluth\" converts far better than one leaning on a generic Atlanta page. Most Atlanta searches happen on mobile, so mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit quietly. No clear offer, no obvious next step, no reason to call you over the next crew, and in Atlanta the next crew is one tap away. We design every page around a single job: turning a visitor into a booked lead before they bounce to a competitor." },
      { title: "It is too slow on a phone", body: "Most of your Atlanta visitors are on mobile, and they bail if your site takes more than a few seconds to load. Slow sites rank worse too, so you lose twice. We build fast, so you keep both the visitor and the ranking that brought them." },
      { title: "It does not speak to the suburbs where you work", body: "A homeowner in Alpharetta wants to see that you serve Alpharetta, not a generic \"Atlanta\" page that could belong to anyone. Atlanta traffic makes people want the genuinely local contractor, and a site that names their suburb converts dramatically better. We build sites that call out the suburbs you cover, so visitors trust you are nearby and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Atlanta website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your suburbs, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Atlanta-area traffic comes from. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for the anxious homeowner with a leaking roof, built to book the job rather than fill space like everyone else's site." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and suburb-ready pages baked in." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock, and the other suburbs you serve, so you stand out as the local choice instead of blending into a generic Atlanta page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Atlanta web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Atlanta?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks, and a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site help me stand out in the Atlanta suburbs?', a: "That is the entire point. We build around the specific suburbs you serve (Alpharetta, Marietta, Duluth, Smyrna, and the rest), keep the site fast, and put a clear offer and call button front and center. Atlanta homeowners pick local and pick fast, and your site will show them you are the local option." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Atlanta-area terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Atlanta-area traffic lives. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and lay out the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting, mobile-first Atlanta site should include, and a fixed-price quote with a timeline. It is everything you need to decide on Atlanta web design that converts visitors into booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Atlanta Website Redesign | OnwardCraft',
    metaDescription:
      'Atlanta Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across Alpharetta and Marietta.',
    eyebrow: 'Website Redesign · Atlanta, Georgia',
    h1: 'Atlanta Website Redesign that turns an aging site into a suburb-targeting lead engine',
    h2Exact: 'Atlanta Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll past. We redesign Atlanta contractor sites to convert more and load faster, and we migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "An Atlanta Website Redesign fails one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings vanish overnight. We refuse both. We redesign Atlanta contractor sites for speed and conversions with an SEO-safe migration, build them to speak straight to the suburbs where your customers live, and handle the redirects and SEO care that protect the traffic you already have without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Atlanta site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, Atlanta homeowners size you up by your site in seconds. An old, cluttered design quietly steers them toward a competitor who simply looks more established, even when your work runs circles around theirs. In the fast-growing Atlanta suburbs, where new construction keeps minting fresh competition, that first impression decides more than ever." },
      { title: "It is slow and clumsy on a phone", body: "If your site stutters or crawls on mobile, you are losing the majority of your Atlanta visitors before they ever reach your offer. A redesign built mobile-first wins them back, and wins back the rankings that slow load was dragging down." },
      { title: "It blends into a crowded market and never names your suburbs", body: "Traffic that does not turn into calls is money lit on fire, and a generic old site hands an Atlanta homeowner no reason to choose you over the next result. Atlanta traffic makes people fiercely local-first, and a site that never names Alpharetta, Marietta, or Duluth reads as though you might not even be local. We rebuild for conversions and for the specific suburbs you actually serve." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned through the rebuild." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just a prettier homepage." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Atlanta-area traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your craftsmanship and the price tag on your jobs." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock, and the other suburbs you serve, so the new site signals you are genuinely local rather than just another Atlanta page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is bleeding leads and rankings, then map a redesign that fixes it without breaking the parts already working for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, careful migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Atlanta redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Atlanta?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Handled right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks, and a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not pulling in leads, or never names the Atlanta suburbs you serve, it is quietly costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete across the Atlanta suburbs?', a: "Yes, and that is the whole point. Atlanta homeowners are local-first because of traffic; they want the contractor who is genuinely nearby. We rebuild around the specific suburbs you serve and make it immediately obvious to both the visitor and Google that you are the local option." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is your roadmap to an Atlanta Website Redesign that rebuilds for conversions without losing rankings." },
    ],
  },
];

export const atlantaCity = {
  citySlug: 'atlanta', city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA', metro: 'Atlanta',

  titleTag: 'Atlanta Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Atlanta marketing for contractors: web design, SEO, and local SEO that get you found in Alpharetta, Marietta, Duluth, and the suburbs where the work is.',

  eyebrow: 'Atlanta · Web Design, SEO & Lead Generation',
  h1: 'Atlanta marketing for contractors that turns suburban searches into jobs',
  h2Exact: 'Atlanta Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Atlanta's sprawling suburban market, where traffic makes homeowners fiercely local-first and a single seasonal spike can fill your calendar overnight.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Atlanta audit',

  intro:
    "Atlanta marketing for contractors comes down to getting found and booked where the work is: Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock. The metro's legendary traffic pushes homeowners to search hyper-locally; they want the crew that is genuinely nearby, and the Map Pack is how they choose. Winning here takes three things working as one: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack suburb by suburb, plus content that positions you for summer HVAC season and winter ice storm demand before those spikes land. Here is how our web design and SEO for Atlanta contractors pull it off.",
  aioQuestion: 'How do Atlanta contractors get more leads online?',
  aioAnswer:
    "Atlanta contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb. Because traffic makes homeowners strongly prefer nearby contractors, the businesses that target Alpharetta, Marietta, Duluth, and Smyrna by name, rather than leaning on a generic Atlanta page, win far more work. Ranking for summer HVAC and ice storm roofing terms before the season lands is the other major edge.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Atlanta searches \"near me.\" For most local contractors it is the single highest-return move, done suburb by suburb from Alpharetta to Smyrna.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure it in leads, including the seasonal HVAC and ice storm surges.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, designed to signal you are the local suburban contractor rather than a faceless city page.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add suburb-specific targeting, and migrate carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Atlanta?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Atlanta suburbs." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades (roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors) so we understand Atlanta's summer HVAC emergencies, its ice storm roofing calls, and the new-construction wave rolling through Cherokee and Forsyth Counties." },
    { q: 'Why does the Atlanta market need a different approach?', a: "The work is in the suburbs, not downtown. The metro's legendary traffic makes homeowners fiercely local-first in their searches; they want the crew that is genuinely nearby. That makes suburb-specific targeting more powerful here than in most metros. Seasonal demand is dramatic too: HVAC from May through September, and ice storms in January and February that can spike demand overnight." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Atlanta areas do you serve?', a: "The full metro: Alpharetta, Marietta, Smyrna, Duluth, Lawrenceville, Roswell, Sandy Springs, Decatur, Cumming, Woodstock, Buckhead, Midtown Atlanta, Inman Park, Virginia-Highland, Johns Creek, and more." },
    { q: 'Where should I start?', a: "Start with a free Atlanta audit. We will look at your website, your rankings, and your Map Pack presence across the suburbs you serve, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to see what Atlanta marketing for contractors can do to get you found and booked. No pitch deck, just a plan." },
  ],
};

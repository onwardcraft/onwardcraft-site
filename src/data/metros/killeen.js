// KILLEEN: military-market local landing pages built around Fort Cavazos.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) live here
// once and feed all four Killeen service pages plus the hub, since they all
// describe one city. Anything service-specific gets written inside its entry.
// PRICING stays fixed so quotes match from city to city.

// ===========================================================================
// KILLEEN: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What really sets the Killeen contractor market apart',
  body:
    "One force shapes the Killeen-Temple metro that no other Texas market has to reckon with: Fort Cavazos, one of the largest US Army posts by active-duty count, with more than 45,000 soldiers and their families based here at any moment. Every two to three years a fresh wave of those families gets Permanent Change of Station orders, packs the truck, and pulls up Google for a contractor the week they land somewhere new. That churn does not pause. It means Killeen throws off an outsized run of contractor searches for a town this size, and it means a business that ranks is reaching buyers who have to book in a hurry. Stack on Central Texas heat that hammers HVAC demand from June into September, spring tornado and hail seasons that pack a roofer's calendar from March through June, and the memory of the 2021 freeze that burst pipes in thousands of homes, and you get a market where the demand spike is the routine, not the exception. The shops already ranking are the ones booking every bit of it.",
  pullQuote: 'A town that turns over thousands of families every couple of years generates contractor searches a civilian market never sees, and the cycle does not stop.',
  donut: {
    title: 'Military connection in Killeen',
    value: 45,
    centerLabel: 'military-connected',
    legend: [
      { label: 'Military households', pct: 45, kind: 'teal' },
      { label: 'Civilian', pct: 55, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the Killeen phones light up',
  seasonCaption: 'Storms and HVAC (Mar to Sep), freeze events (Dec to Feb)',
  seasonalDemand: [
    { m: 'J', v: 58 }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 85, peak: true }, { m: 'A', v: 92, peak: true },
    { m: 'M', v: 90, peak: true }, { m: 'J', v: 95, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'A', v: 94, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 52 },
    { m: 'N', v: 40 }, { m: 'D', v: 55 },
  ],
  stats: [
    { value: '45,000+', label: 'active-duty soldiers stationed at Fort Cavazos' },
    { value: 'Every 2–3 yrs', label: 'PCS cycle — military families search for contractors on arrival', accent: true },
    { value: 'Jun–Sep', label: 'Central Texas heat season, when HVAC demand peaks 100–105°F' },
    { value: 'Mar–Jun', label: 'tornado and hail season driving roofing demand across the region' },
  ],
  neighborhoods: [
    'Killeen', 'Fort Cavazos', 'Copperas Cove', 'Harker Heights', 'Nolanville',
    'Belton', 'Temple', 'Lampasas', 'Gatesville', 'Waco (nearby)',
    'Georgetown (nearby)', 'Round Rock (nearby)', 'Killeen Heights', 'East Killeen', 'West Killeen',
  ],
};

const AREAS = [
  'Killeen', 'Temple', 'Fort Cavazos', 'Harker Heights', 'Copperas Cove',
  'Nolanville', 'Belton', 'Lampasas', 'Gatesville', 'Hewitt',
  'Woodway', 'Waco', 'Georgetown', 'Round Rock', 'Salado',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a July AC failure in 105-degree heat does to a phone line, how hail season fills a roofer's week, and how a family fresh off PCS orders shops for a contractor, so the work we build matches how your buyers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "What we are after is a pipeline that belongs to you. Not one more monthly check to a lead broker for a soldier's family that three other contractors are calling the same afternoon they landed in town.",
  },
  {
    title: 'We actually speak Killeen',
    body: "The Fort Cavazos turnover, the Central Texas heat that never lets up in summer, the spring storms that roll across Bell County, and the way a transient military town searches and books differently than anywhere else. That is ground knowledge a national shop cannot fake by find-and-replacing a city name.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted, the reporting maps to real leads, and you go month-to-month once the first 90 days are up. If we are not paying for ourselves, you cut us loose. That puts the pressure on us, which is where it should sit.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies lead with a wall of client logos. We are a young, founder-led shop, so we are not going to invent a track record we have not earned yet. What we will give you instead is the reasoning, taken straight from Google's and the industry's own data on how people search for a contractor near them.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not a result we are claiming: say a Killeen contractor draws around 1,200 local \"near me\" impressions a month. Climbing out of page-two invisibility into the top three is the gap between a handful of stray calls and a calendar you cannot keep up with, and the moment a PCS wave lands or hail tears through Bell County, that gap stretches even wider. In your free audit we run the real figures for your shop: your current rankings, your actual search volume, and a straight 90-to-180-day route to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Killeen', state: 'Texas', stateAbbr: 'TX', metro: 'Killeen-Temple (Fort Cavazos)',
  heroProof: ['Built for the trades', 'Military-market ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const killeenLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Killeen Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Killeen Local SEO that ranks you above the competition in the Map Pack, so the "near me" call lands with you, especially when a Fort Cavazos PCS wave hits.',
    eyebrow: 'Local SEO · Killeen-Temple (Fort Cavazos)',
    h1: 'Killeen Local SEO that ranks you above the competition across Fort Cavazos',
    h2Exact: 'Killeen Local SEO Company',
    heroSubhead:
      "When a homeowner searches \"near me,\" Google drops three businesses on the map and treats the rest as if they are not there. We push you into that top three so the call rings your phone instead of whoever happened to rank first, and so you are already in place when a fresh batch of PCS orders and a Central Texas heat wave light the phones up at once.",
    primaryCta: 'Get my free Killeen audit',
    intro:
      "Killeen Local SEO turns on a single moment: a family that just unloaded at Fort Cavazos opens their phone, types your service plus \"near me,\" and either you are one of the three names pinned to the Google Map Pack or you may as well not exist. Most people tap one of those three and never scroll past them. With thousands of soldiers cycling through every year and summer heat plus spring storms keeping demand high all year, ranking on the map for those \"near me\" searches is the whole contest. Here is how our local SEO services get you there.",
    aioQuestion: 'How do Killeen businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone details that match everywhere online, a steady drip of genuine reviews, and local content built around real Killeen-area places. In a town where the population keeps turning over, looking established and answering fast wins. A PCS family has days, not weeks, to book a contractor, and they are searching from a phone the hour they roll in.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three businesses own the map and you are not one of them', body: "Pull up your phone and search your own service plus \"near me\" right now. The three names Google pins to the map take the lion's share of the taps. Land outside that pack and the quality of your crew barely registers, because the searcher never scrolls down to read your name. For a Killeen contractor, fighting your way into those three slots is usually the highest-return move on the board, since that is exactly where the just-arrived PCS family and the hail-battered homeowner both land first." },
      { title: 'You keep renting leads instead of owning them', body: "Angi, Thumbtack, and HomeAdvisor sell the same Killeen homeowner to four contractors at once, then charge each of you to scrap over the same call. That is rent, not a pipeline. Local SEO flips it: a soldier's family finds you, dials you, and no competitor got a copy of that lead. Stick with it and you trade the broker invoice for work that belongs to you." },
      { title: 'You miss the surge because you are invisible when it hits', body: "When hail rips across Bell County, when the thermometer pins 105 in July, or when a new rotation of PCS families pours into Fort Cavazos, search volume jumps and the contractors already on the map sweep up the calls. Sit on page two when the next surge breaks and the booked jobs flow to whoever Google already trusts, not to whoever does sharper work." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google can tell exactly which Killeen searches ought to be yours." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to read the same wherever Google looks. We clean up the listings that disagree and add the ones nobody ever built for you." },
      { name: 'Reviews that keep coming', desc: "A plain system that turns each finished job into another fresh review. It nudges your ranking up and gives the next caller a reason to trust you, which counts double for a family that just moved in and knows nobody in town." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Temple and the rest, so you turn up for the exact spot somebody typed instead of a flat \"Killeen.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile load. The wiring behind the wall that lets everything else stand a chance of ranking." },
      { name: 'Local link building', desc: "Mentions and links from Central Texas sources Google respects: area press, trade groups, off-post community resources, partners. In this market that is frequently the line between page one and page two." },
      { name: 'PCS and storm readiness', desc: "We get your profile, pages, and reviews ranking ahead of the next PCS rotation and storm season, so you catch the spike when it breaks rather than hustling to catch up after.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read you and name you in an answer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you truly rank today across each service area and work out which competitors are beating you in the Map Pack and what is propping them up." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, since they shift the quickest. Early lift here usually shows inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They stack up week after week, which is why a Killeen shop that starts before the next PCS rotation beats the one that waits." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Bell, Coryell, and McLennan counties, plus the on-page work that makes them hold up." },
      { name: 'Report and expand', desc: "Plain-English reporting mapped to calls and booked leads, never vanity rankings. Once a neighborhood is locked, we move on Fort Cavazos and the next community over." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, with the Map Pack foundation set up right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across several Killeen-Temple communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Killeen-Temple.', features: ['Everything in Local Growth', 'Local link building', 'PCS-season and storm demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Killeen?', a: "Most Killeen engagements settle between $750 and $2,500 a month, set by how many neighborhoods and keywords you mean to chase. The tiers above spell it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you put down a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The competitive Killeen keywords usually need 90 to 180 days of steady work, because reviews and citations build slowly over time. Anyone who swears you page one in 30 days is selling you a story." },
      { q: 'What makes Killeen local SEO different?', a: "Fort Cavazos and its turnover. Thousands of soldiers and their families rotate in on PCS orders and start hunting for contractors from their phones the same day, HVAC, plumbing, roofing, all of it. They have to book fast and they know nobody in town, so they call the first name Google makes them trust. Getting in front of that constant churn is the opening most Killeen contractors leave on the table." },
      { q: 'How does local SEO help me during PCS season?', a: "Incoming families show up with pressing contractor needs and zero local network, so they head straight to Google and ring whoever looks most settled. Sit in the Map Pack with solid reviews and a real footprint across the service area and those calls come to you. Sit on page two and, to them, you are not there." },
      { q: 'Which areas do you cover?', a: "The whole Killeen-Temple metro: Killeen, Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, Lampasas, Gatesville and on out. We build real neighborhood pages instead of one catch-all Killeen page, since that is what actually ranks for a \"[service] [neighborhood]\" search." },
      { q: 'Do you work with contractors specifically?', a: "Pretty much only that. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get emergency calls, storm-driven spikes, the odd freeze event, and military-market timing, and we frame your local SEO around all of it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A bigger slice of \"near me\" research now begins in AI rather than classic search. We shape your content and schema so those engines can read, trust, and name your business. In a town that searches as fast as Killeen does, that is closing in on the Map Pack itself in value." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly the runway local SEO needs to show real movement. After that you are month-to-month. If we are not delivering, you walk and the accountability stays parked on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep a piece of. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less, because a PCS family that finds you on Google calls you and only you." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead, the fixes that will move you quickest, and a realistic 90-to-180-day Killeen Local SEO plan with the numbers run for your shop. No pitch deck. Just the diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Killeen SEO Company | OnwardCraft',
    metaDescription:
      'Killeen SEO that climbs contractors past the competition on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for Fort Cavazos PCS demand.',
    eyebrow: 'SEO Services · Killeen-Temple (Fort Cavazos)',
    h1: 'Killeen SEO that climbs you past the competition on Google',
    h2Exact: 'Killeen SEO Company',
    heroSubhead:
      "Ads quit the instant you stop paying. SEO works the other way: rank once for what your Killeen customers search and the leads keep landing for months. We build that ranking and map every report to real calls and booked jobs, so you pick up the PCS arrivals and storm-season demand instead of watching them go to whoever ranked first.",
    primaryCta: 'Get my free Killeen SEO audit',
    intro:
      "Killeen SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two of Google? Around here page two might as well be page fifty. As a Killeen SEO company we get contractors ranking for the money keywords in a town shaped by nonstop military turnover, summers that sit at triple digits, spring storms, and the odd freeze event, and we score the whole thing in booked leads, not organic traffic that never dials.",
    aioQuestion: 'How do Killeen businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page to the exact terms buyers type, publishing local content people actually use, and earning links from trusted Central Texas sources. In a market set by the Fort Cavazos turnover and hard seasonal swings, ranking for the right term at the right time, HVAC in the July heat, roofing right after hail, holds the line between a contractor who stays booked and one who is forever chasing the next lead.",
    problemHeading: "Three reasons your Killeen site isn't bringing in work",
    painPoints: [
      { title: 'Page two is swallowing your site whole', body: "Hardly anyone clicks past the first page of Google, and they seldom scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how slick it looks. In a town where a newly arrived family has to book this week, invisible is the one thing you cannot afford." },
      { title: 'Google Ads has you renting your own traffic', body: "Ads can pull their weight, but the second your card declines the leads dry up. SEO builds an asset that stays yours: rankings that keep delivering leads for months and years after the work is done, at a slice of the per-lead cost. That lands hard in Killeen, where PCS demand recurs like clockwork. Own the ranking and you own that recurring stream of customers." },
      { title: 'You rank for the wrong searches at the wrong time', body: "Killeen demand swings with PCS rotations, the summer heat, spring hail and tornado season, and the occasional winter freeze. The contractors who rank for those terms in advance grab the spike. Let your SEO ignore the military churn and the seasonal pattern and you hand your busiest, fattest months to someone else." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the behind-the-wall fixes Google wants in place before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Killeen customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles people genuinely use, that answer what buyers search, pull in links, and keep feeding you leads while you sleep." },
      { name: 'Link building', desc: "Authority from real Central Texas and industry sources. In a crowded market, links are often the deciding vote between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches right next to your organic spots, including from PCS families searching the hour they hit town." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know in dollars what your SEO is doing for you." },
      { name: 'Seasonal & military-market SEO', desc: "We rank you for the PCS-driven, storm-season, and summer-heat searches that fuel Killeen's busiest stretches, so you are already visible before the spike rather than after.", featured: true },
      { name: 'AI search & GEO', desc: "We shape your content so AI Overviews, ChatGPT, and Perplexity surface and name you, where a growing slice of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to drive real Killeen leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the groundwork everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal, PCS-driven, and storm terms that decide who wins here." },
      { name: 'Build authority', desc: "Links and citations from trusted Central Texas and industry sources to drive your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean into what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Killeen SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For shops out to own Killeen-Temple search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & military-market SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Killeen?', a: "Most Killeen SEO engagements run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work the job calls for. The tiers sit above this, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Killeen?', a: "Look for early movement in 2 to 3 months and real results in 4 to 6, quicker on low-competition terms and slower on the most fought-over Killeen keywords. SEO stacks, so the longer you run it the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps throwing off leads at a lower cost per lead as the months pass. Most Killeen contractors come out ahead running SEO as the long-haul engine and ads for short bursts, like the days right after a PCS rotation lands or a hail storm clears." },
      { q: 'Should my Killeen SEO target the Fort Cavazos community?', a: "Without question. Families arriving on PCS orders have pressing contractor needs, no local network, and a short fuse. They search the same day and book within days. Ranking for the terms they actually run, and looking settled and reviewed when they reach you, is one of the highest-return plays in this whole market." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. The upper tiers fold in seasonal and military-market work plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that stretch to show real movement, then you go month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing share of what we tune for. We shape your content and schema so AI engines can read, trust, and name your business, not just the classic search results." },
      { q: 'Which areas around Killeen do you cover?', a: "The full Killeen-Temple metro and the ground around it: Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, Lampasas, Gatesville and more, with real local pages rather than one stretched-thin Killeen page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more of your own search visibility you hold, the less you depend on paying brokers for shared leads, and a PCS family that finds you on Google tends to convert fast." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the fixes with the most pull, and a realistic Killeen SEO timeline with the numbers modeled for your shop. No pitch deck, just the diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Killeen Web Design Company | OnwardCraft',
    metaDescription:
      'Killeen Web Design that loads fast and books more jobs: mobile-first sites built for contractors serving Fort Cavazos and the Killeen-Temple area.',
    eyebrow: 'Web Design · Killeen-Temple (Fort Cavazos)',
    h1: 'Killeen web design that loads fast and books more Fort Cavazos jobs',
    h2Exact: 'Killeen Web Design Company',
    heroSubhead:
      "A good-looking website that never rings the phone is just a brochure. We build Killeen contractors fast, mobile-first sites engineered to turn visitors into booked work, so when a PCS family looks you up the day they arrive or a homeowner's AC dies in 105-degree heat, the call comes to you.",
    primaryCta: 'Get my free quote',
    intro:
      "Killeen Web Design, done right, plugs the leaks that quietly drain most contractor sites: slow on a phone, call button buried, no clear offer anywhere on the page. We build fast-loading, mobile-first contractor websites that carry the weight of the pro you are and turn Fort-Cavazos-to-Temple visitors into booked jobs, and that hold their footing when a PCS rotation or a spring storm sends traffic spiking.",
    aioQuestion: 'What makes a good contractor website in Killeen?',
    aioAnswer:
      "A strong Killeen contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, backs it with reviews and real job photos, and stands up to traffic surges during PCS waves and storm demand. Families arriving on orders search from a phone and need to book quickly. A slow, cluttered, or fuzzy site loses them in seconds. The call button and one plain reason to trust you are what turn a new arrival into a booked job.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: 'It reads like a brochure, not a lead engine', body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name in the results. We build every page around one job: turning a visitor into a booked lead, whether that is a family fresh off PCS orders at Fort Cavazos or a homeowner whose AC quit on a July afternoon." },
      { title: 'It crawls on a phone and loses the visitor', body: "Most of your Killeen visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. A family searching the day they arrive will not wait around. Slow sites rank worse on top of that, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: 'It folds the moment demand surges', body: "After a hail storm or deep into peak HVAC season, contractor sites take a flood of urgent traffic, and the slow ones stall or bury the call button at the exact moment it counts most. We build sites that stay quick and keep converting under load, so you capture that demand instead of leaking it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Killeen website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the jobs you are actually after." },
      { name: 'Mobile-first build', desc: "Built for the phone first, since that is where nearly all of your Killeen traffic lives, PCS families searching on arrival included. Quick, thumb-friendly, easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms set where people actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words pitched at an uneasy homeowner that close the job, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the studs out: clean structure, schema, fast load, and pages ready for the neighborhood." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which guards your conversions and your rankings at once." },
      { name: 'PCS and storm-surge ready', desc: "Built to stay fast and keep the call button up front when PCS arrivals or storm-season traffic spikes, the exact moments that can pack your calendar for months.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and point people to your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want, including how to stand out to the Fort Cavazos community." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that closes, with the call to action up front on every page." },
      { name: 'Launch', desc: "We launch clean with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Killeen web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for settled contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'PCS- and storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location shops.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Killeen?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above this: fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A tight site runs about 2 to 4 weeks; a larger custom build takes 4 to 8. We hand you a firm timeline up front and keep you posted at each stage." },
      { q: 'Will my site hold up when PCS season or storm demand hits?', a: "Yes, and in Killeen that is no small thing. When a PCS rotation lands or hail clears out, contractor sites can take a big jump in traffic, and the slow ones bleed leads right as demand peaks. We build fast and keep the call button obvious so your site converts under the load instead of stalling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for the neighborhood. The build gets you ready to rank, and pairing it with our SEO service is how you climb the contested Killeen terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are yours. No hostage setups, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, since that is where nearly all of your Killeen traffic comes from, families searching on a phone the hour they reach town included. Fast load, call buttons built for a tap, and forms shaped for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A straight look at what your current site is costing you in lost leads, what a high-converting Killeen Web Design project ought to include, and a fixed-price quote with a timeline. No pressure, just the plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Killeen Website Redesign | OnwardCraft',
    metaDescription:
      'Killeen Website Redesign done with a careful, SEO-safe migration: faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up during PCS season.',
    eyebrow: 'Website Redesign · Killeen-Temple (Fort Cavazos)',
    h1: 'Killeen Website Redesign done with a careful, SEO-safe Fort Cavazos migration',
    h2Exact: 'Killeen Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Killeen homeowner to skip right past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every scrap of ranking you have earned while the next PCS wave is already searching.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Killeen Website Redesign goes one of two bad ways at most shops: the site looks sharper but converts exactly the same, or it launches and the rankings drop off a cliff overnight. We do neither. We rebuild Killeen contractor sites mobile-first for speed and conversions, build them to ride PCS-season and storm-driven traffic, and run an SEO-safe migration with the redirects that protect the traffic you already have without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You guard SEO through a redesign by holding your URL structure (or mapping 301 redirects for every page that changes), keeping your existing content and metadata, moving your schema across, and testing the whole thing on staging before launch. Handled right, a redesign keeps your rankings and lifts them, because the new site loads faster, leans mobile-first, and is better built than the old one, and it finally converts the PCS arrivals and storm-season searches you have been missing.",
    problemHeading: "Signs your Killeen site is overdue for a redesign",
    painPoints: [
      { title: 'It looks dated and quietly costs you trust', body: "On a high-ticket job, homeowners size you up by your site in seconds. A family new to Killeen has no local referrals to lean on, so they are going purely off how your site looks. An old, cluttered design ships them to a competitor who reads as more established, even when your crew is the better one." },
      { title: 'It is slow and clumsy on a phone', body: "If your site is clunky or slow on mobile, you are losing most of your Killeen visitors before they ever reach your offer. Families just off PCS orders especially are searching on the move between unpacking and errands. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: 'It cannot keep up when demand surges', body: "An old site that bogs down under a storm surge or a PCS rotation drops leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone ought to be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is bleeding you leads and rankings today, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the right way so you keep every bit of the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually fill out. We design for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a passing Core Web Vitals score, which helps conversions and rankings at the same time." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Killeen traffic lives, Fort Cavazos families searching on arrival included." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that fits the quality of your work and the price of the jobs you want." },
      { name: 'PCS and storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when PCS arrivals or storm-season traffic spikes, so the new site captures your biggest jobs rather than choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read you and point people your way as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings around Killeen, then map a redesign that fixes it without knocking over what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused layout you review and shape before any of it gets built." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with the redirects in place and watch the rankings daily so they hold and climb rather than slide while the next PCS wave is searching." },
      { name: 'Optimize', desc: "Post-launch tuning on whatever is converting Killeen visitors into calls, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Killeen redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for a settled contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'PCS- and storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Killeen?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled with care, and that is exactly how we work. We map 301 redirects for every URL that changes, hold on to content and metadata, move your schema across, and test on staging first. Done right, a redesign keeps your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A tight redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not pulling in leads, or bogs down when PCS-season or storm traffic surges, it is quietly costing you work. The free audit tells you straight whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, keep what is ranking, and run the technical migration so nothing that matters slips through the cracks." },
      { q: 'Will the new site handle PCS-season and storm traffic?', a: "Yes, and in Killeen that is a real consideration. When a PCS rotation arrives or hail rolls across Bell County, contractor traffic jumps fast. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks instead of stalling out." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which matters in Killeen because so much of your traffic is a family searching from a phone the day they arrive. It lifts conversions and rankings at the same time." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content all stay yours. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign itself is a one-time project. Any ongoing maintenance or SEO after that runs month-to-month, cancel whenever." },
      { q: "What's in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, what the Killeen Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const killeenCity = {
  citySlug: 'killeen', city: 'Killeen', state: 'Texas', stateAbbr: 'TX', metro: 'Killeen-Temple (Fort Cavazos)',

  titleTag: 'Killeen Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Killeen marketing for contractors that fills your calendar: web design, SEO, and local SEO that get you found, get you booked, and let you own your leads through Fort Cavazos PCS turnover and Central Texas heat.',

  eyebrow: 'Killeen · Web Design, SEO & Lead Generation',
  h1: 'Killeen marketing for contractors that fills your Fort Cavazos calendar',
  h2Exact: 'Killeen Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Killeen-Temple market, one of the busiest contractor search markets in the country, shaped by the Fort Cavazos turnover, Central Texas heat, and spring tornado season.",
  heroProof: ['Built for the trades', 'Military-market ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Killeen audit',

  intro:
    "Killeen marketing for contractors has to fit a market that behaves like nowhere else in Texas. Fort Cavazos feeds a steady stream of PCS arrivals who have to book a contractor fast. Central Texas summers lean hard on HVAC crews. Spring tornado and hail seasons send roofing demand vertical. And the 2021 freeze showed everyone how fast emergency plumbing calls can pile up. Winning here takes three pieces pulling together: a site that converts, SEO that ranks you for what people type, and local SEO that drops you in the Map Pack, all set before the next PCS rotation or weather hit sends demand through the roof.",
  aioQuestion: 'How do Killeen contractors get more leads online?',
  aioAnswer:
    "Killeen contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. The Fort Cavazos turnover means thousands of families hunt for contractors every year with no local network to fall back on, so they call whoever looks most settled and reviewed on Google. Ranking and reading as trustworthy before they arrive is the highest-return move most Killeen contractors are still skipping.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Killeen searches \"near me.\" The single highest-return move for most local shops, and the way you catch PCS arrivals and storm-season demand before a competitor does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, from a July HVAC emergency to post-hail roofing, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, whether that visitor is a family fresh off PCS orders at Fort Cavazos or a homeowner whose AC quit in 105-degree heat.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned while the next demand wave is already searching.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Killeen?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are set when a PCS rotation and storm demand land at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We work in the home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we get emergency calls, storm-driven demand, the occasional freeze event, and the particular rhythm of a town that never stops cycling people in and out." },
    { q: 'Why does the Fort Cavazos PCS cycle matter for my marketing?', a: "Thousands of military families rotate in and out of Fort Cavazos every year. They arrive with pressing contractor needs and no local network, head straight to Google, and book whoever reads as most established. Ranking and looking well-reviewed before they land is a lead opening that resets and repeats without end. We put you in position to catch it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We pin down the exact scope in your free audit." },
    { q: 'Which Killeen areas do you serve?', a: "The whole Killeen-Temple metro: Killeen, Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, Lampasas, Gatesville and more, with real neighborhood pages rather than one stretched-thin Killeen page." },
    { q: 'Where should I start?', a: "Start with a free Killeen audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Killeen marketing for contractors plan that bring in the most work fastest, including how to stand out to the Fort Cavazos community. No pitch deck, just the plan." },
  ],
};

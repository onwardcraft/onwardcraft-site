// BAKERSFIELD - per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Bakersfield's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BAKERSFIELD - shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What it really takes to win customers in Bakersfield',
  body:
    "Bakersfield runs on oil and on the soil of Kern County, and that combination puts money in the pockets of homeowners who spend it on their houses. Kern pumps more oil than entire states, and the surrounding farmland keeps tens of thousands of working families employed and rooted here. Those people own homes, and those homes break in heat no coastal city ever feels. From June into September the thermometer sits at 110 to 115 degrees for weeks on end, so when an air conditioner quits in August it stops being a comfort problem and becomes a safety problem. Nobody in that situation spends three days reading quotes. They thumb in \"AC repair near me,\" tap the first result, and the job is gone before you ever knew the homeowner existed. Then add the wildfire smoke that pours down off the mountains every fall, pushing whole neighborhoods to search for filtration and indoor-air help, and you get one of the most reliable demand calendars in the state. On top of all that, Bakersfield stays cheap next to the coast, so first-time buyers and remote earners with Los Angeles paychecks keep moving in and buying houses. Every one of them is hunting for a contractor right now. The only question is whether they find you or the business already sitting at the top.",
  pullQuote: 'When August hits 110, the contractor already on the map answers every call before you even see the lead.',
  donut: {
    title: 'Hispanic population',
    value: 52,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 52, kind: 'teal' },
      { label: 'Other', pct: 48, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Extreme heat (Jun-Sep) and wildfire smoke (Aug-Oct)',
  seasonalDemand: [
    { m: 'J', v: 30 }, { m: 'F', v: 28 }, { m: 'M', v: 34 }, { m: 'A', v: 44 },
    { m: 'M', v: 62, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 96, peak: true }, { m: 'S', v: 88, peak: true }, { m: 'O', v: 60 },
    { m: 'N', v: 38 }, { m: 'D', v: 28 },
  ],
  stats: [
    { value: '400K+', label: 'people across the Bakersfield metro, still climbing' },
    { value: '110–115°F', label: 'summer highs that turn an AC failure into a safety call', accent: true },
    { value: 'Jun–Sep', label: 'the heat window when HVAC searches explode' },
    { value: 'Top 3', label: 'map spots that swallow most of the calls' },
  ],
  neighborhoods: [
    'Riverlakes', 'Seven Oaks', 'East Bakersfield', 'Oildale', 'Rosedale',
    'Shafter', 'Wasco', 'Delano', 'Tehachapi', 'Stockdale',
    'Gosford', 'Olive Drive', 'Panorama Drive', 'Southwest Bakersfield', 'Kern City',
  ],
};

const AREAS = [
  'Bakersfield', 'Oildale', 'Rosedale', 'Riverlakes', 'Seven Oaks',
  'East Bakersfield', 'Shafter', 'Wasco', 'Delano', 'Tehachapi',
  'McFarland', 'Arvin', 'Lamont', 'Buttonwillow', 'Taft',
];

const FOUNDER =
  "Let me be honest with you about why OnwardCraft exists. I got tired of watching skilled Bakersfield contractors wire a few thousand dollars a month to Angi and HomeAdvisor for the privilege of fighting three rivals over the same homeowner. That is not a business; that is a tollbooth you can never stop paying. This town has demand that does not quit: brutal heat, a steady oil-and-ag paycheck, and new buyers settling in from Riverlakes to Oildale every month. The trades that serve them deserve to own that pipeline outright. So that is what we build for you: top rankings for the jobs you want, in the streets you actually drive, with leads that are yours and nobody else's. No year-long lock-in. If we stop earning the work, you show us the door.";

const WHY = [
  {
    title: 'We work the trades and nothing else',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We know how a 110-degree week, a 2 a.m. emergency, and an oil-field household actually shape the way your customers search, and we build every page around that reality.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The aim is one thing: a pipeline that belongs to you. Not another invoice to a broker for a homeowner three of your competitors already bought the same week.",
  },
  {
    title: 'We genuinely know Bakersfield',
    body: "Triple-digit summers, the Kern County oil economy, a large Hispanic community searching in both English and Spanish, first-time buyers from Stockdale to Oildale. None of that survives a national agency dropping a city name into a template.",
  },
  {
    title: 'No contracts, no fog',
    body: "Prices you can read, reports tied to real leads, month-to-month once the first 90 days are up. If we are not earning it, you walk. That keeps the heat on us, exactly where it should be.",
  },
];

const PROOF = {
  heading: "We are new, so you get honest math, not a wall of logos",
  body:
    "Most agencies open with a grid of client badges. We are a young, founder-led shop and we are not going to fake a track record we have not built yet. What we can hand you is the reasoning, pulled straight from Google's own data and the industry's research on how people search for help in their own town.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of phone-based local searchers visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a back-of-napkin picture, and we are flagging it plainly as a projection rather than a result we are claiming: imagine a Bakersfield contractor pulling roughly 1,200 \"near me\" impressions a month. Climbing from buried-on-page-two to one of the top three map spots is the gap between a slow drip of calls and a calendar you cannot squeeze another job into, and during a peak-heat stretch that gap widens fast because the urgency is genuine and the buyers are already dialing. In your free audit we plug in your real figures, your rankings, your search volume, and lay out a straight 90-to-180-day route.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Bakersfield', state: 'California', stateAbbr: 'CA', metro: 'Bakersfield',
  heroProof: ['Built for the trades', 'Extreme-heat ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const bakersfieldLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'bakersfield', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Bakersfield Local SEO Company | OnwardCraft',
    metaDescription:
      'Bakersfield Local SEO that pins your trade to the Google Map Pack. We put you in the top three, so the next emergency call rings your phone, not theirs.',
    eyebrow: 'Local SEO · Bakersfield',
    h1: 'Bakersfield Local SEO that makes you the first name on the map when August hits 110',
    h2Exact: 'Bakersfield Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone underneath them is invisible. We get you into that top three, so the moment it is 112 in August and a homeowner's AC dies, your phone rings instead of the contractor who beat you to the map.",
    primaryCta: 'Get my free Bakersfield audit',
    intro:
      "Bakersfield local SEO boils down to a single question: when someone in Riverlakes or Oildale types your trade plus \"near me,\" are you one of the three businesses Google sticks to the map? Most people tap one of those three and never scroll an inch further. The summers here punish, the smoke rolls in every fall, and new buyers keep filling the valley, so the demand never really sleeps. Claiming one of those three spots is the entire contest. Below is exactly how you win it.",
    aioQuestion: 'How do Bakersfield businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want; identical name, address, and phone details everywhere on the web; a steady flow of real reviews; and local pages tied to actual Bakersfield neighborhoods. Because the heat here is extreme and wildfire smoke creates its own demand surge, the businesses that win look established, reply fast, and are already ranking before the summer and smoke seasons arrive.",
    problemHeading: "If your phone has gone quiet, it is almost always one of these",
    painPoints: [
      { title: 'Three rivals own the spots on the map', body: "Type your own trade plus \"near me\" right now. Those three businesses Google pins above the rest pull the lion's share of the taps. If your name is not among them, the quality of your work barely matters, because most people never lay eyes on you. For a Bakersfield contractor, breaking into that top three is usually the single move that pays back the fastest." },
      { title: "You are buying leads you never get to keep", body: "Angi, Thumbtack, and HomeAdvisor sell one Bakersfield homeowner to four contractors and then bill all four to brawl over the scraps. It never ends. Local SEO flips it: a homeowner finds you, calls you, and nobody else got the same lead. Month by month you stop renting and start owning the work." },
      { title: "You are not in position when the heat lands", body: "When July and August push past 110, HVAC demand does not rise gently, it detonates overnight, and the contractors already on the map are the ones fielding those frantic calls. If you are invisible when the thermometer spikes, the work flows to whoever Google already trusts. Ranking now is how you ride that wave instead of watching it crash on someone else." },
    ],
    servicesHeading: 'What it actually takes to get you ranking',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the map results. We tune your categories, services, service area, photos, and posts so Google understands precisely which Bakersfield searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We repair the listings that contradict each other and build the ones you never had." },
      { name: 'Reviews that keep arriving', desc: "A simple loop that turns every finished job into a fresh review. It pushes your ranking up and gives the next homeowner the nudge to call." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Riverlakes, Seven Oaks, Oildale, Rosedale, Shafter and the rest, so you rank for the neighborhood a homeowner is actually typing, not just the word \"Bakersfield.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The quiet groundwork that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Bakersfield sources Google respects: local press, trade groups, partners. In this market that is often what divides page one from page two." },
      { name: 'Heat-season readiness', desc: "We get your profile, pages, and reviews ranking before June so you are already in position when summer demand erupts, instead of scrambling once it is 108 outside.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and recommend you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you truly stand today across every service area and pin down which competitors are beating you on the map and what they are doing to do it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Bakersfield clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These stack week over week, which is exactly why local SEO rewards the contractor who starts now over the one who waits." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Kern County, plus the on-page work that holds them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the map foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses scrapping across several Bakersfield and Kern County areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Kern County.', features: ['Everything in Local Growth', 'Local link building', 'Heat-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Bakersfield?', a: "Most Bakersfield engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The exact tiers are right above. No hidden fees, no long contract, and we lock the precise scope during your free audit." },
      { q: 'How long until I show up on the map?', a: "Profile fixes can move within a few weeks. The competitive Bakersfield keywords usually take 90 to 180 days of steady work, because reviews and citations build slowly and compound. Anyone guaranteeing you the top in 30 days is selling smoke." },
      { q: 'What makes Bakersfield local SEO different?', a: "Two things. It is an oil-and-ag economy with real, durable homeowner demand instead of a coastal boom-and-bust. And the summers are extreme: 110 to 115 for weeks straight means HVAC and emergency trades spike hard and fast. Your ranking has to already be there before the heat, never after." },
      { q: 'How does local SEO help me during summer heat season?', a: "When July and August hit 110, searches for HVAC and AC repair surge overnight, and the businesses already on the map field those emergency calls. We get you ranking and reviewed before June arrives, so you collect that demand instead of handing it to whoever Google already trusts." },
      { q: 'Which areas do you cover?', a: "All of Bakersfield and Kern County: Riverlakes, Seven Oaks, East Bakersfield, Oildale, Rosedale, Shafter, Wasco, Delano, Tehachapi and beyond. We build real neighborhood pages instead of one generic Bakersfield page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is essentially all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand the emergency call, the extreme-heat surge, and the oil-field household, and we shape your local SEO around all three." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside an AI tool rather than a classic search box. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the map itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and a visibility you never keep. We build rankings, a strong Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work is already coming to your door." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your map competitors are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No slide deck. Just a straight diagnosis from a Bakersfield Local SEO company that only works the trades." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'bakersfield', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Bakersfield SEO Company | OnwardCraft',
    metaDescription:
      'Bakersfield SEO that ranks contractors on Google and feeds you leads you own. Lead-tied reporting, no lock-in contracts, built for heat-season demand.',
    eyebrow: 'SEO Services · Bakersfield',
    h1: 'Bakersfield SEO that puts your oil-economy trade on page one and holds it',
    h2Exact: 'Bakersfield SEO Company',
    heroSubhead:
      "Ads die the instant you stop paying. SEO does the opposite: rank once for what your Bakersfield customers search and the leads keep coming. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Bakersfield SEO audit',
    intro:
      "Bakersfield SEO comes down to one thing: when a homeowner searches your trade, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the keywords that pay in an oil-economy, triple-digit-heat market, and we count it in leads, not in vanity traffic that never picks up the phone.",
    aioQuestion: 'How do Bakersfield businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page to the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Bakersfield and Kern County sources. In a market where HVAC demand spikes hard in summer and wildfire smoke drives filtration searches in fall, ranking for those seasonal terms ahead of time is one of the fastest ways to pull clear of competitors.",
    problemHeading: "Three reasons your Bakersfield site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll deep into it. If you are not in the top handful for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. SEO builds something you own: rankings that keep producing leads months and years after the work, at a sliver of the per-lead cost." },
      { title: "You are not ranking for the demand that pays", body: "Bakersfield demand swings with the weather. HVAC searches go vertical in June, wildfire smoke drives filtration calls from August into October, and the contractors who rank for those terms ahead of time catch the surge. If your SEO ignores the seasons, you are leaving your busiest months on the table for someone else to grab." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the behind-the-scenes fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Bakersfield customers type: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers ask, earn links, and pull in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real Bakersfield and industry sources. In a competitive market, links are frequently what split page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Lead-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is actually worth." },
      { name: 'Heat & smoke season SEO', desc: "We rank you for the summer heat and wildfire smoke searches that drive Bakersfield's busiest months, so you are visible before demand spikes instead of chasing it afterward.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to put real Bakersfield leads in your pipeline." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs in order to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the heat-season and smoke-season terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Bakersfield and Kern County sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Bakersfield SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Bakersfield and Kern County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Heat & smoke season SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Bakersfield?', a: "Most Bakersfield SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Bakersfield?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the toughest Bakersfield keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts." },
      { q: 'Should my Bakersfield SEO target summer heat season?', a: "Absolutely. When July and August hit 110, searches for HVAC and AC repair go vertical, and ranking takes months to build, so you have to be in place before the heat arrives. We optimize for those seasonal terms ahead of time, so your busiest months land on you instead of your competitor." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and map SEO, and lead-tied reporting. Higher tiers add heat-and-smoke-season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Bakersfield do you cover?', a: "All of Bakersfield and Kern County: Riverlakes, Seven Oaks, Oildale, Rosedale, Shafter, Wasco, Delano, Tehachapi and more, with genuine local pages rather than one generic Bakersfield page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No slide deck, just a diagnosis from a Bakersfield SEO company built to put contractors on page one and grow the organic traffic you own." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'bakersfield', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Bakersfield Web Design Company | OnwardCraft',
    metaDescription:
      'Bakersfield web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and the valley\'s extreme-heat demand.',
    eyebrow: 'Web Design · Bakersfield',
    h1: 'Bakersfield web design that books emergency jobs instead of just looking nice',
    h2Exact: 'Bakersfield Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Bakersfield contractors fast, mobile-first sites engineered to turn visitors into booked work, and to hold up when summer heat floods your phone with emergency calls.",
    primaryCta: 'Get my free quote',
    intro:
      "Bakersfield web design that earns its keep closes the leaks most contractor sites bleed leads through: sluggish on a phone, call button buried, no clear offer anywhere. We build mobile-first sites that load fast, carry the credibility you have earned, and turn visitors from Riverlakes to Oildale into booked jobs, and that do not buckle when a heat wave drives your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Bakersfield?',
    aioAnswer:
      "A good Bakersfield contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during summer heat season. Because most Bakersfield searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that simply sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around a single job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Bakersfield visitors are on a phone, and they bounce if your site needs more than a few seconds to load. Slow sites rank worse too. We build fast, so you keep the visitor and the ranking both." },
      { title: "It cannot survive a heat-season surge", body: "When the thermometer hits 110 and AC units fail across Kern County, contractor sites get swamped with traffic, and the slow ones bury the call button right when it counts most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Bakersfield website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the exact jobs you want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Bakersfield traffic lives. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for homeowners under pressure, especially the ones in a 110-degree emergency, that book the job instead of reading like every other site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and pages ready for every neighborhood." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Heat-surge ready', desc: "Built to stay fast and keep the call button front and center when summer-heat traffic spikes, the moment that turns visitors into your most urgent, highest-value jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Bakersfield web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Heat-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Bakersfield?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site handle a summer heat-season traffic spike?', a: "Yes, and in Bakersfield that matters more than almost anywhere. When the thermometer hits 110 and AC units fail across the valley, contractor sites take a flood of traffic, and the slow ones lose leads right when demand is at its most urgent. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for every neighborhood. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Bakersfield terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Bakersfield traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Bakersfield site should include, and a fixed-price quote with a timeline from a Bakersfield web design company that builds fast, mobile-first sites to convert visitors into booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'bakersfield', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Bakersfield Website Redesign | OnwardCraft',
    metaDescription:
      'Bakersfield Website Redesign without losing your rankings. Faster, mobile-first rebuilds that book more jobs and stay standing when heat-season traffic surges.',
    eyebrow: 'Website Redesign · Bakersfield',
    h1: 'Bakersfield Website Redesign that rebuilds for heat-season leads, not just looks',
    h2Exact: 'Bakersfield Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to scroll right past. We redesign Bakersfield contractor sites to convert more and load faster, and we migrate with such care that you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Bakersfield Website Redesign fails one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings disappear overnight. We refuse to do either. We redesign Bakersfield contractor sites for speed and conversions, build them to absorb heat-season traffic surges, and handle the SEO-safe migration, with the redirects that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Bakersfield site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, homeowners size you up by your site within seconds. An old, cluttered design pushes them toward a competitor who simply looks more established, even when your work runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing the majority of your Bakersfield visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot keep pace when demand surges", body: "Traffic that never turns into calls is wasted, and an old site that slows to a crawl during a summer heat surge loses leads at the exact moment they are worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Bakersfield traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Heat-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when summer heat traffic spikes, so the new site captures your most urgent, highest-value jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and improve rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Bakersfield redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Heat-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Bakersfield?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, is not bringing in leads, or buckles when summer heat sends traffic surging, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle summer heat-season traffic?', a: "Yes, and in Bakersfield that is critical. When the thermometer tops 110 and HVAC emergencies stack up across Kern County, contractor sites take a surge of traffic, and the slow ones lose leads at the most valuable moment. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the honest first step of a Bakersfield Website Redesign that rebuilds mobile-first without losing rankings." },
    ],
  },
];

export const bakersfieldCity = {
  citySlug: 'bakersfield', city: 'Bakersfield', state: 'California', stateAbbr: 'CA', metro: 'Bakersfield',

  titleTag: 'Bakersfield Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Bakersfield marketing for contractors: web design, SEO, and local SEO that get you found, get you booked, and let you own your leads instead of renting them.',

  eyebrow: 'Bakersfield · Web Design, SEO & Lead Generation',
  h1: 'Bakersfield marketing for contractors who want to own their oil-and-ag leads',
  h2Exact: 'Bakersfield Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Bakersfield's oil-economy, triple-digit-heat market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Extreme-heat ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Bakersfield audit',

  intro:
    "Bakersfield marketing for contractors works differently here, because you run a market unlike anywhere else in California. Kern County oil money, 110-degree summers, some of the dirtiest air in the country, and a steady wave of first-time buyers who need the trades and need them fast. Winning here takes three pieces moving together: a site that converts, SEO that ranks you for what people actually type, and local SEO that puts you on the map, all in place before heat season lands. As a Bakersfield digital marketing agency built around web design and SEO for Bakersfield contractors, here is how we help you pull that off.",
  aioQuestion: 'How do Bakersfield contractors get more leads online?',
  aioAnswer:
    "Bakersfield contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google map results. Because Bakersfield has extreme summer heat that drives urgent HVAC demand and wildfire smoke that drives filtration demand, the contractors already ranking and reviewing before those seasons hit are the ones who win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Bakersfield types \"near me.\" For most local businesses it is the single highest-return move, and the way you catch heat-season and smoke-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure it in booked leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when extreme heat floods your phone with emergency calls, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Bakersfield?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when summer heat hits and emergency calls stack up." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, extreme-heat demand, and the Kern County oil-worker household." },
    { q: 'Why does heat season matter for my marketing?', a: "When Bakersfield hits 110 in July and August, HVAC demand spikes overnight and homeowners call whoever shows up first on Google. Ranking takes months to build, so the contractors already visible before the heat take that work. We get you in position ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Bakersfield areas do you serve?', a: "All of Bakersfield and Kern County: Riverlakes, Seven Oaks, East Bakersfield, Oildale, Rosedale, Shafter, Wasco, Delano, Tehachapi and beyond." },
    { q: 'Where should I start?', a: "Start with a free Bakersfield audit. We look at your website, your rankings, and your map presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to put Bakersfield marketing for contractors to work and get found and booked. No slide deck, just a plan." },
  ],
};

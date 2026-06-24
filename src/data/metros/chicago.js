// CHICAGO: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Chicago's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CHICAGO: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why the top of Google in Chicago never sits still',
  body:
    "About 9 million people live across Chicagoland, which makes it one of the deepest and most contested service markets anywhere. Whatever trade you run, you are elbowing past dozens of entrenched shops for the same three map spots, and you are doing it block by block, neighborhood by neighborhood. Two forces really drive the work here, and neither is the bilingual line a national agency would drop in. The first is the housing. Huge swaths of the metro went up before 1970, so you are looking at tired furnaces, cast-iron drain stacks, knob-and-tube wiring, and roofs that have weathered four decades of lake-effect winters. The second is the cold itself. The moment a hard freeze settles over the city, pipes split, furnaces give out, and ice dams pry shingles loose, and every one of those calls lands inside the same two days. Whoever is already ranking books that work before the homeowner ever dials the second name on their list.",
  pullQuote: 'When the next deep freeze grips Chicagoland, the contractors already on the map are the ones writing up the work.',
  donut: {
    title: 'How Chicago searches',
    value: 60,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 60, kind: 'teal' },
      { label: 'Desktop', pct: 40, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Deep-winter freezes (Dec to Feb) plus spring storm season',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 60 },
    { m: 'A', v: 64 }, { m: 'M', v: 70 }, { m: 'J', v: 66 }, { m: 'J', v: 58 },
    { m: 'A', v: 54 }, { m: 'S', v: 52 }, { m: 'O', v: 56 }, { m: 'N', v: 70 },
    { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '9M+', label: 'people across the Chicago metro' },
    { value: '~60%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'Dec-Feb', label: 'deep-freeze months, when furnace and burst-pipe demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Lincoln Park', 'Logan Square', 'Pilsen', 'Wicker Park', 'Lakeview',
    'Hyde Park', 'Bucktown', 'Albany Park', 'Rogers Park', 'Bridgeport',
    'Beverly', 'Andersonville', 'Portage Park', 'Edison Park', 'Jefferson Park',
  ],
};

const AREAS = [
  'Chicago', 'Naperville', 'Aurora', 'Evanston', 'Oak Park', 'Cicero',
  'Schaumburg', 'Skokie', 'Oak Lawn', 'Berwyn', 'Des Plaines',
  'Arlington Heights', 'Elmhurst', 'Wheaton', 'Tinley Park',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I got tired of watching solid Chicago contractors wire a few thousand a month to Angi and HomeAdvisor for leads that three competitors down the block had already bought. Rented leads are not a business; they are a tax. So our entire job is simple: get you ranking and converting for the jobs you actually want, in the neighborhoods you actually serve, and make those leads yours to keep. No year-long handcuffs. The day it stops working for you, you show us the door.";

const WHY = [
  {
    title: 'Trades are the only thing we touch',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We know what a 2 a.m. no-heat call looks like, how a freeze-up reshuffles your week, and how insurance jobs really get booked, so every page we build tracks the way Chicago homeowners actually search.",
  },
  {
    title: 'We pull you off rented leads',
    body: "The point is a pipeline with your name on it, not one more invoice to a broker reselling the same Lincoln Park homeowner to you and three rivals at once.",
  },
  {
    title: 'We actually know this city',
    body: "Winters that pack your voicemail before sunrise, prewar housing stock that is forever failing somewhere, and real targeting that runs from Lincoln Park down to Beverly. That is the part a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices you can read on the page, reporting tied to actual leads, and month-to-month billing after the first 90 days. If we stop earning it, you walk, which keeps the pressure exactly where it should be: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies will flash a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can put in front of you is why this works, drawn straight from Google's and the industry's own research on the way people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, and we are labelling it plainly as a projection rather than a result we are claiming. Say a Chicago contractor pulls roughly 1,500 local \"near me\" impressions in a month. Climbing out of page-two invisibility and into the top three is the gap between a slow drip of calls and a calendar that is booked solid. During a cold snap, when furnaces and pipes are quitting all over Chicagoland in the same week, that gap stretches even wider. In your free audit we plug in the real figures for your business: your rankings, your search volume, and an honest 90-to-180-day path to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Chicago', state: 'Illinois', stateAbbr: 'IL', metro: 'Chicagoland',
  heroProof: ['Built for the trades', 'Winter-demand ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const chicagoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'chicago', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Chicago Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Chicago Local SEO that puts your shop in the Map Pack, so the next "near me" call from a neighbor rings your phone instead of the competition down the block.',
    eyebrow: 'Local SEO · Chicagoland',
    h1: 'Chicago Local SEO that gets you found when neighbors search your trade',
    h2Exact: 'Chicago Local SEO Company',
    heroSubhead:
      "Type any service plus \"near me\" and Google pins exactly three businesses to the map. Everyone underneath them is, for practical purposes, invisible. We move you into that top three so the call rings your phone instead of whoever happened to rank first, and so you are already there when the next deep freeze lights up every contractor's voicemail at once.",
    primaryCta: 'Get my free Chicago audit',
    intro:
      "Chicago Local SEO really comes down to a single question. When a homeowner in Lincoln Park or Beverly runs a \"near me\" search for your trade, are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll an inch further. In a market this packed, with old houses that break on schedule, winning that local 3-pack and a tuned Google Business Profile is the entire ballgame. Here is exactly how a Chicago local SEO company gets you there, and why starting before winter beats starting after it.",
    aioQuestion: 'How do Chicago businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere across the web, a steady drumbeat of real reviews, and local pages tied to genuine Chicago neighborhoods. Because the metro is dense, competitive, and full of aging homes, the winners are the shops that look established, answer fast, and are already ranked when a hard freeze sends demand vertical overnight.",
    problemHeading: "If your phone has gone quiet, it usually traces to one of these three",
    painPoints: [
      { title: 'Competitors own all three map spots', body: "Search your own trade plus \"near me\" right now. Those three businesses Google staked to the map pull the lion's share of the clicks, and most people never look past them. If your name is not up there, the quality of your work barely enters into it, because hardly anyone sees you. In a city as crowded as Chicago, breaking into that top three is usually the highest-return move a contractor can make all year." },
      { title: "You are paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Chicago homeowner to four contractors and then bill all four to scrap over the same job. It is a treadmill that never stops. Local SEO builds the opposite arrangement: a homeowner finds you, calls you, and nobody else got that lead. Month over month you rent less and own more of your pipeline." },
      { title: "You are not in position when the freeze lands", body: "Let the temperature sit below zero for a few days and pipes split, furnaces die, and ice dams chew through roofs across the metro inside the same forty-eight hours, and the shops already on the map scoop up those calls. Show up invisible when that cold snap hits and the work flows to whoever Google already trusts. Ranking now is how you ride that wave instead of watching it roll past your shop." },
    ],
    servicesHeading: 'What it actually takes to get you ranked',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever inside the Map Pack. We sharpen your categories, services, service area, photos, and posts until Google understands precisely which Chicago searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We hunt down the listings that contradict each other, correct them, and build out the ones you are missing." },
      { name: 'Reviews that keep arriving', desc: "A simple, repeatable system that turns every finished job into a fresh review. It lifts your ranking and gives a wavering homeowner the nudge to call you over the next name." },
      { name: 'Neighborhood pages', desc: "Real, distinct pages for Lincoln Park, Logan Square, Pilsen, Beverly and the rest, so you rank for the exact neighborhood someone typed, not a single catch-all \"Chicago\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. This is the wiring underneath everything else that lets it all rank in the first place." },
      { name: 'Local link building', desc: "Mentions and links from Chicago sources Google already trusts: local press, trade associations, and partners. In a market this tight, that is frequently what divides page one from page two." },
      { name: 'Winter-demand readiness', desc: "We get your profile, pages, and reviews ranking before the first hard freeze so you collect the furnace, burst-pipe, and ice-dam spike instead of scrambling to catch it once the cold has already passed.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read your business clearly and cite it by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "First we pin down where you actually rank today across each of your service areas and figure out which competitors are beating you in the Map Pack, and the specific reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. In most cases you see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live next. These compound week after week, which is exactly why local SEO rewards the contractor who starts now over the one who waits for spring." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the city and out into the suburbs, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go take the next neighborhood off your competitors." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across several Chicago areas at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors out to own the map across all of Chicagoland.', features: ['Everything in Local Growth', 'Local link building', 'Winter-demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Chicago?', a: "Most Chicago engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers are listed right above this. No hidden fees, no long contract, and we lock the exact scope down together in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The genuinely competitive Chicago keywords usually want 90 to 180 days of steady work, because reviews and citations build on each other over time. Anyone vowing you page one in 30 days in a market this crowded is selling you a story, not a result." },
      { q: 'What makes Chicago local SEO different?', a: "Two things, and neither is the bilingual angle. It is one of the densest markets in the country, so you are fighting dozens of established shops for three map spots in every single neighborhood. And the housing is old while the winters are punishing, so demand for heating, plumbing, and roofing lurches the moment the first deep freeze hits. Your ranking has to already be in place before the cold, not assembled after it." },
      { q: 'How does local SEO help me during a Chicago winter?', a: "When a hard freeze rolls through, calls for burst pipes, dead furnaces, and ice-dam roof leaks erupt across the metro inside the same forty-eight hours, and the businesses already sitting in the Map Pack take them. We get you ranked and reviewed ahead of winter so you collect that surge instead of fighting for leftovers once every competitor is already booked solid." },
      { q: 'Which areas do you cover?', a: "All of Chicago and the suburbs ringing it: Lincoln Park, Logan Square, Pilsen, Beverly, Andersonville, plus Naperville, Evanston, Oak Park, Schaumburg, Cicero and more. We build true neighborhood pages rather than one generic Chicago page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, winter freeze-ups, and insurance jobs, and we shape your local SEO around exactly how those come in." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing slice of \"near me\" research now starts inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast turning into something as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to post real movement. After that it is month-to-month. If we are not delivering, you leave, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and a slice of visibility you never actually keep. We build rankings, a Google profile, and a review base that funnel leads straight to you. As that compounds, you lean on the brokers less, because the work is already coming in on its own." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead of you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your actual business. It is the simplest way to see what Chicago Local SEO can do for your shop. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'chicago', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Chicago SEO Company | Rank for Jobs | OnwardCraft',
    metaDescription:
      'Chicago SEO that ranks contractors on Google and turns organic traffic into leads you own. Reporting tied to booked jobs, no lock-in, built for winter-freeze demand.',
    eyebrow: 'SEO Services · Chicagoland',
    h1: 'Chicago SEO that turns organic traffic into booked work all winter',
    h2Exact: 'Chicago SEO Company',
    heroSubhead:
      "Ads die the instant you stop feeding them. SEO runs the other way: rank once for what Chicago homeowners are searching and the leads keep landing for months. We build that ranking and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Chicago SEO audit',
    intro:
      "Chicago SEO boils down to one question: when someone searches what you do, are you on page one or stranded on page two? Page two might as well be page fifty. As a Chicago SEO company we get contractors ranking on Google for the money keywords in one of the densest, most cutthroat markets in the country, where the housing is old, the winters are merciless, and dozens of rivals crowd every trade. We turn that organic traffic into booked jobs and score the whole thing in leads, not vanity numbers.",
    aioQuestion: 'How do Chicago businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical bones of the site, tuning each page to the exact terms customers type, publishing genuinely useful local content, and earning links from trusted Chicago sources. In a dense, competitive market stuffed with aging homes, keeping the site quick on mobile and ranking for winter-driven seasonal terms like burst pipes and furnace repair are two of the fastest ways to pull out in front.",
    problemHeading: "Three reasons your Chicago site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down even that. In a market as crowded as Chicago, if you are not among the top handful of results for what you sell, your site is effectively invisible, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can absolutely work, but the moment your card stops, the leads stop with it. SEO builds an asset you own outright: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You are not ranking for the demand that pays", body: "Chicago demand swings with the calendar, and it swings hardest in deep winter when furnaces, pipes, and roofs fail across the metro all at once. The contractors ranked for those terms in advance catch the surge. If your SEO skips freeze-driven and seasonal searches, you are handing away your busiest weeks of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs settled before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Chicago customers search: titles, headings, body content, and internal links all pulling together." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are typing, earn links, and bring in leads while you are out on a job." },
      { name: 'Link building', desc: "Authority from real Chicago and industry sources. In a market this competitive, links are frequently the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Reporting tied to booked jobs', desc: "We report on calls, forms, and leads rather than rankings and traffic alone, so you always know exactly what your SEO is putting in the bank." },
      { name: 'Winter & seasonal SEO', desc: "We rank you for the freeze-driven and seasonal searches that fuel Chicago's busiest weeks, furnace repair, frozen pipes, ice-dam removal, so you are already visible before demand spikes rather than chasing it afterward.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, in the place where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to turn into real Chicago leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and freeze-driven terms that decide your winter." },
      { name: 'Build authority', desc: "Links and citations from trusted Chicago and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and push into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Chicago SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Chicago search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Winter & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Chicago?', a: "Most Chicago SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the climb takes. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Chicago?', a: "Look for early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most fought-over Chicago keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes the second you stop paying. SEO is an asset you own that keeps producing leads at a falling cost per lead over time. Most contractors do best treating SEO as the long-term engine and running ads for short-term spikes." },
      { q: 'Should my Chicago SEO target winter demand?', a: "Absolutely. When a deep freeze hits, searches for furnace repair, frozen pipes, and ice-dam removal spike overnight, and ranking takes months to build, so you have to be in position before winter rather than chasing it after the cold lands. We optimize for those seasonal and freeze-driven terms ahead of time so your busiest weeks fall to you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and reporting tied to booked jobs. Higher tiers add winter-and-seasonal and AI-search optimization. We confirm the exact scope together in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that runway to post real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Chicago do you cover?', a: "All of Chicago and the surrounding suburbs: Lincoln Park, Logan Square, Pilsen, Naperville, Evanston, Oak Park, Schaumburg, Cicero and more, with genuine local pages rather than one generic Chicago page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more of your search visibility you own, the less you depend on paying brokers for leads they sold three other shops too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is the clearest way to see what Chicago SEO can put on your calendar. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'chicago', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Chicago Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Chicago Web Design that makes homeowners pick you. Fast, mobile-first contractor sites that convert visitors into booked jobs and hold up through winter-freeze demand.',
    eyebrow: 'Web Design · Chicagoland',
    h1: 'Chicago web design that makes Lincoln Park homeowners pick you',
    h2Exact: 'Chicago Web Design Company',
    heroSubhead:
      "A handsome website that never produces a call is just a brochure. We build Chicago contractors fast, mobile-first sites engineered to convert visitors into booked work, and to hold steady when a cold snap floods your phone with burst-pipe and no-heat calls.",
    primaryCta: 'Get my free quote',
    intro:
      "Chicago Web Design done right is the difference between a site that books work and one that bleeds leads quietly: sluggish on a phone, a call button buried three scrolls down, no clear offer anywhere. As a Chicago web design company we close every one of those leaks. We build mobile-first contractor sites that load fast, look like the pro you already are, and turn visitors from Lincoln Park to Naperville into booked jobs, and that do not fall over when a deep freeze sends your emergency traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Chicago?',
    aioAnswer:
      "A strong Chicago contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, earns trust with reviews and real project photos, and is built to absorb traffic spikes during a winter freeze. Because most Chicago searches happen on mobile, phone speed and an obvious next step are what separate a site that books jobs from one that simply sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to call you ahead of the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your Chicago visitors are on mobile, and they bounce the moment your site drags past a few seconds. Slow sites also rank worse with Google. We build fast, so you keep both the visitor and the ranking." },
      { title: "It cannot survive a cold-snap surge", body: "When the metro freezes solid, contractor sites get slammed with a flood of no-heat and burst-pipe traffic, and the slow ones stall or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of dropping it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Chicago website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the specific jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone before anything else, because that is where nearly all of your Chicago traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where people actually use them. Every page carries an obvious next step." },
      { name: 'Copy that sells', desc: "Words written for an anxious homeowner with a dead furnace, built to book the job, not filler that reads exactly like every competitor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and pages ready to target real Chicago neighborhoods." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Cold-snap ready', desc: "Built to stay fast and keep the call button front and center when winter-freeze traffic spikes, the exact moment that turns a visitor into your biggest emergency job of the season.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more and more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it with us before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what is actually converting for you." },
    ],
    pricing: {
      heading: 'Transparent Chicago web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Cold-snap ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Chicago?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site handle a winter-freeze traffic spike?', a: "Yes, and in Chicago that is not a small thing. When a hard freeze hits, contractor sites take a flood of no-heat and burst-pipe traffic, and the slow ones shed leads right when demand peaks. We build fast and keep the call button impossible to miss, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for real neighborhoods. The build gets you ready to rank, and pairing it with our SEO service is how you climb the genuinely competitive Chicago terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Chicago traffic comes from. Fast load, call buttons built for a thumb, and forms that are painless on a phone." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage day to day, usually WordPress or Webflow. We recommend the right fit in your free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is quietly costing you in lost leads, what a high-converting Chicago site should include, and a fixed-price quote with a real timeline. It is the easiest way to see what Chicago Web Design can do for your booking rate. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'chicago', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Chicago Website Redesign | Keep Your Rankings | OnwardCraft',
    metaDescription:
      'Chicago Website Redesign that turns an aging site into a lead engine. Faster, mobile-first rebuilds with an SEO-safe migration that holds your rankings through winter.',
    eyebrow: 'Website Redesign · Chicagoland',
    h1: 'Chicago Website Redesign that turns an aging site into a lead engine',
    h2Exact: 'Chicago Website Redesign Company',
    heroSubhead:
      "A dated site quietly costs you jobs every week: slow, clumsy on a phone, easy to scroll right past. We redesign Chicago contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Chicago Website Redesign fails one of two ways: the site looks better but converts exactly the same, or it launches and the rankings disappear overnight. We do neither. We rebuild Chicago contractor sites mobile-first for speed and conversions, build them to absorb winter-freeze traffic, and handle an SEO-safe migration with the redirects and care that let you redesign without losing the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Chicago site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job a homeowner sizes you up by your site within seconds. An old, cluttered design ships them straight to a competitor who simply looks more established, even when your work runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site stutters or crawls on mobile, you are losing the majority of your Chicago visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back." },
      { title: "It cannot keep pace when demand surges", body: "Traffic that never turns into calls is pure waste, and an old site that bogs down under a cold-snap surge sheds leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing nonstop." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign repairs real problems instead of just swapping out colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema all handled properly so you hold onto the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually fill out. We design for booked jobs, not just a prettier homepage." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps your conversions and your rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Chicago traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on your jobs." },
      { name: 'Cold-snap ready rebuild', desc: "Rebuilt to stay fast and keep converting when winter-freeze traffic spikes, so the new site captures your biggest emergency jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is costing you leads and rankings, then map a redesign that fixes it without breaking the parts that already work." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape with us before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, careful migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than slipping." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Chicago redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Cold-snap ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Chicago?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes roughly 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, is not bringing in leads, or stalls when winter-freeze traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth the spend." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect whatever is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle winter-freeze traffic?', a: "Yes, and in Chicago that is a real consideration. When a hard freeze hits, contractor sites take a surge of no-heat and burst-pipe traffic, and the slow ones shed leads. We rebuild for speed and keep the call to action obvious so the site converts right when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts your conversions and your rankings together." },
      { q: 'Do I own the redesigned site?', a: "Completely. The site, the domain, and the content are all yours. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the clearest way to see what a Chicago Website Redesign can do without putting your rankings at risk." },
    ],
  },
];

export const chicagoCity = {
  citySlug: 'chicago', city: 'Chicago', state: 'Illinois', stateAbbr: 'IL', metro: 'Chicagoland',

  titleTag: 'Chicago Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Chicago marketing for contractors that gets you found and booked. Web design, SEO, and local SEO that win you leads you own, built for winter-freeze demand.',

  eyebrow: 'Chicago · Web Design, SEO & Lead Generation',
  h1: 'Chicago marketing for contractors that turns searches into jobs',
  h2Exact: 'Chicago Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Chicagoland's dense, winter-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Winter-demand ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Chicago audit',

  intro:
    "Chicago marketing for contractors means fighting for attention in one of the densest, most competitive markets in the country, where the housing is old and forever breaking and the winters pack everyone's phone before sunrise. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack, all in place before the next deep freeze sends demand through the roof. We pair web design and SEO for Chicago contractors so you get found and booked, instead of renting leads from a broker.",
  aioQuestion: 'How do Chicago contractors get more leads online?',
  aioAnswer:
    "Chicago contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Chicago is dense and competitive with aging homes and harsh winters, the contractors who look established and are already ranked before a hard freeze take the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Chicago searches \"near me.\" It is the highest-return move for most local shops, and how you catch winter-freeze demand before competitors do.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers are actually typing, build an asset you own instead of renting traffic from ads, and measure it all in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when a cold snap floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you hold onto every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Chicago?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready the moment a hard freeze hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, winter freeze-ups, and insurance work." },
    { q: 'Why does winter matter for my marketing?', a: "When a deep freeze grips Chicagoland, demand for heating, plumbing, and roofing spikes overnight: burst pipes, dead furnaces, and ice-dam roof leaks all inside the same forty-eight hours. Ranking takes months to build, so the contractors already visible before the cold take that work. We get you in position ahead of winter." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope together in your free audit." },
    { q: 'Which Chicago areas do you serve?', a: "All of Chicago and the surrounding suburbs: Lincoln Park, Logan Square, Pilsen, Beverly, Andersonville, plus Naperville, Evanston, Oak Park, Schaumburg, Cicero and more." },
    { q: 'Where should I start?', a: "Start with a free Chicago audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to see what Chicago marketing for contractors can do for your calendar. No pitch deck, just a plan." },
  ],
};

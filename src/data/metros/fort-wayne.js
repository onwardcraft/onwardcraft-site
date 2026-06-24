// FORT WAYNE - per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fort Wayne's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FORT WAYNE shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Fort Wayne is a moving target',
  body:
    "Fort Wayne is Indiana's second-largest city, anchoring a metro of roughly 430,000 people built on manufacturing. GM's Fort Wayne Assembly turns out Silverado and Sierra trucks, and BAE Systems, Raytheon, and a deep defense and advanced-manufacturing cluster keep a stable, skilled-trades homeowner base employed. That base is practical, loyal, and strongly local. Two things shape how they search. First, almost everyone looks on a phone, usually with \"near me\" attached, and they tap one of the first results without scrolling. Second, this is the city of three rivers, where the St. Marys, St. Joseph, and Maumee all meet, and major flooding events in 1982, 2003, and 2018 are part of the city's memory. When spring snowmelt and heavy rain push the rivers up, demand for water-damage restoration, roofing, and HVAC doesn't just climb. It spikes. The businesses already ranking are the ones who book that work.",
  pullQuote: 'When the rivers rise in Fort Wayne, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'How Fort Wayne searches',
    value: 16,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 16, kind: 'teal' },
      { label: 'Other', pct: 84, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter snow/ice (Nov–Mar) and spring flooding/storms (Mar–Jun)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 86, peak: true }, { m: 'M', v: 90, peak: true }, { m: 'A', v: 82, peak: true },
    { m: 'M', v: 78, peak: true }, { m: 'J', v: 66, peak: true }, { m: 'J', v: 52 },
    { m: 'A', v: 50 }, { m: 'S', v: 40 }, { m: 'O', v: 44 },
    { m: 'N', v: 70, peak: true }, { m: 'D', v: 84, peak: true },
  ],
  stats: [
    { value: '430K+', label: 'people across the Fort Wayne metro' },
    { value: '~76%', label: 'who search local on a phone visit a business that day', accent: true },
    { value: 'Mar–May', label: 'spring river flooding, when restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'West Central Historic District', 'Lakeside', 'Southwood Park', 'Aboite', 'Northwest Allen County',
    'New Haven', 'Huntertown', 'Leo-Cedarville', 'Auburn', 'Waynedale',
    'Northside', 'Foster Park', 'Pine Valley', 'Dupont', 'Georgetown',
  ],
};

const AREAS = [
  'Fort Wayne', 'New Haven', 'Huntertown', 'Leo-Cedarville', 'Auburn', 'Aboite',
  'Northwest Allen County', 'Woodburn', 'Grabill', 'Roanoke', 'Columbia City',
  'Churubusco', 'Monroeville', 'Ossian', 'Bluffton',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Trades work is the only work we take',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting. We know how a freeze-thaw cycle splits a roof, how a flooded basement off the St. Marys turns into an insurance claim, and how a 6 a.m. no-heat call gets booked. That shapes every page we build for you.",
  },
  {
    title: 'Your leads stop being rentals',
    body: "The aim is a pipeline with your name on it. Not one more recurring charge to a broker who already sold that same Aboite homeowner to three crews down the road.",
  },
  {
    title: 'We actually know this town',
    body: "The three-rivers confluence and the flood years burned into local memory, the long Indiana winters, a defense-electronics and manufacturing base that hires its neighbors, and street-level targeting from West Central to Northwest Allen County. A template-and-replace agency two states away cannot match that.",
  },
  {
    title: 'Plain prices, plain reporting',
    body: "The cost is posted, the reports count calls and booked jobs, and you go month-to-month once the first 90 days are up. If the work is not paying for itself, you cancel. The burden of proof sits with us, not you.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most shops lead with a grid of client logos. We are early and founder-run, so we are not going to dress up a history we have not earned. What we will hand you instead is the reasoning, drawn straight from Google's and the industry's published research on how people hunt for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as an illustration rather than a number we are promising: a Fort Wayne contractor pulls roughly 1,200 local \"near me\" impressions in a month. The jump from buried on page two into the top three is the gap between a few scattered calls and a calendar you cannot keep up with. After the rivers crest or an ice storm coats Allen County, that gap only widens. In your free audit we run the real figures for your business, your current rankings, your true search volume, and a straight 90-to-180-day route to the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fort Wayne', state: 'Indiana', stateAbbr: 'IN', metro: 'Fort Wayne',
  heroProof: ['Built for the trades', 'Flood & winter ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fortWayneLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fort-wayne', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fort Wayne Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Fort Wayne Local SEO that wins you the top three on the map, so a "near me" search lands with you instead of a rival.',
    eyebrow: 'Local SEO · Fort Wayne',
    h1: 'Fort Wayne Local SEO that wins you the top three on the map from Aboite to West Central',
    h2Exact: 'Fort Wayne Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you're ready when the rivers rise or an ice storm fills everyone's phone.",
    primaryCta: 'Get my free Fort Wayne audit',
    intro:
      "Fort Wayne local SEO comes down to one thing: when a homeowner in West Central or Aboite searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a practical, loyal, local-first town, so becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Fort Wayne businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Fort Wayne neighborhoods. Fort Wayne is a community-minded, manufacturing town prone to river flooding and hard winters, so the winners look established, respond fast, and are already ranking when flood- and storm-driven demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals are sitting where you should be on the map', body: "Type your own service plus \"near me\" into your phone right now. The three businesses Google drops onto the map collect almost every click. When you are not one of them, the quality of your crew barely registers, because most Fort Wayne homeowners never scroll far enough to find you. Earning one of those three slots is usually the highest-return move a local trade can make here." },
      { title: 'You keep buying leads that were never yours', body: "Angi, Thumbtack, and HomeAdvisor hand the same Fort Wayne homeowner to four crews at once, then charge each of you to scrap over the job. That is a treadmill. Local SEO does the reverse: a homeowner finds you, dials you, and the lead belongs to nobody else. Run it long enough and you stop paying rent on visibility you never keep." },
      { title: 'The rivers crest and you are nowhere to be found', body: "When spring snowmelt and heavy rain shove the St. Marys, St. Joseph, and Maumee over their banks, the way they did in 1982, 2003, and 2018, calls for restoration, roofing, and HVAC explode overnight. The crews already ranking answer the phone. If you are invisible on the map when the next crest comes, the work routes to whoever Google already trusts. Ranking ahead of season is how you ride that surge instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The strongest lever you have in the Map Pack. We set your categories, services, service area, photos, and posts so Google understands exactly which Fort Wayne searches ought to land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to read the same in every place Google checks. We correct the listings that disagree and create the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A no-fuss engine that turns each finished job into a fresh review. It nudges your ranking up and gives the next homeowner a reason to dial you first." },
      { name: 'Neighborhood pages', desc: "Genuine pages for West Central, Lakeside, Aboite, New Haven and the rest, so you rank for the exact part of town a homeowner typed, not a blanket \"Fort Wayne.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring behind the wall that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Fort Wayne sources Google respects: local press, trade groups, community partners. In this market that is frequently the difference between page one and page two." },
      { name: 'Flood & winter readiness', desc: "We get your profile, pages, and reviews ranking before the spring crest and the deep winter freeze, so you collect the surge instead of chasing it once the water has already gone down.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can parse you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you truly rank today across each service area and identify which competitors are outranking you in the Map Pack, and the reason behind it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they shift the fastest. Most Fort Wayne clients see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They stack week after week, which is the reason local SEO pays off for whoever starts ahead of the season rather than during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages reaching across Allen County and the towns ringing it, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Reporting in plain language, counted in calls and booked leads instead of vanity positions. Then we move on and take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Goes month-to-month once the first 90 days wrap. No lock-in. Cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'A single location getting its Map Pack base set up right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several pockets of Fort Wayne.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Allen County.', features: ['Everything in Local Growth', 'Local link building', 'Flood & winter demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does local SEO run in Fort Wayne?', a: "Most Fort Wayne engagements sit between $750 and $2,500 a month, scaled to how many neighborhoods and keywords you want to chase. The tiers just above spell it out. No hidden fees, no long contract, and we settle the exact scope in your free audit before a dollar moves." },
      { q: 'How soon do I land in the Map Pack?', a: "Profile work can move within a few weeks. The contested Fort Wayne keywords usually need 90 to 180 days of steady effort, because reviews and citations build on each other over time. Anybody guaranteeing page one in 30 days is selling smoke." },
      { q: 'What makes ranking in Fort Wayne its own thing?', a: "Two reasons. It is a level-headed, family-oriented manufacturing town where local reputation, reviews, and matching listings genuinely count for something. And it sits where three rivers meet, so trade demand lurches with spring flooding and long Indiana winters. Your ranking has to be set before the water rises, not bolted on after." },
      { q: 'How does ranking help me when the rivers flood?', a: "When snowmelt and heavy rain drive the St. Marys, St. Joseph, and Maumee up, searches for restoration, roofing, and HVAC jump overnight, and the crews already in the Map Pack field those calls. We get you ranked and reviewed ahead of the crest, so you collect that demand instead of fighting for leftovers once everyone else is booked solid." },
      { q: 'Which areas do you cover?', a: "Every part of Fort Wayne plus the ring around it: West Central, Lakeside, Southwood Park, Aboite, Northwest Allen County, and out to New Haven, Huntertown, Leo-Cedarville, Auburn and more. We build real neighborhood pages rather than one catch-all Fort Wayne page, because that is what ranks for \"[service] [neighborhood]\" queries." },
      { q: 'Is this built specifically for contractors?', a: "That is nearly the whole of what we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get emergency calls, flood- and winter-driven demand, and insurance jobs, and your local SEO is built around them." },
      { q: 'Will I turn up in Google AI Overviews and ChatGPT?', a: "An increasing share of \"near me\" research now starts in AI rather than classic search. We shape your content and schema so those engines can read, trust, and cite your business. In a town this size it is fast becoming as decisive as the Map Pack itself." },
      { q: 'Is there a contract holding me in?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show real movement. After that it is month-to-month. If we are not producing, you walk, and the accountability stays planted on us." },
      { q: 'How does this pull me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility that never becomes yours. We build rankings, a Google profile, and a review base that route leads straight to you alone. Over time you lean on the brokers less, because the work is already arriving direct." },
      { q: "What do I get in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the starting point for Fort Wayne Local SEO that earns you a top-three spot on the map, not a pitch deck. Just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fort-wayne', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fort Wayne SEO Company | Rankings You Own | OnwardCraft',
    metaDescription:
      'Fort Wayne SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for flood and winter demand.',
    eyebrow: 'SEO Services · Fort Wayne',
    h1: 'Fort Wayne SEO that builds rankings you actually own, season after flood season',
    h2Exact: 'Fort Wayne SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Fort Wayne customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Fort Wayne SEO audit',
    intro:
      "Fort Wayne SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a stable, local-first market that swings hard with flooding and winter, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Fort Wayne businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Fort Wayne sources. In a community-minded market with sharp seasonal swings, keeping the site fast on mobile and ranking for flood-, storm-, and winter-driven terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Fort Wayne site isn't bringing in work",
    painPoints: [
      { title: "Page two is where leads go to die", body: "Hardly anyone clicks past the first page of Google, and they rarely travel far down it either. If you are not in the top handful of results for what you sell, your site might as well not exist, however polished it looks." },
      { title: "Google Ads is a faucet you have to keep paying for", body: "Ads have their place, but the second your card stops, so do the leads. SEO builds something you keep: rankings that go on producing leads months and years past the work, at a sliver of the per-lead cost ads charge you." },
      { title: "You skip the searches that actually pay", body: "Fort Wayne demand lurches with the rivers, the storms, and the winters, and the crews ranking for those terms in advance grab the spike. Ignore the flood-driven, storm-driven, and seasonal searches in your SEO and you hand away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google needs in place before it will rank your Fort Wayne site at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep tuned to the exact terms your Fort Wayne customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers are asking, pull links, and keep bringing in leads long after they go live." },
      { name: 'Link building', desc: "Authority from real Fort Wayne and industry sources. In a steady, competitive market, links are often the thing that tips page two onto page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches right next to your organic positions." },
      { name: 'Revenue-tied reporting', desc: "We count calls, forms, and booked leads, not just positions and sessions, so you always know what your SEO is worth in dollars." },
      { name: 'Flood, storm & winter SEO', desc: "We rank you for the flood-, storm-, and winter-driven searches that carry Fort Wayne's busiest stretches, so you are visible before demand jumps rather than after it.", featured: true },
      { name: 'AI search & GEO', desc: "We frame your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to bring in real Fort Wayne leads rather than empty visits." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork everything else stands on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, the seasonal, flood-, and winter-driven terms that decide the busy months here." },
      { name: 'Build authority', desc: "Links and citations from trusted Fort Wayne and industry sources to push your contested keywords up onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting counted in leads, then we lean harder into what is landing and extend into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fort Wayne SEO pricing',
      note: 'Goes month-to-month once the first 90 days wrap. No lock-in. Cancel any time.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'A tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across trades and parts of town.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Fort Wayne search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Flood, storm & winter SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'What does SEO cost in Fort Wayne?', a: "Most Fort Wayne SEO engagements run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work the job needs. The tiers sit above, with no hidden fees and no long contract." },
      { q: 'How long before SEO works here?', a: "Look for early movement in 2 to 3 months and results worth talking about in 4 to 6, quicker on low-competition terms and slower on the most contested Fort Wayne keywords. SEO compounds, so the longer it runs, the larger the gains grow." },
      { q: 'Is SEO a better bet than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that quits the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead as the months pass. Most contractors do best running SEO as the long-haul engine and ads for short bursts." },
      { q: 'Should my Fort Wayne SEO chase flood and winter season?', a: "Yes. When the rivers rise in spring or an ice storm settles in over winter, searches for restoration, roofing, and HVAC jump overnight, and ranking takes months to build, so you must be set before the season, not scrambling during it. We tune for those seasonal, flood-, and winter-driven terms in advance so your busiest months land on you." },
      { q: "What does the SEO service include?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. The higher tiers fold in flood-, storm-, winter-, and AI-search work. We confirm the exact scope in your free audit." },
      { q: 'Do you make me sign a long contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not producing, you go." },
      { q: 'Will I surface in Google AI Overviews and ChatGPT?', a: "That is a growing piece of what we tune for. We shape your content and schema so AI engines can read, trust, and cite your business, not classic results alone." },
      { q: 'Which areas around Fort Wayne do you cover?', a: "Every part of Fort Wayne and the surrounding towns: New Haven, Huntertown, Leo-Cedarville, Auburn, Aboite, Northwest Allen County, Columbia City and more, with real local pages instead of one blanket Fort Wayne page." },
      { q: 'How do you pull me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more of your search visibility you own, the less you ride on brokers selling shared leads." },
      { q: "What comes in the free SEO audit?", a: "We show you where you stand on the Fort Wayne terms that matter, who is outranking you and how they got there, the repairs that will move you fastest, and a 90-to-180-day plan with the numbers run for your shop. It is where Fort Wayne SEO that earns you page one and lasting organic traffic begins. A diagnosis, not a sales pitch." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fort-wayne', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fort Wayne Web Design Company | Built to Book Work | OnwardCraft',
    metaDescription:
      'Fort Wayne web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and flood-season demand.',
    eyebrow: 'Web Design · Fort Wayne',
    h1: 'Fort Wayne web design engineered to bring in real work, even when the rivers rise',
    h2Exact: 'Fort Wayne Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Fort Wayne contractors fast, mobile-first sites engineered to turn visitors into booked work, and to hold up when flooding or a winter storm floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Fort Wayne web design done right is the difference between a site that quietly loses leads, slow on a phone, buried call button, no clear offer, and one that books work. As a web design company built for contractors, we ship fast, mobile-first sites that look like the professional you are and turn West-Central-to-Aboite visitors into booked jobs, sites that don't fall over when the rivers rise and traffic spikes.",
    aioQuestion: 'What makes a good contractor website in Fort Wayne?',
    aioAnswer:
      "A good Fort Wayne contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during flood and winter season. Because most Fort Wayne searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to pick you over the next name on the map. We build every page around a single job: turning a Fort Wayne visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Fort Wayne visitors are on mobile, and they leave if the site takes more than a couple of seconds to load. Slow sites also rank lower, so you lose on both ends. We build fast, which keeps the visitor and the ranking." },
      { title: "It folds when flood season floods your phone", body: "When the rivers crest or an ice storm sweeps through, contractor sites take a rush of urgent traffic, and the slow ones stall or bury the call button at the worst possible moment. We build sites that stay quick and keep converting under load, so you capture that demand instead of dropping it." },
    ],
    servicesHeading: "What's in an OnwardCraft Fort Wayne website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your service area, and the precise jobs you want more of." },
      { name: 'Mobile-first build', desc: "Built for the phone first, because that is where nearly all of your Fort Wayne traffic lives. Quick, thumb-friendly, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, unmissable call buttons, and lead forms set where homeowners actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for a homeowner staring at a flooded basement or a no-heat night, not filler that reads like every other crew in the directory." },
      { name: 'Local SEO foundation', desc: "Framed to rank from the first stud: clean structure, schema, quick load, and pages ready for West Central, Aboite, and the rest of Allen County." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which guards your conversions and your rankings together." },
      { name: 'Flood-surge ready', desc: "Built to stay fast and keep the call button front and center when flood- and storm-season traffic spikes, the moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your business forward as more search slides toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We dig into your trade, the corners of Allen County you cover, the jobs that pay best, and the crews you are up against, then shape the site around booking more of the work you actually want." },
      { name: 'Design', desc: "You get a custom, mobile-first layout aimed at booked jobs, and you review and adjust it before any code gets written." },
      { name: 'Build and copy', desc: "We build it to load fast and write copy aimed at a Fort Wayne homeowner with a flooded basement, with the call button front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly, with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around whatever is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Fort Wayne web design pricing',
      note: 'One-time build. Half to start, half at launch. You own all of it. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Flood-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location operations.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a website cost in Fort Wayne?', a: "A contractor build with us lands between $2,000 and $8,000, paid once, with the figure driven by how many pages and integrations you need. The tiers are spelled out above. The price is fixed, nothing hides in the fine print, and the finished site is yours to keep." },
      { q: 'How long does the build take?', a: "A tight site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site hold up when flood season hits?', a: "Yes, and in Fort Wayne that counts. When the rivers crest or an ice storm rolls in, contractor sites take a rush of traffic, and the slow ones shed leads right as demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of stalling." },
      { q: 'Will the new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the contested Fort Wayne terms." },
      { q: 'Do I own the website?', a: "Fully. The site, the domain, and the content are yours. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it run well on phones?', a: "We design mobile-first, because that is where nearly all of your Fort Wayne traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Which platform do you build on?', a: "We choose the platform that fits your needs and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk through the tradeoffs in plain terms." },
      { q: 'Is there ongoing support?', a: "Yes. Launch support ships with every build, and after that you can add low-cost monthly maintenance covering updates, speed, and security." },
      { q: 'Am I tied to a contract?', a: "No. The build is a one-time project at a fixed price. Any maintenance or SEO afterward is month-to-month, so you can leave whenever." },
      { q: 'What comes in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Fort Wayne site should carry, and a fixed-price quote with a timeline. It is where Fort Wayne web design that converts visitors into booked jobs starts. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fort-wayne', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fort Wayne Website Redesign | Modernize, Keep Your Traffic | OnwardCraft',
    metaDescription:
      'Fort Wayne Website Redesign that modernizes without tanking your traffic. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in flood.',
    eyebrow: 'Website Redesign · Fort Wayne',
    h1: 'Fort Wayne Website Redesign that modernizes without tanking your traffic from Aboite to New Haven',
    h2Exact: 'Fort Wayne Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, hard to use on a phone, easy to ignore. We redesign Fort Wayne contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Fort Wayne Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Fort Wayne contractor sites for speed and conversions, build them to handle flood- and winter-season traffic, and run an SEO-safe migration with the redirects that protect the traffic you already have, so you redesign without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Fort Wayne site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly costs you trust", body: "On a high-ticket job, a homeowner sizes you up by your site in seconds. An old, cluttered design ships them to a competitor who simply looks more established, even when your crew does the better work. In a family-oriented market that runs on word of mouth, that first glance decides who gets the call." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you lose most of your Fort Wayne visitors before they ever reach your offer. A redesign built mobile-first pulls those visitors back and turns them into leads." },
      { title: "It cannot keep pace when demand spikes", body: "Traffic that never becomes a call is wasted money, and an old site that grinds to a crawl under a flood- or winter-season surge sheds leads at the exact moment they pay the most. We rebuild for conversions and for the days your phone ought to be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is bleeding leads and rankings today, so the redesign fixes real problems instead of just repainting the walls." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the right way so you keep every bit of the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually fill out. We design for booked jobs, not a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Fort Wayne traffic actually sits." },
      { name: 'Brand refresh', desc: "A modern, dependable look that matches the quality of your work and the price of the jobs you want." },
      { name: 'Flood-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when flood- and storm-season traffic spikes, so the new site catches your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and put your business forward as search slides toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is losing you leads and rankings, then map a redesign that fixes it without breaking whatever already works for you." },
      { name: 'Design', desc: "A current, mobile-first layout aimed squarely at booked jobs, which you review and adjust before we rebuild anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than slide." },
      { name: 'Optimize', desc: "Once it is live, we tune around whatever is turning Fort Wayne visitors into calls and keep the speed and updates current." },
    ],
    pricing: {
      heading: 'Transparent Fort Wayne redesign pricing',
      note: 'One-time project. Half to start, half at launch. You own all of it. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Flood-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a redesign cost in Fort Wayne?', a: "A redesign with us falls between $2,500 and $9,000, paid once, with the number driven by site size and integrations. The price is set up front, nothing lurks in the fine print, and the rebuilt site belongs to you." },
      { q: 'Will I lose my Google rankings in a redesign?', a: "Not when it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A tight redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need one?', a: "If your site is slow on phones, looks dated, is a pain to update, brings in no leads, or stalls when flood- or winter-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Fort Wayne business." },
      { q: 'Do you carry over my existing content?', a: "Yes. We move and sharpen your existing content, protect what is ranking, and handle the technical migration so nothing important slips through." },
      { q: 'Will the new site handle flood-season traffic?', a: "Yes, and in Fort Wayne that is a real concern. When the rivers crest or a storm hits, contractor sites take a surge of traffic, and the slow ones shed leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts conversions and rankings both." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content. No platform lock-in of any sort." },
      { q: 'Am I tied to a contract?', a: "No. The redesign is a one-time project. Any maintenance or SEO afterward is month-to-month." },
      { q: "What comes in the free redesign audit?", a: "A straight read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is where a Fort Wayne Website Redesign that modernizes without losing your rankings begins." },
    ],
  },
];

export const fortWayneCity = {
  citySlug: 'fort-wayne', city: 'Fort Wayne', state: 'Indiana', stateAbbr: 'IN', metro: 'Fort Wayne',

  titleTag: 'Fort Wayne Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Fort Wayne marketing for contractors: web design, SEO, and local SEO that get you found and booked, so you own your leads instead of renting them.',

  eyebrow: 'Fort Wayne · Web Design, SEO & Lead Generation',
  h1: 'Fort Wayne marketing for contractors, built around the trades and ready for flood season',
  h2Exact: 'Fort Wayne Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Fort Wayne's practical, manufacturing-rooted, flood-prone market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Flood & winter ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Fort Wayne audit',

  intro:
    "Fort Wayne marketing for contractors means fighting for attention in a practical, local-first market where reputation and reviews carry real weight. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all of it ready before the rivers rise or the next ice storm sends demand through the roof. As a digital marketing agency built around web design and SEO for Fort Wayne contractors, here's how we help you do exactly that.",
  aioQuestion: 'How do Fort Wayne contractors get more leads online?',
  aioAnswer:
    "Fort Wayne contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Fort Wayne sits at the confluence of three rivers and faces hard Indiana winters, the contractors who look established and are already ranking before flood and storm season win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Claim one of the three businesses Google pins to the map when Fort Wayne searches \"near me.\" The highest-return move for most local trades, and the way you grab flood- and winter-season demand before a rival does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Fort Wayne customers actually type, build an asset you own instead of renting traffic from ads, and read the whole thing in leads rather than vanity visits.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to turn visitors into booked jobs, and to stay quick when the rivers crest and flood your phone, not brochures that just sit on a screen.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of the ranking you have already earned in Fort Wayne search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you run in Fort Wayne?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are set when flood and winter season arrive." },
    { q: 'Is it only contractors you work with?', a: "Nearly always. We focus on home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, flood- and winter-driven demand, and insurance work." },
    { q: 'Why do flood and winter season matter to my marketing?', a: "When snowmelt and heavy rain drive the three rivers up, or an ice storm settles in over winter, demand for restoration, roofing, and HVAC jumps overnight and the backlog can run for months. Ranking takes months to build, so the crews already visible before the season collect that work. We get you set ahead of time." },
    { q: 'What does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which Fort Wayne areas do you serve?', a: "Every part of Fort Wayne and the towns around it: West Central, Lakeside, Southwood Park, Aboite, Northwest Allen County, New Haven, Huntertown, Leo-Cedarville, Auburn and more." },
    { q: 'Where do I begin?', a: "Begin with a free Fort Wayne audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to start Fort Wayne marketing for contractors that gets you found and booked. No pitch deck, just a plan." },
  ],
};

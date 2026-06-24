// TAMPA: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Tampa's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// TAMPA: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why the top of Tampa search never sits still',
  body:
    "Roughly 3.3 million people live across the Tampa Bay metro, and that number climbs every single month as families relocate here from colder states. It is one of the Sun Belt's fastest-growing markets, and that cuts both ways for a contractor. Yes, every new household is a future roof, a future AC swap, a future remodel. But every month, fresh competitors plant a flag and chase the same three pins on Google's map. Two forces decide who wins. The first: nearly every homeowner here pulls out a phone, types your service with \"near me\" on the end, and books one of the first names they see without scrolling. The second is the Gulf. When a system like Helene or Milton tracks across the bay, calls for roofing, restoration, and HVAC do not merely rise; they detonate, and the backlog can stretch past a year. Whoever already holds the rankings is whoever fills that calendar.",
  pullQuote: 'When the next system crosses Tampa Bay, the contractors already ranking are the ones whose phones ring first.',
  donut: {
    title: 'How Tampa searches',
    value: 58,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 58, kind: 'teal' },
      { label: 'Desktop', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun-Nov), peaking Aug-Oct',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 32 }, { m: 'M', v: 36 }, { m: 'A', v: 44 },
    { m: 'M', v: 54 }, { m: 'J', v: 68, peak: true }, { m: 'J', v: 80, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 90, peak: true },
    { m: 'N', v: 64, peak: true }, { m: 'D', v: 42 },
  ],
  stats: [
    { value: '3.3M+', label: 'people across the Tampa Bay metro' },
    { value: '~58%', label: 'of local searches here happen on a phone, usually "near me"', accent: true },
    { value: 'Jun-Nov', label: 'hurricane season, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Hyde Park', 'Ybor City', 'Seminole Heights', 'Channel District', 'Davis Islands',
    'Harbour Island', 'Tampa Heights', 'Palma Ceia', 'Westshore', 'Carrollwood',
    'Tampa Palms', 'Brandon', 'Riverview', 'Wesley Chapel', 'New Tampa',
  ],
};

const AREAS = [
  'Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Riverview', 'Wesley Chapel',
  'Carrollwood', 'Town \'n\' Country', 'Plant City', 'Lutz', 'Land O\' Lakes',
  'Temple Terrace', 'Valrico', 'Apollo Beach', 'Largo',
];

const FOUNDER =
  "Let me be straight about why OnwardCraft exists. I got tired of watching skilled Tampa contractors wire a few thousand dollars a month to Angi and HomeAdvisor for the privilege of fighting three competitors over the same lead. Rented leads are quicksand; the harder you work, the deeper you sink. So our entire job is simple: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, with leads that belong to you and nobody else. No year-long handcuffs either. If the needle is not moving, you show us the door.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contracting. We know what a storm-season surge does to your inbox, what an emergency call sounds like at 11pm, and how an insurance job actually closes, so every page we build mirrors how Tampa homeowners really search.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The target is a pipeline with your name on the deed. Not one more recurring charge to a broker reselling the same Tampa homeowner to three of your competitors before lunch.",
  },
  {
    title: 'We genuinely know this bay',
    body: "Gulf-coast storm demand, a metro filling up faster than anyone can build, street-level targeting from Hyde Park down to Wesley Chapel. None of that survives a national agency swapping \"Tampa\" into a template and calling it local.",
  },
  {
    title: 'Nothing hidden, no leashes',
    body: "Prices on the page, reporting tied to real leads, month-to-month once your first 90 days are up. If we stop earning the relationship, you leave clean. That keeps every ounce of pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Most agencies open with a mosaic of client logos. We are a young, founder-led shop, and we are not going to fake a history we have not lived yet. What we can hand you is the why behind all of this, pulled straight from Google's and the industry's own research on how people search for local trades.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a projection rather than a result we are claiming: a Tampa contractor pulls roughly 1,500 local \"near me\" impressions in a month. Sliding from buried-on-page-two into the top three is the gap between a few stray calls and a calendar you have to fight to keep open. After a storm, that gap stretches wider still. Inside your free audit, we model the real figures for your business: your current rankings, your actual search volume, and an honest 90 to 180 day path to the top.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Tampa', state: 'Florida', stateAbbr: 'FL', metro: 'Tampa Bay',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const tampaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'tampa', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Tampa Local SEO Company | Out-Rank the Competition | OnwardCraft',
    metaDescription:
      'Tampa Local SEO that ranks you above the competition on the map, from Hyde Park to Wesley Chapel. The call rings your phone, not a rival down the street.',
    eyebrow: 'Local SEO · Tampa Bay',
    h1: 'Tampa Local SEO that ranks you above the competition from Hyde Park to Brandon',
    h2Exact: 'Tampa Local SEO Company',
    heroSubhead:
      "Type any service plus \"near me\" and Google hands the homeowner three businesses on a map. Everyone underneath them might as well not exist. We lift you into that top three so the call rings your phone instead of whoever beat you there, and so your calendar is already winning when the next storm lights up every phone in the bay.",
    primaryCta: 'Get my free Tampa audit',
    intro:
      "Tampa local SEO boils down to a single question: when a homeowner in Hyde Park or Brandon thumbs in your service plus \"near me,\" are you one of the three names Google pins to the map? Most people tap one of those three and never scroll an inch further. With the metro filling up faster than crews can keep pace, claiming a Map Pack spot is the entire contest. Here is exactly how you win it.",
    aioQuestion: 'How do Tampa businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things at once: a Google Business Profile dialed into the precise services and neighborhoods you want; name, address, and phone details that match everywhere Google checks; a dependable flow of real reviews; and content rooted in actual Tampa Bay neighborhoods. Because the metro grows fast and storms reshape demand overnight, the winners look established, reply in minutes, and are already ranked when hurricane-season searches surge.",
    problemHeading: "A quiet phone in Tampa usually traces back to one of these three",
    painPoints: [
      { title: 'Competitors own all three pins on the map', body: "Pull up your phone and search your own service plus \"near me\" right now. Those three businesses Google stacks on the map collect the lion's share of the clicks. Land outside them and the quality of your work barely registers, because most Tampa homeowners never lay eyes on your name. Cracking that top three is almost always the highest-return move a local business can make here." },
      { title: "You keep renting leads you will never own", body: "Angi, Thumbtack, and HomeAdvisor sell one Tampa homeowner to four contractors, then invoice each of you to brawl over them. It is a hamster wheel. Local SEO builds the inverse: a homeowner finds you, dials you, and not one competitor got a copy. Run it long enough and you stop renting access and start owning the pipeline outright." },
      { title: "The storm arrives and you are nowhere on the map", body: "When Helene and Milton swept through, demand for roofing, restoration, and HVAC went vertical inside a day, and the contractors already ranking absorbed the calls. Be invisible on the map when the next system lands and that work flows straight to whoever Google already trusts. Ranking now is how you ride the surge instead of watching it crest without you." },
    ],
    servicesHeading: 'What it actually takes to put you on the map',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google understands precisely which Tampa searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read identically everywhere Google looks. We repair the listings that contradict each other and build out the ones you never claimed." },
      { name: 'Reviews that keep arriving', desc: "A no-fuss system that turns every finished Tampa job into a fresh review. It pushes your ranking up and nudges the next homeowner to actually dial." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Hyde Park, Brandon, Riverview, Wesley Chapel and the rest, so you surface for the exact neighborhood a homeowner typed, not a vague \"Tampa.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The wiring beneath the floorboards that lets everything above it rank." },
      { name: 'Local link building', desc: "Mentions and links from Tampa sources Google respects: local press, trade associations, suppliers, partners. In this market that is often the line between page one and page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking ahead of hurricane season so you absorb the demand spike instead of scrambling to catch up after it has already passed.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read you clearly and name you in the answer.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area and pinpoint which competitors are outranking you in the Map Pack and the reasons behind it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Most Tampa businesses see the earliest lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. These stack week over week, which is exactly why local SEO pays the contractors who start now over the ones who wait." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Hillsborough and Pinellas, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting pegged to calls and booked leads, not vanity ranking screenshots. Then we go claim the next neighborhood on the list." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several Tampa Bay areas at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across all of Tampa Bay.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Tampa?', a: "Most Tampa engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you want to own. The tiers right above lay it out. No hidden fees, no long contract, and we lock the exact scope inside your free audit before you commit a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The genuinely competitive Tampa keywords typically take 90 to 180 days of steady work, because reviews and citations compound rather than flip overnight. Anyone promising page one in 30 days in a market growing this fast is selling smoke." },
      { q: 'What makes Tampa local SEO different?', a: "Two forces. It is a fast-growing Sun Belt metro, so new competitors plant flags constantly and trust signals like reviews and matching listings carry serious weight. And it sits on the Gulf, so trade demand whipsaws with hurricane season, which means your ranking has to be locked in before the storm rather than after it." },
      { q: 'How does local SEO help me during hurricane season?', a: "When a system like Helene or Milton crosses Tampa Bay, searches for roofing, restoration, and HVAC explode within hours, and the businesses already sitting in the Map Pack capture those calls. We get you ranked and reviewed ahead of season so you collect that demand instead of fighting for leftovers once everyone else is already booked solid." },
      { q: 'Which areas do you cover?', a: "All of Tampa Bay and the communities around it: Hyde Park, Seminole Heights, Brandon, Riverview, Wesley Chapel, Carrollwood, plus St. Petersburg, Clearwater, Plant City and beyond. We build real neighborhood pages rather than one catch-all Tampa page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven surges, and insurance jobs, and we shape your local SEO around all three." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing slice of \"near me\" research now begins inside AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Tampa it is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show genuine movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on our shoulders." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and borrowed visibility you never keep. We build rankings, a Google profile, and a review base that route homeowners straight to you. Month by month you lean on the brokers less, because the work is already coming to you direct." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead, the fixes that will move you fastest, and a realistic 90 to 180 day Tampa local SEO plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'tampa', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Tampa SEO Company | Climb Past the Competition | OnwardCraft',
    metaDescription:
      'Tampa SEO that climbs contractors past the competition on Google and delivers leads you keep. Lead-tied reporting, no lock-in, built for storm-season demand.',
    eyebrow: 'SEO Services · Tampa Bay',
    h1: 'Tampa SEO that climbs you past the competition on Google before the next storm hits',
    h2Exact: 'Tampa SEO Company',
    heroSubhead:
      "The instant you stop funding ads, the leads die. SEO runs the other direction: rank once for what Tampa homeowners search and the calls keep landing. We build that ranking and chain every report to real calls and booked jobs, not pretty traffic graphs.",
    primaryCta: 'Get my free Tampa SEO audit',
    intro:
      "Tampa SEO hinges on one question: when a homeowner searches what you do, are you sitting on page one or buried on page two? In a market this crowded, page two might as well be page fifty. We rank contractors for the keywords that pay, in a metro that is growing and storm-prone at the same time, and we score it in leads rather than vanity visits.",
    aioQuestion: 'How do Tampa businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page to the exact terms homeowners type, publishing content that is genuinely useful and local, and earning links from trusted Tampa sources. In a fast-growing Gulf-coast market, keeping the site quick on mobile and ranking early for storm-driven, seasonal terms are two of the fastest ways to leapfrog the competition.",
    problemHeading: "Three reasons your Tampa site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past page one of Google, and they rarely scroll deep into it. Land outside the top handful for what you sell and your site is effectively invisible, however sharp it looks. In a metro adding households every month, that is real money walking to a competitor." },
      { title: "You are renting traffic from Google Ads", body: "Ads have their place, but the second your card declines, the leads evaporate. SEO builds something you own outright: rankings that keep generating leads for months and years after the work wraps, at a fraction of the cost per lead an ad ever charged you." },
      { title: "You are absent for the demand that pays", body: "Tampa demand swings with the calendar and the storms, and the contractors ranking for those terms ahead of time scoop the surge. If your SEO ignores hurricane-driven and seasonal searches, you are leaving your three busiest months sitting on the table for someone else." },
    ],
    servicesHeading: 'The SEO work that genuinely moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Tampa homeowners search: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers type, pull in links, and bring leads while you are on a job site." },
      { name: 'Link building', desc: "Authority from real Tampa and trade sources. In a market this competitive, links are frequently the deciding line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and sessions, so you always know what your SEO is genuinely worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the hurricane-driven and seasonal searches that power Tampa's busiest stretch, so you are visible before demand spikes rather than chasing it afterward.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, in the place where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to put real Tampa leads on your calendar." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that decide Tampa's busy months." },
      { name: 'Build authority', desc: "Links and citations from trusted Tampa and trade sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour fuel on what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Tampa SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Tampa Bay search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Tampa?', a: "Most Tampa SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work the climb demands. The tiers above lay it out, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Tampa?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Tampa keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops dead when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Tampa contractors win by running SEO as the long-term engine and leaning on ads for short-term spikes." },
      { q: 'Should my Tampa SEO target hurricane season?', a: "Absolutely. When systems like Helene or Milton hit, searches for roofing, restoration, and HVAC explode overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and storm-driven terms early so your busiest months land on your calendar." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope inside your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs roughly that long to show genuine movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Tampa do you cover?', a: "All of Tampa Bay and the surrounding communities: Brandon, Riverview, Wesley Chapel, Carrollwood, St. Petersburg, Clearwater, Plant City and more, with genuine local pages rather than one generic Tampa page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route homeowners straight to you. The more of your search visibility you own, the less you depend on paying brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the highest-impact fixes, and a realistic Tampa SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'tampa', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Tampa Web Design Company | Fast Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Tampa web design that loads fast and books more jobs: mobile-first sites built for contractors and the storm-season demand spike across the bay.',
    eyebrow: 'Web Design · Tampa Bay',
    h1: 'Tampa web design that loads fast on a phone and books more jobs across the bay',
    h2Exact: 'Tampa Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure with a domain. We build Tampa contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stay standing the day storm season floods your inbox.",
    primaryCta: 'Get my free quote',
    intro:
      "Tampa web design lives or dies on one thing: does the site load fast on a phone and hand the homeowner an obvious way to call you? Most contractor sites here bleed leads in silence, sluggish on mobile, a call button hidden three scrolls down, no offer worth acting on. Done right, the build closes every one of those leaks. We build sites that load fast, look like the professional you already are, and turn homeowners from Hyde Park to Wesley Chapel into booked jobs, then keep their footing when a storm sends your traffic vertical.",
    aioQuestion: 'What makes a good contractor website in Tampa?',
    aioAnswer:
      "A strong Tampa contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, earns trust with reviews and real project photos, and is built to absorb traffic spikes during storm season. Because most Tampa searches happen on mobile, phone speed and an unmistakable next step are what separate a site that books jobs from one that just sits there collecting dust.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites simply list services and stop there. No clear offer, no obvious next move, no reason a Tampa homeowner should call you over the next name on the map. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Tampa visitors are on mobile, and they bounce the moment a site takes more than a few seconds to load. Slow pages rank worse too, so the problem compounds. We build fast, which keeps both the visitor and the ranking on your side." },
      { title: "It folds under a storm-season surge", body: "After Helene and Milton, contractor sites took a flood of traffic, and the slow ones either crashed or buried the call button at the exact moment it mattered most. We build sites that stay fast and keep converting under load, so you capture that demand instead of bleeding it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Tampa website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter template. A site designed around your trade, your service area, and the specific jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Tampa traffic lives. Fast, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where homeowners actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for an anxious homeowner who needs the job done now, not filler that reads like every other contractor in the bay." },
      { name: 'Local SEO foundation', desc: "Built from the studs up to rank: clean structure, schema, quick load, and pages ready for real Tampa neighborhoods." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at the same time." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when storm-season traffic spikes, the exact moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your business and recommend it, as more Tampa search shifts toward AI tools.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting Tampa visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Tampa web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Tampa?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers above lay it out: fixed price, no surprises, and you own the finished site free and clear." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted at every stage." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in Tampa that is not a hypothetical. After Helene and Milton, contractor sites took a flood of traffic, and the slow ones lost leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of folding." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for real Tampa neighborhoods. The build sets you up to rank; pairing it with our SEO service is how you climb the genuinely competitive Tampa terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you are trapped inside." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Tampa traffic comes from. Fast load, call buttons sized for a thumb, and forms built for one hand on a phone." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Tampa web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'tampa', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Tampa Website Redesign | SEO-Safe Migration | OnwardCraft',
    metaDescription:
      'Tampa Website Redesign done with a careful, SEO-safe migration. Faster, mobile-first rebuilds that book more jobs and hold up when storm season hits the bay.',
    eyebrow: 'Website Redesign · Tampa Bay',
    h1: 'Tampa Website Redesign done with a careful, SEO-safe migration that holds your rankings',
    h2Exact: 'Tampa Website Redesign Company',
    heroSubhead:
      "A dated site quietly costs you jobs every week: slow, awkward on a phone, easy for a Tampa homeowner to skip. We redesign contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you fought to earn.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Tampa Website Redesign crashes one of two ways: the site looks sharper but books the same number of jobs, or it launches and the rankings disappear overnight. We refuse both. We redesign contractor sites for speed and conversions, build them to take a storm-season traffic surge, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by keeping your URL structure (or mapping a 301 redirect for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled right, a redesign keeps your rankings and lifts them, because the new site is faster, mobile-first, and better structured than the one it replaced.",
    problemHeading: "Signs your Tampa site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "On a high-ticket job, Tampa homeowners size you up by your site in seconds. An old, cluttered design nudges them toward a competitor who simply looks more established, even when your craftsmanship runs circles around theirs." },
      { title: "It is slow and clumsy on a phone", body: "If your site stutters or crawls on mobile, you are losing most of your Tampa visitors before they ever reach your offer. A redesign built mobile-first wins those homeowners back." },
      { title: "It cannot keep up when demand surges", body: "Traffic that never turns into calls is pure waste, and an old site that bogs down under a storm-season surge sheds leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign repairs real problems instead of just swapping the color palette." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every ranking and visitor you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually fill out. We design for booked jobs, not just a prettier face." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts your conversions and your rankings together." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where nearly all of your Tampa traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price tag on your jobs." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when storm-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as Tampa search keeps shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is leaking leads and rankings, then map a redesign that fixes it without breaking what already works in your favor." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects already in place and watch closely so rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting Tampa visitors, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Tampa redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Tampa?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and careful is the only way we work. We map a 301 redirect for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Handled right, a redesign holds your rankings and usually lifts them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site crawls on phones, looks dated, is a chore to update, is not bringing in leads, or buckles when storm-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign earns its keep." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve whatever is ranking, and handle the technical migration so nothing valuable slips through the cracks." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in Tampa that is a genuine consideration. After Helene and Milton, contractor sites took a surge of traffic, and the slow ones lost leads. We rebuild for speed and keep the call to action obvious so the site converts right when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts your conversions and your rankings together." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in, no strings." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what a Tampa Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const tampaCity = {
  citySlug: 'tampa', city: 'Tampa', state: 'Florida', stateAbbr: 'FL', metro: 'Tampa Bay',

  titleTag: 'Tampa Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Tampa marketing for contractors that fills your calendar: web design, SEO, and local SEO. Get found, get booked, and own your leads, built for storm-season demand.',

  eyebrow: 'Tampa · Web Design, SEO & Lead Generation',
  h1: 'Tampa marketing for contractors that fills your calendar before the next storm',
  h2Exact: 'Tampa Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Tampa Bay's fast-growing, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Tampa audit',

  intro:
    "Tampa marketing for contractors comes down to competing for attention in one of the fastest-growing markets in the country, with new rivals showing up as quickly as new homeowners. Winning here takes three pieces locked together: a site that converts, SEO that ranks you for what people search, and local SEO that plants you in the Map Pack, all in place before the next storm sends demand through the roof. Here is how we help Tampa contractors pull off exactly that.",
  aioQuestion: 'How do Tampa contractors get more leads online?',
  aioAnswer:
    "Tampa contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Tampa Bay is growing fast and demand spikes hard during hurricane season, the contractors who look established and are already ranking before the storm capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three businesses Google pins to the map when Tampa searches \"near me.\" The single highest-return move for most local businesses, and how you catch storm-season demand before competitors do.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your homeowners actually search, build an asset you own instead of renting traffic from ads, and measure the win in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when storm season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, and migrate it with enough care that you keep every bit of ranking you already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Tampa?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, all ready before storm season lands." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven surges, and insurance work." },
    { q: 'Why does storm season matter for my marketing?', a: "When hurricanes like Helene and Milton cross Tampa Bay, demand for roofing, restoration, and HVAC explodes overnight and the backlog can run past a year. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope inside your free audit." },
    { q: 'Which Tampa areas do you serve?', a: "All of Tampa Bay and the surrounding communities: Hyde Park, Seminole Heights, Brandon, Riverview, Wesley Chapel, Carrollwood, St. Petersburg, Clearwater, Plant City and more." },
    { q: 'Where should I start?', a: "Start with a free Tampa audit. We look at your website, your rankings, and your Map Pack presence, then map the Tampa marketing for contractors that brings in the most work fastest. No pitch deck, just a plan." },
  ],
};

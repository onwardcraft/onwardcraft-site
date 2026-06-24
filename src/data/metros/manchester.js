// MANCHESTER: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Manchester's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MANCHESTER: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'What makes the Manchester search market hard to crack',
  body:
    "Manchester grew up around the Amoskeag mills on the Merrimack, and the old brick Millyard is now full of startups, restaurants, and lofts instead of looms. The city anchors a southern New Hampshire metro that keeps absorbing people who cross the line from Massachusetts to escape Boston rents and skip the state income and sales tax. Those buyers land in Bedford, Londonderry, and the North End with city paychecks and aging housing stock that needs work right away. For a contractor, that cuts both ways: the call volume is real, but so is the crowd of rivals chasing the same handful of map results. Demand here moves on two rhythms. One, nearly every homeowner reaches for a phone and types your trade plus \"near me,\" then books from the first cluster of results without ever scrolling. Two, this is hard-winter country. A nor'easter rolling up I-93, an ice dam peeling a gutter off a West Side triple-decker, or a subzero snap splitting a supply line in Hooksett does not nudge demand for roofers, plumbers, and heating crews. It detonates it, and the calls keep coming from late November through the April thaw. Whoever already ranks is whoever fields those calls.",
  pullQuote: 'When the next storm rolls up I-93 into Manchester, the trades already ranking are the ones whose phones ring.',
  donut: {
    title: 'Who owns homes in the metro',
    value: 70,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 70, kind: 'teal' },
      { label: 'Renters', pct: 30, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the calls pile up',
  seasonCaption: 'Snow season runs Nov through Apr, then the Merrimack spring thaw brings flooded basements',
  seasonalDemand: [
    { m: 'J', v: 92, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 78, peak: true },
    { m: 'A', v: 60, peak: true }, { m: 'M', v: 48 }, { m: 'J', v: 44 },
    { m: 'J', v: 46 }, { m: 'A', v: 48 }, { m: 'S', v: 50 }, { m: 'O', v: 64 },
    { m: 'N', v: 82, peak: true }, { m: 'D', v: 94, peak: true },
  ],
  stats: [
    { value: 'No tax', label: 'no income or sales tax keeps drawing buyers north from Massachusetts' },
    { value: '~70%', label: 'of metro households own rather than rent their home', accent: true },
    { value: 'Nov–Apr', label: 'the snow-and-freeze stretch when trade calls surge' },
    { value: 'Top 3', label: 'map results that soak up nearly every tap' },
  ],
  neighborhoods: [
    'North End', 'Rimmon Heights', 'Hallsville', 'The Millyard', 'Bedford',
    'Hooksett', 'Goffstown', 'Londonderry', 'Derry', 'Nashua',
    'Merrimack', 'Amoskeag', 'West Side', 'Manchester Center', 'South Willow',
  ],
};

const AREAS = [
  'Manchester', 'Nashua', 'Bedford', 'Hooksett', 'Goffstown', 'Londonderry',
  'Derry', 'Merrimack', 'Hudson', 'Salem', 'Litchfield',
  'Auburn', 'Candia', 'Pelham', 'Amherst',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'The trades are the only thing we build for',
    body: "Roofers, HVAC techs, plumbers, solar crews, electricians, restoration shops, and GCs. We know what a burst-pipe call sounds like in February and how insurance jobs flow, so every page we ship is wired to how southern New Hampshire homeowners actually search.",
  },
  {
    title: 'We end the rented-lead habit',
    body: "The point is a pipeline that belongs to you. Not one more monthly bill to a lead broker for a Manchester homeowner three of your competitors already paid for.",
  },
  {
    title: 'We know this city, not a template',
    body: "Live-free-or-die self-reliance, storm-driven call spikes, and real targeting from the Millyard and Rimmon Heights out to Bedford and Hooksett. That local read is the part a national agency can't fake by find-and-replacing a city name.",
  },
  {
    title: 'Plain pricing, no handcuffs',
    body: "Posted prices, reports tied to actual leads, and month-to-month billing once the first 90 days are done. If we stop earning it, you walk. That keeps the pressure squarely on us.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here's the honest math instead",
  body:
    "Most agencies open with a grid of client logos. We're a young, founder-run shop in southern New Hampshire, and we're not going to fake a track record we haven't earned yet. What we can put in front of you is the reason this approach works, pulled straight from Google's own data and the industry's research on how people search for local trades.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of phone-based local searches lead to a same-day visit', n: 76 },
    { value: '28%', label: 'of local searches finish with a purchase', n: 28 },
  ],
  projection:
    "Picture this, and note it's flagged as a projection rather than a result we're claiming: a Manchester contractor pulls roughly 1,500 local \"near me\" impressions in a month. Climbing from page-two obscurity into the top three results is the gap between a few stray calls and a calendar that's full for weeks. When a storm comes up I-93, that gap stretches even wider. In your free audit we run the real figures for your shop: your current rankings, your search volume here, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Manchester', state: 'New Hampshire', stateAbbr: 'NH', metro: 'Manchester-Nashua',
  heroProof: ['Built for the trades', 'Winter-emergency ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const manchesterLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'manchester', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Manchester Local SEO Company | OnwardCraft',
    metaDescription:
      'Manchester Local SEO that lands your shop in the Map Pack, the three businesses Google pins when neighbors search your trade plus near me.',
    eyebrow: 'Local SEO · Manchester-Nashua',
    h1: 'Manchester Local SEO that makes you the first name on the map from Rimmon Heights to Bedford',
    h2Exact: 'Manchester Local SEO Company',
    heroSubhead:
      "When someone here searches \"near me,\" Google pins exactly three businesses to the map. Anyone underneath might as well not exist. We move your shop into that top three so the call reaches you, not whoever happened to rank first, and so you're set before the next storm jams everyone's phone lines.",
    primaryCta: 'Get my free Manchester audit',
    intro:
      "Manchester Local SEO turns on a single question: when a homeowner in Rimmon Heights or out in Bedford types your trade plus \"near me,\" is your shop one of the three Google sticks to the map? Most people tap one of those three and never scroll past them. Families keep crossing up from Massachusetts and the field of competitors thickens right alongside them, so winning the local 3-pack is the entire contest. A tuned Google Business Profile, matching listings, and pages built for real near me searches are what get you there.",
    aioQuestion: 'How do Manchester NH businesses rank higher in local search?',
    aioAnswer:
      "You earn it with four pieces: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere online, a steady run of genuine reviews, and local pages tied to real Manchester-Nashua areas like the North End, the Millyard, and Hooksett. New Hampshire homeowners lean independent and favor a local crew, and storm-season demand jumps fast, so the shops that win look established, answer quickly, and are already ranking before the first nor'easter lands.",
    problemHeading: "Quiet phone? It usually traces back to one of these",
    painPoints: [
      { title: 'Rivals are holding all three map spots', body: "Type your own trade plus \"near me\" right now in Manchester. Those three businesses Google pinned to the map collect nearly every tap. If your shop isn't among them, the quality of your work barely registers, because most searchers never lay eyes on your name. Breaking into that trio is usually the highest-return move a contractor in this metro can make." },
      { title: "You're paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Manchester homeowner to four crews, then charge each of you to scrap over them. It's a hamster wheel. Local SEO does the reverse: the lead finds you, calls you, and no one else got handed it. Month by month you rent less and own more of the pipeline." },
      { title: "Storm season arrives and you're invisible", body: "When a nor'easter buries the city or a deep freeze cracks supply lines across the West Side, demand for roofing, plumbing, and heating goes vertical in a night, and the crews already ranking grab the calls. If you're nowhere on the map when the snow flies, the work flows to whoever Google already trusts. Ranking now is how you ride that surge instead of watching it roll by." },
    ],
    servicesHeading: 'The work that actually moves you up the map',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows precisely which Manchester searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read the same everywhere Google checks. We correct the listings that contradict each other and build the ones missing across the metro." },
      { name: 'Reviews that keep coming', desc: "A straightforward system that turns each finished job into another review. It pushes your ranking up and nudges the next caller to dial." },
      { name: 'Neighborhood pages', desc: "Real pages for the North End, Bedford, Hooksett, Londonderry, and the rest, so you surface for the exact area a homeowner typed instead of a bare \"Manchester\" search." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring behind the walls that lets everything else climb." },
      { name: 'Local link building', desc: "Mentions and links from Manchester sources Google respects: the Union Leader, area trade associations, and local partners. Here, that's often what splits page one from page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking before the first flakes fall so you catch the nor'easter and frozen-pipe rush instead of scrambling once it's already on you.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" digging now starts inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you actually sit today across your service areas and figure out which competitors are beating you in the Map Pack and what's driving it." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, since they move quickest. Early lift here usually shows up inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They stack week after week, which is exactly why local SEO pays off for whoever starts sooner." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Manchester-Nashua metro, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity positions. Then we go claim the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing laid right out in the open',
      note: 'Billing goes month-to-month once the first 90 days wrap. Nothing locked in. Walk whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting your Map Pack footing solid.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops scrapping across a few Manchester-Nashua areas at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map clear across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Winter-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does local SEO cost in Manchester NH?', a: "Most engagements here settle between $750 and $2,500 a month, set by how many neighborhoods and keywords you're chasing. The tiers above lay it out. No buried fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How soon will I land in the Map Pack?', a: "Profile work can shift things in a few weeks. The contested Manchester keywords generally need 90 to 180 days of steady effort, since reviews and citations build on each other over time. Anyone vowing page one in 30 days in a metro pulling this many new arrivals is selling smoke." },
      { q: 'What makes local SEO in Manchester its own beast?', a: "Two forces. New Hampshire's no-tax pull keeps funneling Boston-area buyers north, so fresh competitors surface constantly and trust signals like reviews and matching listings carry serious weight. And it's New England: trade demand whipsaws with the seasons, so your ranking has to be set before the first nor'easter, not chased after it." },
      { q: 'How does local SEO pay off during a Manchester winter?', a: "When a nor'easter or a hard freeze hits the city, searches for roofing, plumbing, and heating jump overnight, and the shops already in the Map Pack field those calls. We get you ranked and reviewed ahead of the cold so you catch that wave instead of fighting for leftovers once everyone is booked." },
      { q: 'Which areas do you cover?', a: "The full Manchester-Nashua metro and the towns ringing it: the North End, Rimmon Heights, Hallsville, Bedford, Hooksett, Goffstown, on out to Londonderry, Derry, Nashua, Merrimack, and more. We build true neighborhood pages rather than one catch-all Manchester page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you focus on contractors?', a: "It's nearly the whole business. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get emergency calls, the seasonal demand swing, and insurance jobs, and we build your local SEO around all of it." },
      { q: 'Will I turn up in Google AI Overviews and ChatGPT?', a: "A rising share of \"near me\" research now opens in AI rather than classic search. We structure your content and schema so those engines can read, trust, and cite your shop. It's fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I tied to a contract?', a: "No. We ask for an opening 90 days because that's about how long local SEO needs to show real movement. After that it runs month-to-month. If we're not producing, you leave, and the accountability stays on us." },
      { q: 'How does this wean me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work arrives directly. Folks here already prefer hiring a local contractor straight, so this just puts you in front of them." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, how your Map Pack rivals are getting ahead, the fixes that'll move you fastest, and a grounded 90-to-180-day Manchester Local SEO plan with the numbers run for your shop. No pitch deck, just a straight diagnosis of what it takes to rank on the map." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'manchester', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Manchester SEO Company | OnwardCraft',
    metaDescription:
      'Manchester SEO that ranks contractors on page one of Google and delivers leads you keep. Lead-tied reporting, no lock-in, tuned for storm-season demand.',
    eyebrow: 'SEO Services · Manchester-Nashua',
    h1: 'Manchester SEO that puts your trade on page one of Google and holds it through storm season',
    h2Exact: 'Manchester SEO Company',
    heroSubhead:
      "Ads die the instant you stop feeding them. SEO runs the other way: rank once for what your Manchester customers search and the leads keep arriving. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Manchester SEO audit',
    intro:
      "Manchester SEO reduces to one question: when someone searches your trade, do you land on page one or page two? Page two might as well be page fifty. As a Manchester SEO company built for the trades, we rank contractors for the money keywords in a metro stocked with new arrivals carrying Boston-area budgets, then score the organic traffic in leads, not vanity numbers.",
    aioQuestion: 'How do Manchester NH businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the site's technical base, tuning each page to the exact terms buyers type, publishing local content people actually use, and earning links from trusted Manchester sources like the Union Leader and regional trade groups. In a crowded market fed by in-migrating homeowners, keeping the site quick on mobile and ranking for the storm-driven seasonal terms are two of the fastest ways to break ahead.",
    problemHeading: "Three reasons your Manchester site isn't booking work",
    painPoints: [
      { title: "You're stranded on page two", body: "Hardly anyone clicks past Google's first page, and they seldom scroll far down it. If your shop isn't in the top handful of results for what you sell, your site sits invisible, however sharp it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can earn their keep, but the second your card stops, the leads stop too. SEO builds an asset you hold: rankings that keep producing leads for months and years after the work, at a sliver of the per-lead cost." },
      { title: "You skip the demand that pays the bills", body: "Manchester call volume lurches with the seasons, and the contractors ranking for those terms in advance grab the surge. If your SEO ignores nor'easter, ice-dam, and frozen-pipe searches, you're handing away your busiest stretch of the year." },
    ],
    servicesHeading: 'The SEO work that genuinely shifts rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, schema, and the behind-the-walls fixes Google wants before it ranks you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Manchester buyers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles people actually find useful, answering what buyers search, pulling in links, and feeding leads while you sleep." },
      { name: 'Link building', desc: "Authority from real Manchester and trade sources. In a packed market, links are often the line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Lead-tied reporting', desc: "We report on calls, forms, and booked leads, not just positions and traffic, so you always know what your SEO is worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the nor'easter, ice-dam, and frozen-pipe searches that fuel Manchester's busiest months, so you're up before demand jumps, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing slice of search now starts.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and rivals, then chart a roadmap around the keywords most likely to drive real Manchester leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the footing everything else needs to rank on." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that pay off here." },
      { name: 'Build authority', desc: "Links and citations from trusted Manchester and trade sources to push contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we press harder on what's working and reach into the next keyword set." },
    ],
    pricing: {
      heading: 'Manchester SEO pricing with nothing hidden',
      note: 'Runs month-to-month once the first 90 days close. Nothing locked in. Stop whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across several services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For shops out to own Manchester-Nashua search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Winter & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'What does SEO cost in Manchester NH?', a: "Most SEO engagements here run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work you need. The tiers sit above, with no buried fees and no long contract." },
      { q: 'How long does SEO take to land in Manchester?', a: "Look for early movement in 2 to 3 months and real traction in 4 to 6, quicker on low-competition terms and slower on the most fought-over Manchester keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO a better bet than Google Ads?', a: "They handle different jobs. Ads buy instant traffic that quits the day you stop paying. SEO is an asset you keep that produces leads at a lower per-lead cost over time. Most contractors do best with SEO as the long-haul engine and ads for short bursts." },
      { q: 'Should my Manchester SEO chase the winter season?', a: "Yes. When a nor'easter or a deep freeze hits, searches for roofing, plumbing, and heating jump overnight, and ranking takes months to build, so you have to be set before the cold, not scrambling after. We tune for those seasonal, storm-driven terms early so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and lead-tied reporting. Higher tiers add storm-and-seasonal and AI-search work. We lock the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs about that long to show real movement, then it goes month-to-month. If we're not delivering, you leave." },
      { q: 'Will I turn up in Google AI Overviews and ChatGPT?', a: "That's a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your shop, not just classic search." },
      { q: 'Which areas around Manchester do you cover?', a: "The whole Manchester-Nashua metro and the towns around it: Bedford, Hooksett, Goffstown, Londonderry, Derry, Nashua, Merrimack, and more, with real local pages rather than one catch-all Manchester page." },
      { q: 'How do you cut me loose from Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads straight to you. The more of your search visibility you own, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, how your competitors are getting past you, the highest-impact fixes, and a grounded Manchester SEO timeline with the numbers modeled for your shop so you can see the path to page one. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'manchester', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Manchester Web Design Company | OnwardCraft',
    metaDescription:
      'Manchester Web Design that books jobs instead of just looking nice: fast, mobile-first contractor websites built for storm-season demand.',
    eyebrow: 'Web Design · Manchester-Nashua',
    h1: 'Manchester web design that books jobs instead of just looking nice, from the Millyard to Bedford',
    h2Exact: 'Manchester Web Design Company',
    heroSubhead:
      "A handsome site that never rings the phone is just a brochure. We build Manchester contractors fast, mobile-first sites engineered to convert visitors into booked work, and to stay standing when a nor'easter floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Manchester Web Design has one job: close the gaps that quietly bleed leads from most contractor sites, the slow mobile load, the buried call button, the missing offer up top. As a Manchester web design company built for the trades, we ship fast-loading, mobile-first sites that carry the polish your work deserves and turn visitors from the Millyard to Bedford into booked jobs, sites that don't fold when a snowstorm sends your traffic vertical.",
    aioQuestion: 'What makes a strong contractor website in Manchester NH?',
    aioAnswer:
      "A strong Manchester contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, backs it with reviews and real job photos, and holds up under the traffic spikes that come with winter storms. Since most searches here happen on mobile, phone speed and an obvious next step are what split a site that books work from one that just sits there.",
    problemHeading: "Why your current site isn't booking work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit still. No clear offer, no obvious next step, no reason to call you over the next crew. We design every page around one job: converting a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Manchester visitors are on mobile, and they bounce when a site drags past a few seconds. Slow pages also rank worse. We build fast, so you hold onto both the visitor and the ranking." },
      { title: "It folds under a storm surge", body: "When a nor'easter or a hard freeze hits, contractor sites get hammered with traffic, and the slow ones stall or bury the call button right when it counts most. We build sites that stay quick and keep converting under load, so you bank that demand instead of dropping it." },
    ],
    servicesHeading: "What goes into an OnwardCraft Manchester site",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your service area, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Built for the phone first, since that's where nearly all your Manchester traffic comes from. Quick, thumb-friendly, one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you can't miss, and lead forms placed where people actually fill them out. Every page points to a next step." },
      { name: 'Copy that sells', desc: "Words aimed at a worried homeowner that close the job, not filler that reads like every other site. Plain talk that lands with self-reliant New Hampshire homeowners." },
      { name: 'Local SEO foundation', desc: "Built to rank from the studs out: clean structure, schema, quick load, and pages ready for the neighborhoods you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which guards both conversions and rankings." },
      { name: 'Storm-surge ready', desc: "Built to stay quick and keep the call button front and center when winter-storm traffic spikes, the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your shop and put it forward as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your rivals, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code goes in." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that closes, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it quick and current and tune it on what's actually converting." },
    ],
    pricing: {
      heading: 'Manchester web design pricing, no surprises',
      note: 'A one-time build. Half to start, half at launch. Everything is yours. Nothing locked in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Winter-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location shops.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a website cost in Manchester NH?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above: fixed price, no surprises, and the finished site is yours." },
      { q: 'How long does the build take?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site survive a Manchester storm traffic spike?', a: "Yes, and around here that's no small thing. When a nor'easter or deep freeze hits, contractor sites take a flood of traffic, and the slow ones shed leads right as demand peaks. We build fast and keep the call button obvious, so your site converts under load rather than stalling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: quick load, clean structure, schema, and pages ready for the neighborhoods. The build sets you up to rank, and pairing it with our SEO service is how you scale the contested Manchester terms." },
      { q: 'Do I own the website?', a: "Fully. The site, the domain, and the content are yours. No hostage situations, no platform you can't walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, since that's where nearly all your Manchester traffic comes from. Quick load, call buttons sized for a tap, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the one that fits your needs and that you can actually run, usually WordPress or Webflow. We'll recommend the right fit in your free consult and walk through the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build comes with launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I tied to a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear read on what your current site is costing you in lost leads, what a high-converting Manchester site should carry, and a fixed-price Manchester Web Design quote with a timeline. No pressure, just a plan that converts visitors into booked jobs." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'manchester', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Manchester Website Redesign | OnwardCraft',
    metaDescription:
      'Manchester Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first rebuilds with an SEO-safe migration that holds your rankings.',
    eyebrow: 'Website Redesign · Manchester-Nashua',
    h1: 'Manchester Website Redesign that rebuilds for leads, not just looks, and keeps the rankings you have earned',
    h2Exact: 'Manchester Website Redesign Company',
    heroSubhead:
      "A dated site costs you jobs every single week: slow, awkward on a phone, easy to scroll past. We redesign Manchester contractor sites to convert more and load faster, and we migrate with care so you keep every scrap of ranking you've built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Manchester Website Redesign fails one of two ways for most contractors: the site looks sharper but converts no better, or it goes live and the rankings evaporate overnight. We do neither. We rebuild Manchester contractor sites for speed and conversions, build them to take a winter-storm traffic load, and run an SEO-safe migration with the redirects that guard the traffic you already have, so you redesign your Manchester website without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO through a redesign by holding your URL structure (or mapping 301 redirects for every changed page), keeping your existing content and metadata, carrying your schema across, and testing it all on staging before launch. Handled right, a redesign holds your rankings and lifts them, because the new site is faster, mobile-first, and better built than the one it replaced.",
    problemHeading: "Signs your Manchester site is overdue for a rebuild",
    painPoints: [
      { title: "It looks dated and chips away at trust", body: "On a high-ticket job, a homeowner sizes you up by your site in seconds. An old, cluttered layout quietly steers them to a competitor who looks more established, even when your craftsmanship beats theirs." },
      { title: "It's slow and clumsy on a phone", body: "If your site stutters or drags on mobile, you're shedding most of your Manchester visitors before they ever reach your offer. A mobile-first redesign wins them back." },
      { title: "It can't keep pace when demand spikes", body: "Traffic that never becomes a call is wasted, and an old site that bogs down under a winter-storm surge loses leads at the precise moment they're worth the most. We rebuild for conversions and for the days your phone should not stop ringing." },
    ],
    servicesHeading: "What goes into an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what's costing you leads and rankings now, so the redesign repairs real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already worked for." },
      { name: 'Conversion redesign', desc: "Clear offers, sharper call-to-action placement, and lead forms people actually use. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and a clean pass on Core Web Vitals, better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where nearly all your Manchester traffic lives." },
      { name: 'Brand refresh', desc: "A current, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay quick and keep converting when winter-storm traffic spikes, so the new site banks your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your shop and put it forward as search tilts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what's losing you leads and rankings, then map a redesign that fixes it without breaking what already earns." },
      { name: 'Design', desc: "A current, mobile-first, conversion-focused design you review and shape before we build it." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prep every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects set and watch closely so rankings hold and rise rather than slip." },
      { name: 'Optimize', desc: "Post-launch tuning on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Manchester redesign pricing with nothing hidden',
      note: 'A one-time project. Half to start, half at launch. Everything is yours. Nothing locked in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Winter-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'What does a website redesign cost in Manchester NH?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it's handled with care, and that's precisely how we work. We map 301 redirects for every changed URL, keep content and metadata, carry your schema over, and test on staging first. Done right, a redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site drags on phones, looks dated, is a pain to update, isn't pulling leads, or stalls when winter-storm traffic surges, it's costing you work. The free audit tells you straight whether a redesign earns its cost." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, hold onto what's ranking, and run the technical migration so nothing that matters slips through." },
      { q: 'Will the new site handle Manchester storm traffic?', a: "Yes, and here that's a real factor. When a nor'easter or deep freeze hits, contractor sites take a surge of traffic, and the slow ones bleed leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Fully: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I tied to a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO runs month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price Manchester Website Redesign quote with a timeline and an SEO-safe migration plan that holds your rankings." },
    ],
  },
];

export const manchesterCity = {
  citySlug: 'manchester', city: 'Manchester', state: 'New Hampshire', stateAbbr: 'NH', metro: 'Manchester-Nashua',

  titleTag: 'Manchester Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Manchester marketing for contractors: web design, SEO, and local SEO that get you found and booked, and keep your leads instead of renting them.',

  eyebrow: 'Manchester · Web Design, SEO & Lead Generation',
  h1: 'Manchester marketing for contractors who want to own their leads from the Millyard to Hooksett',
  h2Exact: 'Manchester Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Manchester-Nashua market: a no-tax magnet for Boston-area buyers with hard New England winters. One team to get you ranking, converting, and off the rented-lead wheel.",
  heroProof: ['Built for the trades', 'Winter-emergency ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Manchester audit',

  intro:
    "Manchester marketing for contractors comes down to winning attention in a metro that keeps drawing homeowners up from across the Massachusetts line, with the competition thickening right alongside it. Winning here takes three pieces moving together: a site that converts, SEO that ranks you for what people type, and local SEO that puts you in the Map Pack, all set before the next storm sends demand vertical. As a digital marketing agency built for the trades, here's how we help Manchester contractors get found and booked.",
  aioQuestion: 'How do Manchester NH contractors get more leads online?',
  aioAnswer:
    "Manchester contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Since New Hampshire's no-tax pull keeps drawing Boston-area buyers north and demand jumps hard each winter, the crews that look established and already rank before the storm collect the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Manchester types \"near me.\" The highest-return move for most local shops, and how you catch storm-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you hold instead of renting traffic from ads, and count it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first sites engineered to turn visitors into booked jobs and to stay quick when a nor'easter floods your phone, not brochures that just sit still.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, and migrate it with care so you keep every scrap of ranking you've already built.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Manchester?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and keep their leads, set for when winter rolls in." },
    { q: 'Do you work only with contractors?', a: "Nearly entirely. We focus on home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we know emergency calls, the seasonal demand swing, and insurance work." },
    { q: 'Why does winter matter for my marketing?', a: "When a nor'easter buries Manchester or a hard freeze cracks supply lines across town, demand for roofing, plumbing, and heating jumps overnight and the backlog stretches for weeks. Ranking takes months to build, so the crews already visible before the storm grab that work. We get you set ahead of the season." },
    { q: 'What does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We lock exact scope in your free audit." },
    { q: 'Which Manchester areas do you serve?', a: "The full Manchester-Nashua metro and the towns around it: the North End, Rimmon Heights, Hallsville, Bedford, Hooksett, Goffstown, Londonderry, Derry, Nashua, Merrimack, and more." },
    { q: 'Where should I start?', a: "Start with a free Manchester audit. We'll go through your website, your rankings, and your Map Pack presence, then point you to the one or two moves in your Manchester marketing for contractors that bring in the most work fastest. No pitch deck, just a plan to get found and booked." },
  ],
};

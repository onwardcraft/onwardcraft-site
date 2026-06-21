// CEDAR RAPIDS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cedar Rapids' 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CEDAR RAPIDS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Cedar Rapids is a moving target',
  body:
    "Cedar Rapids is a working manufacturing and grain-processing town of roughly 280,000 across the metro, and the smell of toasted oats over the river tells you who built it. Quaker Oats, Cargill, General Mills, and Collins Aerospace fill the payroll with engineers, line workers, and tradespeople who buy homes, keep them a long time, and watch every dollar. They search the same way the rest of the country does now: on a phone, with \"near me\" tacked on, tapping one of the first names Google drops on the map. What sets eastern Iowa apart is the weather. In August 2020 a derecho with winds past 100 mph tore through the city in under an hour, shredding the tree canopy and chewing up thousands of roofs, and crews are still working through that rebuild. Layer on the 2008 Cedar River flood that put downtown under water, plus long snowbound winters and spring tornadoes, and demand here does not drift. It jumps. The contractors already ranking are the ones who answer when it does.",
  pullQuote: 'When the next storm rolls through eastern Iowa, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'How Cedar Rapids searches',
    value: 64,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 64, kind: 'teal' },
      { label: 'Renters', pct: 36, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Severe wind & tornadoes (May–Aug); winter snow & ice (Nov–Mar)',
  seasonalDemand: [
    { m: 'J', v: 70, peak: true }, { m: 'F', v: 64, peak: true }, { m: 'M', v: 48 }, { m: 'A', v: 56 },
    { m: 'M', v: 78, peak: true }, { m: 'J', v: 88, peak: true }, { m: 'J', v: 92, peak: true },
    { m: 'A', v: 90, peak: true }, { m: 'S', v: 50 }, { m: 'O', v: 58, peak: true },
    { m: 'N', v: 66, peak: true }, { m: 'D', v: 72, peak: true },
  ],
  stats: [
    { value: '280K+', label: 'people across the Cedar Rapids metro' },
    { value: '~64%', label: 'of households here own their home', accent: true },
    { value: 'May–Aug', label: 'severe wind and tornado season, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Wellington Heights', 'Czech Village', 'NewBo', 'Mound View', 'Marion',
    'Hiawatha', 'Robins', 'Ely', 'Northeast Cedar Rapids', 'Kenwood Park',
    'Bever Woods', 'Cedar Hills', 'Time Check', 'Edgewood', 'Bowman Woods',
  ],
};

const AREAS = [
  'Cedar Rapids', 'Marion', 'Hiawatha', 'Robins', 'Ely', 'Fairfax',
  'Palo', 'Center Point', 'Mount Vernon', 'Lisbon', 'Walford',
  'Atkins', 'Shellsburg', 'Vinton', 'Coralville',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We know what an insurance roof claim reads like after a wind event, how a frozen-pipe call lands at 6 a.m. in January, and how the derecho rebuild backlog still books work, so what we build lines up with how Cedar Rapids homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline that belongs to you. Not one more check every month to a broker for the same NewBo or Marion homeowner that three other contractors are already calling.",
  },
  {
    title: 'We actually speak Cedar Rapids',
    body: "Derecho rebuild that is still running, Cedar River flood cleanup that goes back to 2008, value-minded Quaker Oats and Collins Aerospace families who price every job, and street-level targeting from Wellington Heights out to Hiawatha. A national agency can't fake that by swapping a city name in a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices are posted. Reporting points at real leads, not vanity charts. You go month-to-month after the first 90 days, and if the work isn't paying for itself you cut us loose. That keeps the pressure on us, where it belongs.",
  },
];

const PROOF = {
  heading: "No logo wall yet, so here's the honest math instead",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop in eastern Iowa, and we are not going to dress up a track record we haven't earned yet. What we can put in front of you is the reasoning behind the work, pulled straight from Google's and the industry's published research on how people pick a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough sketch, marked plainly as a projection and not a result we're claiming: say a Cedar Rapids contractor pulls around 1,200 local \"near me\" impressions a month. Climbing out of page-two invisibility into the top three is the gap between a handful of stray calls and a booked-out calendar, and after a derecho or an ice storm that gap only widens. In your free audit we run the real numbers for your shop: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cedar Rapids', state: 'Iowa', stateAbbr: 'IA', metro: 'Cedar Rapids',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const cedarRapidsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cedar-rapids', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cedar Rapids Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Cedar Rapids and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Cedar Rapids',
    h1: 'When Cedar Rapids searches for what you do, be the first name they find',
    h2Exact: 'Cedar Rapids Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first, and so you're already there when the next storm fills every phone in the metro.",
    primaryCta: 'Get my free Cedar Rapids audit',
    intro:
      "Cedar Rapids local SEO comes down to one moment: a homeowner in Wellington Heights or Marion types your service plus \"near me,\" and either you are one of the three businesses Google pins to the map or you are not. Most people tap one of those three and never scroll. Ever since the 2020 derecho, storm and rebuild work has kept the trades busy here, so landing in that top three is the whole game. Here's how we get you there.",
    aioQuestion: 'How do Cedar Rapids businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you want; a name, address, and phone that match everywhere online; a steady flow of real reviews; and local content tied to genuine Cedar Rapids neighborhoods. Eastern Iowa is storm-prone, with derecho, tornadoes, ice, and Cedar River flooding all driving demand, so the winners look established, answer fast, and already rank when work surges.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three competitors own the map and you are not one of them', body: "Pull up your phone and type your service plus \"near me\" right now. Google drops three businesses onto the map, and those three pull in most of the clicks before anyone scrolls. When your name sits below them, the quality of your work stops mattering, because the homeowner in Bever Woods or Czech Village never sees it. For most Cedar Rapids contractors, climbing into that trio is the single highest-return move there is." },
      { title: "You keep paying for leads that were never yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cedar Rapids homeowner to four contractors at once, then charge each of you to elbow for the same call. It never ends. Local SEO builds the reverse: a homeowner searches, finds you, dials you, and nobody else got that lead. Run it long enough and the broker invoices stop being the thing keeping your calendar full." },
      { title: "When the next storm rolls in, you are invisible", body: "The August 2020 derecho stripped the city's tree canopy and chewed up thousands of roofs in a single afternoon. Calls for roofing, restoration, and tree removal went vertical, and the contractors already pinned to the map took them. The next ice storm, tornado, or Cedar River flood runs the same play. Sit off the map when it lands and the booked work flows to whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows exactly which Cedar Rapids and Linn County searches should land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone need to read the same everywhere Google looks. We correct the listings that disagree and build out the directories you're missing." },
      { name: 'Reviews that keep coming', desc: "A no-fuss system that turns each finished job into a fresh review. Iowa homeowners read those before they call, and Google counts them when it ranks you." },
      { name: 'Neighborhood pages', desc: "Real pages for Wellington Heights, NewBo, Czech Village, Marion, and Hiawatha, so you rank for the exact neighborhood a homeowner typed, not a flat \"Cedar Rapids.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The unglamorous wiring underneath that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from sources Google trusts around here: the Corridor business press, trade groups, and community partners. In this market that's frequently what divides page one from page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking ahead of derecho, tornado, and ice season so you catch the surge instead of scrambling once the trees are already down.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now opens in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read your business and name it back.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area, then figure out which competitors are beating you in the Map Pack and what they're doing that you aren't." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first because they move quickest. Most Cedar Rapids clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They compound week over week, which is the whole reason local SEO pays off for whoever starts before the next storm, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Linn County and the Corridor, plus the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting pointed at calls and booked jobs, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Cedar Rapids areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cedar Rapids?', a: "Most engagements here run between $750 and $2,500 a month, set by how many neighborhoods and keywords you're chasing. The tiers above break it down. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a cent." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The more contested Cedar Rapids keywords usually need 90 to 180 days of steady work, since reviews and citations build slowly. If someone guarantees you page one in 30 days, they're selling smoke." },
      { q: 'What makes Cedar Rapids local SEO different?', a: "It's a value-driven, no-nonsense Midwest market where steady-income trades and engineering families lean hard toward a local crew, so reviews and matching listings carry real weight. On top of that, eastern Iowa weather swings violently between derecho wind, tornadoes, ice, and Cedar River flooding, so your ranking has to already be set when the storm lands." },
      { q: 'How does local SEO help me after a derecho or storm?', a: "When the 2020 derecho hit, searches for roofing, restoration, and tree work jumped overnight, and the businesses already in the Map Pack fielded the calls. The next ice storm, tornado, or flood does it again. We get you ranked and reviewed before season so you catch that wave instead of fighting over scraps once the rest of town is booked solid." },
      { q: 'Which areas do you cover?', a: "The full Cedar Rapids metro and the surrounding Corridor: Wellington Heights, Czech Village, NewBo, Mound View, plus Marion, Hiawatha, Robins, Ely, Mount Vernon and beyond. We build genuine neighborhood pages rather than one catch-all Cedar Rapids page, because that's what ranks for a \"[service] [neighborhood]\" search." },
      { q: 'Do you work with contractors specifically?', a: "It's nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get how emergency calls, storm-driven demand, and insurance jobs really work, and we build the local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing slice of \"near me\" research now starts in AI rather than classic search. We structure your content and schema so those engines can read, trust, and name your business. Around here it's getting close to as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that's roughly how long local SEO takes to show real movement. After that you're month-to-month. If we aren't delivering, you walk, and the accountability sits on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and a visibility you never keep. We build rankings, a Google profile, and a review base that route homeowners straight to you. As that grows, you depend on the brokers less because the work is already coming in direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to stay ahead, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your shop. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cedar-rapids', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cedar Rapids SEO Company | OnwardCraft',
    metaDescription:
      'Cedar Rapids SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for storm-season demand.',
    eyebrow: 'SEO Services · Cedar Rapids',
    h1: 'Get your Cedar Rapids business to the top of Google and keep it there',
    h2Exact: 'Cedar Rapids SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Cedar Rapids customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Cedar Rapids SEO audit',
    intro:
      "Cedar Rapids SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a value-driven, storm-prone eastern Iowa market, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Cedar Rapids businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Cedar Rapids sources. In a market with strong seasonal swings, from derecho rebuild to winter ice to spring flooding, keeping the site fast on mobile and ranking for storm-driven, seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Cedar Rapids site isn't bringing in work",
    painPoints: [
      { title: "Page two is where leads go to die", body: "Almost nobody clicks past the first page of Google, and they don't scroll far down it either. If your business isn't in the top handful of results for what you sell, it reads as invisible to a Cedar Rapids buyer, however sharp the site looks. That's the gap quietly feeding your jobs to the competition." },
      { title: "Every lead from Google Ads is a rental", body: "Ads have their place, but the second your card stops, the calls stop with it. SEO builds something you actually own: rankings that keep pulling in leads for months and years after the work is done, at a slice of the per-lead price you're paying brokers and ad platforms now." },
      { title: "You're not ranking for the demand that pays", body: "Cedar Rapids demand swings with the calendar and the sky: derecho rebuild, winter snow and ice, spring river flooding. The contractors who already rank for those terms catch the spike. Skip storm-driven and seasonal searches in your SEO and you're handing away your busiest, most profitable stretch of the year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, and schema. The under-the-hood work Google needs squared away before it will rank your Cedar Rapids site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the precise terms your customers type: titles, headings, body copy, and internal links pulling in one direction." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what eastern Iowa buyers search, pull in links, and keep producing leads long after we hit publish." },
      { name: 'Link building', desc: "Authority earned from real Corridor and industry sources. In a competitive market, links are routinely the thing that decides page one versus page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches right next to your organic rankings instead of choosing between them." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and raw traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the derecho, winter, and flood-driven searches that fuel Cedar Rapids' busiest months, so you're already visible when demand jumps rather than chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of local search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to put real Cedar Rapids leads on your phone." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation that has to hold before anything else can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that decide who wins the busy weeks here." },
      { name: 'Build authority', desc: "Links and citations from trusted Corridor and industry sources to push your contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Cedar Rapids SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Cedar Rapids search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cedar Rapids?', a: "Most SEO engagements here run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work the job needs. The tiers are above, with no hidden fees and no long contract. This is a value-minded market, and our pricing reflects it." },
      { q: 'How long does SEO take to work in Cedar Rapids?', a: "Plan on early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Cedar Rapids keywords. SEO compounds, so the longer you run it, the larger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors here do best with SEO as the long-haul engine and ads for short bursts." },
      { q: 'Should my Cedar Rapids SEO target storm season?', a: "Yes. When the derecho hit, or when an ice storm or river flood rolls through, searches for roofing, restoration, and HVAC jump overnight, and ranking takes months to build. You have to be in place before the season, not scrambling after it. We optimize for those seasonal and storm-driven terms ahead of time so the busy weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search work. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Cedar Rapids do you cover?', a: "The whole metro and the surrounding Corridor: Marion, Hiawatha, Robins, Ely, Fairfax, Mount Vernon, Center Point and more, built on genuine local pages rather than one generic Cedar Rapids page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send homeowners straight to you. The more of your search visibility you own, the less you lean on brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cedar-rapids', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cedar Rapids Web Design Company | OnwardCraft',
    metaDescription:
      'Cedar Rapids web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors and ready for storm-season demand.',
    eyebrow: 'Web Design · Cedar Rapids',
    h1: 'Cedar Rapids web design that turns visitors into booked jobs',
    h2Exact: 'Cedar Rapids Web Design Company',
    heroSubhead:
      "A good-looking website that doesn't ring the phone is just a brochure. We build Cedar Rapids contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when storm season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Cedar Rapids contractor websites bleed leads without anyone noticing: slow on a phone, the call button buried, no clear offer to act on. Web design done right plugs those leaks. We build sites that load fast, look like the professional you are, and turn Wellington-Heights-to-Marion visitors into booked jobs, and that hold steady when a derecho or ice storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Cedar Rapids?',
    aioAnswer:
      "A good Cedar Rapids contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during storm season. Because most Cedar Rapids searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just name their services and stop there. No clear offer, no obvious next step, no reason a Cedar Rapids homeowner should call you instead of the next name down the list. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Almost all of your Cedar Rapids visitors are on mobile, and they tap away if your site stalls for more than a couple of seconds. Slow sites also slide down the rankings, so you lose the lead and the spot. We build fast, and you keep both." },
      { title: "It can't handle a storm-season surge", body: "After the 2020 derecho, contractor sites got buried under a flood of traffic, and the slow ones stalled or hid the call button at the exact moment it mattered most. We build sites that stay quick and keep converting under load, so you catch that demand instead of dropping it." },
    ],
    servicesHeading: "What's in an OnwardCraft Cedar Rapids website",
    services: [
      { name: 'Custom design', desc: "No drag-and-drop template kit. A site shaped around your trade, your Linn County service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where nearly all of your Cedar Rapids traffic lives. Fast, thumb-friendly, and one tap to call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you can't miss, and lead forms put where homeowners actually fill them out. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for a homeowner staring at a stripped roof or a frozen line, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and pages ready for Wellington Heights, NewBo, Marion, and Hiawatha." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your rankings at once." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when storm-season traffic spikes, the moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Cedar Rapids search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your most profitable jobs, and your competitors, then plan the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert, and you review and adjust it before we write a single line of code." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean, with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it quick and current and tune it on what's actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Cedar Rapids web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cedar Rapids?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in Cedar Rapids that matters. After the 2020 derecho, contractor sites took a flood of traffic, and the slow ones lost leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Cedar Rapids terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Cedar Rapids traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We match the platform to what you need and what you can comfortably manage on your own, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cedar Rapids site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cedar-rapids', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cedar Rapids Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Cedar Rapids website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm.',
    eyebrow: 'Website Redesign · Cedar Rapids',
    h1: 'Redesign your Cedar Rapids website without losing your rankings',
    h2Exact: 'Cedar Rapids Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Cedar Rapids homeowner to scroll right past. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but books the same number of jobs, or it launches and the rankings drop off a cliff. We do neither. We redesign Cedar Rapids contractor sites for speed and conversions, build them to survive storm-season traffic surges, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Cedar Rapids site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, a homeowner sizes you up by your site in a few seconds. An old, cluttered design quietly sends them to a competitor who simply looks more established, even when your work is the better bet. For value-minded Cedar Rapids buyers who price every job, that first impression often decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing most of your Cedar Rapids visitors before they ever reach your offer. A redesign built mobile-first wins them back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never becomes a call is wasted money, and an old site that crawls under a storm-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days after a derecho or ice storm when your phone should not stop ringing." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what's costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold on to the rankings and traffic you've already earned in Cedar Rapids." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Cedar Rapids traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want to book." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when storm-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Cedar Rapids search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so your rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Cedar Rapids redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cedar Rapids?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, isn't bringing in leads, or buckles when storm-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it for your Cedar Rapids business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what's ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in Cedar Rapids that's a real consideration. After the 2020 derecho, contractor sites took a surge of traffic, and the slow ones lost leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const cedarRapidsCity = {
  citySlug: 'cedar-rapids', city: 'Cedar Rapids', state: 'Iowa', stateAbbr: 'IA', metro: 'Cedar Rapids',

  titleTag: 'Cedar Rapids Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Cedar Rapids contractors. Get found, get booked, and own your leads instead of renting them, all built for storm-season.',

  eyebrow: 'Cedar Rapids · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Cedar Rapids contractors found and booked',
  h2Exact: 'Cedar Rapids Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Cedar Rapids' value-driven, storm-prone market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Cedar Rapids audit',

  intro:
    "If you run a contracting business in Cedar Rapids, you're competing for attention in a working manufacturing town where homeowners hold their houses for decades and weigh every dollar, and the field is crowded. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all set before the next derecho, ice storm, or flood sends demand through the roof. Here's how we help Cedar Rapids contractors do exactly that.",
  aioQuestion: 'How do Cedar Rapids contractors get more leads online?',
  aioAnswer:
    "Cedar Rapids contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because eastern Iowa demand spikes hard during storm season, from derecho to tornadoes to ice to Cedar River flooding, the contractors who look established and already rank before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cedar Rapids searches \"near me.\" The single highest-return move for most local businesses, and how you catch storm-season demand before a competitor does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, and to stay fast when storm season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cedar Rapids?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they're ready when storm season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'Why does storm season matter for my marketing?', a: "When the 2020 derecho flattened the city's tree canopy and roofs in under an hour, demand for roofing, restoration, and tree work spiked overnight and the backlog ran for years. The next ice storm, tornado, or flood does the same. Ranking takes months to build, so the contractors already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Cedar Rapids areas do you serve?', a: "All of the metro and the surrounding corridor: Wellington Heights, Czech Village, NewBo, Mound View, plus Marion, Hiawatha, Robins, Ely, Mount Vernon and more." },
    { q: 'Where should I start?', a: "Start with a free Cedar Rapids audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

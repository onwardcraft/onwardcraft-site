// LINCOLN: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Lincoln's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LINCOLN: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Lincoln is a moving target',
  body:
    "Lincoln is the Nebraska state capital and the home of the Cornhuskers, and that mix of government payroll and university gravity keeps the local economy on an even keel year after year. The capitol, the University of Nebraska, and a deep bench of insurance and tech employers like Nelnet, Ameritas, Hudl, and Sandhills Global mean paychecks keep landing even when the national headlines turn ugly. Out of that comes a base of low-key, careful homeowners who research before they buy and lean toward hiring people from town. Two forces drive the trades here. The first is the phone: a Lincoln homeowner pulls up a map, types your service with \"near me,\" and taps one of the first names without ever scrolling. The second is the sky. Spring and early summer bring tornadoes, hail the size of golf balls, and straight-line winds that turn roofing and restoration work from a trickle into a flood, with backlogs stretching for months. Then the cold rolls in: blizzards, ice storms, and freeze-thaw cracking that opens a second wave of demand. Whoever already sits at the top of the map books that work first.",
  pullQuote: 'When the next hailstorm hits Lincoln, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'Lincoln homeowners',
    value: 60,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 60, kind: 'teal' },
      { label: 'Renters', pct: 40, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the trades book out in Lincoln',
  seasonCaption: 'Hail and tornado season (Apr to Jul), then a winter freeze run (Nov to Mar)',
  seasonalDemand: [
    { m: 'J', v: 56, peak: true }, { m: 'F', v: 52, peak: true }, { m: 'M', v: 60 }, { m: 'A', v: 78, peak: true },
    { m: 'M', v: 92, peak: true }, { m: 'J', v: 96, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'A', v: 64 }, { m: 'S', v: 50 }, { m: 'O', v: 54 },
    { m: 'N', v: 62, peak: true }, { m: 'D', v: 58, peak: true },
  ],
  stats: [
    { value: 'State capital', label: 'plus the University of Nebraska anchor a stable homeowner base' },
    { value: '~60%', label: 'of Lincoln households own their home', accent: true },
    { value: 'Apr–Jul', label: 'tornado and hail season, when roofing demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Near South', 'Country Club', 'University Place', 'Havelock', 'South Lincoln',
    'Williamsburg', 'Waverly', 'Hickman', 'Eagle', 'Downtown',
    'Belmont', 'Highlands', 'Wilderness Hills', 'Air Park', 'East Campus',
  ],
};

const AREAS = [
  'Lincoln', 'Waverly', 'Hickman', 'Eagle', 'Malcolm', 'Bennet',
  'Firth', 'Roca', 'Davey', 'Walton', 'Denton',
  'Panama', 'Ceresco', 'Greenwood', 'Crete',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofers, HVAC crews, plumbers, solar installers, electricians, restoration shops, and general contractors. That is the entire client list. We know how an insurance hail claim moves and how a Lincoln homeowner shops a roof, so the pages we build match the way your buyers actually look for you.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a stream of calls that belongs to you and nobody else. Not one more recurring charge to a broker that resold the same Havelock homeowner to three shops down the road.",
  },
  {
    title: 'We actually speak Lincoln',
    body: "Hail claims that flood the trades in May, a capital-and-Husker economy that barely flinches in a downturn, and street-level targeting from Near South to Waverly to University Place. That is the read on this market a template-driven national shop will never have.",
  },
  {
    title: 'No contracts, no mystery',
    body: "The prices sit on the page, every report ties back to real leads, and you are month-to-month once the first 90 days are behind you. Stop seeing value and you stop paying. The risk lands on us, which is the way it should be.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies lead with a wall of client logos. We are a young, founder-run shop, and we are not going to invent a track record we have not earned. What we can put in front of you is the case for why this works, drawn straight from Google's own data and the local-search industry's research on how people actually find a contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as a projection and not a result we are claiming: picture a Lincoln contractor pulling about 1,200 local \"near me\" impressions in a month. Climbing from buried on page two up into the top three changes everything, turning a few stray calls into a calendar you can barely keep open, and once a hailstorm rolls through the gap only widens. In your free audit, we run the real figures for your shop: your current rankings, your true search volume, and a straight 90-to-180-day route.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Lincoln', state: 'Nebraska', stateAbbr: 'NE', metro: 'Lincoln',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lincolnLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'lincoln', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Lincoln Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Lincoln and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Lincoln, NE',
    h1: 'When Lincoln searches for what you do, be the first name they find',
    h2Exact: 'Lincoln Local SEO Company',
    heroSubhead:
      "When a Lincoln homeowner searches \"near me,\" Google hands the click to three businesses on the map and leaves everyone underneath them in the dark. We push you into that top three so the call rings your phone instead of the shop that happened to rank first, and so you are already there the morning after a hailstorm fills every inbox in town.",
    primaryCta: 'Get my free Lincoln audit',
    intro:
      "Lincoln local SEO really hangs on a single moment. A homeowner over in Near South or out by Havelock types your trade plus \"near me,\" sees the three businesses Google pinned to the map, and taps one without scrolling. This is a careful, value-minded town where people would rather hire someone local, so landing in that three is the entire contest. Below is the plan that gets you there.",
    aioQuestion: 'How do Lincoln businesses rank higher in local search?',
    aioAnswer:
      "Four things move the needle: a Google Business Profile tuned to the precise services and Lincoln neighborhoods you want, name-address-phone details that agree everywhere they appear, a dependable run of genuine reviews, and pages tied to real local areas. Because Lincoln sits in hail country and grinds through hard Plains winters, the shops that look settled, answer fast, and rank before the season win.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'The three map pins belong to your competitors', body: "Pull up your own trade plus \"near me\" on your phone right now. Those three businesses Google staples to the top of the map collect nearly every tap. Sit outside them and the caliber of your work hardly registers, because most folks in Lincoln never lay eyes on your name. For a local shop, breaking into that three is almost always the move that pays back the fastest." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor take one Lincoln homeowner, resell that same person to four contractors, then charge all four to scrap over the job. You never get off that wheel. Local SEO builds the reverse: a homeowner turns up, dials your number, and no rival ever touched the lead. Keep at it and you quit renting attention and start owning your pipeline." },
      { title: "You're not ready when the storm hits", body: "Let a tornado or a wall of hail rip across Lincoln and the calls for roofing and restoration go straight up within hours, with the already-ranked shops scooping them first. If the map does not show you when the next cell drops, that work routes to whoever Google has learned to trust. Ranking before the season is how you ride the surge instead of staring at it from the sidelines." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever inside the Map Pack. We tune your categories, service list, coverage area, photos, and posts so Google can tell precisely which Lincoln searches ought to belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone number need to read the same wherever Google checks. We repair the directories that disagree with each other and stand up the listings you never claimed." },
      { name: 'Reviews that keep coming', desc: "A no-fuss routine that turns each finished job into another fresh review. It nudges your ranking up and gives the next Lincoln homeowner a reason to call you ahead of the rest." },
      { name: 'Neighborhood pages', desc: "Honest pages for Near South, Havelock, University Place, Waverly and the rest, so you turn up for the specific area someone is searching rather than a flat, generic \"Lincoln.\"" },
      { name: 'On-page and technical SEO', desc: "Page titles, schema markup, internal links, and mobile load speed. The quiet machinery underneath that lets every other piece of the work actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Lincoln sources Google respects: the local press, trade groups, and community partners. In this market that edge is frequently what divides page one from page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, pages, and reviews ranking ahead of hail season and the winter freeze so you catch the surge as it lands instead of clawing for scraps once it has passed.", featured: true },
      { name: 'AI search readiness', desc: "A rising share of \"near me\" research now opens inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read your business and name it back to the searcher.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you truly stand today across each service area and identify which rivals outrank you in the Lincoln Map Pack and the reason behind it." },
      { name: 'Fix the foundation', desc: "The Google Business Profile and NAP work goes first because it moves quickest. Most Lincoln shops feel the first lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review routine switch on. Both stack up week after week, which is the whole reason this work rewards an early start over a late one." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages reaching across Lincoln and Lancaster County, paired with the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Reporting in plain English, tied to calls and booked leads rather than vanity positions. Then we go claim the next neighborhood on the map." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For shops fighting across several Lincoln neighborhoods at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the Lincoln map outright.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Lincoln?', a: "Most Lincoln engagements sit between $750 and $2,500 a month, set by how many neighborhoods and keywords you want to chase. The tiers right above lay it all out. No buried fees, no long contract, and we pin down the exact scope in your free audit before any money changes hands." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The genuinely competitive Lincoln keywords usually need 90 to 180 days of steady work, since reviews and citations build slowly. If someone swears they will put you on page one in a month, keep your wallet closed." },
      { q: 'What makes Lincoln local SEO different?', a: "A couple of things. This is a stable capital-and-Husker town where careful homeowners lean local, so reviews and matching listings carry real weight with them. And it sits in hail country, which means trade demand lurches every spring and winter. Your ranking has to be set before the weather turns, not thrown together afterward." },
      { q: 'How does local SEO help me during storm season?', a: "When a tornado or hailstorm rakes across Lincoln, searches for roofing and restoration jump within hours, and the shops already in the Map Pack take the calls. We get you ranked and reviewed before the season so you collect that work instead of chasing leftovers once every competitor is already booked solid." },
      { q: 'Which areas do you cover?', a: "All of Lincoln and the Lancaster County towns around it: Near South, Country Club, University Place, Havelock, and South Lincoln, plus Waverly, Hickman, Eagle and more. We build real pages for each spot rather than one catch-all Lincoln page, because that is what ranks for a \"[service] [neighborhood]\" search." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly the whole business. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know how emergency calls, storm-driven demand, and insurance jobs run, and we wire your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now kicks off inside AI tools rather than plain search. We frame your content and schema so those engines can read your business, trust it, and quote it back by name. In Lincoln that is fast catching up to the Map Pack in importance." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO takes to show honest movement. After that you go month-to-month. If the results are not there, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those sites rent you shared leads and visibility you never keep a scrap of. We build rankings, a Google profile, and a review base that route calls to you alone. Month by month you lean on the brokers less, because the work is already finding you directly." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack rivals are doing to stay ahead of you, the fixes that will move you quickest, and a realistic 90-to-180-day plan with the numbers run for your shop. No slide deck. Just a clear diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'lincoln', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Lincoln SEO Company | OnwardCraft',
    metaDescription:
      'Lincoln SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for storm-season demand.',
    eyebrow: 'SEO Services · Lincoln, NE',
    h1: 'Get your Lincoln business to the top of Google and keep it there',
    h2Exact: 'Lincoln SEO Company',
    heroSubhead:
      "Cut the ad budget and the leads vanish the same afternoon. SEO runs the other direction: earn the ranking once for what Lincoln homeowners search and the calls keep landing for months. We build that position and tie every report back to real calls and booked jobs.",
    primaryCta: 'Get my free Lincoln SEO audit',
    intro:
      "Lincoln SEO comes down to a plain question: when someone searches what you do, do you land on page one or page two? Around here, page two might as well not exist. We get contractors ranking for the money keywords in a steady, storm-prone Plains town, and we score the whole thing in leads rather than traffic that never dials.",
    aioQuestion: 'How do Lincoln businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the site's technical base, tuning each page to the exact words buyers type, publishing local content people actually want, and earning links from Lincoln sources Google respects. In a Plains market this competitive, keeping the site quick on a phone and ranking for storm-driven, seasonal terms, hail in spring and ice in winter, are two of the fastest routes to pulling ahead.",
    problemHeading: "Three reasons your Lincoln site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Hardly anyone taps past the first page of Google, and they barely scroll down the one they land on. If you are not among the top few results for what you sell, your site is invisible in any way that counts, however polished it looks. In a town like Lincoln, that quiet invisibility is exactly what hands your jobs to the shop ranked above you." },
      { title: "You're renting traffic from Google Ads", body: "Ads have their place, but the second the card declines the leads cut off cold. SEO builds something you keep: rankings that go on producing calls months and years past the work, at a slice of the cost per lead you are paying brokers and the ad auction today." },
      { title: "You're not ranking for the demand that matters", body: "Lincoln demand heaves with the seasons and the storms, and the contractors ranked for those terms ahead of time grab the surge. Let your SEO skip the hail-driven and deep-winter searches and you are quietly waving off your busiest, most profitable stretch of the calendar." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, page speed, Core Web Vitals, schema, and the under-the-hood repairs Google insists on before it will rank a Lincoln site at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep tuned to the precise terms your Lincoln customers type: titles, headings, body copy, and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles people genuinely find useful, the kind that answer real buyer questions, pull in links, and keep producing leads long after we hit publish." },
      { name: 'Link building', desc: "Authority earned from real Lincoln and trade sources. In a tight Plains market, links are frequently the single factor that decides page one against page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack tuning so you take the \"near me\" searches right alongside your organic positions." },
      { name: 'Revenue-tied reporting', desc: "We report calls, form fills, and booked leads, not just rankings and traffic charts, so the dollar value of your SEO is never a guess." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the hail-driven and deep-winter searches that carry Lincoln's busiest months, so you are visible the day demand jumps rather than a week behind it.", featured: true },
      { name: 'AI search & GEO', desc: "We shape your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, since a growing share of search now starts in those tools.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to ring an actual Lincoln phone." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork every other piece stands on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that decide the busy months here." },
      { name: 'Build authority', desc: "Links and citations from Lincoln and trade sources Google trusts, the kind that push your contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is producing and reach for the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Lincoln SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses set on owning Lincoln search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Lincoln?', a: "Most Lincoln SEO engagements land between $900 and $3,000 a month, set by how contested your keywords are and how much content and link work the job calls for. The tiers sit above, with no buried fees and no long contract." },
      { q: 'How long does SEO take to work in Lincoln?', a: "Look for early movement around 2 to 3 months and meaningful gains by 4 to 6, quicker on low-competition terms and slower on the most fought-over Lincoln keywords. SEO compounds, so the longer it runs the larger the payoff grows." },
      { q: 'Is SEO better than Google Ads?', a: "They cover different ground. Ads buy traffic the instant you turn them on and lose it the instant you turn them off. SEO is something you keep, producing leads at a falling cost per lead over time. Most Lincoln contractors do best with SEO as the long-haul engine and ads for a short burst." },
      { q: 'Should my Lincoln SEO target storm season?', a: "Without question. When tornadoes and hail roll through in spring and summer, searches for roofing and restoration jump within hours, and ranking takes months to build, so you have to be set before the season rather than racing it after. We tune for those seasonal and storm-driven terms early so the busiest months land on your calendar." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. The higher tiers fold in storm-and-seasonal and AI-search work. We settle the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that runway to show real movement, then it shifts to month-to-month. If we are not producing, you go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we tune for. We frame your content and schema so AI engines can read your business, trust it, and quote it by name, not only the classic blue links." },
      { q: 'Which areas around Lincoln do you cover?', a: "All of Lincoln and the towns ringing it: Near South, Havelock, University Place, South Lincoln, Waverly, Hickman, Eagle and beyond, with honest local pages rather than one stretched-thin Lincoln page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that funnel calls straight to you. The more of your own search visibility you hold, the less you have to keep paying brokers for leads they sold three other shops." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the fixes with the most impact, and a realistic timeline with the numbers modeled for your shop. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'lincoln', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Lincoln Web Design Company | OnwardCraft',
    metaDescription:
      'Lincoln web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for storm-season demand.',
    eyebrow: 'Web Design · Lincoln, NE',
    h1: 'Lincoln web design that turns visitors into booked jobs',
    h2Exact: 'Lincoln Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just a costly brochure. We build Lincoln contractors quick, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold their footing when storm season floods the inbox.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Lincoln contractor sites lose leads without anyone noticing: slow on a phone, the call button hidden away, no clear offer in sight. Web design handled right plugs every one of those leaks. We build sites that load quick, carry the polish of the pro you actually are, and turn visitors from Near South out to Waverly into booked jobs, and that keep standing when a hailstorm sends your traffic vertical.",
    aioQuestion: 'What makes a good contractor website in Lincoln?',
    aioAnswer:
      "A solid Lincoln contractor site loads under three seconds on a phone, keeps the call button and a clear offer above the fold, earns trust with reviews and real job photos, and is built to take the traffic spikes that come with storm season. Since most Lincoln searches happen on a phone, mobile speed and an obvious next step are what split a site that books work from one that just sits idle.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list a few services and stop there. No clear offer, no obvious next step, nothing to make a Lincoln homeowner pick you over the next name down the map. We build every page around one task: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Almost all of your Lincoln visitors are on a phone, and they bounce the moment a site drags past a couple of seconds. Slow pages rank worse too, so you lose on both ends. We build for speed, which keeps the visitor and the ranking both in your column." },
      { title: "It can't handle a storm-season surge", body: "Once a heavy hailstorm sweeps through, contractor sites take a wall of urgent traffic, and the slow ones either crawl or hide the call button at the exact wrong second. We build sites that stay quick and keep converting under that load, so the demand lands on you instead of the faster shop next door." },
    ],
    servicesHeading: "What's in an OnwardCraft Lincoln website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf templates. A site shaped around your trade, your Lincoln service area, and the specific jobs you want more of." },
      { name: 'Mobile-first build', desc: "Built for the phone first, since that is where nearly all of your Lincoln traffic lives. Quick to load, easy on the thumb, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms set where homeowners actually reach for them. Every page points to an unmistakable next move." },
      { name: 'Copy that sells', desc: "Words written for the homeowner staring at a hail-battered roof, the kind that book the job instead of reading like the same filler every other shop in town posts." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and pages ready for the Lincoln neighborhoods you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance bar, which guards your conversions and your rankings at the same time." },
      { name: 'Storm-surge ready', desc: "Built to keep its speed and hold the call button front and center when storm-season traffic spikes, the moment that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your business forward as more Lincoln search slides toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best-paying jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you get to see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it quick and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch clean, with the SEO foundation, tracking, and load speed all set from day one." },
      { name: 'Support and optimize', desc: "We keep it quick and current and adjust it around what is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Lincoln web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Lincoln?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above: fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted at every stage." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in Lincoln that is no small thing. After a major hailstorm, contractor sites take a flood of traffic, and the slow ones bleed leads right as demand peaks. We build for speed and keep the call button obvious, so your site converts under the load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and pages ready for your Lincoln neighborhoods. The build leaves you ready to rank; pairing it with our SEO service is how you climb the contested Lincoln terms." },
      { q: 'Do I own the website?', a: "Top to bottom. The site, the domain, and the content all belong to you. No hostage situations and no platform you are stuck inside." },
      { q: 'Will it work well on phones?', a: "We build mobile-first, since that is where nearly all of your Lincoln traffic comes from. Fast load, call buttons sized for a thumb, and forms built for one-handed use." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We point you to the right fit in your free consult and spell out the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and after that we offer affordable monthly maintenance for updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can step away whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Lincoln site ought to include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'lincoln', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Lincoln Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Lincoln website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season.',
    eyebrow: 'Website Redesign · Lincoln, NE',
    h1: 'Redesign your Lincoln website without losing your rankings',
    h2Exact: 'Lincoln Website Redesign Company',
    heroSubhead:
      "An outdated site quietly bleeds jobs every week: slow, awkward on a phone, easy for a Lincoln homeowner to scroll right past. We redesign contractor sites to convert more and load faster, and we migrate with enough care that you keep every bit of ranking you have already built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Redesigns usually fail one of two ways: the site comes out prettier but converts exactly the same, or it goes live and the rankings drop off the map overnight. We do neither. We redesign Lincoln contractor sites for speed and conversions, build them to hold up under storm-season traffic, and migrate with the redirects and SEO care that protect the rankings you have spent years earning.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You guard your SEO through a redesign by keeping the URL structure (or mapping a 301 redirect for every page that moves), holding onto your existing content and metadata, carrying your schema across, and testing the whole thing on staging before it goes live. Handled right, a redesign holds your rankings and lifts them, because the new site loads faster, works mobile-first, and is built cleaner than the old one.",
    problemHeading: "Signs your Lincoln site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "On a high-ticket job, a Lincoln homeowner sizes you up by your site in a matter of seconds. An old, cluttered layout quietly ships them to a competitor who simply looks more settled, even when your craftsmanship is plainly the better bet. That first glance often decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clumsy or slow on a phone, you are losing most of your Lincoln visitors before they ever reach your offer. A redesign built mobile-first wins those people back and turns them into leads instead of bounces." },
      { title: "It can't keep up when demand surges", body: "Traffic that never becomes a call is money out the door, and an old site that crawls under a storm-season surge sheds leads at the precise moment they are worth the most. We rebuild for conversions and for the days the phone ought to be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We track down exactly what is costing you leads and rankings right now, so the redesign solves the real problems rather than just swapping the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the right way, so you hold onto every bit of the rankings and traffic you have already built in Lincoln." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter placement for the call to action, and lead forms homeowners actually fill out. We design toward booked jobs, not a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a clean pass on Core Web Vitals, which lifts conversions and rankings in the same stroke." },
      { name: 'Mobile-first rebuild', desc: "Rebuilt around the phone, where nearly all of your Lincoln traffic actually spends its time." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that lines up with the quality of your work and the price of the jobs you are after." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to hold its speed and keep converting when storm-season traffic spikes, so the new site captures your biggest jobs instead of choking on the rush.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Lincoln search drifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking the parts already working for you." },
      { name: 'Design', desc: "A clean, mobile-first layout pointed squarely at conversions, which you get to look over and shape before any code gets written." },
      { name: 'Rebuild and migrate', desc: "We rebuild quick and line up every redirect and SEO detail for a clean, no-surprises migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely, so your rankings hold and climb instead of slipping." },
      { name: 'Optimize', desc: "Once the new site is live we keep tuning it around what is actually converting, and we stay on top of speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Lincoln redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Lincoln?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done with care, which is precisely how we work. We map a 301 redirect for every URL that moves, hold onto your content and metadata, carry your schema across, and test on staging first. Handled right, a redesign keeps your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and an update at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not pulling in leads, or stalls when storm-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign earns its keep for your Lincoln shop." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, hold onto what is ranking, and run the technical migration so nothing that matters slips through." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in Lincoln that is a genuine concern. After a big hailstorm, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts as demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings at once." },
      { q: 'Do I own the redesigned site?', a: "Every piece of it: the site itself, the domain, and the content. You are never boxed into a platform you cannot leave." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project, full stop. If you want ongoing maintenance or SEO afterward, that runs month-to-month and you can end it whenever." },
      { q: "What's in the free redesign audit?", a: "A straight read on the leads and rankings your current site is leaking, the specific things a redesign needs to fix, and a fixed-price quote that comes with a timeline and a migration plan built to keep your traffic safe." },
    ],
  },
];

export const lincolnCity = {
  citySlug: 'lincoln', city: 'Lincoln', state: 'Nebraska', stateAbbr: 'NE', metro: 'Lincoln',

  titleTag: 'Lincoln Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Lincoln contractors. Get found, get booked, and own your leads instead of renting them, all built for storm-season demand.',

  eyebrow: 'Lincoln · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Lincoln contractors found and booked',
  h2Exact: 'Lincoln Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Lincoln's steady capital-and-Husker market and its storm-driven swings. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Lincoln audit',

  intro:
    "Run a contracting business in Lincoln and you are competing in a steady capital-and-Husker town full of careful homeowners who would rather hire someone local, and the scramble for that work is real. Winning here takes three pieces pulling together: a site that converts, SEO that ranks you for what people search, and local SEO that lands you in the Map Pack, all set before the next hailstorm or blizzard sends demand through the roof. Here is how we help Lincoln contractors pull it off.",
  aioQuestion: 'How do Lincoln contractors get more leads online?',
  aioAnswer:
    "Lincoln contractors pull in more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Lincoln sits in hail country and grinds through hard Plains winters, the shops that look settled and are already ranking before the storm collect the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Lincoln searches \"near me.\" The highest-return move for most local shops, and the way you catch the storm-season surge before it goes to a rival.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Lincoln customers actually type, build an asset you own rather than renting traffic from ads, and measure the whole thing in leads, not vanity numbers.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first sites engineered to turn visitors into booked jobs, and to keep their footing when storm season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully enough that you keep every bit of ranking you have already earned in Lincoln search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Lincoln?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are set when storm season lands and every homeowner in town needs help at once." },
    { q: 'Do you work only with contractors?', a: "Nearly always. We specialize in the home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and how an insurance hail claim moves through a Lincoln job." },
    { q: 'Why does storm season matter for my marketing?', a: "Lincoln sits in hail country, and one bad storm can send roofing and restoration demand straight up overnight, with backlogs that run for months, then winter circles back with ice and freeze-thaw cracking. Ranking takes months to build, so the shops already visible before the storm take that work. We get you set ahead of the season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We settle the exact scope in your free audit." },
    { q: 'Which Lincoln areas do you serve?', a: "All of Lincoln and the Lancaster County towns around it: Near South, Country Club, University Place, Havelock, and South Lincoln, plus Waverly, Hickman, Eagle and more." },
    { q: 'Where should I start?', a: "Start with a free Lincoln audit. We look over your website, your rankings, and your Map Pack standing, then point you to the one or two moves that will bring in the most work soonest. No slide deck, just a plan." },
  ],
};

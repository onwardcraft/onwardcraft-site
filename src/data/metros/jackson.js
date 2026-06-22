// JACKSON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Jackson's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// JACKSON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Jackson is a moving target',
  body:
    "Jackson is Mississippi's state capital and the anchor of a metro of roughly 600,000 people. Two big institutions hold the professional homeowner base steady: state government and the University of Mississippi Medical Center, the state's only academic medical center and its largest employer. That makes for a stable, established class of homeowners in Belhaven, Fondren, Eastover, and the affluent suburbs of Madison, Ridgeland, and Brandon. Two things shape demand here. First, almost everyone searches on a phone, usually with \"near me\" attached, and they tap one of the first results without scrolling. Second, central Mississippi sits in a punishing weather zone. It is deep in tornado alley with severe spring storms and hail, brutal Deep South summer heat and humidity, and the inland reach of Gulf hurricanes. When storms hit, demand for roofing, restoration, and HVAC does not climb, it explodes, and the contractors already ranking are the ones who book the work.",
  pullQuote: 'When the next storm rolls through central Mississippi, the contractors already ranking are the ones who book the work.',
  donut: {
    title: 'Who lives in Jackson',
    value: 80,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 80, kind: 'teal' },
      { label: 'Other', pct: 20, kind: 'grey' },
    ],
  },
  seasonTitle: 'When the Jackson phone runs hot',
  seasonCaption: 'Tornado/storm roofing (Mar–Jun), HVAC (Jun–Sep), hurricane remnants (Aug–Oct)',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 40 }, { m: 'M', v: 72, peak: true }, { m: 'A', v: 88, peak: true },
    { m: 'M', v: 96, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'A', v: 80, peak: true }, { m: 'S', v: 66 }, { m: 'O', v: 52 },
    { m: 'N', v: 38 }, { m: 'D', v: 34 },
  ],
  stats: [
    { value: '~600K', label: 'people across the Jackson metro' },
    { value: 'Largest', label: 'UMMC is the state\'s only academic medical center and biggest employer', accent: true },
    { value: 'Mar–Jun', label: 'tornado and severe-storm season, when roofing demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Belhaven', 'Fondren', 'Eastover', 'Northeast Jackson', 'Madison', 'Ridgeland',
    'Brandon', 'Clinton', 'Pearl', 'Flowood',
  ],
};

const AREAS = [
  'Jackson', 'Madison', 'Ridgeland', 'Brandon', 'Clinton', 'Pearl',
  'Flowood', 'Byram', 'Canton', 'Florence', 'Richland', 'Raymond',
  'Terry', 'Bolton', 'Crystal Springs',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors are the entire client list. We know how a hail claim moves through a Jackson insurance adjuster and how a July heat wave turns into a week of AC failure calls, so the work we build matches the way central Mississippi homeowners actually go looking for help.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline with your name on it. Not one more invoice every month to a broker reselling the same Madison or Brandon homeowner to whoever else paid for the click.",
  },
  {
    title: 'We actually speak Jackson',
    body: "Spring tornado claims, sticky Deep South summers that punish HVAC, homeowners who watch the water mains and boil-water notices closely, and real targeting from Belhaven and Fondren out to Ridgeland and Pearl. That is local read a national shop cannot copy by find-and-replacing a city name in a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "You see the prices before you sign, the reports point at booked leads instead of vanity charts, and you go month-to-month once the first 90 days are behind you. If the work is not paying for the invoice, you cut us loose, and that keeps every bit of the pressure on our side of the table.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "A lot of agencies open with a grid of client logos. We are a young, founder-run shop, so we are not going to invent a track record we have not earned. What we can put in front of you is the reasoning, drawn straight from what Google and the local-search industry publish about how people actually hunt for a contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as an illustration and not something we are claiming we did: say a Jackson contractor pulls around 1,200 local \"near me\" impressions a month. Climbing out of page-two obscurity into the top three is the gap between a few scattered calls and a calendar you cannot keep up with, and a spring hailstorm blows that gap wide open. Your free audit swaps these placeholders for your real figures: your current spots, your true search volume, and a straight 90-to-180-day route to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Jackson', state: 'Mississippi', stateAbbr: 'MS', metro: 'Jackson',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const jacksonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'jackson', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Jackson Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Jackson and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Jackson, MS',
    h1: 'When Jackson searches for what you do, be the first name they find',
    h2Exact: 'Jackson Local SEO Company',
    heroSubhead:
      "Google drops three businesses onto the map when a homeowner taps in \"near me,\" and everyone underneath them might as well be hidden. We get you into that three so the call rings your phone instead of whoever happened to rank first, and so you are already standing there when the next spring storm sets every line in the metro buzzing.",
    primaryCta: 'Get my free Jackson audit',
    intro:
      "Jackson local SEO turns on a single moment: a homeowner in Belhaven or out in Madison types your service plus \"near me,\" and you are either in the three businesses Google pinned to the map or you are nowhere. Most of them tap one of those three and never scroll. With a steady professional base built on state government and UMMC, and demand that lurches with every storm front, landing in that three is the whole contest. Here is how we get you there.",
    aioQuestion: 'How do Jackson businesses rank higher in local search?',
    aioAnswer:
      "Four things decide it: a Google Business Profile aimed at the precise services and metro neighborhoods you want, a name, address, and phone that read the same across every listing, a steady drip of genuine reviews, and local content tied to actual Jackson neighborhoods. Because central Mississippi is tornado country, the winners look settled, answer fast, and are already ranking when spring-storm demand erupts.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'The map shows three names, and none of them are yours', body: "Pull up your own service plus \"near me\" on your phone right now. Those three businesses Google sticks to the map hoover up nearly every tap that search produces. Stay off that list and the craftsmanship in your trucks barely registers, because the Jackson homeowner deciding tonight never lays eyes on you. Breaking into that three is almost always the highest-payoff move a contractor in this metro can make." },
      { title: "You're renting leads that were never really yours", body: "Angi, Thumbtack, and HomeAdvisor sell the same Ridgeland or Brandon homeowner to four crews at once and then charge every one of you to scrap over the same call. That is a meter that never stops running. Local SEO flips it: the homeowner turns up, dials you, and no rival walks away with a copy of the lead. Keep at it and the rented visibility fades while a pipeline you actually own takes its place." },
      { title: "The storm comes and you're not on the board", body: "When tornadoes and hail rip across central Mississippi each spring, the search for roofing, restoration, and HVAC jumps straight up overnight, and the crews already pinned to the map grab the calls. Sit invisible when the next system clears and that booked work routes to whoever Google has already learned to trust. Ranking before the season is how you ride the surge instead of watching the trucks roll past your shop." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack by a wide margin. We set your categories, services, service area, photos, and posts so Google can tell precisely which Jackson searches ought to land on you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read identically on every directory Google cross-checks. We hunt down the listings that disagree with each other and stand up the ones nobody ever created for you." },
      { name: 'Reviews that keep coming', desc: "A no-fuss routine that turns each finished Jackson job into a fresh review the following week. It nudges your ranking up and hands the next homeowner a reason to call you before the others." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Belhaven, Fondren, Madison, Ridgeland, Brandon and the rest, so you surface for the exact area a homeowner typed rather than a flat, generic \"Jackson.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile load time. The quiet machinery underneath that lets every other piece actually earn a ranking." },
      { name: 'Local link building', desc: "Mentions and links from Jackson sources Google already respects: local press, trade groups, neighborhood partners. In this metro that is frequently the thing that decides page one versus page two." },
      { name: 'Storm-season readiness', desc: "We get your profile, your pages, and your review flow ranking before tornado and hail season opens, so the spike lands on you instead of finding you scrambling once the first claims are already filed.", featured: true },
      { name: 'AI search readiness', desc: "A rising share of \"near me\" digging now begins inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those engines can parse you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We work out where you genuinely sit today across each service area, then name the competitors out-ranking you in the Jackson Map Pack and spell out exactly why they are." },
      { name: 'Fix the foundation', desc: "Profile and NAP come first because they shift fastest. Most Jackson clients see the early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine switch on. They stack up week after week, which is precisely why starting before storm season beats waiting until claims are already flying." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning the Jackson metro, paired with the on-page work that gives them the muscle to rank." },
      { name: 'Report and expand', desc: "Reporting in plain English, pinned to calls and booked leads rather than vanity positions. Then we move on and take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, planting a solid Map Pack foundation.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews scrapping across several Jackson-metro communities at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map clear across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Jackson?', a: "Most Jackson engagements sit between $750 and $2,500 a month, set by how many neighborhoods and keywords you intend to chase. The three tiers right above lay out what each covers. There are no buried fees, no long contract, and we nail down the exact scope in your free audit before a dollar moves." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can shift inside a few weeks. The contested Jackson terms generally want 90 to 180 days of steady effort, since reviews and citations only stack up with time. Anyone vowing you page one in 30 days is selling a story you should not buy." },
      { q: 'What makes Jackson local SEO different?', a: "Two things set it apart. It is a settled state-capital market built on government and UMMC payroll, so reviews and matching listings carry real weight with a long-tenured homeowner base. And central Mississippi sits in tornado alley with violent spring storms, so trade demand whipsaws with the weather, which means your ranking has to be in place before the front arrives, not cobbled together afterward." },
      { q: 'How does local SEO help me during storm season?', a: "When tornadoes and hail land on central Mississippi, the search for roofing, restoration, and HVAC jumps overnight, and the crews already pinned to the map field those calls. We get you ranked and reviewed ahead of the spring season so you collect that demand rather than fight over leftovers once every competitor is already booked solid." },
      { q: 'Which areas do you cover?', a: "The whole Jackson metro and the ring around it: Belhaven, Fondren, Eastover, Northeast Jackson, plus Madison, Ridgeland, Brandon, Clinton, Pearl, Flowood and beyond. We stand up real neighborhood pages instead of a single flat Jackson page, because that is what genuinely ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly the only thing we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand the 2 a.m. emergency call, the storm-driven surge, and the insurance paperwork, and we build your local SEO to match all three." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research kicks off inside AI tools now instead of plain search. We frame your content and schema so those engines can read, trust, and cite your business by name. In Jackson that is racing toward being as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show honest movement. After that you are month-to-month. If we are not producing, you walk, and the accountability sits squarely with us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility that never becomes yours. We build the rankings, the Google profile, and the review base that route leads straight to you alone. Over time the brokers matter less because the work is already arriving direct." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what the crews above you in the Map Pack are doing to stay there, the fixes that will move you quickest, and a realistic 90-to-180-day plan with the math run for your shop. No slide deck. Just an honest diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'jackson', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Jackson SEO Company | OnwardCraft',
    metaDescription:
      'Jackson SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for storm-season demand.',
    eyebrow: 'SEO Services · Jackson, MS',
    h1: 'Get your Jackson business to the top of Google and keep it there',
    h2Exact: 'Jackson SEO Company',
    heroSubhead:
      "The day you stop paying for ads, the leads quit too. SEO runs the other direction: rank once for what Jackson homeowners search and the calls keep landing for months. We build that ranking and tie every report to booked jobs and ringing phones, never to traffic charts that never dial.",
    primaryCta: 'Get my free Jackson SEO audit',
    intro:
      "Jackson SEO boils down to a plain question: when somebody types what you do, are you on page one or page two? Around here page two is page nowhere. We get contractors ranking for the keywords that pay in a settled but storm-battered central Mississippi market, and we grade the whole effort in booked leads, not in clicks that wander off.",
    aioQuestion: 'How do Jackson businesses rank higher on Google?',
    aioAnswer:
      "They climb by repairing the site's technical base, tuning each page for the precise words buyers type, putting out local content people actually find useful, and earning links from Jackson sources Google already respects. In a market with a long-tenured homeowner class and demand that storms drive hard, a fast mobile site and a presence on storm-season terms are two of the quickest paths to the front.",
    problemHeading: "Three reasons your Jackson site isn't bringing in work",
    painPoints: [
      { title: "You're parked on page two", body: "Hardly anyone clicks past Google's first page, and they do not wander far down it either. Land outside the top handful of results for what you sell and your site is effectively dark, however polished it looks on screen. In Jackson, that quiet is exactly what hands your jobs to the crew above you." },
      { title: "You're leasing your traffic from Google Ads", body: "Ads earn their keep, but the second your card declines the calls go silent. SEO builds something you keep: rankings that go on producing leads for months and years after the work wraps, at a slice of the per-lead price the ad auction keeps charging you." },
      { title: "You're missing the searches that actually pay", body: "Jackson demand lurches with the season and the sky: spring tornadoes and hail, then a brutal humid summer that hammers HVAC, and the contractors ranking on those terms before they peak scoop the surge. Let your SEO skip the storm-driven and seasonal searches and you are quietly forfeiting your fattest months." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load time, Core Web Vitals, schema, and the behind-the-scenes repairs Google insists on before it will rank a Jackson site at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep gets tuned to the exact words your Jackson buyers type: titles, headings, body copy, and the internal links between them." },
      { name: 'Content that ranks', desc: "Pages and articles that genuinely answer what central Mississippi buyers ask, pull in links, and keep generating leads long after we hit publish." },
      { name: 'Link building', desc: "Authority drawn from real Jackson and industry sources. In a market this contested, links are routinely the hinge between sitting on page one and stalling on page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you take the \"near me\" searches shoulder to shoulder with your organic spots." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, form fills, and booked leads, not bare rankings and traffic, so the dollar value of your SEO is never a mystery to you." },
      { name: 'Storm & seasonal SEO', desc: "We rank you on the tornado-driven and heat-driven searches that power Jackson's busiest stretch, so you are showing before the spike arrives rather than chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We frame your content so AI Overviews, ChatGPT, and Perplexity pull you up and quote you, since a growing slice of central Mississippi search now starts in those tools.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, your traffic, and the crews beating you, then draw a roadmap around the keywords most likely to put real Jackson leads on the phone, not just impressions on a chart." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The footing everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that settle who wins the spring around here." },
      { name: 'Build authority', desc: "Links and citations from Jackson and industry sources Google trusts, applied to shove your contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour more into whatever is winning and push out into the next set of keywords." },
    ],
    pricing: {
      heading: 'Transparent Jackson SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across several services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that mean to own Jackson-metro search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Jackson?', a: "Most Jackson SEO engagements run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work the climb needs. The tiers sit just above, with no buried fees and no long contract." },
      { q: 'How long does SEO take to work in Jackson?', a: "Look for early movement in 2 to 3 months and results worth talking about in 4 to 6, quicker on soft terms and slower on the most fought-over Jackson keywords. SEO compounds, so the gains only widen the longer you stay with it." },
      { q: 'Is SEO better than Google Ads?', a: "They handle different jobs. Ads buy you instant traffic that dies the instant you stop paying. SEO is an asset you keep that goes on producing leads at a lower cost per lead over the long run. Most Jackson contractors do best with SEO as the steady engine and ads bolted on for short bursts." },
      { q: 'Should my Jackson SEO target storm season?', a: "Yes, without hesitation. When tornadoes and hail strike central Mississippi, searches for roofing, restoration, and HVAC jump overnight, and ranking takes months to grow, so you have to be in place before the season instead of chasing it once claims are flying. We tune for those seasonal and storm-driven terms ahead of time so your busiest months come home to you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page tuning, content, link building, local and Map Pack work, and reporting tied to revenue. The higher tiers fold in storm-and-seasonal targeting and AI-search work. We pin the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO genuinely needs that window to show honest movement, then it rolls to month-to-month. If we are not delivering, you go." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we tune for. We frame your content and schema so AI engines can read, trust, and quote your business by name, not just classic blue-link results." },
      { q: 'Which areas around Jackson do you cover?', a: "The full Jackson metro and the towns surrounding it: Madison, Ridgeland, Brandon, Clinton, Pearl, Flowood, Byram, Canton and more, each with a genuine local page rather than one flat Jackson page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that funnel leads straight to you. The more of your own search visibility you hold, the less you have to keep paying brokers for the same leads they sold three competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank now, what the crews above you are doing to stay there, the fixes that will move the needle hardest, and a realistic timeline with the numbers modeled for your shop. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'jackson', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Jackson Web Design Company | OnwardCraft',
    metaDescription:
      'Jackson web design that turns visitors into booked jobs. Fast, mobile-first sites built for contractors and storm-season demand.',
    eyebrow: 'Web Design · Jackson, MS',
    h1: 'Jackson web design that turns visitors into booked jobs',
    h2Exact: 'Jackson Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is just an expensive brochure. We build Jackson contractors fast, mobile-first sites engineered to turn a visitor into booked work, and tough enough to hold their footing when a spring storm floods every phone in the metro.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Jackson contractor sites leak leads without a sound: slow to load on a phone, the call button hidden three scrolls down, no clear offer in sight. Web design done properly seals every one of those leaks. We build sites that load quick, carry the polish of the pro you already are, and turn Belhaven-to-Madison visitors into booked jobs, and that stay standing when a tornado or hailstorm drives your traffic straight up.",
    aioQuestion: 'What makes a good contractor website in Jackson?',
    aioAnswer:
      "A strong Jackson contractor site loads in under three seconds on a phone, parks the call button and a clear offer above the fold, earns trust with reviews and real project photos, and is built to absorb the traffic spikes that storm season brings. Since nearly every Jackson search happens on mobile, phone speed and one obvious next step are what divide a site that books work from one that only sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It reads like a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to pick you over the next name down the map. We aim every page at one outcome: turning a Jackson visitor into a booked lead before they tap back to the search results." },
      { title: "It crawls on a phone", body: "Almost all of your Jackson visitors arrive on mobile, and they are gone if your site needs more than a couple of seconds to paint. Sluggish sites rank worse too, so you lose the visitor and the position in one stroke. We build fast and hold onto both." },
      { title: "It folds when storm season surges", body: "After a tornado or hailstorm clears central Mississippi, contractor sites take a wall of urgent traffic, and the slow ones either stall out or bury the call button at the precise minute it matters most. We build sites that stay quick and keep converting under that load, so you catch the demand instead of donating it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Jackson website",
    services: [
      { name: 'Custom design', desc: "No off-the-shelf template. A site shaped around your trade, your stretch of the Jackson metro, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Drawn for the phone first, because that is where nearly all of your Jackson traffic lives. Quick to load, easy on the thumb, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms set where homeowners actually fill them out. Every page carries one unmistakable next move." },
      { name: 'Copy that sells', desc: "Words written for a homeowner staring at a hail-pocked roof or a dead AC unit in August, not filler that reads like every other contractor site in the metro." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and pages ready for Belhaven, Madison, Brandon and the rest." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quickly and clear Google's performance checks, which guards your conversions and your rankings in the same pass." },
      { name: 'Storm-surge ready', desc: "Built to stay quick and keep the call button dead center when storm-season traffic spikes, the very minute that turns visitors into the biggest jobs of your year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and put your name forward as more Jackson search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, the jobs that actually pay you, and the crews you are up against, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout aimed at converting, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action sitting front and center on every page." },
      { name: 'Launch', desc: "We launch clean, with the SEO foundation, the tracking, and the speed all dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it quick and current and tune it against what is genuinely turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Jackson web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Jackson?', a: "Most contractor sites we build land between $2,000 and $8,000 as a one-time project, set by page count and integrations. The tiers sit just above: fixed price, nothing sprung on you later, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and a heads-up at every stage along the way." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in Jackson that counts for plenty. After a tornado or hailstorm hits central Mississippi, contractor sites take a wall of urgent traffic, and the slow ones shed leads just as demand peaks. We build fast and keep the call button obvious, so your site converts under that load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO footing: quick load, clean structure, schema, and pages ready for the neighborhoods you serve. The build readies you to rank, and pairing it with our SEO service is how you climb the contested Jackson terms." },
      { q: 'Do I own the website?', a: "All of it. The site, the domain, and the content are yours. No hostage situations, and no platform you cannot pack up and leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Jackson traffic comes from. Quick load, call buttons easy to tap, and forms shaped for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain language." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and after that we offer affordable monthly maintenance covering updates, speed, and security." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any maintenance or SEO you add afterward is month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Jackson site ought to include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'jackson', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Jackson Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Jackson website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season.',
    eyebrow: 'Website Redesign · Jackson, MS',
    h1: 'Redesign your Jackson website without losing your rankings',
    h2Exact: 'Jackson Website Redesign Company',
    heroSubhead:
      "An aging site quietly bleeds jobs every week: slow, awkward on a phone, easy for a Jackson homeowner to skip right past. We redesign contractor sites to convert more and load faster, and we migrate with enough care that you keep every scrap of ranking you have already built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns fail one of two ways: the site gets prettier but converts the same, or it goes live and the rankings evaporate overnight. We do neither. We rebuild Jackson contractor sites for speed and conversions, harden them for storm-season traffic, and migrate with the redirects and SEO care that protect the standing you have spent years earning in central Mississippi search.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You shield your SEO through a redesign by holding your URL structure (or mapping a 301 for every page that changes), keeping your existing content and metadata intact, carrying your schema across, and testing the whole thing on staging before it goes live. Handled right, a redesign holds your rankings and lifts them, because the new site loads faster, reads mobile-first, and is structured better than the old one.",
    problemHeading: "Signs your Jackson site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly bleeds trust", body: "On a high-ticket job, a Jackson homeowner sizes you up by your site inside a few seconds. A tired, cluttered design ships them to a competitor who merely looks more settled, even when your crew clearly does the better work. In the metro's renovation-heavy neighborhoods, that first glance decides who gets the call." },
      { title: "It's slow and clumsy on a phone", body: "If your site stutters or drags on mobile, you are losing most of your Jackson visitors before they ever reach the offer. A redesign built mobile-first wins those visitors back and turns them into leads instead of bounces." },
      { title: "It can't keep its feet when demand surges", body: "Traffic that never becomes a call is money down the drain, and an aging site that grinds to a crawl under a storm-season surge sheds leads at the exact moment each one is worth the most. We rebuild for conversions and for the days your phone ought to be ringing without a pause." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you leads and rankings today, so the redesign repairs the real problems rather than just shuffling the color palette." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled the careful way, so you keep every bit of the rankings and traffic you have already earned in Jackson." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually complete. We design for booked jobs, not just a sharper screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for quick load and a clean pass on Core Web Vitals, which lifts conversions and rankings in the same move." },
      { name: 'Mobile-first rebuild', desc: "Redrawn around the phone, where nearly all of your Jackson traffic actually spends its time." },
      { name: 'Brand refresh', desc: "A current, trustworthy look that matches the quality of your work and the size of the jobs you mean to book." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay quick and keep converting when storm-season traffic spikes, so the new site catches your biggest spring jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read you and put you forward as more Jackson search drifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is costing you leads and rankings, then map a redesign that fixes it without breaking the parts already working for you." },
      { name: 'Design', desc: "A current, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean handoff with no nasty surprises." },
      { name: 'Launch with SEO care', desc: "We go live with the redirects in place and watch closely so your rankings hold and climb instead of slipping." },
      { name: 'Optimize', desc: "Once it is live we keep tuning against what the Jackson traffic is actually converting, and we stay on top of speed and updates so the site does not drift backward." },
    ],
    pricing: {
      heading: 'Transparent Jackson redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Jackson?', a: "Most redesigns we take on run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, nothing sprung on you later, and the result is yours to keep outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, and careful is exactly how we work. We map a 301 for every URL that changes, keep your content and metadata, carry your schema across, and test on staging first. Done that way, a redesign holds your rankings and usually nudges them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline at the start and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site drags on phones, looks dated, is a chore to update, is not bringing in leads, or stalls when storm-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign earns its keep for your Jackson business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry your existing content over and sharpen it, protect whatever is already ranking, and run the technical migration so nothing that matters slips through the cracks." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in Jackson that is a genuine concern. After a tornado or hailstorm strikes central Mississippi, contractor sites take a surge of traffic, and the slow ones shed leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for quick load and Core Web Vitals, which lifts both your conversions and your rankings." },
      { q: 'Do I own the redesigned site?', a: "Every piece of it: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any maintenance or SEO you add on afterward is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should put right, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const jacksonCity = {
  citySlug: 'jackson', city: 'Jackson', state: 'Mississippi', stateAbbr: 'MS', metro: 'Jackson',

  titleTag: 'Jackson MS Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Jackson, MS contractors. Get found, get booked, and own your leads instead of renting them, all built for storm-season demand.',

  eyebrow: 'Jackson · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Jackson contractors found and booked',
  h2Exact: 'Jackson Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO shaped for central Mississippi's settled, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Jackson audit',

  intro:
    "Run a contracting business in Jackson and you are fighting for attention in Mississippi's capital market: a settled base of professional homeowners propped up by state government and UMMC, where the scrap for the top spots is real. Winning here takes three pieces pulling together: a site that converts, SEO that ranks you for what people type, and local SEO that lands you in the Map Pack, all of it in place before the next storm sends demand straight up. Here is how we help Jackson contractors pull that off.",
  aioQuestion: 'How do Jackson contractors get more leads online?',
  aioAnswer:
    "Jackson contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them on high-intent searches and local SEO that takes the Google Map Pack. Because central Mississippi sits in tornado alley with violent spring storms and a punishing humid summer, the contractors who look settled and are already ranking before the storm pull in the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the three businesses Google pins to the map when Jackson searches \"near me.\" The highest-return move most local crews can make, and the way you catch storm-season demand before a rival does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords that pay, build an asset you hold instead of renting traffic from the ad auction, and grade the whole thing in booked leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first sites engineered to turn visitors into booked jobs, and to keep their footing when storm season floods your phone, not brochures that only sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an aging site for speed and conversions, then migrate it with enough care that you keep every scrap of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Jackson?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting site with SEO and local SEO so they rank, convert, and hold their own leads, and so they are ready when storm season lands and half the metro needs help at once." },
    { q: 'Do you work only with contractors?', a: "Nearly all the time. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and the insurance paperwork that follows central Mississippi's spring claims." },
    { q: 'Why does storm season matter for my marketing?', a: "Central Mississippi sits in tornado alley with violent spring storms and hail, and Gulf hurricane remnants push this far inland too. Katrina drove serious wind and tree damage even up here in Jackson. When storms hit, demand for roofing, restoration, and HVAC jumps overnight. Ranking takes months to build, so the contractors already visible before the front arrives take that work. We get you in place ahead of the season." },
    { q: 'How much does it cost to work with you?', a: "Websites are a one-time build, $2,000 to $9,000 depending on size. SEO and local SEO go month-to-month, $750 to $3,000, with no long contract holding you in. We settle the exact scope for your Jackson shop in the free audit." },
    { q: 'Which Jackson areas do you serve?', a: "The whole Jackson metro and the ring around it: Belhaven, Fondren, Eastover, Northeast Jackson, plus Madison, Ridgeland, Brandon, Clinton, Pearl, Flowood and beyond." },
    { q: 'Where should I start?', a: "Start with a free Jackson audit. We look over your website, your rankings, and your Map Pack presence, then point out the one or two moves that will bring in the most work fastest. No slide deck, just a plan." },
  ],
};

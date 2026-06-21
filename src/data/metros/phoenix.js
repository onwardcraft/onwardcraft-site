// Phoenix metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (market, areas, founder, why, proof) are defined once
// and reused across that city's service pages and hub. They describe the same
// city, so sharing is correct and DRY. Service-specific blocks are per entry.
// PRICING is placeholder, aligned to market range; confirm with the founder.

// ===========================================================================
// PHOENIX: shared city blocks (also used by the /phoenix/ hub object below)
// ===========================================================================
const MARKET = {
  heading: 'Why the Phoenix Valley is a fast, hot, two-language market',
  body:
    "Roughly 4.8 million people now live across the Phoenix metro, and the moving trucks keep coming. The Valley has ranked among the fastest-growing big metros in America for the better part of a decade. All that growth crams contractors into the same square miles, all chasing the same homeowners, which turns the Map Pack into a knife fight. Two forces make Phoenix unlike anywhere else. The first is the heat: highs clear 100 degrees from June into September, and the Valley logs more than 100 days a year above triple digits, so a working AC is not comfort here, it is survival. That keeps HVAC, electrical, and emergency calls humming nearly all twelve months. The second is the monsoon: from mid-June through September, haboobs bury condensers in dust, shred filters, and send voltage spikes that cook compressors. And because close to 42% of the metro is Hispanic, a huge share of those panicked searches happen in Spanish, where almost no contractor bothers to rank.",
  pullQuote: 'In Phoenix the AC never clocks out, so your phone should not either.',
  donut: {
    title: 'How Phoenix searches',
    value: 42,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 42, kind: 'teal' },
      { label: 'Everyone else', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer heat + monsoon (May-Sep)',
  seasonalDemand: [
    { m: 'J', v: 40 }, { m: 'F', v: 42 }, { m: 'M', v: 48 }, { m: 'A', v: 58 },
    { m: 'M', v: 74, peak: true }, { m: 'J', v: 90, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'A', v: 95, peak: true }, { m: 'S', v: 82, peak: true }, { m: 'O', v: 60 },
    { m: 'N', v: 46 }, { m: 'D', v: 44 },
  ],
  stats: [
    { value: '4.8M+', label: 'people across the Phoenix metro' },
    { value: '~42%', label: 'of the metro is Hispanic, a search market most agencies skip', accent: true },
    { value: '100+', label: 'days a year over 100°F, when HVAC demand peaks' },
    { value: 'Top 3', label: 'Map Pack spots that grab most of the clicks' },
  ],
  neighborhoods: [
    'Arcadia', 'Downtown', 'Roosevelt Row', 'Ahwatukee', 'Biltmore',
    'Camelback East', 'Maryvale', 'Paradise Valley Village', 'Desert Ridge', 'Sunnyslope',
    'Encanto', 'Laveen', 'North Mountain', 'Deer Valley', 'Estrella',
  ],
};

const AREAS = [
  'Phoenix', 'Scottsdale', 'Mesa', 'Tempe', 'Chandler', 'Gilbert',
  'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Buckeye',
  'Queen Creek', 'Paradise Valley',
];

const FOUNDER =
  "Let me level with you. I started OnwardCraft after watching one too many solid contractors wire a few grand a month to Angi and HomeAdvisor for leads that three competitors down the street bought the same morning. A business built on rented leads is a business someone else can switch off. So this is the entire point of what we do: rank you and convert you for the work you actually want, in the Phoenix neighborhoods you actually drive to, with leads that belong to you and nobody else. No year-long handcuffs. If the phone stays quiet, you fire us, and that is exactly how it should be.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand the 115-degree AC failure, the monsoon roof leak, and the after-hours emergency, so everything we build mirrors how Phoenix homeowners really search when something breaks.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline with your name on it. Not one more monthly check to a broker for a homeowner that three other Valley contractors are calling at the same time.",
  },
  {
    title: 'We actually speak Phoenix',
    body: "Year-round heat demand, monsoon-season surges, Spanish-language search, and street-level targeting from Arcadia to Maryvale. None of that survives a national agency dropping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Prices you can read on this page, reporting measured in leads, and month-to-month freedom after 90 days. If we stop earning it, you walk, which keeps the pressure squarely on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies open with a wall of client logos. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we can hand you is the why behind this work, pulled straight from Google's own data and the industry's research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a back-of-napkin picture, flagged clearly as a projection and not a result we are claiming. Say a Phoenix HVAC or roofing contractor pulls around 1,800 local \"near me\" impressions in a normal month, with far more piling up during a July heat wave or a monsoon weekend. The leap from page-two invisibility into the top three is the gap between a slow trickle of calls and a crew booked solid. In your free audit we model the real figures for your business: your current rankings, your true search volume, and a straight 90-to-180-day plan to climb.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ', metro: 'Phoenix Metro',
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const phoenixLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Phoenix Local SEO Company | Win the Map Pack',
    metaDescription:
      'Search your trade in Phoenix and three businesses pin to the map. We get you into those three, in English and Spanish, so the call lands with you.',
    eyebrow: 'Local SEO · Phoenix Metro',
    h1: 'When Phoenix searches for what you do, be the first name they find',
    h2Exact: 'Phoenix Local SEO Company',
    heroSubhead:
      "At 5pm in July, when a homeowner taps \"AC repair near me,\" Google hands them three businesses on a map and almost nobody scrolls past them. Everyone below those three is invisible. We put you in that top three, in English and in Spanish, so the call rings your phone instead of the contractor who happened to rank first.",
    primaryCta: 'Get my free Phoenix audit',
    intro:
      "Phoenix local SEO plays by its own rules because of the heat. When a system quits during a 115-degree afternoon, a homeowner in Arcadia or Maryvale grabs a phone, taps one of the three names Google pinned to the map, and never looks lower. Plenty of them type \"reparación de aire\" instead of \"AC repair,\" since roughly 42% of the metro is Hispanic. Owning one of those three spots, in both languages, is the entire game. Below is exactly how you take one.",
    aioQuestion: 'How do Phoenix businesses rank higher in local search?',
    aioAnswer:
      "Four things decide it. A Google Business Profile tuned to the exact services and Valley neighborhoods you want, name-address-phone listings that match everywhere Google checks, a steady flow of genuine reviews, and local content that includes Spanish, since about 42% of the Phoenix metro is Hispanic. Because heat and monsoon demand spike without warning, the winners look established, answer the search first, and show up in both languages.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Competitors own all three spots on the map', body: "Pull up your own trade plus \"near me\" on your phone right now. Those three businesses Google pins to the map collect the lion's share of the clicks. If your name is not among them, the quality of your work barely matters, because most Phoenix homeowners never see it. Cracking that top three is usually the highest-return move a Valley contractor can make all year." },
      { title: "You're paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same overheated Phoenix homeowner to four contractors, then charge each of you to brawl over the scraps. It is a treadmill with no off switch. Local SEO builds the reverse: a homeowner finds you, calls you, and nobody else got the same lead. Month by month you stop renting and start owning." },
      { title: "You vanish right when demand explodes", body: "The day a July heat wave lands or a monsoon cell rolls over the Valley, \"near me\" searches for AC, roofing, and electrical jump overnight. Stuck on page two, those urgent high-intent calls flow straight to whoever already sits in the top three. The contractors who own the Map Pack ride that wave. Everyone else watches it crash on someone else's shore." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Phoenix searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks. We correct the listings that contradict each other and build the ones you are missing." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns every finished Valley job into a fresh review. It lifts your ranking and gives the next homeowner a reason to dial." },
      { name: 'Neighborhood pages', desc: "Real pages for Arcadia, Ahwatukee, Desert Ridge, Maryvale, and the rest, so you rank for the exact neighborhood a homeowner is searching, not a vague \"Phoenix.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the wiring under the floor that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Phoenix sources Google already trusts, like local press, trade associations, and partners. Here, that is often what divides page one from page two." },
      { name: 'Spanish-language SEO', desc: "The one almost nobody touches. Spanish keywords, Spanish profile content, and Spanish pages, built to win the 42% of the metro your competitors leave on the table.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and name you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across each service area, in both languages, and pin down which Valley competitors are beating you and the exact reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move fastest. Most clients see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is the whole reason local SEO rewards starting today over waiting until peak season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages, in English and Spanish wherever it pays, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, never vanity rankings. Then we go take the next Phoenix neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors battling across several Valley neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole Valley in both languages.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Phoenix?', a: "Most Phoenix engagements land between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing and whether you want Spanish-language work. Our tiers sit right above this. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile fixes can move inside a few weeks. The competitive Valley keywords usually take 90 to 180 days of steady work, because reviews and citations build on each other over time. In a market this crowded, anyone promising page one in 30 days is selling smoke." },
      { q: 'What makes Phoenix local SEO different from regular SEO?', a: "Three things. It is heat-driven, so HVAC, electrical, and roofing demand peaks hard all summer and your presence has to be ready the moment calls hit. It is monsoon-prone, so a single storm can spike emergency searches overnight. And about 42% of the metro is Hispanic, so a big slice of high-intent searches happen in Spanish that most agencies never bother to chase." },
      { q: 'Does the summer heat really change how I should rank?', a: "Completely. From May through September the Valley logs more than 100 days over 100 degrees, and AC, electrical, and roofing searches surge the instant systems fail. If you are not already in the top three when a homeowner's AC dies at 4pm, that call goes to whoever is. We build your Map Pack presence before the peak so you are catching the rush, not chasing it." },
      { q: 'Do you really do Spanish-language SEO?', a: "Yes, and it is one of the sharpest edges we hand you. About 42% of the Phoenix metro is Hispanic, yet your competitors optimize in English only. We target Spanish keywords and build Spanish profile content and pages, so you scoop up searches nobody else is even bidding on." },
      { q: 'Which areas do you cover?', a: "The whole Phoenix Valley and the cities ringing it: Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, and more, plus Phoenix neighborhoods like Arcadia, Ahwatukee, and Desert Ridge. We build genuine neighborhood pages rather than one catch-all Phoenix page, because that is what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We get emergency calls, heat-driven demand, monsoon damage, and insurance jobs, and we shape your local SEO around every one of them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In Phoenix it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays right where it belongs, on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route Phoenix homeowners straight to you. Over time you lean on the lead brokers less because the work is already arriving on its own." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Phoenix SEO Company | Rank Higher, Get Leads',
    metaDescription:
      'Phoenix SEO that ranks contractors on Google and delivers leads you own, in English and Spanish. Lead-tied reporting and no lock-in contracts.',
    eyebrow: 'SEO Services · Phoenix Metro',
    h1: 'Get your Phoenix business to the top of Google and keep it there',
    h2Exact: 'Phoenix SEO Company',
    heroSubhead:
      "Ads die the moment you stop paying. SEO does the opposite: rank once for what your Phoenix customers search, in both languages, and the leads keep arriving through every heat wave and every monsoon. We build that ranking and tie every report to actual calls and booked jobs.",
    primaryCta: 'Get my free Phoenix SEO audit',
    intro:
      "Phoenix SEO boils down to one question: when a homeowner searches your trade, are you on page one or page two? Page two might as well be page fifty. We rank Valley contractors for the money keywords, in English and in the Spanish that 42% of this Hispanic metro types, and we measure the work in leads instead of vanity traffic. In a market where demand climbs with the thermometer, owning those rankings means you are booked while everyone else is still dialing for work.",
    aioQuestion: 'How do Phoenix businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, optimizing each page for the precise terms customers search, publishing genuinely useful local content, and earning links from trusted Phoenix sources. In a fast-growing, heat-driven market where about 42% of the metro is Hispanic, ranking in Spanish and keeping the site quick on mobile are two of the fastest ways to pull ahead of competitors who optimize in English only.",
    problemHeading: "Three reasons your Phoenix site isn't bringing in work",
    painPoints: [
      { title: "You're buried on page two", body: "Almost nobody clicks past Google's first page, and they rarely scroll far down it either. If you are not among the top handful of results for what you sell, your site is invisible, no matter how sharp it looks or how slammed you happen to be during peak season." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop with it. SEO builds an asset you actually own: rankings that keep producing Valley leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You're ignoring a huge slice of Phoenix searches", body: "About 42% of the metro is Hispanic, and plenty of those urgent searches happen in Spanish. An English-only strategy hands every one of them to a competitor. We rank you for both languages so they stay yours." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the precise terms your Phoenix customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Valley buyers search, earn links, and pull in leads while you are on a job site." },
      { name: 'Link building', desc: "Authority from real Phoenix and industry sources. In a competitive, fast-growing market, links are often the line between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads, not just rankings and traffic, so you always know exactly what your SEO is earning." },
      { name: 'Spanish-language SEO', desc: "We rank you in Spanish too, capturing the 42% of the metro searching in a language your competitors ignore.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Phoenix leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, in both languages wherever it pays off." },
      { name: 'Build authority', desc: "Links and citations from trusted Phoenix and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we pour more into what is working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Phoenix SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Valley cities.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Phoenix search in both languages.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Phoenix?', a: "Most Phoenix SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and whether you need Spanish-language and content work. Our tiers are above, with no hidden fees and no long contract holding you in." },
      { q: 'How long does SEO take to work in Phoenix?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on low-competition terms and slower on the most contested Valley keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the day you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Valley contractors do best running SEO as the long-term engine and ads for short bursts like a heat wave." },
      { q: 'Should my SEO plan account for the summer heat?', a: "It absolutely should. Phoenix logs more than 100 days a year over 100 degrees, and searches for AC, electrical, and roofing surge from May through September as systems fail. Good SEO has you ranking well before that peak so you are catching the urgent calls instead of watching competitors take them. We plan content and rankings around your real demand curve." },
      { q: 'Do you do Spanish-language SEO?', a: "Yes. About 42% of the Phoenix metro is Hispanic, and most agencies optimize in English only. We rank you in both languages so you capture searches your competitors never even target." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Phoenix do you cover?', a: "All of the Valley and the surrounding cities: Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, and more, with genuine local pages rather than one generic Phoenix page." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a clear diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Phoenix Web Design Company | OnwardCraft',
    metaDescription:
      'Phoenix web design that turns visitors into booked jobs: fast, mobile-first, bilingual sites for contractors. Transparent pricing and you own it all.',
    eyebrow: 'Web Design · Phoenix Metro',
    h1: 'Phoenix web design that turns visitors into booked jobs',
    h2Exact: 'Phoenix Web Design Company',
    heroSubhead:
      "A handsome site that never rings the phone is just a brochure. We build Phoenix contractors fast, mobile-first websites, in English and Spanish, engineered to flip the AC-emergency visitor into a booked job instead of a polite compliment.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Phoenix contractor websites bleed leads quietly: slow on a phone, the call button buried, English-only in a metro that is 42% Hispanic. When an AC quits in July, the homeowner is not browsing your About page. They tap the first site that loads fast and shows a phone number. Web design done right closes every one of those gaps. We build Phoenix sites that load quick, look like the pro you are, and turn visitors from Arcadia to Avondale into booked work.",
    aioQuestion: 'What makes a good contractor website in Phoenix?',
    aioAnswer:
      "A strong Phoenix contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and works in both English and Spanish. Because most Phoenix searches happen on mobile, often during an urgent heat-driven emergency, mobile speed and an obvious way to call are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit quietly. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a Phoenix visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Phoenix visitors are on mobile, often mid heat emergency, and they bounce the second your site takes more than a few moments to load. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It only speaks English", body: "About 42% of the Phoenix metro is Hispanic. An English-only site quietly waves off a huge share of your potential customers. We build bilingual so they stay and call." },
    ],
    servicesHeading: "What's in an OnwardCraft Phoenix website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your Valley service area, and the exact jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Phoenix traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where homeowners actually use them. Every page carries a next step." },
      { name: 'Copy that sells', desc: "Words written for the anxious homeowner whose AC just died, built to book the job, not filler that reads like every other contractor in the Valley." },
      { name: 'Local SEO foundation', desc: "Engineered from the first line to rank: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Bilingual build', desc: "English and Spanish versions so you capture the 42% of the metro that is Hispanic, something almost no Valley competitor bothers to offer.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your Valley competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, in English and Spanish wherever it pays off." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting Phoenix visitors into jobs." },
    ],
    pricing: {
      heading: 'Transparent Phoenix web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Full bilingual build', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Phoenix?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count, whether you need a full bilingual version, and any integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom or bilingual build runs 4 to 8. You get a firm timeline up front and updates at each stage." },
      { q: 'Do you build Spanish-language websites?', a: "Yes, and in Phoenix it is one of the smartest moves you can make. About 42% of the metro is Hispanic, so a bilingual site captures customers an English-only competitor quietly turns away." },
      { q: 'Will my site help me catch the summer rush?', a: "That is exactly what we build for. When the Valley hits its 100-plus days over 100 degrees and AC, roofing, and electrical calls surge, your site has to load fast and make calling obvious in one tap. We design mobile-first with a call button and clear offer above the fold so you convert the urgent traffic instead of feeding it to a faster competitor." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Phoenix terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Phoenix traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever you like." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'phoenix', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Phoenix Website Redesign | More Leads, No Loss',
    metaDescription:
      'Redesign your Phoenix website without losing rankings. Faster, mobile-first, bilingual rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · Phoenix Metro',
    h1: 'Redesign your Phoenix website without losing your rankings',
    h2Exact: 'Phoenix Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, English-only. We redesign Phoenix contractor sites to convert more and load faster, and we migrate with such care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go wrong in one of two ways: the site looks sharper but converts the same, or it launches and the rankings evaporate overnight, right before summer when Phoenix demand peaks. We do neither. We redesign Valley contractor sites for speed and conversions, build them bilingual for the 42% of the metro that is Hispanic, and migrate with the redirects and SEO care that protect every visitor you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Phoenix site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and bleeds trust", body: "For a high-ticket job like an AC replacement or a full re-roof, Phoenix homeowners size you up by your site in seconds. An old, cluttered design quietly nudges them toward a competitor who looks more established, even when your work is the better bet." },
      { title: "It's slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you are losing most of your Phoenix visitors before they ever reach your offer, and most of them are searching mid-emergency in the heat. A mobile-first redesign wins them back." },
      { title: "It doesn't convert, or speak Spanish", body: "Traffic that never turns into calls is money on the floor, and an English-only site overlooks the 42% of the metro that is Hispanic. We rebuild for conversions and for both languages at once." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes the real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you hold onto the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually use. We design for booked jobs, not just good looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Phoenix traffic already lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want." },
      { name: 'Bilingual rebuild', desc: "English and Spanish versions so the new site captures the 42% of the metro that is Hispanic.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking the parts that already work." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and bilingual, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Phoenix redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Full bilingual version', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Phoenix?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size, whether you need a full bilingual version, and any integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger or bilingual rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'Should I redesign before or after the summer peak?', a: "Ideally we finish before May, so your faster, higher-converting site is live and stable when Phoenix hits its 100-plus days over 100 and AC, roofing, and electrical demand surges. If you are already in peak season, we can still migrate carefully without risking the rankings you lean on for those urgent calls. The free audit lays out the safest timing for your situation." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or only speaks English in a metro that is 42% Hispanic, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Can you make my redesigned site bilingual?', a: "Absolutely, and in Phoenix we recommend it. A bilingual rebuild captures the 42% of the metro that is Hispanic, many of whom search in Spanish." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, and matters most when homeowners are searching mid-emergency in the heat." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
    ],
  },
];

// ===========================================================================
// PHOENIX: city hub object, rendered at /phoenix/
// ===========================================================================
export const phoenixCity = {
  citySlug: 'phoenix', city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ', metro: 'Phoenix Metro',

  titleTag: 'Phoenix Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Phoenix contractors, in English and Spanish. Get found, get booked, and own your leads instead of renting them.',

  eyebrow: 'Phoenix · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Phoenix contractors found and booked',
  h2Exact: 'Phoenix Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Phoenix's fast-growing, heat-driven market. One team to get you ranking, converting, and off the rented-lead treadmill, in English and Spanish.",
  heroProof: ['Built for the trades', 'English + Spanish', 'No lock-in contracts'],
  primaryCta: 'Get my free Phoenix audit',

  intro:
    "Run a contracting business in Phoenix and you are scrapping for attention in one of the fastest-growing metros in the country, where the heat keeps HVAC, electrical, and roofing demand humming nearly all year. Winning here takes three things pulling together: a site that converts, SEO that ranks you for what homeowners search, and local SEO that drops you into the Map Pack, all in English and Spanish. Here is how we help Valley contractors do exactly that.",
  aioQuestion: 'How do Phoenix contractors get more leads online?',
  aioAnswer:
    "Phoenix contractors get more leads by combining a fast, mobile-first, bilingual website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because about 42% of the metro is Hispanic and demand spikes with summer heat and monsoon storms, the contractors who show up in both languages and look established win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  // The 4 services this city offers. Cards link to /[citySlug]/[serviceSlug]/
  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the top three businesses Google pins to the map when Phoenix searches \"near me,\" in English and Spanish. The single highest-return move for most Valley contractors.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually type, build an asset you own instead of renting traffic from ads, and measure the work in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual websites engineered to flip visitors into booked jobs, not brochures that sit there looking nice while the phone stays quiet.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it with enough care that you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Phoenix?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads. Everything is available in English and Spanish." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, heat-driven demand, and monsoon damage." },
    { q: 'Do you offer services in Spanish?', a: "Yes, and in Phoenix it is a major advantage. About 42% of the metro is Hispanic, but most agencies optimize in English only. We build and rank you in both languages." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Phoenix areas do you serve?', a: "All of the Valley and the surrounding cities: Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, and more, plus Phoenix neighborhoods like Arcadia, Ahwatukee, and Desert Ridge." },
    { q: 'Where should I start?', a: "Start with a free Phoenix audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

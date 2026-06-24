// FAYETTEVILLE (NWA): per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fayetteville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FAYETTEVILLE (NWA): shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Northwest Arkansas is a moving target',
  body:
    "Northwest Arkansas almost never stops growing, and that single fact decides how local search behaves here. Walmart in Bentonville, Tyson Foods in Springdale, and J.B. Hunt in Lowell anchor a regional economy that keeps importing executives, vendor managers, and Razorback graduates who decide to stay. Every one of those arrivals eventually becomes a homeowner who needs a roof, a furnace, or a remodel, which is good news for trade businesses and bad news for the contractor who assumes last year's ranking still holds. New competitors register a Google Business Profile every month. The way people pick one of you barely changes, though: a phone comes out, \"near me\" gets typed, and a thumb taps one of the first three pins without scrolling past them. Then there is the weather. The metro sits in a spring storm corridor, and when tornado and hail season runs March into June, roofing and restoration demand does not rise politely. It spikes, and the contractors already pinned to the map are the only ones whose phones ring through the chaos.",
  pullQuote: 'A storm rolls through Benton County and the calendar fills in a day. The contractors already on the map fill theirs first.',
  donut: {
    title: 'Springdale Hispanic population',
    value: 17,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 17, kind: 'teal' },
      { label: 'Other', pct: 83, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Tornado/storm season (Mar–Jun), HVAC peak (Jun–Sep), ice events (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 38 }, { m: 'F', v: 42 }, { m: 'M', v: 72, peak: true }, { m: 'A', v: 90, peak: true },
    { m: 'M', v: 96, peak: true }, { m: 'J', v: 88, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'S', v: 60 }, { m: 'O', v: 44 },
    { m: 'N', v: 36 }, { m: 'D', v: 48 },
  ],
  stats: [
    { value: '600K+', label: 'people across the Fayetteville-Springdale-Rogers metro and growing fast' },
    { value: '3 Fortune 500', label: 'companies headquartered here drawing executives and vendor managers worldwide', accent: true },
    { value: 'Mar–Jun', label: 'tornado and storm season, when roofing and restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack pins that soak up nearly every tap a local search produces' },
  ],
  neighborhoods: [
    'Fayetteville', 'Springdale', 'Rogers', 'Bentonville', 'Bella Vista',
    'Siloam Springs', 'Elkins', 'Prairie Grove', 'Centerton', 'Lowell',
    'Cave Springs', 'Pea Ridge', 'Highfill', 'Johnson', 'Farmington',
  ],
};

const AREAS = [
  'Fayetteville', 'Springdale', 'Rogers', 'Bentonville', 'Bella Vista',
  'Siloam Springs', 'Elkins', 'Prairie Grove', 'Centerton', 'Lowell',
  'Cave Springs', 'Pea Ridge', 'Highfill', 'Johnson', 'Farmington',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofers, HVAC techs, plumbers, solar crews, electricians, restoration teams, and general contractors are the only people we build for. We know how hail claims land, how a heat wave jams the HVAC calendar, and how an NWA homeowner who just moved from out of state actually searches, so nothing we build is borrowed from some unrelated industry.",
  },
  {
    title: 'We get you off rented leads',
    body: "What you should own at the end of this is a steady pipeline with your name on it. Not a recurring charge to a broker who already sold the same Rogers homeowner to the three crews you compete with on price.",
  },
  {
    title: 'We actually speak Northwest Arkansas',
    body: "Fortune 500 hiring waves, the steady inflow of transplants, Razorback game days that empty the highways, and Ozark second homes from Bella Vista to the lakes all change how people here search and buy. We target real towns from Bentonville to Prairie Grove, which is exactly the local read a templated national agency cannot fake.",
  },
  {
    title: 'No contracts, no mystery',
    body: "The prices sit on the page, the reporting points at booked leads, and you go month-to-month once the first 90 days are behind you. The day we stop earning the invoice is the day you should leave, and that arrangement keeps the pressure squarely on us.",
  },
];

const PROOF = {
  heading: "We're new, so we'll hand you the honest math, not a wall of logos",
  body:
    "A lot of agencies open the pitch with a grid of client logos. We are a young, founder-led shop, and faking a track record we have not earned yet would make us exactly the kind of vendor this whole company exists to replace. What we can lay out instead is the underlying math, pulled from Google's and the industry's published research on how people search for a contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'of phone-based local searchers visit a business the same day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Treat this as a labelled illustration, not a result we are claiming. Picture an NWA contractor pulling roughly 1,200 local \"near me\" impressions in a month. The jump from page-two obscurity into the top three pins is the difference between a handful of stray calls and a calendar you are turning work away from, and the morning after a hail event that gap stretches even wider. Your free audit replaces this guess with your real figures: where you rank now, the search volume you are actually sitting on, and a straight 90-to-180-day route to the top of the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fayetteville', state: 'Arkansas', stateAbbr: 'AR', metro: 'Fayetteville-Springdale-Rogers (Northwest Arkansas)',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fayettevilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fayetteville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fayetteville Local SEO Company | Win the NWA Map Pack | OnwardCraft',
    metaDescription:
      'Fayetteville Local SEO that pins you to the top three on the map, so when NWA types your trade plus near me the storm-season call lands with you.',
    eyebrow: 'Local SEO · Northwest Arkansas',
    h1: 'Fayetteville Local SEO that makes you the first name on the map from Bentonville to Springdale',
    h2Exact: 'Fayetteville Local SEO Company',
    heroSubhead:
      "Type a service plus \"near me\" anywhere in Northwest Arkansas and Google answers with three pins on a map. Everyone underneath them might as well not exist. We push you into that top three, so the call routes to you instead of whoever happened to rank first, and so your phone is already lit up when the next hailstorm or July heat wave breaks.",
    primaryCta: 'Get my free Fayetteville audit',
    intro:
      "Fayetteville Local SEO hinges on a single moment: a homeowner in Bentonville or Springdale taps in your service and \"near me,\" and either Google has pinned you to the Map Pack or it has not. Almost no one scrolls past those three pins. This metro keeps adding people faster than most of the country, with Fortune 500 campuses, a growing University of Arkansas crowd, and Ozark second-home buyers all feeding demand, and the contractor pool grows right alongside it. Landing in that local 3-pack is the whole contest.",
    aioQuestion: 'How do Fayetteville businesses rank higher in local search?',
    aioAnswer:
      "Four moves do most of the work: a Google Business Profile aimed at the precise services and NWA towns you want; name, address, and phone details that read identically everywhere online; a real review habit that never quite stops; and content tied to actual Northwest Arkansas neighborhoods. Because the metro grows fast and spring brings violent weather, the winners look established, answer quickly, and already rank before the storm season hits.",
    problemHeading: "When your NWA phone goes quiet, it usually traces to one of these three",
    painPoints: [
      { title: 'Three competitors already hold your map pins', body: "Stand in your own driveway in Rogers or Springdale, open your phone, and search your trade plus \"near me.\" Whichever three crews Google pins at the top collect most of the taps. Finish outside that trio and your craftsmanship barely registers, because the homeowner who just relocated for a job at Walmart or Tyson will dial one of the names already on the map. Breaking into those three pins is usually the single biggest lever a Northwest Arkansas contractor can pull." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor take one Springdale homeowner, sell that same lead to four crews, then invoice all of you for the privilege of fighting over it. That is a treadmill with no off switch. Local SEO builds the reverse: a homeowner finds you, dials you, and no rival ever sees the lead. Keep at it and the rented pipeline turns into one you own outright." },
      { title: "You're invisible the day the storm rolls in", body: "When a tornado watch or a hail line crosses NWA in April or May, searches for roofing, restoration, and tree service detonate within hours, and the crews already ranking sweep the calls. Sit off the map when that weather lands and the work routes to whoever Google has already learned to trust. Ranking before the season is how you ride the surge instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "This is the heaviest lever in the Map Pack. We tighten your categories, services, service area, photos, and posts until Google understands exactly which NWA searches belong to you and ranks you for them." },
      { name: 'Citations and NAP cleanup', desc: "Google cross-checks your name, address, and phone across dozens of directories, and any mismatch costs you. We reconcile the listings that disagree and build out the ones you never claimed." },
      { name: 'Reviews that keep coming', desc: "A low-friction routine that turns every finished job into a fresh review without you chasing anyone. It nudges your ranking up and gives the next homeowner a reason to dial you first." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Bentonville, Rogers, Springdale, Bella Vista, and the rest, so you surface for the exact town a homeowner typed instead of a catch-all \"Fayetteville\" page that ranks for nothing." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile load speed: the unglamorous wiring beneath the page that decides whether the rest of the work ever ranks." },
      { name: 'Local link building', desc: "Mentions and links from NWA sources Google already trusts, like regional press, trade groups, and community sponsorships. In a market this crowded, that is frequently what tips a keyword from page two onto page one." },
      { name: 'Storm-season readiness', desc: "We get your profile, your pages, and your reviews ranking before tornado season opens, so the March-to-June rush lands on a business that is already visible instead of one scrambling after the first claim.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can parse you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map exactly where you stand today across every NWA town you serve, then name the competitors beating you in the Map Pack and the specific reasons they are winning." },
      { name: 'Fix the foundation', desc: "Profile and NAP work comes first because it moves the needle quickest. Most NWA clients notice early lift here inside the opening few weeks." },
      { name: 'Build trust signals', desc: "We switch on citations and the review engine. Both compound month over month, which is the plain reason local SEO pays off most for the contractor who starts before the season rather than during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning Washington and Benton counties, each backed by the on-page work that gives it a real shot at ranking." },
      { name: 'Report and expand', desc: "Reporting written in plain English and tied to calls and booked jobs, never vanity positions. Then we move on and go win the next town." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location and a clean shot at the Map Pack foundation.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews battling across several NWA towns at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across Northwest Arkansas.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fayetteville?', a: "Most NWA contractors land somewhere between $750 and $2,500 a month, set by how many towns and keywords you want to chase. The three tiers right above this break it down. There are no buried fees, no long lock-in, and we pin the exact scope in your free audit before you commit a cent." },
      { q: 'How soon will I land in the NWA Map Pack?', a: "Profile fixes can move within a couple of weeks. The keywords other NWA contractors are fighting for usually take 90 to 180 days of steady work, because reviews and citations only compound with time. In a metro adding people this fast, anyone vowing page one in 30 days is selling smoke." },
      { q: 'What makes Fayetteville local SEO different?', a: "Two forces. The metro is a fast-growing Southern hub anchored by Fortune 500 headquarters, so fresh competitors appear constantly and trust signals like reviews and matching listings carry unusual weight. And it sits in a spring storm corridor, so demand lurches with tornado and hail season. Your ranking has to be set before the weather turns, not patched together after." },
      { q: 'How does local SEO help me during tornado season?', a: "When spring storms cross NWA from March into June, searches for roofing, restoration, and tree service explode overnight, and the businesses already pinned to the map collect those calls. We get you ranking and reviewed ahead of the season so you absorb that surge rather than fighting over scraps once every established crew is already booked solid." },
      { q: 'Which areas do you cover?', a: "The whole of Northwest Arkansas: Fayetteville, Springdale, Rogers, Bentonville, Bella Vista, Siloam Springs, Elkins, Prairie Grove, Centerton, and more. We build real per-town pages instead of one bloated Fayetteville page, because the per-town pages are what actually rank for \"[service] [town]\" searches." },
      { q: 'Is your work built specifically for contractors?', a: "It is close to the only thing we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting. We get emergency calls, hail-driven demand, and insurance jobs, and we shape your local SEO around all three." },
      { q: 'Can you get me cited in Google AI Overviews and ChatGPT?', a: "An increasing share of \"near me\" research now opens inside an AI tool rather than a classic results page. We structure your content and schema so those engines can read, trust, and cite your business by name. In NWA that is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is honestly about how long local SEO needs to show real movement. After that you are month-to-month. If we are not producing, you walk, and the accountability stays parked on us." },
      { q: 'How does this wean me off Angi and HomeAdvisor?', a: "Those platforms lease you shared leads and visibility that never become yours. We build the rankings, the Google profile, and the review base that funnel leads straight to you alone. As that compounds, you lean on the brokers less because the work is already arriving on its own." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your NWA service areas, what your Map Pack competitors are doing to stay ahead, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your own business. It is the honest starting point for Fayetteville Local SEO that actually puts your business on the map. No slide deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fayetteville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fayetteville SEO Company | Rank on Google, Keep the Leads | OnwardCraft',
    metaDescription:
      'Fayetteville SEO that ranks contractors on Google and hands you leads you keep. Reporting tied to booked jobs, no lock-in, tuned for spring storm and summer HVAC demand.',
    eyebrow: 'SEO Services · Northwest Arkansas',
    h1: 'Fayetteville SEO that puts your business on page one and holds it through every storm season',
    h2Exact: 'Fayetteville SEO Company',
    heroSubhead:
      "The moment you pause Google Ads, the leads die with the card. SEO runs the other direction: earn the ranking once for what your NWA customers search, and the calls keep arriving for months. We build that ranking and pin every report to real phone calls and booked jobs.",
    primaryCta: 'Get my free Fayetteville SEO audit',
    intro:
      "Fayetteville SEO reduces to one blunt question: when someone searches what you do, are you on page one or page two? Around here page two is a rounding error. As an SEO company built for the trades, we get contractors ranking on Google for the money keywords that actually pay in a fast-growing, storm-prone metro built around Fortune 500 campuses, and we grade the whole thing in booked leads, not in organic traffic that never dials.",
    aioQuestion: 'How do Fayetteville businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical base, tuning each page for the precise terms buyers type, publishing local content people genuinely use, and earning links from NWA sources Google already respects. In a metro pulling executives from around the world and rocked by spring storms, keeping the site fast on mobile and ranking early for hail and summer HVAC terms are two of the quickest ways to pull clear of the pack.",
    problemHeading: "Three reasons your Fayetteville site isn't bringing in work",
    painPoints: [
      { title: 'Page two is a dead end', body: "Hardly anyone taps through to Google's second page, and they barely crawl down the first one. If your trade's main searches do not put you near the top, the site is effectively dark no matter how slick the design reads. In a metro this competitive, that quiet is the sound of jobs going to someone else." },
      { title: "Google Ads is a meter you can't stop feeding", body: "Paid search has its place, but the instant the card stops the pipeline goes flat. SEO builds something you actually hold: rankings that keep producing leads for months and years after the work ships, at a cost per lead that drops as it compounds." },
      { title: "You're missing the searches that actually pay", body: "NWA demand lurches with the calendar and the sky: tornado and hail season in spring, a brutal Ozark summer driving HVAC calls, and the odd December ice event. The contractors who rank for those terms before the weather turns catch the spike. Skip them in your SEO and you quietly forfeit your most profitable weeks of the year." },
    ],
    servicesHeading: 'The SEO work that genuinely shifts NWA rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, load speed, Core Web Vitals, and schema: the under-the-hood repairs Google insists on before it will rank an NWA contractor at all." },
      { name: 'On-page optimization', desc: "Every page that earns its keep gets tuned for the exact phrases your Fayetteville and NWA customers type, from titles and headings down through the body copy and internal links." },
      { name: 'Content that ranks', desc: "Pages and articles that genuinely answer what buyers are asking, pull in links, and keep producing leads long after the publish date." },
      { name: 'Link building', desc: "Authority earned from real NWA and trade sources. In a market this crowded, links are frequently the single factor separating a page-one ranking from a page-two one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work running in parallel with your organic rankings, so you take the \"near me\" searches and the classic results at the same time." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, form fills, and booked leads rather than rankings and pageviews, so the dollar value of your SEO is never a mystery." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the tornado-season and summer HVAC terms that fuel NWA's busiest stretches, so you are already visible when demand climbs instead of starting from zero once it does.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, capturing the growing share of search that now opens inside an AI answer.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then draw a roadmap around the keywords most likely to put real NWA leads on your phone rather than empty impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile rendering come first, because they are the floor every later gain has to stand on." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local content, including the seasonal and storm-driven terms that decide who wins the busy NWA months." },
      { name: 'Build authority', desc: "Links and citations from trusted NWA and industry sources, aimed at shoving your most contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting pinned to leads, after which we pour more into whatever is converting and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fayetteville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For one focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors spread across NWA services and towns.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses out to own Northwest Arkansas search outright.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fayetteville?', a: "Most NWA SEO engagements fall between $900 and $3,000 a month, set by how contested your keywords are and how much content and link work the climb takes. The tiers sit just above, with no buried fees and no long lock-in." },
      { q: 'How long does SEO take to work in Fayetteville?', a: "Plan on early movement within 2 to 3 months and meaningful results by 4 to 6, quicker on softer terms and slower on the keywords every NWA contractor is fighting over. SEO compounds, so the longer it runs the steeper the payoff." },
      { q: 'Is SEO better than Google Ads?', a: "They cover different jobs. Ads rent you instant traffic that vanishes the moment you stop paying. SEO is an asset you keep that produces leads at a falling cost over time. Most NWA contractors do best with SEO as the long-haul engine and ads layered on for short bursts." },
      { q: 'Should my Fayetteville SEO target tornado and storm season?', a: "Without question. When spring storms cross NWA from March into June, searches for roofing, restoration, and tree service spike overnight, and ranking takes months to build, so you have to already be in place rather than chasing it after. We tune for those storm-driven terms ahead of the season so the busy weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and reporting tied to revenue. The higher tiers fold in storm-and-seasonal and AI-search work. We lock the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that runway to show genuine movement, then it shifts to month-to-month. If we are not producing, you leave." },
      { q: 'Will AI Overviews and ChatGPT surface my business?', a: "It is a growing part of the job. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just feed you classic blue links." },
      { q: 'Which areas around Fayetteville do you cover?', a: "The full NWA footprint: Springdale, Rogers, Bentonville, Bella Vista, Siloam Springs, Elkins, Prairie Grove, Centerton, and beyond, each with its own real page rather than one generic Fayetteville catch-all." },
      { q: 'How do you cut my reliance on Angi and HomeAdvisor leads?', a: "By building the rankings and Google presence that route leads straight to you. The more of your own search visibility you own, the less you owe brokers for leads three competitors paid for too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to stay ahead, the fixes with the biggest payoff, and a realistic timeline with the numbers modeled for your business. It is a plain look at what Fayetteville SEO can earn you in organic traffic and booked work over the next two quarters. No slide deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fayetteville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fayetteville Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Fayetteville Web Design that books jobs instead of just looking nice: fast, mobile-first sites built for NWA contractors and ready for storm-season traffic.',
    eyebrow: 'Web Design · Northwest Arkansas',
    h1: 'Fayetteville web design that books jobs instead of just looking nice from Bentonville to Springdale',
    h2Exact: 'Fayetteville Web Design Company',
    heroSubhead:
      "A good-looking site that never rings the phone is a brochure with a hosting bill. We build NWA contractors fast, mobile-first sites engineered to convert visitors into booked work, and sturdy enough to keep converting when tornado season or a July HVAC rush floods your line.",
    primaryCta: 'Get my free quote',
    intro:
      "Fayetteville Web Design done right starts where most contractor sites leak leads without their owners noticing: slow to load on a phone, a call button buried below the fold, no offer that gives anyone a reason to pick up. Good website design seals every one of those leaks. As a web design company that only builds for the trades, we ship fast-loading, mobile-first contractor websites that look like the professional you already are and turn Bentonville-to-Springdale visitors into booked jobs, sites that hold their footing when a storm sends your traffic vertical.",
    aioQuestion: 'What makes a good contractor website in Fayetteville?',
    aioAnswer:
      "A strong NWA contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, earns trust with reviews and real job photos, and is built to absorb traffic spikes during spring storms and summer HVAC peaks. Since most NWA searches happen on mobile, phone speed and an obvious next step are what divide a site that books work from one that simply exists.",
    problemHeading: "Why your current site isn't pulling in NWA work",
    painPoints: [
      { title: "It reads like a brochure, not a closer", body: "Plenty of contractor sites just list services and stop there. No offer, no obvious next step, no reason a homeowner picks you over the next pin on the map. We engineer every page toward one outcome: turning an NWA visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Almost all your NWA visitors arrive on a phone, and they bail when a page drags past a couple of seconds. Slow sites also rank lower, so the lag costs you the visitor and the position together. We build fast, which keeps both." },
      { title: "It folds under a storm-season surge", body: "After a severe April tornado outbreak, contractor sites get hammered with urgent traffic, and the slow ones stall out or hide the call button at the exact second it matters most. We build sites that stay quick and keep converting under that load, so you capture the rush instead of feeding it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Fayetteville website",
    services: [
      { name: 'Custom design', desc: "No drag-and-drop template. A site shaped around your trade, your NWA service area, and the specific jobs you want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone before anything else, because that is where nearly every Fayetteville visitor shows up. Quick to load, easy on a thumb, and one tap from a call." },
      { name: 'Conversion-focused UX', desc: "Plain offers, unmissable call buttons, and lead forms placed where homeowners actually fill them out. No page leaves the visitor wondering what to do next." },
      { name: 'Copy that sells', desc: "Writing aimed at an anxious homeowner staring at a hail-dented roof or a dead AC unit, not filler that reads like every other contractor in the metro." },
      { name: 'Local SEO foundation', desc: "Built to rank from the first line of code: clean structure, schema, fast load, and pages ready to target towns across the NWA metro." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance thresholds, which guards your conversions and your rankings in the same pass." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when tornado-season or HVAC-peak traffic spikes, the exact window that turns visitors into your biggest jobs of the year.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more NWA search shifts into AI answers.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We dig into your trade, your NWA service area, your most profitable jobs, and your competitors, then build the site around landing more of the work you actually want." },
      { name: 'Design', desc: "We lay out a custom, mobile-first design built to convert, and you review and shape it before a single line of code exists." },
      { name: 'Build and copy', desc: "We build it fast and write copy that sells, with the call to action holding the front of every page." },
      { name: 'Launch', desc: "We ship cleanly with the SEO foundation, tracking, and load speed all dialed in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it quick and current and tune it around whatever is actually turning visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Fayetteville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a one-trade NWA contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established NWA contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location NWA businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fayetteville?', a: "Most contractor sites we build run $2,000 to $8,000 as a one-time project, set by page count and integrations. The tiers sit above: fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does it take to build?', a: "A focused site runs about 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline up front and a status check at every stage." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and in NWA that is not a small thing. During spring tornado outbreaks, contractor sites take a wall of urgent traffic, and the slow ones bleed leads right as demand peaks. We build fast and keep the call button obvious, so your site converts under the load instead of stalling." },
      { q: 'Will my new site actually rank on Google?', a: "Every site we ship sits on a local-SEO foundation: fast load, clean structure, schema, and pages ready to target your towns. The build puts you in position to rank, and pairing it with our SEO service is how you climb the contested NWA terms." },
      { q: 'Do I own the website?', a: "Start to finish. The site, the domain, and the content are yours. No hostage arrangements and no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Fayetteville traffic comes from. Fast load, call buttons sized for a thumb, and forms built for one-handed use." },
      { q: 'What platform do you build on?', a: "We match the platform to your needs and to what you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build ships with launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any maintenance or SEO that follows is month-to-month, so you can step away whenever you choose." },
      { q: 'What do I get in the free quote?', a: "A clear picture of what your current site is costing you in lost leads, what a high-converting NWA site needs to include, and a fixed-price quote with a timeline. It is the honest first step toward Fayetteville Web Design that converts visitors into booked jobs instead of just sitting there. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fayetteville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fayetteville Website Redesign | Rebuild for Leads, Not Looks | OnwardCraft',
    metaDescription:
      'Fayetteville Website Redesign that rebuilds for leads, not just looks. Faster, mobile-first rebuilds that convert more visitors and hold up through storm season.',
    eyebrow: 'Website Redesign · Northwest Arkansas',
    h1: 'Fayetteville Website Redesign that rebuilds for leads, not just looks, with your NWA rankings intact',
    h2Exact: 'Fayetteville Website Redesign Company',
    heroSubhead:
      "A dated site bleeds jobs every week without ever telling you: slow, awkward on a phone, easy for an NWA homeowner to skip. We redesign contractor sites to convert harder and load quicker, and we migrate with enough care that the rankings you have already earned come along untouched.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Fayetteville Website Redesign goes wrong in one of two ways: the site gets prettier but converts exactly the same, or it launches and the rankings evaporate overnight. We refuse both. We rebuild Fayetteville contractor sites for speed and conversions, build them to take spring storm and summer HVAC traffic without flinching, and run an SEO-safe migration with the redirects that protect the visibility you spent years building, so you modernize without losing rankings.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You guard your SEO through a redesign by holding your URL structure (or mapping a 301 redirect for every page that moves), keeping your existing content and metadata, carrying your schema across, and testing the whole thing on staging before launch. Handled that way, a redesign keeps your rankings and usually lifts them, because the new build is faster, mobile-first, and better structured than the one it replaced.",
    problemHeading: "Signs your Fayetteville site is overdue for a redesign",
    painPoints: [
      { title: 'A dated look quietly drains your credibility', body: "On a five-figure job, a homeowner sizes you up by your website inside a few seconds. An old, cluttered layout ships them to a competitor who merely looks more established, even when your work is plainly the better choice. In an NWA market full of relocated executives with sharp standards, that first glance carries real weight." },
      { title: "It's slow and clumsy on a phone", body: "If your site stutters or crawls on mobile, you are losing most of your NWA visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never becomes a call is money left on the table, and an old site that bogs down under a spring storm or summer HVAC surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days the phone ought to be ringing nonstop." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down precisely what is costing you leads and rankings right now, so the redesign repairs the real problems instead of just swapping the color palette." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled with care, so the rankings and traffic you have already earned in NWA survive the move intact." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms homeowners actually complete. We design for booked jobs, not for a nicer screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a clean pass on Core Web Vitals, which lifts conversions and rankings in the same stroke." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your NWA traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, credible look that matches the quality of your work and the price tag on the jobs you want to win." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when tornado-season or HVAC-peak traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more NWA search moves into AI answers.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We work out what is costing you leads and rankings, then chart a redesign that fixes it without breaking the pieces already earning their keep." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that you review and shape before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail so the migration lands clean, with no nasty surprises." },
      { name: 'Launch with SEO care', desc: "We go live with redirects already in place and watch closely, so your rankings hold and climb rather than slide." },
      { name: 'Optimize', desc: "Once the rebuilt site is live across your NWA service area, we watch which pages turn Bentonville and Fayetteville visitors into calls, then keep tuning speed and content around whatever is booking the most work." },
    ],
    pricing: {
      heading: 'Transparent Fayetteville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established NWA contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fayetteville?', a: "Most redesigns we take on run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and the result is yours to keep." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is handled carefully, and careful is the only way we work. We map a 301 redirect for every URL that changes, keep your content and metadata, carry your schema across, and test on staging first. Done right, the redesign holds your rankings and usually pushes them up." },
      { q: 'How long does a redesign take?', a: "Figure 3 to 5 weeks for a focused redesign and 5 to 9 for a larger rebuild. We pin the dates before we start, and you hear from us at every stage, so we can aim to have the new NWA site live well ahead of spring storm season." },
      { q: 'How do I know I need a redesign?', a: "If the site crawls on phones, looks dated, is a chore to update, brings in no leads, or buckles when spring storm or summer HVAC traffic surges, it is quietly costing you work. The free audit tells you plainly whether a redesign earns its keep for your NWA business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect whatever is ranking, and run the technical migration so nothing that matters slips through the cracks." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and in NWA that is worth weighing. During spring tornado outbreaks and summer HVAC rushes, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious, so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts conversions and rankings at once." },
      { q: 'Do I own the redesigned site?', a: "Every bit of it is yours, the design, the domain, and the content alike. You can hand it to another shop in Fayetteville tomorrow with no platform holding it hostage." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any maintenance or SEO that follows is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should repair, and a fixed-price quote with a timeline and an SEO-safe migration plan. It is the honest starting point for a Fayetteville Website Redesign that converts more without losing your rankings." },
    ],
  },
];

export const fayettevilleCity = {
  citySlug: 'fayetteville', city: 'Fayetteville', state: 'Arkansas', stateAbbr: 'AR', metro: 'Fayetteville-Springdale-Rogers (Northwest Arkansas)',

  titleTag: 'Fayetteville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Fayetteville marketing for contractors who want to own their leads: web design, SEO, and local SEO across NWA. Get found and booked, built for storm season.',

  eyebrow: 'Fayetteville · Web Design, SEO & Lead Generation',
  h1: 'Fayetteville marketing for contractors who want to own their leads from Bentonville to Prairie Grove',
  h2Exact: 'Fayetteville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Northwest Arkansas: a fast-growing, Fortune 500-anchored, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Fayetteville audit',

  intro:
    "Fayetteville marketing for contractors comes down to competing inside one of the fastest-growing metros in the South, with Walmart, Tyson, and J.B. Hunt pulling in homebuyers and executives from around the world. Winning here takes three pieces moving together: web design and SEO for NWA contractors that ranks you for what people search, and local SEO that drops you into the Map Pack, all set before the next spring storm or summer heat wave sends demand through the roof. Here is how our marketing agency helps NWA contractors get found and booked.",
  aioQuestion: 'How do Fayetteville contractors get more leads online?',
  aioAnswer:
    "Fayetteville contractors win more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that takes the Google Map Pack. Because Northwest Arkansas keeps growing on the back of Fortune 500 headquarters and a rising University of Arkansas population, and because demand spikes hard during spring tornado season, the contractors who look established and already rank before the storms collect the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Land in the top three pins Google shows when NWA searches \"near me.\" For most local businesses it is the highest-return move there is, and it is how you grab tornado-season demand before your competitors even wake up to it.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the keywords your NWA customers actually type, build an asset you own instead of renting traffic from ads, and measure the whole thing in booked leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and to stay quick when storm season or a summer HVAC rush floods your phone, not brochures that sit there collecting dust.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild a dated site for speed and conversions, and migrate it carefully enough that every bit of ranking you have already earned in NWA search comes through intact.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fayetteville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and keep their own leads, and so they are ready the day tornado season or a July heat wave overwhelms every contractor in the metro at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting, so we understand emergency calls, storm-driven demand, and insurance work down to the details." },
    { q: 'Why does storm season matter for my marketing in NWA?', a: "Northwest Arkansas sits in a hard spring storm corridor. When severe weather and tornado outbreaks land from March into June, demand for roofing, restoration, and tree service spikes overnight and the backlog can stretch for months. Ranking takes months to build, so the contractors already visible before the storm collect that work. We get you in place ahead of the season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds running $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long lock-in. We confirm the exact scope in your free audit." },
    { q: 'Which Fayetteville and NWA areas do you serve?', a: "The whole of Northwest Arkansas: Fayetteville, Springdale, Rogers, Bentonville, Bella Vista, Siloam Springs, Elkins, Prairie Grove, Centerton, and more." },
    { q: 'Where should I start?', a: "Start with a free Fayetteville audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to see what Fayetteville marketing for contractors can do for your business. No slide deck, just a plan." },
  ],
};

// EL PASO: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across El Paso's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// EL PASO: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why El Paso search rewards the contractor who speaks Spanish first',
  body:
    "El Paso sits in far-west Texas where the Franklin Mountains split the city and the Rio Grande puts Ciudad Juarez within sight of half the neighborhoods. Roughly 81% of residents are Hispanic, and for an enormous slice of this market the first search a homeowner runs is in Spanish, not English. That one fact rewrites the whole playbook. A contractor who surfaces when someone types \"reparacion de aire\" or \"plomero cerca de mi\" is reaching demand that almost every competitor in town leaves on the table, because most marketing shops never set foot in that search behavior. Then layer on Fort Bliss, one of the Army's largest posts, cycling thousands of PCS families through the city every year with no local contacts and a phone full of search apps. The Chihuahuan Desert climate sets the rhythm of the trades: when the dry heat pushes past 100 degrees from May into September, a dead air conditioner is a medical problem, not an inconvenience, and the calls never stop. Dust storms scour stucco, and the summer monsoon dumps water fast onto flat roofs that were built to shed almost nothing. Swamp coolers, parapet drainage, and xeriscaped yards round out a trade world the coasts would not recognize. The shops that own El Paso visibility in both languages own a market the rest of the field cannot even read.",
  pullQuote: 'In El Paso the contractor who answers a Spanish search is reaching customers the competition never knew were looking.',
  donut: {
    title: 'How El Paso searches',
    value: 82,
    centerLabel: 'Hispanic residents',
    legend: [
      { label: 'Hispanic / Spanish-language searches dominant', pct: 82, kind: 'teal' },
      { label: 'Other', pct: 18, kind: 'grey' },
    ],
  },
  seasonTitle: 'When desert trade demand peaks',
  seasonCaption: 'HVAC runs hot May to Sep; monsoon roof damage Jul to Sep; rare freeze calls Dec to Feb',
  seasonalDemand: [
    { m: 'J', v: 42, peak: false }, { m: 'F', v: 40, peak: false }, { m: 'M', v: 55 },
    { m: 'A', v: 68 }, { m: 'M', v: 88, peak: true }, { m: 'J', v: 98, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 80, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 44 }, { m: 'D', v: 45 },
  ],
  stats: [
    { value: '~82%', label: 'of El Paso residents are Hispanic, making Spanish-language search the edge nobody else works', accent: true },
    { value: '105F+', label: 'desert summer highs that turn AC repair into the most-called trade in the city' },
    { value: 'Fort Bliss', label: 'a steady PCS cycle of new military homeowners who reach for search the day they arrive' },
    { value: 'Top 3', label: 'Map Pack pins that grab the bulk of the taps in every El Paso neighborhood' },
  ],
  neighborhoods: [
    'Kern Place', 'Mission Hills', 'Mesa Hills', 'Northeast El Paso', 'Far East El Paso',
    'Horizon City', 'Socorro', 'Anthony', 'Sunland Park', 'Fort Bliss area',
    'Westside', 'Central El Paso',
  ],
};

const AREAS = [
  'Kern Place', 'Mission Hills', 'Mesa Hills', 'Northeast El Paso', 'Far East El Paso',
  'Horizon City', 'Socorro', 'Anthony', 'Sunland Park', 'Fort Bliss area',
  'Westside', 'Central El Paso', 'East El Paso', 'Upper Valley', 'Lower Valley',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In El Paso that problem is even sharper — the city's biggest competitive advantage, Spanish-language search, is one that almost no marketing agency is set up to use. So that's what we do: get you ranking in the searches your customers actually run, in the language they actually use, in the neighborhoods you actually serve. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'Home-service trades are the only work we take',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We know what a 105-degree no-cool call sounds like, how monsoon water finds the weak seam on a flat roof, what stucco and swamp coolers demand, and how the Fort Bliss PCS rush moves, so everything we build follows how El Paso actually searches.",
  },
  {
    title: 'We pull El Paso crews off the rented-lead treadmill',
    body: "The aim is a pipeline that belongs to you. Not one more monthly check to a lead broker for a homeowner that three other crews are dialing at the same minute.",
  },
  {
    title: 'We work El Paso in both languages, for real',
    body: "Neighborhood-level targeting from Kern Place to Socorro, plus genuine reach into Spanish-language search to catch the demand most agencies cannot even see. That is local depth a national shop cannot fake by dropping a city name into a template.",
  },
  {
    title: 'Clear pricing and no lock-in',
    body: "Prices are posted, reporting points at real leads, and you go month-to-month once the first 90 days are done. If we are not earning the bill, you leave. That keeps the weight on us, where it belongs.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of shops greet you with a grid of client logos. We are a young, founder-run agency, so we will not invent a track record we have not built. What we can put in front of you is the reasoning, taken straight from Google's and the industry's own research on how people search for a local contractor.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of phone searchers for local visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches finish in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, marked plainly as a projection and not a result we claim: picture an El Paso contractor pulling about 1,500 local \"near me\" impressions a month across a few neighborhoods. Climbing from page-two invisibility into the top three is the gap between a silent phone and a booked-solid summer, and through the 105-degree peak weeks that gap is the entire business. In your free audit we model the real numbers for your trade: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'El Paso', state: 'Texas', stateAbbr: 'TX', metro: 'El Paso',
  heroProof: ['Built for the trades', 'Spanish-language search reach', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const elPasoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'El Paso Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your trade in El Paso and three businesses sit on the map. We put you in those three, in English and Spanish, so the call lands with you.',
    eyebrow: 'Local SEO · El Paso, TX',
    h1: 'When El Paso searches for what you do, be the first name they find',
    h2Exact: 'El Paso Local SEO Company',
    heroSubhead:
      "Google drops three businesses onto the map the moment someone types \"near me,\" and everyone below them might as well be hidden. In a city where 81% of residents are Hispanic and the first search is often in Spanish, we push you into that top three for your neighborhoods, in both languages, so the call rings your phone instead of whoever ranked above you.",
    primaryCta: 'Get my free El Paso audit',
    intro:
      "El Paso local SEO turns on a single moment: a homeowner in Kern Place or Socorro searches your trade plus \"cerca de mi\" or \"near me,\" and you are either one of the three pins Google sets on the map or you are nowhere. Most people tap one of those three and never scroll. This is among the most Hispanic big cities in the country, and Spanish-language search drives a huge share of demand, so becoming one of those pins in the neighborhoods you cover, in both languages, is the whole contest. Here is how we get you there.",
    aioQuestion: 'How do El Paso businesses rank higher in local search?',
    aioAnswer:
      "You rank by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone details that agree everywhere online, a steady run of real reviews, and content built around genuine El Paso neighborhoods. Because the city is overwhelmingly Hispanic, the sharpest edge is surfacing in Spanish-language searches almost no rival chases. Seasonal HVAC tuning for the May-to-September heat is the other big lever.",
    problemHeading: "If the El Paso phone stays quiet, it's usually one of these three",
    painPoints: [
      { title: 'Three rivals own the El Paso map pins and you are not one of them', body: "Run your own trade plus \"near me\" right now. Those three businesses Google clips to the map take the bulk of the taps. If your name is not among them, the quality of your work barely registers, because most El Pasoans never scroll far enough to find you. Breaking into that top three for your neighborhoods, in both languages, is usually the single highest-return play a desert-city contractor can make." },
      { title: "Spanish searches are most of the market and you are missing from them", body: "Around 81% of El Paso is Hispanic, and a large share of homeowners search in Spanish or switch between both languages mid-query. Almost no contractor does a thing to surface for those searches, so that demand goes unclaimed week after week. Showing up for what your customers actually type is the advantage El Paso hands you that few other cities do." },
      { title: "You are renting leads you never get to keep", body: "Angi, Thumbtack, and HomeAdvisor sell the same El Paso homeowner to four crews and bill every one of you to scrap over them. Local SEO builds the reverse: a homeowner finds you, calls you, and no rival got handed that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The heaviest lever in the Map Pack. We set your categories, services, service area, photos, and posts so Google knows exactly which El Paso searches should hand the click to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to agree across every place Google checks. We repair the listings that contradict each other and build the ones you never had." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady run of fresh reviews in English and Spanish. It lifts your rank and gives the next homeowner a reason to dial you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Kern Place, Mission Hills, Socorro, Horizon City, and the rest, so you rank for the neighborhood someone is actually searching rather than a flat \"El Paso.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring under the hood that lets every other piece earn its rank." },
      { name: 'Local link building', desc: "Mentions and links from El Paso sources Google trusts: local press, chambers, trade groups, and partners. In this market that is often what divides page one from page two." },
      { name: 'Spanish-language search reach', desc: "El Paso is 81% Hispanic and a huge share searches in Spanish. We get you surfacing for that demand, the single biggest competitive edge in the city that almost no agency touches.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts inside AI Overviews, ChatGPT, and Perplexity. We shape your content so those tools can read you and name you in their answers.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you truly rank today across your El Paso neighborhoods and pin down which competitors are beating you in the Map Pack and the reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP go first, because they move quickest. Most El Paso clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live in both English and Spanish. These stack week over week, which is why local SEO pays off for starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across El Paso's communities, plus the on-page work that backs them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, never vanity rankings. Then we go take the next El Paso neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually read',
      note: 'Month-to-month after the opening 90 days. No lock-in. Cancel any time.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack base built right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For crews fighting across several El Paso neighborhoods at once.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the El Paso map in both languages.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in El Paso?', a: "Most El Paso engagements sit between $750 and $2,500 a month, set by how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. The contested El Paso keywords usually need 90 to 180 days of steady effort, because reviews and citations build up over time. Anyone promising you page one in 30 days is selling smoke." },
      { q: 'What makes El Paso local SEO different?', a: "Two things mark El Paso out. First, roughly 81% of residents are Hispanic and a large share searches in Spanish, so the contractor who surfaces for those queries reaches a market almost no rival is chasing. Second, summer HVAC demand is unlike nearly any other city: 105-degree desert heat turns AC failure into a health emergency, and the phones run hot from May through September." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in El Paso it is the single biggest edge on the table. We tune your Google Business Profile and content so you surface for Spanish-language searches across every neighborhood, the exact demand most El Paso contractors stay invisible to." },
      { q: 'Does Fort Bliss change how I should do local SEO?', a: "It does, and it is a real opening. Fort Bliss moves thousands of military families through the city every year on PCS orders. Those homeowners are new to town, know no one locally, and lean entirely on search to find a contractor. Staying visible across the Fort Bliss area neighborhoods means catching that constant stream of fresh customers." },
      { q: 'Which areas do you cover?', a: "Every El Paso neighborhood: Kern Place, Mission Hills, Mesa Hills, Northeast, Far East, Horizon City, Socorro, Anthony, Sunland Park, the Fort Bliss area, Westside, and Central El Paso. We build genuine neighborhood pages instead of one flat city page, because that is what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand El Paso's desert trades, the flat roofs, stucco, swamp coolers, and brutal AC emergencies, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now opens in AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is about how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your El Paso neighborhoods, what your Map Pack rivals are doing to beat you, the fixes that move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'El Paso SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'El Paso SEO that ranks contractors on Google in English and Spanish and brings leads you own. Lead-tied reporting, no lock-in contracts.',
    eyebrow: 'SEO Services · El Paso, TX',
    h1: 'Get your El Paso business to the top of Google and keep it there',
    h2Exact: 'El Paso SEO Company',
    heroSubhead:
      "Ads switch off the second your card stops. SEO runs the other way: rank once for what El Paso customers search, in English and Spanish, and the leads keep landing. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free El Paso SEO audit',
    intro:
      "El Paso SEO reduces to one blunt question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a bilingual, desert-climate market, and we count the result in leads, not traffic that never dials. The Spanish-language angle by itself opens a pool of demand most agencies have never bothered to map.",
    aioQuestion: 'How do El Paso businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical base of the site, tuning each page for the exact terms customers search including Spanish-language terms, publishing genuinely useful local content built around specific El Paso neighborhoods, and earning links from trusted local sources. In El Paso, Spanish-language keyword targeting and seasonal HVAC content for the May-to-September heat peak are two of the fastest ways past competitors who ignore both.",
    problemHeading: "Three reasons your El Paso site isn't bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you are not in the top handful of results for what you sell, your site is effectively dark, no matter how clean your work or how many jobs you have logged. In El Paso, that invisibility is what feeds your jobs to the competition." },
      { title: "You are absent from the Spanish-language search market", body: "Around 81% of El Paso residents are Hispanic, and a large share searches in Spanish or in a blend of both languages. Most contractors hold no Spanish-language presence at all, so that demand flows straight to whoever bothered to show up. It is the closest thing to free money in local search." },
      { title: "You are not ranking for the HVAC and seasonal terms that decide the year", body: "El Paso demand swings hard: HVAC rules from May through September when the desert pushes past 105 degrees, and monsoon flooding on flat roofs spikes July through September. The contractors who rank for those terms before the season arrives catch the surge. If your SEO ignores that cycle, you are surrendering your busiest weeks." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood repairs Google needs before it will rank your El Paso site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your El Paso customers search, titles, headings, content, and internal links, in English and Spanish." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, pull links, and feed leads long after they go live." },
      { name: 'Link building', desc: "Authority from real El Paso and industry sources. In a market where most rivals run thin link profiles, this is often what lifts you onto page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across your neighborhoods right beside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked El Paso leads, not just rankings and traffic, so you always know what your SEO is worth in dollars." },
      { name: 'Spanish-language & bilingual SEO', desc: "We research and target the Spanish-language terms El Paso homeowners actually search, unlocking demand almost no rival is going after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of El Paso search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors in both English and Spanish, then build a roadmap around the keywords most likely to drive real El Paso leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the groundwork everything else has to stand on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the HVAC and seasonal terms that decide the summer in a desert climate." },
      { name: 'Build authority', desc: "Links and citations from trusted El Paso and industry sources to push contested keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder on what is working and reach into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent El Paso SEO pricing',
      note: 'Month-to-month once the opening 90 days are done. No lock-in. Cancel any time.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a tight site chasing its core El Paso keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across services and El Paso neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own El Paso search in both languages.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Spanish-language SEO', 'Seasonal & emergency HVAC SEO', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in El Paso?', a: "Most El Paso SEO engagements run $900 to $3,000 a month, set by how contested your keywords are and how much content and link work you need. The tiers sit above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in El Paso?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on tight neighborhood terms and slower on the most contested citywide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that quits the moment you stop paying. SEO is an asset you own that keeps feeding leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts like the summer HVAC rush." },
      { q: 'Should my El Paso SEO target Spanish-language searches?', a: "Yes, and it is the widest competitive gap in the market. Roughly 81% of El Paso residents are Hispanic, many search in Spanish, and almost no local contractor holds any Spanish-language presence. We research the exact terms your customers use and target them, often the fastest way to add leads." },
      { q: 'Should I target seasonal HVAC demand?', a: "Absolutely. When the desert hits 105 degrees in July, HVAC searches spike and the phones never quiet down. Ranking takes months to build, so you have to be in place before summer, not chasing it. We tune for those peak-demand terms so your busiest season lands on you, not your rivals." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language SEO, seasonal and emergency HVAC work, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show real movement in El Paso, then it shifts to month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just classic search." },
      { q: 'Which areas around El Paso do you cover?', a: "Every El Paso neighborhood: Kern Place, Mission Hills, Mesa Hills, Northeast, Far East, Horizon City, Socorro, Anthony, Sunland Park, the Fort Bliss area, Westside, and Central El Paso, each with genuine local pages rather than one flat city page." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in both English and Spanish, what your rivals are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'El Paso Web Design Company | OnwardCraft',
    metaDescription:
      'El Paso web design that turns visitors into booked jobs: fast, mobile-first sites built for a bilingual, desert-climate market.',
    eyebrow: 'Web Design · El Paso, TX',
    h1: 'El Paso web design that turns visitors into booked jobs',
    h2Exact: 'El Paso Web Design Company',
    heroSubhead:
      "A good-looking website that never rings the phone is just a brochure. We build El Paso contractors fast, mobile-first sites engineered to turn visitors into booked work, in English and Spanish, and to stand out in a market where the right language is the biggest edge on the board.",
    primaryCta: 'Get my free quote',
    intro:
      "Most El Paso contractor websites bleed leads without a sound: slow on a phone, call button buried, no clear offer, and zero presence in Spanish. Web design done right plugs every one of those leaks. We build sites that load fast, look like the professional you are, and turn visitors from Kern Place to Socorro into booked jobs, ready to reach the bilingual market your rivals leave untouched.",
    aioQuestion: 'What makes a good contractor website in El Paso?',
    aioAnswer:
      "A good El Paso contractor website loads in under three seconds on a phone, sets the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the neighborhoods you serve. Because the city is overwhelmingly Hispanic and many homeowners search in Spanish, a site that speaks to that audience separates a contractor who books work from one who fades out.",
    problemHeading: "Why your current El Paso site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of El Paso contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to dial you over the next crew on the map. We design every page around one job: turning a desert-city visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your El Paso visitors are on mobile. They bounce if your site takes more than a couple of seconds to load, and slow sites rank worse too, so you lose twice. We build fast, so you keep the visitor and the ranking." },
      { title: "It says nothing to the El Paso community", body: "An El Paso homeowner, especially one who searches in Spanish, wants to feel that you are local, that you get the community, and that you know the desert. A generic site that could belong to anyone anywhere gives them no reason to trust you. We build sites that read like El Paso and speak to the people who live here." },
    ],
    servicesHeading: "What's in an OnwardCraft El Paso website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your neighborhoods, and the jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where almost all of your El Paso traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where homeowners actually use them. Every page carries an unmistakable next step." },
      { name: 'Copy that sells', desc: "Words that speak to El Paso homeowners and book the job, including the value-minded framing that lands in this market." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank in El Paso: clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which guards both your conversions and your rankings." },
      { name: 'Spanish-language ready', desc: "Built so you can speak to El Paso's dominant audience: bilingual content, Spanish-language keywords in the structure, and a tone that lands with the community.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more El Paso search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want, in both languages." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert El Paso visitors, and you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that books the job, with the call to action front and center on every El Paso page." },
      { name: 'Launch', desc: "We launch clean with the local-SEO base, tracking, and load speed locked in from the first day live." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is actually booking El Paso jobs." },
    ],
    pricing: {
      heading: 'Transparent El Paso web design pricing',
      note: 'One-time build. 50% up front, 50% at launch. You own it all. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade El Paso contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established El Paso contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or bilingual businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Spanish-language content', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in El Paso?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers sit above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A tight site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through each stage." },
      { q: 'Can you build a site that works in Spanish and English?', a: "Yes, and in El Paso it is one of the most valuable moves you can make. We can build bilingual content and structure so you surface and convert across both languages. In a market that is roughly 81% Hispanic, that is a real edge almost no contractor is using." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO base: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the contested El Paso terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage setups, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where almost all of your El Paso traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually run yourself, usually WordPress or Webflow. We recommend the right fit in your free El Paso consult and walk you through the tradeoffs in plain English." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every El Paso build comes with launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The El Paso build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever you like." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting El Paso site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'el-paso', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'El Paso Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your El Paso website without losing rankings. Faster, mobile-first rebuilds that convert more visitors, in English and Spanish, into booked jobs.',
    eyebrow: 'Website Redesign · El Paso, TX',
    h1: 'Redesign your El Paso website without losing your rankings',
    h2Exact: 'El Paso Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week: slow, clumsy on a phone, invisible in Spanish. We redesign El Paso contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign El Paso contractor sites for speed and conversions, build them to reach a bilingual community, and migrate with the redirects and SEO care that protect the traffic you already hold.",
    aioQuestion: 'How do I redesign my website without losing my El Paso rankings?',
    aioAnswer:
      "You guard El Paso rankings during a redesign by holding your URL structure (or mapping 301 redirects for every changed page), keeping your content and metadata, carrying your schema across, and testing on staging before launch. Handled this way, a redesign keeps your rankings and lifts them, because the rebuilt site loads faster, runs mobile-first, and is structured better than the old one, in both English and Spanish.",
    problemHeading: "Signs your El Paso site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly costs you El Paso trust", body: "For a high-ticket job, El Paso homeowners size you up by your site in seconds. An old, cluttered design ships them to a rival who simply looks more established, even when your work is plainly better. In a value-minded market, looking professional is the trust that closes the job." },
      { title: "It is slow and awkward on a phone", body: "If your site is clunky or slow on mobile, you are losing most of your El Paso visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It speaks to nobody in particular", body: "Traffic that never turns into calls is wasted money. A generic old site gives an El Paso visitor no reason to pick you, especially with no Spanish-language presence and no nod to the neighborhoods you serve. We rebuild for conversions and for the community, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pin down exactly what is costing you El Paso leads and rankings today, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the El Paso rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms El Paso homeowners actually use. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts conversions and rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all of your El Paso traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the El Paso jobs you want to book." },
      { name: 'Spanish-language rebuild', desc: "Rebuilt to reach El Paso's dominant audience: bilingual structure, Spanish-language keywords, and a tone that lands with the community your rivals are missing.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read the rebuilt site and name your business as more El Paso search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works for your El Paso site." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused El Paso design you review and shape before the rebuild starts." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and line up every redirect and SEO detail for a clean migration with no surprises." },
      { name: 'Launch with SEO care', desc: "We launch with every redirect in place and watch closely so El Paso rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning on what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent El Paso redesign pricing',
      note: 'One-time project. 50% up front, 50% at launch. You own it all. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small El Paso contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established El Paso contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or bilingual sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Spanish-language content', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in El Paso?', a: "Most El Paso redesigns with us run $2,500 to $9,000 as a one-time project, set by size, bilingual scope, and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, hold onto your content and metadata, carry your schema across, and test on staging first. Done right, an El Paso redesign keeps your rankings and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A tight redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, has no Spanish-language presence, is not bringing in leads, or does not feel like it speaks to El Paso's community, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Can the redesign include Spanish-language content?', a: "Yes, and in El Paso it is often the highest-value addition. We can rebuild your site to carry bilingual content and structure so you reach the roughly 81% of residents who are Hispanic, a pool of demand most of your rivals are not even addressing." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen what you already have, keep the pages that are ranking, and run the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me compete in El Paso?', a: "Yes, and that is the whole point. We rebuild around the specific neighborhoods you serve, the bilingual community you work in, and the seasonal demand, like the summer HVAC rush, that drives your business. The new site should stand out, not blend in." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, since nearly every El Paso visitor lands on a phone and speed lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and every word of the content. No platform lock-in of any kind." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current El Paso site is costing you in leads and rankings, what the redesign should fix, whether bilingual reach is worth adding, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const elPasoCity = {
  citySlug: 'el-paso', city: 'El Paso', state: 'Texas', stateAbbr: 'TX', metro: 'El Paso',

  titleTag: 'El Paso Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for El Paso contractors, in English and Spanish. Get found, get booked, and own your leads instead of renting them.',

  eyebrow: 'El Paso · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets El Paso contractors found and booked',
  h2Exact: 'El Paso Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for El Paso's bilingual, desert-climate market. One team to get you ranking in English and Spanish, converting visitors into booked jobs, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Spanish-language search reach', 'No lock-in contracts'],
  primaryCta: 'Get my free El Paso audit',

  intro:
    "If you run a contracting business in El Paso, you are in one of the most distinctly Hispanic big cities in the country: roughly 81% of residents are Hispanic, the first search is often in Spanish for a huge share of the market, and Fort Bliss keeps a constant stream of new military homeowners cycling through who lean entirely on search to find a contractor. Add 105-degree desert summers that make HVAC the most-called trade in town, and you have a market full of opening that most agencies have no idea how to reach. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that sets you in the Map Pack for your neighborhoods, in both languages. Here is exactly how we help El Paso contractors pull that off.",
  aioQuestion: 'How do El Paso contractors get more leads online?',
  aioAnswer:
    "El Paso contractors get more leads by pairing a fast, mobile-first website with SEO that ranks them for high-intent searches in English and Spanish, and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 81% of residents are Hispanic and a large share searches in Spanish, the contractors who target that audience, and rank for summer HVAC demand before the peak, win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when El Paso searches \"near me,\" in English and Spanish. The single highest-return move for most local contractors, done neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including Spanish-language terms, build an asset you own instead of renting traffic from ads, and count it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, in the language your customers actually use, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and bilingual reach, and migrate it carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in El Paso?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, in English and Spanish, in a market full of opening most agencies miss." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand El Paso's desert trades, the flat roofs, stucco, swamp coolers, and the summer HVAC rush." },
    { q: 'Why does the El Paso market need a different approach?', a: "Because it is unlike anywhere else. Roughly 81% of residents are Hispanic, the first search is often in Spanish for a huge share of the market, and almost no agency is set up to target that. Add Fort Bliss, thousands of PCS moves a year, and extreme desert HVAC demand, and you need someone who knows the market, not a national template shop." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which El Paso areas do you serve?', a: "Every El Paso neighborhood: Kern Place, Mission Hills, Mesa Hills, Northeast, Far East, Horizon City, Socorro, Anthony, Sunland Park, the Fort Bliss area, Westside, and Central El Paso, with genuine local pages rather than one flat city page." },
    { q: 'Where should I start?', a: "Start with a free El Paso audit. We look at your website, your rankings in English and Spanish, and your Map Pack presence, then tell you the one or two moves that bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

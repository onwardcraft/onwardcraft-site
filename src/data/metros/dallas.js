// Dallas-Fort Worth metro x service local landing pages + city hub.
// Renders via /[city]/[service]/ (service entries) and /[city]/ (hub).
// BUILD with the `onward-local-page` skill. SPEC mirrors the Miami gold standard
// in ../locations.js and ../cities.js exactly.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF) are defined once
// and reused across that city's service pages. They describe the same city, so
// sharing is correct and DRY. Service-specific blocks are authored per entry.
// PRICING is fixed to the founder-confirmed Dallas range.
//
// Dallas's local angle: DFW is hail and storm alley. North Texas leads the nation
// in hail claims; the spring outbreak season (Apr-Jun, May worst) drives massive
// roofing, restoration, and insurance-claim demand. Secondary lever: a large
// bilingual (Spanish) market the competition mostly ignores.

const MARKET = {
  heading: 'Why winning the Dallas-Fort Worth map is harder than almost anywhere',
  body:
    "Roughly 6.7 million people call Dallas-Fort Worth home, and the metro keeps adding more every month, which means the contractor field here is deep and getting deeper. Two forces set DFW apart from anywhere else. The first is hail. North Texas tops the country in hail claims season after season, and the 2023 outbreak alone saddled the metro with billions in insured losses. The moment a cell tears across Plano or Arlington, searches for roofing, restoration, and exterior repair explode, and the contractors already sitting in the top three answer that wave before anyone else dials in. The second force is language: a large slice of the metro searches in Spanish, and hardly any agency builds to capture both. Lock down storm season and rank in Spanish, and you leapfrog rivals double your size.",
  pullQuote: 'The day the next hailstorm crosses DFW, the contractors holding the top three are booked solid before you reach for your second cup.',
  donut: {
    title: 'How Dallas searches',
    value: 41,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic / Spanish', pct: 41, kind: 'teal' },
      { label: 'Other', pct: 59, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail and storm season (Apr-Jun, secondary Sep-Nov)',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 38 }, { m: 'M', v: 58 },
    { m: 'A', v: 82, peak: true }, { m: 'M', v: 96, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 64 }, { m: 'A', v: 58 }, { m: 'S', v: 68, peak: true },
    { m: 'O', v: 66, peak: true }, { m: 'N', v: 54, peak: true }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '6.7M+', label: 'people across the Dallas-Fort Worth metro' },
    { value: '~41%', label: 'Hispanic, a large search market most agencies skip', accent: true },
    { value: 'Apr-Jun', label: 'hail and storm season, when roofing demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Uptown', 'Downtown Dallas', 'Oak Cliff', 'Lakewood', 'Plano',
    'Frisco', 'McKinney', 'Arlington', 'Irving', 'Garland',
    'Richardson', 'Grand Prairie', 'Las Colinas', 'Allen', 'Mesquite',
  ],
};

const AREAS = [
  'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Garland',
  'Frisco', 'McKinney', 'Grand Prairie', 'Mesquite', 'Richardson',
  'Carrollton', 'Allen', 'Denton', 'Grapevine',
];

const FOUNDER =
  "Here is the honest reason OnwardCraft exists. I got tired of watching sharp DFW contractors mail Angi and HomeAdvisor a few grand every month for leads that three rivals down the road bought the same afternoon. Rented leads never build a business; they just rent you a seat at someone else's auction. So our entire job is simple: get you ranking and converting for the work you actually want, across the suburbs you actually drive to, with leads that belong to you and nobody else. No year-long handcuffs either. If the needle is not moving, you show us the door.";

const WHY = [
  {
    title: 'Trades are the only thing we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, and general contracting. We live inside hail season, 2am emergency calls, and insurance paperwork, so every page we build mirrors how DFW homeowners actually search for help.",
  },
  {
    title: 'We pull you off the rented-lead treadmill',
    body: "The target is a pipeline you own outright. Not one more monthly check to a broker reselling the same Frisco homeowner to you and three competitors at once.",
  },
  {
    title: 'We genuinely know this metro',
    body: "Hail-driven demand, suburb-by-suburb targeting from Plano to Arlington, and Spanish-language optimization. None of it survives a national agency dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices on the page, reporting tied to real leads, month-to-month once the first 90 days are up. If we stop earning it, you walk. That keeps the pressure exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Most agencies open with a grid of client badges. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we will hand you is the why behind all of this, pulled straight from Google's own data and the industry's research on how people search close to home.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Picture this, and read it as a clearly labelled projection rather than a result we are claiming: a DFW roofing contractor pulling somewhere near 2,000 local \"near me\" impressions a month, with that figure jumping the week hail rolls in. Climbing out of page-two invisibility into the top three is the difference between riding that storm wave and watching a rival book every call from it. During your free audit we model the actual figures for your shop: your rankings, your search volume, and a straight 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Dallas', state: 'Texas', stateAbbr: 'TX', metro: 'Dallas-Fort Worth',
  heroProof: ['Built for the trades', 'Ready for hail season', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const dallasLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Dallas Local SEO Company | Map Pack | OnwardCraft',
    metaDescription:
      'Dallas Local SEO that pins your business to the Google Map Pack, so the calls from hail season and every "near me" search land with you first.',
    eyebrow: 'Local SEO · Dallas-Fort Worth',
    h1: 'Dallas Local SEO that puts you first on the map when homeowners search',
    h2Exact: 'Dallas Local SEO Company',
    heroSubhead:
      "Google pins exactly three businesses to the map on a \"near me\" search, and everyone underneath them is invisible. We move you into that top three, so when the next cell hits Plano or Arlington, the homeowner taps your number instead of whoever happened to rank first.",
    primaryCta: 'Get my free Dallas audit',
    intro:
      "Dallas Local SEO is a street fight, and winning the Google Map Pack is the whole prize. The metro is enormous, it keeps growing, and it sits dead center in hail alley, so demand for roofing and restoration can double in the days after a storm. A homeowner in Frisco or Oak Cliff runs a \"near me\" search, thumbs one of the three businesses Google pinned to the map, and never scrolls past them. Becoming one of those three is the entire contest, and building it is exactly what our local SEO services do.",
    aioQuestion: 'How do Dallas businesses rank higher in local search?',
    aioAnswer:
      "Ranking comes down to four things done right: a Google Business Profile tuned to the services and suburbs you want, name-address-phone listings that match everywhere Google checks, a steady stream of real reviews, and local content for the neighborhoods you cover. Dallas is crowded and storm-prone, so the winners look established, reply fast, and are already ranked the day a hailstorm sends demand vertical.",
    problemHeading: "A quiet phone in DFW almost always traces to one of these three",
    painPoints: [
      { title: 'Rivals own all three spots on the map', body: "Run a search for your own trade plus \"near me\" right now. Those three businesses Google staples to the map collect the lion's share of the clicks. If your name is not among them, the quality of your work barely registers, because most of DFW never scrolls far enough to find you. Cracking that top three is usually the single highest-return move a Dallas contractor can make." },
      { title: "You keep buying leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell one Dallas homeowner to four contractors, then charge every one of you to scrap over them. It is a hamster wheel. Local SEO builds the reverse: a homeowner finds you, calls you, and no competitor got the same lead. Bit by bit you stop renting and start owning." },
      { title: "You are flat-footed when the hail lands", body: "The instant a storm crosses DFW, \"roof repair near me\" searches spike overnight. Stuck on page two, you watch that entire surge route to the contractors already in the Map Pack. Being ranked before the sky opens up is what separates a booked spring from a silent one." },
    ],
    servicesHeading: 'What it actually takes to rank you here',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We sharpen your categories, services, service area, photos, and posts so Google knows precisely which Dallas searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google looks. We repair the listings that contradict each other and build the ones you are missing entirely." },
      { name: 'Reviews that keep arriving', desc: "A simple system that converts finished DFW jobs into a steady drip of fresh reviews. It lifts your ranking and pushes more homeowners to actually dial." },
      { name: 'Neighborhood pages', desc: "Genuine pages for Plano, Frisco, Arlington, Irving and the rest, so you rank for the exact suburb a homeowner typed, not a generic \"Dallas\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the wiring underneath that lets everything visible above it actually rank." },
      { name: 'Local link building', desc: "Mentions and links from DFW sources Google already trusts, like regional press, trade associations, and partners. In a market this thick, that is often the gap between page one and page two." },
      { name: 'Storm-season readiness', desc: "We get you ranked and your profile primed ahead of hail season, so the moment \"roof repair near me\" spikes, that flood of calls lands on you.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of \"near me\" research now opens in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We pin down where you truly rank today across your DFW service areas and name the competitors beating you, plus the exact reasons they are winning." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first because they move quickest. Most Dallas contractors see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is precisely why ranking before storm season beats scrambling once it arrives." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages from Plano to Oak Cliff, backed by the on-page work that makes them stick." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation solid.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors battling across several DFW suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want the whole metro, primed for storm season.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual / Spanish optimization', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Dallas?', a: "Most Dallas engagements land between $750 and $2,500 a month, set by how many suburbs and keywords you are chasing and whether you want bilingual work. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope during your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move within a few weeks. The competitive Dallas keywords usually need 90 to 180 days of steady work, because reviews and citations build on each other over time. Anyone promising page one in 30 days in a metro this crowded is selling smoke." },
      { q: 'What makes Dallas local SEO different from regular SEO?', a: "Three things. It is storm-driven, so roofing and restoration ride sharp hail-season spikes your presence has to be ready for. It is massive and competitive, so trust signals like reviews and matching listings carry extra weight. And a big share of searches happen in Spanish, a lane most agencies never touch." },
      { q: 'Can local SEO help me catch DFW hail season?', a: "That is one of the strongest reasons to start early. North Texas leads the nation in hail claims, and \"roof repair near me\" spikes the second a storm hits, generally April through June. If you are already in the top three when that surge breaks, the calls fall to you. Wait for the storm to begin and you are months behind the contractors who did not." },
      { q: 'Which areas do you cover?', a: "All of Dallas-Fort Worth and the suburbs ringing it: Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson, Allen, Grand Prairie and beyond. We build real neighborhood pages rather than one catch-all Dallas page, because that is what actually ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance jobs, and we shape your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research starts inside AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an opening 90 days because that is roughly how long local SEO needs to show real movement. After that it runs month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the brokers less because the work is already finding you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your DFW service areas, what your Map Pack competitors are doing to outrank you, the fixes that move you fastest, and a realistic 90-to-180-day Dallas Local SEO plan with the numbers run for your shop. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Dallas SEO Company | OnwardCraft',
    metaDescription:
      'Dallas SEO that ranks contractors on Google, brings in leads you own, and gets you found the moment hail season hits. Revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Dallas-Fort Worth',
    h1: 'Dallas SEO that puts your business at the top of Google and holds it there',
    h2Exact: 'Dallas SEO Company',
    heroSubhead:
      "Ads die the second you stop feeding them. SEO does the opposite: rank once for what your Dallas customers search, and the leads keep arriving, including the surge every time a storm tears across DFW. We build that ranking and tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free Dallas SEO audit',
    intro:
      "Dallas SEO boils down to one question: when a homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty. As a Dallas SEO company built for the trades, we get DFW contractors ranking on Google for the money keywords, ready for the hail-season jump in \"roof repair\" and \"storm damage\" searches, and we score it in leads rather than vanity traffic.",
    aioQuestion: 'How do Dallas businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page to the exact terms customers search, publishing genuinely useful local content, and earning links from trusted DFW sources. In a sprawling, storm-driven market like Dallas, being ranked before hail season and keeping the site quick on mobile are two of the fastest ways to pass competitors who optimize for nothing in particular.",
    problemHeading: "Three reasons your Dallas site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Hardly anyone clicks past Google's first page, and they rarely scroll deep into it. If you are not among the top handful of results for what you sell, your site is effectively invisible in a metro this size, no matter how sharp it looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can pull, but the instant your card stops, the leads stop with it. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the cost per lead." },
      { title: "You vanish the moment the storm hits", body: "DFW hail season drives \"storm damage repair\" and \"roof replacement\" searches through the ceiling, usually April through June. If your site is not ranking for those terms, that whole surge goes to a competitor. We rank you for the storm keywords before the storm." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your Dallas customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and pull in leads while you are on a roof." },
      { name: 'Link building', desc: "Authority from real DFW and industry sources. In a competitive market, links are frequently the difference between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads rather than just rankings and traffic, so you always know what your SEO is genuinely worth." },
      { name: 'Storm-keyword SEO', desc: "We rank you for \"storm damage,\" \"hail repair,\" and \"roof replacement\" ahead of DFW hail season, so you catch the surge instead of missing it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real DFW leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else has to stand on to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus fresh local and storm-season content, timed so you are ranked before demand peaks." },
      { name: 'Build authority', desc: "Links and citations from trusted DFW and industry sources to drive competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we lean harder into what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Dallas SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For contractors who want to own DFW search through storm season.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-keyword + bilingual SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Dallas?', a: "Most Dallas SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and whether you need extra content and storm-season work. The tiers above spell it out, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Dallas?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the toughest DFW keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that quits the day you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short bursts like a fresh hailstorm." },
      { q: 'Can SEO get me ranked before DFW hail season?', a: "Yes, and that is the smartest moment to start. North Texas leads the country in hail claims, and \"roof repair\" and \"storm damage\" searches spike April through June. Because SEO takes a few months to build, you want to start in winter so you are ranked when the storms arrive. Wait for the hail and you are already behind." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local Map Pack SEO, and revenue-tied reporting. Higher tiers fold in storm-keyword, bilingual, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an opening 90 days because SEO needs that window to show real movement, then it runs month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing slice of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Dallas do you cover?', a: "All of Dallas-Fort Worth and the surrounding suburbs: Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson and more, each with genuine local pages rather than one generic Dallas page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads straight to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic Dallas SEO timeline with the numbers modeled for your shop. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Dallas Web Design | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Dallas web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for storm-season demand. Get a free quote.',
    eyebrow: 'Web Design · Dallas-Fort Worth',
    h1: 'Dallas web design that turns hail-season traffic into booked jobs',
    h2Exact: 'Dallas Web Design Company',
    heroSubhead:
      "A handsome website that never rings the phone is just a brochure. We build Dallas contractors fast, mobile-first sites engineered to turn visitors into booked work, and to stay standing when a hailstorm shoves a flood of traffic your way.",
    primaryCta: 'Get my free quote',
    intro:
      "Dallas Web Design is the difference between a contractor website that books jobs and one that bleeds leads quietly: sluggish on a phone, call button buried, no clear offer anywhere. Then a storm rolls in, traffic spikes, and the site cannot convert any of it. Done right, it closes every one of those leaks. We build fast-loading, mobile-first sites that carry themselves like the pro you are and turn Plano-to-Oak-Cliff visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Dallas?',
    aioAnswer:
      "A strong Dallas contractor website loads in under three seconds on a phone, keeps the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to absorb traffic spikes during storm season. Because most Dallas searches happen on mobile and demand can surge overnight after hail, mobile speed and a conversion-first layout are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It crawls on a phone", body: "Most of your Dallas visitors are on mobile, and they bail when a site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep both the visitor and the ranking." },
      { title: "It buckles under a storm surge", body: "When hail hits DFW, your traffic can spike overnight. A slow or confusing site squanders that surge: visitors land, cannot find the call button, and leave. We build for speed and conversion so you book the storm rush instead of losing it." },
    ],
    servicesHeading: "What's inside an OnwardCraft Dallas website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your service area, and the jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your Dallas traffic lives. Fast, thumb-friendly, and a tap away from calling you." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons you cannot miss, and lead forms placed where people actually use them. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words written for anxious homeowners that book the job, not filler that reads like every other contractor in the metro." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the DFW suburbs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load quick and pass Google's performance checks, which protects both conversions and rankings even when a surge hits." },
      { name: 'Storm-ready landing pages', desc: "Dedicated pages for storm damage, hail, and insurance work, built to convert the spike of searches every DFW hail season delivers.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with storm-damage and insurance pages aimed right where the demand lives." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it around what is actually converting." },
    ],
    pricing: {
      heading: 'Transparent Dallas web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors running several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-ready landing pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location contractors.', features: ['Fully custom design', 'Bilingual build option', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Dallas?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count, integrations, and whether you want storm-damage and bilingual pages. The tiers above are fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through each stage." },
      { q: 'Can my site handle a hail-season traffic spike?', a: "Yes, and in DFW that is no small thing. When a storm hits, \"roof repair\" and \"storm damage\" searches surge and your site can take a flood of visitors at once. We build fast, mobile-first, and conversion-focused, with dedicated storm-damage pages, so that surge turns into booked jobs instead of bounced visitors." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Dallas terms before storm season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your Dallas traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs in plain terms." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Dallas web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'dallas', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Dallas Website Redesign | OnwardCraft',
    metaDescription:
      'Dallas Website Redesign without losing rankings: faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in storm season.',
    eyebrow: 'Website Redesign · Dallas-Fort Worth',
    h1: 'Dallas Website Redesign that wins more leads without surrendering your rankings',
    h2Exact: 'Dallas Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, and useless under a storm surge. We redesign Dallas contractor sites to convert more and load faster, and we migrate with such care that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Dallas Website Redesign goes wrong in one of two ways: the site looks sharper but converts exactly the same, or it launches and the rankings evaporate overnight. We do neither. We rebuild Dallas contractor sites for speed and conversions, build in storm-damage pages where DFW demand concentrates, and handle an SEO-safe migration with the redirects and discipline that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and even improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Dallas site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and quietly costs you trust", body: "For a high-ticket job like a roof or an HVAC system, DFW homeowners size you up by your site in seconds. An old, cluttered design quietly hands them to a competitor who looks more established, even when your work runs circles around his." },
      { title: "It is slow and awkward on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Dallas visitors before they ever reach your offer. A redesign built mobile-first wins them back." },
      { title: "It cannot convert a storm surge", body: "When hail hits DFW, traffic spikes, and a slow, confusing site wastes every bit of it. We rebuild for conversions and speed, with storm-damage and insurance pages ready, so the next hailstorm fills your calendar." },
    ],
    servicesHeading: "What's inside an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms people actually use. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, better for both conversions and rankings, even under a traffic surge." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your Dallas traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Storm-ready rebuild', desc: "We add or rebuild storm-damage, hail, and insurance pages so the new site converts the surge every DFW hail season delivers.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, add the storm-damage pages, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely so rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning around what is converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Dallas redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + storm-damage pages', 'Mobile-first rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Bilingual version option', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Dallas?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size, integrations, and whether you need storm-damage and bilingual pages. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is done carefully, and careful is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually nudges them up." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'Can a redesign get me ready for DFW storm season?', a: "Yes, and the timing is worth getting right. North Texas leads the nation in hail claims, and demand for roofing and restoration spikes April through June. We rebuild with dedicated storm-damage and insurance pages and finish the migration before the storms arrive, so the new site is ready to convert the surge." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a chore to update, is not bringing in leads, or cannot handle a storm-season traffic spike, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Can you add storm-damage and insurance pages?', a: "Absolutely, and in DFW we recommend it. Dedicated pages for hail, storm damage, and insurance claims capture the surge of searches every hail season brings and turn them into booked jobs." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what a Dallas Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const dallasCity = {
  citySlug: 'dallas', city: 'Dallas', state: 'Texas', stateAbbr: 'TX', metro: 'Dallas-Fort Worth',

  titleTag: 'Dallas Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Dallas marketing for contractors: web design, SEO, and local SEO that get you found, get you booked, catch hail season, and own your leads instead of renting them.',

  eyebrow: 'Dallas · Web Design, SEO & Lead Generation',
  h1: 'Dallas marketing for contractors that gets you found and booked from Plano to Arlington',
  h2Exact: 'Dallas Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for DFW's huge, storm-driven market. One team to get you ranking, converting, and off the rented-lead treadmill, and ready the day hail season breaks.",
  heroProof: ['Built for the trades', 'Ready for hail season', 'No lock-in contracts'],
  primaryCta: 'Get my free Dallas audit',

  intro:
    "Dallas marketing for contractors means scrapping for attention in one of the biggest, most competitive markets in the country, one that happens to sit in hail alley. Winning here takes three things firing together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack before the next storm breaks. As a Dallas marketing agency built only for the trades, here is how we help DFW contractors pull off exactly that.",
  aioQuestion: 'How do Dallas contractors get more leads online?',
  aioAnswer:
    "Dallas contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because DFW leads the nation in hail claims and demand surges every storm season, the contractors already ranked and looking established catch that wave and win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when DFW searches \"near me,\" and be ranked before the next hailstorm sends demand surging. The highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the storm-damage terms that spike every hail season, and score it in leads rather than vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and stay standing when a storm shoves a flood of traffic your way, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the storm-damage pages DFW demand needs, and migrate with care so you keep every bit of ranking you have earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Dallas?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready the day hail season breaks over DFW." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'Can you help me catch DFW hail season?', a: "Yes, and it is one of the biggest reasons contractors work with us. North Texas leads the nation in hail claims, and roofing and restoration demand spikes April through June. We get you ranked and your site ready before the storms so you catch that surge instead of missing it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Dallas areas do you serve?', a: "All of Dallas-Fort Worth and the surrounding suburbs: Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson, Allen, Grand Prairie and beyond." },
    { q: 'Where should I start?', a: "Start with a free Dallas audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two Dallas marketing moves that will bring contractors the most work fastest. No pitch deck, just a plan." },
  ],
};

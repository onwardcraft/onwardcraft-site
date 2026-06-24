// LOS ANGELES: per-metro x per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across LA's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LOS ANGELES: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Los Angeles search is a different game',
  body:
    "Greater Los Angeles holds roughly 12.7 million people, and that population is smeared across a metro that stretches from the San Fernando Valley down to the South Bay and east into the San Gabriel Valley. The sheer size of it rewrites the rules. A roofer in Torrance and a roofer in Sherman Oaks are chasing two completely different customers, even when both write \"serving Los Angeles\" at the top of their site. Aim your listing at the whole metro and you end up ranking nowhere. Language is the second force at play here: close to 48% of the metro identifies as Hispanic or Latino, and Spanish is the language at home in around 40% of LA County households. A real chunk of the people who need you are searching, reading, and dialing in Spanish. The third force is fire. Santa Ana winds blow from October into March, and the January 2025 fires were a brutal reminder of how fast demand for roofing, restoration, and full rebuilds can detonate across entire neighborhoods.",
  pullQuote: 'In a metro this large and this bilingual, the contractor who targets the right neighborhoods in the right language is the one whose phone rings.',
  donut: {
    title: 'How Los Angeles searches',
    value: 40,
    centerLabel: 'in Spanish',
    legend: [
      { label: 'Spanish spoken at home', pct: 40, kind: 'teal' },
      { label: 'English-only households', pct: 60, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Santa Ana / fire season (Oct-Mar), worst Dec-Jan',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 76, peak: true }, { m: 'M', v: 62, peak: true },
    { m: 'A', v: 50 }, { m: 'M', v: 44 }, { m: 'J', v: 42 }, { m: 'J', v: 46 },
    { m: 'A', v: 52 }, { m: 'S', v: 60 }, { m: 'O', v: 74, peak: true }, { m: 'N', v: 82, peak: true },
    { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '12.7M+', label: 'people across the Greater Los Angeles metro' },
    { value: '~40%', label: 'of LA County households speak Spanish at home', accent: true },
    { value: 'Oct-Mar', label: 'Santa Ana wind and fire season, when demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Downtown LA', 'Hollywood', 'Sherman Oaks', 'Studio City', 'Encino',
    'Van Nuys', 'Northridge', 'Pasadena', 'Glendale', 'Burbank',
    'Torrance', 'Long Beach', 'Santa Monica', 'West LA', 'East LA',
  ],
};

const AREAS = [
  'Los Angeles', 'Long Beach', 'Glendale', 'Pasadena', 'Burbank', 'Torrance',
  'Santa Monica', 'Inglewood', 'Pomona', 'El Monte', 'Downey', 'West Covina',
  'Norwalk', 'Whittier', 'Carson',
];

const FOUNDER =
  "Let me be honest about why OnwardCraft exists. I kept watching solid LA contractors wire a few grand a month to Angi and HomeAdvisor for leads that two or three of their competitors had already bought. That is not a business, that is a treadmill with a monthly invoice. So here is the entire point of what we do: get you ranking and converting for the jobs you actually want, in the neighborhoods your trucks actually drive to, with leads that belong to you alone. No 12-month handcuffs. If it is not producing, you fire us, and the pressure stays on me to earn the next month.";

const WHY = [
  {
    title: 'The trades are all we do',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, general contractors. We already know how a Santa Ana storm fills your voicemail, how an emergency call has to convert in seconds, and how insurance work flows, so we build everything around how your LA customers genuinely search.",
  },
  {
    title: 'We pull you off rented leads',
    body: "Our entire aim is a pipeline you own outright. Not one more monthly check to a lead broker for the same homeowner two of your competitors are also being billed for.",
  },
  {
    title: 'We genuinely speak LA',
    body: "A metro far too sprawling for a single generic listing, a market where 40% of households speak Spanish at home, and real neighborhood targeting that runs from Sherman Oaks to Torrance. That is the work a national agency cannot fake by dropping a city name into a template.",
  },
  {
    title: 'No contracts, nothing hidden',
    body: "Prices published on the page, reporting tied to actual leads, month-to-month after the first 90 days. If we are not earning our keep, you walk. That arrangement keeps the accountability exactly where it should sit: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a logo wall",
  body:
    "A lot of agencies will wave a grid of client logos at you. We are a young, founder-led shop, and we are not going to fake a track record we have not built yet. What we will hand you is the reasoning behind why this works, pulled straight from Google's and the industry's own research on how people search for local services.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough illustration, labelled plainly as a projection and not a result we are claiming: picture a Los Angeles contractor pulling around 2,000 local \"near me\" impressions a month across the neighborhoods they truly serve. Climbing out of page-two invisibility into the top three is the gap between a trickle of calls and a calendar that is booked solid. In a metro this enormous, even one slice of that demand is a full schedule. During your free audit we model the real figures for your business: your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Los Angeles', state: 'California', stateAbbr: 'CA', metro: 'Greater Los Angeles',
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const losAngelesLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Los Angeles Local SEO Company | OnwardCraft',
    metaDescription:
      'Los Angeles Local SEO that puts contractors in the Google Map Pack. We get you into the top three, in English and Spanish.',
    eyebrow: 'Local SEO · Greater Los Angeles',
    h1: 'Los Angeles Local SEO that puts your business in the top three on the map',
    h2Exact: 'Los Angeles Local SEO Company',
    heroSubhead:
      "Search \"near me\" in Los Angeles and Google pins exactly three businesses to the map. Everyone underneath them is effectively invisible. In a metro this big, the prize is owning your real service area, whether that is Sherman Oaks, Torrance, or the San Gabriel Valley, in the language your customers are actually typing.",
    primaryCta: 'Get my free Los Angeles audit',
    intro:
      "Los Angeles local SEO boils down to a single moment: a homeowner in Encino or East LA taps in your service plus \"near me,\" and Google hands back three businesses pinned to the map. Most people tap one of those three and never scroll past them. LA is gigantic and bilingual, so trying to win the entire metro is a fantasy. Winning the specific neighborhoods you serve, in both English and Spanish, is the game that pays. Here is exactly how it is won.",
    aioQuestion: 'How do Los Angeles businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you cover, name-address-phone listings that match across the web, a steady drip of real reviews, and local content tied to genuine LA neighborhoods. Because the metro is vast and roughly 40% of LA County households speak Spanish at home, the businesses that win pick specific service areas and serve customers in both languages.",
    problemHeading: "If your phone has gone quiet, it usually comes down to one of these three",
    painPoints: [
      { title: 'Competitors own the three pins on the map', body: "Pull out your phone and search your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the clicks across LA. If your name is not one of them, the quality of your work barely matters, because most people never lay eyes on it. Cracking into that top three for your real service area is usually the single highest-return move a Los Angeles business can make." },
      { title: "You are paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same LA homeowner to four contractors at once, then bill every one of you to scrap over them. It compounds in their favor, not yours. Local SEO builds the reverse: a homeowner finds you, calls you, and nobody else got handed that contact. Month by month you stop renting and start owning the pipeline." },
      { title: "You are aiming at all of LA, so you rank for none of it", body: "This metro is simply too big for one blanket \"Los Angeles\" listing. A homeowner in Pasadena searches nothing like one in Long Beach, and a Spanish-speaking customer searches differently again. Skip real neighborhood targeting in both languages and Google cannot figure out which searches belong to you, so it gives you none of them." },
    ],
    servicesHeading: 'What it actually takes to put you on the map',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the LA Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which neighborhoods and searches are yours to win, from the Valley to the South Bay." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read identically everywhere Google checks. We correct the listings that contradict each other and build the ones you are missing across LA directories." },
      { name: 'Reviews that keep arriving', desc: "A simple system that turns every finished LA job into a steady stream of fresh reviews. It lifts your Map Pack ranking and gives the next homeowner a reason to call instead of scroll." },
      { name: 'Neighborhood pages', desc: "Real pages for Sherman Oaks, Pasadena, Torrance, the San Gabriel Valley, and the rest, so you surface for the neighborhood someone is actually searching rather than a vague \"Los Angeles.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring under the hood that lets every other piece of this rank in a crowded LA market." },
      { name: 'Local link building', desc: "Mentions and links from LA sources Google already trusts: local press, trade associations, area partners. In a market this competitive, this is frequently what separates page one from page two." },
      { name: 'Bilingual local SEO', desc: "Roughly 40% of LA County households speak Spanish at home. We get you showing up and converting in both languages, so you quit handing half the metro to competitors who bothered to.", featured: true },
      { name: 'AI search readiness', desc: "More LA \"near me\" research now kicks off inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and put your name forward.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across each service area and pin down which competitors are beating you in the LA Map Pack, plus the specific reasons why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move fastest. In LA you will usually feel early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is exactly why local SEO rewards an LA contractor who starts before fire season rather than during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages spanning the Valley, the South Bay, and the San Gabriel Valley, written in both languages wherever the demand justifies it." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, never vanity rankings. Then we go take the next LA neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several LA areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across their LA service area.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual local targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Los Angeles?', a: "Most LA engagements settle between $750 and $2,500 a month, driven by how many neighborhoods and keywords you are going after. Our tiers are listed right above. No hidden fees, no long contract, and we lock the exact scope to your business in the free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move inside a few weeks. The competitive LA keywords usually need 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market as crowded as Los Angeles is selling you a story." },
      { q: 'What makes Los Angeles local SEO different?', a: "Two things, mostly. The metro is so large that chasing all of \"Los Angeles\" gets you nowhere, so you have to target the specific neighborhoods your trucks actually serve, from the Valley to the South Bay. And it runs deeply bilingual: roughly 40% of LA County households speak Spanish at home, which makes showing up in both languages a genuine edge." },
      { q: 'Do I need a Spanish-language presence to rank in LA?', a: "For a lot of trades, yes. Close to 48% of the metro is Hispanic or Latino and about 40% of LA County households speak Spanish at home. A large share of your customers search and call in Spanish, so a bilingual profile and content can unlock demand your English-only competitors never even see. We set that up properly so it strengthens your rankings rather than confusing Google." },
      { q: 'Which areas do you cover?', a: "All of Greater Los Angeles and the cities around it: Sherman Oaks, Encino, Pasadena, Glendale, Burbank, Torrance, Long Beach, Santa Monica, East LA, and more. We build genuine neighborhood pages instead of one catch-all LA page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is very nearly the only thing we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, fire-season surges, and insurance jobs, and we build your local SEO around all three." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of LA \"near me\" research now starts inside AI instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. In this market it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that it is month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that route LA homeowners straight to you. Over time you lean on the lead brokers less, because the work is already coming to you directly." },
      { q: "What's in the free audit?", a: "A straight read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the honest starting point for Los Angeles Local SEO that ranks you on the map. No pitch deck, just a diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Los Angeles SEO Company | OnwardCraft',
    metaDescription:
      'Los Angeles SEO that ranks contractors on Google and brings in leads you own. Lead-tied reporting, no lock-in, bilingual-ready for the LA market.',
    eyebrow: 'SEO Services · Greater Los Angeles',
    h1: 'Los Angeles SEO that gets your business to the top of Google and keeps it there',
    h2Exact: 'Los Angeles SEO Company',
    heroSubhead:
      "Ads die the instant your card stops. SEO works the opposite way: rank once for what your LA customers search, and the leads keep arriving. We build that ranking across your real service area and tie every report to actual calls and booked jobs, not traffic charts.",
    primaryCta: 'Get my free LA SEO audit',
    intro:
      "Los Angeles SEO comes down to one blunt question: when someone searches what you do, are you on page one or page two? In a market this competitive, page two might as well be page fifty. We get contractors ranking for the money keywords in one of the largest, fiercest, most bilingual markets in the country, and we measure the result in leads, not vanity traffic.",
    aioQuestion: 'How do Los Angeles businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the technical foundation of the site, tuning each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted LA sources. In a metro this large and bilingual, ranking for specific neighborhood and service-area terms, and serving Spanish-speaking searchers where it fits, are two of the quickest routes to pulling ahead.",
    problemHeading: "Three reasons your LA site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past Google's first page, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is functionally invisible to LA buyers, no matter how sharp it looks. That invisibility is quietly handing your jobs to the contractor sitting two spots above you." },
      { title: "You are renting your traffic from Google Ads", body: "Ads can work, but the second your card stops, the leads stop cold, and Los Angeles is one of the priciest ad markets in the country to begin with. SEO builds an asset you own outright: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You are competing for all of LA instead of your patch", body: "In a metro of 12.7 million people, broad \"Los Angeles\" terms are brutally contested, and half the time the searcher is nowhere near your trucks anyway. The contractors who win rank for specific neighborhoods and service areas, and they reach the enormous Spanish-speaking audience their competitors keep ignoring." },
    ],
    servicesHeading: 'The SEO work that actually moves LA rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google demands before it will rank you at all in a competitive LA niche." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms your LA customers type: titles, headings, body content, and internal links pointed where they pull weight." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what LA buyers search, earn links, and bring in leads while you are out on the job." },
      { name: 'Link building', desc: "Authority from real LA and industry sources. In a market this crowded, links are frequently the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you also win the \"near me\" searches across your service area, right alongside your organic rankings." },
      { name: 'Lead-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your LA SEO is genuinely worth." },
      { name: 'Bilingual SEO', desc: "About 40% of LA County households speak Spanish at home. We get you ranking and converting in both languages, opening demand your English-only competitors leave sitting on the table.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, since a growing slice of LA search now begins there.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real LA leads inside your service area." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile, the foundation everything else needs before it can rank in a market this size." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including neighborhood terms and Spanish-language pages wherever the LA demand is there." },
      { name: 'Build authority', desc: "Links and citations from trusted LA and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next keyword set across the metro." },
    ],
    pricing: {
      heading: 'Transparent Los Angeles SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own LA search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Bilingual SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Los Angeles?', a: "Most LA SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract attached." },
      { q: 'How long does SEO take to work in Los Angeles?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, quicker on neighborhood terms and slower on the most contested metro-wide LA keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying, and LA is an expensive ad market to feed. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most LA contractors do best with SEO as the long-term engine and ads for short-term spikes around fire season." },
      { q: 'Should my LA SEO target Spanish-speaking customers?', a: "For most trades, yes. Roughly 48% of the metro is Hispanic or Latino and about 40% of LA County households speak Spanish at home. Ranking and converting in both languages opens up a huge slice of demand that English-only competitors never touch. We build it the right way so it reinforces your rankings instead of confusing Google." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local Map Pack SEO, and lead-tied reporting. Higher tiers add bilingual and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that window to show real movement in a market this size, then it is month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your LA business, not just classic search results." },
      { q: 'Which areas around LA do you cover?', a: "All of Greater Los Angeles and the surrounding cities: Glendale, Pasadena, Burbank, Torrance, Long Beach, Santa Monica, Inglewood, Downey, and more, with genuine local pages rather than one catch-all LA page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route LA leads directly to you. The more of your search visibility you own, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It is where Los Angeles SEO that grows organic traffic and booked leads actually starts. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Los Angeles Web Design Company | OnwardCraft',
    metaDescription:
      'Los Angeles web design that turns visitors into booked jobs: fast, mobile-first, bilingual-ready sites built for contractors who want the phone to ring.',
    eyebrow: 'Web Design · Greater Los Angeles',
    h1: 'Los Angeles web design that turns visitors into booked jobs',
    h2Exact: 'Los Angeles Web Design Company',
    heroSubhead:
      "A good-looking website that never generates a call is just an expensive brochure. We build LA contractors fast, mobile-first sites engineered to turn visitors into booked work, and ready to serve the enormous bilingual market most of your competitors quietly ignore.",
    primaryCta: 'Get my free quote',
    intro:
      "Los Angeles web design is the difference between a site that books jobs and one that bleeds leads without anyone noticing: slow on a phone, call button buried, no clear offer, English-only in a county where 40% of households speak Spanish at home. Website design done properly closes every one of those leaks. We build mobile-first sites that load fast, carry the authority your work deserves, and turn visitors across the Valley, the South Bay, and the San Gabriel Valley into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Los Angeles?',
    aioAnswer:
      "A strong LA contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the neighborhoods you serve outright. Because the metro is huge and roughly 40% of LA County households speak Spanish at home, mobile speed, a clear service area, and bilingual options are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site is not bringing in work",
    painPoints: [
      { title: "It is a brochure, not a lead engine", body: "Plenty of LA contractor sites just list services and sit there: no clear offer, no obvious next step, no reason to call you over the guy ranked above you. We design every page around a single job, turning a visitor into a booked lead." },
      { title: "It is too slow on a phone", body: "Most of your LA visitors are on mobile, on the move, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse, so the problem compounds. We build fast, so you keep both the visitor and the ranking." },
      { title: "It only talks to half the market", body: "In a county where about 40% of households speak Spanish at home, an English-only site quietly turns away a massive share of LA homeowners. We can build bilingual sites that meet customers in the language they search, so you stop gifting that work to competitors." },
    ],
    servicesHeading: "What's in an OnwardCraft Los Angeles website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your LA service area, and the specific jobs you actually want more of." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your LA traffic is coming from. Fast, thumb-friendly, and a tap away from calling you." },
      { name: 'Conversion-focused UX', desc: "Clear offers, call buttons that are impossible to miss, and lead forms placed where they actually get filled out. Every page hands the visitor a next step." },
      { name: 'Copy that sells', desc: "Words that speak to an anxious LA homeowner mid-emergency and book the job, not filler that reads exactly like every other contractor site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for the areas your trucks cover." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects your conversions and your LA rankings at the same time." },
      { name: 'Bilingual-ready build', desc: "We can build your site to serve both English and Spanish speakers cleanly, so you reach the roughly 40% of LA County households that speak Spanish at home instead of losing them at the door.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more LA search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your LA service area, your most profitable jobs, and your competitors, then map the site around booking more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page, in both languages wherever it fits the LA market." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current, then tune it based on what is actually converting LA visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Los Angeles web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Los Angeles?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. Our tiers are above: fixed price, no surprises, and you own the finished site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We give you a firm timeline up front and keep you posted through every stage." },
      { q: 'Should my LA website be bilingual?', a: "For many trades it is well worth it. About 40% of LA County households speak Spanish at home, and an English-only site quietly turns those homeowners away. We can build a clean bilingual site that meets customers in the language they search, which opens up demand your competitors keep ignoring." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive LA terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your LA traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb on the move." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can genuinely manage yourself, usually WordPress or Webflow. We will recommend the right fit in your free consult and walk through the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost LA leads, what a high-converting site should include, and a fixed-price quote with a timeline. It is a plain starting point for Los Angeles web design that turns visitors into booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Los Angeles Website Redesign | OnwardCraft',
    metaDescription:
      'Los Angeles Website Redesign without losing rankings. Faster, mobile-first, bilingual-ready rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · Greater Los Angeles',
    h1: 'Los Angeles Website Redesign that converts more without losing your rankings',
    h2Exact: 'Los Angeles Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, awkward on a phone, easy to scroll past, and completely silent to the half of LA that searches in Spanish. We redesign LA contractor sites to convert more and load faster, then migrate with care so you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Los Angeles Website Redesign goes one of two bad ways for most contractors: the site looks sharper but converts exactly the same, or it launches and the rankings vanish overnight. We refuse to do either. We rebuild Los Angeles contractor sites for speed and conversions, build them bilingual-ready for the LA market, and run an SEO-safe migration with the redirects that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your LA site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket LA job, homeowners size you up by your site in seconds. An old, cluttered design quietly nudges them toward a competitor who simply looks more established, even when your craftsmanship is better." },
      { title: "It is slow and clunky on a phone", body: "If your site stalls or fights the user on mobile, you are losing the majority of your LA visitors before they ever reach your offer. A redesign built mobile-first wins those people back." },
      { title: "It ignores the bilingual market", body: "If your site only speaks English in a county where about 40% of households speak Spanish at home, you are invisible to a huge slice of demand. We rebuild for conversions and can layer in a clean bilingual experience, so the new site reaches customers the old one never could." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you LA leads and rankings today, so the redesign fixes real problems instead of just swapping colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly, so you keep the rankings and traffic you have already earned across the LA market." },
      { name: 'Conversion redesign', desc: "Clearer offers, sharper call-to-action placement, and lead forms that actually get filled out. We design for booked jobs, not just a prettier look." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which lifts both conversions and LA rankings at once." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your LA traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the size of the LA jobs you are quoting." },
      { name: 'Bilingual-ready rebuild', desc: "We can rebuild your site to serve both English and Spanish speakers cleanly, so the new site reaches the roughly 40% of LA County households that speak Spanish at home.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as LA search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you LA leads and rankings, then map a redesign that fixes it without breaking what already works on your current site." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, careful migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely, so your LA rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Los Angeles redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Los Angeles?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your LA rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or only speaks English in a heavily bilingual market like LA, it is costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Can the new site be bilingual?', a: "Yes, and in LA that is a real consideration. About 40% of LA County households speak Spanish at home, so a clean bilingual rebuild can reach customers your old English-only site never could. We build it so it helps your rankings rather than confusing Google." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings across the LA market." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in of any kind." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in LA leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It is the honest first step toward a Los Angeles Website Redesign that lifts conversions without losing rankings." },
    ],
  },
];

export const losAngelesCity = {
  citySlug: 'los-angeles', city: 'Los Angeles', state: 'California', stateAbbr: 'CA', metro: 'Greater Los Angeles',

  titleTag: 'Los Angeles Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Los Angeles marketing for contractors: web design, SEO, and local SEO. Get found, get booked, and own your leads instead of renting them. Bilingual-ready for LA.',

  eyebrow: 'Los Angeles · Web Design, SEO & Lead Generation',
  h1: 'Los Angeles marketing for contractors that gets you found and booked',
  h2Exact: 'Los Angeles Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for LA's enormous, bilingual market. One team to get you ranking in the neighborhoods you serve, converting visitors into calls, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Los Angeles audit',

  intro:
    "Los Angeles marketing for contractors means competing for attention in one of the largest, fiercest, most bilingual markets in the country. Winning here takes three pieces working together: a site that converts, SEO that ranks you for what people search in the neighborhoods you serve, and local SEO that pins you to the Map Pack, in both English and Spanish where it counts. As a digital marketing agency built for the trades, here is how we help LA contractors get found and booked.",
  aioQuestion: 'How do Los Angeles contractors get more leads online?',
  aioAnswer:
    "LA contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack in their service area. Because Greater Los Angeles is huge and roughly 40% of LA County households speak Spanish at home, the contractors who target real neighborhoods and serve both languages win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the three businesses Google pins to the map when your LA neighborhood searches \"near me.\" The single highest-return move for most local businesses, targeted to the areas your trucks actually serve, in both languages.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your LA customers actually search, build an asset you own instead of renting traffic from ads, and measure it in booked leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual-ready websites engineered to turn visitors into booked jobs, not brochures that just sit there and ignore half the LA market.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, then migrate it carefully so you keep every bit of ranking you have already earned across LA.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Los Angeles?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, all targeted to the LA neighborhoods they actually serve." },
    { q: 'Do you work only with contractors?', a: "Very nearly. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors, so we already understand emergency calls, fire-season surges, and insurance work." },
    { q: 'Why does the bilingual market matter for my marketing?', a: "Roughly 48% of Greater Los Angeles is Hispanic or Latino and about 40% of LA County households speak Spanish at home. A large share of your customers search, read, and call in Spanish. Showing up and converting in both languages unlocks demand English-only competitors never reach. We build that the right way so it strengthens your rankings." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm the exact scope in your free audit." },
    { q: 'Which LA areas do you serve?', a: "All of Greater Los Angeles and the surrounding cities: Sherman Oaks, Encino, Pasadena, Glendale, Burbank, Torrance, Long Beach, Santa Monica, Inglewood, Downey, and more. We target the specific neighborhoods your trucks actually serve, not one catch-all LA listing." },
    { q: 'Where should I start?', a: "Start with a free Los Angeles audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It is the simplest way to see what Los Angeles marketing for contractors can do for your pipeline. No pitch deck, just a plan." },
  ],
};

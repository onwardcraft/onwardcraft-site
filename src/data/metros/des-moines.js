// DES MOINES — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Des Moines's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// DES MOINES — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Des Moines is about timing as much as competition',
  body:
    "Des Moines is a smaller metro — around 700,000 people across the greater area — but don't mistake smaller for easier. This is prime tornado alley and hail country, and every spring the phones of every roofer and restoration contractor in town ring at the same time. The contractors who are already in the top three spots on the map when an April hailstorm rolls through capture the wave; the ones on page two wait weeks for scraps. Winter tells the same story from the other side: Iowa cold is serious, with freeze-thaw cycles that crack driveways and roofs and push urgent heating calls into December and January. Beyond the weather, Des Moines has a surprisingly white-collar economic base — Principal Financial, Nationwide, EMC Insurance, and Wells Fargo operations have made this one of the most insurance-dense markets in the country, which means homeowners are experienced with claims-driven work and expect a contractor who can talk through the process. And a newer wave of younger tech and financial professionals has come into the market attracted by affordable housing, and they search for everything online before picking up the phone. The contractor who's already ranking is the one who gets the call.",
  pullQuote: 'In tornado alley, the roofer who owns the Map Pack when April hail hits books the season. The one on page two waits for scraps.',
  donut: {
    title: 'Des Moines homeownership rate',
    value: 58,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 58, kind: 'teal' },
      { label: 'Renters', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Spring hail/tornado season (Apr–Jun, Aug–Sep) and Iowa winter heating (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 62 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'J', v: 60 }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 80, peak: true },
    { m: 'O', v: 54 }, { m: 'N', v: 58 }, { m: 'D', v: 68, peak: true },
  ],
  stats: [
    { value: '~700K', label: 'people across the greater Des Moines metro' },
    { value: 'Top 5', label: 'US city for insurance industry employment — a market that knows how to file a claim', accent: true },
    { value: 'Apr–Jun', label: 'peak hail and tornado roofing season, when search demand spikes overnight' },
    { value: '58%', label: 'homeownership rate — a solid base of homeowners with real repair needs' },
  ],
  neighborhoods: [
    'East Village', 'Sherman Hill', 'Beaverdale', 'Ankeny', 'Waukee',
    'West Des Moines', 'Urbandale', 'Johnston', 'Altoona', 'Norwalk',
    'Clive', 'Grimes', 'Windsor Heights', 'Pleasant Hill', 'Bondurant',
  ],
};

const AREAS = [
  'Des Moines', 'West Des Moines', 'Ankeny', 'Waukee', 'Urbandale',
  'Johnston', 'Altoona', 'Norwalk', 'Clive', 'Grimes',
  'East Village', 'Sherman Hill', 'Beaverdale', 'Windsor Heights', 'Bondurant',
];

const FOUNDER =
  "I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor a check every month for leads that two or three of their competitors bought at the same time. That's a bad deal in any market, and in a weather-driven market like Des Moines — where half the roofing calls come in during a two-week window after a hailstorm — it's an especially painful one. If you're not already ranking when the storm hits, you're not getting those calls. The whole point of what we do is to build rankings and a local presence you actually own, so the lead comes to you first and nobody else gets it.";

const WHY = [
  {
    title: 'We understand weather-driven markets',
    body: "Des Moines roofing and restoration demand doesn't build slowly — it spikes overnight when a hailstorm rolls through. We optimize for the terms homeowners search during those windows and make sure you're already ranking before the season hits, not scrambling to catch up after.",
  },
  {
    title: 'We get you off rented leads',
    body: "The goal is a pipeline you own. Not a monthly invoice to a lead broker who sold the same storm-damaged homeowner to four other contractors and billed everyone for the privilege.",
  },
  {
    title: 'We actually know the Des Moines market',
    body: "Ankeny and Waukee are growing fast with new housing and first-time buyers who search online for everything. East Village and Beaverdale are established neighborhoods with older homes and repair needs. Johnston and West Des Moines have the professional income that supports larger projects. We build your local SEO around those distinctions — not a city-name swap on a national template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: a Des Moines roofer sitting on page two during a spring hail event is invisible during the highest-demand window of the year. Moving from page-two obscurity into the top three Map Pack spots before April is the difference between a booked-out spring and watching the work go to whoever ranked first. In your free audit, we model the real numbers for your business — your current rankings, your search volume by season, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Des Moines', state: 'Iowa', stateAbbr: 'IA', metro: 'Des Moines',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const desMoinesLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Des Moines Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Des Moines and three businesses show up on the map. We get you into those three before hail season hits, so the call lands with you.',
    eyebrow: 'Local SEO · Des Moines, IA',
    h1: 'When Des Moines searches for what you do, be the first name they find',
    h2Exact: 'Des Moines Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me\" in Des Moines. A spring hailstorm can send a thousand homeowners searching for a roofer in the same afternoon — and every single one of them clicks one of those three. We get you there before the season, so the calls land with you.",
    primaryCta: 'Get my free Des Moines audit',
    intro:
      "Des Moines local SEO comes down to timing and position. When a hailstorm blows through or a polar vortex drops temps below zero, homeowners in Ankeny and Beaverdale and Waukee don't scroll — they tap one of the first three businesses Google pins to the map and call. That's the whole game. If you're not in that top three for your service areas before demand spikes, the work goes to whoever is. Here's how you get there.",
    aioQuestion: 'How do Des Moines businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady flow of real reviews; and local content tied to real Des Moines neighborhoods and suburbs. In a weather-driven market like Des Moines, you also have to be in position before hail season and winter — ranking takes months to build, so you can't start in April and expect to be there when the storm hits.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map when demand spikes', body: "Search your own service plus \"near me\" in Des Moines right now. See those three businesses? When a spring hailstorm sends a hundred Ankeny homeowners searching at once, every one of them taps one of those three names. If you're not in that top three already, the storm season goes to someone else — and it happens fast, so there's no time to play catch-up." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same storm-damaged Des Moines homeowner to three or four contractors at once, then bill each of you for the privilege of competing. Local SEO flips that: the homeowner searches, finds you at the top, and calls you directly. Nobody else got that lead. Over time you lean on the lead brokers less and less." },
      { title: "You're invisible in the suburbs where growth is happening", body: "Ankeny and Waukee are among the fastest-growing communities in Iowa, full of new homebuyers who search for every home service online. West Des Moines and Johnston have high-income homeowners comfortable spending on quality work. If your local SEO doesn't cover those suburbs specifically, you're missing the fastest-growing part of the metro." },
    ],
    servicesHeading: 'What it actually takes to rank you in Des Moines',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Des Moines searches you should win — and when hail season rolls around, you're already visible." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Iowa directories and national platforms." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your Map Pack ranking and makes homeowners pick up the phone when they're comparing three options." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Ankeny, Waukee, Johnston, Beaverdale, and the rest — so you rank for the suburb someone's actually in, not just a generic Des Moines page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The under-the-hood work that lets everything else rank when demand spikes." },
      { name: 'Local link building', desc: "Mentions and links from Des Moines sources Google trusts — local press, trade associations, community organizations, partners. This is what separates page one from page two here." },
      { name: 'Seasonal and storm SEO', desc: "We optimize for the hail, wind damage, and emergency heating searches that define Des Moines demand — so you're already ranking when the season hits, not scrambling to catch up.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of local research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Des Moines and its suburbs, and pin down which competitors are beating you in the Map Pack — and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks of getting these right." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting well before the busy season." },
      { name: 'Add local content', desc: "Suburb and neighborhood pages covering Ankeny, Waukee, Johnston, West Des Moines, and the surrounding area, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not just vanity rankings. Then we go take the next neighborhood or service keyword." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right before hail season.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Des Moines and its fast-growing suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages (Ankeny, Waukee, Johnston)', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Map Pack across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and storm search targeting', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Des Moines?', a: "Most Des Moines engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are above, with no hidden fees, no long contract, and we confirm exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Des Moines keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. That's why starting before hail season — not during it — is how you actually capture the demand spike." },
      { q: 'What makes Des Moines local SEO different?', a: "It's a weather-driven market. Demand for roofing, restoration, and heating work can spike overnight when a hailstorm or cold snap hits, so ranking when the season opens is everything. We build your Map Pack presence before those windows — and we cover the fast-growing suburbs like Ankeny and Waukee where a generic Des Moines page won't rank." },
      { q: 'Which areas do you cover?', a: "The full Des Moines metro: the city itself plus Ankeny, Waukee, West Des Moines, Urbandale, Johnston, Altoona, Norwalk, Clive, and the neighborhoods inside them — East Village, Beaverdale, Sherman Hill, and more. We build real suburb pages instead of one generic Des Moines page, because that's what ranks for 'roofer Ankeny' or 'HVAC Waukee.'" },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, restoration, HVAC, plumbing, solar, electrical, and general contractors. We understand storm-damage claims, insurance-driven work, and cold-weather heating emergencies — and we build your local SEO around them." },
      { q: 'How does weather affect when I should start?', a: "April through June is peak hail and tornado roofing season in Des Moines, and December through February drives heating and freeze-thaw repair work. Ranking takes months to build. If you want to be visible when those windows open, the time to start is now — not the week after the first storm." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more local research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this help me with insurance-claim jobs?', a: "Des Moines homeowners are comfortable with the insurance-claim process — this is an insurance industry town. We make sure your Google Business Profile and website clearly communicate that you handle insurance work, which helps you show up when homeowners search for storm damage or hail repair with the intent of filing a claim." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Des Moines and its suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Des Moines SEO Company | OnwardCraft',
    metaDescription:
      'Des Moines SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a weather-driven market.',
    eyebrow: 'SEO Services · Des Moines, IA',
    h1: 'Get your Des Moines business to the top of Google and keep it there',
    h2Exact: 'Des Moines SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Des Moines customers search and the leads keep coming — through hail season, through Iowa winters, and through every slow month in between. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Des Moines SEO audit',
    intro:
      "Des Moines SEO comes down to one question: when a homeowner in Ankeny or West Des Moines searches for what you do, are you on page one or page two? In a market where demand spikes overnight during a hailstorm or a cold snap, the contractors already ranking capture the wave. The ones on page two wait. We get you to page one for the keywords that drive real Des Moines leads — and we measure it in calls and jobs, not vanity traffic.",
    aioQuestion: 'How do Des Moines businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Des Moines suburbs and neighborhoods, and earning links from trusted Iowa sources. In a weather-driven market, ranking for seasonal terms — hail damage, storm restoration, furnace repair, freeze-thaw — before demand spikes is one of the most effective strategies a Des Moines contractor can run.",
    problemHeading: "Three reasons your Des Moines site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when the season opens", body: "Almost nobody clicks past the first page of Google. In Des Moines, that problem is worse than most places because demand is seasonal — a spring hailstorm sends a wave of homeowners searching at once, and all of them land on the contractors already on page one. Being on page two during a hail event is essentially being invisible during your best opportunity of the year." },
      { title: "You're renting traffic instead of owning it", body: "Google Ads can buy you immediate visibility, but the moment you stop paying, the leads stop — and you never build an asset. SEO builds rankings that keep producing calls long after the work is done, at a lower cost per lead over time. In a market where lead brokers sell the same storm-damaged homeowner to four contractors at once, owning your own pipeline matters." },
      { title: "You're missing the searches that matter most", body: "Des Moines demand isn't uniform across the year. Roofing and restoration spike in spring and again in late summer after severe weather. Heating work surges in December and January. The contractors who rank for those terms ahead of the season capture the demand. If your SEO doesn't account for how Des Moines searches seasonally, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Des Moines',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank your Des Moines pages at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Des Moines and suburban homeowners search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including suburb-specific content for Ankeny, Waukee, and Johnston." },
      { name: 'Link building', desc: "Authority from real Des Moines and Iowa sources. Links from local press, trade associations, and industry partners are often what separate page one from page two here." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the 'near me' searches across your service area alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO investment is actually worth." },
      { name: 'Seasonal and storm SEO', desc: "We rank you for hail damage, storm restoration, freeze-thaw repair, and emergency heating searches — the terms that define Des Moines demand — so you're visible before the season, not chasing it.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Des Moines leads — including the seasonal terms that define your busiest months." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank when Des Moines homeowners are searching." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content — suburb pages, seasonal guides, and the emergency terms that matter in Iowa." },
      { name: 'Build authority', desc: "Links and citations from trusted Des Moines and Iowa sources to push competitive keywords onto page one before the next hail season." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Des Moines SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Des Moines suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'Suburb pages (Ankeny, Waukee, Johnston)'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Des Moines search across the metro.', features: ['Everything in SEO Growth', 'Seasonal and storm search content', 'Aggressive link building', 'Multi-suburb coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Des Moines?', a: "Most Des Moines SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Des Moines?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive metro-wide keywords. Because demand in Des Moines is seasonal, the ideal time to start is well before hail season or winter — not during it." },
      { q: 'Is SEO better than Google Ads for Des Moines contractors?', a: "They do different jobs. Ads buy instant visibility that stops when you stop paying. SEO builds an asset you own that keeps producing calls at a lower cost per lead over time. Most Des Moines contractors do best running SEO as the long-term engine and ads selectively during demand spikes or for new services." },
      { q: 'Should my Des Moines SEO target seasonal demand?', a: "Absolutely. When a hailstorm hits in May, searches for storm damage and roof repair spike overnight — and ranking takes months to build. The contractors who prepared in January or February are the ones who book the spring. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm content and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search results." },
      { q: 'Which Des Moines suburbs do you cover?', a: "The full metro: Des Moines proper and Ankeny, Waukee, West Des Moines, Urbandale, Johnston, Altoona, Norwalk, Clive, and surrounding communities. We build genuine suburb pages rather than one generic Des Moines page, because 'roofer Ankeny' and 'HVAC Waukee' are the searches that drive real local leads." },
      { q: 'How do you help me rank for insurance-claim work?', a: "Des Moines is an insurance industry hub, and many homeowners here are familiar with the claim process. We make sure your site and GBP clearly signal that you handle insurance-driven restoration and roofing work, which helps you rank for the searches homeowners run right after filing a claim." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck — just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Des Moines Web Design Company | OnwardCraft',
    metaDescription:
      'Des Moines web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a weather-driven, growing market.',
    eyebrow: 'Web Design · Des Moines, IA',
    h1: 'Des Moines web design that turns visitors into booked jobs',
    h2Exact: 'Des Moines Web Design Company',
    heroSubhead:
      "When a hailstorm hits Des Moines, a hundred homeowners search for a roofer in the same afternoon. The contractor with a fast, clear, mobile-friendly site captures that wave. The contractor with a slow, confusing one loses it. We build sites engineered to convert — not brochures that sit there while the season passes.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Des Moines contractor websites quietly leak leads: slow on a phone, no clear call to action, nothing that signals you're the right person for the job. In a market where demand spikes overnight after a storm and homeowners in Ankeny and Waukee are making quick decisions on their phone, a site that doesn't convert immediately is costing you real work. We build fast, professional, mobile-first websites that turn visitors into booked jobs — and that are ready to rank when hail season comes.",
    aioQuestion: 'What makes a good contractor website in Des Moines?',
    aioAnswer:
      "A good Des Moines contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, and names the specific suburbs you serve — Ankeny, Waukee, Johnston, West Des Moines. Because Des Moines homeowners often search on mobile during or immediately after a weather event, speed and an obvious next step are what separate a site that books the storm job from one that loses it to whoever answers faster.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services with no clear offer and no obvious reason to call over the next result. In Des Moines that problem is amplified during demand spikes — when a homeowner is searching for help after a hailstorm, they're deciding fast. If your site doesn't have a clear, immediate call to action, they're on to the next one before they ever read your services page." },
      { title: "It's slow on the phone when it matters most", body: "Storm searches happen on mobile, often while a homeowner is standing in their driveway looking at the damage. If your site takes more than a few seconds to load, they're gone. Slow sites also rank worse in mobile search, which compounds the problem. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the suburbs where you actually work", body: "A homeowner in Ankeny wants to see that you serve Ankeny. A Waukee homeowner wants the same. A generic 'Des Moines contractor' page reads like everyone else. We build sites that name the specific suburbs and communities you work, so visitors trust you're local and Google ranks you for neighborhood-level searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Des Moines website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you want more of in Des Moines and its suburbs." },
      { name: 'Mobile-first build', desc: "Designed for the phone first — because that's where storm-season and emergency searches happen. Fast load, easy to call from, thumb-friendly forms." },
      { name: 'Conversion-focused UX', desc: "Clear offers, prominent call buttons, and lead forms placed where they actually get used. Every page has one job: get the visitor to contact you." },
      { name: 'Copy that sells', desc: "Words that speak to anxious Des Moines homeowners and book the job — not filler text that reads like everyone else's about page." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages so Google knows exactly where you work." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings during high-demand periods." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the communities you serve — Ankeny, Waukee, Johnston, West Des Moines — so you stand out and rank for neighborhood-level searches instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more local search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors — then map the site around booking more of the work you want across the Des Moines metro." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells — with your call to action front and center on every page and suburb pages that actually rank." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, so you're ready when demand spikes." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting across your service area." },
    ],
    pricing: {
      heading: 'Transparent Des Moines web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with multiple services or suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed and Core Web Vitals', 'Suburb-targeted pages (Ankeny, Waukee, Johnston)'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations and booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Des Moines?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me capture storm-season demand?', a: "That's a big part of why we build the way we do. Mobile-first, fast-loading, with a clear call to action — because when a Des Moines homeowner is searching for a roofer right after a hailstorm, they're on their phone and they're deciding fast. A site that's slow or unclear loses them instantly." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Des Moines terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where storm searches and emergency calls happen. Fast load, easy-to-tap call buttons, and forms built for a thumb while standing in a driveway." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Des Moines contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'des-moines', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Des Moines Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Des Moines website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before hail season.',
    eyebrow: 'Website Redesign · Des Moines, IA',
    h1: 'Redesign your Des Moines website without losing your rankings',
    h2Exact: 'Des Moines Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — and in Des Moines, it costs you the entire hail season if you're not ready when the spring storms come. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish because nobody handled the migration properly. We do neither. We redesign Des Moines contractor sites for mobile speed and conversions, build them to stand out in a market where demand spikes fast, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, migrating your schema markup, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one, which is exactly what Google rewards.",
    problemHeading: "Signs your Des Moines site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust before you even get a call", body: "Des Moines homeowners — especially the younger professionals in Ankeny and Waukee who search for everything online — judge your business by your website in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better and your prices are fair." },
      { title: "It's slow when storm-season searches spike", body: "Spring hail and tornado season sends a wave of homeowners searching on mobile, often right after a storm. If your site is slow or clunky, you're losing those visitors before they ever see your offer — at the exact moment demand is highest. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert visitors into calls", body: "Traffic that doesn't turn into calls is wasted. An old site with a buried phone number, no clear offer, and outdated photos gives a visitor no reason to pick you over the next result. We rebuild for conversions: clear offers, prominent call buttons, and suburb-specific pages that make the right homeowners feel like you're the obvious choice." },
    ],
    servicesHeading: "What's in an OnwardCraft Des Moines redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just refreshing the look." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned through the transition." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs and storm-season calls, not just aesthetics." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially during mobile-heavy storm searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where storm-season searches and emergency calls happen in Des Moines." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and signals to Des Moines homeowners that you're a professional operation." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the communities you serve — Ankeny, Waukee, Johnston, West Des Moines — so the new site ranks for neighborhood-level searches and stands out instead of blending into a generic metro page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as local search continues shifting toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with a clear plan to protect your rankings through the migration." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build. Fast and clear for the homeowner on their phone after a storm." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that holds your rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — and so you're positioned before the next demand window." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting across your Des Moines service area, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Des Moines redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site with multiple services or suburbs.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild (Ankeny, Waukee, Johnston)'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations and booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Des Moines?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully — and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging before launch. Done right, a redesign holds your rankings and usually improves them with the faster, better-structured site." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage — and we can work with your seasonal calendar so you're live before the next demand window." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, doesn't cover your Des Moines suburbs specifically, or loses visitors during storm-season spikes, it's costing you real work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost in the transition." },
      { q: 'Will the redesign help me compete during hail season?', a: "That's a core focus in Des Moines. We rebuild mobile-first and fast so storm-season searchers on their phones can reach you in seconds, and we add suburb-specific pages so you rank for 'roofer Ankeny' and 'storm damage Waukee' alongside the generic metro terms." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings, especially when mobile search spikes during weather events." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in, no hostage situations." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO after that is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure — just a diagnosis." },
    ],
  },
];

export const desMoinesCity = {
  citySlug: 'des-moines', city: 'Des Moines', state: 'Iowa', stateAbbr: 'IA', metro: 'Des Moines',

  titleTag: 'Des Moines Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Des Moines contractors. Get found before hail season, get booked, and own your leads — built for a weather-driven market.',

  eyebrow: 'Des Moines, IA · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Des Moines contractors found and booked',
  h2Exact: 'Des Moines Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Des Moines's weather-driven, fast-growing market. One team to get you ranking before hail season, converting all year, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Des Moines audit',

  intro:
    "Des Moines sits in the middle of tornado alley, and every spring the phones ring all at once. When a hailstorm hits, a hundred homeowners in Ankeny and Beaverdale and Waukee search for a roofer on their phone — and they call one of the first three names they see. The contractor already ranking wins the season. The one on page two waits for the scraps. Winning in Des Moines takes three things working together: a fast, mobile-first site that converts, SEO that gets you ranking for the searches that matter, and local SEO that puts you in the Map Pack for the suburbs you serve — before the season hits, not during it. Here's how we help Des Moines contractors do exactly that.",
  aioQuestion: 'How do Des Moines contractors get more leads online?',
  aioAnswer:
    "Des Moines contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent seasonal searches and local SEO that wins the Google Map Pack suburb by suburb. In a weather-driven market where roofing and restoration demand can spike overnight, the contractors who are already ranking when the storm hits capture the wave. The ones who wait until demand spikes are too late.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack before storm season',
      blurb: "Get into the top three businesses Google pins to the map when Des Moines searches 'near me.' We get you there before hail season — suburb by suburb, service by service — so the storm calls land with you.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, own your leads',
      blurb: "Rank for the money keywords Des Moines homeowners search — including the seasonal storm and heating terms that define the busiest months — and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert storm searches',
      blurb: "Fast, mobile-first websites that turn Des Moines visitors into booked jobs — built for the homeowner searching on their phone right after a hailstorm, not brochures that sit there while the season passes.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for mobile speed and conversions — and migrate it carefully so you keep every ranking you've already earned heading into the next hail season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Des Moines?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are in position before hail season or Iowa winter, not scrambling to catch up after." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, restoration, HVAC, plumbing, solar, electrical, and general contractors. We understand storm-damage claims, insurance-driven work, cold-weather heating emergencies, and the seasonal rhythm of the Des Moines market." },
    { q: 'Why does the Des Moines market need a different approach?', a: "It's a weather-driven market where demand can spike overnight. Spring hail and tornado season sends a wave of homeowners searching at once, and the contractors already ranking capture it all. Winning here means being in position before the season — suburb by suburb, service by service — not reacting after the storm." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Des Moines areas do you serve?', a: "The full metro — Des Moines proper, plus Ankeny, Waukee, West Des Moines, Urbandale, Johnston, Altoona, Norwalk, Clive, and the neighborhoods inside them: East Village, Beaverdale, Sherman Hill, and more. We build real suburb pages rather than one generic Des Moines page." },
    { q: 'Where should I start?', a: "Start with a free Des Moines audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next demand window. No pitch deck — just a plan." },
  ],
};

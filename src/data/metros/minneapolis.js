// MINNEAPOLIS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Minneapolis's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// MINNEAPOLIS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Minneapolis is a cold-weather arms race',
  body:
    "The Minneapolis–St. Paul metro is home to about 3.7 million people, spread across a tight urban core and a fast-growing suburb belt of cities like Bloomington, Eden Prairie, Plymouth, Maple Grove, and Woodbury. The city itself sits on a lake system — 13 or more lakes within the city limits — which shapes everything from the kind of work lakefront homeowners need to how they search for it. But the single biggest force in this market isn't geography. It's weather. Minneapolis averages 54 inches of snow a year, and temperatures can hit -30°F in January. A heating failure in a Minnesota winter isn't an inconvenience — it's a life-or-death emergency. Freeze-thaw cycles crack foundations and driveways every spring. Ice dams tear up roofs all winter. Spring melt brings basement flooding calls. The contractors who rank before these emergencies hit are the ones who book all the work. This city also has a deep Scandinavian-heritage standard for quality: Minneapolis homeowners read reviews carefully, expect clean workmanship and professional communication, and will not hire a contractor who looks sloppy online. Standing out here means doing everything right — not just showing up.",
  pullQuote: 'When January drops to -30°F and the furnace goes out, the only contractor who gets that call is the one already on the map.',
  donut: {
    title: 'How Minneapolis searches',
    value: 58,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 58, kind: 'teal' },
      { label: 'Desktop', pct: 42, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter heating (Dec–Mar) and spring melt (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 70 }, { m: 'M', v: 58, peak: true }, { m: 'J', v: 48 }, { m: 'J', v: 44 },
    { m: 'A', v: 46 }, { m: 'S', v: 52 }, { m: 'O', v: 60 },
    { m: 'N', v: 72 }, { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '3.7M', label: 'people across the Minneapolis–St. Paul metro' },
    { value: '54"', label: 'of snow per year, plus temps that hit -30°F in January', accent: true },
    { value: 'Dec–Mar', label: 'winter heating season, the single biggest demand driver' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Uptown', 'Linden Hills', 'Kenwood', 'Northeast Minneapolis', 'North Loop',
    'St. Paul', 'Eagan', 'Bloomington', 'Eden Prairie', 'Plymouth',
    'Maple Grove', 'Woodbury', 'Burnsville', 'Apple Valley', 'Lake of the Isles',
  ],
};

const AREAS = [
  'Minneapolis', 'St. Paul', 'Bloomington', 'Eden Prairie', 'Plymouth',
  'Maple Grove', 'Woodbury', 'Burnsville', 'Apple Valley', 'Eagan',
  'Uptown', 'Linden Hills', 'Kenwood', 'Northeast Minneapolis', 'North Loop',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that two or three of their competitors bought the same day. That model doesn't work here. Minneapolis homeowners are thorough — they check your reviews, look at your website, and if anything looks off, they move on. You can't win that buyer with a shared lead. So everything we do is built around owning your visibility: ranking for the searches that matter, converting the visitor who lands on your site, and building a pipeline that belongs to you. No 12-month handcuffs. If we're not delivering, you fire us.";

const WHY = [
  {
    title: 'We understand Minnesota winters',
    body: "Heating failures, ice dams, frozen pipes, spring melt flooding — we know these aren't seasonal nuances, they're the core of why Minneapolis homeowners pick up the phone. Everything we build is shaped around the demand those emergencies create and the urgency behind those searches.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners two of your competitors also called that morning.",
  },
  {
    title: 'We actually understand Minneapolis',
    body: "Neighborhood-by-neighborhood targeting from Linden Hills to Maple Grove, lakefront-specific pages for the Lake of the Isles crowd, and the quality standard a Scandinavian-heritage market expects. Things a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Minneapolis contractor gets around 1,800 local \"near me\" impressions a month across a handful of neighborhoods and suburbs. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and in a market where the busiest weeks hit all at once during a winter cold snap or a spring melt, being ranked before the spike is everything. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Minneapolis', state: 'Minnesota', stateAbbr: 'MN', metro: 'Minneapolis-St. Paul',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const minneapolisLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'minneapolis', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Minneapolis Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Minneapolis and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Minneapolis, MN',
    h1: 'When Minneapolis searches for what you do, be the first name they find',
    h2Exact: 'Minneapolis Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market with brutal winters and demanding homeowners, we get you into that top three for your neighborhoods and suburbs — so when January drops to -30°F and a furnace dies, the emergency call lands with you.",
    primaryCta: 'Get my free Minneapolis audit',
    intro:
      "Minneapolis local SEO comes down to one thing: when a homeowner in Linden Hills or Maple Grove searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has two distinct demand patterns — a brutal winter heating season and a rapid spring melt — and the contractors already ranking are the ones who capture that work. Here's how you become one of them.",
    aioQuestion: 'How do Minneapolis businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Minneapolis neighborhoods and suburbs. Minneapolis homeowners read reviews carefully and expect a polished online presence, so trust signals matter more here than in many markets. Winter heating and spring melt create sharp demand spikes, so ranking before those seasons — not during — is how contractors capture the busiest weeks.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — and in Minneapolis, when a cold snap hits and people need a heating contractor fast, there's no time to scroll. Getting into that top three for your neighborhoods is usually the single highest-return move a Minneapolis contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Minneapolis homeowner to several contractors, then bill each of you to compete for the job. In a market where homeowners are already researching reviews and comparing carefully, a shared lead is a tough fight every time. Local SEO builds the opposite: a homeowner finds you, trusts you before they call, and nobody else got that lead." },
      { title: "You're invisible when demand spikes", body: "Minneapolis demand is seasonal and sharp. When temperatures plunge in January or snow starts melting into basements in April, search volume for heating, roofing, and water-damage services spikes overnight. The contractors who rank year-round are the ones who capture those weeks. If you're not visible before the season, you're chasing it after." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Minneapolis and suburb searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "Minneapolis homeowners check reviews before they hire anyone. A simple system that turns finished jobs into a steady flow of reviews lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Uptown, Linden Hills, Eden Prairie, Maple Grove and the rest, so you rank for the specific area someone's actually searching — not just \"Minneapolis.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Minneapolis and Twin Cities sources Google trusts — local press, neighborhood associations, trade groups, partners. This is what separates page one from page two here." },
      { name: 'Seasonal and emergency SEO', desc: "We optimize for winter heating, ice dam, and spring melt searches before those seasons hit, so when demand spikes overnight, the calls land with you.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Minneapolis neighborhoods and suburbs and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. In a market where homeowners read reviews carefully, this step matters more here than almost anywhere. These signals compound week over week." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Minneapolis and the suburb belt, plus the on-page work and seasonal content to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Minneapolis neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood and suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Twin Cities.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Minneapolis?', a: "Most Minneapolis engagements land between $750 and $2,500 a month, depending on how many neighborhoods, suburbs, and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Minneapolis and suburb keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this demanding is selling you something." },
      { q: 'What makes Minneapolis local SEO different from other markets?', a: "Two things. The demand is sharply seasonal — winter heating, ice dams, and spring melt create massive overnight spikes — so you need to rank before those seasons, not during. And Minneapolis homeowners are unusually thorough: they read reviews carefully, expect professional-looking online presence, and won't hire someone who looks sloppy. Trust signals matter more here." },
      { q: 'Should I target Minneapolis or the suburbs?', a: "Both, ideally. The suburb belt — Bloomington, Eden Prairie, Plymouth, Maple Grove, Woodbury — is growing fast and those homeowners search the same way city residents do. We build pages and optimize your profile for the specific areas you serve, so you rank whether someone searches from Uptown or Maple Grove." },
      { q: 'Which areas do you cover?', a: "Minneapolis, St. Paul, and the full suburb belt — Bloomington, Eden Prairie, Plymouth, Maple Grove, Woodbury, Burnsville, Apple Valley, Eagan, and the neighborhoods inside the city like Uptown, Linden Hills, Kenwood, Northeast, and the North Loop. We build genuine local pages instead of one generic Twin Cities page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand winter heating emergencies, ice dam and freeze-thaw damage, and the spring melt flooding season — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — and in a market where homeowners are already doing their research, owned visibility converts far better than a shared lead does." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Minneapolis neighborhoods and suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'minneapolis', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Minneapolis SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Minneapolis SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a seasonal market. Free Minneapolis SEO audit.',
    eyebrow: 'SEO Services · Minneapolis, MN',
    h1: 'Get your Minneapolis business to the top of Google and keep it there',
    h2Exact: 'Minneapolis SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Minneapolis customers search — heating emergencies in January, ice dam repairs in February, basement waterproofing in April — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Minneapolis SEO audit',
    intro:
      "Minneapolis SEO comes down to one question: when someone in Maple Grove or Northeast Minneapolis searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market where demand is seasonal, sharp, and concentrated — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Minneapolis businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Minneapolis neighborhoods and suburbs, and earning links from trusted Twin Cities sources. In a market driven by seasonal spikes, ranking for winter heating and spring melt terms before those seasons arrive is one of the highest-return moves a contractor can make — because demand doesn't wait.",
    problemHeading: "Three reasons your Minneapolis site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a market where most of the year's biggest demand arrives in concentrated bursts — a January cold snap, a March thaw — a homeowner with a flooded basement or a dead furnace is not scrolling to page two. If you're not in the top handful of results for what you sell, it almost doesn't matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. And in a seasonal market, pausing ads during slow months means restarting them from scratch before every spike. SEO builds an asset you own: rankings that keep producing leads year after year, including through the slow months, at a fraction of the per-lead cost of paid traffic." },
      { title: "You're not ranking before the season", body: "Minneapolis demand swings hard with the weather — furnaces and boilers in December, ice dams in February, basement flooding in April. SEO takes months to build. If you start optimizing when the season arrives, you're too late. The contractors who rank for those terms ahead of time are the ones who book the work when it spikes." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Minneapolis customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Twin Cities and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Minneapolis neighborhoods and the suburb belt alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for winter heating, ice dam, frozen pipe, and spring melt searches before the season arrives — so the overnight spike in demand lands on you, not your competitors.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Minneapolis leads — including the seasonal terms that drive your busiest weeks." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including seasonal and emergency terms tied to Minneapolis's weather patterns." },
      { name: 'Build authority', desc: "Links and citations from trusted Twin Cities and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Minneapolis SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Minneapolis–St. Paul search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Minneapolis?', a: "Most Minneapolis SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Minneapolis?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb or neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Minneapolis contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and in a seasonal market, stopping ads between peak periods means rebuilding from scratch every time. SEO is an asset you own that keeps producing leads year-round at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Minneapolis SEO target seasonal demand?', a: "Absolutely — this is one of the most important things to get right here. When a cold snap hits in January or snow starts melting in March, search volume for heating, boiler, ice dam, and basement waterproofing spikes overnight. Ranking takes months to build, so you need to be in place before the season. We optimize for those terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search results." },
      { q: 'Which areas around Minneapolis do you cover?', a: "Minneapolis, St. Paul, and the full suburb belt — Bloomington, Eden Prairie, Plymouth, Maple Grove, Woodbury, Burnsville, Apple Valley, Eagan — with genuine local pages rather than one generic Twin Cities page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. Minneapolis homeowners do their research before calling, so owning your search visibility means those leads come in pre-qualified — far better than a shared lead three competitors also got." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes including any seasonal gaps, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'minneapolis', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Minneapolis Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Minneapolis web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a demanding, review-driven market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Minneapolis, MN',
    h1: 'Minneapolis web design that turns visitors into booked jobs',
    h2Exact: 'Minneapolis Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. Minneapolis homeowners are thorough — they check your site, read your reviews, and decide in seconds whether you look like someone they'd trust with a heating emergency at -10°F. We build contractor websites that pass that test and convert the visit into a booked job.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Minneapolis contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that signals \"this is the contractor for my Linden Hills neighborhood.\" Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and convert visitors from Kenwood to Woodbury into booked jobs — built for a market where homeowners read everything before they hire.",
    aioQuestion: 'What makes a good contractor website in Minneapolis?',
    aioAnswer:
      "A good Minneapolis contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, and names the specific neighborhoods and suburbs you serve. Minneapolis homeowners are research-driven — they check reviews, look at photos of past work, and expect polished, professional presentation. A site that looks generic or loads slowly will cost you jobs to competitors who look more established, even if your work is better.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result — and when a Minneapolis homeowner has a heating emergency at midnight, they're not studying your site. They're tapping the first number that looks trustworthy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow or hard to use on a phone", body: "58% of Minneapolis searches happen on mobile, and visitors bounce fast if your site takes more than a few seconds to load. Slow sites also rank worse on Google. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or the season", body: "A homeowner in Eden Prairie wants to see you serve Eden Prairie — not a generic \"Minneapolis contractor\" page that could be anyone. And a site that doesn't mention ice dams, winter heating, or spring flooding misses the context that makes a Minnesota homeowner trust you actually know their market." },
    ],
    servicesHeading: "What's in an OnwardCraft Minneapolis website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want — winter emergency work, lakefront homes, or fast-growing suburb clients." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Minneapolis traffic arrives. Fast, thumb-friendly, easy to call from even on a cold January night." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to a Minnesota homeowner facing a heating failure or an ice dam, not filler text that reads like everyone else's site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Minneapolis and the suburb belt." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood and suburb-targeted pages', desc: "Pages built around Uptown, Kenwood, Eden Prairie, Maple Grove and the rest — so you stand out for the specific areas you serve instead of blending into a generic Twin Cities page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs — whether that's winter heating in Bloomington or lakefront work near Lake of the Isles — then map the site around booking more of what you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with seasonal context and the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — including before peak seasons." },
    ],
    pricing: {
      heading: 'Transparent Minneapolis web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services or suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood and suburb pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Minneapolis?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site hold up to how Minneapolis homeowners evaluate contractors?', a: "That's exactly what we design for. Minneapolis homeowners are thorough — they check reviews, look at project photos, and decide quickly whether a site looks professional. We build sites that pass that judgment: fast, polished, specific to your trade and the neighborhoods you serve, with trust signals front and center." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for Minneapolis and the suburb belt. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where the majority of your Minneapolis traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb — including when someone's searching for an emergency heating contractor on a cold night." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Minneapolis contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'minneapolis', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Minneapolis Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Minneapolis website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a review-driven market. Free audit.',
    eyebrow: 'Website Redesign · Minneapolis, MN',
    h1: 'Redesign your Minneapolis website without losing your rankings',
    h2Exact: 'Minneapolis Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and easy to dismiss when Minneapolis homeowners are comparing you to three other results. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings drop overnight. We do neither. We redesign Minneapolis contractor sites for speed and conversions, rebuild them to stand out in a research-driven market, and migrate with the redirects and SEO care that protect the traffic you've worked to earn.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and often improves them — because the new site is faster, mobile-first, and better structured than the old one, which Google rewards.",
    problemHeading: "Signs your Minneapolis site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Minneapolis homeowners are thorough evaluators. For a high-ticket job like a furnace replacement or a roof after ice-dam damage, they're judging you by your site in the first few seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your workmanship is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your visitors before they ever see your offer. In a market where a heating emergency leads to an immediate phone search, slow means lost. A redesign built mobile-first wins those visitors back." },
      { title: "It doesn't match the market you're serving", body: "A generic old site doesn't speak to lakefront homeowners near Lake of the Isles, to Eden Prairie families in newer construction, or to the seasonal urgency of a Minnesota winter. We rebuild around the context and neighborhoods that make Minneapolis homeowners trust you specifically." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just updating the look." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned. No post-launch traffic drop." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just aesthetics." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical for mobile visitors in a fast-decision market." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Minneapolis traffic arrives — including the emergency searches that matter most." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and meets the high standard Minneapolis homeowners expect before they call." },
      { name: 'Neighborhood and suburb-targeted rebuild', desc: "Rebuilt around the neighborhoods and suburbs you serve — Uptown, Kenwood, Maple Grove, Eden Prairie and more — so the new site resonates with locals instead of reading like a generic contractor page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — one that fits the Minneapolis market and your trade." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your existing traffic." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus updates timed around seasonal demand peaks." },
    ],
    pricing: {
      heading: 'Transparent Minneapolis redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood and suburb pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Minneapolis?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them because the new site is faster and better structured." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't converting visitors into calls, or doesn't speak to the specific neighborhoods and seasonal needs of the Minneapolis market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Minneapolis?', a: "Yes, and that's the point in a review-driven, research-heavy market like this. We rebuild around the specific neighborhoods and suburbs you serve, keep the site fast for mobile, and make sure the offer and call button are obvious — so the new site earns the trust Minneapolis homeowners are looking for." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings, and matters especially when someone searches for a heating contractor on their phone at midnight in January." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix to compete in Minneapolis, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const minneapolisCity = {
  citySlug: 'minneapolis', city: 'Minneapolis', state: 'Minnesota', stateAbbr: 'MN', metro: 'Minneapolis-St. Paul',

  titleTag: 'Minneapolis Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Minneapolis contractors. Get found, get booked, and own your leads instead of renting them — built for a cold-weather, review-driven market. Free Minneapolis audit.',

  eyebrow: 'Minneapolis · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Minneapolis contractors found and booked',
  h2Exact: 'Minneapolis Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Minneapolis's brutal winters, lakes-filled neighborhoods, and demanding homeowners. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Minneapolis audit',

  intro:
    "If you run a contracting business in Minneapolis, you're operating in a market with two forces working against you: fierce competition from dozens of contractors fighting for the same search results, and demand that arrives in sharp seasonal bursts — winter heating failures, ice dam damage, spring melt flooding. The contractors who win here are ranked before those spikes hit, not chasing leads after. Winning takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods and suburbs you serve. Here's how we help Minneapolis contractors do exactly that.",
  aioQuestion: 'How do Minneapolis contractors get more leads online?',
  aioAnswer:
    "Minneapolis contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood and suburb by suburb. Because demand is sharply seasonal — with winter heating and spring melt driving the biggest spikes — the contractors who rank before those seasons arrive capture the most work. Minneapolis homeowners are also unusually thorough researchers who check reviews and expect polished online presence, so trust signals and quality content matter more here than in many other markets.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Minneapolis searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood and suburb by suburb.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including winter heating and spring melt terms before the season arrives. Build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to pass the Minneapolis homeowner's thorough evaluation — polished, specific to your trade and neighborhoods, with a clear offer and call button that books the job.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions in a review-driven market, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Minneapolis?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a competitive, seasonal market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand winter heating emergencies, ice dam and freeze-thaw damage, and the spring melt flooding season that drives so much Minneapolis demand." },
    { q: 'Why does the Minneapolis market need a different approach?', a: "Two things make it distinct. Demand is sharply seasonal: winter heating, ice dams, and spring melt flooding create massive overnight spikes, and you need to rank before those seasons arrive. And Minneapolis homeowners are research-driven — they read reviews carefully and expect a polished, professional online presence before they call. A generic template approach fails on both counts." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Minneapolis areas do you serve?', a: "Minneapolis, St. Paul, and the full suburb belt — Bloomington, Eden Prairie, Plymouth, Maple Grove, Woodbury, Burnsville, Apple Valley, Eagan — plus neighborhoods inside the city like Uptown, Linden Hills, Kenwood, Northeast Minneapolis, and the North Loop." },
    { q: 'Where should I start?', a: "Start with a free Minneapolis audit. We'll look at your website, your rankings, and your Map Pack presence across your neighborhoods and suburbs, then tell you the one or two moves that will bring in the most work fastest — including whether there are seasonal gaps to close before the next heating or melt season. No pitch deck, just a plan." },
  ],
};

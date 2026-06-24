// SAVANNAH — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Savannah's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SAVANNAH — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Savannah is unlike anywhere else in the South',
  body:
    "Savannah is one of America's most distinctive cities — 22 historic squares, a National Historic Landmark district full of antebellum and Victorian homes, and a coastline that gets hit by Atlantic hurricanes. That combination creates a contractor market unlike anywhere else. Historic preservation requirements mean homeowners can't just call any roofer or renovation company — they need specialists who understand what the city will approve. And every June, hurricane season begins, turning roofing, storm prep, and flood restoration into urgent-demand categories that can stay backlogged for a year or more. Layer on top of that the 15,000 SCAD students and creative professionals who buy and renovate historic homes, the Port of Savannah's enormous logistics workforce, and a Pooler-to-Richmond-Hill suburban ring that keeps adding new homeowners — and you have a market with more complexity, more demand, and more opportunity than it looks like from the outside.",
  pullQuote: 'In Savannah, the contractors already ranking before hurricane season are the ones who book the work — and the ones approved for historic work never have to advertise.',
  donut: {
    title: 'Savannah city demographics',
    value: 54,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 54, kind: 'teal' },
      { label: 'Other', pct: 46, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov) + HVAC demand (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 32 }, { m: 'F', v: 30 }, { m: 'M', v: 36 }, { m: 'A', v: 42 },
    { m: 'M', v: 52 }, { m: 'J', v: 72, peak: true }, { m: 'J', v: 85, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'S', v: 94, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 60, peak: true }, { m: 'D', v: 38 },
  ],
  stats: [
    { value: '400K+', label: 'people across the Savannah metro and surrounding counties' },
    { value: '15,000', label: 'SCAD students driving historic home renovation demand', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing and restoration demand spikes hard' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in Savannah searches' },
  ],
  neighborhoods: [
    'Victorian District', 'Thomas Square', 'Midtown', 'Ardsley Park', 'Historic District',
    'Starland District', 'Baldwin Park', 'Skidaway Island', 'Isle of Hope', 'Pooler',
    'Richmond Hill', 'Rincon', 'Hinesville', 'Effingham County', 'Bryan County',
  ],
};

const AREAS = [
  'Savannah', 'Pooler', 'Richmond Hill', 'Rincon', 'Hinesville', 'Bluffton',
  'Garden City', 'Port Wentworth', 'Tybee Island', 'Thunderbolt', 'Skidaway Island',
  'Effingham County', 'Bryan County', 'Ludowici', 'Claxton',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm season, historic preservation constraints, and emergency calls, so everything we build is shaped around how your Savannah customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Savannah',
    body: "Coastal hurricane exposure, historic district preservation requirements, SCAD-driven renovation demand, Port of Savannah workers buying in the suburbs. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Savannah contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and after a hurricane, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Savannah', state: 'Georgia', stateAbbr: 'GA', metro: 'Savannah',
  heroProof: ['Built for the trades', 'Hurricane-coast ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const savannahLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'savannah', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Savannah Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Savannah Local SEO that gets you found in the Map Pack when neighbors from the Historic District to Pooler search your trade.',
    eyebrow: 'Local SEO · Savannah, GA',
    h1: 'Savannah Local SEO that gets you found when Ardsley Park neighbors search your trade',
    h2Exact: 'Savannah Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three — so the call lands with you instead of whoever ranked first, and so you're positioned before the next hurricane fills everyone's phone.",
    primaryCta: 'Get my free Savannah audit',
    intro:
      "Savannah Local SEO comes down to one thing: when a homeowner in Ardsley Park or Pooler searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Add in the historic district's specialist-contractor demand, the steady coastal storm threat, and a suburban ring that keeps growing, and winning the local 3-pack is the whole game. Here's how you get into the Google Map Pack.",
    aioQuestion: 'How do Savannah businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Savannah neighborhoods. Savannah's historic district and coastal storm exposure create specialist demand that generalist national competitors can't serve — positioning yourself as the local expert is what separates the top three from everyone else.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Savannah contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Savannah homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the storm hits", body: "When Hurricane Matthew struck in 2016 and Dorian threatened in 2019, demand for roofing, restoration, and flood repair didn't climb — it exploded. The contractors already ranking took those calls. If you're invisible on the map when the next one lands, the work goes to whoever Google already trusts. Ranking now is how you catch that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Savannah searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Victorian District, Ardsley Park, Pooler, Richmond Hill, and the rest — so you rank for the neighborhood someone's actually searching, not just \"Savannah.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Savannah sources Google trusts — local press, preservation organizations, associations, partners. This is what separates page one from page two here." },
      { name: 'Hurricane-season readiness', desc: "We get your profile, pages, and reviews ranking before storm season so you catch the demand spike instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Chatham County and the surrounding suburbs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Savannah-area neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across coastal Georgia.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Savannah?', a: "Most Savannah engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Savannah keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this specialized is selling you something." },
      { q: 'What makes Savannah local SEO different?', a: "Two things. The historic district and coastal storm exposure create specialist demand that national platforms can't serve — homeowners in the National Historic Landmark district need contractors who know preservation codes, not the cheapest option on Angi. And hurricane season means trade demand can spike overnight, so your ranking has to be in place before the storm, not after." },
      { q: 'How does local SEO help me during hurricane season?', a: "When storms like Matthew or Dorian threaten Savannah, searches for roofing, restoration, and flood repair spike fast, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you catch that demand instead of competing for scraps after everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of greater Savannah and the surrounding region — Victorian District, Ardsley Park, Thomas Square, Pooler, Richmond Hill, Rincon, Skidaway Island, Tybee Island, Hinesville and more. We build genuine neighborhood pages rather than one generic Savannah page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, historic preservation constraints, and insurance jobs — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day Savannah Local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'savannah', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Savannah SEO Company | Coastal Contractor Rankings | OnwardCraft',
    metaDescription:
      'Savannah SEO that turns coastal, hurricane-season organic traffic into booked work. Revenue-tied reporting, no lock-in contracts, built for contractors.',
    eyebrow: 'SEO Services · Savannah, GA',
    h1: 'Savannah SEO that turns hurricane-season organic traffic into booked work across Chatham County',
    h2Exact: 'Savannah SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Savannah customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Savannah SEO audit',
    intro:
      "Savannah SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a historic, coastal market built around specialist demand, storm-driven spikes, and a suburban ring that keeps growing, and we measure that organic traffic in leads, not vanity numbers.",
    aioQuestion: 'How do Savannah businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Savannah sources. In a coastal market with strong historic preservation demand and seasonal hurricane spikes, ranking for specialist and storm-driven terms ahead of the competition is one of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Savannah site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Savannah demand spikes hard during hurricane season and surges around historic preservation renovations that SCAD-driven homeowners undertake year-round. The contractors who rank for those terms ahead of time catch the work. If your SEO ignores those searches, you're leaving your biggest opportunities on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Savannah customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Savannah and industry sources. In a market with strong local identity, links from trusted local outlets are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the hurricane-driven and seasonal searches that drive Savannah's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Savannah leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, storm-driven, and historic-preservation terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Savannah and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Savannah SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Savannah-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-location or suburban expansion', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Savannah?', a: "Most Savannah SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Savannah?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Savannah keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Savannah SEO target hurricane season?', a: "Yes. When storms threaten the Georgia coast, searches for roofing, restoration, and flood repair spike fast — and ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those seasonal and storm-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Savannah do you cover?', a: "All of greater Savannah and the surrounding region — Victorian District, Ardsley Park, Pooler, Richmond Hill, Rincon, Skidaway Island, Tybee Island, Hinesville and more — with genuine local pages rather than one generic Savannah page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Savannah SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'savannah', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Savannah Web Design Company | Built for the Coast | OnwardCraft',
    metaDescription:
      'Savannah Web Design that makes Historic District and coastal homeowners pick you. Fast, mobile-first contractor sites built for hurricane-season demand.',
    eyebrow: 'Web Design · Savannah, GA',
    h1: 'Savannah Web Design that makes Historic District homeowners pick you',
    h2Exact: 'Savannah Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Savannah contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up when hurricane season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Savannah Web Design done right fixes the leak most contractor websites lose leads to: slow on a phone, buried call button, no clear offer. We build mobile-first sites that load fast, look like the specialist you are, and turn Victorian-District-to-Richmond-Hill visitors into booked jobs, and that don't fall over when a storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Savannah?',
    aioAnswer:
      "A good Savannah contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during hurricane season. For contractors serving the historic district, it also needs to communicate specialist expertise in historic preservation work — because that's what those homeowners are specifically searching for.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Savannah visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a storm-season surge", body: "When hurricane threats put every homeowner in research mode overnight, contractor sites get flooded with traffic — and the slow ones lose leads right when the jobs are biggest. We build sites that stay fast and keep the call button obvious when it matters most." },
    ],
    servicesHeading: "What's in an OnwardCraft Savannah website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want — including the historic district and suburban growth corridors." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Savannah traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — and historic-district owners with specialist needs — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Savannah's distinct areas." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when hurricane-season traffic spikes — the moment that turns visitors into your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want — including any historic preservation or specialist positioning." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Savannah web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Savannah?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a hurricane-season traffic spike?', a: "Yes, and in Savannah that matters. When storm threats arrive, contractor sites take a flood of traffic overnight, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Savannah terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Savannah traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what high-converting Savannah Web Design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'savannah', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Savannah Website Redesign | OnwardCraft',
    metaDescription:
      'Savannah Website Redesign that rebuilds for leads without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · Savannah, GA',
    h1: 'Savannah Website Redesign that turns an aging Starland District site into a lead engine',
    h2Exact: 'Savannah Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Savannah contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Savannah Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Savannah contractor sites for speed and conversions, build them to handle hurricane-season traffic, and run an SEO-safe migration with the redirects that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Savannah site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — especially in the historic district where homeowners are investing in significant restoration work — they judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Savannah visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow when a hurricane threat sends everyone into research mode loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Savannah traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work — and signals the specialist expertise that Savannah's historic district homeowners are searching for." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when hurricane-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Savannah redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Savannah?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or loses visitors when hurricane-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle hurricane-season traffic?', a: "Yes, and in Savannah that's a real consideration. When storm threats arrive, contractor sites get flooded with traffic overnight, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Savannah Website Redesign should fix, and a fixed-price quote with a timeline and a safe, SEO-safe migration plan." },
    ],
  },
];

export const savannahCity = {
  citySlug: 'savannah', city: 'Savannah', state: 'Georgia', stateAbbr: 'GA', metro: 'Savannah',

  titleTag: 'Savannah Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Savannah marketing for contractors: web design, SEO, and local SEO that get you found and booked. Own your leads instead of renting them, ready for storm season.',

  eyebrow: 'Savannah · Web Design, SEO & Lead Generation',
  h1: 'Savannah marketing for contractors that turns Pooler-to-Richmond-Hill searches into jobs',
  h2Exact: 'Savannah Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Savannah's historic-district, hurricane-coast market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Hurricane-coast ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Savannah audit',

  intro:
    "Savannah marketing for contractors has to fit one of the most distinctive and demanding markets in the South. Historic preservation requirements mean homeowners can't call just any contractor. Hurricane season means demand spikes fast and the backlog fills the calendar of whoever is already ranking. And the suburban ring from Pooler to Richmond Hill keeps adding new homeowners who need exactly what you offer. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all in place before the next storm arrives. Here's how we help Savannah contractors do exactly that.",
  aioQuestion: 'How do Savannah contractors get more leads online?',
  aioAnswer:
    "Savannah contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Savannah has strong specialist demand from the historic district and demand spikes hard during hurricane season, the contractors who look established, communicate expertise, and are already ranking before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Savannah searches \"near me.\" The single highest-return move for most local businesses — and how you catch hurricane-season demand before anyone else.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including historic district renovation and storm restoration terms — build an asset you own, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stay fast when hurricane season floods your phone — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Savannah?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when hurricane season hits or a preservation project comes to market." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, historic preservation constraints, and insurance work." },
    { q: 'Why does hurricane season matter for my marketing?', a: "When storms threaten Savannah's coastline, demand for roofing, restoration, and flood repair spikes overnight and the backlog can fill a calendar for a year. Ranking takes months to build, so the contractors who are already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Savannah areas do you serve?', a: "All of greater Savannah and the surrounding region — Victorian District, Ardsley Park, Thomas Square, Midtown, Pooler, Richmond Hill, Rincon, Skidaway Island, Tybee Island, Hinesville, and more." },
    { q: 'Where should I start?', a: "Start with a free Savannah audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Savannah marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

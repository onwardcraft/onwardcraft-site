// KILLEEN — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Killeen's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// KILLEEN — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Killeen is unlike any other Texas market',
  body:
    "The Killeen-Temple metro is defined by one force that no other Texas market shares: Fort Cavazos, the largest US Army post by active-duty troop count, with more than 45,000 soldiers and their families stationed here at any given time. Every 2 to 3 years, a massive wave of those families receives PCS orders — Permanent Change of Station — packs up, and searches Google for a new contractor on arrival. That cycle never stops. It means Killeen generates an extraordinary volume of contractor searches relative to its size, and it means a contractor who ranks is capturing customers who are highly motivated to book fast. Layer on Central Texas heat that pushes HVAC demand hard from June through September, spring tornado and hail seasons that drive roofing demand from March through June, and the 2021 freeze that left thousands of homes with burst pipes, and you have a market where demand spikes are the norm, not the exception. The businesses already ranking are the ones booking all of it.",
  pullQuote: 'Fort Cavazos generates more contractor searches per capita than almost any civilian market — and the PCS cycle never stops.',
  donut: {
    title: 'Military connection in Killeen',
    value: 45,
    centerLabel: 'military-connected',
    legend: [
      { label: 'Military households', pct: 45, kind: 'teal' },
      { label: 'Civilian', pct: 55, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Storms + HVAC (Mar–Sep), freeze emergencies (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 58 }, { m: 'F', v: 70, peak: true }, { m: 'M', v: 85, peak: true }, { m: 'A', v: 92, peak: true },
    { m: 'M', v: 90, peak: true }, { m: 'J', v: 95, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'A', v: 94, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 52 },
    { m: 'N', v: 40 }, { m: 'D', v: 55 },
  ],
  stats: [
    { value: '45,000+', label: 'active-duty soldiers stationed at Fort Cavazos' },
    { value: 'Every 2–3 yrs', label: 'PCS cycle — military families search for contractors on arrival', accent: true },
    { value: 'Jun–Sep', label: 'Central Texas heat season, when HVAC demand peaks 100–105°F' },
    { value: 'Mar–Jun', label: 'tornado and hail season driving roofing demand across the region' },
  ],
  neighborhoods: [
    'Killeen', 'Fort Cavazos', 'Copperas Cove', 'Harker Heights', 'Nolanville',
    'Belton', 'Temple', 'Lampasas', 'Gatesville', 'Waco (nearby)',
    'Georgetown (nearby)', 'Round Rock (nearby)', 'Killeen Heights', 'East Killeen', 'West Killeen',
  ],
};

const AREAS = [
  'Killeen', 'Temple', 'Fort Cavazos', 'Harker Heights', 'Copperas Cove',
  'Nolanville', 'Belton', 'Lampasas', 'Gatesville', 'Hewitt',
  'Woodway', 'Waco', 'Georgetown', 'Round Rock', 'Salado',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand PCS season, storm season, freeze emergencies, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when a military family just got to town and needs to book someone this week.",
  },
  {
    title: 'We actually speak Killeen',
    body: "Fort Cavazos PCS demand, Central Texas heat, tornado and hail season, and the unique rhythm of a military-heavy market. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Killeen contractor gets around 1,200 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and during PCS season or after a hail storm, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Killeen', state: 'Texas', stateAbbr: 'TX', metro: 'Killeen-Temple (Fort Cavazos)',
  heroProof: ['Built for the trades', 'Military-market ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const killeenLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Killeen Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Killeen and three businesses show up on the map. We get you into those three, so the call lands with you — especially during PCS season and storm demand. Free audit.',
    eyebrow: 'Local SEO · Killeen-Temple (Fort Cavazos)',
    h1: 'When Killeen searches for what you do, be the first name they find',
    h2Exact: 'Killeen Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — and so you're ready when PCS season and Central Texas storms send demand through the roof.",
    primaryCta: 'Get my free Killeen audit',
    intro:
      "Killeen local SEO comes down to one thing: when a military family just arrived at Fort Cavazos searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With thousands of PCS arrivals every year and brutal Central Texas heat and storm seasons driving year-round demand spikes, being one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Killeen businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Killeen-area neighborhoods. In a military market like Killeen, showing up fast and looking established matters enormously — PCS families have a short window to find and book a contractor, and they're searching from a phone the moment they arrive.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Killeen contractor can make, because that's where PCS families and hail-storm homeowners both land." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Killeen homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a military family finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when demand spikes", body: "When a hail storm rolls through Bell County, when temperatures hit 105°F in July, or when a new PCS wave arrives at Fort Cavazos, searches spike and the contractors already ranking take the calls. If you're invisible on the map when the next surge hits, the work goes to whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Killeen searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone — especially military families who are new to town and don't know anyone yet." },
      { name: 'Neighborhood pages', desc: "Real pages for Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Temple and the rest, so you rank for the neighborhood someone's actually searching, not just \"Killeen.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Central Texas sources Google trusts — local press, associations, Fort Cavazos community resources, partners. This is what separates page one from page two here." },
      { name: 'PCS-season and storm readiness', desc: "We get your profile, pages, and reviews ranking before PCS waves and storm season so you catch the demand spike instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before the next PCS wave." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Bell, Coryell, and McLennan counties, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Killeen-Temple areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Killeen-Temple.', features: ['Everything in Local Growth', 'Local link building', 'PCS-season and storm demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Killeen?', a: "Most Killeen engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Killeen keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Killeen local SEO different?', a: "The Fort Cavazos PCS cycle. Thousands of military families arrive and immediately search for contractors on their phones — HVAC, plumbing, roofing, you name it. They have to book fast and they don't know anyone locally, so they call the first business they trust on Google. Ranking ahead of that wave is the opportunity most Killeen contractors are missing." },
      { q: 'How does local SEO help me during PCS season?', a: "PCS families arrive with urgent contractor needs and no local network — they go straight to Google and call whoever looks most established. If you're in the Map Pack with good reviews and a real service area presence, you catch those calls. If you're on page two, you don't exist." },
      { q: 'Which areas do you cover?', a: "All of the Killeen-Temple metro — Killeen, Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, Lampasas, Gatesville and more. We build genuine neighborhood pages instead of one generic Killeen page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, freeze emergencies, and military-market timing, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Killeen SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Killeen SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Fort Cavazos PCS demand and storm season. Free audit.',
    eyebrow: 'SEO Services · Killeen-Temple (Fort Cavazos)',
    h1: 'Get your Killeen business to the top of Google and keep it there',
    h2Exact: 'Killeen SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Killeen customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — so you capture PCS arrivals and storm-season demand instead of watching it go to whoever ranked first.",
    primaryCta: 'Get my free Killeen SEO audit',
    intro:
      "Killeen SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market driven by constant military turnover, brutal Central Texas summers, tornado and hail seasons, and freeze emergencies — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Killeen businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Central Texas sources. In a market shaped by Fort Cavazos PCS cycles and seasonal weather extremes, ranking for the right terms at the right times — HVAC in summer, roofing after hail, freeze repairs in winter — is what separates the contractors who stay booked from the ones who chase leads.",
    problemHeading: "Three reasons your Killeen site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks. In a market where military families need to book fast, you can't afford to be invisible." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. That matters in Killeen, where PCS demand is predictable and recurring — own your ranking and you own that customer pipeline." },
      { title: "You're not ranking for the demand that matters", body: "Killeen demand swings with PCS waves, summer heat, spring tornado season, and winter freeze risk. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores these seasonal and military-driven patterns, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Killeen customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Central Texas and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings — including from PCS families searching the moment they hit town." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & military-market SEO', desc: "We rank you for the PCS-driven, storm-season, summer-heat, and freeze-emergency searches that drive Killeen's busiest demand periods, so you're visible before the spike, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Killeen leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, PCS-driven, and storm terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Central Texas and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Killeen SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Killeen-Temple search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & military-market SEO', 'Multi-location support', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Killeen?', a: "Most Killeen SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Killeen?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Killeen keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Killeen contractors do best running SEO as the long-term engine and ads for short-term spikes like a PCS surge or a hail storm aftermath." },
      { q: 'Should my Killeen SEO target the Fort Cavazos community?', a: "Absolutely. Military families arriving on PCS orders have urgent contractor needs, no local network, and a tight timeline. They search immediately and book quickly. Ranking for the searches they run — and looking established and reviewed when they find you — is one of the highest-ROI opportunities in this market." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/military-market and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Killeen do you cover?', a: "All of the Killeen-Temple metro and the areas around it — Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, Lampasas, Gatesville and more — with genuine local pages rather than one generic Killeen page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — and PCS families who find you on Google convert fast." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Killeen Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Killeen web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving Fort Cavazos and the Killeen-Temple area. Free quote.',
    eyebrow: 'Web Design · Killeen-Temple (Fort Cavazos)',
    h1: 'Killeen web design that turns visitors into booked jobs',
    h2Exact: 'Killeen Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Killeen contractors fast, mobile-first sites engineered to turn visitors into booked work — so when a PCS family searches for you on arrival or a homeowner needs emergency HVAC in 105°F heat, the call lands with you.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Killeen contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Fort-Cavazos-to-Temple visitors into booked jobs — and that stay fast and clear when PCS season or a storm sends your traffic spiking.",
    aioQuestion: 'What makes a good contractor website in Killeen?',
    aioAnswer:
      "A good Killeen contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic surges during PCS season and storm demand. Military families arriving on PCS orders search from a phone and need to book quickly — a site that's slow, cluttered, or unclear loses them in seconds. The call button and a simple reason to trust you are what convert a PCS arrival into a booked job.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead — whether that's a PCS family who just arrived at Fort Cavazos or a homeowner whose AC quit in July." },
      { title: "It's too slow on a phone", body: "Most of your Killeen visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Military families searching on arrival don't wait. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a demand surge", body: "After a hail storm or in peak HVAC season, contractor sites get hit with a flood of traffic, and the slow ones buckle or bury the call button right when it mattered most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft Killeen website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Killeen traffic is — including PCS families searching on arrival. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'PCS- and storm-surge ready', desc: "Built to stay fast and keep the call button front and center when PCS arrivals or storm-season traffic spikes — the moments that can fill your calendar for months.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want — including how to position for the Fort Cavazos community." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Killeen web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'PCS- and storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Killeen?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site hold up when PCS season or storm demand hits?', a: "Yes, and in Killeen that matters. When PCS waves arrive or after a hail storm, contractor sites can see a big surge in traffic — and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious so your site converts under load." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Killeen terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Killeen traffic comes from — including military families searching on a phone the moment they get to town. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Killeen site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'killeen', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Killeen Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Killeen website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up during PCS season and storm demand. Free audit.',
    eyebrow: 'Website Redesign · Killeen-Temple (Fort Cavazos)',
    h1: 'Redesign your Killeen website without losing your rankings',
    h2Exact: 'Killeen Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Killeen contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned while the next PCS wave is already searching.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Killeen contractor sites for speed and conversions, build them to handle PCS-season and storm-driven traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and it converts the PCS arrivals and storm-season searches you've been missing.",
    problemHeading: "Signs your Killeen site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. A PCS family new to Killeen has no local referrals — they're going entirely off how your site looks. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Killeen visitors before they ever see your offer. Military families especially are searching on the go. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "An old site that gets slow under a storm surge or a PCS wave loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Killeen traffic lives — including Fort Cavazos families searching on arrival." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'PCS- and storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when PCS arrivals or storm-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
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
      heading: 'Transparent Killeen redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'PCS- and storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Killeen?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when PCS-season or storm traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle PCS-season and storm traffic?', a: "Yes, and in Killeen that's a real consideration. When PCS waves arrive or a hail storm rolls through Bell County, contractor traffic spikes fast. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const killeenCity = {
  citySlug: 'killeen', city: 'Killeen', state: 'Texas', stateAbbr: 'TX', metro: 'Killeen-Temple (Fort Cavazos)',

  titleTag: 'Killeen Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Killeen contractors. Get found, get booked, and own your leads — built for Fort Cavazos PCS demand, Central Texas heat, and tornado season. Free audit.',

  eyebrow: 'Killeen · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Killeen contractors found and booked',
  h2Exact: 'Killeen Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Killeen-Temple market — one of the highest-frequency contractor search markets in the US, shaped by Fort Cavazos PCS cycles, Central Texas heat, and spring tornado season.",
  heroProof: ['Built for the trades', 'Military-market ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Killeen audit',

  intro:
    "If you run a contracting business in Killeen, you're operating in a market unlike any other in Texas. Fort Cavazos drives a constant wave of PCS arrivals who need to book contractors fast. Central Texas summers push HVAC demand hard. Spring tornado and hail seasons spike roofing demand. And the 2021 freeze reminded everyone how quickly emergency plumbing calls can flood in. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — before the next PCS wave or weather event sends demand through the roof.",
  aioQuestion: 'How do Killeen contractors get more leads online?',
  aioAnswer:
    "Killeen contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. The Fort Cavazos PCS cycle means thousands of military families search for contractors each year with no local network to rely on — they call whoever looks most established and reviewed on Google. Ranking and looking trustworthy before they arrive is the highest-return move most Killeen contractors aren't making.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Killeen searches \"near me.\" The single highest-return move for most local businesses — and how you catch PCS arrivals and storm-season demand before your competitors do.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — from summer HVAC emergencies to post-hail roofing — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — whether they're a PCS family who just arrived at Fort Cavazos or a homeowner whose AC quit in 105°F heat.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned while the next demand wave is already searching.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Killeen?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when PCS season and storm demand hit." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, freeze emergencies, and the unique rhythm of a military market." },
    { q: 'Why does the Fort Cavazos PCS cycle matter for my marketing?', a: "Thousands of military families PCS in and out of Fort Cavazos every year. They arrive with urgent contractor needs and no local network — they search Google immediately and book whoever looks most established. Ranking and being well-reviewed before they arrive is a recurring lead opportunity that never stops. We get you in position to capture it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Killeen areas do you serve?', a: "All of the Killeen-Temple metro — Killeen, Fort Cavazos, Harker Heights, Copperas Cove, Nolanville, Belton, Temple, Lampasas, Gatesville and more — with genuine neighborhood pages rather than one generic Killeen page." },
    { q: 'Where should I start?', a: "Start with a free Killeen audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including how to position for the Fort Cavazos community. No pitch deck, just a plan." },
  ],
};

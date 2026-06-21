// RICHMOND — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Richmond's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// RICHMOND — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Richmond is harder than it looks',
  body:
    "Richmond is one of the oldest major cities in America, and that history is stamped on every street. Victorian row houses fill the Fan and Museum District. Antebellum mansions line Church Hill. Federal-period homes pack neighborhoods that have been standing for two centuries. Old bones mean constant need: HVAC systems that were never designed for today's load, pipes laid before modern standards, roofs that have been repaired so many times a full replacement is overdue. When you add mid-Atlantic weather — the tail end of Carolinas hurricanes like Florence and Isaias rolling through, nor'easters dropping ice, and Richmond summers that push heat indexes past a hundred — the demand for trade work is almost relentless. The market is anchored by a stable, educated professional base: Virginia Commonwealth University, the University of Richmond, and state government employment keep a consistent population of homeowners who invest in their properties. The RVA revival that turned Scott's Addition, Manchester, and Church Hill into destination neighborhoods brought a wave of young buyers who are gutting old homes and renovating them from the studs out. For a contractor, that is an almost ideal market — if they can be found when the call is urgent.",
  pullQuote: 'In a city of Victorian row houses, hurricane remnants, and young buyers gutting historic homes, the contractor who owns the map owns the work.',
  donut: {
    title: 'Richmond city demographics',
    value: 50,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 50, kind: 'teal' },
      { label: 'Other', pct: 50, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in RVA',
  seasonCaption: 'Hurricane remnants (Aug–Oct), nor\'easters (Jan–Mar), and summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 62, peak: true },
    { m: 'A', v: 48 }, { m: 'M', v: 44 }, { m: 'J', v: 72, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 80, peak: true },
    { m: 'N', v: 55 }, { m: 'D', v: 68 },
  ],
  stats: [
    { value: '1.3M', label: 'people across the Richmond metro area' },
    { value: '~50%', label: 'of Richmond city residents are Black or African American', accent: true },
    { value: 'Aug–Oct', label: 'peak hurricane remnant season driving storm and flood restoration calls' },
    { value: '200+ yrs', label: 'of housing stock in the Fan, Church Hill, and Museum District' },
  ],
  neighborhoods: [
    'The Fan', 'Museum District', 'Church Hill', 'Scott\'s Addition', 'Manchester',
    'Carytown', 'Short Pump', 'Glen Allen', 'Midlothian', 'Chesterfield',
    'Henrico', 'Northside', 'Southside', 'Bon Air', 'Forest Hill',
  ],
};

const AREAS = [
  'The Fan', 'Museum District', 'Church Hill', 'Scott\'s Addition', 'Manchester',
  'Carytown', 'Short Pump', 'Glen Allen', 'Midlothian', 'Chesterfield',
  'Henrico', 'Northside', 'Southside', 'Bon Air', 'Forest Hill',
];

const FOUNDER =
  "I'll be direct: I started OnwardCraft because I kept watching solid contractors burn through money on Angi and HomeAdvisor, competing for the same lead that three other guys already bought. Richmond has incredible housing stock and a homeowner base that genuinely invests in their properties — but contractors who can't be found on Google are invisible to all of it. The whole point of what we do is get you ranking for the work you actually want, in the neighborhoods you actually serve, and make those leads yours. No 12-month handcuffs. If we're not earning it, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, electrical, restoration, solar, GCs. We understand hurricane-remnant flooding jobs, Victorian-era pipe replacements, and ice-storm emergency calls — so everything we build is shaped around how Richmond homeowners actually search when something breaks.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners in Henrico who already heard from your three closest competitors.",
  },
  {
    title: 'We actually know RVA',
    body: "Neighborhood-by-neighborhood targeting from the Fan to Midlothian, plus content built around Richmond's real demand drivers — historic housing stock, James River flooding, and the seasonal patterns that make August and January your busiest months. The stuff a national agency can't do by swapping a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads and calls, month-to-month after 90 days. If we're not delivering, you leave. That keeps the pressure where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Richmond contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three on the map is the difference between a slow week and a booked-out calendar — and in a market with this much historic renovation demand and seasonal storm work, that gap is real. In your free audit, we model the numbers for your business — your actual rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Richmond', state: 'Virginia', stateAbbr: 'VA', metro: 'Richmond',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const richmondLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'richmond', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Richmond Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Richmond and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Richmond, VA',
    h1: 'When Richmond searches for what you do, be the first name they find',
    h2Exact: 'Richmond Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city full of historic homes, seasonal storm work, and young buyers renovating neighborhoods like Church Hill and Scott's Addition, we get you into that top three so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Richmond audit',
    intro:
      "Richmond local SEO comes down to one thing: when a homeowner in the Fan or Midlothian searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Richmond's housing stock is old, the weather is punishing, and the city is in the middle of a neighborhood revival — there is real, consistent demand here. The contractors who show up in the Map Pack capture it. Here's how you become one of them.",
    aioQuestion: 'How do Richmond businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Richmond neighborhoods like the Fan, Church Hill, and Midlothian. Richmond's demand spikes hard during hurricane-remnant season (August–October) and nor'easter season (January–March), so contractors who rank before those spikes arrive capture the most urgent work.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most Richmond homeowners never see your name. Getting into that top three for the neighborhoods you serve is usually the single highest-return move a local contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Richmond homeowner to four contractors, then charge each of you for the privilege of competing over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when demand spikes", body: "Richmond gets the tail end of Carolinas hurricanes and a full nor'easter season every winter. When Florence or Isaias rolls through, or when an ice storm takes out a roof, restoration and emergency calls spike overnight. The contractors already ranking capture that surge. If you're not in the Map Pack before the storm hits, you're missing your busiest work of the year." },
    ],
    servicesHeading: 'What it actually takes to rank you in RVA',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Richmond searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and gives Richmond homeowners a reason to call you over the next option." },
      { name: 'Neighborhood pages', desc: "Real pages for the Fan, Church Hill, Midlothian, Short Pump, and the rest — so you rank for the neighborhood someone's actually searching, not just \"Richmond.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Richmond sources Google trusts — local press, neighborhood associations, trade groups, and partners. This is what separates page one from page two in a competitive market." },
      { name: 'Seasonal storm and restoration SEO', desc: "We rank you for hurricane-remnant and nor'easter searches before the season arrives, so you capture the emergency surge instead of watching it go to whoever ranked first.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Richmond neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Richmond and the suburbs — the Fan, Museum District, Church Hill, Henrico, Chesterfield, and more." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Richmond neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Richmond and the suburbs.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm and restoration SEO', 'Multi-area pages (city + Henrico + Chesterfield)', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Richmond?', a: "Most Richmond engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Richmond keywords typically take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market with real demand is selling you something." },
      { q: 'What makes Richmond local SEO different from other cities?', a: "Two things. The housing stock is old — Victorian row houses and Federal-period homes in the Fan and Church Hill need constant work — so there's genuine underlying demand. And Richmond gets severe weather: hurricane remnants in late summer and nor'easters in winter drive emergency restoration spikes. Contractors who rank before those seasons hit capture the most valuable work." },
      { q: 'Can you help me rank for storm and flood restoration work?', a: "Yes, and in Richmond that's one of the highest-value things to rank for. Hurricane remnants like Florence and Isaias have both caused significant flooding here, and James River flooding adds to the restoration demand. We optimize for those seasonal and emergency search terms so you're visible when the phones are ringing hardest." },
      { q: 'Which areas do you cover?', a: "The full Richmond metro — the Fan, Museum District, Church Hill, Scott's Addition, Manchester, Carytown, Short Pump, Glen Allen, Midlothian, Chesterfield, and Henrico. We build genuine neighborhood pages instead of one generic Richmond page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, electrical, restoration, solar, and general contractors. We understand hurricane-remnant jobs, Victorian-era plumbing replacements, and the seasonal rhythms of the Richmond market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business — it's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms sell shared leads and you're competing with several other Richmond contractors for the same homeowner, at a cost that adds up fast. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Richmond neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'richmond', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Richmond SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Richmond SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for historic homes and seasonal demand. Free audit.',
    eyebrow: 'SEO Services · Richmond, VA',
    h1: 'Get your Richmond business to the top of Google and keep it there',
    h2Exact: 'Richmond SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Richmond homeowners search — Victorian-era renovations, storm restoration, summer HVAC — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Richmond SEO audit',
    intro:
      "Richmond SEO comes down to one question: when a homeowner in Midlothian or the Fan searches your service, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by old housing stock, mid-Atlantic severe weather, and a neighborhood revival that has buyers renovating homes from the studs out — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Richmond businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Richmond neighborhoods, and earning links from trusted local sources. In Richmond, the quickest wins usually come from ranking for seasonal demand — hurricane-remnant restoration in late summer, nor'easter heating and pipe work in winter, and HVAC in the hot Virginia summer — because those are the highest-urgency searches in the market.",
    problemHeading: "Three reasons your Richmond site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with this much trade demand — historic homes, seasonal storms, a neighborhood revival — if you're not in the top results for what you sell, your site is invisible no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For a Richmond contractor with consistent underlying demand, that compound return is significant." },
      { title: "You're not ranking for the demand that matters", body: "Richmond demand spikes hard in predictable patterns — hurricane remnants in August through October, nor'easters and ice storms in January through March, and summer HVAC in the heat. The contractors who rank for those seasonal and emergency terms before the spike arrives catch the most valuable work. If your SEO ignores that calendar, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in RVA',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Richmond homeowners search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Richmond and industry sources — local press, neighborhood associations, VCU-adjacent publications. In a market like this, links often separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Richmond neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & storm restoration SEO', desc: "We rank you for hurricane-remnant, flooding, and ice-storm searches before the season hits, so you're visible when homeowners are most urgently calling.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of local search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Richmond leads — including the seasonal storm and restoration terms that spike hardest." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including seasonal demand pages for the hurricane and nor'easter cycles." },
      { name: 'Build authority', desc: "Links and citations from trusted Richmond and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Richmond SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Richmond neighborhoods and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Richmond search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm restoration SEO', 'Multi-area pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Richmond?', a: "Most Richmond SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Richmond?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads in Richmond?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Richmond contractors do best running SEO as the long-term engine and ads for short-term spikes during peak storm season." },
      { q: 'Should my Richmond SEO target seasonal demand?', a: "Absolutely. When a hurricane remnant rolls through, searches for flooding, water damage, and restoration spike overnight. When a nor'easter hits, heating and pipe calls jump. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal storm SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search results." },
      { q: 'Which areas around Richmond do you cover?', a: "The full metro — the Fan, Museum District, Church Hill, Scott's Addition, Manchester, Carytown, Short Pump, Glen Allen, Midlothian, Chesterfield, and Henrico — with genuine local pages rather than one generic Richmond page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads that your competitors bought too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'richmond', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Richmond Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Richmond web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving historic neighborhoods and seasonal demand. Free quote.',
    eyebrow: 'Web Design · Richmond, VA',
    h1: 'Richmond web design that turns visitors into booked jobs',
    h2Exact: 'Richmond Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Richmond contractors fast, mobile-first sites engineered to convert visitors into booked work — sites that speak to homeowners in the Fan, Church Hill, and Midlothian and hold up when storm-season calls come in hot.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Richmond contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. In a city full of old houses, seasonal restoration demand, and young buyers gutting neighborhoods like Scott's Addition and Manchester, that's a real cost. We build sites that load fast, look like the professional you are, and turn visitors into booked jobs — built around the specific RVA neighborhoods you serve.",
    aioQuestion: 'What makes a good contractor website in Richmond?',
    aioAnswer:
      "A good Richmond contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve — the Fan, Midlothian, Church Hill, Short Pump, and the rest. Because Richmond homeowners are often dealing with aging housing stock or urgent weather events, a site that communicates reliability and local knowledge quickly is what books the job.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. We design every page around one job: turning a visitor into a booked lead — especially the homeowner who just noticed a problem after a storm and needs someone fast." },
      { title: "It's too slow on a phone", body: "Most of your Richmond visitors are on mobile. They bounce if your site takes more than a few seconds to load, and slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Midlothian wants to see you actually serve Midlothian — not a generic Richmond page that could be anybody. We build sites that name the neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Richmond website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Richmond neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where the majority of your traffic is — especially the homeowner who just noticed a problem and is searching from the driveway." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Richmond homeowners dealing with Victorian-era systems, storm damage, or a renovation project — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Fan, Church Hill, Midlothian, Short Pump, and the neighborhoods you serve — so you stand out instead of blending into one generic Richmond page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more local search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Richmond neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Richmond web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Richmond contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Richmond?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in the Richmond market?', a: "That's the whole point. We build around the specific neighborhoods you serve — the Fan, Church Hill, Midlothian, Short Pump — keep the site fast, and put a clear offer and call button front and center. Richmond homeowners dealing with old houses or storm damage don't have time to dig through a confusing site, and yours won't make them." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Richmond terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where the majority of your Richmond traffic comes from — including the homeowner searching from the driveway after a storm knocked out something." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Richmond contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'richmond', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Richmond Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Richmond website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in the RVA market. Free audit.',
    eyebrow: 'Website Redesign · Richmond, VA',
    h1: 'Redesign your Richmond website without losing your rankings',
    h2Exact: 'Richmond Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow on a phone, easy to ignore, nothing that says you know the Fan from Midlothian. We redesign Richmond contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Richmond contractor sites for speed and conversions, build them to speak to homeowners in the neighborhoods you actually serve, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and in a market like Richmond, where seasonal demand spikes mean you can't afford to go dark, that migration care matters.",
    problemHeading: "Signs your Richmond site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Richmond homeowners investing in a Victorian row house renovation or filing an insurance claim after a hurricane remnant are making a high-stakes decision. An old, cluttered site quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Richmond visitors before they ever see your offer. A redesign built mobile-first wins them back — including the homeowner who's searching from the front porch after a storm." },
      { title: "It doesn't speak to the Richmond market", body: "A generic contractor site gives a visitor no reason to believe you know the difference between a Fan Victorian and a Short Pump new build. We rebuild around the neighborhoods and the seasonal demand that define the RVA market, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Richmond redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — critical heading into storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Richmond visitors are — and where emergency searches happen." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Fan, Church Hill, Midlothian, Short Pump, and the neighborhoods you serve — so the new site speaks to your actual customers instead of blending into a generic Richmond page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — especially important heading into Richmond's peak storm seasons." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Richmond redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Richmond contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Richmond?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't speak to the Richmond neighborhoods you serve, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Richmond?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods you serve — the Fan, Church Hill, Midlothian, Short Pump — keep the site fast, and make the offer and call button obvious. Richmond homeowners dealing with old houses or storm damage don't have patience for a confusing site." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const richmondCity = {
  citySlug: 'richmond', city: 'Richmond', state: 'Virginia', stateAbbr: 'VA', metro: 'Richmond',

  titleTag: 'Richmond Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Richmond contractors. Get found in the Fan, Church Hill, Midlothian, and across RVA — and own your leads instead of renting them. Free audit.',

  eyebrow: 'Richmond · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Richmond contractors found and booked',
  h2Exact: 'Richmond Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a city of Victorian row houses, hurricane remnants, and a neighborhood revival that has buyers renovating historic homes from Church Hill to Scott's Addition. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Richmond audit',

  intro:
    "If you run a contracting business in Richmond, you're sitting in one of the most interesting markets in the mid-Atlantic: a city of centuries-old housing stock that needs constant work, a state-capital economy that keeps professional homeowners stable and investing, and a neighborhood revival — from Scott's Addition to Manchester to Church Hill — that has young buyers gutting historic homes and renovating them from the studs out. Add mid-Atlantic severe weather, James River flooding, and a seasonal pattern that spikes demand three times a year, and the underlying work is there. The contractors who win are the ones who can be found when a homeowner needs them. Here's how we help Richmond contractors do that.",
  aioQuestion: 'How do Richmond contractors get more leads online?',
  aioAnswer:
    "Richmond contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Richmond has a unique mix of historic housing stock, seasonal storm and flooding events, and a stable professional homeowner base, the contractors who rank for the specific work those homeowners search — Victorian renovations, storm restoration, HVAC in the Virginia heat — win the most calls.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Richmond searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, from the Fan to Midlothian.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Richmond homeowners actually search — historic renovations, storm restoration, seasonal HVAC — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to speak to homeowners in Church Hill, Carytown, and Short Pump — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you've already earned — critical heading into Richmond's busy storm seasons.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Richmond?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Richmond metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, electrical, restoration, solar, and general contractors — so we understand the Richmond market's specific patterns: historic housing stock, hurricane-remnant and flooding events, and the seasonal demand spikes that define the busiest weeks." },
    { q: 'Why does the Richmond market need a different approach?', a: "Richmond has a unique combination of factors: centuries of housing stock in the Fan, Museum District, and Church Hill that needs constant work; mid-Atlantic severe weather including hurricane remnants and nor'easters; a state-capital economy with a stable professional homeowner base; and a neighborhood revival driving renovation demand in Scott's Addition, Manchester, and Church Hill. A national agency swapping a city name into a template misses all of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Richmond areas do you serve?', a: "The full metro — the Fan, Museum District, Church Hill, Scott's Addition, Manchester, Carytown, Short Pump, Glen Allen, Midlothian, Chesterfield, and Henrico. We build genuine neighborhood pages instead of one generic Richmond page, because that's what ranks for the specific searches that matter." },
    { q: 'Where should I start?', a: "Start with a free Richmond audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — whether that's before hurricane season, nor'easter season, or the summer HVAC rush. No pitch deck, just a plan." },
  ],
};

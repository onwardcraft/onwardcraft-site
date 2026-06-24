// PORTLAND — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Portland's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// PORTLAND — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Portland is a year-round rain game',
  body:
    "The Portland metro is home to roughly 2.5 million people across two states and a city that gets 144 rainy days a year. That rain isn't just weather — it's the single biggest driver of home-services demand in the region. Moss on roofs, algae streaking siding, gutters overwhelmed with debris, basements wicking moisture through aging foundations, rot creeping into the window frames of century-old Craftsman bungalows — the Pacific Northwest climate means there is no slow season for skilled contractors. The rainy season runs roughly October through April, and that's when roofing, drainage, gutter, and restoration calls stack up. But two other forces shape this market just as much. First, Portland homeowners are among the most research-heavy in the country — tech transplants and the creative class treat hiring a contractor the way they'd treat buying a car: they read, compare, and pick whoever looks most credible online. Second, Portlanders have a strong preference for local, independent businesses over national chains. The contractor who presents well online and reads unmistakably Portland wins on both counts.",
  pullQuote: 'In Portland, the rain never really stops — and neither does the demand for contractors who show up first on Google.',
  donut: {
    title: 'How Portland searches',
    value: 68,
    centerLabel: 'search on mobile',
    legend: [
      { label: 'Mobile searches', pct: 68, kind: 'teal' },
      { label: 'Desktop searches', pct: 32, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Rainy season (Oct–Apr) and summer heat dome events (Jun–Aug)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 78, peak: true }, { m: 'M', v: 74, peak: true },
    { m: 'A', v: 65, peak: true }, { m: 'M', v: 50 }, { m: 'J', v: 58 },
    { m: 'J', v: 70, peak: true }, { m: 'A', v: 68, peak: true }, { m: 'S', v: 55 },
    { m: 'O', v: 76, peak: true }, { m: 'N', v: 82, peak: true }, { m: 'D', v: 75, peak: true },
  ],
  stats: [
    { value: '2.5M', label: 'people across the Portland-Vancouver metro' },
    { value: '144', label: 'rainy days per year — driving year-round contractor demand', accent: true },
    { value: 'Oct–Apr', label: 'rainy season, when roof, gutter, and drainage calls spike' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Hawthorne', 'Division', 'Sellwood', 'Irvington', 'Alberta Arts District',
    'Pearl District', 'NW Portland', 'Beaverton', 'Hillsboro', 'Lake Oswego',
    'Tigard', 'Tualatin', 'Gresham', 'Vancouver', 'Milwaukie',
  ],
};

const AREAS = [
  'Hawthorne', 'Division', 'Sellwood', 'Irvington', 'Alberta Arts District',
  'Pearl District', 'NW Portland', 'Beaverton', 'Hillsboro', 'Lake Oswego',
  'Tigard', 'Tualatin', 'Gresham', 'Vancouver (WA)', 'Milwaukie',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Portland homeowners are some of the most discerning customers in the country — they research everything, they value local businesses, and they pick whoever looks most credible online. So that's what we build: rankings and a digital presence that make you the obvious local choice, so the leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand moss-and-drainage emergencies, heat pump retrofits, and the specific demands of Portland's aging Craftsman and Victorian housing stock, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for Portland homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Portland',
    body: "Neighborhood-by-neighborhood targeting from Hawthorne to Hillsboro, plus the eco-conscious, research-heavy buyer language that wins in this market. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Portland contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where homeowners do their homework, showing up first matters even more. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Portland', state: 'Oregon', stateAbbr: 'OR', metro: 'Portland-Vancouver',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const portlandLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'portland', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Portland Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Portland Local SEO that ranks you above the competition from the Pearl District to Beaverton. We get you into the Map Pack, so the call lands with you.',
    eyebrow: 'Local SEO · Portland, OR',
    h1: 'Portland Local SEO that ranks you above the competition from the Pearl District to Hillsboro',
    h2Exact: 'Portland Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. Portland homeowners are meticulous researchers — we get you into that top three for your neighborhoods, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Portland audit',
    intro:
      "Portland Local SEO comes down to one thing: when a homeowner in Hawthorne or Irvington searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market full of high-income, research-driven buyers who deeply value local businesses, so winning the Google Map Pack in the neighborhoods you serve is the whole game. Here's how you rank on the map.",
    aioQuestion: 'How do Portland businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Portland neighborhoods. Portland buyers are research-heavy and prefer local independents, so contractors who look credible and local — with real neighborhood content and genuine reviews — pull ahead fast. Rainy-season urgency (October through April) also means timing your content to match moss removal, roof repairs, and drainage demand can move rankings before the rush hits.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Portland homeowners research everything, but they start on Google, and if you're not one of those three they likely never find you at all. Getting into that top three for your neighborhoods is usually the single highest-return move a Portland contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Portland homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible before the rainy season hits", body: "Roofing, gutter, moss, drainage, and basement moisture calls spike every October when Portland's rain returns. The contractors who are already ranking catch that wave — the ones who start optimizing in September are too late. Get into the Map Pack before the storm season and your phone rings all winter." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Portland searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. Portland buyers read reviews carefully — this lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Hawthorne, Sellwood, Irvington, Beaverton, Hillsboro, Lake Oswego and the rest, so you rank for the neighborhood someone's actually searching, not just \"Portland.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Portland sources Google trusts — local press, neighborhood associations, eco-focused organizations, trade partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand targeting', desc: "We optimize for moss removal, roof inspections, gutter cleaning, drainage, and heat pump searches so you're ranking before the rainy season starts, not chasing it after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Portland neighborhoods and suburbs and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Portland and the suburbs, plus seasonal content built for the rainy season and summer heat events." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Portland neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Portland?', a: "Most Portland engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Portland keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Portland local SEO different?', a: "Two things stand out. Portland buyers are research-driven and strongly prefer local, independent businesses — so your online presence needs to look unmistakably local and credible to win. And the rainy season from October through April drives a concentrated wave of roofing, gutter, drainage, and moisture demand. Contractors who are already in the Map Pack before October catch that wave. Those who aren't miss it entirely." },
      { q: 'Should I optimize for the rainy season?', a: "Absolutely — and you need to start before it hits. Roof inspections, moss removal, gutter cleaning, drainage repair, and basement moisture calls all spike when the rain returns in October. Local SEO takes months to build, so the time to start ranking for those searches is now, not September. We build seasonal content and optimize for those terms as a core part of what we do." },
      { q: 'Which areas do you cover?', a: "All of inner Portland and the suburbs — Hawthorne, Division, Sellwood, Irvington, Alberta Arts District, Pearl District, NW Portland, Beaverton, Hillsboro, Lake Oswego, Tigard, Tualatin, Gresham, and Vancouver, WA. We build genuine neighborhood pages rather than a generic Portland page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand moss and drainage emergencies, heat pump conversions, and the specific character of Portland's aging housing stock — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Portland neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's the fastest way to see exactly what Portland Local SEO would take to win the map for your trade. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'portland', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Portland SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Portland SEO that climbs contractors past the competition on Google, from Mt. Hood to the coast, and brings in leads you own. Revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Portland, OR',
    h1: 'Portland SEO that climbs you past the competition on Google, rainy season after rainy season',
    h2Exact: 'Portland SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Portland customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Portland SEO audit',
    intro:
      "Portland SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. Portland homeowners are meticulous researchers who open multiple tabs and compare. We get contractors ranking on Google for the money keywords in this eco-conscious, research-heavy market, and we measure it in leads and organic traffic, not vanity numbers.",
    aioQuestion: 'How do Portland businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Portland neighborhoods, and earning links from trusted local sources. Portland buyers are research-driven and value sustainability, so contractors who rank for eco-friendly services (heat pumps, green roofing, energy audits) and who publish real neighborhood content pull ahead faster. Seasonal rainy-season content for roofing, drainage, and moss removal is also one of the quickest ways to capture surging demand.",
    problemHeading: "Three reasons your Portland site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. Portland homeowners research every purchase carefully, but they still start on Google, and if you're not in the top handful of results for what you sell, they never find you — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market where homeowners trust local businesses over national ones, a strong organic ranking signals legitimacy in a way that ads simply don't." },
      { title: "You're missing the rainy-season surge", body: "Portland's rain drives a massive wave of roofing, gutter, drainage, and moisture calls every October through April. The contractors who are already on page one when that demand hits catch the wave. Ranking takes months to build — starting after the rain arrives means missing the whole season." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Portland customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Portland and industry sources. Neighborhood associations, local press, eco-organizations, and trade partners — the links that separate page one from page two here." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Portland neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Rainy-season & eco-service SEO', desc: "We rank you for moss removal, roof inspections, drainage, heat pump installations, and green-service searches before the demand spikes, so your busiest seasons land on you.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Portland leads — including seasonal rainy-season terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the rainy-season, eco-service, and neighborhood terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Portland and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Portland SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Portland search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Rainy-season & eco-service SEO', 'Multi-neighborhood / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Portland?', a: "Most Portland SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Portland?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on broader metro keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Portland buyers also tend to trust organic results and local businesses over paid ads, so SEO carries extra credibility in this market." },
      { q: 'Should my Portland SEO target the rainy season?', a: "Yes, and you need to start before October. When the rain returns, searches for moss removal, roof inspections, gutter cleaning, drainage repair, and basement moisture spike fast. Ranking takes months to build — the time to optimize for those terms is now, not after the first storm." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add rainy-season, eco-service, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Portland do you cover?', a: "All of inner Portland and the suburbs — Hawthorne, Division, Sellwood, Irvington, Alberta Arts District, Pearl District, NW Portland, Beaverton, Hillsboro, Lake Oswego, Tigard, Tualatin, Gresham, and Vancouver, WA — with genuine local pages rather than one generic Portland page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It shows exactly what Portland SEO would take to climb your money keywords onto page one and hold them. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'portland', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Portland Web Design Company | OnwardCraft',
    metaDescription:
      'Portland Web Design that loads fast and books more jobs, fast mobile-first sites built for contractors in a rainy, research-driven, eco-conscious market.',
    eyebrow: 'Web Design · Portland, OR',
    h1: 'Portland web design that loads fast on a rainy-day phone and books more jobs',
    h2Exact: 'Portland Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Portland contractors fast, mobile-first sites engineered to turn visitors into booked work — and to earn the trust of buyers who research everything before they call.",
    primaryCta: 'Get my free quote',
    intro:
      "Portland web design done right turns visitors into booked jobs, where most contractor sites lose leads quietly: slow on a phone, buried call button, nothing that says \"local\" or \"credible.\" Portland homeowners are among the most research-driven buyers in the country, opening tabs, reading reviews, and comparing while the rain comes down. We build fast, mobile-first websites that look like the professional you are and speak to eco-conscious, local-preferring buyers from Hawthorne to Hillsboro.",
    aioQuestion: 'What makes a good contractor website in Portland?',
    aioAnswer:
      "A good Portland contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, names the specific Portland neighborhoods you serve, and — for this market — signals local expertise and sustainability values where relevant. Portland buyers are unusually research-heavy and strongly prefer local independents, so a site that reads authentically local and credible converts far better than a generic template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. Portland homeowners do their homework, and a generic site gives them no reason to choose you. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Portland visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't look local or credible", body: "Portland buyers strongly prefer local, independent businesses. A site that looks like a national chain template — or just looks outdated — costs you trust instantly. We build sites that read unmistakably local, with the neighborhood specificity and visual credibility that wins in this market." },
    ],
    servicesHeading: "What's in an OnwardCraft Portland website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Portland neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Portland traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Portland's research-driven, value-conscious homeowners and book the job — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Portland neighborhoods and suburbs you serve — Hawthorne, Sellwood, Beaverton, Lake Oswego — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Portland neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells to Portland buyers, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Portland web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Portland?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out to Portland buyers?', a: "That's the whole point. Portland homeowners are unusually research-driven and strongly prefer local businesses. We build around the specific neighborhoods you serve, make the site feel authentically local, and put a clear offer front and center — so when buyers are comparing tabs, yours wins." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Portland terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Portland traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting Portland web design should include for a contractor in this market, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'portland', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Portland Website Redesign | OnwardCraft',
    metaDescription:
      'Portland Website Redesign done with a careful, SEO-safe migration so you keep every ranking. Faster, mobile-first rebuilds that convert more visitors into booked jobs.',
    eyebrow: 'Website Redesign · Portland, OR',
    h1: 'Portland Website Redesign done with a careful, SEO-safe migration that survives the rainy-season rush',
    h2Exact: 'Portland Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Portland contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Portland Website Redesign goes one of two bad ways when it's done carelessly: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Portland contractor sites for speed and conversions, build them to earn the trust of research-driven buyers who prefer local businesses, and handle an SEO-safe migration with the redirects and care that protect the traffic you already have, ahead of the rainy-season rush.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Portland site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Portland homeowners research every purchase and make snap judgments about a contractor's professionalism based on their website. An old, cluttered design quietly sends them to a competitor who looks more credible — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Portland visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't read as local or credible", body: "Portland buyers strongly prefer local independents, and a generic or outdated site doesn't make that case. We rebuild with real neighborhood specificity and the kind of credibility signals that make Portland homeowners choose you over a national brand or a competitor with a better-looking site." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Portland traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work — and reads as authentically local to Portland buyers." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Portland neighborhoods and suburbs you serve, so the new site looks local and specific instead of generic and national.", featured: true },
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
      heading: 'Transparent Portland redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Portland?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't read as a credible local Portland business, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me win Portland buyers?', a: "Yes. Portland homeowners research everything and strongly prefer local, independent businesses. We rebuild around the specific neighborhoods you serve, make the site feel authentically local, and make the offer and call button obvious — so the new site earns the trust that converts." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and the SEO-safe migration plan a Portland Website Redesign needs to keep every ranking you have earned." },
    ],
  },
];

export const portlandCity = {
  citySlug: 'portland', city: 'Portland', state: 'Oregon', stateAbbr: 'OR', metro: 'Portland-Vancouver',

  titleTag: 'Portland Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Portland marketing for contractors that fills your calendar through every rainy season. Web design, SEO, and local SEO that get you found, booked, and off rented leads.',

  eyebrow: 'Portland · Web Design, SEO & Lead Generation',
  h1: 'Portland marketing for contractors that fills your calendar through every rainy season',
  h2Exact: 'Portland Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Portland's rain-driven, eco-conscious, research-heavy market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Portland audit',

  intro:
    "Portland marketing for contractors means fighting for the attention of some of the most research-driven, local-preferring homeowners in the country, in a city where 144 rainy days a year drive year-round demand for roofing, drainage, gutters, moisture control, and home maintenance. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. As a Portland digital marketing agency built for the trades, here's how we help contractors get found and booked.",
  aioQuestion: 'How do Portland contractors get more leads online?',
  aioAnswer:
    "Portland contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Portland buyers research everything and strongly prefer local independents — so contractors who look credible and local online, who rank for rainy-season services before October, and who publish real neighborhood content win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Portland searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, built around Portland's rainy-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads. We target rainy-season, eco-service, and neighborhood terms that drive real Portland demand.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn the trust of Portland's research-driven, local-preferring buyers and turn visitors into booked jobs — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, credibility, and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Portland?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market full of research-driven buyers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand moss and drainage emergencies, heat pump conversions, and the specific demands of Portland's aging Craftsman and Victorian housing stock." },
    { q: 'Why does the Portland market need a different approach?', a: "Two things make Portland distinct. First, 144 rainy days a year drives a massive wave of roofing, gutter, drainage, and moisture demand — and contractors who rank before October catch it all. Second, Portland buyers are unusually research-driven and strongly prefer local, independent businesses. Looking credible and local online matters more here than in most markets." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Portland areas do you serve?', a: "All of inner Portland and the surrounding suburbs — Hawthorne, Division, Sellwood, Irvington, Alberta Arts District, Pearl District, NW Portland, Beaverton, Hillsboro, Lake Oswego, Tigard, Tualatin, Gresham, and Vancouver, WA." },
    { q: 'Where should I start?', a: "Start with a free Portland audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Portland marketing for contractors that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

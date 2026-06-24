// TALLAHASSEE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Tallahassee's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// TALLAHASSEE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Tallahassee is its own category',
  body:
    "Tallahassee is unlike any other Florida market. It's the state capital, home to the Governor's office, the Legislature, the Florida Supreme Court, and dozens of state agencies — which means a large, stable, recession-resistant base of government workers who own homes and need contractors. Layer on Florida State University (55,000 students) and Florida A&M University (10,000 students), and you have a city where demand splits between long-term homeowners and a fast-cycling young-professional and rental market. Then there's the weather. Tallahassee sits in the Panhandle, directly exposed to Gulf Coast hurricanes, and the city's famous live-oak canopy roads are as much a liability as a landmark when a storm rolls in. Hurricane Michael in 2018 dropped a Category 4 storm directly on Leon County — hundreds of thousands of trees came down on homes, and roof and structural work dominated the market for years. Contractors who were visible during and after Michael booked work they're still talking about today. The businesses already ranking are the ones who catch the next storm too.",
  pullQuote: 'When the next Panhandle storm hits, the contractors already ranking in Tallahassee are the ones who book the work.',
  donut: {
    title: 'Tallahassee by community',
    value: 35,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 35, kind: 'teal' },
      { label: 'Other', pct: 65, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov) and HVAC heat season (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 32 }, { m: 'F', v: 30 }, { m: 'M', v: 36 }, { m: 'A', v: 42 },
    { m: 'M', v: 56, peak: true }, { m: 'J', v: 72, peak: true }, { m: 'J', v: 85, peak: true },
    { m: 'A', v: 94, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 60, peak: true }, { m: 'D', v: 38 },
  ],
  stats: [
    { value: '~300K', label: 'people in the Tallahassee metro — state capital plus two universities' },
    { value: 'Cat 4', label: 'Hurricane Michael (2018) dropped directly on Leon County, devastating roofs and trees', accent: true },
    { value: 'May–Oct', label: 'peak season for hurricane, HVAC, and roof demand' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the contractor calls' },
  ],
  neighborhoods: [
    'Midtown', 'Betton Hills', 'Killearn Estates', 'Bull Run', 'NE Tallahassee',
    'Southwood', 'Crawfordville', 'Myers Park', 'Forest Meadows', 'Summerbrooke',
    'Ox Bottom Cove', 'Golden Eagle', 'Waverly Hills', 'Apalachee Parkway', 'Wakulla County',
  ],
};

const AREAS = [
  'Tallahassee', 'Midtown', 'Betton Hills', 'Killearn Estates', 'Southwood',
  'NE Tallahassee', 'Crawfordville', 'Wakulla County', 'Quincy', 'Havana',
  'Woodville', 'Bradfordville', 'Bull Run', 'Gadsden County', 'Jefferson County',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm season, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Tallahassee',
    body: "State government stability, university-driven demand, Panhandle hurricane exposure, and a canopy-road city where every big storm creates years of roof and tree work. The stuff a national agency misses when they swap a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Tallahassee contractor gets around 800 local \"near me\" impressions a month in normal times. When a storm like Michael hits and demand explodes, the contractors already in the Map Pack take calls for months before competitors can react. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Tallahassee', state: 'Florida', stateAbbr: 'FL', metro: 'Tallahassee',
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const tallahasseeLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'tallahassee', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Tallahassee Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Tallahassee Local SEO that wins you the top three on the map, so Killearn Estates and Southwood calls land with you, not a competitor.',
    eyebrow: 'Local SEO · Tallahassee',
    h1: 'Tallahassee Local SEO that wins you the top three on the map from Killearn Estates to Southwood',
    h2Exact: 'Tallahassee Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — and so you're ready when the next Panhandle storm fills everyone's phone.",
    primaryCta: 'Get my free Tallahassee audit',
    intro:
      "Tallahassee local SEO comes down to one thing: when a homeowner in Killearn Estates or Southwood searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The market here is anchored by state government and two universities — steady, year-round demand — but storm season turns that demand into a flood overnight. Becoming one of those top three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Tallahassee businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Tallahassee neighborhoods. Tallahassee's stable government-worker and university community rewards trust signals, and hurricane exposure means the winners are already ranking when storm demand spikes — not scrambling to catch up after.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Tallahassee business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Tallahassee homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the storm hits", body: "When Hurricane Michael came through Leon County as a Category 4, contractors already ranking took calls for years. If you're invisible on the map when the next Panhandle storm lands, the work goes to whoever Google already trusts. Ranking now is how you catch that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Tallahassee searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Killearn Estates, Betton Hills, Southwood, Midtown, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Tallahassee.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Tallahassee sources Google trusts — local press, state associations, partners. This is what separates page one from page two here." },
      { name: 'Hurricane-season readiness', desc: "We get your profile, pages, and reviews ranking before storm season so you catch the demand spike — including the canopy-tree and roof damage that defines Tallahassee storm work — instead of scrambling for it after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Leon and Wakulla counties, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Tallahassee neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the capital region.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Tallahassee?', a: "Most Tallahassee engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Tallahassee keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Tallahassee local SEO different?', a: "Two things. The market is anchored by state government and two universities — so there's a stable, year-round homeowner base that trusts established, well-reviewed contractors. And Tallahassee is directly in the Panhandle hurricane path: Michael hit as a Cat 4 in 2018 and the roof and tree-damage work ran for years. Your ranking has to be in place before the storm, not after." },
      { q: 'How does local SEO help me during hurricane season?', a: "When a storm like Michael hits Leon County, searches for roofing, restoration, and tree-damage repair spike overnight, and the businesses already in the Map Pack take those calls — and the backlog can last for years. We get you ranking and reviewed ahead of season so you catch that demand instead of watching competitors clean up." },
      { q: 'Which areas do you cover?', a: "All of Tallahassee and the surrounding areas — Killearn Estates, Betton Hills, Southwood, Midtown, NE Tallahassee, Crawfordville in Wakulla County, Quincy, Havana, and more. We build genuine neighborhood pages instead of one generic Tallahassee page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance jobs — including the tree-on-roof damage unique to Tallahassee's canopy roads — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day Tallahassee local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'tallahassee', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Tallahassee SEO Company | Rankings You Own | OnwardCraft',
    metaDescription:
      'Tallahassee SEO that builds rankings you actually own, ranking contractors on Google for the money keywords across the capital region. No lock-in contracts.',
    eyebrow: 'SEO Services · Tallahassee',
    h1: 'Tallahassee SEO that builds rankings you actually own across the capital region',
    h2Exact: 'Tallahassee SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Tallahassee customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Tallahassee SEO audit',
    intro:
      "Tallahassee SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market driven by state government stability, two universities, and Panhandle hurricane exposure — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Tallahassee businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Tallahassee sources. In the capital's market — stable government workers, university students, and hurricane-exposed homeowners — trust signals, fast mobile sites, and storm-driven seasonal content are among the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Tallahassee site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Tallahassee demand swings with hurricane season and HVAC heat, and the contractors who rank for those terms ahead of time catch the spike. Michael produced years of roofing and restoration work for those already visible. If your SEO ignores storm-driven and seasonal searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Tallahassee customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Tallahassee and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the hurricane-driven and HVAC-heat searches that define Tallahassee's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Tallahassee leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the hurricane-season and HVAC-heat terms that matter most here." },
      { name: 'Build authority', desc: "Links and citations from trusted Tallahassee and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Tallahassee SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Tallahassee-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'Multi-area / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Tallahassee?', a: "Most Tallahassee SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Tallahassee?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Tallahassee keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Tallahassee SEO target hurricane season?', a: "Absolutely. When a storm like Michael comes through, searches for roofing, restoration, and tree-damage repair spike and the backlog runs for years — and ranking takes months to build, so you have to be in place before the season starts. We optimize for those seasonal and storm-driven terms ahead of time so your busiest period lands on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Tallahassee do you cover?', a: "All of Tallahassee and the surrounding capital region — Killearn Estates, Betton Hills, Southwood, Midtown, NE Tallahassee, Crawfordville, Wakulla County, Quincy, Havana, and more — with genuine local pages rather than one generic Tallahassee page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Tallahassee SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'tallahassee', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Tallahassee Web Design Company | Sites That Book Work | OnwardCraft',
    metaDescription:
      'Tallahassee web design engineered to bring in real work: fast, mobile-first sites built for contractors and Panhandle hurricane-season demand.',
    eyebrow: 'Web Design · Tallahassee',
    h1: 'Tallahassee web design engineered to bring in real work when the Panhandle storms roll in',
    h2Exact: 'Tallahassee Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Tallahassee contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up when hurricane season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Tallahassee web design that pays for itself fixes the quiet leaks most contractor sites have: slow on a phone, buried call button, no clear offer. We build sites that load fast, look like the professional you are, and turn Killearn-to-Southwood visitors into booked jobs, and that don't fall over when a storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Tallahassee?',
    aioAnswer:
      "A good Tallahassee contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic surges during hurricane season. State government workers and university families making high-ticket decisions expect a site that looks established and credible — and when a storm rolls through, the phone rings fast and the site needs to convert under pressure.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Tallahassee visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a storm-season surge", body: "After Hurricane Michael, contractor sites in Leon County got hit with a flood of calls and traffic, and the slow ones buckled or buried the call button right when it mattered most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft Tallahassee website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Tallahassee traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Hurricane-surge ready', desc: "Built to stay fast and keep the call button front and center when storm-season traffic spikes — the moment that turns visitors into your biggest jobs, including the roof and tree-damage work that follows every Panhandle storm.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Tallahassee web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Hurricane-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Tallahassee?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a hurricane-season traffic spike?', a: "Yes, and in Tallahassee that matters more than almost anywhere else. After Michael, contractors took a surge of calls and website traffic, and slow sites lost leads at their peak moment. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Tallahassee terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Tallahassee traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Tallahassee web design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'tallahassee', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Tallahassee Website Redesign | Modernize, Keep Rankings | OnwardCraft',
    metaDescription:
      'Tallahassee Website Redesign that modernizes without tanking your traffic. Faster, mobile-first rebuilds that convert more and hold up in hurricane season.',
    eyebrow: 'Website Redesign · Tallahassee',
    h1: 'Tallahassee Website Redesign that modernizes without tanking the traffic your Betton Hills jobs depend on',
    h2Exact: 'Tallahassee Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Tallahassee contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Tallahassee Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild contractor sites for speed and conversions, build them to handle hurricane-season traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Tallahassee site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners — including the government professionals and university families who make up a big share of Tallahassee's market — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Tallahassee visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that slows under a hurricane-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Tallahassee traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Hurricane-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when hurricane-season traffic spikes, so the new site captures your biggest jobs — roof repairs, tree-damage restoration, HVAC emergencies — instead of choking on them.", featured: true },
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
      heading: 'Transparent Tallahassee redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Hurricane-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Tallahassee?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or slows under hurricane-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle hurricane-season traffic?', a: "Yes, and in Tallahassee that's a real consideration. After Michael, contractors took a surge of calls and website traffic, and slow sites lost leads right when demand peaked and ran for years. We rebuild for speed and keep the call to action obvious so the site converts when it matters most." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Tallahassee Website Redesign should fix, and a fixed-price quote with a timeline and a safe, SEO-safe migration plan." },
    ],
  },
];

export const tallahasseeCity = {
  citySlug: 'tallahassee', city: 'Tallahassee', state: 'Florida', stateAbbr: 'FL', metro: 'Tallahassee',

  titleTag: 'Tallahassee Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Tallahassee marketing for contractors built around the trades: web design, SEO, and local SEO that get you found and booked, without renting leads.',

  eyebrow: 'Tallahassee · Web Design, SEO & Lead Generation',
  h1: 'Tallahassee marketing for contractors built around the trades and the Panhandle storm season',
  h2Exact: 'Tallahassee Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the state capital's stable government-worker market, its two-university economy, and the Panhandle hurricane exposure that defines contractor demand here. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Tallahassee audit',

  intro:
    "Tallahassee marketing for contractors has to fit a market unlike anywhere else in Florida. You have a rock-solid base of state government workers and two major universities providing year-round homeowner demand. You also have Panhandle hurricane exposure — and when a storm like Michael hits, demand for roofing, restoration, and tree-damage repair doesn't just spike, it floods the market for years. The contractors who were already visible before Michael booked work that lasted through the recovery. Winning here takes three things: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack — all in place before the next storm. Here's how we help Tallahassee contractors do exactly that.",
  aioQuestion: 'How do Tallahassee contractors get more leads online?',
  aioAnswer:
    "Tallahassee contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. The market is anchored by state government employees and FSU and FAMU communities — steady, year-round demand — but Panhandle hurricane exposure means a single storm can create years of backlogged work. Contractors who are already visible before the storm hit take that work; those who try to rank after are too late.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Tallahassee searches \"near me.\" The single highest-return move for most local businesses — and how you catch storm-season demand before the backlog fills up.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
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
    { q: 'What marketing services do you offer in Tallahassee?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when hurricane season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, canopy-tree damage work, and insurance jobs specific to the Tallahassee market." },
    { q: 'Why does hurricane season matter for Tallahassee marketing?', a: "When a storm like Michael hits Leon County, demand for roofing, restoration, and tree-damage repair spikes overnight and the backlog can run for years. Ranking takes months to build, so the contractors who are already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Tallahassee areas do you serve?', a: "All of Tallahassee and the surrounding capital region — Killearn Estates, Betton Hills, Southwood, Midtown, NE Tallahassee, Crawfordville in Wakulla County, Quincy, Havana, and more." },
    { q: 'Where should I start?', a: "Start with a free Tallahassee audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two Tallahassee contractor marketing moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

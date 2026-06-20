// ALBANY — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Albany's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ALBANY — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in the Capital Region is more complex than it looks',
  body:
    "Albany is the seat of New York State government, home to the Governor's office, the Legislature, and dozens of state agencies. That means a homeowner base that skews professional and stable — state employees, university staff at SUNY Albany, doctors and researchers at Albany Med, and attorneys tied to Albany Law. This workforce doesn't evaporate in a recession, which makes the Capital Region one of the most recession-resistant local markets in the Northeast. Layer on GlobalFoundries' Fab 8 semiconductor facility in Malta — one of the most advanced chip fabs in the Western Hemisphere — and you have engineers and tech workers buying homes in Saratoga Springs, Clifton Park, and Colonie who demand the same quality they'd expect in Silicon Valley. The housing stock makes the market even more distinct: Albany was founded in 1614, and the Victorian, Federal, Dutch Colonial, and Greek Revival homes that fill Center Square, Washington Park, and the Helderberg neighborhoods are genuinely beautiful — and genuinely demanding. They need specialist contractors who understand 150-year-old construction, and homeowners know it. Add Capital Region winters — nor'easters, ice storms, heavy snow from November through March — plus spring flooding from the Hudson and Mohawk rivers, and seasonal demand here is as dramatic as anywhere in the country. The contractors who rank before the nor'easter hits are the ones who book the emergency work.",
  pullQuote: 'In the state capital of New York — with its old homes, brutal winters, and stable government workforce — the contractor who ranks before the storm hits owns the season.',
  donut: {
    title: "Albany's old housing stock",
    value: 55,
    centerLabel: 'pre-1960 housing',
    legend: [
      { label: 'Pre-1960 homes', pct: 55, kind: 'teal' },
      { label: 'Newer', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Nor\'easter/winter (Nov–Mar), spring flooding (Mar–May), summer HVAC (Jun–Aug)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 55, peak: true }, { m: 'J', v: 68 },
    { m: 'J', v: 80, peak: true }, { m: 'A', v: 78, peak: true }, { m: 'S', v: 54 },
    { m: 'O', v: 58 }, { m: 'N', v: 80, peak: true }, { m: 'D', v: 88, peak: true },
  ],
  stats: [
    { value: '1614', label: 'founding year — one of the oldest European settlements in the US' },
    { value: '~55%', label: 'of Albany homes were built before 1960, creating high demand for specialist contractors', accent: true },
    { value: 'Nov–Mar', label: 'nor\'easter and winter season, when roofing and heating calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks in a fragmented Capital Region market' },
  ],
  neighborhoods: [
    'Center Square', 'Washington Park', 'Helderberg', 'Lark Street', 'Colonie',
    'Clifton Park', 'Saratoga Springs', 'Troy', 'Schenectady', 'Latham',
    'Guilderland', 'Cohoes', 'Watervliet', 'Malta', 'Bethlehem',
  ],
};

const AREAS = [
  'Albany', 'Troy', 'Schenectady', 'Colonie', 'Clifton Park', 'Latham',
  'Guilderland', 'Saratoga Springs', 'Malta', 'Cohoes', 'Watervliet',
  'Bethlehem', 'Center Square', 'Washington Park', 'Helderberg',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. That's especially true in a market like Albany where homeowners are educated, stable, and know the difference between a contractor who actually knows 1880s Victorian framing and one who's winging it. So that's what we do here — get you ranking for the work you actually want, in the Capital Region neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand nor'easter emergencies, ice dam repairs, Victorian and Dutch Colonial renovation work, and the year-round demand that comes with one of the most complex housing stocks in the Northeast.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially in a market where the homeowner could be a state attorney or a semiconductor engineer who'll research you carefully.",
  },
  {
    title: 'We actually know the Capital Region',
    body: "Albany, Troy, Schenectady, Saratoga Springs, Clifton Park, Colonie — neighborhood by neighborhood targeting that accounts for the difference between a Washington Park Victorian homeowner and a Clifton Park new-build buyer. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Albany contractor gets around 1,200 local \"near me\" impressions a month across a handful of Capital Region neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a fully booked calendar — and when nor'easter season hits or the Hudson floods, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Albany', state: 'New York', stateAbbr: 'NY', metro: 'Albany-Schenectady-Troy (Capital Region)',
  heroProof: ['Built for the trades', 'Capital Region neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const albanyLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Albany Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Albany and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Albany, NY',
    h1: 'When the Capital Region searches for what you do, be the first name they find',
    h2Exact: 'Albany Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market split across Albany, Troy, Schenectady, and a dozen suburbs, we get you into that top three for the neighborhoods you serve so the call lands with you.",
    primaryCta: 'Get my free Albany audit',
    intro:
      "Albany local SEO comes down to one thing: when a homeowner in Center Square, Colonie, or Saratoga Springs searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a fragmented, multi-city market — Albany, Troy, Schenectady, and a ring of suburbs each with their own identity — and the old housing stock means homeowners are searching for specialist contractors, not generalists. Becoming one of those three pins in the neighborhoods you serve is the whole game.",
    aioQuestion: 'How do Albany businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and Capital Region neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to specific Albany-area neighborhoods and the seasonal demand that drives this market. Albany's fragmented metro — spread across Albany, Troy, Schenectady, and their suburbs — means tight geographic targeting beats generic 'Capital Region' terms every time.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now in Albany or Troy or Colonie. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them in each neighborhood you serve, it almost doesn't matter how good your work is on those 1880s Victorians — most homeowners never see your name. Getting into that top three neighborhood by neighborhood is the single highest-return move a Capital Region contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Albany homeowner to four contractors and bill each of you to fight over them. In a market where homeowners are educated — state workers, university staff, engineers from GlobalFoundries — they'll research you carefully, which means a pipeline you own through organic rankings is far more valuable than shared leads. Local SEO builds exactly that: a lead finds you, calls you, and nobody else got it." },
      { title: "You're invisible before the nor'easter hits", body: "Albany winters are real: heavy snow, ice storms, and nor'easters drive roof, heating, and ice-dam calls overnight from November through March. The contractors ranking before the storm are the ones who answer those calls. If your local SEO isn't built around seasonal demand, you're chasing the season instead of owning it." },
    ],
    servicesHeading: 'What it actually takes to rank you in the Capital Region',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Capital Region searches you should win — Albany, Troy, Schenectady, or Saratoga Springs." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across the fragmented Capital Region market." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and signals to educated Capital Region homeowners that you're the real deal." },
      { name: 'Neighborhood pages', desc: "Real pages for Center Square, Washington Park, Colonie, Clifton Park, Saratoga Springs, Troy, Schenectady, and more — so you rank for the specific neighborhood someone's actually searching, not just \"Albany.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank across a multi-city metro." },
      { name: 'Local link building', desc: "Mentions and links from Capital Region sources Google trusts — local press, chambers of commerce, trade associations, partners. This is often what separates page one from page two in a smaller metro." },
      { name: 'Seasonal and emergency SEO', desc: "We build your profile and content around nor'easter season, spring Hudson River flooding, and summer HVAC demand — so you're visible before each spike, not scrambling after it.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you to Capital Region homeowners.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Albany, Troy, Schenectady, and the suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week — especially valuable in a market where homeowners research carefully before calling." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Capital Region, tuned for seasonal demand and the old-home expertise your best customers are looking for." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across multiple Capital Region cities and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Saratoga to Schenectady.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and emergency SEO', 'Multi-city and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Albany?', a: "Most Albany engagements land between $750 and $2,500 a month, depending on how many Capital Region cities and neighborhoods you're targeting. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Capital Region keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a multi-city market like this is selling you something." },
      { q: "What makes Albany local SEO different from other markets?", a: "A few things. The metro is fragmented — Albany, Troy, Schenectady, Saratoga Springs, and a ring of suburbs each need their own targeting. The housing stock is exceptionally old, so homeowners search for specialist terms like 'Victorian restoration' or 'ice dam repair' that generic contractors never rank for. And seasonal demand here — nor'easters, spring flooding, summer HVAC — is more dramatic than most markets, so being ranked before each season matters enormously." },
      { q: "Can you help me rank in Troy and Schenectady, not just Albany?", a: "Yes — that's how we approach the whole Capital Region. Troy has its own identity as an old industrial river city going through a renovation wave, and Schenectady has its own GE-heritage homeowner base. We build separate neighborhood pages and local signals for each city so you show up where each search actually happens." },
      { q: 'Which areas do you cover?', a: "The full Capital Region: Albany, Troy, Schenectady, Colonie, Clifton Park, Latham, Guilderland, Saratoga Springs, Malta, Cohoes, Watervliet, Bethlehem, and the neighborhoods inside them — Center Square, Washington Park, Helderberg, Lark Street, and more. We build genuine local pages instead of one generic 'Albany area' page, because that's what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand nor'easter emergency calls, ice dam repairs, Victorian and Dutch Colonial renovation work, and the stable, professional homeowner base that state government and GlobalFoundries create in this market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more 'near me' research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business — especially important when Capital Region homeowners are doing deep research before calling a specialist contractor." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you — and in a market where homeowners are educated professionals who research carefully, those owned leads convert at a higher rate than shared ones anyway." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across the Capital Region, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Albany SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Albany SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for the Capital Region. Free Albany SEO audit.',
    eyebrow: 'SEO Services · Albany, NY',
    h1: 'Get your Albany business to the top of Google and keep it there',
    h2Exact: 'Albany SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Capital Region homeowners search and the leads keep coming — including the seasonal spikes that define this market. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Albany SEO audit',
    intro:
      "Albany SEO comes down to one question: when a homeowner in Clifton Park, Washington Park, or Saratoga Springs searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across a fragmented, multi-city Capital Region market — and we measure it in leads, not vanity traffic. That means ranking before the nor'easter season, before spring flooding, and before the summer HVAC rush.",
    aioQuestion: 'How do Albany businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Capital Region customers search, publishing local content tied to specific neighborhoods across Albany, Troy, Schenectady, and the suburbs, and earning links from trusted regional sources. Albany's oldest-housing-stock market means ranking for specialist terms — Victorian restoration, ice dam repair, pre-1960 plumbing — often converts better than generic service terms, and seasonal content built around nor'easters and Hudson River flooding captures demand spikes most contractors miss.",
    problemHeading: "Three reasons your Albany site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a Capital Region market spread across Albany, Troy, Schenectady, and their suburbs, if you're not in the top handful of results for what you sell in each city, your site is basically invisible — no matter how deep your expertise in old homes or emergency winter repairs." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Albany, where the homeowner base is stable year after year — state employees, university staff, GlobalFoundries engineers — those owned rankings compound in value over time." },
      { title: "You're not ranked when seasonal demand hits", body: "Albany winters bring nor'easters, ice dams, and heating emergencies from November through March. Spring brings Hudson and Mohawk River flooding. Summer brings HVAC demand. Ranking takes months to build, so you have to be in place before each season — not scrambling for visibility after the storm." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in the Capital Region',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — critical for sites on older platforms or with DIY histories." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Capital Region homeowners search — from 'roofing contractor Albany' to 'Victorian home restoration Troy' and 'ice dam repair Clifton Park.'" },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including seasonal content built around nor'easters, spring flooding, and summer HVAC." },
      { name: 'Link building', desc: "Authority from real Capital Region and industry sources. In a mid-sized metro like this, links from local press, chambers of commerce, and trade associations often break tie on competitive keywords." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the 'near me' searches across your Capital Region cities alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the nor'easter, ice dam, spring flooding, and summer HVAC searches that define this market's busiest weeks — so you're visible before each spike, not chasing it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you — important when educated Capital Region homeowners research specialist contractors carefully before calling.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Albany, Troy, Schenectady, and the suburbs, then build a roadmap around the keywords most likely to drive real Capital Region leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, especially on sites that have accumulated technical debt." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, specialist, and emergency terms that set Capital Region contractors apart." },
      { name: 'Build authority', desc: "Links and citations from trusted Capital Region and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next city or keyword set." },
    ],
    pricing: {
      heading: 'Transparent Albany SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local Capital Region keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across multiple Capital Region cities and services.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own search from Saratoga to Schenectady.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-city targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Albany?', a: "Most Albany SEO engagements run $900 to $3,000 a month, depending on how many Capital Region cities and keywords you're targeting and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Albany?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6 — faster on tighter neighborhood terms and slower on broader Capital Region or multi-city keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Albany, with a stable government-employee homeowner base, those rankings keep paying off year after year. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Albany SEO target seasonal demand?', a: "Absolutely. When a nor'easter hits, searches for roofing, heating, and ice dam repair spike overnight, and the contractors already ranking get those calls. Spring Hudson River flooding drives restoration and waterproofing searches. Summer heat drives HVAC. Ranking takes months, so you have to be in place before each season — not catching up after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — especially important when Capital Region homeowners are doing careful research before calling a specialist contractor for their 1890 brownstone." },
      { q: 'Which areas around Albany do you cover?', a: "The full Capital Region: Albany, Troy, Schenectady, Colonie, Clifton Park, Latham, Guilderland, Saratoga Springs, Malta, and their neighborhoods — Center Square, Washington Park, Helderberg, Lark Street, and more — with genuine local pages rather than one generic 'Albany area' page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In Albany, where homeowners are educated professionals who research before calling, owned leads convert better than shared ones anyway — and they don't cost you a per-lead fee to three competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across the Capital Region, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Albany Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Albany web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in the Capital Region. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Albany, NY',
    h1: 'Albany web design that turns visitors into booked jobs',
    h2Exact: 'Albany Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Capital Region contractors fast, mobile-first sites engineered to convert visitors into booked work — and to stand out to the educated, professional homeowners who research carefully before they call.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Albany contractor websites lose leads quietly: slow on a phone, buried call button, no clear signal that you understand 150-year-old homes or know how to handle a nor'easter emergency. Web design done right fixes all of that. We build sites that load fast, look like the specialist you are, and turn Capital Region visitors into booked jobs — whether they're state employees in Center Square, engineers in Clifton Park, or professors in Guilderland.",
    aioQuestion: 'What makes a good contractor website in Albany?',
    aioAnswer:
      "A good Albany contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, demonstrates expertise with old homes and seasonal emergencies, and names the specific Capital Region cities and neighborhoods you serve. Because Albany's homeowner base is educated and professional — state workers, university staff, GlobalFoundries engineers — trust signals like real project photos of Victorian and Federal-style homes and honest reviews matter more here than in most markets.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, and no signal that you understand what it takes to work on a 130-year-old Center Square rowhouse or respond to an ice dam emergency at 2 AM. Capital Region homeowners are discerning — they'll close the tab and call someone whose site communicates real expertise." },
      { title: "It's too slow on a phone", body: "Most of your Albany visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially in the middle of a nor'easter when they need a roofer right now. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your market", body: "A homeowner in Washington Park renovating a Victorian townhouse wants to see that you've worked on homes like theirs — not a generic 'serving the Capital Region' page that could be anybody. We build sites that name the cities and neighborhoods you work, show the old-home expertise you've built, and make it obvious why they should call you over the next result." },
    ],
    servicesHeading: "What's in an OnwardCraft Albany website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Capital Region neighborhoods, and the caliber of work your market expects." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Albany traffic is — and because emergency calls in the middle of a nor'easter don't come from a desktop." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to educated Capital Region homeowners and communicate genuine expertise in old homes, seasonal emergencies, and specialist trade work." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank across Albany, Troy, Schenectady, and the suburbs — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Capital Region neighborhood pages', desc: "Pages built around Center Square, Washington Park, Colonie, Clifton Park, Saratoga Springs, Troy, Schenectady, and the rest — so you stand out in each city instead of blending into one generic Albany page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search — especially for specialist home services — shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Capital Region territory, your best jobs — old-home work, emergency repairs, new builds — and your competitors, then map the site around booking more of what you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert with the trust signals that matter to Albany's professional homeowner base — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and the expertise language that wins educated buyers." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one — ready for nor'easter season or whatever comes next." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting across your Capital Region territory." },
    ],
    pricing: {
      heading: 'Transparent Albany web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Capital Region contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors serving multiple Capital Region cities.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Capital Region neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-city businesses across the Capital Region.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Albany?', a: "Most Capital Region contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in the Capital Region?', a: "That's exactly what we build for. Albany, Troy, Schenectady, and the suburbs are one market but they each have their own character — we build around the specific cities and neighborhoods you serve, show the old-home and seasonal expertise that matters here, and put a clear offer front and center. The homeowner base is educated and researches before calling; your site needs to earn that call." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for the Capital Region cities you serve. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Albany traffic comes from — and because emergency calls during a nor'easter come from a phone in the dark, not a desktop. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Capital Region contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'albany', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Albany Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Albany website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in the Capital Region. Free audit.',
    eyebrow: 'Website Redesign · Albany, NY',
    h1: 'Redesign your Albany website without losing your rankings',
    h2Exact: 'Albany Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and missing the specialist trust signals that educated Capital Region homeowners need to see before they call. We redesign Albany contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Capital Region contractor sites for speed and conversions, build them to speak to the educated professional homeowners who dominate this market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one. In a market like Albany where homeowners research carefully, a modern, credible site also converts those visits at a higher rate.",
    problemHeading: "Signs your Albany site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For high-ticket renovation or emergency work on a Victorian or Federal-style home, Albany homeowners judge you by your site in seconds. An old, cluttered design quietly signals that you might not be the specialist they need — even when your work is exceptional. A modern site that looks like the caliber of contractor you are changes that first impression." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Capital Region visitors before they ever see your offer — and when those visitors are searching during a nor'easter emergency or right after a basement floods, you can't afford to lose them. A redesign built mobile-first wins them back." },
      { title: "It doesn't differentiate you in a fragmented market", body: "The Capital Region is Albany, Troy, Schenectady, Saratoga Springs, and a dozen suburbs — each with its own homeowner character. A generic old site that says 'serving the Capital Region' gives a visitor no reason to pick you over the next result. A redesign built around the specific cities you serve, the old-home expertise you've built, and the seasonal work that defines this market changes the equation." },
    ],
    servicesHeading: "What's in an OnwardCraft Albany redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow load, poor mobile experience, missing trust signals, weak local targeting — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned across the Capital Region." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks — including the trust signals that matter to educated Albany homeowners." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and essential for emergency searches in bad weather." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Capital Region traffic lives and where emergency calls originate." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work on old homes and the professional expectations of your market." },
      { name: 'Capital Region neighborhood rebuild', desc: "Rebuilt around the specific cities and neighborhoods you serve — Center Square, Washington Park, Troy, Schenectady, Clifton Park, Saratoga Springs — so the new site ranks and converts locally instead of blending into a generic 'Albany area' page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search — especially for specialist contractors — shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings across the Capital Region, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that communicates the specialist expertise Albany homeowners expect — you review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration across your Capital Region pages." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — including watching for impact on your seasonal and city-specific pages." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting across Albany, Troy, Schenectady, and the suburbs, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Albany redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Capital Region contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor serving multiple Capital Region cities.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Capital Region neighborhood rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-city businesses across the Capital Region.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Albany?', a: "Most Capital Region redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully — and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them because the new site is faster and better structured." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't convey the specialist expertise Capital Region homeowners expect, isn't bringing in leads, or blends into the multi-city market without standing out in Albany or Troy or Schenectady — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including your neighborhood and seasonal pages if you have them." },
      { q: 'Will the redesign help me compete across the Capital Region?', a: "Yes, and that's the point in a fragmented multi-city market. We rebuild around the specific cities and neighborhoods you serve — with trust signals for old-home expertise and seasonal availability that matter to this homeowner base — so the new site performs in Albany, Troy, Schenectady, and wherever else you work." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and makes sure you capture emergency calls from homeowners on a phone in the middle of a storm." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings across the Capital Region, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const albanyCity = {
  citySlug: 'albany', city: 'Albany', state: 'New York', stateAbbr: 'NY', metro: 'Albany-Schenectady-Troy (Capital Region)',

  titleTag: 'Albany Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Albany and Capital Region contractors. Get found, get booked, and own your leads instead of renting them — built for old homes and brutal winters. Free audit.',

  eyebrow: 'Albany · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Capital Region contractors found and booked',
  h2Exact: 'Albany Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Albany's old housing stock, nor'easter winters, and stable government-professional homeowner base. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Capital Region neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Albany audit',

  intro:
    "If you run a contracting business in the Capital Region, you're navigating a genuinely complex market: Albany, Troy, Schenectady, and a ring of suburbs each with their own character; some of the oldest housing stock outside New England demanding specialist expertise; winters that drive nor'easter emergencies, ice dams, and heating calls from November through March; and a homeowner base of state workers, university staff, Albany Med physicians, and GlobalFoundries engineers who research carefully before they call. Winning here takes three things working together: a site that earns trust and converts, SEO that ranks you for what this market actually searches, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Capital Region contractors do exactly that.",
  aioQuestion: 'How do Albany contractors get more leads online?',
  aioAnswer:
    "Albany contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including specialist old-home and seasonal emergency terms — and local SEO that wins the Google Map Pack across Albany, Troy, Schenectady, and their suburbs. Because the homeowner base skews educated and professional, trust signals like real project photos, genuine reviews, and content that demonstrates old-home expertise convert at higher rates than generic contractor pages.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Capital Region Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Albany, Troy, or Schenectady searches 'near me.' Built for a fragmented multi-city metro with seasonal demand spikes that define the busiest weeks of the year.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Capital Region customers search — including specialist old-home terms and nor'easter seasonal searches — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn trust with educated Capital Region homeowners and turn visits into booked jobs — not brochures that just sit there while your phone stays quiet.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, conversions, and Capital Region credibility — and migrate it carefully so you keep every bit of ranking you've already earned across Albany, Troy, and Schenectady.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Albany?', a: "Four core services for Capital Region contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Albany-Schenectady-Troy metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand nor'easter emergencies, ice dam repairs, Victorian and Dutch Colonial renovation work, and the professional homeowner base that state government and GlobalFoundries create in this market." },
    { q: 'Why does the Capital Region need a different approach?', a: "The metro is fragmented across Albany, Troy, Schenectady, and a ring of suburbs — each with its own identity and homeowner character. The housing stock is among the oldest outside New England, creating demand for specialist contractors that generic SEO misses entirely. And seasonal demand here — nor'easters, spring flooding, summer HVAC — is more dramatic than most markets. Winning means targeting tight and ranking before each season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Capital Region areas do you serve?', a: "The full metro: Albany, Troy, Schenectady, Colonie, Clifton Park, Latham, Guilderland, Saratoga Springs, Malta, Cohoes, Watervliet, Bethlehem, and their neighborhoods — Center Square, Washington Park, Helderberg, Lark Street, and more — with genuine local pages rather than one generic 'Capital Region' page." },
    { q: 'Where should I start?', a: "Start with a free Albany audit. We'll look at your website, your rankings, and your Map Pack presence across the Capital Region, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

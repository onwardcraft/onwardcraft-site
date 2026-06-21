// BALTIMORE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Baltimore's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// BALTIMORE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Baltimore takes a specialist, not a template',
  body:
    "The Baltimore metro stretches across a region of roughly 2.9 million people — from the dense row house blocks of the city proper out through Howard County, Anne Arundel, and the suburbs that commute to DC. The city itself is defined by something almost no other American market has at this scale: more than 150,000 narrow brick row houses, most of them built between 1880 and 1930. These homes are beloved, and they are work. Parapet flashing, cast-iron plumbing, vintage HVAC, crumbling pointed mortar — the contractor who doesn't know row houses loses the job to the one who does. Layer on Chesapeake Bay humidity — one of the most aggressive moisture environments on the East Coast — and you get a market where roofing, siding, HVAC, and mold remediation degrade faster than in drier climates, driving a near-constant cycle of service demand. Summer thunderstorms, occasional nor'easters, and the remnant paths of hurricanes (Florence 2018, Isaias 2020) send roofing and water-damage calls spiking overnight. And the income spread is real: city neighborhoods like Federal Hill, Canton, and Hampden attract younger buyers renovating older row houses, while Howard County, Ellicott City, and Towson carry suburban-DC income levels, where homeowners are willing to spend on quality. The contractors who show up where those homeowners search — and prove they understand Baltimore's specific building stock and climate — own the market.",
  pullQuote: 'In a city of 150,000 row houses and one of the most humid climates on the East Coast, the contractor who understands the local stock gets the call.',
  donut: {
    title: "How Baltimore's row house market drives demand",
    value: 75,
    centerLabel: 'homes pre-1960',
    legend: [
      { label: 'Housing stock built before 1960', pct: 75, kind: 'teal' },
      { label: 'Newer construction', pct: 25, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer storm/HVAC season (Jun–Sep) and winter nor\'easter/heating season (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 82, peak: true }, { m: 'M', v: 55 },
    { m: 'A', v: 50 }, { m: 'M', v: 58 }, { m: 'J', v: 78, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'S', v: 80, peak: true }, { m: 'O', v: 52 },
    { m: 'N', v: 62 }, { m: 'D', v: 84, peak: true },
  ],
  stats: [
    { value: '2.9M', label: 'people across the Baltimore metro' },
    { value: '150K+', label: 'historic row houses — specialist knowledge required', accent: true },
    { value: 'Jun–Sep', label: 'summer storm and HVAC season when roofing and cooling calls spike' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Federal Hill', 'Canton', 'Fells Point', 'Hampden', 'Roland Park',
    'Towson', 'Ellicott City', 'Columbia', 'Annapolis', 'Owings Mills',
    'Lutherville', 'Catonsville', 'Dundalk', 'Station North', 'Locust Point',
  ],
};

const AREAS = [
  'Federal Hill', 'Canton', 'Fells Point', 'Hampden', 'Roland Park',
  'Towson', 'Ellicott City', 'Columbia', 'Annapolis', 'Owings Mills',
  'Lutherville', 'Catonsville', 'Dundalk', 'Howard County', 'Anne Arundel County',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, restoration, electrical, and GCs. We understand row house masonry, Bay humidity, summer storm emergencies, and the difference between a Federal Hill renovation and a Howard County full gut — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for Baltimore homeowners two other contractors also bought.",
  },
  {
    title: 'We actually speak Baltimore',
    body: "Neighborhood-by-neighborhood targeting from Dundalk to Ellicott City, plus the row house and Bay humidity angles that separate you from a generic shop. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Baltimore contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where row house specialists and Bay-climate expertise command premium jobs, that gap is significant. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Baltimore', state: 'Maryland', stateAbbr: 'MD', metro: 'Baltimore',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const baltimoreLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Baltimore Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Baltimore and three businesses show up on the map. We get you into those three, so the call lands with you — row house specialists.',
    eyebrow: 'Local SEO · Baltimore, MD',
    h1: 'When Baltimore searches for what you do, be the first name they find',
    h2Exact: 'Baltimore Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city defined by 150,000 historic row houses and Chesapeake Bay humidity, we get you into that top three for your neighborhoods — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Baltimore audit',
    intro:
      "Baltimore local SEO comes down to one thing: when a homeowner in Canton or Ellicott City searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Baltimore's building stock is old, the summers are humid, and storm season drives roofing and water-damage calls overnight — so becoming one of those three in the neighborhoods you serve, before demand spikes, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Baltimore businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Baltimore neighborhoods. In a market defined by historic row houses and Chesapeake Bay humidity, the winners call out their specialty — masonry, parapet flashing, moisture and mold, seasonal storm damage — and build tight service-area pages for Federal Hill, Canton, Towson, and beyond.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. In a city with this many contractors fighting for the same neighborhoods, if you're not one of those three, your work quality barely matters — most homeowners never see your name. Getting into that top three for Federal Hill, Canton, Towson, or Howard County is usually the single highest-return move a Baltimore contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Baltimore homeowner to three or four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to high-value neighborhoods", body: "Howard County and Ellicott City homeowners carry DC-level incomes and are willing to spend on quality. Towson, Roland Park, and Columbia buyers expect professionalism. If your local SEO doesn't reach those neighborhoods specifically — with pages that speak to the work those homeowners actually want — you're leaving the best jobs on the table." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Baltimore searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Federal Hill, Canton, Hampden, Towson, Ellicott City and the rest, so you rank for the neighborhood someone's actually searching, not just \"Baltimore.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Baltimore-area sources Google trusts — local press, neighborhood associations, trade partners. This is what separates page one from page two here." },
      { name: 'Row house and Bay-climate targeting', desc: "Content that calls out parapet flashing, masonry, moisture, mold, and storm-damage repair — the specialist angles that win Baltimore's most valuable jobs.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Baltimore city, Howard County, Anne Arundel, and surrounding areas — plus the row house and Bay-climate angles your competitors skip." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Baltimore neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Row house and Bay-climate content', 'Multi-area and county service pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Baltimore?', a: "Most Baltimore engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Baltimore keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this established is selling you something." },
      { q: 'What makes Baltimore local SEO different?', a: "Two things. It's a market defined by historic row houses — contractors who signal masonry, parapet flashing, and old-home expertise win the specialist jobs. And Chesapeake Bay humidity makes roofing, siding, HVAC, and mold work degrade faster than in drier cities, driving demand that spikes hard in summer storm season and after nor'easters." },
      { q: 'Can you help me reach higher-income suburban areas?', a: "Yes, and that's a real edge in this metro. Howard County, Ellicott City, Towson, and Annapolis homeowners carry DC-area income levels and are willing to pay for quality. We build specific pages targeting those areas so you rank where the best jobs are." },
      { q: 'Which areas do you cover?', a: "Baltimore city neighborhoods and surrounding suburbs: Federal Hill, Canton, Fells Point, Hampden, Roland Park, Towson, Ellicott City, Columbia, Annapolis, Owings Mills, Lutherville, Catonsville, Dundalk, and more. We build genuine neighborhood pages instead of one generic Baltimore page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, restoration, electrical, and general contractors. We understand summer storm emergencies, row house masonry, Bay humidity, and moisture issues — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Baltimore SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Baltimore SEO that ranks contractors on Google and brings in leads you own. Row house expertise, Bay-climate angles, revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Baltimore, MD',
    h1: 'Get your Baltimore business to the top of Google and keep it there',
    h2Exact: 'Baltimore SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Baltimore customers search and the leads keep coming. We build that ranking around the row house, storm damage, and Bay-humidity angles that define this market — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Baltimore SEO audit',
    intro:
      "Baltimore SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by 150,000 historic row houses, Chesapeake Bay humidity, and summer storm season — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Baltimore businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Baltimore neighborhoods and counties, and earning links from trusted regional sources. In a market defined by row house renovations, Bay humidity, and seasonal storm damage, calling out those specialties in content and targeting seasonal roofing and HVAC terms ahead of summer and winter are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Baltimore site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with this many contractors, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Baltimore demand swings hard — roofing and water damage calls after summer storms, nor'easter damage in winter, HVAC in humid summers and cold winters. The contractors who rank for those seasonal and emergency terms ahead of time catch the spike. If your SEO ignores that cycle, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Baltimore customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Baltimore-area and industry sources. In a market this established, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & storm-damage SEO', desc: "We rank you for summer storm roofing, nor'easter damage, HVAC emergencies, and Bay-humidity moisture terms — so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Baltimore leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal storm, row house, and Bay-humidity terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Baltimore-area and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Baltimore SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Baltimore-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm-damage SEO', 'Multi-county / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Baltimore?', a: "Most Baltimore SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Baltimore?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like storm season." },
      { q: 'Should my Baltimore SEO target seasonal demand?', a: "Yes. Summer thunderstorms drive roofing and water-damage calls overnight, nor'easters in winter push heating and structural calls, and Bay humidity makes HVAC and mold work a near-constant need. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/storm and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Baltimore do you cover?', a: "Baltimore city and the surrounding metro: Federal Hill, Canton, Fells Point, Hampden, Roland Park, Towson, Ellicott City, Columbia, Annapolis, Owings Mills, Lutherville, Catonsville, Dundalk, and more — with genuine local pages rather than one generic Baltimore page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Baltimore Web Design Company | OnwardCraft',
    metaDescription:
      'Baltimore web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving row houses, Bay-climate homes, and the full.',
    eyebrow: 'Web Design · Baltimore, MD',
    h1: 'Baltimore web design that turns visitors into booked jobs',
    h2Exact: 'Baltimore Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Baltimore contractors fast, mobile-first sites engineered to turn visitors into booked work — and to prove you're the specialist for row houses, Bay humidity, and the neighborhoods you actually serve.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Baltimore contractor websites lose leads quietly: slow on a phone, buried call button, no mention of the specific neighborhoods or building types they serve. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Federal-Hill-to-Howard-County visitors into booked jobs — built to win in a market where row house expertise and Bay-climate knowledge make all the difference.",
    aioQuestion: 'What makes a good contractor website in Baltimore?',
    aioAnswer:
      "A good Baltimore contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and counties you serve. Because Baltimore homeowners are often dealing with older row house stock, Bay humidity, and storm damage, a site that calls out that expertise — masonry, moisture, storm repairs — wins the call over a generic site that could be anywhere.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in Baltimore the next guy is one tap away. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Baltimore visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't prove you know Baltimore's homes", body: "A homeowner in Hampden with a row house has different concerns than one in Ellicott City with a newer build. A site that doesn't speak to those specifics — masonry, parapet flashing, Bay humidity, storm damage — reads as generic, and homeowners pick the contractor who seems to understand their home." },
    ],
    servicesHeading: "What's in an OnwardCraft Baltimore website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Baltimore traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Baltimore homeowners dealing with old houses, humid summers, and storm damage — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Federal Hill, Canton, Towson, Ellicott City, and the rest, so you stand out in a competitive market instead of blending into one generic Baltimore page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Baltimore web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-county businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Baltimore?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Baltimore?', a: "That's the whole point. We build around the specific neighborhoods and home types you serve — row houses, Bay-humidity homes, older stock — keep the site fast, and put a clear offer and call button front and center, so when a homeowner is comparing contractors, yours is the one that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Baltimore terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Baltimore traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Baltimore site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'baltimore', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Baltimore Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Baltimore website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across the full Baltimore.',
    eyebrow: 'Website Redesign · Baltimore, MD',
    h1: 'Redesign your Baltimore website without losing your rankings',
    h2Exact: 'Baltimore Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and easy to ignore when a homeowner in Canton or Ellicott City is comparing contractors. We redesign Baltimore contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Baltimore contractor sites for speed and conversions, build them to speak to row houses, Bay-climate concerns, and the neighborhoods you serve — and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Baltimore site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job on a Federal Hill row house or a Howard County renovation, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Baltimore visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't speak to Baltimore's homes and neighborhoods", body: "Traffic that doesn't turn into calls is wasted — and a generic old site gives a visitor no reason to pick you over the next result. We rebuild around the specific neighborhoods, building types, and climate concerns Baltimore homeowners actually have." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Baltimore traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around Federal Hill, Canton, Towson, Ellicott City, and the rest, so the new site stands out instead of reading like any other contractor's Baltimore page.", featured: true },
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
      heading: 'Transparent Baltimore redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-county sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Baltimore?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or fails to speak to Baltimore's specific building stock and neighborhoods, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Baltimore?', a: "Yes, and that's the point in a market this specific. We rebuild around the neighborhoods you serve, speak to row house expertise and Bay-climate concerns where relevant, and make the offer and call button obvious — so the new site stands out instead of reading like every other contractor's page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const baltimoreCity = {
  citySlug: 'baltimore', city: 'Baltimore', state: 'Maryland', stateAbbr: 'MD', metro: 'Baltimore',

  titleTag: 'Baltimore Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Baltimore contractors. Get found, get booked, and own your leads — built for a market of row houses, Bay humidity,.',

  eyebrow: 'Baltimore · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Baltimore contractors found and booked',
  h2Exact: 'Baltimore Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Baltimore's row house market, Chesapeake Bay climate, and the full metro from Federal Hill to Howard County. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Baltimore audit',

  intro:
    "If you run a contracting business in Baltimore, you're serving one of the most distinctive home markets in the country — 150,000-plus historic row houses that demand specialist knowledge, Chesapeake Bay humidity that accelerates wear on every roof, HVAC unit, and siding job, and a metro that stretches from city neighborhoods revitalizing under young buyers to Howard County suburbs with DC-level incomes. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Baltimore contractors do exactly that.",
  aioQuestion: 'How do Baltimore contractors get more leads online?',
  aioAnswer:
    "Baltimore contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Baltimore's housing stock is largely pre-1960 row houses and Bay humidity drives accelerated wear, contractors who call out row house expertise, moisture and mold remediation, storm damage, and seasonal HVAC in their content and profiles win the highest-value calls.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Baltimore searches \"near me.\" The single highest-return move for most local businesses — done tight, neighborhood by neighborhood across the city and suburbs.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — row house renovations, storm damage, Bay-humidity HVAC, and more — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs and prove you're the specialist for Baltimore's homes and neighborhoods — not a brochure that just sits there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Baltimore?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, restoration, electrical, and general contractors — so we understand summer storm emergencies, row house masonry, Bay humidity, and the full range of work Baltimore homes generate." },
    { q: 'Why does the Baltimore market need a different approach?', a: "It's a market defined by historic row houses — narrow brick homes from 1880 to 1930 that need specialists who understand masonry, parapet flashing, and old-home systems. Add Chesapeake Bay humidity, storm season, and a wide income spread from city neighborhoods to Howard County suburbs, and you need local content that speaks to all of it, not a generic contractor template." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Baltimore areas do you serve?', a: "Baltimore city and the surrounding metro: Federal Hill, Canton, Fells Point, Hampden, Roland Park, Towson, Ellicott City, Columbia, Annapolis, Owings Mills, Lutherville, Catonsville, Dundalk, and more — with genuine local pages rather than one generic Baltimore page." },
    { q: 'Where should I start?', a: "Start with a free Baltimore audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

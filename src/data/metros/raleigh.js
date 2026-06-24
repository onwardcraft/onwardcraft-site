// RALEIGH — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Raleigh's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// RALEIGH — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Raleigh is a race against the transplants',
  body:
    "The Raleigh-Durham-Chapel Hill metro is one of the fastest-growing tech hubs in the country, and the growth is relentless. Apple, Google, Meta, and a string of major pharma companies are planting roots here, bringing a wave of high-income transplants from Silicon Valley and the Northeast who arrive, buy a house, and immediately need someone to work on it. They don't know a single local contractor, they don't have a neighbor to ask yet, and they go straight to Google. The contractor who shows up first wins by default — every time. Two forces make local search here particularly high-stakes. First, the sheer volume of new homeowners is unlike almost anywhere else in the South: the same neighborhoods that were empty lots a few years ago are now full of professionals who rely on search for everything. Second, Raleigh's climate swings hard — brutal summers that push HVAC demand from May through September, occasional ice storms that shut down the city in January and February, and hurricane remnants tracking inland from the coast that bring roofing and flooding calls in the fall. The contractor ranked before those events happen is the one whose phone rings.",
  pullQuote: 'In a market flooded with tech transplants who open Google before they know a single neighbor, the contractor who ranks first wins the job by default.',
  donut: {
    title: 'How Raleigh is growing',
    value: 42,
    centerLabel: 'moved here in last 5 years',
    legend: [
      { label: 'Residents who relocated within the last 5 years', pct: 42, kind: 'teal' },
      { label: 'Long-established residents', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC season May–Sep; hurricane remnants Sep–Oct; ice storms Jan–Feb',
  seasonalDemand: [
    { m: 'J', v: 80, peak: true }, { m: 'F', v: 75, peak: true }, { m: 'M', v: 52 },
    { m: 'A', v: 58 }, { m: 'M', v: 82, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 92, peak: true }, { m: 'S', v: 85, peak: true },
    { m: 'O', v: 78, peak: true }, { m: 'N', v: 55 }, { m: 'D', v: 50 },
  ],
  stats: [
    { value: '1.4M+', label: 'people across the Raleigh-Durham metro and growing fast' },
    { value: 'Top 5', label: 'fastest-growing tech hubs in the US — Apple, Google, Meta all expanding here', accent: true },
    { value: 'May–Sep', label: 'HVAC peak season driven by hot, humid summers' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks from new homeowners' },
  ],
  neighborhoods: [
    'Five Points', 'Historic Oakwood', 'North Hills', 'Brier Creek', 'Cary',
    'Apex', 'Morrisville', 'Durham', 'Chapel Hill', 'Carrboro',
    'Holly Springs', 'Wake Forest', 'Fuquay-Varina', 'Garner', 'Knightdale',
  ],
};

const AREAS = [
  'Raleigh', 'Cary', 'Apex', 'Morrisville', 'Durham', 'Chapel Hill', 'Carrboro',
  'Holly Springs', 'Wake Forest', 'Fuquay-Varina', 'Garner', 'Five Points',
  'Historic Oakwood', 'North Hills', 'Brier Creek',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand HVAC emergencies during a July heat wave, post-hurricane roofing surges, and the ice-storm calls that hit every winter. Everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially now that the Research Triangle is flooded with new homeowners who are easy to win if you rank first.",
  },
  {
    title: 'We actually speak Raleigh',
    body: "Suburb-by-suburb targeting from Cary and Apex to Wake Forest and Holly Springs, built around the transplant wave and the seasonal demand swings that define this market. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Raleigh contractor gets around 2,000 local \"near me\" impressions a month across a handful of suburbs. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market flooding with new homeowners who have no existing contractor relationships, that gap is enormous. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Raleigh', state: 'North Carolina', stateAbbr: 'NC', metro: 'Raleigh-Durham',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const raleighLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'raleigh', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Raleigh Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Raleigh Local SEO that puts you in the Map Pack when neighbors search "near me." We win you the top three across your suburbs.',
    eyebrow: 'Local SEO · Raleigh-Durham',
    h1: 'Raleigh Local SEO that turns "near me" searches in Five Points and Cary into a ringing phone',
    h2Exact: 'Raleigh Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a metro flooding with tech transplants who don't know a single local contractor yet, we get you into that top three for your suburbs and neighborhoods, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Raleigh audit',
    intro:
      "Raleigh local SEO comes down to one thing: when a new homeowner in Cary or Apex or North Hills searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? The Research Triangle is one of the fastest-growing tech hubs in the US, and thousands of transplants arrive every year with no existing contractor relationships. They open Google, tap one of the three map results, and call. Being in that top three — suburb by suburb, neighborhood by neighborhood — is the whole game. Here's how you do it.",
    aioQuestion: 'How do Raleigh businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Raleigh suburbs and neighborhoods. In the Research Triangle, tight suburb-by-suburb targeting and ranking ahead of seasonal demand spikes — HVAC in summer, roofing after hurricane remnants in fall, emergency calls after ice storms in winter — are what separate the contractors who stay booked from the ones who chase work.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks, and in a metro full of new homeowners who have no local referrals and nowhere else to turn, that top-three position is everything. If you're not one of them, most people never see your name — no matter how good your work is." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Raleigh homeowner to four contractors, then bill each of you to fight over them. Local SEO builds the opposite: a transplant who just moved to Apex finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible before the seasonal spikes hit", body: "Raleigh's busiest weeks are predictable: HVAC calls surge from May through September, hurricane remnants bring roofing and flooding work every fall, and ice storms create emergency calls each winter. Local SEO takes months to build — so the contractors who rank before the spike are the ones whose phones ring. Waiting until the season starts means missing it entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Raleigh and Triangle searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes new homeowners — who have no one to ask — pick up the phone." },
      { name: 'Suburb and neighborhood pages', desc: "Real pages for Cary, Apex, Morrisville, Holly Springs, Wake Forest, and more, so you rank for the suburb someone's actually searching, not just \"Raleigh.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Triangle sources Google trusts — local press, trade associations, community organizations. This is what separates page one from page two here." },
      { name: 'Seasonal demand SEO', desc: "We rank you for HVAC searches before summer, roofing and water damage searches before hurricane season, and emergency calls before ice storms — so you're visible when demand spikes, not scrambling after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your suburbs and neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Suburb and service-area pages across the Triangle, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Triangle suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Raleigh?', a: "Most Raleigh engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Triangle keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this fast-growing is selling you something." },
      { q: 'What makes Raleigh local SEO different?', a: "The Research Triangle is one of the fastest-growing tech hubs in the US, which means a constant wave of new homeowners who have no local contractor relationships and go straight to Google. Winning here means ranking suburb by suburb across Cary, Apex, Morrisville, Holly Springs, and the rest, and being in place before the seasonal demand spikes that define this market." },
      { q: 'Why does seasonal timing matter so much in Raleigh?', a: "Raleigh has distinct, predictable demand spikes: HVAC runs hot May through September in the humid subtropical heat, hurricane remnants tracking inland bring roofing and flooding calls every fall, and ice storms create emergency calls in January and February. Local SEO takes months to build, so you have to be ranking before the spike — not chasing it after." },
      { q: 'Which areas do you cover?', a: "The full Raleigh-Durham metro — Cary, Apex, Morrisville, Holly Springs, Wake Forest, Fuquay-Varina, Garner, Five Points, Historic Oakwood, North Hills, Brier Creek, Durham, Chapel Hill, Carrboro and more. We build genuine suburb and neighborhood pages instead of one generic Raleigh page, because that's what actually ranks for \"[service] [suburb]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand HVAC emergencies during a July heat wave, post-hurricane roofing surges, and the ice-storm service calls that define Raleigh winters, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — especially from the steady stream of transplants who have no one to ask and just need a contractor who appears first." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis of what Raleigh Local SEO will take to put you in the top three from Five Points to Wake Forest." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'raleigh', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Raleigh SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Raleigh SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for the fastest-growing tech hub.',
    eyebrow: 'SEO Services · Raleigh-Durham',
    h1: 'Raleigh SEO that ranks Triangle contractors for the searches that book jobs',
    h2Exact: 'Raleigh SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Triangle customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Raleigh SEO audit',
    intro:
      "Raleigh SEO comes down to one question: when a tech transplant who just closed on a house in Cary searches your service, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing metros in the country — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Raleigh businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Triangle suburbs and neighborhoods, and earning links from trusted Raleigh-area sources. In a metro growing this fast, targeting the suburbs where transplants are buying homes and ranking ahead of seasonal spikes — HVAC in summer, roofing after hurricane remnants, emergency calls after ice storms — are the two fastest ways to pull ahead.",
    problemHeading: "Three reasons your Raleigh site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a metro growing this fast, with thousands of new homeowners who have no contractor relationships and go straight to search, if you're not in the top handful of results for what you sell, you're invisible to the people who need you most." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market with this much organic search demand from transplants, that compounding return is significant." },
      { title: "You're not ranking for the demand that matters", body: "Raleigh demand swings hard with the seasons — HVAC in the long hot summer, roofing and water damage when hurricane remnants track inland in fall, and emergency calls when ice storms hit in winter. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Triangle customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Raleigh-Durham and industry sources. In a market growing this fast, links are what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for HVAC searches before summer, roofing and water damage before hurricane season, and ice-storm emergency calls before winter — so your busiest weeks land on you, not competitors.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Triangle leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Raleigh-Durham and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Raleigh SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Triangle search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-suburb / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Raleigh?', a: "Most Raleigh SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Raleigh?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like the start of HVAC season." },
      { q: 'Should my Raleigh SEO target seasonal demand?', a: "Yes, absolutely. HVAC searches surge from May through September. Hurricane remnants tracking inland bring roofing and flooding calls in the fall. Ice storms generate emergency service calls in January and February. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Raleigh do you cover?', a: "The full Triangle metro — Cary, Apex, Morrisville, Holly Springs, Wake Forest, Fuquay-Varina, Garner, Durham, Chapel Hill, Carrboro and the Raleigh neighborhoods of Five Points, North Hills, Historic Oakwood, and Brier Creek — with genuine local pages rather than one generic Raleigh page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially important in a market with thousands of new homeowners who have no existing contractor relationships and turn to Google first." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a straight diagnosis of the Raleigh SEO work it will take to get you onto page one and keep you there." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'raleigh', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Raleigh Web Design Company | OnwardCraft',
    metaDescription:
      'Raleigh web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in the fastest-growing tech hub in the South.',
    eyebrow: 'Web Design · Raleigh-Durham',
    h1: 'Raleigh web design built to convert clicks into calls across the Research Triangle',
    h2Exact: 'Raleigh Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Triangle contractors fast, mobile-first sites engineered to turn visitors into booked work, and to capture the constant wave of new homeowners who have no local referrals and go straight to whoever looks most professional online.",
    primaryCta: 'Get my free quote',
    intro:
      "Raleigh web design only earns its keep when it books work: most contractor sites here lose leads quietly, with a slow load on a phone, a buried call button, and no clear offer. In a metro full of tech transplants who don't know a single local contractor and judge you by your website in seconds, that's especially costly. We build sites that load fast, look like the professional you are, and turn Cary-to-Chapel-Hill visitors into booked jobs, engineered for a market where the contractor who looks most credible online wins by default.",
    aioQuestion: 'What makes a good contractor website in Raleigh?',
    aioAnswer:
      "A good Raleigh contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because so many Raleigh homeowners are recent transplants who have no existing contractor relationships and rely entirely on first impressions online, trust signals and mobile speed are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. In Raleigh, where a significant share of homeowners are transplants who don't know anyone local and are making a cold Google search, that first impression is everything. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Triangle visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse on Google. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your suburb", body: "A homeowner in Apex wants to see you serve Apex — not a generic \"Raleigh\" page that could be anybody. We build sites that name the suburbs and neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Raleigh website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Triangle traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to transplants making a cold search and homeowners who need the job done right, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around the suburbs and neighborhoods you serve — Cary, Apex, Morrisville, Holly Springs, and more — so you stand out from a generic city page and rank for where people actually are.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Raleigh web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Raleigh?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me capture the transplant wave?', a: "That's the whole point. Thousands of tech workers move to the Triangle every year with no contractor relationships and go straight to Google. They judge entirely by first impressions online. We build sites that load fast, look like the professional you are, and put a clear offer in front of them — so the cold Google search lands on you." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Triangle terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Triangle traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Raleigh site should include, and a fixed-price quote with a timeline. No pressure, just a plan for Raleigh web design that turns Triangle visitors into booked jobs." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'raleigh', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Raleigh Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Raleigh Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds that convert more Triangle visitors into booked jobs.',
    eyebrow: 'Website Redesign · Raleigh-Durham',
    h1: 'Raleigh Website Redesign that keeps every North Hills and Brier Creek ranking you have earned',
    h2Exact: 'Raleigh Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. In a market flooded with transplants who judge every contractor by their website in seconds, we redesign Raleigh contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Raleigh Website Redesign goes one of two bad ways when it's rushed: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Raleigh contractor sites for speed and conversions, build them to earn the trust of transplants making cold searches, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Raleigh site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Raleigh homeowners — especially the tech transplants who are used to polished products — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Triangle visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into the market instead of standing out", body: "Traffic that doesn't turn into calls is wasted. A generic old site in a fast-growing market full of contractors competing for the same new homeowners gives a visitor no reason to pick you. We rebuild for conversions and for the suburbs you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Triangle traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns trust from homeowners who have no existing relationship with you." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the suburbs and neighborhoods you serve — Cary, Apex, Holly Springs, Wake Forest and more — so the new site stands out and ranks for where your customers actually are.", featured: true },
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
      heading: 'Transparent Raleigh redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Raleigh?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or loses the trust of tech transplants who are used to polished websites, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in the Triangle?', a: "Yes, and that's the point in a market this fast-growing. We rebuild around the specific suburbs and neighborhoods you serve, keep the site fast, and make the offer and call button obvious — so the new site earns trust from transplants making cold searches instead of reading like every other contractor's." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and an SEO-safe migration plan. It tells you plainly whether a Raleigh Website Redesign will pay off without putting your existing rankings at risk." },
    ],
  },
];

export const raleighCity = {
  citySlug: 'raleigh', city: 'Raleigh', state: 'North Carolina', stateAbbr: 'NC', metro: 'Raleigh-Durham',

  titleTag: 'Raleigh Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Raleigh marketing for contractors: web design, SEO, and local SEO that get you found by the wave of tech transplants moving to the Triangle, booked, and owning your leads.',

  eyebrow: 'Raleigh · Web Design, SEO & Lead Generation',
  h1: 'Raleigh marketing for contractors across the Research Triangle: get ranked, get booked',
  h2Exact: 'Raleigh Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Research Triangle — one of the fastest-growing tech hubs in the country. One team to get you ranking, converting, and capturing the constant wave of new homeowners before your competitors do.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Raleigh audit',

  intro:
    "Raleigh marketing for contractors has to account for one fact: you're operating in one of the fastest-growing tech metros in the US. Apple, Google, Meta, and major pharma companies are expanding here, and thousands of high-income transplants buy homes every year with no existing contractor relationships, so they open Google and call whoever shows up first. Winning that search means three things working together: a site that earns trust at first glance, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack suburb by suburb across Cary, Apex, Morrisville, and the rest. Here's how we help Raleigh contractors do exactly that.",
  aioQuestion: 'How do Raleigh contractors get more leads online?',
  aioAnswer:
    "Raleigh contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb. Because the market is flooded with tech transplants who have no local contractor relationships and rely on Google entirely, the contractors who rank first and look most credible online win the most work — especially ahead of the seasonal spikes that define Triangle demand.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when someone in Cary, Apex, or North Hills searches \"near me.\" The single highest-return move in a metro full of new homeowners who go straight to the map.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Triangle customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn trust from transplants who have no referrals and turn visitors into booked jobs — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Raleigh?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the fastest-growing markets in the country." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand HVAC emergencies in a July heat wave, post-hurricane roofing surges, and the ice-storm service calls that define Raleigh winters." },
    { q: 'Why does the Raleigh market need a different approach?', a: "The Research Triangle is flooding with tech transplants who have no local contractor relationships. They go straight to Google and call whoever shows up first. Winning here means ranking suburb by suburb across Cary, Apex, Morrisville, Holly Springs, and the rest, and being in place before the seasonal demand spikes that define this market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Raleigh areas do you serve?', a: "The full Triangle metro — Raleigh, Cary, Apex, Morrisville, Holly Springs, Wake Forest, Fuquay-Varina, Garner, Durham, Chapel Hill, Carrboro, and Raleigh neighborhoods including Five Points, Historic Oakwood, North Hills, and Brier Creek." },
    { q: 'Where should I start?', a: "Start with a free Raleigh audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan for Raleigh marketing for contractors that gets you ranked and booked across the Triangle." },
  ],
};

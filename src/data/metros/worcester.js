// WORCESTER — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Worcester's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// WORCESTER — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Worcester is different from anywhere else in New England',
  body:
    "Worcester is 45 miles west of Boston, and that distance has shaped the city's housing market in ways that matter a lot for contractors. Over the past decade, thousands of Boston-priced-out families and remote workers have moved to Worcester — people with Boston-area incomes who paid Worcester prices for their homes. That combination produces renovation budgets that are genuinely substantial, even for a mid-size New England city in the middle of a real revival. The housing stock those buyers inherited is extraordinary: three-deckers, Victorians, and Colonial buildings from 1850 to 1920, built for mill workers and industrialists alike. Old homes need specialist contractors. Original wood windows, galvanized and cast-iron plumbing, knob-and-tube wiring, and the kind of foundation work that keeps regional specialists busy year-round. On top of that, Worcester is routinely the worst-hit major city in New England during nor'easters — its inland elevation converts coastal rain into heavy snow that barely touches the coast, and the 2011 EF3 tornado that touched down directly on the city reminded homeowners how exposed they are. Medical professionals from UMass Medical School, Saint Vincent Hospital, and UMass Memorial Medical Center form a significant professional homeowner class; students and faculty from Clark University, WPI, and Holy Cross round out an educated, research-oriented buyer market. About 26 percent of residents identify as Hispanic — the Puerto Rican and Dominican communities are significant — and Spanish-language search is a real, largely unclaimed opportunity for contractors willing to show up for it.",
  pullQuote: 'Worcester homeowners brought Boston incomes and bought 19th-century houses. The contractor who shows up when their old house needs work — in the middle of a nor\'easter — owns the market.',
  donut: {
    title: 'Worcester\'s Hispanic community',
    value: 26,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 26, kind: 'teal' },
      { label: 'Other', pct: 74, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Nor\'easter/winter season (Nov–Apr) and summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 94, peak: true }, { m: 'F', v: 91, peak: true }, { m: 'M', v: 75, peak: true },
    { m: 'A', v: 68, peak: true }, { m: 'M', v: 58 }, { m: 'J', v: 72, peak: true },
    { m: 'J', v: 80, peak: true }, { m: 'A', v: 78, peak: true }, { m: 'S', v: 65, peak: true },
    { m: 'O', v: 56 }, { m: 'N', v: 82, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '~215K', label: 'people in Worcester proper, with a growing metro region' },
    { value: '~26%', label: 'of residents identify as Hispanic — a major Spanish-language search opportunity', accent: true },
    { value: 'Nov–Apr', label: 'peak nor\'easter and winter damage season, when contractor calls surge' },
    { value: '1850–1920', label: 'the era most Worcester housing stock was built — old homes need specialist contractors' },
  ],
  neighborhoods: [
    'Tatnuck', 'Greendale', 'Indian Lake', 'Main South', 'Grafton Hill',
    'Shrewsbury', 'Northborough', 'Auburn', 'Millbury', 'Grafton',
    'Webster', 'Great Brook Valley', 'Belmont Hill', 'Burncoat', 'Vernon Hill',
  ],
};

const AREAS = [
  'Tatnuck', 'Greendale', 'Indian Lake', 'Main South', 'Grafton Hill',
  'Shrewsbury', 'Northborough', 'Auburn', 'Millbury', 'Grafton',
  'Webster', 'Great Brook Valley', 'Belmont Hill', 'Burncoat', 'Vernon Hill',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand nor'easter emergencies, old New England housing stock, and the kind of specialist work that Worcester's 19th-century homes demand — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Worcester',
    body: "Neighborhood-by-neighborhood targeting from Tatnuck to Shrewsbury, plus the Spanish-language reach to win searches most agencies don't even see. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Worcester contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market that's now attracting Boston-income homeowners with old houses full of deferred renovation work, that gap is real. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Worcester', state: 'Massachusetts', stateAbbr: 'MA', metro: 'Worcester',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const worcesterLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'worcester', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Worcester Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Worcester local SEO that gets contractors into the top three on the map. We win you the Map Pack across your neighborhoods so the call lands with you.',
    eyebrow: 'Local SEO · Worcester, MA',
    h1: 'Worcester Local SEO that ranks you above the competition from Tatnuck to Shrewsbury',
    h2Exact: 'Worcester MA Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. Worcester homeowners came from Boston with big renovation budgets and old 19th-century houses — we get you into that top three for your neighborhoods, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Worcester audit',
    intro:
      "Worcester local SEO comes down to one thing: when a homeowner in Tatnuck or Shrewsbury searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Worcester has a genuine revival going — thousands of Boston-priced-out families moved here, bringing Boston incomes to a city full of 19th-century houses that need specialist contractors. And about 26 percent of residents speak Spanish at home, so showing up for those searches is a real, largely unclaimed edge. Here's how you get into those three pins.",
    aioQuestion: 'How do Worcester MA businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Worcester neighborhoods like Tatnuck, Greendale, and Indian Lake. Worcester's market is shaped by Boston-income homeowners, old housing stock that needs specialist work, and a large Spanish-speaking community — the winners target tight service areas, show up in both English and Spanish when relevant, and are already ranking when nor'easter season hits.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Worcester has attracted thousands of homeowners with real renovation budgets — people who bought 19th-century houses and now need roofing, plumbing, HVAC, and restoration work. If you're not in that top three for your neighborhoods, most of those homeowners never see your name. Getting into that Map Pack is usually the single highest-return move a Worcester contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Worcester homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to a quarter of the market", body: "About 26 percent of Worcester residents identify as Hispanic — the Puerto Rican and Dominican communities are significant — and many of them search for services in Spanish. Most contractors do nothing to show up for those searches, so the demand sits unclaimed. Targeting Spanish-language searches is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Worcester searches you should win — from nor'easter emergencies to old-house specialist work." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Tatnuck, Greendale, Indian Lake, Shrewsbury, Northborough and the rest, so you rank for the neighborhood someone's actually searching, not just \"Worcester.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Worcester and Massachusetts sources Google trusts — local press, associations, partners, university networks. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "About 26% of Worcester residents are Hispanic — a large community that largely searches in Spanish and is underserved by most contractors. We help you show up for that demand.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Worcester neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Worcester and surrounding towns — Shrewsbury, Northborough, Auburn, Millbury, Grafton, Webster — plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Worcester neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Worcester and the surrounding towns.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Worcester?', a: "Most Worcester engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Worcester keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Worcester local SEO different from other markets?', a: "Three things. First, the homeowner base skews toward Boston-income buyers who moved west — real renovation budgets. Second, the housing stock is almost entirely 19th-century, so the search terms and the job types are different from a newer suburb. Third, about 26 percent of residents are Hispanic, and Spanish-language searches for contractors are largely unclaimed." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Worcester that's a genuine edge. About 26 percent of residents identify as Hispanic — the Puerto Rican and Dominican communities are significant — and many search for services in Spanish. We can optimize your profile and content so you show up for those searches in neighborhoods where most contractors are invisible." },
      { q: 'Which areas do you cover?', a: "Worcester proper and the surrounding towns — Shrewsbury, Northborough, Auburn, Millbury, Grafton, Webster — and the neighborhoods inside the city like Tatnuck, Greendale, Indian Lake, and Burncoat. We build genuine neighborhood pages instead of one generic Worcester page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand nor'easter emergencies, old New England housing stock, and the specialist work that 19th-century Worcester homes demand." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Worcester neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day Worcester local SEO plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'worcester', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Worcester SEO Company | Rank on Google, Own Your Leads | OnwardCraft',
    metaDescription:
      'Worcester SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a city with old homes.',
    eyebrow: 'SEO Services · Worcester, MA',
    h1: 'Worcester SEO that climbs you past the competition before nor\'easter season hits',
    h2Exact: 'Worcester MA SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Worcester customers search and the leads keep coming — through nor'easter season, spring thaw, and summer HVAC calls alike. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Worcester SEO audit',
    intro:
      "Worcester SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. Worcester has a unique market — Boston-priced-out homeowners with real budgets and 19th-century houses full of work, a large Spanish-speaking community, and a nor'easter season that drives demand spikes unlike anywhere else in New England. We get contractors ranking for the money keywords in all of it.",
    aioQuestion: 'How do Worcester MA businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Worcester neighborhoods and surrounding towns, and earning links from trusted Massachusetts sources. Worcester's housing stock — largely 19th-century mill-worker homes — creates a distinct set of specialist search terms. Ranking for nor'easter and winter damage searches ahead of the season, and targeting Spanish-language queries in a city that's 26 percent Hispanic, are two of the fastest ways to pull ahead of competitors.",
    problemHeading: "Three reasons your Worcester site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. Worcester has attracted thousands of homeowners with Boston-area incomes and houses full of 19th-century bones — real jobs, real budgets. If you're not in the top handful of results for what you sell, those homeowners never find your name, no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market where homeowners with serious renovation budgets are searching for specialist contractors, owning those rankings is worth building." },
      { title: "You're not ranking for the demand that matters", body: "Worcester demand swings hard. Nor'easters pound the city from November through April — Worcester often gets more snow than anywhere else in New England, and a single storm produces hundreds of roofing, water damage, and emergency calls. Summer HVAC kicks in hard from June through September. The contractors who rank for those searches ahead of the season catch the spike. If your SEO ignores it, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Worcester customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Worcester, Massachusetts, and industry sources. Links are often what separate page one from page two in a competitive market." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Nor\'easter & seasonal SEO', desc: "We rank you for the winter damage, snow removal, and emergency searches that drive Worcester's busiest season, so you're visible before the storm, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Worcester leads — including seasonal and old-home specialist terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the nor'easter, winter damage, and specialist terms that matter most in Worcester." },
      { name: 'Build authority', desc: "Links and citations from trusted Worcester, Massachusetts, and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Worcester SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Worcester search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Nor\'easter & seasonal SEO', 'Multi-town targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Worcester?', a: "Most Worcester SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Worcester?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Worcester contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes — especially heading into nor'easter season." },
      { q: 'Should my Worcester SEO target nor\'easter and winter demand?', a: "Absolutely. Worcester is routinely the worst-hit major city in New England during nor'easters — the city's inland elevation converts coastal rain into heavy snow. When a storm hits, searches for roofing, water damage, heating, and emergency services spike overnight. You have to be ranking before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/nor'easter and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Worcester do you cover?', a: "Worcester proper and surrounding towns — Shrewsbury, Northborough, Auburn, Millbury, Grafton, and Webster — with genuine local pages for neighborhoods like Tatnuck, Greendale, and Indian Lake, rather than one generic Worcester page." },
      { q: 'Can you help me target Worcester\'s Spanish-speaking community?', a: "Yes. About 26 percent of Worcester residents are Hispanic and many search for services in Spanish. We can build content and optimize your presence for Spanish-language searches — demand that most of your competitors are completely ignoring." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic Worcester SEO timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'worcester', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Worcester Web Design Company | Fast Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'Worcester web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving old New England homes in a nor\'easter.',
    eyebrow: 'Web Design · Worcester, MA',
    h1: 'Worcester web design that loads fast and books jobs for old-home contractors',
    h2Exact: 'Worcester MA Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Worcester contractors fast, mobile-first sites engineered to turn visitors into booked work — for homeowners who came from Boston with real budgets and 19th-century houses full of work to do.",
    primaryCta: 'Get my free quote',
    intro:
      "Worcester web design has one job, and most contractor sites fail at it: they lose leads quietly, slow on a phone, buried call button, no clear offer. Done right, it fixes all of that. We build sites that load fast, look like the professional you are, and turn Tatnuck-to-Shrewsbury visitors into booked jobs — designed for a market where Boston-income homeowners are calling contractors to work on houses built in 1890.",
    aioQuestion: 'What makes a good contractor website in Worcester MA?',
    aioAnswer:
      "A good Worcester contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos from local homes, and names the specific neighborhoods and surrounding towns you serve. Because Worcester's housing stock is almost entirely 19th century, showing that you understand old homes — original windows, old plumbing, historic woodwork — is what builds trust with the homeowners who are most likely to hire and pay well.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. Worcester's revival has brought in serious homeowners with real renovation budgets. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Worcester visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Tatnuck wants to see you serve Tatnuck — not a generic \"Worcester\" page that could be anybody. We build sites that name the neighborhoods and surrounding towns you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Worcester website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Worcester neighborhoods, and the jobs you actually want — including the old-home specialist work that defines this market." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Worcester traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Worcester homeowners — many of them Boston-area transplants with high standards — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the neighborhoods and surrounding towns you serve — Tatnuck, Greendale, Shrewsbury, Northborough, Auburn — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Worcester neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — including the nor'easter emergency and old-house specialist jobs that define this market." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Worcester web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-town businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Worcester?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site stand out in Worcester\'s market?', a: "That's the goal. Worcester has real homeowners with real renovation budgets — people who came from Boston, bought 19th-century houses, and are now looking for contractors who understand old homes. We build around your specific neighborhoods, keep the site fast, and put a clear offer and call button front and center so you're the one who books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Worcester terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Worcester traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Worcester web design project should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'worcester', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Worcester Website Redesign | SEO-Safe Rebuilds That Convert | OnwardCraft',
    metaDescription:
      'Worcester website redesign that rebuilds for speed and conversions without losing rankings. Mobile-first, SEO-safe migration built for an old-home, nor\'easter market.',
    eyebrow: 'Website Redesign · Worcester, MA',
    h1: 'Worcester Website Redesign done with a careful, SEO-safe migration that holds your rankings',
    h2Exact: 'Worcester MA Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Worcester contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned through nor'easter season and beyond.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Worcester website redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Worcester contractor sites for speed and conversions, build them to speak to homeowners with Boston incomes and 19th-century houses, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and in Worcester's old-home market, a site that speaks specifically to 19th-century houses and nor'easter preparedness converts far better than a generic template.",
    problemHeading: "Signs your Worcester site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — restoring an 1890 Victorian or replacing a century-old heating system — Worcester homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Worcester visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into the market", body: "Traffic that doesn't turn into calls is wasted. Worcester has attracted homeowners with Boston incomes and real renovation budgets — but a generic old site gives them no reason to pick you over the next result. We rebuild for conversions and for the neighborhoods and old-home work you actually do." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Worcester traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of homeowners who paid Boston prices for New England professionalism." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the neighborhoods and surrounding towns you serve — Tatnuck, Shrewsbury, Northborough, Auburn, Millbury — so the new site stands out instead of reading like a generic contractor template.", featured: true },
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
      heading: 'Transparent Worcester redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-town sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Worcester?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't speak to Worcester homeowners who own old New England homes, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete for Worcester homeowners?', a: "Yes, and that's the point. Worcester has attracted Boston-income homeowners with 19th-century houses and real renovation budgets. We rebuild around the specific neighborhoods and old-home work you do, keep the site fast, and make the offer obvious — so the right homeowners choose you." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what your Worcester website redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const worcesterCity = {
  citySlug: 'worcester', city: 'Worcester', state: 'Massachusetts', stateAbbr: 'MA', metro: 'Worcester',

  titleTag: 'Worcester MA Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Worcester marketing for contractors: web design, SEO, and local SEO that get you found, booked, and owning your leads in a nor\'easter market full of old homes.',

  eyebrow: 'Worcester, MA · Web Design, SEO & Lead Generation',
  h1: 'Worcester marketing for contractors that fills your calendar through nor\'easter season',
  h2Exact: 'Worcester MA Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Worcester's unique market: Boston-income homeowners, 19th-century housing stock, nor'easter winters, and a large Spanish-speaking community. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Worcester audit',

  intro:
    "Worcester marketing for contractors starts with one fact: if you run a contracting business here, you're operating in a market with a genuine story behind it. Thousands of Boston-priced-out families have moved here — people with real incomes who bought 19th-century mill-worker houses and Victorian triple-deckers that now need specialist contractors. Nor'easters pound the city harder than almost anywhere in New England. A large Hispanic community — about 26 percent of residents — is largely underserved by contractors willing to show up in Spanish. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Worcester contractors do exactly that.",
  aioQuestion: 'How do Worcester MA contractors get more leads online?',
  aioAnswer:
    "Worcester contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Worcester's specific market — Boston-income homeowners, 19th-century housing stock requiring specialist work, extreme nor'easter winters, and a 26 percent Hispanic population — means the contractors who target the right searches in the right languages, and who are already ranking before winter season hits, win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Worcester searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, and in Spanish where it matters.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including nor'easter emergency and old-home specialist terms — and build a lead pipeline you own instead of renting.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that turn Boston-income homeowners with 19th-century houses into booked jobs — not brochures that sit there while the other guy's phone rings.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned through nor'easter season and beyond.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Worcester?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that's attracting serious homeowners." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand nor'easter emergencies, 19th-century housing stock, and the specialist work that defines the Worcester market." },
    { q: 'Why does the Worcester market need a different approach?', a: "Worcester has a unique combination: Boston-income homeowners who bought 19th-century houses, the worst nor'easter winters in New England, a large Hispanic community that's underserved by contractors in Spanish, and a genuine city revival happening. Generic marketing templates miss all of it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Worcester areas do you serve?', a: "Worcester proper and surrounding towns — Shrewsbury, Northborough, Auburn, Millbury, Grafton, and Webster — with genuine local pages for neighborhoods like Tatnuck, Greendale, Indian Lake, and Burncoat, rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free Worcester audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two Worcester contractor marketing moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

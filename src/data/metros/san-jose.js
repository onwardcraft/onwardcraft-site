// SAN JOSE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across San Jose's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SAN JOSE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in San Jose is a high-stakes competition',
  body:
    "San Jose is Silicon Valley's largest city, and it holds a distinction that surprises most people: it has the highest median household income of any major US city in America. The homeowners here are engineers and product managers at Apple, Google, Cisco, and Intel — people who research everything before they spend, expect polished professionalism, and have budgets that match million-dollar home values. The average San Jose home now exceeds $1 million, and that changes the math for every contractor. A kitchen remodel in Willow Glen or Almaden Valley that might run $50,000 elsewhere can run $120,000 here, and the homeowner chose you based on how credible you looked online. Two forces shape demand in ways you won't find in most US cities. First, the Hayward and Calaveras faults run directly beneath and alongside the metro, so seismic retrofitting, foundation inspections, and earthquake-proofing are genuine local specialties that generate steady search volume year-round, and especially after tremors. Second, August through October brings wildfire smoke from Bay Area and Sierra fires, spiking demand for HVAC filtration upgrades and air sealing as homeowners try to keep smoke out. The contractor who ranks for those searches before the smoke arrives is the one who books the work.",
  pullQuote: 'In a city where the average home tops $1 million and every homeowner is a tech professional, the contractor who looks most credible online wins the job before anyone picks up a phone.',
  donut: {
    title: 'San Jose at a glance',
    value: 38,
    centerLabel: 'Asian residents',
    legend: [
      { label: 'Asian', pct: 38, kind: 'teal' },
      { label: 'Other', pct: 62, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Wildfire smoke season (Aug–Oct) drives HVAC filtration; earthquake prep is year-round',
  seasonalDemand: [
    { m: 'J', v: 52 }, { m: 'F', v: 50 }, { m: 'M', v: 54 },
    { m: 'A', v: 56 }, { m: 'M', v: 58 }, { m: 'J', v: 62 }, { m: 'J', v: 70 },
    { m: 'A', v: 92, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 60 }, { m: 'D', v: 54 },
  ],
  stats: [
    { value: '$1M+', label: 'average home value in San Jose — the biggest renovation budgets in the country' },
    { value: '~38%', label: 'of residents identify as Asian — Vietnamese, Chinese, Filipino, and Indian communities', accent: true },
    { value: 'Aug–Oct', label: 'wildfire smoke season, when HVAC filtration demand spikes sharply' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when someone searches your trade' },
  ],
  neighborhoods: [
    'Willow Glen', 'Rose Garden', 'Almaden Valley', 'Evergreen', 'Berryessa',
    'Milpitas', 'Santa Clara', 'Sunnyvale', 'Cupertino', 'Campbell',
    'Los Gatos', 'Saratoga', 'Blossom Valley', 'Silver Creek', 'Cambrian',
  ],
};

const AREAS = [
  'Willow Glen', 'Rose Garden', 'Almaden Valley', 'Evergreen', 'Berryessa',
  'Milpitas', 'Santa Clara', 'Sunnyvale', 'Cupertino', 'Campbell',
  'Los Gatos', 'Saratoga', 'Blossom Valley', 'Silver Creek', 'Cambrian',
];

const FOUNDER =
  "Here's what I kept seeing in Silicon Valley: contractors with genuinely great work losing jobs to competitors who just looked better online. In a market where homeowners are tech professionals who vet everything before they spend, the contractor without a credible web presence is invisible. I built OnwardCraft to fix that — to get you ranking for what people in Willow Glen, Almaden Valley, and Cupertino are actually searching, and to make sure when they land on your site they call you instead of bouncing to whoever's next on the list. No 12-month contracts. If it's not working, you leave.";

const WHY = [
  {
    title: 'We understand Silicon Valley homeowners',
    body: "San Jose homeowners are tech professionals with high standards and the budgets to match. They research contractors the same way they research software purchases — your online presence either clears the bar or you don't get the call. We build everything around what makes a Silicon Valley homeowner trust you before you've ever spoken.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for the same Almaden Valley homeowner your three competitors also bought.",
  },
  {
    title: 'We know San Jose specifically',
    body: "Earthquake retrofitting searches, wildfire smoke season HVAC spikes, the neighborhoods from Saratoga to Berryessa — we build content around what San Jose homeowners actually search, not a national template with a city name swapped in.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a San Jose contractor gets around 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and in a market where homeowners are actively choosing the contractor who looks most credible online, that gap is decisive. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'San Jose', state: 'California', stateAbbr: 'CA', metro: 'San Jose-Silicon Valley',
  heroProof: ['Built for Silicon Valley trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const sanJoseLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'San Jose Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your trade in San Jose and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · San Jose, CA',
    h1: 'When Silicon Valley searches for what you do, be the first name they find',
    h2Exact: 'San Jose Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city where every homeowner is a tech professional with a million-dollar home and high expectations, we get you into that top three for the neighborhoods you serve, so the call lands with you.",
    primaryCta: 'Get my free San Jose audit',
    intro:
      "San Jose local SEO comes down to one thing: when a homeowner in Willow Glen or Almaden Valley searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market where homeowners earn six figures, own homes worth over a million dollars, and pick contractors the same way they pick software — by research. Being one of those top three in the neighborhoods you serve is the whole game. Here's how you get there.",
    aioQuestion: 'How do San Jose businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real San Jose neighborhoods like Willow Glen, Almaden Valley, and Evergreen. In Silicon Valley, homeowners research more carefully than almost anywhere else, so the businesses with the most complete, credible, and neighborhood-specific profiles win the most work.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. In a market where homeowners have premium budgets and high standards, getting into that top three for Willow Glen, Almaden Valley, or Cupertino is usually the highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same San Jose homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — which matters even more in a high-value market like Silicon Valley where every job is worth more." },
      { title: "You're missing seasonal and seismic demand", body: "San Jose has demand patterns most cities don't. Every Aug–Oct, wildfire smoke drives spikes in HVAC filtration and air sealing searches. Earthquake retrofitting and foundation inspection searches happen year-round and spike after every tremor near the Hayward fault. If you're not ranking for those searches when they surge, you're handing that work to a competitor who is." },
    ],
    servicesHeading: 'What it actually takes to rank you in Silicon Valley',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which San Jose searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across San Jose and Silicon Valley directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. In a market where tech-savvy homeowners read everything before they call, reviews are the final push that gets them to dial." },
      { name: 'Neighborhood pages', desc: "Real pages for Willow Glen, Rose Garden, Almaden Valley, Evergreen, and the rest, so you rank for the neighborhood someone's actually searching, not just a generic \"San Jose.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The foundation under the hood that lets everything else rank in a competitive Silicon Valley market." },
      { name: 'Local link building', desc: "Mentions and links from San Jose and Bay Area sources Google trusts — local press, neighborhood associations, trade groups, and community partners. This is what separates page one from page two here." },
      { name: 'Seasonal and seismic demand targeting', desc: "We rank you for wildfire smoke season HVAC searches and year-round earthquake retrofitting demand — two San Jose specialties most agencies don't even know about.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. Silicon Valley homeowners use these tools heavily. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your San Jose neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks, especially if competitors have weak profiles." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week — and in a market of sophisticated homeowners, a strong review profile is what converts a searcher into a caller." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Willow Glen, Almaden Valley, Cupertino, and the rest, plus the on-page work to back them up and the seasonal content that captures demand spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or seasonal keyword set." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several San Jose neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Silicon Valley.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and seismic demand targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in San Jose?', a: "Most San Jose engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are above. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive San Jose and Silicon Valley keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in this market is selling you something." },
      { q: 'What makes San Jose local SEO different from other cities?', a: "A few things. Homeowners here are tech professionals who research contractors like they research purchases — they read reviews, check websites, and compare. High home values mean bigger jobs and bigger budgets, but also higher scrutiny. And San Jose has demand spikes most cities don't: wildfire smoke season Aug–Oct driving HVAC filtration demand, and year-round earthquake retrofitting searches near the Hayward and Calaveras faults." },
      { q: 'Can you help me rank for earthquake retrofitting and seismic work?', a: "Yes, and it's a genuine opportunity here. San Jose sits near active fault lines and seismic retrofitting, foundation inspection, and earthquake-proofing searches happen year-round and spike after tremors. Most contractors don't optimize for them specifically, which means the bar is lower to rank for them than for generic trade terms." },
      { q: 'Which areas do you cover?', a: "All the neighborhoods across San Jose and the surrounding Silicon Valley communities — Willow Glen, Rose Garden, Almaden Valley, Evergreen, Berryessa, Milpitas, Santa Clara, Sunnyvale, Cupertino, Campbell, Los Gatos, and Saratoga. We build genuine neighborhood pages instead of one generic San Jose page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, seismic/foundation specialists, and general contractors. We understand Silicon Valley homeowners, seasonal smoke demand, and earthquake prep — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research now starts in AI tools — and Silicon Valley homeowners are among the heaviest users of these products. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at Silicon Valley prices — some of the highest in the country — and four competitors bought the same lead. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the brokers less because the work comes to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'San Jose SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'San Jose SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Silicon Valley. Free San Jose SEO audit.',
    eyebrow: 'SEO Services · San Jose, CA',
    h1: 'Get your San Jose business to the top of Google and keep it there',
    h2Exact: 'San Jose SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Silicon Valley homeowners search and the leads keep coming. We build that ranking for contractors in one of the highest-value home markets in the country — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free San Jose SEO audit',
    intro:
      "San Jose SEO comes down to one question: when a homeowner in Willow Glen or Cupertino searches what you do, are you on page one or page two? Page two might as well not exist. We get contractors ranking for the money keywords in a market where homes average over a million dollars, homeowners research carefully, and one booked job can be worth tens of thousands in revenue. We measure it in leads, not vanity traffic.",
    aioQuestion: 'How do San Jose businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms San Jose homeowners search, publishing genuinely useful local content tied to specific neighborhoods and Silicon Valley demand patterns, and earning links from trusted Bay Area sources. In a market this competitive with homeowners this sophisticated, ranking for seasonal demand — wildfire smoke HVAC searches in Aug–Oct and year-round earthquake retrofitting terms — is one of the most effective ways to pull ahead of competitors who ignore those specialties.",
    problemHeading: "Three reasons your San Jose site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In Silicon Valley, where homeowners do thorough online research before spending on any major project, if you're not in the top results for your trade and neighborhood, your site is invisible — no matter how skilled you are or how impressive your past work." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget pauses, the leads stop. San Jose clicks are expensive, and you're competing against well-funded contractors. SEO builds an asset you own: rankings that keep producing leads after the work is done, at a fraction of the per-lead cost of paid ads over time." },
      { title: "You're not ranking for Silicon Valley's unique demand", body: "San Jose has demand patterns other cities don't. Wildfire smoke season (Aug–Oct) sends homeowners searching for HVAC filtration and air sealing. The Hayward and Calaveras faults keep earthquake retrofitting and foundation inspection searches active year-round. The contractors who own those search terms before demand peaks are the ones who book that work." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Silicon Valley',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you — important in a market where homeowners expect fast, polished experiences." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms San Jose homeowners search — titles, headings, content, and internal links — focused on the neighborhoods and services that drive your best jobs." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Silicon Valley buyers search, earn links, and bring in leads. Not thin pages that vanish in the next algorithm update." },
      { name: 'Link building', desc: "Authority from real Bay Area and industry sources. In a competitive market full of established local contractors, links from trusted sources are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Willow Glen, Almaden Valley, Cupertino, and the rest alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth against Silicon Valley job values." },
      { name: 'Seasonal & seismic SEO', desc: "We rank you for wildfire smoke season HVAC demand (Aug–Oct) and year-round earthquake retrofitting searches — San Jose specialties most agencies completely overlook.", featured: true },
      { name: 'AI search & GEO', desc: "Silicon Valley homeowners are early adopters of AI search tools. We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you where search is heading.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors in San Jose, then build a roadmap around the keywords most likely to drive high-value leads in Silicon Valley." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, and the baseline sophisticated homeowners expect when they land on your site." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including seasonal smoke-season HVAC content and earthquake retrofitting pages that most competitors skip entirely." },
      { name: 'Build authority', desc: "Links and citations from trusted Bay Area and industry sources to push competitive keywords onto page one and hold them there." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next neighborhood or seasonal keyword set." },
    ],
    pricing: {
      heading: 'Transparent San Jose SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Silicon Valley neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Silicon Valley search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & seismic SEO', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in San Jose?', a: "Most San Jose SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in San Jose?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Silicon Valley-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads in San Jose?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and Silicon Valley clicks are expensive in competitive trades. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'What seasonal demand should my San Jose SEO target?', a: "Two big ones specific to this market. Wildfire smoke season runs August through October and drives real spikes in HVAC filtration, air purifier installation, and air sealing searches. Earthquake retrofitting and foundation inspection searches are year-round because of the Hayward and Calaveras faults, and they spike after any noticeable tremor. Ranking for those terms before the demand arrives is how you capture them." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/seismic SEO and AI-search optimization specific to Silicon Valley demand patterns. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for — and in Silicon Valley, where homeowners are early adopters of AI tools, it's especially important. We structure your content and schema so AI engines can read, trust, and cite your business." },
      { q: 'Which areas around San Jose do you cover?', a: "All the key neighborhoods and surrounding communities — Willow Glen, Rose Garden, Almaden Valley, Evergreen, Berryessa, Milpitas, Santa Clara, Sunnyvale, Cupertino, Campbell, Los Gatos, and Saratoga — with genuine local pages rather than one generic San Jose page." },
      { q: 'How do you get me off lead broker platforms?', a: "By building rankings and a Google presence that send leads directly to you. In Silicon Valley where per-lead costs are high and competition for shared leads is fierce, every month you invest in SEO is a month you reduce your dependence on platforms that sell your leads to competitors too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across San Jose and Silicon Valley, what your competitors are doing to beat you, the highest-impact fixes for your specific situation, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'San Jose Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'San Jose web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in Silicon Valley. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · San Jose, CA',
    h1: 'San Jose web design that turns Silicon Valley visitors into booked jobs',
    h2Exact: 'San Jose Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. San Jose homeowners are tech professionals who vet contractors online the same way they vet software. We build fast, polished, mobile-first sites that clear that bar and turn visitors into booked jobs.",
    primaryCta: 'Get my free quote',
    intro:
      "Most contractor websites lose leads quietly: slow on a phone, buried call button, nothing that communicates you're the right person for a million-dollar home. In Silicon Valley, that costs you more than it does anywhere else. We build sites that load fast, look as professional as the work you do, and turn Willow Glen to Saratoga visitors into booked jobs — designed for homeowners who research everything before they call.",
    aioQuestion: 'What makes a good contractor website in San Jose?',
    aioAnswer:
      "A good San Jose contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because Silicon Valley homeowners research contractors more carefully than almost anywhere else and expect a polished, professional online presence, a fast site with credibility signals and obvious next steps is what converts a visitor into a call — not just a nice-looking design.",
    problemHeading: "Why your current site isn't bringing in San Jose work",
    painPoints: [
      { title: "It doesn't pass the Silicon Valley credibility test", body: "San Jose homeowners are tech professionals used to world-class digital products. They judge your website in seconds, and an outdated or generic site quietly tells them you're not the right contractor for a serious job. In a market where home values average over a million dollars, the contractor who looks most credible online wins the work before anyone picks up a phone." },
      { title: "It's too slow on a phone", body: "Most of your San Jose visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse in the searches that are supposed to bring them there in the first place. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the neighborhoods you serve", body: "A homeowner in Almaden Valley wants to see you serve Almaden Valley specifically — not a generic \"San Jose contractor\" page that could be anyone. We build sites that name the neighborhoods you work, show familiarity with the area, and give Google the signal it needs to rank you for neighborhood-specific searches." },
    ],
    servicesHeading: "What's in an OnwardCraft San Jose website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your San Jose neighborhoods, and the premium jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your San Jose traffic arrives. Fast, thumb-friendly, and easy to call from anywhere." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has one job: get the visitor to take the next step." },
      { name: 'Copy that sells', desc: "Words that speak to discerning Silicon Valley homeowners and book the job, not filler text that sounds like every other contractor in the market." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Willow Glen, Cupertino, Los Gatos, and the rest." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks — critical in a market where homeowners are sophisticated enough to notice a slow site." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the specific San Jose and Silicon Valley neighborhoods you serve, so you stand out in a competitive market instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business — especially important in Silicon Valley where homeowners are early adopters of AI search tools.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Silicon Valley neighborhoods, your best jobs, and who you're competing with, then map the site around booking more of the premium work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout that meets the visual bar Silicon Valley homeowners expect — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that speaks to high-standard homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, so you start generating leads immediately." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — leads and calls, not just page views." },
    ],
    pricing: {
      heading: 'Transparent San Jose web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in San Jose?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site meet the expectations of Silicon Valley homeowners?', a: "That's what we design for. San Jose homeowners are tech professionals who evaluate contractors online the way they evaluate products — by looking for credibility, professionalism, and clear proof you can handle the job. We build sites that clear that bar: fast, polished, neighborhood-specific, and focused on the premium work you want to book." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for Willow Glen, Almaden Valley, Cupertino, and the rest. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Silicon Valley terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your San Jose traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in missed Silicon Valley leads, what a high-converting San Jose contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'San Jose Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your San Jose website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in Silicon Valley. Free audit.',
    eyebrow: 'Website Redesign · San Jose, CA',
    h1: 'Redesign your San Jose website without losing your rankings',
    h2Exact: 'San Jose Website Redesign Company',
    heroSubhead:
      "An outdated site costs you San Jose jobs every week — it fails the Silicon Valley credibility test, it's slow on a phone, and it gives sophisticated homeowners no reason to call you. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish. We do neither. We redesign San Jose contractor sites for speed and conversions, build them to meet the standard Silicon Valley homeowners actually expect, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them — because the new site is faster, mobile-first, and better structured than what you're replacing.",
    problemHeading: "Signs your San Jose site is overdue for a redesign",
    painPoints: [
      { title: "It fails the Silicon Valley credibility test", body: "San Jose homeowners are tech professionals who spend their days using world-class digital products. When they land on a dated, generic contractor website, they bounce inside seconds. In a market where homes average over a million dollars, an outdated site quietly signals that you're not the caliber of contractor who works on them — even if your actual work is excellent." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing most of your San Jose visitors before they ever see your offer. Silicon Valley homeowners research on their phones constantly and expect fast, clean experiences. A mobile-first redesign wins them back." },
      { title: "It's not capturing seasonal and seismic demand", body: "A generic site with no San Jose-specific content can't rank for wildfire smoke season HVAC searches in August or earthquake retrofitting queries after a tremor. A redesign built around Silicon Valley's unique demand patterns captures work your old site was never in position to win." },
    ],
    servicesHeading: "What's in an OnwardCraft San Jose redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you San Jose leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned in Silicon Valley." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that get used. We design for booked jobs in a market where homeowners compare carefully." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and essential for meeting Silicon Valley expectations." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your San Jose traffic lives and where homeowners make their initial contractor decisions." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the value of the jobs you want to win in Silicon Valley." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the San Jose neighborhoods and Silicon Valley communities you serve, so the new site stands out in a competitive market and ranks for the specific searches that drive your best jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you — critical in Silicon Valley where homeowners are early adopters of AI search.", featured: true },
    ],
    processName: 'How we redesign: a careful Silicon Valley rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you San Jose leads and rankings today, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that meets Silicon Valley homeowner expectations — you review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your current rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely in the first weeks so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting Silicon Valley visitors into calls, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent San Jose redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in San Jose?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your San Jose rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know if I need a redesign in San Jose?', a: "If your site looks dated, is slow on phones, doesn't name the specific neighborhoods you serve, or isn't capturing Silicon Valley-specific demand like earthquake retrofitting or smoke season HVAC searches, it's costing you work. The free audit tells you plainly whether a redesign pays off." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's already ranking in San Jose searches, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me stand out in Silicon Valley?', a: "Yes, and that's the point. We rebuild around the specific San Jose neighborhoods you serve, add content targeting wildfire smoke season and earthquake prep searches, and meet the visual and performance bar sophisticated homeowners expect — so the new site stands out instead of blending into a generic contractor page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and meets the expectations of Silicon Valley homeowners who use fast technology every day." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Silicon Valley leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const sanJoseCity = {
  citySlug: 'san-jose', city: 'San Jose', state: 'California', stateAbbr: 'CA', metro: 'San Jose-Silicon Valley',

  titleTag: 'San Jose Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for San Jose contractors. Get found by Silicon Valley homeowners, win premium jobs, and own your leads instead of renting them. Free audit.',

  eyebrow: 'San Jose · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets San Jose contractors found by Silicon Valley homeowners',
  h2Exact: 'San Jose Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the highest-income major city in America. One team to get you ranking, converting, and off the rented-lead treadmill in Silicon Valley.",
  heroProof: ['Built for Silicon Valley trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free San Jose audit',

  intro:
    "If you run a contracting business in San Jose, you're working in the highest-median-income major city in the US. Homeowners here are tech professionals at Apple, Google, Cisco, and Intel who own homes worth over a million dollars and research every contractor the same way they research a software purchase — thoroughly, online, before they ever call. Winning their business takes three things working together: a site that clears the Silicon Valley credibility bar, SEO that ranks you when they search your trade, and local SEO that puts you in the Map Pack for the neighborhoods they live in. Here's how we help San Jose contractors do exactly that.",
  aioQuestion: 'How do San Jose contractors get more leads online?',
  aioAnswer:
    "San Jose contractors get more leads by combining a fast, polished, mobile-first website with SEO that ranks them for high-intent Silicon Valley searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because homeowners here are tech professionals with high standards and premium budgets, the contractors who look most credible online and rank for specific neighborhood and seasonal searches — including wildfire smoke season HVAC demand and earthquake retrofitting queries — win the most and best work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Willow Glen or Almaden Valley searches \"near me.\" In a city of tech-savvy homeowners with premium budgets, being one of those three names is the single highest-return move most contractors can make.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Silicon Valley homeowners actually search — including wildfire smoke season HVAC and earthquake retrofitting terms most competitors ignore — and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, polished, mobile-first websites that meet the credibility bar Silicon Valley homeowners set before they call anyone. Built around the premium jobs you want, not a generic contractor template.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site to meet Silicon Valley expectations, capture seasonal and seismic demand, and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in San Jose?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the highest-value home markets in the country." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, seismic and foundation specialists, and general contractors. We understand Silicon Valley homeowners, wildfire smoke season demand, and earthquake prep work." },
    { q: 'Why does the San Jose market need a different approach?', a: "Because the homeowners here are different. They're tech professionals who research everything, expect polished digital experiences, and have budgets to match million-dollar homes. Winning their business means looking credible online and ranking for San Jose-specific demand patterns — like HVAC filtration searches during smoke season and earthquake retrofitting queries near the Hayward fault — that a national template completely misses." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which San Jose areas do you serve?', a: "All the key neighborhoods and surrounding Silicon Valley communities — Willow Glen, Rose Garden, Almaden Valley, Evergreen, Berryessa, Milpitas, Santa Clara, Sunnyvale, Cupertino, Campbell, Los Gatos, and Saratoga — with genuine neighborhood pages rather than one generic San Jose page." },
    { q: 'Where should I start?', a: "Start with a free San Jose audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most Silicon Valley work fastest. No pitch deck, just a plan." },
  ],
};

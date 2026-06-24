// SAN JOSE: per-metro x per-service local landing pages + city hub.
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
// SAN JOSE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Ranking in San Jose is a fight against the most demanding buyers in the country',
  body:
    "San Jose anchors Silicon Valley, and it carries a distinction few cities can claim: the highest median household income of any major American city. The people hiring you here write software at Apple, ship products at Google, build networks at Cisco, and design chips at Intel. They vet a contractor the way they vet a vendor at work, reading reviews, comparing sites, and shortlisting before a single phone rings. With the average San Jose home now above $1 million, the stakes climb fast. A Willow Glen or Almaden Valley kitchen that costs $50,000 in another state can land near $120,000 here, and that homeowner picked you because your online presence read as the safe choice. Two local forces bend demand in ways you simply will not see elsewhere. The Hayward and Calaveras faults run beneath and beside the metro, so seismic retrofits, foundation inspections, and earthquake-proofing are real specialties that pull steady searches all year and surge after every noticeable tremor. Then, from August into October, smoke from Bay Area and Sierra wildfires settles over the valley, sending homeowners scrambling for HVAC filtration upgrades and air sealing. Whoever already ranks for those queries when the smoke rolls in is the one whose calendar fills.",
  pullQuote: 'In a city where the typical home clears $1 million and the homeowner writes code for a living, the contractor who reads as the credible choice online has already won the job before the phone rings.',
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
  seasonCaption: 'Wildfire smoke season (Aug-Oct) drives HVAC filtration; earthquake prep runs all year',
  seasonalDemand: [
    { m: 'J', v: 52 }, { m: 'F', v: 50 }, { m: 'M', v: 54 },
    { m: 'A', v: 56 }, { m: 'M', v: 58 }, { m: 'J', v: 62 }, { m: 'J', v: 70 },
    { m: 'A', v: 92, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 60 }, { m: 'D', v: 54 },
  ],
  stats: [
    { value: '$1M+', label: 'average San Jose home value, which means the largest renovation budgets in the nation' },
    { value: '~38%', label: 'of residents identify as Asian, with strong Vietnamese, Chinese, Filipino, and Indian communities', accent: true },
    { value: 'Aug-Oct', label: 'wildfire smoke window, when HVAC filtration searches climb sharply' },
    { value: 'Top 3', label: 'Map Pack spots that soak up most of the clicks the moment someone searches your trade' },
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
  "One pattern kept hitting me across Silicon Valley: contractors doing genuinely excellent work were losing jobs to rivals who simply presented better online. When your customers are tech professionals who pressure-test every purchase, a contractor with a thin web presence might as well not exist. That is why I started OnwardCraft. I want you ranking for what people in Willow Glen, Almaden Valley, and Cupertino are actually typing into Google, and I want your site to convince them to call you instead of the next name on the list. No year-long contracts. If the work is not paying off, you walk.";

const WHY = [
  {
    title: 'We speak Silicon Valley homeowner',
    body: "Your buyers in San Jose hold high standards and the budgets to back them. They vet a contractor the way they vet a software vendor, so your online presence either clears their bar or your phone stays quiet. We build every piece around what earns a tech professional's trust before you have said a word to them.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline that belongs to you, not one more monthly check to a broker reselling the same Almaden Valley homeowner to you and three competitors at once.",
  },
  {
    title: 'We actually know San Jose',
    body: "Earthquake retrofit queries, the smoke-season HVAC surge, the difference between selling in Saratoga and Berryessa: we build content around what people in this metro search, not a national template with the city name dropped in.",
  },
  {
    title: 'No contracts, no fog',
    body: "Prices are published, reporting is tied to leads, and you go month-to-month after the first 90 days. If we are not earning the relationship, you leave. That keeps the pressure squarely on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop, and we will not fake a track record we have not built yet. What we can hand you is the reasoning behind why this works, drawn straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: '46%', label: 'of Google searches carry local intent', n: 46 },
    { value: '76%', label: 'of people who run a local search on a phone visit a business that same day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough sketch, labelled plainly as a projection and not a result we claim. Suppose a San Jose contractor pulls roughly 2,000 local \"near me\" impressions a month across a few neighborhoods. Climbing from buried-on-page-two into the top three is the gap between a silent phone and a booked-out month, and in a metro where homeowners deliberately pick the contractor who looks most credible online, that gap decides who wins. Inside your free audit, we model the real figures for your business: your current rankings, your search volume, and an honest path over the next 90 to 180 days.",
  disclaimer:
    "The figures above are published benchmarks (Google / BrightLocal) plus one illustrative projection. None of them are past results claimed by OnwardCraft.",
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
      'San Jose Local SEO that makes you the first business on the map when Willow Glen and Almaden Valley search your trade. Free audit.',
    eyebrow: 'Local SEO · San Jose, CA',
    h1: 'San Jose Local SEO that makes you the first name on the map in Willow Glen',
    h2Exact: 'San Jose Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map on a \"near me\" search, and everyone underneath them is invisible. In a city where the homeowner is a tech professional sitting on a million-dollar property, we put you inside that top three for the neighborhoods you serve, so the call comes to you.",
    primaryCta: 'Get my free San Jose audit',
    intro:
      "San Jose Local SEO turns on a single question: when someone in Willow Glen or Almaden Valley searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll further. This is a metro where homeowners earn six figures, own property worth more than a million dollars, and choose a contractor the way they choose software, by researching it. Landing in that top three for the neighborhoods you cover is the entire game. Below is how you get there.",
    aioQuestion: 'How do San Jose businesses rank higher in local search?',
    aioAnswer:
      "You climb by nailing four things: a Google Business Profile tuned to the exact services and neighborhoods you want, name-address-phone listings that match everywhere online, a steady flow of real reviews, and local content built around actual San Jose neighborhoods like Willow Glen, Almaden Valley, and Evergreen. Because Silicon Valley homeowners research more thoroughly than almost any buyers in the country, the businesses with the most complete, credible, and neighborhood-specific profiles take the most work.",
    problemHeading: "If your phone is quiet, it usually traces back to one of these three",
    painPoints: [
      { title: 'Competitors own all three spots on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google pins to the map collect the lion's share of the clicks. If your name is not among them, the quality of your work barely matters, because most searchers never see you. In a metro where homeowners carry premium budgets and exacting standards, breaking into that top three for Willow Glen, Almaden Valley, or Cupertino is usually the single highest-return move you can make." },
      { title: "You keep paying for leads you never own", body: "Angi, Thumbtack, and HomeAdvisor sell one San Jose homeowner to four contractors, then bill each of you to scrap over them. It is a treadmill. Local SEO builds the reverse: the homeowner finds you, calls you, and nobody else got the lead. Month by month you stop renting and start owning your pipeline, which matters even more here, where every job is worth so much more." },
      { title: "You miss the seasonal and seismic surges", body: "San Jose has demand swings most cities never see. From August into October, wildfire smoke drives spikes in HVAC filtration and air sealing searches. Earthquake retrofit and foundation inspection searches run all year near the Hayward fault and jump after every tremor. If you are not ranking when those surges hit, you are handing that work to whoever is." },
    ],
    servicesHeading: 'What it really takes to rank you across Silicon Valley',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We tune your categories, services, service area, photos, and posts so Google knows precisely which San Jose searches should land on you, and that turns into more calls." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google checks. We repair the listings that conflict and build the ones you are missing across San Jose and Silicon Valley directories, so nothing quietly drags your ranking down." },
      { name: 'Reviews that keep arriving', desc: "A simple system that turns every finished job into a steady stream of reviews. With tech-savvy homeowners who read everything before they dial, a strong review profile is the final nudge that converts a searcher into a booked call." },
      { name: 'Neighborhood pages', desc: "Real pages for Willow Glen, Rose Garden, Almaden Valley, Evergreen, and the rest, so you rank for the neighborhood someone is genuinely searching rather than a vague \"San Jose,\" and the lead arrives pre-qualified." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed: the foundation under the hood that lets everything else rank in a market this competitive, and that sophisticated homeowners notice immediately." },
      { name: 'Local link building', desc: "Mentions and links from San Jose and Bay Area sources Google trusts: local press, neighborhood associations, trade groups, and community partners. This is the work that separates page one from page two here." },
      { name: 'Seasonal and seismic demand targeting', desc: "We rank you for smoke-season HVAC filtration searches and the year-round earthquake retrofit demand, two genuine San Jose specialties most agencies do not even know exist, which means less competition for the booked job.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity, and Silicon Valley homeowners lean on these tools harder than anyone. We structure your content so those engines can read you and recommend you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across your San Jose neighborhoods and pin down exactly which competitors are beating you in the Map Pack and why, so we are fixing the real problem." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move fastest. You often see early lift here inside a few weeks, especially when nearby competitors have weak or neglected profiles." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live, and they compound week over week. With buyers as discerning as San Jose homeowners, a deep review profile is what flips a searcher into a caller." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Willow Glen, Almaden Valley, Cupertino, and beyond, plus the on-page work behind them and the seasonal content that catches the smoke-season and quake-prep spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked leads, not vanity rankings. Then we move on to claim the next neighborhood or the next seasonal keyword set." },
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
      { q: 'How much does local SEO cost in San Jose?', a: "Most San Jose engagements run between $750 and $2,500 a month, set by how many neighborhoods and keywords you want to win. The tiers are laid out above. No hidden fees, no long contract, and we lock the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile work can move inside a few weeks. Competitive San Jose and Silicon Valley keywords usually need 90 to 180 days of steady effort, because reviews and citations build up over time. Anyone promising you page one in 30 days in this market is selling you a fantasy." },
      { q: 'What makes San Jose local SEO different from other cities?', a: "Several things. Homeowners here are tech professionals who research a contractor like a purchase: reading reviews, checking sites, comparing options. High home values mean bigger jobs and bigger budgets, but also sharper scrutiny. And San Jose carries demand swings most cities lack, with the August-to-October smoke season driving HVAC filtration searches and year-round earthquake retrofit queries near the Hayward and Calaveras faults." },
      { q: 'Can you help me rank for earthquake retrofitting and seismic work?', a: "Yes, and it is a genuine opening here. San Jose sits beside active fault lines, so seismic retrofit, foundation inspection, and earthquake-proofing searches run all year and spike after tremors. Few contractors optimize for them specifically, which means the bar to rank is lower than it is for generic trade terms." },
      { q: 'Which areas do you cover?', a: "Every neighborhood across San Jose and the surrounding Silicon Valley communities: Willow Glen, Rose Garden, Almaden Valley, Evergreen, Berryessa, Milpitas, Santa Clara, Sunnyvale, Cupertino, Campbell, Los Gatos, and Saratoga. We build genuine neighborhood pages instead of a single catch-all San Jose page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It is nearly all we do: roofing, HVAC, plumbing, solar, electrical, restoration, seismic and foundation specialists, and general contractors. We understand Silicon Valley homeowners, the smoke-season HVAC surge, and earthquake prep, and we build your local SEO around all three." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More \"near me\" research now starts inside AI tools, and Silicon Valley homeowners are among the heaviest users of them. We structure your content and schema so those engines can read, trust, and cite your business. It is fast becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that you go month-to-month. If we are not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at Silicon Valley prices, some of the steepest in the country, and four competitors bought the same lead. We build rankings, a Google profile, and a review base that route leads straight to you. Over time you lean on the brokers less because the work arrives directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with numbers run for your business. No pitch deck, just a straight diagnosis of the San Jose Local SEO work that will get your trade ranking on the map and pull more local search calls straight to your phone." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'San Jose SEO Company | Rank on Google and Stay | OnwardCraft',
    metaDescription:
      'San Jose SEO that puts contractors on page one of Google and holds it, with leads you own and revenue-tied reporting for Silicon Valley buyers. Free audit.',
    eyebrow: 'SEO Services · San Jose, CA',
    h1: 'San Jose SEO that puts your business on page one across Silicon Valley and holds it',
    h2Exact: 'San Jose SEO Company',
    heroSubhead:
      "Ads stop the instant you stop paying. SEO does the opposite: rank once for what Silicon Valley homeowners search and the leads keep landing. We build that ranking for contractors in one of the highest-value home markets anywhere, and we tie every report to real calls and booked jobs.",
    primaryCta: 'Get my free San Jose SEO audit',
    intro:
      "San Jose SEO boils down to one question: when a homeowner in Willow Glen or Cupertino searches what you do, are you on page one or page two? Page two might as well not exist. We get contractors ranking for the money keywords in a metro where homes average over a million dollars, buyers research carefully, and a single booked job can be worth tens of thousands. We measure the work in leads, not vanity traffic.",
    aioQuestion: 'How do San Jose businesses rank higher on Google?',
    aioAnswer:
      "They rank by repairing the site's technical foundation, tuning each page for the exact terms San Jose homeowners search, publishing genuinely useful local content tied to specific neighborhoods and Silicon Valley demand swings, and earning links from trusted Bay Area sources. In a market this competitive with buyers this sophisticated, ranking for seasonal demand, meaning the smoke-season HVAC searches from August into October and the year-round earthquake retrofit terms, is one of the sharpest ways to pull ahead of competitors who ignore those specialties.",
    problemHeading: "Three reasons your San Jose site is not bringing in work",
    painPoints: [
      { title: "You are stranded on page two", body: "Almost nobody clicks past the first page of Google. In Silicon Valley, where homeowners run thorough online research before committing to any major project, being absent from the top results for your trade and neighborhood makes your site invisible, no matter how skilled you are or how strong your past work looks." },
      { title: "You are renting traffic from Google Ads", body: "Ads can work, but the moment your budget pauses the leads dry up. San Jose clicks are expensive and you are bidding against well-funded contractors. SEO builds an asset you own: rankings that keep producing leads long after the work is done, at a fraction of the per-lead cost of paid ads over time." },
      { title: "You are missing Silicon Valley's unique demand", body: "San Jose runs demand patterns other cities never see. The August-to-October smoke season sends homeowners hunting for HVAC filtration and air sealing. The Hayward and Calaveras faults keep earthquake retrofit and foundation inspection searches active all year. The contractors who own those terms before demand peaks are the ones who book that work." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Silicon Valley',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you, which matters double in a market where homeowners expect fast, polished experiences." },
      { name: 'On-page optimization', desc: "Every page that matters tuned to the exact terms San Jose homeowners search, from titles and headings to content and internal links, focused on the neighborhoods and services that drive your most profitable jobs." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Silicon Valley buyers are searching, earn links, and pull in leads. Not thin filler that evaporates in the next algorithm update." },
      { name: 'Link building', desc: "Authority from real Bay Area and industry sources. In a market crowded with established local contractors, links from trusted sites are often the deciding line between page one and page two." },
      { name: 'Local SEO and Google Business Profile', desc: "Map Pack work so you win the \"near me\" searches across Willow Glen, Almaden Valley, Cupertino, and the rest alongside your organic rankings, doubling the ways a homeowner can find you." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked leads, not just rankings and traffic, so you always know what your SEO is genuinely worth against Silicon Valley job values." },
      { name: 'Seasonal and seismic SEO', desc: "We rank you for the smoke-season HVAC surge from August into October and the year-round earthquake retrofit searches, two San Jose specialties most agencies overlook entirely, which leaves the booked work to you.", featured: true },
      { name: 'AI search and GEO', desc: "Silicon Valley homeowners are early adopters of AI search tools. We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, getting you in front of where search is clearly heading.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across San Jose, then build a roadmap around the keywords most likely to drive high-value Silicon Valley leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile: the foundation everything else needs to rank, and the baseline sophisticated homeowners expect the second they land on your site." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including smoke-season HVAC articles and earthquake retrofit pages that most competitors skip outright." },
      { name: 'Build authority', desc: "Links and citations from trusted Bay Area and industry sources to push competitive keywords onto page one and hold them there against well-funded rivals." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what is working and expand into the next neighborhood or seasonal keyword set." },
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
      { q: 'How much does SEO cost in San Jose?', a: "Most San Jose SEO engagements run $900 to $3,000 a month, set by how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in San Jose?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Silicon Valley-wide keywords. SEO compounds, so the gains keep stacking the longer you run it." },
      { q: 'Is SEO better than Google Ads in San Jose?', a: "They do different jobs. Ads buy instant traffic that vanishes when you stop paying, and Silicon Valley clicks run expensive in competitive trades. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine with ads for short bursts." },
      { q: 'What seasonal demand should my San Jose SEO target?', a: "Two big ones tied to this market. The wildfire smoke season runs August through October and drives real spikes in HVAC filtration, air purifier installation, and air sealing searches. Earthquake retrofit and foundation inspection searches run all year because of the Hayward and Calaveras faults, and they jump after any noticeable tremor. Ranking for those terms before the demand arrives is how you capture it." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and seismic SEO plus AI-search optimization built around Silicon Valley demand patterns. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then you go month-to-month. If we are not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That is a growing part of what we optimize for, and in Silicon Valley, where homeowners are early adopters of AI tools, it carries extra weight. We structure your content and schema so AI engines can read, trust, and cite your business." },
      { q: 'Which areas around San Jose do you cover?', a: "Every key neighborhood and surrounding community: Willow Glen, Rose Garden, Almaden Valley, Evergreen, Berryessa, Milpitas, Santa Clara, Sunnyvale, Cupertino, Campbell, Los Gatos, and Saratoga, with genuine local pages rather than one generic San Jose page." },
      { q: 'How do you get me off lead broker platforms?', a: "By building rankings and a Google presence that route leads straight to you. In Silicon Valley, where per-lead costs are steep and the fight for shared leads is fierce, every month you invest in SEO is a month you cut your dependence on platforms that sell your leads to competitors too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across San Jose and Silicon Valley, what your competitors are doing to beat you, the highest-impact fixes for your specific situation, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a straight diagnosis of the San Jose SEO work that will move you onto page one for the money keywords and turn organic traffic into booked jobs." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'San Jose Web Design Company | Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'San Jose web design that books jobs instead of just looking nice: fast, mobile-first sites for Silicon Valley contractors. Transparent pricing and you own it all.',
    eyebrow: 'Web Design · San Jose, CA',
    h1: 'San Jose web design that books Silicon Valley jobs instead of just looking nice',
    h2Exact: 'San Jose Web Design Company',
    heroSubhead:
      "A pretty site that never rings the phone is just a brochure. San Jose homeowners are tech professionals who vet a contractor the way they vet software. We build fast, polished, mobile-first sites that clear that bar and turn visitors into booked jobs.",
    primaryCta: 'Get my free quote',
    intro:
      "San Jose web design is the difference between a site that books work and one that loses leads quietly: slow on a phone, a call button buried somewhere, nothing that signals you are the right person for a million-dollar home. In Silicon Valley, that costs you more than it does anywhere else. We build sites that load fast, read as professional as the work you do, and convert visitors from Willow Glen to Saratoga into booked jobs, designed for homeowners who research everything before they call.",
    aioQuestion: 'What makes a good contractor website in San Jose?',
    aioAnswer:
      "A strong San Jose contractor site loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because Silicon Valley homeowners research contractors more carefully than almost anyone and expect a polished, professional presence, a fast site with credibility signals and obvious next steps is what converts a visitor into a call, far more than a pretty layout alone.",
    problemHeading: "Why your current site is not bringing in San Jose work",
    painPoints: [
      { title: "It fails the Silicon Valley credibility test", body: "San Jose homeowners spend their days inside world-class digital products, so they judge your site in seconds. An outdated or generic page quietly tells them you are not the contractor for a serious job. With home values averaging over a million dollars, the contractor who reads as most credible online wins the work before anyone touches a phone." },
      { title: "It is too slow on a phone", body: "Most of your San Jose visitors arrive on mobile, and they bounce when a site takes more than a few seconds to load. Slow pages also rank worse in the very searches meant to deliver those visitors in the first place. We build fast, so you keep both the visitor and the ranking." },
      { title: "It does not speak to the neighborhoods you serve", body: "A homeowner in Almaden Valley wants to see that you serve Almaden Valley specifically, not a generic \"San Jose contractor\" page that could belong to anyone. We build sites that name the neighborhoods you work, show real familiarity with the area, and feed Google the signal it needs to rank you for neighborhood-specific searches." },
    ],
    servicesHeading: "What goes into an OnwardCraft San Jose website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site shaped around your trade, your San Jose neighborhoods, and the premium jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all your San Jose traffic lands. Fast, thumb-friendly, and easy to call from anywhere." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where people actually use them. Every page carries one job: move the visitor to the next step." },
      { name: 'Copy that sells', desc: "Words written for discerning Silicon Valley homeowners that win the job, not filler that sounds like every other contractor in the metro." },
      { name: 'Local SEO foundation', desc: "Built to rank from the ground up: clean structure, schema, fast load, and neighborhood-ready pages for Willow Glen, Cupertino, Los Gatos, and the rest." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which is critical in a market where homeowners are sharp enough to notice a sluggish site instantly." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the specific San Jose and Silicon Valley neighborhoods you serve, so you stand out in a crowded market instead of blending into a generic city page, and the leads arrive already qualified.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business, which matters extra in Silicon Valley where homeowners are early adopters of AI search tools.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Silicon Valley neighborhoods, your best jobs, and your competition, then map the site around booking more of the premium work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout that hits the visual bar Silicon Valley homeowners expect, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that speaks to high-standard homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one, so you start generating leads right away." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it on what is genuinely converting: leads and calls, not page views." },
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
      { q: 'How much does a website cost in San Jose?', a: "Most contractor sites with us run $2,000 to $8,000 as a one-time build, set by page count and integrations. The tiers are above: fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted through every stage." },
      { q: 'Will my site meet the expectations of Silicon Valley homeowners?', a: "That is exactly what we design for. San Jose homeowners evaluate a contractor online the way they evaluate a product, looking for credibility, professionalism, and clear proof you can handle the job. We build sites that clear that bar: fast, polished, neighborhood-specific, and focused on the premium work you want to book." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages for Willow Glen, Almaden Valley, Cupertino, and the rest. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Silicon Valley terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations and no platforms you cannot leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all your San Jose traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We choose the platform that fits your needs and that you can genuinely manage, usually WordPress or Webflow. We recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO is month-to-month, and you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in missed Silicon Valley leads, what a high-converting San Jose contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan for San Jose web design that loads fast, reads as credible to a tech-professional homeowner, and converts visitors into booked jobs." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'san-jose', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'San Jose Website Redesign | Rebuilt for Leads | OnwardCraft',
    metaDescription:
      'San Jose Website Redesign that rebuilds for leads, not just looks: faster, mobile-first sites that turn Silicon Valley visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · San Jose, CA',
    h1: 'San Jose Website Redesign that rebuilds for Silicon Valley leads, not just looks',
    h2Exact: 'San Jose Website Redesign Company',
    heroSubhead:
      "An outdated site bleeds San Jose jobs every week: it fails the Silicon Valley credibility test, it crawls on a phone, and it gives sophisticated homeowners no reason to call. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you have earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A San Jose Website Redesign goes wrong in one of two ways: the site looks sharper but converts the same, or it launches and the rankings disappear. We do neither. We redesign San Jose contractor sites for speed and conversions, build them to the standard Silicon Valley homeowners actually expect, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Handled right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured than the one it replaces.",
    problemHeading: "Signs your San Jose site is overdue for a redesign",
    painPoints: [
      { title: "It fails the Silicon Valley credibility test", body: "San Jose homeowners spend their workdays inside world-class digital products. When they land on a dated, generic contractor site, they bounce within seconds. With homes averaging over a million dollars, an outdated site quietly signals that you are not the caliber of contractor who works on them, even when your actual work is excellent." },
      { title: "It is slow and clumsy on a phone", body: "If your site is sluggish or awkward on mobile, you lose most of your San Jose visitors before they ever reach your offer. Silicon Valley homeowners research on their phones constantly and expect fast, clean experiences. A mobile-first redesign wins them back." },
      { title: "It is not capturing seasonal and seismic demand", body: "A generic site with no San Jose-specific content cannot rank for the smoke-season HVAC searches in August or the earthquake retrofit queries after a tremor. A redesign built around Silicon Valley's demand swings captures work your old site was never positioned to win." },
    ],
    servicesHeading: "What goes into an OnwardCraft San Jose redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you San Jose leads and rankings today, so the redesign fixes real problems instead of just swapping colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you have already earned across Silicon Valley." },
      { name: 'Conversion redesign', desc: "Clear offers, sharper call-to-action placement, and lead forms that get used. We design for booked jobs in a market where homeowners compare carefully." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, which helps both conversions and rankings and is essential for meeting Silicon Valley expectations." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all your San Jose traffic lives and where homeowners make their first contractor decision." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the value of the jobs you want to win across Silicon Valley." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the San Jose neighborhoods and Silicon Valley communities you serve, so the new site stands out in a crowded market and ranks for the specific searches that drive your best jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you, which is critical in Silicon Valley where homeowners are early adopters of AI search.", featured: true },
    ],
    processName: 'How we redesign: a careful Silicon Valley rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what is losing you San Jose leads and rankings today, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that meets Silicon Valley homeowner expectations, and you review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your current rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch closely through the first weeks so rankings hold and climb rather than drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what is converting Silicon Valley visitors into calls, plus ongoing speed and updates." },
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
      { q: 'How much does a website redesign cost in San Jose?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, set by size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not when it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Handled right, a redesign holds your San Jose rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know if I need a redesign in San Jose?', a: "If your site looks dated, crawls on phones, fails to name the specific neighborhoods you serve, or misses Silicon Valley-specific demand like earthquake retrofits or smoke-season HVAC searches, it is costing you work. The free audit tells you plainly whether a redesign pays off." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve what is already ranking in San Jose searches, and handle the technical migration so nothing important slips through." },
      { q: 'Will the redesign help me stand out in Silicon Valley?', a: "Yes, and that is the point. We rebuild around the specific San Jose neighborhoods you serve, add content targeting smoke-season and earthquake-prep searches, and hit the visual and performance bar sophisticated homeowners expect, so the new site stands out instead of blending into a generic contractor page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings and meets the expectations of Silicon Valley homeowners who use fast technology all day." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in Silicon Valley leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline. Every San Jose Website Redesign we scope comes with an SEO-safe migration plan, so you rebuild for more leads without losing the rankings you have already earned." },
    ],
  },
];

export const sanJoseCity = {
  citySlug: 'san-jose', city: 'San Jose', state: 'California', stateAbbr: 'CA', metro: 'San Jose-Silicon Valley',

  titleTag: 'San Jose Marketing for Contractors | OnwardCraft',
  metaDescription:
    'San Jose marketing for contractors who want to own their leads: web design, SEO, and local SEO that get you found by Silicon Valley homeowners and win premium jobs.',

  eyebrow: 'San Jose · Web Design, SEO & Lead Generation',
  h1: 'San Jose marketing for contractors who want to own their Silicon Valley leads',
  h2Exact: 'San Jose Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the highest-income major city in America. One team to get you ranking, converting, and off the rented-lead treadmill in Silicon Valley.",
  heroProof: ['Built for Silicon Valley trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free San Jose audit',

  intro:
    "San Jose marketing for contractors starts with one fact: you are working in the highest-median-income major city in the country. The homeowners here write code at Apple, ship products at Google, build networks at Cisco, and design chips at Intel, they own property worth more than a million dollars, and they research every contractor the way they research a software purchase: thoroughly, online, before they ever pick up the phone. Winning their business takes three pieces working together: a site that clears the Silicon Valley credibility bar, SEO that ranks you when they search your trade, and local SEO that lands you in the Map Pack for the neighborhoods they live in. Here is how we help San Jose contractors do exactly that.",
  aioQuestion: 'How do San Jose contractors get more leads online?',
  aioAnswer:
    "San Jose contractors win more leads by pairing a fast, polished, mobile-first website with SEO that ranks them for high-intent Silicon Valley searches and local SEO that takes the Google Map Pack neighborhood by neighborhood. Because homeowners here are tech professionals with high standards and premium budgets, the contractors who read as most credible online and rank for specific neighborhood and seasonal searches, including the smoke-season HVAC surge and earthquake retrofit queries, take the most and the best work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Break into the three businesses Google pins to the map when Willow Glen or Almaden Valley searches \"near me.\" In a city of tech-savvy homeowners with premium budgets, becoming one of those three names is the single highest-return move most contractors can make.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Silicon Valley homeowners actually search, including the smoke-season HVAC and earthquake retrofit terms most competitors ignore, and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, polished, mobile-first sites that clear the credibility bar Silicon Valley homeowners set before they call anyone. Built around the premium jobs you want, not a generic contractor template.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site to meet Silicon Valley expectations, capture the seasonal and seismic demand, and migrate carefully so you keep every bit of ranking you have already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in San Jose?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients pair a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the highest-value home markets in the country." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, solar, electrical, restoration, seismic and foundation specialists, and general contractors. We understand Silicon Valley homeowners, the smoke-season demand, and earthquake prep work." },
    { q: 'Why does the San Jose market need a different approach?', a: "Because the homeowners here are different. They are tech professionals who research everything, expect polished digital experiences, and carry budgets that match million-dollar homes. Winning their business means looking credible online and ranking for San Jose-specific demand patterns, like HVAC filtration searches during smoke season and earthquake retrofit queries near the Hayward fault, that a national template completely misses." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which San Jose areas do you serve?', a: "Every key neighborhood and surrounding Silicon Valley community: Willow Glen, Rose Garden, Almaden Valley, Evergreen, Berryessa, Milpitas, Santa Clara, Sunnyvale, Cupertino, Campbell, Los Gatos, and Saratoga, with genuine neighborhood pages rather than one generic San Jose page." },
    { q: 'Where should I start?', a: "Start with a free San Jose audit. We will look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most Silicon Valley work fastest. No pitch deck, just a plan for San Jose marketing for contractors that gets you found and booked and puts your lead pipeline back in your own hands." },
  ],
};

// CORPUS CHRISTI: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Corpus Christi's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CORPUS CHRISTI: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Corpus Christi takes more than a generic SEO playbook',
  body:
    "Corpus Christi is unlike almost any other mid-sized Texas city. Roughly 65% of residents are Hispanic, and Spanish is not a secondary language here. For a huge share of the market it is the language they search in, and the contractor who shows up for those queries has a real head start over every competitor that never thought to try. Layered on top of that is Gulf Coast reality. Direct hurricane strikes (Harvey in 2017, and historically Celia, Allen, and others) create roofing and restoration surges that can turn a slow month into a backlog overnight. Even between storms, Gulf salt air corrodes roofs, HVAC systems, and exterior materials faster than inland Texas, shortening replacement cycles and keeping demand for skilled contractors steady. The economy here has real money in it: the Port of Corpus Christi anchors a major refining and petrochemical sector, and Naval Air Station Corpus Christi keeps a steady PCS cycle of new homeowners arriving year-round. Vacation properties on Padre Island and Mustang Island add a maintenance-heavy second layer of demand. The contractors who own the Map Pack here, in the right language and the right neighborhoods, are the ones who book all of it.",
  pullQuote: 'In a majority-Hispanic Gulf Coast city battered by hurricanes and salt air, the contractor who shows up in Spanish wins the work everyone else is missing.',
  donut: {
    title: 'Who Corpus Christi searches for you',
    value: 65,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 65, kind: 'teal' },
      { label: 'Other', pct: 35, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Corpus Christi',
  seasonCaption: 'Hurricane season (Jun–Nov) and peak HVAC demand (May–Sep)',
  seasonalDemand: [
    { m: 'J', v: 42 }, { m: 'F', v: 44 }, { m: 'M', v: 52 }, { m: 'A', v: 60 },
    { m: 'M', v: 78, peak: true }, { m: 'J', v: 95, peak: true }, { m: 'J', v: 100, peak: true },
    { m: 'A', v: 97, peak: true }, { m: 'S', v: 90, peak: true }, { m: 'O', v: 82, peak: true },
    { m: 'N', v: 58 }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '~320K', label: 'people in the Corpus Christi metro area' },
    { value: '~65%', label: 'of residents identify as Hispanic, so Spanish-language search dominates', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing and restoration demand can spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks across every trade search' },
  ],
  neighborhoods: [
    'North Beach', 'Flour Bluff', 'Calallen', 'Portland', 'Rockport',
    'Aransas Pass', 'Gregory', 'Robstown', 'Padre Island', 'Mustang Island',
    'Southside', 'Del Mar', 'Annaville', 'Clarkwood', 'Bishop',
  ],
};

const AREAS = [
  'Corpus Christi', 'North Beach', 'Flour Bluff', 'Calallen', 'Portland',
  'Rockport', 'Aransas Pass', 'Gregory', 'Robstown', 'Padre Island',
  'Mustang Island', 'Southside', 'Annaville', 'San Patricio County', 'Nueces County',
];

const FOUNDER =
  "I'll level with you: I started OnwardCraft because I was tired of watching solid contractors flush money into Angi and HomeAdvisor for leads that two or three of their competitors also bought. Here in Corpus Christi, that problem is even sharper — most agencies hand you a cookie-cutter campaign that ignores the Spanish-language searches where your best customers actually are, and they have no idea that a named storm in the Gulf can flip your entire pipeline upside down in 48 hours. That's the thing we actually understand. The goal is always the same: get you ranking, get you converting, and make those leads yours permanently. No 12-month handcuffs. If we're not earning it, you fire us.";

const WHY = [
  {
    title: 'We build for majority-Hispanic markets',
    body: "When 65% of your market is Hispanic, ranking only in English leaves the majority of your pipeline on the table. We tune your presence for the way Corpus Christi actually searches, Spanish-language terms included, so you turn up where your competitors are invisible.",
  },
  {
    title: 'We understand Gulf Coast seasonality',
    body: "Hurricane season is not a footnote here. It is the single biggest driver of roofing and restoration demand in the city. We build your SEO so you are ranked and ready before a storm makes landfall, not scrambling to catch up after the surge has already rolled past.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole point is a pipeline you own. Not another monthly invoice to a lead broker selling the same Corpus Christi homeowner to you and three of your competitors at the same time.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to real leads, month-to-month after 90 days. If we're not delivering, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We are new, so here is the honest math instead of a wall of logos",
  body:
    "Plenty of agencies open with a grid of client logos. We are a young, founder-led shop, so we are not going to fake a track record we have not earned. What we can hand you instead is the reasoning behind the work, pulled straight from Google's and the industry's own research on how Corpus Christi homeowners look for a contractor.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled plainly as an illustration and not a result we are claiming. Say a Corpus Christi contractor pulls around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Climbing from page-two invisibility into the top three is the gap between a trickle of calls and a calendar you cannot keep up with, and when a storm rolls into the Gulf that gap blows wide open. In your free audit we model the real numbers for your business: your current rankings, your actual search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX', metro: 'Corpus Christi',
  heroProof: ['Built for the trades', 'Spanish-language search targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const corpusChristiLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Corpus Christi Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Corpus Christi Local SEO that wins you the top three on the map, in English and Spanish. We get you into the local 3-pack so the call lands with you.',
    eyebrow: 'Local SEO · Corpus Christi, TX',
    h1: 'Corpus Christi Local SEO that wins you the top three on the map across Flour Bluff and the Coastal Bend',
    h2Exact: 'Corpus Christi Local SEO Company',
    heroSubhead:
      "When a homeowner taps \"near me,\" Google pins three businesses to the map and everyone underneath them is invisible. In a city where most of the market searches in Spanish and a named storm in the Gulf can rewrite your pipeline in two days, we get you into that top three so the call lands with you and not whoever ranked first.",
    primaryCta: 'Get my free Corpus Christi audit',
    intro:
      "Corpus Christi local SEO comes down to one moment: a homeowner in Flour Bluff or Calallen searches your service, in English or in Spanish, and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. This city is majority-Hispanic, exposed to the Gulf, and shaped by a refining economy with real homeowner budgets. Becoming one of those three in the neighborhoods you serve is the whole game. Here is exactly how you do it.",
    aioQuestion: 'How do Corpus Christi businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Corpus Christi neighborhoods. Because roughly 65% of residents are Hispanic and many search in Spanish, contractors who optimize for Spanish-language searches and show up across neighborhoods like Flour Bluff, Calallen, and Portland have an enormous advantage over competitors who only target English terms.",
    problemHeading: "If the phone has gone quiet, it is usually one of these three",
    painPoints: [
      { title: 'Three Corpus Christi competitors own the map and the calls', body: "Pull up your own service plus \"near me\" on your phone right now. Those three businesses Google pinned to the map take the lion's share of the clicks, and the homeowner rarely scrolls past them. If you are not one of the three, the quality of your work barely registers. In a market this concentrated, with a storm season that turns a slow week into a backlog, climbing into that top three for the neighborhoods you serve is usually the highest-return move a local contractor can make." },
      { title: "You're invisible to the majority of the market", body: "Roughly 65% of Corpus Christi residents are Hispanic, and a large share search in Spanish. If your Google Business Profile and website only show up in English searches, you're invisible to most of the city. The contractors showing up for 'reparación de techo cerca de mí' and similar terms are cleaning up while their competitors wonder why calls are slow." },
      { title: "You're renting leads you will never own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Corpus Christi homeowner to multiple contractors, then bill each of you to fight over them. Local SEO builds the opposite: a homeowner finds you directly, calls you, and nobody else got that lead. Over time you stop renting and start owning your pipeline." },
    ],
    servicesHeading: 'What it actually takes to rank you in Corpus Christi',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Corpus Christi searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to read the same everywhere Google checks. We clean up the listings that contradict each other and build the ones you are missing across Nueces and San Patricio counties." },
      { name: 'Reviews that keep coming', desc: "A straightforward engine that turns finished jobs into a steady stream of fresh reviews, in English and Spanish. It lifts your ranking and gives the next homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Flour Bluff, Calallen, Portland, Rockport, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Corpus Christi.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The under-the-hood work that lets every other piece actually rank." },
      { name: 'Local link building', desc: "Mentions and links from Corpus Christi sources Google trusts: local press, industry associations, community partners. In this market that is often what separates page one from page two." },
      { name: 'Spanish-language search targeting', desc: "With 65% of the city Hispanic, we optimize your profile and content so you show up for the Spanish-language searches your competitors have never thought to target.", featured: true },
      { name: 'Hurricane season readiness', desc: "We rank you for roofing, restoration, and emergency service terms before storm season hits, so when a named storm drives demand you're already in the top three.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Corpus Christi neighborhoods and identify which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move the fastest. Most Corpus Christi clients see early lift here inside a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These build week over week, which is exactly why you want to be ranked before hurricane season starts rather than after the first storm has passed." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Corpus Christi, Portland, Rockport, and beyond, plus Spanish-language optimization and the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked work, never vanity rankings. Then we move on to take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually read up front',
      note: 'Month-to-month once the first 90 days are up. No lock-in. Cancel any time you like.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting your Map Pack foundation laid right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across Corpus Christi neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors set on owning the map across the whole Coastal Bend.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area service pages', 'Hurricane season SEO readiness'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Corpus Christi?', a: "Most Corpus Christi engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How fast can I land in the Map Pack here?', a: "Profile improvements can move inside a few weeks. The competitive Corpus Christi keywords usually take 90 to 180 days of steady work, because reviews and citations build over time. Anyone promising you page one in 30 days is selling you a fantasy." },
      { q: 'What makes Corpus Christi local SEO different?', a: "Two things set it apart. First, roughly 65% of residents are Hispanic and a large share search in Spanish, so the contractor who shows up in those searches reaches most of the market that competitors ignore. Second, Gulf Coast hurricane season creates demand spikes unlike anywhere else in Texas, and the roofing and restoration contractors who are already ranked when a storm hits catch a huge wave of calls." },
      { q: 'Can you help me reach Spanish-speaking homeowners?', a: "Yes, and in Corpus Christi those homeowners are the majority of the market. We tune your Google Business Profile and local content so you appear for Spanish-language searches across Flour Bluff, Robstown, Calallen, and the rest. Most of your competitors have never even tried to show up for a phrase like 'reparacion de techo cerca de mi,' which leaves that demand wide open." },
      { q: 'Which Corpus Christi areas do you cover?', a: "All of Corpus Christi and the surrounding metro: Flour Bluff, Calallen, Portland, Rockport, Aransas Pass, Gregory, Robstown, North Beach, Padre Island, Mustang Island, and more. We build genuine neighborhood pages instead of one generic Corpus Christi page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you focus only on contractors?', a: "It is just about all we do. Roofing, HVAC, plumbing, restoration, solar, electrical, and general contractors. We understand hurricane restoration surges, the salt-air corrosion that shortens replacement cycles on roofs and condensers, and the military families who PCS into NAS Corpus Christi year-round and need a contractor the week they arrive." },
      { q: 'Will my business turn up in AI search like ChatGPT and Google AI Overviews?', a: "More of that \"near me\" research now begins inside AI tools rather than classic search. We structure your content and schema so those engines can read you, trust you, and cite your business by name. In this market it is fast becoming as important as the Map Pack itself." },
      { q: 'Am I tied into a long contract?', a: "No. We ask for an initial 90 days because that is roughly how long local SEO needs to show real movement. After that you go month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this break my reliance on Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that two or three competitors also bought. We build rankings, a Google profile, and a review base that route the homeowner straight to you. Run it long enough and you lean on the brokers less, because the work is already coming in direct." },
      { q: "What does the free audit include?", a: "A clear read on where you rank today across Corpus Christi, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It is the fastest way to see what Corpus Christi Local SEO can do for your phone before you spend a dollar. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Corpus Christi SEO Company | Rankings You Own | OnwardCraft',
    metaDescription:
      'Corpus Christi SEO that builds rankings you actually own and ranks contractors on Google. Spanish-language optimization, hurricane season readiness, no lock-in.',
    eyebrow: 'SEO Services · Corpus Christi, TX',
    h1: 'Corpus Christi SEO that builds rankings you actually own, in English and Spanish, across the Coastal Bend',
    h2Exact: 'Corpus Christi SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Corpus Christi customers search, in English and in Spanish, and the leads keep arriving for months. We build that ranking and tie every report to actual calls and booked jobs.",
    primaryCta: 'Get my free Corpus Christi SEO audit',
    intro:
      "Corpus Christi SEO comes down to one blunt question: when a homeowner searches what you do, in English or in Spanish, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a majority-Hispanic Gulf Coast city with hurricane-driven demand spikes and real buying power from refinery workers and military families, and we measure the whole thing in leads, not vanity traffic.",
    aioQuestion: 'How do Corpus Christi businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search in both English and Spanish, publishing genuinely useful local content tied to specific Corpus Christi neighborhoods, and earning links from trusted local sources. In Corpus Christi, ranking for seasonal HVAC demand in the hot months and being positioned for roofing and restoration searches before hurricane season starts are two of the highest-return moves a contractor can make.",
    problemHeading: "Three reasons your Corpus Christi site isn't bringing in work",
    painPoints: [
      { title: "You're stuck below the fold on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. With several contractors competing in every trade, if you are not in the top handful of results for what you sell, your site is effectively invisible no matter how good your work is." },
      { title: "You're only ranking in English", body: "About 65% of Corpus Christi is Hispanic, and many residents search in Spanish. If your website and content only target English keywords, you're invisible to the majority of the market. The contractor who shows up for 'contratista de techo Corpus Christi' and similar terms is accessing demand nobody else is competing for." },
      { title: "You're not positioned for storm season", body: "When a named storm threatens the Gulf Coast, roofing and restoration searches spike overnight. Ranking takes months to build, so if you wait until the storm hits to think about SEO, you miss the entire surge. Contractors who are already ranked capture those jobs; everyone else scrambles." },
    ],
    servicesHeading: 'The SEO work that actually moves the needle in Corpus Christi',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google wants in place before it will rank your site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Corpus Christi customers search, in English and Spanish, across titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers type in, earn links, and keep bringing in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Corpus Christi and industry sources. In a competitive trade market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you take the \"near me\" searches across the Coastal Bend right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, contact forms, and booked leads, not just rankings and traffic, so you can see in dollars what your SEO is actually returning." },
      { name: 'Spanish-language SEO', desc: "We optimize content and structure so you rank for the Spanish-language searches that make up most of Corpus Christi's market, demand your competitors have never once tried to capture.", featured: true },
      { name: 'Hurricane season & AI search readiness', desc: "We rank you for roofing, restoration, and emergency terms before storm season, and structure content so AI Overviews and ChatGPT can surface and cite you.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method for Corpus Christi',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Corpus Christi leads, in both English and Spanish." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The foundation every other piece needs before it can rank." },
      { name: 'Optimize pages and create content', desc: "On-page work across your money pages plus new local content, including seasonal storm-season and HVAC terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Corpus Christi and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to real leads, then we double down on what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Corpus Christi SEO pricing',
      note: 'Month-to-month once the first 90 days are up. No lock-in. Cancel any time you like.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site chasing its core Coastal Bend keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors fighting across several services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Corpus Christi search.', features: ['Everything in SEO Growth', 'Spanish-language SEO', 'Storm season readiness', 'Multi-area content', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Corpus Christi?', a: "Most Corpus Christi SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Corpus Christi?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. The key is starting before hurricane season so you're already ranked when demand spikes. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO a better bet than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Corpus Christi contractors do best running SEO as the long-term engine and ads for short-term spikes or off-season gaps." },
      { q: 'Should my Corpus Christi SEO include Spanish-language content?', a: "Yes. This is one of the highest-return moves available in this market. About 65% of Corpus Christi residents are Hispanic, and many search in Spanish. Ranking for those terms opens up a large pool of demand your English-only competitors have never even tried to reach." },
      { q: "What exactly is included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add Spanish-language optimization, storm-season readiness, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you make me sign a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then you switch to month-to-month. If we are not delivering, you leave." },
      { q: 'Will my site get cited in AI Overviews and ChatGPT?', a: "That is a growing part of what we build for. We structure your content and schema so AI engines can read, trust, and cite your business by name, not just the classic blue-link results." },
      { q: 'Which areas around Corpus Christi do you cover?', a: "All of Corpus Christi and the surrounding metro: Flour Bluff, Calallen, Portland, Rockport, Aransas Pass, Gregory, Robstown, Padre Island, and more, with genuine local pages rather than one generic city page." },
      { q: 'How does this reduce my dependence on Angi and HomeAdvisor?', a: "By building rankings and a Google presence that route the homeowner straight to you. The more of your own search visibility you own, the less you have to pay brokers for leads two competitors also bought." },
      { q: "What will the free SEO audit tell me?", a: "Where you rank today across Corpus Christi, what your competitors are doing to outrank you, the fixes that move the needle fastest, and a realistic timeline with the numbers run for your business. It is the clearest look you can get at what Corpus Christi SEO would actually return for your shop. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Corpus Christi Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Corpus Christi web design engineered to bring in real work. Fast, mobile-first sites that convert visitors into booked jobs in a majority-Hispanic Gulf Coast market.',
    eyebrow: 'Web Design · Corpus Christi, TX',
    h1: 'Corpus Christi web design engineered to bring in real work, from Flour Bluff to Rockport',
    h2Exact: 'Corpus Christi Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just a brochure. We build Corpus Christi contractors fast, mobile-first sites engineered to turn visitors into booked work, in a majority-Hispanic Gulf Coast market where a slow, generic site quietly costs you most of your potential customers.",
    primaryCta: 'Get my free quote',
    intro:
      "Corpus Christi web design is where most contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer, zero Spanish-language presence. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you are, and turn visitors from Flour Bluff to Rockport into booked jobs, built to win in a market where Gulf Coast conditions and a bilingual customer base ask for more than a template.",
    aioQuestion: 'What makes a good contractor website in Corpus Christi?',
    aioAnswer:
      "A good Corpus Christi contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, names the specific neighborhoods you serve, and either includes Spanish-language content or clearly signals that you serve Spanish-speaking customers. Because Corpus Christi is majority-Hispanic and most searches happen on mobile, these factors separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current Corpus Christi site isn't booking work",
    painPoints: [
      { title: "It is a brochure, when it should be a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the list. We design every page around one job: turning a visitor into a booked lead, whether they landed from a storm-season search or a Spanish-language query." },
      { title: "It crawls on a phone", body: "Most of your Corpus Christi visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It ignores most of your market", body: "A site with no Spanish-language presence in a 65%-Hispanic city quietly tells most potential customers that you are not for them. We build sites that speak to the full Corpus Christi market: the communities, the Gulf Coast context, and the customers who are actually there." },
    ],
    servicesHeading: "What's in an OnwardCraft Corpus Christi website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, the Gulf Coast climate, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Corpus Christi traffic is. Fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms set where Corpus Christi homeowners actually fill them out. Every page points at a single next step." },
      { name: 'Copy that sells', desc: "Words that speak to Corpus Christi homeowners about what they are worried about: storm damage, a roof aged early by salt air, a condenser eaten by Gulf humidity. Then they book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Flour Bluff, Portland, Rockport, and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and clear Google's performance checks, which guards your conversions and your rankings in one move." },
      { name: 'Spanish-language pages', desc: "Content and pages built for Spanish-speaking customers, who are the majority of the Corpus Christi market, so you turn up where your competitors are invisible.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews, ChatGPT, and Perplexity can read your site and recommend your business by name as more Corpus Christi search starts inside AI.", featured: true },
    ],
    processName: 'How we build a Corpus Christi site, step by step',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want across Corpus Christi." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert, and you get to see it and shape it well before any code gets written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that books the job, with the call to action front and center on every page, in English and where it counts in Spanish." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and page speed all dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current, and we tune it around whatever is actually turning Corpus Christi visitors into phone calls." },
    ],
    pricing: {
      heading: 'Transparent Corpus Christi web design pricing',
      note: 'One-time build, billed 50% to start and 50% at launch. Everything is yours to keep. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A tight, high-converting site for a single-trade Coastal Bend contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors juggling several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Spanish-language pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A fully custom build for multi-service or multi-location operations.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Corpus Christi?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. The tiers are above: fixed price, no surprises, and the finished site is yours to keep." },
      { q: 'How long does the build take?', a: "A focused site takes roughly 2 to 4 weeks; a larger custom build runs 4 to 8. You get a firm timeline at the start and an update at every stage." },
      { q: 'Will my site help me reach Spanish-speaking customers?', a: "That's a major focus in Corpus Christi. We can build Spanish-language pages and content that serve the 65%-Hispanic market and show up in Spanish-language searches that your competitors have never targeted." },
      { q: 'Will the new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Corpus Christi terms." },
      { q: 'Do I own the website?', a: "Completely. The site, the domain, and the content are all yours. No hostage situations, no platform you cannot walk away from." },
      { q: 'Will it run well on phones?', a: "We design mobile-first, because that's where almost all of your Corpus Christi traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Which platform do you build on?', a: "We pick the platform that fits your needs and that you can manage yourself, usually WordPress or Webflow. We recommend the right one in your free consult and explain the tradeoffs without the jargon." },
      { q: 'Is there support after the site launches?', a: "Yes. Every build comes with launch support, and from there you can add affordable monthly maintenance that covers updates, speed, and security." },
      { q: 'Does the build lock me into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can leave whenever you like." },
      { q: 'What do I actually get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Corpus Christi site should include, and a fixed-price quote with a timeline. It is the simplest way to see what real Corpus Christi web design would do for your booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'corpus-christi', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Corpus Christi Website Redesign | Modernize Without Losing Traffic | OnwardCraft',
    metaDescription:
      'Corpus Christi Website Redesign that modernizes without tanking your traffic. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a bilingual Gulf.',
    eyebrow: 'Website Redesign · Corpus Christi, TX',
    h1: 'Corpus Christi Website Redesign that modernizes your site without tanking your Coastal Bend traffic',
    h2Exact: 'Corpus Christi Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, invisible to Spanish-speaking homeowners. We redesign Corpus Christi contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A Corpus Christi Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Corpus Christi contractor sites for speed and conversions, build in the Spanish-language presence that most sites here are missing, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my site without losing SEO rankings and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, better structured, and in Corpus Christi finally reachable by the Spanish-speaking majority of the market.",
    problemHeading: "Signs your Corpus Christi site is overdue for a redesign",
    painPoints: [
      { title: "A dated look quietly costs you trust", body: "For a high-ticket job, a new roof after storm damage or a full HVAC replacement corroded by Gulf salt air, a homeowner sizes you up by your website in seconds. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better." },
      { title: "It drags and frustrates on a phone", body: "If your site is clunky or slow on mobile, you are losing most of your Corpus Christi visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "Spanish-speaking homeowners never see you", body: "If your site has no Spanish-language content at all, you are invisible to roughly 65% of the Corpus Christi market. A redesign is the right moment to fix that and start appearing for the searches most of your competitors have never targeted." },
    ],
    servicesHeading: "What's in an OnwardCraft Corpus Christi redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what is costing you leads and rankings right now, so the redesign fixes real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Corpus Christi search." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and lead forms Corpus Christi homeowners actually complete. We design for booked jobs, not just a nicer-looking screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and a clean pass on Core Web Vitals, which raises conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Corpus Christi traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the reality of operating in a competitive Gulf Coast market." },
      { name: 'Spanish-language presence', desc: "We add the Spanish-language pages and content your current site is missing, so the redesign finally reaches the majority of the Corpus Christi market.", featured: true },
      { name: 'AI-search ready', desc: "Rebuilt so AI Overviews, ChatGPT, and Perplexity can read and recommend you as a growing share of local search moves toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild that protects your rankings',
    process: [
      { name: 'Audit and plan', desc: "We work out what is bleeding you leads and rankings, then map a redesign that repairs it without breaking what already works for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design that you review and sign off on before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean, no-surprises migration, including the new Spanish-language content." },
      { name: 'Launch with SEO care', desc: "We launch with the redirects in place and watch closely so your rankings hold and climb instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning driven by what is actually converting, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Corpus Christi redesign pricing',
      note: 'One-time project, billed 50% to start and 50% at launch. You own all of it. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A tight redesign for a small Coastal Bend contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established, multi-service contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Spanish-language presence'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A ground-up rebuild for multi-service or multi-location operations.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Corpus Christi?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and the result is yours to keep." },
      { q: 'Will redesigning cost me my Google rankings?', a: "Not if it is done carefully, and that is exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging before anything goes live. Done right, a redesign holds your rankings and usually pushes them higher." },
      { q: 'How long will a redesign take?', a: "A focused redesign runs about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline at the start and progress updates as we go." },
      { q: 'How do I know my site needs a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or has no Spanish-language presence for Corpus Christi's majority-Hispanic market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you carry over my existing content?', a: "Yes. We carry over and sharpen your existing content, preserve whatever is already ranking, and handle the technical migration so nothing important slips through the cracks." },
      { q: 'Will the redesign help me reach Spanish-speaking homeowners?', a: "Yes, and for Corpus Christi that's one of the biggest wins a redesign can deliver. We add the Spanish-language pages your current site is missing so you finally show up for the 65% of the market your competitors are ignoring." },
      { q: 'Will the rebuilt site load fast and work on phones?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings, which matters because almost all of your Corpus Christi traffic is on a phone." },
      { q: 'Do I own the redesigned website?', a: "Yes, completely: the site, the domain, and the content. No platform lock-in whatsoever." },
      { q: 'Does a redesign lock me into a contract?', a: "No. The redesign is a one-time project, and any maintenance or SEO afterward runs month-to-month." },
      { q: "What does the free redesign audit cover?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan laid out. It is the clearest way to weigh whether a Corpus Christi Website Redesign is worth it before you commit a cent." },
    ],
  },
];

export const corpusChristiCity = {
  citySlug: 'corpus-christi', city: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX', metro: 'Corpus Christi',

  titleTag: 'Corpus Christi Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Corpus Christi marketing for contractors: web design, SEO, and local SEO. Rank in English and Spanish, get ready for hurricane season, and own your leads.',

  eyebrow: 'Corpus Christi · Web Design, SEO & Lead Generation',
  h1: 'Corpus Christi marketing for contractors, built around the trades and the Gulf Coast you work in',
  h2Exact: 'Corpus Christi Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a majority-Hispanic Gulf Coast city where Spanish is the dominant search language and hurricane season reshapes demand overnight. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Spanish-language search targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Corpus Christi audit',

  intro:
    "Corpus Christi marketing for contractors means working a market unlike most Texas cities. About 65% of residents are Hispanic, Spanish-language searches carry a huge share of the market, and Gulf Coast hurricane season can flip your entire pipeline overnight. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search in English and Spanish, and local SEO that puts you in the Map Pack for the neighborhoods you serve. As one Corpus Christi marketing agency built for the trades, here is exactly how we help Corpus Christi contractors pull that off.",
  aioQuestion: 'How do Corpus Christi contractors get more leads online?',
  aioAnswer:
    "Corpus Christi contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches in both English and Spanish, and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 65% of residents are Hispanic and many search in Spanish, contractors who rank for Spanish-language terms reach the majority of the market that competitors have never tried for. Gulf Coast hurricane season also drives large roofing and restoration demand spikes, and the contractors already ranked when a storm hits capture that surge entirely.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Corpus Christi searches \"near me,\" in English and in Spanish. The highest-return move for most local contractors, run tight, neighborhood by neighborhood.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the Spanish-language terms that carry most of the Corpus Christi market, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs, with Spanish-language content and Gulf Coast context built in, not a generic template with your city name swapped in.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the Spanish-language presence you're missing, and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Corpus Christi?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank in both English and Spanish, get found before hurricane season, and own their leads instead of renting them." },
    { q: 'Do you work only with home-service contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, restoration, solar, electrical, and general contractors. That means we understand Gulf Coast hurricane surge demand, the salt-air corrosion that shortens replacement cycles, and the military families who PCS into NAS Corpus Christi year-round." },
    { q: 'Why does the Corpus Christi market need a different approach?', a: "Two big reasons. First, about 65% of residents are Hispanic and many search in Spanish, so a contractor showing up for those searches reaches most of the market competitors ignore entirely. Second, Gulf Coast hurricane season creates demand spikes that can fill a contractor's calendar overnight, but only if you are already ranked before the storm arrives." },
    { q: 'What will it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We lock the exact scope in your free Corpus Christi audit." },
    { q: 'Which Corpus Christi areas do you serve?', a: "All of Corpus Christi and the surrounding metro: Flour Bluff, Calallen, Portland, Rockport, Aransas Pass, Gregory, Robstown, North Beach, Padre Island, Mustang Island, and more. We build genuine neighborhood pages rather than one generic city page." },
    { q: 'Where should I start?', a: "Start with a free Corpus Christi audit. We'll look at your website, your rankings, your Map Pack presence, and your Spanish-language visibility, then tell you the one or two moves that will bring in the most work fastest. It is the simplest first step into Corpus Christi marketing for contractors, no pitch deck, just a plan." },
  ],
};

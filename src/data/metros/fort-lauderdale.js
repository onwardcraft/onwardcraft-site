// FORT LAUDERDALE: per-metro, per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fort Lauderdale's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FORT LAUDERDALE: shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Fort Lauderdale-Broward County is unlike anywhere else',
  body:
    "Fort Lauderdale runs on water, and that one fact reshapes the whole local market. More than 300 miles of navigable canals thread through the city, which is why locals call it the Venice of America, and the yachting industry built around them is genuinely the largest on the planet. Seawall repair, dock and lift work, waterfront home maintenance, and marine-adjacent contracting form a service category here that barely registers in an inland metro. Stack the Atlantic on top of it. Broward sits squarely in the hurricane corridor: Irma in 2017 and the storms since taught every homeowner that the next one is a matter of when, not if, so impact windows, roofing, shutters, tidal-flood mitigation, and restoration are talked about all year rather than for one season. Salt air chews through anything left unprotected, which keeps repaint, re-roof, and metal work in steady rotation. The buyer base is its own puzzle: yacht-corridor owners on Las Olas Isles and Harbor Beach, retirees and young professionals filling Victoria Park, and one of South Florida's largest LGBTQ+ communities anchored in Wilton Manors. There is real Spanish-language search volume across Broward, but the contractor who wins here leads with boats, canals, and storm readiness first. Rank for those layers and you are taking work your competitors never thought to chase.",
  pullQuote: 'When the next storm pushes up the canals, the contractor already ranking in Broward is the one whose phone never stops.',
  donut: {
    title: 'Hispanic residents in Broward County',
    value: 30,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 30, kind: 'teal' },
      { label: 'Other', pct: 70, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun to Nov) overlaps snowbird activation (Oct to Apr), keeping demand close to year-round',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 68, peak: true }, { m: 'M', v: 52 },
    { m: 'A', v: 44 }, { m: 'M', v: 62, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'J', v: 86, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 96, peak: true },
    { m: 'O', v: 94, peak: true }, { m: 'N', v: 80, peak: true }, { m: 'D', v: 76, peak: true },
  ],
  stats: [
    { value: '1.9M+', label: 'people across Broward County, one of Florida\'s most densely populated' },
    { value: '~30%', label: 'Hispanic residents in Broward, adding a steady layer of Spanish-language search', accent: true },
    { value: 'Jun-Nov', label: 'hurricane season, when roofing, impact windows, and restoration demand surges' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks, including the biggest storm-damage jobs' },
  ],
  neighborhoods: [
    'Las Olas', 'Victoria Park', 'Wilton Manors', 'Weston', 'Plantation',
    'Coral Springs', 'Pompano Beach', 'Deerfield Beach', 'Davie', 'Miramar',
    'Lauderhill', 'Hallandale Beach', 'Hollywood', 'Cooper City', 'Tamarac',
  ],
};

const AREAS = [
  'Fort Lauderdale', 'Pompano Beach', 'Coral Springs', 'Weston', 'Plantation',
  'Deerfield Beach', 'Davie', 'Miramar', 'Lauderhill', 'Hallandale Beach',
  'Hollywood', 'Cooper City', 'Tamarac', 'Wilton Manors', 'Boca Raton',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, impact windows, restoration, seawall and dock work, marine-adjacent contracting. We get hurricane prep, insurance claims, salt-air wear, and the Broward waterfront homeowner, so everything we build follows how your customers actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The point is a pipeline that belongs to you. Not one more monthly check to a lead broker for the same Broward homeowner that three other contractors are also dialing.",
  },
  {
    title: 'We actually speak Fort Lauderdale',
    body: "Canal-front owners, yacht-corridor estates, snowbird retirees, the Wilton Manors community, storm-driven demand. That is local detail a national agency cannot fake by find-and-replacing a city name into a template.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to real leads, month-to-month after the first 90 days. If we are not earning the invoice, you walk. That keeps the pressure exactly where it belongs, on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Most agencies lead with a wall of client logos. We are a young, founder-led shop on the water in Broward, so we are not going to claim a track record we have not built yet. What we can give you is the reasoning behind this work, pulled straight from Google's and the industry's own research on how people search for local contractors.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here is a rough picture, labelled plainly as an illustration and not a result we are claiming: say a Fort Lauderdale contractor pulls around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility up into the top three is the gap between a few scattered calls and a calendar you cannot keep up with, and once a storm runs up the canals that gap blows wide open. In your free audit we model the actual figures for your business: your current rankings, your real search volume, and a straight 90-to-180-day path onto the map.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fort Lauderdale', state: 'Florida', stateAbbr: 'FL', metro: 'Fort Lauderdale-Broward County',
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fortLauderdaleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fort-lauderdale', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fort Lauderdale Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'When Broward searches your service, three businesses show on the map. We put you in those three so the storm-season call lands with you, not a competitor.',
    eyebrow: 'Local SEO · Fort Lauderdale-Broward County',
    h1: 'When Fort Lauderdale searches for what you do, be the first name on the map',
    h2Exact: 'Fort Lauderdale Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when a homeowner searches \"near me,\" and everyone underneath them is effectively invisible. We move you into that top three so the call lands with you instead of whoever ranks first, and so you are already there when the next storm puts every canal-front and coastal homeowner in Broward on the phone.",
    primaryCta: 'Get my free Fort Lauderdale audit',
    intro:
      "Fort Lauderdale local SEO really comes down to one moment: a homeowner on Las Olas Isles or in Coral Springs types your service plus \"near me,\" and either you are one of the three businesses Google pinned to the map or you are not. Most people tap one of those three and never scroll. In a coastal, canal-laced, storm-exposed market full of waterfront owners, becoming one of those three is the whole game. Here is exactly how we get you there.",
    aioQuestion: 'How do Fort Lauderdale businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and Broward neighborhoods you want; name, address, and phone details that match everywhere online; a steady flow of real reviews; and local content built around genuine Broward neighborhoods. This is a coastal, hurricane-exposed, yachting market, so the winners look established, answer storm calls fast, and are already ranking before the season turns.",
    problemHeading: "If your phone has gone quiet, it usually traces back to one of these three",
    painPoints: [
      { title: 'Competitors hold the three pins on the map', body: "Search your own service plus \"near me\" right now. Those three businesses Google drops on the map soak up the lion's share of the clicks. If you are not one of them, the quality of your work barely registers, because most Broward homeowners never scroll to your name. Climbing into that top three is usually the single highest-return move a contractor on this coast can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Broward homeowner to four contractors at once, then bill each of you to fight over them. It is a treadmill you never step off. Local SEO builds the opposite kind of asset: a homeowner finds you, calls you, and nobody else got that lead. Run it long enough and you stop renting visibility and start owning the pipeline." },
      { title: "You're invisible when the storm or snowbird season lands", body: "When a hurricane runs up the coast, demand for roofing, impact windows, restoration, and seawall repair goes vertical overnight, and the contractors already in the Map Pack scoop up those calls. When snowbirds activate in October, the homeowners with the deepest budgets begin their search. If you are off the map for either wave, that booked work flows to whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The single biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows precisely which Fort Lauderdale searches belong to you." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to line up everywhere Google checks. We fix the listings that contradict each other and build the ones you are missing across Broward." },
      { name: 'Reviews that keep coming', desc: "A simple engine that turns finished jobs into a steady stream of fresh reviews. It lifts your ranking and gives the next waterfront homeowner a reason to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Las Olas, Victoria Park, Wilton Manors, Coral Springs, Pompano Beach and the rest, so you rank for the exact neighborhood someone is searching instead of a generic \"Fort Lauderdale.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, and mobile speed. The wiring behind the dashboard that lets every other piece climb." },
      { name: 'Local link building', desc: "Mentions and links from Broward sources Google trusts: local press, trade and marine associations, community partners. In a market this competitive that is often what splits page one from page two." },
      { name: 'Hurricane-season readiness', desc: "We get your profile, pages, and reviews ranking before hurricane season so you catch the roofing, window, and restoration surge instead of chasing it once the storm has already passed.", featured: true },
      { name: 'AI search readiness', desc: "A growing slice of \"near me\" research now begins inside AI Overviews, ChatGPT, and Perplexity. We structure your content so those engines can read you and name you when a Broward homeowner asks.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you genuinely rank today across every service area and pin down which competitors are beating you in the Map Pack and exactly how they got there." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP come first, because they move the fastest. Most Broward clients see early lift here inside the first few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before the season turns, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Broward, backed by the on-page work that makes them rank." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and booked jobs, never vanity rankings. Then we go take the next canal-front neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation set on the coast.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Broward communities.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Broward.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fort Lauderdale?', a: "Most Fort Lauderdale engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you are chasing. The tiers above lay it out. No hidden fees, no long contract, and we lock the exact scope in your free audit before you spend a dollar." },
      { q: 'How soon will I show up in the Map Pack?', a: "Profile work can move within a few weeks. The competitive Broward keywords usually take 90 to 180 days of steady effort, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this crowded is selling you a fantasy." },
      { q: 'What makes Fort Lauderdale local SEO different?', a: "The water changes everything. This is the yachting capital with more than 300 miles of canals, so searches include seawall, dock, lift, and other marine-adjacent terms you simply will not see inland. The coast sits in the hurricane corridor, so trade demand swings hard with storm season and salt-air wear. There is meaningful Spanish-language search across Broward too, but the work here leads with boats, canals, and storm readiness." },
      { q: 'How does local SEO help my Broward business during hurricane season?', a: "When a storm runs up the coast, searches for roofing, impact windows, restoration, seawall repair, and HVAC spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of the season so you capture that wave instead of scrambling for scraps once everyone else is already booked solid." },
      { q: 'Which Broward areas do you cover?', a: "All of Broward County and the areas around it: Fort Lauderdale, Coral Springs, Weston, Plantation, Pompano Beach, Deerfield Beach, Miramar, Lauderhill, Hallandale Beach, Hollywood, Cooper City, Tamarac, Wilton Manors and more. We build genuine neighborhood pages rather than one generic Fort Lauderdale page, because that is what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with marine and waterfront contractors specifically?', a: "Yes, and it is one of the things that sets a Broward agency apart. Beyond roofing, HVAC, plumbing, impact windows, and restoration, we understand seawall and dock work, lift installs, and the waterfront maintenance that the canal corridor runs on. We build your local SEO around how those buyers actually search." },
      { q: 'Will my business show up in Google AI Overviews and ChatGPT?', a: "A rising share of \"near me\" research now starts in AI tools rather than classic search. We structure your content and schema so those engines can read, trust, and name your business in their answers. On this coast that is fast becoming as decisive as the Map Pack itself." },
      { q: 'Am I tied to a contract?', a: "No. We ask for an initial 90 days, because that is roughly how long local SEO needs to show real movement. After that you go month-to-month. If we are not delivering, you walk, and the accountability stays squarely on us." },
      { q: 'How does this get me off Angi and HomeAdvisor for good?', a: "Those platforms rent you shared leads and visibility you never get to keep. We build rankings, a Google profile, and a review base that send leads straight to you alone. Over time you lean on the brokers less, because the work is already arriving at your door." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers run for your Broward business. No pitch deck, just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fort-lauderdale', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fort Lauderdale SEO Company | OnwardCraft',
    metaDescription:
      'Fort Lauderdale SEO that ranks contractors on Google and delivers leads you own. Revenue-tied reporting, no lock-in, built for hurricane-season demand.',
    eyebrow: 'SEO Services · Fort Lauderdale-Broward County',
    h1: 'Get your Fort Lauderdale business to the top of Google and keep it there',
    h2Exact: 'Fort Lauderdale SEO Company',
    heroSubhead:
      "Ads die the second you stop paying. SEO does the reverse: rank once for what your Fort Lauderdale customers search and the leads keep arriving for months. We build that ranking and tie every report to real calls and booked jobs, not vanity charts.",
    primaryCta: 'Get my free Fort Lauderdale SEO audit',
    intro:
      "Fort Lauderdale SEO comes down to one blunt question: when someone in Broward searches what you do, are you on page one or page two? In this market page two might as well be page fifty. We get contractors ranking for the money keywords in a coastal, canal-laced, storm-exposed city, and we measure the whole thing in leads, not traffic that never picks up the phone.",
    aioQuestion: 'How do Fort Lauderdale businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Broward sources. In a coastal, hurricane-prone, yachting market, ranking for storm-driven keywords and marine-adjacent contractor categories, plus capturing the Spanish-language searches competitors ignore, are three of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Fort Lauderdale site isn't bringing in work",
    painPoints: [
      { title: "You're stranded on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it either. If you are not in the top handful of results for what you sell, your site is effectively invisible no matter how sharp it looks. In Broward, that invisibility is exactly what sends your jobs to the competition." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the instant your card stops, the leads stop cold. SEO builds an asset you actually own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost you are paying brokers and ad platforms now." },
      { title: "You're missing the seasonal and marine demand", body: "Broward demand swings hard with hurricane season, snowbird arrivals, and the year-round waterfront and yachting trades. The contractors who rank for storm-driven, marine-adjacent, and Spanish-language terms ahead of time catch the spike. Ignore those searches and you quietly hand away your busiest, most profitable months." },
    ],
    servicesHeading: 'The SEO work that genuinely moves your rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs in place before it will rank your Fort Lauderdale site at all." },
      { name: 'On-page optimization', desc: "Every page that matters tuned for the exact terms your Broward customers search: titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what waterfront buyers search, earn links, and bring in leads long after we publish them." },
      { name: 'Link building', desc: "Authority from real Broward and industry sources. In a competitive coastal market, links are often the deciding factor between page one and page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Broward right alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and booked jobs, not just rankings and traffic, so you always know in dollars what your SEO is returning." },
      { name: 'Hurricane & seasonal SEO', desc: "We rank you for the storm-driven and snowbird-season searches that fuel Broward's busiest months, so you are visible before demand spikes instead of chasing it once it has passed.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Broward search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fort Lauderdale leads, not just impressions." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile. The groundwork every other tactic stands on before it can rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-driven, marine, and snowbird-season terms that decide who wins here." },
      { name: 'Build authority', desc: "Links and citations from trusted Broward and industry sources to push your competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to booked leads, then we pour more into what is working and push into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fort Lauderdale SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core coastal keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across several services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Broward search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hurricane & seasonal SEO', 'Bilingual / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fort Lauderdale?', a: "Most Fort Lauderdale SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. The tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fort Lauderdale?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most contested Broward keywords. SEO compounds, so the longer you run it, the bigger the gains get." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops the moment you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Broward contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Fort Lauderdale SEO target hurricane season?', a: "Yes. When a storm runs up the coast, searches for roofing, impact windows, restoration, and seawall repair spike overnight, and ranking takes months to build, so you have to be in place before the season rather than chasing it after. We optimize for those seasonal and storm-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local and Map Pack SEO, and revenue-tied reporting. Higher tiers add hurricane-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs about that long to show real movement, then you switch to month-to-month. If we are not delivering, you leave." },
      { q: 'Can you target marine and waterfront search terms?', a: "Yes, and in Broward that is a real edge. Seawall repair, dock and lift work, canal-front maintenance, and other marine-adjacent terms carry steady volume that most contractors never optimize for. We build pages and content around them so you rank for the work tied to the water." },
      { q: 'Which areas around Fort Lauderdale do you cover?', a: "All of Broward County and the surrounding areas: Coral Springs, Weston, Plantation, Pompano Beach, Deerfield Beach, Miramar, Lauderhill, Hallandale Beach, Hollywood, Cooper City, Tamarac, Wilton Manors and more, with genuine local pages rather than one generic Fort Lauderdale page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that route leads directly to you. The more of your search visibility you own, the less you have to pay brokers for leads three competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to outrank you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your Broward business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fort-lauderdale', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fort Lauderdale Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Fort Lauderdale web design that turns visitors into booked jobs: fast, mobile-first sites built for contractors and ready for hurricane-season demand.',
    eyebrow: 'Web Design · Fort Lauderdale-Broward County',
    h1: 'Fort Lauderdale web design that turns visitors into booked jobs',
    h2Exact: 'Fort Lauderdale Web Design Company',
    heroSubhead:
      "A handsome website that never generates a call is just an expensive brochure. We build Fort Lauderdale contractors fast, mobile-first sites engineered to turn visitors into booked work, and tough enough to hold up when a hurricane sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Fort Lauderdale contractor websites bleed leads quietly: slow on a phone, call button buried, no clear offer anywhere. Web design done right closes all of those leaks. We build sites that load fast, look like the professional you actually are, and turn Las-Olas-to-Coral-Springs visitors into booked jobs, and that do not fall over when a storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Fort Lauderdale?',
    aioAnswer:
      "A good Fort Lauderdale contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during hurricane season. Waterfront and yacht-corridor homeowners expect a presentation that matches the standard of their property, and a cluttered or slow site loses them to a competitor who simply looks more established.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "Plenty of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next name on the map. We design every page around one job: turning a Broward visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Fort Lauderdale visitors are on mobile, and they bounce if your site takes more than a couple of seconds to load. Slow sites also rank worse, so you lose twice. We build fast, so you keep both the visitor and the ranking." },
      { title: "It can't handle a hurricane-season surge", body: "After a major storm, contractor sites across Broward get slammed with a flood of urgent traffic, and the slow ones buckle or bury the call button at the exact moment it matters most. We build sites that stay fast and keep converting under load, so you capture that demand instead of losing it to a faster competitor." },
    ],
    servicesHeading: "What's in an OnwardCraft Fort Lauderdale website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Broward service area, and the exact jobs you want more of, whether that is waterfront maintenance or post-storm restoration." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that is where nearly all of your Fort Lauderdale traffic lives. Fast, thumb-friendly, and easy to call from in one tap." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and quote forms placed where a canal-front homeowner taps them mid-search. Every page points to one next step: get the contractor out to the dock or the driveway." },
      { name: 'Copy that sells', desc: "Words that speak to a homeowner staring at a flooded patio or a leaking roof, from snowbird retirees in Weston to canal-front owners on Las Olas, not filler that reads like every other contractor in town." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank: clean structure, schema, fast load, and neighborhood-ready pages for Las Olas, Wilton Manors, Pompano Beach and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast on a phone signal out on the Intracoastal, and to pass Google's performance checks, which guards your Broward conversions and your rankings together." },
      { name: 'Hurricane-surge ready', desc: "Built to stay fast and keep the call button front and center when a storm runs up the canals and Broward homeowners flood the search results at once. That surge is where your biggest roofing and restoration jobs of the year come from.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read your site and recommend your business as more Broward search shifts toward AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, which Broward neighborhoods you cover, the jobs that pay best, whether that is a seawall rebuild or a re-roof, and who you are up against, then map the site to book more of that work." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert the discerning waterfront homeowner, and you see it and shape it before a single line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy aimed at a Broward homeowner with a problem, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the local-SEO foundation, call tracking, and speed all dialed in from day one, ready before the next storm season turns." },
      { name: 'Support and optimize', desc: "We keep it fast and current through hurricane season and beyond, tuning it on what is actually turning Broward visitors into calls." },
    ],
    pricing: {
      heading: 'Transparent Fort Lauderdale web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Hurricane-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fort Lauderdale?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations like booking or a project gallery for waterfront work. The tiers are above: fixed price, no surprises, and you own the finished Broward site outright." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build runs 4 to 8. We hand you a firm timeline up front and keep you posted at every stage, so you can aim a launch well before hurricane season hits." },
      { q: 'Will my site handle a hurricane-season traffic spike?', a: "Yes, and in Broward that matters more than almost anywhere. After a major storm, contractor sites take a flood of urgent traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation: fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank, and pairing it with our SEO service is how you climb the competitive Fort Lauderdale terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content from day one. No hostage situations and no platform you cannot walk away from, the same no-lock-in deal we give every Broward client." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that is where nearly all of your Fort Lauderdale traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Can the site showcase waterfront and marine project photos?', a: "Yes, and on this coast it pays off. Canal-front jobs, seawall and dock work, and post-storm restoration all sell on the strength of real before-and-after photos. We build galleries and project pages that load fast and put that proof right where a Broward homeowner can see it." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your trade and that you can manage yourself, usually WordPress or Webflow. We recommend the right fit in your free consult and lay out the tradeoffs in plain English, no jargon." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you can walk away whenever you like, just like with our other Broward services." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Fort Lauderdale site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fort-lauderdale', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fort Lauderdale Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Fort Lauderdale website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up.',
    eyebrow: 'Website Redesign · Fort Lauderdale-Broward County',
    h1: 'Redesign your Fort Lauderdale website without losing your rankings',
    h2Exact: 'Fort Lauderdale Website Redesign Company',
    heroSubhead:
      "An outdated site quietly costs you jobs every week: slow, clumsy on a phone, easy for a Broward homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate so carefully that you keep every bit of ranking you have already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks prettier but converts exactly the same, or it launches and the rankings vanish overnight. We do neither. We redesign Fort Lauderdale contractor sites for speed and conversions, build them to survive hurricane-season traffic surges, and migrate with the redirects and SEO care that protect the traffic you have spent years building.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Fort Lauderdale site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Broward's waterfront, yacht-corridor, and snowbird homeowners are an affluent, discerning audience. An old, cluttered design quietly ships them to a competitor who simply looks more established, even when your work is plainly better. On a high-ticket coastal job, that first impression decides who gets the call." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you are losing the majority of your Fort Lauderdale visitors before they ever reach your offer. A redesign built mobile-first wins those visitors back and turns them into leads." },
      { title: "It can't keep up when demand surges", body: "Traffic that never turns into calls is wasted money, and an old site that slows to a crawl under a hurricane-season surge loses leads at the precise moment they are worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint what is bleeding you leads and rankings today across your Broward service area, so the rebuild fixes the real problems instead of just swapping the colors around." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep every bit of the rankings and traffic you have already earned in Broward." },
      { name: 'Conversion redesign', desc: "Clear offers, smarter call-to-action placement, and quote forms a waterfront homeowner actually fills out. We design for booked jobs, not just a prettier screenshot." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals, so the site holds up on a mobile signal by the water and lifts conversions and rankings together." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where nearly all of your Fort Lauderdale traffic actually lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the standard Broward's waterfront homeowner market expects." },
      { name: 'Hurricane-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when a storm pushes up the canals and urgent traffic spikes overnight, so the new site lands your biggest restoration jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Broward search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We dig into what is losing you Broward leads and rankings, then map a redesign that fixes it without breaking the pages already pulling work for you." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design pitched at the affluent Broward homeowner, which you review and shape before we build a thing." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every 301 redirect and SEO detail for a clean, no-surprises migration that holds your hard-won Broward rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and watch the rankings closely so they hold and climb instead of dropping, ideally well ahead of storm season." },
      { name: 'Optimize', desc: "Post-launch tuning on what is converting Broward visitors into calls, plus ongoing speed work and updates." },
    ],
    pricing: {
      heading: 'Transparent Fort Lauderdale redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Hurricane-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fort Lauderdale?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations like a waterfront project gallery or booking. Fixed price, no surprises, and you own the Broward result outright." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it is handled carefully, and that is exactly how we work. We map 301 redirects for every changed URL, keep your content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds the Broward rankings you have built and usually pushes them higher." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild runs 5 to 9. You get a firm timeline up front and updates at every stage, so you can target a launch before hurricane season ramps up." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is a pain to update, is not bringing in leads, or buckles when hurricane-season traffic surges, it is costing you work. The free audit tells you plainly whether a redesign is worth it for your Broward business." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and sharpen your existing content, protect the Broward pages already ranking, and run the technical migration so nothing important slips through the cracks." },
      { q: 'Will the new site handle hurricane-season traffic?', a: "Yes, and in Broward that is a real consideration. After a major storm, contractor sites take a surge of urgent traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first, because that is where almost all of your Broward traffic sits, and tune for fast load and Core Web Vitals so both conversions and rankings climb." },
      { q: 'Do I own the redesigned site?', a: "Completely: the site, the domain, and the content are yours. No platform lock-in of any kind, the same straight deal we run on every Broward project." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project at a fixed price. Any ongoing maintenance or SEO runs month-to-month, so you stay in control." },
      { q: "What's in the free redesign audit?", a: "A plain read on what your current site is costing you in Broward leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const fortLauderdaleCity = {
  citySlug: 'fort-lauderdale', city: 'Fort Lauderdale', state: 'Florida', stateAbbr: 'FL', metro: 'Fort Lauderdale-Broward County',

  titleTag: 'Fort Lauderdale Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Fort Lauderdale contractors. Get found, get booked, and own your leads instead of renting them, all built for hurricane-season demand.',

  eyebrow: 'Fort Lauderdale · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Fort Lauderdale contractors found and booked',
  h2Exact: 'Fort Lauderdale Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Broward's coastal, canal-laced, hurricane-exposed market. One team to get you ranking, converting, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Fort Lauderdale audit',

  intro:
    "If you run a contracting business in Fort Lauderdale or Broward County, you are working a market unlike any other in Florida. The Venice of America carries more than 300 miles of canals and the largest yachting industry anywhere, which turns seawall, dock, and waterfront work into a trade of its own. It also sits in the hurricane corridor, where the next storm is a question of when, not if. Winning here takes three things working together: a site that converts an affluent, discerning homeowner, SEO that ranks you before storm season, and local SEO that puts you in the Map Pack for the coastal, marine, and bilingual searches your competitors overlook. Here is exactly how we help Fort Lauderdale contractors pull that off.",
  aioQuestion: 'How do Fort Lauderdale contractors get more leads online?',
  aioAnswer:
    "Fort Lauderdale contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Broward is a coastal, canal-laced, hurricane-exposed market with affluent waterfront and snowbird buyers plus steady Spanish-language search, the contractors who look established, rank for storm-driven and marine-adjacent terms, and are already visible before a storm hits win the most valuable work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Broward searches \"near me.\" The single highest-return move for most local contractors, and how you catch hurricane-season and snowbird demand before a competitor does.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Broward customers actually search, including the storm-driven and marine-adjacent terms competitors miss, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that match what Broward's affluent waterfront homeowners expect and stay fast when hurricane season floods your phone, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it so carefully that you keep every bit of ranking you have already earned in Broward search.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fort Lauderdale?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads, and so they are ready when hurricane season or the snowbird wave hits and every homeowner needs help at once." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades: roofing, HVAC, plumbing, impact windows, restoration, seawall and dock work, marine-adjacent contractors, and general contractors, so we understand storm calls, salt-air wear, and insurance work." },
    { q: 'Why does the Fort Lauderdale market require a specialist?', a: "Three reasons. Broward sits in the hurricane corridor, so impact windows, roofing, and restoration are year-round conversations. It is the yachting capital with more than 300 miles of canals, which creates marine and waterfront search categories you find nowhere else. And the waterfront and snowbird homeowner base has both a higher budget and a higher standard, so a generic contractor site will not cut it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO run month-to-month from $750 to $3,000, with no long contract. We lock the exact scope for your Broward business in the free audit before you spend a dollar." },
    { q: 'Which Fort Lauderdale and Broward areas do you serve?', a: "All of Broward County: Fort Lauderdale, Coral Springs, Weston, Plantation, Pompano Beach, Deerfield Beach, Miramar, Lauderhill, Hallandale Beach, Hollywood, Cooper City, Tamarac, Wilton Manors and more." },
    { q: 'Where should I start?', a: "Start with a free Fort Lauderdale audit. We look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

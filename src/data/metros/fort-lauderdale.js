// FORT LAUDERDALE — per-metro × per-service local landing pages + city hub.
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
// FORT LAUDERDALE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Fort Lauderdale-Broward County is unlike anywhere else',
  body:
    "Fort Lauderdale and Broward County sit at a remarkable intersection of wealth, weather, and water. The metro has more miles of canals than Venice — earning it the \"Venice of America\" title — and it's the undisputed yachting capital of the world. That means waterfront home maintenance, seawall repair, dock work, and marine-adjacent contracting are a distinct service category here that barely exists anywhere else. Layer on top of that a direct path into the Atlantic hurricane corridor: Irma in 2017 and Ian in 2022 caused catastrophic damage across Broward, and residents know another major storm is a matter of when, not if. Roofing, impact windows, storm shutters, and disaster restoration are year-round conversations, not seasonal ones. Then there's the market itself: extraordinary wealth concentration among retirees and snowbirds in communities like Weston, Plantation, and Coral Springs, a large and growing Hispanic population (~30%) with significant Spanish-language search volume, and a substantial Haitian Creole-speaking community in Miramar and Lauderhill. The contractor who understands these layers and ranks for them isn't just winning clicks — they're winning work that competitors don't even know to go after.",
  pullQuote: 'When the next hurricane makes landfall, the contractors already ranking in Broward County are the ones who book the work.',
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
  seasonCaption: 'Hurricane season (Jun–Nov) and snowbird activation (Oct–Apr) overlap to make this a near-year-round market',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 68, peak: true }, { m: 'M', v: 52 },
    { m: 'A', v: 44 }, { m: 'M', v: 62, peak: true }, { m: 'J', v: 82, peak: true },
    { m: 'J', v: 86, peak: true }, { m: 'A', v: 90, peak: true }, { m: 'S', v: 96, peak: true },
    { m: 'O', v: 94, peak: true }, { m: 'N', v: 80, peak: true }, { m: 'D', v: 76, peak: true },
  ],
  stats: [
    { value: '1.9M+', label: 'people across Broward County, one of Florida\'s most densely populated' },
    { value: '~30%', label: 'Hispanic residents in Broward County, driving significant bilingual search volume', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season, when roofing, windows, and restoration demand explodes' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks — and the biggest storm-damage jobs' },
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
    body: "Roofing, HVAC, plumbing, impact windows, restoration, marine-adjacent contracting. We understand hurricane season, insurance claims, and the Broward County homeowner, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Fort Lauderdale',
    body: "Waterfront homeowners, snowbird retirees, bilingual households, hurricane-front demand. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Fort Lauderdale contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and after a hurricane, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
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
    titleTag: 'Fort Lauderdale Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Fort Lauderdale and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Fort Lauderdale-Broward County',
    h1: 'When Fort Lauderdale searches for what you do, be the first name they find',
    h2Exact: 'Fort Lauderdale Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three — so the call lands with you instead of whoever ranked first, and so you're booked when the next hurricane puts every Broward County homeowner on the phone.",
    primaryCta: 'Get my free Fort Lauderdale audit',
    intro:
      "Fort Lauderdale local SEO comes down to one thing: when a homeowner in Las Olas or Coral Springs searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The market is affluent, bilingual, and storm-driven — becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Fort Lauderdale businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Broward County neighborhoods. Fort Lauderdale is waterfront, hurricane-prone, and serves a bilingual and snowbird market, so the winners look established, respond fast, and are already ranking when storm-season or snowbird-season demand arrives.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Fort Lauderdale business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Broward County homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the storm or snowbird season hits", body: "When Irma and Ian came through, demand for roofing, impact windows, and restoration went vertical overnight, and the contractors already ranking took the calls. When snowbirds activate in October, the homeowners with the biggest budgets start their search. If you're invisible on the map for either surge, the work goes to whoever Google already trusts." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Fort Lauderdale searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Las Olas, Coral Springs, Weston, Miramar, Pompano Beach, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Fort Lauderdale.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Broward County sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Hurricane-season readiness', desc: "We get your profile, pages, and reviews ranking before hurricane season so you catch the surge instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Broward County, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Broward County areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Broward County.', features: ['Everything in Local Growth', 'Local link building', 'Hurricane-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fort Lauderdale?', a: "Most Fort Lauderdale engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Broward County keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes Fort Lauderdale local SEO different?', a: "Several things. It's the waterfront and yachting capital, so search behavior includes marine-adjacent contractor terms you won't find elsewhere. It's bilingual — about 30% Hispanic with significant Spanish-language search volume — and has a large Haitian Creole-speaking community. And it's directly in the hurricane corridor, so trade demand swings hard with storm season." },
      { q: 'How does local SEO help me during hurricane season?', a: "When a storm like Irma or Ian hits Broward County, searches for roofing, impact windows, restoration, and HVAC spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you catch that demand instead of competing for scraps after everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of Broward County and the areas around it — Fort Lauderdale, Coral Springs, Weston, Plantation, Pompano Beach, Deerfield Beach, Miramar, Lauderhill, Hallandale Beach, Hollywood, Cooper City, Tamarac, and more. We build genuine neighborhood pages instead of one generic Fort Lauderdale page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, impact windows, restoration, and general contractors. We understand emergency calls, hurricane-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fort-lauderdale', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fort Lauderdale SEO Company | OnwardCraft',
    metaDescription:
      'Fort Lauderdale SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for hurricane-season.',
    eyebrow: 'SEO Services · Fort Lauderdale-Broward County',
    h1: 'Get your Fort Lauderdale business to the top of Google and keep it there',
    h2Exact: 'Fort Lauderdale SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Fort Lauderdale customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Fort Lauderdale SEO audit',
    intro:
      "Fort Lauderdale SEO comes down to one question: when someone in Broward County searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a hurricane-prone, bilingual, waterfront market — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Fort Lauderdale businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Broward County sources. In a bilingual, hurricane-prone, and waterfront market, targeting Spanish-language search terms, storm-driven keywords, and marine-adjacent contractor categories are three of the fastest ways to pull ahead of competitors who are ignoring them.",
    problemHeading: "Three reasons your Fort Lauderdale site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're missing the bilingual and seasonal demand", body: "Broward County has one of the highest concentrations of Hispanic homeowners in Florida, and they search in Spanish. Hurricane season drives roofing and restoration searches through the roof. The contractors who rank for those terms before demand spikes win the biggest jobs." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Fort Lauderdale customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Broward County and industry sources. In a competitive waterfront market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Hurricane & seasonal SEO', desc: "We rank you for the storm-driven and snowbird-season searches that drive Broward County's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fort Lauderdale leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the hurricane-driven and snowbird-season terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Broward County and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fort Lauderdale SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Broward County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Hurricane & seasonal SEO', 'Bilingual / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fort Lauderdale?', a: "Most Fort Lauderdale SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fort Lauderdale?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Broward County keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Fort Lauderdale SEO target hurricane season?', a: "Yes. When storms like Irma or Ian hit Broward County, searches for roofing, impact windows, and restoration spike overnight, and ranking takes months to build — so you have to be in place before the season, not chasing it after. We optimize for those seasonal and storm-driven terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add hurricane-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Fort Lauderdale do you cover?', a: "All of Broward County and the surrounding areas — Coral Springs, Weston, Plantation, Pompano Beach, Deerfield Beach, Miramar, Lauderhill, Hallandale Beach, Hollywood, Cooper City, Tamarac, and more — with genuine local pages rather than one generic Fort Lauderdale page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fort-lauderdale', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fort Lauderdale Web Design Company | OnwardCraft',
    metaDescription:
      'Fort Lauderdale web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors and hurricane-season demand.',
    eyebrow: 'Web Design · Fort Lauderdale-Broward County',
    h1: 'Fort Lauderdale web design that turns visitors into booked jobs',
    h2Exact: 'Fort Lauderdale Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Fort Lauderdale contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up when a hurricane sends your phone into overdrive.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Fort Lauderdale contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Las-Olas-to-Coral-Springs visitors into booked jobs — and that don't buckle when a storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Fort Lauderdale?',
    aioAnswer:
      "A good Fort Lauderdale contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during hurricane season. Waterfront and snowbird homeowners expect a polished presentation that matches the quality of their home, and a cluttered or slow site loses them instantly to a competitor who looks more established.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Fort Lauderdale visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a hurricane-season surge", body: "After Irma and Ian, contractor sites across Broward County got hit with a flood of traffic, and the slow ones buckled right when it mattered most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft Fort Lauderdale website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want — whether that's waterfront maintenance or post-storm restoration." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Fort Lauderdale traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners — from snowbird retirees in Weston to waterfront owners on Las Olas — and book the job." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Hurricane-surge ready', desc: "Built to stay fast and keep the call button front and center when storm-season traffic spikes — the moment that turns visitors into your biggest jobs.", featured: true },
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
      heading: 'Transparent Fort Lauderdale web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Hurricane-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fort Lauderdale?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a hurricane-season traffic spike?', a: "Yes, and in Broward County that matters. After Irma and Ian, contractor sites took a flood of traffic, and the slow ones lost leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Fort Lauderdale terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Fort Lauderdale traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
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
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Fort Lauderdale contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Fort Lauderdale contractor sites for speed and conversions, build them to handle hurricane-season traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Fort Lauderdale site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Broward County's waterfront and snowbird homeowners are an affluent, discerning audience. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Fort Lauderdale visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow under a hurricane-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Fort Lauderdale traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of Broward County's affluent homeowner market." },
      { name: 'Hurricane-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when storm-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
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
      heading: 'Transparent Fort Lauderdale redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Hurricane-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fort Lauderdale?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when hurricane-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle hurricane-season traffic?', a: "Yes, and in Broward County that's a real consideration. After Irma and Ian, contractor sites took a surge of traffic, and the slow ones lost leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const fortLauderdaleCity = {
  citySlug: 'fort-lauderdale', city: 'Fort Lauderdale', state: 'Florida', stateAbbr: 'FL', metro: 'Fort Lauderdale-Broward County',

  titleTag: 'Fort Lauderdale Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Fort Lauderdale contractors. Get found, get booked, and own your leads instead of renting them — built for hurricane-season.',

  eyebrow: 'Fort Lauderdale · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Fort Lauderdale contractors found and booked',
  h2Exact: 'Fort Lauderdale Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Broward County's waterfront, hurricane-prone, and bilingual market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Fort Lauderdale audit',

  intro:
    "If you run a contracting business in Fort Lauderdale or Broward County, you're operating in a market unlike any other in Florida. The Venice of America has more canals than Venice itself and draws the wealthiest retirees and snowbirds in the country. It's also directly in the hurricane corridor — Irma and Ian both punched through here, and the next one will too. Winning in this market takes three things working together: a site that converts an affluent, discerning homeowner, SEO that ranks you before storm season, and local SEO that puts you in the Map Pack for the bilingual searches your competitors are ignoring. Here's how we help Fort Lauderdale contractors do exactly that.",
  aioQuestion: 'How do Fort Lauderdale contractors get more leads online?',
  aioAnswer:
    "Fort Lauderdale contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Broward County has an affluent snowbird and retiree market, significant bilingual search volume, and hurricane-driven demand spikes, the contractors who look established, rank for the right terms in both English and Spanish, and are already visible before a storm hits win the most valuable work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Broward County searches \"near me.\" The single highest-return move for most local contractors — and how you catch hurricane-season and snowbird-season demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including the bilingual and storm-driven terms your competitors miss — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that match the expectations of Broward County's affluent homeowners and hold up when hurricane season floods your phone — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fort Lauderdale?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when hurricane season or snowbird season hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, impact windows, restoration, marine-adjacent contractors, and general contractors — so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'Why does the Fort Lauderdale market require a specialist?', a: "Three reasons. Broward County is directly in the hurricane corridor, so roofing, impact windows, and restoration are year-round conversations. The market is ~30% Hispanic with significant Spanish-language search volume. And the waterfront and snowbird homeowner base has a higher budget and a higher standard — a generic contractor site won't cut it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Fort Lauderdale and Broward areas do you serve?', a: "All of Broward County — Fort Lauderdale, Coral Springs, Weston, Plantation, Pompano Beach, Deerfield Beach, Miramar, Lauderhill, Hallandale Beach, Hollywood, Cooper City, Tamarac, Wilton Manors, and more." },
    { q: 'Where should I start?', a: "Start with a free Fort Lauderdale audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

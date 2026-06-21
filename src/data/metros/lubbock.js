// LUBBOCK — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Lubbock's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LUBBOCK — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Lubbock is a different kind of fight',
  body:
    "Lubbock sits on the flat Llano Estacado — the vast, treeless plateau in West Texas where the wind never really stops. It is consistently one of the windiest large cities in the United States, and that wind brings hail. \"Lubbock hail\" is practically an annual event: severe storms rip through in spring and early fall, and the roofing contractors who are already visible on Google when the storm passes are the ones who collect every job. Add summer heat that regularly hits 100-plus degrees, occasional hard freezes like the 2021 Texas winter event, and a population that genuinely needs HVAC systems capable of handling both extremes, and you have a market where storm-driven demand is constant and weather-emergency searches spike overnight. Two other forces shape who wins here. Texas Tech University brings around 40,000 students — creating steady rental-property work, a young first-time homebuyer market, and neighborhoods like Tech Terrace that cycle through tenants. And Lubbock's population is roughly 36 percent Hispanic, a significant segment that most marketing agencies optimize English-only and leave completely unclaimed. The contractor who shows up in Spanish-language searches for roofing, HVAC, or plumbing reaches a competitive gap most of the market ignores entirely.",
  pullQuote: 'When a Lubbock hailstorm rolls through, the roofing contractor already on the map gets every call. The one on page two gets nothing.',
  donut: {
    title: "Lubbock's Hispanic search market",
    value: 36,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 36, kind: 'teal' },
      { label: 'Other', pct: 64, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Lubbock',
  seasonCaption: 'Hail/wind roofing (Apr–Jun, Aug–Oct) and summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 40 }, { m: 'F', v: 42 }, { m: 'M', v: 58 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 86, peak: true },
    { m: 'J', v: 72 }, { m: 'A', v: 84, peak: true }, { m: 'S', v: 90, peak: true },
    { m: 'O', v: 82, peak: true }, { m: 'N', v: 55 }, { m: 'D', v: 38 },
  ],
  stats: [
    { value: '~265K', label: 'people in the Lubbock metro, with steady post-storm contractor demand' },
    { value: '~36%', label: 'of residents identify as Hispanic — a search market most agencies leave untouched', accent: true },
    { value: '40,000', label: 'Texas Tech students creating rental and first-time buyer contractor work' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the calls after a storm event' },
  ],
  neighborhoods: [
    'Tech Terrace', 'Wolfcamp', 'Maxey Park', 'Raintree', 'Slaton',
    'Wolfforth', 'Shallowater', 'Idalou', 'Overton', 'Arnett Benson',
    'Kent Street', 'Parkway', 'South Lubbock', 'North Lubbock', 'East Lubbock',
  ],
};

const AREAS = [
  'Lubbock', 'Tech Terrace', 'Wolfcamp', 'Maxey Park', 'Raintree', 'Wolfforth',
  'Shallowater', 'Idalou', 'Slaton', 'Overton', 'Arnett Benson',
  'South Lubbock', 'North Lubbock', 'East Lubbock', 'Parkway',
];

const FOUNDER =
  "I built OnwardCraft because I kept seeing good trade contractors — roofers, HVAC techs, plumbers — hand Angi and HomeAdvisor a few hundred dollars a month for leads they shared with three other guys. That's not a business, that's a hamster wheel. In a market like Lubbock, where a single hailstorm can create six months of roofing work overnight, the contractor who already owns their rankings captures everything. The one still buying shared leads scrambles for scraps. Our whole purpose is to get you ranking for the searches your customers actually run — in English, in Spanish, for your neighborhoods — so that when the next storm rolls across the Llano Estacado, your phone is the one that rings.";

const WHY = [
  {
    title: 'We get the Lubbock market',
    body: "Storm-driven roofing work, extreme HVAC demand from triple-digit summers and hard freezes, Texas Tech rental properties, agricultural and rural service areas, and a large Hispanic market most agencies never touch. We build your SEO and site around how Lubbock actually works.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole point is a pipeline you own. After a storm, you should not be fighting other contractors for shared Angi leads — you should be the name that comes up first when homeowners search. That's what we build.",
  },
  {
    title: 'We actually speak West Texas',
    body: "Neighborhood-by-neighborhood targeting from Tech Terrace to Wolfforth, plus Spanish-language reach to win the 36 percent of Lubbock that most of your competitors are invisible to. Real local content, not a template with the city name swapped in.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads and calls, month-to-month after 90 days. If we're not earning it, you walk. The pressure stays where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "We're a young, founder-led shop and won't pretend to a track record we don't have yet. What we can show you is why this works — from Google's and the industry's own research on how people search locally, applied to a storm-and-heat-driven market like Lubbock.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's an illustrative projection, clearly labelled as such: say a Lubbock roofing or HVAC contractor gets around 1,200 local searches a month across their service neighborhoods during storm season. Moving from page-two invisibility into the top three Map Pack spots is the difference between a quiet phone and a booked-out calendar for the next three months. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Lubbock', state: 'Texas', stateAbbr: 'TX', metro: 'Lubbock',
  heroProof: ['Built for the trades', 'Storm-season and bilingual targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lubbockLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'lubbock', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Lubbock Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'When a Lubbock hailstorm hits, three names show up on the map. We get you into those three, so the roofing, HVAC, and trade calls land with you.',
    eyebrow: 'Local SEO · Lubbock, TX',
    h1: 'When Lubbock searches for what you do, be the first name they find',
    h2Exact: 'Lubbock Local SEO Company',
    heroSubhead:
      "Google pins three businesses to the map when someone searches \"near me.\" On the Llano Estacado, where a single hailstorm creates months of roofing demand overnight, those three spots are worth everything. We get you into that top three for your Lubbock neighborhoods — in English and in Spanish — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Lubbock audit',
    intro:
      "Lubbock local SEO comes down to one thing: when a homeowner in Tech Terrace or Wolfforth searches for a roofer, HVAC tech, or plumber after a storm, are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. In a market where storm demand can go from zero to overwhelming overnight, and where roughly 36 percent of searchers use Spanish, getting into those three spots for your neighborhoods is the highest-return move most Lubbock contractors can make. Here's how you do it.",
    aioQuestion: 'How do Lubbock businesses rank higher in local search?',
    aioAnswer:
      "You rank in Lubbock by getting four things right: a Google Business Profile optimized for the specific services and neighborhoods you serve; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to Lubbock neighborhoods and storm-season demand. Because roughly 36 percent of Lubbock is Hispanic, contractors who also target Spanish-language searches reach a significant market most competitors ignore entirely.",
    problemHeading: "If your phone is quiet after a storm, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? After a Lubbock hailstorm, those are the only calls that ring. Everyone below them is invisible when demand is at its highest. Getting into that top three for Tech Terrace, Wolfcamp, Wolfforth, and the rest of your service area is usually the single highest-return move a Lubbock trade contractor can make." },
      { title: "You're buying leads you share with three competitors", body: "Angi, Thumbtack, and HomeAdvisor sell the same Lubbock homeowner to several contractors, then charge all of you to fight over the job. It's a treadmill — and in a value-conscious, price-sensitive market like Lubbock, those leads are even harder to close when a homeowner knows you're competing against others. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got the same contact. Over time you stop renting and start owning your pipeline." },
      { title: "You're invisible to a third of the market", body: "Roughly 36 percent of Lubbock residents are Hispanic, and many search in Spanish for roofing, HVAC, plumbing, and other trade services. Most contractors and most agencies do nothing to show up for those searches. Targeting the right neighborhoods in Spanish — Maxey Park, East Lubbock, South Lubbock — is how you reach buyers your competitors never see." },
    ],
    servicesHeading: 'What it actually takes to rank you in Lubbock',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We optimize your categories, services, service area, photos, and posts so Google knows exactly which Lubbock searches you should win — including storm-emergency and seasonal terms." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google checks. We fix conflicting listings and build the ones you're missing across the Lubbock directories that matter." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished Lubbock jobs into a steady flow of real reviews. It lifts your Map Pack ranking and makes homeowners pick up the phone instead of scrolling down." },
      { name: 'Neighborhood pages', desc: "Real pages for Tech Terrace, Wolfcamp, Maxey Park, Raintree, Wolfforth, Shallowater, and Idalou, so you rank for the neighborhood someone's actually searching — not just \"Lubbock.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank, including storm-season and emergency search terms." },
      { name: 'Local link building', desc: "Mentions and links from Lubbock and West Texas sources Google trusts — local press, chambers, trade associations, partners. This is what separates page one from page two in a mid-size market." },
      { name: 'Spanish-language reach', desc: "About 36 percent of Lubbock searches for trade services in Spanish. We help you show up for that demand — roofing, HVAC, plumbing — so you capture what most of your competitors never even see.", featured: true },
      { name: 'AI search readiness', desc: "More storm-season and \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read and cite your business when Lubbock homeowners are searching after a hail event.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Lubbock neighborhoods and identify which competitors are owning the Map Pack — and what's putting them there." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP listings first, because they move the fastest. Most contractors see early lift in the Map Pack within a few weeks of getting these right." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now before the next storm season, not after it passes." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages for the parts of Lubbock you serve, plus Spanish-language content to capture the bilingual demand most agencies skip." },
      { name: 'Report and expand', desc: "Plain-English monthly reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or service keyword." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Lubbock.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors competing across multiple Lubbock neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Lubbock map — and the bilingual market.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area and rural service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Lubbock?', a: "Most Lubbock engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above. No hidden fees, no long contract, and we confirm exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Lubbock keywords — especially storm-season roofing and HVAC terms — usually take 90 to 180 days of steady work as reviews and citations compound. Anyone promising page one in 30 days is selling you something." },
      { q: 'What makes Lubbock local SEO different from other markets?', a: "Two things make Lubbock distinct. First, storm-driven demand: a hailstorm can spike roofing and restoration searches overnight, and the contractor already in the Map Pack captures everything. Second, the bilingual market: roughly 36 percent of Lubbock residents are Hispanic, and many search in Spanish for trade services — an audience most contractors and agencies never target." },
      { q: 'Can you help me reach Spanish-speaking customers in Lubbock?', a: "Yes, and in Lubbock that's a genuine competitive edge. About 36 percent of residents identify as Hispanic, and a meaningful share search in Spanish for roofing, HVAC, plumbing, and general contractor services. We optimize your profile and content so you show up for those searches in neighborhoods like Maxey Park, East Lubbock, and South Lubbock where most contractors are invisible." },
      { q: 'Which areas around Lubbock do you cover?', a: "All of Lubbock proper and the surrounding communities: Tech Terrace, Wolfcamp, Maxey Park, Raintree, Wolfforth, Shallowater, Idalou, Slaton, and more. We build genuine neighborhood pages instead of one generic Lubbock page, because \"[service] Wolfforth\" is a very different search from \"[service] Lubbock.\"" },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. In Lubbock that means we understand hail and wind damage claims, extreme-heat HVAC emergencies, the Texas Tech rental market, and rural and agricultural property work." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "A growing share of storm-season and \"near me\" research starts in AI now, not classic search. We structure your content and schema so those engines can read, trust, and cite your business — increasingly important when a homeowner's first move after a hailstorm is to ask an AI assistant for roofers nearby." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and shared leads?', a: "Those platforms sell the same Lubbock homeowner to several contractors at once, and in a price-sensitive market, you end up in a race to the bottom. We build rankings, a Google profile, and a review base that send leads straight to you. Over time the work comes to you directly and the lead brokers become unnecessary." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Lubbock service area, what your Map Pack competitors are doing, the fixes that'll move you fastest — especially heading into storm season — and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'lubbock', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Lubbock SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Lubbock SEO that ranks contractors on Google before storm season and keeps them there. Revenue-tied reporting, bilingual reach, no lock-in contracts.',
    eyebrow: 'SEO Services · Lubbock, TX',
    h1: 'Get your Lubbock business to the top of Google before storm season hits',
    h2Exact: 'Lubbock SEO Company',
    heroSubhead:
      "Ads stop the moment you stop paying. SEO is the opposite: rank for what Lubbock homeowners search after a hailstorm or during a 105-degree July, and the leads keep coming. We build that ranking — in English and in Spanish — and tie every report to actual calls and booked jobs.",
    primaryCta: 'Get my free Lubbock SEO audit',
    intro:
      "Lubbock SEO comes down to one question: when a homeowner searches your service after a hailstorm or when the AC goes out in August, are you on page one or page two? Page two might as well be page fifty. We get trade contractors ranking for the money keywords in a West Texas market that swings hard with weather — and we measure success in leads, not vanity traffic. We also target the Spanish-language search market that most Lubbock agencies never touch.",
    aioQuestion: 'How do Lubbock businesses rank higher on Google?',
    aioAnswer:
      "Lubbock businesses rank higher by fixing the technical foundation of their site, optimizing each page for the exact terms customers search — including storm-emergency and seasonal keywords — publishing genuinely useful local content tied to specific Lubbock neighborhoods, and earning links from trusted West Texas sources. In a market driven by storm events and extreme seasonal temperature swings, ranking for roofing and HVAC terms ahead of demand spikes is often the single fastest way to separate from competitors.",
    problemHeading: "Three reasons your Lubbock site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when storm season hits", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. When a hailstorm rolls across the Llano Estacado and roofing searches spike overnight, the contractors already on page one capture everything. If you're not there, the surge passes without you no matter how good your work is." },
      { title: "You're paying for traffic that stops when you stop", body: "Google Ads can drive calls, but the moment you pause your campaign, the traffic disappears — and for roofing and HVAC keywords in Lubbock, pay-per-click costs rise sharply right when everyone wants to advertise after a storm. SEO builds an asset you own: rankings that keep producing leads through every storm season at a fraction of the per-lead cost of ads." },
      { title: "You're not ranking for the demand that matters most", body: "Lubbock demand is intensely seasonal and weather-driven. Hail-damage roofing searches spike in April, May, June, August, September, and October. HVAC emergency searches spike in June, July, and August. Contractors who rank for those specific terms before demand arrives capture the surge. If your SEO ignores seasonal storm and extreme-heat searches, you're leaving your most profitable weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves Lubbock rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you — including structured data for storm-emergency and seasonal service pages." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Lubbock customers search — storm-damage roofing, hail repair, HVAC emergency service, and neighborhood-specific terms across Tech Terrace, Wolfcamp, Wolfforth and more." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles around the searches Lubbock homeowners actually run — from hail damage guides to HVAC maintenance in extreme heat — that earn links and bring in leads." },
      { name: 'Link building', desc: "Authority from real Lubbock and West Texas sources: local media, the Lubbock Chamber, trade associations, and partners. In a mid-size market, a handful of quality local links can move competitive keywords." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Lubbock service neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth in booked jobs." },
      { name: 'Storm-season and emergency SEO', desc: "We rank you for the hail-damage, wind-repair, and HVAC-emergency searches that drive Lubbock's busiest work weeks, so you're visible before demand spikes, not scrambling after.", featured: true },
      { name: 'Spanish-language SEO', desc: "About 36 percent of Lubbock is Hispanic. We optimize your content and Google profile so you rank for Spanish-language trade searches most of your competitors never appear in.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your current rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Lubbock leads — storm-season terms prioritized." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, including the emergency-service pages that get hit hardest after a storm event." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including hail/wind damage, extreme-heat HVAC, and Spanish-language pages that cover the demand most competitors miss." },
      { name: 'Build authority', desc: "Links and citations from trusted Lubbock, West Texas, and industry sources to push competitive keywords onto page one before storm season." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads and calls, then we double down on what's working and expand into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Lubbock SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Lubbock keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods in Lubbock.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Lubbock search — including storm-season and bilingual demand.', features: ['Everything in SEO Growth', 'Storm-season & emergency SEO', 'Spanish-language optimization', 'Rural and surrounding-area pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Lubbock?', a: "Most Lubbock SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above — no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Lubbock?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Tighter neighborhood terms move faster; storm-season roofing and HVAC keywords take longer because the competition is real. SEO compounds, so the gains keep building — which means starting before storm season, not after it, matters a lot." },
      { q: 'Should my Lubbock SEO target storm-season demand?', a: "Absolutely. Hailstorm searches spike in April, May, June, August, September, and October — and the contractors already ranking when the storm passes capture every job. HVAC emergency searches spike during Lubbock's 100-plus-degree summers. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: 'Can you help me rank in Spanish for Lubbock searches?', a: "Yes, and that's a real edge in this market. About 36 percent of Lubbock residents are Hispanic, and a meaningful share search in Spanish for roofing, HVAC, and plumbing services. We optimize your content and Google profile for Spanish-language searches so you reach the segment most of your competitors ignore entirely." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and emergency SEO and Spanish-language optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read and recommend your business — especially important when a homeowner's first move after a Lubbock hailstorm is to ask an AI assistant for roofers near them." },
      { q: 'Which areas around Lubbock do you cover?', a: "All of Lubbock and the surrounding communities — Tech Terrace, Wolfcamp, Maxey Park, Raintree, Wolfforth, Shallowater, Idalou, Slaton, and more — with genuine local pages instead of one generic Lubbock page." },
      { q: 'How do you get me off Angi and shared leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility for storm-season and HVAC terms, the less you need to pay brokers for leads they also sold to your competitors." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you in Lubbock search, the highest-impact fixes heading into storm season, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'lubbock', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Lubbock Web Design Company | OnwardCraft',
    metaDescription:
      'Lubbock web design that turns storm-season visitors into booked jobs — fast, mobile-first sites built for trade contractors in West Texas.',
    eyebrow: 'Web Design · Lubbock, TX',
    h1: 'Lubbock web design that turns storm-season visitors into booked jobs',
    h2Exact: 'Lubbock Web Design Company',
    heroSubhead:
      "A website that looks decent but doesn't book jobs is just a brochure. We build Lubbock trade contractors fast, mobile-first sites engineered to convert hailstorm researchers, HVAC shoppers, and price-sensitive homeowners into real calls — in English and in Spanish.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Lubbock contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that distinguishes you from the next guy. When a hailstorm rolls through and a homeowner Googles a roofer from their driveway, your site has about three seconds to earn the call. We build sites that load fast, look like the professional you are, and turn Tech Terrace to Wolfforth visitors into booked jobs — built for a market where storm demand is real and value-conscious homeowners compare quickly.",
    aioQuestion: 'What makes a good contractor website in Lubbock?',
    aioAnswer:
      "A good Lubbock contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos from local jobs, and names the specific Lubbock neighborhoods you serve. Because most post-storm searches happen on mobile and homeowners are price-sensitive and comparing quickly, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in Lubbock work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of Lubbock contractor sites list services and sit there. No clear offer, no obvious next step, nothing that explains why a homeowner should call you over the three other roofers showing up on their phone after the storm. We design every page around one job: turning a visitor into a booked lead, even when that visitor is comparing you to everyone else." },
      { title: "It's too slow on a phone in the field", body: "Most of your Lubbock visitors are on mobile — often searching from their yard after a storm or while sweating through an AC outage. If your site takes more than a few seconds to load, they bounce and call whoever loads next. Slow sites also rank worse on Google. We build fast so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your Lubbock neighborhoods", body: "A homeowner in Wolfforth wants to see that you serve Wolfforth — not a generic \"West Texas\" page that could be based anywhere. And a Spanish-speaking homeowner in Maxey Park wants a site that speaks their language. We build sites that name your neighborhoods and speak to your actual market so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Lubbock website",
    services: [
      { name: 'Custom design', desc: "No templates. A site designed around your trade, your Lubbock service area, and the specific jobs — storm damage, HVAC emergencies, new builds near Texas Tech — that you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where your Lubbock traffic is — especially post-storm searchers in their driveways. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they get used. Every page has a next step so visitors don't wander off to a competitor." },
      { name: 'Copy that sells', desc: "Words that speak to a value-conscious Lubbock homeowner dealing with hail damage or a broken AC unit in July heat — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Lubbock's distinct communities." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings — especially critical for storm-season traffic surges." },
      { name: 'Neighborhood and bilingual pages', desc: "Pages built around the Lubbock neighborhoods you serve, with Spanish-language content for the 36 percent of the market most contractor sites never reach.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business when Lubbock homeowners ask AI assistants for contractors after a storm.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Lubbock service neighborhoods, your best jobs — storm restoration, HVAC emergency, Texas Tech rentals — and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert Lubbock visitors into calls. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells — including bilingual content where needed — with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one so you're ready before the next storm season." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting in your Lubbock market." },
    ],
    pricing: {
      heading: 'Transparent Lubbock web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Lubbock contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Lubbock contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual content options'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-area Lubbock businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Spanish-language pages', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Lubbock?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, copywriting, and bilingual needs. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me win storm-season work?', a: "That's the whole point. We build around the specific Lubbock neighborhoods you serve, keep the site fast so it loads on a phone in a driveway, and put a clear offer and call button front and center — so when a homeowner is searching after a hailstorm, your site is the one that books the job." },
      { q: 'Can you build bilingual content for Spanish-speaking customers?', a: "Yes. About 36 percent of Lubbock is Hispanic, and we can build Spanish-language service pages and Google Business Profile content so you show up for that market. We'll recommend the right approach — translated pages, bilingual layout, or Spanish-specific CTAs — in your free consult." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Lubbock storm-season terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Lubbock traffic comes from — including homeowners searching from their yard after a storm or an AC failure. Fast load, easy-to-tap call buttons, forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost storm-season and heat-emergency leads, what a high-converting Lubbock site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'lubbock', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Lubbock Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Lubbock contractor website without losing rankings. Faster, mobile-first rebuilds that convert storm-season visitors into booked jobs in West.',
    eyebrow: 'Website Redesign · Lubbock, TX',
    h1: 'Redesign your Lubbock website without losing your rankings heading into storm season',
    h2Exact: 'Lubbock Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — especially when Lubbock hailstorm season hits and homeowners are searching on their phones. We redesign trade contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've already built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the Google rankings you spent months building disappear overnight. We do neither. We redesign Lubbock contractor sites for speed and conversions — built for post-storm search traffic and value-conscious homeowners — and we migrate with the redirects and SEO care that protect the traffic you already have. We also add the bilingual reach that most Lubbock sites are missing.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure or mapping 301 redirects for every changed page, preserving existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and often improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially for storm-season traffic spikes in Lubbock.",
    problemHeading: "Signs your Lubbock site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust on high-ticket storm jobs", body: "When a Lubbock homeowner has hail damage and is getting three estimates, they judge contractors by their websites in the first few seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work and your price are better." },
      { title: "It's slow and hard to use on a phone after a storm", body: "Most of your highest-intent searchers — homeowners who just took hail damage or whose AC just died in August — are on their phones and need an answer fast. If your site is clunky or slow on mobile, you're losing those calls to whoever loads next. A redesign built mobile-first wins them back." },
      { title: "It blends into a crowded field and doesn't convert", body: "A generic old Lubbock contractor site gives a homeowner no real reason to call you over the next result. We rebuild around conversions, your specific Lubbock neighborhoods, and Spanish-language reach for the 36 percent of the market most sites never address — so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Lubbock redesign",
    services: [
      { name: 'Redesign audit', desc: "We identify exactly what's costing you leads and rankings in Lubbock today, so the redesign fixes real problems — not just cosmetic ones — before storm season." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so the rankings you've built for storm-damage and HVAC keywords stay intact through the transition." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used by post-storm searchers. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load on West Texas mobile connections — better for conversions when homeowners are searching from the field and better for rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the overwhelming majority of your Lubbock storm-season traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and builds confidence with the value-conscious Lubbock homeowner." },
      { name: 'Neighborhood and bilingual rebuild', desc: "Rebuilt around the Lubbock neighborhoods you serve, with Spanish-language content for the 36 percent of the market most contractor sites never address.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you when Lubbock homeowners ask AI assistants for contractors after a hailstorm.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings in Lubbock, then map a redesign that fixes it — especially storm-season and mobile conversion gaps — without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build, tuned for the Lubbock market." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect, SEO detail, and bilingual page for a clean migration that protects your existing rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely — especially heading into storm season — so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting in Lubbock, plus ongoing speed and updates to keep you ahead." },
    ],
    pricing: {
      heading: 'Transparent Lubbock redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Lubbock contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Lubbock contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual content options'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-area Lubbock businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Spanish-language pages', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Lubbock?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, copywriting, and bilingual scope. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully — and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your storm-season rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage — including a heads-up if storm season is approaching." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't converting post-storm searchers into calls, or blends into the Lubbock contractor field without standing out, it's costing you jobs. The free audit tells you plainly whether a redesign is worth it and what it would fix." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking for storm-damage and HVAC keywords, and handle the technical migration so nothing important gets lost." },
      { q: 'Can you add Spanish-language pages to the redesign?', a: "Yes. About 36 percent of Lubbock is Hispanic, and adding Spanish-language service pages or bilingual CTAs can reach a segment most contractor sites ignore. We'll scope the right approach in your free audit." },
      { q: 'Will the redesign help me win more storm-season jobs?', a: "Yes, and that's the core goal. We rebuild around the specific neighborhoods you serve, make the site load fast on a phone, put a clear offer and call button front and center — and add the bilingual reach most Lubbock competitors skip — so when the next hailstorm hits, your site is the one that books the job." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings, especially for the storm-season traffic spikes that hit Lubbock's fastest-moving search days." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in storm-season leads and Google rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just a plan." },
    ],
  },
];

export const lubbockCity = {
  citySlug: 'lubbock', city: 'Lubbock', state: 'Texas', stateAbbr: 'TX', metro: 'Lubbock',

  titleTag: 'Lubbock Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Lubbock trade contractors. Get found before storm season, capture the bilingual market, and own your leads.',

  eyebrow: 'Lubbock · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Lubbock contractors found when it counts most',
  h2Exact: 'Lubbock Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Lubbock's storm-driven, bilingual, West Texas market. One team to get you ranking before hail season, converting in English and Spanish, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-season and bilingual targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Lubbock audit',

  intro:
    "If you run a contracting business in Lubbock, your biggest demand spikes come from things you can't control: a hailstorm rolling across the Llano Estacado, a July heat wave that kills every AC in Raintree, a hard freeze that bursts pipes across Tech Terrace. The contractors who capture that demand are the ones already visible on Google when the event hits. Getting there — and staying there — takes three things working together: a site that converts value-conscious homeowners, SEO that ranks you for storm-season and emergency searches, and local SEO that wins the Map Pack for the Lubbock neighborhoods you serve. And because roughly 36 percent of Lubbock is Hispanic, the contractor who also shows up in Spanish closes a market most of the competition never even sees.",
  aioQuestion: 'How do Lubbock contractors get more leads online?',
  aioAnswer:
    "Lubbock contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for storm-damage and emergency searches before demand spikes, and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 36 percent of Lubbock residents are Hispanic and Lubbock is one of the windiest large cities in the US — with near-annual hailstorm events — the contractors who target bilingual searches and rank for weather-driven keywords before storm season capture the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Lubbock searches \"near me\" — in English and in Spanish. The single highest-return move for most trade contractors in a storm-driven market.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank before storm season',
      blurb: "Rank for the hail-damage, HVAC-emergency, and neighborhood keywords your customers search — and build an asset you own instead of renting traffic from ads that stop when you do.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that turn post-storm researchers and HVAC-emergency callers into booked jobs — designed for Lubbock's value-conscious, bilingual, phone-first market.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions before the next storm season, and migrate it carefully so every ranking you've earned comes with you.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Lubbock?', a: "Four core services for trade contractors: web design, website redesign, SEO, and local SEO. Most Lubbock clients combine a high-converting website with SEO and local SEO so they rank for storm-season keywords, convert in English and Spanish, and own their leads instead of buying shared ones." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. In Lubbock that means we understand hail and wind damage work, extreme-heat HVAC emergencies, Texas Tech rental properties, and rural and agricultural service areas." },
    { q: 'Why does the Lubbock market need a specific approach?', a: "Three things make Lubbock distinct. First, storm-driven demand: near-annual hailstorm events and extreme seasonal temperature swings create intense, weather-tied demand spikes that reward contractors who are already visible. Second, the bilingual market: roughly 36 percent of Lubbock residents are Hispanic, and targeting Spanish-language searches is a real competitive edge most agencies skip. Third, the Texas Tech effect: 40,000 students create steady rental-property and first-time-buyer contractor work that cycles differently from the rest of the market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Lubbock areas do you serve?', a: "All of Lubbock and the surrounding communities — Tech Terrace, Wolfcamp, Maxey Park, Raintree, Wolfforth, Shallowater, Idalou, Slaton, and more. We build genuine neighborhood and surrounding-area pages rather than one generic Lubbock page, because local specificity is what earns rankings and trust." },
    { q: 'Where should I start?', a: "Start with a free Lubbock audit. We'll look at your website, your current rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next storm season — and show you whether the bilingual search gap is an opportunity for your business. No pitch deck, just a plan." },
  ],
};

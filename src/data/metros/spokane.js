// SPOKANE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Spokane's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SPOKANE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Spokane is a different game than Seattle',
  body:
    "Spokane is the Inland Northwest's largest city — roughly 230,000 people in the city, over 570,000 across the metro including Coeur d'Alene and Post Falls across the Idaho border. And unlike the rest of Washington, Spokane gets a real winter: 45-plus inches of snow a year, temperatures that drop below zero, frozen pipes, ice dams, and roof collapses. When a cold snap hits in January, a Spokane homeowner isn't thinking about rain protection — they're thinking about burst pipes and a furnace that won't start. That is the dominant demand driver here, and it looks nothing like the rainy-season markets of Seattle and Portland. On top of winter, Spokane sits downwind of eastern Washington and Idaho's wildfire country. Every August and September, smoke blankets the city, and HVAC filtration calls spike alongside it. Then there's the demographic shift: over the past decade, thousands of families and remote workers have relocated from Seattle and Portland to take advantage of Spokane's affordable housing. These transplants carry coastal incomes and expect to pay for quality contractors — they are your best customers. The Inland Northwest identity is independent and practical. Local-over-corporate preference runs deep here, and a contractor who looks and sounds like part of the community wins trust that a national franchise never earns.",
  pullQuote: 'In Spokane, the contractor who owns the map when the temperature drops below zero owns the whole busy season.',
  donut: {
    title: 'Annual snowfall vs. rain events',
    value: 45,
    centerLabel: 'annual snow inches',
    legend: [
      { label: 'Snow (inches)', pct: 45, kind: 'teal' },
      { label: 'Rain events', pct: 55, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Spokane',
  seasonCaption: 'Winter snow/heating (Nov–Mar) and wildfire smoke (Aug–Sep)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 92, peak: true }, { m: 'M', v: 62 },
    { m: 'A', v: 48 }, { m: 'M', v: 50 }, { m: 'J', v: 55 }, { m: 'J', v: 60 },
    { m: 'A', v: 82, peak: true }, { m: 'S', v: 78, peak: true }, { m: 'O', v: 54 },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '570K+', label: 'people across the Spokane–Coeur d\'Alene metro' },
    { value: '45"+', label: 'of snow per year — frozen pipes, ice dams, roof collapses', accent: true },
    { value: 'Aug–Sep', label: 'wildfire smoke season, when HVAC filtration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks when a homeowner searches in a crisis' },
  ],
  neighborhoods: [
    'South Hill', 'Browne\'s Addition', 'Manito', 'Perry District', 'Liberty Lake',
    'Airway Heights', 'Cheney', 'Post Falls', 'Coeur d\'Alene', 'North Spokane',
    'Spokane Valley', 'West Central', 'Five Mile Prairie', 'Mead', 'Millwood',
  ],
};

const AREAS = [
  'South Hill', 'Browne\'s Addition', 'Manito', 'Perry District', 'Liberty Lake',
  'Airway Heights', 'Cheney', 'Spokane Valley', 'North Spokane', 'West Central',
  'Post Falls', 'Coeur d\'Alene', 'Five Mile Prairie', 'Mead', 'Millwood',
];

const FOUNDER =
  "Here's the honest version: I started OnwardCraft because I kept watching solid contractors hand Angi and HomeAdvisor hundreds a month for shared leads that two or three competitors also bought — in a market where the best customers are the Seattle transplants who already know the value of quality work and are ready to pay for it. You can't build a business on rented leads. So that's the whole point of what we do — get you ranking and converting for the work you actually want, in the Spokane neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the Inland Northwest seasons',
    body: "Spokane's demand drivers are frozen pipes in January, roof collapses after a heavy snow, furnace failures at 2 a.m., and wildfire smoke pushing homeowners to call about air quality. We build your local presence around the real reasons Spokane homeowners search — not Seattle's rain-focused playbook.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners that your two closest competitors also bought, in a market where the best clients — the Seattle and Portland transplants — already expect to go straight to the source.",
  },
  {
    title: 'We actually speak Spokane',
    body: "South Hill, Browne's Addition, Perry District, Liberty Lake, and across the Idaho border to Coeur d'Alene and Post Falls. The local-over-corporate preference is real here, and we build content that reads like a neighbor, not a national franchise — the stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Spokane contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a calendar that fills up every November before the real cold hits — and in a market where winter demand is sudden and intense, being visible before the freeze matters more than catching up after. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Spokane', state: 'Washington', stateAbbr: 'WA', metro: 'Spokane',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const spokaneLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'spokane', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Spokane Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Spokane and three businesses show up on the map. We get you into those three before the snow hits, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Spokane, WA',
    h1: 'When Spokane searches for what you do in a cold snap, be the first name they find',
    h2Exact: 'Spokane Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In Spokane, winter emergencies arrive fast and homeowners grab the first number they see. We get you into that top three for your neighborhoods before the freeze — so the call lands with you, not whoever ranked first.",
    primaryCta: 'Get my free Spokane audit',
    intro:
      "Spokane local SEO comes down to one thing: when a homeowner on South Hill or in Liberty Lake searches your service plus \"near me\" at 10 p.m. in January, are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Spokane is a distinct market — real winters with 45-plus inches of snow, wildfire smoke driving HVAC demand every August, and a wave of Seattle transplants who are used to paying for quality contractors. Becoming the name that owns those searches, in the neighborhoods you actually serve, is the whole game.",
    aioQuestion: 'How do Spokane businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Spokane neighborhoods. In Spokane, the winners rank for winter emergency searches before the cold hits, show up for wildfire-smoke HVAC queries in August, and have the reviews and neighborhood pages to win the trust of cost-conscious transplants who comparison-shop before they call.",
    problemHeading: "If your phone is quiet when it should be ringing, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map during Spokane winters', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? When temperatures drop below zero and a Spokane homeowner needs a plumber at midnight, they tap one of those three — fast. If you're not in that group, it almost doesn't matter how good your work is. Getting into that top three before November is the single highest-return move most Spokane contractors can make, because once the season hits there's no time to climb." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Spokane homeowner to three contractors, then bill each of you to fight over them. The best customers — the Seattle and Portland transplants with real budgets — often go straight to Google and pick the contractor who looks most credible. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible during the two biggest demand spikes of the year", body: "Winter is Spokane's dominant contractor season — frozen pipes, roof loads, heating failures. August and September bring wildfire smoke and a wave of HVAC filtration calls. The contractors who rank for those terms before the spike happens are the ones who book that work. If your local SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table every year." },
    ],
    servicesHeading: 'What it actually takes to rank you in Spokane',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Spokane searches you should win — including the winter emergency terms that matter most here." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing — including the local Spokane and Coeur d'Alene directories that matter in the Inland Northwest." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. The Seattle transplants especially rely on reviews before they call. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for South Hill, Browne's Addition, Perry District, Liberty Lake, Coeur d'Alene, and more — so you rank for the neighborhood someone's actually searching, not just \"Spokane.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Spokane and Inland Northwest sources Google trusts — local press, chambers, trade associations, partners. This is what separates page one from page two in a regional market." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for winter heating, frozen pipe, and wildfire HVAC searches before the season hits — so you're visible when demand spikes, not scrambling after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Spokane neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks — in time for the season that matters." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now — before November, not after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across South Hill, Liberty Lake, Coeur d'Alene, and the rest, plus the on-page work and seasonal content to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or season." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Spokane neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: "For contractors who want to own the map across Spokane and into Coeur d'Alene.", features: ['Everything in Local Growth', 'Local link building', 'Seasonal & emergency SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Spokane?', a: "Most Spokane engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Spokane keywords usually take 90 to 180 days of steady work. In Spokane that means starting well before winter — anyone promising you page one in 30 days is selling you something." },
      { q: "What makes Spokane local SEO different from Seattle?", a: "The demand drivers are completely different. Spokane gets real winter — 45-plus inches of snow, sub-zero temperatures, frozen pipes, and heating failures. Those are the emergency searches that define the busy season here. Wildfire smoke in August and September drives a second demand spike for HVAC filtration. And the best customers are often Seattle and Portland transplants with real budgets who go to Google first and pick by reviews and credibility." },
      { q: 'Do you cover Coeur d\'Alene and Post Falls?', a: "Yes. Many Spokane contractors serve the Idaho side of the border — Coeur d'Alene, Post Falls, and surrounding areas. We build your Map Pack presence and neighborhood pages to cover the full Inland Northwest market you actually serve." },
      { q: 'Which Spokane areas do you target?', a: "South Hill, Browne's Addition, Manito, Perry District, Liberty Lake, Airway Heights, Cheney, Spokane Valley, North Spokane, West Central, and across the border to Coeur d'Alene and Post Falls. We build genuine neighborhood pages instead of one generic Spokane page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Spokane's winter emergencies, the wildfire smoke season, and the practical, local-over-corporate buyers who make up the Inland Northwest market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work — especially from well-researched transplants with real budgets — comes to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Spokane neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'spokane', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Spokane SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Spokane SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for Inland Northwest winters and wildfire season. Free audit.',
    eyebrow: 'SEO Services · Spokane, WA',
    h1: 'Get your Spokane business to the top of Google before the busy season hits',
    h2Exact: 'Spokane SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Spokane customers search and the leads keep coming — including during the winter surge and wildfire smoke season when demand spikes and the phone should be ringing. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Spokane SEO audit',
    intro:
      "Spokane SEO comes down to one question: when a homeowner on South Hill or in Coeur d'Alene searches your service, are you on page one or page two? Page two might as well be page fifty. In a regional market defined by intense seasonal demand — real winter, real snow, real wildfire smoke — the contractors who rank before the season starts book it. We get Spokane tradespeople ranking for the money keywords that bring in actual work, and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Spokane businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Spokane neighborhoods, and earning links from trusted Inland Northwest sources. In Spokane, ranking for winter emergency and heating terms before November — and for wildfire HVAC and air-quality terms before August — is the difference between a full calendar and a slow season.",
    problemHeading: "Three reasons your Spokane site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when the season hits", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where demand is sudden and weather-driven, the contractors already on page one get every call when the pipes freeze. If you're not in the top handful of results before winter, your site is basically invisible during your busiest weeks." },
      { title: "You're renting traffic instead of owning it", body: "Ads can work, but the moment your card stops, the leads stop. Spokane clicks aren't as expensive as Seattle, but SEO builds an asset you keep: rankings that produce leads for months and years after the work is done, at a fraction of the per-lead cost of rented platforms." },
      { title: "You're not ranking for the seasonal demand that defines this market", body: "Spokane demand swings hard with the calendar — heating and pipe emergencies from November through March, wildfire HVAC filtration in August and September. Ranking for those terms takes months to build, so you have to be in place before the season, not chasing it. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table every year." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Spokane',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Spokane customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including the winter and wildfire-season content Spokane homeowners actually need." },
      { name: 'Link building', desc: "Authority from real Spokane and Inland Northwest sources. Local press, chambers, trade associations, and regional partners — what separates page one from page two in a regional market." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for Spokane's winter heating, frozen-pipe, and wildfire-smoke HVAC searches so you're visible before demand spikes, not scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Spokane leads — prioritizing the seasonal terms that define the busy season." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the winter emergency and wildfire-season terms that Spokane homeowners actually search." },
      { name: 'Build authority', desc: "Links and citations from trusted Spokane and Inland Northwest sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or season." },
    ],
    pricing: {
      heading: 'Transparent Spokane SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: "For businesses that want to own Spokane and Coeur d'Alene search.", features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-area / service expansion', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Spokane?', a: "Most Spokane SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Spokane?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. In Spokane that means starting well before the winter heating season so you're already ranking when demand spikes. SEO compounds, so the gains build the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Spokane contractors do best running SEO as the long-term engine and ads for short-term gaps." },
      { q: 'Why is seasonal SEO so important in Spokane?', a: "Spokane's market is defined by two demand spikes: winter (November through March) when frozen pipes, heating failures, and snow-load roofing calls surge, and wildfire smoke season (August–September) when HVAC filtration demand spikes. Ranking takes months to build, so you have to be in position before those seasons arrive. We build that foundation ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO and AI-search optimization. We confirm exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Do you cover Coeur d\'Alene and Post Falls?', a: "Yes. We build content and local SEO for the full Inland Northwest market — Spokane, the Valley, Liberty Lake, and across the Idaho border to Coeur d'Alene and Post Falls." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search results." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The Seattle and Portland transplants who've moved to Spokane especially tend to go straight to Google and pick the most credible result — those are the high-value leads you want to own." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'spokane', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Spokane Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      "Spokane web design that turns visitors into booked jobs — fast, mobile-first sites built for Inland Northwest contractors. Transparent pricing, you own it. Free quote.",
    eyebrow: 'Web Design · Spokane, WA',
    h1: 'Spokane web design that turns visitors into booked jobs',
    h2Exact: 'Spokane Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Spokane contractors fast, mobile-first sites engineered to turn visitors into booked work — sites that look and sound like a trusted local business, not a national franchise template, because that's what wins trust in the Inland Northwest.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Spokane contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that tells a South Hill homeowner you actually serve their street. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors into booked jobs — designed for a regional market where seasonal demand is intense and the best customers have coastal standards and local values.",
    aioQuestion: 'What makes a good contractor website in Spokane?',
    aioAnswer:
      "A good Spokane contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. In Spokane, the best customers — many of them Seattle and Portland transplants — comparison-shop online before they call. A site that looks professional, names South Hill and Liberty Lake and Coeur d'Alene, and makes it obvious how to reach you is the difference between getting the call and losing it to the next result.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result — and in Spokane the Seattle transplants who make the best customers are used to doing their homework online. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Spokane visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. When demand is weather-driven and urgent, you can't afford to lose a visitor who's already found you." },
      { title: "It doesn't say you're a Spokane business", body: "A homeowner in Perry District or Liberty Lake wants to see you serve their area — not a generic Washington page that could be anybody in the state. We build sites that name the Spokane neighborhoods and Inland Northwest communities you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Spokane website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the Inland Northwest identity that wins trust here — practical and professional, not flashy." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Spokane traffic is, including the urgent winter-emergency calls you most want to capture." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious Spokane homeowners — including the transplants from Seattle and Portland who already know the value of quality work and are ready to pay for it." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for South Hill, Browne's Addition, and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Spokane neighborhoods and Inland Northwest communities you actually serve — South Hill, Liberty Lake, Coeur d'Alene, Post Falls — so you stand out instead of blending in.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors — including what the Spokane market actually values — then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells — clear, practical, and specific to Spokane — with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Spokane web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services or areas.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: "A full custom build for multi-service contractors or those serving Spokane and Coeur d'Alene.", features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Spokane?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will the site help me win customers in Spokane's seasonal market?", a: "That's the whole point. We build around the specific neighborhoods and seasons that drive Spokane demand — with pages and copy that speak to winter emergencies and wildfire-season HVAC, and a fast load time so visitors don't bounce when they're searching in a hurry." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Spokane terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Spokane traffic comes from — including the urgent searches that happen when a pipe freezes or a furnace fails at night." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Spokane contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'spokane', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Spokane Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      "Redesign your Spokane website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before winter hits. Free audit.",
    eyebrow: 'Website Redesign · Spokane, WA',
    h1: 'Redesign your Spokane website without losing your rankings',
    h2Exact: 'Spokane Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, nothing that tells a Spokane homeowner you're their local contractor. We redesign Inland Northwest contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned before the next busy season.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Spokane contractor sites for speed and conversions — built for the seasonal demand spikes and the practical Inland Northwest buyers who do their research before they call — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in Spokane, where seasonal demand comes on fast and you can't afford a traffic dip heading into winter.",
    problemHeading: "Signs your Spokane site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "The Seattle and Portland transplants who've moved to Spokane for affordable housing still have coastal standards. They research contractors online before they call, and an old, cluttered site sends them to a competitor who looks more established — even when your work is better. In Spokane's practical market, a site that looks trustworthy matters more than most contractors realize." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Spokane visitors before they ever see your offer. That includes the late-night emergency searches when a pipe freezes or a furnace quits. A redesign built mobile-first wins those visitors back." },
      { title: "It blends in and doesn't speak to your market", body: "A generic contractor site doesn't tell a South Hill homeowner you serve their street, and it doesn't tell a Coeur d'Alene homeowner you'll cross the border. We rebuild for the specific neighborhoods you serve and the seasonal urgency that drives Spokane demand, so the new site turns the right visitors into calls." },
    ],
    servicesHeading: "What's in an OnwardCraft Spokane redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow load, weak conversion, or generic content — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've earned — critical if you're heading into winter and can't afford a drop." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and essential for capturing mobile emergency searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Spokane traffic lives — including the urgent calls that happen when the weather turns." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that reflects the quality of your work and earns the confidence of Inland Northwest buyers who value competence over flash." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Spokane neighborhoods and Inland Northwest communities you serve — South Hill, Liberty Lake, Coeur d'Alene, and the rest — so the new site stands out and ranks for the right local searches.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with timing in mind if you're approaching Spokane's busy winter season." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for the Inland Northwest market. You review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Spokane redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Spokane contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: "A complete rebuild for multi-service or Spokane–Coeur d'Alene operations.", features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Spokane?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which matters especially in Spokane if you're going into it before winter." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't speaking to Spokane buyers, or isn't bringing in leads before the winter season, it's costing you work. The free audit tells you plainly whether a redesign is worth it and what it'll fix." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: "Will the redesign help me compete in Spokane's seasonal market?", a: "Yes, and that's the point. We rebuild around the specific neighborhoods you serve and the seasonal urgency that defines this market — practical, credible, and fast on a phone — so the new site converts the right buyers when demand spikes." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — essential for capturing the urgent mobile searches that happen when the temperature drops or the smoke rolls in." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan — before you spend a dollar." },
    ],
  },
];

export const spokaneCity = {
  citySlug: 'spokane', city: 'Spokane', state: 'Washington', stateAbbr: 'WA', metro: 'Spokane',

  titleTag: 'Spokane Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    "Web design, SEO, and local SEO for Spokane contractors. Get found before winter hits, own your leads instead of renting them — built for the Inland Northwest. Free Spokane audit.",

  eyebrow: 'Spokane · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Spokane contractors found before the season hits',
  h2Exact: 'Spokane Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the Inland Northwest — real winters, wildfire smoke season, and buyers who value local over corporate. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Spokane audit',

  intro:
    "If you run a contracting business in Spokane, your busy season doesn't creep up — it arrives fast when the temperature drops, and the contractors already ranking on Google are the ones who book it. Winning here takes three things working together: a site that converts the practical Inland Northwest buyer, SEO that ranks you for what people search before the snow hits, and local SEO that puts you in the Map Pack for the neighborhoods you actually serve — from South Hill to Coeur d'Alene. Here's how we help Spokane contractors do exactly that.",
  aioQuestion: 'How do Spokane contractors get more leads online?',
  aioAnswer:
    "Spokane contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. In Spokane, the key is ranking for winter emergency and heating terms before November — and for wildfire HVAC and air-quality terms before August — so you're visible when demand spikes, not scrambling to catch up.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Spokane searches \"near me\" — before the winter busy season. The single highest-return move for most Inland Northwest contractors.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank before the season hits',
      blurb: "Rank for the money keywords your Spokane customers search — winter emergencies, HVAC filtration, roofing — build an asset you own instead of renting traffic from ads, and measure it in leads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that turn visitors into booked jobs — designed for Inland Northwest buyers who value local credibility over flash, and engineered to capture urgent seasonal searches.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions before the next busy season, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Spokane?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — with timing that gets them visible before Spokane's winter busy season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Spokane's winter emergencies, wildfire-smoke HVAC demand, and the practical Inland Northwest buyer." },
    { q: "Why does Spokane's market need a different approach than Seattle?", a: "Spokane's demand drivers are completely different. Real winters with 45-plus inches of snow mean frozen pipes, heating failures, and roof collapses define the busy season. Wildfire smoke drives HVAC filtration demand every August. And the best customers — many of them Seattle and Portland transplants — have coastal income and high standards and go to Google first. Winning means ranking for those seasonal and emergency terms before they matter, with content that sounds like a local business, not a national template." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Spokane areas do you serve?', a: "South Hill, Browne's Addition, Manito, Perry District, Liberty Lake, Airway Heights, Cheney, Spokane Valley, North Spokane, West Central, and across the Idaho border to Coeur d'Alene and Post Falls. We build genuine neighborhood pages for the areas you actually work." },
    { q: 'Where should I start?', a: "Start with a free Spokane audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next busy season. No pitch deck, just a plan." },
  ],
};

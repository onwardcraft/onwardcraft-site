// TUCSON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Tucson's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// TUCSON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Tucson is a two-season street fight',
  body:
    "Tucson sits at the edge of the Sonoran Desert at 2,400 feet, and the climate runs the contractor market like a metronome. Summer heat pushes past 105°F from June through September — that's when HVAC emergency calls flood in, flat roofs blister, and any AC unit on borrowed time gives up. Then the Arizona monsoon rolls through July to September with violent afternoon storms that drop two inches in an hour, flood streets, strip stucco, buckle flat roofs, and wash out desert landscaping. Two distinct contractor seasons in one city, both with huge demand spikes, and contractors who aren't ranking before each one hits miss most of the calls. The other thing that shapes Tucson: roughly 43% of the metro is Hispanic, and Tucson's border proximity and deep Sonoran Desert heritage make Spanish-language search more significant here than in almost any other mid-sized market in the country. Then there's the University of Arizona — 50,000 students and a large young-professional population create a constant rental market that keeps landlords calling contractors year-round. And Tucson draws retirees: Sun City Vistoso, Saddlebrooke, and Green Valley bring high-income buyers with real renovation budgets who research carefully before they call. Contractors who understand desert architecture — flat roofs, adobe, stucco, and Southwestern construction — win work that generic national chains don't know how to bid.",
  pullQuote: 'In a desert city with two contractor seasons, a multilingual market, and retirees who research before they call — visibility before the spike is the whole game.',
  donut: {
    title: 'How Tucson searches',
    value: 43,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 43, kind: 'teal' },
      { label: 'Other', pct: 57, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'HVAC demand Jun–Sep (extreme heat) and monsoon storm damage Jul–Sep',
  seasonalDemand: [
    { m: 'J', v: 42 }, { m: 'F', v: 45 }, { m: 'M', v: 52 },
    { m: 'A', v: 60 }, { m: 'M', v: 72 }, { m: 'J', v: 95, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 98, peak: true },
    { m: 'S', v: 90, peak: true }, { m: 'O', v: 58 },
    { m: 'N', v: 48 }, { m: 'D', v: 40 },
  ],
  stats: [
    { value: '~1.1M', label: 'people in the greater Tucson metro' },
    { value: '~43%', label: 'of residents identify as Hispanic — Spanish-language search matters here', accent: true },
    { value: 'Jun–Sep', label: 'HVAC and monsoon season — the highest-demand stretch of the year' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks' },
  ],
  neighborhoods: [
    'Sam Hughes', 'Armory Park', 'Barrio Viejo', 'Catalina Foothills', 'Marana',
    'Sahuarita', 'Oro Valley', 'Vail', 'Green Valley', 'Saddlebrooke',
    'Midtown', 'Rincon Valley', 'Civano', 'Rita Ranch', 'Flowing Wells',
  ],
};

const AREAS = [
  'Tucson', 'Oro Valley', 'Marana', 'Sahuarita', 'Green Valley',
  'Vail', 'Saddlebrooke', 'Catalina Foothills', 'Sam Hughes', 'Armory Park',
  'Barrio Viejo', 'Rincon Valley', 'Rita Ranch', 'Flowing Wells', 'Civano',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Tucson is a market with two hard demand seasons, a large Spanish-speaking population, and retirees who do serious research before they call — that's a combination most national agencies ignore completely. We get you ranking before the heat spikes and the monsoon hits, so the calls land with you instead of whoever showed up first. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand flat-roof monsoon damage, pre-season HVAC rushes, and desert construction — so everything we build is shaped around how Tucson customers actually search and when.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners who also got called by three of your competitors.",
  },
  {
    title: 'We actually speak Tucson',
    body: "Neighborhood-by-neighborhood targeting from Sam Hughes to Saddlebrooke, Spanish-language reach for a market that's 43% Hispanic, and a seasonal strategy built around the heat and monsoon spikes — the stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Tucson contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out monsoon season — and being visible before June hits is what determines who gets the emergency HVAC calls when the heat peaks. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Tucson', state: 'Arizona', stateAbbr: 'AZ', metro: 'Tucson',
  heroProof: ['Built for the trades', 'Desert-market specialists', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const tucsonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'tucson', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Tucson Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Tucson and three businesses show up on the map. We get you into those three before the heat season and monsoon hits. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Tucson, AZ',
    h1: 'When Tucson searches for what you do, be the first name they find',
    h2Exact: 'Tucson Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market split between two contractor seasons, a 43% Hispanic population, and retirees who research before they call — we get you into that top three for your neighborhoods so the work lands with you.",
    primaryCta: 'Get my free Tucson audit',
    intro:
      "Tucson local SEO comes down to one thing: when a homeowner in Oro Valley or Sam Hughes searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Tucson has two brutal demand windows — the June-through-September heat that drains every aging HVAC unit and the monsoon storms that wreck roofs and foundations — and the contractors already in the Map Pack before those windows open are the ones who answer the phones when the calls flood in. Here's how you get into those three spots.",
    aioQuestion: 'How do Tucson businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Tucson neighborhoods — Sam Hughes, Catalina Foothills, Marana, Saddlebrooke, and the rest. Tucson's 43% Hispanic population means Spanish-language search matters more here than in most mid-sized cities, and the two-season demand calendar means you have to be in place before June and before monsoon — not scrambling to rank while the spikes are already happening.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your flat-roof repair or HVAC work is — most people never see your name. Getting into that top three for your Tucson neighborhoods, especially before the June heat and the July monsoon, is usually the single highest-return move a local contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Tucson homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — especially valuable in a market where a single HVAC or roof job can be a multi-thousand-dollar ticket." },
      { title: "You're invisible to 43% of the market", body: "Roughly 43% of Tucson residents are Hispanic, and many search in Spanish — especially for trades. Most contractors do nothing to show up for those searches, so the demand sits unclaimed. Targeting the right neighborhoods and adding Spanish-language reach is how you win buyers your competitors ignore entirely, and in a city Tucson's size that's not a rounding error." },
    ],
    servicesHeading: 'What it actually takes to rank you in Tucson',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Tucson searches — summer heat, monsoon damage, retirement-community renovations — you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Tucson and the surrounding communities." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and reassures the careful research retirees in Green Valley and Saddlebrooke do before they call anyone." },
      { name: 'Neighborhood pages', desc: "Real pages for Sam Hughes, Catalina Foothills, Oro Valley, Marana, Green Valley, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Tucson.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Tucson sources Google trusts — local press, HOAs, trade associations, partners. This is what separates page one from page two." },
      { name: 'Spanish-language reach', desc: "With 43% of Tucson identifying as Hispanic, Spanish-language search is a real market most competitors ignore. We help you show up for the demand hiding in plain sight.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you — especially for desert-specific services most AI results handle poorly.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Tucson and its suburbs and pin down which competitors are beating you in the Map Pack and why — including whether they're winning the pre-monsoon and pre-heat searches." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, and a healthy review count is especially important for the retiree segment that researches carefully." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Tucson's distinct communities, plus the on-page work to back them up and the seasonal framing that ranks you before demand spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or service." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Tucson Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Tucson neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the Tucson map — including Spanish-language search.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Tucson?', a: "Most Tucson engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Tucson keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something. The right time to start is before June or before monsoon season — not during them." },
      { q: 'What makes Tucson local SEO different from other markets?', a: "Three things: Tucson has two hard demand seasons (summer heat and monsoon storms) that you need to rank for before they hit. About 43% of the metro is Hispanic, making Spanish-language search unusually significant for a city this size. And the retirement communities — Green Valley, Saddlebrooke, Sun City Vistoso — are a high-value segment that researches carefully, so your review count and profile quality matter more here than in most markets." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Tucson that's a real edge. With roughly 43% of residents identifying as Hispanic and Tucson's proximity to the border, Spanish-language search is a large, undercaptured audience. We can optimize your profile and content to show up for those searches across neighborhoods where most contractors are invisible." },
      { q: 'Which areas do you cover in Tucson?', a: "All of the greater Tucson metro — Oro Valley, Marana, Sahuarita, Green Valley, Vail, Saddlebrooke, Catalina Foothills, Sam Hughes, Armory Park, Barrio Viejo, and more. We build genuine neighborhood pages instead of one generic Tucson page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand flat-roof monsoon damage, pre-season HVAC tune-up demand, adobe and stucco repairs, and desert construction — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now. We structure your content and schema so those engines can read, trust, and cite your business — particularly for desert-specific services where AI results are often thin or generic." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads that your competitors also bought. We build rankings, a Google profile, and a review base that send leads straight to you. In a seasonal market like Tucson, once you own the Map Pack for your category, you stop chasing leads — they come to you before and during the heat and monsoon windows." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Tucson and its suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'tucson', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Tucson SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Tucson SEO that ranks contractors on Google before the heat and monsoon seasons — leads you own, not leads you rent. Revenue-tied reporting, no lock-in. Free Tucson SEO audit.',
    eyebrow: 'SEO Services · Tucson, AZ',
    h1: 'Get your Tucson business to the top of Google and keep it there',
    h2Exact: 'Tucson SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Tucson customers search — HVAC in the June heat, roof repair after the monsoon, bathroom remodels for Catalina Foothills retirees — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Tucson SEO audit',
    intro:
      "Tucson SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well not exist. In a desert market with two hard demand windows and a large Spanish-speaking population, ranking for the right terms at the right time is what fills your calendar during Tucson's busiest weeks. We get contractors there — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Tucson businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Tucson neighborhoods and the city's two demand seasons, and earning links from trusted local sources. In a market this seasonal, ranking for monsoon roofing, summer HVAC, and desert construction terms before the spikes arrive is the quickest way to pull ahead — because SEO takes months to build, and you can't start in July and expect to catch the monsoon calls that same month.",
    problemHeading: "Three reasons your Tucson site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and in Tucson's smaller market, the contractors on page one tend to stay there once they've established authority. If you're not in the top results for what you sell, your site is basically invisible — no matter how well-reviewed your work is in person." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget stops, the leads stop. And in a seasonal market, you end up paying premium per-click prices right when every competitor is also running heat-season or monsoon-season campaigns. SEO builds an asset you own: rankings that keep producing leads months after the work is done, at a fraction of the per-lead cost during peak season." },
      { title: "You're missing the seasonal searches that matter most", body: "Tucson demand swings hard with the calendar: HVAC emergencies spike from June through September, monsoon storm damage sends homeowners searching in July and August, and retirement-community renovations in Green Valley and Saddlebrooke tend to cluster in the cooler months. Contractors who rank for those searches ahead of time catch the wave. If your SEO ignores seasonal intent, you're leaving your highest-revenue weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Tucson',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — including the mobile performance that matters for searchers in the field." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Tucson customers search — titles, headings, content, and internal links — with seasonal framing baked in." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search in Tucson — desert roofing, monsoon prep, flat-roof repair, HVAC efficiency in 105-degree heat. Content that earns links and brings in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Tucson and industry sources. Links from local press, HOAs, trade associations, and partners are often what separate page one from page two in a mid-sized market like this." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Tucson neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth in Tucson's seasonal market." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the summer HVAC searches, monsoon roofing and foundation queries, and cold-season renovation terms — in place before the season opens, not scrambling to catch up after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you for Tucson-area searches — particularly for desert-specific services where AI results are often thin.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Tucson leads — including the seasonal and Spanish-language terms your competitors aren't chasing." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content built around Tucson's two demand seasons, desert architecture specifics, and the neighborhoods where your best customers live." },
      { name: 'Build authority', desc: "Links and citations from trusted Tucson and industry sources to push competitive keywords onto page one and keep them there through the high-demand seasons." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or service area." },
    ],
    pricing: {
      heading: 'Transparent Tucson SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Tucson site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Tucson neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: "For businesses that want to own Tucson search — including seasonal and Spanish-language.", features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Spanish-language / multi-neighborhood', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Tucson?', a: "Most Tucson SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Tucson?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Seasonal keywords can kick in faster if you start the work far enough before the season. The right move for a Tucson HVAC or roofing company is to start SEO in late winter, not in June when the calls are already coming in." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and in a seasonal market every contractor is running campaigns at the same time, which drives up click costs. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Tucson contractors do best running SEO as the long-term engine and ads for short bursts around peak season." },
      { q: 'Should my Tucson SEO target seasonal demand?', a: "Absolutely. Tucson has two hard demand windows — June through September for HVAC and July through September for monsoon storm damage. Ranking takes months to build, so you have to be in place before those seasons open. We build your content and on-page strategy around those terms so you're visible when the calls spike." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency SEO and AI-search optimization for Tucson-specific terms. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — especially important for desert-specific services where AI results tend to be generic or thin." },
      { q: 'Which Tucson areas do you cover?', a: "The full greater Tucson metro — Oro Valley, Marana, Sahuarita, Green Valley, Vail, Saddlebrooke, Catalina Foothills, Sam Hughes, Armory Park, Barrio Viejo, and more. We build genuine neighborhood and service-area pages rather than a single generic Tucson page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In a seasonal market like Tucson, once you own organic and Map Pack visibility for your category, you stop paying for shared leads during the windows when demand is highest — which is exactly when the per-lead cost from those platforms is at its peak too." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business and your peak seasons. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'tucson', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Tucson Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Tucson web design that turns visitors into booked jobs — fast, mobile-first sites built for desert contractors, seasonal demand, and a bilingual market. Transparent pricing. Free quote.',
    eyebrow: 'Web Design · Tucson, AZ',
    h1: 'Tucson web design that turns visitors into booked jobs',
    h2Exact: 'Tucson Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Tucson contractors fast, mobile-first sites engineered to convert visitors into booked work — and to speak to a market that includes Spanish-speaking homeowners, careful-researching retirees, and landlords managing University of Arizona rentals.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Tucson contractor websites lose leads quietly: slow on a phone, buried call button, nothing that speaks to the specific needs of desert homes or the communities you actually serve. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Sam Hughes to Saddlebrooke into booked jobs — with the seasonal messaging and local specificity that make a Tucson homeowner trust you over a generic national chain.",
    aioQuestion: 'What makes a good contractor website in Tucson?',
    aioAnswer:
      "A good Tucson contractor website loads in under three seconds on a phone, leads with a clear offer that speaks to desert home needs — flat roofs, stucco, HVAC in 105-degree heat, monsoon prep — and names the specific Tucson neighborhoods and suburbs it serves. Because Tucson's market includes a large Spanish-speaking population and a retirement segment that researches carefully before calling, a strong site also carries credible reviews and is structured to build trust before asking for a call. Mobile speed and a clear next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no seasonal messaging about monsoon prep or summer HVAC, no obvious reason to call you over the contractor two results above you. We design every page around one job: turning a Tucson visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Tucson visitors are on mobile, and they bounce if your site takes more than a few seconds to load. This is especially painful during heat and monsoon spikes when people are searching in distress and have no patience for a slow site. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to Tucson or desert homes", body: "A homeowner in Catalina Foothills asking about flat-roof repairs wants to see that you understand Sonoran Desert construction — not a generic \"any city\" page that says nothing specific. A retiree in Green Valley wants to see reviews and a professional site that earns trust. We build for your actual market, not a national template." },
    ],
    servicesHeading: "What's in an OnwardCraft Tucson website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Tucson neighborhoods, and the desert-specific jobs you actually want to win." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Tucson traffic is — especially during heat and monsoon emergencies when people search in a hurry." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step that's easy to take from a phone in 105-degree heat." },
      { name: 'Copy that sells', desc: "Words that speak to Tucson homeowners — desert construction, seasonal prep, bilingual trust signals — not filler text that reads like a national template." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank in Tucson — clean structure, schema, fast load, and neighborhood-ready pages for the communities you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings during the high-demand windows." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Catalina Foothills, Oro Valley, Green Valley, Saddlebrooke, and the rest — so you stand out for the community someone's actually searching, not just a generic Tucson page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more Tucson homeowners begin their contractor research in AI tools.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Tucson service areas, your best jobs, and your competitors — including how to speak to the retirement market, the University of Arizona rental landlords, and the Spanish-speaking homeowners who make up a big slice of demand here." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with desert-specific language, seasonal messaging, and a call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — including tracking seasonal traffic patterns across Tucson's two demand windows." },
    ],
    pricing: {
      heading: 'Transparent Tucson web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Tucson contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Tucson contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Tucson businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Tucson?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage. If you want to be live before monsoon or before the June heat rush, we plan backward from those dates." },
      { q: "Will my site speak to Tucson's specific market?", a: "That's the whole point. We write for desert construction — flat roofs, adobe, stucco, HVAC in extreme heat — and we build around the communities you serve, whether that's retirement-heavy Green Valley, the University of Arizona rental market, or the Spanish-speaking homeowners across the metro. A generic template doesn't do any of that." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb competitive Tucson terms and show up before the demand seasons." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Tucson traffic comes from — especially during emergencies when someone's AC just gave out and they're searching in a hurry." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Tucson contractor site should include — seasonal messaging, neighborhood targeting, trust signals for retirees and Spanish-speaking homeowners — and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'tucson', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Tucson Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Tucson website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — built for desert contractors and seasonal demand. Free audit.',
    eyebrow: 'Website Redesign · Tucson, AZ',
    h1: 'Redesign your Tucson website without losing your rankings',
    h2Exact: 'Tucson Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow on a phone, generic messaging that could be any city, no seasonal urgency for the HVAC and monsoon calls that drive your busiest months. We redesign Tucson contractor sites to convert more, load faster, and speak to your actual market, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings drop overnight. We do neither. We redesign Tucson contractor sites for speed and conversions — with the desert-specific messaging and neighborhood targeting that turns a generic site into a market-specific lead engine — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them, because the new site is faster, mobile-first, and better structured for the specific Tucson searches — seasonal HVAC, monsoon damage, desert construction — that drive your work.",
    problemHeading: "Signs your Tucson site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Retirees in Saddlebrooke and Catalina Foothills are high-value clients — but they're careful researchers. An old, cluttered site sends them to a competitor who looks more professional in seconds, even when your work is better. First impressions in a high-ticket market are expensive to get wrong." },
      { title: "It's slow and hard to use on a phone", body: "When someone's AC dies in 105-degree heat or their flat roof is leaking during a monsoon, they're searching from their phone in an emergency. If your site is slow or hard to navigate, you've already lost that lead. A mobile-first redesign wins those calls back." },
      { title: "It says nothing specific about Tucson or desert homes", body: "A generic site that could be anywhere doesn't build trust with homeowners who want a contractor who understands adobe, stucco, flat roofs, and desert construction. And it won't rank for the specific Tucson neighborhood searches that drive real work. We rebuild to say something specific about where you work and what you do there." },
    ],
    servicesHeading: "What's in an OnwardCraft Tucson redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — slow load, weak calls to action, generic messaging — so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned heading into peak season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, seasonal urgency messaging, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and Core Web Vitals — especially important during peak demand when emergency searchers have zero patience for a slow site." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Tucson emergency searches originate during heat and monsoon events." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the confidence of careful-researching retirees and high-ticket renovation clients." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Tucson communities you serve — Catalina Foothills, Oro Valley, Green Valley, Sam Hughes, Marana — with desert-specific messaging that resonates where a generic city page doesn't.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you for Tucson searches as more homeowners start their contractor research in AI tools.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — including whether your site is positioned to capture seasonal demand before the heat and monsoon arrive — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Tucson's market — desert construction credibility, neighborhood specificity, trust signals for retirees. You review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, prepare every redirect and SEO detail for a clean migration, and add the seasonal and local messaging the old site lacked." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — timed whenever possible to land before your next demand season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, tracking how the site performs across Tucson's two seasonal demand windows." },
    ],
    pricing: {
      heading: 'Transparent Tucson redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Tucson contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Tucson contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Tucson businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Tucson?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — especially when the new site is faster and better structured for Tucson-specific searches." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. If you want to be live before the June heat or before monsoon season, we plan the timeline backward from those dates. You get firm milestones up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, says nothing specific about desert construction or Tucson communities, isn't converting seasonal demand into calls, or fails to build trust with the retirees and bilingual homeowners who are your best clients — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost heading into peak season." },
      { q: 'Will the redesign help me compete in Tucson?', a: "Yes, and that's the point. We rebuild around the specific communities you serve, add desert-construction credibility and seasonal messaging, and make the offer and call button obvious on mobile — so the new site earns the work a generic old site was letting walk out the door." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which matters especially during heat and monsoon emergencies when people are searching in distress from their phones." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix for Tucson's market, and a fixed-price quote with a timeline and a safe migration plan — including whether the timing lines up well with your seasonal demand windows." },
    ],
  },
];

export const tucsonCity = {
  citySlug: 'tucson', city: 'Tucson', state: 'Arizona', stateAbbr: 'AZ', metro: 'Tucson',

  titleTag: 'Tucson Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Tucson contractors. Rank before the heat and monsoon, reach bilingual homeowners, and own your leads instead of renting them. Free Tucson audit.',

  eyebrow: 'Tucson · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Tucson contractors found and booked',
  h2Exact: 'Tucson Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Tucson's two contractor seasons, 43% Hispanic market, and retirement communities. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Desert-market specialists', 'No lock-in contracts'],
  primaryCta: 'Get my free Tucson audit',

  intro:
    "Tucson's contractor market runs on two clocks: the summer heat that drives HVAC emergencies from June through September, and the Arizona monsoon that sends homeowners searching for roofers, waterproofers, and foundation contractors from July through September. If you're not in the Map Pack and on page one before those windows open, you're handing the calls to whoever got there first. Layer on top of that a 43% Hispanic population where Spanish-language search matters more than in almost any other mid-sized city, a University of Arizona rental market that keeps landlords calling year-round, and retirement communities full of high-value clients who research carefully before they call — and you have a market that rewards specificity and punishes generic approaches. Here's how we help Tucson contractors win it.",
  aioQuestion: 'How do Tucson contractors get more leads online?',
  aioAnswer:
    "Tucson contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Tucson's demand is concentrated in two seasonal windows and roughly 43% of residents are Hispanic, the contractors who rank for seasonal and Spanish-language searches ahead of the spikes — and who build trust with the retirement market through credible reviews and professional sites — win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map before the heat and monsoon arrive. The single highest-return move for most Tucson contractors — done neighborhood by neighborhood, in English and Spanish.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Tucson customers search — HVAC in the summer, roof repair after the monsoon, desert renovation year-round. Build an asset you own instead of renting visibility from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that speak to desert homeowners, retirees in Green Valley, and bilingual customers — engineered to turn visitors into booked jobs, not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for Tucson's market — seasonal messaging, neighborhood targeting, desert-construction credibility — and migrate it carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Tucson?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before peak season, convert better, and own their leads in a market driven by heat, monsoon, retirees, and a large bilingual population." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand flat-roof monsoon damage, desert construction, extreme-heat HVAC demand, and what it takes to earn trust with the retirement communities in Green Valley and Saddlebrooke." },
    { q: 'Why does the Tucson market need a different approach?', a: "Three reasons: Tucson has two hard contractor seasons that require you to rank before they open, not during them. About 43% of residents are Hispanic, making Spanish-language search unusually significant for a city this size. And the retirement market — Sun City Vistoso, Saddlebrooke, Green Valley — is high-value but research-driven, so your reviews and site professionalism matter more here than in a younger market. A national template handles none of that." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Tucson areas do you serve?', a: "The full greater Tucson metro — Oro Valley, Marana, Sahuarita, Green Valley, Vail, Saddlebrooke, Catalina Foothills, Sam Hughes, Armory Park, Barrio Viejo, Rita Ranch, Rincon Valley, Flowing Wells and more — with genuine neighborhood pages rather than a single generic Tucson page." },
    { q: 'Where should I start?', a: "Start with a free Tucson audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before your next demand season — whether that's the summer heat, the monsoon, or a retirement-community renovation campaign. No pitch deck, just a plan." },
  ],
};

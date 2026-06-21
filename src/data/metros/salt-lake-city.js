// SALT LAKE CITY — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Salt Lake City's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SALT LAKE CITY — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Salt Lake City is more urgent than it looks',
  body:
    "Salt Lake City sits at the epicenter of Silicon Slopes, one of the fastest-growing tech economies in the United States. Young professionals and families are flooding in, snapping up homes in a market that has appreciated dramatically over the last decade. That growth means demand for every home service is climbing fast — and it means the contractor landscape is filling in just as quickly. The homeowners here are value-conscious but willing to spend on quality: large families in Sandy and South Jordan want the job done right the first time. Two forces shape demand like no other market in the country. First, the Wasatch Fault runs directly beneath the Salt Lake Valley, creating a persistent undercurrent of earthquake-preparedness anxiety. Foundation inspection, structural retrofitting, and seismic upgrades are conversations every homeowner here will eventually have. Second, the geography creates a brutal winter inversion season from roughly November through March — cold air traps smog in the valley, and homeowners become acutely aware of indoor air quality, HVAC filtration performance, and envelope tightness. And because the Wasatch Mountains are right there, real snow falls on these homes. The contractors who rank before the first November storm are the ones who book the winter rush.",
  pullQuote: 'In a city growing faster than its contractors can keep up, the business that ranks first when snow hits or the ground shakes is the one that stays booked.',
  donut: {
    title: 'Salt Lake City homeownership',
    value: 72,
    centerLabel: 'homeowners',
    legend: [
      { label: 'Homeowners', pct: 72, kind: 'teal' },
      { label: 'Renters', pct: 28, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter snow & HVAC (Nov–Mar), earthquake prep year-round',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 62, peak: true },
    { m: 'A', v: 50 }, { m: 'M', v: 48 }, { m: 'J', v: 46 }, { m: 'J', v: 44 },
    { m: 'A', v: 46 }, { m: 'S', v: 52 }, { m: 'O', v: 58 },
    { m: 'N', v: 82, peak: true }, { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '1.2M+', label: 'people across the Salt Lake metro and growing fast' },
    { value: '#1', label: 'fastest-growing tech economy in the US — Silicon Slopes', accent: true },
    { value: 'Nov–Mar', label: 'winter inversion season, when HVAC and roofing demand peaks' },
    { value: 'Wasatch Fault', label: 'runs under the city, driving year-round seismic-prep demand' },
  ],
  neighborhoods: [
    'Sugar House', '9th & 9th', 'The Avenues', 'Holladay', 'Murray',
    'Sandy', 'South Jordan', 'Riverton', 'Herriman', 'West Jordan',
    'Ogden', 'Provo', 'Millcreek', 'Cottonwood Heights', 'Draper',
  ],
};

const AREAS = [
  'Salt Lake City', 'Sugar House', 'The Avenues', 'Holladay', 'Murray',
  'Sandy', 'South Jordan', 'Riverton', 'Herriman', 'West Jordan',
  'Millcreek', 'Cottonwood Heights', 'Draper', 'Ogden', 'Provo',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. The Salt Lake market is growing faster than almost anywhere else in the country, which means more homeowners searching every month — but also more competition piling in. The contractors who invest in ranking now, before the valley fills up with rivals, are the ones who own the market when the dust settles. So that's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand winter inversion HVAC calls, post-earthquake foundation consultations, and the spring roofing surge after a heavy snow season — so everything we build is shaped around how Salt Lake homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners in South Jordan and Sandy that three of your competitors also bought.",
  },
  {
    title: 'We actually know the Salt Lake market',
    body: "Neighborhood-by-neighborhood targeting from Sugar House to Riverton, built around the seasonal rhythms of a mountain valley market — winter inversions, earthquake anxiety, and the Silicon Slopes growth wave most national agencies never account for.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Salt Lake contractor gets around 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market growing this fast, every month you wait is another month a new competitor claims the spot you wanted. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Salt Lake City', state: 'Utah', stateAbbr: 'UT', metro: 'Salt Lake City',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const saltLakeCityLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'salt-lake-city', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Salt Lake City Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Salt Lake City and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Salt Lake City, UT',
    h1: 'When Salt Lake City searches for what you do, be the first name they find',
    h2Exact: 'Salt Lake City Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a valley growing faster than almost anywhere in the country, we get you into that top three for your neighborhoods — so the call lands with you instead of a competitor who ranked first.",
    primaryCta: 'Get my free Salt Lake City audit',
    intro:
      "Salt Lake City local SEO comes down to one thing: when a homeowner in Sandy or Sugar House searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a fast-growing, family-oriented market where 72 percent of residents own their homes, and the Wasatch Fault and winter inversions create demand that spikes predictably every year. Becoming one of those three pins in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Salt Lake City businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Salt Lake neighborhoods like Sandy, South Jordan, Sugar House, and the Avenues. In a fast-growing market where tech workers and families are buying homes at a rapid clip, the winners target tight service areas and build ranking before the next seasonal spike — whether that's a November inversion, a winter snow event, or a post-earthquake surge in foundation consultations.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most homeowners in South Jordan and Riverton never see your name. Getting into that top three for your neighborhoods is usually the single highest-return move a Salt Lake contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Sandy or West Jordan homeowner to four contractors, then bill each of you to fight over them. It's a treadmill, and it never stops. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when the spikes happen", body: "Salt Lake demand is highly seasonal — HVAC calls flood in during the November inversion season, roofing and gutter jobs pile up after a heavy snow, and foundation consultations spike any time the Wasatch Fault is in the news. The contractors already in the Map Pack when these moments hit book all the work. If you're not ranking before the spike, you're chasing it after." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Salt Lake searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Utah directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners in Sandy and Sugar House pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for South Jordan, Holladay, Murray, the Avenues, and the rest — so you rank for the neighborhood someone's actually searching, not just \"Salt Lake City.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Utah and Salt Lake sources Google trusts — local press, chambers, associations, partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand targeting', desc: "We rank you for the winter inversion HVAC searches, post-storm roofing calls, and earthquake-prep foundation queries that drive Salt Lake's biggest demand spikes before they arrive, not after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Salt Lake neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Salt Lake Valley — Sandy, South Jordan, Sugar House, Holladay, Murray, and beyond — plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Salt Lake neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Salt Lake Valley.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Salt Lake City?', a: "Most Salt Lake engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Salt Lake keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market growing this fast is selling you something." },
      { q: 'What makes Salt Lake City local SEO different from other markets?', a: "Two things set it apart. First, this is one of the fastest-growing metros in the country — Silicon Slopes is bringing in tech workers and families constantly, which means the pool of homeowners searching your services is expanding, but so is the competition. Second, demand is unusually seasonal and event-driven: winter inversions spike HVAC searches, heavy mountain snows spike roofing calls, and earthquake-preparedness anxiety creates a steady undercurrent of foundation and structural demand that most contractors never rank for." },
      { q: 'Can you help me rank for earthquake preparedness and foundation services?', a: "Yes, and in Salt Lake that's a genuine niche. The Wasatch Fault runs directly under the valley, and foundation inspection, retrofitting, and seismic-preparedness searches are year-round, not seasonal. We can build content and optimize your profile specifically for those searches so you capture homeowners before they call anyone else." },
      { q: 'Which Salt Lake areas do you cover?', a: "The entire Salt Lake Valley and beyond — Sugar House, the Avenues, Holladay, Murray, Sandy, South Jordan, Riverton, Herriman, West Jordan, Millcreek, Cottonwood Heights, Draper, and further out to Ogden and Provo. We build genuine neighborhood pages rather than one generic Salt Lake City page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand winter inversion HVAC emergencies, post-earthquake foundation consultations, and the spring roofing surge after a heavy Wasatch snowfall." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Salt Lake neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'salt-lake-city', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Salt Lake City SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Salt Lake City SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing mountain valley market. Free audit.',
    eyebrow: 'SEO Services · Salt Lake City, UT',
    h1: 'Get your Salt Lake City business to the top of Google and keep it there',
    h2Exact: 'Salt Lake City SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Salt Lake customers search and the leads keep coming. We build that ranking for contractors in a fast-growing market and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Salt Lake City SEO audit',
    intro:
      "Salt Lake City SEO comes down to one question: when a homeowner in Sandy, South Jordan, or Sugar House searches what you do, are you on page one or page two? Page two might as well be page fifty. The Silicon Slopes boom is bringing in new homeowners every month and new contractors every quarter — the businesses ranking now will own this market for years. We get contractors ranking for the money keywords and measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Salt Lake City businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific neighborhoods and the seasonal demands of the Salt Lake Valley, and earning links from trusted Utah sources. In a market growing as fast as Silicon Slopes, tight neighborhood targeting and ranking for seasonal inversion-season HVAC terms and post-storm roofing searches are two of the quickest ways to pull ahead before the competition catches up.",
    problemHeading: "Three reasons your Salt Lake City site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market adding new contractors alongside new homeowners every month, if you're not in the top handful of results for what you sell, your site is invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done. In a fast-growing market like Salt Lake, a strong organic position compounds in value every year as the population grows." },
      { title: "You're not ranking for the demand that matters", body: "Salt Lake demand swings hard with the seasons — HVAC and air-quality calls during winter inversions, roofing and gutter work after Wasatch snowfall, foundation consultations whenever an earthquake is in the news. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Salt Lake customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Utah and industry sources. In a market growing as fast as Salt Lake, links are often what separate page one from page two before the valley fills up with rivals." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & earthquake-prep SEO', desc: "We rank you for winter inversion HVAC searches, post-storm roofing calls, indoor air quality queries, and Wasatch Fault foundation searches that drive Salt Lake's biggest demand spikes.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Salt Lake leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and earthquake-prep terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Utah and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Salt Lake City SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Salt Lake City search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & earthquake-prep SEO', 'Multi-neighborhood targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Salt Lake City?', a: "Most Salt Lake SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Salt Lake City?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive valley-wide keywords. SEO compounds, so the gains keep building the longer you run it — and in a growing market like Salt Lake, that compounding matters." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In a market growing as fast as Silicon Slopes, building organic authority now means owning the search results as the population expands. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Salt Lake City SEO target seasonal demand?', a: "Absolutely. When the November inversion settles into the valley, searches for HVAC maintenance, air quality, and furnace repair spike fast. Heavy Wasatch snowfall drives roofing and gutter calls. And Wasatch Fault news sends homeowners searching for foundation inspections. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal, earthquake-prep, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search results." },
      { q: 'Which areas around Salt Lake City do you cover?', a: "The full Salt Lake Valley and beyond — Sugar House, the Avenues, Holladay, Murray, Sandy, South Jordan, Riverton, Herriman, West Jordan, Millcreek, Cottonwood Heights, Draper, and further out to Ogden and Provo. We build genuine neighborhood pages, not one generic Salt Lake City page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads in a market where your best customers are searching online every day." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'salt-lake-city', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Salt Lake City Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Salt Lake City web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a fast-growing mountain valley market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Salt Lake City, UT',
    h1: 'Salt Lake City web design that turns visitors into booked jobs',
    h2Exact: 'Salt Lake City Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Salt Lake City contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out in a valley where the competition is growing as fast as the population.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Salt Lake City contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn homeowners from Sandy to Sugar House into booked jobs — built to win in a market where Silicon Slopes growth is filling in the contractor landscape faster every year.",
    aioQuestion: 'What makes a good contractor website in Salt Lake City?',
    aioAnswer:
      "A good Salt Lake City contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve — from South Jordan and Riverton to Sugar House and Holladay. Because most Salt Lake searches happen on mobile and a fast-growing market means more competition every year, mobile speed, an obvious next step, and content that speaks to local concerns like winter inversions, mountain snowfall, and earthquake preparedness are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in Salt Lake the market is growing fast enough that the next guy is probably a newcomer who just built a better site than yours. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Salt Lake visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or the local conditions", body: "A homeowner in Sandy wants to see you serve Sandy — not a generic \"Utah contractor\" page. And they want to know you understand what a Wasatch winter or a valley inversion actually means for their home. We build sites that name the neighborhoods you work and speak to the conditions your customers actually face." },
    ],
    servicesHeading: "What's in an OnwardCraft Salt Lake City website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want in the Salt Lake Valley." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Salt Lake traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to value-conscious Utah homeowners and book the job — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages across the Salt Lake Valley." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the neighborhoods you serve — South Jordan, Sandy, Sugar House, Holladay, Murray, and more — so you stand out in a growing market instead of blending into a generic Utah contractor page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want in the Salt Lake Valley." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Salt Lake City web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Salt Lake City?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site help me stand out as Salt Lake's contractor market gets more crowded?", a: "That's exactly the point. Silicon Slopes growth means more homeowners every year, but also more contractors. We build around the specific neighborhoods you serve, keep the site fast, and put a clear offer and call button front and center — so when a homeowner in Sandy is comparing three contractors, yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for the Salt Lake Valley. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Salt Lake traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Salt Lake City contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'salt-lake-city', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Salt Lake City Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Salt Lake City website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a fast-growing market. Free audit.',
    eyebrow: 'Website Redesign · Salt Lake City, UT',
    h1: 'Redesign your Salt Lake City website without losing your rankings',
    h2Exact: 'Salt Lake City Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Salt Lake City contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in a market that keeps growing.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Salt Lake City contractor sites for speed and conversions, build them to stand out in a fast-growing valley, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters even more in a growing market like Salt Lake where new competition is arriving constantly.",
    problemHeading: "Signs your Salt Lake City site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Salt Lake's Silicon Slopes culture has raised the bar on what professionals look like online. Tech-savvy homeowners in the Avenues or Holladay judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Salt Lake visitors before they ever see your offer. A redesign built mobile-first wins them back and improves your Google rankings at the same time." },
      { title: "It doesn't reflect the conditions your customers actually face", body: "A homeowner prepping for winter inversions or worried about the Wasatch Fault wants a contractor who understands their specific situation. A generic, stale site signals that you don't. We rebuild around the local conditions and neighborhoods that matter — so the right homeowners feel understood and choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned across the Salt Lake Valley." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings in a competitive market." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Salt Lake City traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of the jobs you want in Sandy, South Jordan, or Sugar House." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Salt Lake neighborhoods and valley conditions you serve — winter inversions, mountain snowfall, earthquake prep — so the new site stands out instead of reading like every other Utah contractor's.", featured: true },
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
      heading: 'Transparent Salt Lake City redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Salt Lake City?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, or isn't bringing in leads from the neighborhoods you serve, it's costing you work. In a market growing as fast as Salt Lake, an outdated site is actively losing you jobs to newer competitors. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete as more contractors enter the Salt Lake market?', a: "Yes, and that's the point as Silicon Slopes growth keeps bringing in new competition. We rebuild around the specific Salt Lake neighborhoods you serve, address the local conditions homeowners care about, and make the offer and call button obvious — so the new site stands out instead of reading like every other Utah contractor's page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan for your Salt Lake City contractor site." },
    ],
  },
];

export const saltLakeCityCity = {
  citySlug: 'salt-lake-city', city: 'Salt Lake City', state: 'Utah', stateAbbr: 'UT', metro: 'Salt Lake City',

  titleTag: 'Salt Lake City Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Salt Lake City contractors. Get found, get booked, and own your leads instead of renting them — built for Silicon Slopes growth. Free Salt Lake City audit.',

  eyebrow: 'Salt Lake City · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Salt Lake City contractors found and booked',
  h2Exact: 'Salt Lake City Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a fast-growing mountain valley market. One team to get you ranking, converting, and off the rented-lead treadmill before the competition catches up.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Salt Lake City audit',

  intro:
    "If you run a contracting business in Salt Lake City, you're operating in one of the fastest-growing markets in the country. Silicon Slopes is bringing in tech workers and young families who are buying homes and immediately searching for contractors. That's good news — but the contractor landscape is filling in just as fast. Add the Wasatch Fault running under the valley, winter inversions that drive predictable HVAC and air-quality spikes, and Wasatch Mountain snowfall that fuels roofing and gutter demand every year, and you have a market with enormous seasonal urgency. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Salt Lake City contractors do exactly that.",
  aioQuestion: 'How do Salt Lake City contractors get more leads online?',
  aioAnswer:
    "Salt Lake City contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood across the valley. In a market driven by Silicon Slopes growth, Wasatch winter seasonality, and year-round earthquake-preparedness demand, the contractors who build strong search visibility now — before the competition catches up — will own the market as the population expands.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Salt Lake searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood across the valley.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — winter inversion HVAC, post-storm roofing, foundation prep — build an asset you own, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stand out in a valley where new homeowners and new contractors are arriving every month.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully so you keep every ranking you've earned, and position it to win in a fast-growing market.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Salt Lake City?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market that's growing as fast as Silicon Slopes." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand winter inversion HVAC calls, post-earthquake foundation consultations, and the spring roofing surge after a heavy Wasatch snowfall." },
    { q: 'Why does the Salt Lake City market need a different approach?', a: "Three things make it distinct. It's one of the fastest-growing metros in the US, so the homeowner pool is expanding but so is the competition. The Wasatch Fault creates year-round demand for foundation and seismic services that most contractors never rank for. And winter inversions create predictable HVAC and indoor-air-quality spikes that reward contractors who rank before the season arrives." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Salt Lake City areas do you serve?', a: "The full Salt Lake Valley and beyond — Sugar House, the Avenues, Holladay, Murray, Sandy, South Jordan, Riverton, Herriman, West Jordan, Millcreek, Cottonwood Heights, Draper, and further out to Ogden and Provo. We build genuine neighborhood pages, not a single generic Salt Lake City page." },
    { q: 'Where should I start?', a: "Start with a free Salt Lake City audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — whether that's ranking for winter inversion calls, earthquake-prep services, or the fast-growing neighborhoods where new homeowners are searching right now. No pitch deck, just a plan." },
  ],
};

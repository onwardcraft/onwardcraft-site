// SIOUX FALLS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Sioux Falls's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SIOUX FALLS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Sioux Falls takes more than a good reputation',
  body:
    "Sioux Falls is one of the fastest-growing cities in the United States, and the growth shows no sign of slowing. Citibank, Wells Fargo, Sanford Health, and Avera Health have turned it into a regional financial and medical hub, and new homeowners arrive constantly — drawn by South Dakota's zero state income tax, affordable land, and a quality of life that has put Sioux Falls on national radar. That influx creates relentless, year-round demand for home services. But Sioux Falls is also sitting at the eastern edge of hail alley, on the banks of the Big Sioux River, and squarely in the path of the Northern Plains' most punishing winters. Brutal cold snaps that push past twenty below, spring flooding, summer hailstorms that can total a roof in minutes, and the occasional tornado — nearly every season triggers a contractor demand spike. The contractors already ranking on Google are the ones who book that wave of work. The ones who aren't get left behind regardless of how good their crews are.",
  pullQuote: 'In the fastest-growing city on the Northern Plains, the contractor who owns the map before the next hailstorm books the work.',
  donut: {
    title: 'Sioux Falls homeowner base',
    value: 62,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 62, kind: 'teal' },
      { label: 'Renters', pct: 38, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/tornado roofing (Apr–Jun, Aug–Sep) and winter heating emergencies (Nov–Feb)',
  seasonalDemand: [
    { m: 'J', v: 85, peak: true }, { m: 'F', v: 80, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 90, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 78 },
    { m: 'J', v: 88, peak: true }, { m: 'A', v: 92, peak: true }, { m: 'S', v: 62 },
    { m: 'O', v: 55 }, { m: 'N', v: 82, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '200K+', label: 'residents and one of the fastest-growing cities in the US' },
    { value: '62%', label: 'homeowner rate — a solid, high-income owner base', accent: true },
    { value: 'Apr–Jun', label: 'peak hail and roofing season in Sioux Falls' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks' },
  ],
  neighborhoods: [
    'Downtown', 'McKennan Park', 'Whittier', 'Brandon', 'Tea',
    'Harrisburg', 'Dell Rapids', 'Baltic', 'Tuthill Park', 'Morningside',
    'Rice Street', 'Pettigrew Heights', 'North End', 'West Sioux', 'Sycamore',
  ],
};

const AREAS = [
  'Downtown', 'McKennan Park', 'Whittier', 'Brandon', 'Tea',
  'Harrisburg', 'Dell Rapids', 'Baltic', 'Tuthill Park', 'Morningside',
  'Rice Street', 'Pettigrew Heights', 'North End', 'West Sioux', 'Sycamore',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Sioux Falls homeowners want a local contractor they can trust — someone who knows the difference between a hail-damaged roof in Brandon and a flooding foundation near the Big Sioux. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand hailstorm roofing spikes, winter heating emergencies, and spring flooding repairs, so everything we build is shaped around how Sioux Falls customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also called.",
  },
  {
    title: 'We actually speak Sioux Falls',
    body: "Neighborhood-by-neighborhood targeting from McKennan Park to Harrisburg, with the practical, value-for-quality content that earns trust from the Midwest homeowners who prefer local. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Sioux Falls contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — especially during hail season or a January cold snap. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Sioux Falls', state: 'South Dakota', stateAbbr: 'SD', metro: 'Sioux Falls',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const siouxFallsLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'sioux-falls', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Sioux Falls Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Sioux Falls and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Sioux Falls',
    h1: 'When Sioux Falls searches for what you do, be the first name they find',
    h2Exact: 'Sioux Falls Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city growing this fast — with hailstorms, floods, and brutal winters driving contractor demand every season — we get you into that top three for your neighborhoods so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Sioux Falls audit',
    intro:
      "Sioux Falls local SEO comes down to one thing: when a homeowner in McKennan Park or Harrisburg searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This city is growing faster than almost anywhere in the country, new homeowners are arriving constantly, and every major weather event — a hailstorm in spring, a flooding Big Sioux River, a January polar vortex — sends search volume spiking. Being in that top three before the demand wave hits is the whole game. Here's how you do it.",
    aioQuestion: 'How do Sioux Falls businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Sioux Falls neighborhoods and surrounding communities. Sioux Falls homeowners strongly prefer local contractors, so the winners target tight service areas, publish content that speaks to the hail alley weather cycle and South Dakota's homeowner culture, and respond fast when seasonal demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In a city where new homeowners are arriving every month and every hailstorm triggers a roofing rush, those three spots capture the overwhelming majority of calls. If you're not one of them, it doesn't matter how good your work is — most people never see your name. Getting into that top three for your neighborhoods is usually the single highest-return move a Sioux Falls contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Sioux Falls homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — and in a market growing this fast, that pipeline becomes more valuable every year." },
      { title: "You're invisible when weather demand spikes", body: "Hail season in April and May, spring flooding along the Big Sioux, and winter heating emergencies from November through February all send search volume surging. The contractors already ranking capture that wave. The ones scrambling to get visible after the storm are too late. We get you ranking before the season so the calls land with you." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Sioux Falls searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone — especially important with Midwest homeowners who trust peer recommendations." },
      { name: 'Neighborhood pages', desc: "Real pages for McKennan Park, Brandon, Harrisburg, Dell Rapids and the rest, so you rank for the neighborhood someone's actually searching, not just \"Sioux Falls.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Sioux Falls sources Google trusts — local press, business associations, civic partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand capture', desc: "We optimize for hail roofing, spring flooding, and winter heating searches before each season hits, so you're already visible when the demand wave arrives.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Sioux Falls and surrounding communities, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Sioux Falls neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Sioux Falls and its suburbs.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand capture', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Sioux Falls?', a: "Most Sioux Falls engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Sioux Falls keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Sioux Falls local SEO different?', a: "Two things. Sioux Falls is one of the fastest-growing cities in the country, so new homeowners are constantly searching for contractors — but the weather cycle is extreme. Hail season, spring flooding, and polar-vortex winters each trigger their own search spikes, and you need to be ranking before they hit, not after." },
      { q: 'Can you help me capture hail and storm work?', a: "Yes, and in Sioux Falls that's one of the biggest opportunities. Sioux Falls sits at the eastern edge of hail alley. We optimize your profile and content for hail damage, storm restoration, and emergency roofing searches so when the next storm hits, you're already in the top three." },
      { q: 'Which areas do you cover?', a: "All of Sioux Falls and the surrounding communities — McKennan Park, Whittier, Brandon, Tea, Harrisburg, Dell Rapids, Baltic and more. We build genuine neighborhood pages instead of one generic Sioux Falls page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hailstorm roofing rushes, heating emergencies in January, and the agricultural-area property work that surrounds the city." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business — it's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — especially important during high-demand seasons when call volume spikes." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'sioux-falls', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Sioux Falls SEO Company | OnwardCraft',
    metaDescription:
      'Sioux Falls SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market.',
    eyebrow: 'SEO Services · Sioux Falls',
    h1: 'Get your Sioux Falls business to the top of Google and keep it there',
    h2Exact: 'Sioux Falls SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Sioux Falls customers search and the leads keep coming — through hail season, through winter, through every new wave of homeowners moving in. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Sioux Falls SEO audit',
    intro:
      "Sioux Falls SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing cities in the country — a city where weather extremes, a zero-income-tax professional class, and constant new-homeowner arrivals keep demand high year-round — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Sioux Falls businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific neighborhoods and surrounding communities, and earning links from trusted Sioux Falls sources. In this market, ranking for seasonal hail damage, heating emergencies, and spring flooding terms before each season peaks is one of the quickest ways to pull ahead of competitors.",
    problemHeading: "Three reasons your Sioux Falls site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a fast-growing city where the number of homeowners keeps rising, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how strong your reputation on the ground." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For Sioux Falls contractors fighting through seasonal spikes, that owned pipeline is the difference between a boom and a scramble." },
      { title: "You're not ranking for the demand that matters", body: "Sioux Falls demand swings hard with the seasons — hail and tornado damage in spring, flooding along the Big Sioux, heating emergencies in the depths of a Northern Plains winter. The contractors ranking for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Sioux Falls customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Sioux Falls and industry sources. In a competitive and growing market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for hail damage, spring flooding, and winter heating searches before each season peaks, so you're visible when the demand wave hits, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Sioux Falls leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in Sioux Falls." },
      { name: 'Build authority', desc: "Links and citations from trusted Sioux Falls and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Sioux Falls SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Sioux Falls search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-location / rural area', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Sioux Falls?', a: "Most Sioux Falls SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Sioux Falls?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on more competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Sioux Falls contractors do best running SEO as the long-term engine and ads for short-term spikes like post-storm roofing demand." },
      { q: 'Should my Sioux Falls SEO target seasonal demand?', a: "Absolutely. When a hailstorm rolls through in May, searches for roofing and storm damage spike overnight. When temperatures hit minus twenty in January, heating and boiler calls flood in. Ranking takes months to build, so you have to be in place before the season — not chasing it after. We optimize for those seasonal and emergency terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Sioux Falls do you cover?', a: "All of Sioux Falls and the surrounding communities — McKennan Park, Whittier, Brandon, Tea, Harrisburg, Dell Rapids, Baltic and more — with genuine local pages rather than one generic Sioux Falls page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially critical in a market where new homeowners are searching constantly." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'sioux-falls', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Sioux Falls Web Design Company | OnwardCraft',
    metaDescription:
      'Sioux Falls web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a fast-growing, weather-driven market.',
    eyebrow: 'Web Design · Sioux Falls',
    h1: 'Sioux Falls web design that turns visitors into booked jobs',
    h2Exact: 'Sioux Falls Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Sioux Falls contractors fast, mobile-first sites engineered to turn visitors into booked work — and to earn the trust of Midwest homeowners who know the difference between a local contractor and an out-of-town company that just swapped a city name into a template.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Sioux Falls contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that signals you're actually local. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn McKennan Park to Harrisburg visitors into booked jobs — built to win in a market where a steady influx of new homeowners and extreme seasonal weather keep demand high year-round.",
    aioQuestion: 'What makes a good contractor website in Sioux Falls?',
    aioAnswer:
      "A good Sioux Falls contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and surrounding communities you serve. Because Sioux Falls homeowners strongly prefer local contractors with demonstrated knowledge of the area's extreme weather conditions — hail damage, flooding, brutal winters — a site that speaks to those realities converts far better than a generic template.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor — and in a city adding new homeowners every month, those visitors are finding someone else. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Sioux Falls visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking — which matters doubly when a hailstorm hits and everyone is searching at once." },
      { title: "It doesn't prove you're actually local", body: "A Sioux Falls homeowner dealing with hail damage or a flooded basement wants to know you understand their situation and serve their neighborhood. A generic site that could belong to any contractor anywhere fails that test immediately. We build sites that name the neighborhoods you work and speak to the real conditions homeowners face here." },
    ],
    servicesHeading: "What's in an OnwardCraft Sioux Falls website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where the majority of your Sioux Falls traffic is — especially during weather emergencies when people search on the go." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Sioux Falls homeowners facing real weather challenges and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the communities you serve — from Downtown to Dell Rapids — so you stand out as a genuine local expert instead of a generic citywide contractor.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want in Sioux Falls and surrounding communities." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting through every season." },
    ],
    pricing: {
      heading: 'Transparent Sioux Falls web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Sioux Falls?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site earn the trust of Sioux Falls homeowners?', a: "That's the whole point. Sioux Falls homeowners strongly prefer local contractors, so we build around the specific neighborhoods you serve, speak to the real weather challenges they face — hail, flooding, extreme cold — and put real proof front and center. That's what converts a visitor into a booked job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Sioux Falls terms and own seasonal demand." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where the majority of your Sioux Falls traffic comes from — and during weather emergencies when search spikes, nearly everyone is on a phone." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Sioux Falls contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'sioux-falls', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Sioux Falls Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Sioux Falls website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a growing.',
    eyebrow: 'Website Redesign · Sioux Falls',
    h1: 'Redesign your Sioux Falls website without losing your rankings',
    h2Exact: 'Sioux Falls Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Sioux Falls contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in a market that rewards being found first.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Sioux Falls contractor sites for speed and conversions, build them to speak directly to Midwest homeowners who value local expertise, and migrate with the redirects and SEO care that protect the traffic you already have — so your next hail season, winter, or flood season lands on a site that actually books jobs.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in a market like Sioux Falls where seasonal demand spikes reward whoever is already ranking.",
    problemHeading: "Signs your Sioux Falls site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Sioux Falls homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established and local — even when your work is better. In a city growing this fast, those missed impressions add up fast." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing most of your Sioux Falls visitors before they ever see your offer — especially during weather emergencies when they're searching frantically on a phone. A redesign built mobile-first wins them back." },
      { title: "It doesn't speak to Sioux Falls homeowners", body: "Traffic that doesn't turn into calls is wasted. A generic old site that could be anywhere gives a Sioux Falls homeowner no reason to pick you — they want to see local knowledge, local neighborhoods, and a contractor who understands hail alley weather. We rebuild for conversions and for the communities you actually serve." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially during high-volume weather-driven search spikes." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Sioux Falls traffic lives — and where emergency searches happen." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the confidence of Midwest homeowners who do their research." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the communities you serve — Downtown, McKennan Park, Brandon, Harrisburg, Dell Rapids and beyond — so the new site reads as genuinely local, not a national template.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — especially important before peak hail or winter season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates through each Sioux Falls season." },
    ],
    pricing: {
      heading: 'Transparent Sioux Falls redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Sioux Falls?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which is critical if you're heading into hail season or winter and need the traffic." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or fails to communicate that you're a genuine Sioux Falls local contractor who understands the area's weather and communities, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Sioux Falls?', a: "Yes, and that's the point in a market growing this fast. We rebuild around the specific neighborhoods and communities you serve, keep the site fast, and make the offer and call button obvious — so the new site earns local trust instead of reading like a national template." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings, especially during high-demand weather periods when search volume spikes." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan — so you go into your next busy season on a site that actually works." },
    ],
  },
];

export const siouxFallsCity = {
  citySlug: 'sioux-falls', city: 'Sioux Falls', state: 'South Dakota', stateAbbr: 'SD', metro: 'Sioux Falls',

  titleTag: 'Sioux Falls Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Sioux Falls contractors. Get found, get booked, and own your leads instead of renting them — built for a fast-growing.',

  eyebrow: 'Sioux Falls · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Sioux Falls contractors found and booked',
  h2Exact: 'Sioux Falls Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Sioux Falls's fast-growing, weather-extreme, Midwest-values market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Sioux Falls audit',

  intro:
    "If you run a contracting business in Sioux Falls, you're working in one of the fastest-growing cities in the country, surrounded by homeowners who prefer local contractors, in a climate that punishes hard every season — hailstorms, river flooding, minus-twenty winters, and the occasional tornado. Winning here takes three things working together: a site that earns local trust and converts, SEO that ranks you for what people search before demand spikes, and local SEO that puts you in the Map Pack for the neighborhoods you actually serve. Here's how we help Sioux Falls contractors do exactly that.",
  aioQuestion: 'How do Sioux Falls contractors get more leads online?',
  aioAnswer:
    "Sioux Falls contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Sioux Falls homeowners strongly prefer local contractors and seasonal weather events drive sharp demand spikes, the contractors who rank for their communities and optimize for hail, flooding, and heating searches before each season peaks win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Sioux Falls searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, before each season's demand spike.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including seasonal hail, flooding, and heating terms — build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to earn the trust of Midwest homeowners and turn visitors into booked jobs — not brochures that just sit there while a more visible competitor gets the call.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and local trust, and migrate it carefully so you keep every bit of ranking you've already earned heading into your next busy season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Sioux Falls?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market growing faster than almost anywhere in the country." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand hailstorm roofing spikes, heating emergencies in a Northern Plains winter, and the agricultural-area property work that surrounds Sioux Falls." },
    { q: 'Why does the Sioux Falls market need a different approach?', a: "Three reasons: it's growing faster than almost any other US city, so the number of homeowners searching for contractors keeps rising; its extreme weather cycle — hail alley, Big Sioux flooding, brutal winters — creates sharp seasonal demand spikes; and Sioux Falls homeowners strongly prefer local contractors, so generic national-template sites get skipped. Winning means ranking tight, by neighborhood, and speaking the language of the communities you actually serve." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Sioux Falls areas do you serve?', a: "All of Sioux Falls and the surrounding communities — McKennan Park, Whittier, Brandon, Tea, Harrisburg, Dell Rapids, Baltic and more — with genuine local pages rather than a generic citywide template." },
    { q: 'Where should I start?', a: "Start with a free Sioux Falls audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — and whether to act before the next hail season or winter hits. No pitch deck, just a plan." },
  ],
};

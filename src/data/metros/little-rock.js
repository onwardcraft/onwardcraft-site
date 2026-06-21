// LITTLE ROCK — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Little Rock's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LITTLE ROCK — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Little Rock takes more than showing up',
  body:
    "Little Rock sits at the geographic center of Arkansas, a state that ranks among the five most tornado-prone in the country. The Arkansas River cuts through the metro, and when it rises — as it has dramatically in recent years — restoration demand floods in alongside the water. That combination of tornado-alley destruction and river-valley flooding means Little Rock contractors work in a market where search demand can spike overnight and the window to capture it is short. The metro's roughly 750,000 residents span a wide geography: Hillcrest bungalows and Heights colonials to the east, newer construction sprawling through West Little Rock, and satellite cities like Conway, Benton, and Bryant pulling their own searches entirely. Seasonality here runs in three distinct waves: spring tornado and storm-damage roofing (March through May), summer HVAC work in one of the most oppressively humid climates in the South (June through September), and winter ice-storm response that can bring a cold snap with no warning (January and February). The contractors already ranking are the ones already booked through all three. As Arkansas's state capital, the metro also carries stable government employment — a homeowner base that's less volatile than markets tied to a single private employer, and one that invests consistently in their homes.",
  pullQuote: 'In a city shaped by tornadoes, river floods, and 95-degree summers, the contractor already ranking is the one who gets the call when disaster hits.',
  donut: {
    title: 'Little Rock community makeup',
    value: 43,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 43, kind: 'teal' },
      { label: 'Other', pct: 57, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Little Rock',
  seasonCaption: 'Tornado/storm roofing (Mar–May), summer HVAC (Jun–Sep), ice storms (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 78, peak: true }, { m: 'F', v: 72, peak: true }, { m: 'M', v: 95, peak: true },
    { m: 'A', v: 98, peak: true }, { m: 'M', v: 90, peak: true }, { m: 'J', v: 85 },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 94, peak: true }, { m: 'S', v: 88, peak: true },
    { m: 'O', v: 55 }, { m: 'N', v: 48 }, { m: 'D', v: 52 },
  ],
  stats: [
    { value: 'Top 5', label: 'most tornado-prone state — storm-damage demand spikes fast and hard' },
    { value: '~43%', label: 'of Little Rock residents are Black or African American — authentic local presence matters', accent: true },
    { value: 'Mar–Sep', label: 'peak demand season spanning tornado roofing and summer HVAC' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when homeowners search' },
  ],
  neighborhoods: [
    'Hillcrest', 'The Heights', 'Pulaski Heights', 'West Little Rock', 'Chenal Valley',
    'Conway', 'Benton', 'Bryant', 'Sherwood', 'Maumelle',
    'Jacksonville', 'North Little Rock', 'Cabot', 'Alexander', 'Roland',
  ],
};

const AREAS = [
  'Little Rock', 'North Little Rock', 'Conway', 'Benton', 'Bryant',
  'Sherwood', 'Maumelle', 'Jacksonville', 'Cabot', 'Hillcrest',
  'The Heights', 'Pulaski Heights', 'West Little Rock', 'Chenal Valley', 'Alexander',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought at the same time. That treadmill is brutal anywhere, but in an affordable market like Little Rock — where job volume is high and margins are thinner — renting leads you don't own can quietly eat your whole profit. So that's the whole point of what we do here: get you ranking for the storm-damage calls in May, the HVAC emergencies in July, and the ice-response work in January, so those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand what a tornado-damage surge looks like, what an Arkansas River flood does to restoration demand in low-lying neighborhoods, and how summer humidity in Little Rock drives HVAC calls from June through September. Everything we build is shaped around how your customers actually search in those moments.",
  },
  {
    title: 'We get you off rented leads',
    body: "In an affordable market like Little Rock, high job volume can mask a lead-cost problem until it becomes a margin problem. We build a pipeline you own — rankings, a Google Business Profile, and a review base that send work straight to you, not to three other contractors who bought the same lead.",
  },
  {
    title: 'We actually know Little Rock',
    body: "Hillcrest and the Heights search differently than Conway or Chenal Valley. Bryant homeowners look for different trust signals than Maumelle ones. We build neighborhood-specific pages and content for the actual communities you serve — not a template with 'Little Rock' swapped in for 'New York.'",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: a Little Rock roofing or HVAC contractor in a single zip code might see several hundred 'near me' searches a month in peak season. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar — and in storm season, that gap is measured in days, not months. In your free audit, we model the real numbers for your business: your current rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Little Rock', state: 'Arkansas', stateAbbr: 'AR', metro: 'Little Rock',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const littleRockLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'little-rock', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Little Rock Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your trade in Little Rock and three businesses show up on the map. We get you into those three — especially during storm season and summer HVAC rushes.',
    eyebrow: 'Local SEO · Little Rock, AR',
    h1: 'When Little Rock searches for what you do, be the first name they find',
    h2Exact: 'Little Rock Local SEO Company',
    heroSubhead:
      "When a tornado cuts through Pulaski County or an ice storm rolls in off the plains, homeowners grab their phones and search for help right now. Google shows three businesses on the map. Everyone below them basically doesn't exist. We get you into those three for the neighborhoods you serve, so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Little Rock audit',
    intro:
      "Little Rock local SEO comes down to timing and geography. A homeowner in Hillcrest searching roofing after a spring storm, a Bryant family searching HVAC in July, a Maumelle resident searching restoration after the Arkansas River floods — they all see three businesses pinned to the map and tap one of them. Most never scroll further. Getting into that top three for your neighborhoods, before storm season hits, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Little Rock businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for your exact services and the neighborhoods you serve; consistent name, address, and phone listings across the web; a steady stream of real customer reviews; and local content tied to the actual communities in the Little Rock metro. Because demand here spikes hard and fast after tornado events, ice storms, and summer heat waves, the contractors who are already ranking when disaster strikes capture almost all the work. Being visible before the surge — not chasing it after — is what separates the contractors with full calendars from the ones scrambling.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own trade plus 'near me' right now from Little Rock. Those three businesses Google pins to the map get the overwhelming share of clicks. In storm season — when a homeowner has hail damage and wants someone on the phone today — if you're not in the top three, it almost doesn't matter how good your work is. Nobody scrolls to find you. Getting into that Map Pack for Hillcrest, Conway, Bryant, and the other communities you serve is usually the single highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Little Rock homeowner to three or four contractors, then bill each of you to fight over them. In an affordable market where margins are already tighter than on the coasts, that math compounds fast. Local SEO builds the opposite: a homeowner searches, finds you, and calls you — and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when demand spikes", body: "Little Rock demand doesn't rise gradually — it surges overnight after a tornado, after an ice storm, after a week of 95-degree humidity. The contractors who rank in the Map Pack before the event capture those calls. The ones trying to improve their SEO after the storm has passed are too late. Building your local visibility now, in the off-peak window, is exactly what puts you in front when it counts most." },
    ],
    servicesHeading: 'What it actually takes to rank you in Little Rock',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We optimize your categories, services, service area, photos, and posts so Google knows exactly which Little Rock searches you should win — and which neighborhoods to show you for." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Arkansas-specific directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of real reviews. It lifts your ranking and makes a homeowner in Benton or Sherwood pick up the phone over the next result." },
      { name: 'Neighborhood pages', desc: "Real pages for Hillcrest, The Heights, Conway, Benton, Bryant, Maumelle, and the rest, so you rank for the neighborhood someone is actually searching, not just 'Little Rock.'" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed — the plumbing under the hood that lets everything else rank when storm season hits." },
      { name: 'Local link building', desc: "Mentions and links from Arkansas and Little Rock sources Google trusts — local press, chambers, trade associations, community organizations. This is what separates page one from page two here." },
      { name: 'Storm-season SEO readiness', desc: "We optimize you for the exact searches that spike after tornado events, ice storms, and Arkansas River flooding — so when disaster hits, you're already on the map and getting the calls.", featured: true },
      { name: 'AI search readiness', desc: "More 'near me' research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read and cite your business — especially for emergency and restoration searches.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Little Rock neighborhoods and identify exactly which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift within a few weeks — well before the next storm season." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why starting now — before peak season — beats starting after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across your service territory, plus storm-season and emergency content that ranks when demand spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to actual calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right for Little Rock.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across multiple Little Rock neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the entire Little Rock metro.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season and emergency SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Little Rock?', a: "Most Little Rock engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The more competitive Little Rock keywords typically take 90 to 180 days of steady work because reviews and citations compound over time. If you want to be visible before spring storm season or the summer HVAC rush, now is when to start." },
      { q: 'What makes Little Rock local SEO different from other cities?', a: "Two things. First, demand here spikes fast and hard after tornado events, ice storms, and flooding — and only the contractors already in the Map Pack capture that surge. Second, the metro covers a wide geography from Hillcrest and the Heights to Conway, Benton, and Bryant, each pulling its own local searches. You have to rank neighborhood by neighborhood, not just for 'Little Rock.'" },
      { q: 'Can you help me show up for storm-damage searches?', a: "Yes — and in Little Rock that's one of the highest-value things we do. We optimize your profile and content for the exact searches that spike after tornado events, hail storms, ice storms, and Arkansas River flooding, so when homeowners are searching for help right now, you're one of the three businesses they see on the map." },
      { q: 'Which areas do you cover?', a: "The full Little Rock metro: Little Rock, North Little Rock, Conway, Benton, Bryant, Sherwood, Maumelle, Jacksonville, Cabot, and neighborhoods inside the city like Hillcrest, The Heights, Pulaski Heights, West Little Rock, and Chenal Valley. We build genuine neighborhood pages instead of one generic Little Rock page." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand what storm-damage surges look like, what Arkansas River flooding does to restoration demand, and how Little Rock's humid subtropical climate drives HVAC work through the summer." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More 'near me' research starts in AI now, especially for emergency and restoration searches. We structure your content and schema so those engines can read, trust, and cite your business — not just classic search." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. In Little Rock, where job volume is high but margins are tighter than on the coasts, paying per shared lead adds up fast. We build rankings and a review base that send leads straight to you — and over time you lean on lead brokers less because work comes in directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'little-rock', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Little Rock SEO Company | OnwardCraft',
    metaDescription:
      'Little Rock SEO that ranks trade contractors on Google and brings in leads you own. Storm-season ready, revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Little Rock, AR',
    h1: 'Get your Little Rock business to the top of Google and keep it there',
    h2Exact: 'Little Rock SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Little Rock homeowners search — storm-damage roofing, summer AC repair, emergency plumbing — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Little Rock SEO audit',
    intro:
      "Little Rock SEO comes down to one question: when a homeowner in Conway or Benton searches what you do, are you on page one or page two? Page two might as well not exist. We get contractors ranking for the money keywords in a market where demand spikes overnight after storms, ice events, and summer heat waves — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Little Rock businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms Little Rock customers search, publishing genuinely useful local content tied to specific neighborhoods and communities, and earning links from trusted Arkansas sources. In a market shaped by tornado-alley weather and Arkansas River flooding, ranking for storm-damage, restoration, and emergency HVAC searches ahead of peak season is one of the quickest ways to pull ahead of competitors who are optimizing reactively instead of proactively.",
    problemHeading: "Three reasons your Little Rock site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In Little Rock's home-services market, if you're not in the top handful of results for what you sell, your site is essentially invisible — no matter how many years you've been in business or how good your reputation is word-of-mouth." },
      { title: "You're renting traffic and not building anything", body: "Ads can work, but the moment you stop paying, the leads stop too. And in an affordable market like Little Rock, where individual project values are lower than coastal cities, the cost-per-lead math from paid ads can quietly compress your margins until there's not much left. SEO builds an asset you own: rankings that keep producing leads at a fraction of the per-lead cost." },
      { title: "You're not positioned for the demand that drives your busiest weeks", body: "Little Rock trade demand doesn't rise gradually — it surges after a tornado, after ice hits overnight, after a July heat wave that sends AC units into failure. If your site isn't already ranking for those searches before the event, you're invisible during the window that matters most. We build that positioning now, in the off-peak window, so you capture the surge when it comes." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Little Rock',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — especially important for mobile searches during emergency events." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Little Rock customers search — titles, headings, content, and internal links across your core services." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Little Rock homeowners search before, during, and after storm events, earning links and bringing in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Arkansas and Little Rock sources — local press, chambers of commerce, industry associations. In a competitive market, links are what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win 'near me' searches across your neighborhoods alongside your organic rankings — the combination that captures both the map and the results below it." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth to your business." },
      { name: 'Storm-season and emergency SEO', desc: "We rank you for tornado-damage roofing, ice-storm restoration, flood cleanup, and emergency HVAC searches before peak season hits — so you capture the surge instead of watching competitors take it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you — where a growing share of emergency and home-service search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Little Rock, then build a roadmap around the keywords most likely to drive real leads — with storm-season timing built into the plan." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, and the first thing Google checks before deciding whether to surface you." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the neighborhood, storm-damage, and emergency terms that matter most in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Arkansas and Little Rock sources to push competitive keywords onto page one before your next peak season." },
      { name: 'Report and scale', desc: "Monthly reporting tied to actual leads, then we double down on what's working and expand into the next service or neighborhood keyword set." },
    ],
    pricing: {
      heading: 'Transparent Little Rock SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Little Rock keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods in the Little Rock metro.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: "For businesses that want to own Little Rock search — including storm-season demand.", features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-area / multi-service targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Little Rock?', a: "Most Little Rock SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract. We confirm the exact scope in your free audit." },
      { q: 'How long does SEO take to work in Little Rock?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Tighter neighborhood terms move faster; broader metro-wide keywords take longer. SEO compounds, so the gains keep building — which is why starting now, before storm season, is worth more than starting after." },
      { q: 'Is SEO better than Google Ads for a Little Rock contractor?', a: "They do different jobs. Ads buy instant visibility that stops when you stop paying. In an affordable market like Little Rock, where project values are lower than coastal cities, the per-lead math from ads can compress margins significantly. SEO builds an asset you own that keeps producing leads at a lower cost over time. Most contractors do best running SEO as the long-term engine and ads for short-term gaps." },
      { q: 'Should my Little Rock SEO target storm-season demand?', a: "Absolutely — it's one of the most important things we do here. Tornado-damage roofing searches spike overnight after a storm system moves through, and only the contractors already on page one capture those calls. The same goes for ice-storm restoration in January and February, and HVAC emergency searches in July and August. Ranking takes months to build, so you have to be in place before the event, not after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and emergency SEO plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search. For emergency and restoration queries especially, AI Overviews are becoming a significant source of clicks." },
      { q: 'Which Little Rock areas do you cover?', a: "Little Rock, North Little Rock, Conway, Benton, Bryant, Sherwood, Maumelle, Jacksonville, Cabot, and neighborhoods inside the city like Hillcrest, The Heights, Pulaski Heights, West Little Rock, and Chenal Valley — with genuine local pages rather than one generic Little Rock page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. In Little Rock's affordable market, where shared leads cost almost as much as they do in bigger cities but project values are lower, owning your own pipeline matters even more. The more you own your search visibility, the less you depend on paying brokers." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across your neighborhoods, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck — just a plain diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'little-rock', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Little Rock Web Design Company | OnwardCraft',
    metaDescription:
      'Little Rock web design that turns visitors into booked jobs — fast, mobile-first sites built for trade contractors across the Arkansas metro.',
    eyebrow: 'Web Design · Little Rock, AR',
    h1: 'Little Rock web design that turns visitors into booked jobs',
    h2Exact: 'Little Rock Web Design Company',
    heroSubhead:
      "When a homeowner in Benton needs a roofer after a hailstorm or a West Little Rock family needs their AC fixed in July, they're searching from their phone and making a decision in seconds. We build Little Rock contractors fast, mobile-first sites that earn trust immediately and turn that visit into a booked job.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Little Rock contractor websites lose leads quietly: they load too slowly on a phone, bury the call button, and give a storm-anxious homeowner no clear reason to trust you over the next result. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Hillcrest to Conway into booked jobs — with content that actually speaks to the communities you serve.",
    aioQuestion: 'What makes a good contractor website in Little Rock?',
    aioAnswer:
      "A good Little Rock contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with real reviews and project photos, and names the specific neighborhoods and communities you serve. Because a large share of Little Rock's searches come from mobile — especially during emergency events after storms or heat waves — mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there. Authentic community representation also matters in a metro where nearly half of residents are Black or African American.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result — and when a homeowner is dealing with storm damage or a broken AC in 95-degree heat, 'no obvious reason' means they call someone else. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone and loses the visitor", body: "Most of your Little Rock visitors are on mobile, especially the ones searching after a storm event or an HVAC emergency. If your site takes more than a few seconds to load, they're gone. Slow sites also rank worse. We build fast, so you keep the visitor and protect your ranking." },
      { title: "It doesn't feel like it's from Little Rock", body: "A homeowner in Hillcrest or Maumelle wants to see that you serve their neighborhood — not a generic contractor site that could be from anywhere. We build sites that name the communities you work in, reflect the character of the metro, and give visitors the trust signals that make them pick up the phone." },
    ],
    servicesHeading: "What's in an OnwardCraft Little Rock website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area across the Little Rock metro, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Little Rock traffic comes from — and because storm and emergency searches happen in the field, not at a desk." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step that moves a visitor toward booking." },
      { name: 'Copy that sells', desc: "Words that speak to a Little Rock homeowner dealing with hail damage, a broken HVAC, or a flooded crawl space — not generic filler text that reads like everyone else's site." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages across your service area." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings year-round." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the communities you serve — Hillcrest, The Heights, Conway, Benton, Bryant, Sherwood, Maumelle — so you stand out in local searches instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business, particularly for the emergency and restoration searches where AI results are growing fastest.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors across the Little Rock metro, then map the site around booking more of the work you want — including storm-season and emergency positioning." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and content that speaks to real Little Rock homeowners." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one — ready for storm season or a summer HVAC rush." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting in your market." },
    ],
    pricing: {
      heading: 'Transparent Little Rock web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Little Rock contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A larger site for established contractors serving multiple communities across the metro.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses across the Arkansas metro.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Little Rock?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Little Rock?', a: "That's the whole point. We build around the specific neighborhoods and communities you serve — whether that's Hillcrest and The Heights inside the city or Conway, Benton, and Bryant in the suburbs — keep the site fast, and make the offer obvious. When a homeowner is searching for help after a storm, yours is the site that books the job." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms across the metro." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Little Rock traffic comes from — especially the urgent, emergency searches that happen right after storm damage or HVAC failure." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in missed leads, what a high-converting Little Rock contractor site should include, and a fixed-price quote with a firm timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'little-rock', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Little Rock Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Little Rock contractor website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Little Rock, AR',
    h1: 'Redesign your Little Rock website without losing your rankings',
    h2Exact: 'Little Rock Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy for a homeowner to leave. We redesign Little Rock contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've already earned going into storm season.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings disappear overnight. We do neither. We redesign Little Rock contractor sites for speed and conversions, built to stand out across neighborhoods from Pulaski Heights to Chenal Valley, and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one. In a market like Little Rock where storm-season search traffic can spike overnight, protecting those rankings going into peak season is especially important.",
    problemHeading: "Signs your Little Rock site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust immediately", body: "A Little Rock homeowner dealing with storm damage or a broken HVAC makes a fast decision. An old, cluttered site quietly sends them to the next result — even when your work is genuinely better. In a market where the state capital means a stable, educated homeowner base, first impressions are doing real work." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Little Rock visitors before they see your offer. Emergency and storm-damage searches especially happen in the field on a phone. A redesign built mobile-first wins those visitors back." },
      { title: "It doesn't convert visitors into leads", body: "Traffic that doesn't turn into calls is wasted. A generic old contractor site gives a visitor in Benton or Sherwood no clear reason to choose you over the next result. We rebuild for conversions and for the specific communities you serve, so the right buyers pick up the phone." },
    ],
    servicesHeading: "What's in an OnwardCraft Little Rock redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just refreshing the look." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — especially important heading into storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just aesthetics." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for conversions, better for rankings, and essential for mobile emergency searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Little Rock traffic arrives — especially the urgent searches after storms, ice events, and HVAC failures." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that reflects the quality of your work and the communities you've served across the Little Rock metro." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the specific communities you serve — Hillcrest, Conway, Benton, Maumelle, and beyond — so the new site stands out in local searches instead of reading like every other contractor's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI — especially for the emergency and restoration queries that matter most in this market.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's costing you leads and rankings, then map a redesign that fixes it without breaking what already works — with your peak storm and HVAC seasons in mind." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build anything." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail so the migration is clean and your traffic carries through." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve — not drop — going into your next peak season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's actually converting in your neighborhoods, plus ongoing speed and security updates." },
    ],
    pricing: {
      heading: 'Transparent Little Rock redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Little Rock contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor serving multiple Little Rock neighborhoods.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location businesses across the Arkansas metro.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Little Rock?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully — and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them. In Little Rock, protecting your rankings going into storm season or a summer HVAC rush is especially important, and we plan for that." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't generating leads, or doesn't reflect the specific communities you serve across the Little Rock metro, it's quietly costing you work. The free audit tells you plainly whether a redesign is worth it and what it would fix." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost in the transition." },
      { q: 'Will the redesign help me compete in Little Rock?', a: "Yes — and in a market shaped by storm surges and strong seasonal demand, being the site that loads fast and converts on the first visit matters. We rebuild around the specific communities you serve, make the offer and call button obvious, and structure everything for the searches that drive your busiest seasons." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and ensures you're capturing the mobile searches that happen immediately after a storm or HVAC failure." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, a fixed-price quote with a timeline, and a safe migration plan so your traffic carries through. No pitch deck — just a diagnosis and a plan." },
    ],
  },
];

export const littleRockCity = {
  citySlug: 'little-rock', city: 'Little Rock', state: 'Arkansas', stateAbbr: 'AR', metro: 'Little Rock',

  titleTag: 'Little Rock Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Little Rock trade contractors. Get found before storm season, get booked through summer HVAC rushes, and own your leads.',

  eyebrow: 'Little Rock · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Little Rock contractors found and booked',
  h2Exact: 'Little Rock Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for a market shaped by tornado-alley storms, Arkansas River flooding, and brutal summer humidity. One team to get you ranking before the rush, converting while it's happening, and off the rented-lead treadmill for good.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Little Rock audit',

  intro:
    "If you run a contracting business in Little Rock, you're working in a market where demand can double overnight. A tornado cuts through Pulaski County in April, an ice storm rolls in January, the temperature breaks 95 for a week in July — and whoever is already ranking in the Map Pack gets the calls. Winning here means three things working together: a site that converts a stressed homeowner in seconds, SEO that ranks you for the right searches before peak season, and local SEO that puts you in the top three for the neighborhoods you actually serve. Here's how we help Little Rock contractors do exactly that.",
  aioQuestion: 'How do Little Rock contractors get more leads online?',
  aioAnswer:
    "Little Rock contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because demand here spikes hard and fast after tornado events, ice storms, and summer heat waves, the contractors who are already ranking when disaster strikes capture almost all the emergency and restoration work. Building that visibility in the off-peak window — not chasing it after the storm has passed — is what separates the contractors with full calendars from the ones scrambling.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Little Rock searches 'near me.' Essential before tornado season, summer HVAC rushes, and winter ice events — done neighborhood by neighborhood, not as one generic city page.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers search when disaster strikes or an emergency hits, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that earn trust from a storm-stressed homeowner in three seconds and turn that visit into a booked job — not brochures that sit there while competitors take the call.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you've earned — especially heading into the next storm season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Little Rock?', a: "Four core services for trade contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before storm season, convert during it, and own their leads instead of renting them from Angi or HomeAdvisor." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand what tornado-damage surges look like, what Arkansas River flooding does to restoration demand, and how Little Rock's humid subtropical climate drives HVAC calls through the summer." },
    { q: 'Why does the Little Rock market need a specialized approach?', a: "Because demand here doesn't rise gradually — it spikes overnight after a tornado event, an ice storm, or a week of 95-degree heat. Only the contractors already ranking in the Map Pack capture that surge. The metro also spans a wide geography from Hillcrest and The Heights inside the city to Conway, Benton, and Bryant in the suburbs, each pulling its own searches. You have to rank neighborhood by neighborhood, with seasonal timing built in." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $8,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Little Rock areas do you serve?', a: "Little Rock, North Little Rock, Conway, Benton, Bryant, Sherwood, Maumelle, Jacksonville, Cabot, and neighborhoods inside the city like Hillcrest, The Heights, Pulaski Heights, West Little Rock, and Chenal Valley. We build genuine local pages for the communities you actually serve." },
    { q: 'Where should I start?', a: "Start with a free Little Rock audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before your next peak season. No pitch deck, just a plain diagnosis and a plan." },
  ],
};

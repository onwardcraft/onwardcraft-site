// NORFOLK — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Norfolk's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// NORFOLK — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Norfolk is a moving target',
  body:
    "Norfolk anchors the Hampton Roads metro — roughly 1.8 million people spread across Norfolk, Virginia Beach, Chesapeake, Portsmouth, and Newport News, knit together by water on every side. Two forces shape demand here like nowhere else. First, the Navy: Norfolk is home to Naval Station Norfolk, the largest naval base on the planet, plus the Atlantic Fleet HQ and NATO Allied Command. Tens of thousands of Navy families PCS in and out every year, and the day they arrive in town they pull out a phone and search for a contractor they've never heard of. Second, the water: Norfolk has one of the worst recurrent tidal-flooding and sea-level-rise problems in the country, second only to New Orleans among US cities. \"Sunny day\" flooding, nor'easters, and hurricanes regularly soak neighborhoods like Ghent and Larchmont. Both forces mean steady, repeating demand — and the contractors already ranking are the ones who book it.",
  pullQuote: 'Every Navy family that PCSs into Norfolk searches for a contractor they\'ve never heard of — the ones ranking get the call.',
  donut: {
    title: 'Who Norfolk is',
    value: 40,
    centerLabel: 'Black/AA (city)',
    legend: [
      { label: 'Black/AA', pct: 40, kind: 'teal' },
      { label: 'Other', pct: 60, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: "Hurricane & tidal flooding (Aug–Nov), nor'easters (Nov–Mar)",
  seasonalDemand: [
    { m: 'J', v: 60, peak: true }, { m: 'F', v: 56, peak: true }, { m: 'M', v: 48 }, { m: 'A', v: 40 },
    { m: 'M', v: 42 }, { m: 'J', v: 54 }, { m: 'J', v: 70, peak: true },
    { m: 'A', v: 86, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 90, peak: true },
    { m: 'N', v: 72, peak: true }, { m: 'D', v: 58, peak: true },
  ],
  stats: [
    { value: '1.8M+', label: 'people across the Hampton Roads metro' },
    { value: "World's #1", label: 'largest naval base on Earth sits in Norfolk', accent: true },
    { value: 'Aug–Nov', label: 'hurricane and tidal-flood season, when demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Ghent', 'Larchmont', 'Colonial Place', 'Ocean View', 'Downtown Norfolk',
    'Riverview', 'East Beach', 'Park Place', 'Freemason', 'West Ghent',
    'Portsmouth', 'Chesapeake', 'Suffolk', 'Newport News', 'Hampton',
  ],
};

const AREAS = [
  'Norfolk', 'Virginia Beach', 'Chesapeake', 'Portsmouth', 'Newport News',
  'Hampton', 'Suffolk', 'Ghent', 'Ocean View', 'Larchmont',
  'Colonial Place', 'East Beach', 'Smithfield', 'Poquoson', 'Yorktown',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm season, tidal flooding, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Hampton Roads',
    body: "A constant churn of Navy families PCSing in, tidal flooding that never lets up, real neighborhood targeting from Ghent to Ocean View. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Norfolk contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and with Navy families arriving every month and the water rising every year, that gap only widens. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Norfolk', state: 'Virginia', stateAbbr: 'VA', metro: 'Norfolk-Hampton Roads',
  heroProof: ['Built for the trades', 'Storm & flood ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const norfolkLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'norfolk', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Norfolk Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Norfolk Local SEO that ranks you above the competition on the map, from Ghent to Ocean View, so the "near me" call lands with you.',
    eyebrow: 'Local SEO · Hampton Roads',
    h1: 'Norfolk Local SEO that ranks you above the competition from Ghent to Naval Station Norfolk',
    h2Exact: 'Norfolk Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — and so you're the name the next Navy family finds the day they hit town.",
    primaryCta: 'Get my free Norfolk audit',
    intro:
      "Norfolk Local SEO comes down to one thing: when a homeowner in Ghent or a sailor's family just stationed at Naval Station Norfolk searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With thousands of new arrivals every year and almost nobody with a contractor they already trust, ranking in that local 3-pack is the whole game. Here's how local SEO services and a tuned Google Business Profile get you there.",
    aioQuestion: 'How do Norfolk businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Hampton Roads neighborhoods. Norfolk has a constant influx of Navy families with no established contractors and a year-round flooding and storm problem, so the winners look established, respond fast, and are already ranking when demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Norfolk business can make." },
      { title: "You're missing the PCS wave", body: "Tens of thousands of Navy families rotate through Hampton Roads every year, and almost none of them arrive with a contractor they trust. They search, they tap one of the top three, they book. If you're not ranking when they land, that recurring, ready-to-spend audience goes to whoever Google already shows them." },
      { title: "You're not ranking when the water rises", body: "Norfolk floods more than almost any US city — sunny-day tides, nor'easters, and hurricanes hit Ghent, Larchmont, and Ocean View again and again. Demand for restoration, roofing, drainage, and HVAC spikes with every event, and the contractors already in the Map Pack take those calls. Ranking now is how you catch that demand instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Norfolk searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Ghent, Larchmont, Ocean View, Colonial Place and the rest, so you rank for the neighborhood someone's actually searching, not just \"Norfolk.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Hampton Roads sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Storm & flood-season readiness', desc: "We get your profile, pages, and reviews ranking before hurricane and tidal-flood season so you catch the demand spike instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Norfolk, Chesapeake, and Portsmouth, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Hampton Roads areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Hampton Roads.', features: ['Everything in Local Growth', 'Local link building', 'Storm & flood-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Norfolk?', a: "Most Norfolk engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Norfolk keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this active is selling you something." },
      { q: 'What makes Norfolk local SEO different?', a: "Two things. The military churn — tens of thousands of Navy families PCS through Hampton Roads every year with no contractor they already trust, so reviews and consistent listings carry real weight. And the water — Norfolk floods more than almost any US city, so trade demand swings hard with storms and tides, and your ranking has to be in place before the event, not after." },
      { q: 'How does local SEO help with Navy families moving in?', a: "Every PCS season brings thousands of new homeowners and renters who search for contractors from scratch the day they arrive. They tap one of the top three Map Pack results and book. We get you ranking and reviewed so you're the name they find, then keep you there for the next rotation — it's a recurring, ready-to-spend audience most contractors never deliberately target." },
      { q: 'How does local SEO help during flooding and storm season?', a: "When tidal flooding, a nor'easter, or a hurricane hits Norfolk, searches for restoration, roofing, drainage, and HVAC spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you catch that demand instead of competing for scraps after everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of Hampton Roads and the areas around it — Ghent, Larchmont, Ocean View, Colonial Place, plus Virginia Beach, Chesapeake, Portsmouth, Newport News, Suffolk and more. We build genuine neighborhood pages instead of one generic Norfolk page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, flood-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. Norfolk Local SEO is the opposite: we build rankings, a Google Business Profile, and a review base that put you on the map and send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'norfolk', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Norfolk SEO Company | OnwardCraft',
    metaDescription:
      'Norfolk SEO that climbs you past the competition on Google and brings in leads you own. Revenue-tied reporting, no lock-in, built for military and storm-season.',
    eyebrow: 'SEO Services · Hampton Roads',
    h1: 'Norfolk SEO that climbs you past the competition on Google, from the base gates to the waterfront',
    h2Exact: 'Norfolk SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Hampton Roads customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Norfolk SEO audit',
    intro:
      "Norfolk SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking on Google for the money keywords in a market driven by constant military turnover and relentless coastal flooding, building organic traffic you own and measuring it in booked leads, not vanity numbers.",
    aioQuestion: 'How do Norfolk businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Hampton Roads sources. In a market with a constant flow of new military arrivals and year-round flood and storm demand, keeping the site fast on mobile and ranking for seasonal and flood-driven terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Norfolk site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "Norfolk demand swings with PCS season and with every flood and storm, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores military-relocation, flood-driven, and seasonal searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Norfolk customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Hampton Roads and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm, flood & seasonal SEO', desc: "We rank you for the hurricane-, flood-, and PCS-driven searches that drive Norfolk's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Norfolk leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal, flood-driven, and military-relocation terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Hampton Roads and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Norfolk SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Hampton Roads search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm, flood & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Norfolk?', a: "Most Norfolk SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Norfolk?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Norfolk keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Norfolk SEO target flooding and storm season?', a: "Yes. When tidal flooding, a nor'easter, or a hurricane hits, searches for restoration, roofing, drainage, and HVAC spike overnight, and ranking takes months to build — so you have to be in place before the season, not chasing it after. We optimize for those seasonal and flood-driven terms ahead of time so your busiest months land on you." },
      { q: 'Can SEO reach the Navy families relocating here?', a: "Yes, and it's an audience most contractors ignore. Tens of thousands of military families PCS through Hampton Roads every year and search for contractors from scratch when they arrive. We rank you for relocation-driven and high-intent local terms so you keep catching that recurring wave of new homeowners." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-, flood-, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Norfolk do you cover?', a: "All of Hampton Roads and the surrounding areas — Virginia Beach, Chesapeake, Portsmouth, Newport News, Hampton, Suffolk and more — with genuine local pages rather than one generic Norfolk page." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's the clearest picture you'll get of what Norfolk SEO can do to push your money keywords onto page one. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'norfolk', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Norfolk Web Design Company | OnwardCraft',
    metaDescription:
      'Norfolk Web Design that loads fast and books more jobs, mobile-first sites built for contractors, military movers, and storm-season demand.',
    eyebrow: 'Web Design · Hampton Roads',
    h1: 'Norfolk web design that loads fast and books more jobs, even on the day a Larchmont street floods',
    h2Exact: 'Norfolk Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Norfolk contractors fast, mobile-first sites engineered to turn visitors into booked work — including the Navy family who just landed and the homeowner whose street just flooded.",
    primaryCta: 'Get my free quote',
    intro:
      "Norfolk Web Design done right fixes the quiet leaks that cost contractors leads: slow on a phone, buried call button, no clear offer. We build mobile-first sites that load fast, look like the professional you are, and convert Ghent-to-Ocean-View visitors into booked jobs, sites that don't fall over when a storm or PCS season sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in Norfolk?',
    aioAnswer:
      "A good Norfolk contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during storm season and PCS rotations. Because most Norfolk searches happen on mobile and many come from newly arrived military families with no local contacts, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Norfolk visitors are on mobile — including the Navy family searching from a moving truck on their first day in town. They bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a storm or PCS surge", body: "When flooding hits or a new rotation of military families arrives, contractor sites get hammered with traffic, and the slow ones buckle or bury the call button right when it matters most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft Norfolk website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Norfolk traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and newly arrived military families, and book the job — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Storm & surge ready', desc: "Built to stay fast and keep the call button front and center when flood- and PCS-season traffic spikes — the moment that turns visitors into your biggest jobs.", featured: true },
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
      heading: 'Transparent Norfolk web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm & surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Norfolk?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a storm or PCS-season traffic spike?', a: "Yes, and in Norfolk that matters. When flooding hits or a new rotation of military families arrives, contractor sites take a flood of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my site reach military families moving to Norfolk?', a: "It's designed to. Many of your visitors are newly stationed families searching on a phone with no local contractor in mind. We make the offer clear, the call button obvious, and the trust signals — reviews, photos, service areas — front and center so they book you instead of scrolling on." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Hampton Roads terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Norfolk traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. Norfolk Web Design with us is a one-time project with a fixed price, and you walk away owning a fast-loading site that converts visitors into booked jobs. Any ongoing maintenance or SEO is month-to-month, so you can leave whenever." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'norfolk', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Norfolk Website Redesign | OnwardCraft',
    metaDescription:
      'Norfolk Website Redesign done with a careful, SEO-safe migration. Faster, mobile-first rebuilds that convert more visitors and hold up in storm and PCS season.',
    eyebrow: 'Website Redesign · Hampton Roads',
    h1: 'Norfolk Website Redesign done with a careful, SEO-safe migration that keeps you ranking when the next PCS wave hits',
    h2Exact: 'Norfolk Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Norfolk contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Norfolk Website Redesign goes wrong one of two ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Norfolk contractor sites for speed and conversions, build them to handle storm- and PCS-season traffic, and run an SEO-safe migration with the redirects and metadata care that protect the rankings you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Norfolk site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds — and a Navy family with no local references judges even faster. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Norfolk visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow under a flood- or PCS-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Norfolk traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Storm & surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when flood- and PCS-season traffic spikes, so the new site captures your biggest jobs instead of choking on them.", featured: true },
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
      heading: 'Transparent Norfolk redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm & surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Norfolk?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when flood- or PCS-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle storm and PCS-season traffic?', a: "Yes, and in Norfolk that's a real consideration. When flooding hits or a new rotation of military families arrives, contractor sites take a surge of traffic, and the slow ones lose leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and the SEO-safe migration plan that makes a Norfolk Website Redesign rebuild your site without losing the rankings you've earned." },
    ],
  },
];

export const norfolkCity = {
  citySlug: 'norfolk', city: 'Norfolk', state: 'Virginia', stateAbbr: 'VA', metro: 'Norfolk-Hampton Roads',

  titleTag: 'Norfolk Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Norfolk marketing for contractors: web design, SEO, and local SEO that gets you found, gets you booked, and lets you own your leads instead of renting them.',

  eyebrow: 'Norfolk · Web Design, SEO & Lead Generation',
  h1: 'Norfolk marketing for contractors that fills your calendar through every PCS season and storm',
  h2Exact: 'Norfolk Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Hampton Roads' military-driven, flood-prone market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm & flood ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Norfolk audit',

  intro:
    "Norfolk marketing for contractors has to fit a market unlike any other: tens of thousands of Navy families rotating through Hampton Roads every year, and one of the worst coastal-flooding problems in the country. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all ready before the next PCS season or storm sends demand through the roof. As your Norfolk digital marketing agency, here's how we get you found and booked.",
  aioQuestion: 'How do Norfolk contractors get more leads online?',
  aioAnswer:
    "Norfolk contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Hampton Roads sees constant military turnover and frequent tidal flooding and storms, the contractors who look established and are already ranking before the next PCS season or flood win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Norfolk searches \"near me.\" The single highest-return move for most local businesses — and how you catch every PCS season and storm.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stay fast when storm and PCS season floods your phone — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Norfolk?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when PCS season or a storm hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, flood-driven demand, and insurance work." },
    { q: 'Why does the military presence matter for my marketing?', a: "Norfolk is home to the largest naval base on Earth, and tens of thousands of Navy families PCS through Hampton Roads every year with no contractor they already trust. They search the day they arrive and book one of the top results. Ranking takes months to build, so the contractors already visible win that recurring, ready-to-spend audience. We get you in place ahead of each rotation." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Norfolk areas do you serve?', a: "All of Hampton Roads and the surrounding areas — Ghent, Larchmont, Ocean View, Colonial Place, plus Virginia Beach, Chesapeake, Portsmouth, Newport News, Suffolk and more." },
    { q: 'Where should I start?', a: "Start with a free Norfolk audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves in your Norfolk marketing for contractors that will get you found and booked fastest. No pitch deck, just a plan." },
  ],
};

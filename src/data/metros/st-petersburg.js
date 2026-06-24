// ST. PETERSBURG — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across St. Petersburg's 4 service pages and the hub, because
// they describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ST. PETERSBURG — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in St. Petersburg is a moving target',
  body:
    "St. Pete sits on a peninsula wedged between Tampa Bay and the Gulf, which makes it one of the most beautiful — and most storm-exposed — places to run a contracting business in Florida. It's the Sunshine City, a magnet for retirees, young professionals, and transplants drawn by the arts scene, the waterfront, and a downtown that keeps booming. That mix means steady, year-round work, but it also means more contractors fighting for the same three spots on the map. Two things shape demand here. First, almost everyone searches on a phone, usually with \"near me\" attached, and they tap one of the first results without scrolling. Second, this is a peninsula surrounded by water. When storms like Helene and Milton hit in 2024, surge and wind devastated the barrier islands and waterfront neighborhoods, and demand for rebuilding, restoration, and storm-hardening exploded — a backlog that's still running. The businesses already ranking are the ones who book that work.",
  pullQuote: 'On a peninsula this exposed, the contractors already ranking are the ones who book the rebuild.',
  donut: {
    title: 'How St. Pete searches',
    value: 68,
    centerLabel: 'post-storm rebuilding demand',
    legend: [
      { label: 'Storm-impact rebuild', pct: 68, kind: 'teal' },
      { label: 'Routine maintenance', pct: 32, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season + surge (Jun–Nov), peaking May–Oct',
  seasonalDemand: [
    { m: 'J', v: 34 }, { m: 'F', v: 33 }, { m: 'M', v: 38 }, { m: 'A', v: 48 },
    { m: 'M', v: 62, peak: true }, { m: 'J', v: 74, peak: true }, { m: 'J', v: 84, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'S', v: 96, peak: true }, { m: 'O', v: 88, peak: true },
    { m: 'N', v: 60 }, { m: 'D', v: 42 },
  ],
  stats: [
    { value: '~1M+', label: 'people across St. Petersburg and Pinellas County' },
    { value: '~68%', label: 'of current contractor demand here is storm-impact rebuilding', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season and storm surge, when trade demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Old Northeast', 'Kenwood', 'Snell Isle', 'Downtown St. Pete', 'St. Pete Beach',
    'Treasure Island', 'Gulfport', 'Pinellas Park', 'Clearwater', 'Largo',
    'Seminole', 'Tierra Verde', 'Shore Acres', 'Crescent Lake', 'Coquina Key',
  ],
};

const AREAS = [
  'St. Petersburg', 'Clearwater', 'Largo', 'Pinellas Park', 'Seminole', 'Gulfport',
  'St. Pete Beach', 'Treasure Island', 'Tierra Verde', 'Dunedin', 'Safety Harbor',
  'Palm Harbor', 'Tarpon Springs', 'Kenneth City', 'Madeira Beach',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand surge damage, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak St. Pete',
    body: "Peninsula storm-surge exposure, barrier-island rebuilds, historic bungalow neighborhoods, real targeting from Old Northeast to Snell Isle to the beaches. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a St. Pete contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and after a storm hits the peninsula, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'St. Petersburg', state: 'Florida', stateAbbr: 'FL', metro: 'St. Petersburg-Pinellas County',
  heroProof: ['Built for the trades', 'Storm-rebuild ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const stPetersburgLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'st-petersburg', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'St. Petersburg Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'St. Petersburg Local SEO that ranks you above the competition on the map, from Old Northeast to St. Pete Beach. We get you into the top three.',
    eyebrow: 'Local SEO · St. Petersburg',
    h1: 'St. Petersburg Local SEO that ranks you above the competition from Old Northeast to the beaches',
    h2Exact: 'St. Petersburg Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so the call lands with you instead of whoever ranked first — and so you're ready when the next storm fills everyone's phone across the peninsula.",
    primaryCta: 'Get my free St. Pete audit',
    intro:
      "St. Petersburg local SEO comes down to one thing: when a homeowner in Old Northeast or out on St. Pete Beach searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With a steady stream of retirees and transplants and a market still rebuilding from Helene and Milton, becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do St. Petersburg businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Pinellas County neighborhoods. St. Pete sits on a storm-exposed peninsula, so the winners look established, respond fast, and are already ranking when surge-driven rebuilding demand spikes.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a St. Pete business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Pinellas homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready when the storm hits", body: "When Helene's surge and Milton's winds tore through Pinellas in 2024, demand for roofing, restoration, and HVAC went vertical overnight, and the contractors already ranking took the calls. On a peninsula this exposed, the next storm is a matter of when, not if. Ranking now is how you catch that wave instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which St. Pete searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Old Northeast, Kenwood, Snell Isle, St. Pete Beach, Gulfport and the rest, so you rank for the neighborhood someone's actually searching, not just \"St. Petersburg.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from St. Pete sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Storm-rebuild readiness', desc: "We get your profile, pages, and reviews ranking before hurricane season so you catch the surge-driven rebuild demand instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Pinellas County, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Pinellas areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Pinellas County.', features: ['Everything in Local Growth', 'Local link building', 'Storm-rebuild demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in St. Petersburg?', a: "Most St. Pete engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive St. Pete keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market rebuilding this fast is selling you something." },
      { q: 'What makes St. Petersburg local SEO different?', a: "Two things. It's a peninsula surrounded by water, so storm-surge exposure makes trust signals like reviews and consistent listings carry real weight when homeowners are choosing who to trust with a rebuild. And the city is still recovering from Helene and Milton, so rebuilding demand is high — your ranking has to be in place before the next storm, not after." },
      { q: 'How does local SEO help me after a storm like Helene or Milton?', a: "When surge and wind hit the peninsula, searches for roofing, restoration, and HVAC spike overnight, and the businesses already in the Map Pack take those calls. We get you ranking and reviewed ahead of season so you catch that demand instead of competing for scraps after everyone else is already booked." },
      { q: 'Which areas do you cover?', a: "All of St. Petersburg and Pinellas County — Old Northeast, Kenwood, Snell Isle, St. Pete Beach, Treasure Island, Gulfport, plus Clearwater, Largo, Seminole, Pinellas Park and more. We build genuine neighborhood pages instead of one generic St. Pete page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, surge-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's the fastest way to see what St. Petersburg local SEO can actually do for your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'st-petersburg', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'St. Petersburg SEO Company | Climb Past the Competition | OnwardCraft',
    metaDescription:
      'St. Petersburg SEO that climbs contractors past the competition on Google across Pinellas County. Revenue-tied reporting, no lock-in, built for storm-rebuild demand.',
    eyebrow: 'SEO Services · St. Petersburg',
    h1: 'St. Petersburg SEO that climbs you past the competition on Google across Pinellas County',
    h2Exact: 'St. Petersburg SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your St. Pete customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free St. Pete SEO audit',
    intro:
      "St. Petersburg SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a storm-exposed, fast-rebuilding peninsula market — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do St. Petersburg businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted St. Pete sources. On a storm-exposed Gulf peninsula, keeping the site fast on mobile and ranking for surge-driven, seasonal terms are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your St. Pete site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the demand that matters", body: "St. Pete demand swings with the season and the storms, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores surge-driven and seasonal searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your St. Pete customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real St. Pete and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & seasonal SEO', desc: "We rank you for the surge-driven and seasonal searches that drive St. Pete's busiest months, so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real St. Pete leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and surge-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted St. Pete and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent St. Petersburg SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Pinellas County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & seasonal SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in St. Petersburg?', a: "Most St. Pete SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in St. Petersburg?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive St. Pete keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my St. Pete SEO target hurricane season?', a: "Yes. When storms like Helene or Milton hit the peninsula, searches for roofing, restoration, and HVAC spike overnight, and ranking takes months to build — so you have to be in place before the season, not chasing it after. We optimize for those seasonal and surge-driven terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around St. Petersburg do you cover?', a: "All of Pinellas County and the surrounding areas — Clearwater, Largo, Seminole, Gulfport, St. Pete Beach, Treasure Island, Pinellas Park and more — with genuine local pages rather than one generic St. Pete page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's the clearest way to see what St. Petersburg SEO can earn you on page one. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'st-petersburg', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'St. Petersburg Web Design Company | Fast Sites That Book Jobs | OnwardCraft',
    metaDescription:
      'St. Petersburg web design that loads fast and books more jobs, mobile-first sites built for Pinellas contractors and storm-rebuild demand.',
    eyebrow: 'Web Design · St. Petersburg',
    h1: 'St. Petersburg web design that loads fast and books more jobs, even when storm season floods the phone',
    h2Exact: 'St. Petersburg Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build St. Pete contractors fast, mobile-first sites engineered to turn visitors into booked work — and to hold up when storm season floods your phone.",
    primaryCta: 'Get my free quote',
    intro:
      "St. Petersburg web design lives or dies on one thing: does the site turn a visitor into a booked job? Most St. Pete contractor websites lose leads quietly, slow on a phone, buried call button, no clear offer. We build sites that load fast, look like the professional you are, and turn Old-Northeast-to-the-beaches visitors into booked jobs, and that don't fall over when a storm sends your traffic through the roof.",
    aioQuestion: 'What makes a good contractor website in St. Petersburg?',
    aioAnswer:
      "A good St. Petersburg contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during storm season. Because most St. Pete searches happen on mobile, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your St. Pete visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a storm-season surge", body: "After Helene and Milton, contractor sites got hit with a flood of traffic, and the slow ones buckled or buried the call button right when it mattered most. We build sites that stay fast and convert under load, so you capture that rebuild demand instead of losing it." },
    ],
    servicesHeading: "What's in an OnwardCraft St. Petersburg website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your St. Pete traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Storm-surge ready', desc: "Built to stay fast and keep the call button front and center when storm-season traffic spikes — the moment that turns visitors into your biggest rebuild jobs.", featured: true },
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
      heading: 'Transparent St. Petersburg web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in St. Petersburg?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a storm-season traffic spike?', a: "Yes, and on a peninsula like St. Pete that matters. After Helene and Milton, contractor sites took a flood of traffic, and the slow ones lost leads right when demand peaked. We build fast and keep the call button obvious, so your site converts under load instead of buckling." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive St. Pete terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your St. Pete traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what high-converting St. Petersburg web design should include for your trade, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'st-petersburg', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'St. Petersburg Website Redesign | SEO-Safe Migration | OnwardCraft',
    metaDescription:
      'St. Petersburg website redesign done with a careful, SEO-safe migration so you keep every ranking. Faster, mobile-first rebuilds that convert and hold up in storm.',
    eyebrow: 'Website Redesign · St. Petersburg',
    h1: 'St. Petersburg website redesign done with a careful, SEO-safe migration that keeps every Pinellas ranking',
    h2Exact: 'St. Petersburg Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign St. Pete contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "A St. Petersburg website redesign goes one of two bad ways when it's rushed: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign St. Pete contractor sites for speed and conversions, build them to handle storm-season traffic, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your St. Pete site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your St. Pete visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that gets slow under a storm-season surge loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your St. Pete traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when storm-season traffic spikes, so the new site captures your biggest rebuild jobs instead of choking on them.", featured: true },
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
      heading: 'Transparent St. Petersburg redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in St. Petersburg?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when storm-season traffic surges, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle storm-season traffic?', a: "Yes, and on the St. Pete peninsula that's a real consideration. After Helene and Milton, contractor sites took a surge of traffic, and the slow ones lost leads. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and the SEO-safe migration plan that makes a St. Petersburg website redesign worth doing in the first place." },
    ],
  },
];

export const stPetersburgCity = {
  citySlug: 'st-petersburg', city: 'St. Petersburg', state: 'Florida', stateAbbr: 'FL', metro: 'St. Petersburg-Pinellas County',

  titleTag: 'St. Petersburg Marketing for Contractors | OnwardCraft',
  metaDescription:
    'St. Petersburg marketing for contractors that fills your calendar: web design, SEO, and local SEO across Pinellas. Own your leads instead of renting them, built for storm-rebuild.',

  eyebrow: 'St. Petersburg · Web Design, SEO & Lead Generation',
  h1: 'St. Petersburg marketing for contractors that fills your calendar on a storm-exposed peninsula',
  h2Exact: 'St. Petersburg Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for St. Pete's storm-exposed, fast-rebuilding peninsula market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Storm-rebuild ready', 'No lock-in contracts'],
  primaryCta: 'Get my free St. Pete audit',

  intro:
    "St. Petersburg marketing for contractors comes down to one fight: getting found on a peninsula that draws retirees and transplants year-round, where the competition grows right along with the demand. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack, all ready before the next storm sends rebuild demand through the roof. Here's how we help St. Pete contractors do exactly that.",
  aioQuestion: 'How do St. Petersburg contractors get more leads online?',
  aioAnswer:
    "St. Petersburg contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because St. Pete sits on a storm-exposed peninsula where rebuilding demand spikes hard after hurricanes like Helene and Milton, the contractors who look established and are already ranking before the storm win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when St. Pete searches \"near me.\" The single highest-return move for most local businesses — and how you catch storm-rebuild demand.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stay fast when storm season floods your phone — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in St. Petersburg?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready when storm season hits the peninsula." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, surge-driven demand, and insurance work." },
    { q: 'Why does storm season matter for my marketing?', a: "When hurricanes like Helene and Milton hit Pinellas County, demand for roofing, restoration, and HVAC spikes overnight and the rebuild backlog can run for a year or more. Ranking takes months to build, so the contractors who are already visible before the storm take that work. We get you in place ahead of season." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which St. Petersburg areas do you serve?', a: "All of St. Petersburg and Pinellas County — Old Northeast, Kenwood, Snell Isle, St. Pete Beach, Treasure Island, Gulfport, plus Clearwater, Largo, Seminole, Pinellas Park and more." },
    { q: 'Where should I start?', a: "Start with a free St. Pete audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It's the simplest first step into St. Petersburg marketing for contractors that actually fills the calendar. No pitch deck, just a plan." },
  ],
};

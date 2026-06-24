// RENO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Reno's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// RENO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Reno is a race against California transplants and wildfire smoke",
  body:
    "Reno has become one of the fastest-growing metros in the West, and the story is largely California. Bay Area and Sacramento transplants fleeing high taxes and home prices have flooded the Reno-Sparks market, bringing West Coast incomes and an appetite for home improvement. Tesla's Gigafactory, Apple, Amazon, and Switch data centers turned this into a legitimate tech hub almost overnight. These newcomers buy homes fast and immediately search for contractors — often the same week they close. But Reno's homeowners aren't only new arrivals. The casino-adjacent economy means a large base of service-worker and hospitality homeowners who are value-conscious and comparison-shopping hard. Layer on the climate: sitting at 3,400 feet in the high desert, Reno swings from 105°F summers to single-digit winter nights with serious snowfall, so every HVAC system has to be built for both extremes. Then there's the air quality problem — August through October wildfire smoke from Nevada and California fires regularly ranks Reno among the worst air-quality cities in the country, and filtration and HVAC upgrade demand spikes dramatically every single year. The contractors already ranking when smoke rolls in book the work. The ones invisible on Google miss it entirely.",
  pullQuote: "In the Biggest Little City, California transplants with Bay Area incomes are searching for contractors the week they close — be the one who shows up.",
  donut: {
    title: "How fast Reno is growing",
    value: 65,
    centerLabel: "transplant growth",
    legend: [
      { label: "New residents 2015–2024", pct: 65, kind: "teal" },
      { label: "Legacy residents", pct: 35, kind: "grey" },
    ],
  },
  seasonTitle: "When trade demand spikes",
  seasonCaption: "Wildfire smoke HVAC (Aug–Oct), summer heat (Jun–Sep), winter heating (Nov–Mar)",
  seasonalDemand: [
    { m: "J", v: 80, peak: true }, { m: "F", v: 75, peak: true }, { m: "M", v: 50 },
    { m: "A", v: 45 }, { m: "M", v: 55 }, { m: "J", v: 78, peak: true }, { m: "J", v: 92, peak: true },
    { m: "A", v: 95, peak: true }, { m: "S", v: 88, peak: true }, { m: "O", v: 62 },
    { m: "N", v: 74, peak: true }, { m: "D", v: 78, peak: true },
  ],
  stats: [
    { value: "580K+", label: "people across the Reno-Sparks metro and growing fast" },
    { value: "65%", label: "of recent population growth driven by California and Bay Area transplants", accent: true },
    { value: "Aug–Oct", label: "wildfire smoke season, when HVAC filtration demand spikes" },
    { value: "3,400 ft", label: "elevation — high desert climate means HVAC must handle 105°F summers and cold snowy winters" },
  ],
  neighborhoods: [
    "Midtown", "Old Southwest", "Northwest Reno", "Sparks", "Spanish Springs",
    "South Reno", "Damonte Ranch", "Incline Village", "Carson City",
    "Downtown Reno", "Somersett", "Caughlin Ranch", "Sun Valley", "Fernley",
    "Verdi",
  ],
};

const AREAS = [
  "Midtown", "Old Southwest", "Northwest Reno", "Sparks", "Spanish Springs",
  "South Reno", "Damonte Ranch", "Incline Village", "Carson City",
  "Downtown Reno", "Somersett", "Caughlin Ranch", "Sun Valley", "Fernley", "Verdi",
];

const FOUNDER =
  "I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three competitors bought too. In a market like Reno — exploding with California transplants who have real budgets and need contractors fast — the contractor who owns search doesn't need to rent leads. That's the whole point: get you ranking for the wildfire-smoke HVAC call, the high-desert heating job, the xeriscape conversion, the earthquake retrofit — so those leads belong to you permanently. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We only do the trades",
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, landscaping, GCs. We understand wildfire-smoke HVAC surges, high-desert heating and cooling extremes, xeriscape conversions, and earthquake retrofit work, so everything we build is shaped around how Reno customers actually search.",
  },
  {
    title: "We get you off rented leads",
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially in a market where transplants are actively searching the week they close on a home.",
  },
  {
    title: "We actually understand Reno's market",
    body: "California-exodus growth, wildfire smoke seasons, high-desert climate extremes, Walker Lane seismic risk, drought-driven xeriscape demand, value-conscious casino-economy buyers. The stuff a national shop can't do by swapping a city name into a template.",
  },
  {
    title: "No contracts, no mystery",
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the pressure where it belongs: on us.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people search locally.",
  stats: [
    { value: "46%", label: "of Google searches have local intent", n: 46 },
    { value: "76%", label: "who search local on a phone visit a business that day", n: 76 },
    { value: "28%", label: "of local searches end in a purchase", n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Reno contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when wildfire smoke rolls in and every homeowner is searching for HVAC filtration upgrades, the contractor already ranking gets the surge. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 }, { d: "30", pos: 11 }, { d: "60", pos: 8 },
    { d: "90", pos: 5 }, { d: "120", pos: 3 }, { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Reno", state: "Nevada", stateAbbr: "NV", metro: "Reno-Sparks",
  heroProof: ["Built for the trades", "Reno-Sparks neighborhood targeting", "No lock-in contracts"],
  founderNote: FOUNDER, founderName: "The OnwardCraft team",
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const renoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "reno", serviceSlug: "local-seo", service: "Local SEO",
    titleTag: "Reno Local SEO Company | Win the Map Pack | OnwardCraft",
    metaDescription:
      "Reno Local SEO that gets your business into the three map pins neighbors tap first, from Midtown to Damonte Ranch, for the wildfire-smoke HVAC call.",
    eyebrow: "Local SEO · Reno-Sparks",
    h1: "Reno Local SEO that gets you found when Midtown neighbors search your trade",
    h2Exact: "Reno Local SEO Company",
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market growing as fast as Reno — California transplants searching for contractors the week they close — we get you into that top three for your neighborhoods, so the call lands with you.",
    primaryCta: "Get my free Reno audit",
    intro:
      "Reno Local SEO comes down to one thing: when a new arrival in Damonte Ranch or a longtime resident in Old Southwest searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The Reno-Sparks market is growing faster than almost anywhere in the West, wildfire smoke HVAC demand spikes every August through October, and California transplants with Bay Area incomes are shopping for contractors constantly. Winning the Google Map Pack, the local 3-pack neighbors actually tap, is the whole game.",
    aioQuestion: "How do Reno businesses rank higher in local search?",
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Reno neighborhoods and Sparks communities. In a fast-growing, transplant-heavy market like Reno, contractors who target tight neighborhood service areas, optimize for wildfire-smoke HVAC and high-desert climate searches, and respond fast during seasonal demand spikes pull ahead of competitors who ignore those angles.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: "Your competitors own the three spots on the map", body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. The California transplant who just closed on a home in South Reno — with a Bay Area budget and a list of contractors to hire — taps one of those three and moves on. If you're not one of them, it almost doesn't matter how good your work is." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Reno homeowner to four contractors, then bill each of you to fight over them. In a market exploding with transplants who are actively searching, that's a particularly painful treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead." },
      { title: "You're invisible during wildfire smoke season", body: "Every August through October, Reno's air quality tanks and homeowners flood Google searching for HVAC filtration upgrades, air purifiers, and indoor air quality solutions. The contractors already ranking when the smoke rolls in book that surge. If you're not visible before the season starts, you miss it entirely." },
    ],
    servicesHeading: "What it actually takes to rank you",
    services: [
      { name: "Google Business Profile", desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Reno-Sparks searches you should win." },
      { name: "Citations and NAP cleanup", desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: "Reviews that keep coming", desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes transplant homeowners pick up the phone." },
      { name: "Neighborhood pages", desc: "Real pages for Sparks, Damonte Ranch, Spanish Springs, Midtown, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Reno.\"" },
      { name: "On-page and technical SEO", desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: "Local link building", desc: "Mentions and links from Reno and Nevada sources Google trusts — local press, business associations, community partners. This is what separates page one from page two here." },
      { name: "Wildfire smoke and seasonal HVAC SEO", desc: "We rank you for the air-quality and filtration searches that spike every August through October, and for the heating and cooling searches that define the high-desert climate year-round.", featured: true },
      { name: "AI search readiness", desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      { name: "Audit and baseline", desc: "We find out where you actually rank today across your Reno-Sparks neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: "Fix the foundation", desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: "Build trust signals", desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before wildfire season, not during it." },
      { name: "Add local content", desc: "Neighborhood and service-area pages across Reno, Sparks, and surrounding communities, plus the on-page work to back them up." },
      { name: "Report and expand", desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "Local Starter", price: "$750", cadence: "/mo", desc: "One location, getting the Map Pack foundation right.", features: ["Google Business Profile optimization", "Citation cleanup and core listings", "One location or primary service area", "Review system setup", "Plain-English monthly report"] },
        { name: "Local Growth", price: "$1,500", cadence: "/mo", desc: "For businesses fighting across several Reno-Sparks neighborhoods.", features: ["Everything in Local Starter", "Up to 5 priority keywords", "Ongoing review generation", "Neighborhood landing pages", "On-page and technical SEO"], featured: true },
        { name: "Local Authority", price: "$2,500", cadence: "/mo", desc: "For contractors who want to own the map across Reno, Sparks, and beyond.", features: ["Everything in Local Growth", "Local link building", "Wildfire smoke and seasonal SEO", "Multi-neighborhood service-area pages", "AI search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does local SEO cost in Reno?", a: "Most Reno engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: "How long until I show up in the Map Pack?", a: "Profile improvements can move in a few weeks. The more competitive Reno keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market growing this fast is selling you something." },
      { q: "What makes Reno local SEO different from other markets?", a: "Three things. The market is exploding with California transplants who have real budgets and are searching for contractors constantly — often the week they close on a home. Wildfire smoke HVAC demand spikes every August through October, and the contractor already ranking gets that surge. And the high-desert climate means year-round dual demand for heating and cooling systems, which adds up to more search volume than most mid-sized markets." },
      { q: "Can you help me rank for wildfire smoke and air quality searches?", a: "Yes, and in Reno that's a real edge. Every August through October, smoke events make Reno one of the worst air-quality cities in the country. Homeowners flood Google searching for HVAC filtration upgrades, air purifiers, and IAQ solutions. We optimize your profile and content to capture that seasonal surge before your competitors do." },
      { q: "Which areas do you cover?", a: "All of Reno-Sparks and the surrounding communities — Midtown, Old Southwest, Northwest Reno, Sparks, Spanish Springs, South Reno, Damonte Ranch, Incline Village, Carson City, Somersett, Caughlin Ranch, Sun Valley, Fernley, and Verdi. We build genuine neighborhood pages instead of one generic Reno page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: "Do you work with contractors specifically?", a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, landscaping, and general contractors. We understand wildfire-smoke filtration surges, high-desert heating and cooling seasons, xeriscape landscaping conversions, and earthquake retrofit work, and we build your local SEO around them." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: "Am I locked into a contract?", a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "How does this get me off Angi and HomeAdvisor?", a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because transplant homeowners — and longtime Reno residents — are finding you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Reno-Sparks neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's the fastest way to see exactly what Reno Local SEO can do for your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "reno", serviceSlug: "seo-services", service: "SEO Services",
    titleTag: "Reno SEO Company | Rank Higher, Get Leads | OnwardCraft",
    metaDescription:
      "Reno SEO that turns organic traffic into booked work for contractors, from the Truckee Meadows to Tahoe. Revenue-tied reporting and no lock-in contracts.",
    eyebrow: "SEO Services · Reno-Sparks",
    h1: "Reno SEO that turns Truckee Meadows organic traffic into booked work",
    h2Exact: "Reno SEO Company",
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Reno customers search — wildfire HVAC upgrades, high-desert heating and cooling, xeriscape conversions — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: "Get my free Reno SEO audit",
    intro:
      "Reno SEO comes down to one question: when a California transplant or longtime Nevada homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across the Truckee Meadows and up toward Tahoe, in a market growing faster than almost anywhere in the West, and we turn that organic traffic into booked work, measured in leads, not vanity traffic.",
    aioQuestion: "How do Reno businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Reno and Sparks neighborhoods, and earning links from trusted Nevada sources. In a market driven by California transplants and seasonal wildfire-smoke HVAC demand, contractors who optimize for those unique local angles and rank before seasonal peaks hit pull ahead of competitors who treat Reno like a generic mid-sized city.",
    problemHeading: "Three reasons your Reno site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. The California transplant who just moved to Damonte Ranch with a list of contractors to hire taps one of the top results and moves on. If you're not in the top handful for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget pauses, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — including during the wildfire smoke surges when every HVAC contractor in the valley is fighting for the same clicks." },
      { title: "You're not ranking for the demand that matters", body: "Reno's demand swings hard with the seasons and the weather: air quality surges in August through October, summer heat spikes in June through September, winter heating and snow in November through March. Contractors who rank for those terms ahead of time catch the spike. If your SEO ignores Reno's specific seasonal and climate-driven searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: "The SEO work that actually moves rankings",
    services: [
      { name: "Technical SEO", desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: "On-page optimization", desc: "Every important page tuned for the exact terms your Reno and Sparks customers search — titles, headings, content, and internal links." },
      { name: "Content that ranks", desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: "Link building", desc: "Authority from real Reno, Nevada, and industry sources. In a growing market this competitive, links are often what separate page one from page two." },
      { name: "Local SEO & Google Business Profile", desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: "Revenue-tied reporting", desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: "Wildfire smoke, seasonal & climate SEO", desc: "We rank you for the air-quality and filtration searches that spike Aug–Oct, the heat searches Jun–Sep, and the heating searches Nov–Mar, so you're visible before demand peaks, not after.", featured: true },
      { name: "AI search & GEO", desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      { name: "Audit and strategy", desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Reno leads — including wildfire-smoke HVAC and high-desert climate terms your competitors ignore." },
      { name: "Fix the technical base", desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: "Optimize and create content", desc: "On-page work across your money pages plus new local content, including the seasonal and climate-driven terms that define demand in the high desert." },
      { name: "Build authority", desc: "Links and citations from trusted Reno, Nevada, and industry sources to push competitive keywords onto page one." },
      { name: "Report and scale", desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: "Transparent Reno SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "SEO Starter", price: "$900", cadence: "/mo", desc: "For a focused site going after its core local keywords.", features: ["Technical SEO fixes", "On-page optimization", "Up to 5 target keywords", "Google Business Profile", "Monthly lead-tied report"] },
        { name: "SEO Growth", price: "$1,800", cadence: "/mo", desc: "For contractors competing across services and neighborhoods.", features: ["Everything in SEO Starter", "Up to 12 target keywords", "Monthly content", "Link building", "On-page + local SEO"], featured: true },
        { name: "SEO Authority", price: "$3,000", cadence: "/mo", desc: "For businesses that want to own Reno-Sparks search.", features: ["Everything in SEO Growth", "Aggressive content + links", "Wildfire smoke and seasonal SEO", "Multi-neighborhood pages", "AI search / GEO optimization"] },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in Reno?", a: "Most Reno SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: "How long does SEO take to work in Reno?", a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it — and the sooner you start, the better positioned you are when wildfire smoke season hits." },
      { q: "Is SEO better than Google Ads in Reno?", a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Reno contractors do best running SEO as the long-term engine and ads for short-term spikes — like the wildfire-smoke HVAC surge or the first summer heat wave." },
      { q: "Should my Reno SEO target seasonal and climate demand?", a: "Absolutely. Wildfire smoke events from August through October drive massive HVAC filtration search spikes. Summer heat June through September drives AC and cooling searches. Winter heating and snow from November through March drives furnace and pipe searches. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add wildfire-smoke seasonal SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: "Do you require a long-term contract?", a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: "Which areas around Reno do you cover?", a: "All of Reno-Sparks and the surrounding communities — Midtown, Old Southwest, Northwest Reno, Sparks, Spanish Springs, South Reno, Damonte Ranch, Incline Village, Carson City, Somersett, Caughlin Ranch, Sun Valley, Fernley, and Verdi — with genuine local pages rather than one generic Reno page." },
      { q: "How do you get me off Angi and HomeAdvisor leads?", a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially when California transplants are actively searching for contractors every day in this market." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's the clearest way to see what Reno SEO can do for your pipeline. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "reno", serviceSlug: "web-design", service: "Web Design",
    titleTag: "Reno Web Design Company | Sites That Convert | OnwardCraft",
    metaDescription:
      "Reno Web Design that makes Old Southwest and South Reno homeowners pick you. Fast, mobile-first contractor sites for a fast-growing, transplant-driven market.",
    eyebrow: "Web Design · Reno-Sparks",
    h1: "Reno Web Design that makes Old Southwest homeowners pick you",
    h2Exact: "Reno Web Design Company",
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Reno contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out in a market exploding with California transplants who are comparing contractors the week they close on a home.",
    primaryCta: "Get my free quote",
    intro:
      "Reno Web Design done right fixes the quiet leaks that drain most contractor websites: slow on a phone, buried call button, no clear offer, no local relevance. We build sites that load fast, look like the professional you are, and turn Damonte Ranch newcomers and longtime Midtown residents into booked jobs, built to win the California transplant with a Bay Area budget and the value-conscious homeowner who compares everyone.",
    aioQuestion: "What makes a good contractor website in Reno?",
    aioAnswer:
      "A good Reno contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because Reno is growing fast with transplants who don't have deep local referral networks yet, a site that looks professional and clearly serves your area is often the deciding factor — they go with the contractor whose site makes them feel confident, not the one whose site looks like it was built in 2014.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. The California transplant who just moved to South Reno needs a contractor and is comparing three websites at once — the one that answers their questions and makes it easy to call wins the job." },
      { title: "It's too slow on a phone", body: "Most of your Reno visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking — including during the wildfire-smoke HVAC surge when every phone in the valley is searching." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Spanish Springs wants to see you serve Spanish Springs — not a generic \"Reno\" page that could be anybody. We build sites that name the neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Reno website",
    services: [
      { name: "Custom design", desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: "Mobile-first build", desc: "Designed for the phone first, because that's where almost all of your Reno traffic is. Fast, thumb-friendly, easy to call from." },
      { name: "Conversion-focused UX", desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: "Copy that sells", desc: "Words that speak to anxious homeowners — transplants and locals alike — and book the job, not filler text that reads like everyone else." },
      { name: "Local SEO foundation", desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: "Speed & Core Web Vitals", desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings during seasonal demand spikes." },
      { name: "Neighborhood-targeted pages", desc: "Pages built around Sparks, Damonte Ranch, Spanish Springs, Midtown, and the other communities you serve, so you stand out instead of blending into one generic Reno page.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      { name: "Discovery and strategy", desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors — including the California-transplant buyer profile that defines so much of Reno's growth — then map the site around booking more of the work you want." },
      { name: "Design", desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: "Build and copy", desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: "Launch", desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: "Support and optimize", desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: "Transparent Reno web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Starter Site", price: "$2,000", cadence: "", desc: "A focused, high-converting site for a single-trade contractor.", features: ["Up to 5 custom pages", "Mobile-first design", "Lead forms + call buttons", "Local SEO foundation", "You own the site"] },
        { name: "Growth Site", price: "$4,500", cadence: "", desc: "A bigger site for established contractors with several services.", features: ["Up to 12 pages", "Custom design + copywriting", "Service + neighborhood pages", "Speed & Core Web Vitals", "Neighborhood-targeted pages"], featured: true },
        { name: "Custom Build", price: "$8,000", cadence: "", desc: "A full custom build for multi-service or multi-location businesses.", features: ["Fully custom design", "Advanced SEO + schema", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website cost in Reno?", a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: "How long does it take to build?", a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site help me stand out in Reno's fast-growing market?", a: "That's the whole point. Reno is exploding with California transplants who don't have local referral networks yet — they're going to Google and comparing contractor websites. A professional, fast, neighborhood-specific site is often what closes the deal." },
      { q: "Will my new site actually rank on Google?", a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Reno-Sparks terms and own the wildfire-smoke HVAC surge season." },
      { q: "Do I own the website?", a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: "Will it work well on phones?", a: "We design mobile-first, because that's where almost all of your Reno traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb — including during the August smoke events when everyone's searching from their phone." },
      { q: "What platform do you build on?", a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: "Do you offer ongoing support?", a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: "Am I locked into a contract?", a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what a high-converting Reno contractor site should include, and a fixed-price quote with a timeline. It's the simplest way to see what Reno Web Design can do for your booked jobs. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "reno", serviceSlug: "website-redesign", service: "Website Redesign",
    titleTag: "Reno Website Redesign | Keep Your Rankings | OnwardCraft",
    metaDescription:
      "Reno Website Redesign that turns an aging high-desert site into a lead engine. Faster, mobile-first rebuilds with an SEO-safe migration so you keep your rankings.",
    eyebrow: "Website Redesign · Reno-Sparks",
    h1: "Reno Website Redesign that turns an aging high-desert site into a lead engine",
    h2Exact: "Reno Website Redesign Company",
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, invisible during wildfire smoke season. We redesign Reno contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: "Get my free redesign audit",
    intro:
      "A Reno Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Reno contractor sites for speed and conversions, build them to stand out in a market growing fast with California transplants and seasonal demand spikes, and run an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured for Reno-specific searches than the old one.",
    problemHeading: "Signs your Reno site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "The California transplant comparing three contractors in Damonte Ranch judges each of you by your website in about ten seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In a market growing this fast with buyers who have real budgets, that's an expensive problem." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Reno visitors before they ever see your offer. That includes the August wildfire-smoke surge, when thousands of homeowners are searching from their phones. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert in a comparison-shopping market", body: "Traffic that doesn't turn into calls is wasted — and in a market this competitive, with transplant buyers who compare their options carefully, a generic old site gives them no reason to pick you. We rebuild for conversions and for the neighborhoods you actually serve." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: "Redesign audit", desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: "SEO-safe migration", desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: "Conversion redesign", desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: "Speed overhaul", desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially during seasonal demand spikes." },
      { name: "Mobile-first rebuild", desc: "Redesigned around the phone, where almost all your Reno traffic lives — including the surge searches during wildfire smoke season." },
      { name: "Brand refresh", desc: "A modern, trustworthy look that matches the quality of your work and reassures transplant buyers who don't have local referrals to lean on." },
      { name: "Neighborhood-targeted rebuild", desc: "Rebuilt around the Reno-Sparks communities you serve — Damonte Ranch, Spanish Springs, Midtown, South Reno, and more — so the new site stands out to local searchers instead of reading like everyone else's.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: "How we redesign: a careful rebuild",
    process: [
      { name: "Audit and plan", desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including the content that's already ranking for Reno seasonal terms." },
      { name: "Design", desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: "Rebuild and migrate", desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: "Launch with SEO care", desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: "Optimize", desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: "Transparent Reno redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Redesign Starter", price: "$2,500", cadence: "", desc: "A focused redesign for a small contractor site.", features: ["Up to 5 pages rebuilt", "Mobile-first redesign", "SEO-safe migration", "Conversion improvements", "You own the site"] },
        { name: "Redesign Growth", price: "$5,000", cadence: "", desc: "A full redesign for an established contractor site.", features: ["Up to 12 pages", "Custom design + copy refresh", "Speed overhaul", "Service + neighborhood pages", "Neighborhood-targeted rebuild"], featured: true },
        { name: "Full Rebuild", price: "$9,000", cadence: "", desc: "A complete rebuild for multi-service or multi-location sites.", features: ["Full custom rebuild", "Advanced SEO migration", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website redesign cost in Reno?", a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: "Will I lose my Google rankings if I redesign?", a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — including the seasonal terms that drive wildfire-smoke HVAC and high-desert heating and cooling leads." },
      { q: "How long does a redesign take?", a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: "How do I know I need a redesign?", a: "If your site is slow on phones, looks dated, isn't converting transplant homeowners who are comparison-shopping, or isn't visible during wildfire smoke season when HVAC searches spike, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: "Do you migrate my existing content?", a: "Yes. We carry over and improve your existing content, preserve what's ranking for Reno-specific searches, and handle the technical migration so nothing important gets lost." },
      { q: "Will the redesign help me compete for California transplant buyers?", a: "That's a core goal. Transplants don't have local referral networks yet — they compare contractor websites. A modern, fast, neighborhood-specific redesign is often the difference between winning that job and losing it to whoever looks more established online." },
      { q: "Will the new site be mobile-friendly and fast?", a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — including during the August through October wildfire smoke season when mobile HVAC searches spike." },
      { q: "Do I own the redesigned site?", a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "Am I locked into a contract?", a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. It's the clearest way to see whether a Reno Website Redesign will pay for itself in booked work." },
    ],
  },
];

export const renoCity = {
  citySlug: "reno", city: "Reno", state: "Nevada", stateAbbr: "NV", metro: "Reno-Sparks",

  titleTag: "Reno Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Reno marketing for contractors: web design, SEO, and local SEO that get you found by California transplants, own the wildfire-smoke HVAC surge, and book leads.",

  eyebrow: "Reno · Web Design, SEO & Lead Generation",
  h1: "Reno marketing for contractors that turns high-desert searches into jobs",
  h2Exact: "Reno Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for Reno's fast-growing, transplant-driven, high-desert market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ["Built for the trades", "Reno-Sparks neighborhood targeting", "No lock-in contracts"],
  primaryCta: "Get my free Reno audit",

  intro:
    "Reno marketing for contractors only pays off if the transplants and locals searching for your trade can actually find you, and you're in one of the fastest-growing markets in the West. California and Bay Area newcomers are buying homes in Damonte Ranch, Spanish Springs, and South Reno and immediately searching Google for contractors. Wildfire smoke rolls in every August through October and homeowners search frantically for HVAC filtration upgrades. The high desert demands heating and cooling systems that can handle 105°F summers and snowy winters. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve.",
  aioQuestion: "How do Reno contractors get more leads online?",
  aioAnswer:
    "Reno contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. In a market driven by California transplants with real budgets and wild seasonal demand swings — wildfire smoke HVAC surges in August through October, summer heat June through September, winter heating November through March — the contractors who are visible before those peaks hit get the work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO", serviceSlug: "local-seo", tagline: "Win the Map Pack",
      blurb: "Get into the top three businesses Google pins to the map when Reno searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood across Reno-Sparks.",
    },
    {
      service: "SEO Services", serviceSlug: "seo-services", tagline: "Rank higher, get leads",
      blurb: "Rank for the money keywords your customers actually search — wildfire HVAC, high-desert heating and cooling, xeriscape conversions — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: "Web Design", serviceSlug: "web-design", tagline: "Sites that convert",
      blurb: "Fast, mobile-first websites engineered to turn California transplants and longtime Nevada homeowners into booked jobs — not brochures that sit there while the competition gets the call.",
    },
    {
      service: "Website Redesign", serviceSlug: "website-redesign", tagline: "More leads, no traffic loss",
      blurb: "Rebuild an outdated site for speed and conversions in a comparison-shopping market, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: "What marketing services do you offer in Reno?", a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the fastest-growing markets in the West." },
    { q: "Do you work only with contractors?", a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, landscaping, and general contractors — so we understand wildfire-smoke filtration surges, high-desert heating and cooling seasons, xeriscape conversions, and earthquake retrofit work." },
    { q: "Why does the Reno market need a different approach?", a: "Reno's growth story is unique: California and Bay Area transplants with real budgets are arriving constantly and searching for contractors the week they close on a home. At the same time, wildfire smoke events August through October create massive seasonal HVAC demand, and the high desert's climate extremes mean heating and cooling search volume is high year-round. A national agency swapping a city name into a template misses all of that." },
    { q: "How much does it cost to work with you?", a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: "Which Reno-Sparks areas do you serve?", a: "All of Reno-Sparks and surrounding communities — Midtown, Old Southwest, Northwest Reno, Sparks, Spanish Springs, South Reno, Damonte Ranch, Incline Village, Carson City, Somersett, Caughlin Ranch, Sun Valley, Fernley, and Verdi." },
    { q: "Where should I start?", a: "Start with a free Reno audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest, including whether you're positioned for the next wildfire-smoke season. It's the simplest way to see what Reno marketing for contractors can do for your calendar. No pitch deck, just a plan." },
  ],
};

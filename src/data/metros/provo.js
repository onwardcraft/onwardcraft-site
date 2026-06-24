// PROVO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Provo's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// PROVO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Provo-Orem is a Silicon Slopes race",
  body:
    "Provo-Orem sits at the center of Utah's Silicon Slopes — the fastest-growing tech corridor in the country. Qualtrics, Adobe, Vivint, and hundreds of startups have planted major operations here, drawing young, high-income tech workers who are buying homes at a rapid pace and need contractors for everything from new-build punch lists to full renovations. Add BYU (45,000 students) and UVU (40,000 students) and you have an enormous young-homebuyer market that leads nationally. Utah has the highest birth rate in the country and the youngest median age, and large LDS families mean bigger homes, more maintenance demand, and a deep cultural commitment to homeownership. Winters here are real: the Wasatch Range drops serious snow and brutal cold on the valley, and freeze-thaw cycles take out driveways, roofs, and foundations every season. The valley also traps winter air during inversion events, pushing indoor air quality and HVAC filtration up the priority list for homeowners every January and February. Utah Valley's seismic faults make earthquake-prep services a real contractor category year-round. The contractors already in the Map Pack are collecting that demand. Everyone else is invisible.",
  pullQuote:
    "In a valley of fast-growing families, tech buyers, and mountain winters, the contractor who owns the map owns the work.",
  donut: {
    title: "Provo-Orem homeownership",
    value: 68,
    centerLabel: "homeowner rate",
    legend: [
      { label: "Homeowners", pct: 68, kind: "teal" },
      { label: "Renters", pct: 32, kind: "grey" },
    ],
  },
  seasonTitle: "When trade demand spikes",
  seasonCaption: "Winter snow/heating (Nov–Mar) and renovation season (Apr–Oct)",
  seasonalDemand: [
    { m: "J", v: 90, peak: true }, { m: "F", v: 88, peak: true }, { m: "M", v: 60 },
    { m: "A", v: 55 }, { m: "M", v: 58 }, { m: "J", v: 60 }, { m: "J", v: 62 },
    { m: "A", v: 60 }, { m: "S", v: 58 }, { m: "O", v: 62 },
    { m: "N", v: 78, peak: true }, { m: "D", v: 88, peak: true },
  ],
  stats: [
    { value: "600K+", label: "people across the Provo-Orem metro and growing fast" },
    { value: "#1", label: "Utah has the highest birth rate and youngest median age in the US", accent: true },
    { value: "Nov–Mar", label: "winter heating and snow-damage season, when trade demand peaks" },
    { value: "Top 3", label: "Map Pack spots that capture most of the clicks" },
  ],
  neighborhoods: [
    "Provo", "Orem", "American Fork", "Lehi", "Saratoga Springs",
    "Eagle Mountain", "Spanish Fork", "Springville", "Payson", "Mapleton",
    "Pleasant Grove", "Lindon", "Cedar Hills", "Alpine", "Highland",
  ],
};

const AREAS = [
  "Provo", "Orem", "American Fork", "Lehi", "Saratoga Springs",
  "Eagle Mountain", "Spanish Fork", "Springville", "Payson", "Mapleton",
  "Pleasant Grove", "Lindon", "Cedar Hills", "Alpine", "Highland",
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the communities you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We only do the trades",
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Wasatch winter damage, earthquake-prep work, and the fast-turnover renovation season that Silicon Slopes homebuyers drive, so everything we build is shaped around how your customers really search.",
  },
  {
    title: "We get you off rented leads",
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: "We actually speak Silicon Slopes",
    body: "Community-by-community targeting from Lehi to Payson, plus the local knowledge to win searches across a fast-growing valley most national agencies treat as one generic city. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Provo-Orem contractor gets around 1,800 local \"near me\" impressions a month across a handful of communities. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a valley growing this fast, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 }, { d: "30", pos: 11 }, { d: "60", pos: 8 },
    { d: "90", pos: 5 }, { d: "120", pos: 3 }, { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Provo", state: "Utah", stateAbbr: "UT", metro: "Provo-Orem (Silicon Slopes)",
  heroProof: ["Built for the trades", "Community-by-community targeting", "No lock-in contracts"],
  founderNote: FOUNDER, founderName: "The OnwardCraft team",
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const provoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "provo", serviceSlug: "local-seo", service: "Local SEO",
    titleTag: "Provo Local SEO Company | Win the Map Pack | OnwardCraft",
    metaDescription:
      "Provo Local SEO that makes you the first name on the map when Utah Valley searches your trade. We get you into the top three, so the call lands with you.",
    eyebrow: "Local SEO · Provo-Orem (Silicon Slopes)",
    h1: "Provo Local SEO that makes you the first name on the map from BYU to Eagle Mountain",
    h2Exact: "Provo Local SEO Company",
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a valley growing faster than almost anywhere in the country, we get you into that top three for your communities, so the call lands with you instead of whoever ranked first.",
    primaryCta: "Get my free Provo audit",
    intro:
      "Provo Local SEO comes down to one thing: when a homeowner near BYU or out in Spanish Fork searches your service plus \"near me,\" are you one of the three businesses Google pins to the Map Pack? Most people tap one of those three and never scroll. This valley is young, fast-growing, and full of tech-savvy homebuyers who search on their phones and expect instant results. Winning the local 3-pack in the communities you serve is the whole game. Here's how you do it.",
    aioQuestion: "How do Provo-Orem businesses rank higher in local search?",
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and communities you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Provo-Orem neighborhoods and cities. The valley is fast-growing and tech-forward, so the winners target specific communities, respond fast during winter and spring demand spikes, and structure their content so AI search tools can read and recommend them.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: "Your competitors own the three spots on the map", body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In a valley this competitive and this fast-growing they get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for your communities is usually the single highest-return move a Provo-Orem contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Provo homeowner to four contractors, then bill each of you to fight over them. It's a treadmill, and as Silicon Slopes grows the per-lead competition is only intensifying. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to a rapidly growing market", body: "New subdivisions in Saratoga Springs, Eagle Mountain, and Lehi are filling with young families and tech workers who own homes and need contractors. Most established contractors haven't optimized for those specific communities, so the demand sits there unclaimed. Targeting the right neighborhoods is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: "What it actually takes to rank you",
    services: [
      { name: "Google Business Profile", desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Provo-Orem searches you should win." },
      { name: "Citations and NAP cleanup", desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: "Reviews that keep coming", desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: "Community pages", desc: "Real pages for Lehi, Saratoga Springs, Eagle Mountain, Spanish Fork, and the rest, so you rank for the city someone's actually searching, not just \"Provo.\"" },
      { name: "On-page and technical SEO", desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: "Local link building", desc: "Mentions and links from Utah Valley sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: "Seasonal and earthquake-prep targeting", desc: "We rank you for winter snow-damage and heating searches, inversion-season HVAC calls, and earthquake-preparedness services — the demand peaks that define the Utah Valley contractor calendar.", featured: true },
      { name: "AI search readiness", desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      { name: "Audit and baseline", desc: "We find out where you actually rank today across your communities and pin down which competitors are beating you in the Map Pack and why." },
      { name: "Fix the foundation", desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: "Build trust signals", desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: "Add local content", desc: "Community and service-area pages across Provo-Orem plus the on-page work to back them up." },
      { name: "Report and expand", desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next community." },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "Local Starter", price: "$750", cadence: "/mo", desc: "One location, getting the Map Pack foundation right.", features: ["Google Business Profile optimization", "Citation cleanup and core listings", "One location or primary service area", "Review system setup", "Plain-English monthly report"] },
        { name: "Local Growth", price: "$1,500", cadence: "/mo", desc: "For businesses fighting across several Provo-Orem communities.", features: ["Everything in Local Starter", "Up to 5 priority keywords", "Ongoing review generation", "Community landing pages", "On-page and technical SEO"], featured: true },
        { name: "Local Authority", price: "$2,500", cadence: "/mo", desc: "For contractors who want to own the map across Utah Valley.", features: ["Everything in Local Growth", "Local link building", "Seasonal and earthquake-prep targeting", "Multi-community and service-area pages", "AI search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does local SEO cost in Provo-Orem?", a: "Most Provo-Orem engagements land between $750 and $2,500 a month, depending on how many communities and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: "How long until I show up in the Map Pack?", a: "Profile improvements can move in a few weeks. The competitive Provo-Orem keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market growing this fast is selling you something." },
      { q: "What makes Provo-Orem local SEO different?", a: "Two things. It's one of the fastest-growing markets in the country, which means new communities popping up constantly in Saratoga Springs, Eagle Mountain, and Lehi with young homebuyers who search hard before they hire. And it's deeply seasonal — Wasatch winters create snow and freeze-thaw damage demand, while spring renovation season drives a second wave. You have to be visible for both." },
      { q: "Can you help me reach the new communities in Lehi and Saratoga Springs?", a: "Yes, and those are high-value targets. Fast-growing subdivisions full of first-time homeowners and tech workers who bought new builds — they need every service and they search locally for who to hire. We build real pages for those communities so you show up when they search, not after they've already picked someone else." },
      { q: "Which areas do you cover?", a: "The full Utah Valley and surrounding communities — Provo, Orem, American Fork, Lehi, Saratoga Springs, Eagle Mountain, Spanish Fork, Springville, Payson, Mapleton, Pleasant Grove, Lindon, Cedar Hills, Alpine, and Highland. We build genuine community pages instead of one generic Provo page, because that's what actually ranks for \"[service] [city]\" searches." },
      { q: "Do you work with contractors specifically?", a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Wasatch winter damage, earthquake-prep work, and the renovation cycle Silicon Slopes homebuyers drive." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: "Am I locked into a contract?", a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "How does this get me off Angi and HomeAdvisor?", a: "Those platforms rent you shared leads and visibility you never keep, and as the Provo-Orem market grows the competition for those shared leads only gets worse. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your communities, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's the fastest way to see what Provo Local SEO can do for your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "provo", serviceSlug: "seo-services", service: "SEO Services",
    titleTag: "Provo SEO Company | Rank Higher, Get Leads | OnwardCraft",
    metaDescription:
      "Provo SEO that puts contractors on page one of Google and holds it, bringing in leads you own. Revenue-tied reporting, no lock-in contracts, built for a fast-growing market.",
    eyebrow: "SEO Services · Provo-Orem (Silicon Slopes)",
    h1: "Provo SEO that puts your business on page one and holds it as BYU and UVU grads buy homes",
    h2Exact: "Provo SEO Company",
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Provo-Orem customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: "Get my free Provo SEO audit",
    intro:
      "Provo SEO comes down to one question: when someone searches what you do, are you on page one of Google or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the fastest-growing markets in the country, from Silicon Slopes homebuyers to young families and BYU and UVU grads buying their first homes, and we measure it in organic leads, not vanity traffic.",
    aioQuestion: "How do Provo-Orem businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Utah Valley communities, and earning links from trusted local sources. In a market growing this fast, getting in place before the next wave of homebuyers arrives and ranking for seasonal winter-damage and renovation searches are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your Provo-Orem site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with this many contractors competing for fast-growing communities, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market growing as fast as Silicon Slopes, the earlier you build that asset the harder it is for competitors to catch up." },
      { title: "You're not ranking for the demand that matters", body: "Utah Valley demand swings hard with the seasons — Wasatch winters drive heating, snow-removal, and roof-damage calls from November to March, and the spring renovation season is intense as families settle into new builds in Lehi and Saratoga Springs. If your SEO ignores seasonal and community-specific searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: "The SEO work that actually moves rankings",
    services: [
      { name: "Technical SEO", desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: "On-page optimization", desc: "Every important page tuned for the exact terms your Provo-Orem customers search — titles, headings, content, and internal links." },
      { name: "Content that ranks", desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: "Link building", desc: "Authority from real Utah Valley and industry sources. In a growing market, links are often what separate page one from page two." },
      { name: "Local SEO & Google Business Profile", desc: "Map Pack optimization so you win the \"near me\" searches across your communities alongside your organic rankings." },
      { name: "Revenue-tied reporting", desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: "Seasonal & earthquake-prep SEO", desc: "We rank you for Wasatch winter-damage and heating searches, inversion-season HVAC calls, and earthquake-preparedness services — the demand patterns that define the Utah Valley contractor calendar.", featured: true },
      { name: "AI search & GEO", desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      { name: "Audit and strategy", desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Provo-Orem leads." },
      { name: "Fix the technical base", desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: "Optimize and create content", desc: "On-page work across your money pages plus new local content, including the seasonal and community-specific terms that matter here." },
      { name: "Build authority", desc: "Links and citations from trusted Utah Valley and industry sources to push competitive keywords onto page one." },
      { name: "Report and scale", desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: "Transparent Provo-Orem SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "SEO Starter", price: "$900", cadence: "/mo", desc: "For a focused site going after its core local keywords.", features: ["Technical SEO fixes", "On-page optimization", "Up to 5 target keywords", "Google Business Profile", "Monthly lead-tied report"] },
        { name: "SEO Growth", price: "$1,800", cadence: "/mo", desc: "For contractors competing across services and communities.", features: ["Everything in SEO Starter", "Up to 12 target keywords", "Monthly content", "Link building", "On-page + local SEO"], featured: true },
        { name: "SEO Authority", price: "$3,000", cadence: "/mo", desc: "For businesses that want to own Utah Valley search.", features: ["Everything in SEO Growth", "Aggressive content + links", "Seasonal & earthquake-prep SEO", "Multi-community / multi-location", "AI search / GEO optimization"] },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in Provo-Orem?", a: "Most Provo-Orem SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: "How long does SEO take to work in Provo-Orem?", a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter community-specific terms and slower on the most competitive valley-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: "Is SEO better than Google Ads?", a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes like a heavy snow week in January." },
      { q: "Should my Provo-Orem SEO target seasonal demand?", a: "Yes. When a Wasatch cold snap hits, searches for heating, roof repair, and freeze-damage spike overnight, and spring renovation season drives a second wave as families move into new builds in Lehi and Saratoga Springs. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal, earthquake-prep, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: "Do you require a long-term contract?", a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: "Which areas around Provo-Orem do you cover?", a: "The full Utah Valley — Provo, Orem, American Fork, Lehi, Saratoga Springs, Eagle Mountain, Spanish Fork, Springville, Payson, Mapleton, Pleasant Grove, Lindon, Cedar Hills, Alpine, and Highland — with genuine local pages rather than one generic Provo page." },
      { q: "How do you get me off Angi and HomeAdvisor leads?", a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads in a market that's getting more competitive every quarter." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's the clearest way to see what Provo SEO can do for your pipeline. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "provo", serviceSlug: "web-design", service: "Web Design",
    titleTag: "Provo Web Design Company | Sites That Convert | OnwardCraft",
    metaDescription:
      "Provo Web Design that books jobs instead of just looking nice. Fast, mobile-first contractor sites built for Silicon Slopes' fast-growing, tech-forward market.",
    eyebrow: "Web Design · Provo-Orem (Silicon Slopes)",
    h1: "Provo Web Design that books jobs instead of just looking nice, from BYU to the Wasatch foothills",
    h2Exact: "Provo Web Design Company",
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Provo-Orem contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out in a valley where tech-savvy homebuyers have high expectations and your competition is one tap away.",
    primaryCta: "Get my free quote",
    intro:
      "Provo Web Design that books work starts where most contractor sites lose leads quietly: slow on a phone, buried call button, no clear offer. We build sites that load fast, look like the professional you are, and turn visitors from Lehi to Springville into booked jobs. Every page is built for a market where Silicon Slopes homebuyers expect the same quality online as they get from their employers, with a mobile-first layout that converts visitors into booked jobs.",
    aioQuestion: "What makes a good contractor website in Provo-Orem?",
    aioAnswer:
      "A good Provo-Orem contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific communities you serve. Because most searches happen on mobile and tech-forward Silicon Slopes buyers do deep research before hiring, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in Provo-Orem the next guy is one tap away. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Provo-Orem visitors are on mobile, and Silicon Slopes tech workers especially will bounce fast if your site loads slow. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your community", body: "A homeowner in Saratoga Springs wants to see you serve Saratoga Springs — not a generic \"Provo\" page that could be anybody. We build sites that name the specific communities you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Provo-Orem website",
    services: [
      { name: "Custom design", desc: "No cookie-cutter templates. A site designed around your trade, your communities, and the jobs you actually want." },
      { name: "Mobile-first build", desc: "Designed for the phone first, because that's where almost all of your Provo-Orem traffic is. Fast, thumb-friendly, easy to call from." },
      { name: "Conversion-focused UX", desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: "Copy that sells", desc: "Words that speak to homeowners who need help now and book the job, not filler text that reads like everyone else." },
      { name: "Local SEO foundation", desc: "Built from the ground up to rank — clean structure, schema, fast load, and community-ready pages." },
      { name: "Speed & Core Web Vitals", desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: "Community-targeted pages", desc: "Pages built around the cities and communities you serve — from Lehi to Eagle Mountain to Payson — so you stand out in a growing market instead of blending into one generic Utah Valley page.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      { name: "Discovery and strategy", desc: "We learn your trade, your communities, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: "Design", desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: "Build and copy", desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: "Launch", desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: "Support and optimize", desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: "Transparent Provo-Orem web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Starter Site", price: "$2,000", cadence: "", desc: "A focused, high-converting site for a single-trade contractor.", features: ["Up to 5 custom pages", "Mobile-first design", "Lead forms + call buttons", "Local SEO foundation", "You own the site"] },
        { name: "Growth Site", price: "$4,500", cadence: "", desc: "A bigger site for established contractors with several services.", features: ["Up to 12 pages", "Custom design + copywriting", "Service + community pages", "Speed & Core Web Vitals", "Community-targeted pages"], featured: true },
        { name: "Custom Build", price: "$8,000", cadence: "", desc: "A full custom build for multi-service or multi-location businesses.", features: ["Fully custom design", "Advanced SEO + schema", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website cost in Provo-Orem?", a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: "How long does it take to build?", a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site help me stand out in Silicon Slopes?", a: "That's the whole point in this market. We build around the specific communities you serve, keep the site fast for mobile-first tech-savvy buyers, and put a clear offer and call button front and center — so when a competitor is one tap away, yours is the one that books the job." },
      { q: "Will my new site actually rank on Google?", a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and community-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Utah Valley terms." },
      { q: "Do I own the website?", a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: "Will it work well on phones?", a: "We design mobile-first, because that's where almost all of your Provo-Orem traffic comes from — especially with the young, tech-forward demographic in this valley. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: "What platform do you build on?", a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: "Do you offer ongoing support?", a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: "Am I locked into a contract?", a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what high-converting Provo Web Design should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "provo", serviceSlug: "website-redesign", service: "Website Redesign",
    titleTag: "Provo Website Redesign | Rebuild for Leads | OnwardCraft",
    metaDescription:
      "Provo Website Redesign that rebuilds for leads, not just looks, with an SEO-safe migration so you keep every ranking. Faster, mobile-first rebuilds for a fast-growing market.",
    eyebrow: "Website Redesign · Provo-Orem (Silicon Slopes)",
    h1: "Provo Website Redesign that rebuilds for leads, not just looks, across Lehi and Saratoga Springs",
    h2Exact: "Provo Website Redesign Company",
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Provo-Orem contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in a market growing faster than almost anywhere in the country.",
    primaryCta: "Get my free redesign audit",
    intro:
      "Provo Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Provo-Orem contractor sites for leads and speed, design them to stand out for Silicon Slopes homebuyers with high expectations, and handle an SEO-safe migration with the redirects and care that protect the traffic you already have.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Provo-Orem site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Provo-Orem homeowners — especially the tech workers who've moved here for Silicon Slopes companies — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your visitors before they ever see your offer. In a valley where the median age is young and everyone is on their phone, a redesign built mobile-first wins them back." },
      { title: "It blends into a growing market", body: "Traffic that doesn't turn into calls is wasted — and a generic old site in a valley this competitive gives a visitor no reason to pick you over the next result. New communities in Lehi, Saratoga Springs, and Eagle Mountain are full of homeowners who've never hired a local contractor before and will pick whoever looks most credible online. We rebuild for conversions and for the communities you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: "Redesign audit", desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: "SEO-safe migration", desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: "Conversion redesign", desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: "Speed overhaul", desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: "Mobile-first rebuild", desc: "Redesigned around the phone, where almost all your Provo-Orem traffic lives." },
      { name: "Brand refresh", desc: "A modern, trustworthy look that matches the quality of your work and the expectations of Silicon Slopes homebuyers." },
      { name: "Community-targeted rebuild", desc: "Rebuilt around the cities and communities you serve — so the new site stands out in a fast-growing market instead of reading like every other contractor's generic Utah page.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: "How we redesign: a careful rebuild",
    process: [
      { name: "Audit and plan", desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: "Design", desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: "Rebuild and migrate", desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: "Launch with SEO care", desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: "Optimize", desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: "Transparent Provo-Orem redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Redesign Starter", price: "$2,500", cadence: "", desc: "A focused redesign for a small contractor site.", features: ["Up to 5 pages rebuilt", "Mobile-first redesign", "SEO-safe migration", "Conversion improvements", "You own the site"] },
        { name: "Redesign Growth", price: "$5,000", cadence: "", desc: "A full redesign for an established contractor site.", features: ["Up to 12 pages", "Custom design + copy refresh", "Speed overhaul", "Service + community pages", "Community-targeted rebuild"], featured: true },
        { name: "Full Rebuild", price: "$9,000", cadence: "", desc: "A complete rebuild for multi-service or multi-location sites.", features: ["Full custom rebuild", "Advanced SEO migration", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website redesign cost in Provo-Orem?", a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: "Will I lose my Google rankings if I redesign?", a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: "How long does a redesign take?", a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: "How do I know I need a redesign?", a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or fails to stand out in a valley filling with new homeowners who expect quality online — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: "Do you migrate my existing content?", a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: "Will the redesign help me compete in Silicon Slopes?", a: "Yes, and that's the point in a market this dynamic. We rebuild around the specific communities you serve — Lehi, Saratoga Springs, Eagle Mountain, and the rest — keep the site fast, and make the offer and call button obvious so the new site stands out instead of reading like every other contractor's." },
      { q: "Will the new site be mobile-friendly and fast?", a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: "Do I own the redesigned site?", a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "Am I locked into a contract?", a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what a Provo Website Redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const provoCity = {
  citySlug: "provo", city: "Provo", state: "Utah", stateAbbr: "UT", metro: "Provo-Orem (Silicon Slopes)",

  titleTag: "Provo Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Provo marketing for contractors who want to own their leads. Web design, SEO, and local SEO across Utah Valley so you get found, get booked, and stop renting leads.",

  eyebrow: "Provo-Orem · Web Design, SEO & Lead Generation",
  h1: "Provo marketing for contractors who want to own their leads across Utah Valley",
  h2Exact: "Provo Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for Silicon Slopes' fast-growing, tech-forward market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ["Built for the trades", "Community-by-community targeting", "No lock-in contracts"],
  primaryCta: "Get my free Provo audit",

  intro:
    "Provo marketing for contractors has to win the fastest-growing homeowner market in the country: Silicon Slopes tech workers, large LDS families, BYU and UVU grads buying their first homes, and new subdivisions expanding across Lehi, Saratoga Springs, and Eagle Mountain every year. Winning here takes three things working together: a site that converts tech-savvy buyers, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the communities you serve. As a Provo digital marketing agency built around the trades, here's how we help you get found and booked.",
  aioQuestion: "How do Provo-Orem contractors get more leads online?",
  aioAnswer:
    "Provo-Orem contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack community by community. Because the market is growing fast and buyers are young and tech-forward, the contractors who target specific communities, rank for seasonal winter-damage and renovation searches, and show up where their customers actually look win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO", serviceSlug: "local-seo", tagline: "Win the Map Pack",
      blurb: "Get into the top three businesses Google pins to the map when Provo-Orem searches \"near me.\" The single highest-return move for most local businesses — done tight, community by community.",
    },
    {
      service: "SEO Services", serviceSlug: "seo-services", tagline: "Rank higher, get leads",
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: "Web Design", serviceSlug: "web-design", tagline: "Sites that convert",
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to stand out when Silicon Slopes homebuyers with high expectations are comparing you to a dozen competitors.",
    },
    {
      service: "Website Redesign", serviceSlug: "website-redesign", tagline: "More leads, no traffic loss",
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned in a market growing faster than almost anywhere in the US.",
    },
  ],

  faqs: [
    { q: "What marketing services do you offer in Provo-Orem?", a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the fastest-growing markets in the country." },
    { q: "Do you work only with contractors?", a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Wasatch winter damage, earthquake-prep work, and the renovation cycle that Silicon Slopes homebuyers drive." },
    { q: "Why does the Provo-Orem market need a different approach?", a: "It's one of the fastest-growing markets in the US, with young tech workers, large families, and a cultural emphasis on homeownership driving constant demand. Winning means ranking community by community — Lehi, Saratoga Springs, Eagle Mountain, Spanish Fork — and showing up for seasonal Wasatch winter-damage searches that define the contractor calendar here." },
    { q: "How much does it cost to work with you?", a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: "Which Provo-Orem areas do you serve?", a: "The full Utah Valley — Provo, Orem, American Fork, Lehi, Saratoga Springs, Eagle Mountain, Spanish Fork, Springville, Payson, Mapleton, Pleasant Grove, Lindon, Cedar Hills, Alpine, and Highland." },
    { q: "Where should I start?", a: "Start with a free Provo-Orem audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It's the simplest way to see what Provo marketing for contractors can do for your calendar. No pitch deck, just a plan." },
  ],
};

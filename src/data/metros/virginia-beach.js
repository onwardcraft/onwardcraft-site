// VIRGINIA BEACH — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Virginia Beach's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// VIRGINIA BEACH — shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Hampton Roads is a constant battle — and a constant opportunity",
  body:
    "Virginia Beach and the wider Hampton Roads metro — Norfolk, Chesapeake, Suffolk, Portsmouth, Hampton, and Newport News — sit on the Atlantic coast and take direct hits from East Coast hurricanes and nor'easters every year. After every major storm, demand for roofing, siding, water damage restoration, and drainage work surges overnight, and the contractors already ranking capture the work while everyone else scrambles. That's the single biggest driver of this market. The second is military: Hampton Roads is home to the largest concentration of military installations in the world — Naval Station Norfolk, JEB Little Creek, Langley AFB, Fort Eustis, and more. Military families PCS (permanent change of station) every two to three years. They arrive in a new city, own a home, and need contractors immediately — but they don't know a single one locally. They go straight to Google. Add the saltwater coastal environment that accelerates roof, siding, and HVAC degradation faster than anywhere inland, and you have a market with unusually high and recurring demand for trade contractors. The contractors who own the map when a new military family lands or a storm rolls through are the ones who book that work.",
  pullQuote: "In Hampton Roads, a hurricane or a PCS order sends hundreds of homeowners to Google overnight. The contractor on the map books the job.",
  donut: {
    title: "How Hampton Roads searches",
    value: 19,
    centerLabel: "active-duty military households",
    legend: [
      { label: "Active-duty / veteran military households", pct: 19, kind: "teal" },
      { label: "Civilian households", pct: 81, kind: "grey" },
    ],
  },
  seasonTitle: "When trade demand spikes",
  seasonCaption: "Hurricane season (Aug–Oct) and coastal storm / nor'easter damage (Oct–Mar)",
  seasonalDemand: [
    { m: "J", v: 50 }, { m: "F", v: 52 }, { m: "M", v: 55 },
    { m: "A", v: 58 }, { m: "M", v: 65 }, { m: "J", v: 80, peak: true },
    { m: "J", v: 85, peak: true }, { m: "A", v: 92, peak: true }, { m: "S", v: 90, peak: true },
    { m: "O", v: 88, peak: true }, { m: "N", v: 75, peak: true }, { m: "D", v: 60 },
  ],
  stats: [
    { value: "1.8M+", label: "people across the Hampton Roads metro" },
    { value: "~19%", label: "of households connected to the military — constant new arrivals", accent: true },
    { value: "Jun–Nov", label: "hurricane season, when roofing and restoration demand surges" },
    { value: "Top 3", label: "Map Pack spots that take most of the clicks when a storm hits" },
  ],
  neighborhoods: [
    "Oceanfront", "Great Neck", "Kempsville", "Princess Anne", "Chesapeake",
    "Norfolk", "Hampton", "Newport News", "Suffolk", "Portsmouth",
    "Williamsburg", "Smithfield",
  ],
};

const AREAS = [
  "Virginia Beach", "Norfolk", "Chesapeake", "Hampton", "Newport News",
  "Suffolk", "Portsmouth", "Williamsburg", "Smithfield", "Oceanfront",
  "Great Neck", "Kempsville", "Princess Anne",
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We only do the trades",
    body: "Roofing, HVAC, plumbing, siding, solar, electrical, restoration, GCs. We understand hurricane season surges, military-family urgency, and the saltwater corrosion that shortens HVAC and roof lifecycles in coastal Virginia — so everything we build is shaped around how your customers really search.",
  },
  {
    title: "We get you off rented leads",
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: "We actually speak Hampton Roads",
    body: "Neighborhood-by-neighborhood targeting across Virginia Beach, Norfolk, Chesapeake, Suffolk, and the rest of the region — plus the storm-season and military-arrival angles that a national shop can't replicate by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Virginia Beach contractor gets around 1,800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a coastal, storm-driven market with hundreds of new military homeowners arriving each month, that gap is real. In your free audit, we model the actual numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 }, { d: "30", pos: 11 }, { d: "60", pos: 8 },
    { d: "90", pos: 5 }, { d: "120", pos: 3 }, { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Virginia Beach", state: "Virginia", stateAbbr: "VA", metro: "Hampton Roads",
  heroProof: ["Built for the trades", "Storm-season and military-market expertise", "No lock-in contracts"],
  founderNote: FOUNDER, founderName: "The OnwardCraft team",
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const virginiaBeachLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "virginia-beach", serviceSlug: "local-seo", service: "Local SEO",
    titleTag: "Virginia Beach Local SEO Company | OnwardCraft",
    metaDescription:
      "Search your service in Virginia Beach and three businesses show up on the map. We get you into those three, so the call lands with you after every storm.",
    eyebrow: "Local SEO · Virginia Beach / Hampton Roads",
    h1: "When Hampton Roads searches for what you do, be the first name they find",
    h2Exact: "Virginia Beach Local SEO Company",
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. When a hurricane rolls through or a military family arrives in town, those three spots are where the calls go — we get you into them.",
    primaryCta: "Get my free Virginia Beach audit",
    intro:
      "Virginia Beach local SEO comes down to one thing: when a homeowner in Kempsville or a new military family just PCS'd to Great Neck searches for your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This market has two giant demand spikes that make the Map Pack especially valuable — hurricane and storm season from June through November, and the constant stream of military families arriving who need contractors fast and don't know anyone local yet. Being in those three spots when demand surges is the whole game. Here's how you get there.",
    aioQuestion: "How do Virginia Beach businesses rank higher in local search?",
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Hampton Roads neighborhoods and cities. In coastal Virginia, storm-season timing and military-arrival targeting are two angles most competitors ignore entirely — contractors who rank for those searches before the surge hits are the ones who book the work.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: "Your competitors own the three spots on the map", body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. In a coastal storm market and a region full of military homeowners who need work done fast, being in those three spots is especially high-value." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Virginia Beach homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. After a big storm, the contractor with owned rankings books the surge; the ones on lead platforms fight over shared lists." },
      { title: "You're missing the military homeowner market entirely", body: "Hampton Roads has the largest concentration of military bases in the country. Military families PCS every two to three years — they own a home, they need contractors, and they don't know a single local one. They go straight to Google the day they arrive. Most contractors have no content or targeting aimed at that audience, which means it's unclaimed work waiting for whoever shows up first." },
    ],
    servicesHeading: "What it actually takes to rank you",
    services: [
      { name: "Google Business Profile", desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Hampton Roads searches you should win." },
      { name: "Citations and NAP cleanup", desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: "Reviews that keep coming", desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: "Neighborhood pages", desc: "Real pages for Kempsville, Great Neck, Princess Anne, Norfolk, Chesapeake and the rest, so you rank for the neighborhood someone's actually searching, not just \"Virginia Beach.\"" },
      { name: "On-page and technical SEO", desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: "Local link building", desc: "Mentions and links from Hampton Roads sources Google trusts — local press, associations, military community resources, and partners. This is what separates page one from page two." },
      { name: "Storm-season and military targeting", desc: "We position you to rank for hurricane repair, storm damage, and restoration searches before the season hits, and create content that speaks directly to the PCS homeowner who just arrived and needs a contractor now.", featured: true },
      { name: "AI search readiness", desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      { name: "Audit and baseline", desc: "We find out where you actually rank today across Virginia Beach, Norfolk, Chesapeake, and the rest of Hampton Roads, and pin down which competitors are beating you in the Map Pack and why." },
      { name: "Fix the foundation", desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: "Build trust signals", desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: "Add local content", desc: "Neighborhood and service-area pages across Hampton Roads, plus storm-season and military-arrival content that most competitors never build." },
      { name: "Report and expand", desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "Local Starter", price: "$750", cadence: "/mo", desc: "One location, getting the Map Pack foundation right.", features: ["Google Business Profile optimization", "Citation cleanup and core listings", "One location or primary service area", "Review system setup", "Plain-English monthly report"] },
        { name: "Local Growth", price: "$1,500", cadence: "/mo", desc: "For businesses fighting across several Hampton Roads neighborhoods and cities.", features: ["Everything in Local Starter", "Up to 5 priority keywords", "Ongoing review generation", "Neighborhood landing pages", "On-page and technical SEO"], featured: true },
        { name: "Local Authority", price: "$2,500", cadence: "/mo", desc: "For contractors who want to own the map across the Hampton Roads region.", features: ["Everything in Local Growth", "Local link building", "Storm-season and military-arrival targeting", "Multi-city and service-area pages", "AI search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does local SEO cost in Virginia Beach?", a: "Most Virginia Beach engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: "How long until I show up in the Map Pack?", a: "Profile improvements can move in a few weeks. The competitive Hampton Roads keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market with this much competition is selling you something." },
      { q: "What makes Virginia Beach local SEO different?", a: "Two things most agencies miss. First, this market has high-urgency demand spikes — when a hurricane or nor'easter rolls through, homeowners need roofing, siding, and restoration contractors immediately and go straight to Google. The contractors already ranking capture that surge. Second, Hampton Roads has an enormous and constant military population. Families PCS every two to three years, arrive not knowing any local contractors, and search immediately. Being the visible, trusted option for that audience is an edge most competitors leave on the table." },
      { q: "Can you help me get more storm damage leads?", a: "Yes, and that's one of the most valuable opportunities in this market. We rank you for roofing repair, siding replacement, storm damage, and restoration searches before hurricane season starts, so you're the visible option when demand surges — not chasing it after the fact." },
      { q: "Which areas do you cover?", a: "All of Hampton Roads — Virginia Beach (Oceanfront, Great Neck, Kempsville, Princess Anne), Norfolk, Chesapeake, Hampton, Newport News, Suffolk, Portsmouth, Williamsburg, and Smithfield. We build genuine neighborhood pages instead of one generic Virginia Beach page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: "Do you work with contractors specifically?", a: "It's basically all we do. Roofing, HVAC, plumbing, siding, solar, electrical, restoration, and general contractors. We understand hurricane-season surges, saltwater corrosion cycles, and the military homeowner market — and we build your local SEO around them." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: "Am I locked into a contract?", a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "How does this get me off Angi and HomeAdvisor?", a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. When a storm drives a flood of homeowner searches, that traffic hits your profile directly — not a broker who sells it to four of your competitors." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Hampton Roads, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "virginia-beach", serviceSlug: "seo-services", service: "SEO Services",
    titleTag: "Virginia Beach SEO Company | OnwardCraft",
    metaDescription:
      "Virginia Beach SEO that ranks contractors on Google and brings in leads you own. Storm-season and military-market expertise, revenue-tied reporting, no.",
    eyebrow: "SEO Services · Virginia Beach / Hampton Roads",
    h1: "Get your Virginia Beach business to the top of Google and keep it there",
    h2Exact: "Virginia Beach SEO Company",
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Hampton Roads customers search and the leads keep coming — through storm season, through every PCS wave, and through every coastal repair cycle.",
    primaryCta: "Get my free Virginia Beach SEO audit",
    intro:
      "Virginia Beach SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a coastal, storm-driven, military-heavy market — and we measure it in leads, not vanity traffic.",
    aioQuestion: "How do Virginia Beach businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Hampton Roads neighborhoods and cities, and earning links from trusted regional sources. In coastal Virginia, ranking for storm-damage and restoration searches before hurricane season and building content that speaks to the military homeowner arriving new to the region are two of the highest-return moves a contractor can make.",
    problemHeading: "Three reasons your Virginia Beach site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with strong seasonal and storm-driven demand surges, if you're not in the top handful of results when a homeowner searches after a nor'easter or a PCS move, your site is essentially invisible — regardless of how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. When storm season sends a wave of homeowners to Google, the contractors who built organic rankings ahead of time capture it — not just the ones running ads." },
      { title: "You're not ranking for the demand that matters", body: "Virginia Beach demand swings hard — hurricane and storm repair from June through November, coastal HVAC and siding replacement year-round due to saltwater exposure, and a constant stream of military homeowners who need every trade imaginable when they arrive. The contractors who rank for those searches ahead of the season or the PCS wave catch the work everyone else misses." },
    ],
    servicesHeading: "The SEO work that actually moves rankings",
    services: [
      { name: "Technical SEO", desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: "On-page optimization", desc: "Every important page tuned for the exact terms your Hampton Roads customers search — titles, headings, content, and internal links." },
      { name: "Content that ranks", desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: "Link building", desc: "Authority from real Virginia Beach and Hampton Roads sources. In a competitive coastal market, links are often what separate page one from page two." },
      { name: "Local SEO & Google Business Profile", desc: "Map Pack optimization so you win the \"near me\" searches across all of Hampton Roads alongside your organic rankings." },
      { name: "Revenue-tied reporting", desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: "Storm-season and military-arrival SEO", desc: "We rank you for hurricane repair, storm damage, and restoration searches before the season, and build content that speaks to PCS homeowners who need a trusted contractor immediately.", featured: true },
      { name: "AI search & GEO", desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      { name: "Audit and strategy", desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Hampton Roads leads — including seasonal, storm, and military-focused terms." },
      { name: "Fix the technical base", desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: "Optimize and create content", desc: "On-page work across your money pages plus new local content, including storm-season and military-arrival angles that most competitors never build." },
      { name: "Build authority", desc: "Links and citations from trusted Hampton Roads and industry sources to push competitive keywords onto page one." },
      { name: "Report and scale", desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: "Transparent Virginia Beach SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "SEO Starter", price: "$900", cadence: "/mo", desc: "For a focused site going after its core local keywords.", features: ["Technical SEO fixes", "On-page optimization", "Up to 5 target keywords", "Google Business Profile", "Monthly lead-tied report"] },
        { name: "SEO Growth", price: "$1,800", cadence: "/mo", desc: "For contractors competing across services and Hampton Roads cities.", features: ["Everything in SEO Starter", "Up to 12 target keywords", "Monthly content", "Link building", "On-page + local SEO"], featured: true },
        { name: "SEO Authority", price: "$3,000", cadence: "/mo", desc: "For businesses that want to own Hampton Roads search.", features: ["Everything in SEO Growth", "Aggressive content + links", "Storm-season & military SEO", "Multi-city and multi-service", "AI search / GEO optimization"] },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in Virginia Beach?", a: "Most Virginia Beach SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: "How long does SEO take to work in Virginia Beach?", a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Hampton Roads keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: "Is SEO better than Google Ads?", a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In a storm market, contractors with owned SEO rankings capture the surge without a spike in ad spend — the traffic just comes." },
      { q: "Should my Virginia Beach SEO target storm-season demand?", a: "Absolutely, and it's one of the highest-return moves in this market. Ranking takes months to build, so you have to be in position before hurricane season — not trying to rank after a storm while your competitors are already answering calls. We optimize for storm damage, roofing repair, siding replacement, and water damage restoration terms ahead of the season." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season, military-market, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: "Do you require a long-term contract?", a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: "Which areas around Virginia Beach do you cover?", a: "All of Hampton Roads — Virginia Beach (Oceanfront, Great Neck, Kempsville, Princess Anne), Norfolk, Chesapeake, Hampton, Newport News, Suffolk, Portsmouth, Williamsburg, and Smithfield — with genuine local pages rather than one generic Virginia Beach page." },
      { q: "How do you get me off Angi and HomeAdvisor leads?", a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads. When a storm sends homeowners to Google, your owned rankings capture that traffic directly." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "virginia-beach", serviceSlug: "web-design", service: "Web Design",
    titleTag: "Virginia Beach Web Design Company | OnwardCraft",
    metaDescription:
      "Virginia Beach web design that turns visitors into booked jobs — fast, mobile-first sites built for a coastal, military, storm-driven market.",
    eyebrow: "Web Design · Virginia Beach / Hampton Roads",
    h1: "Virginia Beach web design that turns visitors into booked jobs",
    h2Exact: "Virginia Beach Web Design Company",
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Hampton Roads contractors fast, mobile-first sites engineered to convert — built for a market where a storm or a PCS wave can send a hundred homeowners to Google overnight.",
    primaryCta: "Get my free quote",
    intro:
      "Most Virginia Beach contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer for the homeowner who needs storm damage work done now or just arrived from a PCS move and doesn't know a soul locally. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Hampton Roads visitors into booked jobs.",
    aioQuestion: "What makes a good contractor website in Virginia Beach?",
    aioAnswer:
      "A good Virginia Beach contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific cities and neighborhoods you serve across Hampton Roads. Because this market has high-urgency demand — storm damage calls, military homeowners who need a contractor immediately after a PCS — a fast site with an obvious next step is what separates a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor in Hampton Roads. We design every page around one job: turning a visitor into a booked lead — especially when that visitor is a storm-affected homeowner who needs help fast or a military family who just arrived and needs a trusted contractor today." },
      { title: "It's too slow on a phone", body: "Most of your Hampton Roads visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your area", body: "A homeowner in Kempsville wants to see you serve Kempsville — not a generic \"Virginia Beach\" page that could be anybody. We build sites that name the cities and neighborhoods you work across Hampton Roads, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Virginia Beach website",
    services: [
      { name: "Custom design", desc: "No cookie-cutter templates. A site designed around your trade, your Hampton Roads service area, and the jobs you actually want." },
      { name: "Mobile-first build", desc: "Designed for the phone first, because that's where almost all of your Hampton Roads traffic is. Fast, thumb-friendly, easy to call from." },
      { name: "Conversion-focused UX", desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: "Copy that sells", desc: "Words that speak to anxious homeowners — storm-affected, newly arrived military families, or planning a coastal HVAC replacement — and book the job." },
      { name: "Local SEO foundation", desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: "Speed & Core Web Vitals", desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: "Hampton Roads neighborhood pages", desc: "Pages built around the cities and communities you serve — Virginia Beach, Norfolk, Chesapeake, Hampton, Newport News, and beyond — so you stand out instead of blending into a generic city page.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      { name: "Discovery and strategy", desc: "We learn your trade, your Hampton Roads service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: "Design", desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: "Build and copy", desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: "Launch", desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: "Support and optimize", desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: "Transparent Virginia Beach web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Starter Site", price: "$2,000", cadence: "", desc: "A focused, high-converting site for a single-trade contractor.", features: ["Up to 5 custom pages", "Mobile-first design", "Lead forms + call buttons", "Local SEO foundation", "You own the site"] },
        { name: "Growth Site", price: "$4,500", cadence: "", desc: "A bigger site for established contractors with several services across Hampton Roads.", features: ["Up to 12 pages", "Custom design + copywriting", "Service + neighborhood pages", "Speed & Core Web Vitals", "Hampton Roads neighborhood pages"], featured: true },
        { name: "Custom Build", price: "$8,000", cadence: "", desc: "A full custom build for multi-service or multi-location businesses.", features: ["Fully custom design", "Advanced SEO + schema", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website cost in Virginia Beach?", a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: "How long does it take to build?", a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site help me stand out in Hampton Roads?", a: "That's the whole point. We build around the specific cities and neighborhoods you serve, keep the site fast, and put a clear offer and call button front and center — so when a homeowner is urgently searching after a storm or a newly arrived military family needs a contractor today, yours is the site that books the job." },
      { q: "Will my new site actually rank on Google?", a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Hampton Roads terms." },
      { q: "Do I own the website?", a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: "Will it work well on phones?", a: "We design mobile-first, because that's where almost all of your Virginia Beach traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: "What platform do you build on?", a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: "Do you offer ongoing support?", a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: "Am I locked into a contract?", a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what a high-converting Hampton Roads contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "virginia-beach", serviceSlug: "website-redesign", service: "Website Redesign",
    titleTag: "Virginia Beach Website Redesign | OnwardCraft",
    metaDescription:
      "Redesign your Virginia Beach website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a coastal.",
    eyebrow: "Website Redesign · Virginia Beach / Hampton Roads",
    h1: "Redesign your Virginia Beach website without losing your rankings",
    h2Exact: "Virginia Beach Website Redesign Company",
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore when a storm hits or a military family arrives and needs a contractor now. We redesign Hampton Roads contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: "Get my free redesign audit",
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Virginia Beach contractor sites for speed and conversions, build them to stand out in a market with high-urgency demand and constant new arrivals, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Virginia Beach site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket storm repair job or a whole-home renovation, Hampton Roads homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing most of your Virginia Beach visitors before they ever see your offer. A homeowner who just had siding ripped off by a nor'easter or a military family on day one in a new city is not going to wait for a slow site. We rebuild mobile-first and fast." },
      { title: "It blends into the market when demand spikes", body: "Traffic that doesn't turn into calls is wasted. After a storm sends homeowners to Google, a generic old site gives them no reason to pick you over the next contractor. We rebuild for conversions and for the specific communities you serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: "Redesign audit", desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: "SEO-safe migration", desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: "Conversion redesign", desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: "Speed overhaul", desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: "Mobile-first rebuild", desc: "Redesigned around the phone, where almost all your Hampton Roads traffic lives." },
      { name: "Brand refresh", desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: "Hampton Roads neighborhood rebuild", desc: "Rebuilt around the cities and communities you serve across the region, so the new site stands out in a competitive coastal market instead of reading like everyone else's.", featured: true },
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
      heading: "Transparent Virginia Beach redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Redesign Starter", price: "$2,500", cadence: "", desc: "A focused redesign for a small contractor site.", features: ["Up to 5 pages rebuilt", "Mobile-first redesign", "SEO-safe migration", "Conversion improvements", "You own the site"] },
        { name: "Redesign Growth", price: "$5,000", cadence: "", desc: "A full redesign for an established Hampton Roads contractor site.", features: ["Up to 12 pages", "Custom design + copy refresh", "Speed overhaul", "Service + neighborhood pages", "Hampton Roads neighborhood rebuild"], featured: true },
        { name: "Full Rebuild", price: "$9,000", cadence: "", desc: "A complete rebuild for multi-service or multi-location sites.", features: ["Full custom rebuild", "Advanced SEO migration", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website redesign cost in Virginia Beach?", a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: "Will I lose my Google rankings if I redesign?", a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: "How long does a redesign take?", a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: "How do I know I need a redesign?", a: "If your site is slow on phones, looks dated, isn't bringing in leads, or fails to convert the storm-damage and military-arrival traffic that makes Hampton Roads unique, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: "Do you migrate my existing content?", a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: "Will the redesign help me compete in Hampton Roads?", a: "Yes, and that's the point in a market driven by storm surges and military PCS cycles. We rebuild around the specific cities and communities you serve, keep the site fast, and make the offer obvious — so the new site captures the high-urgency traffic instead of losing it." },
      { q: "Will the new site be mobile-friendly and fast?", a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: "Do I own the redesigned site?", a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "Am I locked into a contract?", a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const virginiaBeachCity = {
  citySlug: "virginia-beach", city: "Virginia Beach", state: "Virginia", stateAbbr: "VA", metro: "Hampton Roads",

  titleTag: "Virginia Beach Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Web design, SEO, and local SEO for Virginia Beach and Hampton Roads contractors. Get found after every storm, capture military homeowners the day they arrive.",

  eyebrow: "Virginia Beach · Web Design, SEO & Lead Generation",
  h1: "Marketing that gets Virginia Beach contractors found and booked",
  h2Exact: "Virginia Beach Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for coastal Virginia's storm-driven, military-heavy market. One team to get you ranking, converting, and off the rented-lead treadmill across all of Hampton Roads.",
  heroProof: ["Built for the trades", "Storm-season and military-market expertise", "No lock-in contracts"],
  primaryCta: "Get my free Virginia Beach audit",

  intro:
    "If you run a contracting business in Virginia Beach or anywhere across Hampton Roads, you're operating in one of the most distinctive home-services markets in the country. Hurricane and nor'easter season sends surges of homeowners to Google looking for roofing, siding, and restoration help. The largest concentration of military bases in the world means a constant flow of new homeowners who don't know a single local contractor and go straight to search the day they arrive. And the saltwater coastal environment means roofs, HVAC systems, and siding need replacement faster than anywhere inland. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack when demand spikes. Here's how we help Hampton Roads contractors do exactly that.",
  aioQuestion: "How do Virginia Beach contractors get more leads online?",
  aioAnswer:
    "Virginia Beach contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across Hampton Roads. The market's two biggest opportunities are storm season — when hurricane and nor'easter damage sends homeowners directly to Google — and the military PCS cycle, which brings a constant wave of new homeowners who need contractors immediately and don't know anyone local. Contractors who rank for those searches and serve them with a fast, credible site capture a disproportionate share of the region's demand.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO", serviceSlug: "local-seo", tagline: "Win the Map Pack",
      blurb: "Get into the top three businesses Google pins to the map when Hampton Roads searches \"near me.\" The single highest-return move in a storm-driven, military-arrival market — done tight, city by city.",
    },
    {
      service: "SEO Services", serviceSlug: "seo-services", tagline: "Rank higher, get leads",
      blurb: "Rank for the money keywords your customers actually search — storm damage, coastal HVAC, and more — build an asset you own, and measure it in leads, not vanity traffic.",
    },
    {
      service: "Web Design", serviceSlug: "web-design", tagline: "Sites that convert",
      blurb: "Fast, mobile-first websites engineered to turn urgent visitors into booked jobs — storm-affected homeowners and newly arrived military families need a contractor now, not a site that makes them wait.",
    },
    {
      service: "Website Redesign", serviceSlug: "website-redesign", tagline: "More leads, no traffic loss",
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned heading into the next storm season.",
    },
  ],

  faqs: [
    { q: "What marketing services do you offer in Virginia Beach?", a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in one of the most demand-driven coastal markets in the country." },
    { q: "Do you work only with contractors?", a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, siding, solar, electrical, restoration, and general contractors — so we understand hurricane-season surges, saltwater corrosion cycles, and the military homeowner market." },
    { q: "Why does the Hampton Roads market need a different approach?", a: "Two things most agencies miss. The storm-driven demand spikes — hurricanes and nor'easters send waves of homeowners to Google for roofing, siding, and restoration help overnight — and the military PCS cycle, which brings a constant stream of new homeowners who need contractors immediately and don't know anyone local. Winning means ranking before the surge and creating content that speaks to the newly arrived military family, not just a generic location page." },
    { q: "How much does it cost to work with you?", a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: "Which Virginia Beach and Hampton Roads areas do you serve?", a: "All of Hampton Roads — Virginia Beach (Oceanfront, Great Neck, Kempsville, Princess Anne), Norfolk, Chesapeake, Hampton, Newport News, Suffolk, Portsmouth, Williamsburg, and Smithfield." },
    { q: "Where should I start?", a: "Start with a free Virginia Beach audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

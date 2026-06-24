// WACO — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Waco's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// WACO — shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Waco is your biggest opportunity right now",
  body:
    "Waco has undergone a remarkable transformation. HGTV's Fixer Upper starring Chip and Joanna Gaines didn't just make for great television — it put Waco on the national map and triggered a genuine wave of homebuyer interest in older Waco homes. People now move here specifically to renovate, and the Magnolia Market brand has created a renovation-focused identity for the city that draws visitors and new residents alike. That means contractors who serve this renovation wave are in fierce demand. Layer on top of that Baylor University's 20,000 students and the growing university-driven professional class buying homes in Heritage Square, Castle Heights, and Sanger Heights — all older homes being renovated in that signature Fixer Upper style. Central Texas weather adds urgency: Waco hits 105°F or more in July and August, making HVAC demand intense from June through September. And every Waco homeowner remembers the 2021 Texas freeze, when pipes burst across the city in a single brutal week. Then there's tornado and hail exposure — roofing contractors in Central Texas see storm damage calls spike every spring. The contractor who owns the Waco Map Pack owns all of that demand.",
  pullQuote:
    "Fixer Upper put Waco on the map. The contractors who rank for that renovation wave are the ones booking it.",
  donut: {
    title: "How Waco searches",
    value: 35,
    centerLabel: "Hispanic",
    legend: [
      { label: "Hispanic", pct: 35, kind: "teal" },
      { label: "Other", pct: 65, kind: "grey" },
    ],
  },
  seasonTitle: "When trade demand spikes",
  seasonCaption: "Storm/hail roofing (Mar–Jun), HVAC heat (Jun–Sep), freeze emergencies (Dec–Feb)",
  seasonalDemand: [
    { m: "J", v: 72, peak: true }, { m: "F", v: 68, peak: true }, { m: "M", v: 85, peak: true },
    { m: "A", v: 88, peak: true }, { m: "M", v: 90, peak: true }, { m: "J", v: 95, peak: true },
    { m: "J", v: 98, peak: true }, { m: "A", v: 96, peak: true }, { m: "S", v: 80, peak: true },
    { m: "O", v: 52 }, { m: "N", v: 50 }, { m: "D", v: 70, peak: true },
  ],
  stats: [
    { value: "~140K", label: "people in the Waco metro, growing with Fixer Upper-driven migration" },
    { value: "~35%", label: "Hispanic residents — a meaningful Spanish-language search audience", accent: true },
    { value: "Jun–Sep", label: "peak HVAC season, with temps hitting 105°F+" },
    { value: "Top 3", label: "Map Pack spots that take most of the clicks" },
  ],
  neighborhoods: [
    "Heritage Square", "Castle Heights", "Sanger Heights", "Lake Waco", "Woodway",
    "Hewitt", "Lorena", "Hillsboro", "Baylor University area", "Magnolia district",
    "Temple", "Belton", "McGregor", "Clifton", "West",
  ],
};

const AREAS = [
  "Waco", "Woodway", "Hewitt", "Lorena", "Hillsboro", "Temple", "Belton",
  "Heritage Square", "Castle Heights", "Sanger Heights", "Lake Waco", "McGregor",
  "Clifton", "West", "Baylor University area",
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: "We only do the trades",
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Central Texas heat emergencies, post-freeze pipe bursts, hail damage roofing, and the Fixer Upper renovation wave, so everything we build is shaped around how your customers really search.",
  },
  {
    title: "We get you off rented leads",
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when Waco's renovation boom means demand is right there waiting.",
  },
  {
    title: "We actually speak Waco",
    body: "Neighborhood-by-neighborhood targeting from Heritage Square to Woodway to Lake Waco, plus Spanish-language reach to win the searches most agencies never see. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Waco contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market surging with Fixer Upper-driven renovation demand, that gap is very real. In your free audit, we model the actual numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: "Day 0", pos: 14 }, { d: "30", pos: 11 }, { d: "60", pos: 8 },
    { d: "90", pos: 5 }, { d: "120", pos: 3 }, { d: "180", pos: 2 },
  ],
};

const BASE = {
  city: "Waco", state: "Texas", stateAbbr: "TX", metro: "Waco",
  heroProof: ["Built for the trades", "Neighborhood-by-neighborhood targeting", "No lock-in contracts"],
  founderNote: FOUNDER, founderName: "The OnwardCraft team",
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const wacoLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: "waco", serviceSlug: "local-seo", service: "Local SEO",
    titleTag: "Waco Local SEO Company | Win the Map Pack | OnwardCraft",
    metaDescription:
      "Waco Local SEO that lands you in the three businesses Google pins to the map. We get you found across renovation demand, HVAC heat, and storm season.",
    eyebrow: "Local SEO · Waco, TX",
    h1: "Waco Local SEO that puts your Heritage Square business in the Map Pack",
    h2Exact: "Waco Local SEO Company",
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. Waco's Fixer Upper renovation boom and brutal Central Texas summers create year-round demand — we get you into that top three for your neighborhoods so the call lands with you.",
    primaryCta: "Get my free Waco audit",
    intro:
      "Waco local SEO comes down to one thing: when a homeowner in Heritage Square or Woodway searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Waco's renovation wave, Baylor University's growing professional class, Central Texas heat emergencies, and spring hail season create consistent demand — but only the contractors the Map Pack shows get that work. About 35% of Waco residents search in Spanish too, which is demand most of your competitors ignore entirely. Here's how you own it.",
    aioQuestion: "How do Waco businesses rank higher in local search?",
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Waco neighborhoods. Waco's renovation boom means buyers are actively searching for contractors in Heritage Square, Castle Heights, and Sanger Heights. Optimizing for seasonal spikes — HVAC in June–September, roofing after hail in March–June, freeze emergencies in December–February — and for Spanish-language searches are two of the fastest ways to pull ahead of competitors who don't bother.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: "Your competitors own the three spots on the map", body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Waco's Fixer Upper renovation surge has brought in more homeowners than ever looking for contractors — but if you're not in the top three, most of them never see your name. Getting into that Map Pack for Heritage Square, Castle Heights, Woodway, and the rest is usually the single highest-return move a Waco contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Waco homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner renovating in Sanger Heights finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible to 35% of the market", body: "About 35% of Waco residents are Hispanic, and many search in Spanish — especially for urgent work like HVAC during a heat emergency or plumbing after a freeze. Most contractors do nothing to show up for those searches, so the demand sits there unclaimed. Targeting Spanish-language searches is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: "What it actually takes to rank you in Waco",
    services: [
      { name: "Google Business Profile", desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Waco searches you should win — from renovation work in Heritage Square to HVAC emergencies in Woodway." },
      { name: "Citations and NAP cleanup", desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: "Reviews that keep coming", desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes Waco homeowners pick up the phone." },
      { name: "Neighborhood pages", desc: "Real pages for Heritage Square, Castle Heights, Sanger Heights, Lake Waco, Woodway, Hewitt, and the rest, so you rank for the neighborhood someone's actually searching, not just \"Waco.\"" },
      { name: "On-page and technical SEO", desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: "Local link building", desc: "Mentions and links from Waco sources Google trusts — local press, Baylor-adjacent organizations, Central Texas associations, and partners. This is what separates page one from page two here." },
      { name: "Spanish-language reach", desc: "About 35% of Waco residents are Hispanic. We help you show up for the Spanish-language searches most of your competitors never even see — a real edge during HVAC emergencies, post-freeze calls, and renovation season.", featured: true },
      { name: "AI search readiness", desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: "How we work: the Local Lift Method",
    process: [
      { name: "Audit and baseline", desc: "We find out where you actually rank today across your Waco neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: "Fix the foundation", desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: "Build trust signals", desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: "Add local content", desc: "Neighborhood and service-area pages across Waco and the surrounding communities, plus the on-page work to back them up." },
      { name: "Report and expand", desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: "Pricing you can actually see",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "Local Starter", price: "$750", cadence: "/mo", desc: "One location, getting the Waco Map Pack foundation right.", features: ["Google Business Profile optimization", "Citation cleanup and core listings", "One location or primary service area", "Review system setup", "Plain-English monthly report"] },
        { name: "Local Growth", price: "$1,500", cadence: "/mo", desc: "For businesses fighting across several Waco neighborhoods and surrounding towns.", features: ["Everything in Local Starter", "Up to 5 priority keywords", "Ongoing review generation", "Neighborhood landing pages", "On-page and technical SEO"], featured: true },
        { name: "Local Authority", price: "$2,500", cadence: "/mo", desc: "For contractors who want to own the map across Waco, Woodway, Hewitt, Temple, and beyond.", features: ["Everything in Local Growth", "Local link building", "Spanish-language search targeting", "Multi-neighborhood and service-area pages", "AI search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does local SEO cost in Waco?", a: "Most Waco engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: "How long until I show up in the Map Pack?", a: "Profile improvements can move in a few weeks. Competitive Waco keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: "What makes Waco local SEO different from a bigger city?", a: "Waco's renovation boom — driven by the Fixer Upper effect — means homeowners here are actively searching for contractors in specific neighborhoods like Heritage Square and Sanger Heights. Seasonal spikes are real and predictable: HVAC in summer, roofing after spring hail, freeze emergencies in winter. And about 35% of residents are Hispanic, which is a meaningful Spanish-language search audience most competitors ignore entirely." },
      { q: "Can you help me reach Spanish-speaking customers?", a: "Yes, and in Waco that's a real edge. About 35% of residents are Hispanic, and many search in Spanish — especially for urgent work like HVAC during a heat emergency or plumbing after a freeze. We optimize your profile and content to show up for those searches, which most of your competitors never bother with." },
      { q: "Which Waco areas do you cover?", a: "Waco proper and the communities around it — Woodway, Hewitt, Lorena, Hillsboro, Temple, Belton, McGregor, and more — plus specific neighborhoods like Heritage Square, Castle Heights, Sanger Heights, and Lake Waco. We build genuine local pages instead of one generic Waco page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: "Do you work with contractors specifically?", a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Waco's renovation wave, Central Texas heat emergencies, post-freeze pipe calls, and spring storm season, and we build your local SEO around them." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: "Am I locked into a contract?", a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "How does this get me off Angi and HomeAdvisor?", a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work — Fixer Upper renovation jobs, HVAC calls, roofing estimates — is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Waco neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. It's the honest starting point for Waco Local SEO that actually rings your phone. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: "waco", serviceSlug: "seo-services", service: "SEO Services",
    titleTag: "Waco SEO Company | Rank Higher, Get Leads | OnwardCraft",
    metaDescription:
      "Waco SEO that ranks contractors on Google and brings in leads you own. Built for renovation demand, HVAC heat, and storm season.",
    eyebrow: "SEO Services · Waco, TX",
    h1: "Waco SEO that gets you to the top of Google for the renovation wave and keeps you there",
    h2Exact: "Waco SEO Company",
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Waco customers search and the leads keep coming — renovation homeowners, HVAC emergencies in July, post-freeze pipe calls. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: "Get my free Waco SEO audit",
    intro:
      "Waco SEO comes down to one question: when a homeowner searching for renovation help, an HVAC contractor in a heat emergency, or a roofer after a hail storm types their search, are you on page one or page two? Page two might as well be page fifty. The Fixer Upper effect has created a sustained wave of renovation-focused homebuyers in Waco, and Baylor's growing professional class is buying and upgrading older homes in Heritage Square and Castle Heights. We get contractors ranking for the money keywords in Waco — and we measure it in leads, not vanity traffic.",
    aioQuestion: "How do Waco businesses rank higher on Google?",
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Waco neighborhoods, and earning links from trusted Central Texas sources. Waco's renovation boom means buyers are searching neighborhood-specific terms in Heritage Square and Sanger Heights. Ranking for seasonal demand — HVAC in summer, storm-damage roofing in spring, freeze emergencies in winter — before the spike hits is one of the fastest ways to pull ahead of competitors who only react to demand after it peaks.",
    problemHeading: "Three reasons your Waco site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. Waco's Fixer Upper reputation has brought in more renovation-focused homeowners than ever — but if you're not in the top handful of results for what you do, those buyers never find you, no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For a Waco contractor serving a renovation-hungry market, that compounds fast." },
      { title: "You're not ranking for the demand that matters", body: "Waco demand swings hard with the seasons — HVAC calls surge when temperatures top 100°F, roofing demand spikes after spring hail, and everyone remembers how the 2021 freeze sent pipes bursting across the city. The contractors who ranked for those emergency and seasonal terms ahead of time caught the wave. If your SEO ignores those searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: "The SEO work that actually moves rankings in Waco",
    services: [
      { name: "Technical SEO", desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: "On-page optimization", desc: "Every important page tuned for the exact terms your Waco customers search — from renovation contractors in Heritage Square to HVAC repair near Baylor." },
      { name: "Content that ranks", desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: "Link building", desc: "Authority from real Waco and Central Texas sources. In a market riding a renovation wave, links are often what separate page one from page two." },
      { name: "Local SEO & Google Business Profile", desc: "Map Pack optimization so you win the \"near me\" searches across your Waco neighborhoods alongside your organic rankings." },
      { name: "Revenue-tied reporting", desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: "Seasonal & emergency SEO", desc: "We rank you for Waco's predictable demand spikes — HVAC in June–September, roofing after spring hail, freeze emergencies in winter — so you're visible before demand peaks, not chasing it after.", featured: true },
      { name: "AI search & GEO", desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: "How we work: the OnwardCraft SEO method",
    process: [
      { name: "Audit and strategy", desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Waco leads — renovation, seasonal HVAC, storm damage, and more." },
      { name: "Fix the technical base", desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: "Optimize and create content", desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in Central Texas." },
      { name: "Build authority", desc: "Links and citations from trusted Waco and Central Texas sources to push competitive keywords onto page one." },
      { name: "Report and scale", desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: "Transparent Waco SEO pricing",
      note: "Month-to-month after the first 90 days. No lock-in. Cancel whenever.",
      tiers: [
        { name: "SEO Starter", price: "$900", cadence: "/mo", desc: "For a focused Waco site going after its core local keywords.", features: ["Technical SEO fixes", "On-page optimization", "Up to 5 target keywords", "Google Business Profile", "Monthly lead-tied report"] },
        { name: "SEO Growth", price: "$1,800", cadence: "/mo", desc: "For contractors competing across Waco services, neighborhoods, and surrounding towns.", features: ["Everything in SEO Starter", "Up to 12 target keywords", "Monthly content", "Link building", "On-page + local SEO"], featured: true },
        { name: "SEO Authority", price: "$3,000", cadence: "/mo", desc: "For businesses that want to own Waco search — from renovation to HVAC to storm damage.", features: ["Everything in SEO Growth", "Aggressive content + links", "Seasonal & emergency SEO", "Multi-location / Temple market", "AI search / GEO optimization"] },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in Waco?", a: "Most Waco SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: "How long does SEO take to work in Waco?", a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: "Is SEO better than Google Ads for Waco contractors?", a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Waco contractors do best running SEO as the long-term engine — especially to capture the renovation wave from the Fixer Upper effect — and ads for short-term spikes like a late-season HVAC push." },
      { q: "Should my Waco SEO target seasonal demand?", a: "Absolutely. When July temperatures hit 105°F, HVAC searches spike overnight. Spring hail storms send homeowners searching for roofers by the thousands. And anyone who lived through the 2021 Texas freeze knows how fast pipe and plumbing calls can surge. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: "Do you require a long-term contract?", a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: "Will I show up in Google AI Overviews and ChatGPT?", a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: "Which areas around Waco do you cover?", a: "Waco proper and the communities around it — Woodway, Hewitt, Lorena, Hillsboro, Temple, Belton, McGregor — plus specific neighborhoods like Heritage Square, Castle Heights, Sanger Heights, and Lake Waco, with genuine local pages rather than one generic Waco page." },
      { q: "How do you get me off Angi and HomeAdvisor leads?", a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility in the Waco renovation market, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. It's a straight plan for Waco SEO that ranks you on page one and turns organic traffic into booked work. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: "waco", serviceSlug: "web-design", service: "Web Design",
    titleTag: "Waco Web Design Company | Sites That Convert | OnwardCraft",
    metaDescription:
      "Waco web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving a renovation-driven market.",
    eyebrow: "Web Design · Waco, TX",
    h1: "Waco web design that turns renovation-hungry homeowners into booked jobs",
    h2Exact: "Waco Web Design Company",
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Waco contractors fast, mobile-first sites engineered to turn renovation-hungry homeowners, HVAC callers, and storm-damage leads into booked work.",
    primaryCta: "Get my free quote",
    intro:
      "Waco web design only earns its keep when it books jobs, and most contractor sites here lose leads quietly: slow on a phone, buried call button, no clear offer. The Fixer Upper effect has flooded Waco with homebuyers who came here specifically to renovate. They're ready to hire, they're searching on their phones, and if your site doesn't give them a clear reason to call you in the first few seconds, they tap to the next result. A website design done right fixes all of that. We build fast-loading, mobile-first sites that look like the professional you are and turn Heritage Square to Woodway visitors into booked jobs.",
    aioQuestion: "What makes a good contractor website in Waco?",
    aioAnswer:
      "A good Waco contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because Waco's renovation wave means buyers are actively searching for contractors in Heritage Square and Sanger Heights — and Central Texas heat emergencies mean people need to reach you fast in July — mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in Waco work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next result. Waco's renovation market means buyers are ready to hire — the site just needs to close the gap between 'found you' and 'booked you.'" },
      { title: "It's too slow on a phone", body: "When an AC goes out in 105°F Waco heat, a homeowner searches on their phone and calls the first contractor who picks up. If your site is slow, you've already lost the job. We build fast, so you keep the visitor — and the ranking." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner renovating in Heritage Square wants to see that you serve Heritage Square — not a generic Waco page that could be anybody. We build sites that name the neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Waco website",
    services: [
      { name: "Custom design", desc: "No cookie-cutter templates. A site designed around your trade, your Waco neighborhoods, and the jobs you actually want — from Fixer Upper renovation work to emergency HVAC calls." },
      { name: "Mobile-first build", desc: "Designed for the phone first, because that's where almost all of your Waco traffic is — especially during heat emergencies and post-storm searches." },
      { name: "Conversion-focused UX", desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: "Copy that sells", desc: "Words that speak to renovation homeowners and emergency callers, not filler text that reads like everyone else." },
      { name: "Local SEO foundation", desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Heritage Square, Woodway, Lake Waco, and more." },
      { name: "Speed & Core Web Vitals", desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: "Neighborhood-targeted pages", desc: "Pages built around the Waco neighborhoods and surrounding towns you serve — Heritage Square, Castle Heights, Sanger Heights, Woodway, Hewitt, Temple — so you stand out instead of blending into one generic city page.", featured: true },
      { name: "AI-search ready", desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: "How we build: the OnwardCraft process",
    process: [
      { name: "Discovery and strategy", desc: "We learn your trade, your Waco neighborhoods, your best jobs — renovation, HVAC, roofing, plumbing — and your competitors, then map the site around booking more of the work you want." },
      { name: "Design", desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: "Build and copy", desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: "Launch", desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: "Support and optimize", desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: "Transparent Waco web design pricing",
      note: "One-time build. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Starter Site", price: "$2,000", cadence: "", desc: "A focused, high-converting site for a single-trade Waco contractor.", features: ["Up to 5 custom pages", "Mobile-first design", "Lead forms + call buttons", "Local SEO foundation", "You own the site"] },
        { name: "Growth Site", price: "$4,500", cadence: "", desc: "A bigger site for established contractors with several services and neighborhoods.", features: ["Up to 12 pages", "Custom design + copywriting", "Service + neighborhood pages", "Speed & Core Web Vitals", "Neighborhood-targeted pages"], featured: true },
        { name: "Custom Build", price: "$8,000", cadence: "", desc: "A full custom build for multi-service or multi-location businesses serving Waco and the Temple market.", features: ["Fully custom design", "Advanced SEO + schema", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website cost in Waco?", a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: "How long does it take to build?", a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site help me capture the Waco renovation market?", a: "That's the whole point. The Fixer Upper effect has filled Waco with homeowners who came here to renovate and are actively searching for contractors. We build around the specific neighborhoods they're buying in — Heritage Square, Castle Heights, Sanger Heights — and make your offer obvious from the first screen, so you're the contractor they call." },
      { q: "Will my new site actually rank on Google?", a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Waco terms." },
      { q: "Do I own the website?", a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: "Will it work well on phones?", a: "We design mobile-first, because that's where almost all of your Waco traffic comes from — especially emergency calls during summer heat or after a storm. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: "What platform do you build on?", a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: "Do you offer ongoing support?", a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: "Am I locked into a contract?", a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what a high-converting Waco contractor site should include, and a fixed-price quote with a timeline. It's a no-pressure plan for Waco web design that converts visitors into booked jobs, just the numbers and the next step." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: "waco", serviceSlug: "website-redesign", service: "Website Redesign",
    titleTag: "Waco Website Redesign | OnwardCraft",
    metaDescription:
      "Waco Website Redesign without losing rankings. Faster, mobile-first rebuilds that convert more visitors: renovation homeowners, HVAC callers, storm leads.",
    eyebrow: "Website Redesign · Waco, TX",
    h1: "Waco Website Redesign that converts more renovation buyers without losing your rankings",
    h2Exact: "Waco Website Redesign Company",
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Waco contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned in Waco's renovation-driven market.",
    primaryCta: "Get my free redesign audit",
    intro:
      "A Waco Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We rebuild Waco contractor sites for speed and conversions, built for a market where Fixer Upper renovation buyers, Baylor-area homeowners, and Central Texas emergency callers are all searching on their phones. And we handle the SEO-safe migration, with the redirects and care that protect the traffic you already have.",
    aioQuestion: "How do I redesign my website without losing SEO and traffic?",
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — qualities Google's algorithm rewards.",
    problemHeading: "Signs your Waco site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Waco homeowners renovating in Heritage Square or Sanger Heights are making big decisions and they judge your professionalism by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "When temperatures hit 105°F and an AC goes out, a Waco homeowner searches on their phone and calls the first contractor whose site loads. If yours is clunky or slow on mobile, you lose the job before the phone rings. A redesign built mobile-first wins them back." },
      { title: "It doesn't stand out in a market that's changed", body: "Waco is a different city than it was before Fixer Upper. The buyers coming here are renovation-focused and savvy. A generic old site gives them no reason to pick you over the other results. We rebuild for conversions and for the neighborhoods you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Waco redesign",
    services: [
      { name: "Redesign audit", desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: "SEO-safe migration", desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned in Waco search." },
      { name: "Conversion redesign", desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs — renovation estimates, HVAC service calls, roofing inspections." },
      { name: "Speed overhaul", desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical when emergency callers need you fast." },
      { name: "Mobile-first rebuild", desc: "Redesigned around the phone, where almost all your Waco traffic lives — especially during heat emergencies and post-storm searches." },
      { name: "Brand refresh", desc: "A modern, trustworthy look that matches the quality of your work and stands out in a market that's drawn in more discerning homebuyers." },
      { name: "Neighborhood-targeted rebuild", desc: "Rebuilt around the Waco neighborhoods and surrounding towns you serve — so the new site speaks to Heritage Square renovation buyers, Lake Waco homeowners, and Woodway HVAC customers, not just \"Waco.\"", featured: true },
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
      heading: "Transparent Waco redesign pricing",
      note: "One-time project. 50% to start, 50% at launch. You own everything. No lock-in.",
      tiers: [
        { name: "Redesign Starter", price: "$2,500", cadence: "", desc: "A focused redesign for a small Waco contractor site.", features: ["Up to 5 pages rebuilt", "Mobile-first redesign", "SEO-safe migration", "Conversion improvements", "You own the site"] },
        { name: "Redesign Growth", price: "$5,000", cadence: "", desc: "A full redesign for an established Waco contractor site with multiple services.", features: ["Up to 12 pages", "Custom design + copy refresh", "Speed overhaul", "Service + neighborhood pages", "Neighborhood-targeted rebuild"], featured: true },
        { name: "Full Rebuild", price: "$9,000", cadence: "", desc: "A complete rebuild for multi-service or multi-location sites serving Waco, Temple, and beyond.", features: ["Full custom rebuild", "Advanced SEO migration", "Integrations & booking", "High-traffic performance", "AI-search optimization"] },
      ],
    },
    faqs: [
      { q: "How much does a website redesign cost in Waco?", a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: "Will I lose my Google rankings if I redesign?", a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: "How long does a redesign take?", a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: "How do I know I need a redesign?", a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't reflect the quality of work you do for Waco's renovation market, it's costing you business. The free audit tells you plainly whether a redesign is worth it." },
      { q: "Do you migrate my existing content?", a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: "Will the redesign help me compete in Waco's renovation market?", a: "Yes, and that's the point. We rebuild around the specific Waco neighborhoods you serve, keep the site fast for emergency callers, and make the offer and call button obvious — so the new site wins the renovation homeowner in Heritage Square and the HVAC customer in Woodway." },
      { q: "Will the new site be mobile-friendly and fast?", a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings. In a market where emergency calls happen on phones in July heat, speed is how you win the job." },
      { q: "Do I own the redesigned site?", a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "Am I locked into a contract?", a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline. You also get the safe migration plan that makes a Waco Website Redesign convert more without losing the rankings you have earned." },
    ],
  },
];

export const wacoCity = {
  citySlug: "waco", city: "Waco", state: "Texas", stateAbbr: "TX", metro: "Waco",

  titleTag: "Waco Marketing for Contractors | OnwardCraft",
  metaDescription:
    "Waco marketing for contractors: web design, SEO, and local SEO that get you found and booked. Ride the Fixer Upper renovation wave and own your leads.",

  eyebrow: "Waco · Web Design, SEO & Lead Generation",
  h1: "Waco marketing for contractors that gets you found and booked through the renovation wave",
  h2Exact: "Waco Marketing Agency for Contractors",
  heroSubhead:
    "Websites, SEO, and local SEO built for Waco's renovation-driven market — from Heritage Square to Lake Waco to Woodway. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ["Built for the trades", "Neighborhood-by-neighborhood targeting", "No lock-in contracts"],
  primaryCta: "Get my free Waco audit",

  intro:
    "Waco marketing for contractors works differently than it does anywhere else in Texas right now. The Fixer Upper effect has brought a sustained wave of renovation-focused homebuyers to the city, people who came here specifically to renovate older homes in Heritage Square, Castle Heights, and Sanger Heights. Baylor University's growing professional class is buying and upgrading homes near campus. And the fundamentals of Central Texas, brutal summer heat, real tornado and hail exposure, and freeze events like 2021, keep HVAC, roofing, and plumbing contractors busy year-round. Winning this market takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for your neighborhoods. Here's how this web design and SEO for Waco contractors gets you found and booked.",
  aioQuestion: "How do Waco contractors get more leads online?",
  aioAnswer:
    "Waco contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The Fixer Upper renovation wave means buyers are actively searching for contractors in Heritage Square and Sanger Heights. Waco's ~35% Hispanic population is a real Spanish-language search opportunity most competitors ignore. And ranking for seasonal demand — HVAC in summer, roofing after hail, freeze emergencies in winter — before the spike hits is how the busiest contractors here stay booked.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: "The OnwardCraft team",
  whyUs: WHY,

  services: [
    {
      service: "Local SEO", serviceSlug: "local-seo", tagline: "Win the Map Pack",
      blurb: "Get into the top three businesses Google pins to the map when Waco searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, with Spanish-language reach for Waco's Hispanic market.",
    },
    {
      service: "SEO Services", serviceSlug: "seo-services", tagline: "Rank higher, get leads",
      blurb: "Rank for the money keywords your Waco customers actually search — renovation, HVAC, storm damage, freeze emergencies — and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: "Web Design", serviceSlug: "web-design", tagline: "Sites that convert",
      blurb: "Fast, mobile-first websites engineered to turn renovation homeowners, HVAC callers, and storm leads into booked jobs — not brochures that sit there while your competitors answer the phone.",
    },
    {
      service: "Website Redesign", serviceSlug: "website-redesign", tagline: "More leads, no traffic loss",
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned in Waco's competitive market.",
    },
  ],

  faqs: [
    { q: "What marketing services do you offer in Waco?", a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — whether that's riding the Fixer Upper renovation wave, capturing HVAC emergencies in the summer heat, or winning storm-damage roofing calls after a hail event." },
    { q: "Do you work only with contractors?", a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Waco's renovation market, Central Texas heat emergencies, freeze calls, and spring storm season." },
    { q: "Why does Waco need a specialized approach?", a: "Waco has a unique market shaped by the Fixer Upper effect — a sustained wave of renovation-focused buyers who came here specifically to renovate older homes. Add Baylor University's growing professional class, Central Texas heat that tops 105°F in summer, real tornado and hail exposure, and a ~35% Hispanic population that searches in Spanish, and you have a market that rewards contractors who show up in the right searches." },
    { q: "How much does it cost to work with you?", a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: "Which Waco areas do you serve?", a: "Waco proper and the communities around it — Woodway, Hewitt, Lorena, Hillsboro, Temple, Belton, McGregor — plus specific neighborhoods like Heritage Square, Castle Heights, Sanger Heights, and Lake Waco." },
    { q: "Where should I start?", a: "Start with a free Waco audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. It's the simplest first step in Waco marketing for contractors who want to get found and booked. No pitch deck, just a plan." },
  ],
};

// TACOMA — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Tacoma's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// TACOMA — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Tacoma is different from anywhere else in the Pacific Northwest',
  body:
    "Tacoma sits at a unique crossroads. It gets more rain than Seattle and less sun, which means moss, algae, roof rot, mold, and drainage problems aren't seasonal concerns — they're year-round business for every contractor in the area. The city also sits in the shadow of Mt. Rainier, the most glaciated peak in the contiguous United States and one of the highest-risk volcanoes in North America. Tacoma residents are more aware of building safety and structural integrity than most markets you'll find anywhere. But the defining force shaping contractor demand here is Joint Base Lewis-McChord, one of the largest combined Army and Air Force installations in the United States. The PCS (Permanent Change of Station) cycle moves thousands of military families in and out of Pierce County every single year. Those families need contractors immediately — often on tight timelines, without local referral networks to lean on. They search on their phones, read reviews, and hire whoever shows up first. On top of that, Tacoma has become a destination for Seattle-income remote workers priced out of King County. They pay for quality but expect honest value, and they renovate heavily in the historic neighborhoods that define the city's character — Stadium District, Proctor, North End. Tacoma's working-class, port-city identity means contractors who are straight-talking and competitively priced win the trust game fast. Be visible, be honest, be good at your trade — and rank.",
  pullQuote: "In Tacoma, thousands of military families move in and out every year and need a contractor today. The business goes to whoever shows up first on the map.",
  donut: {
    title: 'How Tacoma searches for contractors',
    value: 55,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 55, kind: 'teal' },
      { label: 'Desktop', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Pierce County',
  seasonCaption: 'Rain/drainage/roof work Oct–May, brief summer HVAC demand Jun–Aug',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 85, peak: true }, { m: 'M', v: 78, peak: true },
    { m: 'A', v: 75, peak: true }, { m: 'M', v: 60 }, { m: 'J', v: 65 },
    { m: 'J', v: 72 }, { m: 'A', v: 70 }, { m: 'S', v: 55 },
    { m: 'O', v: 82, peak: true }, { m: 'N', v: 87, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '~320K', label: 'people in the city of Tacoma; over 900K across Pierce County' },
    { value: 'JBLM', label: 'Joint Base Lewis-McChord — thousands of PCS moves per year create urgent contractor demand', accent: true },
    { value: 'Oct–May', label: 'rain and moisture season, peak time for roofing, drainage, and mold calls' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks in any Tacoma neighborhood search' },
  ],
  neighborhoods: [
    'Stadium District', 'North End', 'Proctor', 'Ruston', 'University Place',
    'Gig Harbor', 'Puyallup', 'Bonney Lake', 'Spanaway', 'Lakewood',
    'South Tacoma', 'Fircrest', 'Steilacoom', 'DuPont', 'Parkland',
  ],
};

const AREAS = [
  'Stadium District', 'North End', 'Proctor', 'Ruston', 'University Place',
  'Gig Harbor', 'Puyallup', 'Bonney Lake', 'Spanaway', 'Lakewood',
  'South Tacoma', 'Fircrest', 'Steilacoom', 'DuPont', 'Parkland',
];

const FOUNDER =
  "I'll give it to you straight: I started OnwardCraft because I watched too many good contractors — including trade businesses near military bases like JBLM — burn through budgets on Angi and HomeAdvisor, competing with three other contractors for the same lead they all paid for. A PCS family that just landed in Pierce County and needs a contractor now doesn't have time to sort through a marketplace. They search Google, look at the map, pick the first name that looks credible, and call. We exist to make sure that name is yours. No 12-month handcuffs. If we're not delivering, fire us.";

const WHY = [
  {
    title: 'We understand the Tacoma market specifically',
    body: "The JBLM PCS cycle, the constant rain, the moss and drainage calls, the historic North End and Stadium District renovations. We build your local SEO around how Pierce County homeowners actually search, not a generic template with a city name swapped in.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole point is a pipeline you own. Not another monthly check to a lead marketplace that sells the same Pierce County homeowner to you and two competitors simultaneously.",
  },
  {
    title: 'We get the military community angle',
    body: "JBLM moves thousands of families through Tacoma every year. Families who arrive in a new city with no local referral network and a short timeline to find a contractor go straight to Google. We make sure they find you.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not earning it, you leave. That keeps the accountability exactly where it belongs.",
  },
];

const PROOF = {
  heading: "We're new, so here's the honest math instead of a logo wall",
  body:
    "Plenty of agencies will show you a grid of client logos. We're a young, founder-led shop, so we won't pretend to a track record we don't have yet. What we can show you is why this works — straight from Google's and the industry's own research on how people find contractors locally.",
  stats: [
    { value: '46%', label: 'of Google searches have local intent', n: 46 },
    { value: '76%', label: 'who search local on a phone visit a business that day', n: 76 },
    { value: '28%', label: 'of local searches end in a purchase', n: 28 },
  ],
  projection:
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: a Tacoma contractor getting around 1,200 local 'near me' impressions a month across neighborhoods like Proctor, North End, and University Place. Moving from page-two invisibility into the Map Pack top three is the difference between a trickle of calls and a booked-out calendar — and with JBLM families arriving on short timelines, that visibility gap has immediate dollar consequences. In your free audit, we model the real numbers for your specific business.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Tacoma', state: 'Washington', stateAbbr: 'WA', metro: 'Tacoma-Pierce County',
  heroProof: ['Built for the trades', 'Pierce County neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const tacomaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'tacoma', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Tacoma Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your trade in Tacoma and three businesses show up on the map. We get you into those three, so the call lands with you — not a competitor. Free audit, no lock-in.',
    eyebrow: 'Local SEO · Tacoma, WA',
    h1: 'When Tacoma searches for what you do, be the first name they find',
    h2Exact: 'Tacoma Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches 'near me.' In Tacoma, those searches happen every day from military families who just arrived at JBLM and need a contractor now. We get you into that top three so the call lands with you.",
    primaryCta: 'Get my free Tacoma audit',
    intro:
      "Tacoma local SEO comes down to one question: when a homeowner in Proctor or a newly arrived JBLM family in University Place searches your trade plus 'near me,' are you one of the three businesses Google pins to the map? Most people pick from those three and never look further. Between the year-round rain creating steady demand for roofing, drainage, and moisture work — and the constant flow of military PCS moves bringing in buyers with no local referral network — the Map Pack in Pierce County is worth more than most contractors realize. Here's how you get into it.",
    aioQuestion: 'How do Tacoma businesses rank higher in local search?',
    aioAnswer:
      "You rank in Tacoma by getting four things right: a Google Business Profile optimized for the specific services and neighborhoods you want to win; consistent name, address, and phone listings across the web; a steady flow of real reviews; and local content tied to actual Pierce County neighborhoods. In Tacoma, the rain-season surge in roofing, drainage, and mold calls from October through May — combined with PCS-cycle urgency from JBLM families — means being in the Map Pack before those demand spikes is what separates booked-out contractors from ones watching the phone.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own trade in Tacoma right now. See the three businesses Google pins above everything else? They get the overwhelming majority of the clicks. When a newly arrived JBLM family needs a contractor on a tight PCS timeline, or when a homeowner's roof starts leaking in November, they pick from those three and don't scroll. Getting into that Map Pack for your neighborhoods is the highest-return move most Tacoma contractors can make." },
      { title: "You're paying for leads you don't own", body: "Angi and HomeAdvisor sell the same Tacoma homeowner to three or four contractors, then bill each of you to compete. A military family that just landed at JBLM with a two-week timeline to find a plumber doesn't need a marketplace — they need a contractor who shows up first on Google. Local SEO builds that pipeline. The leads come to you, and nobody else got them." },
      { title: "You're missing the rain-season surge", body: "October through May, Pierce County gets hammered with rain. Moss, algae, roof damage, drainage failures, and mold calls spike — and the contractors who are already ranking before the season catch the work. If you're not in the Map Pack before October, you're chasing the season instead of leading it." },
    ],
    servicesHeading: 'What it actually takes to rank you in Pierce County',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google understands which Tacoma and Pierce County searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks — from Yelp to local Pierce County directories. We fix the conflicts and build the listings you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady stream of reviews. Especially powerful for JBLM-area searches, where incoming military families rely heavily on reviews." },
      { name: 'Neighborhood pages', desc: "Real pages for Proctor, North End, University Place, Gig Harbor, Puyallup, and the rest — so you rank for where someone's actually searching, not just 'Tacoma.'" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The foundation that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Tacoma and Pierce County sources Google trusts — local press, neighborhood associations, JBLM-adjacent business networks. This is what separates page one from page two." },
      { name: 'Rain-season and moisture SEO', desc: "We optimize for the drainage, roofing, mold, and moisture searches that spike October through May — Tacoma's longest demand season — so you're already ranking when the calls start.", featured: true },
      { name: 'AI search readiness', desc: "A growing share of local research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools cite your business by name.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We map where you actually rank today across Tacoma and Pierce County neighborhoods, and identify exactly which Map Pack competitors are beating you and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. Early lift typically shows within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound over time — which is exactly why starting now beats waiting until next rain season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages for the specific parts of Pierce County where your best jobs come from, plus the on-page work behind them." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Tacoma.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors competing across Pierce County neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Pierce County.', features: ['Everything in Local Growth', 'Local link building', 'Rain-season and moisture SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Tacoma?', a: "Most Tacoma engagements run $750 to $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above this, with no hidden fees and no long contract. We confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack in Tacoma?', a: "Profile improvements can move in a few weeks. The more competitive Tacoma keywords typically take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising page one in 30 days is overselling." },
      { q: 'What makes Tacoma local SEO different from other markets?', a: "Two things. The JBLM PCS cycle brings thousands of military families into Pierce County every year — families who search Google immediately because they have no local network. And the rain season runs October through May, creating a long window of elevated demand for roofing, drainage, mold, and moisture work. Getting into the Map Pack before both of those demand cycles is what separates busy contractors from slow ones." },
      { q: 'Can you help me reach JBLM families specifically?', a: "Yes, and in Tacoma that's a meaningful edge. PCS families arrive with no local referral network, short timelines, and a phone in their hand. We optimize your profile and content so you show up prominently in searches around JBLM, University Place, Lakewood, and the areas where military families land." },
      { q: 'Which areas do you cover in Pierce County?', a: "Stadium District, North End, Proctor, Ruston, University Place, Gig Harbor, Puyallup, Bonney Lake, Spanaway, Lakewood, Fircrest, Steilacoom, DuPont, and Parkland. We build genuine neighborhood pages instead of one generic Tacoma page, because that's what actually ranks for '[service] [neighborhood]' searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, drainage, mold remediation, solar, electrical, restoration, and general contractors. We understand the rain-season demand cycle, the JBLM urgency factor, and the historic-home renovation work in North End and Stadium District." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more local research starts in AI now. We structure your content and schema so AI engines can read, trust, and recommend your business — not just classic Google search." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Lead marketplaces sell shared leads at prices that only make sense if you can win the job against three other contractors. Local SEO builds the opposite: a JBLM family searches, finds you on the map, calls you, and nobody else bought that same lead. Over time you lean on brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Tacoma and Pierce County, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan modeled for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'tacoma', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Tacoma SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Tacoma SEO that ranks contractors on Google and builds a lead pipeline you own. Revenue-tied reporting, no lock-in, built for Pierce County. Free Tacoma SEO audit.',
    eyebrow: 'SEO Services · Tacoma, WA',
    h1: 'Get your Tacoma business to the top of Google and keep it there',
    h2Exact: 'Tacoma SEO Company',
    heroSubhead:
      "Ads stop the moment you stop paying. SEO is the opposite: rank once for what Tacoma and Pierce County customers search and the leads keep coming — including the JBLM families, the rain-season calls, and the historic-neighborhood renovations. We build that ranking and tie every report to actual jobs.",
    primaryCta: 'Get my free Tacoma SEO audit',
    intro:
      "Tacoma SEO comes down to one question: when a homeowner in Puyallup or a newly arrived military family in Lakewood searches what you do, are you on page one or page two? Page two might as well not exist. We get contractors ranking for the money keywords in Pierce County — rain-season moisture work, JBLM-area searches, historic-neighborhood renovations — and we measure it in leads, not traffic reports.",
    aioQuestion: 'How do Tacoma businesses rank higher on Google?',
    aioAnswer:
      "Tacoma businesses rank by fixing the technical foundation of their site, optimizing pages for the exact terms Pierce County customers search, publishing genuinely useful local content tied to specific neighborhoods and seasonal demand, and earning links from trusted Tacoma-area sources. The biggest opportunities here are ranking for rain-season moisture and drainage work before October, and being visible to JBLM-area families who search immediately on arrival without a local referral network to lean on.",
    problemHeading: "Three reasons your Tacoma site isn't bringing in the work you want",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google results, and they rarely scroll far down page one. If you're not in the top results for what you sell in Tacoma and Pierce County, your site is essentially invisible — no matter how good your work is or how long you've been in business." },
      { title: "You're renting traffic from Google Ads", body: "Ads produce clicks as long as you pay for them. Stop paying and the leads stop instantly. In Tacoma, where rain-season demand and JBLM PCS cycles create predictable surges, SEO builds an asset you own: rankings that keep producing leads during every surge, at a fraction of the per-lead cost of ads." },
      { title: "You're not ranking for the demand that matters here", body: "Tacoma's demand isn't random. Roofing, drainage, mold, and moisture calls surge October through May — the longest rain season in the region. Contractors who rank for those searches before the season starts catch the work. If your SEO ignores seasonal and JBLM-area searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Pierce County',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Tacoma and Pierce County customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot across Pierce County neighborhoods." },
      { name: 'Link building', desc: "Authority from real Tacoma-area and industry sources. Links from local Pierce County directories, press, and business networks are often what separate page one from page two here." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the 'near me' searches across the Tacoma neighborhoods and Pierce County communities you serve." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you know what your SEO is actually producing every month." },
      { name: 'Rain-season and moisture SEO', desc: "We rank you for the drainage, roofing, mold, and moisture searches that drive Tacoma's busiest demand season, October through May, so you're visible before the calls spike.", featured: true },
      { name: 'AI search and GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity can surface and recommend your business, where a growing share of local research now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the Pierce County keywords most likely to drive real leads — including seasonal and JBLM-area searches." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content targeting rain-season, moisture, and neighborhood-specific searches." },
      { name: 'Build authority', desc: "Links and citations from trusted Tacoma and Pierce County sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Tacoma SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Tacoma keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Pierce County neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Tacoma and Pierce County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Rain-season and moisture SEO', 'Multi-area pages', 'AI search and GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Tacoma?', a: "Most Tacoma SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Tacoma?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive Pierce County keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads for Tacoma contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. In Tacoma, where rain-season and JBLM demand are predictable and recurring, SEO builds an asset you own that keeps producing leads through every surge at a lower cost per lead over time." },
      { q: 'Should my Tacoma SEO target the rain season specifically?', a: "Yes. October through May is when drainage, roofing, mold, and moisture calls surge across Pierce County. Ranking takes months to build, so you need to be visible before the season starts — not scrambling to catch up after the first big rain. We optimize for those searches ahead of time." },
      { q: 'Can SEO help me reach JBLM families?', a: "Absolutely, and it's one of the best opportunities in Tacoma. PCS families arrive needing contractors immediately, with no local network to lean on. They go straight to Google. Ranking for searches around JBLM, University Place, Lakewood, and Spanaway puts you in front of that steady stream of buyers." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and recommend your business — not just classic Google search." },
      { q: 'Which Pierce County areas do you cover?', a: "Stadium District, North End, Proctor, Ruston, University Place, Gig Harbor, Puyallup, Bonney Lake, Spanaway, Lakewood, and the communities in between. We build genuine local pages for each area instead of one generic Tacoma page." },
      { q: 'How does this help me stop depending on lead marketplaces?', a: "By building rankings that send leads directly to you. The more you own your Pierce County search visibility, the less you need to pay for shared leads — especially during the rain-season and PCS surges when demand is highest anyway." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in Tacoma and Pierce County, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck — just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'tacoma', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Tacoma Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Tacoma web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in Pierce County. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Tacoma, WA',
    h1: 'Tacoma web design that turns visitors into booked jobs',
    h2Exact: 'Tacoma Web Design Company',
    heroSubhead:
      "A website that doesn't generate calls is a brochure. We build Tacoma contractors fast, mobile-first sites engineered to convert visitors into booked work — built for a market shaped by rain-season urgency and JBLM families searching on their phones.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Tacoma contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that speaks to the neighborhoods you actually serve. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and convert rain-season urgency and JBLM-family searches into booked jobs — with a Tacoma-specific voice that the generic agency templates never get right.",
    aioQuestion: 'What makes a good contractor website in Tacoma?',
    aioAnswer:
      "A good Tacoma contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and speaks to the specific Pierce County neighborhoods and communities you serve. In a market shaped by JBLM urgency, rain-season demand, and Seattle-income buyers who expect quality, a site that feels straight-talking and competitively priced converts faster than one that looks generic.",
    problemHeading: "Why your current site isn't bringing in the work you want",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services without a clear offer or next step. When a JBLM family needs a contractor on a two-week PCS timeline, or when a North End homeowner's drainage is backing up in November, they need to be able to call you in one tap. If your site doesn't make that obvious, they move to the next result." },
      { title: "It's too slow on a phone", body: "Most of your Tacoma visitors are on mobile — especially military families searching on the go. A slow site loses them before they ever see your offer, and slow sites also rank worse on Google. We build fast so you keep both the visitor and the ranking." },
      { title: "It doesn't speak to Tacoma", body: "A homeowner in Proctor or Gig Harbor wants to see that you serve Proctor or Gig Harbor — not a generic Washington page that could belong to anyone. We build sites that name the Pierce County communities you actually work, so visitors trust you're local and Google ranks you for the right neighborhood searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Tacoma website",
    services: [
      { name: 'Custom design', desc: "No templates. A site designed around your trade, your Pierce County service area, and the jobs you actually want — with a straight-talking Tacoma voice." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Tacoma traffic comes from — especially JBLM families searching in a new city." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak directly to Tacoma homeowners — rain-season urgency, no-nonsense value, honest pricing — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and Pierce County neighborhood-ready pages." },
      { name: 'Speed and Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both your conversions and your rankings." },
      { name: 'Pierce County neighborhood pages', desc: "Pages built around the communities you serve — North End, Proctor, Gig Harbor, Puyallup, University Place, Lakewood — so you rank where your customers actually live and search.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more Pierce County research starts in AI instead of classic Google.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Pierce County neighborhoods, your best jobs, and your competitors. Then we map the site to book more of the work you actually want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert for a Tacoma audience — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that speaks to the no-nonsense, value-conscious Tacoma buyer, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Tacoma web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Tacoma contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Pierce County contractors.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed and Core Web Vitals', 'Pierce County neighborhood pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations and booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Tacoma?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated at each stage." },
      { q: 'Will my site work for JBLM families who search on their phones?', a: "That's exactly who we design for. We build mobile-first, with fast load times, easy-to-tap call buttons, and a clear offer above the fold — so a military family searching in a new city gets to your call button in one tap." },
      { q: 'Will my new site rank on Google in Tacoma?', a: "We build every site on a local SEO foundation — fast load, clean structure, schema, and Pierce County neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive local terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it speak to the Tacoma market specifically?', a: "Yes, and that's the point. We write copy that speaks to a straight-talking, value-conscious Tacoma audience — rain-season urgency, honest pricing, local credibility — not generic text that could belong to any contractor in any city." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Tacoma contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'tacoma', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Tacoma Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Tacoma website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across Pierce County. Free audit.',
    eyebrow: 'Website Redesign · Tacoma, WA',
    h1: 'Redesign your Tacoma website without losing your rankings',
    h2Exact: 'Tacoma Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week in Tacoma — slow on a phone, easy to ignore, nothing that speaks to your Pierce County neighborhoods. We rebuild contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've already earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings disappear overnight. We do neither. We rebuild Tacoma contractor sites for speed and conversions — built for rain-season urgency, JBLM-family searches, and the no-nonsense buyers who make up this market — and we migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic in Tacoma?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure — or mapping 301 redirects for every changed URL — preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign protects your rankings and improves them, because the rebuilt site is faster, mobile-first, and better structured for Pierce County neighborhood searches than the old one.",
    problemHeading: "Signs your Tacoma site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a renovation job in North End or a roof replacement in Gig Harbor, homeowners judge your site in seconds. An old, cluttered site quietly sends them to a competitor who looks more established — even when your actual work is better and your price is fair." },
      { title: "It's slow and broken on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Tacoma visitors before they see your offer. Military families searching JBLM-area contractors on their phones won't wait. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert rain-season and JBLM urgency into calls", body: "October through May, Pierce County homeowners are dealing with roof damage, drainage failures, and moisture problems. JBLM families arrive needing a contractor on a tight timeline. Both situations create high urgency — and a generic old site that doesn't speak to that urgency or those neighborhoods gives them no reason to choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Tacoma redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and organic traffic you've already built." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that get used. We design every page around booking the job, not just looking professional." },
      { name: 'Speed overhaul', desc: "Rebuilt to load fast and pass Core Web Vitals — better for both conversions and rankings in a market where mobile searches dominate." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Tacoma traffic lives — especially JBLM families and rain-season urgent searches." },
      { name: 'Brand refresh', desc: "A modern, credible look that matches the quality of your work and the straight-talking Tacoma identity your buyers trust." },
      { name: 'Pierce County neighborhood rebuild', desc: "Rebuilt around the communities you actually serve — Stadium District, Proctor, University Place, Puyallup, Gig Harbor — so the site stands out instead of reading like a generic Washington contractor page.", featured: true },
      { name: 'AI-search ready', desc: "Rebuilt so AI Overviews and ChatGPT can read and recommend you as Pierce County research shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings right now, then map a redesign that fixes it without breaking what already works — including your existing Pierce County ranking signals." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for the Tacoma market. You review and shape it before we write a line of code." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, write every redirect, and prep the SEO detail for a clean migration that protects your current traffic." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely in the first weeks so rankings hold and improve instead of dropping." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's actually converting, plus ongoing speed and content updates." },
    ],
    pricing: {
      heading: 'Transparent Tacoma redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a smaller Tacoma contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Pierce County contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Pierce County neighborhood rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations and booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Tacoma?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully — and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a Tacoma redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in rain-season calls, doesn't speak to specific Pierce County neighborhoods, or isn't converting JBLM-area searches — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Tacoma specifically?', a: "Yes, and that's the whole point. We rebuild around the Pierce County communities you serve, keep the site fast, and make the offer obvious — so the new site speaks to rain-season urgency and JBLM families instead of reading like a generic contractor page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — especially important for the mobile-heavy searches coming from JBLM families." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign needs to fix, and a fixed-price quote with a timeline and a safe migration plan specific to your Tacoma business." },
    ],
  },
];

export const tacomaCity = {
  citySlug: 'tacoma', city: 'Tacoma', state: 'Washington', stateAbbr: 'WA', metro: 'Tacoma-Pierce County',

  titleTag: 'Tacoma Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Tacoma contractors. Get found across Pierce County, win JBLM-area searches, and own your leads instead of renting them. Free audit.',

  eyebrow: 'Tacoma · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Tacoma contractors found and booked',
  h2Exact: 'Tacoma Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Pierce County — the rain-season demand cycle, JBLM PCS urgency, and no-nonsense buyers who value honest work at a fair price. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Pierce County neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Tacoma audit',

  intro:
    "If you run a contracting business in Tacoma, you're operating in a market unlike most in the Pacific Northwest. The rain runs October through May — roof rot, moss, algae, drainage failures, and mold are year-round categories here, not seasonal ones. Joint Base Lewis-McChord drives a constant churn of military families who arrive needing contractors immediately, without local referral networks to lean on. And the city's working-class, port-city identity means buyers respond to straight-talking contractors who are competitive on price and credible on quality. Winning here takes three things working together: a site that converts, SEO that ranks you for what Pierce County buyers search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Tacoma contractors do exactly that.",
  aioQuestion: 'How do Tacoma contractors get more leads online?',
  aioAnswer:
    "Tacoma contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across Pierce County neighborhoods. The biggest opportunities are capturing rain-season moisture and drainage searches before October, ranking for JBLM-area searches that bring in military families with immediate contractor needs, and being visible in the historic neighborhoods where renovation demand is strongest.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Pierce County searches 'near me' — including the JBLM families and rain-season calls that drive Tacoma's busiest periods.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords Pierce County buyers actually search — rain-season work, JBLM-area searches, historic-neighborhood renovations — and own a lead pipeline that keeps producing.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that speak to the straight-talking Tacoma buyer and convert rain-season urgency and military-family searches into booked jobs — not generic brochures.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and Pierce County conversions, and migrate it carefully so you keep every ranking signal you've already built.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Tacoma?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across Pierce County." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, drainage, mold remediation, solar, electrical, restoration, and general contractors. We understand rain-season demand cycles, JBLM urgency, and historic-neighborhood renovation work." },
    { q: 'Why does the Tacoma market need a different approach?', a: "Three things make Tacoma distinct. The rain runs October through May — longer than most markets — creating sustained demand for moisture, drainage, and roofing work. JBLM's PCS cycle brings in thousands of families every year who search immediately without local networks. And Tacoma buyers respond to straight-talking, value-forward contractors, not polished national-agency messaging." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Tacoma and Pierce County areas do you serve?', a: "Stadium District, North End, Proctor, Ruston, University Place, Gig Harbor, Puyallup, Bonney Lake, Spanaway, Lakewood, Fircrest, Steilacoom, DuPont, and Parkland. We build genuine neighborhood pages for the communities you actually serve." },
    { q: 'Where should I start?', a: "Start with a free Tacoma audit. We'll look at your website, your rankings, and your Map Pack presence in Pierce County, then tell you the one or two moves that will bring in the most work fastest — whether that's the rain-season search window coming up or the JBLM-area gap your competitors haven't filled. No pitch deck, just a plan." },
  ],
};

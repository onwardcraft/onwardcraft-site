// WEST PALM BEACH — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across West Palm Beach's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// WEST PALM BEACH — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Palm Beach County is unlike anywhere else in Florida',
  body:
    "Palm Beach County sits at the intersection of two forces that don't exist at the same scale anywhere else in the state. First, you have the most concentrated pocket of ultra-wealthy seasonal residents in the country — Palm Beach Island alone is home to Mar-a-Lago, Flagler-era mansions, and billionaire estates that make ordinary renovation budgets look small. From October through April, snowbirds arrive and activate all at once, creating a compressed surge of demand for contractors who can handle high-end work. Second, Palm Beach County is directly in the Atlantic hurricane lane. Wilma in 2005, Frances and Jeanne in 2004 — this county has taken direct hits, and homeowners here don't forget it. Impact windows, roofing, seawall repair, and storm prep are permanent, year-round demand drivers, not just seasonal spikes. The contractor who ranks well before season arrives is the one who books the island estates and the canal-front homes in Boynton Beach alike.",
  pullQuote: 'On Palm Beach Island, contractors who look polished online win massive jobs. Ranking well is table stakes for estate-level work.',
  donut: {
    title: 'Hispanic residents in Palm Beach County',
    value: 26,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 26, kind: 'teal' },
      { label: 'Other', pct: 74, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov) + snowbird activation (Oct–Apr)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 68, peak: true }, { m: 'M', v: 58, peak: true },
    { m: 'A', v: 44 }, { m: 'M', v: 52 }, { m: 'J', v: 70, peak: true },
    { m: 'J', v: 82, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 94, peak: true },
    { m: 'O', v: 96, peak: true }, { m: 'N', v: 86, peak: true }, { m: 'D', v: 76, peak: true },
  ],
  stats: [
    { value: '1.5M+', label: 'people across Palm Beach County, with elite wealth concentrated on the island' },
    { value: 'Oct–Apr', label: 'snowbird season when ultra-wealthy residents activate and book contractors', accent: true },
    { value: 'Jun–Nov', label: 'Atlantic hurricane season — a permanent demand driver for impact windows, roofing, and seawall work' },
    { value: 'Top 3', label: 'Map Pack spots that capture nearly all the calls on any local search' },
  ],
  neighborhoods: [
    'Palm Beach Island', 'Palm Beach Gardens', 'Jupiter', 'Juno Beach', 'Lake Worth',
    'Boynton Beach', 'Delray Beach', 'Boca Raton', 'Wellington', 'Royal Palm Beach',
    'Riviera Beach', 'West Palm Beach', 'Greenacres', 'Lake Clarke Shores', 'Lantana',
  ],
};

const AREAS = [
  'West Palm Beach', 'Palm Beach', 'Palm Beach Gardens', 'Jupiter', 'Boca Raton',
  'Delray Beach', 'Boynton Beach', 'Lake Worth', 'Riviera Beach', 'Wellington',
  'Royal Palm Beach', 'Juno Beach', 'Greenacres', 'Lantana', 'North Palm Beach',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. In Palm Beach County that's especially true — the homeowners writing the big checks on the island and along the Intracoastal are choosing contractors based on how professional they look online. So that's the whole point of what we do here: get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand storm season, emergency calls, impact-window demand, and seawall work — so everything we build is shaped around how your customers actually search in Palm Beach County.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — including the estate-level clients on the island who expect you to find them, not the other way around.",
  },
  {
    title: 'We actually speak Palm Beach County',
    body: "Snowbird activation, Atlantic hurricane exposure, ultra-wealthy seasonal clients, a diverse year-round community from Riviera Beach to Boca Raton. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Palm Beach County contractor gets around 1,500 local \"near me\" impressions a month. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when snowbird season or a major storm hits, that gap gets even wider. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'West Palm Beach', state: 'Florida', stateAbbr: 'FL', metro: 'West Palm Beach-Palm Beach County',
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const westPalmBeachLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'west-palm-beach', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'West Palm Beach Local SEO | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in West Palm Beach and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · West Palm Beach',
    h1: 'When Palm Beach County searches for what you do, be the first name they find',
    h2Exact: 'West Palm Beach Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three — so the call lands with you, whether the homeowner is on Palm Beach Island or Boynton Beach, and so you're ready when snowbird season and hurricane demand hit at once.",
    primaryCta: 'Get my free West Palm Beach audit',
    intro:
      "West Palm Beach local SEO comes down to one thing: when a homeowner in Palm Beach Gardens or Delray Beach searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. In Palm Beach County that matters even more than usual — the ultra-wealthy seasonal residents on and near the island are choosing contractors based on who looks credible online. Here's how you become that contractor.",
    aioQuestion: 'How do West Palm Beach businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Palm Beach County neighborhoods. In a market shaped by snowbird wealth and Atlantic hurricane exposure, the winners look established, respond fast, and are already ranking when seasonal demand spikes — whether that's an October snowbird influx or a June storm.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — the Palm Beach Island homeowner calling for a contractor renovation never sees your name. Getting into that top three is usually the single highest-return move a Palm Beach County business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same West Palm Beach homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline — including referrals from the island estates that start with a Google search." },
      { title: "You're not ready when snowbird season and storm season collide", body: "October through April is when ultra-wealthy seasonal residents arrive and start activating their contractor lists — and it overlaps with the tail of hurricane season. The contractors already ranking take those calls. If you're invisible on the map when that wave hits, the work goes to whoever Google already trusts. Ranking now is how you catch it instead of watching it pass." },
    ],
    servicesHeading: 'What it actually takes to rank you in Palm Beach County',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Palm Beach County searches you should win — from Riviera Beach to Boca Raton." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes estate homeowners and snowbird clients pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Palm Beach Gardens, Jupiter, Delray Beach, Boynton Beach, and the rest, so you rank for the neighborhood someone's actually searching, not just \"West Palm Beach.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Palm Beach County sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Snowbird and hurricane-season readiness', desc: "We get your profile, pages, and reviews ranking before snowbird activation and before hurricane season so you catch the dual demand surge instead of scrambling for it after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you — especially important for high-end clients researching contractors carefully.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Palm Beach County — from Jupiter to Boca Raton — plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Palm Beach County areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Palm Beach County.', features: ['Everything in Local Growth', 'Local link building', 'Snowbird and hurricane-season demand targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in West Palm Beach?', a: "Most Palm Beach County engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Palm Beach County keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes West Palm Beach local SEO different?', a: "Two things set this market apart. First, the concentration of ultra-wealthy seasonal residents — particularly on Palm Beach Island — means trust signals like reviews, a polished online presence, and consistent listings carry real weight. These homeowners are hiring carefully. Second, Palm Beach County is directly in the Atlantic hurricane lane, so trade demand for roofing, impact windows, and restoration spikes hard and fast. You need to be ranking before the storm, not after." },
      { q: 'How does local SEO help me during snowbird season?', a: "From October through April, ultra-wealthy seasonal residents arrive in Palm Beach County and begin activating their contractor lists simultaneously. The businesses already in the Map Pack get those calls. We get you ranking and reviewed ahead of the season so you capture that concentrated demand instead of competing for scraps after the best jobs are booked." },
      { q: 'Which areas do you cover?', a: "All of Palm Beach County — West Palm Beach, Palm Beach Island, Palm Beach Gardens, Jupiter, Juno Beach, Delray Beach, Boynton Beach, Boca Raton, Wellington, Royal Palm Beach, Riviera Beach, and more. We build genuine neighborhood pages instead of one generic West Palm Beach page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, seawall and waterfront work, and general contractors. We understand emergency calls, hurricane-driven demand, insurance jobs, and the high standards that come with estate-level clients on the island." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research — especially from high-end clients comparing contractors carefully — starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — including the kind of estate and waterfront clients who search independently and call who looks most credible." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'west-palm-beach', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'West Palm Beach SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'West Palm Beach SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for snowbird and hurricane-season demand. Free audit.',
    eyebrow: 'SEO Services · West Palm Beach',
    h1: 'Get your West Palm Beach business to the top of Google and keep it there',
    h2Exact: 'West Palm Beach SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Palm Beach County customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs — whether those clients are on the island or across the Intracoastal.",
    primaryCta: 'Get my free West Palm Beach SEO audit',
    intro:
      "West Palm Beach SEO comes down to one question: when a homeowner in Palm Beach Gardens or Delray Beach searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by extreme wealth, seasonal demand swings, and Atlantic hurricane exposure — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do West Palm Beach businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Palm Beach County sources. In a market with ultra-wealthy seasonal residents and direct hurricane exposure, keeping the site fast on mobile and ranking for snowbird-season and storm-driven searches are two of the fastest ways to pull ahead of competitors.",
    problemHeading: "Three reasons your Palm Beach County site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — and the high-end clients on Palm Beach Island who are researching carefully will simply call whoever ranks above you." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market with the income levels of Palm Beach County, the ROI of organic visibility compounds fast." },
      { title: "You're not ranking for the demand that matters", body: "Palm Beach County demand swings with both snowbird season and hurricane season, and the contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and storm-driven searches, you're leaving your busiest months on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Palm Beach County customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including the high-intent waterfront and estate-level searches." },
      { name: 'Link building', desc: "Authority from real Palm Beach County and industry sources. In a competitive market with wealthy clientele, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Snowbird and hurricane-season SEO', desc: "We rank you for the seasonal and storm-driven searches that drive Palm Beach County's busiest periods — impact windows, roofing, HVAC, and estate renovations — so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of high-intent search now begins — especially important for thorough, high-spending clients.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Palm Beach County leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and storm-driven terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Palm Beach County and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent West Palm Beach SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Palm Beach County search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Snowbird & hurricane-season SEO', 'Multi-location or estate-market targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in West Palm Beach?', a: "Most Palm Beach County SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in West Palm Beach?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Palm Beach County keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes — particularly ahead of snowbird season." },
      { q: 'Should my West Palm Beach SEO target snowbird and hurricane season?', a: "Yes — both. When wealthy seasonal residents arrive in October, they activate contractor lists fast and spend heavily. And when a hurricane threatens the Atlantic coast, searches for roofing, impact windows, and restoration spike overnight. Ranking takes months to build, so you have to be in place before either season, not chasing it after. We optimize for both sets of terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add snowbird-and-seasonal and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business. This matters especially in Palm Beach County, where high-end clients often research contractors thoroughly before calling." },
      { q: 'Which areas around West Palm Beach do you cover?', a: "All of Palm Beach County — Palm Beach Island, Palm Beach Gardens, Jupiter, Delray Beach, Boynton Beach, Boca Raton, Wellington, Riviera Beach, Lake Worth, and more — with genuine local pages rather than one generic West Palm Beach page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially valuable in a market where the best clients are doing their own research online." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'west-palm-beach', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'West Palm Beach Web Design | Sites That Convert | OnwardCraft',
    metaDescription:
      'West Palm Beach web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving estate clients and storm-season demand. Transparent pricing. Free quote.',
    eyebrow: 'Web Design · West Palm Beach',
    h1: 'West Palm Beach web design that turns visitors into booked jobs',
    h2Exact: 'West Palm Beach Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Palm Beach County contractors fast, mobile-first sites engineered to turn visitors into booked work — one that makes island estate owners and Boynton Beach homeowners equally confident in picking up the phone.",
    primaryCta: 'Get my free quote',
    intro:
      "Most West Palm Beach contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. In Palm Beach County that's especially costly — the ultra-wealthy snowbird clients on the island are choosing contractors based on how polished and credible the website looks. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors into booked jobs whether you're serving a Jupiter estate or a Lake Worth renovation.",
    aioQuestion: 'What makes a good contractor website in West Palm Beach?',
    aioAnswer:
      "A good Palm Beach County contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and is built to handle traffic spikes during both snowbird activation and hurricane season. Because estate-level clients are researching carefully and most local searches happen on mobile, a professional look and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. On Palm Beach Island, where homeowners are hiring based on perceived professionalism, a passive website costs you jobs you'll never even know you lost. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Palm Beach County visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It can't handle a seasonal surge", body: "When snowbird season begins or a hurricane threatens the coast, contractor sites get flooded with traffic. The slow ones buckle or bury the call button right when it mattered most. We build sites that stay fast and convert under load, so you capture that demand instead of losing it to a competitor who ranked below you but whose site worked." },
    ],
    servicesHeading: "What's in an OnwardCraft West Palm Beach website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want — from waterfront maintenance to Palm Beach estate renovations." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Palm Beach County traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to homeowners making high-stakes decisions — whether it's storm prep, seawall repair, or a full estate renovation — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages from Jupiter to Boca Raton." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Snowbird-season and storm-surge ready', desc: "Built to stay fast and keep the call button front and center when seasonal demand peaks — whether that's snowbird activation in October or post-hurricane search volume — so you capture your biggest jobs.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more high-intent search shifts to AI — especially for thorough estate-level clients.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want in Palm Beach County." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent West Palm Beach web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-surge and snowbird-season ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service, estate-level, or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in West Palm Beach?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site handle a snowbird-season or storm-season traffic spike?', a: "Yes, and in Palm Beach County both matter. When seasonal residents arrive in October or a hurricane threatens the coast, contractor sites take a flood of traffic, and the slow ones lose leads right when demand peaks. We build fast and keep the call button obvious, so your site converts under load." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Palm Beach County terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Palm Beach County traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Palm Beach County contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'west-palm-beach', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'West Palm Beach Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your West Palm Beach website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and hold up in snowbird and storm season. Free audit.',
    eyebrow: 'Website Redesign · West Palm Beach',
    h1: 'Redesign your West Palm Beach website without losing your rankings',
    h2Exact: 'West Palm Beach Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. In Palm Beach County, where estate clients judge you in seconds, that cost is even higher. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign West Palm Beach contractor sites for speed and conversions, build them to handle the dual peaks of snowbird season and hurricane demand, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — all of which matter in the competitive Palm Beach County contractor market.",
    problemHeading: "Signs your Palm Beach County site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket renovation on Palm Beach Island or a waterfront home in Palm Beach Gardens, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In this market, first impressions carry real weight." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Palm Beach County visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It can't keep up when demand surges", body: "Traffic that doesn't turn into calls is wasted — and an old site that slows down during snowbird activation or post-storm surges loses leads at the exact moment they're worth the most. We rebuild for conversions and for the days your phone should be ringing off the hook." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks — and for the trust level estate clients expect." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Palm Beach County traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the caliber of your clients — from Boynton Beach homeowners to Palm Beach Island estate owners." },
      { name: 'Snowbird and storm-surge ready rebuild', desc: "Rebuilt to stay fast and keep converting when seasonal demand peaks — whether October snowbird activation or a post-hurricane surge — so the new site captures your biggest jobs instead of choking on them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI — especially valuable for the high-spending clients who research carefully before calling.", featured: true },
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
      heading: 'Transparent West Palm Beach redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Snowbird and storm-surge ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service, estate-market, or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in West Palm Beach?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or buckles when snowbird-season and hurricane-season traffic surges collide, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the new site handle seasonal traffic spikes?', a: "Yes, and in Palm Beach County that's a real consideration — the county sees both a snowbird influx from October through April and Atlantic hurricane surges from June through November. We rebuild for speed and keep the call to action obvious so the site converts when demand peaks." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const westPalmBeachCity = {
  citySlug: 'west-palm-beach', city: 'West Palm Beach', state: 'Florida', stateAbbr: 'FL', metro: 'West Palm Beach-Palm Beach County',

  titleTag: 'West Palm Beach Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for West Palm Beach contractors. Get found by snowbird estate clients and hurricane-driven homeowners alike — and own your leads. Free audit.',

  eyebrow: 'West Palm Beach · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Palm Beach County contractors found and booked',
  h2Exact: 'West Palm Beach Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Palm Beach County's unique market — snowbird estate wealth, Atlantic hurricane exposure, and a diverse year-round community from the island to Riviera Beach. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Hurricane-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free West Palm Beach audit',

  intro:
    "If you run a contracting business in Palm Beach County, you're working in one of the most unusual markets in the country. On one end, Palm Beach Island is home to some of the wealthiest estates in the United States — homeowners who spend extraordinary amounts on contractors and expect the very highest level of professionalism online before they pick up the phone. On the other end, West Palm Beach proper and Riviera Beach have a diverse, working-class community with constant everyday demand. Layer over that the October-to-April snowbird influx and the June-to-November hurricane season, and you have a market that never really goes quiet — it just shifts. Winning here takes three things working together: a site that looks credible at every price point, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack ahead of the seasonal surges. Here's how we help Palm Beach County contractors do exactly that.",
  aioQuestion: 'How do Palm Beach County contractors get more leads online?',
  aioAnswer:
    "Palm Beach County contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because the market is shaped by ultra-wealthy seasonal residents from October through April and direct Atlantic hurricane exposure from June through November, contractors who look established and are already ranking before each season hits capture the most work — both the estate-level renovations on the island and the storm-prep and restoration calls across the county.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Palm Beach County searches \"near me.\" The single highest-return move for most local contractors — and how you catch both snowbird-season and hurricane-season demand before it goes to whoever ranked first.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — whether those clients are booking estate renovations or storm-prep work.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — credible enough for Palm Beach Island estate clients, clear enough for everyday homeowners across the county. Not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned — then be ready when snowbird or storm season sends traffic through the roof.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in West Palm Beach?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and are ready before snowbird season and hurricane season hit." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, waterfront and seawall work, and general contractors — so we understand emergency calls, storm-driven demand, insurance jobs, and the expectations that come with estate-level clients." },
    { q: 'Why do snowbird season and hurricane season matter for my marketing?', a: "Palm Beach County has two demand spikes that compound each other. From October through April, ultra-wealthy seasonal residents arrive and start hiring contractors immediately — concentrated, high-spending demand. From June through November, Atlantic hurricane exposure means roofing, impact windows, and restoration searches spike fast and stay elevated. Ranking takes months to build, so you have to be in place before each season begins." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Palm Beach County areas do you serve?', a: "All of Palm Beach County — West Palm Beach, Palm Beach Island, Palm Beach Gardens, Jupiter, Juno Beach, Delray Beach, Boynton Beach, Boca Raton, Wellington, Royal Palm Beach, Riviera Beach, Lake Worth, and more." },
    { q: 'Where should I start?', a: "Start with a free West Palm Beach audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — whether that's ahead of snowbird season or the next Atlantic storm. No pitch deck, just a plan." },
  ],
};

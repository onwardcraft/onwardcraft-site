// TULSA — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Tulsa's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// TULSA — shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Tulsa is its own fight — not OKC's",
  body:
    "Tulsa is not Oklahoma City. Locals feel that distinction keenly, and if you market to them like they live in a generic Oklahoma town, they notice. Tulsa has Art Deco bones downtown, a deep oil-heritage identity, Green Country's rolling northeastern Oklahoma landscape, and wealthy old-money neighborhoods like Maple Ridge and Terwilleger Heights that were built when oil barons were signing checks. Today the metro is home to about one million people, and it's growing fast on the south side — Jenks, Broken Arrow, Owasso, and Sand Springs are filling with new homeowners who need contractors. Two things drive demand here harder than almost anywhere else. First, Tulsa sits squarely in Tornado Alley. Every spring hail storm and tornado watch sends roofing, restoration, and window searches spiking overnight — and the first contractor ranking when the storm clears is the one who gets the calls. Second, about one in six Tulsans is Hispanic, and a meaningful share of them search in Spanish. The contractor who shows up in those searches is working a seam most of the competition ignores entirely.",
  pullQuote:
    "In Tulsa, the contractor who ranks before the next hailstorm hits owns the entire recovery season. Everyone else is scrambling.",
  donut: {
    title: 'A growing Spanish-speaking market',
    value: 16,
    centerLabel: 'Hispanic',
    legend: [
      { label: 'Hispanic', pct: 16, kind: 'teal' },
      { label: 'Other', pct: 84, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Tulsa',
  seasonCaption: 'Tornado/hail season (Apr–Jun, Aug–Oct), summer HVAC (Jun–Sep), winter heating (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 70, peak: true }, { m: 'F', v: 68, peak: true }, { m: 'M', v: 62 },
    { m: 'A', v: 90, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 88, peak: true },
    { m: 'J', v: 80 }, { m: 'A', v: 86, peak: true }, { m: 'S', v: 84, peak: true },
    { m: 'O', v: 78, peak: true }, { m: 'N', v: 60 }, { m: 'D', v: 72, peak: true },
  ],
  stats: [
    { value: '~1M', label: 'people across the Tulsa metro' },
    { value: '~16%', label: 'of residents are Hispanic — a largely untapped Spanish-language market', accent: true },
    { value: 'Apr–Jun', label: 'peak tornado and hail season, when roofing and restoration calls surge' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks after every storm' },
  ],
  neighborhoods: [
    'Maple Ridge', 'Brookside', 'Cherry Street', 'Blue Dome', 'South Tulsa',
    'Terwilleger Heights', 'Jenks', 'Broken Arrow', 'Owasso', 'Sand Springs',
    'Claremore', 'Midtown Tulsa', 'East Tulsa', 'West Tulsa', 'North Tulsa',
  ],
};

const AREAS = [
  'Tulsa', 'Broken Arrow', 'Jenks', 'Owasso', 'Sand Springs',
  'Claremore', 'Maple Ridge', 'Brookside', 'Cherry Street', 'Blue Dome',
  'South Tulsa', 'Terwilleger Heights', 'Midtown Tulsa', 'East Tulsa', 'North Tulsa',
];

const FOUNDER =
  "I'll be straight with you: OnwardCraft exists because I kept watching solid Tulsa contractors hand Angi and HomeAdvisor a few grand a month for leads that two or three of their competitors also paid for. After every big hailstorm, the phones should ring off the hook — but only for the people who already rank. You can't wait until the storm to start building that. So that's what we do: get you ranking for your real service area, whether that's Maple Ridge or Broken Arrow, and make those leads belong to you — not a broker. No 12-month handcuffs. If it's not working, you walk.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We know that a Tulsa spring means hail season and that Maple Ridge homeowners have the budget for real work. Everything we build is shaped around how your customers actually search — not a generic template with a city name swapped in.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker selling the same storm-damaged homeowner to four of your competitors the week after a tornado watch.",
  },
  {
    title: "We actually speak Tulsa — including the Spanish-speaking market",
    body: "Neighborhood by neighborhood from Jenks to Claremore, plus the Spanish-language reach to win searches most agencies never see. Roughly one in six Tulsans is Hispanic, and a contractor who shows up in those searches works a seam the competition ignores. A national shop can't do that by changing a city name.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to calls and leads, month-to-month after 90 days. If we're not earning it, you leave. The accountability stays where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Tulsa contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. After a major hailstorm, that number spikes — and the contractor already in the top three Map Pack positions captures most of the surge. Moving from page-two invisibility into that top three is the difference between a trickle of calls and a booked-out calendar for the entire recovery season. In your free audit, we model the real numbers for your business: your current rankings, estimated search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Tulsa', state: 'Oklahoma', stateAbbr: 'OK', metro: 'Tulsa',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const tulsaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'tulsa', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Tulsa Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Tulsa Local SEO that turns "near me" searches into a ringing phone, from Brookside to Broken Arrow, so the call lands with you after every storm.',
    eyebrow: 'Local SEO · Tulsa, OK',
    h1: 'Tulsa Local SEO that turns a post-hailstorm "near me" search into a ringing phone',
    h2Exact: 'Tulsa Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. After a Tulsa hailstorm, those three get every call. We get you into that top three for your neighborhoods — Jenks, Broken Arrow, Maple Ridge, wherever you work — so the surge lands with you.",
    primaryCta: 'Get my free Tulsa audit',
    intro:
      "Tulsa local SEO comes down to one thing: when a homeowner in Brookside or Broken Arrow searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is especially true after every spring hailstorm, when roofing, restoration, and window searches spike overnight and the first Map Pack name wins. About one in six Tulsans is Hispanic and a meaningful share search in Spanish — showing up for those searches is extra market most contractors leave on the table. Here's how you win both.",
    aioQuestion: 'How do Tulsa businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Tulsa neighborhoods. In Tulsa, the biggest edge is timing — you want to rank before hail season, not after, because the contractor already in the Map Pack when the storm clears gets the surge. Spanish-language targeting adds reach in a market most competitors ignore entirely.",
    problemHeading: "If your phone is quiet after a storm, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? After every Tulsa hailstorm, those three get essentially every call. Homeowners don't scroll — they tap the first pin. If you're not one of the three for your neighborhoods, it almost doesn't matter how fast you can get on a roof. Getting into that top three for South Tulsa, Broken Arrow, or wherever you work is usually the single highest-return move a Tulsa contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same storm-damaged Tulsa homeowner to three or four contractors at once, then bill each of you to fight over the job. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got that lead. Over time you stop renting and start owning the pipeline — especially in the months after big weather events when the lead brokers spike their prices." },
      { title: "You're invisible to the Spanish-speaking market", body: "About 16% of Tulsans are Hispanic, and a meaningful share of them search in Spanish. Most contractors do nothing to show up for those searches, so the demand sits there unclaimed. Targeting the right neighborhoods and languages is how you reach buyers your competitors are ignoring entirely — and in a market where storm-season work can make or break a year, that extra pipeline matters." },
    ],
    servicesHeading: 'What it actually takes to rank you in Tulsa',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Tulsa neighborhoods you should win — and you're ready before hail season." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Tulsa, Broken Arrow, Jenks, and the surrounding metro." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns every finished job into a steady flow of reviews. It lifts your ranking and gives storm-anxious homeowners the confidence to call you first." },
      { name: 'Neighborhood pages', desc: "Real pages for Maple Ridge, Brookside, South Tulsa, Broken Arrow, Owasso, and the rest — so you rank for the specific neighborhood a homeowner is actually searching, not just a generic \"Tulsa\" page." },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The foundation under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Tulsa sources Google trusts — local press, chambers, industry associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "About 16% of Tulsans are Hispanic. We help you show up for Spanish-language searches your competitors never even see — a real edge in Tulsa's growing market.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when Tulsans search there.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Tulsa neighborhoods and service areas, and pin down exactly which competitors are beating you in the Map Pack — and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You often see early lift within a few weeks, and you need the foundation solid before hail season." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before the storm, not after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across South Tulsa, Jenks, Broken Arrow, Owasso, and the rest, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood on your list." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right before storm season.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Tulsa neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Tulsa and the surrounding metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-area and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Tulsa?', a: "Most Tulsa engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Tulsa keywords typically take 90 to 180 days of steady work, because reviews and citations compound over time. The key is starting before hail season, not during it — anyone promising page one in 30 days is selling you something." },
      { q: 'What makes Tulsa local SEO different from other Oklahoma markets?', a: "Tulsa is not OKC. It has its own identity — Art Deco downtown, Green Country landscape, oil-heritage neighborhoods like Maple Ridge, and fast-growing suburbs like Broken Arrow and Jenks. Ranking here means targeting the specific neighborhoods Tulsans actually identify with, not treating the metro as a single blob. The storm-season timing angle is also more pronounced here than almost anywhere." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Tulsa that's a real edge. About 16% of residents are Hispanic, and many search in Spanish. We can optimize your profile and content so you show up for those searches your competitors are missing entirely." },
      { q: 'Which areas in the Tulsa metro do you cover?', a: "The full metro: Tulsa proper, Broken Arrow, Jenks, Owasso, Sand Springs, Claremore, and the neighborhoods inside them — Maple Ridge, Brookside, Cherry Street, South Tulsa, Terwilleger Heights, and more. We build genuine neighborhood pages instead of one generic Tulsa page, because that's what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Tulsa hail seasons, oil-country renovation budgets, and insurance restoration jobs, and we build your SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement — and long enough to get you ranked before peak storm season. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms sell shared leads and visibility you never keep — especially expensive after a big storm when every contractor in Tulsa is buying the same leads. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you depend on the brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Tulsa neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers modeled for your business. No pitch deck, just a straight diagnosis of what your Tulsa local SEO needs to start winning the map." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'tulsa', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Tulsa SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Tulsa SEO that ranks contractors on Google and brings in leads you own. Storm-season ready, revenue-tied reporting, no lock-in contracts. Free Tulsa SEO audit.',
    eyebrow: 'SEO Services · Tulsa, OK',
    h1: 'Tulsa SEO that ranks you for the storm-season searches that book jobs',
    h2Exact: 'Tulsa SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Tulsa customers search and the leads keep coming — including during the hail-season surges when the phones should be ringing. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Tulsa SEO audit',
    intro:
      "Tulsa SEO comes down to one question: when a homeowner in Broken Arrow or Maple Ridge searches your service, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by oil-heritage wealth, fast-growing southern suburbs, and spring hail storms that send search volume spiking overnight — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Tulsa businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of their site, optimizing each page for the exact terms Tulsa customers search, publishing genuinely useful local content tied to specific neighborhoods and suburbs, and earning links from trusted Tulsa sources. In this market, ranking for storm-season and emergency searches before hail season arrives is one of the highest-return moves a trade contractor can make — and targeting Spanish-language search opens an additional pipeline most competitors skip.",
    problemHeading: "Three reasons your Tulsa site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In Tulsa's growing market, with competitors multiplying across Broken Arrow, Jenks, and Owasso, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop — and Tulsa clicks get expensive right after every major storm, when every competitor is running ads. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ready for storm season", body: "After a Tulsa hailstorm, roofing and restoration searches spike overnight. The contractors who rank for those terms before the storm catches the entire surge. The ones who start thinking about SEO after the storm has already passed are playing catch-up. Ranking takes months to build, so you have to be in place before the season, not chasing it." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Tulsa',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Tulsa customers search — titles, headings, content, and internal links across your service and neighborhood pages." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what Tulsa buyers search, earn links, and bring in leads on autopilot through every season." },
      { name: 'Link building', desc: "Authority from real Tulsa and industry sources. In a market where South Tulsa suburbs are growing fast, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Tulsa neighborhoods and suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your Tulsa SEO is actually worth." },
      { name: 'Storm-season & emergency SEO', desc: "We rank you for the hail, tornado, and flood searches that drive Tulsa's biggest demand spikes, so you're visible before the storm, not scrambling after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of Tulsa searches now begin.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and Tulsa competitors, then build a roadmap around the keywords most likely to drive real leads — including the storm-season and emergency terms your busiest weeks depend on." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, especially on the fast-growing suburban Tulsa sites." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content covering Maple Ridge, Jenks, Broken Arrow, and the storm-season and emergency terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Tulsa and industry sources to push competitive keywords onto page one ahead of hail season." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set and service area." },
    ],
    pricing: {
      heading: 'Transparent Tulsa SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused Tulsa site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Tulsa suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Tulsa metro search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Tulsa?', a: "Most Tulsa SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Tulsa?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6 — faster on tighter neighborhood terms and slower on the most competitive metro keywords. The key is starting before hail season, because by the time storms hit you need months of ranking already behind you." },
      { q: 'Is SEO better than Google Ads for Tulsa contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and Tulsa ad prices spike after every major storm when every contractor is bidding. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Tulsa contractors do best running SEO as the long-term engine and ads for short-term gap-filling." },
      { q: 'Should my Tulsa SEO target storm and hail season?', a: "Absolutely. After a big Tulsa hailstorm, roofing and restoration searches surge overnight, and the Map Pack captures most of that traffic. Ranking takes months to build, so you need to be in place before April, not trying to rank in April. We optimize for those storm-season and emergency terms so your busiest weeks actually land on you." },
      { q: "What's included in your Tulsa SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season/emergency and AI-search optimization. We confirm exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement — and long enough to get you established before storm season — then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Can you help me rank for Spanish-language searches in Tulsa?', a: "Yes. About 16% of Tulsans are Hispanic and many search in Spanish. We can optimize your content and profile to show up for those searches — a pipeline your competitors likely ignore." },
      { q: 'Which Tulsa areas do you cover?', a: "The full metro: Tulsa, Broken Arrow, Jenks, Owasso, Sand Springs, Claremore, and the neighborhoods inside them — Maple Ridge, Brookside, Cherry Street, South Tulsa, Terwilleger Heights, and more. We build genuine local pages, not one generic Tulsa page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially after a storm when broker prices spike." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in Tulsa, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a straight diagnosis of where your Tulsa SEO can win the money keywords." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'tulsa', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Tulsa Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Tulsa web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a storm-season market.',
    eyebrow: 'Web Design · Tulsa, OK',
    h1: 'Tulsa web design built to convert post-storm phone clicks into calls',
    h2Exact: 'Tulsa Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Tulsa contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out when the phones start ringing after every hailstorm.",
    primaryCta: 'Get my free Tulsa quote',
    intro:
      "Tulsa web design done right fixes the leaks that cost most contractor sites their leads: slow on a phone, buried call button, no clear offer. We build sites that load fast, look like the professional you are, and turn Broken Arrow-to-Maple Ridge visitors into booked jobs, ready to capture the surge when storm season hits and homeowners are searching fast.",
    aioQuestion: 'What makes a good contractor website in Tulsa?',
    aioAnswer:
      "A good Tulsa contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. In Tulsa, storm-season urgency means homeowners are making fast decisions on mobile — a site that's slow or unclear loses them to the next contractor in seconds.",
    problemHeading: "Why your current Tulsa site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of Tulsa contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and after a hailstorm the next guy is one tap away. We design every page around one job: turning a visitor into a booked lead, fast." },
      { title: "It's too slow on a phone", body: "Most of your Tulsa visitors are on mobile, especially in the frantic hours after a storm when homeowners are outside looking at their roof and searching for contractors. They bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the call." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Jenks wants to see you serve Jenks — not a generic \"Tulsa\" page that could be any contractor in Oklahoma. We build sites that name the neighborhoods and suburbs you work, so visitors trust you're truly local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Tulsa website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Tulsa service area, and the jobs you actually want to book." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Tulsa traffic is — especially the storm-season searchers who need a contractor fast." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, so a homeowner in storm-mode can reach you in seconds." },
      { name: 'Copy that sells', desc: "Words that speak to anxious Tulsa homeowners — including after a hailstorm — and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Maple Ridge, Jenks, Broken Arrow, and beyond." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings across your Tulsa service area." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Tulsa neighborhoods and suburbs you serve — Brookside, South Tulsa, Owasso, Sand Springs — so you stand out instead of blending into a generic Oklahoma contractor site.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more Tulsa search shifts to AI tools.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Tulsa service area, your best jobs, and your competitors, then map the site around booking more of the work you want — including being ready before storm season." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and your real Tulsa neighborhoods named throughout." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one — ready for whatever the Oklahoma sky brings." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, season by season." },
    ],
    pricing: {
      heading: 'Transparent Tulsa web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Tulsa contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Tulsa contractors with several services or suburbs.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Tulsa businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Tulsa?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build a Tulsa contractor website?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage — which matters when you're trying to get live before storm season." },
      { q: 'Will my site help me win work after a hailstorm?', a: "That's exactly the goal. A fast, mobile-first site with a prominent call button and your real Tulsa neighborhoods named throughout is what captures a homeowner who's outside looking at damage and searching on their phone. We build for that moment." },
      { q: 'Will my new Tulsa site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for your Tulsa service area. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Tulsa traffic comes from — especially the storm-season searchers making fast decisions on a phone." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: "What do I get in the free quote?", a: "A clear look at what your current site is costing you in lost leads, what a high-converting Tulsa contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan for the Tulsa web design that finally books you work." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'tulsa', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Tulsa Website Redesign | OnwardCraft',
    metaDescription:
      'Tulsa Website Redesign that keeps every ranking you have earned. Faster, mobile-first rebuilds that convert more visitors into booked jobs before storm season.',
    eyebrow: 'Website Redesign · Tulsa, OK',
    h1: 'Tulsa Website Redesign that keeps every Map Pack ranking you have earned before hail season',
    h2Exact: 'Tulsa Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — and after a Tulsa hailstorm, every day you're slow or hard to use on a phone is a day a competitor books your work. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free Tulsa redesign audit',
    intro:
      "A Tulsa Website Redesign usually goes one of two bad ways: the site looks better but converts the same, or it launches and the rankings disappear overnight. We do neither. We rebuild Tulsa contractor sites for speed and conversions, shape them to stand out in a market where storm season creates intense short-window demand, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my Tulsa website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your Tulsa rankings and improves them — because the new site is faster, mobile-first, and better structured to win storm-season and suburb searches.",
    problemHeading: "Signs your Tulsa contractor site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing or restoration job, Tulsa homeowners — especially in Maple Ridge and Terwilleger Heights — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Tulsa visitors before they ever see your offer — including the storm-season searchers who are checking their phone from the driveway. A redesign built mobile-first wins them back." },
      { title: "It doesn't capture storm-season urgency", body: "A generic old site with no clear call to action and no neighborhood specificity gives a homeowner no reason to choose you over the next result — especially in the high-urgency hours after a hailstorm. We rebuild for conversions, for your real service area, and for the fast-moving moments that drive the most Tulsa work." },
    ],
    servicesHeading: "What's in an OnwardCraft Tulsa redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today in your Tulsa market, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned across your Tulsa service area." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that get used. We design for booked jobs in a market where storm-season urgency makes a fast, obvious CTA the difference between a call and a bounce." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical for capturing mobile searchers in storm mode." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Tulsa traffic is — especially when homeowners are outside assessing storm damage." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the expectations of Tulsa's oil-heritage neighborhoods with renovation budgets to match." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around the Tulsa neighborhoods and suburbs you actually serve — Jenks, Broken Arrow, Owasso, Maple Ridge — so the new site stands out instead of reading like every other Oklahoma contractor's site.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as more Tulsa searches shift toward AI tools.", featured: true },
    ],
    processName: 'How we redesign: a careful Tulsa rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings in Tulsa, then map a redesign that fixes it without breaking what already works — including the neighborhood pages and storm-season content that might already be performing." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design built for Tulsa's market. You review and shape it before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, write conversion-focused copy, and prepare every redirect and SEO detail for a clean migration that protects your rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve — not drop right before storm season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and content updates as Tulsa's suburbs grow." },
    ],
    pricing: {
      heading: 'Transparent Tulsa redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Tulsa contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Tulsa contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-suburb Tulsa businesses.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Tulsa?', a: "Most Tulsa redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your Tulsa rankings and usually improves them." },
      { q: 'How long does a Tulsa website redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front — which matters when you're trying to launch before storm season." },
      { q: 'How do I know I need a redesign?', a: "If your Tulsa site is slow on phones, looks dated, isn't bringing in leads, or fails to capture the storm-season urgency that drives your busiest months, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking for Tulsa neighborhood and service searches, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in South Tulsa and the suburbs?', a: "Yes. We rebuild around the specific neighborhoods and suburbs you serve — Jenks, Broken Arrow, Owasso, Sand Springs — and make the call button obvious for the mobile-first storm-season moments when homeowners are searching fast." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which matters most in Tulsa during storm season when homeowners are checking their phone from the yard." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current Tulsa site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan, so your Tulsa Website Redesign rebuilds for leads without losing the rankings you have." },
    ],
  },
];

export const tulsaCity = {
  citySlug: 'tulsa', city: 'Tulsa', state: 'Oklahoma', stateAbbr: 'OK', metro: 'Tulsa',

  titleTag: 'Tulsa Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Tulsa marketing for contractors: get ranked, get booked. Web design, SEO, and local SEO that get you found after every storm and let you own your leads.',

  eyebrow: 'Tulsa · Web Design, SEO & Lead Generation',
  h1: 'Tulsa marketing for contractors: get ranked before hail season, get booked all year',
  h2Exact: 'Tulsa Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Tulsa's storm-season surges, growing southern suburbs, and a Spanish-speaking market most agencies ignore. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Tulsa audit',

  intro:
    "Tulsa marketing for contractors only works when it respects how different this market is from OKC. You have Art Deco character downtown, oil-heritage wealth in Maple Ridge and Terwilleger Heights, fast-growing suburbs from Broken Arrow to Owasso, and a spring storm season that can send your phone ringing off the hook or completely silent depending on who ranks on the map. Winning here takes three things working together: a site that converts the moment a homeowner searches after a hailstorm, SEO that keeps you ranking for your real service area, and local SEO that puts you in the Map Pack for the neighborhoods you actually serve. Here's how we help Tulsa contractors do exactly that.",
  aioQuestion: 'How do Tulsa contractors get more leads online?',
  aioAnswer:
    "Tulsa contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Tulsa's biggest demand spikes come during and after hail and tornado season, the contractors who rank before the storms hit capture the surge. And because about 16% of Tulsans are Hispanic, Spanish-language targeting adds a pipeline most competitors leave completely untapped.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Tulsa searches \"near me.\" After every hailstorm those three get the calls — we get you in that top three for your real neighborhoods before storm season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Tulsa customers search, build an asset you own instead of renting storm-season leads, and measure it in calls and jobs — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn storm-anxious visitors into booked jobs and to stand out across Brookside, Broken Arrow, Jenks, and beyond — not brochures that sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated Tulsa site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've earned — ready for the next surge.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Tulsa?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most Tulsa clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially heading into storm season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Tulsa hail seasons, insurance restoration jobs, and the renovation budgets in Maple Ridge and Terwilleger Heights." },
    { q: 'Why does the Tulsa market need a different approach than other Oklahoma markets?', a: "Tulsa is not OKC, and locals feel that strongly. It has its own neighborhoods, identity, and demand patterns — Art Deco downtown, Green Country setting, oil-heritage wealth in the older neighborhoods, and fast-growing suburbs to the south. Ranking here means targeting the specific places Tulsans identify with, not treating the metro like a generic Oklahoma city. The storm-season timing angle is also more pronounced here than most markets." },
    { q: 'How much does it cost to work with you in Tulsa?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free Tulsa audit." },
    { q: 'Which Tulsa areas do you serve?', a: "The full metro: Tulsa, Broken Arrow, Jenks, Owasso, Sand Springs, Claremore, and the neighborhoods inside them — Maple Ridge, Brookside, Cherry Street, South Tulsa, Terwilleger Heights, and more." },
    { q: 'Where should I start?', a: "Start with a free Tulsa audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work, especially with storm season in mind. No pitch deck, just a plan for Tulsa marketing for contractors that gets you found and booked." },
  ],
};

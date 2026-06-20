// SYRACUSE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Syracuse's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SYRACUSE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Syracuse requires a snow-season strategy',
  body:
    "Syracuse averages 123 inches of snow per year — more than Buffalo in most years — making it the snowiest major city east of the Rockies. Lake Ontario lake-effect storms dump massive totals from November through March, and that snow defines the contractor busy season here. Roof collapses, ice dams, heating failures, and frozen pipes are not edge cases — they are the calendar. The contractors who own the Map Pack heading into November are the ones whose phones ring through April. Add to that one of the most remarkable concentrations of Victorian and Craftsman housing in the Northeast: neighborhoods like Strathmore, Sedgwick, and Eastwood are dense with homes built between 1880 and 1930, homes that need specialist contractors for plumbing, HVAC, roofing, and insulation. Syracuse University brings 22,000-plus students and a steady stream of young professional homebuyers renovating those old homes near campus. And Syracusans — true upstate New Yorkers shaped by the Salt City's industrial heritage — strongly prefer local contractors over anything that feels like a big-city chain. Showing up as a genuine local is not a nice-to-have here. It is how you win.",
  pullQuote: 'The snowiest major city east of the Rockies. 123 inches a year. The contractors who own the map before November own the winter.',
  donut: {
    title: 'Annual snowfall: Syracuse vs. everywhere else',
    value: 123,
    centerLabel: 'annual snow inches',
    legend: [
      { label: 'Avg snow (in)', pct: 123, kind: 'teal' },
      { label: 'Other precip', pct: 0, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Lake-effect winter (Nov–Apr) and spring thaw (Mar–May) drive peak contractor demand',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 92, peak: true }, { m: 'M', v: 80, peak: true },
    { m: 'A', v: 72, peak: true }, { m: 'M', v: 52 }, { m: 'J', v: 45 }, { m: 'J', v: 60, peak: true },
    { m: 'A', v: 58, peak: true }, { m: 'S', v: 44 }, { m: 'O', v: 58 },
    { m: 'N', v: 82, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '123"', label: 'average annual snowfall — snowiest major city east of the Rockies', accent: true },
    { value: '1880–1930', label: 'era of most Syracuse housing stock — Victorian and Craftsman homes needing specialist contractors' },
    { value: '22,000+', label: 'Syracuse University students anchoring a renovation-driven housing market' },
    { value: 'Nov–Apr', label: 'lake-effect snow season — the longest contractor busy season in the US' },
  ],
  neighborhoods: [
    'Strathmore', 'Sedgwick', 'Eastwood', 'Tipperary Hill', 'Westcott',
    'DeWitt', 'Fayetteville', 'Manlius', 'Liverpool', 'Clay',
    'Cicero', 'East Syracuse', 'Camillus', 'North Syracuse', 'Baldwinsville',
  ],
};

const AREAS = [
  'Strathmore', 'Sedgwick', 'Eastwood', 'Tipperary Hill', 'Westcott',
  'DeWitt', 'Fayetteville', 'Manlius', 'Liverpool', 'Clay',
  'Cicero', 'East Syracuse', 'Camillus', 'North Syracuse', 'Baldwinsville',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Nowhere is that more true than Syracuse, where the snow season makes or breaks a contractor's year and you need those calls coming to you, not shared with four rivals. That's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the snow season',
    body: "123 inches of annual snow is not a talking point — it is your busy season. Roof collapses, ice dams, heating failures, and frozen pipes define November through April here. We build your SEO around that calendar so you rank before the lake-effect storms hit, not after.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also called. In a market where one good snow season can make your year, you need those calls going to you.",
  },
  {
    title: 'We actually speak upstate',
    body: "Syracusans see themselves as true upstate New Yorkers and they can spot a big-city chain template from a mile away. We build content that reads like it was written by someone who knows the difference between Strathmore and Sedgwick, and why the Tipperary Hill homeowner searches differently than the DeWitt homeowner.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Syracuse contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet phone and a booked-out calendar through the snow season — and in a market where everyone is fighting for the same winter jobs, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Syracuse', state: 'New York', stateAbbr: 'NY', metro: 'Syracuse',
  heroProof: ['Built for the trades', 'Snow-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const syracuseLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'syracuse', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Syracuse Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Syracuse and three businesses show up on the map. We get you into those three before the lake-effect season hits. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Syracuse, NY',
    h1: 'When Syracuse searches for what you do, be the first name they find',
    h2Exact: 'Syracuse Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In the snowiest major city east of the Rockies, we get you into that top three before lake-effect season — so the roof collapse call, the frozen pipe call, and the heating emergency call land with you.",
    primaryCta: 'Get my free Syracuse audit',
    intro:
      "Syracuse local SEO comes down to one thing: when a homeowner in Eastwood or Strathmore searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With 123 inches of annual snowfall — more than Buffalo in most years — the contractor who owns the Map Pack heading into November owns the winter. The old housing stock of the 1880–1930 Victorian and Craftsman neighborhoods creates year-round demand for specialist work. Here's how you get into those three spots and keep them.",
    aioQuestion: 'How do Syracuse businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to Syracuse's specific neighborhoods and the snow-season demand that defines contractor work here. The contractors who rank for heating, roofing, and pipe-related searches before lake-effect season hits in November capture the majority of winter emergency calls.",
    problemHeading: "If your phone is quiet this winter, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. When a Syracuse homeowner's pipe freezes at 11 PM or their roof starts sagging under two feet of snow, they tap the first result they see. If you're not one of the top three, it almost doesn't matter how good your work is. Getting into that Map Pack before November is usually the single highest-return move a Syracuse contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Syracuse homeowner to four contractors, then bill each of you to fight over them. During peak snow season, those lead prices spike as more contractors compete for the same jobs. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ready for the season before it hits", body: "Local SEO takes three to six months to gain momentum. The contractors who rank for roofing, heating, and frozen-pipe searches in November started their SEO in the spring. If you wait until the first lake-effect storm to think about this, you've already missed the window." },
    ],
    servicesHeading: 'What it actually takes to rank you in Syracuse',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Syracuse searches you should win — including the snow-season emergency terms." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes anxious homeowners pick up the phone during a winter storm." },
      { name: 'Neighborhood pages', desc: "Real pages for Strathmore, Sedgwick, Eastwood, Tipperary Hill, DeWitt and the rest, so you rank for the neighborhood someone's actually searching, not just \"Syracuse.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Syracuse sources Google trusts — local press, chamber, associations, partners. This is what separates page one from page two here." },
      { name: 'Snow-season and emergency SEO', desc: "We optimize for the roof collapse, ice dam, frozen pipe, and heating failure searches that define Syracuse contractor demand from November through March — so you rank when those calls spike.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Syracuse neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before snow season over starting during it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Strathmore, Eastwood, DeWitt, Liverpool and the suburbs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in time for snow season.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Syracuse neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro all winter.', features: ['Everything in Local Growth', 'Local link building', 'Snow-season emergency SEO', 'Multi-neighborhood and suburb pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Syracuse?', a: "Most Syracuse engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Syracuse keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. That's why starting before snow season — not during it — matters so much here." },
      { q: 'What makes Syracuse local SEO different?', a: "The snow. Syracuse averages 123 inches of annual snowfall — more than Buffalo in most years — so the contractor busy season runs November through April and is driven by emergencies: roof collapses, ice dams, heating failures, frozen pipes. Ranking for those searches before the lake-effect storms hit is the whole game. Plus the old housing stock in Strathmore, Sedgwick, and Eastwood creates specialist demand all year." },
      { q: 'When should I start my local SEO?', a: "The spring or early fall, before lake-effect season. Local SEO takes 90 to 180 days to gain real momentum, so the contractors who rank in November started earlier. If you wait until the first storm, you've already handed those calls to whoever was patient enough to start early." },
      { q: 'Which areas do you cover?', a: "All of the Syracuse metro — Strathmore, Sedgwick, Eastwood, Tipperary Hill, Westcott, DeWitt, Fayetteville, Manlius, Liverpool, Clay, Cicero, East Syracuse, Camillus, North Syracuse, and Baldwinsville. We build genuine neighborhood pages instead of one generic Syracuse page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand snow-season emergencies, old-house specialist work, and the upstate homeowner who wants a local contractor, not a chain." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. During peak snow season, you're competing with three or four other contractors for the same homeowner while all paying top dollar. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Syracuse neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'syracuse', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Syracuse SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Syracuse SEO that ranks contractors on Google before lake-effect season hits. Revenue-tied reporting, no lock-in contracts, built for upstate NY. Free Syracuse SEO audit.',
    eyebrow: 'SEO Services · Syracuse, NY',
    h1: 'Get your Syracuse business to the top of Google before the snow season',
    h2Exact: 'Syracuse SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Syracuse customers search and the leads keep coming through every lake-effect storm from November to April. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Syracuse SEO audit',
    intro:
      "Syracuse SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in the snowiest major city east of the Rockies — where 123 inches of annual snowfall creates a contractor busy season unlike anywhere else in the US — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Syracuse businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Syracuse neighborhoods, and earning links from trusted upstate sources. The contractors who win in Syracuse rank for snow-season searches — roofing, heating, ice dams, frozen pipes — months before the lake-effect storms hit in November, and they own old-house specialist searches in neighborhoods like Strathmore, Sedgwick, and Eastwood.",
    problemHeading: "Three reasons your Syracuse site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when the storms hit", body: "Almost nobody clicks past the first page of Google, and they certainly don't when a pipe has just burst in their 1905 Victorian. In a market where contractor demand spikes hard and fast with lake-effect weather, if you're not in the top handful of results when the snow starts, you miss the best jobs of the year. Getting there takes months — you have to rank before November, not scramble during it." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. During peak snow season, ad costs spike as every contractor competes for the same searches. SEO builds an asset you own: rankings that keep producing leads through every storm and long after the work is done, at a fraction of the per-lead cost of rented traffic." },
      { title: "You're not ranking for the demand that actually matters here", body: "Syracuse contractor demand is defined by the snow season: roof collapses, ice dams, heating failures, and frozen pipes from November through April. Then there's the old-housing specialist demand in Strathmore, Eastwood, and Sedgwick that runs year-round. If your SEO ignores those seasonal and neighborhood-specific searches, you're leaving the most valuable jobs on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Syracuse',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Syracuse customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including the old-house topics that resonate in the 1880–1930 neighborhoods." },
      { name: 'Link building', desc: "Authority from real Syracuse and upstate NY sources. In a market driven by local trust, links from recognizable local names carry extra weight." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Syracuse neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Snow-season and emergency SEO', desc: "We rank you for the roof collapse, ice dam, frozen pipe, and heating-failure searches that define Syracuse from November through April — so you're visible before demand spikes, not chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Syracuse leads — with the snow season calendar front and center." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank before lake-effect season." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the snow-season emergency and old-house specialist terms that matter most here." },
      { name: 'Build authority', desc: "Links and citations from trusted Syracuse and upstate sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Syracuse SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords before snow season.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Syracuse neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Syracuse search through every season.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Snow-season & emergency SEO', 'Old-house specialist content', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Syracuse?', a: "Most Syracuse SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Syracuse?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. Because lake-effect season hits in November, contractors who start in spring or summer are the ones who rank when it matters." },
      { q: 'Is SEO better than Google Ads for a Syracuse contractor?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and during peak snow season, Syracuse ad costs spike as every contractor bids for the same searches. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term gaps." },
      { q: 'Should my Syracuse SEO target snow-season demand?', a: "Absolutely — it's the defining fact about this market. Syracuse averages 123 inches of snow a year, more than Buffalo most years, and the contractor busy season runs November through April. Roof collapses, ice dams, heating failures, and frozen pipes are not edge cases — they are the season. Ranking for those searches takes months to build, so you have to start before the snow, not when it's already falling." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add snow-season/emergency SEO, old-house specialist content, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Syracuse do you cover?', a: "The full metro — Strathmore, Sedgwick, Eastwood, Tipperary Hill, Westcott, DeWitt, Fayetteville, Manlius, Liverpool, Clay, Cicero, East Syracuse, Camillus, North Syracuse, and Baldwinsville — with genuine local pages rather than one generic Syracuse page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads that three other contractors also receive." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'syracuse', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Syracuse Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Syracuse web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in the snowiest major city east of the Rockies. You own it. Free quote.',
    eyebrow: 'Web Design · Syracuse, NY',
    h1: 'Syracuse web design that turns winter visitors into booked jobs',
    h2Exact: 'Syracuse Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Syracuse contractors fast, mobile-first sites engineered to turn visitors into booked work — before, during, and after the lake-effect season that defines this market.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Syracuse contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer for the homeowner dealing with two feet of lake-effect snow on their 1910 Craftsman roof. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Eastwood-to-Manlius visitors into booked jobs — sites that speak to upstate homeowners who want a local contractor, not a chain.",
    aioQuestion: 'What makes a good contractor website in Syracuse?',
    aioAnswer:
      "A good Syracuse contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. Because most Syracuse homeowners are searching during weather emergencies on mobile — a frozen pipe at midnight, a roof sagging under snow — speed and an obvious next step are what separate a site that books jobs from one that just sits there. Content that reflects knowledge of the local housing stock (Victorian, Craftsman, 1880–1930) also builds trust with the upstate homeowner who can spot a generic template instantly.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. When a Strathmore homeowner discovers an ice dam at 10 PM in February, they need to see your phone number immediately and know you serve their neighborhood. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Syracuse visitors are on mobile, and during a weather emergency they have zero patience. They bounce in seconds if your site is slow. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or the season", body: "A homeowner in Tipperary Hill wants to see you serve Tipperary Hill — and they want to know you understand what lake-effect snow does to a roof built in 1920. A generic page that could be any contractor in any city sends them to whoever looks more local. We build sites that name the neighborhoods and speak to the old-house and snow-season reality of this market." },
    ],
    servicesHeading: "What's in an OnwardCraft Syracuse website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Syracuse neighborhoods, and the snow-season jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Syracuse traffic is — especially the emergency calls that define winter." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step that works even when someone's panicking about a burst pipe." },
      { name: 'Copy that sells', desc: "Words that speak to upstate homeowners and book the job — old-house, snow-season aware — not filler text that reads like it was written about a city nobody visited." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Syracuse neighborhoods you serve — Strathmore, Eastwood, DeWitt, Liverpool — so you stand out as a local instead of blending into a generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — with the snow-season calendar in mind." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert. You see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells — upstate-aware, old-house-aware, emergency-ready — with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Syracuse web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Syracuse contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Syracuse?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site work for snow-season emergencies?', a: "That's a core design priority. When a Eastwood homeowner has an ice dam or a burst pipe at midnight, they're on a phone, they're stressed, and they need to see a phone number and a clear offer instantly. We put that front and center so you book the call instead of losing it to a slower site." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Syracuse terms before snow season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Syracuse traffic comes from — especially the emergency calls that define winter here." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Syracuse contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'syracuse', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Syracuse Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Syracuse website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs before lake-effect season. Free audit.',
    eyebrow: 'Website Redesign · Syracuse, NY',
    h1: 'Redesign your Syracuse website without losing your rankings',
    h2Exact: 'Syracuse Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every winter — slow, hard to use on a phone, easy to ignore when a homeowner needs a contractor now. We redesign Syracuse contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Syracuse contractor sites for speed and conversions, build them to speak to the snow-season reality and old-housing stock of this market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one. In Syracuse, timing matters too: ideally you launch before lake-effect season, not during it.",
    problemHeading: "Signs your Syracuse site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing or HVAC job, Syracuse homeowners judge you by your site in seconds. An old, cluttered design — especially one that clearly hasn't been touched since a time before smartphones — quietly sends them to a competitor who looks more established. The upstate homeowner who wants a local pro is already skeptical of big-city-chain aesthetics. A dated site is no better." },
      { title: "It's slow and hard to use on a phone during an emergency", body: "When a pipe freezes or a roof sags under two feet of lake-effect snow, a homeowner on their phone needs your number immediately. If your site loads slowly or the call button is buried, they've moved on before they see your offer. A mobile-first redesign captures those emergency calls." },
      { title: "It blends into the competition instead of standing out as local", body: "A generic site that could be any contractor in any city gives a Syracuse homeowner no reason to pick you over whoever else shows up. We rebuild around the specific neighborhoods and the snow-season character of this market, so the new site reads as genuinely local — which is exactly what the Strathmore or Sedgwick homeowner is looking for." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned going into snow season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used — built for the homeowner in a winter emergency, not just a casual browser." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Syracuse traffic lives, especially during the weather events that drive emergency calls." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and positions you as the local expert — not a chain template." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Syracuse neighborhoods you serve — Strathmore, Eastwood, DeWitt, Liverpool — so the new site reads as local and stands out in a market where upstate homeowners actively prefer local contractors.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — timed with the snow-season calendar in mind." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — ideally before lake-effect season." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Syracuse redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Syracuse?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which matters a lot when you're heading into lake-effect season." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. We give you a firm timeline up front and updates at each stage — and we can pace the project to launch before your key snow-season months." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't speak to the snow-season and old-house reality of the Syracuse market, it's costing you work every winter. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me stand out as a local contractor?', a: "Yes, and that's especially important in Syracuse. Upstate homeowners actively prefer local contractors and can spot a generic chain template instantly. We rebuild around the specific neighborhoods, the snow-season character, and the old-house expertise that make you genuinely local — not a copy of every other contractor's site." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and makes your site usable during the winter emergencies that drive your busiest calls." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan. No pressure, just a plan." },
    ],
  },
];

export const syracuseCity = {
  citySlug: 'syracuse', city: 'Syracuse', state: 'New York', stateAbbr: 'NY', metro: 'Syracuse',

  titleTag: 'Syracuse Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Syracuse contractors. Get found before lake-effect season and own your leads — built for the snowiest major city east of the Rockies. Free audit.',

  eyebrow: 'Syracuse · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Syracuse contractors found before the snow hits',
  h2Exact: 'Syracuse Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for the snowiest major city east of the Rockies. One team to get you ranking before lake-effect season, converting year-round, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Snow-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Syracuse audit',

  intro:
    "If you run a contracting business in Syracuse, the snow is your market. With 123 inches of annual snowfall — more than Buffalo in most years — the lake-effect season from November through April defines your busiest months. Roof collapses, ice dams, heating failures, and frozen pipes flood the calendar, and the contractors who own the Google Map Pack heading into November own the winter. Add one of the most concentrated old-housing markets in the Northeast — Victorian and Craftsman homes from 1880 to 1930 in Strathmore, Sedgwick, and Eastwood — and you have a market with deep, specialist year-round demand. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve — all built to reflect the local identity that Syracuse homeowners respond to.",
  aioQuestion: 'How do Syracuse contractors get more leads online?',
  aioAnswer:
    "Syracuse contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The contractors who dominate here start their SEO months before lake-effect season hits in November, rank for snow-season emergency searches, and build sites that speak to the old-house specialist needs of neighborhoods like Strathmore, Sedgwick, and Eastwood. Upstate homeowners prefer local contractors, so content that reads as genuinely local — not a generic city-swap template — closes more jobs.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack before winter',
      blurb: "Get into the top three businesses Google pins to the map when Syracuse searches \"near me.\" The single highest-return move for most local contractors — and in the snowiest major city east of the Rockies, timing it before November makes all the difference.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, own the season',
      blurb: "Rank for the snow-season emergency searches and old-house specialist terms your customers actually use. Build an asset you own instead of renting traffic — measured in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert in a storm',
      blurb: "Fast, mobile-first websites engineered to turn winter emergency visitors into booked jobs — built for the upstate homeowner who wants a local contractor, not a chain template.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every ranking you've earned — ideally timed to land before lake-effect season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Syracuse?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank before lake-effect season, convert emergency callers year-round, and own their leads instead of renting them." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand snow-season emergencies, old-house specialist work, and the upstate homeowner who strongly prefers a local contractor over anything that feels like a chain." },
    { q: 'Why does the Syracuse market need a different approach?', a: "Two reasons. First, 123 inches of annual snowfall — more than Buffalo most years — means the contractor busy season is defined by lake-effect emergencies from November through April, and the contractors who rank before that season starts win the most calls. Second, the old housing stock in neighborhoods like Strathmore, Sedgwick, and Eastwood creates specialist demand all year, and upstate homeowners can spot a generic city-swap template instantly." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Syracuse areas do you serve?', a: "The full metro — Strathmore, Sedgwick, Eastwood, Tipperary Hill, Westcott, DeWitt, Fayetteville, Manlius, Liverpool, Clay, Cicero, East Syracuse, Camillus, North Syracuse, and Baldwinsville — with genuine neighborhood pages rather than one generic Syracuse page." },
    { q: 'Where should I start?', a: "Start with a free Syracuse audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next snow season. No pitch deck, just a plan." },
  ],
};

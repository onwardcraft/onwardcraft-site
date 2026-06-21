// CINCINNATI — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cincinnati's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CINCINNATI — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Cincinnati is trickier than it looks',
  body:
    "Cincinnati sits where Ohio meets Indiana and Kentucky — a three-state metro stretching from Blue Ash in the north to Covington and Florence across the river. That geography matters for contractors. A homeowner in Newport, Kentucky, is as close as one in Anderson Township, but they're in a different state, a different Google market, and a different set of search results. Most contractors ignore the Northern Kentucky side and leave real jobs on the table. The housing stock adds another layer. Cincinnati is packed with Victorian-era homes on steep hillsides — Mt. Adams, Clifton, Hyde Park — that are breathtaking to look at but demanding to work on. Old knob-and-tube wiring, century-old cast iron plumbing, original wood-frame roofs: specialist contractors who know these homes win the trust and the ticket price. Weather drives cyclical spikes that separate busy operators from idle ones. Summers are hot and humid, which means HVAC demand surges from June through September. Winters bring ice storms and hard freezes. Spring is tornado season along the Ohio River valley, and low-lying neighborhoods near the river flood after heavy rain. The contractors already showing up when those spikes hit are the ones who own the work.",
  pullQuote: 'A three-state metro with Victorian housing stock and wild weather swings — the contractor who ranks across the Ohio River owns a market most of their competitors have never even mapped.',
  donut: {
    title: 'How Cincinnati searches',
    value: 55,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 55, kind: 'teal' },
      { label: 'Desktop', pct: 45, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Spring tornado/flooding (Mar–May), summer HVAC (Jun–Sep), winter ice (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 72 }, { m: 'F', v: 68 }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 80, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 95, peak: true }, { m: 'A', v: 92, peak: true }, { m: 'S', v: 74 },
    { m: 'O', v: 60 }, { m: 'N', v: 62 }, { m: 'D', v: 78 },
  ],
  stats: [
    { value: '2.3M', label: 'people across the Cincinnati tri-state metro' },
    { value: '~55%', label: 'of Cincinnati searches happen on a mobile phone', accent: true },
    { value: 'Jun–Sep', label: 'peak HVAC season, when cooling calls surge in humid Ohio summers' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Hyde Park', 'Mt. Adams', 'Clifton', 'Oakley', 'Anderson Township',
    'Blue Ash', 'Mason', 'West Chester', 'Covington', 'Florence',
    'Newport', 'Kenwood', 'Norwood', 'Westwood', 'Mariemont',
  ],
};

const AREAS = [
  'Hyde Park', 'Mt. Adams', 'Clifton', 'Oakley', 'Anderson Township',
  'Blue Ash', 'Mason', 'West Chester', 'Covington KY', 'Florence KY',
  'Newport KY', 'Kenwood', 'Norwood', 'Westwood', 'Mariemont',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. Cincinnati is a tight-knit, locally loyal market. When you're the contractor people in Hyde Park or Covington search for and find first, you don't need a lead broker. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Victorian home quirks, summer AC rushes, spring flood calls, and the cross-river Northern Kentucky market, so everything we build is shaped around how Cincinnati homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors in Hyde Park also bought.",
  },
  {
    title: 'We actually know Cincinnati',
    body: "Neighborhood by neighborhood — Hyde Park to Covington, Blue Ash to Mt. Adams — including the cross-river Kentucky side that most agencies treat as an afterthought. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Cincinnati contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when the summer HVAC rush or a spring storm hits, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH', metro: 'Cincinnati',
  heroProof: ['Built for the trades', 'Tri-state targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const cincinnatiLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cincinnati Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Cincinnati and three businesses show up on the map. We get you into those three — across Ohio and Northern Kentucky — so the call lands.',
    eyebrow: 'Local SEO · Cincinnati, OH',
    h1: 'When Cincinnati searches for what you do, be the first name they find',
    h2Exact: 'Cincinnati Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a three-state metro with Victorian neighborhoods on the Ohio side and fast-growing suburbs in Northern Kentucky, we get you into that top three for every market you serve.",
    primaryCta: 'Get my free Cincinnati audit',
    intro:
      "Cincinnati local SEO comes down to one question: when a homeowner in Hyde Park, Blue Ash, or Covington searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a three-state metro with aging Victorian housing that demands specialist contractors, and seasonal weather that creates hard spikes in demand. Becoming one of those three in every neighborhood you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Cincinnati businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Cincinnati neighborhoods and the Northern Kentucky suburbs across the river. Cincinnati's cross-state geography means winners also target Covington, Florence, and Newport separately from the Ohio-side neighborhoods, since Google treats them as distinct local markets.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. If you're not one of them, it almost doesn't matter how good your work is or how long you've been in business. Getting into that top three for Hyde Park, Blue Ash, and the Northern Kentucky side is usually the single highest-return move a Cincinnati contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cincinnati homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're missing the entire Kentucky side of the metro", body: "Covington, Florence, and Newport are practically next door, but most Ohio-based contractors have never optimized for Northern Kentucky searches. Those homeowners need roofing, HVAC, and plumbing work just like anyone in Anderson Township — and the competition for their searches is usually lighter." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Cincinnati and Northern Kentucky searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks — on both sides of the river. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone instead of scrolling past." },
      { name: 'Neighborhood pages', desc: "Real pages for Hyde Park, Mt. Adams, Clifton, Covington, and the rest — so you rank for the neighborhood someone's actually searching, not just \"Cincinnati.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Cincinnati-area sources Google trusts — local press, neighborhood associations, trade partners. This is what separates page one from page two here." },
      { name: 'Cross-river Kentucky targeting', desc: "Separate optimization for the Northern Kentucky market — Covington, Florence, Newport — so you capture the demand most Ohio contractors are quietly ignoring.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Cincinnati neighborhoods and the Northern Kentucky side, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, including a separate Kentucky profile if you serve that market. You usually see early lift within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Cincinnati's hillside communities and the Northern Kentucky suburbs, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood — or cross the river." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across multiple Cincinnati neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the tri-state metro.', features: ['Everything in Local Growth', 'Local link building', 'Cross-river Northern Kentucky targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cincinnati?', a: "Most Cincinnati engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Cincinnati keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Cincinnati local SEO different from other markets?', a: "The tri-state geography is the big one. You're dealing with Ohio, Kentucky, and sometimes Indiana homeowners who are all practically next door but in different Google local markets. You need to be optimized for the Northern Kentucky side — Covington, Florence, Newport — separately from Anderson Township or Blue Ash. Most contractors leave the Kentucky side completely unoptimized." },
      { q: "Should I target Northern Kentucky even though I'm based in Ohio?", a: "If you'll do the work there, absolutely. Covington, Florence, and Newport are a bridge away from downtown Cincinnati, and most Ohio-based contractors haven't optimized for those markets at all. That means the competition for those local searches is often much lighter than on the Ohio side." },
      { q: 'Which areas do you cover?', a: "The full Cincinnati metro on both sides of the river — Hyde Park, Mt. Adams, Clifton, Oakley, Anderson Township, Blue Ash, Mason, West Chester, Norwood, Mariemont, and across the river into Covington, Florence, and Newport. We build genuine neighborhood pages, not one generic Cincinnati page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand summer cooling emergencies, spring flood calls, Victorian home complexity, and the insurance work that follows a tornado — and we build your local SEO around them." },
      { q: "How does Cincinnati's weather affect when I need to do SEO?", a: "Seasonal demand peaks are real here — summer HVAC from June through September, spring storm and flood calls in March through May, and ice-related work in winter. SEO rankings take months to build, so you need to be in place before the season hits. We get you ranking for the seasonal searches before they spike." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Cincinnati neighborhoods and the Northern Kentucky side, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cincinnati SEO Company | OnwardCraft',
    metaDescription:
      'Cincinnati SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a tri-state market.',
    eyebrow: 'SEO Services · Cincinnati, OH',
    h1: 'Get your Cincinnati business to the top of Google and keep it there',
    h2Exact: 'Cincinnati SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what Cincinnati homeowners search — from Hyde Park to Covington — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Cincinnati SEO audit',
    intro:
      "Cincinnati SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across a three-state metro — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Cincinnati businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Cincinnati neighborhoods and the Northern Kentucky side, and earning links from trusted regional sources. In a cross-border metro like Cincinnati, ranking for the Ohio suburbs separately from Covington and Florence is one of the fastest ways to capture demand competitors are ignoring. Seasonal HVAC and storm-damage terms are the other quick wins.",
    problemHeading: "Three reasons your Cincinnati site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a metro with real competition from Ohio and Kentucky contractors, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good the work you do." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — including during the summer HVAC rush when ad costs spike." },
      { title: "You're not ranking for the seasonal demand that matters", body: "Cincinnati demand swings hard — HVAC in summer heat and humidity, storm and flooding calls in spring, ice repairs in winter. The contractors already ranking for those terms when the season hits book out fast. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms Cincinnati and Northern Kentucky homeowners search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Cincinnati-area and industry sources. Links are often what separate page one from page two in a competitive metro." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Ohio neighborhoods and Northern Kentucky alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the summer HVAC, spring storm, and winter ice searches that drive Cincinnati's busiest weeks — so you're visible before demand spikes, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across the Cincinnati metro and Northern Kentucky, then build a roadmap around the keywords most likely to drive real leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in this market." },
      { name: 'Build authority', desc: "Links and citations from trusted Cincinnati-area and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or the Northern Kentucky side." },
    ],
    pricing: {
      heading: 'Transparent Cincinnati SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Cincinnati search — Ohio and Kentucky.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Cross-river KY targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cincinnati?', a: "Most Cincinnati SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cincinnati?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Tighter neighborhood terms move faster; the most competitive metro-wide keywords take longer. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads in Cincinnati?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and Cincinnati ad costs spike during busy seasons. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Cincinnati SEO target seasonal demand?', a: "Yes. When summer heat and humidity arrive, AC and cooling calls surge June through September. Spring storms and Ohio River flooding trigger emergency roofing, restoration, and drainage calls. Winter ice and freezes hit HVAC and plumbing hard. Ranking takes months to build, so you need to be in place before the season, not chasing it. We optimize for those terms ahead of time." },
      { q: 'Should I target Northern Kentucky in my SEO?', a: "If you'll do the work there, absolutely. Covington, Florence, and Newport are part of the real Cincinnati market, but most Ohio-based contractors ignore them online. That means lighter competition for those searches and real jobs sitting unclaimed." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Cincinnati areas do you cover?', a: "The full tri-state metro — Hyde Park, Mt. Adams, Clifton, Oakley, Blue Ash, Mason, West Chester, Anderson Township, and across the river into Covington, Florence, and Newport — with genuine local pages rather than one generic Cincinnati page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility in Cincinnati neighborhoods and Northern Kentucky, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Cincinnati and Northern Kentucky, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cincinnati Web Design Company | OnwardCraft',
    metaDescription:
      'Cincinnati web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving Ohio, Northern Kentucky, and historic.',
    eyebrow: 'Web Design · Cincinnati, OH',
    h1: 'Cincinnati web design that turns visitors into booked jobs',
    h2Exact: 'Cincinnati Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Cincinnati contractors fast, mobile-first sites engineered to turn visitors into booked work — from Hyde Park to Covington — in a market where loyal locals back whoever shows up first.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Cincinnati contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Hyde Park to Florence KY into booked jobs. Built for a market where Bengals-loyal homeowners reward the local name they trust.",
    aioQuestion: 'What makes a good contractor website in Cincinnati?',
    aioAnswer:
      "A good Cincinnati contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, shows you know the specific neighborhoods you serve on both sides of the Ohio River, and proves trust with reviews and real project photos from local Victorian and newer-build homes. Because more than half of Cincinnati searches happen on mobile and the competition is real, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next company. We design every page around one job: turning a visitor into a booked lead — whether they're in Oakley or Covington." },
      { title: "It's too slow on a phone", body: "More than half of Cincinnati searches happen on mobile, and visitors bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhoods", body: "A homeowner in Mt. Adams wants to see that you work in Mt. Adams — and know what it means to work on a hillside Victorian. A generic 'Cincinnati contractor' page could be anybody. We build sites that name the neighborhoods and the specific housing stock you handle, so visitors trust you're genuinely local." },
    ],
    servicesHeading: "What's in an OnwardCraft Cincinnati website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want — Victorian restorations, HVAC installs, whatever you're best at." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where most of your Cincinnati traffic lands. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Cincinnati homeowners — including the ones dealing with a hundred-year-old house — and book the job, not filler text." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for both sides of the river." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around Hyde Park, Mt. Adams, Blue Ash, Covington, Florence, and the rest, so you stand out in every corner of the tri-state metro instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods on both sides of the river, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and neighborhood-specific language throughout." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting — especially ahead of seasonal demand spikes." },
    ],
    pricing: {
      heading: 'Transparent Cincinnati web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Cross-river KY targeting'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cincinnati?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in the Cincinnati market?', a: "That's the point. We build around the specific neighborhoods you serve — including the Northern Kentucky side that most Ohio contractors ignore online — keep the site fast, and put a clear offer and call button front and center. Cincinnatians are loyal to local businesses, so a site that actually speaks their neighborhood wins their call." },
      { q: 'Will my new site rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages for both Ohio and Kentucky. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because more than half of Cincinnati searches happen on mobile. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Can you build pages for my Northern Kentucky service area?', a: "Yes, and we recommend it. If you serve Covington, Florence, or Newport, we build dedicated pages for those markets so you rank on the Kentucky side separately from your Ohio pages — that's how you capture the full tri-state market." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cincinnati site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cincinnati', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cincinnati Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Cincinnati website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across the tri-state.',
    eyebrow: 'Website Redesign · Cincinnati, OH',
    h1: 'Redesign your Cincinnati website without losing your rankings',
    h2Exact: 'Cincinnati Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to scroll past. We redesign Cincinnati contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Cincinnati contractor sites for speed and conversions, build them to serve the full tri-state metro, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured — including proper targeting for both Ohio and Northern Kentucky markets.",
    problemHeading: "Signs your Cincinnati site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — especially on a Victorian home in Hyde Park or Clifton — Cincinnati homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even if your work is better." },
      { title: "It's slow and hard to use on a phone", body: "More than half of Cincinnati searches happen on mobile. If your site is clunky or slow on a phone, you're losing the majority of your visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't cover your full market", body: "If your current site only talks about Cincinnati and ignores the Northern Kentucky side of the metro, you're leaving real jobs in Covington, Florence, and Newport to whoever ranked there. We rebuild to cover the whole tri-state service area properly." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned on both sides of the river." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the majority of your Cincinnati and Northern Kentucky traffic arrives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns the loyalty of a Cincinnati market that rewards local businesses." },
      { name: 'Tri-state area rebuild', desc: "Rebuilt to serve Ohio neighborhoods and Northern Kentucky properly — separate, optimized pages for Covington, Florence, and Newport so you capture the whole market.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings across Cincinnati and Northern Kentucky, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration — including any Northern Kentucky pages." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates — especially before seasonal demand peaks." },
    ],
    pricing: {
      heading: 'Transparent Cincinnati redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Tri-state area rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cincinnati?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't cover your Northern Kentucky service area, isn't bringing in leads, or blends into the Cincinnati market without speaking to specific neighborhoods, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including any existing Northern Kentucky pages." },
      { q: 'Will the redesign help me compete across the tri-state metro?', a: "That's the goal. We rebuild to cover both Ohio and Northern Kentucky properly — separate pages for Covington, Florence, and Newport — and keep the site fast with a clear offer on every page. Cincinnatians are loyal to local names, and a site that speaks their neighborhood earns that loyalty." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix (including tri-state coverage), and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const cincinnatiCity = {
  citySlug: 'cincinnati', city: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH', metro: 'Cincinnati',

  titleTag: 'Cincinnati Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Cincinnati contractors — Ohio and Northern Kentucky. Get found, get booked, and own your leads instead of renting them.',

  eyebrow: 'Cincinnati · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Cincinnati contractors found and booked',
  h2Exact: 'Cincinnati Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Cincinnati's three-state metro — from Victorian hillside neighborhoods in Ohio to the fast-growing Kentucky suburbs across the river. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Tri-state targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Cincinnati audit',

  intro:
    "If you run a contracting business in Cincinnati, you're working a market most agencies have never fully mapped. There's the Ohio side — Victorian hillside neighborhoods in Mt. Adams and Clifton, established suburbs in Blue Ash and Mason, and river-adjacent areas with real flooding risk. And there's the Kentucky side — Covington, Florence, and Newport, practically next door but a completely different local search market that most Ohio contractors ignore online. Winning in Cincinnati takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack across both states. Here's how we help Cincinnati contractors do exactly that.",
  aioQuestion: 'How do Cincinnati contractors get more leads online?',
  aioAnswer:
    "Cincinnati contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across the tri-state metro. The contractors who do best also optimize separately for Northern Kentucky — Covington, Florence, and Newport — since those searches are often less competitive and represent real jobs that Ohio-based contractors consistently leave unclaimed.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cincinnati searches \"near me\" — across Ohio neighborhoods and the Northern Kentucky side. The single highest-return move for most local contractors.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, own the seasonal spikes that define Cincinnati's busy weeks, and build an asset you keep instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — built for Cincinnati's Victorian homes, tri-state geography, and locally loyal homeowners who back the name they trust.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, expand it to cover the Northern Kentucky side properly, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cincinnati?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the full tri-state Cincinnati metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Cincinnati's Victorian housing stock, seasonal weather extremes, and the cross-river Northern Kentucky market." },
    { q: 'Why does the Cincinnati market need a different approach?', a: "It's a genuine three-state metro. The Ohio neighborhoods and the Northern Kentucky suburbs are different local markets in Google's eyes, which means you need to be optimized for both sides separately. Most agencies treat the whole area as one market and miss half the opportunity." },
    { q: "Should I optimize for Northern Kentucky even if I'm based in Ohio?", a: "If you'll do the work in Covington, Florence, or Newport, yes. Those are real Cincinnati metro jobs, and most Ohio contractors have never targeted those searches. The competition there is often lighter, and the homeowners are just as close as the ones in Anderson Township." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free Cincinnati audit." },
    { q: 'Where should I start?', a: "Start with a free Cincinnati audit. We'll look at your website, your rankings on both sides of the river, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

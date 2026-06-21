// CLEVELAND — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Cleveland's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// CLEVELAND — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Cleveland is about timing and trust',
  body:
    "Cleveland sits on the southern shore of Lake Erie and earns every inch of its reputation for brutal winters. Lake-effect snow rolls off the lake from November through March, and the city averages around 57 inches of snow a year — placing it among the snowiest major cities in the United States. Ice storms take down gutters. Frozen pipes burst at 2 a.m. Roofs that have absorbed decades of freeze-thaw cycles finally give way under a January snow load. That weather calendar creates a predictable, high-urgency spike in contractor demand every single winter, and the businesses already ranking when homeowners grab their phones are the ones who get the emergency calls. Spring thaw brings its own problems: snowmelt and saturated ground push basement flooding and foundation drainage calls through the roof from March into May. Two windows, two separate rushes — and you either show up on the map or you don't. Beyond weather, Cleveland's neighborhoods tell a rust-belt revival story that demands specialist skill. Ohio City, Tremont, Slavic Village, and Detroit Shoreway are packed with brick homes built between 1900 and 1940 that need plaster repair, knob-and-tube replacement, tuckpointing, and careful envelope work a national chain crew isn't equipped for. The city is also converting old factory buildings in Midtown and along the Detroit Shoreway corridor into residential lofts — specialized renovation work that rewards contractors with a real track record in Cleveland's older building stock. Suburban wealth is quietly concentrated in Westlake, Bay Village, Solon, and Beachwood, driven by employees and physicians from Cleveland Clinic and University Hospitals, and those homeowners spend on quality. The contractors who own the map in those suburbs and historic neighborhoods win the high-ticket jobs.",
  pullQuote: "In Cleveland, the contractors who rank before the lake-effect snow hits are the ones whose phones ring when it does.",
  donut: {
    title: 'Cleveland weather demand',
    value: 57,
    centerLabel: 'winter-driven',
    legend: [
      { label: 'Winter emergency demand', pct: 57, kind: 'teal' },
      { label: 'Rest of year', pct: 43, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Lake-effect winter (Nov–Mar) and spring thaw flooding (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 95, peak: true }, { m: 'F', v: 90, peak: true }, { m: 'M', v: 85, peak: true },
    { m: 'A', v: 60 }, { m: 'M', v: 50 }, { m: 'J', v: 44 }, { m: 'J', v: 40 },
    { m: 'A', v: 42 }, { m: 'S', v: 48 }, { m: 'O', v: 55 },
    { m: 'N', v: 80, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '57"', label: 'average annual snowfall — one of the highest among major US cities' },
    { value: 'Nov–Mar', label: 'lake-effect snow season, when emergency contractor calls spike', accent: true },
    { value: '1900–1940', label: 'era of most Cleveland neighborhood homes needing specialist renovation' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when pipes freeze' },
  ],
  neighborhoods: [
    'Ohio City', 'Tremont', 'Detroit Shoreway', 'Slavic Village', 'University Heights',
    'Shaker Heights', 'Westlake', 'Bay Village', 'Solon', 'Beachwood',
    'Strongsville', 'Parma', 'Midtown', 'Collinwood', 'West Park',
  ],
};

const AREAS = [
  'Ohio City', 'Tremont', 'Detroit Shoreway', 'Slavic Village', 'University Heights',
  'Shaker Heights', 'Westlake', 'Bay Village', 'Solon', 'Beachwood',
  'Strongsville', 'Parma', 'Lakewood', 'Euclid', 'Brecksville',
];

const FOUNDER =
  "I'll be honest with you: I built OnwardCraft because I watched too many solid Cleveland contractors hand Angi and HomeAdvisor hundreds of dollars a month for leads their three competitors also bought. That's not a business — that's a treadmill. Cleveland homeowners want local. They want someone who knows what a 1920s Ohio City brick row house looks like from the inside, who understands what lake-effect ice does to a low-slope roof, and who isn't going to disappear when the job gets complicated. Those contractors deserve to own their leads. That's what we build here — rankings and websites that send work straight to you, not to a broker.";

const WHY = [
  {
    title: 'We understand Cleveland winters',
    body: "Lake-effect snow, ice dams, frozen pipes, spring thaw flooding — we know exactly what drives emergency contractor demand in this market and we build your SEO around it, so you rank before the weather hits and your phone rings when it does.",
  },
  {
    title: "We get Cleveland's older housing stock",
    body: "Ohio City, Tremont, Slavic Village, and Shaker Heights aren't Anytown, USA. Those are 1920s brick homes with plaster walls, old drainage systems, and chimneys that need a specialist. We write content that speaks to those jobs and attracts the homeowners who need them done right.",
  },
  {
    title: 'We get you off rented leads',
    body: "Cleveland homeowners prefer local contractors over national chains — but they still have to find you first. We build rankings and a Google presence that send leads directly to you, so you stop paying brokers for the same homeowner they sold to your competitor yesterday.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, plain-English reporting tied to actual leads, and month-to-month after the first 90 days. If it's not working, you leave. That keeps the pressure where it belongs — on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Cleveland contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a quiet January and a booked-out calendar for the entire winter season. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Cleveland', state: 'Ohio', stateAbbr: 'OH', metro: 'Cleveland',
  heroProof: ['Built for the trades', 'Cleveland neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const clevelandLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Cleveland Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your trade in Cleveland and three businesses show up on the map. We get you into those three before the lake-effect snow season hits.',
    eyebrow: 'Local SEO · Cleveland, OH',
    h1: 'When Cleveland searches for what you do, be the first name they find',
    h2Exact: 'Cleveland Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them barely exists. In a market where lake-effect storms send homeowners scrambling for contractors overnight, we get you into that top three for the neighborhoods you serve — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Cleveland audit',
    intro:
      "Cleveland local SEO comes down to one question: when a homeowner in Ohio City or Westlake searches your service plus \"near me\" at 11 p.m. after a pipe freezes, are you one of the three businesses Google pins to the map? The city averages 57 inches of snow a year, and emergency contractor demand spikes hard every November through March. The contractors already in those three spots take the calls. The ones who aren't are invisible no matter how good their work is. Here's how you get there.",
    aioQuestion: 'How do Cleveland businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you serve; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Cleveland neighborhoods and seasonal demand. In Cleveland, timing matters — you need to build your profile and reviews during slow season so you rank when lake-effect snow and spring flooding push homeowners onto Google at peak urgency.",
    problemHeading: "If your phone is quiet during the winter rush, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? During a January ice storm or a March thaw that floods basements across Parma and Strongsville, those three businesses take the calls. If you're not one of them, it almost doesn't matter how good your work is — most homeowners never scroll past the map. Getting into that top three for your neighborhoods is usually the single highest-return move a Cleveland contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Cleveland homeowner to three or four contractors, then bill all of you to compete. Cleveland homeowners already prefer local contractors — but if they can't find you on Google, they end up on those platforms anyway. Local SEO builds the opposite: a lead finds you directly, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're not ranking when the weather drives the demand", body: "Lake-effect snow, ice dams, and spring flooding don't wait for your SEO to catch up. Rankings take months to build. If you're not already in the Map Pack before November, you miss the busiest contractor months of the year. We build your presence during the slow season so you're visible before the weather hits." },
    ],
    servicesHeading: 'What it actually takes to rank you in Cleveland',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service areas — Ohio City, Westlake, Solon, Beachwood and the rest — photos, and posts so Google knows exactly which Cleveland searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. Especially important in Cleveland, where locals trust local contractors and reviews are how they judge you." },
      { name: 'Neighborhood pages', desc: "Real pages for Ohio City, Tremont, Shaker Heights, Parma, Westlake and more, so you rank for the specific neighborhood someone's actually searching — not just \"Cleveland.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The under-the-hood work that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Cleveland sources Google trusts — local press, neighborhood associations, business groups, trade partners. This is what separates page one from page two." },
      { name: 'Seasonal SEO for winter demand', desc: "We build your rankings and content around the lake-effect snow season — heating failures, ice dams, frozen pipes, roof collapse — so you're visible before November, not scrambling after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read and cite you alongside traditional search results.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Cleveland neighborhoods and identify which competitors are holding the Map Pack spots you want — and exactly why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move fastest. You often see early lift here within a few weeks, which matters if the snow season is approaching." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why starting in summer — before the winter rush — makes such a big difference." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages for the Cleveland markets you serve, plus the on-page work to back them up and the seasonal content that ranks when demand spikes." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not just vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across several Cleveland neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the whole metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal & emergency SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Cleveland?', a: "Most Cleveland engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this — no hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Cleveland keywords typically take 90 to 180 days of steady work, because reviews and citations compound over time. If the lake-effect season is approaching, start now — you can't fast-track rankings in the middle of a snow emergency." },
      { q: 'What makes Cleveland local SEO different from other cities?', a: "Two things. First, the seasonality is severe — lake-effect snow and spring thaw flooding create sharp, predictable demand spikes from November through May, and you have to be ranking before they hit. Second, Cleveland's older neighborhoods have a distinct housing stock that homeowners are very particular about. Content that speaks specifically to 1920s brick homes, original plaster, and knob-and-tube wiring earns trust that a generic template never will." },
      { q: 'Which areas do you cover in Cleveland?', a: "We target Ohio City, Tremont, Detroit Shoreway, Slavic Village, University Heights, Shaker Heights, Westlake, Bay Village, Solon, Beachwood, Strongsville, Parma, Lakewood, and more. We build genuine neighborhood pages instead of one generic Cleveland page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do — roofing, HVAC, plumbing, restoration, electrical, solar, and general contractors. We understand what lake-effect ice does to a low-slope roof, what spring thaw does to old Cleveland basement drainage, and what a 1925 brick home needs that a 1990s suburban build doesn't." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business — it's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at prices that make sense for the broker, not for you. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — especially during the winter months when you need it most." },
      { q: "What if I serve both the city and the suburbs?", a: "That's common in Cleveland, where contractors often work both the historic inner-ring neighborhoods and the suburban belt. We build neighborhood and service-area pages for both, so you rank where your customers actually search, not just in a single generic city zone." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Cleveland neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Cleveland SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Cleveland SEO that ranks contractors on Google and brings in leads you own. Built for the lake-effect market, revenue-tied reporting, no lock-in.',
    eyebrow: 'SEO Services · Cleveland, OH',
    h1: 'Get your Cleveland business to the top of Google and keep it there',
    h2Exact: 'Cleveland SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Cleveland customers search and the leads keep coming — including during the winter emergency season when every contractor's phone should be ringing.",
    primaryCta: 'Get my free Cleveland SEO audit',
    intro:
      "Cleveland SEO comes down to one question: when a homeowner in Shaker Heights or Strongsville searches your service, are you on page one or page two? Page two might as well not exist. We rank Cleveland contractors for the keywords that drive real work — including the seasonal heating, ice, and flooding terms that spike every winter — and we measure success in leads, not vanity traffic.",
    aioQuestion: 'How do Cleveland businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of their site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Cleveland neighborhoods and seasonal demand, and earning links from trusted local sources. In Cleveland, ranking for lake-effect winter emergency searches and spring thaw flooding terms before those seasons arrive is one of the highest-value moves a contractor can make — those rankings don't materialize overnight.",
    problemHeading: "Three reasons your Cleveland site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and in Cleveland that's especially painful during the winter rush. If a homeowner's pipes freeze at midnight and you're not on page one, they're calling whoever is. It doesn't matter how good your work is if they never see your name." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your budget pauses, the leads stop — and Cleveland's contractor keywords are expensive during peak winter months when every trade is competing for the same homeowners. SEO builds an asset you own: rankings that keep producing leads long after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranking for the seasonal demand that matters", body: "Cleveland's busiest contractor months are November through March, driven by lake-effect snow, ice dams, frozen pipes, and heating failures. Spring thaw brings another surge through May. If your SEO doesn't target those seasonal and emergency searches specifically, you're invisible when your customers are most urgently looking for you." },
    ],
    servicesHeading: 'The SEO work that actually moves Cleveland rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Cleveland customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including neighborhood-specific content for Ohio City, Westlake, Solon, and more." },
      { name: 'Link building', desc: "Authority from real Cleveland and industry sources. Links from local press, contractor associations, and trusted local partners are what push competitive keywords from page two to page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Cleveland neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating, ice dam, frozen pipe, and spring flooding searches that drive Cleveland's busiest months — built before the season, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins — including urgent after-hours searches.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Cleveland leads — including the seasonal emergency terms your competitors may be ignoring." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content: neighborhood pages, seasonal guides, and the emergency-search terms that matter when Cleveland weather turns." },
      { name: 'Build authority', desc: "Links and citations from trusted Cleveland and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Cleveland SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Cleveland search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-neighborhood pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Cleveland?', a: "Most Cleveland SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above — no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Cleveland?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. Seasonal terms for lake-effect and spring flooding demand take time to build, which is exactly why starting during the slow season — summer or early fall — means you're ranking when the weather turns." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and Cleveland contractor keywords are especially expensive during the winter rush when everyone's bidding. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my Cleveland SEO target seasonal demand?', a: "Absolutely. Lake-effect snow, ice dams, frozen pipes, and heating failures spike urgently from November through March. Spring thaw flooding adds another surge from March through May. Rankings take months to build, so you have to be in place before the season. We optimize for those seasonal and emergency terms ahead of time so your busiest months land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal and emergency SEO plus AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. When homeowners search for emergency help after a pipe bursts at midnight, more of those searches now start in AI. We structure your content and schema so AI engines can read, trust, and recommend your business." },
      { q: 'Which Cleveland areas do you cover?', a: "We target the full metro: Ohio City, Tremont, Detroit Shoreway, Slavic Village, Shaker Heights, University Heights, Westlake, Bay Village, Solon, Beachwood, Parma, Strongsville, Lakewood, and more — with genuine local pages, not a single generic Cleveland page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. Cleveland homeowners already prefer local contractors — we make sure they can find you when they go looking, which reduces your dependence on brokers selling you shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Cleveland Web Design Company | OnwardCraft',
    metaDescription:
      'Cleveland web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in the lake-effect market.',
    eyebrow: 'Web Design · Cleveland, OH',
    h1: 'Cleveland web design that turns visitors into booked jobs',
    h2Exact: 'Cleveland Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Cleveland contractors fast, mobile-first sites engineered to convert visitors into booked work — and to earn the trust of homeowners who could tell a local from a national chain just from the homepage.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Cleveland contractor websites lose leads quietly: slow on a phone, buried call button, generic content that could be from anywhere. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Ohio City-to-Westlake visitors into booked jobs — designed to win in a market where homeowners specifically look for local contractors who know what lake-effect winters and 1920s brick homes actually demand.",
    aioQuestion: 'What makes a good contractor website in Cleveland?',
    aioAnswer:
      "A good Cleveland contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves local trust with real project photos and neighborhood-specific references, and names the specific Cleveland neighborhoods you serve. Because most emergency searches happen on mobile during weather events — and Cleveland homeowners specifically prefer local over national — mobile speed, a clear offer, and genuine local credibility are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites list services and sit there. No clear offer, no obvious next step, no reason for a homeowner in Parma who just found a frozen pipe to call you over the next result. We design every page around one job: turning a visitor into a booked lead, even at 2 a.m. in February." },
      { title: "It's too slow on a phone", body: "Most of your Cleveland visitors are on mobile — especially during the winter emergencies that drive the biggest calls. A slow site loses them in seconds and also ranks worse on Google. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't look local", body: "Cleveland homeowners are famously loyal to local businesses. A generic template site that could belong to a contractor in Phoenix or Atlanta doesn't build that trust. We build sites that name your neighborhoods, show your real work, and feel like they come from someone who actually knows what Tremont rowhouses and Beachwood colonials require." },
    ],
    servicesHeading: "What's in an OnwardCraft Cleveland website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Cleveland neighborhoods, and the jobs you actually want to land." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where your Cleveland visitors are — especially during the weather emergencies that drive the most urgent calls." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, and nothing gets between the visitor and a call." },
      { name: 'Copy that sells', desc: "Words that speak to anxious Cleveland homeowners — whether they're dealing with a frozen pipe at midnight or planning a spring renovation in Shaker Heights — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for the Cleveland markets you serve." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings across all seasons." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the specific Cleveland neighborhoods you serve — Ohio City, Westlake, Solon, Beachwood, Parma, and more — so you earn local trust and rank for the searches that matter.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business, including during the after-hours emergency searches that Cleveland winters produce.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Cleveland neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — including the seasonal work that drives your busiest months." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with local credibility, neighborhood references, and a call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Cleveland web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Cleveland?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site build trust with Cleveland homeowners?", a: "That's a specific challenge in Cleveland, where homeowners are genuinely loyal to local contractors. We build sites that name your neighborhoods, show your real work in real Cleveland homes, and feel unmistakably local — not a template that could belong to a national chain." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Cleveland terms, especially before the lake-effect season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where your Cleveland traffic comes from — especially the urgent winter emergency calls that represent some of your highest-value jobs." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Cleveland contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'cleveland', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Cleveland Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Cleveland website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs. Free audit.',
    eyebrow: 'Website Redesign · Cleveland, OH',
    h1: 'Redesign your Cleveland website without losing your rankings',
    h2Exact: 'Cleveland Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — and in Cleveland, that means missing emergency calls during the busiest contractor months of the year. We redesign Cleveland contractor sites to convert more and load faster, and we migrate carefully so you keep every ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings disappear. We do neither. We redesign Cleveland contractor sites for speed and local credibility, build them to stand out in a market where homeowners clearly prefer local, and migrate with the redirects and SEO care that protect the traffic you've already built — traffic that becomes especially valuable when lake-effect season hits.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign holds your rankings and usually improves them — because the new site is faster, more mobile-friendly, and better structured than the old one, all of which Google rewards.",
    problemHeading: "Signs your Cleveland site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Cleveland homeowners making decisions about their 1930s Ohio City home or their Westlake colonial are spending real money. An old, cluttered website signals that you're not the operator they want for that job — even when your work is better than anyone else's. First impressions happen in seconds." },
      { title: "It's slow and hard to use on a phone", body: "When a homeowner in Parma finds water in their basement at 7 a.m. during a spring thaw, they're on their phone. If your site takes five seconds to load or buries the call button, they're already dialing the next result. We redesign for mobile speed so you capture those moments." },
      { title: "It blends into the competition and doesn't build local trust", body: "Generic contractor sites that could be from anywhere don't earn local loyalty in Cleveland. We rebuild around the specific neighborhoods you serve and the specific challenges Cleveland homes present — so visitors immediately recognize you as the local expert, not just another search result." },
    ],
    servicesHeading: "What's in an OnwardCraft Cleveland redesign",
    services: [
      { name: 'Redesign audit', desc: "We identify exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just updating the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — especially important if you're heading into winter." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just aesthetics." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical for capturing emergency mobile searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Cleveland traffic originates — especially the high-urgency calls that come during the lake-effect season." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that reflects the quality of your work and the seriousness of the jobs you do in Cleveland's older and more demanding housing stock." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the specific Cleveland neighborhoods and seasonal work that drive your business, so the new site earns the local trust that generic templates never can.", featured: true },
      { name: 'AI-search ready', desc: "Restructured so AI Overviews and ChatGPT can read and recommend your business, including for after-hours emergency searches during winter weather events.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — and make sure the migration is planned before a single page changes." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — built around your trade and your Cleveland neighborhoods." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration that protects your existing rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve after launch." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and security updates." },
    ],
    pricing: {
      heading: 'Transparent Cleveland redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Cleveland?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — and in Cleveland, protecting those rankings before winter is especially important." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or fails to build the local trust Cleveland homeowners expect, it's costing you work. The free audit tells you plainly whether a redesign is worth it — and how much it's currently costing you." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: "Will the redesign help me compete for Cleveland's seasonal work?", a: "Yes. We rebuild around the specific neighborhoods, seasonal services, and emergency triggers that drive your busiest months. The new site earns local trust and ranks for the searches that matter when lake-effect weather and spring flooding hit." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals — which lifts both conversions and rankings, and is critical for capturing the emergency searches that Cleveland winters produce." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const clevelandCity = {
  citySlug: 'cleveland', city: 'Cleveland', state: 'Ohio', stateAbbr: 'OH', metro: 'Cleveland',

  titleTag: 'Cleveland Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Cleveland contractors. Get found before lake-effect season, rank in every neighborhood, and own your leads.',

  eyebrow: 'Cleveland · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Cleveland contractors found and booked',
  h2Exact: 'Cleveland Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Cleveland's lake-effect winters, rust-belt neighborhoods, and homeowners who always choose local. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Cleveland neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Cleveland audit',

  intro:
    "If you run a contracting business in Cleveland, your market runs on weather. Lake-effect snow drives emergency contractor demand from November through March. Spring thaw sends basement flooding calls through the roof from March into May. And in between, Ohio City, Tremont, Shaker Heights, and Slavic Village are full of 1920s brick homes that need specialist work a national chain isn't equipped for. Winning here takes three things working together: a site that earns local trust and converts, SEO that ranks you for what people search — including the seasonal emergency terms — and local SEO that puts you in the Map Pack for the neighborhoods you actually serve. Here's how we help Cleveland contractors do exactly that.",
  aioQuestion: 'How do Cleveland contractors get more leads online?',
  aioAnswer:
    "Cleveland contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Cleveland homeowners strongly prefer local contractors and because demand spikes sharply around lake-effect snow and spring flooding, contractors who build their rankings during slow season and target the specific neighborhoods and emergency terms that matter here win the most work when it counts.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Cleveland searches \"near me\" — before the lake-effect season hits, so your phone rings when it does. The single highest-return move for most local contractors.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including the winter emergency and spring flooding terms that drive Cleveland's busiest months — and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that earn local trust, convert Cleveland visitors into booked jobs, and look nothing like the national-chain template sites your competitors are using.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, local credibility, and conversions — and migrate it carefully so you keep every ranking you've already earned before the next winter rush.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Cleveland?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially important in Cleveland where seasonal demand makes timing critical." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, restoration, electrical, solar, and general contractors. We understand what lake-effect ice does to a low-slope roof, what spring thaw does to old Cleveland basement drainage, and what specialist renovation work in Tremont or Shaker Heights actually requires." },
    { q: "Why does Cleveland's market need a different approach?", a: "Because demand here is seasonal and urgent. Lake-effect snow and spring flooding create sharp, predictable spikes in contractor calls, and you need to already be ranking before those windows open. And because Cleveland homeowners genuinely prefer local contractors, your web presence needs to look and feel local — not like a template swapped in from a national marketing shop." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Cleveland areas do you serve?', a: "The full metro: Ohio City, Tremont, Detroit Shoreway, Slavic Village, University Heights, Shaker Heights, Westlake, Bay Village, Solon, Beachwood, Strongsville, Parma, Lakewood, Euclid, and more — with genuine neighborhood pages, not a single generic Cleveland page." },
    { q: 'Where should I start?', a: "Start with a free Cleveland audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work before the next weather season. No pitch deck — just a plan." },
  ],
};

// SEATTLE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Seattle's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// SEATTLE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Seattle is a year-round competition',
  body:
    "The Seattle metro stretches from Federal Way to Everett and east across the lake to Bellevue, Redmond, and Kirkland — roughly four million people across a landscape defined as much by water and hills as by zip codes. But the single biggest driver of home-services demand here isn't square footage or housing age: it's rain. Seattle logs more than 155 rainy days a year, and that constant moisture pushes roofing, drainage, moss treatment, waterproofing, mold remediation, and foundation work from seasonal spikes into year-round urgency. A homeowner in Ballard with moss on the roof isn't thinking about this in November only — they're thinking about it every time they look out the window. Two forces shape who wins those searches. First, this is one of the most tech-concentrated metros in the country. Amazon, Microsoft, Boeing, and their supply chains have flooded the region with high-income, time-poor professionals who search on their phones and make fast decisions based on the credibility of what they find. A contractor with a slow, generic website loses to a polished competitor before the first call is made. Second, the housing stock is bifurcated: Capitol Hill, Fremont, and Ballard hold dense blocks of Craftsman and Tudor bungalows from the 1920s through the 1950s, demanding real renovation expertise, while Bellevue, Redmond, and Kirkland skew toward newer, higher-end construction where homeowners expect premium service and pay for it.",
  pullQuote: 'In a market where 155 rainy days a year drive demand and Amazon workers pick the most credible result, the contractor who ranks is the one who books.',
  donut: {
    title: 'How Seattle searches',
    value: 82,
    centerLabel: 'searches on mobile',
    legend: [
      { label: 'Mobile searches', pct: 82, kind: 'teal' },
      { label: 'Desktop searches', pct: 18, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Roofing/drainage (Oct–Mar) and HVAC/heat pump (Jun–Aug heat events)',
  seasonalDemand: [
    { m: 'J', v: 88, peak: true }, { m: 'F', v: 86, peak: true }, { m: 'M', v: 72 },
    { m: 'A', v: 65 }, { m: 'M', v: 60 }, { m: 'J', v: 70 }, { m: 'J', v: 85, peak: true },
    { m: 'A', v: 84, peak: true }, { m: 'S', v: 68 }, { m: 'O', v: 80, peak: true },
    { m: 'N', v: 88, peak: true }, { m: 'D', v: 90, peak: true },
  ],
  stats: [
    { value: '4M+', label: 'people across the greater Seattle-Tacoma metro' },
    { value: '155+', label: 'rainy days per year — driving year-round roofing, drainage, and restoration demand', accent: true },
    { value: 'Oct–Mar', label: 'peak roofing and drainage season driven by the rainy season' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when someone searches locally' },
  ],
  neighborhoods: [
    'Capitol Hill', 'Fremont', 'Ballard', 'Queen Anne', 'Wallingford',
    'West Seattle', 'Beacon Hill', 'Rainier Beach', 'Bellevue', 'Redmond',
    'Kirkland', 'Issaquah', 'Renton', 'Federal Way',
  ],
};

const AREAS = [
  'Capitol Hill', 'Fremont', 'Ballard', 'Queen Anne', 'Wallingford',
  'West Seattle', 'Beacon Hill', 'Rainier Beach', 'Bellevue', 'Redmond',
  'Kirkland', 'Issaquah', 'Renton', 'Federal Way',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching skilled tradespeople hand Angi and HomeAdvisor hundreds of dollars a month for leads that went to three of their competitors at the same time. You can't build a business on rented leads. Seattle homeowners are tech-savvy — they do a quick search, scan the top results, and pick whoever looks most credible and professional. If you're not ranking and your website doesn't inspire confidence, you're invisible to exactly the buyers who can afford your best work. That's the problem we fix. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand the Seattle rain economy',
    body: "Moss treatment, roof drainage, waterproofing, mold remediation, foundation repair — these are year-round conversations in Seattle, not seasonal spikes. We build your SEO and content around how this market actually drives demand, not a generic national template.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners who also called three other contractors before you picked up.",
  },
  {
    title: 'We speak tech-buyer',
    body: "Your customers are often Amazon and Microsoft employees who find contractors the same way they find everything else — fast Google search, quick credibility check, done. A polished site with strong local rankings wins that decision before you ever talk to them.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Seattle contractor gets around 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market full of tech-savvy buyers who click fast and rarely scroll, that gap is real. In your free audit, we model the actual numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Seattle', state: 'Washington', stateAbbr: 'WA', metro: 'Seattle-Tacoma',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const seattleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Seattle Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Seattle and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Seattle, WA',
    h1: 'When Seattle searches for what you do, be the first name they find',
    h2Exact: 'Seattle Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a city full of tech-savvy buyers who pick fast and rarely scroll, we get you into that top three for your neighborhoods and suburbs — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Seattle audit',
    intro:
      "Seattle local SEO comes down to one thing: when a homeowner in Fremont or Bellevue searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market where 155+ rainy days a year create year-round demand for roofing, drainage, and restoration — and where Amazon and Microsoft workers make fast, credibility-driven decisions on their phones. Becoming one of those three for the neighborhoods you serve is the whole game.",
    aioQuestion: 'How do Seattle businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Seattle neighborhoods and suburbs. Seattle is tech-forward and mobile-heavy, so the winners respond fast, keep their profile sharp, and build content that speaks to rain-driven demand — moss treatment, drainage, roofing, waterproofing — alongside energy-efficiency services that resonate with this market.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? Your customers see the same thing, and they tap one of those three. Seattle buyers are quick-decision makers — they're not scrolling to page two. Getting into the top three for Fremont, Ballard, Bellevue, and the rest is usually the single highest-return move a Seattle contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Seattle homeowner to four contractors, then bill each of you to fight over them. It's a treadmill, and it never stops. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when rain drives demand", body: "After every wet stretch — which is most of October through March — Seattle homeowners start searching for roofers, drainage specialists, moss treatment, and waterproofing. The contractors already ranking when that search wave hits are the ones who book it. If you're not in place before the season, you miss the work." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Seattle searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes tech-savvy Seattle buyers pick up the phone." },
      { name: 'Neighborhood and suburb pages', desc: "Real pages for Capitol Hill, Fremont, Ballard, Bellevue, Redmond, Kirkland, and the rest — so you rank for the area someone's actually searching, not just \"Seattle.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Seattle sources Google trusts — local press, neighborhood associations, trade groups, partners. This is what separates page one from page two here." },
      { name: 'Rain-driven and seasonal SEO', desc: "Content and optimization around the roofing, drainage, moss, waterproofing, and heat-pump searches that define Seattle's demand cycles — so you rank when the work is there.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and suburbs and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Seattle and the Eastside, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Seattle neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood and suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map from Ballard to Bellevue.', features: ['Everything in Local Growth', 'Local link building', 'Rain-driven seasonal SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Seattle?', a: "Most Seattle engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Seattle keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this active is selling you something." },
      { q: 'What makes Seattle local SEO different?', a: "Two things stand out. First, rain drives demand year-round — roofing, drainage, moss treatment, waterproofing, mold, foundation — and the contractors already ranking when a search wave hits after a wet stretch are the ones who book it. Second, Seattle buyers are tech-forward: Amazon and Microsoft workers who do a fast search, scan the top results, and pick whoever looks most credible. A strong Map Pack presence backed by good reviews closes that decision before they call anyone else." },
      { q: 'Which areas do you cover?', a: "All of Seattle's neighborhoods and the surrounding suburbs — Capitol Hill, Fremont, Ballard, Queen Anne, Wallingford, West Seattle, Beacon Hill, Rainier Beach, plus Bellevue, Redmond, Kirkland, Issaquah, Renton, and Federal Way. We build genuine pages for each area instead of one generic Seattle page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, electrical, restoration, waterproofing, drainage, solar, heat pumps, and general contractors. We understand what rain-driven demand looks like in Seattle and we build your SEO around it." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. With a tech-savvy Seattle audience, this is becoming as important as the Map Pack." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: 'How should I target Eastside suburbs like Bellevue and Kirkland separately?', a: "Bellevue and Kirkland search differently from Seattle proper — higher price points, newer homes, buyers who expect premium presentation. We build dedicated pages and optimize your profile for those areas specifically, so you show up as a credible local option on the Eastside, not just a Seattle contractor who happens to drive over." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Seattle SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Seattle SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a tech-savvy, rain-driven.',
    eyebrow: 'SEO Services · Seattle, WA',
    h1: 'Get your Seattle business to the top of Google and keep it there',
    h2Exact: 'Seattle SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Seattle customers search and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Seattle SEO audit',
    intro:
      "Seattle SEO comes down to one question: when a homeowner searches what you do, are you on page one or page two? Page two might as well be page fifty — and in a market where tech-forward buyers make fast decisions based on the first credible result they see, the gap between ranking and not ranking is enormous. We get Seattle contractors ranking for the money keywords in a market defined by rain-driven demand and high-income, time-poor buyers.",
    aioQuestion: 'How do Seattle businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Seattle neighborhoods and suburbs, and earning links from trusted local sources. In Seattle, ranking for rain-driven searches — roofing, drainage, moss treatment, waterproofing, mold remediation — and for energy-efficiency terms like heat pumps and insulation gives contractors a real edge over competitors running generic national SEO.",
    problemHeading: "Three reasons your Seattle site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. Seattle buyers are especially quick to decide: they find a credible-looking top result and they're done. If you're not in the top handful of results for what you sell, your site is invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market where buyers search, scan, and decide fast, owning that search presence is the long-term play." },
      { title: "You're not ranking for the demand that matters", body: "Seattle demand moves with the rain. Roofing, drainage, waterproofing, and moss treatment surge October through March. Heat pumps and HVAC spike when a rare heat event hits in summer. If your SEO ignores those seasonal and weather-driven searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Seattle customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Seattle and industry sources. In a market this competitive, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods and Eastside suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Rain-driven and seasonal SEO', desc: "We rank you for the roofing, drainage, moss, waterproofing, and heat-pump searches that define Seattle's demand cycles, so you're visible before the work spikes — not chasing it after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of this tech-savvy market's research now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Seattle leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the rain-driven and seasonal terms that define Seattle demand." },
      { name: 'Build authority', desc: "Links and citations from trusted Seattle and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Seattle SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Seattle suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Seattle-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Rain-driven seasonal SEO', 'Multi-location / Eastside targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Seattle?', a: "Most Seattle SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Seattle?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6 — faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Seattle contractors do best running SEO as the long-term engine and ads for short-term spikes like heat events or storm season." },
      { q: 'Should my Seattle SEO target rain-driven demand?', a: "Absolutely. Roofing, drainage, waterproofing, moss treatment, and mold remediation are year-round conversations here — not a single-season spike. Heat pumps and HVAC surge in rare summer heat events. Ranking takes months to build, so you have to be in place before demand rises, not chasing it after the fact." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add rain-driven seasonal SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. Seattle is one of the most tech-forward metros in the country — your customers are already using AI tools to research contractors. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Which areas around Seattle do you cover?', a: "All of Seattle's neighborhoods plus the surrounding suburbs — Capitol Hill, Fremont, Ballard, West Seattle, Beacon Hill, and Rainier Beach inside the city, plus Bellevue, Redmond, Kirkland, Issaquah, Renton, and Federal Way on the Eastside and South End." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Seattle Web Design Company | OnwardCraft',
    metaDescription:
      'Seattle web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a tech-savvy, rain-driven market.',
    eyebrow: 'Web Design · Seattle, WA',
    h1: 'Seattle web design that turns visitors into booked jobs',
    h2Exact: 'Seattle Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Seattle contractors fast, mobile-first sites engineered to turn visitors into booked work — and to win the credibility test that tech-savvy buyers run the moment they land on your page.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Seattle contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. In a city where Amazon and Microsoft workers do a quick search, scan the top results, and pick whoever looks most professional, a weak website is money walking out the door. We build sites that load fast, look like the credible business you are, and turn Fremont-to-Bellevue visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Seattle?',
    aioAnswer:
      "A good Seattle contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Because most searches happen on mobile and buyers here are tech-forward and quick to decide, mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to pick you over the next result — and in Seattle, buyers make that call in seconds. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It fails the credibility check", body: "Seattle's tech-workforce homeowners are quick credibility scanners. A slow, outdated, or generic site reads as unprofessional before they've seen a single review — and they move on. A fast, well-designed site with clear trust signals closes that gap instantly." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Kirkland wants to see you serve Kirkland — not a generic \"Seattle area\" page. A homeowner doing Craftsman restoration in Ballard has different concerns than someone in a new Redmond build. We create sites that speak to those differences and name the areas you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Seattle website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first — because that's where the overwhelming majority of your Seattle traffic comes from — fast, thumb-friendly, and easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Seattle homeowners' real concerns — rain damage, energy efficiency, aging Craftsman homes, premium Eastside work — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Seattle neighborhoods and Eastside suburbs you serve, so you stand out as a credible local option instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more of Seattle's tech-savvy buyers shift their research to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your areas, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Seattle web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services or areas.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Seattle?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me win over tech-savvy Seattle buyers?', a: "That's the whole point. Amazon and Microsoft workers pick contractors the same way they pick everything — fast search, quick credibility scan, done. We build sites that win that credibility check before you ever talk to them: fast, professional, clear offers, and strong local signals." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Seattle terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where the vast majority of your Seattle traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'Can you build pages that speak to Craftsman and Tudor homeowners in Ballard or Capitol Hill?', a: "Yes, and we do. Older Seattle housing stock has specific needs — renovation expertise, historic character preservation, moisture management — and your site should reflect that. We write copy and build pages that speak to those homeowners' real concerns, not a generic contractor template." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Seattle site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'seattle', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Seattle Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Seattle website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in a tech-savvy market.',
    eyebrow: 'Website Redesign · Seattle, WA',
    h1: 'Redesign your Seattle website without losing your rankings',
    h2Exact: 'Seattle Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Seattle contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Seattle contractor sites for speed and credibility, build them to win the fast-decision buyers this market is full of, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Seattle site is overdue for a redesign",
    painPoints: [
      { title: "It loses the credibility test in seconds", body: "Seattle's tech-workforce homeowners judge a contractor by their website before they do anything else. A slow, dated, or generic site reads as unprofessional instantly — and they move to the next result. A redesigned, polished site wins that first impression and keeps them long enough to call." },
      { title: "It's slow and clunky on a phone", body: "If your site doesn't load fast and work smoothly on mobile, you're losing the majority of your Seattle visitors before they ever see your offer. A mobile-first redesign wins them back." },
      { title: "It doesn't convert the traffic you already have", body: "Traffic that doesn't turn into calls is wasted. An old, generic site in this market gives a visitor no reason to pick you over the next result. We rebuild for conversions — clear offers, easy call buttons, content that speaks to Seattle's rain-driven and energy-efficiency needs — so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, and critical for Seattle's mobile-heavy traffic." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where the vast majority of your Seattle visitors arrive." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and inspires confidence with tech-savvy buyers." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the specific Seattle neighborhoods and Eastside suburbs you serve, so the new site stands out as a credible local option instead of reading like a generic placeholder.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as Seattle's tech-forward buyers shift more of their research to AI.", featured: true },
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
      heading: 'Transparent Seattle redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Seattle?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't passing the credibility test with tech-savvy Seattle buyers, or isn't bringing in leads — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Seattle?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods and suburbs you serve, tune the site for fast mobile load, and make the offer and call button obvious — so the new site wins the credibility check instead of losing it." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Can you rebuild around Eastside suburbs like Bellevue and Redmond?', a: "Absolutely. Bellevue and Redmond homeowners have different expectations than Seattle city buyers — newer homes, higher price points, premium service expectations. We rebuild your site to speak to both audiences and target them with dedicated pages." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const seattleCity = {
  citySlug: 'seattle', city: 'Seattle', state: 'Washington', stateAbbr: 'WA', metro: 'Seattle-Tacoma',

  titleTag: 'Seattle Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Seattle contractors. Get found, get booked, and own your leads — built for a tech-savvy, rain-driven market.',

  eyebrow: 'Seattle · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Seattle contractors found and booked',
  h2Exact: 'Seattle Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Seattle's tech-savvy, rain-driven market. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Seattle audit',

  intro:
    "If you run a contracting business in Seattle, you're fighting for attention in a market shaped by two forces: 155+ rainy days a year that drive constant demand for roofing, drainage, waterproofing, and restoration, and a tech-workforce homeowner base that makes fast, credibility-driven decisions on their phones. Winning here takes three things working together: a site that passes the credibility test, SEO that ranks you for what people search when the rain hits, and local SEO that puts you in the Map Pack for the neighborhoods and suburbs you serve. Here's how we help Seattle contractors do exactly that.",
  aioQuestion: 'How do Seattle contractors get more leads online?',
  aioAnswer:
    "Seattle contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because Seattle buyers are tech-forward and make quick decisions based on credibility, and because rain drives year-round demand for roofing, drainage, and restoration work, contractors who rank well with a professional online presence win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Seattle searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood from Ballard to Bellevue.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers search — including the rain-driven roofing, drainage, and waterproofing terms that define Seattle demand — and build an asset you own instead of renting traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites that win the credibility check tech-savvy Seattle buyers run in seconds — and then turn those visitors into booked jobs, not just traffic.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed, credibility, and conversions — and migrate it carefully so you keep every ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Seattle?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads in a market driven by constant rain demand and fast-deciding tech-workforce buyers." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, electrical, restoration, waterproofing, drainage, heat pumps, solar, and general contractors — so we understand the rain-driven demand cycles and energy-efficiency priorities that define the Seattle market." },
    { q: 'Why does the Seattle market need a different approach?', a: "Two things. First, 155+ rainy days a year make roofing, drainage, moss treatment, waterproofing, and restoration year-round conversations — not seasonal spikes — so your SEO needs to reflect that. Second, Seattle is dominated by Amazon and Microsoft workers who are quick credibility scanners: they do a fast search, look at the top results, and pick whoever looks most professional. Generic national SEO and a mediocre website lose that decision every time." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Seattle areas do you serve?', a: "All of Seattle's neighborhoods plus the surrounding suburbs — Capitol Hill, Fremont, Ballard, Queen Anne, Wallingford, West Seattle, Beacon Hill, and Rainier Beach inside the city, plus Bellevue, Redmond, Kirkland, Issaquah, Renton, and Federal Way." },
    { q: 'Where should I start?', a: "Start with a free Seattle audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

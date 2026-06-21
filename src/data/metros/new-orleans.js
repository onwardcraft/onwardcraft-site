// NEW ORLEANS — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across New Orleans's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// NEW ORLEANS — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in New Orleans is unlike any other market in America',
  body:
    "New Orleans sits below sea level in the wettest, most hurricane-exposed major metro in the country. After Katrina in 2005, Ida in 2021, and a long list of storms in between, roofing, restoration, flood remediation, and foundation work aren't seasonal niches here — they're year-round industries that spike violently every time a storm tracks toward the Gulf. The contractors who are already ranking when the storm hits capture virtually all of the emergency work. The ones who aren't visible get nothing. Beyond storms, the Gulf humidity is relentless: HVAC systems run harder here than anywhere else in the country, mold is a permanent threat to every structure, and building materials degrade faster than the national average. Pair that with a housing stock full of historic shotgun houses, raised Creole cottages, and grand Garden District mansions — all requiring specialty renovation expertise — and you have a market where generic national contractors can't compete and local specialists who rank win an outsized share. The metro is roughly 61% Black and African American, with a growing Hispanic community at about 17%, and deeply rooted Creole and French-influenced culture that shapes how homeowners search, who they trust, and what they value.",
  pullQuote: 'In New Orleans, the next storm is never far away — and the contractors already ranking when it hits capture all the work.',
  donut: {
    title: 'New Orleans community makeup',
    value: 61,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 61, kind: 'teal' },
      { label: 'Other', pct: 39, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hurricane season (Jun–Nov, peak Aug–Oct) drives the sharpest surges',
  seasonalDemand: [
    { m: 'J', v: 50 }, { m: 'F', v: 48 }, { m: 'M', v: 55 },
    { m: 'A', v: 60 }, { m: 'M', v: 70 }, { m: 'J', v: 85, peak: true },
    { m: 'J', v: 92, peak: true }, { m: 'A', v: 100, peak: true }, { m: 'S', v: 96, peak: true },
    { m: 'O', v: 88, peak: true }, { m: 'N', v: 78, peak: true }, { m: 'D', v: 55 },
  ],
  stats: [
    { value: '~1.3M', label: 'people across the greater New Orleans metro' },
    { value: '#1', label: 'most hurricane-exposed major US city, driving massive restoration demand', accent: true },
    { value: 'Jun–Nov', label: 'hurricane season — the longest and most intense trade-demand window in the country' },
    { value: 'Below', label: 'sea level — making flooding and drainage a permanent, year-round reality' },
  ],
  neighborhoods: [
    'Garden District', 'Uptown', 'Mid-City', 'Tremé', 'Lakeview',
    'Metairie', 'Kenner', 'Gretna', 'Chalmette', 'Slidell',
    'Mandeville', 'Algiers', 'Gentilly', 'Marigny', 'Bywater',
  ],
};

const AREAS = [
  'Garden District', 'Uptown', 'Mid-City', 'Tremé', 'Lakeview',
  'Metairie', 'Kenner', 'Gretna', 'Chalmette', 'Slidell',
  'Mandeville', 'Algiers', 'Gentilly', 'Marigny', 'Bywater',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that two or three of their competitors bought too. In a storm-driven market like New Orleans, that's even worse — when Ida hit, the contractors with real Google rankings owned that work. The ones paying for shared leads fought over scraps. So the whole point of what we do here is to get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand storm-cycle demand',
    body: "Roofing, restoration, HVAC, waterproofing, foundation, mold remediation. We understand how New Orleans demand works — the pre-storm scramble, the post-storm surge, and the relentless year-round humidity jobs — and we build your SEO around it so you're ranking before the season, not chasing it after.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners two other contractors already called back.",
  },
  {
    title: 'We actually know New Orleans',
    body: "Neighborhood-by-neighborhood targeting from the Garden District to Gentilly to Slidell, built around the historic housing stock, the culture, and the community that national shops can't replicate by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a New Orleans contractor gets around 1,500 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a fully booked calendar — and in a storm-driven market where everyone searches at once after a hurricane, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'New Orleans', state: 'Louisiana', stateAbbr: 'LA', metro: 'New Orleans',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const newOrleansLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'new-orleans', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'New Orleans Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in New Orleans and three businesses show up on the map. We get you into those three before hurricane season hits. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · New Orleans, LA',
    h1: 'When New Orleans searches for what you do, be the first name they find',
    h2Exact: 'New Orleans Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a storm-driven market where every homeowner searches at once after a hurricane, the contractors already in those top three own the surge. We get you there before the season starts.",
    primaryCta: 'Get my free New Orleans audit',
    intro:
      "New Orleans local SEO comes down to one thing: when a homeowner in Lakeview or Metairie or the Garden District searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. In a market shaped by hurricanes, relentless Gulf humidity, and a historic housing stock that demands real local expertise, becoming one of those three in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do New Orleans businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real New Orleans neighborhoods. The New Orleans market is unique because storm and restoration demand spikes fast and hard — the contractors already ranking when a hurricane makes landfall capture virtually all of the emergency work. Getting into the top three before hurricane season is the highest-return move a New Orleans contractor can make.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? In a storm-hit market they get the overwhelming majority of the clicks — and when an entire neighborhood gets flooded or loses a roof, every homeowner is searching at once. If you're not one of the top three, you're invisible during the biggest demand surges of the year. Getting into that top three for your neighborhoods is usually the single highest-return move a New Orleans contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same New Orleans homeowner to three or four contractors, then bill each of you to fight over them. After a storm, the platform prices go up and the competition gets worse. Local SEO builds the opposite: a lead finds you directly, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible before the storm hits", body: "Storm and restoration demand surges overnight. If you start trying to rank after the hurricane makes landfall, it's too late — the contractors who were already there took the calls. The only way to own post-storm demand is to be visible before the season starts, so when searches spike you're already in the top three." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which New Orleans searches you should win — roofing, restoration, HVAC, waterproofing, and more." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone after a storm, when trust matters most." },
      { name: 'Neighborhood pages', desc: "Real pages for Lakeview, Metairie, Garden District, Mid-City, Chalmette and the rest, so you rank for the neighborhood someone's actually searching, not just \"New Orleans.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from New Orleans sources Google trusts — local press, neighborhood associations, trade partners. This is what separates page one from page two here." },
      { name: 'Storm and restoration SEO', desc: "We rank you for the roofing, flood remediation, and restoration terms that explode in demand during and after hurricane season, so you're visible when the calls start flooding in.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your neighborhoods and pin down which competitors are beating you in the Map Pack and why — including how they're positioned for storm season." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now — before June — over starting in August when demand has already spiked." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the communities you serve, plus storm and restoration content that ranks for the terms that matter most here." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several New Orleans neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro — including storm season.', features: ['Everything in Local Growth', 'Local link building', 'Storm and restoration SEO', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in New Orleans?', a: "Most New Orleans engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive New Orleans keywords — roofing, restoration, HVAC — usually take 90 to 180 days of steady work, because reviews and citations compound over time. That means the best time to start is before hurricane season, not after it's already started." },
      { q: 'What makes New Orleans local SEO different from other cities?', a: "Two things most markets don't have. First, storm-driven demand spikes fast and hard — when a hurricane makes landfall, the entire city searches for roofing and restoration at once, and the contractors already in the top three own that wave. Second, the housing stock is unlike anywhere else: shotgun houses, Creole cottages, raised foundations, Garden District mansions — all requiring local expertise that national chains can't offer. We build your local SEO around both realities." },
      { q: 'Should I start before hurricane season?', a: "Yes, and it matters more in New Orleans than anywhere else. Local SEO takes 90 to 180 days to build real traction. If you start in August when a storm is already in the Gulf, you've missed the window. The contractors who rank in June own the summer. We help you get there in time." },
      { q: 'Which areas do you cover?', a: "All the major New Orleans neighborhoods and the broader metro — Garden District, Uptown, Mid-City, Lakeview, Tremé, Metairie, Kenner, Gretna, Chalmette, Slidell, Mandeville, and more. We build genuine neighborhood pages instead of one generic New Orleans page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, restoration, HVAC, waterproofing, foundation, plumbing, mold remediation, solar, electrical, and general contractors. We understand storm-cycle demand, the historic housing stock, and the insurance-claim jobs that define the New Orleans market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at prices that spike after every storm, sold to multiple contractors fighting over the same homeowner. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business — including how your positioning looks heading into hurricane season. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'new-orleans', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'New Orleans SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'New Orleans SEO that ranks contractors on Google before hurricane season hits. Revenue-tied reporting, no lock-in contracts, built for a storm-driven market. Free SEO audit.',
    eyebrow: 'SEO Services · New Orleans, LA',
    h1: 'Get your New Orleans business to the top of Google and keep it there',
    h2Exact: 'New Orleans SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your New Orleans customers search and the leads keep coming — including when the whole city searches at once after a storm. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free New Orleans SEO audit',
    intro:
      "New Orleans SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. In a market shaped by hurricane season, relentless Gulf humidity, and a historic housing stock that demands real local expertise, we get contractors ranking for the money keywords and measure it in leads, not vanity traffic.",
    aioQuestion: 'How do New Orleans businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific neighborhoods and the unique New Orleans housing stock, and earning links from trusted local sources. In this market, ranking for storm and restoration terms before hurricane season — not after — is one of the highest-return moves a contractor can make. The work has to be in place months ahead of the surge.",
    problemHeading: "Three reasons your New Orleans site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market where roofing contractors, restoration companies, and HVAC shops all compete hard, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. After a major storm, New Orleans ad costs spike as every contractor in the market competes for the same clicks. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost — including through the next storm season." },
      { title: "You're not ranking for the demand that matters", body: "New Orleans demand is unlike any other market. Storm restoration, roof repair, flood remediation, and HVAC searches can spike 10x overnight when a hurricane approaches. The contractors who rank for those terms ahead of time catch the entire surge. If your SEO ignores storm-season searches, you're leaving your most profitable weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your New Orleans customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including storm-prep and restoration content that stays relevant year-round." },
      { name: 'Link building', desc: "Authority from real New Orleans and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm and restoration SEO', desc: "We rank you for the roofing, flood remediation, mold, and restoration searches that explode during hurricane season, so you're visible before demand spikes, not chasing it after the storm passes.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real New Orleans leads — with storm-season timing built into the plan." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm, restoration, and humidity-driven terms that define this market." },
      { name: 'Build authority', desc: "Links and citations from trusted New Orleans and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent New Orleans SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own New Orleans search — including storm season.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm and restoration SEO', 'Multi-area pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in New Orleans?', a: "Most New Orleans SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in New Orleans?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6. That timing matters in New Orleans more than most markets: if you want to rank for roofing and restoration when hurricane season peaks in August and September, you need to start no later than March or April. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying — and in New Orleans, ad costs spike dramatically after every storm when every contractor floods the platform. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term gaps." },
      { q: 'Should my New Orleans SEO target storm and restoration demand?', a: "Absolutely, and this is the most important thing to understand about this market. When a hurricane approaches, searches for roofing, restoration, flood remediation, and mold remediation can spike 10x in 24 hours. But ranking takes months to build — you have to be in place before the season starts, not trying to rank after the storm hits. We optimize for those terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around New Orleans do you cover?', a: "All the neighborhoods and the broader metro — Garden District, Uptown, Mid-City, Lakeview, Tremé, Metairie, Kenner, Gretna, Chalmette, Slidell, Mandeville and more — with genuine local pages rather than one generic New Orleans page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially after a storm, when platform costs are highest." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business — including how your storm-season positioning looks. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'new-orleans', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'New Orleans Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'New Orleans web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a storm-driven market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · New Orleans, LA',
    h1: 'New Orleans web design that turns visitors into booked jobs',
    h2Exact: 'New Orleans Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build New Orleans contractors fast, mobile-first sites engineered to turn visitors into booked work — and to stand out when storm season sends every homeowner searching at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Most New Orleans contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that speaks to the neighborhoods or housing stock you specialize in. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and convert Garden District homeowners, Lakeview flood victims, and Metairie families into booked jobs — built to win when competition is fiercest.",
    aioQuestion: 'What makes a good contractor website in New Orleans?',
    aioAnswer:
      "A good New Orleans contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve. It should speak to the realities of this market — storm preparedness, historic homes, the humid Gulf climate — because that's what New Orleans homeowners actually care about. Mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next contractor — and in a storm-driven market, the next contractor is one tap away and may have just flooded the area with door hangers. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your New Orleans visitors are on mobile, and they bounce if your site takes more than a few seconds to load. After a storm, they're searching frantically while managing stress and damage — they won't wait. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to your neighborhood or the housing stock", body: "A homeowner in the Garden District with a historic raised cottage wants to see that you work on homes like theirs — not a generic page that could be for any contractor anywhere. We build sites that name the neighborhoods you work and speak to the architecture and challenges that make New Orleans unique." },
    ],
    servicesHeading: "What's in an OnwardCraft New Orleans website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your neighborhoods, the historic New Orleans housing stock, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your New Orleans traffic is — especially when homeowners are searching from a storm-damaged property." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners dealing with storm damage, humidity problems, or historic-home renovation challenges — not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the neighborhoods and communities you serve — from Lakeview to Chalmette to Mandeville — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want — including how storm-season demand shapes what homeowners need to see." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent New Orleans web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services or neighborhoods.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in New Orleans?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out when storm season brings everyone searching at once?', a: "That's exactly what we design for in New Orleans. When a storm hits and every homeowner is searching from their phone, your site needs to load instantly, show your credibility immediately, and make it dead simple to call or request a quote. We build around that scenario because it's the most important moment in the New Orleans contractor calendar." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive New Orleans terms before hurricane season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your New Orleans traffic comes from — especially during and after storm events when homeowners are searching from their yards or hotel rooms." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting New Orleans contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'new-orleans', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'New Orleans Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your New Orleans website without losing rankings. Faster, mobile-first rebuilds that convert more visitors in a storm-driven market. Free redesign audit.',
    eyebrow: 'Website Redesign · New Orleans, LA',
    h1: 'Redesign your New Orleans website without losing your rankings',
    h2Exact: 'New Orleans Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, invisible to homeowners searching after a storm. We redesign New Orleans contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign New Orleans contractor sites for speed and conversions, build them to speak to a storm-driven, historically-rich market, and migrate with the redirects and SEO care that protect the traffic you already have — so when the next hurricane season starts, you're stronger than before.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — which matters especially in New Orleans, where storm-season search demand can spike overnight.",
    problemHeading: "Signs your New Orleans site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing job or a major storm restoration project, New Orleans homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better and you've been in the neighborhood for years." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your New Orleans visitors before they ever see your offer — and after a storm, when they're searching from a damaged home or a hotel, they won't wait. A redesign built mobile-first wins them back." },
      { title: "It doesn't speak to storm-ready, restoration-focused homeowners", body: "Traffic that doesn't turn into calls is wasted — and a generic old site gives a visitor no reason to pick you after a storm when a dozen other contractors are reaching out. We rebuild for conversions and for the neighborhoods you actually serve, so the right buyers choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your New Orleans traffic lives — and where storm-stressed homeowners search." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the scale of your jobs." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the neighborhoods and communities you serve — Garden District, Lakeview, Metairie, Chalmette and beyond — so the new site stands out instead of reading like every other contractor's.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with storm-season timing factored into the launch plan." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop — ideally completing well before hurricane season ramps up." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent New Orleans redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in New Orleans?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — which matters enormously heading into hurricane season." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage. We recommend starting early enough to launch well before June so your new site is seasoned and ranking when storm season hits." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, or doesn't speak to the storm-restoration and historic-home work that defines New Orleans, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete when storm demand spikes?', a: "Yes, and that's a core goal in New Orleans. When a storm hits and homeowners are searching frantically on their phones, your site needs to load instantly, inspire trust immediately, and make the next step obvious. We rebuild around that moment — because in this market it's the most important moment of the year." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan — including how to time the launch for maximum impact before hurricane season." },
    ],
  },
];

export const newOrleansCity = {
  citySlug: 'new-orleans', city: 'New Orleans', state: 'Louisiana', stateAbbr: 'LA', metro: 'New Orleans',

  titleTag: 'New Orleans Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for New Orleans contractors. Get found before the next storm, own your leads instead of renting them, and rank across every neighborhood. Free audit.',

  eyebrow: 'New Orleans · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets New Orleans contractors found and booked',
  h2Exact: 'New Orleans Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for New Orleans's storm-driven, historically-rich, year-round market. One team to get you ranking before hurricane season, converting year-round, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free New Orleans audit',

  intro:
    "If you run a contracting business in New Orleans, you're operating in the most hurricane-exposed major US city in the country — where roofing, restoration, flood remediation, and HVAC are enormous year-round businesses, not niches. The contractors who rank before a storm hits capture all the emergency work. Add a housing stock full of historic shotgun houses, raised Creole cottages, and grand Garden District mansions that demand real local expertise, plus relentless Gulf humidity that drives constant HVAC and mold remediation demand, and you have a market where local visibility isn't optional — it's everything. Winning here takes three things working together: a site that converts, SEO that ranks you before the season peaks, and local SEO that puts you on the map neighborhood by neighborhood. Here's how we help New Orleans contractors do exactly that.",
  aioQuestion: 'How do New Orleans contractors get more leads online?',
  aioAnswer:
    "New Orleans contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including storm, restoration, and humidity-driven terms — and local SEO that wins the Google Map Pack neighborhood by neighborhood. The most important timing factor in this market is building those rankings before hurricane season starts in June, because by the time a storm is in the Gulf it's too late to start ranking.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when New Orleans searches \"near me.\" In a storm-driven market, the contractors already in those three spots own the surge. We get you there before the season starts.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — roofing, restoration, HVAC, waterproofing — and build an asset you own instead of renting traffic from ads that spike in price after every storm.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — built to speak to storm-stressed homeowners, historic-home owners, and everyone dealing with the relentless Gulf humidity.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've earned — ideally landing before the next hurricane season begins.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in New Orleans?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially heading into hurricane season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, restoration, HVAC, waterproofing, foundation, plumbing, mold remediation, solar, electrical, and general contractors — so we understand storm-cycle demand, the historic New Orleans housing stock, and the insurance-claim jobs that define this market." },
    { q: 'Why does the New Orleans market need a different approach?', a: "Because it's unlike any other US city. New Orleans is the most hurricane-exposed major metro in the country, sits below sea level making flooding a permanent reality, has the most intense Gulf humidity in the US driving constant HVAC and mold demand, and has a historic housing stock that demands real local expertise. Winning here means ranking for storm and restoration terms before the season hits — and that takes months to build." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which New Orleans areas do you serve?', a: "All the major neighborhoods and the broader metro — Garden District, Uptown, Mid-City, Lakeview, Tremé, Metairie, Kenner, Gretna, Chalmette, Slidell, Mandeville, Algiers, Gentilly, Marigny, Bywater and more." },
    { q: 'Where should I start?', a: "Start with a free New Orleans audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work — and whether your storm-season positioning is where it needs to be before June. No pitch deck, just a plan." },
  ],
};

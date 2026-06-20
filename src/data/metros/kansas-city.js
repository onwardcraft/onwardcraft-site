// KANSAS CITY — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Kansas City's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// KANSAS CITY — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Kansas City is its own game',
  body:
    "Kansas City sits squarely in the most severe hail belt in the United States. Every spring and early summer, storms drop golf-ball and baseball-sized hail across both the Missouri and Kansas sides of the metro, and the phones at roofing and restoration companies ring off the hook for weeks. That single weather pattern drives more emergency home-services demand here than almost anywhere else in the country — and the contractors who already own the search results when the storm hits are the ones who book the work. Beyond hail, Kansas City's extreme seasonal swings mean HVAC contractors face peak AC demand from June through August and peak heating demand from December through February. Add in tornado-season restoration events and the city's fast-growing high-income suburbs — Overland Park, Olathe, Lee's Summit, Liberty — and you have a market with constant, intense demand for home services on both sides of a state line. The two-state geography matters: a homeowner in Overland Park searching in Kansas and one in Blue Springs searching in Missouri are different local targets, and winning both requires targeting each side deliberately.",
  pullQuote: 'When a hail storm rolls through, the contractors already ranking on the map pick up every call. Everyone else gets voicemail.',
  donut: {
    title: 'How Kansas City splits across state lines',
    value: 45,
    centerLabel: 'of metro on KS side',
    legend: [
      { label: 'Kansas side (Overland Park, Olathe, Lenexa, Shawnee)', pct: 45, kind: 'teal' },
      { label: 'Missouri side (KCMO, Lee\'s Summit, Independence, Liberty)', pct: 55, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm roofing (Apr–Jun, Aug–Sep), HVAC (Jun–Aug, Dec–Feb), ice storm emergencies (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 72, peak: true }, { m: 'F', v: 68, peak: true }, { m: 'M', v: 60 },
    { m: 'A', v: 88, peak: true }, { m: 'M', v: 95, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 85, peak: true }, { m: 'A', v: 82, peak: true }, { m: 'S', v: 78, peak: true },
    { m: 'O', v: 50 },
    { m: 'N', v: 58 }, { m: 'D', v: 75, peak: true },
  ],
  stats: [
    { value: '2.2M', label: 'people across the Kansas City metro' },
    { value: 'Hail Capital', label: 'of the US — the worst hail belt runs right through KC', accent: true },
    { value: 'Two states', label: 'Missouri and Kansas — one metro, two local search markets' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks after a storm' },
  ],
  neighborhoods: [
    'Westport', 'Crossroads', 'River Market', 'Plaza', 'Brookside',
    'Waldo', 'Lee\'s Summit', 'Blue Springs', 'Independence', 'Overland Park',
    'Olathe', 'Lenexa', 'Shawnee', 'Liberty', 'Raytown',
  ],
};

const AREAS = [
  'Kansas City MO', 'Overland Park KS', 'Olathe KS', 'Lee\'s Summit', 'Independence',
  'Blue Springs', 'Liberty', 'Lenexa KS', 'Shawnee KS', 'Westport',
  'Crossroads', 'River Market', 'Brookside', 'Waldo', 'Raytown',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching great contractors lose their busiest weeks — hail events, heat waves, ice storms — to whoever happened to rank first on Google that morning. You can't build a business on rented leads from Angi or Thumbtack when a competitor you've never heard of takes the same job for less. So that's what we do: get you owning your search visibility in the specific Kansas City zip codes and suburbs you serve, on both sides of the state line, before the next storm hits. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand hail-season roofing surges, tornado restoration emergencies, summer AC rushes, and ice-storm plumbing calls — so everything we build is shaped around how Kansas City customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when storm season means you could be booking solid for weeks on organic calls alone.",
  },
  {
    title: 'We actually know both sides of the state line',
    body: "Kansas City straddles Missouri and Kansas, and local search treats them differently. We target Overland Park and Olathe separately from Lee's Summit and Independence, so you rank where your customers actually are — not just in a generic \"Kansas City\" that covers neither side well.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Kansas City contractor gets around 1,800 local \"near me\" impressions a month across a handful of suburbs and neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and after a major hail event, that gap can mean tens of thousands of dollars in missed work. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO', metro: 'Kansas City',
  heroProof: ['Built for the trades', 'Both sides of the state line', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const kansasCityLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Kansas City Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Kansas City and three businesses show up on the map. We get you into those three — on both sides of the state line — so the call lands with you after every storm. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Kansas City',
    h1: 'When Kansas City searches for what you do, be the first name they find',
    h2Exact: 'Kansas City Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a metro where hail storms send a thousand homeowners searching for roofers overnight, we get you into that top three on both the Missouri and Kansas sides — so the call lands with you.",
    primaryCta: 'Get my free Kansas City audit',
    intro:
      "Kansas City local SEO comes down to one thing: when a homeowner in Overland Park or Lee's Summit searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a two-state market with ferocious hail-season demand, fast-growing suburbs, and homeowners who prefer local businesses over national chains — and becoming one of those three in the neighborhoods you serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Kansas City businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Kansas City suburbs and neighborhoods on both sides of the state line. Kansas City's two-state geography means you need to target Missouri and Kansas separately — Overland Park and Olathe rank differently from Lee's Summit and Blue Springs. And because hail and storm demand can spike overnight, contractors who are already ranking when the weather hits capture all the work.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map when it matters most', body: "After a hail storm rolls through Kansas City, homeowners flood Google searching for roofers. See those three businesses Google pins to the map? They get the overwhelming majority of the calls. If you're not one of them — across both sides of the state line — it almost doesn't matter how good your work is. Getting into that top three for your key suburbs and zip codes is the single highest-return move a Kansas City contractor can make, and it has to be built before the storm, not after." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Kansas City homeowner to three or four contractors, then bill each of you to fight over them. Local SEO builds the opposite: a homeowner in Overland Park finds you, calls you, and nobody else got it. Over storm season that difference compounds dramatically." },
      { title: "You're targeting one state when your customers are in two", body: "Kansas City spans Missouri and Kansas, and Google local search treats them as separate markets. A contractor who ranks well in Kansas City MO can be invisible in Overland Park KS — even though they're 20 minutes apart. Winning both sides of the metro means targeting each state's suburbs deliberately, not hoping a single generic listing covers it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Kansas City searches you should win — on both sides of the state line." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners call you after the next storm." },
      { name: 'Suburb and neighborhood pages', desc: "Real pages for Overland Park, Olathe, Lee's Summit, Blue Springs, Liberty and more, so you rank for the specific area someone's actually searching — not just \"Kansas City.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Kansas City sources Google trusts — local press, trade associations, chambers, partners. This is what separates page one from page two here." },
      { name: 'Two-state targeting', desc: "Kansas City spans Missouri and Kansas. We optimize for both sides separately so you rank in Overland Park and Olathe just as well as in Lee's Summit and Independence.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Kansas City suburbs and zip codes — on both sides of the state line — and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before hail season." },
      { name: 'Add local content', desc: "Suburb and service-area pages across the Missouri and Kansas sides, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb or zip code." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses targeting suburbs on both sides of the state line.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb and neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the full KC metro.', features: ['Everything in Local Growth', 'Local link building', 'Two-state MO/KS targeting', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Kansas City?', a: "Most Kansas City engagements land between $750 and $2,500 a month, depending on how many suburbs, zip codes, and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Kansas City keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes Kansas City local SEO different from other markets?', a: "Two things mainly. The two-state geography means Missouri and Kansas are separate local search markets — you have to target each side deliberately or you're invisible on one of them. And the intense hail and storm season creates demand spikes where whoever is already ranking books all the work. Building your Map Pack presence before the weather hits is the whole game." },
      { q: 'Can you help me rank in both Missouri and Kansas?', a: "Yes, and in Kansas City that's essential. We target your Google Business Profile and local pages for both sides of the metro separately — Overland Park, Olathe, Lenexa, and Shawnee on the Kansas side; Lee's Summit, Blue Springs, Independence, and Liberty on the Missouri side. A single generic listing won't cover both." },
      { q: 'Which areas do you cover?', a: "The full Kansas City metro on both sides of the state line — Kansas City MO, Overland Park KS, Olathe KS, Lee's Summit, Independence, Blue Springs, Liberty, Lenexa KS, Shawnee KS, Westport, Brookside, Crossroads, River Market, and more. We build genuine suburb and neighborhood pages instead of one generic Kansas City page, because that's what actually ranks for specific area searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hail-season roofing surges, tornado restoration events, summer AC rushes, and ice-storm emergencies, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time — and especially after hail events and storm season — you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across both sides of the state line, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Kansas City SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Kansas City SEO that ranks contractors on Google and brings in leads you own — on both sides of the state line. Revenue-tied reporting, no lock-in. Free Kansas City SEO audit.',
    eyebrow: 'SEO Services · Kansas City',
    h1: 'Get your Kansas City business to the top of Google and keep it there',
    h2Exact: 'Kansas City SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Kansas City customers search and the leads keep coming — especially when hail season hits and your phone should be ringing for weeks. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Kansas City SEO audit',
    intro:
      "Kansas City SEO comes down to one question: when someone in Overland Park or Lee's Summit searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across this two-state metro — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Kansas City businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Kansas City suburbs on both sides of the state line, and earning links from trusted local sources. In this market, ranking ahead of hail and storm season — so you're already on page one when homeowners start searching after a weather event — is one of the highest-leverage moves any contractor can make.",
    problemHeading: "Three reasons your Kansas City site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two when demand spikes", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. After a major hail event, homeowners flood search and call whoever is already visible. If you're not in the top handful of results when that happens, it doesn't matter how good your work is — the leads go to the contractors who already ranked." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a market with reliable seasonal demand spikes, owning those rankings is dramatically more valuable than renting them." },
      { title: "You're not ranking for both sides of the metro", body: "Kansas City spans two states and Google treats them as separate markets. A contractor who ranks well in Kansas City MO can be essentially invisible to homeowners searching in Overland Park KS or Olathe KS. Winning the full metro means building SEO for both sides deliberately." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Kansas City customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Kansas City and industry sources. In a competitive market with a high-spend suburban base, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs — on both the Missouri and Kansas sides." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm-season and emergency SEO', desc: "We rank you for the hail, tornado, and HVAC emergency searches that drive Kansas City's busiest weeks — so you're visible before demand spikes, not scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across both sides of the state line, then build a roadmap around the keywords most likely to drive real Kansas City leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm-season and emergency terms that matter most here." },
      { name: 'Build authority', desc: "Links and citations from trusted Kansas City and industry sources to push competitive keywords onto page one on both sides of the metro." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Kansas City SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across suburbs and both states.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Kansas City search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm-season & emergency SEO', 'Multi-suburb / two-state targeting', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Kansas City?', a: "Most Kansas City SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Kansas City?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb-level terms and slower on the most competitive citywide keywords. SEO compounds, so the gains keep building the longer you run it — which is why starting before hail season matters so much." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. In Kansas City, where storm demand spikes are predictable every spring and summer, owning those rankings before the event is worth far more than buying ads after." },
      { q: 'Should my Kansas City SEO target storm and hail season?', a: "Absolutely. After a major hail event, homeowners flood search and call whoever ranks first. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those hail, tornado restoration, and emergency HVAC terms ahead of time so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-season targeting and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Can you help me rank on both the Missouri and Kansas sides?', a: "Yes. The two-state geography is one of the defining features of this market and we build for both sides deliberately — targeting Overland Park, Olathe, and Lenexa on the Kansas side alongside Lee's Summit, Blue Springs, and Independence on the Missouri side." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads — especially during storm season when the demand is already there." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across both sides of the state line, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Kansas City Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Kansas City web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors on both sides of the state line. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Kansas City',
    h1: 'Kansas City web design that turns visitors into booked jobs',
    h2Exact: 'Kansas City Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Kansas City contractors fast, mobile-first sites engineered to turn visitors into booked work — including the homeowners in Overland Park and Olathe who search after every hail storm.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Kansas City contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer for the suburb the visitor is searching from. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Westport to Overland Park into booked jobs — built to win a two-state market where local identity matters and homeowners prefer businesses they recognize.",
    aioQuestion: 'What makes a good contractor website in Kansas City?',
    aioAnswer:
      "A good Kansas City contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve on both sides of the state line. Because Kansas City homeowners tend to prefer local businesses over national chains, a site that communicates genuine local presence — not a generic template with the city name swapped in — is what actually converts visitors into calls.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and after a hail storm, the next guy is one tap away. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Kansas City visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the specific suburb they're in", body: "A homeowner in Overland Park wants to see you serve Overland Park — not a generic \"Kansas City\" page that could be anybody in either state. We build sites that name the suburbs and neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Kansas City website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs, and the jobs you actually want — on both sides of the state line." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Kansas City traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners after a hail storm or a heat wave and book the job — not filler text that reads like everyone else's." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages for both Missouri and Kansas." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Two-state suburb pages', desc: "Pages built around the specific Kansas City suburbs you serve — on both sides of the state line — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors on both sides of the state line — then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Kansas City web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Two-state suburb targeting'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Kansas City?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me convert visitors after a hail storm?', a: "That's exactly what we design for. We put a clear offer and call button front and center, write copy that speaks to homeowners with urgent needs, and build the site fast so it doesn't lose anyone who's in a hurry to find help." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages for both Missouri and Kansas. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Kansas City terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Kansas City traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Can you build suburb pages for both the Missouri and Kansas sides?', a: "Yes. We build genuine pages for the specific suburbs you serve — Overland Park and Olathe on the Kansas side, Lee's Summit and Blue Springs on the Missouri side, and everything in between. Those suburb pages are what actually rank for specific area searches." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Kansas City site should include for your trade and your suburbs, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'kansas-city', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Kansas City Website Redesign | More Leads, No Loss | OnwardCraft',
    metaDescription:
      'Redesign your Kansas City website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across both sides of the state line. Free audit.',
    eyebrow: 'Website Redesign · Kansas City',
    h1: 'Redesign your Kansas City website without losing your rankings',
    h2Exact: 'Kansas City Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, invisible to suburbs on the other side of the state line. We redesign Kansas City contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Kansas City contractor sites for speed and conversions, build them to serve both sides of the state line, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — including for both sides of Kansas City's two-state market.",
    problemHeading: "Signs your Kansas City site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing or HVAC job, Kansas City homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Kansas City visitors before they ever see your offer. A redesign built mobile-first wins them back — especially the urgent searchers after a storm." },
      { title: "It only covers one side of the metro", body: "If your site only targets Kansas City MO and ignores the Kansas suburbs — or vice versa — you're handing half the metro to competitors. We rebuild around both sides so you're genuinely visible in Overland Park and Lee's Summit, not just one of them." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today — including whether you're missing an entire side of the state line — so the redesign fixes real problems." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Kansas City traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the pride Kansas City homeowners take in their community." },
      { name: 'Two-state suburb rebuild', desc: "Rebuilt to target both sides of the state line — Missouri and Kansas suburbs — so the new site covers the full metro instead of half of it.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — including any gaps between the Missouri and Kansas sides of your coverage — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Kansas City redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Two-state suburb rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Kansas City?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, doesn't cover both sides of the state line, isn't bringing in leads, or loses visitors to competitors who look more established, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me cover both Missouri and Kansas?', a: "Yes — we rebuild with genuine suburb pages for both sides of the state line, so you're visible in Overland Park and Olathe just as clearly as in Lee's Summit and Blue Springs. One of the most common coverage gaps we fix in Kansas City redesigns." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, which suburbs you're missing on either side of the state line, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const kansasCityCity = {
  citySlug: 'kansas-city', city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO', metro: 'Kansas City',

  titleTag: 'Kansas City Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Kansas City contractors. Get found on both sides of the state line, rank before hail season, and own your leads. Free Kansas City audit.',

  eyebrow: 'Kansas City · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Kansas City contractors found and booked',
  h2Exact: 'Kansas City Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Kansas City's two-state market and hail-season demand — from Overland Park to Lee's Summit. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Both sides of the state line', 'No lock-in contracts'],
  primaryCta: 'Get my free Kansas City audit',

  intro:
    "If you run a contracting business in Kansas City, you're operating in one of the most hail-prone metros in the country, across two states with distinct local search markets. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search on both the Missouri and Kansas sides, and local SEO that puts you in the Map Pack for the specific suburbs you serve — so when the next storm hits, your phone rings. Here's how we help Kansas City contractors do exactly that.",
  aioQuestion: 'How do Kansas City contractors get more leads online?',
  aioAnswer:
    "Kansas City contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across both sides of the state line. Because Kansas City straddles Missouri and Kansas, contractors who target each side deliberately — Overland Park and Olathe separately from Lee's Summit and Independence — reach buyers their competitors miss. And because hail and storm demand spikes predictably every spring and summer, contractors who are already ranking when the weather hits book all the work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Kansas City searches \"near me\" — on both the Missouri and Kansas sides. The single highest-return move for most local contractors, especially before hail season.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers search across the full two-state metro, build an asset you own instead of renting traffic from ads, and measure it in leads — not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — from Westport to Overland Park to Lee's Summit — not brochures that look good and sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, cover both sides of the state line properly, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Kansas City?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank on both sides of the state line, own their leads, and are visible before the next hail event hits." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand hail-season demand surges, tornado restoration events, summer AC rushes, and ice-storm emergencies." },
    { q: 'Why does the Kansas City market need a different approach?', a: "Two big reasons. First, the metro spans two states and Google treats Missouri and Kansas as separate local markets — you have to target each side deliberately. Second, hail and severe storm season drives more concentrated home-services demand here than almost anywhere in the country. Contractors who rank before the storm hits book the work; everyone else misses it." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Kansas City areas do you serve?', a: "The full metro on both sides of the state line — Kansas City MO, Overland Park KS, Olathe KS, Lee's Summit, Independence, Blue Springs, Liberty, Lenexa KS, Shawnee KS, Westport, Crossroads, Brookside, River Market, Waldo, and more." },
    { q: 'Where should I start?', a: "Start with a free Kansas City audit. We'll look at your website, your rankings on both sides of the state line, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

// LANSING — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Lansing's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LANSING — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Lansing takes more than a great reputation',
  body:
    "The Lansing–East Lansing metro sits at the intersection of three powerful demand drivers: a state capital with thousands of recession-resistant government employees, a Big Ten university city with 50,000-plus students generating constant rental and renovation demand, and the legacy of General Motors plants at Lansing Delta Township and Lansing Grand River that built a deep working-class and professional homeowner class. Add Michigan winters — lake-effect snow hammering the area from both Lake Michigan and Lake Huron — and you get a market where contractor phone lines ring hard from November through March on heating emergencies, frozen pipes, and ice damage. Spring thaw along the Red Cedar River and Grand River brings its own wave of flooding and water-damage calls. In between, summer heat drives HVAC demand for the older homes in Old Town, REO Town, and Eastside that form Lansing's renovation belt. The contractors who dominate here are the ones already ranking when the season hits — not the ones scrambling after it.",
  pullQuote: 'Between 50,000 Michigan State students, thousands of state employees, and GM auto workers, Lansing homeowners search for contractors year-round — and the top three map pins take almost all of those calls.',
  donut: {
    title: 'Lansing community snapshot',
    value: 24,
    centerLabel: 'Black/AA',
    legend: [
      { label: 'Black/AA', pct: 24, kind: 'teal' },
      { label: 'Other', pct: 76, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Winter heating/snow damage (Nov–Mar) and spring flooding/thaw (Mar–May)',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 82, peak: true },
    { m: 'A', v: 75, peak: true }, { m: 'M', v: 55 }, { m: 'J', v: 68 }, { m: 'J', v: 72, peak: true },
    { m: 'A', v: 70, peak: true }, { m: 'S', v: 52 }, { m: 'O', v: 54 },
    { m: 'N', v: 78, peak: true }, { m: 'D', v: 86, peak: true },
  ],
  stats: [
    { value: '50K+', label: 'Michigan State University students creating year-round rental and renovation demand' },
    { value: '~24%', label: 'of Lansing residents identify as Black or African American', accent: true },
    { value: 'Nov–Mar', label: 'peak winter season for heating, frozen pipes, and snow damage calls' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the local contractor clicks' },
  ],
  neighborhoods: [
    'Old Town', 'REO Town', 'Eastside', 'East Lansing', 'Haslett',
    'Okemos', 'Dewitt', 'Delta Township', 'Mason', 'Grand Ledge',
    'Waverly', 'Moores Park', 'Washington Square', 'Lansing Heights', 'South Lansing',
  ],
};

const AREAS = [
  'Old Town', 'REO Town', 'Eastside', 'East Lansing', 'Haslett',
  'Okemos', 'Dewitt', 'Delta Township', 'Mason', 'Grand Ledge',
  'Waverly', 'Moores Park', 'Washington Square', 'Lansing Heights', 'South Lansing',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Michigan winter heating emergencies, spring flooding from the Red Cedar River, and the renovation waves rolling through Old Town and REO Town — so everything we build is shaped around how Lansing customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought — especially when those competitors may be right down the street in a city this size.",
  },
  {
    title: 'We actually speak Lansing',
    body: "Neighborhood-by-neighborhood targeting from Eastside to Okemos to Grand Ledge, plus the reach to win searches across the student rental market near MSU and the state-employee homeowner belt near the Capitol. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Lansing contractor gets around 800 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when a Michigan winter hits overnight, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Lansing', state: 'Michigan', stateAbbr: 'MI', metro: 'Lansing-East Lansing',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lansingLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Lansing Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Lansing and three businesses show up on the map. We get you into those three, so the call lands with you. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Lansing-East Lansing',
    h1: 'When Lansing searches for what you do, be the first name they find',
    h2Exact: 'Lansing Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. Whether it's an MSU landlord needing a plumber or a state employee homeowner after a heating emergency, we get you into that top three for your neighborhoods so the call lands with you.",
    primaryCta: 'Get my free Lansing audit',
    intro:
      "Lansing local SEO comes down to one thing: when a homeowner in Old Town or a student-rental landlord in East Lansing searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. With 50,000-plus MSU students driving rental demand, thousands of state employees owning homes near the Capitol, and GM auto workers throughout Delta Township and beyond, the Lansing market runs year-round — and being one of those three map pins is the whole game. Here's how you do it.",
    aioQuestion: 'How do Lansing businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Lansing neighborhoods. In Lansing, the winners target tight service areas — Old Town vs. Okemos vs. Delta Township — show up for seasonal demand spikes during Michigan winters and spring flooding events, and respond fast when heating emergencies hit in November through March.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. If you're not one of them, it almost doesn't matter how good your work is — most Lansing homeowners never see your name. Getting into that top three for your neighborhoods is usually the single highest-return move a Lansing contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Lansing homeowner to four contractors, then bill each of you to fight over them. It's a treadmill, and it means you're competing against neighbors for work that should come to you directly. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when the season hits hardest", body: "Michigan winters are no joke — lake-effect snow, frozen pipes, heating emergencies from November through March, then spring flooding along the Red Cedar and Grand Rivers. The contractors who rank when those calls spike are the ones already in the top three. If you're not ranked before the cold hits, you're chasing a wave your competitors already caught." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Lansing searches you should win — from East Lansing student rentals to Okemos family homes." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Lansing-area directories." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes homeowners pick up the phone when they see your name next to a competitor's." },
      { name: 'Neighborhood pages', desc: "Real pages for Old Town, REO Town, East Lansing, Okemos, Dewitt, Mason, and the rest — so you rank for the neighborhood someone's actually searching, not just \"Lansing.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank, especially on the older sites common among established Lansing tradespeople." },
      { name: 'Local link building', desc: "Mentions and links from Lansing-area sources Google trusts — local press, trade associations, business groups, partners. This is what separates page one from page two in a mid-sized market like this." },
      { name: 'Seasonal demand targeting', desc: "We rank you for the winter heating, frozen-pipe, and ice-damage searches that spike November through March, and for the spring flooding terms that hit along the Red Cedar and Grand Rivers every thaw season.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you when Lansing homeowners search there.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Lansing neighborhoods and pin down which competitors are beating you in the Map Pack and why — whether that's a competitor near MSU, near the Capitol, or out in Delta Township." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks, especially if your current profile is incomplete or listing your address inconsistently." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before the busy season, not after." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Old Town, REO Town, East Lansing, Okemos, Dewitt, Mason, Grand Ledge, and Delta Township, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood or seasonal keyword set." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right across your core Lansing service area.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Lansing neighborhoods and seasonal demand spikes.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the full Lansing-East Lansing metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand targeting', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Lansing?', a: "Most Lansing engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're targeting. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Lansing keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market with real competition is selling you something." },
      { q: 'What makes Lansing local SEO different from a big-city strategy?', a: "Lansing has distinct demand drivers you have to understand: the student-rental and renovation market near MSU in East Lansing, the stable state-employee homeowner base near the Capitol, and the auto-worker neighborhoods around Delta Township. Ranking across all three requires tight neighborhood targeting and seasonal content built around Michigan winters and spring flooding — not a one-size-fits-all approach." },
      { q: 'How should I handle the seasonal demand spikes?', a: "By ranking before they hit. Michigan lake-effect winters drive heating, frozen-pipe, and ice-damage calls hard from November through March. Spring thaw along the Red Cedar and Grand Rivers brings flooding and water-damage work. We optimize for those seasonal terms ahead of time so your busiest weeks land on you, not a competitor who started earlier." },
      { q: 'Which areas do you cover?', a: "The full Lansing-East Lansing metro: Old Town, REO Town, Eastside, East Lansing, Haslett, Okemos, Dewitt, Delta Township, Mason, Grand Ledge, and the neighborhoods in between. We build genuine local pages instead of one generic Lansing page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Michigan heating emergencies, spring flooding events, and the renovation demand that comes from older homes in Old Town, REO Town, and the Eastside — and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly — from Lansing homeowners who found your name first." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Lansing neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Lansing SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Lansing SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a market with year-round seasonal demand. Free audit.',
    eyebrow: 'SEO Services · Lansing-East Lansing',
    h1: 'Get your Lansing business to the top of Google and keep it there',
    h2Exact: 'Lansing SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Lansing customers search and the leads keep coming — through Michigan winters, spring flooding season, and the steady year-round demand driven by MSU and state government. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Lansing SEO audit',
    intro:
      "Lansing SEO comes down to one question: when a homeowner in Okemos or a landlord near MSU searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across the Lansing-East Lansing metro — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Lansing businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Lansing neighborhoods, and earning links from trusted Michigan sources. In Lansing, tight neighborhood targeting and ranking for seasonal heating, flooding, and renovation terms are two of the quickest ways to pull ahead of generalist competitors.",
    problemHeading: "Three reasons your Lansing site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with real competition from contractors serving the MSU rental belt, the state-employee homeowner base, and the GM auto-worker neighborhoods, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. For a market like Lansing where winters bring predictable spikes, owning seasonal rankings is especially valuable." },
      { title: "You're not ranking for the demand that matters", body: "Lansing demand swings hard with the seasons — heating and frozen-pipe emergencies in Michigan winters, spring flooding from the Red Cedar and Grand Rivers, renovation work in older neighborhoods like Old Town and REO Town through summer. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all — including on the older WordPress sites common among established Lansing tradespeople." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Lansing customers search — titles, headings, content, and internal links that signal the neighborhoods and services you cover." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including the seasonal and emergency content that matters here." },
      { name: 'Link building', desc: "Authority from real Lansing and Michigan industry sources. In a mid-sized metro like this, local links from regional press and trade associations often determine who owns page one." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Lansing neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your Lansing SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for the winter heating, frozen-pipe, and ice-damage searches that spike November through March, and the spring flooding terms that hit every thaw season along the Red Cedar and Grand Rivers.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins — especially among younger MSU-area renters and homebuyers.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Lansing leads — organized by neighborhood, service, and season." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, whether your visitors are on phones near campus or desktops in Okemos." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that fire hardest in Michigan winters and spring thaw." },
      { name: 'Build authority', desc: "Links and citations from trusted Lansing and Michigan sources to push competitive keywords onto page one ahead of the busy season." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or neighborhood." },
    ],
    pricing: {
      heading: 'Transparent Lansing SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core Lansing local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and Lansing neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Lansing-East Lansing search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'Multi-neighborhood coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Lansing?', a: "Most Lansing SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Lansing?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on broader Lansing-wide keywords. SEO compounds, so the gains keep building the longer you run it — which is why starting before Michigan's busy winter season pays off." },
      { q: 'Is SEO better than Google Ads for Lansing contractors?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Lansing contractors do best running SEO as the long-term engine and ads for short-term spikes, like the start of heating season in November." },
      { q: 'Should my Lansing SEO target seasonal demand?', a: "Yes, and this matters more in Lansing than many markets. Michigan lake-effect winters drive heating, frozen-pipe, and ice-damage calls hard from November through March. Spring thaw along the Red Cedar and Grand Rivers brings flooding and water-damage work. Ranking takes months to build, so you have to be in place before the season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business — not just classic search. This matters especially for reaching younger homebuyers and renters in the MSU-area market." },
      { q: 'Which areas around Lansing do you cover?', a: "The full Lansing-East Lansing metro — Old Town, REO Town, Eastside, East Lansing, Haslett, Okemos, Dewitt, Delta Township, Mason, Grand Ledge, and the neighborhoods in between — with genuine local pages rather than one generic Lansing page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads that three of your competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today in Lansing, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Lansing Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Lansing web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving MSU, state government, and GM auto-worker neighborhoods. Free quote.',
    eyebrow: 'Web Design · Lansing-East Lansing',
    h1: 'Lansing web design that turns visitors into booked jobs',
    h2Exact: 'Lansing Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Lansing contractors fast, mobile-first sites engineered to turn visitors into booked work — from MSU landlords calling for quick repairs to Okemos homeowners scheduling renovations.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Lansing contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors from Old Town to East Lansing into booked jobs — built to win in a market driven by university demand, state-government stability, and the renovation needs of an affordable rust-belt housing stock.",
    aioQuestion: 'What makes a good contractor website in Lansing?',
    aioAnswer:
      "A good Lansing contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods you serve — East Lansing vs. Okemos vs. Delta Township vs. Old Town. Because most Lansing searches happen on mobile and the market has distinct demand drivers across the metro, naming your service areas and showing you understand local seasonality are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in a market with real competitors serving every corner of the Lansing metro, the next guy is one tap away. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Lansing visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking — especially important when someone's searching during a winter heating emergency and needs help now." },
      { title: "It doesn't speak to your neighborhood", body: "A homeowner in Haslett wants to see you serve Haslett — not a generic \"Lansing\" page that could be anybody. A landlord near MSU wants to know you understand student-rental timelines. We build sites that name the neighborhoods you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Lansing website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Lansing neighborhoods, and the jobs you actually want — from heating and HVAC work to renovation projects in Old Town." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Lansing traffic is. Fast, thumb-friendly, easy to call from — essential when homeowners are searching during a Michigan winter emergency." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step, whether that visitor is an MSU landlord or an Okemos homeowner." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else. We write for the specific worries Lansing customers have — frozen pipes, flooding, aging HVAC systems in older homes." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages covering Old Town to Grand Ledge." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings — including for the older-home renovation pages that tend to have more photos." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Lansing neighborhoods and suburbs you serve — East Lansing, Okemos, Dewitt, Delta Township, Mason, and more — so you stand out instead of blending into one generic Lansing page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search — including from younger MSU-area renters and homebuyers — shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Lansing neighborhoods, your best jobs, and your competitors — whether you're going after the student-rental market, state-employee homeowners, or the renovation wave in Old Town — then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and language tuned to the Lansing customer's real concerns." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting, including before Michigan's busy winter and spring seasons." },
    ],
    pricing: {
      heading: 'Transparent Lansing web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Lansing contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established Lansing contractors with several services or neighborhoods.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location Lansing businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Lansing?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in the Lansing market?', a: "That's the whole point. Lansing has distinct market segments — the MSU rental belt, the state-employee homeowner base, the GM auto-worker neighborhoods, and the older-home renovation market in Old Town and REO Town. We build around the specific segments and neighborhoods you serve so your site connects instead of blending in." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Lansing terms and own the seasonal searches." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Lansing traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb — including for the homeowner searching during a winter heating emergency." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Lansing site should include for your market segment, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'lansing', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Lansing Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Lansing website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — for contractors across the Lansing-East Lansing metro. Free audit.',
    eyebrow: 'Website Redesign · Lansing-East Lansing',
    h1: 'Redesign your Lansing website without losing your rankings',
    h2Exact: 'Lansing Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Lansing contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned before Michigan's busy seasons hit.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Lansing contractor sites for speed and conversions, build them to speak to the specific market segments that drive work here, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured for the seasonal and neighborhood-specific searches that drive Lansing contractor demand.",
    problemHeading: "Signs your Lansing site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job — a heating system replacement, a flood-damage restoration, a full kitchen renovation in an Old Town home — Lansing homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Lansing visitors before they ever see your offer. This matters most when someone's searching during a heating emergency in January and needs a contractor immediately — they're not waiting for a slow site to load." },
      { title: "It doesn't speak to today's Lansing market", body: "Traffic that doesn't turn into calls is wasted. A generic old site gives a visitor no reason to pick you over competitors who've already updated their presence for the MSU-area landlord, the Okemos homeowner, or the Delta Township renovation project. We rebuild for conversions and for the specific market segments you serve." },
    ],
    servicesHeading: "What's in an OnwardCraft Lansing redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems — whether that's slow load times, a buried phone number, or pages that don't speak to the Lansing market segments you serve." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — critical before Michigan's busy winter season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks, with the urgency messaging that works for heating emergencies and flooding events." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially for photo-heavy sites showcasing older-home renovation work." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Lansing traffic lives — including the homeowner searching for emergency help during a January cold snap." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs, whether you're serving the MSU rental market or Okemos luxury renovations." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Lansing neighborhoods and suburbs you serve — Old Town, East Lansing, Dewitt, Delta Township, Mason, and more — so the new site stands out instead of reading like every other contractor's generic page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search — especially among younger Lansing homebuyers and renters — shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — with an eye on the seasonal demand patterns and market segments that drive Lansing contractor work." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — tuned for the Lansing homeowner's expectations and trust signals." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, so your rankings don't slip heading into the busy winter season." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates — including seasonal adjustments before Michigan's winter and spring demand spikes." },
    ],
    pricing: {
      heading: 'Transparent Lansing redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Lansing contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established Lansing contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location Lansing sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Lansing?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them — especially if the new site is faster and better structured for Lansing neighborhood searches." },
      { q: 'How long does a Lansing redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage — and we'll plan around your seasonal calendar if you need to launch before Michigan's winter busy season." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't speak to the specific Lansing market segments you serve — MSU landlords, state-employee homeowners, auto-worker families in Delta Township — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including the seasonal and neighborhood-specific pages that are already earning traffic." },
      { q: 'Will the redesign help me compete in Lansing?', a: "Yes, and that's the point. We rebuild around the specific neighborhoods and market segments you serve, keep the site fast, and make the offer and call button obvious — so the new site stands out to Lansing homeowners instead of blending into the generic contractor crowd." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — especially important when someone's searching on a phone during a Michigan winter heating emergency." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix for your specific Lansing market position, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const lansingCity = {
  citySlug: 'lansing', city: 'Lansing', state: 'Michigan', stateAbbr: 'MI', metro: 'Lansing-East Lansing',

  titleTag: 'Lansing Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Lansing contractors. Get found, get booked, and own your leads — built for the MSU market, state capital stability, and Michigan\'s demanding seasons. Free audit.',

  eyebrow: 'Lansing · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Lansing contractors found and booked',
  h2Exact: 'Lansing Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Lansing's mix of university demand, state-government stability, and GM auto-worker neighborhoods. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Lansing audit',

  intro:
    "If you run a contracting business in Lansing, you're operating in a market with more depth than most people realize: 50,000-plus MSU students and landlords driving constant rental and renovation demand in East Lansing, thousands of state-government employees forming a recession-resistant homeowner base near the Capitol, and a GM auto-worker heritage that built the working-class neighborhoods throughout Delta Township and beyond. Add Michigan's lake-effect winters — one of the most demanding heating seasons in the Midwest — and spring flooding along the Red Cedar and Grand Rivers, and you have a market that runs year-round for the contractors who rank when demand spikes. That takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve. Here's how we help Lansing contractors do exactly that.",
  aioQuestion: 'How do Lansing contractors get more leads online?',
  aioAnswer:
    "Lansing contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. The contractors who dominate the Lansing market target distinct segments — the MSU rental belt, the state-employee homeowner base, the GM auto-worker neighborhoods — and rank for the seasonal terms that spike hardest during Michigan winters and spring flooding season.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Lansing searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, and timed to Michigan's demanding seasons.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including seasonal heating, flooding, and renovation terms — build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — from MSU landlords needing quick repairs to Okemos homeowners scheduling renovations — not brochures that just sit there.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned heading into Lansing's busy seasons.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Lansing?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Lansing-East Lansing metro." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Michigan heating emergencies, spring flooding events, and the renovation demand in Lansing's older neighborhoods." },
    { q: 'Why does the Lansing market need a specific approach?', a: "Lansing has distinct demand drivers you have to understand to rank well: the MSU student-rental and young-homebuyer market in East Lansing, the stable state-employee homeowner base near the Capitol, and the GM auto-worker neighborhoods throughout Delta Township. Layer in Michigan's brutal lake-effect winters and spring flooding from the Red Cedar and Grand Rivers, and you need seasonal targeting and neighborhood specificity that generic national strategies miss entirely." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Lansing areas do you serve?', a: "The full Lansing-East Lansing metro: Old Town, REO Town, Eastside, East Lansing, Haslett, Okemos, Dewitt, Delta Township, Mason, Grand Ledge, and the neighborhoods in between." },
    { q: 'Where should I start?', a: "Start with a free Lansing audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — whether that's getting into the Map Pack before Michigan's winter heating season or rebuilding a site that's losing you leads every week. No pitch deck, just a plan." },
  ],
};

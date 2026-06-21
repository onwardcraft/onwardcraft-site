// LOUISVILLE — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Louisville's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LOUISVILLE — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Louisville is more local than you think',
  body:
    "Louisville sits right on the Ohio River, straddling the Kentucky–Indiana line, and the metro area runs about 1.4 million people when you count both sides. It's a Midwest–South hybrid in every way that matters for contractors: real winters with ice storms and hard freezes that spike HVAC and pipe calls overnight, and hot humid summers that keep AC techs booked solid from June through September. But what sets Louisville apart is its exposure to weather events that drive restoration work in ways most metros don't see. The Ohio River has flooded its banks many times over the decades, and low-lying neighborhoods like Portland and parts of the West End carry real flood risk. When it happens, water-damage and restoration contractors who rank in those neighborhoods get calls around the clock. Louisville also sits at the southern edge of Tornado Alley, and severe spring storms from March through May — tornadoes, large hail, straight-line winds — drive roofing and siding demand that can fill a contractor's calendar for months. Locals here are deeply loyal to genuinely local businesses. This is the bourbon capital of the world, and people take community identity seriously. A contractor who presents as authentically Louisville-rooted wins trust a national chain can't buy.",
  pullQuote: 'In bourbon country, locals can tell the real thing from a knockoff — and they choose local every time.',
  donut: {
    title: 'How Louisville identifies',
    value: 23,
    centerLabel: 'Black community',
    legend: [
      { label: 'Black or African American', pct: 23, kind: 'teal' },
      { label: 'All other residents', pct: 77, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Spring storm roofing (Mar–May), summer HVAC (Jun–Sep), winter freeze (Dec–Feb)',
  seasonalDemand: [
    { m: 'J', v: 82, peak: true }, { m: 'F', v: 78, peak: true }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 92, peak: true }, { m: 'M', v: 85, peak: true }, { m: 'J', v: 80, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 72 },
    { m: 'O', v: 52 }, { m: 'N', v: 68 }, { m: 'D', v: 80, peak: true },
  ],
  stats: [
    { value: '1.4M', label: 'people across the Louisville–Jefferson County metro' },
    { value: 'Mar–May', label: 'spring storm season — tornadoes and hail spike roofing demand', accent: true },
    { value: 'Ohio River', label: 'flood risk in low-lying neighborhoods drives restoration work' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Highlands', 'Cherokee Triangle', 'Crescent Hill', 'Clifton', 'NuLu',
    'Portland', 'St. Matthews', 'Middletown', 'Prospect', 'Germantown',
    'New Albany', 'Clarksville', 'Oldham County', 'Shelbyville', 'West End',
  ],
};

const AREAS = [
  'Highlands', 'Cherokee Triangle', 'Crescent Hill', 'Clifton', 'NuLu',
  'Portland', 'St. Matthews', 'Middletown', 'Prospect', 'Germantown',
  'New Albany', 'Clarksville', 'Oldham County', 'Shelbyville', 'Jeffersontown',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. Louisville is a city that respects people who do honest work and put down roots in the community — and that's exactly the kind of business we're trying to help. So the whole point of what we do here is get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, water damage restoration, solar, electrical, and general contractors. We understand spring storm surges, Ohio River flood calls, winter freeze emergencies, and the premium horse-farm work in Oldham County, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: "We actually speak Louisville",
    body: "Neighborhood-by-neighborhood targeting from the Highlands to Prospect, Crescent Hill to Clarksville, plus the seasonal SEO to be visible when storm season hits and before the HVAC rush — not after. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Louisville contractor gets around 1,200 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where storm season and flood events can make or break a contractor's year, ranking before those events is everything. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Louisville', state: 'Kentucky', stateAbbr: 'KY', metro: 'Louisville',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const louisvilleLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Louisville Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Louisville and three businesses show up on the map. We get you into those three, so the call lands with you.',
    eyebrow: 'Local SEO · Louisville, KY',
    h1: 'When Louisville searches for what you do, be the first name they find',
    h2Exact: 'Louisville Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three for your Louisville neighborhoods — from the Highlands to Prospect, St. Matthews to Clarksville — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Louisville audit',
    intro:
      "Louisville local SEO comes down to one thing: when a homeowner in Crescent Hill or Middletown searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Louisville is a city where locals buy local — and they can tell the real thing from a corporate template. Ranking in the right neighborhoods, before spring storm season hits and before the summer HVAC rush, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Louisville businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Louisville neighborhoods. Louisville's seasonal demand — spring tornadoes and hail driving roofing, Ohio River floods driving restoration, hot summers and icy winters driving HVAC — means the winners get their profiles and content right before each season, not after. Tight neighborhood targeting across the Highlands, St. Matthews, Prospect, Oldham County, and both the Indiana side in New Albany and Clarksville is what separates the contractors who own the Map Pack from those who don't.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for your Louisville neighborhoods is usually the single highest-return move a local contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Louisville homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a homeowner finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible when it matters most", body: "A tornado tears through the South End in April. An Ohio River crest floods Portland in March. A deep freeze hits in January. The contractors already ranking in those neighborhoods at that exact moment fill their calendars for months. If you haven't built your Map Pack presence before the event, you're chasing calls someone else already answered." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Louisville searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for the Highlands, Crescent Hill, St. Matthews, Oldham County, New Albany and the rest, so you rank for the neighborhood someone's actually searching, not just \"Louisville.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Louisville sources Google trusts — local press, neighborhood associations, bourbon-country business directories, industry partners. This is what separates page one from page two." },
      { name: 'Seasonal storm and flood SEO', desc: "We position you for spring tornado and hail searches before March and for flood-restoration searches whenever the Ohio runs high — so you rank when the demand spikes, not after it's gone.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Louisville neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Louisville and the surrounding counties, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Louisville neighborhoods.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal storm and flood SEO', 'Multi-neighborhood and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Louisville?', a: "Most Louisville engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Louisville keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market like this is selling you something." },
      { q: 'What makes Louisville local SEO different?', a: "Louisville has distinct seasonal demand spikes that most contractors miss. Spring tornado and hail season from March through May fills roofing calendars. Ohio River flood events spike restoration calls. Hot, humid summers and hard winters drive HVAC demand at both ends of the year. You have to be ranking before those events, not scrambling to catch up after they hit." },
      { q: 'Can you target both Louisville and the Indiana side?', a: "Yes. New Albany and Clarksville are part of the metro and plenty of Louisville contractors serve both sides of the river. We build your profile and neighborhood pages to cover the full area you actually work." },
      { q: 'Which areas do you cover?', a: "The full Louisville metro — Highlands, Cherokee Triangle, Crescent Hill, Clifton, NuLu, Portland, St. Matthews, Middletown, Prospect, Germantown, Oldham County, Shelbyville, New Albany, and Clarksville. We build genuine neighborhood pages instead of one generic Louisville page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, water damage restoration, solar, electrical, and general contractors. We understand spring storm surges, flood restoration work, winter freeze emergencies, and the premium clients in horse-farm country in Oldham and Shelby counties." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your Louisville neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Louisville SEO Company | OnwardCraft',
    metaDescription:
      'Louisville SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for seasonal storm and flood.',
    eyebrow: 'SEO Services · Louisville, KY',
    h1: 'Get your Louisville business to the top of Google and keep it there',
    h2Exact: 'Louisville SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Louisville customers search and the leads keep coming. We build that ranking — including the seasonal storm and flood terms that drive your busiest weeks — and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Louisville SEO audit',
    intro:
      "Louisville SEO comes down to one question: when someone searches what you do in the Highlands or Middletown or Oldham County, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in Louisville — including the spring roofing surge, summer HVAC demand, and flood-restoration searches — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Louisville businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to Louisville neighborhoods and seasonal events, and earning links from trusted local sources. Louisville's seasonal demand pattern — spring tornado and hail roofing, Ohio River flood restoration, summer heat HVAC, winter freeze emergencies — means the contractors who get their content and pages right before each season are the ones who own those searches when demand spikes.",
    problemHeading: "Three reasons your Louisville site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. In a market with local competitors who have years of reviews and links behind them, if you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In Louisville, where storm season and flood events can generate a huge share of annual revenue in a short window, owning those rankings before the season is worth far more than scrambling to buy ads after a storm hits." },
      { title: "You're not ranking for the demand that matters", body: "Louisville demand swings hard with the weather: spring hail and tornado damage, Ohio River flood events, summer AC calls, winter ice and freeze repairs. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you're leaving your most profitable weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Louisville customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Louisville and Kentucky industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your Louisville neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for spring storm, flood restoration, summer AC, and winter freeze searches ahead of each season — so you're visible when the surge hits, not scrambling after it.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Louisville leads — including the seasonal terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal storm, flood, and emergency terms that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Louisville and Kentucky sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Louisville SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Louisville search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal storm and flood SEO', 'Multi-location or metro coverage', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Louisville?', a: "Most Louisville SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Louisville?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on broader metro keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. For Louisville contractors, owning the rankings for spring storm roofing and flood restoration searches before those events happen is far more valuable than buying ads after a tornado has already hit and everyone is bidding on the same keywords." },
      { q: 'Should my Louisville SEO target seasonal demand?', a: "Absolutely. March through May tornado and hail season can fill a roofer's calendar for months if they're already ranking. Ohio River flood events spike restoration calls with almost no warning. Summer heat runs HVAC demand June through September. Hard winters spike heating, pipe, and emergency calls. You have to be in place before each season, not chasing it after." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Louisville do you cover?', a: "The full Louisville metro and surrounding communities — Highlands, Crescent Hill, St. Matthews, Middletown, Prospect, Oldham County, Shelbyville, New Albany, Clarksville, and more — with genuine local pages rather than one generic Louisville page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Louisville Web Design Company | OnwardCraft',
    metaDescription:
      'Louisville web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in bourbon country.',
    eyebrow: 'Web Design · Louisville, KY',
    h1: 'Louisville web design that turns visitors into booked jobs',
    h2Exact: 'Louisville Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Louisville contractors fast, mobile-first sites engineered to turn visitors into booked work — and to look genuinely local in a city where people can tell the difference between a community business and a corporate template.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Louisville contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, no sense of being genuinely local. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, speak to Louisville homeowners from the Highlands to Oldham County, and convert visitors into booked jobs — not brochures that blend into every other contractor's page.",
    aioQuestion: 'What makes a good contractor website in Louisville?',
    aioAnswer:
      "A good Louisville contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and communities you serve — from the historic Highlands to horse-farm country in Oldham County. Louisville is a city where locals buy local, so a site that reads authentically Louisville wins trust a national-chain template never will. Mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. Louisville homeowners doing a quick search after a hail storm need to see a phone number, a clear service, and a reason to trust you — fast. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Louisville visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't feel genuinely local", body: "Louisville people buy from Louisville businesses. A homeowner in Crescent Hill or Cherokee Triangle wants to see that you know their neighborhood, not a generic page with a city name swapped in. We build sites that name the communities you work, reference local landmarks and context, and communicate that you're actually rooted here — because that's what converts in this market." },
    ],
    servicesHeading: "What's in an OnwardCraft Louisville website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Louisville neighborhoods, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Louisville traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Louisville homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood-targeted pages', desc: "Pages built around the Louisville communities you serve — Highlands, St. Matthews, Prospect, Oldham County, New Albany — so you stand out instead of blending into one generic city page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Louisville web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Louisville?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: "Will my site actually look like it belongs in Louisville — not some national template?", a: "That's the whole point. Louisville homeowners buy local, and a generic template with your city name swapped in doesn't win their trust. We build around the specific neighborhoods you serve, reference the communities your customers actually live in, and give you a site that reads authentically Louisville rather than a franchise placeholder." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Louisville terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Louisville traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Louisville site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'louisville', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Louisville Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Louisville website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs in bourbon country.',
    eyebrow: 'Website Redesign · Louisville, KY',
    h1: 'Redesign your Louisville website without losing your rankings',
    h2Exact: 'Louisville Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Louisville contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Louisville contractor sites for speed and conversions, build them to feel genuinely local in a city that rewards community roots, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Louisville site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Louisville homeowners — especially the premium clients in Prospect and Oldham County — judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. If you're going after high-end landscaping, fencing, or remodeling clients in horse-farm country, your site has to look the part." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Louisville visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends in when it should stand out", body: "A generic old site that reads like a national chain gives a Louisville homeowner no reason to pick you. Louisville buys local. A redesign that names the neighborhoods you serve — from the Highlands historic homes to the new construction in Middletown — and communicates real community roots is what converts in this market." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Louisville traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs — and communicates genuine Louisville roots." },
      { name: 'Neighborhood-targeted rebuild', desc: "Rebuilt around the Louisville communities you serve, so the new site stands out as authentically local instead of reading like a national template with the city name swapped in.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
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
      heading: 'Transparent Louisville redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Louisville?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or reads like a national template instead of a Louisville business, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete in Louisville?', a: "Yes, and that's the point in a market where buying local is a real value. We rebuild around the specific neighborhoods and communities you serve, keep the site fast, and make the offer and call button obvious — so the new site stands out as genuinely Louisville rather than a generic contractor page." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const louisvilleCity = {
  citySlug: 'louisville', city: 'Louisville', state: 'Kentucky', stateAbbr: 'KY', metro: 'Louisville',

  titleTag: 'Louisville Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Louisville contractors. Get found, get booked, and own your leads instead of renting them — built for bourbon country.',

  eyebrow: 'Louisville · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Louisville contractors found and booked',
  h2Exact: 'Louisville Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Louisville's seasonal storms, Ohio River flood market, and a community that buys local. One team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Louisville audit',

  intro:
    "If you run a contracting business in Louisville, you're competing in a market shaped by real seasonal forces — spring tornado and hail season that spikes roofing demand, Ohio River flood events that drive restoration calls, a hot humid summer that fills HVAC calendars, and hard winters that keep heating and pipe contractors busy. And Louisville is a city that buys local: people here know the difference between a community business and a national chain with a Kentucky phone number. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve — before each season hits. Here's how we help Louisville contractors do exactly that.",
  aioQuestion: 'How do Louisville contractors get more leads online?',
  aioAnswer:
    "Louisville contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack neighborhood by neighborhood. Louisville's seasonal demand pattern — spring storm roofing, flood restoration, summer HVAC, winter emergencies — means the contractors who rank before each season catches the surge. And because Louisville is a community that strongly prefers local businesses, a site and online presence that reads authentically Louisville wins trust that a national template never will.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Louisville searches \"near me.\" The single highest-return move for most local contractors — done tight, neighborhood by neighborhood, before storm season hits.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including seasonal storm and flood terms that drive your busiest weeks, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and to look genuinely Louisville in a market where locals can tell the difference between a community business and a corporate template.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully so you keep every bit of ranking you've already earned, and give it the authentic local feel Louisville homeowners respond to.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Louisville?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and they build it ahead of spring storm season and the summer HVAC rush." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, water damage restoration, solar, electrical, and general contractors — so we understand storm surges, flood restoration calls, winter freeze emergencies, and the premium clients in Oldham and Shelby counties." },
    { q: 'Why does the Louisville market need a different approach?', a: "Louisville has distinct seasonal demand spikes most agencies ignore: spring tornado and hail season fills roofing calendars, Ohio River flood events spike restoration calls with little warning, hot humid summers and hard winters drive HVAC demand at both ends of the year. And Louisville is a market that buys local — a generic national template doesn't win here the way an authentically Louisville presence does." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Louisville areas do you serve?', a: "The full metro — Highlands, Cherokee Triangle, Crescent Hill, Clifton, NuLu, Portland, St. Matthews, Middletown, Prospect, Germantown, Oldham County, Shelbyville, New Albany, and Clarksville — with genuine neighborhood pages rather than one generic Louisville page." },
    { q: 'Where should I start?', a: "Start with a free Louisville audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

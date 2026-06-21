// LEXINGTON — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Lexington's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LEXINGTON — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Lexington takes more than a good Google listing',
  body:
    "Lexington is the Horse Capital of the World and a college town of 350,000 people sitting in the middle of Kentucky bluegrass country — a combination that produces a contractor market unlike anywhere else in the South. On one side you have the estate-and-farm belt: the legendary horse properties around Keeneland, Calumet Farm, and Claiborne Farm, where property owners have large budgets, high standards, and very specific expectations of the contractors they let on site. On the other side you have a 30,000-student University of Kentucky campus that churns out a constant rental market and a steady wave of first-time homebuying young professionals who search for everything on their phones. Lexington is a small city that blends urban neighborhoods like Chevy Chase and Ashland Park with the rural farm country of surrounding Fayette, Jessamine, and Scott counties, so contractors here regularly move between a historic downtown renovation one day and a fencing repair on a hundred-acre horse property the next. What really shapes demand is the weather. Kentucky sits at the intersection of the tornado corridor and the ice storm belt — Lexington gets more damaging winter ice than snow, and the aftermath of an ice event sends roofs, gutters, and trees into crisis overnight. Add a genuine summer heat season and you have three distinct demand spikes every year that reward contractors who are already ranking when the phone starts ringing.",
  pullQuote: 'In the Horse Capital of the World, the contractor who shows up on Google before the ice storm books the job — not the one who scrambles to advertise after it.',
  donut: {
    title: 'Lexington homeownership',
    value: 62,
    centerLabel: 'homeowner rate',
    legend: [
      { label: 'Homeowners', pct: 62, kind: 'teal' },
      { label: 'Renters', pct: 38, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes in Lexington',
  seasonCaption: 'Ice storm damage (Jan–Feb), tornado season (Mar–May), summer HVAC (Jun–Sep)',
  seasonalDemand: [
    { m: 'J', v: 91, peak: true }, { m: 'F', v: 88, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 78, peak: true }, { m: 'M', v: 60 }, { m: 'J', v: 82, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 88, peak: true }, { m: 'S', v: 74, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 50 }, { m: 'D', v: 58 },
  ],
  stats: [
    { value: '350K+', label: 'people in the Lexington metro area' },
    { value: '30,000+', label: 'University of Kentucky students driving rental and homebuying demand', accent: true },
    { value: 'Jan–Feb', label: 'peak ice storm season, when roof and tree damage calls spike overnight' },
    { value: 'Top 3', label: 'Map Pack spots that capture most of the clicks when homeowners search' },
  ],
  neighborhoods: [
    'Chevy Chase', 'Ashland Park', 'Kenwick', 'Beaumont', 'Hamburg',
    'Nicholasville', 'Georgetown', 'Richmond', 'Winchester', 'Paris',
    'Tates Creek', 'Eastland', 'Andover', 'Cardinal Valley', 'Briarwood',
  ],
};

const AREAS = [
  'Chevy Chase', 'Ashland Park', 'Kenwick', 'Beaumont', 'Hamburg',
  'Nicholasville', 'Georgetown', 'Richmond', 'Winchester', 'Paris',
  'Jessamine County', 'Scott County', 'Clark County', 'Bourbon County',
  'Tates Creek', 'Andover',
];

const FOUNDER =
  "Here's the honest version: I started OnwardCraft because I kept watching solid Kentucky contractors — the kind who know every local code, every quirk of ice-damaged rooflines, every demand the horse farm clients bring — hand a chunk of their margin to Angi and HomeAdvisor for leads they shared with three competitors. You can't build a business on rented leads. So everything we do is about getting you ranking for the searches that matter in Lexington and the surrounding counties, and making sure those leads come to you and stay with you. No twelve-month contracts. If we're not earning it, you go.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand ice-storm repair calls at 6 a.m., horse-property clients who expect a certain level of professionalism before you even set foot on the farm, and UK-student landlords managing a dozen properties. Everything we build reflects how Lexington homeowners actually search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a lead pipeline you own. Not another monthly invoice to a broker selling the same Lexington homeowner to four contractors at once.",
  },
  {
    title: 'We actually know this market',
    body: "Chevy Chase to Nicholasville, Keeneland-area estates to Georgetown rentals — we build targeting around the real Lexington, not a national template with the city name swapped in. The bluegrass homeowner who wants a local contractor they can trust is exactly who we help you reach.",
  },
  {
    title: 'No contracts, no mystery',
    body: "Published prices, reporting tied to leads, month-to-month after 90 days. If we're not delivering, you leave. The accountability stays where it belongs: on us.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: a Lexington contractor getting around 1,200 local \"near me\" impressions a month across their key neighborhoods and surrounding counties could see a dramatic difference moving from page-two invisibility into the top three — especially during ice-storm season or the spring tornado months when searches spike fast. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Lexington', state: 'Kentucky', stateAbbr: 'KY', metro: 'Lexington',
  heroProof: ['Built for the trades', 'Lexington neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const lexingtonLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'lexington', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Lexington KY Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Lexington and three businesses show up on the map. We get you into those three, so the call lands with you — not a competitor. Free Lexington audit.',
    eyebrow: 'Local SEO · Lexington, KY',
    h1: 'When Lexington searches for what you do, be the first name they find',
    h2Exact: 'Lexington Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me\" in Lexington. Everyone below them is mostly invisible. Whether the homeowner is in Chevy Chase or calling after an ice storm leveled half their roof, we get you into that top three so the call lands with you.",
    primaryCta: 'Get my free Lexington audit',
    intro:
      "Lexington local SEO comes down to one thing: when a homeowner in Chevy Chase or a horse-farm property manager near Keeneland searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. The market here blends historic urban neighborhoods with rural farm country and a large UK student population — getting into those three spots for the areas you actually serve is the whole game. Here's how you do it.",
    aioQuestion: 'How do Lexington businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you serve; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to specific Lexington neighborhoods and surrounding counties. In a market that blends urban renovations with rural horse-country property work, the winners target tight service areas — Chevy Chase, Nicholasville, Georgetown, the horse-farm belt — and stay visible before the seasonal demand spikes from ice storms and tornado season.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" in Lexington right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks — whether a homeowner is searching from Ashland Park or frantically calling after an ice storm takes out their gutters. If you're not one of those three, most people never reach your name, no matter how good your work is. Getting into that top three for the neighborhoods you serve is usually the highest-return move you can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Lexington homeowner to multiple contractors and bill each of you for the privilege. Local SEO builds the opposite: a homeowner in Georgetown or Winchester finds you, calls you, and nobody else bought that lead. Over time you stop renting and start owning the pipeline." },
      { title: "You're missing the seasonal demand spikes", body: "Lexington's weather is feast-or-famine: ice storms in January and February, tornado season in March through May, a real summer HVAC stretch through September. The contractors who are already ranking when those spikes hit are the ones who get the surge of calls. If you're not in the Map Pack before the storm, you're calling homeowners who already found someone else." },
    ],
    servicesHeading: 'What it actually takes to rank you in Lexington',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Lexington and surrounding-county searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing across Fayette, Jessamine, Scott, and Clark counties." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and gives the Lexington homeowner — who trusts local word-of-mouth — a reason to pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Chevy Chase, Ashland Park, Kenwick, Beaumont, Hamburg, Nicholasville and the rest, so you rank for the neighborhood someone's actually searching, not just \"Lexington.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Lexington and Kentucky sources Google trusts — local press, trade associations, chamber, community partners. This is what separates page one from page two in a regional market." },
      { name: 'Seasonal and storm-surge SEO', desc: "We rank you ahead of ice-storm season and tornado season so you're visible when demand spikes overnight — not scrambling to advertise after the fact.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across Lexington and the surrounding counties and identify which competitors own the Map Pack spots you should be in." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting before ice-storm season, not after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Lexington and the bluegrass counties, plus the on-page work to support them." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right in Lexington.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses competing across Lexington neighborhoods and surrounding counties.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across Lexington and the bluegrass region.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal and storm-surge SEO', 'Multi-county service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Lexington?', a: "Most Lexington engagements run $750 to $2,500 a month, depending on how many neighborhoods and surrounding counties you're targeting. Our tiers are right above. No hidden fees, no long contract, and we confirm exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Lexington keywords typically take 90 to 180 days of consistent work because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Lexington local SEO different?', a: "Two things set this market apart. First, the geography: Lexington contractors serve urban neighborhoods, suburban growth areas like Beaumont and Hamburg, and rural horse-country properties — so your service area often covers a wide range of search intent. Second, the weather spikes: ice storms and tornado season create sudden surges in roofing, tree, and damage-repair searches that reward contractors who are already ranking when the storm hits." },
      { q: 'Can you help me reach customers outside Lexington proper?', a: "Yes, and for most Lexington contractors that's critical. We build pages and optimize your profile for Nicholasville, Georgetown, Richmond, Winchester, Paris, and the surrounding bluegrass counties so you rank for the searches happening across your actual service area, not just inside Fayette County." },
      { q: 'Which Lexington areas do you cover?', a: "Chevy Chase, Ashland Park, Kenwick, Beaumont, Hamburg, and the other Lexington neighborhoods, plus Nicholasville, Georgetown, Richmond, Winchester, Paris, and the surrounding counties. We build genuine local pages instead of one generic Lexington page, because that's what ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's essentially all we do — roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We understand ice-storm repair calls, horse-property client expectations, and UK-area rental work, and we build your local SEO around the reality of this market." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more local research starts in AI now. We structure your content and schema so those engines can read, trust, and cite your business — it's becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads at a cost. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across Lexington and the surrounding counties, what your Map Pack competitors are doing to beat you, the fixes that will move you fastest, and a realistic 90-to-180-day plan with the numbers modeled for your business. No pitch deck — just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'lexington', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Lexington KY SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Lexington SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in contracts, built for a bluegrass market. Free Lexington SEO audit.',
    eyebrow: 'SEO Services · Lexington, KY',
    h1: 'Get your Lexington business to the top of Google and keep it there',
    h2Exact: 'Lexington SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Lexington customers search — from Chevy Chase homeowners to horse-farm property managers — and the leads keep coming. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Lexington SEO audit',
    intro:
      "Lexington SEO comes down to one question: when someone in Chevy Chase, Nicholasville, or Georgetown searches what you do, are you on page one or page two? Page two might as well not exist. We get contractors ranking for the money keywords across Lexington and the bluegrass counties — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Lexington businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Lexington neighborhoods and surrounding bluegrass counties, and earning links from trusted Kentucky sources. In this market, ranking ahead of the seasonal ice-storm and tornado-season demand spikes — and reaching the rural horse-property segment as well as the urban renovation market — are two of the quickest ways to pull ahead of competitors.",
    problemHeading: "Three reasons your Lexington site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google results. In a regional market like Lexington, if you're not in the top handful of results for what you sell, your site is invisible to the homeowners, landlords, and property managers actively looking for someone to hire right now." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work short-term, but the moment your budget runs out, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, and at a fraction of the per-lead cost of paid ads or lead brokers." },
      { title: "You're not ranking for the demand that matters", body: "Lexington demand swings hard with the weather — ice-storm damage calls surge in January and February, tornado-season repairs drive spring, and summer HVAC runs through September. The contractors who rank for those terms ahead of time catch the surge. If your SEO ignores seasonal and emergency searches, you're handing your busiest weeks to competitors." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings in Lexington',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Lexington customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what bluegrass homeowners, landlords, and horse-property managers search — earning links and bringing in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Lexington and Kentucky sources. In a regional market this specific, relevant local links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across Lexington and the surrounding counties alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth in real dollars." },
      { name: 'Seasonal & storm-surge SEO', desc: "We rank you for the ice-storm damage and tornado-season repair searches before they spike, so you're the call homeowners make when the damage happens — not after someone else already answered.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of local search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors across Lexington and the bluegrass counties, then build a roadmap around the keywords most likely to drive real leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank, whether you're going after Chevy Chase renovations or Georgetown farm-country work." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter most in Kentucky." },
      { name: 'Build authority', desc: "Links and citations from trusted Lexington, Kentucky, and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or county." },
    ],
    pricing: {
      heading: 'Transparent Lexington SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local Lexington keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across Lexington neighborhoods and surrounding counties.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Lexington and bluegrass-region search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & storm-surge SEO', 'Multi-county service-area pages', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Lexington?', a: "Most Lexington SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are listed above — no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Lexington?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter neighborhood terms and slower on the most competitive regional keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Lexington contractors do best running SEO as the long-term engine and ads for short-term spikes — like when you need work booked fast heading into ice-storm season." },
      { q: 'Should my Lexington SEO target seasonal demand?', a: "Absolutely. Ice-storm searches spike overnight in January and February. Tornado-season repair work runs March through May. Summer HVAC demand stretches through September. Ranking takes months to build, so you have to be in position before the season, not trying to catch up after it starts." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/storm-surge SEO and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that window to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business alongside classic search results." },
      { q: 'Which areas around Lexington do you cover?', a: "Lexington proper plus Nicholasville, Georgetown, Richmond, Winchester, Paris, and the surrounding bluegrass counties — with genuine local pages for each area rather than one generic Lexington page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today across Lexington and the surrounding counties, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck — just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'lexington', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Lexington KY Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Lexington web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors serving the bluegrass market. Transparent pricing, you own it. Free quote.',
    eyebrow: 'Web Design · Lexington, KY',
    h1: 'Lexington web design that turns visitors into booked jobs',
    h2Exact: 'Lexington Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Lexington contractors fast, mobile-first sites engineered to turn visitors into booked work — whether the homeowner is in Chevy Chase, a rental landlord near UK campus, or a horse-farm property manager out past Keeneland.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Lexington contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer for the work you actually want. Web design done right fixes all of that. We build sites that load fast, look professional, and convert visitors — from Ashland Park homeowners to Georgetown farm-country clients — into booked jobs. Built to stand out in a regional market where trust and local identity matter.",
    aioQuestion: 'What makes a good contractor website in Lexington?',
    aioAnswer:
      "A good Lexington contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and surrounding counties you serve. Bluegrass homeowners have a strong preference for local contractors they trust, so a site that feels genuinely Lexington — not a national template with the city name changed — converts better and ranks better.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and stop there. No clear offer, no obvious next step, no reason to choose you over the next contractor in the search results. We design every page around one job: turning a Lexington homeowner or property manager into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Lexington visitors are on mobile, and they bounce if your site takes more than a few seconds to load — especially someone searching for emergency roof help after an ice storm. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't feel local to the bluegrass", body: "Lexington residents identify strongly with their Kentucky heritage and prefer contractors who feel embedded in the community — not a faceless national brand. A site that names the neighborhoods you serve, reflects your local experience, and shows real project photos from the area converts better than a generic template ever will." },
    ],
    servicesHeading: "What's in an OnwardCraft Lexington website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Lexington neighborhoods, and the jobs you actually want — from urban renovations to farm-property work." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all your Lexington traffic comes from — and especially during the frantic ice-storm or tornado-season search spikes." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to Lexington homeowners who want a contractor they can trust — not filler text that could be anyone, anywhere." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and pages ready for Lexington neighborhoods and surrounding bluegrass counties." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, protecting both conversions and rankings." },
      { name: 'Neighborhood and county-targeted pages', desc: "Pages built around the specific areas you serve — Chevy Chase, Nicholasville, Georgetown, Richmond — so you rank for real local searches instead of blending into a generic state result.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI tools.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Lexington service areas, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write copy that earns trust from Lexington homeowners, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Lexington web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade Lexington contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors serving multiple Lexington neighborhoods and counties.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Neighborhood and county-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-county businesses in the bluegrass region.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Lexington?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and update you through each stage." },
      { q: 'Will my site help me win trust from Lexington homeowners?', a: "That's the entire goal. Lexington residents strongly prefer local contractors — a site that names the neighborhoods you serve, shows real project photos from the area, and feels genuinely Lexington converts far better than a national template with the city name changed." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Lexington terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where most of your Lexington traffic comes from — especially during the frantic searches that follow an ice storm or tornado." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Lexington contractor site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'lexington', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Lexington KY Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Lexington website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across the bluegrass market. Free audit.',
    eyebrow: 'Website Redesign · Lexington, KY',
    h1: 'Redesign your Lexington website without losing your rankings',
    h2Exact: 'Lexington Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and easy for a Lexington homeowner to skip past. We redesign contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've already built.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Lexington contractor sites for speed and conversions, build them to earn trust from bluegrass homeowners and horse-property clients, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one — and in a market like Lexington, that also means a site that feels genuinely local rather than a national template.",
    problemHeading: "Signs your Lexington site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "Lexington homeowners — whether they're in a historic Chevy Chase bungalow or managing a horse-farm property — judge you by your site quickly. An old, cluttered design quietly sends them to a competitor who looks more established, even when your work is better. A redesign that looks professional and local changes that equation." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Lexington visitors before they see your offer. This is especially painful when someone is searching urgently after a January ice storm or a spring tornado — they need a contractor fast and will pick the first one whose site actually works on their phone." },
      { title: "It doesn't reflect who you actually serve", body: "A generic old site with no mention of the specific Lexington neighborhoods, bluegrass counties, or types of property work you do gives visitors no reason to trust you're the right fit. We rebuild around the real service areas and client types you want, so the right people choose you." },
    ],
    servicesHeading: "What's in an OnwardCraft Lexington redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing the color scheme." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned across Lexington and the surrounding counties." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just aesthetics." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for conversions and rankings alike, and critical during high-urgency storm-season searches." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where most of your Lexington traffic lives — especially the emergency searches that happen right after ice-storm or tornado damage." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and earns trust from Lexington homeowners who prefer local, established contractors." },
      { name: 'Neighborhood and county-targeted rebuild', desc: "Rebuilt around the specific Lexington neighborhoods and surrounding bluegrass counties you serve, so the new site feels genuinely local — not a national template with the city name swapped in.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search increasingly shifts toward AI tools.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works — including the local authority you've built in Lexington search." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — one that looks like it belongs to a trusted Lexington contractor." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, with particular care for the neighborhood and county pages that drive your local rankings." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and security updates." },
    ],
    pricing: {
      heading: 'Transparent Lexington redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small Lexington contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site serving Lexington and surrounding counties.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Neighborhood and county-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-county contractors across the bluegrass region.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Lexington?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging before launch. Done right, the redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks outdated, isn't bringing in leads, or doesn't reflect the specific Lexington neighborhoods and client types you serve, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important is lost." },
      { q: 'Will the redesign help me compete in Lexington?', a: "Yes, and that's the point. Lexington homeowners prefer local contractors they can trust — a redesigned site that names the neighborhoods you serve, shows your real work, and loads fast on a phone earns that trust faster than an outdated generic site ever could." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — and is essential when people are searching urgently after storm damage." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const lexingtonCity = {
  citySlug: 'lexington', city: 'Lexington', state: 'Kentucky', stateAbbr: 'KY', metro: 'Lexington',

  titleTag: 'Lexington KY Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Lexington contractors. Get found across the bluegrass market, own your leads, and stop renting them — built for Kentucky. Free Lexington audit.',

  eyebrow: 'Lexington, KY · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Lexington contractors found and booked',
  h2Exact: 'Lexington Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Lexington's blend of historic neighborhoods, horse-country estates, and a college-town rental market — one team to get you ranking, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Lexington neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Lexington audit',

  intro:
    "If you run a contracting business in Lexington, you're operating in a market that's unlike any other: a city where a Chevy Chase historic renovation is across town from a horse-farm property near Keeneland, where the University of Kentucky generates constant rental demand, and where a single ice storm in January can create a two-week surge in roofing and tree calls that goes entirely to whoever ranks first on Google. Winning here takes three things working together: a site that converts, SEO that ranks you for what people actually search, and local SEO that puts you in the Map Pack for Lexington and the surrounding bluegrass counties. Here's how we help Lexington contractors do exactly that.",
  aioQuestion: 'How do Lexington contractors get more leads online?',
  aioAnswer:
    "Lexington contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack across the city's neighborhoods and surrounding bluegrass counties. The contractors who win this market show up before the seasonal demand spikes — ice-storm damage in January and February, tornado-season repairs in spring, and summer HVAC calls — and they earn trust by looking genuinely local, not like a national template with the city name swapped in.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Lexington searches \"near me.\" From Chevy Chase to Nicholasville to Georgetown, we rank you tight — neighborhood by neighborhood, county by county — and make sure you're visible before ice-storm and tornado-season demand spikes.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your Lexington customers actually search, build an asset you own instead of renting traffic from ads, and measure it in real leads — not vanity traffic or borrowed rankings.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites built to turn Lexington visitors into booked jobs — whether the client is a Ashland Park homeowner, a UK-area landlord, or a horse-farm property manager. No brochures. Lead engines.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, migrate it carefully to protect your existing rankings, and come out with a site that earns trust from bluegrass homeowners who prefer a contractor that feels genuinely local.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Lexington?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across Lexington and the surrounding bluegrass counties." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and GCs. We understand ice-storm repair calls, horse-property client expectations, and University of Kentucky rental-market work, and we build around the reality of this specific market." },
    { q: 'Why does the Lexington market need a different approach?', a: "Because it's genuinely different. You're serving historic urban neighborhoods, suburban growth areas, rural horse-country estates, and a university rental market all at once — and three distinct weather-driven demand spikes every year. A national template with the city name changed doesn't cover any of that. We build for the actual Lexington market." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000 with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Lexington areas do you serve?', a: "All of Lexington's neighborhoods — Chevy Chase, Ashland Park, Kenwick, Beaumont, Hamburg and more — plus the surrounding counties: Nicholasville, Georgetown, Richmond, Winchester, Paris, and across Jessamine, Scott, Clark, and Bourbon counties." },
    { q: 'Where should I start?', a: "Start with a free Lexington audit. We'll look at your website, your rankings across the city and surrounding counties, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck — just a plan." },
  ],
};

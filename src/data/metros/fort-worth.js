// FORT WORTH — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Fort Worth's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// FORT WORTH — shared city blocks
// ===========================================================================
const MARKET = {
  heading: "Why ranking in Fort Worth is its own street fight — not Dallas's",
  body:
    "Fort Worth has nearly a million people and a metro that stretches from the Stockyards all the way out to Keller, Southlake, and Mansfield. This is not Dallas. Fort Worth residents will be the first to remind you — they have their own history, their own identity, and their own neighborhoods, and they search locally with that in mind. Two forces drive trade demand here more than anywhere else in Texas. First, Fort Worth sits dead-center in North Texas hail alley: some of the most frequent and damaging hail storms in the United States come through this market, and they come through more than once a year. Every storm is a demand spike for roofing, siding, gutters, and restoration work that can define a contractor's whole calendar. Second, this market is growing fast — suburban expansion in Keller, Southlake, Burleson, and Crowley keeps feeding new homeowners who need trades, and those homeowners search before they call. The contractor who ranks when the storm hits or when the new neighbor types \"roofer near me\" is the one who books the work.",
  pullQuote: 'In hail alley, the contractor who ranks before the storm hits books the work after it does.',
  donut: {
    title: 'How Fort Worth searches',
    value: 42,
    centerLabel: 'Hispanic residents',
    legend: [
      { label: 'Hispanic / Spanish-language searches', pct: 42, kind: 'teal' },
      { label: 'Other demographics', pct: 58, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail/storm season (Mar–Jun, Aug–Oct) and summer HVAC (Jun–Aug)',
  seasonalDemand: [
    { m: 'J', v: 50 }, { m: 'F', v: 52 }, { m: 'M', v: 88, peak: true },
    { m: 'A', v: 95, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 90, peak: true },
    { m: 'J', v: 88, peak: true }, { m: 'A', v: 86, peak: true }, { m: 'S', v: 84, peak: true },
    { m: 'O', v: 80, peak: true }, { m: 'N', v: 58 }, { m: 'D', v: 48 },
  ],
  stats: [
    { value: '~950K', label: 'people in the City of Fort Worth, with a booming metro beyond' },
    { value: '~42%', label: 'Hispanic residents — significant Spanish-language search demand', accent: true },
    { value: 'Mar–Oct', label: 'hail and severe storm season, the longest demand window in Texas' },
    { value: 'Top 3', label: 'Map Pack spots that capture most clicks after every storm' },
  ],
  neighborhoods: [
    'Stockyards', 'Camp Bowie', 'Mistletoe Heights', 'Ryan Place', 'Fairmount',
    'Near Southside', 'Saginaw', 'Keller', 'Southlake', 'Mansfield',
    'Burleson', 'Crowley', 'North Richland Hills', 'Haltom City', 'Benbrook',
  ],
};

const AREAS = [
  'Stockyards', 'Camp Bowie', 'Mistletoe Heights', 'Ryan Place', 'Fairmount',
  'Near Southside', 'Saginaw', 'Keller', 'Southlake', 'Mansfield',
  'Burleson', 'Crowley', 'North Richland Hills', 'Haltom City', 'Benbrook',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. That model is especially brutal in a hail market like Fort Worth — the storm hits, every roofer in town is bidding on the same shared leads, and the platforms win while the contractors fight each other on price. You can't build a real business on rented leads. So that's what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, before the storm hits. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We understand hail alley',
    body: "Fort Worth's storm season isn't a background detail — it's a central driver of your business. We build your rankings and content around hail damage, storm restoration, and emergency searches so you're visible when demand spikes, not scrambling to set up a profile after the storm moves through.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for Fort Worth homeowners that three competitors also bought — especially after a hail event when everyone is chasing the same shared list.",
  },
  {
    title: 'We actually speak Fort Worth',
    body: "Stockyards to Southlake, Camp Bowie to Crowley. Neighborhood-by-neighborhood targeting, plus the Spanish-language reach to win searches most agencies don't even see. The stuff a national shop can't do by swapping a city name into a Dallas template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Fort Worth contractor gets around 2,000 local \"near me\" impressions a month across a handful of neighborhoods. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and when a hail storm rolls through, that gap is the difference between a record month and watching competitors clean up. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Fort Worth', state: 'Texas', stateAbbr: 'TX', metro: 'Fort Worth',
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const fortWorthLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Fort Worth Local SEO Company | OnwardCraft',
    metaDescription:
      'Search your service in Fort Worth and three businesses show up on the map. We get you into those three before the next hail storm hits.',
    eyebrow: 'Local SEO · Fort Worth, TX',
    h1: 'When Fort Worth searches for what you do, be the first name they find',
    h2Exact: 'Fort Worth Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a hail-driven market like Fort Worth, we get you into that top three for your neighborhoods before the next storm rolls through — so the call lands with you instead of a competitor who ranked first.",
    primaryCta: 'Get my free Fort Worth audit',
    intro:
      "Fort Worth local SEO comes down to one thing: when a homeowner in Keller or Ryan Place searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. This is a market shaped by hail seasons, fast-growing suburbs, and roughly 42% Hispanic residents who search in Spanish — becoming one of those three in the neighborhoods you serve, before storm demand spikes, is the whole game. Here's how you do it.",
    aioQuestion: 'How do Fort Worth businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Fort Worth neighborhoods and suburbs. Fort Worth's hail season means the winners also show up for storm damage and restoration searches ahead of time — plus Spanish-language searches that most competitors never target.",
    problemHeading: "If your phone is quiet after a hail storm, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of clicks. When a hail storm hits Fort Worth, those three spots turn into a surge of inbound calls — and the contractors who weren't already ranked are scrambling to catch up while the ranked ones are booked out. Getting into that top three for your neighborhoods is usually the highest-return move a Fort Worth contractor can make." },
      { title: "You're paying for leads you don't own", body: "After every storm, Angi, Thumbtack, and HomeAdvisor light up with Fort Worth homeowners — and sell the same homeowner to four contractors, then bill each of you to fight over them on price. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline, storm season or not." },
      { title: "You're invisible to 42% of the market", body: "Roughly 42% of Fort Worth residents are Hispanic, and a significant share of them search in Spanish. Most contractors do nothing to show up for those searches, so the demand sits unclaimed. Targeting the right neighborhoods and languages is how you reach buyers your competitors are completely ignoring." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Fort Worth searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone — especially after storm season." },
      { name: 'Neighborhood pages', desc: "Real pages for Keller, Southlake, Mansfield, Camp Bowie, Ryan Place and the rest, so you rank for the neighborhood someone's actually searching, not just \"Fort Worth.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Fort Worth sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Spanish-language reach', desc: "About 42% of Fort Worth residents are Hispanic and many search in Spanish. We help you show up for the demand most of your competitors never even see.", featured: true },
      { name: 'Storm and hail damage SEO', desc: "We build your content and profile around hail damage, storm restoration, and emergency searches so you're ranked and visible when severe weather hits — not setting up a profile after the fact.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your Fort Worth neighborhoods and suburbs, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later — especially before storm season." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across Fort Worth, Keller, Southlake, Mansfield, Burleson, and Crowley, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Fort Worth neighborhoods and suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the metro.', features: ['Everything in Local Growth', 'Local link building', 'Spanish-language search targeting', 'Multi-neighborhood and suburb pages', 'Storm and hail damage SEO'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Fort Worth?', a: "Most Fort Worth engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. Competitive Fort Worth keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Fort Worth local SEO different from Dallas?', a: "Fort Worth is not Dallas — and Fort Worth residents will tell you that. It has its own neighborhoods, its own search patterns, and most importantly, it sits in the heart of North Texas hail alley. Storm-driven demand spikes multiple times a year, and the contractors who rank before the storm hits book the work after. That's a Fort Worth-specific dynamic you can't address with a Dallas template." },
      { q: 'Can you help me reach Spanish-speaking customers?', a: "Yes, and in Fort Worth that's a real edge. About 42% of residents are Hispanic and many search in Spanish. We can optimize your profile and content to show up for those searches across Fort Worth, Saginaw, Haltom City, and other neighborhoods where most contractors are invisible to half the market." },
      { q: 'Which areas do you cover?', a: "Fort Worth proper and the surrounding suburbs — Keller, Southlake, Mansfield, Burleson, Crowley, North Richland Hills, Haltom City, Saginaw, Benbrook, and the historic neighborhoods inside city limits: Stockyards, Camp Bowie, Mistletoe Heights, Ryan Place, Fairmount, and Near Southside." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hail storm surges, emergency restoration calls, and what Fort Worth homeowners search for after severe weather." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk." },
      { q: 'How does this get me off Angi and HomeAdvisor leads?', a: "Those platforms sell the same Fort Worth homeowner — especially after a storm — to four contractors and bill each of you to compete on price. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming in directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your neighborhoods, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Fort Worth SEO Company | OnwardCraft',
    metaDescription:
      'Fort Worth SEO that ranks contractors on Google and brings in leads you own. Storm-season ready, Spanish-language capable, no lock-in.',
    eyebrow: 'SEO Services · Fort Worth, TX',
    h1: 'Get your Fort Worth business to the top of Google and keep it there',
    h2Exact: 'Fort Worth SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Fort Worth customers search and the leads keep coming — through hail season, through summer heat, through the suburban boom from Keller to Crowley.",
    primaryCta: 'Get my free Fort Worth SEO audit',
    intro:
      "Fort Worth SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in a market shaped by hail storms, summer HVAC demand, fast-growing suburbs, and a 42% Hispanic population that searches in Spanish — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Fort Worth businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Fort Worth neighborhoods and suburbs, and earning links from trusted Texas sources. In this market, ranking for storm damage, hail repair, and emergency searches ahead of severe weather season — plus Spanish-language content for the 42% Hispanic population — are two of the fastest ways to pull ahead of competitors.",
    problemHeading: "Three reasons your Fort Worth site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a market with as many contractors as Fort Worth — especially after a storm when everyone is fighting for the same searches — if you're not in the top handful of results for what you sell, your site is basically invisible, no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. And during peak storm season, Fort Worth ad costs spike as every contractor in town starts bidding. SEO builds an asset you own: rankings that keep producing leads after the storm, through the quiet months, and into next season." },
      { title: "You're not ranked for storm season before it arrives", body: "Fort Worth's hail and storm season runs from March through October. Rankings take months to build, so the contractors who book the work after a storm are the ones who were already ranking before it hit. Showing up for storm damage, hail repair, and restoration searches has to happen in the off-season — not the morning after." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Fort Worth customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot — including neighborhood-specific content for the suburbs." },
      { name: 'Link building', desc: "Authority from real Fort Worth and Texas sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your neighborhoods alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & hail damage SEO', desc: "We rank you for storm restoration, hail damage, and emergency searches ahead of season so you're visible when demand spikes — not scrambling after it passes.", featured: true },
      { name: 'Spanish-language & AI search', desc: "We optimize for the 42% of Fort Worth residents who search in Spanish, and structure content so AI Overviews, ChatGPT, and Perplexity surface and cite your business.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Fort Worth leads — including storm season and Spanish-language opportunities." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the storm, hail, and suburban neighborhood pages that matter here." },
      { name: 'Build authority', desc: "Links and citations from trusted Fort Worth and Texas sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Fort Worth SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Fort Worth search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & hail damage SEO', 'Spanish-language optimization', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Fort Worth?', a: "Most Fort Worth SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Fort Worth?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6 — faster on tighter neighborhood terms and slower on the most competitive metro-wide keywords. Because storm season drives huge demand spikes, starting before the season is especially important here." },
      { q: 'Is SEO better than Google Ads in Fort Worth?', a: "They do different jobs. Ads can work, but during storm season every contractor in town is bidding and ad costs spike sharply. SEO builds an asset you own that keeps producing leads at a lower cost per lead over time — through peak season and the quiet months after it." },
      { q: 'Should my Fort Worth SEO include storm and hail damage content?', a: "Absolutely. Rankings take months to build, so you need to be ranking for storm damage, hail repair, and emergency restoration before the storm hits — not the day after. We optimize for those terms in the off-season so your busiest weeks land on you." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm/hail damage SEO, Spanish-language optimization, and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Can you help me rank in Spanish for Hispanic customers?', a: "Yes. About 42% of Fort Worth residents are Hispanic and many search in Spanish. Optimizing for Spanish-language searches across neighborhoods like Saginaw, Haltom City, and parts of central Fort Worth is a significant competitive edge most contractors ignore." },
      { q: 'Which areas around Fort Worth do you cover?', a: "Fort Worth proper plus the surrounding suburbs — Keller, Southlake, Mansfield, Burleson, Crowley, North Richland Hills, Haltom City, Saginaw, and Benbrook — with genuine local pages for each rather than one generic Fort Worth page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility — especially before storm season — the less you depend on paying brokers for shared leads that four competitors also bought." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Fort Worth Web Design Company | OnwardCraft',
    metaDescription:
      'Fort Worth web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in a hail market with fast-growing suburbs.',
    eyebrow: 'Web Design · Fort Worth, TX',
    h1: 'Fort Worth web design that turns visitors into booked jobs',
    h2Exact: 'Fort Worth Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Fort Worth contractors fast, mobile-first sites engineered to turn visitors into booked work — ready for storm season, ready for suburban growth, and built to reflect Fort Worth's own identity, not a Dallas hand-me-down.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Fort Worth contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn Keller-to-Crowley visitors into booked jobs — built to stand out in a market where hail storms, suburban growth, and a 42% Hispanic population create demand spikes that reward whoever is best positioned.",
    aioQuestion: 'What makes a good contractor website in Fort Worth?',
    aioAnswer:
      "A good Fort Worth contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific neighborhoods and suburbs you serve. Because storm-chaser competition is intense and most searches happen on mobile, a fast mobile site with obvious storm and emergency CTAs — and local content that reflects Fort Worth's own identity, not a generic Dallas page — is what separates a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step — and in a storm market like Fort Worth, the next guy who ranked before the hail hit is already getting the calls. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Fort Worth visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking — especially important when storm-season traffic spikes overnight." },
      { title: "It doesn't speak to Fort Worth neighborhoods", body: "A homeowner in Southlake wants to see you serve Southlake — not a generic Texas page that could be anybody, and definitely not something that reads like a Dallas agency built it. We build sites that name the Fort Worth neighborhoods and suburbs you work, so visitors trust you're local and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Fort Worth website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your Fort Worth neighborhoods, and the jobs you actually want — with Fort Worth's own identity, not a Dallas clone." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Fort Worth traffic is. Fast, thumb-friendly, easy to call from when a storm just hit." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step — including storm and emergency CTAs during peak season." },
      { name: 'Copy that sells', desc: "Words that speak to Fort Worth homeowners and book the job — not filler text that reads like a national template with the city name swapped in." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages for Fort Worth and the suburbs." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Neighborhood and suburb pages', desc: "Pages built for Keller, Southlake, Mansfield, Burleson, Camp Bowie, Ryan Place, and the rest, so you rank where your customers actually are.", featured: true },
      { name: 'Storm-ready and AI-search ready', desc: "Storm and emergency CTAs built in, plus structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your Fort Worth neighborhoods, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page and storm-ready messaging where it matters." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Fort Worth web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Fort Worth?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in Fort Worth?', a: "That's the whole point. We build around the specific Fort Worth neighborhoods and suburbs you serve — not a generic Texas page or a Dallas clone — and make the offer and call button obvious so the site books jobs instead of just sitting there." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Fort Worth terms and be visible before storm season." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Fort Worth traffic comes from — including the surge of calls that happens right after a hail storm when every homeowner is on their phone looking for a roofer." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Fort Worth site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'fort-worth', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Fort Worth Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Fort Worth website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs — storm-season ready.',
    eyebrow: 'Website Redesign · Fort Worth, TX',
    h1: 'Redesign your Fort Worth website without losing your rankings',
    h2Exact: 'Fort Worth Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — and in a hail market, it costs you a surge of work every storm season. We redesign Fort Worth contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Fort Worth contractor sites for speed and conversions, build them to reflect Fort Worth's own identity — not a generic Texas template — and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them — because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Fort Worth site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket roofing or restoration job, Fort Worth homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better and your storm experience runs deeper." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Fort Worth visitors before they ever see your offer — including the surge of traffic that hits right after a hail storm, when homeowners are on their phones looking for contractors immediately." },
      { title: "It doesn't reflect Fort Worth", body: "A generic Texas page with a city name swapped in isn't convincing to a homeowner in Mistletoe Heights or Keller. And it definitely won't rank well for the neighborhood-specific searches that drive your best leads. We rebuild around Fort Worth's real neighborhoods and suburbs — Camp Bowie, Ryan Place, Southlake, Burleson — so the new site earns trust and rankings." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned — critical to protect before storm season." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and storm and emergency CTAs where they actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings, especially when post-storm traffic spikes." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Fort Worth traffic lives — including the surge after a hail event." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs — and that feels like Fort Worth, not a Dallas agency's hand-me-down." },
      { name: 'Neighborhood and suburb rebuild', desc: "Rebuilt around the Fort Worth neighborhoods and suburbs you serve — Keller, Southlake, Mansfield, Burleson, Camp Bowie — so the new site stands out and ranks where your customers actually search.", featured: true },
      { name: 'Storm-ready and AI-search ready', desc: "Storm and emergency CTAs built in, plus structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings — and what storm-season traffic you could be capturing — then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build — reflecting Fort Worth's identity, not a generic Texas template." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast and prepare every redirect and SEO detail for a clean migration, including storm and neighborhood content." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates before each storm season." },
    ],
    pricing: {
      heading: 'Transparent Fort Worth redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Fort Worth?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, isn't bringing in leads, reads like a generic Texas page rather than a Fort Worth business, or leaves storm-season traffic on the table, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost — including any storm or hail content that's already earning you traffic." },
      { q: 'Will the redesign help me compete in Fort Worth?', a: "Yes. We rebuild around the specific Fort Worth neighborhoods and suburbs you serve — not a generic template — keep the site fast, make the offer and storm CTAs obvious, and make sure you're ready to capture the next surge of post-storm traffic." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings — especially important when post-storm traffic hits overnight." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const fortWorthCity = {
  citySlug: 'fort-worth', city: 'Fort Worth', state: 'Texas', stateAbbr: 'TX', metro: 'Fort Worth',

  titleTag: 'Fort Worth Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Fort Worth contractors. Get found, get booked, and own your leads — built for hail alley and fast-growing suburbs.',

  eyebrow: 'Fort Worth · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Fort Worth contractors found and booked',
  h2Exact: 'Fort Worth Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Fort Worth's hail seasons, fast-growing suburbs, and 42% Hispanic market. One team to get you ranking, converting, and off the rented-lead treadmill — before the next storm hits.",
  heroProof: ['Built for the trades', 'Neighborhood-by-neighborhood targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Fort Worth audit',

  intro:
    "If you run a contracting business in Fort Worth, you're navigating a market unlike anywhere else in Texas. Fort Worth is not Dallas — it has its own neighborhoods, its own culture, and its own identity, and locals will remind you of that. More importantly, it sits in the heart of North Texas hail alley, which means storm-driven demand spikes multiple times a year, fast-growing suburbs from Keller to Crowley keep feeding new homeowners, and roughly 42% of residents are Hispanic with significant Spanish-language search demand. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack for the neighborhoods you serve — before the storms come.",
  aioQuestion: 'How do Fort Worth contractors get more leads online?',
  aioAnswer:
    "Fort Worth contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches — including storm damage and hail repair — and local SEO that wins the Google Map Pack neighborhood by neighborhood. Because roughly 42% of residents are Hispanic and storm-driven demand spikes are a regular feature of this market, contractors who rank before storm season and show up in Spanish searches win significantly more work than those who rely on generic Texas templates and rented leads.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Fort Worth searches \"near me.\" The single highest-return move for most contractors — especially in a market where storms create demand spikes and the ranked contractor books the work.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search — including storm damage, hail repair, and Spanish-language searches — and build an asset you own instead of renting traffic from ads or lead brokers.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn Fort Worth visitors into booked jobs — storm-ready, suburb-targeted, and built to reflect Fort Worth's own identity instead of a Dallas hand-me-down.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned — ready for the next storm season.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Fort Worth?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — especially through Fort Worth's storm season." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand hail storm surges, emergency restoration calls, and what Fort Worth homeowners search for after severe weather." },
    { q: "Why is Fort Worth's market different?", a: "Fort Worth sits in North Texas hail alley — some of the most frequent and damaging hail in the country — so storm-driven demand spikes are a regular feature of this market. It also has roughly 42% Hispanic residents with significant Spanish-language search demand, and fast-growing suburbs from Keller to Crowley feeding a constant stream of new homeowners. This isn't a generic Texas market, and it isn't Dallas." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Fort Worth areas do you serve?', a: "Fort Worth proper plus the surrounding suburbs — Keller, Southlake, Mansfield, Burleson, Crowley, North Richland Hills, Haltom City, Saginaw, and Benbrook — and the historic Fort Worth neighborhoods: Stockyards, Camp Bowie, Mistletoe Heights, Ryan Place, Fairmount, and Near Southside." },
    { q: 'Where should I start?', a: "Start with a free Fort Worth audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — including what you should have in place before storm season. No pitch deck, just a plan." },
  ],
};

// ATLANTA — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across Atlanta's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// ATLANTA — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why winning Atlanta local search is won or lost in the suburbs',
  body:
    "The Atlanta metro is home to nearly 6.5 million people, but the money for home services is almost never downtown. It's in Alpharetta, Marietta, Duluth, Smyrna, Woodstock, and the ring of fast-growing suburbs stretching into Cherokee, Forsyth, and Hall Counties. Homeowners in those suburbs are searching hyper-locally — \"HVAC near Alpharetta\" or \"roofer in Marietta\" — because Atlanta's traffic is legendary. When your pipe is leaking or your AC dies in August, you are not calling someone who might be stuck on I-285. You call whoever looks local and shows up fast. Two seasonal realities define Atlanta demand. Summer heat and humidity from May through September are extreme — that's when HVAC calls spike and roofs take a beating from intense sun and afternoon storms. Then come the ice storms. Atlanta doesn't get snow the way the northeast does; it gets ice. A half-inch of ice shuts the whole city down and can spike roofing, tree removal, and restoration calls overnight. The contractors already in the Map Pack when that first ice forecast hits are the ones who book the work.",
  pullQuote: 'In Atlanta, the work is in the suburbs — and the homeowner who is not calling someone stuck in traffic is calling whoever shows up first in the Map Pack.',
  donut: {
    title: 'How Atlanta searches',
    value: 50,
    centerLabel: 'Black/African American metro',
    legend: [
      { label: 'Black / African American', pct: 50, kind: 'teal' },
      { label: 'All other residents', pct: 50, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Summer HVAC (May–Sep) and ice storm roofing/restoration (Jan–Feb)',
  seasonalDemand: [
    { m: 'J', v: 82, peak: true }, { m: 'F', v: 78, peak: true }, { m: 'M', v: 72, peak: true },
    { m: 'A', v: 76, peak: true }, { m: 'M', v: 90, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'J', v: 100, peak: true }, { m: 'A', v: 98, peak: true }, { m: 'S', v: 88, peak: true },
    { m: 'O', v: 52 }, { m: 'N', v: 50 }, { m: 'D', v: 60 },
  ],
  stats: [
    { value: '6.5M', label: 'people across the Atlanta metro' },
    { value: 'May–Sep', label: 'peak HVAC season driven by extreme heat and humidity', accent: true },
    { value: 'Jan–Feb', label: 'ice storm season — overnight demand spikes for roofing and restoration' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Buckhead', 'Midtown', 'Inman Park', 'Virginia-Highland', 'Decatur',
    'Sandy Springs', 'Roswell', 'Alpharetta', 'Marietta', 'Smyrna',
    'Duluth', 'Lawrenceville', 'Cumming', 'Woodstock', 'Johns Creek',
  ],
};

const AREAS = [
  'Alpharetta', 'Marietta', 'Smyrna', 'Duluth', 'Lawrenceville',
  'Roswell', 'Sandy Springs', 'Decatur', 'Cumming', 'Woodstock',
  'Buckhead', 'Midtown Atlanta', 'Inman Park', 'Virginia-Highland', 'Johns Creek',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods and suburbs you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand Atlanta summers where HVAC calls stack up, ice storm nights where roofing demand spikes, and spring hail seasons that flood restoration queues — so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually know the Atlanta market',
    body: "Suburb-by-suburb, neighborhood-by-neighborhood targeting from Alpharetta to Smyrna, plus content built around the traffic reality that makes hyper-local proximity search even more important here than in most metros. The stuff a national shop can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say an Atlanta contractor gets around 2,000 local \"near me\" impressions a month across a handful of suburbs. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a market where traffic makes homeowners local-first in their searches, that gap is brutal. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA', metro: 'Atlanta',
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const atlantaLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Atlanta Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Atlanta and three businesses show up on the map. We get you into those three — in Alpharetta, Marietta, Duluth, and the suburbs where.',
    eyebrow: 'Local SEO · Atlanta, Georgia',
    h1: 'When Atlanta searches for what you do, be the first name they find',
    h2Exact: 'Atlanta Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a market where traffic makes homeowners fiercely local-first, we get you into that top three for your suburbs and neighborhoods — so the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Atlanta audit',
    intro:
      "Atlanta local SEO comes down to one thing: when a homeowner in Alpharetta or Marietta searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. Atlanta's legendary traffic means homeowners are not calling someone across town — they want whoever is nearby and trusted, and the Map Pack is how they decide. Here's how you become one of those three.",
    aioQuestion: 'How do Atlanta businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the exact services and suburbs you want; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real Atlanta neighborhoods and suburbs. Atlanta's traffic reality makes hyper-local targeting even more powerful here — homeowners search by suburb, not just city, so the winners build content for Alpharetta, Marietta, Duluth, and Smyrna specifically. Ranking for seasonal demand — HVAC in summer, roofing after ice storms — ahead of the season is often what separates the full calendar from the slow one.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. Atlanta homeowners are not scrolling past them — not when I-285 makes distance a real factor. Getting into that top three for the suburbs where you work is usually the single highest-return move an Atlanta contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Atlanta homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're invisible in the suburbs where the money is", body: "Most of Atlanta's home-services spending is in the suburbs — Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock. A generic Atlanta page doesn't rank for those suburb-specific searches. Suburb-by-suburb targeting is how you reach buyers your competitors are ignoring entirely." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Atlanta-area searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Suburb and neighborhood pages', desc: "Real pages for Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock and the rest — so you rank for the suburb someone's actually searching, not just \"Atlanta.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Atlanta-area sources Google trusts — local press, associations, chambers of commerce, partners. This is what separates page one from page two here." },
      { name: 'Seasonal demand SEO', desc: "We rank you for summer HVAC searches before May and for ice storm roofing and restoration searches before January — so you're visible when demand spikes, not chasing it after.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your suburbs and neighborhoods and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Suburb and service-area pages across the Atlanta metro, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next suburb." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several Atlanta suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Suburb landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across the Atlanta metro.', features: ['Everything in Local Growth', 'Local link building', 'Seasonal demand SEO', 'Multi-suburb and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Atlanta?', a: "Most Atlanta engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Atlanta suburb keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days is selling you something." },
      { q: 'What makes Atlanta local SEO different?', a: "Two things. First, the work is in the suburbs — Alpharetta, Marietta, Duluth, Smyrna — not just downtown Atlanta, so you need suburb-specific targeting, not a generic city page. Second, Atlanta's traffic makes homeowners fiercely local-first in how they search: they want the contractor who is actually nearby, which makes Map Pack proximity signals even more critical here." },
      { q: 'How important is seasonal timing for Atlanta local SEO?', a: "Very important. HVAC demand spikes hard from May through September because Atlanta's heat and humidity are extreme. Ice storms in January and February can spike roofing, tree removal, and restoration demand overnight — and ranking takes months to build. You need to be in place before the season, not chasing it after." },
      { q: 'Which areas do you cover?', a: "The full Atlanta metro — Alpharetta, Marietta, Smyrna, Duluth, Lawrenceville, Roswell, Sandy Springs, Decatur, Cumming, Woodstock, Buckhead, Midtown Atlanta, Inman Park, Virginia-Highland, Johns Creek, and more. We build genuine suburb and neighborhood pages instead of one generic Atlanta page, because that's what actually ranks." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand Atlanta's summer HVAC emergencies, ice storm roofing calls, and the new construction wave in Cherokee and Forsyth Counties." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your suburbs, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Atlanta SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Atlanta SEO that ranks contractors on Google and brings in leads you own. Suburb-by-suburb targeting, seasonal demand SEO, revenue-tied reporting.',
    eyebrow: 'SEO Services · Atlanta, Georgia',
    h1: 'Get your Atlanta business to the top of Google and keep it there',
    h2Exact: 'Atlanta SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Atlanta customers search and the leads keep coming. We build that ranking suburb by suburb and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Atlanta SEO audit',
    intro:
      "Atlanta SEO comes down to one question: when someone in Alpharetta or Marietta searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords across the suburbs where Atlanta's home-services work actually lives — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Atlanta businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content tied to specific Atlanta suburbs and neighborhoods, and earning links from trusted Georgia sources. In a market where traffic makes homeowners search hyper-locally, suburb-specific pages for Alpharetta, Marietta, Duluth, and Smyrna are often the fastest way to pull ahead. Ranking for seasonal HVAC and ice storm roofing searches before demand spikes is the other major edge.",
    problemHeading: "Three reasons your Atlanta site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google. In a metro with this many contractors, if you're not in the top handful of results for what you sell in the suburbs you serve, your site is basically invisible — no matter how good your work is." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost. In a fast-growing market like Atlanta's suburbs, the value of that compounding asset only grows." },
      { title: "You're not ranking for the demand that matters", body: "Atlanta demand swings hard with the seasons — HVAC from May through September, ice storm roofing and restoration in January and February, hail and storm damage in spring. The contractors who rank for those terms ahead of time catch the spike. If your SEO ignores seasonal and emergency searches, you're leaving your busiest weeks on the table." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Atlanta-area customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Atlanta and Georgia industry sources. In a market this competitive, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches across your suburbs alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Seasonal & emergency SEO', desc: "We rank you for summer HVAC searches and ice storm roofing and restoration terms before demand spikes — so you're booked when it hits, not scrambling after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Atlanta-area leads." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including the seasonal and emergency terms that matter in Atlanta." },
      { name: 'Build authority', desc: "Links and citations from trusted Atlanta-area and Georgia industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set or suburb." },
    ],
    pricing: {
      heading: 'Transparent Atlanta SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Atlanta-area search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Seasonal & emergency SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Atlanta?', a: "Most Atlanta SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Atlanta?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on tighter suburb terms and slower on the most competitive metro-wide keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most Atlanta contractors do best running SEO as the long-term engine and ads for short-term spikes during peak HVAC season or after an ice storm." },
      { q: 'Should my Atlanta SEO target seasonal demand?', a: "Yes. HVAC demand spikes hard from May through September because Atlanta's heat and humidity are relentless. Ice storms hit in January and February and can spike roofing and restoration demand overnight. Ranking takes months to build, so you have to be in place before the season, not chasing it after. We optimize for those seasonal and emergency terms ahead of time." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add seasonal/emergency and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which Atlanta suburbs do you cover?', a: "The full Atlanta metro — Alpharetta, Marietta, Smyrna, Duluth, Lawrenceville, Roswell, Sandy Springs, Decatur, Cumming, Woodstock, Buckhead, Midtown, Inman Park, Johns Creek and more — with genuine suburb pages rather than one generic Atlanta page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Atlanta Web Design Company | OnwardCraft',
    metaDescription:
      'Atlanta web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors in Alpharetta, Marietta, Duluth, and the suburbs.',
    eyebrow: 'Web Design · Atlanta, Georgia',
    h1: 'Atlanta web design that turns visitors into booked jobs',
    h2Exact: 'Atlanta Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Atlanta contractors fast, mobile-first sites engineered to turn visitors into booked work — designed for a market where homeowners pick local and pick fast.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Atlanta contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, nothing that says you actually serve Marietta or Alpharetta. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn suburban Atlanta visitors into booked jobs — because in a market where distance is everything, looking local and trustworthy is how you win.",
    aioQuestion: 'What makes a good contractor website in Atlanta?',
    aioAnswer:
      "A good Atlanta contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and names the specific suburbs and neighborhoods you serve. Because Atlanta's traffic makes homeowners local-first, a site that says 'serving Alpharetta, Marietta, and Duluth' converts far better than one with a generic Atlanta page. Most Atlanta searches happen on mobile, so mobile speed and an obvious next step are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy — and in Atlanta the next guy is one tap away. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Atlanta visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It doesn't speak to the suburbs where you work", body: "A homeowner in Alpharetta wants to see you serve Alpharetta — not a generic 'Atlanta' page that could be anybody. Atlanta traffic means people want the local contractor, and a site that says so converts dramatically better. We build sites that name the suburbs you work, so visitors trust you're nearby and Google ranks you for the right searches." },
    ],
    servicesHeading: "What's in an OnwardCraft Atlanta website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your suburbs, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Atlanta-area traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and suburb-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Suburb-targeted pages', desc: "Pages built around Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock, and the other suburbs you serve — so you stand out as the local choice instead of blending into a generic Atlanta page.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your suburbs, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Atlanta web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + suburb pages', 'Speed & Core Web Vitals', 'Suburb-targeted pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Atlanta?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Will my site help me stand out in the Atlanta suburbs?', a: "That's the whole point. We build around the specific suburbs you serve — Alpharetta, Marietta, Duluth, Smyrna, and the rest — keep the site fast, and put a clear offer and call button front and center. Atlanta homeowners pick local and pick fast, and your site will show them you are the local option." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and suburb-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Atlanta-area terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Atlanta-area traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Atlanta site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'atlanta', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Atlanta Website Redesign | OnwardCraft',
    metaDescription:
      'Redesign your Atlanta website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs across Alpharetta, Marietta.',
    eyebrow: 'Website Redesign · Atlanta, Georgia',
    h1: 'Redesign your Atlanta website without losing your rankings',
    h2Exact: 'Atlanta Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore. We redesign Atlanta contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Atlanta contractor sites for speed and conversions, build them to speak directly to the suburbs where your customers live, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Atlanta site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, Atlanta homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better. In the fast-growing Atlanta suburbs, where new construction means plenty of fresh competition, that first impression matters more than ever." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Atlanta visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It blends into a competitive market and doesn't name the suburbs you serve", body: "Traffic that doesn't turn into calls is wasted — and a generic old site gives an Atlanta homeowner no reason to pick you over the next result. Atlanta traffic makes people fiercely local-first, and a site that doesn't specifically name Alpharetta, Marietta, or Duluth reads as if you might not actually be local. We rebuild for conversions and for the suburbs you actually serve." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Atlanta-area traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Suburb-targeted rebuild', desc: "Rebuilt around Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock, and the other suburbs you serve — so the new site signals you are genuinely local, not just another Atlanta page.", featured: true },
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
      heading: 'Transparent Atlanta redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + suburb pages', 'Suburb-targeted rebuild'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Atlanta?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or doesn't clearly name the Atlanta suburbs you serve — it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Will the redesign help me compete across the Atlanta suburbs?', a: "Yes, and that's the point. Atlanta homeowners are local-first because of traffic — they want the contractor who is actually nearby. We rebuild around the specific suburbs you serve and make it immediately obvious to both the visitor and Google that you are the local option." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const atlantaCity = {
  citySlug: 'atlanta', city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA', metro: 'Atlanta',

  titleTag: 'Atlanta Marketing for Contractors | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Atlanta contractors. Get found in Alpharetta, Marietta, Duluth, and the suburbs where the work is — own your leads instead.',

  eyebrow: 'Atlanta · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Atlanta contractors found and booked',
  h2Exact: 'Atlanta Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Atlanta's sprawling suburban market — where traffic makes homeowners fiercely local-first and seasonal demand spikes can book a calendar overnight.",
  heroProof: ['Built for the trades', 'Suburb-by-suburb targeting', 'No lock-in contracts'],
  primaryCta: 'Get my free Atlanta audit',

  intro:
    "If you run a contracting business in Atlanta, the work is in the suburbs — Alpharetta, Marietta, Duluth, Smyrna, Cumming, Woodstock. Atlanta's legendary traffic means homeowners search hyper-locally; they want the contractor who is actually nearby, and the Map Pack is how they decide. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack suburb by suburb — plus content that positions you for summer HVAC season and winter ice storm demand before those spikes hit. Here's how we help Atlanta contractors do exactly that.",
  aioQuestion: 'How do Atlanta contractors get more leads online?',
  aioAnswer:
    "Atlanta contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack suburb by suburb. Because Atlanta's traffic makes homeowners strongly prefer nearby contractors, the businesses that target Alpharetta, Marietta, Duluth, and Smyrna specifically — rather than relying on a generic Atlanta page — win far more work. Ranking for summer HVAC and ice storm roofing terms before the season hits is the other major edge.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Atlanta searches \"near me.\" The single highest-return move for most local contractors — done suburb by suburb, from Alpharetta to Smyrna.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads — including seasonal HVAC and ice storm demand.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — designed to signal that you're the local suburban contractor, not a generic city page.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add suburb-specific targeting, and migrate carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Atlanta?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads across the Atlanta suburbs." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand Atlanta's summer HVAC emergencies, ice storm roofing calls, and the new construction wave in Cherokee and Forsyth Counties." },
    { q: 'Why does the Atlanta market need a different approach?', a: "The work is in the suburbs, not downtown. Atlanta's legendary traffic makes homeowners fiercely local-first in their searches — they want the contractor who is actually nearby. That makes suburb-specific targeting more powerful here than in most metros. Seasonal demand is also dramatic: HVAC from May through September and ice storms in January and February can spike demand overnight." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Atlanta areas do you serve?', a: "The full metro — Alpharetta, Marietta, Smyrna, Duluth, Lawrenceville, Roswell, Sandy Springs, Decatur, Cumming, Woodstock, Buckhead, Midtown Atlanta, Inman Park, Virginia-Highland, Johns Creek, and more." },
    { q: 'Where should I start?', a: "Start with a free Atlanta audit. We'll look at your website, your rankings, and your Map Pack presence across the suburbs you serve, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};

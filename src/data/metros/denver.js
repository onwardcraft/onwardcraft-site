// Per-metro × per-service local landing pages for DENVER. Renders via /[city]/[service]/.
// BUILT with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (market, areas, founder, why, proof) are defined once
// and reused across that city's service pages. Service-specific blocks are
// authored per entry. PRICING is aligned to market range; confirm with founder.
//
// DENVER ANGLE (NOT Miami's bilingual one): Colorado is Hail Alley — the most
// severe hail season in North America — so roofing/restoration demand spikes
// hard every storm. Layered on top: one of the fastest-growing transplant
// markets in the country, plus winter/snow demand and altitude. That's the
// genuine local wedge, repeated across all 4 service pages and the hub.

// ===========================================================================
// DENVER — shared city blocks (also imported by the /denver/ hub in cities.js)
// ===========================================================================
const MARKET = {
  heading: 'Why Denver is a storm-season market, not just another metro',
  body:
    "The Denver metro holds right around 3 million people and keeps climbing — it pulled in transplants at one of the fastest rates in the country last year, and forecasts put the region past 3.6 million by 2030. That growth means a steady stream of new homeowners who've never hired a local contractor and start every search on Google. But the thing that really sets Denver apart is hail. Colorado sits in Hail Alley, the most violent hail belt in North America, and the metro takes three or four serious storms a season from roughly mid-April through mid-September. One May 2017 storm alone caused more than $2 billion in damage. When hail hits, demand for roofing, restoration, gutters, and exteriors spikes overnight, and the contractors sitting in the top three of the Map Pack are the ones who catch that wave.",
  pullQuote: 'When the next hailstorm hits, the contractors in the top three book the calendar. Everyone else waits for the leftovers.',
  donut: {
    title: 'How Denver searches',
    value: 60,
    centerLabel: 'on mobile',
    legend: [
      { label: 'Mobile', pct: 60, kind: 'teal' },
      { label: 'Desktop', pct: 40, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Hail season (Apr–Sep) + winter storm calls',
  seasonalDemand: [
    { m: 'J', v: 48, peak: true }, { m: 'F', v: 46, peak: true }, { m: 'M', v: 54 },
    { m: 'A', v: 72, peak: true }, { m: 'M', v: 92, peak: true }, { m: 'J', v: 96, peak: true },
    { m: 'J', v: 90, peak: true }, { m: 'A', v: 84, peak: true }, { m: 'S', v: 76, peak: true },
    { m: 'O', v: 58 }, { m: 'N', v: 50 }, { m: 'D', v: 52, peak: true },
  ],
  stats: [
    { value: '3M+', label: 'people across the Denver metro' },
    { value: '#1–2', label: 'state in the nation for hail-damage insurance claims', accent: true },
    { value: 'Apr–Sep', label: 'hail season, when roofing and restoration demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'LoDo', 'RiNo', 'Cherry Creek', 'Highlands', 'Capitol Hill',
    'Washington Park', 'Five Points', 'Central Park', 'Wash Park', 'Berkeley',
    'Sloan\'s Lake', 'Park Hill', 'Baker', 'Stapleton', 'Wash Park West',
  ],
};

const AREAS = [
  'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Centennial',
  'Littleton', 'Thornton', 'Englewood', 'Wheat Ridge', 'Broomfield',
  'Highlands Ranch', 'Parker', 'Castle Rock', 'Commerce City',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We get storm season, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak Denver',
    body: "Hail-season demand, the transplant boom, winter storm calls, real neighborhood targeting. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: when a hailstorm rolls through, a Denver roofer can see \"roof repair near me\" searches jump for weeks. Moving from page-two invisibility into the top three is the difference between catching that storm surge and watching it go to the three companies already ranked. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Denver', state: 'Colorado', stateAbbr: 'CO', metro: 'Denver Metro',
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const denverLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Denver Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in Denver and three businesses show up on the map. We get you into those three so you catch every hailstorm surge. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Denver Metro',
    h1: 'When Denver searches for what you do, be the first name they find',
    h2Exact: 'Denver Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. We get you into that top three, so when the next hailstorm rolls through, the call lands with you instead of whoever ranked first.",
    primaryCta: 'Get my free Denver audit',
    intro:
      "Denver local SEO comes down to one moment: a homeowner in Highlands or Centennial pulls out their phone after a storm, searches \"roof repair near me,\" and taps one of the three businesses Google pins to the map. They almost never scroll. In a metro that takes three or four serious hailstorms a season and adds new homeowners every month, becoming one of those three is the whole game. Here's how you do it.",
    aioQuestion: 'How do Denver businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile optimized for the services and neighborhoods you want; consistent name, address, and phone listings across the web; a steady drip of real reviews; and local content built around how Denver searches. Because Colorado sits in Hail Alley, demand spikes hard after every storm, so the winners look established, answer fast, and already rank before the hail hits.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three is usually the single highest-return move a Denver contractor can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same Denver homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning." },
      { title: "You're not ranked when the hail hits", body: "Storm demand in Denver shows up in days, not months. If you're not already in the top three when a hailstorm rolls through, you can't climb fast enough to catch the surge — the homeowners are calling the companies who were ranked before the storm. Ranking is something you build ahead of the season, not after it." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which Denver searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Highlands, Cherry Creek, Centennial, Arvada and the rest, so you rank for the neighborhood someone's actually searching, not just \"Denver.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from Denver sources Google trusts — local press, associations, partners. This is what separates page one from page two here." },
      { name: 'Storm-season readiness', desc: "We get you ranked and your profile primed before hail season so you catch the surge instead of scrambling after the storm hits. Almost nobody plans this ahead.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas, and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why ranking before hail season beats scrambling after it." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the metro, plus the on-page work to back them up." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For contractors fighting across several Denver suburbs.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the metro before hail season.', features: ['Everything in Local Growth', 'Local link building', 'Storm-season readiness', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Denver?', a: "Most Denver engagements land between $750 and $2,500 a month, depending on how many suburbs and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive Denver keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this crowded is selling you something." },
      { q: 'What makes Denver local SEO different from regular SEO?', a: "Hail. Colorado sits in Hail Alley, so roofing, restoration, and exterior trades see sharp demand spikes three or four times a season, and your ranking has to be in place before the storm to catch it. On top of that, Denver is one of the fastest-growing metros in the country, so there's a constant flow of new homeowners searching for a contractor they've never used." },
      { q: 'When is hail season in Denver and why does it matter for SEO?', a: "Denver's hail season runs from about mid-April through mid-September, with the metro typically taking three or four serious storms a year. Demand for roofing and restoration spikes within days of a storm. Because rankings take months to build, you have to be in the top three before hail season starts — not trying to climb after the storm has already sent the calls to your competitors." },
      { q: 'Which areas do you cover?', a: "All of the Denver metro and the suburbs around it — Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, Highlands Ranch, Parker, Castle Rock, and more. We build genuine neighborhood pages instead of one generic Denver page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, storm-driven demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Denver SEO Company | Rank Higher, Get More Leads | OnwardCraft',
    metaDescription:
      'Denver SEO that ranks contractors on Google and brings in leads you own — built for hail season and a fast-growing market. Revenue-tied reporting, no lock-in. Free audit.',
    eyebrow: 'SEO Services · Denver Metro',
    h1: 'Get your Denver business to the top of Google and keep it there',
    h2Exact: 'Denver SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your Denver customers search, and the leads keep coming — including the storm surges. We build that ranking and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free Denver SEO audit',
    intro:
      "SEO services in Denver come down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords — including the storm-driven \"hail damage\" and \"roof repair\" terms that spike every season — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Denver businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted Denver sources. In a fast-growing, hail-prone market like Denver, ranking for storm-restoration terms before the season and keeping the site fast on mobile are two of the quickest ways to pull ahead of slower competitors.",
    problemHeading: "Three reasons your Denver site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're not ranked for storm terms before the season", body: "When hail hits Denver, searches for \"hail damage roof\" and \"storm restoration\" surge for weeks. If your site isn't already ranking for those terms, you miss the spike entirely — and you can't build that ranking fast enough once the storm has landed. We get you ranked ahead of season." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your Denver customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real Denver and industry sources. In a competitive market, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Storm & restoration SEO', desc: "We rank you for the hail-damage and restoration terms that spike every Denver season, and get you ranked before the storms hit, not after.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real Denver leads — including the storm-season terms." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including storm-restoration pages where it pays." },
      { name: 'Build authority', desc: "Links and citations from trusted Denver and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Denver SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and suburbs.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own Denver search, storms and all.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Storm & restoration SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Denver?', a: "Most Denver SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Denver?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on low-competition terms and slower on the most competitive Denver keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes — like the days right after a hailstorm." },
      { q: 'Can SEO help me capture Denver hail-storm demand?', a: "Yes, and it's one of the biggest reasons to start early. After a Denver hailstorm, searches for \"hail damage roof,\" \"storm restoration,\" and \"roof replacement\" spike for weeks. Rankings take months to build, so we get you ranked for those terms before the season. Show up after the storm and the demand has already gone to whoever ranked first." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add storm-restoration and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around Denver do you cover?', a: "All of the Denver metro and the surrounding suburbs — Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, Highlands Ranch and more — with genuine local pages rather than one generic Denver page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Denver Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Denver web design that turns visitors into booked jobs — fast, mobile-first sites built for contractors and storm-season demand. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Denver Metro',
    h1: 'Denver web design that turns visitors into booked jobs',
    h2Exact: 'Denver Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build Denver contractors fast, mobile-first sites engineered to turn visitors into booked work — and ready to handle the traffic surge when a hailstorm sends everyone searching at once.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Denver contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer when a homeowner is standing in their yard looking at hail-dented gutters. Web design done right fixes all of that. We build sites that load fast, look like the established pro you are, and turn LoDo-to-Castle-Rock visitors into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Denver?',
    aioAnswer:
      "A good Denver contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, and proves trust with reviews and real project photos. Because most Denver searches happen on mobile and storm demand can surge overnight, mobile speed and a site that can handle a traffic spike are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your Denver visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It buckles when storm demand spikes", body: "After a Denver hailstorm, everyone searches at once. A slow or poorly built site that can't convert that rush quietly hands the surge to a competitor. We build for speed and clarity so you actually capture the spike." },
    ],
    servicesHeading: "What's in an OnwardCraft Denver website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your Denver traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners staring at storm damage and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Storm-ready landing pages', desc: "Dedicated hail-damage and restoration pages built to convert the storm surge, with the fast load and clear call-to-action that rush needs. Almost no competitor builds these.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, including the storm-restoration pages that catch hail-season demand." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Denver web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Storm-ready landing pages'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Full storm-restoration build', 'Advanced SEO + schema', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Denver?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count, whether you need dedicated storm-restoration pages, and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Can you build hail-damage and storm-restoration pages?', a: "Yes, and in Denver it's one of the smartest things you can do. We build dedicated, fast-loading pages for hail damage, roof replacement, and storm restoration so that when the next storm sends everyone searching, your site is the one that ranks and converts the rush." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive Denver terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your Denver traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting Denver site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'denver', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Denver Website Redesign | More Leads, No Traffic Loss | OnwardCraft',
    metaDescription:
      'Redesign your Denver website without losing rankings. Faster, mobile-first rebuilds that convert more visitors into booked jobs and catch storm demand. Transparent pricing, free audit.',
    eyebrow: 'Website Redesign · Denver Metro',
    h1: 'Redesign your Denver website without losing your rankings',
    h2Exact: 'Denver Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, and unready when storm demand spikes. We redesign Denver contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Denver contractor sites for speed and conversions, build in the storm-restoration pages that catch hail-season demand, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your Denver site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job like a roof replacement, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your Denver visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It doesn't convert the storm surge", body: "When hail hits Denver, the search rush is brief and intense. A site that's slow or has no clear storm-restoration path wastes that traffic. We rebuild for conversions and add the pages that catch the spike." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your Denver traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Storm-restoration rebuild', desc: "We add dedicated hail-damage and restoration pages built to convert the storm surge, the part most Denver sites are missing entirely.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend you as search shifts toward AI.", featured: true },
    ],
    processName: 'How we redesign: a careful rebuild',
    process: [
      { name: 'Audit and plan', desc: "We analyze what's losing you leads and rankings, then map a redesign that fixes it without breaking what already works." },
      { name: 'Design', desc: "A modern, mobile-first, conversion-focused design you review and shape before we build." },
      { name: 'Rebuild and migrate', desc: "We rebuild fast, add the storm-restoration pages, and prepare every redirect and SEO detail for a clean migration." },
      { name: 'Launch with SEO care', desc: "We launch with redirects in place and monitor closely so rankings hold and improve, not drop." },
      { name: 'Optimize', desc: "Post-launch tuning based on what's converting, plus ongoing speed and updates." },
    ],
    pricing: {
      heading: 'Transparent Denver redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Storm-restoration pages'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Full storm-restoration build', 'Advanced SEO migration', 'Integrations & booking', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Denver?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size, whether you need dedicated storm-restoration pages, and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or has no clear path to convert storm demand, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can you add hail-damage and storm-restoration pages?', a: "Absolutely, and in Denver we recommend it. Dedicated, fast-loading storm-restoration pages let the rebuilt site catch the search surge after a hailstorm, which most Denver contractor sites are missing." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

// ===========================================================================
// DENVER — city hub (rendered at /denver/). Imports the shared blocks above.
// ===========================================================================
export const denverCity = {
  citySlug: 'denver', city: 'Denver', state: 'Colorado', stateAbbr: 'CO', metro: 'Denver Metro',

  titleTag: 'Denver Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Denver contractors — built for hail season and a fast-growing metro. Get found, get booked, and own your leads. Free Denver audit.',

  eyebrow: 'Denver · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Denver contractors found and booked',
  h2Exact: 'Denver Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for Denver's storm-driven, fast-growing market. One team to get you ranking, converting, and off the rented-lead treadmill — and ready before the next hailstorm hits.",
  heroProof: ['Built for the trades', 'Storm-season ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Denver audit',

  intro:
    "If you run a contracting business in Denver, you're fighting for attention in one of the fastest-growing metros in the country — and one that sits in Hail Alley, where storm demand can spike overnight. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search, and local SEO that puts you in the Map Pack before the next storm. Here's how we help Denver contractors do exactly that.",
  aioQuestion: 'How do Denver contractors get more leads online?',
  aioAnswer:
    "Denver contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack. Because Colorado sits in Hail Alley and the metro keeps adding new homeowners, the contractors who already rank when a storm hits and look established win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when Denver searches \"near me\" — so you catch the storm surge instead of missing it. The single highest-return move for most local businesses.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, including the hail-damage and restoration terms that spike every season, and build an asset you own instead of renting traffic from ads.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first websites engineered to turn visitors into booked jobs — and ready to handle the traffic rush when a hailstorm sends everyone searching at once.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, add the storm-restoration pages that catch hail demand, and migrate carefully so you keep every bit of ranking you've earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Denver?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — and so they're ranked before hail season starts." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, storm-driven demand, and insurance work." },
    { q: 'What makes Denver different from other markets?', a: "Two things. Colorado sits in Hail Alley, so roofing and restoration demand spikes three or four times a season and you have to be ranked before the storm to catch it. And Denver is one of the fastest-growing metros in the country, with a constant flow of new homeowners searching for a contractor." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which Denver areas do you serve?', a: "All of the Denver metro and the surrounding suburbs — Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton, Highlands Ranch, Parker, Castle Rock and more, plus city neighborhoods like LoDo, RiNo, Cherry Creek, and Highlands." },
    { q: 'Where should I start?', a: "Start with a free Denver audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest — especially with hail season in mind. No pitch deck, just a plan." },
  ],
};

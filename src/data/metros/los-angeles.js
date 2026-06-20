// LOS ANGELES — per-metro × per-service local landing pages + city hub.
// Service pages render via /[city]/[service]/; the hub renders via /[city]/.
// BUILD with the `onward-local-page` skill. SPEC: content/lead-content-plan/08 + 09.
//
// HONESTY RULE: new, founder-led agency. NO fabricated clients, reviews, counts,
// or results. Ship Service + FAQPage + Breadcrumb schema; NEVER Review schema.
// Map Pack = illustration; rank chart = labelled projection.
//
// Per-city shared blocks (MARKET, AREAS, FOUNDER, WHY, PROOF, BASE) are defined
// once and reused across LA's 4 service pages and the hub, because they
// describe the same city. Service-specific blocks are authored per entry.
// PRICING is fixed for cross-city consistency.

// ===========================================================================
// LOS ANGELES — shared city blocks
// ===========================================================================
const MARKET = {
  heading: 'Why ranking in Los Angeles is its own kind of hard',
  body:
    "Greater Los Angeles is home to roughly 12.7 million people, spread across a metro that runs from the San Fernando Valley down to the South Bay and out past the San Gabriel Valley. That sprawl changes everything. A roofer in Torrance and a roofer in Sherman Oaks are not competing for the same customer, even though both say they serve \"Los Angeles.\" If your listing targets the whole metro, you rank for none of it. The second thing that shapes this market is language: about 48% of the metro is Hispanic or Latino, and Spanish is spoken at home in roughly 40% of LA County households. A huge share of your customers search, read, and call in Spanish. The third thing is fire. Santa Ana wind season runs October through March, and the January 2025 fires showed how fast demand for roofing, restoration, and rebuilds can spike across whole neighborhoods.",
  pullQuote: 'In a metro this big and this bilingual, the contractor who targets the right neighborhoods in the right language is the one who gets the call.',
  donut: {
    title: 'How Los Angeles searches',
    value: 40,
    centerLabel: 'in Spanish',
    legend: [
      { label: 'Spanish spoken at home', pct: 40, kind: 'teal' },
      { label: 'English-only households', pct: 60, kind: 'grey' },
    ],
  },
  seasonTitle: 'When trade demand spikes',
  seasonCaption: 'Santa Ana / fire season (Oct–Mar), worst Dec–Jan',
  seasonalDemand: [
    { m: 'J', v: 90, peak: true }, { m: 'F', v: 76, peak: true }, { m: 'M', v: 62, peak: true },
    { m: 'A', v: 50 }, { m: 'M', v: 44 }, { m: 'J', v: 42 }, { m: 'J', v: 46 },
    { m: 'A', v: 52 }, { m: 'S', v: 60 }, { m: 'O', v: 74, peak: true }, { m: 'N', v: 82, peak: true },
    { m: 'D', v: 92, peak: true },
  ],
  stats: [
    { value: '12.7M+', label: 'people across the Greater Los Angeles metro' },
    { value: '~40%', label: 'of LA County households speak Spanish at home', accent: true },
    { value: 'Oct–Mar', label: 'Santa Ana wind and fire season, when demand spikes' },
    { value: 'Top 3', label: 'Map Pack spots that take most of the clicks' },
  ],
  neighborhoods: [
    'Downtown LA', 'Hollywood', 'Sherman Oaks', 'Studio City', 'Encino',
    'Van Nuys', 'Northridge', 'Pasadena', 'Glendale', 'Burbank',
    'Torrance', 'Long Beach', 'Santa Monica', 'West LA', 'East LA',
  ],
};

const AREAS = [
  'Los Angeles', 'Long Beach', 'Glendale', 'Pasadena', 'Burbank', 'Torrance',
  'Santa Monica', 'Inglewood', 'Pomona', 'El Monte', 'Downey', 'West Covina',
  'Norwalk', 'Whittier', 'Carson',
];

const FOUNDER =
  "I'll be straight with you: I started OnwardCraft because I kept watching good contractors hand Angi and HomeAdvisor a few grand a month for leads that three of their competitors bought too. You can't build a business on rented leads. So that's the whole point of what we do here — get you ranking and converting for the work you actually want, in the neighborhoods you actually serve, and let those leads belong to you. No 12-month handcuffs. If it's not working, you fire us.";

const WHY = [
  {
    title: 'We only do the trades',
    body: "Roofing, HVAC, plumbing, solar, electrical, restoration, GCs. We understand fire season, emergency calls, and insurance work, so everything we build is shaped around how your customers really search.",
  },
  {
    title: 'We get you off rented leads',
    body: "The whole goal is a pipeline you own. Not another monthly invoice to a lead broker for homeowners three competitors also bought.",
  },
  {
    title: 'We actually speak LA',
    body: "A metro too big for one generic listing, a market where 40% of households speak Spanish at home, real neighborhood targeting from Sherman Oaks to Torrance. The stuff a national agency can't do by swapping a city name into a template.",
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
    "Here's a rough picture, clearly labelled as a projection and not a result we're claiming: say a Los Angeles contractor gets around 2,000 local \"near me\" impressions a month across the neighborhoods they actually serve. Moving from page-two invisibility into the top three is the difference between a trickle of calls and a booked-out calendar — and in a metro this size, even one borough's worth of demand is a full schedule. In your free audit, we model the real numbers for your business — your rankings, your search volume, and an honest 90-to-180-day path.",
  disclaimer:
    "Figures above are published benchmarks (Google / BrightLocal) and an illustrative projection. They are not past results claimed by OnwardCraft.",
  rankTrajectory: [
    { d: 'Day 0', pos: 14 }, { d: '30', pos: 11 }, { d: '60', pos: 8 },
    { d: '90', pos: 5 }, { d: '120', pos: 3 }, { d: '180', pos: 2 },
  ],
};

const BASE = {
  city: 'Los Angeles', state: 'California', stateAbbr: 'CA', metro: 'Greater Los Angeles',
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  founderNote: FOUNDER, founderName: 'The OnwardCraft team',
  localMarket: MARKET, areasServed: AREAS,
  whyUs: WHY, proof: PROOF,
};

export const losAngelesLocations = [
  // ─────────────────────────────────────────────────────────── LOCAL SEO ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'local-seo', service: 'Local SEO',
    titleTag: 'Los Angeles Local SEO Company | Win the Map Pack | OnwardCraft',
    metaDescription:
      'Search your service in your LA neighborhood and three businesses show up on the map. We get you into those three, in English and Spanish. Honest pricing, no lock-in, free audit.',
    eyebrow: 'Local SEO · Greater Los Angeles',
    h1: 'When your LA neighborhood searches for what you do, be the first name they find',
    h2Exact: 'Los Angeles Local SEO Company',
    heroSubhead:
      "Google shows three businesses on the map when someone searches \"near me.\" Everyone below them basically doesn't exist. In a metro this big, the win is owning your actual service area — Sherman Oaks, Torrance, the San Gabriel Valley, wherever your trucks really go — in the language your customers actually search.",
    primaryCta: 'Get my free Los Angeles audit',
    intro:
      "Los Angeles local SEO comes down to one thing: when a homeowner in Encino or East LA searches your service plus \"near me,\" are you one of the three businesses Google pins to the map? Most people tap one of those three and never scroll. LA is enormous and bilingual, so winning the whole metro is a fantasy — winning the neighborhoods you serve, in English and Spanish, is the real game. Here's how you do it.",
    aioQuestion: 'How do Los Angeles businesses rank higher in local search?',
    aioAnswer:
      "You rank by getting four things right: a Google Business Profile tuned to the exact services and neighborhoods you cover; consistent name, address, and phone listings across the web; a steady stream of real reviews; and local content tied to real LA neighborhoods. Because the metro is huge and roughly 40% of LA County households speak Spanish at home, the winners target specific service areas and serve customers in both languages.",
    problemHeading: "If your phone is quiet, it's usually one of these three",
    painPoints: [
      { title: 'Your competitors own the three spots on the map', body: "Search your own service plus \"near me\" right now. See those three businesses Google pins to the map? They get the overwhelming majority of the clicks. If you're not one of them, it almost doesn't matter how good your work is — most people never see your name. Getting into that top three for your real service area is usually the single highest-return move an LA business can make." },
      { title: "You're paying for leads you don't own", body: "Angi, Thumbtack, and HomeAdvisor sell the same LA homeowner to four contractors, then bill each of you to fight over them. It's a treadmill. Local SEO builds the opposite: a lead finds you, calls you, and nobody else got it. Over time you stop renting and start owning the pipeline." },
      { title: "You're targeting all of LA, so you rank for none of it", body: "This metro is too big for one generic \"Los Angeles\" listing. A homeowner in Pasadena isn't searching the same way as one in Long Beach, and a Spanish-speaking customer searches differently again. If you don't target real neighborhoods in both languages, Google can't tell which searches you should win, so you win nothing." },
    ],
    servicesHeading: 'What it actually takes to rank you',
    services: [
      { name: 'Google Business Profile', desc: "The biggest lever in the Map Pack. We dial in your categories, services, service area, photos, and posts so Google knows exactly which LA neighborhoods and searches you should win." },
      { name: 'Citations and NAP cleanup', desc: "Your name, address, and phone have to match everywhere Google looks. We fix the listings that conflict and build the ones you're missing." },
      { name: 'Reviews that keep coming', desc: "A simple system that turns finished jobs into a steady flow of reviews. It lifts your ranking and makes people pick up the phone." },
      { name: 'Neighborhood pages', desc: "Real pages for Sherman Oaks, Pasadena, Torrance, the San Gabriel Valley and the rest, so you rank for the neighborhood someone's actually searching, not just \"Los Angeles.\"" },
      { name: 'On-page and technical SEO', desc: "Titles, schema, internal links, mobile speed. The plumbing under the hood that lets everything else rank." },
      { name: 'Local link building', desc: "Mentions and links from LA sources Google trusts — local press, associations, partners. This is what separates page one from page two in a market this competitive." },
      { name: 'Bilingual local SEO', desc: "Roughly 40% of LA County households speak Spanish at home. We help you show up and convert in both languages, so you stop handing half the market to competitors who do.", featured: true },
      { name: 'AI search readiness', desc: "More \"near me\" research now starts in AI Overviews, ChatGPT, and Perplexity. We structure your content so those tools can read you and cite you.", featured: true },
    ],
    processName: 'How we work: the Local Lift Method',
    process: [
      { name: 'Audit and baseline', desc: "We find out where you actually rank today across your service areas and pin down which competitors are beating you in the Map Pack and why." },
      { name: 'Fix the foundation', desc: "Google Business Profile and NAP first, because they move the fastest. You usually see early lift here within a few weeks." },
      { name: 'Build trust signals', desc: "Citations and the review engine go live. These compound week over week, which is why local SEO rewards starting now over starting later." },
      { name: 'Add local content', desc: "Neighborhood and service-area pages across the Valley, the South Bay, and the San Gabriel Valley, in both languages where it makes sense." },
      { name: 'Report and expand', desc: "Plain-English reporting tied to calls and leads, not vanity rankings. Then we go take the next neighborhood." },
    ],
    pricing: {
      heading: 'Pricing you can actually see',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'Local Starter', price: '$750', cadence: '/mo', desc: 'One location, getting the Map Pack foundation right.', features: ['Google Business Profile optimization', 'Citation cleanup and core listings', 'One location or primary service area', 'Review system setup', 'Plain-English monthly report'] },
        { name: 'Local Growth', price: '$1,500', cadence: '/mo', desc: 'For businesses fighting across several LA areas.', features: ['Everything in Local Starter', 'Up to 5 priority keywords', 'Ongoing review generation', 'Neighborhood landing pages', 'On-page and technical SEO'], featured: true },
        { name: 'Local Authority', price: '$2,500', cadence: '/mo', desc: 'For contractors who want to own the map across their LA service area.', features: ['Everything in Local Growth', 'Local link building', 'Bilingual local targeting', 'Multi-area and service-area pages', 'AI search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does local SEO cost in Los Angeles?', a: "Most LA engagements land between $750 and $2,500 a month, depending on how many neighborhoods and keywords you're going after. Our tiers are right above this. No hidden fees, no long contract, and we confirm the exact scope in your free audit." },
      { q: 'How long until I show up in the Map Pack?', a: "Profile improvements can move in a few weeks. The competitive LA keywords usually take 90 to 180 days of steady work, because reviews and citations compound over time. Anyone promising you page one in 30 days in a market this competitive is selling you something." },
      { q: 'What makes Los Angeles local SEO different?', a: "Two things. The metro is huge, so chasing all of \"Los Angeles\" gets you nowhere — you have to target the specific neighborhoods your trucks actually serve, from the Valley to the South Bay. And it's deeply bilingual: about 40% of LA County households speak Spanish at home, so showing up in both languages is a real edge." },
      { q: 'Do I need a Spanish-language presence to rank in LA?', a: "For a lot of trades, yes. Roughly 48% of the metro is Hispanic or Latino and about 40% of LA County households speak Spanish at home. A large share of your customers search and call in Spanish, so a bilingual profile and content can open up demand your English-only competitors are missing entirely. We handle that the right way so it helps your rankings instead of confusing Google." },
      { q: 'Which areas do you cover?', a: "All of Greater Los Angeles and the surrounding cities — Sherman Oaks, Encino, Pasadena, Glendale, Burbank, Torrance, Long Beach, Santa Monica, East LA and more. We build genuine neighborhood pages instead of one generic LA page, because that's what actually ranks for \"[service] [neighborhood]\" searches." },
      { q: 'Do you work with contractors specifically?', a: "It's basically all we do. Roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors. We understand emergency calls, fire-season demand, and insurance jobs, and we build your local SEO around them." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "More and more \"near me\" research starts in AI now instead of classic search. We structure your content and schema so those engines can read, trust, and cite your business. It's quickly becoming as important as the Map Pack itself." },
      { q: 'Am I locked into a contract?', a: "No. We ask for an initial 90 days because that's roughly how long local SEO needs to show real movement. After that it's month-to-month. If we're not delivering, you walk, and the accountability stays on us." },
      { q: 'How does this get me off Angi and HomeAdvisor?', a: "Those platforms rent you shared leads and visibility you never keep. We build rankings, a Google profile, and a review base that send leads straight to you. Over time you lean on the lead brokers less because the work is coming to you directly." },
      { q: "What's in the free audit?", a: "A clear read on where you rank today across your service areas, what your Map Pack competitors are doing to beat you, the fixes that'll move you fastest, and a realistic 90-to-180-day plan with the numbers run for your business. No pitch deck. Just a straight diagnosis." },
    ],
  },

  // ───────────────────────────────────────────────────────── SEO SERVICES ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'seo-services', service: 'SEO Services',
    titleTag: 'Los Angeles SEO Company | Rank Higher, Get Leads | OnwardCraft',
    metaDescription:
      'Los Angeles SEO that ranks contractors on Google and brings in leads you own. Revenue-tied reporting, no lock-in, bilingual-ready for the LA market. Free LA SEO audit.',
    eyebrow: 'SEO Services · Greater Los Angeles',
    h1: 'Get your Los Angeles business to the top of Google and keep it there',
    h2Exact: 'Los Angeles SEO Company',
    heroSubhead:
      "Ads stop the second you stop paying. SEO is the opposite: rank once for what your LA customers search and the leads keep coming. We build that ranking across your real service area and tie every report to actual calls and jobs.",
    primaryCta: 'Get my free LA SEO audit',
    intro:
      "Los Angeles SEO comes down to one question: when someone searches what you do, are you on page one or page two? Page two might as well be page fifty. We get contractors ranking for the money keywords in one of the biggest, most competitive, most bilingual markets in the country — and we measure it in leads, not vanity traffic.",
    aioQuestion: 'How do Los Angeles businesses rank higher on Google?',
    aioAnswer:
      "They rank by fixing the technical foundation of the site, optimizing each page for the exact terms customers search, publishing genuinely useful local content, and earning links from trusted LA sources. In a metro this large and bilingual, ranking for specific neighborhood and service-area terms — and serving Spanish-speaking searchers where it fits — are two of the quickest ways to pull ahead.",
    problemHeading: "Three reasons your LA site isn't bringing in work",
    painPoints: [
      { title: "You're stuck on page two", body: "Almost nobody clicks past the first page of Google, and they rarely scroll far down it. If you're not in the top handful of results for what you sell, your site is basically invisible — no matter how good it looks." },
      { title: "You're renting traffic from Google Ads", body: "Ads can work, but the moment your card stops, the leads stop. And LA is one of the most expensive ad markets in the country. SEO builds an asset you own: rankings that keep producing leads months and years after the work is done, at a fraction of the per-lead cost." },
      { title: "You're competing for all of LA instead of your patch", body: "In a metro of 12.7 million people, broad \"Los Angeles\" terms are brutally competitive and half the time the searcher is nowhere near you. The contractors who win rank for specific neighborhoods and service areas — and reach the huge Spanish-speaking audience their competitors ignore." },
    ],
    servicesHeading: 'The SEO work that actually moves rankings',
    services: [
      { name: 'Technical SEO', desc: "Crawlability, site speed, Core Web Vitals, schema, and the under-the-hood fixes Google needs before it will rank you at all." },
      { name: 'On-page optimization', desc: "Every important page tuned for the exact terms your LA customers search — titles, headings, content, and internal links." },
      { name: 'Content that ranks', desc: "Genuinely useful pages and articles that answer what buyers search, earn links, and bring in leads on autopilot." },
      { name: 'Link building', desc: "Authority from real LA and industry sources. In a market this competitive, links are often what separate page one from page two." },
      { name: 'Local SEO & Google Business Profile', desc: "Map Pack optimization so you win the \"near me\" searches in your service area alongside your organic rankings." },
      { name: 'Revenue-tied reporting', desc: "We report on calls, forms, and leads — not just rankings and traffic — so you always know what your SEO is actually worth." },
      { name: 'Bilingual SEO', desc: "About 40% of LA County households speak Spanish at home. We help you rank and convert in both languages, opening demand your English-only competitors leave on the table.", featured: true },
      { name: 'AI search & GEO', desc: "We structure your content so AI Overviews, ChatGPT, and Perplexity surface and cite you, where a growing share of search now begins.", featured: true },
    ],
    processName: 'How we work: the OnwardCraft SEO method',
    process: [
      { name: 'Audit and strategy', desc: "We benchmark your rankings, traffic, and competitors, then build a roadmap around the keywords most likely to drive real LA leads in your service area." },
      { name: 'Fix the technical base', desc: "Speed, crawlability, schema, and mobile — the foundation everything else needs to rank." },
      { name: 'Optimize and create content', desc: "On-page work across your money pages plus new local content, including neighborhood terms and Spanish-language pages where they fit." },
      { name: 'Build authority', desc: "Links and citations from trusted LA and industry sources to push competitive keywords onto page one." },
      { name: 'Report and scale', desc: "Monthly reporting tied to leads, then we double down on what's working and expand into the next keyword set." },
    ],
    pricing: {
      heading: 'Transparent Los Angeles SEO pricing',
      note: 'Month-to-month after the first 90 days. No lock-in. Cancel whenever.',
      tiers: [
        { name: 'SEO Starter', price: '$900', cadence: '/mo', desc: 'For a focused site going after its core local keywords.', features: ['Technical SEO fixes', 'On-page optimization', 'Up to 5 target keywords', 'Google Business Profile', 'Monthly lead-tied report'] },
        { name: 'SEO Growth', price: '$1,800', cadence: '/mo', desc: 'For contractors competing across services and neighborhoods.', features: ['Everything in SEO Starter', 'Up to 12 target keywords', 'Monthly content', 'Link building', 'On-page + local SEO'], featured: true },
        { name: 'SEO Authority', price: '$3,000', cadence: '/mo', desc: 'For businesses that want to own LA search.', features: ['Everything in SEO Growth', 'Aggressive content + links', 'Bilingual SEO', 'eCommerce / multi-location', 'AI search / GEO optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does SEO cost in Los Angeles?', a: "Most LA SEO engagements run $900 to $3,000 a month, depending on how competitive your keywords are and how much content and link work you need. Our tiers are above, with no hidden fees and no long contract." },
      { q: 'How long does SEO take to work in Los Angeles?', a: "Expect early movement in 2 to 3 months and meaningful results in 4 to 6, faster on neighborhood terms and slower on the most competitive metro-wide LA keywords. SEO compounds, so the gains keep building the longer you run it." },
      { q: 'Is SEO better than Google Ads?', a: "They do different jobs. Ads buy instant traffic that stops when you stop paying, and LA is an expensive ad market. SEO is an asset you own that keeps producing leads at a lower cost per lead over time. Most contractors do best running SEO as the long-term engine and ads for short-term spikes." },
      { q: 'Should my LA SEO target Spanish-speaking customers?', a: "For most trades, yes. About 48% of the metro is Hispanic or Latino and roughly 40% of LA County households speak Spanish at home. Ranking and converting in both languages opens up a huge slice of demand that English-only competitors never see. We build that the right way so it strengthens your rankings instead of confusing Google." },
      { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content, link building, local/Map Pack SEO, and revenue-tied reporting. Higher tiers add bilingual and AI-search optimization. We confirm the exact scope in your free audit." },
      { q: 'Do you require a long-term contract?', a: "No. We ask for an initial 90 days because SEO needs that long to show real movement, then it's month-to-month. If we're not delivering, you leave." },
      { q: 'Will I show up in Google AI Overviews and ChatGPT?', a: "That's a growing part of what we optimize for. We structure your content and schema so AI engines can read, trust, and cite your business, not just classic search." },
      { q: 'Which areas around LA do you cover?', a: "All of Greater Los Angeles and the surrounding cities — Glendale, Pasadena, Burbank, Torrance, Long Beach, Santa Monica, Inglewood, Downey and more — with genuine local pages rather than one generic LA page." },
      { q: 'How do you get me off Angi and HomeAdvisor leads?', a: "By building rankings and a Google presence that send leads directly to you. The more you own your search visibility, the less you depend on paying brokers for shared leads." },
      { q: "What's in the free SEO audit?", a: "Where you rank today, what your competitors are doing to beat you, the highest-impact fixes, and a realistic timeline with the numbers modeled for your business. No pitch deck, just a diagnosis." },
    ],
  },

  // ─────────────────────────────────────────────────────────── WEB DESIGN ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'web-design', service: 'Web Design',
    titleTag: 'Los Angeles Web Design Company | Sites That Convert | OnwardCraft',
    metaDescription:
      'Los Angeles web design that turns visitors into booked jobs — fast, mobile-first, bilingual-ready sites built for contractors. Transparent pricing, you own it all. Free quote.',
    eyebrow: 'Web Design · Greater Los Angeles',
    h1: 'Los Angeles web design that turns visitors into booked jobs',
    h2Exact: 'Los Angeles Web Design Company',
    heroSubhead:
      "A pretty website that doesn't generate calls is a brochure. We build LA contractors fast, mobile-first sites engineered to turn visitors into booked work — and ready to serve the huge bilingual market other contractors ignore.",
    primaryCta: 'Get my free quote',
    intro:
      "Most Los Angeles contractor websites lose leads quietly: slow on a phone, buried call button, no clear offer, English-only in a city where 40% of households speak Spanish at home. Web design done right fixes all of that. We build sites that load fast, look like the professional you are, and turn visitors across the Valley, the South Bay, and the San Gabriel Valley into booked jobs.",
    aioQuestion: 'What makes a good contractor website in Los Angeles?',
    aioAnswer:
      "A good LA contractor website loads in under three seconds on a phone, puts the call button and a clear offer above the fold, proves trust with reviews and real project photos, and clearly names the neighborhoods you serve. Because the metro is huge and roughly 40% of LA County households speak Spanish at home, mobile speed, a clear service area, and bilingual options are what separate a site that books jobs from one that just sits there.",
    problemHeading: "Why your current site isn't bringing in work",
    painPoints: [
      { title: "It's a brochure, not a lead engine", body: "A lot of contractor sites just list services and sit there. No clear offer, no obvious next step, no reason to call you over the next guy. We design every page around one job: turning a visitor into a booked lead." },
      { title: "It's too slow on a phone", body: "Most of your LA visitors are on mobile, and they bounce if your site takes more than a few seconds to load. Slow sites also rank worse. We build fast, so you keep the visitor and the ranking." },
      { title: "It only speaks to half the market", body: "In a metro where about 40% of households speak Spanish at home, an English-only site quietly turns away a massive share of LA homeowners. We can build bilingual sites that meet customers in the language they search, so you stop handing that work to competitors." },
    ],
    servicesHeading: "What's in an OnwardCraft Los Angeles website",
    services: [
      { name: 'Custom design', desc: "No cookie-cutter templates. A site designed around your trade, your service area, and the jobs you actually want." },
      { name: 'Mobile-first build', desc: "Designed for the phone first, because that's where almost all of your LA traffic is. Fast, thumb-friendly, easy to call from." },
      { name: 'Conversion-focused UX', desc: "Clear offers, obvious call buttons, and lead forms placed where they actually get used. Every page has a next step." },
      { name: 'Copy that sells', desc: "Words that speak to anxious homeowners and book the job, not filler text that reads like everyone else." },
      { name: 'Local SEO foundation', desc: "Built from the ground up to rank — clean structure, schema, fast load, and neighborhood-ready pages." },
      { name: 'Speed & Core Web Vitals', desc: "Tuned to load fast and pass Google's performance checks, which protects both conversions and rankings." },
      { name: 'Bilingual-ready build', desc: "We can build your site to serve both English and Spanish speakers cleanly, so you reach the roughly 40% of LA County households that speak Spanish at home instead of losing them.", featured: true },
      { name: 'AI-search ready', desc: "Structured so AI Overviews and ChatGPT can read and recommend your business as more search shifts to AI.", featured: true },
    ],
    processName: 'How we build: the OnwardCraft process',
    process: [
      { name: 'Discovery and strategy', desc: "We learn your trade, your service area, your best jobs, and your competitors, then map the site around booking more of the work you want." },
      { name: 'Design', desc: "We design a custom, mobile-first layout built to convert — you see it and shape it before a line of code is written." },
      { name: 'Build and copy', desc: "We build it fast and write the copy that sells, with the call to action front and center on every page, in both languages where it fits." },
      { name: 'Launch', desc: "We launch cleanly with the SEO foundation, tracking, and speed dialed in from day one." },
      { name: 'Support and optimize', desc: "We keep it fast and current and tune it based on what's actually converting." },
    ],
    pricing: {
      heading: 'Transparent Los Angeles web design pricing',
      note: 'One-time build. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Starter Site', price: '$2,000', cadence: '', desc: 'A focused, high-converting site for a single-trade contractor.', features: ['Up to 5 custom pages', 'Mobile-first design', 'Lead forms + call buttons', 'Local SEO foundation', 'You own the site'] },
        { name: 'Growth Site', price: '$4,500', cadence: '', desc: 'A bigger site for established contractors with several services.', features: ['Up to 12 pages', 'Custom design + copywriting', 'Service + neighborhood pages', 'Speed & Core Web Vitals', 'Bilingual-ready'], featured: true },
        { name: 'Custom Build', price: '$8,000', cadence: '', desc: 'A full custom build for multi-service or multi-location businesses.', features: ['Fully custom design', 'Advanced SEO + schema', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Los Angeles?', a: "Most contractor websites with us run $2,000 to $8,000 as a one-time build, depending on page count and integrations. Our tiers are above — fixed price, no surprises, and you own the finished site." },
      { q: 'How long does it take to build?', a: "A focused site takes about 2 to 4 weeks; a larger custom build takes 4 to 8. We give you a firm timeline up front and keep you updated through each stage." },
      { q: 'Should my LA website be bilingual?', a: "For many trades, it's worth it. About 40% of LA County households speak Spanish at home, and an English-only site quietly turns those homeowners away. We can build a clean bilingual site that meets customers in the language they search, which opens up demand your competitors are ignoring." },
      { q: 'Will my new site actually rank on Google?', a: "We build every site on a local-SEO foundation — fast load, clean structure, schema, and neighborhood-ready pages. The build gets you ready to rank; pairing it with our SEO service is how you climb the competitive LA terms." },
      { q: 'Do I own the website?', a: "Completely. You own the site, the domain, and the content. No hostage situations, no platforms you can't leave." },
      { q: 'Will it work well on phones?', a: "We design mobile-first, because that's where almost all of your LA traffic comes from. Fast load, easy-to-tap call buttons, and forms built for a thumb." },
      { q: 'What platform do you build on?', a: "We pick the platform that fits your needs and that you can actually manage — usually WordPress or Webflow. We'll recommend the right fit in your free consult and explain the tradeoffs plainly." },
      { q: 'Do you offer ongoing support?', a: "Yes. Every build includes launch support, and we offer affordable monthly maintenance for updates, speed, and security after that." },
      { q: 'Am I locked into a contract?', a: "No. The build is a one-time project with a fixed price. Any ongoing maintenance or SEO is month-to-month — you can leave whenever." },
      { q: 'What do I get in the free quote?', a: "A clear look at what your current site is costing you in lost leads, what a high-converting LA site should include, and a fixed-price quote with a timeline. No pressure, just a plan." },
    ],
  },

  // ────────────────────────────────────────────────────── WEBSITE REDESIGN ──
  {
    ...BASE,
    citySlug: 'los-angeles', serviceSlug: 'website-redesign', service: 'Website Redesign',
    titleTag: 'Los Angeles Website Redesign | More Leads, Same SEO | OnwardCraft',
    metaDescription:
      'Redesign your Los Angeles website without losing rankings. Faster, mobile-first, bilingual-ready rebuilds that convert more visitors into booked jobs. Free LA audit.',
    eyebrow: 'Website Redesign · Greater Los Angeles',
    h1: 'Redesign your Los Angeles website without losing your rankings',
    h2Exact: 'Los Angeles Website Redesign Company',
    heroSubhead:
      "An outdated site costs you jobs every week — slow, hard to use on a phone, easy to ignore, and silent to the half of LA that searches in Spanish. We redesign LA contractor sites to convert more and load faster, and we migrate carefully so you keep every bit of ranking you've earned.",
    primaryCta: 'Get my free redesign audit',
    intro:
      "Most redesigns go one of two bad ways: the site looks better but converts the same, or it launches and the rankings vanish overnight. We do neither. We redesign Los Angeles contractor sites for speed and conversions, build them bilingual-ready for the LA market, and migrate with the redirects and SEO care that protect the traffic you already have.",
    aioQuestion: 'How do I redesign my website without losing SEO and traffic?',
    aioAnswer:
      "You protect SEO during a redesign by keeping your URL structure (or mapping 301 redirects for every changed page), preserving your existing content and metadata, migrating your schema, and testing everything on staging before launch. Done right, a redesign keeps your rankings and improves them, because the new site is faster, mobile-first, and better structured than the old one.",
    problemHeading: "Signs your LA site is overdue for a redesign",
    painPoints: [
      { title: "It looks dated and costs you trust", body: "For a high-ticket job, homeowners judge you by your site in seconds. An old, cluttered design quietly sends them to a competitor who looks more established — even when your work is better." },
      { title: "It's slow and hard to use on a phone", body: "If your site is clunky or slow on mobile, you're losing the majority of your LA visitors before they ever see your offer. A redesign built mobile-first wins them back." },
      { title: "It ignores the bilingual market", body: "If your site only speaks English in a metro where about 40% of households speak Spanish at home, you're invisible to a huge slice of demand. We rebuild for conversions and can add a clean bilingual experience so the new site reaches customers the old one never could." },
    ],
    servicesHeading: "What's in an OnwardCraft redesign",
    services: [
      { name: 'Redesign audit', desc: "We pinpoint exactly what's costing you leads and rankings today, so the redesign fixes real problems instead of just changing colors." },
      { name: 'SEO-safe migration', desc: "Redirects, metadata, and schema handled properly so you keep the rankings and traffic you've already earned." },
      { name: 'Conversion redesign', desc: "Clear offers, better call-to-action placement, and lead forms that actually get used. We design for booked jobs, not just looks." },
      { name: 'Speed overhaul', desc: "We rebuild for fast load and passing Core Web Vitals — better for both conversions and rankings." },
      { name: 'Mobile-first rebuild', desc: "Redesigned around the phone, where almost all your LA traffic lives." },
      { name: 'Brand refresh', desc: "A modern, trustworthy look that matches the quality of your work and the price of your jobs." },
      { name: 'Bilingual-ready rebuild', desc: "We can rebuild your site to serve both English and Spanish speakers cleanly, so the new site reaches the roughly 40% of LA County households that speak Spanish at home.", featured: true },
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
      heading: 'Transparent Los Angeles redesign pricing',
      note: 'One-time project. 50% to start, 50% at launch. You own everything. No lock-in.',
      tiers: [
        { name: 'Redesign Starter', price: '$2,500', cadence: '', desc: 'A focused redesign for a small contractor site.', features: ['Up to 5 pages rebuilt', 'Mobile-first redesign', 'SEO-safe migration', 'Conversion improvements', 'You own the site'] },
        { name: 'Redesign Growth', price: '$5,000', cadence: '', desc: 'A full redesign for an established contractor site.', features: ['Up to 12 pages', 'Custom design + copy refresh', 'Speed overhaul', 'Service + neighborhood pages', 'Bilingual-ready'], featured: true },
        { name: 'Full Rebuild', price: '$9,000', cadence: '', desc: 'A complete rebuild for multi-service or multi-location sites.', features: ['Full custom rebuild', 'Advanced SEO migration', 'Integrations & booking', 'High-traffic performance', 'AI-search optimization'] },
      ],
    },
    faqs: [
      { q: 'How much does a website redesign cost in Los Angeles?', a: "Most redesigns with us run $2,500 to $9,000 as a one-time project, depending on size and integrations. Fixed price, no surprises, and you own the result." },
      { q: 'Will I lose my Google rankings if I redesign?', a: "Not if it's done carefully, and that's exactly how we work. We map 301 redirects for every changed URL, preserve content and metadata, migrate your schema, and test on staging first. Done right, a redesign holds your rankings and usually improves them." },
      { q: 'How long does a redesign take?', a: "A focused redesign takes about 3 to 5 weeks; a larger rebuild takes 5 to 9. You get a firm timeline up front and updates at each stage." },
      { q: 'How do I know I need a redesign?', a: "If your site is slow on phones, looks dated, is hard to update, isn't bringing in leads, or only speaks English in a heavily bilingual market, it's costing you work. The free audit tells you plainly whether a redesign is worth it." },
      { q: 'Do you migrate my existing content?', a: "Yes. We carry over and improve your existing content, preserve what's ranking, and handle the technical migration so nothing important gets lost." },
      { q: 'Can the new site be bilingual?', a: "Yes, and in LA that's a real consideration. About 40% of LA County households speak Spanish at home, so a clean bilingual rebuild can reach customers your old English-only site never could. We build it so it helps rankings rather than confusing Google." },
      { q: 'Will the new site be mobile-friendly and fast?', a: "Yes. We rebuild mobile-first and tune for fast load and Core Web Vitals, which lifts both conversions and rankings." },
      { q: 'Do I own the redesigned site?', a: "Completely — the site, the domain, and the content. No platform lock-in." },
      { q: 'Am I locked into a contract?', a: "No. The redesign is a one-time project. Any ongoing maintenance or SEO is month-to-month." },
      { q: "What's in the free redesign audit?", a: "A clear read on what your current site is costing you in leads and rankings, what the redesign should fix, and a fixed-price quote with a timeline and a safe migration plan." },
    ],
  },
];

export const losAngelesCity = {
  citySlug: 'los-angeles', city: 'Los Angeles', state: 'California', stateAbbr: 'CA', metro: 'Greater Los Angeles',

  titleTag: 'Los Angeles Marketing for Contractors | Web, SEO & Leads | OnwardCraft',
  metaDescription:
    'Web design, SEO, and local SEO for Los Angeles contractors. Get found, get booked, and own your leads instead of renting them — bilingual-ready for the LA market. Free audit.',

  eyebrow: 'Los Angeles · Web Design, SEO & Lead Generation',
  h1: 'Marketing that gets Los Angeles contractors found and booked',
  h2Exact: 'Los Angeles Marketing Agency for Contractors',
  heroSubhead:
    "Websites, SEO, and local SEO built for LA's enormous, bilingual market. One team to get you ranking in the neighborhoods you serve, converting, and off the rented-lead treadmill.",
  heroProof: ['Built for the trades', 'Bilingual-ready', 'No lock-in contracts'],
  primaryCta: 'Get my free Los Angeles audit',

  intro:
    "If you run a contracting business in Los Angeles, you're fighting for attention in one of the biggest, most competitive, most bilingual markets in the country. Winning here takes three things working together: a site that converts, SEO that ranks you for what people search in the neighborhoods you serve, and local SEO that puts you in the Map Pack — in both English and Spanish where it counts. Here's how we help LA contractors do exactly that.",
  aioQuestion: 'How do Los Angeles contractors get more leads online?',
  aioAnswer:
    "LA contractors get more leads by combining a fast, mobile-first website with SEO that ranks them for high-intent searches and local SEO that wins the Google Map Pack in their service area. Because Greater Los Angeles is huge and roughly 40% of LA County households speak Spanish at home, the contractors who target real neighborhoods and serve both languages win the most work.",

  localMarket: MARKET,
  areasServed: AREAS,
  founderNote: FOUNDER,
  founderName: 'The OnwardCraft team',
  whyUs: WHY,

  services: [
    {
      service: 'Local SEO', serviceSlug: 'local-seo', tagline: 'Win the Map Pack',
      blurb: "Get into the top three businesses Google pins to the map when your LA neighborhood searches \"near me.\" The single highest-return move for most local businesses — targeted to the areas you actually serve, in both languages.",
    },
    {
      service: 'SEO Services', serviceSlug: 'seo-services', tagline: 'Rank higher, get leads',
      blurb: "Rank for the money keywords your customers actually search, build an asset you own instead of renting traffic from ads, and measure it in leads, not vanity traffic.",
    },
    {
      service: 'Web Design', serviceSlug: 'web-design', tagline: 'Sites that convert',
      blurb: "Fast, mobile-first, bilingual-ready websites engineered to turn visitors into booked jobs — not brochures that just sit there and ignore half the LA market.",
    },
    {
      service: 'Website Redesign', serviceSlug: 'website-redesign', tagline: 'More leads, no traffic loss',
      blurb: "Rebuild an outdated site for speed and conversions, and migrate it carefully so you keep every bit of ranking you've already earned.",
    },
  ],

  faqs: [
    { q: 'What marketing services do you offer in Los Angeles?', a: "Four core services for contractors: web design, website redesign, SEO, and local SEO. Most clients combine a high-converting website with SEO and local SEO so they rank, convert, and own their leads — targeted to the LA neighborhoods they actually serve." },
    { q: 'Do you work only with contractors?', a: "Almost entirely. We specialize in home-service trades — roofing, HVAC, plumbing, solar, electrical, restoration, and general contractors — so we understand emergency calls, fire-season demand, and insurance work." },
    { q: 'Why does the bilingual market matter for my marketing?', a: "Roughly 48% of Greater Los Angeles is Hispanic or Latino and about 40% of LA County households speak Spanish at home. A large share of your customers search, read, and call in Spanish. Showing up and converting in both languages opens up demand that English-only competitors never reach. We build that the right way so it strengthens your rankings." },
    { q: 'How much does it cost to work with you?', a: "Websites are one-time builds from $2,000 to $9,000. SEO and local SEO are month-to-month from $750 to $3,000, with no long contract. We confirm exact scope in your free audit." },
    { q: 'Which LA areas do you serve?', a: "All of Greater Los Angeles and the surrounding cities — Sherman Oaks, Encino, Pasadena, Glendale, Burbank, Torrance, Long Beach, Santa Monica, Inglewood, Downey and more. We target the specific neighborhoods your trucks actually serve, not one generic LA listing." },
    { q: 'Where should I start?', a: "Start with a free Los Angeles audit. We'll look at your website, your rankings, and your Map Pack presence, then tell you the one or two moves that will bring in the most work fastest. No pitch deck, just a plan." },
  ],
};
